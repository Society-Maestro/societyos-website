/**
 * SocietyOS Device Link — pairing API (Cloudflare Worker + KV)
 *
 * Flow:
 *   1. New device (TV/tablet) opens /link — page shows QR: https://societyos.world/approve?c=<CODE>
 *   2. Member's signed-in phone opens the approve page, taps APPROVE
 *   3. Device polls GET /api/link?code=<CODE> → gets { status: "linked" }
 *
 * Endpoints:
 *   POST /api/link/create            → { code }          (device requests a pairing code)
 *   POST /api/link/approve           → { ok }            (phone approves with code + member token)
 *   GET  /api/link?code=XXXX         → { status }        (device polls)
 *   POST /api/link/register          → { ok }            (create member: username + password; PBKDF2 hash)
 *   POST /api/link/login             → { member }        (sign in with username + password)
 *
 * KV binding: LINKS
 * Members stored as member:<username> → { pass_salt, pass_hash, created }
 * Sessions stored as session:<token> → { username, created } (30-day TTL)
 */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const CODE_TTL = 300; // seconds

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

function makeCode() {
  // 6-char unambiguous code (no 0/O/1/I)
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let c = "";
  const buf = new Uint8Array(6);
  crypto.getRandomValues(buf);
  for (const b of buf) c += alphabet[b % alphabet.length];
  return c;
}

function makeToken() {
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return [...buf].map((b) => b.toString(16).padStart(2, "0")).join("");
}

const SESSION_TTL = 60 * 60 * 24 * 30; // 30 days

// PBKDF2 password hashing via WebCrypto
async function hashPassword(password, saltHex) {
  const enc = new TextEncoder();
  const salt = new Uint8Array(saltHex.match(/.{2}/g).map((h) => parseInt(h, 16)));
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations: 100000 }, key, 256);
  return [...new Uint8Array(bits)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function createMember(env, username, password, profile) {
  const key = `member:${username.toLowerCase()}`;
  const existing = await env.LINKS.get(key);
  if (existing) return { error: "username already registered" };
  const buf = new Uint8Array(16);
  crypto.getRandomValues(buf);
  const salt = [...buf].map((b) => b.toString(16).padStart(2, "0")).join("");
  const hash = await hashPassword(password, salt);
  const rec = { pass_salt: salt, pass_hash: hash, created: Date.now() };
  if (profile && (profile.name || profile.email)) rec.profile = profile;
  await env.LINKS.put(key, JSON.stringify(rec));
  return { ok: true };
}

async function verifyMember(env, username, password) {
  const key = `member:${username.toLowerCase()}`;
  const raw = await env.LINKS.get(key);
  if (!raw) return null;
  const rec = JSON.parse(raw);
  const hash = await hashPassword(password, rec.pass_salt);
  if (hash !== rec.pass_hash) return null;
  return { username };
}

async function createSession(env, username) {
  const token = makeToken();
  await env.LINKS.put(`session:${token}`, JSON.stringify({ username, created: Date.now() }), {
    expirationTtl: SESSION_TTL,
  });
  return token;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });

    // Device: create a pairing code
    if (request.method === "POST" && url.pathname === "/api/link/create") {
      const code = makeCode();
      await env.LINKS.put(`code:${code}`, JSON.stringify({ status: "pending", created: Date.now() }), {
        expirationTtl: CODE_TTL,
      });
      return json({ code, expires_in: CODE_TTL });
    }

    // Phone: approve (member must already hold a valid session — Silo/Xtream token)
    if (request.method === "POST" && url.pathname === "/api/link/approve") {
      const body = await request.json().catch(() => ({}));
      const { code, member } = body || {};
      if (!code || !member) return json({ error: "code and member required" }, 400);

      const key = `code:${String(code).toUpperCase()}`;
      const raw = await env.LINKS.get(key);
      if (!raw) return json({ error: "unknown or expired code" }, 404);

      const record = JSON.parse(raw);
      record.status = "linked";
      record.member = member; // { username, token } — stored ONLY until device picks it up
      record.linkedAt = Date.now();
      await env.LINKS.put(key, JSON.stringify(record), { expirationTtl: 120 });
      return json({ ok: true });
    }

    // Device: poll status — one-time read (member payload returned once, then deleted)
    if (request.method === "GET" && url.pathname === "/api/link") {
      const code = url.searchParams.get("code");
      if (!code) return json({ error: "code required" }, 400);
      const key = `code:${String(code).toUpperCase()}`;
      const raw = await env.LINKS.get(key);
      if (!raw) return json({ status: "expired" });
      const record = JSON.parse(raw);
      if (record.status === "linked") {
        const member = record.member;
        await env.LINKS.delete(key); // one-time handoff
        return json({ status: "linked", member });
      }
      return json({ status: record.status });
    }

    // Member: register (username + password)
    if (request.method === "POST" && url.pathname === "/api/link/register") {
      const body = await request.json().catch(() => ({}));
      const { username, password } = body || {};
      if (!username || !password || String(password).length < 6)
        return json({ error: "username and password (6+ chars) required" }, 400);
      const r = await createMember(env, String(username).trim(), String(password), { name: body.name || '', email: body.email || '' });
      if (r.error) return json(r, 409);
      const token = await createSession(env, String(username).trim());
      return json({ ok: true, token, member: { username: String(username).trim() } });
    }

    // Member: sign in
    if (request.method === "POST" && url.pathname === "/api/link/login") {
      const body = await request.json().catch(() => ({}));
      const { username, password } = body || {};
      if (!username || !password) return json({ error: "username and password required" }, 400);
      const member = await verifyMember(env, String(username).trim(), String(password));
      if (!member) return json({ error: "invalid username or password" }, 401);
      const token = await createSession(env, member.username);
      return json({ ok: true, token, member });
    }

    return json({ error: "not found" }, 404);
  },
};
