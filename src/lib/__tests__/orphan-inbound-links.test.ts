import { describe, expect, it } from 'vitest';
import { DEVELOPED_MARKET_MEDTECH_LISTICLE_LINKS } from '@/data/developedMarketMedtechPages';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';
import {
  INDUSTRIES_INSIGHT_EDITORIAL_LINKS,
  SKYRIZI_CANONICAL_PATH,
  getBlogPostPath,
} from '@/lib/blog-content-silo';

const AHREFS_ORPHAN_PATHS = [
  '/insights/top-medtech-market-research-companies-italy-2026',
  '/insights/top-medtech-market-research-companies-malaysia-2026',
  '/insights/top-medtech-market-research-companies-france-2026',
  '/insights/top-medtech-market-research-companies-poland-2026',
  '/insights/top-medtech-market-research-companies-germany-2026',
  '/bionixus-industries/insights/online-market-research-social-listening-brand-growth-2026',
  '/bionixus-industries/insights/mdf-wood-manufacturing-market-research-trackers-mea',
  '/insights/top-medtech-market-research-companies-usa-2026',
  '/insights/top-medtech-market-research-companies-australia-2026',
  '/insights/top-medtech-market-research-companies-south-korea-2026',
  '/insights/top-medtech-market-research-companies-switzerland-2026',
  '/insights/top-medtech-market-research-companies-japan-2026',
  '/insights/top-medtech-market-research-companies-uk-2026',
  '/insights/top-medtech-market-research-companies-denmark-2026',
  '/bionixus-industries/insights/financial-services-market-research-egypt-2026',
  '/insights/top-medtech-market-research-companies-canada-2026',
  '/insights/top-medtech-market-research-companies-singapore-2026',
  '/insights/top-medtech-market-research-companies-new-zealand-2026',
  '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
  '/market-reports/country/sweden',
  '/insights/top-medtech-market-research-companies-spain-2026',
  '/insights/top-medtech-market-research-companies-china-2026',
  '/insights/top-medtech-market-research-companies-brazil-2026',
] as const;

describe('Ahrefs orphan inbound recovery lists', () => {
  it('exposes every developed-market MedTech ranking URL', () => {
    const listiclePaths = DEVELOPED_MARKET_MEDTECH_LISTICLE_LINKS.map((item) => item.to);
    for (const path of AHREFS_ORPHAN_PATHS.filter((p) => p.includes('top-medtech-market-research-companies'))) {
      expect(listiclePaths).toContain(path);
    }
  });

  it('exposes the three industry insight articles and Skyrizi canonical', () => {
    expect(INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => item.to)).toEqual(
      expect.arrayContaining([
        '/bionixus-industries/insights/online-market-research-social-listening-brand-growth-2026',
        '/bionixus-industries/insights/mdf-wood-manufacturing-market-research-trackers-mea',
        '/bionixus-industries/insights/financial-services-market-research-egypt-2026',
      ]),
    );
    expect(SKYRIZI_CANONICAL_PATH).toBe(
      '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
    );
    expect(
      getBlogPostPath({
        slug: 'skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
        contentSilo: 'healthcare',
      }),
    ).toBe(SKYRIZI_CANONICAL_PATH);
  });

  it('keeps Sweden in the market-reports country registry', () => {
    expect(MARKET_CONTENT.sweden?.slug).toBe('sweden');
  });
});
