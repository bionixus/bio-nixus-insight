#!/usr/bin/env node
import assert from 'node:assert/strict';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from '../lib/country-industry-redirects.mjs';

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/quantitative-healthcare-market-research'),
  null,
  'standalone quantitative BOFU must not redirect',
);

assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/usa-healthcare-market-research'),
  '/healthcare-market-research/united-states',
);

console.log('country-industry-redirects: ok');
