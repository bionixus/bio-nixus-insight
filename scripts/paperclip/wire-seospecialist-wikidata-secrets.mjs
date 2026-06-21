#!/usr/bin/env node
/**
 * Bind WIKIDATA_* Paperclip secrets to SEOSpecialist adapterConfig.env.
 *
 * BOARD ONLY — requires secrets list + agent update permissions.
 *
 * Auth (pick one):
 *   - Logged-in Paperclip board session via `paperclipai connect board`
 *   - PAPERCLIP_API_URL + board bearer token in PAPERCLIP_BOARD_TOKEN
 *
 * Usage:
 *   node scripts/paperclip/wire-seospecialist-wikidata-secrets.mjs
 *   node scripts/paperclip/wire-seospecialist-wikidata-secrets.mjs --dry-run
 *   node scripts/paperclip/wire-seospecialist-wikidata-secrets.mjs --clear
 */

const COMPANY_ID = 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const SEO_AGENT_ID = '290f615c-674c-4fdc-856f-e1d4bc7c3539';

const WIKIDATA_KEYS = ['WIKIDATA_USERNAME', 'WIKIDATA_PASSWORD'];

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const clear = args.has('--clear');

const apiBase = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const token = process.env.PAPERCLIP_BOARD_TOKEN || process.env.PAPERCLIP_API_KEY;

if (!token) {
  console.error('Missing auth: set PAPERCLIP_BOARD_TOKEN (board) or run from board-connected shell.');
  process.exit(1);
}

async function api(path, options = {}) {
  const res = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  if (!res.ok) {
    const msg = typeof body === 'object' && body?.error ? body.error : text;
    throw new Error(`${options.method || 'GET'} ${path} → ${res.status}: ${msg}`);
  }
  return body;
}

async function main() {
  if (clear) {
    const payload = { adapterConfig: { env: {} }, replaceAdapterConfig: false };
    if (dryRun) {
      console.log('[dry-run] Would PATCH SEOSpecialist env to {}');
      return;
    }
    const agent = await api(`/api/agents/${SEO_AGENT_ID}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
    console.log('Cleared SEOSpecialist env bindings.', agent.id);
    return;
  }

  const secrets = await api(`/api/companies/${COMPANY_ID}/secrets`);
  const list = Array.isArray(secrets) ? secrets : secrets.items || secrets.secrets || [];
  const byKey = new Map(list.map((s) => [s.key, s]));

  const missing = WIKIDATA_KEYS.filter((k) => !byKey.has(k));
  if (missing.length > 0) {
    console.error(
      'Missing required secrets. Add in Company Settings → Secrets:',
      missing.join(', '),
    );
    process.exit(1);
  }

  const env = {};
  for (const key of WIKIDATA_KEYS) {
    env[key] = { type: 'secret_ref', secretId: byKey.get(key).id, version: 'latest' };
  }

  const payload = {
    adapterConfig: { env },
    replaceAdapterConfig: false,
  };

  if (dryRun) {
    console.log('[dry-run] Would bind env keys:', WIKIDATA_KEYS.join(', '));
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const agent = await api(`/api/agents/${SEO_AGENT_ID}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });

  const bound = Object.keys(asRecord(agent.adapterConfig)?.env || {});
  console.log('SEOSpecialist Wikidata secret wiring complete.');
  console.log('Bound env keys:', bound.sort().join(', ') || '(none)');
}

function asRecord(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
