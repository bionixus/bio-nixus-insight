#!/usr/bin/env node
/**
 * Bind GHL_* Paperclip secrets to CMO and HermesEngineer adapterConfig.env.
 *
 * BOARD ONLY — requires secrets list + agent update permissions.
 *
 * Auth (pick one):
 *   - Logged-in Paperclip board session via `paperclipai connect board`
 *   - PAPERCLIP_API_URL + board bearer token in PAPERCLIP_BOARD_TOKEN
 *
 * Usage:
 *   node scripts/paperclip/wire-ghl-secrets.mjs
 *   node scripts/paperclip/wire-ghl-secrets.mjs --dry-run
 *   node scripts/paperclip/wire-ghl-secrets.mjs --clear
 *   node scripts/paperclip/wire-ghl-secrets.mjs --agent cmo
 */

const COMPANY_ID = 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const CMO_AGENT_ID = 'e54bb580-6e38-40d7-b739-a9a808faa48f';
const HERMES_ENGINEER_ID = '8058d23d-12f9-4e8b-9149-f47e82edcede';

const GHL_KEYS = ['GHL_API_KEY', 'GHL_LOCATION_ID'];
const OPTIONAL_GHL_KEYS = ['GHL_EMAIL', 'GHL_PASSWORD'];

const AGENT_TARGETS = {
  cmo: [CMO_AGENT_ID],
  hermes: [HERMES_ENGINEER_ID],
  all: [CMO_AGENT_ID, HERMES_ENGINEER_ID],
};

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const clear = args.has('--clear');
const agentArg = process.argv.find((a, i) => process.argv[i - 1] === '--agent');
const agentScope = agentArg && AGENT_TARGETS[agentArg] ? agentArg : 'all';

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

function buildEnv(byKey) {
  const bindings = [];
  for (const key of GHL_KEYS) {
    if (byKey.has(key)) bindings.push({ envKey: key, secretKey: key });
  }
  for (const key of OPTIONAL_GHL_KEYS) {
    if (byKey.has(key)) bindings.push({ envKey: key, secretKey: key });
  }
  if (bindings.length === 0 || !GHL_KEYS.every((k) => byKey.has(k))) {
    return null;
  }
  const env = {};
  for (const { envKey, secretKey } of bindings) {
    env[envKey] = { type: 'secret_ref', secretId: byKey.get(secretKey).id, version: 'latest' };
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
  console.log(`Bound GHL secrets on agent ${agentId}:`, Object.keys(env).join(', '));
}

async function main() {
  const targetIds = AGENT_TARGETS[agentScope];

  if (clear) {
    const payload = { adapterConfig: { env: {} }, replaceAdapterConfig: false };
    for (const agentId of targetIds) {
      if (dryRun) {
        console.log(`[dry-run] Would clear env on ${agentId}`);
        continue;
      }
      await api(`/api/agents/${agentId}`, { method: 'PATCH', body: JSON.stringify(payload) });
      console.log('Cleared env on', agentId);
    }
    return;
  }

  const secrets = await api(`/api/companies/${COMPANY_ID}/secrets`);
  const list = Array.isArray(secrets) ? secrets : secrets.items || secrets.secrets || [];
  const byKey = new Map(list.map((s) => [String(s.key).toUpperCase(), s]));

  const env = buildEnv(byKey);
  if (!env) {
    const missing = GHL_KEYS.filter((k) => !byKey.has(k));
    console.error(
      'Missing required GHL secrets. Add in Company Settings → Secrets:',
      missing.join(', '),
    );
    console.error('See docs/ops/ghl-pipeline-api.md for Private Integration setup.');
    process.exit(1);
  }

  if (dryRun) {
    console.log('[dry-run] Would bind env keys:', Object.keys(env).join(', '));
    console.log('[dry-run] Target agents:', targetIds.join(', '));
    return;
  }

  for (const agentId of targetIds) {
    await patchAgent(agentId, env);
  }
  console.log('GHL secret wiring complete.');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
