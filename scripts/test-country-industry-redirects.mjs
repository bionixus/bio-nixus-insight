#!/usr/bin/env node
/**
 * Regression tests for legacy country-industry redirect resolver.
 * Prevents redirect loops on standalone pages like /quantitative-healthcare-market-research.
 */
import assert from 'node:assert/strict';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from '../lib/country-industry-redirects.mjs';

const cases = [
  { path: '/quantitative-healthcare-market-research', expected: null },
  { path: '/usa-healthcare-market-research', expected: '/healthcare-market-research/united-states' },
  { path: '/gcc-pharmaceutical-market-research', expected: null },
  { path: '/brazil-pharmaceutical-market-research', expected: null },
  { path: '/saudi-arabia-healthcare-market-research', expected: null },
];

for (const { path, expected } of cases) {
  const actual = resolveLegacyCountryIndustryMarketResearchRedirect(path);
  assert.equal(
    actual,
    expected,
    `resolveLegacyCountryIndustryMarketResearchRedirect(${path}) → ${actual}, expected ${expected}`,
  );
}

console.log(`✓ ${cases.length} country-industry redirect tests passed`);
