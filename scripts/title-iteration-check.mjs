#!/usr/bin/env node
/**
 * Weekly title-iteration monitor (site-wide generalization of the china-devices protocol).
 *
 * Reads data/gsc/current-week/Pages.csv (and previous-week/Pages.csv when present) and flags
 * pages that qualify for a title/meta A/B iteration under the rule in src/data/site-serp-gsc.ts:
 *   - average position <= 15 (the page already ranks; CTR is the bottleneck), AND
 *   - CTR < 2%, AND
 *   - >= 50 impressions this week.
 *
 * For each flagged page it reports whether a CTR override already exists in
 * lib/ctr-seo-overrides.mjs so you know whether you are iterating an existing title
 * (allowed after 14 days indexed) or writing a first override.
 *
 * Usage: node scripts/title-iteration-check.mjs [--min-impressions 50]
 * Output: console table + reports/title-iteration-<date>.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CTR_SEO_BY_PATH } from '../lib/ctr-seo-overrides.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const CURRENT = path.join(root, 'data', 'gsc', 'current-week', 'Pages.csv');
const PREVIOUS = path.join(root, 'data', 'gsc', 'previous-week', 'Pages.csv');
const REPORTS_DIR = path.join(root, 'reports');

const RULE = { maxPosition: 15, ctrBelow: 0.02, minImpressions: 50 };
const argIdx = process.argv.indexOf('--min-impressions');
if (argIdx !== -1) RULE.minImpressions = Number(process.argv[argIdx + 1]) || RULE.minImpressions;

function parsePagesCsv(file) {
  if (!fs.existsSync(file)) return null;
  const lines = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/).slice(1);
  const rows = [];
  for (const line of lines) {
    // GSC page exports have no commas inside fields: url,clicks,impressions,ctr,position
    const [url, clicks, impressions, ctr, position] = line.split(',');
    if (!url || !url.startsWith('http')) continue;
    rows.push({
      url,
      path: new URL(url).pathname,
      clicks: Number(clicks) || 0,
      impressions: Number(impressions) || 0,
      ctr: Number(String(ctr).replace('%', '')) / 100 || 0,
      position: Number(position) || 0,
    });
  }
  return rows;
}

const current = parsePagesCsv(CURRENT);
if (!current) {
  console.error(`Missing ${CURRENT} — export GSC Pages report first (see src/data/site-serp-gsc.ts).`);
  process.exit(1);
}
const previousRows = parsePagesCsv(PREVIOUS) || [];
const prevByPath = new Map(previousRows.map((r) => [r.path, r]));

const flagged = current
  .filter(
    (r) =>
      r.position <= RULE.maxPosition &&
      r.ctr < RULE.ctrBelow &&
      r.impressions >= RULE.minImpressions,
  )
  .sort((a, b) => b.impressions - a.impressions);

const today = new Date().toISOString().slice(0, 10);
const lines = [];
lines.push(`# Title iteration checklist — ${today}`);
lines.push('');
lines.push(
  `Rule: position <= ${RULE.maxPosition}, CTR < ${RULE.ctrBelow * 100}%, impressions >= ${RULE.minImpressions}/week.`,
);
lines.push(
  'Only iterate a title after it has been indexed >= 14 days (check the override deploy date / git log).',
);
lines.push('Change titles ONLY in lib/ctr-seo-overrides.mjs + src/server/ctr-seo-overrides.js');
lines.push('(+ the hardcoded <Helmet> title when the page has one). Keep URL and H1 stable.');
lines.push('');
lines.push('| Page | Impr | Clicks | CTR | Pos | Δ pos vs prev wk | Override exists |');
lines.push('|---|---|---|---|---|---|---|');
for (const r of flagged) {
  const prev = prevByPath.get(r.path);
  const deltaPos = prev ? (r.position - prev.position).toFixed(1) : 'n/a';
  const hasOverride = Boolean(CTR_SEO_BY_PATH[r.path]);
  lines.push(
    `| ${r.path} | ${r.impressions} | ${r.clicks} | ${(r.ctr * 100).toFixed(2)}% | ${r.position.toFixed(1)} | ${deltaPos} | ${hasOverride ? 'yes — iterate' : 'NO — write first override'} |`,
  );
}
if (flagged.length === 0) lines.push('| (no pages flagged this week) | | | | | | |');
lines.push('');
lines.push(`Flagged: ${flagged.length} pages.`);

const report = lines.join('\n');
console.log(report);
fs.mkdirSync(REPORTS_DIR, { recursive: true });
const outFile = path.join(REPORTS_DIR, `title-iteration-${today}.md`);
fs.writeFileSync(outFile, report + '\n');
console.log(`\nSaved: ${path.relative(root, outFile)}`);
