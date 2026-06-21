#!/usr/bin/env node
/**
 * Split legacy `linkedin` Paperclip secret into LINKEDIN_EMAIL + LINKEDIN_PASSWORD,
 * delete the old secret, and optionally run wire-browseragent-secrets.mjs.
 *
 * BOARD ONLY — requires PAPERCLIP_BOARD_TOKEN (or PAPERCLIP_API_KEY).
 *
 * Usage:
 *   export PAPERCLIP_BOARD_TOKEN=pcp_board_...
 *   node scripts/paperclip/split-linkedin-secret.mjs --email admin@bionixus.com --password-env LINKEDIN_PASSWORD
 *   node scripts/paperclip/split-linkedin-secret.mjs --email admin@bionixus.com --password '***'
 *   node scripts/paperclip/split-linkedin-secret.mjs --dry-run --email admin@bionixus.com --password-env LINKEDIN_PASSWORD
 */

import { execFileSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../..');

const COMPANY_ID = 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const LEGACY_KEY = 'linkedin';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const getFlag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const dryRun = flags.has('--dry-run');
const skipWire = flags.has('--skip-wire');
const combinedArg = getFlag('--combined');
const combinedEnv = getFlag('--combined-env');
let email = getFlag('--email') || process.env.LINKEDIN_EMAIL;
const passwordEnv = getFlag('--password-env');
let passwordArg = getFlag('--password');

const apiBase = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const token = process.env.PAPERCLIP_BOARD_TOKEN || process.env.PAPERCLIP_API_KEY;

if (!token) {
  console.error('Missing auth: set PAPERCLIP_BOARD_TOKEN');
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

function parseCombined(raw) {
  const text = raw.trim();
  if (!text) throw new Error('Combined value is empty');
  if (text.includes('\n')) {
    const [e, ...rest] = text.split('\n');
    return { email: e.trim(), password: rest.join('\n').trim() };
  }
  const colon = text.indexOf(':');
  if (colon > 0 && text.includes('@', 0)) {
    return { email: text.slice(0, colon).trim(), password: text.slice(colon + 1).trim() };
  }
  const slash = text.indexOf('/');
  if (slash > 0 && text.includes('@', 0)) {
    return { email: text.slice(0, slash).trim(), password: text.slice(slash + 1).trim() };
  }
  throw new Error('Could not parse combined value — use email:password or email<newline>password');
}

async function resolveCombined() {
  if (combinedArg) return parseCombined(combinedArg);
  if (combinedEnv) {
    const v = process.env[combinedEnv];
    if (!v) throw new Error(`Environment variable ${combinedEnv} is not set`);
    return parseCombined(v);
  }
  if (process.env.LINKEDIN_COMBINED) return parseCombined(process.env.LINKEDIN_COMBINED);
  const rl = createInterface({ input, output });
  try {
    const line = await rl.question(
      'Paste linkedin secret (email:password or email then password on next line): ',
    );
    return parseCombined(line);
  } finally {
    rl.close();
  }
}

async function resolvePassword() {
  if (passwordArg) return passwordArg;
  if (passwordEnv) {
    const v = process.env[passwordEnv];
    if (!v) throw new Error(`Environment variable ${passwordEnv} is not set`);
    return v;
  }
  if (process.env.LINKEDIN_PASSWORD) return process.env.LINKEDIN_PASSWORD;
  const rl = createInterface({ input, output });
  try {
    const p = await rl.question('LinkedIn password: ');
    return p;
  } finally {
    rl.close();
  }
}

async function createSecret(key, name, value) {
  if (dryRun) {
    console.log(`[dry-run] Would create secret key=${key} name=${name} (len=${value.length})`);
    return { id: `dry-${key}`, key };
  }
  return api(`/api/companies/${COMPANY_ID}/secrets`, {
    method: 'POST',
    body: JSON.stringify({
      key,
      name,
      value,
      provider: 'local_encrypted',
    }),
  });
}

async function main() {
  const useCombined = combinedArg || combinedEnv || process.env.LINKEDIN_COMBINED || (!email && !passwordArg && !passwordEnv);
  if (useCombined) {
    const parsed = await resolveCombined();
    email = parsed.email;
    passwordArg = parsed.password;
  }

  if (!email?.trim()) {
    console.error('Missing --email, --combined, or LINKEDIN_EMAIL');
    process.exit(1);
  }

  const password = await resolvePassword();
  if (!password?.trim()) {
    console.error('Password is required');
    process.exit(1);
  }

  const secrets = await api(`/api/companies/${COMPANY_ID}/secrets`);
  const list = Array.isArray(secrets) ? secrets : secrets.items || [];
  const byKey = new Map(list.map((s) => [s.key, s]));

  if (byKey.has('LINKEDIN_EMAIL') || byKey.has('LINKEDIN_PASSWORD')) {
    console.error('LINKEDIN_EMAIL or LINKEDIN_PASSWORD already exists. Delete or rename first.');
    process.exit(1);
  }

  const legacy = byKey.get(LEGACY_KEY);
  if (!legacy) {
    console.warn(`No legacy secret key=${LEGACY_KEY} found — creating LINKEDIN_* only.`);
  }

  console.log(`Creating LINKEDIN_EMAIL (${email.trim()})...`);
  await createSecret('LINKEDIN_EMAIL', 'LinkedIn email', email.trim());

  console.log('Creating LINKEDIN_PASSWORD...');
  await createSecret('LINKEDIN_PASSWORD', 'LinkedIn password', password);

  if (legacy) {
    if (dryRun) {
      console.log(`[dry-run] Would delete legacy secret ${LEGACY_KEY} (${legacy.id})`);
    } else {
      console.log(`Deleting legacy secret key=${LEGACY_KEY}...`);
      await api(`/api/secrets/${legacy.id}`, { method: 'DELETE' });
    }
  }

  if (skipWire) {
    console.log('Done. Run wire-browseragent-secrets.mjs when ready.');
    return;
  }

  if (dryRun) {
    console.log('[dry-run] Would run wire-browseragent-secrets.mjs');
    return;
  }

  console.log('Running wire-browseragent-secrets.mjs...');
  execFileSync(process.execPath, [join(repoRoot, 'scripts/paperclip/wire-browseragent-secrets.mjs')], {
    cwd: repoRoot,
    stdio: 'inherit',
    env: { ...process.env, PAPERCLIP_BOARD_TOKEN: token, PAPERCLIP_API_KEY: token },
  });
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
