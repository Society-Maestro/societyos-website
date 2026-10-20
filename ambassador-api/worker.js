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

    // ---- POST /api/login  { code } ----
    // Codes are case-insensitive per Brandon directive (Oakley/oakley both work).
    const ROSTER = {
      'healthyself': { name: 'Healthy Self', tier: 'Gold Ambassador', nodes: 3, perRef: 40 },
      'moe':         { name: 'Donna Michelle Blazier', tier: 'Gold Referral Ambassador', nodes: 0, perRef: 40 },
      'oakley':      { name: 'Neil Wilkinson', tier: 'Gold Ambassador', nodes: 0, perRef: 40 },
      'founder':     { name: 'Founder', tier: 'Ambassador', nodes: 0, perRef: 40 },
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

      const referrals = sessions.length;
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
        nodesRemaining: 75,
      });
    }

    // ---- POST /api/payout  { code, month } ----
    if (url.pathname === '/api/payout' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const raw = String(body.code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
      if (!ROSTER[raw]) return json({ ok: false, error: 'Code not recognized' }, 401);
      const month = String(body.month || 'January 2027');
      const rec = {
        requestedAt: new Date().toISOString(),
        scheduledFor: month,
        status: 'scheduled',
      };
      await env.AMB.put(`payout:${raw}`, JSON.stringify(rec));
      return json({ ok: true, payout: rec });
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
