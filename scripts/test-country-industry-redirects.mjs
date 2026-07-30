#!/usr/bin/env node
/**
 * Regression tests for lib/country-industry-redirects.mjs
 * BIO-1259: standalone quantitative guide must not be mis-parsed as country+industry.
 */
import {
  resolveLegacyCountryIndustryMarketResearchRedirect,
  STANDALONE_LEGACY_EXCLUSIONS,
} from '../lib/country-industry-redirects.mjs';

/** @type {{ path: string; expected: string | null; label: string }[]} */
const cases = [
  {
    path: '/quantitative-healthcare-market-research',
    expected: null,
    label: 'standalone quantitative BOFU guide is excluded (BIO-1259)',
  },
  {
    path: '/usa-healthcare-market-research',
    expected: '/healthcare-market-research/united-states',
    label: 'USA healthcare legacy path still redirects to hub slug',
  },
];

let failed = 0;

if (!STANDALONE_LEGACY_EXCLUSIONS.has('/quantitative-healthcare-market-research')) {
  failed += 1;
  console.error(
    'FAIL STANDALONE_LEGACY_EXCLUSIONS missing /quantitative-healthcare-market-research',
  );
} else {
  console.log('PASS STANDALONE_LEGACY_EXCLUSIONS includes quantitative canonical');
}

for (const { path, expected, label } of cases) {
  const actual = resolveLegacyCountryIndustryMarketResearchRedirect(path);
  const ok = actual === expected;
  if (!ok) {
    failed += 1;
    console.error(`FAIL ${label}: ${path} → ${JSON.stringify(actual)} (expected ${JSON.stringify(expected)})`);
  } else {
    console.log(`PASS ${label}: ${path} → ${JSON.stringify(actual)}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} assertion(s) failed`);
  process.exit(1);
}

console.log('\nAll country-industry redirect assertions passed');
