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
 *
 * KV binding: LINKS  (namespace must be created and bound in wrangler.toml / dashboard)
 * TTL: codes expire in 5 minutes.
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

    return json({ error: "not found" }, 404);
  },
};
