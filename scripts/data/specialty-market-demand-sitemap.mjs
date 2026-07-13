/** Keep in sync with src/data/specialtyMarketDemandContent.ts slugs. */

const SPECIALTY_MARKET_DEMAND_SLUGS = [
  'singapore-medtech-manufacturing-market',
  'singapore-pharmaceutical-market',
  'japan-general-surgical-devices-market',
  'healthcare-bioconvergence-market',
  'nupco-tender-calendar-events-2026',
  'singapore-ivd-market-access',
  'japan-neurology-devices-market',
  'japan-medical-disposables-market',
  'japan-medical-device-market-access',
  'italy-clinical-trials-market',
  'mek-inhibitors-market',
  'febrile-neutropenia-market',
];

const NOW_SLUGS = new Set([
  'singapore-medtech-manufacturing-market',
  'singapore-pharmaceutical-market',
  'japan-general-surgical-devices-market',
  'healthcare-bioconvergence-market',
  'nupco-tender-calendar-events-2026',
]);

/** @returns {{ path: string, priority: string, changefreq: string }[]} */
export function getSpecialtyMarketDemandSitemapPages() {
  return SPECIALTY_MARKET_DEMAND_SLUGS.map((slug) => ({
    path: `/${slug}`,
    priority: NOW_SLUGS.has(slug) ? '0.90' : '0.86',
    changefreq: 'monthly',
  }));
}
