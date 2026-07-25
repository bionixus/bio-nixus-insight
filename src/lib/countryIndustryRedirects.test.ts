import { describe, expect, it } from 'vitest';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from '../../lib/country-industry-redirects.mjs';

describe('resolveLegacyCountryIndustryMarketResearchRedirect', () => {
  it('does not redirect standalone quantitative healthcare BOFU (avoids Vercel loop)', () => {
    expect(
      resolveLegacyCountryIndustryMarketResearchRedirect('/quantitative-healthcare-market-research'),
    ).toBeNull();
  });

  it('redirects legacy usa-healthcare-market-research to healthcare hub', () => {
    expect(resolveLegacyCountryIndustryMarketResearchRedirect('/usa-healthcare-market-research')).toBe(
      '/healthcare-market-research/united-states',
    );
  });
});
