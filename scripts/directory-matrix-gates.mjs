#!/usr/bin/env node
/**
 * Company-directory matrix gates (28 / 90 day) + kill/rewrite rule.
 *
 * Reads:
 *   scripts/data/directory-matrix-waves.json
 *   scripts/indexnow-wave-{n}.txt
 *   data/gsc/current-week/Pages.csv (same convention as report:weekly)
 *   data/leads/leads.csv (optional; source_page matching a directory URL)
 *
 * Gates (from the 200-page directory-matrix plan):
 *   14-day: ≥80% of a wave's URLs should show in GSC Pages.csv (indexed signal)
 *   28-day: early-signal floor ≥10 impressions/day per spoke
 *   90-day: ≥50 impressions/day and avg position ≤15 on the page;
 *           kill/rewrite any spoke still <10 impressions/day — do not leave it thin
 *
 * Usage:
 *   node scripts/directory-matrix-gates.mjs
 *   node scripts/directory-matrix-gates.mjs --json
 *   npm run report:directory-gates
 *
 * Does not fail the build when GSC exports are missing (prints a skip notice).
 * Exit 1 only when --strict is set and a 90-day kill candidate exists.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const asJson = process.argv.includes('--json');
const strict = process.argv.includes('--strict');

const WAVES_PATH = path.join(root, 'scripts', 'data', 'directory-matrix-waves.json');
const PAGES_CSV = path.join(root, 'data', 'gsc', 'current-week', 'Pages.csv');
const LEADS_CSV = path.join(root, 'data', 'leads', 'leads.csv');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  if (rows.length === 0) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (r[i] ?? '').trim();
    });
    return obj;
  });
}

function num(raw) {
  if (raw == null || raw === '') return 0;
  const n = Number(String(raw).replace(/,/g, '').replace('%', ''));
  return Number.isFinite(n) ? n : 0;
}

function pagePathFromUrl(url) {
  try {
    const u = new URL(url);
    return u.pathname.replace(/\/+$/, '') || '/';
  } catch {
    const s = String(url || '').trim();
    if (s.startsWith('/')) return s.replace(/\/+$/, '') || '/';
    return null;
  }
}

function daysBetween(iso, today = new Date()) {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return 0;
  return Math.floor((today.getTime() - d.getTime()) / 86400000);
}

function loadWaveUrls(fileRel) {
  const abs = path.join(root, fileRel);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readFileSync(abs, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#') && l.startsWith('http'))
    .map((u) => pagePathFromUrl(u))
    .filter(Boolean);
}

function loadPagesIndex() {
  if (!fs.existsSync(PAGES_CSV)) return null;
  const rows = parseCsv(fs.readFileSync(PAGES_CSV, 'utf8'));
  const byPath = new Map();
  for (const r of rows) {
    const url = r.Page || r.URL || r.page || r.url;
    const p = pagePathFromUrl(url);
    if (!p) continue;
    const prev = byPath.get(p) || { clicks: 0, impressions: 0, position: 0, n: 0 };
    prev.clicks += num(r.Clicks);
    prev.impressions += num(r.Impressions);
    const pos = num(r.Position || r['Avg. Pos'] || r['Average Position']);
    if (pos > 0) {
      prev.position += pos;
      prev.n += 1;
    }
    byPath.set(p, prev);
  }
  for (const v of byPath.values()) {
    v.position = v.n > 0 ? v.position / v.n : null;
    delete v.n;
  }
  return byPath;
}

function loadDirectoryLeads(directoryPaths) {
  if (!fs.existsSync(LEADS_CSV)) return { total: 0, byPath: {} };
  const rows = parseCsv(fs.readFileSync(LEADS_CSV, 'utf8'));
  const set = new Set(directoryPaths);
  const byPath = {};
  let total = 0;
  for (const r of rows) {
    const raw = r.source_page || r.Source || r.page || r.Page || '';
    const p = pagePathFromUrl(raw) || String(raw).replace(/https?:\/\/[^/]+/, '').replace(/\/+$/, '');
    if (!p || !set.has(p)) continue;
    total += 1;
    byPath[p] = (byPath[p] || 0) + 1;
  }
  return { total, byPath };
}

function main() {
  const spec = JSON.parse(fs.readFileSync(WAVES_PATH, 'utf8'));
  const pages = loadPagesIndex();
  const allPaths = [];
  const waveReports = spec.waves.map((w) => {
    const urls = loadWaveUrls(w.file);
    allPaths.push(...urls);
    const age = daysBetween(w.published);
    const rows = urls.map((p) => {
      const g = pages?.get(p);
      const impressions = g?.impressions || 0;
      const clicks = g?.clicks || 0;
      const position = g?.position ?? null;
      // GSC Pages.csv is typically a 7-day window.
      const impressionsPerDay = impressions / 7;
      return { path: p, clicks, impressions, impressionsPerDay, position, inGsc: Boolean(g) };
    });
    const indexed = rows.filter((r) => r.inGsc).length;
    const indexationPct = urls.length ? (indexed / urls.length) * 100 : 0;
    const kill = age >= 90 ? rows.filter((r) => r.impressionsPerDay < spec.gates.day90.killBelowImpressionsPerDay) : [];
    const under90 =
      age >= 90
        ? rows.filter(
            (r) =>
              r.impressionsPerDay < spec.gates.day90.impressionsPerDay ||
              (r.position != null && r.position > spec.gates.day90.positionMax),
          )
        : [];
    const early28 = age >= 28 ? rows.filter((r) => r.impressionsPerDay < spec.gates.day28.impressionsPerDay) : [];
    return {
      id: w.id,
      published: w.published,
      ageDays: age,
      urlCount: urls.length,
      indexed,
      indexationPct,
      gate14d: age >= 14 ? indexationPct >= spec.gates.indexation14dPct : null,
      killCandidates: kill.map((r) => r.path),
      underperform90: under90.map((r) => r.path),
      earlyWarning28: early28.map((r) => r.path),
      rows,
    };
  });

  const leads = loadDirectoryLeads(allPaths);
  const result = {
    asOf: new Date().toISOString().slice(0, 10),
    gscPagesPresent: Boolean(pages),
    gates: spec.gates,
    waves: waveReports,
    directoryLeadsInExport: leads.total,
  };

  if (asJson) {
    console.log(JSON.stringify(result, null, 2));
    if (strict && waveReports.some((w) => w.killCandidates.length)) process.exit(1);
    return;
  }

  const lines = [];
  lines.push('# Company directory matrix — weekly gates', '');
  if (!pages) {
    lines.push(
      `_No data/gsc/current-week/Pages.csv — drop a GSC Pages export there (same convention as \`npm run report:weekly\`) to score waves._`,
      '',
    );
  }
  lines.push('## Rules', '');
  lines.push(
    `- **14-day indexation:** ≥${spec.gates.indexation14dPct}% of a wave's URLs should appear in GSC Pages.csv before the next wave is treated as gated-go.`,
    `- **28-day early signal:** ≥${spec.gates.day28.impressionsPerDay} impressions/day. Below that: check indexation, title, and internal links.`,
    `- **90-day target:** ≥${spec.gates.day90.impressionsPerDay} impressions/day and avg position ≤${spec.gates.day90.positionMax}.`,
    `- **Kill/rewrite rule:** any spoke still under ${spec.gates.day90.killBelowImpressionsPerDay} impressions/day at day 90 is rewritten or \`noindex\` — not left thin.`,
    `- **Matrix:** ≥${spec.gates.matrixClicksPerMonthByDay120.toLocaleString()} clicks/month by day 120; ≥${spec.gates.directoryFormLeadsPerMonthByDay90} directory-form leads/month by day 90.`,
    '',
  );
  lines.push('## Waves', '');
  lines.push('| Wave | Published | Age | URLs | In GSC | Indexation | 14-day gate | 28-day weak | 90-day kill |');
  lines.push('|---|---|---|---|---|---|---|---|---|');
  for (const w of waveReports) {
    const g14 = w.gate14d == null ? 'too early' : w.gate14d ? 'pass' : 'fail';
    lines.push(
      `| ${w.id} | ${w.published} | ${w.ageDays}d | ${w.urlCount} | ${w.indexed} | ${w.indexationPct.toFixed(0)}% | ${g14} | ${w.earlyWarning28.length} | ${w.killCandidates.length} |`,
    );
  }
  lines.push('');
  for (const w of waveReports) {
    if (!w.killCandidates.length && !w.earlyWarning28.length && !w.underperform90.length) continue;
    lines.push(`### Wave ${w.id} actions`, '');
    if (w.killCandidates.length) {
      lines.push('**Kill/rewrite (<10 impr/day at ≥90 days):**');
      w.killCandidates.forEach((p) => lines.push(`- ${p}`));
      lines.push('');
    }
    if (w.underperform90.length && w.ageDays >= 90) {
      lines.push('**Below 90-day target (rewrite title/links or expand the table):**');
      w.underperform90.slice(0, 25).forEach((p) => lines.push(`- ${p}`));
      if (w.underperform90.length > 25) lines.push(`- … ${w.underperform90.length - 25} more`);
      lines.push('');
    }
    if (w.earlyWarning28.length && w.ageDays >= 28 && w.ageDays < 90) {
      lines.push('**28-day early warning (<10 impr/day):**');
      w.earlyWarning28.slice(0, 25).forEach((p) => lines.push(`- ${p}`));
      if (w.earlyWarning28.length > 25) lines.push(`- … ${w.earlyWarning28.length - 25} more`);
      lines.push('');
    }
  }
  lines.push('## Directory form leads', '');
  if (!fs.existsSync(LEADS_CSV)) {
    lines.push('_No data/leads/leads.csv — directory `cta_id` / source_page leads cannot be counted this week._', '');
  } else {
    lines.push(`Directory-URL submissions in the export: **${leads.total}** (target ${spec.gates.directoryFormLeadsPerMonthByDay90}/month by day 90).`, '');
  }
  console.log(lines.join('\n'));
  if (strict && waveReports.some((w) => w.killCandidates.length)) process.exit(1);
}

main();
