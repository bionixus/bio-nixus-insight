/** Keep in sync with src/data/industryMarketResearchMatrix.ts published industries. */

const MATRIX_COUNTRIES = [
  'saudi-arabia',
  'uae',
  'egypt',
  'kuwait',
  'qatar',
  'oman',
  'uk',
  'usa',
  'brazil',
  'germany',
  'morocco',
  'nigeria',
  'south-africa',
  'kenya',
];

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

const CONSUMER_INDUSTRIES = [
  'fmcg',
  'retail',
  'financial-services',
  'telecom',
  'automotive',
  'hospitality',
  'technology',
  'energy',
  'real-estate',
  'media',
  'education',
  'public-sector',
];

/** @returns {{ path: string, priority: string, changefreq: string }[]}} */
export function getIndustryMatrixSitemapPages() {
  const pages = [];

  // Consumer portal hub
  pages.push({
    path: '/consumer-market-research',
    priority: '0.9',
    changefreq: 'weekly',
  });

  // Per-industry global hub pages
  for (const industry of CONSUMER_INDUSTRIES) {
    pages.push({
      path: `/market-research/${industry}`,
      priority: '0.85',
      changefreq: 'weekly',
    });
  }

  // Country × industry matrix pages
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
