import type { MarketIntelligence } from '@/data/marketIntelligence/types';
import { MARKET_INTELLIGENCE } from '@/data/marketIntelligenceData';

export interface ReportEnrichmentSchemaInput {
  pageTitle: string;
  pageMetaDescription: string;
  countryName: string;
  marketSlug?: string;
  publishedDate: string;
  modifiedDate: string;
}

export function buildDatasetSchema(input: ReportEnrichmentSchemaInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${input.pageTitle} — Market Data 2026`,
    description: input.pageMetaDescription,
    creator: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    datePublished: input.publishedDate,
    dateModified: input.modifiedDate,
    license: 'https://www.bionixus.com/terms',
    variableMeasured: [
      'Pharmaceutical market size (USD billion)',
      'Medical devices market size (USD billion)',
      'Market CAGR by therapy area',
      'Regulatory registration timeline (months)',
      'Payer formulary listing timeline (months)',
    ],
  };
}

export function buildMedicalWebPageSchema(input: ReportEnrichmentSchemaInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    about: {
      '@type': 'MedicalBusiness',
      name: `${input.countryName} healthcare system`,
    },
    audience: {
      '@type': 'Audience',
      audienceType:
        'Pharmaceutical commercial professionals, market access directors, healthcare investors, regional business development managers',
    },
    lastReviewed: input.modifiedDate,
    reviewedBy: { '@type': 'Organization', name: 'BioNixus' },
  };
}

export function buildHowToSchema(
  intelligence: MarketIntelligence,
  countryName: string,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to register a pharmaceutical drug in ${countryName}: Step-by-step regulatory guide 2026`,
    description: `Complete step-by-step guide to pharmaceutical drug registration in ${countryName} including dossier submission, technical review, pricing approval, and formulary listing.`,
    step: intelligence.registrationSteps.map((s) => ({
      '@type': 'HowToStep',
      name: s.action,
      text: `${s.action}. Responsible body: ${s.body}. Typical timeline: ${s.timeline}. ${s.notes}`,
    })),
  };
}

export function buildReportEnrichmentSchemas(input: ReportEnrichmentSchemaInput): object[] {
  const schemas: object[] = [
    buildDatasetSchema(input),
    buildMedicalWebPageSchema(input),
  ];
  if (input.marketSlug) {
    const intelligence = MARKET_INTELLIGENCE[input.marketSlug];
    if (intelligence?.registrationSteps.length) {
      schemas.push(buildHowToSchema(intelligence, input.countryName));
    }
  }
  return schemas;
}
