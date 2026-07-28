#!/usr/bin/env node
import assert from 'node:assert/strict';
import {
  resolveLegacyCountryIndustryMarketResearchRedirect,
  STANDALONE_LEGACY_EXCLUSIONS,
} from '../lib/country-industry-redirects.mjs';

assert.ok(STANDALONE_LEGACY_EXCLUSIONS.has('/quantitative-healthcare-market-research'));

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/quantitative-healthcare-market-research'),
  null,
  'standalone quantitative guide must not redirect to healthcare hub (vercel loop)',
);

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/usa-healthcare-market-research'),
  '/healthcare-market-research/united-states',
);

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/egypt-healthcare-market-research'),
  null,
  'matrix country pages are excluded from legacy resolver',
);

console.log('country-industry-redirects: ok');
