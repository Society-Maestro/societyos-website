// SocietyOS Ambassador API worker — referral stats, goals, payout requests
// Deploy: npx wrangler deploy  (secrets: STRIPE_KEY via `npx wrangler secret put STRIPE_KEY`)

export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    const url = new URL(request.url);
    const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
      status, headers: { 'Content-Type': 'application/json', ...cors },
    });

    async function hashPassword(password, saltHex) {
      const enc = new TextEncoder();
      const salt = new Uint8Array(saltHex.match(/.{2}/g).map((h) => parseInt(h, 16)));
      const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
      const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 100000 }, key, 256);
      return [...new Uint8Array(bits)].map((b) => b.toString(16).padStart(2, '0')).join('');
    }

    // ---- POST /api/login  { code } ----
    // Codes are case-insensitive per Brandon directive (Oakley/oakley both work).
    const ROSTER = {
      'healthyself': { name: 'Healthy Self', tier: 'Gold Ambassador', nodes: 3, perRef: 40 },
      'moe':         { name: 'Donna Michelle Blazer', tier: 'Gold Referral Ambassador', nodes: 1, perRef: 40 },
      'oakley':      { name: 'Neil Wilkinson', tier: 'Gold Ambassador', nodes: 1, perRef: 40 },
      'ares':        { name: 'Ares', tier: 'Gold Ambassador', nodes: 1, perRef: 40 },
      'sam':         { name: 'Sam', tier: 'Gold Ambassador', nodes: 1, perRef: 40 },
      'meastro':     { name: 'SOSMaestro', tier: 'Admin Ambassador', nodes: 3, perRef: 40 },
    };

    if (url.pathname === '/api/login' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const code = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      const who = ROSTER[code];
      if (!who) return json({ ok: false, error: 'Code not recognized' }, 401);
      return json({ ok: true, code, ...who });
    }

    // ---- GET /api/stats?code=X ----
    if (url.pathname === '/api/stats' && request.method === 'GET') {
      const raw = (url.searchParams.get('code') || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      const who = ROSTER[raw];
      if (!who) return json({ ok: false, error: 'Code not recognized' }, 401);

      let sessions = [];
      try {
        const res = await fetch('https://api.stripe.com/v1/checkout/sessions?limit=100', {
          headers: { Authorization: `Bearer ${env.STRIPE_KEY}` },
        });
        const data = await res.json();
        sessions = (data.data || []).filter(s =>
          s.status === 'complete' &&
          s.client_reference_id &&
          s.client_reference_id.toLowerCase().startsWith(raw + '-'));
      } catch (e) {
        return json({ ok: false, error: 'Stripe lookup failed' }, 502);
      }

      let referrals = sessions.length;
      const refOverride = await env.AMB.get('refcount:' + raw);
      if (refOverride !== null && refOverride !== undefined && !isNaN(Number(refOverride))) referrals = Number(refOverride);
      const autoEarned = referrals * who.perRef;

      // Manual adjustment (admin-set) overrides the automated calculation when present
      let adjust = null;
      try { adjust = await env.AMB.get(`adjust:${raw}`, 'json'); } catch (e) {}
      const earned = adjust && typeof adjust.earned === 'number' ? adjust.earned : autoEarned;
      const payoutReq = await env.AMB.get(`payout:${raw}`, 'json');

      return json({
        ok: true,
        code: raw,
        name: who.name,
        tier: who.tier,
        nodes: who.nodes,
        perRef: who.perRef,
        referrals,
        earned,
        autoEarned,
        adjusted: !!(adjust && typeof adjust.earned === 'number'),
        adjustNote: adjust ? (adjust.note || '') : '',
        goal: 60,
        goalPct: Math.min(100, Math.round((referrals / 60) * 100)),
        toBreakeven: Math.max(0, 60 - referrals),
        atCapProjection: who.perRef * (who.tier.startsWith('Gold') && who.nodes === 0 ? 3000 : 1000),
        payout: payoutReq || null,
        paydetails: await env.AMB.get(`paydetails:${raw}`, 'json') || null,
        nodesRemaining: 75,
      });
    }

    // ---- POST /api/payout  { code, month } ----
    if (url.pathname === '/api/payout' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      const method = body.method === 'wire' ? 'Wire Transfer' : body.method === 'check' ? 'Certified Check' : 'Tangem Pay';
      const month = String(body.month || 'January 2027');
      const rec = {
        requestedAt: new Date().toISOString(),
        scheduledFor: month,
        method,
        status: 'scheduled',
      };
      // Early-attempt tracking: any payout request before the January window is logged
      // with attempt count so admin sees who tried to take payouts early.
      await env.AMB.put('earlyattempt:' + raw, JSON.stringify(rec));
      const attempts = await env.AMB.get('earlyattempts', 'json') || { count: 0, log: [] };
      attempts.count = (attempts.count || 0) + 1;
      attempts.log.unshift({
        code: raw, name: (ROSTER[raw] || {}).name || raw, method,
        at: rec.requestedAt,
      });
      attempts.log = attempts.log.slice(0, 200);
      await env.AMB.put('earlyattempts', JSON.stringify(attempts));
      await env.AMB.put(`payout:${raw}`, JSON.stringify(rec));
      return json({ ok: true, payout: rec });
    }

    // ---- GET /api/earlyattempts?code=meastro — who tried to take payouts early ----
    if (url.pathname === '/api/earlyattempts' && request.method === 'GET') {
      const raw = (url.searchParams.get('code') || '').trim().toLowerCase();
      if (raw !== 'meastro') return json({ ok: false, error: 'Forbidden' }, 403);
      const attempts = await env.AMB.get('earlyattempts', 'json') || { count: 0, log: [] };
      return json({ ok: true, totalAttempts: attempts.count, log: attempts.log });
    }

    // ---- POST /api/payout-details { code, method, fields{} } — where funds go ----
    if (url.pathname === '/api/payout-details' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      const method = body.method === 'wire' ? 'Wire Transfer' : body.method === 'check' ? 'Certified Check' : 'Tangem Pay';
      const fields = body.fields || {};
      const clean = {};
      for (const [k, v] of Object.entries(fields)) {
        clean[String(k).slice(0, 40)] = String(v).slice(0, 200);
      }
      const rec = { method, fields: clean, updatedAt: new Date().toISOString() };
      await env.AMB.put(`paydetails:${raw}`, JSON.stringify(rec));
      return json({ ok: true, paydetails: rec });
    }

    // ---- POST /api/payout/cancel { code } — ambassador cancels a scheduled payout ----
    if (url.pathname === '/api/payout/cancel' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      await env.AMB.delete(`payout:${raw}`);
      return json({ ok: true, cancelled: true });
    }

    // ---- Simple username + password login → ambassador dashboard ----
    async function verifyMemberPassword(username, password) {
      const clean = String(username).trim().toLowerCase().replace(/\s+/g, '');
      const key = `member:${clean}`;
      const raw = await env.LINKS.get(key);
      if (!raw) return null;
      const rec = JSON.parse(raw);
      if (!rec.pass_salt || !rec.pass_hash) return null;
      const hash = await hashPassword(password, rec.pass_salt);
      return hash === rec.pass_hash ? clean : null;
    }

    if (url.pathname === '/api/user-login' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const username = await verifyMemberPassword(body.username || '', body.password || '');
      if (!username) return json({ ok: false, error: 'Invalid username or password' }, 401);
      const code = await env.AMB.get(`ambuser:${username}`);
      if (!code) return json({ ok: false, error: 'No ambassador profile linked to this account' }, 404);
      const who = ROSTER[code];
      if (!who) return json({ ok: false, error: 'Unknown ambassador code' }, 404);
      return json({ ok: true, code, name: who.name, tier: who.tier });
    }

    // ---- Create credentials for an ambassador (by code or admin) ----
    if (url.pathname === '/api/create-credentials' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      const username = String(body.username || '').trim().toLowerCase();
      const password = String(body.password || '');
      const isAdmin = body.adminKey === env.ADMIN_KEY;
      if (!isAdmin && !ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      if (!username || username.length < 3 || !/^[a-z0-9._@-]+$/.test(username) || password.length < 6)
        return json({ ok: false, error: 'Username (3+ chars, letters/numbers) and 6+ char password required' }, 400);
      const key = `member:${username}`;
      const existing = await env.LINKS.get(key);
      if (existing && !isAdmin) return json({ ok: false, error: 'username already taken' }, 409);
      const buf = new Uint8Array(16);
      crypto.getRandomValues(buf);
      const salt = [...buf].map((b) => b.toString(16).padStart(2, "0")).join("");
      const hash = await hashPassword(password, salt);
      const rec = existing ? JSON.parse(existing) : { created: Date.now() };
      rec.pass_salt = salt; rec.pass_hash = hash;
      await env.LINKS.put(key, JSON.stringify(rec));
      // link username → ambassador code (one code per username; admin can re-link)
      const current = await env.AMB.get(`ambuser:${username}`);
      if (!current || isAdmin) await env.AMB.put(`ambuser:${username}`, raw);
      return json({ ok: true, username, code: raw });
    }

    // ---- POST /api/scan { code, type } — QR/link scan + Carbon-signup tracking ----
    if (url.pathname === '/api/scan' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false }, 401);
      const type = body.type === 'carbon-signup' ? 'carbon-signup' : 'scan';
      const cnt = ((await env.AMB.get(type + ':' + raw)) || 0) + 1;
      await env.AMB.put(type + ':' + raw, cnt);
      return json({ ok: true, type, count: cnt });
    }

    // ---- GET /api/nodes — public NODE counter ----
    if (url.pathname === '/api/nodes' && request.method === 'GET') {
      let n = await env.AMB.get('nodes', 'json');
      if (!n) n = { claimed: 25, total: 100 };
      return json({ ok: true, claimed: n.claimed, total: n.total, remaining: Math.max(0, n.total - n.claimed) });
    }

    // ---- POST /api/admin/nodes  { adminKey, claimed, total } ----
    if (url.pathname === '/api/admin/nodes' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      if (body.adminKey !== env.ADMIN_KEY) return json({ ok: false, error: 'Forbidden' }, 403);
      const claimed = Number(body.claimed), total = Number(body.total || 100);
      if (!Number.isFinite(claimed) || claimed < 0 || claimed > total) return json({ ok: false, error: 'Invalid count' }, 400);
      const rec = { claimed, total };
      await env.AMB.put('nodes', JSON.stringify(rec));
      return json({ ok: true, nodes: rec });
    }

    // ---- POST /api/admin/auth { username, password } → admin session key ----
    if (url.pathname === '/api/admin/auth' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const username = await verifyMemberPassword(body.username || '', body.password || '');
      if (!username || username !== String(env.ADMIN_USER || '').trim().toLowerCase())
        return json({ ok: false, error: 'Invalid admin credentials' }, 401);
      return json({ ok: true, adminKey: env.ADMIN_KEY });
    }

    // ---- POST /api/admin/setrefs { adminKey, code, referrals } — referral count override ----
    if (url.pathname === '/api/admin/setrefs' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      if (body.adminKey !== env.ADMIN_KEY) return json({ ok: false, error: 'Forbidden' }, 403);
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      const refs = Number(body.referrals);
      if (!Number.isFinite(refs) || refs < 0) return json({ ok: false, error: 'Invalid count' }, 400);
      await env.AMB.put('refcount:' + raw, refs);
      return json({ ok: true, code: raw, referrals: refs });
    }

    // ---- GET /api/overview?code=meastro — your Ambassador view of ALL accounts ----
    if (url.pathname === '/api/overview' && request.method === 'GET') {
      const raw = (url.searchParams.get('code') || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (raw !== 'meastro') return json({ ok: false, error: 'Forbidden' }, 403);
      const list = [];
      for (const [code, who] of Object.entries(ROSTER)) {
        let refs = 0;
        try {
          const csRes = await fetch('https://api.stripe.com/v1/checkout/sessions?limit=100', { headers: { Authorization: `Bearer ${env.STRIPE_KEY}` } });
          const csData = await csRes.json();
          refs = (csData.data || []).filter(s => s.status === 'complete' && s.client_reference_id && s.client_reference_id.toLowerCase().startsWith(code + '-')).length;
        } catch (e) {}
        const refOverride = await env.AMB.get('refcount:' + code);
        if (refOverride !== null && refOverride !== undefined && !isNaN(Number(refOverride))) refs = Number(refOverride);
        const adjust = await env.AMB.get('adjust:' + code, 'json');
        const earned = adjust && typeof adjust.earned === 'number' ? adjust.earned : refs * who.perRef;
        const payout = await env.AMB.get('payout:' + code, 'json');
        const paydetails = await env.AMB.get('paydetails:' + code, 'json');
        list.push({ code, name: who.name, tier: who.tier, nodes: who.nodes, referrals: refs,
          earned, adjusted: !!(adjust && typeof adjust.earned === 'number'),
          payout: payout || null, paydetails: paydetails || null,
          scans: Number(await env.AMB.get('scan:' + code)) || 0,
          carbonSignups: Number(await env.AMB.get('carbon-signup:' + code)) || 0 });
      }
      // Full Socialite ledger — every referred signup, per code (SOSMaestro eyes only)
      const socialites = [];
      try {
        const csRes2 = await fetch('https://api.stripe.com/v1/checkout/sessions?limit=100', {
          headers: { Authorization: `Bearer ${env.STRIPE_KEY}` },
        });
        const cs2 = await csRes2.json();
        const PRICE_TIER = {
          '9B6cN475M3ExglM5Kk53O06': 'Carbon Pro', '4gM6oGfCi2AtedEc8I53O07': 'Carbon Pro (Special)',
          '28EfZg89Q3Ex2uW5Kk53O08': 'Onyx', '00waEW2Pwa2Vb1s5Kk53O09': 'Gold',
        };
        const tierOf = sess => {
          const m = Object.keys(PRICE_TIER).find(k => (sess.checkout_url || '').includes(k));
          return m ? PRICE_TIER[m] : 'Membership';
        };
        for (const s of (cs2.data || [])) {
          if (s.status !== 'complete' || !s.client_reference_id) continue;
          socialites.push({
            code: s.client_reference_id.split('-')[0].toLowerCase(),
            email: (s.customer_details || {}).email || '—',
            tier: tierOf(s),
            date: s.created ? new Date(s.created).toISOString().slice(0, 10) : '—',
          });
        }
      } catch (e) {}
      return json({ ok: true, ambassadors: list, socialites });
    }

    // ---- POST /api/manage { code: meastro, target, earned?, referrals? } — update any account ----
    if (url.pathname === '/api/manage' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const by = String(body.code || '').trim().toLowerCase();
      if (by !== 'meastro') return json({ ok: false, error: 'Forbidden' }, 403);
      const target = String(body.target || '').trim().toLowerCase();
      if (!ROSTER[target]) return json({ ok: false, error: 'Unknown ambassador' }, 401);
      if (body.earned !== undefined && body.earned !== null && body.earned !== '') {
        const earned = Number(body.earned);
        if (!Number.isFinite(earned) || earned < 0) return json({ ok: false, error: 'Invalid amount' }, 400);
        await env.AMB.put('adjust:' + target, JSON.stringify({ earned, note: 'Updated by SOSMaestro', setAt: new Date().toISOString() }));
      }
      if (body.referrals !== undefined && body.referrals !== null && body.referrals !== '') {
        const refs = Number(body.referrals);
        if (!Number.isFinite(refs) || refs < 0) return json({ ok: false, error: 'Invalid count' }, 400);
        await env.AMB.put('refcount:' + target, refs);
      }
      return json({ ok: true });
    }

    // ---- GET /api/admin/members?adminKey= — inspect member records ----
    if (url.pathname === '/api/admin/members' && request.method === 'GET') {
      if (url.searchParams.get('adminKey') !== env.ADMIN_KEY) return json({ ok: false, error: 'Forbidden' }, 403);
      const out = [];
      let cursor = undefined;
      do {
        const page = await env.LINKS.list({ prefix: 'member:', cursor });
        for (const k of page.keys) {
          const raw = await env.LINKS.get(k.name);
          if (!raw) continue;
          const rec = JSON.parse(raw);
          out.push({
            key: k.name,
            username: k.name.slice('member:'.length),
            created: rec.created ? new Date(rec.created).toISOString() : null,
            profile: rec.profile || null,
            hasPass: !!(rec.pass_salt && rec.pass_hash),
          });
        }
        cursor = page.list_complete ? undefined : page.cursor;
      } while (cursor);
      // per-code tier breakdown from Stripe checkout sessions (client_reference_id = code-timestamp)
      let tierByCode = {};
      try {
        const csRes = await fetch('https://api.stripe.com/v1/checkout/sessions?limit=100', {
          headers: { Authorization: `Bearer ${env.STRIPE_KEY}` },
        });
        const csData = await csRes.json();
        const PRICE_TIER = {
          '9B6cN475M3ExglM5Kk53O06': 'Carbon Pro', '4gM6oGfCi2AtedEc8I53O07': 'Carbon Pro (Special)',
          '28EfZg89Q3Ex2uW5Kk53O08': 'Onyx', '00waEW2Pwa2Vb1s5Kk53O09': 'Gold',
        };
        const linkTier = u => Object.keys(PRICE_TIER).find(k => u && u.includes(k));
        for (const s of (csData.data || [])) {
          if (s.status !== 'complete' || !s.client_reference_id) continue;
          const code = s.client_reference_id.split('-')[0].toLowerCase();
          const tier = PRICE_TIER[s.checkout_url ? linkTier(s.checkout_url) : ''] || 'Membership';
          (tierByCode[code] = tierByCode[code] || { total: 0 });
          tierByCode[code][tier] = (tierByCode[code][tier] || 0) + 1;
          tierByCode[code].total += 1;
        }
      } catch (e) {}

      // attached ambassador data
      for (const m of out) {
        const code = (await env.AMB.get(`ambuser:${m.username}`)) || null;
        m.ambassadorCode = code;
        if (code) {
          // per-code analytics: QR scans, carbon signups, tier signups from Stripe
          m.scans = Number(await env.AMB.get('scan:' + code)) || 0;
          m.carbonSignups = Number(await env.AMB.get('carbon-signup:' + code)) || 0;
          m.tierSignups = tierByCode[code] || null;
          m.refcount = await env.AMB.get('refcount:' + code);
        }
        if (code) {
          m.adjust = await env.AMB.get(`adjust:${code}`, 'json') || null;
          m.payout = await env.AMB.get(`payout:${code}`, 'json') || null;
          m.paydetails = await env.AMB.get(`paydetails:${code}`, 'json') || null;
        }
      }
      return json({ ok: true, members: out });
    }

    // ---- POST /api/admin/setpass { adminKey, username, password } — admin override ----
    if (url.pathname === '/api/admin/setpass' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      if (body.adminKey !== env.ADMIN_KEY) return json({ ok: false, error: 'Forbidden' }, 403);
      const username = String(body.username || '').trim().toLowerCase();
      const password = String(body.password || '');
      if (!username || password.length < 6) return json({ ok: false, error: 'username and 6+ char password required' }, 400);
      const key = `member:${username}`;
      const raw = await env.LINKS.get(key);
      if (!raw) return json({ ok: false, error: 'member not found' }, 404);
      const rec = JSON.parse(raw);
      const buf = new Uint8Array(16);
      crypto.getRandomValues(buf);
      const salt = [...buf].map((b) => b.toString(16).padStart(2, "0")).join("");
      rec.pass_salt = salt;
      rec.pass_hash = await hashPassword(password, salt);
      rec.passResetAt = Date.now();
      await env.LINKS.put(key, JSON.stringify(rec));
      return json({ ok: true, username, resetAt: new Date(rec.passResetAt).toISOString() });
    }

    // ---- POST /api/admin/adjust  { adminKey, code, earned, note } ----
    // Manual override of an Ambassador's earned rewards. Automation (referrals × rate) remains the default;
    // admin sets earned explicitly for external agreements. earned: null clears the override.
    if (url.pathname === '/api/admin/adjust' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      if (body.adminKey !== env.ADMIN_KEY) return json({ ok: false, error: 'Forbidden' }, 403);
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      if (body.earned === null || body.earned === undefined || body.earned === '') {
        await env.AMB.delete(`adjust:${raw}`);
        return json({ ok: true, cleared: true });
      }
      const earned = Number(body.earned);
      if (!Number.isFinite(earned) || earned < 0) return json({ ok: false, error: 'Invalid amount' }, 400);
      const rec = { earned, note: String(body.note || ''), setAt: new Date().toISOString() };
      await env.AMB.put(`adjust:${raw}`, JSON.stringify(rec));
      return json({ ok: true, adjust: rec });
    }

    return json({ ok: false, error: 'Not found' }, 404);
  },
};
