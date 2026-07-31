#!/usr/bin/env node
/**
 * Regression tests for legacy country-industry BOFU redirects.
 * Run: node scripts/test-country-industry-redirects.mjs
 */
import assert from 'node:assert/strict';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from '../lib/country-industry-redirects.mjs';

const cases = [
  // Standalone guides — must NOT redirect (would create loops or break canonical URLs)
  ['/quantitative-healthcare-market-research', null],
  // Matrix GCC countries — handled by React routes, not legacy redirect
  ['/egypt-healthcare-market-research', null],
  // Non-matrix countries — redirect to healthcare hub
  ['/usa-healthcare-market-research', '/healthcare-market-research/united-states'],
  ['/brazil-healthcare-market-research', '/healthcare-market-research/brazil'],
  // Medtech BOFU — serve at canonical path
  ['/germany-medtech-market-research', null],
  // Non-matching paths
  ['/gcc-pharmaceutical-market-research', null],
  ['/healthcare-market-research', null],
];

let failed = 0;
for (const [pathname, expected] of cases) {
  const actual = resolveLegacyCountryIndustryMarketResearchRedirect(pathname);
  try {
    assert.equal(actual, expected, `${pathname}: expected ${expected}, got ${actual}`);
    console.log(`✓ ${pathname}`);
  } catch (err) {
    console.error(`✗ ${err.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`\n${failed} test(s) failed`);
  process.exit(1);
}
console.log(`\nAll ${cases.length} redirect tests passed.`);
