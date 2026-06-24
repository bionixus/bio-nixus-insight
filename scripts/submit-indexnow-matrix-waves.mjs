#!/usr/bin/env node
/**
 * IndexNow batch for industry matrix — 6 URLs per industry wave (3 BOFU + 3 listicles)
 * plus hub. Matches docs/seo/industry-matrix-ctr-playbook-2026.md
 *
 * Usage:
 *   node scripts/submit-indexnow-matrix-waves.mjs              # all 16 industries
 *   node scripts/submit-indexnow-matrix-waves.mjs medtech       # one industry
 *   node scripts/submit-indexnow-matrix-waves.mjs --dry-run
 */
import { submitToIndexNow } from './lib/indexnow-submit.mjs';

const BASE = 'https://www.bionixus.com';
const COUNTRIES = ['saudi-arabia', 'uae', 'egypt', 'kuwait', 'qatar', 'oman', 'bahrain'];
const INDUSTRIES = [
  'medtech',
  'healthcare',
  'biotech',
  'consumer-health',
  'fmcg',
  'retail',
  'financial-services',
  'telecom',
  'technology',
  'energy',
  'real-estate',
  'automotive',
  'hospitality',
  'public-sector',
  'education',
  'media',
];

function waveUrls(industry) {
  const urls = [`${BASE}/market-research-by-industry`];
  for (const country of COUNTRIES) {
    urls.push(`${BASE}/${country}-${industry}-market-research`);
    urls.push(`${BASE}/insights/top-${industry}-market-research-companies-${country}-2026`);
  }
  return urls;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const filter = args.find((a) => !a.startsWith('--'));
  const industries = filter ? INDUSTRIES.filter((i) => i === filter) : INDUSTRIES;

  if (filter && industries.length === 0) {
    console.error(`Unknown industry slug: ${filter}`);
    console.error(`Valid: ${INDUSTRIES.join(', ')}`);
    process.exit(1);
  }

  const allUrls = industries.flatMap((ind) => waveUrls(ind));
  console.log(`Matrix IndexNow: ${industries.length} industry wave(s), ${allUrls.length} URL(s)`);

  if (dryRun) {
    allUrls.forEach((u) => console.log(u));
    return;
  }

  const result = await submitToIndexNow(allUrls);
  if (!result.ok) {
    console.error('IndexNow failed:', result.error);
    process.exit(1);
  }
  console.log(`IndexNow OK: ${result.submitted} URL(s)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
