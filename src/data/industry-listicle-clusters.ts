import type { MatrixCountrySlug, MatrixIndustrySlug } from '@/data/industryMarketResearchMatrix';

export interface IndustryListicleCrossLink {
  readonly to: string;
  readonly label: string;
}

/** Paths served by rich standalone listicle pages — matrix template must not register these. */
export const DEDICATED_INDUSTRY_LISTICLE_PATHS = new Set<string>([
  '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
  '/insights/top-healthcare-market-research-companies-dubai-2026',
  '/insights/top-healthcare-market-research-companies-abu-dhabi-2026',
  '/insights/top-healthcare-market-research-companies-kuwait-2026',
  '/insights/top-healthcare-market-research-companies-riyadh-2026',
  '/insights/top-market-research-companies-saudi-arabia-2026',
  '/insights/top-market-research-companies-uae-2026',
  '/insights/top-market-research-companies-dubai-2026',
  '/insights/top-market-research-companies-abu-dhabi-2026',
  '/insights/top-market-research-companies-riyadh-2026',
  '/insights/top-market-research-companies-egypt-2026',
]);

const HEALTHCARE_ADJACENT: ReadonlySet<MatrixIndustrySlug> = new Set([
  'healthcare',
  'medtech',
  'biotech',
  'consumer-health',
]);

const GEO_GENERAL_LISTICLE: Partial<Record<MatrixCountrySlug, IndustryListicleCrossLink>> = {
  'saudi-arabia': {
    to: '/insights/top-market-research-companies-saudi-arabia-2026',
    label: 'Cross-industry market research firms in Saudi Arabia (2026)',
  },
  uae: {
    to: '/insights/top-market-research-companies-uae-2026',
    label: 'Cross-industry market research firms in the UAE (2026)',
  },
  egypt: {
    to: '/insights/top-market-research-companies-egypt-2026',
    label: 'Cross-industry market research firms in Egypt (2026 rankings)',
  },
};

const GEO_HEALTHCARE_LISTICLE: Partial<Record<MatrixCountrySlug, IndustryListicleCrossLink>> = {
  'saudi-arabia': {
    to: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
    label: 'Healthcare-only firm rankings in Saudi Arabia (2026)',
  },
  uae: {
    to: '/insights/top-healthcare-market-research-companies-dubai-2026',
    label: 'Healthcare-only firm rankings in Dubai (2026)',
  },
  egypt: {
    to: '/healthcare-market-research/egypt',
    label: 'Healthcare market research in Egypt (country hub)',
  },
};

export function getIndustryListicleCrossLinks(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
  bofuPath: string,
  industryLabel: string,
  countryLabel: string,
): IndustryListicleCrossLink[] {
  const links: IndustryListicleCrossLink[] = [
    {
      to: bofuPath,
      label: `${industryLabel} market research company — ${countryLabel} (services page)`,
    },
  ];

  const general = GEO_GENERAL_LISTICLE[countrySlug];
  if (general && industrySlug !== 'healthcare') {
    links.push(general);
  }

  if (HEALTHCARE_ADJACENT.has(industrySlug)) {
    const healthcare = GEO_HEALTHCARE_LISTICLE[countrySlug];
    if (healthcare && industrySlug !== 'healthcare') {
      links.push(healthcare);
    }
  }

  return links;
}
