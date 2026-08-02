#!/usr/bin/env node
/**
 * Regression tests for legacy country-industry BOFU redirects.
 * Prevents redirect loops on standalone pages like /quantitative-healthcare-market-research.
 */
import assert from 'node:assert/strict';
import {
  resolveLegacyCountryIndustryMarketResearchRedirect,
  STANDALONE_LEGACY_EXCLUSIONS,
} from '../lib/country-industry-redirects.mjs';

const cases = [
  // Standalone pages must NOT redirect (would loop with vercel.json)
  ['/quantitative-healthcare-market-research', null],
  ['/brazil-healthcare-market-research', null],
  // Legacy BOFU pages should still redirect
  ['/usa-healthcare-market-research', '/healthcare-market-research/united-states'],
  ['/germany-healthcare-market-research', '/healthcare-market-research/germany'],
  // Non-matching paths
  ['/gcc-pharmaceutical-market-research', null],
  ['/qualitative-market-research', null],
];

let passed = 0;
for (const [input, expected] of cases) {
  const actual = resolveLegacyCountryIndustryMarketResearchRedirect(input);
  assert.equal(actual, expected, `${input}: expected ${expected}, got ${actual}`);
  passed++;
}

assert.ok(
  STANDALONE_LEGACY_EXCLUSIONS.has('/quantitative-healthcare-market-research'),
  'quantitative page must be excluded',
);

console.log(`✓ ${passed} redirect cases passed`);
