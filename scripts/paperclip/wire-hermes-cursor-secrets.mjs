#!/usr/bin/env node
/**
 * Bind Cursor/Hermes Paperclip secrets to HermesEngineer adapterConfig.env.
 *
 * BOARD ONLY — requires secrets list + agent update permissions.
 *
 * Auth (pick one):
 *   - Logged-in Paperclip board session via `paperclipai connect board`
 *   - PAPERCLIP_API_URL + board bearer token in PAPERCLIP_BOARD_TOKEN
 *
 * Usage:
 *   node scripts/paperclip/wire-hermes-cursor-secrets.mjs
 *   node scripts/paperclip/wire-hermes-cursor-secrets.mjs --dry-run
 *   node scripts/paperclip/wire-hermes-cursor-secrets.mjs --clear
 */

const COMPANY_ID = 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const HERMES_ENGINEER_ID = '8058d23d-12f9-4e8b-9149-f47e82edcede';

const REQUIRED_SECRET_KEYS = ['CURSOR_API_KEY'];
const OPTIONAL_SECRET_KEYS = ['OPENROUTER_API_KEY'];
const PLAIN_ENV_KEYS = ['DEFAULT_REPO'];

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

function buildEnv(byKey, currentEnv) {
  const bindings = [];
  
  // Required secrets
  for (const key of REQUIRED_SECRET_KEYS) {
    if (byKey.has(key)) {
      bindings.push({ envKey: key, secretKey: key, type: 'secret_ref' });
    }
  }
  
  // Optional secrets
  for (const key of OPTIONAL_SECRET_KEYS) {
    if (byKey.has(key)) {
      bindings.push({ envKey: key, secretKey: key, type: 'secret_ref' });
    }
  }
  
  if (!REQUIRED_SECRET_KEYS.every((k) => byKey.has(k))) {
    return null;
  }
  
  const env = {};
  
  // Add secret references
  for (const { envKey, secretKey } of bindings.filter(b => b.type === 'secret_ref')) {
    env[envKey] = { type: 'secret_ref', secretId: byKey.get(secretKey).id, version: 'latest' };
  }
  
  // Preserve plain env values already set (like DEFAULT_REPO)
  for (const key of PLAIN_ENV_KEYS) {
    if (currentEnv && currentEnv[key]) {
      env[key] = currentEnv[key];
    }
  }
  
  return env;
}

async function patchAgent(agentId, env) {
  const payload = { adapterConfig: { env }, replaceAdapterConfig: false };
  if (dryRun) {
    console.log(`[dry-run] Would PATCH agent ${agentId} env keys:`, Object.keys(env).join(', '));
    return;
  }
  await api(`/api/agents/${agentId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
  console.log(`Bound Cursor/Hermes secrets on agent ${agentId}:`, Object.keys(env).join(', '));
}

async function main() {
  if (clear) {
    const payload = { adapterConfig: { env: {} }, replaceAdapterConfig: false };
    if (dryRun) {
      console.log(`[dry-run] Would clear env on ${HERMES_ENGINEER_ID}`);
      return;
    }
    await api(`/api/agents/${HERMES_ENGINEER_ID}`, { 
      method: 'PATCH', 
      body: JSON.stringify(payload) 
    });
    console.log('Cleared env on', HERMES_ENGINEER_ID);
    return;
  }

  // Fetch current agent config to preserve plain env values
  const agent = await api(`/api/agents/${HERMES_ENGINEER_ID}`);
  const currentEnv = agent?.adapterConfig?.env || {};

  const secrets = await api(`/api/companies/${COMPANY_ID}/secrets`);
  const list = Array.isArray(secrets) ? secrets : secrets.items || secrets.secrets || [];
  const byKey = new Map(list.map((s) => [String(s.key).toUpperCase(), s]));

  const env = buildEnv(byKey, currentEnv);
  if (!env) {
    const missing = REQUIRED_SECRET_KEYS.filter((k) => !byKey.has(k));
    console.error(
      'Missing required Cursor secrets. Add in Company Settings → Secrets:',
      missing.join(', '),
    );
    console.error('After adding CURSOR_API_KEY secret, run this script to wire it.');
    process.exit(1);
  }

  if (dryRun) {
    console.log('[dry-run] Would bind env keys:', Object.keys(env).join(', '));
    console.log('[dry-run] Target agent:', HERMES_ENGINEER_ID);
    return;
  }

  await patchAgent(HERMES_ENGINEER_ID, env);
  console.log('Cursor/Hermes secret wiring complete.');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
