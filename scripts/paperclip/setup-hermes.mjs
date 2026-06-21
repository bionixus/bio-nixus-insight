#!/usr/bin/env node
/**
 * Verify Hermes ↔ Paperclip integration for BioNixus.
 *
 * Usage (repo root):
 *   node scripts/paperclip/setup-hermes.mjs
 *   node scripts/paperclip/setup-hermes.mjs --wakeup HermesEngineer
 */

import { execFileSync, spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../..');
const COMPANY_ID = 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const API = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const HERMES_CMD = process.env.HERMES_COMMAND || '/Users/selim/.local/bin/hermes';

const args = new Set(process.argv.slice(2));
const wakeupRef = process.argv.includes('--wakeup') ? process.argv[process.argv.indexOf('--wakeup') + 1] : null;

function step(label, fn) {
  process.stdout.write(`• ${label}... `);
  try {
    fn();
    console.log('ok');
  } catch (e) {
    console.log('FAIL');
    throw e;
  }
}

step('Hermes CLI', () => {
  const out = execFileSync(HERMES_CMD, ['--version'], { encoding: 'utf8' }).trim();
  if (!out) throw new Error('empty version');
  console.log(`\n  ${out.split('\n')[0]}`);
});

step('Hermes status (Nous OAuth)', () => {
  const r = spawnSync(HERMES_CMD, ['status'], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(r.stderr || r.stdout);
  const line = (r.stdout || '').split('\n').find((l) => l.includes('Provider'));
  if (line) console.log(`\n  ${line.trim()}`);
});

step('Paperclip health', () => {
  const r = spawnSync('curl', ['-sf', `${API}/api/health`], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error('Paperclip not reachable at ' + API);
});

step('Hermes agents in company', () => {
  const r = spawnSync('curl', ['-sf', `${API}/api/companies/${COMPANY_ID}/agents`], { encoding: 'utf8' });
  const agents = JSON.parse(r.stdout);
  const hermes = agents.filter((a) => a.adapterType === 'hermes_local');
  if (!hermes.length) throw new Error('No hermes_local agents — hire one in Paperclip UI');
  console.log('\n  ' + hermes.map((a) => `${a.name} (${a.status})`).join(', '));
});

step('Adapter environment test', () => {
  execFileSync('npx', ['--yes', 'paperclipai@2026.609.0', 'adapter', 'test-environment', 'hermes_local', '-C', COMPANY_ID], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
});

if (wakeupRef) {
  step(`Wakeup ${wakeupRef}`, () => {
    const r = spawnSync('curl', ['-sf', `${API}/api/companies/${COMPANY_ID}/agents`], { encoding: 'utf8' });
    const agents = JSON.parse(r.stdout);
    const ref = wakeupRef.toLowerCase();
    const agent = agents.find(
      (a) => a.id === wakeupRef || a.urlKey === ref || a.name.toLowerCase().replace(/\s+/g, '') === ref.replace(/\s+/g, '').toLowerCase(),
    );
    if (!agent) throw new Error(`Agent not found: ${wakeupRef}`);
    spawnSync('curl', ['-sf', '-X', 'POST', `${API}/api/agents/${agent.id}/wakeup`, '-H', 'Content-Type: application/json', '-d', '{}'], {
      stdio: 'inherit',
    });
    console.log(`\n  queued ${agent.name} (${agent.id})`);
  });
}

console.log('\nHermes + Paperclip integration looks good.');
console.log('Repo cwd for Hermes agents:', repoRoot);
