#!/usr/bin/env node
import assert from 'node:assert/strict';
import {
  resolveLegacyCountryIndustryMarketResearchRedirect,
  STANDALONE_LEGACY_EXCLUSIONS,
} from '../lib/country-industry-redirects.mjs';

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/quantitative-healthcare-market-research'),
  null,
  'standalone quantitative guide must not redirect (avoids vercel loop)',
);

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/usa-healthcare-market-research'),
  '/healthcare-market-research/united-states',
);

assert(STANDALONE_LEGACY_EXCLUSIONS.has('/quantitative-healthcare-market-research'));

console.log('country-industry-redirects: ok');
