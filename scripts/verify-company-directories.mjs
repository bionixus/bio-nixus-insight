/**
 * Quality gate for the company-directory matrix (src/data/companyDirectories).
 *
 * Every registry spoke must ship with:
 *   - >= 12 companies (<= 30), each with name / hq / type / focus / notes
 *   - >= 1,200 words of SSR-visible main text (config text + table cells)
 *   - unique title (30–70 chars) and meta description (120–170 chars) across
 *     every directory URL (registry, hubs, pre-matrix industry pages)
 *   - regulatorSource {name, url(https), asOf(YYYY-MM-DD)} + >= 1 extra source
 *   - >= 3 stats, >= 3 growth drivers, >= 5 FAQs, >= 3 BioNixus field notes
 *   - valid ItemList / FAQPage JSON-LD (built with the shared builders)
 *   - no sentence (>= 8 words) duplicated across two or more directory pages
 *   - no path collision with hand-written pharma / medtech pages
 *
 * Hubs must have unique title/meta, >= 2 intro paragraphs, >= 3 use cases, >= 3 FAQs.
 *
 * Usage: node scripts/verify-company-directories.mjs [--json]
 * Exit 1 on any failure. Wired into `prebuild`.
 */
import { build } from 'esbuild';
import { rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const asJson = process.argv.includes('--json');

const MIN_COMPANIES = 12;
const MAX_COMPANIES = 30;
const MIN_WORDS = 1200;
const MIN_FAQ = 5;
const MIN_STATS = 3;
const MIN_DRIVERS = 3;
const MIN_FIELD_NOTES = 3;
const DUP_MIN_WORDS = 8;

const outfile = join(tmpdir(), `company-directories-gate-${Date.now()}.mjs`);
await build({
  stdin: {
    contents: `
      export * from '@/data/companyDirectories';
      export { buildPharmaCompaniesFaqLd, buildDirectoryItemListLd } from '@/components/seo/pharmaCompaniesSeo';
    `,
    resolveDir: root,
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  alias: { '@': join(root, 'src') },
  logLevel: 'silent',
});
const mod = await import(pathToFileURL(outfile).href);
rmSync(outfile, { force: true });

const {
  COMPANY_DIRECTORIES,
  ADAPTED_INDUSTRY_DIRECTORIES,
  COMPANY_DIRECTORY_HUBS,
  LEGACY_DIRECTORIES,
  buildPharmaCompaniesFaqLd,
  buildDirectoryItemListLd,
} = mod;

const failures = [];
const warnings = [];
const fail = (path, msg) => failures.push({ path, msg });
const warn = (path, msg) => warnings.push({ path, msg });

const words = (s) => (s ? String(s).trim().split(/\s+/).filter(Boolean).length : 0);

function pageText(d) {
  const parts = [
    d.h1,
    d.introLead,
    d.introRest,
    ...d.stats.flatMap((s) => [s.value, s.label]),
    d.channelHeading,
    d.channelBody,
    ...d.companies.flatMap((c) => [c.name, c.hq, c.type, c.focus, c.notes]),
    ...Object.values(d.categoryBlurbs),
    ...d.growthDrivers.flatMap((g) => [g.title, g.desc]),
    ...(d.sections ?? []).flatMap((s) => [s.heading, ...s.paragraphs]),
    ...d.faq.flatMap((f) => [f.q, f.a]),
    ...(d.fieldNotes ?? []),
    ...(d.sources ?? []),
  ];
  return parts.filter(Boolean).join(' ');
}

/** Prose only (no table cells / headings) — used for cross-page duplicate detection. */
function proseText(d) {
  return [
    d.introLead,
    d.introRest,
    d.channelBody,
    ...Object.values(d.categoryBlurbs),
    ...d.growthDrivers.map((g) => g.desc),
    ...(d.sections ?? []).flatMap((s) => s.paragraphs),
    ...d.faq.map((f) => f.a),
    ...(d.fieldNotes ?? []),
  ]
    .filter(Boolean)
    .join(' ');
}

function sentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"“(])/)
    .map((s) => s.trim())
    .filter((s) => words(s) >= DUP_MIN_WORDS);
}

const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const VALID_TYPES = new Set(['Local', 'MNC', 'Regional', 'Distributor', 'Retailer', 'Developer', 'Operator', 'Government']);

// ---------------------------------------------------------------------------
// 1. Path collisions
// ---------------------------------------------------------------------------
const legacyPaths = new Set(LEGACY_DIRECTORIES.map((d) => d.path));
const allPaths = new Map();
for (const d of [...COMPANY_DIRECTORIES, ...ADAPTED_INDUSTRY_DIRECTORIES, ...COMPANY_DIRECTORY_HUBS]) {
  if (legacyPaths.has(d.path)) fail(d.path, 'collides with a hand-written directory page');
  if (allPaths.has(d.path)) fail(d.path, 'duplicate path in registry');
  allPaths.set(d.path, d);
}

// ---------------------------------------------------------------------------
// 2. Title / meta uniqueness and length (registry + industry + hubs)
// ---------------------------------------------------------------------------
const titles = new Map();
const metas = new Map();
for (const d of [...COMPANY_DIRECTORIES, ...ADAPTED_INDUSTRY_DIRECTORIES, ...COMPANY_DIRECTORY_HUBS]) {
  const t = normalize(d.title);
  const m = normalize(d.metaDescription);
  if (titles.has(t)) fail(d.path, `title duplicates ${titles.get(t)}`);
  else titles.set(t, d.path);
  if (metas.has(m)) fail(d.path, `meta description duplicates ${metas.get(m)}`);
  else metas.set(m, d.path);
  if (d.title.length < 30 || d.title.length > 70) warn(d.path, `title length ${d.title.length} (want 30–70)`);
  if (d.metaDescription.length < 120 || d.metaDescription.length > 170) {
    fail(d.path, `meta description length ${d.metaDescription.length} (want 120–170)`);
  }
}

// ---------------------------------------------------------------------------
// 3. Per-spoke content rules (registry pages only — the 18 pre-matrix pages
//    predate the gate and are checked for uniqueness/duplicates only)
// ---------------------------------------------------------------------------
const sentenceIndex = new Map(); // normalized sentence -> Set(paths)

function indexSentences(d) {
  for (const s of sentences(proseText(d))) {
    const key = normalize(s);
    if (!sentenceIndex.has(key)) sentenceIndex.set(key, new Set());
    sentenceIndex.get(key).add(d.path);
  }
}

for (const d of COMPANY_DIRECTORIES) {
  const n = d.companies.length;
  if (n < MIN_COMPANIES) fail(d.path, `${n} companies (< ${MIN_COMPANIES})`);
  if (n > MAX_COMPANIES) warn(d.path, `${n} companies (> ${MAX_COMPANIES})`);

  const seenNames = new Set();
  for (const c of d.companies) {
    for (const k of ['name', 'hq', 'type', 'focus', 'notes']) {
      if (!c[k] || !String(c[k]).trim()) fail(d.path, `company "${c.name ?? '?'}" missing ${k}`);
    }
    if (!VALID_TYPES.has(c.type)) fail(d.path, `company "${c.name}" has invalid type ${c.type}`);
    const key = normalize(c.name);
    if (seenNames.has(key)) fail(d.path, `duplicate company "${c.name}"`);
    seenNames.add(key);
    if (words(c.notes) < 6) warn(d.path, `company "${c.name}" note is thin (${words(c.notes)} words)`);
  }

  const wc = words(pageText(d));
  if (wc < MIN_WORDS) fail(d.path, `${wc} words of main text (< ${MIN_WORDS})`);

  if (d.stats.length < MIN_STATS) fail(d.path, `${d.stats.length} stats (< ${MIN_STATS})`);
  if (d.growthDrivers.length < MIN_DRIVERS) fail(d.path, `${d.growthDrivers.length} growth drivers (< ${MIN_DRIVERS})`);
  if (d.faq.length < MIN_FAQ) fail(d.path, `${d.faq.length} FAQs (< ${MIN_FAQ})`);
  if (!d.fieldNotes || d.fieldNotes.length < MIN_FIELD_NOTES) {
    fail(d.path, `${d.fieldNotes?.length ?? 0} field notes (< ${MIN_FIELD_NOTES})`);
  }
  for (const k of ['local', 'mnc', 'regional', 'trade']) {
    if (!d.categoryBlurbs?.[k]) fail(d.path, `categoryBlurbs.${k} missing`);
  }
  if (!d.channelHeading || !d.channelBody) fail(d.path, 'channel section missing');
  if (!d.introLead || !d.introRest) fail(d.path, 'intro missing');

  const r = d.regulatorSource;
  if (!r) fail(d.path, 'regulatorSource missing');
  else {
    if (!r.name) fail(d.path, 'regulatorSource.name missing');
    if (!/^https?:\/\//.test(r.url ?? '')) fail(d.path, `regulatorSource.url invalid: ${r.url}`);
    if (!ISO_DATE.test(r.asOf ?? '')) fail(d.path, `regulatorSource.asOf not YYYY-MM-DD: ${r.asOf}`);
  }
  if (!d.sources || d.sources.length < 1) fail(d.path, 'sources: need at least one supporting source');

  if (!ISO_DATE.test(d.publishedDate)) fail(d.path, `publishedDate invalid: ${d.publishedDate}`);
  if (!ISO_DATE.test(d.modifiedDate)) fail(d.path, `modifiedDate invalid: ${d.modifiedDate}`);

  if (!d.listicleTo || !d.listicleTo.startsWith('/')) fail(d.path, `listicleTo invalid: ${d.listicleTo}`);
  if (d.relatedLinks.length < 5) fail(d.path, `${d.relatedLinks.length} related links (< 5)`);
  for (const l of d.relatedLinks) {
    if (l.to === d.path) fail(d.path, 'relatedLinks includes self');
  }

  // Head-term discipline: directories never carry the listicle intent.
  if (/market research compan/i.test(d.title) || /market research compan/i.test(d.h1)) {
    fail(d.path, 'title/H1 carries "market research companies" (owned by /insights/top-*)');
  }
  if (!/\(2026/.test(d.title)) warn(d.path, 'title lacks "(2026" year marker');

  // JSON-LD builders must produce parseable output with the right counts.
  try {
    const url = `https://www.bionixus.com${d.path}`;
    const list = JSON.parse(JSON.stringify(buildDirectoryItemListLd(url, d.h1, d.companies)));
    if (list['@type'] !== 'ItemList' || list.itemListElement?.length !== n) fail(d.path, 'ItemList JSON-LD malformed');
    const faq = JSON.parse(JSON.stringify(buildPharmaCompaniesFaqLd(url, d.faq)));
    if (faq['@type'] !== 'FAQPage' || faq.mainEntity?.length !== d.faq.length) fail(d.path, 'FAQPage JSON-LD malformed');
  } catch (e) {
    fail(d.path, `JSON-LD build threw: ${e.message}`);
  }

  indexSentences(d);
}

for (const d of ADAPTED_INDUSTRY_DIRECTORIES) indexSentences(d);

// ---------------------------------------------------------------------------
// 4. Cross-page duplicate sentences
// ---------------------------------------------------------------------------
for (const [key, paths] of sentenceIndex) {
  if (paths.size > 1) {
    const list = [...paths];
    fail(list[1], `sentence duplicated across ${paths.size} pages (also ${list[0]}): "${key.slice(0, 90)}…"`);
  }
}

// ---------------------------------------------------------------------------
// 5. Hubs
// ---------------------------------------------------------------------------
for (const h of COMPANY_DIRECTORY_HUBS) {
  if (!h.intro || h.intro.length < 2) fail(h.path, 'hub needs >= 2 intro paragraphs');
  if (!h.useCases || h.useCases.length < 3) fail(h.path, 'hub needs >= 3 use cases');
  if (!h.faq || h.faq.length < 3) fail(h.path, 'hub needs >= 3 FAQs');
  if (h.kind === 'country' && !h.countrySlug) fail(h.path, 'country hub missing countrySlug');
  if (h.kind === 'entity' && !h.entity) fail(h.path, 'entity hub missing entity');
}

// Every registry spoke's hubs must exist when referenced.
const hubPaths = new Set(COMPANY_DIRECTORY_HUBS.map((h) => h.path));
for (const d of COMPANY_DIRECTORIES) {
  for (const k of ['master', 'country', 'entity']) {
    const p = d.hubs?.[k];
    if (p && !hubPaths.has(p)) fail(d.path, `references hub ${p} which is not published`);
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
const summary = {
  spokes: COMPANY_DIRECTORIES.length,
  industryPages: ADAPTED_INDUSTRY_DIRECTORIES.length,
  hubs: COMPANY_DIRECTORY_HUBS.length,
  legacyPages: LEGACY_DIRECTORIES.length,
  failures: failures.length,
  warnings: warnings.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, failures, warnings }, null, 2));
} else {
  console.log(
    `verify-company-directories: ${summary.spokes} spokes, ${summary.hubs} hubs, ${summary.industryPages} industry pages, ${summary.legacyPages} legacy pages`,
  );
  for (const w of warnings) console.warn(`  warn  ${w.path}: ${w.msg}`);
  for (const f of failures) console.error(`  FAIL  ${f.path}: ${f.msg}`);
  if (failures.length === 0) console.log('  OK — all directory pages pass the quality gate.');
}

process.exit(failures.length > 0 ? 1 : 0);
