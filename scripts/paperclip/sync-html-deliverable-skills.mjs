#!/usr/bin/env node
/**
 * Attach proposal/quotation skills to content-producing agents.
 * Requires agents:create permission on PAPERCLIP_API_KEY (CEO / board).
 *
 * Skills synced:
 *   - bionixus-proposal-quotation (mandatory — New Documents corpus)
 *   - bionixus-html-documents (design system from New Documents project)
 *   - bionixus-proposal-generator (legacy scaffolds + scripts)
 *   - sanity-blog-cover (CMO + Copywriter — blog cover generation workflow)
 *   - paperclip
 *
 * Usage:
 *   node scripts/paperclip/sync-html-deliverable-skills.mjs
 *   node scripts/paperclip/sync-html-deliverable-skills.mjs --execute
 */

const API = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const KEY = process.env.PAPERCLIP_API_KEY;
const execute = process.argv.includes('--execute');

const BLOG_COVER_SKILL = 'sanity-blog-cover';

const TARGETS = [
  { urlKey: 'businessdevelopmentmanager', name: 'BusinessDevelopmentManager', extra: ['paperclip'] },
  { urlKey: 'copywriter', name: 'Copywriter', extra: ['paperclip', BLOG_COVER_SKILL] },
  { urlKey: 'cmo', name: 'CMO', extra: ['paperclip', BLOG_COVER_SKILL] },
  { urlKey: 'admin', name: 'Admin', extra: ['paperclip'] },
];

const PROPOSAL_SKILLS = [
  'bionixus-proposal-quotation',
  'bionixus-html-documents',
  'bionixus-proposal-generator',
];

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

async function main() {
  if (!KEY) {
    console.error('PAPERCLIP_API_KEY required');
    process.exit(1);
  }

  const agents = await api('/api/companies/d5ad71d4-38e1-4c76-9fe6-035bf40b13a1/agents');
  const byKey = Object.fromEntries(agents.map((a) => [a.urlKey, a]));

  console.log(`Mode: ${execute ? 'EXECUTE' : 'dry-run'}\n`);

  for (const t of TARGETS) {
    const agent = byKey[t.urlKey];
    if (!agent) {
      console.log(`✗ ${t.name}: agent not found (${t.urlKey})`);
      continue;
    }

    let current = [];
    try {
      const skillsResp = await api(`/api/agents/${agent.id}/skills`);
      current = (skillsResp.skills || skillsResp || []).map((s) => s.slug || s.key);
    } catch (e) {
      console.log(`? ${t.name}: cannot read skills (${e.message})`);
    }

    const desired = [...new Set([...t.extra, ...PROPOSAL_SKILLS, ...current.filter(Boolean)])];

    console.log(`${t.name} (${agent.id})`);
    console.log(`  desired: ${desired.join(', ')}`);

    if (execute) {
      const result = await api(`/api/agents/${agent.id}/skills/sync`, {
        method: 'POST',
        body: JSON.stringify({ desiredSkills: desired }),
      });
      console.log(`  synced: ${JSON.stringify(result?.skills?.map((s) => s.slug) || result)}`);
    }
  }

  if (!execute) {
    console.log('\nRe-run with --execute to apply.');
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
