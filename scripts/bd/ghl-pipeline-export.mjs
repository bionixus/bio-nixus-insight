#!/usr/bin/env node
/**
 * Fetch Go High Level opportunities and emit weighted pipeline summary for BIO-338.
 *
 * Requires env: GHL_API_KEY, GHL_LOCATION_ID
 *
 * Usage:
 *   node scripts/bd/ghl-pipeline-export.mjs
 *   node scripts/bd/ghl-pipeline-export.mjs --check
 *   node scripts/bd/ghl-pipeline-export.mjs --format markdown
 *   node scripts/bd/ghl-pipeline-export.mjs --out deliverables/ops/ghl-pipeline-snapshot.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '../..');
const GHL_BASE = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';
const MAP_PATH = resolve(REPO_ROOT, 'docs/ops/ghl-stage-probability-map.json');

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const format = args.includes('--format')
  ? args[args.indexOf('--format') + 1] || 'json'
  : 'json';
const outIdx = args.indexOf('--out');
const outPath = outIdx >= 0 ? resolve(REPO_ROOT, args[outIdx + 1]) : null;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing env ${name}. Run wire-ghl-secrets.mjs or export locally.`);
    process.exit(1);
  }
  return value;
}

function loadStageMap() {
  return JSON.parse(readFileSync(MAP_PATH, 'utf8'));
}

function resolveProbability(stageName, stageMap) {
  const normalized = String(stageName || '').toLowerCase();
  for (const entry of stageMap.stages || []) {
    if ((entry.match || []).some((token) => normalized.includes(String(token).toLowerCase()))) {
      return { label: entry.label, probability: entry.probability };
    }
  }
  return { label: stageName || 'Unknown', probability: stageMap.defaultProbability ?? 0.2 };
}

async function ghlFetch(path, apiKey, query = {}) {
  const url = new URL(path, GHL_BASE);
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
  }
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: API_VERSION,
      Accept: 'application/json',
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
    const msg = typeof body === 'object' && body?.message ? body.message : text;
    throw new Error(`GHL ${path} → ${res.status}: ${msg}`);
  }
  return body;
}

async function fetchAllOpportunities(apiKey, locationId, status) {
  const opportunities = [];
  let page = 1;
  const limit = 100;
  for (;;) {
    const body = await ghlFetch('/opportunities/search', apiKey, {
      location_id: locationId,
      status,
      limit,
      page,
    });
    const batch = body?.opportunities || body?.data || [];
    if (!Array.isArray(batch) || batch.length === 0) break;
    opportunities.push(...batch);
    if (batch.length < limit) break;
    page += 1;
    if (page > 50) {
      console.warn(`Warning: truncated ${status} fetch at page ${page}`);
      break;
    }
  }
  return opportunities;
}

function buildStageIndex(pipelinesBody) {
  const index = new Map();
  const pipelines = pipelinesBody?.pipelines || pipelinesBody?.data || [];
  for (const pipeline of pipelines) {
    for (const stage of pipeline.stages || []) {
      index.set(stage.id, {
        id: stage.id,
        name: stage.name,
        pipelineId: pipeline.id,
        pipelineName: pipeline.name,
      });
    }
  }
  return index;
}

function aggregateByStage(opportunities, stageIndex, stageMap) {
  const buckets = new Map();
  for (const opp of opportunities) {
    const stageId = opp.pipelineStageId || opp.pipeline_stage_id || opp.stageId;
    const meta = stageIndex.get(stageId) || { name: opp.pipelineStageName || opp.stageName || 'Unknown' };
    const { label, probability } = resolveProbability(meta.name, stageMap);
    const key = label;
    const value = Number(opp.monetaryValue ?? opp.monetary_value ?? opp.value ?? 0) || 0;
    if (!buckets.has(key)) {
      buckets.set(key, {
        stageLabel: key,
        ghlStageNames: new Set(),
        leadCount: 0,
        openValue: 0,
        probability,
        weightedValue: 0,
      });
    }
    const bucket = buckets.get(key);
    bucket.ghlStageNames.add(meta.name);
    bucket.leadCount += 1;
    bucket.openValue += value;
    bucket.weightedValue += value * probability;
  }
  return [...buckets.values()]
    .map((b) => ({
      stageLabel: b.stageLabel,
      ghlStageNames: [...b.ghlStageNames].sort(),
      leadCount: b.leadCount,
      openValue: roundMoney(b.openValue),
      probability: b.probability,
      weightedValue: roundMoney(b.weightedValue),
    }))
    .sort((a, b) => a.probability - b.probability);
}

function winRateStats(won, lost) {
  const wonCount = won.length;
  const lostCount = lost.length;
  const total = wonCount + lostCount;
  return {
    opportunities: total,
    won: wonCount,
    lost: lostCount,
    winRate: total > 0 ? roundPct(wonCount / total) : null,
  };
}

function roundMoney(n) {
  return Math.round(n * 100) / 100;
}

function roundPct(n) {
  return Math.round(n * 1000) / 10;
}

function formatMarkdown(summary) {
  const lines = [
    '## GHL weighted pipeline (API export)',
    '',
    `Generated: ${summary.generatedAt}`,
    `Location: ${summary.locationId}`,
    '',
    '| GHL stage | Lead count | Open value | Conf probability | Weighted value | Notes |',
    '|-----------|-----------|-----------|-----------------|---------------|-------|',
  ];
  let totalWeighted = 0;
  for (const row of summary.byStage) {
    totalWeighted += row.weightedValue;
    const prob = `${Math.round(row.probability * 100)}%`;
    const notes = row.ghlStageNames.join(', ');
    lines.push(
      `| ${row.stageLabel} | ${row.leadCount} | $${row.openValue.toLocaleString('en-US')} | ${prob} | $${row.weightedValue.toLocaleString('en-US')} | ${notes} |`,
    );
  }
  lines.push(
    `| **Total** | — | — | — | **$${roundMoney(totalWeighted).toLocaleString('en-US')}** | live GHL export |`,
    '',
    '### Win rate (all-time fetch)',
    '',
    `| Period | Opportunities | Won | Lost | Win rate |`,
    `|--------|--------------|-----|------|---------|`,
    `| API snapshot | ${summary.winRate.opportunities} | ${summary.winRate.won} | ${summary.winRate.lost} | ${summary.winRate.winRate ?? 'n/a'}% |`,
  );
  return lines.join('\n');
}

async function main() {
  const apiKey = requireEnv('GHL_API_KEY');
  const locationId = requireEnv('GHL_LOCATION_ID');
  const stageMap = loadStageMap();

  const pipelinesBody = await ghlFetch('/opportunities/pipelines', apiKey, { locationId });
  if (checkOnly) {
    const pipelineCount = (pipelinesBody?.pipelines || pipelinesBody?.data || []).length;
    console.log(JSON.stringify({ ok: true, locationId, pipelineCount }, null, 2));
    return;
  }

  const stageIndex = buildStageIndex(pipelinesBody);
  const [open, won, lost] = await Promise.all([
    fetchAllOpportunities(apiKey, locationId, 'open'),
    fetchAllOpportunities(apiKey, locationId, 'won'),
    fetchAllOpportunities(apiKey, locationId, 'lost'),
  ]);

  const byStage = aggregateByStage(open, stageIndex, stageMap);
  const summary = {
    generatedAt: new Date().toISOString(),
    locationId,
    pipelineCount: (pipelinesBody?.pipelines || pipelinesBody?.data || []).length,
    openOpportunityCount: open.length,
    byStage,
    totals: {
      openValue: roundMoney(byStage.reduce((s, r) => s + r.openValue, 0)),
      weightedValue: roundMoney(byStage.reduce((s, r) => s + r.weightedValue, 0)),
    },
    winRate: winRateStats(won, lost),
  };

  if (outPath) {
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, `${JSON.stringify(summary, null, 2)}\n`);
    console.error(`Wrote ${outPath}`);
  }

  if (format === 'markdown') {
    process.stdout.write(`${formatMarkdown(summary)}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
