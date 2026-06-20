export type GeoMarketPageVariant = 'global-websites' | 'healthcare-mr' | 'healthcare-mr-full-name';

export interface GeoMarketPageCluster {
  readonly countryName: string;
  readonly globalWebsitesPath: string;
  readonly globalWebsitesLabel: string;
  readonly globalRole: string;
  readonly healthcareMrPath: string;
  readonly healthcareMrLabel: string;
  readonly healthcareRole: string;
  readonly healthcareFullNamePath?: string;
  readonly healthcareFullNameLabel?: string;
  readonly healthcareFullNameRole?: string;
}

/** Pairs global go-to-market blueprints with healthcare market research service hubs. */
export const GEO_MARKET_PAGE_CLUSTERS: Record<string, GeoMarketPageCluster> = {
  'saudi-arabia': {
    countryName: 'Saudi Arabia',
    globalWebsitesPath: '/global-websites/saudi-arabia',
    globalWebsitesLabel: 'Saudi Arabia pharma market entry blueprint',
    globalRole:
      'Vision 2030 context, SFDA registration logic, NUPCO procurement, and commercialization sequencing for KSA launches',
    healthcareMrPath: '/healthcare-market-research/saudi-arabia',
    healthcareMrLabel: 'Pharma market research services in Saudi Arabia',
    healthcareRole:
      'Physician surveys, KOL mapping, Arabic fieldwork, and hospital stakeholder evidence for SFDA-aware studies',
  },
  uae: {
    countryName: 'United Arab Emirates',
    globalWebsitesPath: '/global-websites/united-arab-emirates',
    globalWebsitesLabel: 'UAE pharmaceutical go-to-market blueprint',
    globalRole:
      'Dubai DHA, Abu Dhabi DOH, MOHAP, and Emirates-wide launch sequencing for pharma commercialization teams',
    healthcareMrPath: '/healthcare-market-research/uae',
    healthcareMrLabel: 'Pharma market research in the UAE (Dubai & Abu Dhabi)',
    healthcareRole:
      'Emirate-level physician fieldwork, payer interviews, and hospital access studies optimized for UAE execution',
    healthcareFullNamePath: '/healthcare-market-research/united-arab-emirates',
    healthcareFullNameLabel: 'United Arab Emirates healthcare market research (federated UAE)',
    healthcareFullNameRole:
      'MOHAP, DHA, and DOH jurisdiction mapping with UAE-wide stakeholder sampling for multi-emirate portfolios',
  },
};

export function getGeoMarketClusterForSlug(slug: string): GeoMarketPageCluster | undefined {
  if (slug === 'united-arab-emirates') return GEO_MARKET_PAGE_CLUSTERS.uae;
  return GEO_MARKET_PAGE_CLUSTERS[slug];
}
