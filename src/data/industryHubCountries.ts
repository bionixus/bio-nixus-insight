import {
  MATRIX_COUNTRIES,
  MATRIX_COUNTRY_SLUGS_ORDERED,
  getIndustryBofuPath,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from './industryMarketResearchMatrix';

export type IndustryHubCountry = { slug: string; label: string };

/** Countries linked from global industry hub pages (`/market-research/:industry`). */
export const INDUSTRY_HUB_COUNTRIES: IndustryHubCountry[] = [
  { label: 'Saudi Arabia', slug: 'saudi-arabia' },
  { label: 'UAE', slug: 'uae' },
  { label: 'Egypt', slug: 'egypt' },
  { label: 'Kuwait', slug: 'kuwait' },
  { label: 'Qatar', slug: 'qatar' },
  { label: 'Oman', slug: 'oman' },
  { label: 'Bahrain', slug: 'bahrain' },
  { label: 'UK', slug: 'uk' },
  { label: 'USA', slug: 'usa' },
  { label: 'Brazil', slug: 'brazil' },
  { label: 'Germany', slug: 'germany' },
  { label: 'Morocco', slug: 'morocco' },
  { label: 'Nigeria', slug: 'nigeria' },
  { label: 'South Africa', slug: 'south-africa' },
  { label: 'Kenya', slug: 'kenya' },
];

const MATRIX_COUNTRY_SET = new Set<string>(MATRIX_COUNTRY_SLUGS_ORDERED);

/** Default B2B industry slug used for country entry links on segment pages. */
export const DEFAULT_B2B_INDUSTRY_SLUG: MatrixIndustrySlug = 'technology';

/** Default B2C industry slug used for country entry links on segment pages. */
export const DEFAULT_B2C_INDUSTRY_SLUG: MatrixIndustrySlug = 'fmcg';

export function getIndustrySegmentCountryPath(
  countrySlug: string,
  industrySlug: MatrixIndustrySlug,
): string {
  if (MATRIX_COUNTRY_SET.has(countrySlug)) {
    return getIndustryBofuPath(countrySlug as MatrixCountrySlug, industrySlug);
  }
  return `/${countrySlug}-${industrySlug}-market-research`;
}

export const B2B_COUNTRY_GROUPS: Array<{ region: string; countries: IndustryHubCountry[] }> = [
  {
    region: 'MENA & GCC',
    countries: MATRIX_COUNTRY_SLUGS_ORDERED.map((slug) => ({
      slug,
      label: MATRIX_COUNTRIES[slug].label,
    })),
  },
  {
    region: 'Africa',
    countries: INDUSTRY_HUB_COUNTRIES.filter((c) =>
      ['morocco', 'nigeria', 'south-africa', 'kenya'].includes(c.slug),
    ),
  },
  {
    region: 'Europe',
    countries: INDUSTRY_HUB_COUNTRIES.filter((c) => ['uk', 'germany'].includes(c.slug)),
  },
  {
    region: 'Americas',
    countries: INDUSTRY_HUB_COUNTRIES.filter((c) => ['usa', 'brazil'].includes(c.slug)),
  },
];

export const B2C_COUNTRY_GROUPS = B2B_COUNTRY_GROUPS;

export const B2B_AREA_SERVED = B2B_COUNTRY_GROUPS.flatMap((group) =>
  group.countries.map((country) => country.label),
);

export const B2C_AREA_SERVED = B2C_COUNTRY_GROUPS.flatMap((group) =>
  group.countries.map((country) => country.label),
);
