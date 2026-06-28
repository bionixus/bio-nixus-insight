/**
 * 301 targets for legacy `/{country}-{industry}-market-research` URLs outside the GCC matrix.
 * Keep in sync with resolveCountryIndustryMarketResearchPath in src/data/industryHubCountries.ts.
 */

const MATRIX_COUNTRIES = new Set([
  'saudi-arabia',
  'uae',
  'egypt',
  'kuwait',
  'qatar',
  'oman',
  'bahrain',
]);

const INDUSTRY_SLUGS = new Set([
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
]);

const HEALTHCARE_ADJACENT = new Set(['healthcare', 'medtech', 'biotech', 'consumer-health']);

/** Index slug → `/healthcare-market-research/{slug}` segment when different. */
const HEALTHCARE_HUB_SLUG = {
  usa: 'united-states',
};

const PHARMA_BOFU_BY_COUNTRY = {
  usa: '/pharmaceutical-market-research-usa',
  uk: '/pharmaceutical-market-research-uk',
  brazil: '/brazil-pharmaceutical-market-research',
  germany: '/pharmaceutical-market-research-germany',
  france: '/pharmaceutical-market-research-france',
  italy: '/pharmaceutical-market-research-italy',
  spain: '/pharmaceutical-market-research-spain',
  canada: '/pharmaceutical-market-research-canada',
  australia: '/pharmaceutical-market-research-australia',
  japan: '/pharmaceutical-market-research-japan',
  china: '/pharmaceutical-market-research-china',
  'south-korea': '/pharmaceutical-market-research-south-korea',
  singapore: '/pharmaceutical-market-research-singapore',
  dubai: '/pharmaceutical-market-research-dubai',
};

/** Keep in sync with src/data/developedMarketMedtechPages.ts DEVELOPED_MARKET_MEDTECH_SLUGS. */
const DEVELOPED_MARKET_MEDTECH_COUNTRIES = new Set([
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
]);

const LEGACY_PATH = /^\/([a-z0-9-]+)-([a-z0-9-]+)-market-research$/;

/**
 * @param {string} pathname e.g. /usa-healthcare-market-research
 * @returns {string | null} redirect target or null when not a legacy BOFU URL
 */
export function resolveLegacyCountryIndustryMarketResearchRedirect(pathname) {
  const match = LEGACY_PATH.exec(pathname);
  if (!match) return null;

  const countrySlug = match[1];
  const industrySlug = match[2];

  if (!INDUSTRY_SLUGS.has(industrySlug)) return null;
  if (MATRIX_COUNTRIES.has(countrySlug)) return null;

  if (industrySlug === 'medtech' && DEVELOPED_MARKET_MEDTECH_COUNTRIES.has(countrySlug)) {
    return null;
  }

  if (HEALTHCARE_ADJACENT.has(industrySlug)) {
    if (industrySlug !== 'healthcare' && PHARMA_BOFU_BY_COUNTRY[countrySlug]) {
      return PHARMA_BOFU_BY_COUNTRY[countrySlug];
    }
    const healthcareSlug = HEALTHCARE_HUB_SLUG[countrySlug] ?? countrySlug;
    return `/healthcare-market-research/${healthcareSlug}`;
  }

  return `/market-research/${industrySlug}`;
}
