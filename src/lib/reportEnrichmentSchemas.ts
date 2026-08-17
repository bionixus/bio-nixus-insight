import type { MarketIntelligence, RegulatoryStep } from '@/data/marketIntelligence/types';
import { MARKET_INTELLIGENCE } from '@/data/marketIntelligenceData';

export interface ReportEnrichmentSchemaInput {
  pageTitle: string;
  pageMetaDescription: string;
  countryName: string;
  marketSlug?: string;
  publishedDate: string;
  modifiedDate: string;
  /** When medical-devices, never emit pharmaceutical drug HowTo. */
  variant?: 'healthcare' | 'medical-devices';
}

function isMedicalDevicesReport(input: ReportEnrichmentSchemaInput): boolean {
  if (input.variant === 'medical-devices') return true;
  const haystack = `${input.pageTitle} ${input.pageMetaDescription}`;
  return /medical\s*device/i.test(haystack) || /medtech/i.test(haystack);
}

export function buildDatasetSchema(input: ReportEnrichmentSchemaInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${input.pageTitle} — Market Data 2026`,
    description: input.pageMetaDescription,
    creator: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    spatialCoverage: {
      '@type': 'Place',
      name: input.countryName,
    },
    temporalCoverage: '2026',
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
    reviewedBy: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
  };
}

function mapHowToSteps(steps: RegulatoryStep[]) {
  return steps.map((s) => ({
    '@type': 'HowToStep',
    name: s.action,
    text: `${s.action}. Responsible body: ${s.body}. Typical timeline: ${s.timeline}. ${s.notes}`,
  }));
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
    step: mapHowToSteps(intelligence.registrationSteps),
  };
}

export function buildDeviceHowToSchema(
  steps: RegulatoryStep[],
  countryName: string,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to register a medical device in ${countryName}: Step-by-step regulatory guide 2026`,
    description: `Complete step-by-step guide to medical device registration in ${countryName} including classification, marketing authorization, quality system compliance, and reimbursement listing.`,
    step: mapHowToSteps(steps),
  };
}

export function buildReportEnrichmentSchemas(input: ReportEnrichmentSchemaInput): object[] {
  const schemas: object[] = [
    buildDatasetSchema(input),
    buildMedicalWebPageSchema(input),
  ];
  if (!input.marketSlug) return schemas;

  const intelligence = MARKET_INTELLIGENCE[input.marketSlug];
  if (!intelligence) return schemas;

  if (isMedicalDevicesReport(input)) {
    if (intelligence.deviceRegistrationSteps?.length) {
      schemas.push(buildDeviceHowToSchema(intelligence.deviceRegistrationSteps, input.countryName));
    }
    return schemas;
  }

  if (intelligence.registrationSteps.length) {
    schemas.push(buildHowToSchema(intelligence, input.countryName));
  }
  return schemas;
}
