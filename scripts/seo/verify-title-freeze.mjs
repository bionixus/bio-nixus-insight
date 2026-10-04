#!/usr/bin/env node
/**
 * Title/meta freeze guard (growth plan Phase 0.1).
 *
 * Why: 38 title-change commits between Aug 1 and Sep 29 2026 kept re-shuffling the SERP snippet of
 * the same URLs; the Sep 2026 impression drop followed. Titles on URLs that already earn impressions
 * are frozen for 8 weeks at a time, and the two CTR override tables must stay byte-identical.
 *
 * Checks (default mode, runs in `prebuild`):
 *   1. lib/ctr-seo-overrides.mjs (served by Express SSR) and src/server/ctr-seo-overrides.js
 *      (served to React/Helmet) export the same CTR_SEO_BY_PATH table.
 *   2. Every path in data/seo/title-freeze.json still has exactly the override it had when frozen
 *      (or still has none — adding an override to a frozen URL is also a title change).
 *
 * Usage:
 *   node scripts/seo/verify-title-freeze.mjs                       # check (exit 1 on violation)
 *   node scripts/seo/verify-title-freeze.mjs --refresh             # rebuild the freeze list from
 *                                                                   #   data/gsc/current-week/Pages.csv
 *   node scripts/seo/verify-title-freeze.mjs --allow-title-change=/path-a,/path-b
 *                                                                   # accept the current override for
 *                                                                   #   those paths and re-freeze them
 *   Options: --min-impressions=100 (refresh threshold), --pages=<csv path>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', '..');

const LIB_FILE = path.join(root, 'lib', 'ctr-seo-overrides.mjs');
const MIRROR_FILE = path.join(root, 'src', 'server', 'ctr-seo-overrides.js');
const FREEZE_FILE = path.join(root, 'data', 'seo', 'title-freeze.json');
const DEFAULT_PAGES_CSV = path.join(root, 'data', 'gsc', 'current-week', 'Pages.csv');
const FREEZE_WEEKS = 8;

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const opt = (name, fallback) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};

function normalizePath(url) {
  let p;
  try {
    p = new URL(url).pathname;
  } catch {
    p = url;
  }
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else inQuotes = false;
      } else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += ch;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...body] = rows.filter((r) => r.some((c) => c.trim() !== ''));
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

async function loadTables() {
  const [lib, mirror] = await Promise.all([
    import(`${LIB_FILE}?t=${Date.now()}`),
    import(`${MIRROR_FILE}?t=${Date.now()}`),
  ]);
  return { lib: lib.CTR_SEO_BY_PATH, mirror: mirror.CTR_SEO_BY_PATH };
}

function sameOverride(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.title === b.title && a.description === b.description;
}

function diffTables(lib, mirror) {
  const problems = [];
  const keys = new Set([...Object.keys(lib), ...Object.keys(mirror)]);
  for (const key of keys) {
    if (!(key in lib)) problems.push(`${key}: present only in src/server/ctr-seo-overrides.js`);
    else if (!(key in mirror)) problems.push(`${key}: present only in lib/ctr-seo-overrides.mjs`);
    else if (!sameOverride(lib[key], mirror[key])) problems.push(`${key}: title/description differ between the two files`);
  }
  return problems;
}

function readFreeze() {
  if (!fs.existsSync(FREEZE_FILE)) return null;
  return JSON.parse(fs.readFileSync(FREEZE_FILE, 'utf8'));
}

function writeFreeze(freeze) {
  fs.mkdirSync(path.dirname(FREEZE_FILE), { recursive: true });
  const ordered = {
    ...freeze,
    entries: Object.fromEntries(Object.entries(freeze.entries).sort(([a], [b]) => a.localeCompare(b))),
  };
  fs.writeFileSync(FREEZE_FILE, `${JSON.stringify(ordered, null, 2)}\n`);
}

function addWeeks(iso, weeks) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + weeks * 7);
  return d.toISOString().slice(0, 10);
}

function refresh(lib) {
  const pagesCsv = opt('pages', DEFAULT_PAGES_CSV);
  const minImpressions = Number(opt('min-impressions', '100'));
  if (!fs.existsSync(pagesCsv)) {
    console.error(`Pages.csv not found at ${pagesCsv}`);
    process.exit(1);
  }
  const rows = parseCsv(fs.readFileSync(pagesCsv, 'utf8'));
  const today = new Date().toISOString().slice(0, 10);
  const previous = readFreeze();
  const entries = {};
  for (const r of rows) {
    const url = r['Top pages'] || r.Page || r.Pages || r.URL || r.page || r.url;
    const impressions = Number(String(r.Impressions ?? '0').replace(/,/g, ''));
    if (!url || !Number.isFinite(impressions) || impressions < minImpressions) continue;
    const p = normalizePath(url);
    const prior = previous?.entries?.[p];
    const override = lib[p] ? { title: lib[p].title, description: lib[p].description } : null;
    entries[p] = {
      impressions: Math.max(impressions, entries[p]?.impressions ?? 0),
      // Keep the original freeze date when the override is unchanged; re-freeze only when it changed.
      frozenAt: prior && sameOverride(prior.override, override) ? prior.frozenAt : today,
      override,
    };
  }
  const freeze = {
    generatedAt: today,
    source: path.relative(root, pagesCsv),
    minImpressions,
    freezeWeeks: FREEZE_WEEKS,
    note:
      'Titles/descriptions of these URLs are frozen for freezeWeeks from frozenAt. Change only via ' +
      '`node scripts/seo/verify-title-freeze.mjs --allow-title-change=/path`, once, with a GSC-backed reason.',
    entries,
  };
  writeFreeze(freeze);
  const withOverride = Object.values(entries).filter((e) => e.override).length;
  console.log(
    `Title freeze refreshed: ${Object.keys(entries).length} URLs with ≥${minImpressions} impressions ` +
      `(${withOverride} have CTR overrides) → ${path.relative(root, FREEZE_FILE)}`,
  );
}

function check(lib, mirror) {
  const failures = [];

  const tableProblems = diffTables(lib, mirror);
  if (tableProblems.length > 0) {
    failures.push(
      'CTR override tables have drifted (lib/ctr-seo-overrides.mjs vs src/server/ctr-seo-overrides.js):',
      ...tableProblems.map((p) => `  - ${p}`),
    );
  }

  const freeze = readFreeze();
  if (!freeze) {
    failures.push(`Missing ${path.relative(root, FREEZE_FILE)}. Run: node scripts/seo/verify-title-freeze.mjs --refresh`);
  } else {
    const allow = new Set(
      (opt('allow-title-change', '') || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map(normalizePath),
    );
    const today = new Date().toISOString().slice(0, 10);
    let accepted = 0;
    const violations = [];
    for (const [p, entry] of Object.entries(freeze.entries)) {
      const current = lib[p] ? { title: lib[p].title, description: lib[p].description } : null;
      if (sameOverride(entry.override, current)) continue;
      if (allow.has(p)) {
        entry.override = current;
        entry.frozenAt = today;
        accepted += 1;
        continue;
      }
      const until = addWeeks(entry.frozenAt, freeze.freezeWeeks ?? FREEZE_WEEKS);
      violations.push(
        `  - ${p} (${entry.impressions} impr, frozen ${entry.frozenAt} → ${until})\n` +
          `      frozen:  ${entry.override ? JSON.stringify(entry.override.title) : '<no override>'}\n` +
          `      current: ${current ? JSON.stringify(current.title) : '<no override>'}`,
      );
    }
    if (accepted > 0) {
      freeze.generatedAt = today;
      writeFreeze(freeze);
      console.log(`Accepted ${accepted} title change(s) and re-froze them for ${freeze.freezeWeeks ?? FREEZE_WEEKS} weeks.`);
    }
    if (violations.length > 0) {
      failures.push(
        `Frozen titles changed without --allow-title-change (${violations.length}):`,
        ...violations,
        '  Revert the change, or run: node scripts/seo/verify-title-freeze.mjs --allow-title-change=<path>',
      );
    }
  }

  if (failures.length > 0) {
    console.error(`Title freeze check FAILED\n${failures.join('\n')}`);
    process.exit(1);
  }
  const n = freeze ? Object.keys(freeze.entries).length : 0;
  console.log(`Title freeze OK: ${n} frozen URLs unchanged; override tables in sync (${Object.keys(lib).length} entries).`);
}

const { lib, mirror } = await loadTables();
if (flag('refresh')) refresh(lib);
else check(lib, mirror);
