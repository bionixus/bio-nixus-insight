#!/usr/bin/env node
/**
 * Regression guard: standalone BOFU paths must not redirect to healthcare hub slugs.
 */
import assert from 'node:assert/strict';
import {
  STANDALONE_LEGACY_EXCLUSIONS,
  resolveLegacyCountryIndustryMarketResearchRedirect,
} from '../lib/country-industry-redirects.mjs';

const mustNotRedirect = [
  '/quantitative-healthcare-market-research',
  '/brazil-healthcare-market-research',
  '/egypt-healthcare-market-research',
  '/gcc-pharmaceutical-market-research',
];

for (const path of mustNotRedirect) {
  const target = resolveLegacyCountryIndustryMarketResearchRedirect(path);
  assert.equal(target, null, `expected no redirect for ${path}, got ${target}`);
}

assert.ok(
  STANDALONE_LEGACY_EXCLUSIONS.has('/quantitative-healthcare-market-research'),
  'quantitative standalone path must be excluded',
);

const shouldRedirect = [
  ['/usa-healthcare-market-research', '/healthcare-market-research/united-states'],
  ['/germany-healthcare-market-research', '/healthcare-market-research/germany'],
];

for (const [path, expected] of shouldRedirect) {
  const target = resolveLegacyCountryIndustryMarketResearchRedirect(path);
  assert.equal(target, expected, `redirect mismatch for ${path}`);
}

console.log('test-country-industry-redirects: OK');
