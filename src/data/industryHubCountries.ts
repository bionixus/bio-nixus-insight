import {
  MATRIX_COUNTRIES,
  MATRIX_COUNTRY_SLUGS_ORDERED,
  getIndustryBofuPath,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from './industryMarketResearchMatrix';
import { sortBySegmentCountryPriority } from './segmentCountryOrder';

export type IndustryHubCountry = { slug: string; label: string };

/** Countries linked from global industry hub pages (`/market-research/:industry`). */
export const INDUSTRY_HUB_COUNTRIES: IndustryHubCountry[] = sortBySegmentCountryPriority([
  { label: 'USA', slug: 'usa' },
  { label: 'UK', slug: 'uk' },
  { label: 'Germany', slug: 'germany' },
  { label: 'Brazil', slug: 'brazil' },
  { label: 'UAE', slug: 'uae' },
  { label: 'Saudi Arabia', slug: 'saudi-arabia' },
  { label: 'Egypt', slug: 'egypt' },
  { label: 'Kuwait', slug: 'kuwait' },
  { label: 'Qatar', slug: 'qatar' },
  { label: 'Oman', slug: 'oman' },
  { label: 'Bahrain', slug: 'bahrain' },
  { label: 'Morocco', slug: 'morocco' },
  { label: 'Nigeria', slug: 'nigeria' },
  { label: 'South Africa', slug: 'south-africa' },
  { label: 'Kenya', slug: 'kenya' },
]);

const MATRIX_COUNTRY_SET = new Set<string>(MATRIX_COUNTRY_SLUGS_ORDERED);

/** Default B2B industry slug used for country entry links on segment pages. */
export const DEFAULT_B2B_INDUSTRY_SLUG: MatrixIndustrySlug = 'technology';

/** Default B2C industry slug used for country entry links on segment pages. */
export const DEFAULT_B2C_INDUSTRY_SLUG: MatrixIndustrySlug = 'fmcg';

export function getIndustrySegmentCountryPath(
  countrySlug: string,
  industrySlug: MatrixIndustrySlug,
): string {
  return resolveCountryIndustryMarketResearchPath(countrySlug, industrySlug);
}

const HEALTHCARE_ADJACENT_INDUSTRIES: ReadonlySet<MatrixIndustrySlug> = new Set([
  'healthcare',
  'medtech',
  'biotech',
  'consumer-health',
]);

function findIndexCountry(slug: string): MarketResearchIndexCountry | undefined {
  return MARKET_RESEARCH_BY_INDUSTRY_COUNTRIES.find((country) => country.slug === slug);
}

/** Canonical target for `/{country}-{industry}-market-research` outside the GCC matrix. */
export function resolveCountryIndustryMarketResearchPath(
  countrySlug: string,
  industrySlug: MatrixIndustrySlug,
): string {
  if (MATRIX_COUNTRY_SET.has(countrySlug)) {
    return getIndustryBofuPath(countrySlug as MatrixCountrySlug, industrySlug);
  }

  const country: MarketResearchIndexCountry =
    findIndexCountry(countrySlug) ?? { slug: countrySlug, label: countrySlug };

  if (HEALTHCARE_ADJACENT_INDUSTRIES.has(industrySlug)) {
    if (industrySlug !== 'healthcare') {
      const pharmaPath = getPharmaBofuPathForIndexCountry(country);
      if (pharmaPath) return pharmaPath;
    }
    return getHealthcareHubPathForIndexCountry(country);
  }

  return `/market-research/${industrySlug}`;
}

export const B2B_COUNTRY_GROUPS: Array<{ region: string; countries: IndustryHubCountry[] }> = [
  {
    region: 'Americas',
    countries: sortBySegmentCountryPriority(
      INDUSTRY_HUB_COUNTRIES.filter((country) => ['usa', 'brazil'].includes(country.slug)),
    ),
  },
  {
    region: 'Europe',
    countries: sortBySegmentCountryPriority(
      INDUSTRY_HUB_COUNTRIES.filter((country) => ['uk', 'germany'].includes(country.slug)),
    ),
  },
  {
    region: 'MENA & GCC',
    countries: sortBySegmentCountryPriority(
      MATRIX_COUNTRY_SLUGS_ORDERED.map((slug) => ({
        slug,
        label: MATRIX_COUNTRIES[slug].label,
      })),
    ),
  },
  {
    region: 'Africa',
    countries: sortBySegmentCountryPriority(
      INDUSTRY_HUB_COUNTRIES.filter((country) =>
        ['morocco', 'nigeria', 'south-africa', 'kenya'].includes(country.slug),
      ),
    ),
  },
];

export const B2C_COUNTRY_GROUPS = B2B_COUNTRY_GROUPS;

export const B2B_AREA_SERVED = B2B_COUNTRY_GROUPS.flatMap((group) =>
  group.countries.map((country) => country.label),
);

export const B2C_AREA_SERVED = B2C_COUNTRY_GROUPS.flatMap((group) =>
  group.countries.map((country) => country.label),
);

export type MarketResearchIndexCountry = IndustryHubCountry & {
  /** Slug used for `/healthcare-market-research/{slug}` when different from industry paths (e.g. usa → united-states). */
  healthcareSlug?: string;
};

export type MarketResearchIndexRegion = {
  region: string;
  description: string;
  countries: MarketResearchIndexCountry[];
};

/** Full country index for `/market-research-by-industry` — global heritage, all live markets. */
export const MARKET_RESEARCH_BY_INDUSTRY_GROUPS: MarketResearchIndexRegion[] = [
  {
    region: 'Americas',
    description:
      'United States headquarters, Latin America field hubs, and bilingual programmes for pharma, healthcare, and cross-industry buyers across North and South America.',
    countries: [
      { slug: 'usa', label: 'United States', healthcareSlug: 'united-states' },
      { slug: 'canada', label: 'Canada', healthcareSlug: 'canada' },
      { slug: 'brazil', label: 'Brazil', healthcareSlug: 'brazil' },
    ],
  },
  {
    region: 'Europe',
    description:
      'London regional office and coordinated EU5+ fieldwork for HTA-aware pharmaceutical research and B2B/B2C industry programmes.',
    countries: [
      { slug: 'uk', label: 'United Kingdom', healthcareSlug: 'uk' },
      { slug: 'germany', label: 'Germany', healthcareSlug: 'germany' },
      { slug: 'france', label: 'France', healthcareSlug: 'france' },
      { slug: 'italy', label: 'Italy', healthcareSlug: 'italy' },
      { slug: 'spain', label: 'Spain', healthcareSlug: 'spain' },
      { slug: 'europe', label: 'Europe (multi-market)', healthcareSlug: 'europe' },
    ],
  },
  {
    region: 'MENA & GCC',
    description:
      'Deep GCC heritage with country offices, regulator-aware pharmaceutical research, and the fullest sixteen-industry matrix coverage.',
    countries: [
      ...MATRIX_COUNTRY_SLUGS_ORDERED.map((slug) => ({
        slug,
        label: MATRIX_COUNTRIES[slug].label,
      })),
      { slug: 'turkey', label: 'Turkey', healthcareSlug: 'turkey' },
    ],
  },
  {
    region: 'Africa',
    description:
      'Cairo regional hub and pan-African field partners for hospital, payer, and consumer research beyond North Africa.',
    countries: [
      { slug: 'morocco', label: 'Morocco', healthcareSlug: 'morocco' },
      { slug: 'nigeria', label: 'Nigeria', healthcareSlug: 'nigeria' },
      { slug: 'south-africa', label: 'South Africa', healthcareSlug: 'south-africa' },
      { slug: 'kenya', label: 'Kenya', healthcareSlug: 'kenya' },
    ],
  },
  {
    region: 'Asia-Pacific',
    description:
      'APAC pharmaceutical and industry research through local moderators, hospital networks, and payer-aware mixed-method designs.',
    countries: [
      { slug: 'japan', label: 'Japan', healthcareSlug: 'japan' },
      { slug: 'china', label: 'China', healthcareSlug: 'china' },
      { slug: 'india', label: 'India', healthcareSlug: 'india' },
      { slug: 'south-korea', label: 'South Korea', healthcareSlug: 'south-korea' },
      { slug: 'singapore', label: 'Singapore', healthcareSlug: 'singapore' },
      { slug: 'australia', label: 'Australia', healthcareSlug: 'australia' },
    ],
  },
  {
    region: 'City hubs',
    description:
      'Metro-specific healthcare and pharmaceutical entry points for executive buyers targeting Dubai, Abu Dhabi, Riyadh, and Jeddah.',
    countries: [
      { slug: 'dubai', label: 'Dubai', healthcareSlug: 'dubai' },
      { slug: 'abu-dhabi', label: 'Abu Dhabi', healthcareSlug: 'abu-dhabi' },
      { slug: 'riyadh', label: 'Riyadh', healthcareSlug: 'riyadh' },
      { slug: 'jeddah', label: 'Jeddah', healthcareSlug: 'jeddah' },
    ],
  },
];

export const MARKET_RESEARCH_BY_INDUSTRY_COUNTRIES: MarketResearchIndexCountry[] =
  MARKET_RESEARCH_BY_INDUSTRY_GROUPS.flatMap((group) => group.countries);

const americasGroup = MARKET_RESEARCH_BY_INDUSTRY_GROUPS.find((group) => group.region === 'Americas');
const europeGroup = MARKET_RESEARCH_BY_INDUSTRY_GROUPS.find((group) => group.region === 'Europe');
const menaGroup = MARKET_RESEARCH_BY_INDUSTRY_GROUPS.find((group) => group.region === 'MENA & GCC');
const africaGroup = MARKET_RESEARCH_BY_INDUSTRY_GROUPS.find((group) => group.region === 'Africa');
const apacGroup = MARKET_RESEARCH_BY_INDUSTRY_GROUPS.find((group) => group.region === 'Asia-Pacific');

/** Regional coverage for `/bionixus-industries` — LATAM and APAC called out explicitly. */
export const BIONIXUS_INDUSTRIES_REGION_GROUPS: MarketResearchIndexRegion[] = [
  {
    region: 'North America',
    description:
      'US global headquarters in Wyoming plus Canada — FDA-aware pharma, medtech, and cross-industry programmes with harmonised North American readouts.',
    countries:
      americasGroup?.countries.filter((country) => ['usa', 'canada'].includes(country.slug)) ?? [],
  },
  {
    region: 'Latin America (LATAM)',
    description:
      'Portuguese and Spanish field teams across Brazil, Mexico, Colombia, and Andean markets — ANVISA-aware pharma, hospital procurement, and consumer research with bilingual moderation.',
    countries:
      americasGroup?.countries.filter((country) => country.slug === 'brazil') ?? [],
  },
  ...(europeGroup ? [europeGroup] : []),
  ...(menaGroup ? [menaGroup] : []),
  ...(africaGroup ? [africaGroup] : []),
  {
    region: 'Asia-Pacific (APAC)',
    description:
      apacGroup?.description ??
      'APAC pharmaceutical and industry research through local moderators, hospital networks, and payer-aware mixed-method designs.',
    countries: apacGroup?.countries ?? [],
  },
];

export function isMatrixCountrySlug(slug: string): slug is MatrixCountrySlug {
  return MATRIX_COUNTRY_SET.has(slug);
}

export function getHealthcareHubPathForIndexCountry(country: MarketResearchIndexCountry): string {
  if (isMatrixCountrySlug(country.slug)) {
    return MATRIX_COUNTRIES[country.slug].healthcareHubPath;
  }
  const healthcareSlug = country.healthcareSlug ?? country.slug;
  return `/healthcare-market-research/${healthcareSlug}`;
}

/** Known pharmaceutical BOFU URLs outside the GCC matrix. */
const PHARMA_BOFU_PATH_BY_SLUG: Partial<Record<string, string>> = {
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

export function getPharmaBofuPathForIndexCountry(country: MarketResearchIndexCountry): string | undefined {
  if (isMatrixCountrySlug(country.slug)) {
    return MATRIX_COUNTRIES[country.slug].pharmaBofuPath;
  }
  return PHARMA_BOFU_PATH_BY_SLUG[country.slug];
}

export function getMidFunnelPathForIndexCountry(country: MarketResearchIndexCountry): string | undefined {
  if (isMatrixCountrySlug(country.slug)) {
    return MATRIX_COUNTRIES[country.slug].midFunnelPath;
  }
  if (country.slug === 'usa') return '/healthcare-market-research-usa';
  if (country.slug === 'uk') return '/healthcare-market-research-uk';
  return undefined;
}
