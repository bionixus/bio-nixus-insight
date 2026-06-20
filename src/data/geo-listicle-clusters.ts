export type GeoListicleVariant = 'general' | 'healthcare';
export type GeoListicleCalloutLocale = 'en' | 'pt' | 'es' | 'ar';

export interface GeoListicleClusterLocaleCopy {
  readonly generalPath?: string;
  readonly generalLabel?: string;
  readonly generalRole?: string;
  readonly healthcarePath?: string;
  readonly healthcareLabel?: string;
  readonly healthcareRole?: string;
  readonly headingGeneral?: string;
  readonly headingHealthcare?: string;
}

export interface GeoListicleCluster {
  readonly geoLabel: string;
  readonly generalPath: string;
  readonly generalLabel: string;
  readonly generalRole: string;
  readonly healthcarePath?: string;
  readonly healthcareLabel?: string;
  readonly healthcareRole?: string;
  readonly locales?: Partial<Record<GeoListicleCalloutLocale, GeoListicleClusterLocaleCopy>>;
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
  kuwait: {
    geoLabel: 'Kuwait',
    generalPath: '/insights/top-market-research-companies-gcc-2026',
    generalLabel: 'Top market research companies in the GCC (2026)',
    generalRole: 'Regional agency shortlist covering Kuwait alongside KSA and UAE programmes',
    healthcarePath: '/insights/top-healthcare-market-research-companies-kuwait-2026',
    healthcareLabel: 'Top healthcare market research companies in Kuwait',
    healthcareRole: 'MOH-aware pharmaceutical fieldwork, hospital stakeholder mapping, and payer evidence',
  },
  egypt: {
    geoLabel: 'Egypt',
    generalPath: '/insights/top-market-research-companies-egypt-2026',
    generalLabel: 'Top market research companies in Egypt (rankings guide)',
    generalRole: 'BOFU firm shortlist with EDA regulatory context for pharma and healthcare buyers',
    healthcarePath: '/healthcare-market-research/egypt',
    healthcareLabel: 'Healthcare market research in Egypt (country hub)',
    healthcareRole: 'EDA-aware physician, payer, and hospital research for pharmaceutical and medtech teams',
    locales: {
      ar: {
        healthcareLabel: 'أبحاث سوق الرعاية الصحية في مصر (مركز الدولة)',
        healthcareRole: 'أبحاث الأطباء والدافعين والمستشفيات بما يتوافق مع هيئة الدواء المصرية لفرق الأدوية والتقنية الطبية',
        generalRole: 'قائمة مختصرة للمشترين مع سياق هيئة الدواء المصرية لقطاع الأدوية والرعاية الصحية',
      },
    },
  },
  brazil: {
    geoLabel: 'Brazil',
    generalPath: '/insights/top-market-research-companies-brazil-2026',
    generalLabel: 'Top market research companies in Brazil (2026)',
    generalRole: 'Cross-sector agency rankings for Brazil FMCG, consumer, and B2B market programs',
    healthcarePath: '/insights/top-healthcare-market-research-companies-brazil-2026',
    healthcareLabel: 'Top healthcare market research companies in Brazil',
    healthcareRole: 'ANVISA-aware pharmaceutical fieldwork, CONITEC HTA evidence, and HCP studies',
    locales: {
      pt: {
        generalPath: '/pt/insights/top-market-research-companies-brasil-2026',
        generalLabel: 'Melhores empresas de pesquisa de mercado no Brasil (2026)',
        generalRole: 'Rankings de agências multisectoriais para FMCG, consumo e B2B no Brasil',
        healthcarePath: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026',
        healthcareLabel: 'Top empresas de pesquisa de mercado em saúde no Brasil',
        healthcareRole: 'Pesquisa farmacêutica com ANVISA, evidências CONITEC e estudos com HCPs',
      },
    },
  },
  argentina: {
    geoLabel: 'Argentina',
    generalPath: '/insights/top-market-research-companies-argentina-2026',
    generalLabel: 'Top market research companies in Argentina (2026)',
    generalRole: 'Cross-sector agency rankings for Argentina FMCG, consumer, and B2B buyers',
    healthcarePath: '/insights/top-healthcare-market-research-companies-argentina-2026',
    healthcareLabel: 'Top healthcare market research companies in Argentina',
    healthcareRole: 'ANMAT-aware pharmaceutical research, obras sociales payer context, and HCP fieldwork',
    locales: {
      es: {
        generalPath: '/es/insights/top-empresas-investigacion-mercado-argentina-2026',
        generalLabel: 'Mejores empresas de investigación de mercado en Argentina (2026)',
        generalRole: 'Rankings multisectoriales para FMCG, consumo y B2B en Argentina',
        healthcarePath: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026',
        healthcareLabel: 'Top empresas de investigación de mercado en salud en Argentina',
        healthcareRole: 'Investigación farmacéutica con ANMAT, obras sociales y estudios con HCPs',
      },
    },
  },
};

export function getGeoListicleCluster(key: string): GeoListicleCluster | undefined {
  return GEO_LISTICLE_CLUSTERS[key];
}
