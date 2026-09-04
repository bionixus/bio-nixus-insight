/**
 * Company directory matrix — shared types.
 *
 * A "directory" is one `/{entity}-{country}` page listing the named accounts
 * BioNixus studies in that market (e.g. `/pharmaceutical-distributors-saudi-arabia`).
 * Hubs (`/company-directories`, `/companies-in-{country}`, `/{entity}`) tie the
 * spokes together. Keep this file free of JSX/React imports.
 */

import type { QUALIFICATION_FORM_NEEDS } from '@/data/qualificationFormOptions';

export type QualificationFormNeed = (typeof QUALIFICATION_FORM_NEEDS)[number];

export type DirectoryEntitySlug =
  // healthcare
  | 'pharmaceutical-companies'
  | 'medical-device-companies'
  | 'pharmaceutical-distributors'
  | 'pharmacy-chains'
  | 'hospital-groups'
  | 'biotech-companies'
  | 'cro-companies'
  | 'health-insurers'
  // consumer / B2B
  | 'fmcg-companies'
  | 'retail-companies'
  | 'real-estate-companies'
  | 'banks'
  | 'automotive-distributors'
  | 'food-beverage-companies'
  | 'construction-companies'
  | 'cosmetics-companies'
  | 'hotel-groups'
  | 'logistics-companies'
  | 'manufacturing-companies';

export type DirectorySector = 'healthcare' | 'consumer' | 'financial' | 'industrial' | 'property';

export type DirectoryRegion = 'gcc' | 'mena' | 'africa' | 'europe' | 'northamerica' | 'latam' | 'apac';

export type DirectoryCountrySlug =
  | 'saudi-arabia'
  | 'uae'
  | 'egypt'
  | 'kuwait'
  | 'qatar'
  | 'oman'
  | 'bahrain'
  | 'iraq'
  | 'iran'
  | 'jordan'
  | 'lebanon'
  | 'morocco'
  | 'algeria'
  | 'tunisia'
  | 'libya'
  | 'yemen'
  | 'turkey'
  | 'pakistan'
  | 'nigeria'
  | 'south-africa'
  | 'kenya'
  | 'ethiopia'
  | 'indonesia'
  | 'vietnam'
  | 'thailand'
  | 'philippines'
  | 'bangladesh'
  | 'india'
  | 'china'
  | 'japan'
  | 'south-korea'
  | 'singapore'
  | 'malaysia'
  | 'australia'
  | 'kazakhstan'
  | 'mexico'
  | 'argentina'
  | 'colombia'
  | 'chile'
  | 'peru'
  | 'brazil'
  | 'poland'
  | 'italy'
  | 'spain'
  | 'france'
  | 'netherlands'
  | 'belgium'
  | 'sweden'
  | 'ireland'
  | 'germany'
  | 'uk'
  | 'switzerland'
  | 'usa'
  | 'canada';

/** Company classification shown as a badge and used to group the four category cards. */
export type DirectoryCompanyType =
  | 'Local'
  | 'MNC'
  | 'Regional'
  | 'Distributor'
  | 'Retailer'
  | 'Developer'
  | 'Operator'
  | 'Government';

export type DirectoryCompanyEntry = {
  name: string;
  /** HQ city or country, e.g. 'Riyadh' or 'Switzerland'. */
  hq: string;
  type: DirectoryCompanyType;
  /** What they do in this market — one short phrase. */
  focus: string;
  /** One-line editorial note: why a brand team should care. */
  notes: string;
};

export type DirectoryProseSection = {
  heading: string;
  /** One or more paragraphs. */
  paragraphs: string[];
};

export type DirectoryRegulatorSource = {
  /** e.g. 'Saudi Food and Drug Authority (SFDA) — licensed drug establishments register' */
  name: string;
  url: string;
  /** ISO date the register/listing was consulted, e.g. '2026-09-03'. */
  asOf: string;
};

export type DirectoryCountryMeta = {
  slug: DirectoryCountrySlug;
  /** Formal name: 'United Arab Emirates'. */
  name: string;
  /** Inside a sentence: 'the UAE'. */
  display: string;
  /** In titles / H1s: 'UAE'. */
  titlePlace: string;
  region: DirectoryRegion;
  /** Market string passed to the qualification form. */
  formMarket: string;
  /** `/healthcare-market-research/{slug}` hub slug when one exists. */
  healthcareHubSlug?: string;
  /** Existing hand-written `/pharmaceutical-companies-{slug}` page (not in this registry). */
  hasLegacyPharmaDirectory?: boolean;
};

export type DirectoryEntityMeta = {
  slug: DirectoryEntitySlug;
  /** 'Pharmaceutical Distributors' */
  labelPlural: string;
  /** 'pharmaceutical distributor' */
  labelSingular: string;
  /** Lower-case plural used inside sentences: 'pharmaceutical distributors'. */
  labelLower: string;
  sector: DirectorySector;
  /** Kicker above the H1: 'Pharma distribution directory 2026'. */
  kicker: string;
  /** Heading of the fourth category card (trade / operators / developers). */
  tradeHeading: string;
  /** Heading of the "what is moving" section: 'What is moving pharma distribution in {country}'. */
  movementNoun: string;
  /** Industry slug in src/data/industryMarketResearchMatrix.ts when a BOFU/listicle pair exists. */
  matrixIndustry?:
    | 'medtech'
    | 'healthcare'
    | 'biotech'
    | 'consumer-health'
    | 'fmcg'
    | 'retail'
    | 'financial-services'
    | 'telecom'
    | 'technology'
    | 'energy'
    | 'real-estate'
    | 'automotive'
    | 'hospitality'
    | 'public-sector'
    | 'education'
    | 'media';
  /** Qualification-form need that best matches this entity's buyers. */
  formNeed: QualificationFormNeed;
  /** Column header for the "focus" column, e.g. 'Portfolio' or 'Formats'. */
  focusColumn: string;
  /** Entity hub path when one is published (e.g. '/pharmaceutical-distributors'). */
  hubPath?: string;
};

/** Author-supplied content for one directory page. Everything derivable is added by `finishDirectory`. */
export type DirectoryPageInput = {
  entity: DirectoryEntitySlug;
  countrySlug: DirectoryCountrySlug;
  /** 150–160 chars. */
  metaDescription: string;
  introLead: string;
  introRest: string;
  stats: { value: string; label: string }[];
  channelHeading: string;
  channelBody: string;
  companies: DirectoryCompanyEntry[];
  categoryBlurbs: { local: string; mnc: string; regional: string; trade: string };
  growthDrivers: { title: string; desc: string }[];
  /**
   * Optional entity-specific prose sections rendered between the channel section and
   * growth drivers (e.g. launch pipeline, off-plan vs ready, buyer segments for developers).
   */
  sections?: DirectoryProseSection[];
  faq: { q: string; a: string }[];
  /** Primary regulator / registry the list was checked against. */
  regulatorSource: DirectoryRegulatorSource;
  /** Additional public sources (filings, exchange listings, industry bodies). */
  sources: string[];
  /** BioNixus proprietary layer: study types run, channels fielded, account cuts — 3–5 bullets. */
  fieldNotes: string[];
  publishedDate?: string;
  modifiedDate?: string;
  /** Override the generated H1 when the natural phrasing differs. */
  h1?: string;
  /** Override the generated title (still validated for length). */
  title?: string;
};

export type DirectoryRelatedLink = { to: string; label: string };

export type DirectoryPageConfig = Omit<
  DirectoryPageInput,
  'publishedDate' | 'modifiedDate' | 'h1' | 'title' | 'regulatorSource' | 'sources' | 'fieldNotes'
> & {
  /** Optional only for the 18 adapted pre-matrix configs; required (by the gate script) for registry pages. */
  regulatorSource?: DirectoryRegulatorSource;
  sources: string[];
  fieldNotes: string[];
  path: string;
  title: string;
  h1: string;
  entityMeta: DirectoryEntityMeta;
  country: DirectoryCountryMeta;
  /** Canonical “best market research companies in [country]” URL (or nearest hub). */
  listicleTo: string;
  listicleLabel: string;
  /** Matching BOFU service page when the country × industry pair is published. */
  bofuTo?: string;
  bofuLabel?: string;
  relatedLinks: DirectoryRelatedLink[];
  hubs: { master: string; country?: string; entity?: string };
  publishedDate: string;
  modifiedDate: string;
  /** True for the 18 pre-matrix FMCG/retail/real-estate configs adapted from industryCompanyDirectories.ts. */
  legacyIndustryConfig?: boolean;
};

export type DirectoryHubKind = 'master' | 'country' | 'entity';

export type DirectoryHubInput = {
  kind: DirectoryHubKind;
  countrySlug?: DirectoryCountrySlug;
  entity?: DirectoryEntitySlug;
  metaDescription: string;
  intro: string[];
  /** Why this hub exists for a buyer — 3 short cards. */
  useCases: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  publishedDate?: string;
  modifiedDate?: string;
};

export type DirectoryHubConfig = DirectoryHubInput & {
  path: string;
  title: string;
  h1: string;
  publishedDate: string;
  modifiedDate: string;
};

/** Any directory page the site serves (registry spokes, legacy pharma/medtech TSX pages, pre-matrix industry pages). */
export type DirectoryListing = {
  path: string;
  entity: DirectoryEntitySlug;
  countrySlug: DirectoryCountrySlug;
  label: string;
  /** 'registry' = data-driven page in this folder; 'legacy' = hand-written TSX; 'industry' = industryCompanyDirectories.ts. */
  source: 'registry' | 'legacy' | 'industry';
};
