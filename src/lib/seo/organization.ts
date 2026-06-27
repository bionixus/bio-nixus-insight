/**
 * Canonical BioNixus Organization entity (single source of truth).
 *
 * Used by every Organization JSON-LD emitter so the entity Google and LLMs
 * resolve is consistent: same name, description, knowsAbout, and areaServed.
 * The static index.html block is hand-aligned to these values.
 */

import { BIONIXUS_UK_GBP_MAPS_URL } from '@/data/googleReviewsUk';

const BASE_URL = 'https://www.bionixus.com';

export const ORG_ID = `${BASE_URL}/#organization`;
export const ORG_NAME = 'BioNixus';
export const ORG_FOUNDING_DATE = '2012';
export const ORG_LOGO = `${BASE_URL}/bionixus-logo.webp`;
export const ORG_IMAGE = `${BASE_URL}/og-image.png`;

/** Global positioning with named deep-fingerprint regions. */
export const ORG_DESCRIPTION =
  'BioNixus is a global pharmaceutical and healthcare market research company with deep regional expertise across MENA, Latin America, and Eastern Europe — alongside the UK and the wider EMEA region. We turn physician, payer, and hospital evidence into launch, market access, and growth decisions for pharmaceutical, biotech, and medtech teams.';

export const ORG_SAME_AS = [
  'https://www.linkedin.com/company/bionixus/',
  'https://www.facebook.com/Bionixus',
  'https://www.instagram.com/bionixus_',
  BIONIXUS_UK_GBP_MAPS_URL,
];

export const ORG_KNOWS_ABOUT = [
  'Pharmaceutical market research',
  'Healthcare market research',
  'Market access research',
  'KOL and stakeholder mapping',
  'MedTech and medical device market research',
  'Quantitative physician research',
  'Qualitative healthcare research',
  'Health economics and outcomes research',
  'Competitive intelligence',
  'Consumer health and FMCG market research',
  'Financial services market research',
  'Pharmaceutical market research Japan',
  'Healthcare market research Japan',
  'PMDA market research',
  'NHI payer research Japan',
  'Pharmaceutical market research United Kingdom',
  'Healthcare market research United Kingdom',
  'NICE market access research',
  'NHS payer research',
  'Pharmaceutical market research Singapore',
  'Healthcare market research Singapore',
  'HSA market research',
  'ACE health technology assessment research',
];

/** Global reach with explicit deep-fingerprint regions and countries. */
export const ORG_AREA_SERVED: Array<Record<string, string>> = [
  // Macro-regions
  { '@type': 'Place', name: 'MENA' },
  { '@type': 'Place', name: 'EMEA' },
  { '@type': 'Place', name: 'Latin America' },
  { '@type': 'Place', name: 'Eastern Europe' },
  { '@type': 'Place', name: 'Asia-Pacific' },
  // MENA
  { '@type': 'Country', name: 'Saudi Arabia' },
  { '@type': 'Country', name: 'United Arab Emirates' },
  { '@type': 'Country', name: 'Egypt' },
  { '@type': 'Country', name: 'Kuwait' },
  { '@type': 'Country', name: 'Qatar' },
  { '@type': 'Country', name: 'Bahrain' },
  { '@type': 'Country', name: 'Oman' },
  { '@type': 'Country', name: 'Jordan' },
  { '@type': 'Country', name: 'Morocco' },
  // Europe & UK
  { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
  { '@type': 'Country', name: 'Germany' },
  { '@type': 'Country', name: 'France' },
  { '@type': 'Country', name: 'Italy' },
  { '@type': 'Country', name: 'Spain' },
  { '@type': 'Country', name: 'Turkey' },
  // Americas
  { '@type': 'Country', name: 'United States' },
  { '@type': 'Country', name: 'Canada' },
  { '@type': 'Country', name: 'Brazil' },
  // Asia-Pacific
  { '@type': 'Country', name: 'Japan', sameAs: 'https://www.wikidata.org/wiki/Q17' },
  { '@type': 'Country', name: 'China' },
  { '@type': 'Country', name: 'India' },
  { '@type': 'Country', name: 'South Korea' },
  { '@type': 'Country', name: 'Singapore' },
  { '@type': 'Country', name: 'Australia' },
];

export const ORG_NUMBER_OF_EMPLOYEES = {
  '@type': 'QuantitativeValue',
  minValue: 50,
  maxValue: 100,
};

export const ORG_ADDRESS = [
  {
    '@type': 'PostalAddress',
    streetAddress: '1309 Coffeen Ave',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
  {
    '@type': 'PostalAddress',
    streetAddress: '128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  {
    '@type': 'PostalAddress',
    addressLocality: 'Kuwait City',
    addressCountry: 'KW',
  },
  {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressCountry: 'BR',
  },
];

export const ORG_CONTACT_POINT = [
  {
    '@type': 'ContactPoint',
    telephone: '+1-888-465-5557',
    contactType: 'customer service',
    areaServed: 'US',
  },
  {
    '@type': 'ContactPoint',
    telephone: '+44-7727-666682',
    contactType: 'customer service',
    areaServed: 'GB',
  },
];

/** Canonical Organization node. Pass inLanguage for per-page locale tagging. */
export function buildCanonicalOrganization(inLanguage?: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    foundingDate: ORG_FOUNDING_DATE,
    numberOfEmployees: ORG_NUMBER_OF_EMPLOYEES,
    url: BASE_URL,
    logo: ORG_LOGO,
    image: [ORG_IMAGE],
    description: ORG_DESCRIPTION,
    knowsAbout: ORG_KNOWS_ABOUT,
    sameAs: ORG_SAME_AS,
    address: ORG_ADDRESS,
    location: ORG_ADDRESS.map((addr) => ({
      '@type': 'Place',
      address: addr,
    })),
    contactPoint: ORG_CONTACT_POINT,
    areaServed: ORG_AREA_SERVED,
    ...(inLanguage ? { inLanguage } : {}),
  };
}
