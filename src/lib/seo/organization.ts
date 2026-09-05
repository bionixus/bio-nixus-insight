/**
 * Canonical BioNixus Organization entity (single source of truth).
 *
 * Used by every Organization JSON-LD emitter so the entity Google and LLMs
 * resolve is consistent: same name, description, knowsAbout, and areaServed.
 * The static index.html block is hand-aligned to these values.
 */

import { GOOGLE_OFFICE_MAPS_URLS, GOOGLE_OFFICES } from '@/data/googleLocations';

const BASE_URL = 'https://www.bionixus.com';

export const ORG_ID = `${BASE_URL}/#organization`;
export const ORG_NAME = 'BioNixus';
export const ORG_FOUNDING_DATE = '2012';
export const ORG_LOGO = `${BASE_URL}/bionixus-logo.webp`;
export const ORG_IMAGE = `${BASE_URL}/og-image.png`;

/** Global positioning with named deep-fingerprint regions. */
export const ORG_DESCRIPTION =
  'BioNixus is a global pharmaceutical and healthcare market research company — with proven capability across B2B and B2C sectors. We turn physician, payer, and hospital evidence into launch, market access, and growth decisions for pharmaceutical, biotech, and medtech teams across 48 countries, serving 118 clients in the Americas, EMEA, and APAC.';

export const ORG_SAME_AS = [
  'https://www.linkedin.com/company/bionixus/',
  'https://www.facebook.com/Bionixus',
  'https://www.instagram.com/bionixus_',
  'https://www.crunchbase.com/organization/bionixus',
  'https://www.goodfirms.co/company/bionixus-market-research',
  'https://www.wikidata.org/wiki/Q140188264',
  'https://careers.bionixus.com/',
  ...GOOGLE_OFFICE_MAPS_URLS,
];

/**
 * Answer engines resolve an entity before they will name it. Every off-site
 * profile added here must already exist and must carry the identical `name`,
 * `foundingDate`, and address strings used below, or resolution splits across
 * two entities. Wikidata, Crunchbase, G2, Clutch, GreenBook and ESOMAR get
 * appended as those profiles are published.
 */
export const ORG_SLOGAN =
  'Primary pharmaceutical and healthcare market research, executed in-country.';

export const ORG_FOUNDING_LOCATION = {
  '@type': 'Place',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
};

/**
 * Review / AggregateRating live only on the UK LocalBusiness node
 * (`buildUkGoogleReviewsLocalBusiness`). Nesting the same rating on Organization
 * sitewide caused Google Search Console “Reviews has multiple aggregate ratings”.
 */

export const ORG_KNOWS_ABOUT = [
  'Market research company',
  'Pharmaceutical market research',
  'Healthcare market research',
  'Market access research',
  'KOL and stakeholder mapping',
  'MedTech and medical device market research',
  'Quantitative physician research',
  'Qualitative healthcare research',
  'Health economics and outcomes research',
  'Health Technology Assessment',
  'Competitive intelligence',
  'Oncology market research',
  'Rare disease market research',
  'Consumer health and FMCG market research',
  'Financial services market research',
];

export const ORG_PUBLISHER = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  logo: {
    '@type': 'ImageObject',
    url: ORG_LOGO,
    width: 512,
    height: 512,
  },
};

/** Global reach with explicit deep-fingerprint regions and countries. */
export const ORG_AREA_SERVED: Array<Record<string, string>> = [
  // Macro-regions
  { '@type': 'Place', name: 'MENA' },
  { '@type': 'Place', name: 'EMEA' },
  { '@type': 'Place', name: 'Latin America' },
  { '@type': 'Place', name: 'Eastern Europe' },
  { '@type': 'Place', name: 'Asia-Pacific' },
  // MENA
  { '@type': 'Country', name: 'Saudi Arabia', sameAs: 'https://www.wikidata.org/wiki/Q851' },
  { '@type': 'Country', name: 'United Arab Emirates', sameAs: 'https://www.wikidata.org/wiki/Q878' },
  { '@type': 'Country', name: 'Egypt', sameAs: 'https://www.wikidata.org/wiki/Q79' },
  { '@type': 'Country', name: 'Kuwait', sameAs: 'https://www.wikidata.org/wiki/Q817' },
  { '@type': 'Country', name: 'Qatar' },
  { '@type': 'Country', name: 'Bahrain' },
  { '@type': 'Country', name: 'Oman' },
  { '@type': 'Country', name: 'Jordan' },
  { '@type': 'Country', name: 'Morocco' },
  // Europe & UK
  { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
  { '@type': 'Country', name: 'Germany', sameAs: 'https://www.wikidata.org/wiki/Q183' },
  { '@type': 'Country', name: 'France', sameAs: 'https://www.wikidata.org/wiki/Q142' },
  { '@type': 'Country', name: 'Italy', sameAs: 'https://www.wikidata.org/wiki/Q38' },
  { '@type': 'Country', name: 'Spain', sameAs: 'https://www.wikidata.org/wiki/Q29' },
  { '@type': 'Country', name: 'Turkey', sameAs: 'https://www.wikidata.org/wiki/Q43' },
  { '@type': 'Country', name: 'Poland', sameAs: 'https://www.wikidata.org/wiki/Q36' },
  { '@type': 'Country', name: 'Netherlands', sameAs: 'https://www.wikidata.org/wiki/Q29999' },
  { '@type': 'Country', name: 'Sweden', sameAs: 'https://www.wikidata.org/wiki/Q34' },
  { '@type': 'Country', name: 'Switzerland', sameAs: 'https://www.wikidata.org/wiki/Q39' },
  { '@type': 'Country', name: 'Norway', sameAs: 'https://www.wikidata.org/wiki/Q20' },
  { '@type': 'Country', name: 'Ireland', sameAs: 'https://www.wikidata.org/wiki/Q27' },
  // Americas
  { '@type': 'Country', name: 'United States', sameAs: 'https://www.wikidata.org/wiki/Q30' },
  { '@type': 'Country', name: 'Canada', sameAs: 'https://www.wikidata.org/wiki/Q16' },
  { '@type': 'Country', name: 'Brazil', sameAs: 'https://www.wikidata.org/wiki/Q155' },
  { '@type': 'Country', name: 'Argentina', sameAs: 'https://www.wikidata.org/wiki/Q414' },
  // Asia-Pacific
  { '@type': 'Country', name: 'Japan', sameAs: 'https://www.wikidata.org/wiki/Q17' },
  { '@type': 'Country', name: 'China', sameAs: 'https://www.wikidata.org/wiki/Q148' },
  { '@type': 'Country', name: 'India' },
  { '@type': 'Country', name: 'South Korea' },
  { '@type': 'Country', name: 'Singapore', sameAs: 'https://www.wikidata.org/wiki/Q334' },
  { '@type': 'Country', name: 'Australia' },
];

export const ORG_NUMBER_OF_EMPLOYEES = {
  '@type': 'QuantitativeValue',
  minValue: 50,
  maxValue: 100,
};

/** Streets match live Google Business Profiles (captured 2026-09-02). */
export const ORG_ADDRESS = [
  ...GOOGLE_OFFICES.map((office) => ({
    '@type': 'PostalAddress' as const,
    ...office.address,
  })),
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
  {
    '@type': 'ContactPoint',
    email: 'admin@bionixus.com',
    contactType: 'sales',
    availableLanguage: ['English', 'Arabic'],
  },
];

/**
 * Crunchbase and GoodFirms confirmed and merged into ORG_SAME_AS above.
 * Still unconfirmed — do not add without a confirmed URL:
 *  - X/Twitter company profile
 *  - Clutch company profile
 *
 * Locale is not tagged on this node — `inLanguage` is a CreativeWork property
 * and is invalid on Organization; the WebSite/WebPage node carries it instead.
 */
export function buildCanonicalOrganization(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    slogan: ORG_SLOGAN,
    foundingDate: ORG_FOUNDING_DATE,
    foundingLocation: ORG_FOUNDING_LOCATION,
    numberOfEmployees: ORG_NUMBER_OF_EMPLOYEES,
    url: BASE_URL,
    logo: ORG_LOGO,
    image: [ORG_IMAGE],
    description: ORG_DESCRIPTION,
    knowsAbout: ORG_KNOWS_ABOUT,
    sameAs: ORG_SAME_AS,
    address: ORG_ADDRESS,
    location: [
      ...GOOGLE_OFFICES.map((office) => ({ '@id': office.schemaId })),
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São Paulo',
          addressCountry: 'BR',
        },
      },
    ],
    contactPoint: ORG_CONTACT_POINT,
    areaServed: ORG_AREA_SERVED,
  };
}
