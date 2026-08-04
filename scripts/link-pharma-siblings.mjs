/**
 * Cross-links existing general/healthcare country listicles to their new
 * pharmaceutical sibling, so each country's trio reinforces one entity rather
 * than sitting as three orphan pages.
 *
 * Inserts a single entry at the top of the config's `related` array, skipping
 * any file that already links to the target. Idempotent.
 *
 * Usage: node scripts/link-pharma-siblings.mjs [--dry-run]
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dryRun = process.argv.includes('--dry-run');

/** [config file, pharma slug, link label] */
const LINKS = [
  // Phase 1 — GCC
  ['gcc/ksa.general.en.ts', 'saudi-arabia', 'Saudi Arabia'],
  ['gcc/ksa.healthcare.en.ts', 'saudi-arabia', 'Saudi Arabia'],
  ['gcc/riyadh.general.en.ts', 'saudi-arabia', 'Saudi Arabia'],
  ['gcc/uae.general.en.ts', 'uae', 'the UAE'],
  ['gcc/dubai.general.en.ts', 'uae', 'the UAE'],
  ['gcc/dubai.healthcare.en.ts', 'uae', 'the UAE'],
  ['gcc/abu-dhabi.general.en.ts', 'uae', 'the UAE'],
  ['gcc/abu-dhabi.healthcare.en.ts', 'uae', 'the UAE'],
  ['gcc/qatar.general.en.ts', 'qatar', 'Qatar'],
  ['gcc/qatar.healthcare.en.ts', 'qatar', 'Qatar'],
  ['gcc/kuwait.general.en.ts', 'kuwait', 'Kuwait'],
  ['gcc/kuwait.healthcare.en.ts', 'kuwait', 'Kuwait'],
  ['gcc/oman.general.en.ts', 'oman', 'Oman'],
  ['gcc/oman.healthcare.en.ts', 'oman', 'Oman'],
  ['gcc/bahrain.general.en.ts', 'bahrain', 'Bahrain'],
  ['gcc/bahrain.healthcare.en.ts', 'bahrain', 'Bahrain'],
  // Phase 2 — wider Middle East
  ['mena/egypt.healthcare.en.ts', 'egypt', 'Egypt'],
  ['europe/turkey.healthcare.en.ts', 'turkey', 'Turkey'],
  // Phase 3 — Europe G5
  ['europe/uk.healthcare.en.ts', 'uk', 'the UK'],
  ['europe/germany.healthcare.en.ts', 'germany', 'Germany'],
  ['europe/france.healthcare.en.ts', 'france', 'France'],
  ['europe/italy.healthcare.en.ts', 'italy', 'Italy'],
  ['europe/spain.healthcare.en.ts', 'spain', 'Spain'],
];

let changed = 0;
let skipped = 0;
let missing = 0;

for (const [relPath, country, label] of LINKS) {
  const file = join(root, 'src/data/topCompanies', relPath);
  if (!existsSync(file)) {
    console.warn(`MISSING ${relPath}`);
    missing += 1;
    continue;
  }

  const slug = `/insights/top-pharmaceutical-market-research-companies-${country}-2026`;
  const src = readFileSync(file, 'utf8');

  if (src.includes(slug)) {
    skipped += 1;
    continue;
  }

  const marker = '  related: [';
  const idx = src.indexOf(marker);
  if (idx === -1) {
    console.warn(`NO related[] ARRAY in ${relPath}`);
    missing += 1;
    continue;
  }

  const insertAt = idx + marker.length;
  const entry = `\n    { to: '${slug}', label: 'Top Pharmaceutical Market Research Companies in ${label}' },`;
  const next = src.slice(0, insertAt) + entry + src.slice(insertAt);

  if (!dryRun) writeFileSync(file, next, 'utf8');
  console.log(`${dryRun ? 'WOULD LINK' : 'LINKED'} ${relPath} -> ${slug}`);
  changed += 1;
}

console.log(`\nlinked: ${changed}  already-linked: ${skipped}  missing: ${missing}`);
