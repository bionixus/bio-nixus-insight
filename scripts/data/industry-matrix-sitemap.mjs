/** Keep in sync with src/data/industryMarketResearchMatrix.ts published industries. */

const MATRIX_COUNTRIES = ['saudi-arabia', 'uae', 'egypt'];

const MATRIX_INDUSTRIES = [
  'medtech',
  'healthcare',
  'biotech',
  'consumer-health',
  'fmcg',
  'retail',
  'financial-services',
  'telecom',
  'technology',
  'energy',
  'real-estate',
  'automotive',
  'hospitality',
  'public-sector',
  'education',
  'media',
];

/** @returns {{ path: string, priority: string, changefreq: string }[]}} */
export function getIndustryMatrixSitemapPages() {
  const pages = [];
  for (const country of MATRIX_COUNTRIES) {
    for (const industry of MATRIX_INDUSTRIES) {
      pages.push({
        path: `/${country}-${industry}-market-research`,
        priority: '0.85',
        changefreq: 'weekly',
      });
      pages.push({
        path: `/insights/top-${industry}-market-research-companies-${country}-2026`,
        priority: '0.8',
        changefreq: 'monthly',
      });
    }
  }
  return pages;
}
