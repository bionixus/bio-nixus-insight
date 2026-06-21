/**
 * Inject MRM validation references into BIO-435 Day 1 scaffold JSON files.
 * Usage: node scripts/inject-mrm-refs-bio435.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/bio435-day1-manifest.json'), 'utf8'),
);

const REFS = {
  'ema-hta-evidence-requirements-europe-2026': { section: 1, status: 'Approved with caveats' },
  'fda-real-world-evidence-market-access-usa-2026': { section: 2, status: 'Approved with caveats' },
  'saudi-healthcare-market-research-guide-ar-2026': { section: 3, status: 'Approved with caveats' },
  'pharmamarktforschung-deutschland-2026': { section: 4, status: 'Approved' },
  'etudes-marche-pharmaceutique-france-2026': { section: 5, status: 'Approved with caveats' },
  'investigacion-mercado-farmaceutico-espana-2026': { section: 6, status: 'Approved with caveats' },
  'pesquisa-mercado-farmaceutico-brasil-anvisa-2026': { section: 7, status: 'Approved with caveats' },
  'pharmaceutical-market-research-china-2026': { section: 8, status: 'Approved with caveats' },
  'farmacevticheskie-issledovaniya-rynka-2026': { section: 9, status: 'Approved with caveats' },
};

for (const { slug } of manifest.articles) {
  const ref = REFS[slug];
  if (!ref) continue;
  const filePath = path.join(__dirname, 'data', `${slug}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data._mrmValidation = {
    issue: 'BIO-437',
    doc: 'docs/seo/daily/bio-437-data-validation-2026-06-18.md',
    section: ref.section,
    status: ref.status,
    validatedAt: '2026-06-18',
  };
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
  console.log('Updated', slug);
}
