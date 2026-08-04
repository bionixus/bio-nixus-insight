/**
 * Summarises AEO tracking runs and diffs a run against the baseline, so each
 * phase can be judged on movement rather than vibes.
 *
 * Usage:
 *   node scripts/aeo/report.mjs                      # summarise every run
 *   node scripts/aeo/report.mjs --compare baseline post-phase1
 */
import { readdirSync, readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RUNS_DIR = join(__dirname, 'runs');

function loadRuns() {
  if (!existsSync(RUNS_DIR)) return new Map();
  const byLabel = new Map();
  for (const file of readdirSync(RUNS_DIR).filter((f) => f.endsWith('.jsonl'))) {
    const records = readFileSync(join(RUNS_DIR, file), 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((l) => JSON.parse(l));
    if (!records.length) continue;
    // Later files win so re-running a label supersedes the earlier attempt.
    byLabel.set(records[0].runLabel, records);
  }
  return byLabel;
}

function summarise(records) {
  const scored = records.filter((r) => !r.error);
  const named = scored.filter((r) => r.named);
  const cited = scored.filter((r) => r.citedOwnDomain);
  const ranks = named.map((r) => r.rank).filter((r) => typeof r === 'number');

  const byFamily = {};
  for (const r of scored) {
    byFamily[r.family] ??= { total: 0, named: 0 };
    byFamily[r.family].total += 1;
    if (r.named) byFamily[r.family].named += 1;
  }

  return {
    total: records.length,
    scored: scored.length,
    errors: records.length - scored.length,
    named: named.length,
    cited: cited.length,
    namedPct: scored.length ? (named.length / scored.length) * 100 : 0,
    citedPct: scored.length ? (cited.length / scored.length) * 100 : 0,
    avgRank: ranks.length ? ranks.reduce((a, b) => a + b, 0) / ranks.length : null,
    byFamily,
  };
}

const runs = loadRuns();
if (!runs.size) {
  console.log('[aeo] No runs recorded yet. Capture a baseline: node scripts/aeo/track.mjs --label baseline');
  process.exit(0);
}

const compareIdx = process.argv.indexOf('--compare');
if (compareIdx !== -1) {
  const [aLabel, bLabel] = process.argv.slice(compareIdx + 1, compareIdx + 3);
  const a = runs.get(aLabel);
  const b = runs.get(bLabel);
  if (!a || !b) {
    console.error(`[aeo] Unknown label. Available: ${[...runs.keys()].join(', ')}`);
    process.exit(1);
  }
  const sa = summarise(a);
  const sb = summarise(b);
  const delta = (x, y) => `${x.toFixed(1)}% -> ${y.toFixed(1)}% (${y - x >= 0 ? '+' : ''}${(y - x).toFixed(1)}pp)`;
  console.log(`\n${aLabel} -> ${bLabel}`);
  console.log(`  named: ${delta(sa.namedPct, sb.namedPct)}`);
  console.log(`  cited: ${delta(sa.citedPct, sb.citedPct)}`);

  const key = (r) => `${r.engine}|${r.family}|${r.country}`;
  const before = new Map(a.map((r) => [key(r), r]));
  const gained = b.filter((r) => r.named && !before.get(key(r))?.named);
  const lost = b.filter((r) => !r.named && before.get(key(r))?.named);
  if (gained.length) {
    console.log(`\n  gained (${gained.length}):`);
    gained.forEach((r) => console.log(`    [${r.engine}] ${r.query}`));
  }
  if (lost.length) {
    console.log(`\n  lost (${lost.length}):`);
    lost.forEach((r) => console.log(`    [${r.engine}] ${r.query}`));
  }
  process.exit(0);
}

for (const [label, records] of runs) {
  const s = summarise(records);
  console.log(`\n${label}  (${s.scored} scored, ${s.errors} errors)`);
  console.log(`  named: ${s.named}/${s.scored} (${s.namedPct.toFixed(1)}%)`);
  console.log(`  cited: ${s.cited}/${s.scored} (${s.citedPct.toFixed(1)}%)`);
  console.log(`  avg rank when named: ${s.avgRank ? s.avgRank.toFixed(1) : 'n/a'}`);
  for (const [family, f] of Object.entries(s.byFamily)) {
    console.log(`    ${family.padEnd(11)} ${f.named}/${f.total}`);
  }
}
