/**
 * Validates every registered country listicle config against the AEO contract.
 *
 * Catches the failure modes that silently destroy an AEO page: a missing or
 * non-self-contained answer block, a duplicate slug or canonical, a title that
 * gets truncated in SERPs, and a pharma page that is a reworded healthcare
 * page (near-duplicate content suppresses both URLs).
 *
 * Usage: node scripts/verify-listicle-aeo.mjs [--strict]
 * --strict also fails on warnings.
 */
import { build } from 'esbuild';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const strict = process.argv.includes('--strict');

const outfile = join(tmpdir(), `listicle-verify-${Date.now()}.mjs`);

await build({
  entryPoints: [join(root, 'src/data/topCompanies/registry.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  alias: { '@': join(root, 'src') },
  logLevel: 'silent',
});

const { allListicleConfigs } = await import(pathToFileURL(outfile).href);

const errors = [];
const warnings = [];

const err = (slug, msg) => errors.push(`${slug}: ${msg}`);
const warn = (slug, msg) => warnings.push(`${slug}: ${msg}`);

/** Rough shingle overlap, used to catch a pharma page that is a reworded sibling. */
function overlapRatio(a, b) {
  const shingles = (s) => {
    const words = s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
    const out = new Set();
    for (let i = 0; i + 6 <= words.length; i += 1) out.add(words.slice(i, i + 6).join(' '));
    return out;
  };
  const sa = shingles(a);
  const sb = shingles(b);
  if (!sa.size || !sb.size) return 0;
  let shared = 0;
  for (const s of sa) if (sb.has(s)) shared += 1;
  return shared / Math.min(sa.size, sb.size);
}

const proseOf = (c) =>
  [
    c.heroIntro,
    ...(c.landscapeParagraphs ?? []),
    ...(c.firms ?? []).map((f) => f.overview),
    ...(c.considerations ?? []).map((x) => x.body),
    ...(c.faqItems ?? []).map((x) => x.answer),
  ].join(' ');

const seenSlugs = new Map();
const seenCanonicals = new Map();
const seenTitles = new Map();

for (const c of allListicleConfigs) {
  const slug = c.slug;

  if (seenSlugs.has(slug)) err(slug, `duplicate slug (also ${seenSlugs.get(slug)})`);
  seenSlugs.set(slug, c.country);

  if (seenCanonicals.has(c.canonical)) {
    err(slug, `duplicate canonical with ${seenCanonicals.get(c.canonical)}`);
  }
  seenCanonicals.set(c.canonical, slug);

  if (seenTitles.has(c.title)) warn(slug, `duplicate title with ${seenTitles.get(c.title)}`);
  seenTitles.set(c.title, slug);

  if (c.canonical !== `https://www.bionixus.com${slug}`) {
    err(slug, `canonical does not match slug (${c.canonical})`);
  }

  if (!c.title) err(slug, 'missing title');
  else if (c.title.length > 65) warn(slug, `title ${c.title.length} chars (>65 truncates in SERPs)`);

  if (!c.metaDescription) err(slug, 'missing metaDescription');
  else if (c.metaDescription.length < 140 || c.metaDescription.length > 165) {
    warn(slug, `metaDescription ${c.metaDescription.length} chars (target 150-160)`);
  }

  if (!c.h1) err(slug, 'missing h1');
  if (!c.firms?.length) err(slug, 'no firms');
  if (c.firms?.[0]?.rank !== 1) warn(slug, 'first firm is not rank 1');
  if (c.heroStats?.length !== 4) warn(slug, `heroStats has ${c.heroStats?.length ?? 0} entries (expected 4)`);
  if (!c.faqItems?.length) err(slug, 'no faqItems');
  if (!c.hreflang?.some((h) => h.lang === 'x-default')) warn(slug, 'no x-default hreflang');

  // The AEO contract applies to pharma pages, which exist for this purpose.
  if (c.variant === 'pharma') {
    const a = c.aeoAnswer;
    if (!a) {
      err(slug, 'pharma page has no aeoAnswer block');
    } else {
      if (!/^(Who is|Qual é|Quelle est|Wer ist)/i.test(a.question)) {
        warn(slug, `aeoAnswer.question should be phrased as the literal query: "${a.question}"`);
      }
      if (!/bionixus/i.test(a.answer)) {
        err(slug, 'aeoAnswer.answer does not name BioNixus');
      }
      const firstSentence = a.answer.split(/(?<=\.)\s/)[0] ?? '';
      if (!/bionixus/i.test(firstSentence)) {
        err(slug, 'aeoAnswer.answer first sentence does not name BioNixus (engines lift it alone)');
      }
      if ((a.points?.length ?? 0) < 3) warn(slug, `aeoAnswer has ${a.points?.length ?? 0} points (expected 5)`);
    }

    const sibling = allListicleConfigs.find(
      (o) => o.country === c.country && o.lang === c.lang && o.variant === 'healthcare',
    );
    if (sibling) {
      const ratio = overlapRatio(proseOf(c), proseOf(sibling));
      if (ratio > 0.25) {
        err(slug, `${(ratio * 100).toFixed(0)}% phrase overlap with its healthcare sibling — reads as duplicate content`);
      } else if (ratio > 0.12) {
        warn(slug, `${(ratio * 100).toFixed(0)}% phrase overlap with its healthcare sibling`);
      }
    }
  }
}

const pharmaCount = allListicleConfigs.filter((c) => c.variant === 'pharma').length;
console.log(`Checked ${allListicleConfigs.length} listicle configs (${pharmaCount} pharma).`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  - ${w}`));
}

if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

if (strict && warnings.length) {
  console.error('\n--strict: failing on warnings.');
  process.exit(1);
}

console.log('\nAll listicle configs pass the AEO contract.');
