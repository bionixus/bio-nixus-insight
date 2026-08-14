/** Keep in sync with src/data/countryKeywordPages.ts country list. */

const COUNTRY_SLUGS = [
  'united-states',
  'canada',
  'uk',
  'germany',
  'france',
  'italy',
  'spain',
  'europe',
  'saudi-arabia',
  'uae',
  'egypt',
  'qatar',
  'kuwait',
  'oman',
  'bahrain',
  'turkey',
];

/** @returns {{ path: string, priority: string, changefreq: string }[]} */
export function getCountryKeywordSitemapPages() {
  const pages = [];
  for (const slug of COUNTRY_SLUGS) {
    pages.push({
      path: `/pharma-insights-${slug}`,
      priority: '0.86',
      changefreq: 'monthly',
    });
    pages.push({
      path: `/real-world-evidence-${slug}`,
      priority: '0.86',
      changefreq: 'monthly',
    });
  }
  return pages;
}
