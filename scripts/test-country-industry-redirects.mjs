#!/usr/bin/env node
import assert from 'node:assert/strict';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from '../lib/country-industry-redirects.mjs';

// Standalone BOFU pages must not redirect (avoids loop with vercel.json service paths)
assert.equal(resolveLegacyCountryIndustryMarketResearchRedirect('/quantitative-healthcare-market-research'), null);

// Legacy country-industry URLs still redirect
assert.equal(
  resolveLegacyCountryIndustryMarketResearchRedirect('/usa-healthcare-market-research'),
  '/healthcare-market-research/united-states',
);

console.log('country-industry-redirects: ok');
