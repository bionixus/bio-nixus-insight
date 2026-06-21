#!/usr/bin/env node
/**
 * Attach token-optimization to every company agent (preserves existing desiredSkills).
 * Requires agents:create permission on PAPERCLIP_API_KEY (CEO / board / PRE).
 *
 * Usage:
 *   node scripts/paperclip/sync-token-optimization-skills.mjs
 *   node scripts/paperclip/sync-token-optimization-skills.mjs --execute
 */

const API = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const KEY = process.env.PAPERCLIP_API_KEY;
const COMPANY_ID =
  process.env.PAPERCLIP_COMPANY_ID || 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const execute = process.argv.includes('--execute');

const TOKEN_SKILL = 'token-optimization';

async function api(path, init = {}) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${KEY}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  if (!res.ok) throw new Error(`${res.status} ${path}: ${JSON.stringify(body)}`);
  return body;
}

function skillRef(skill) {
  return skill?.slug || skill?.key || skill?.name;
}

async function main() {
  if (!KEY) {
    console.error('PAPERCLIP_API_KEY required');
    process.exit(1);
  }

  const agents = await api(`/api/companies/${COMPANY_ID}/agents`);
  console.log(`Mode: ${execute ? 'EXECUTE' : 'dry-run'}`);
  console.log(`Agents: ${agents.length}\n`);

  const results = { synced: 0, skipped: 0, errors: 0 };

  for (const agent of agents.sort((a, b) => a.urlKey.localeCompare(b.urlKey))) {
    let current = [];
    try {
      const skillsResp = await api(`/api/agents/${agent.id}/skills`);
      if (Array.isArray(skillsResp.desiredSkills)) {
        current = skillsResp.desiredSkills.filter(Boolean);
      } else {
        const list = skillsResp.skills || skillsResp.entries || [];
        current = list.map(skillRef).filter(Boolean);
      }
    } catch (e) {
      console.log(`✗ ${agent.name} (${agent.urlKey}): cannot read skills — ${e.message}`);
      results.errors += 1;
      continue;
    }

    if (current.some((s) => s === TOKEN_SKILL || s.endsWith(`/${TOKEN_SKILL}`))) {
      console.log(`= ${agent.name} (${agent.urlKey}): already has ${TOKEN_SKILL}`);
      results.skipped += 1;
      continue;
    }

    const desired = [...new Set([TOKEN_SKILL, ...current])];
    console.log(`+ ${agent.name} (${agent.urlKey})`);
    console.log(`  desired: ${desired.join(', ')}`);

    if (execute) {
      try {
        const result = await api(`/api/agents/${agent.id}/skills/sync`, {
          method: 'POST',
          body: JSON.stringify({ desiredSkills: desired }),
        });
        const synced = (result?.desiredSkills || result?.skills || []).map(skillRef).filter(Boolean);
        console.log(`  synced: ${synced.join(', ')}`);
        results.synced += 1;
      } catch (e) {
        console.log(`  error: ${e.message}`);
        results.errors += 1;
      }
    } else {
      results.synced += 1;
    }
  }

  console.log('\nSummary:', results);
  if (!execute) {
    console.log('Re-run with --execute to apply.');
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
