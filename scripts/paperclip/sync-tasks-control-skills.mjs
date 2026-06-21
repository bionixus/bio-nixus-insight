#!/usr/bin/env node
/**
 * Attach tasks-control to Scrum Master (and optionally other dispatchers).
 * Requires agents:create permission on PAPERCLIP_API_KEY (CEO / board).
 *
 * Usage:
 *   node scripts/paperclip/sync-tasks-control-skills.mjs
 *   node scripts/paperclip/sync-tasks-control-skills.mjs --execute
 *   node scripts/paperclip/sync-tasks-control-skills.mjs --execute --agents ceo,coo,scrummaster
 */

const API = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const KEY = process.env.PAPERCLIP_API_KEY;
const COMPANY_ID =
  process.env.PAPERCLIP_COMPANY_ID || 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';
const execute = process.argv.includes('--execute');

const SKILL = 'tasks-control';
const DEFAULT_URL_KEYS = ['scrummaster'];

function parseAgentFilter() {
  const idx = process.argv.indexOf('--agents');
  if (idx === -1 || !process.argv[idx + 1]) return DEFAULT_URL_KEYS;
  return process.argv[idx + 1].split(',').map((s) => s.trim().toLowerCase());
}

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

  const urlKeys = parseAgentFilter();
  const agents = await api(`/api/companies/${COMPANY_ID}/agents`);
  const targets = agents.filter((a) => urlKeys.includes(a.urlKey));

  console.log(`Mode: ${execute ? 'EXECUTE' : 'dry-run'}`);
  console.log(`Skill: ${SKILL}`);
  console.log(`Targets: ${targets.map((a) => a.urlKey).join(', ') || '(none)'}\n`);

  for (const agent of targets) {
    let current = [];
    const skillsResp = await api(`/api/agents/${agent.id}/skills`);
    if (Array.isArray(skillsResp.desiredSkills)) {
      current = skillsResp.desiredSkills.filter(Boolean);
    } else {
      const list = skillsResp.skills || skillsResp.entries || [];
      current = list.map(skillRef).filter(Boolean);
    }

    if (current.some((s) => s === SKILL || s.endsWith(`/${SKILL}`))) {
      console.log(`= ${agent.name}: already has ${SKILL}`);
      continue;
    }

    const desired = [...new Set([SKILL, ...current])];
    console.log(`+ ${agent.name}: ${desired.join(', ')}`);

    if (execute) {
      await api(`/api/agents/${agent.id}/skills/sync`, {
        method: 'POST',
        body: JSON.stringify({ desiredSkills: desired }),
      });
      console.log('  synced');
    }
  }

  if (!execute) console.log('\nRe-run with --execute to apply.');
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
