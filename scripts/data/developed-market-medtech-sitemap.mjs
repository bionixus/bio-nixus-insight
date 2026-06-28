/** Keep in sync with src/data/developedMarketMedtechPages.ts DEVELOPED_MARKET_MEDTECH_SLUGS. */

const DEVELOPED_MARKET_MEDTECH_SLUGS = [
  'canada',
  'usa',
  'uk',
  'australia',
  'germany',
  'france',
  'japan',
  'china',
  'singapore',
  'italy',
  'spain',
  'switzerland',
  'denmark',
  'new-zealand',
  'south-korea',
  'poland',
  'malaysia',
  'brazil',
];

/** @returns {{ path: string, priority: string, changefreq: string }[]} */
export function getDevelopedMarketMedtechSitemapPages() {
  const pages = [];
  for (const slug of DEVELOPED_MARKET_MEDTECH_SLUGS) {
    pages.push({
      path: `/${slug}-medtech-market-research`,
      priority: '0.85',
      changefreq: 'weekly',
    });
    pages.push({
      path: `/insights/top-medtech-market-research-companies-${slug}-2026`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  }
  return pages;
}
