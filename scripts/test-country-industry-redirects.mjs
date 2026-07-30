#!/usr/bin/env node
/**
 * Regression guard: standalone BOFU pages must not be caught by legacy country-industry redirects.
 */
import assert from 'node:assert/strict';
import {
  resolveLegacyCountryIndustryMarketResearchRedirect,
  STANDALONE_LEGACY_EXCLUSIONS,
} from '../lib/country-industry-redirects.mjs';

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/quantitative-healthcare-market-research'),
  null,
  'quantitative guide must not redirect (prevents loop with /healthcare-market-research/quantitative)',
);

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/usa-healthcare-market-research'),
  '/healthcare-market-research/united-states',
  'legacy country-industry URLs still redirect',
);

for (const path of STANDALONE_LEGACY_EXCLUSIONS) {
  assert.equal(resolveLegacyCountryIndustryMarketResearchRedirect(path), null, `${path} excluded`);
}

console.log('country-industry redirect tests passed');
