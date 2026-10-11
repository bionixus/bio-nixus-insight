import {
  MATRIX_COUNTRIES,
  MATRIX_COUNTRY_SLUGS_ORDERED,
  MATRIX_INDUSTRIES,
  MATRIX_INDUSTRY_SLUGS_ORDERED,
  getIndustryBofuPath,
  getIndustryListiclePath,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';
import {
  NON_PHARMA_DIRECTORY_LINKS,
  NON_PHARMA_ENTITY_HUBS,
  NON_PHARMA_RANKING_LINKS,
  type NonPharmaIndexedLink,
} from '@/data/nonPharmaInsightsLinks.generated';

export const INDUSTRIES_INSIGHTS_PATH = '/bionixus-industries/insights';
export const INDUSTRIES_INSIGHTS_CANONICAL = 'https://www.bionixus.com/bionixus-industries/insights';
export const INDUSTRIES_INSIGHTS_DATE_MODIFIED = '2026-10-11';
export const INDUSTRIES_INSIGHTS_TITLE = 'Global Industry Market Research Insights | BioNixus';
export const INDUSTRIES_INSIGHTS_DESCRIPTION =
  'BioNixus is a global market research firm across FMCG, retail, finance, real estate, automotive, technology and energy. Founded 2012, 118 clients, 48 countries.';

export const LATAM_COVERAGE_SENTENCE =
  'BioNixus is fully operational in LATAM, covered from the US office in Sheridan, Wyoming, with a strong network of local consultants, and is in the process of opening a São Paulo office by the end of 2026.';

export const INDUSTRIES_INSIGHTS_ORG_DESCRIPTION =
  'BioNixus is a global market research firm across FMCG, retail, real estate, financial services, automotive, technology, telecom, energy, hospitality, education and other B2B and B2C industries. Founded in 2012, BioNixus has served 118 clients and completed 127 studies so far in 2026 across 48 countries. Offices are in London (EC1V 2NX), Sheikh Zayed, Giza, Egypt (biggest MEA office), Dubai (Thuraya Tower 1) and the US headquarters in Sheridan, Wyoming. ' +
  LATAM_COVERAGE_SENTENCE;

export type HubRegionId = 'mena-gcc' | 'usa' | 'europe' | 'apac' | 'latam' | 'can-anz-cn' | 'africa';

export type CatalogLink = {
  href: string;
  label: string;
  kind: string;
  regionId: HubRegionId | null;
  industrySlug?: string;
  countryLabel: string;
};

export type CatalogCountryGroup = {
  label: string;
  links: CatalogLink[];
};

export type IndustrySection = {
  slug: string;
  name: string;
  introLinks: CatalogLink[];
  countries: CatalogCountryGroup[];
};

export type RegionSection = {
  id: HubRegionId;
  title: string;
  description: string;
  countries: CatalogCountryGroup[];
};

export type NonPharmaInsightsCatalog = {
  links: CatalogLink[];
  industries: IndustrySection[];
  regions: RegionSection[];
  pathways: CatalogLink[];
};

const REGION_ORDER: HubRegionId[] = [
  'mena-gcc',
  'usa',
  'europe',
  'apac',
  'latam',
  'can-anz-cn',
  'africa',
];

const REGION_COPY: Record<HubRegionId, { title: string; description: string }> = {
  'mena-gcc': {
    title: 'MENA and GCC',
    description:
      'Country studies, firm rankings and company directories across Saudi Arabia, the UAE, Egypt and the wider Middle East. BioNixus has offices in Sheikh Zayed, Giza and Dubai (Thuraya Tower 1).',
  },
  usa: {
    title: 'United States',
    description:
      'US market research from BioNixus headquarters in Sheridan, Wyoming, including cross-industry firm rankings and sector directories.',
  },
  europe: {
    title: 'Europe',
    description:
      'European market research from the London office (EC1V 2NX), with published firm rankings and sector directories across the region.',
  },
  apac: {
    title: 'Asia-Pacific',
    description:
      'Published industry pages and market research company guides for Asia-Pacific markets, including Japan, South Korea, Singapore, Malaysia and India.',
  },
  latam: {
    title: 'Latin America',
    description: LATAM_COVERAGE_SENTENCE,
  },
  'can-anz-cn': {
    title: 'Canada, Australia, New Zealand and China',
    description:
      'Market research company guides for Canada, Australia, New Zealand and China, within BioNixus coverage across 48 countries.',
  },
  africa: {
    title: 'Africa',
    description:
      'Published market research company guides and sector directories for Nigeria, Kenya, South Africa and other African markets.',
  },
};

const EXTRA_INDUSTRY_NAMES: Record<string, string> = {
  'food-beverage': 'Food and beverage',
  cosmetics: 'Beauty and personal care',
  construction: 'Construction',
  logistics: 'Logistics',
  manufacturing: 'Manufacturing',
};

const GEO_LABELS: Record<string, string> = {
  usa: 'United States',
  uk: 'United Kingdom',
  uae: 'UAE',
  gcc: 'GCC',
  dubai: 'Dubai',
  riyadh: 'Riyadh',
  'abu-dhabi': 'Abu Dhabi',
  jeddah: 'Jeddah',
  'new-zealand': 'New Zealand',
  'south-korea': 'South Korea',
  'south-africa': 'South Africa',
  'saudi-arabia': 'Saudi Arabia',
  'cote-divoire': "Côte d'Ivoire",
  china: 'China',
  canada: 'Canada',
  australia: 'Australia',
  brazil: 'Brazil',
  denmark: 'Denmark',
};

const AFRICA_EXTRAS = new Set(['ghana', 'senegal', 'angola', 'tanzania', 'uganda', 'cote-divoire']);

const PATHWAYS: Array<Pick<CatalogLink, 'href' | 'label'>> = [
  { href: '/bionixus-industries', label: 'Industries hub' },
  { href: '/b2b-industries', label: 'B2B market research' },
  { href: '/b2c-industries', label: 'B2C market research' },
  { href: '/market-research-by-industry', label: 'Market research by industry' },
  { href: '/consumer-market-research', label: 'Consumer market research' },
  { href: '/templates/mystery-shop-retail-brief', label: 'Mystery shopping retail brief' },
];

export const INDUSTRIES_INSIGHTS_FAQ = [
  {
    question: 'Which industries does this hub cover?',
    answer:
      'FMCG, retail, real estate, financial services, automotive, technology, telecom, energy, hospitality, education, the public sector, logistics, manufacturing and other B2B and B2C markets. Healthcare and pharmaceutical research is published on the healthcare blog, not in this hub.',
  },
  {
    question: 'Where does BioNixus carry out non-pharma research?',
    answer:
      'BioNixus was founded in 2012 and has served 118 clients across 48 countries, with 127 studies so far in 2026. Offices are in London (EC1V 2NX), Cairo, Dubai (Thuraya Tower 1) and the US headquarters in Sheridan, Wyoming. ' +
      LATAM_COVERAGE_SENTENCE,
  },
  {
    question: 'How is this different from the healthcare blog?',
    answer:
      'The healthcare blog covers pharmaceutical, clinical and market access research. This hub is for commercial and strategy teams in other industries. Both use the same sampling and governance standards BioNixus built for regulated work.',
  },
  {
    question: 'Can I request a country and industry study?',
    answer:
      'Yes. Use the contact form or email admin@bionixus.com with the industry, country and the decision the study needs to support.',
  },
] as const;

function countryLabel(geo: string): string {
  if (!geo) return 'Global';
  if (geo in MATRIX_COUNTRIES) return MATRIX_COUNTRIES[geo as MatrixCountrySlug].label;
  if (GEO_LABELS[geo]) return GEO_LABELS[geo];
  return geo
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function hubRegionForGeo(geo: string, directoryRegion: string | null): HubRegionId | null {
  if (geo === 'usa' || geo === 'united-states') return 'usa';
  if (geo === 'canada' || geo === 'australia' || geo === 'new-zealand' || geo === 'china') return 'can-anz-cn';
  if (geo === 'dubai' || geo === 'abu-dhabi' || geo === 'riyadh' || geo === 'jeddah' || geo === 'gcc') {
    return 'mena-gcc';
  }
  if (geo === 'denmark') return 'europe';
  if (AFRICA_EXTRAS.has(geo)) return 'africa';
  switch (directoryRegion) {
    case 'gcc':
    case 'mena':
      return 'mena-gcc';
    case 'europe':
      return 'europe';
    case 'latam':
      return 'latam';
    case 'africa':
      return 'africa';
    case 'apac':
      return 'apac';
    case 'northamerica':
      return 'usa';
    default:
      return null;
  }
}

function industryName(slug: string): string {
  if (slug in MATRIX_INDUSTRIES) return MATRIX_INDUSTRIES[slug as MatrixIndustrySlug].displayName;
  return EXTRA_INDUSTRY_NAMES[slug] ?? slug;
}

function pushUnique(target: CatalogLink[], seen: Set<string>, link: CatalogLink) {
  if (seen.has(link.href)) return;
  seen.add(link.href);
  target.push(link);
}

function groupByCountry(links: CatalogLink[]): CatalogCountryGroup[] {
  const order: string[] = [];
  const map = new Map<string, CatalogLink[]>();
  for (const link of links) {
    if (!link.regionId) continue;
    const key = link.countryLabel;
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key)!.push(link);
  }
  return order
    .sort((a, b) => a.localeCompare(b))
    .map((label) => ({
      label,
      links: map.get(label)!.slice().sort((a, b) => a.label.localeCompare(b.label)),
    }));
}

function buildCatalog(): NonPharmaInsightsCatalog {
  const links: CatalogLink[] = [];
  const seen = new Set<string>();

  const nonPharmaIndustries = MATRIX_INDUSTRY_SLUGS_ORDERED.filter(
    (slug) => !MATRIX_INDUSTRIES[slug].isHealthcareAdjacent,
  );

  for (const industrySlug of nonPharmaIndustries) {
    const industry = MATRIX_INDUSTRIES[industrySlug];
    pushUnique(links, seen, {
      href: `/market-research/${industrySlug}`,
      label: `${industry.displayName} market research`,
      kind: 'industry-hub',
      regionId: null,
      industrySlug,
      countryLabel: 'Global',
    });
    for (const countrySlug of MATRIX_COUNTRY_SLUGS_ORDERED) {
      const country = MATRIX_COUNTRIES[countrySlug];
      pushUnique(links, seen, {
        href: getIndustryBofuPath(countrySlug, industrySlug),
        label: `${industry.displayNameShort} market research in ${country.label}`,
        kind: 'country-study',
        regionId: 'mena-gcc',
        industrySlug,
        countryLabel: country.label,
      });
      pushUnique(links, seen, {
        href: getIndustryListiclePath(countrySlug, industrySlug),
        label: `Top ${industry.displayNameShort} market research companies in ${country.label}`,
        kind: 'firm-ranking',
        regionId: 'mena-gcc',
        industrySlug,
        countryLabel: country.label,
      });
    }
  }

  const indexed = [
    ...NON_PHARMA_ENTITY_HUBS,
    ...NON_PHARMA_DIRECTORY_LINKS,
    ...NON_PHARMA_RANKING_LINKS,
  ] as readonly NonPharmaIndexedLink[];

  for (const item of indexed) {
    pushUnique(links, seen, {
      href: item.href,
      label: item.label,
      kind: item.kind,
      regionId: item.kind === 'entity-hub' ? null : hubRegionForGeo(item.geo, item.directoryRegion),
      industrySlug: item.industrySlug,
      countryLabel: item.kind === 'entity-hub' ? 'Global' : countryLabel(item.geo),
    });
  }

  const pathways: CatalogLink[] = PATHWAYS.map((item) => ({
    href: item.href,
    label: item.label,
    kind: 'pathway',
    regionId: null,
    countryLabel: 'Global',
  }));
  for (const pathway of pathways) pushUnique(links, seen, pathway);

  const industrySlugs: string[] = [];
  const industrySeen = new Set<string>();
  for (const link of links) {
    if (!link.industrySlug || industrySeen.has(link.industrySlug)) continue;
    industrySeen.add(link.industrySlug);
    industrySlugs.push(link.industrySlug);
  }

  const industries: IndustrySection[] = industrySlugs.map((slug) => {
    const industryLinks = links.filter((link) => link.industrySlug === slug);
    return {
      slug,
      name: industryName(slug),
      introLinks: industryLinks.filter((link) => link.regionId === null),
      countries: groupByCountry(industryLinks.filter((link) => link.regionId !== null)),
    };
  });

  const regions: RegionSection[] = REGION_ORDER.map((id) => {
    const regionLinks = links.filter((link) => link.regionId === id);
    return {
      id,
      title: REGION_COPY[id].title,
      description: REGION_COPY[id].description,
      countries: groupByCountry(regionLinks),
    };
  }).filter((region) => region.countries.length > 0);

  return { links, industries, regions, pathways };
}

export const NON_PHARMA_INSIGHTS_CATALOG = buildCatalog();
