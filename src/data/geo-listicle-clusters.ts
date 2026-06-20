export type GeoListicleVariant = 'general' | 'healthcare';

export interface GeoListicleCluster {
  readonly geoLabel: string;
  readonly generalPath: string;
  readonly generalLabel: string;
  readonly generalRole: string;
  readonly healthcarePath?: string;
  readonly healthcareLabel?: string;
  readonly healthcareRole?: string;
}

/** Differentiates cross-industry MR listicles from healthcare-only firm rankings. */
export const GEO_LISTICLE_CLUSTERS: Record<string, GeoListicleCluster> = {
  'saudi-arabia': {
    geoLabel: 'Saudi Arabia',
    generalPath: '/insights/top-market-research-companies-saudi-arabia-2026',
    generalLabel: 'Top market research companies in Saudi Arabia (all industries)',
    generalRole: 'FMCG, tech, and pharma buyers comparing general research agencies in KSA',
    healthcarePath: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
    healthcareLabel: 'Top healthcare market research companies in Saudi Arabia',
    healthcareRole: 'SFDA-aware physician, payer, and hospital research specialists for pharma teams',
  },
  uae: {
    geoLabel: 'the UAE',
    generalPath: '/insights/top-market-research-companies-uae-2026',
    generalLabel: 'Top market research companies in the UAE (all industries)',
    generalRole: 'Cross-sector agency shortlists for UAE market entry and brand tracking programs',
  },
  dubai: {
    geoLabel: 'Dubai',
    generalPath: '/insights/top-market-research-companies-dubai-2026',
    generalLabel: 'Top market research companies in Dubai',
    generalRole: 'City-level agency rankings for Dubai free-zone and mainland market programs',
    healthcarePath: '/insights/top-healthcare-market-research-companies-dubai-2026',
    healthcareLabel: 'Top healthcare market research companies in Dubai',
    healthcareRole: 'DHA-compliant pharma fieldwork, DHCC physician access, and UAE payer research',
  },
  'abu-dhabi': {
    geoLabel: 'Abu Dhabi',
    generalPath: '/insights/top-market-research-companies-abu-dhabi-2026',
    generalLabel: 'Top market research companies in Abu Dhabi',
    generalRole: 'DOH and SEHA-context agency comparisons for Abu Dhabi market programs',
    healthcarePath: '/insights/top-healthcare-market-research-companies-abu-dhabi-2026',
    healthcareLabel: 'Top healthcare market research companies in Abu Dhabi',
    healthcareRole: 'DOH-aligned pharmaceutical research, hospital stakeholder mapping, and access evidence',
  },
  riyadh: {
    geoLabel: 'Riyadh',
    generalPath: '/insights/top-market-research-companies-riyadh-2026',
    generalLabel: 'Top market research companies in Riyadh',
    generalRole: 'Capital-city agency rankings for Saudi public and private sector buyers',
    healthcarePath: '/insights/top-healthcare-market-research-companies-riyadh-2026',
    healthcareLabel: 'Top healthcare market research companies in Riyadh',
    healthcareRole: 'Riyadh hospital network access, SFDA-context HCP studies, and KOL mapping',
  },
  egypt: {
    geoLabel: 'Egypt',
    generalPath: '/insights/top-market-research-companies-egypt-2026',
    generalLabel: 'Top market research companies in Egypt (rankings guide)',
    generalRole: 'BOFU firm shortlist with EDA regulatory context for pharma and healthcare buyers',
  },
};

export function getGeoListicleCluster(key: string): GeoListicleCluster | undefined {
  return GEO_LISTICLE_CLUSTERS[key];
}
