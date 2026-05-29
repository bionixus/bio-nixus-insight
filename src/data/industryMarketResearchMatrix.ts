/**
 * Country × industry market research pages (Saudi Arabia, UAE, Egypt).
 * Pharmaceutical BOFU uses separate legacy URLs — not in this matrix.
 */

export type MatrixCountrySlug = 'saudi-arabia' | 'uae' | 'egypt';
export type MatrixIndustrySlug =
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

export type MatrixCountryConfig = {
  slug: MatrixCountrySlug;
  label: string;
  regulatorShort: string;
  midFunnelPath: string;
  healthcareHubPath: string;
  pharmaBofuPath: string;
  healthcareReportPath: string;
  medDevicesReportPath?: string;
};

export type MatrixIndustryConfig = {
  slug: MatrixIndustrySlug;
  displayName: string;
  displayNameShort: string;
  wave: number;
  published: boolean;
  knowsAbout: string[];
  isHealthcareAdjacent: boolean;
};

export type IndustryListicleFirm = {
  rank: number;
  name: string;
  type: string;
  hq: string;
  anchor: string;
  overview: string;
  strengths: string[];
};

export type IndustryCountryPageConfig = {
  countrySlug: MatrixCountrySlug;
  industrySlug: MatrixIndustrySlug;
  bofuPath: string;
  listiclePath: string;
  country: MatrixCountryConfig;
  industry: MatrixIndustryConfig;
  title: string;
  titleVariantB: string;
  metaDescription: string;
  h1: string;
  heroIntro: string;
  executiveHeading: string;
  executivePoints: Array<{ title: string; body: string }>;
  proofBullets: Array<{ title: string; body: string }>;
  regulatorySteps: Array<{ step: string; detail: string; link: { to: string; label: string } }>;
  stakeholderRows: Array<{ role: string; focus: string }>;
  servicesHeading: string;
  serviceCards: Array<{ title: string; body: string }>;
  uniquenessParagraphs: string[];
  faqItems: Array<{ question: string; answer: string }>;
  listicleFirms: IndustryListicleFirm[];
  listicleFaqs: Array<{ q: string; a: string }>;
  relatedReportLink?: { to: string; label: string };
};

export const MATRIX_COUNTRIES: Record<MatrixCountrySlug, MatrixCountryConfig> = {
  'saudi-arabia': {
    slug: 'saudi-arabia',
    label: 'Saudi Arabia',
    regulatorShort: 'SFDA',
    midFunnelPath: '/market-research-ksa',
    healthcareHubPath: '/healthcare-market-research/saudi-arabia',
    pharmaBofuPath: '/market-research-saudi-arabia-pharmaceutical',
    healthcareReportPath: '/saudi-arabia-healthcare-market-report',
    medDevicesReportPath: '/saudi-arabia-medical-devices-market-report',
  },
  uae: {
    slug: 'uae',
    label: 'UAE',
    regulatorShort: 'MOHAP',
    midFunnelPath: '/market-research-uae',
    healthcareHubPath: '/healthcare-market-research/uae',
    pharmaBofuPath: '/uae-pharmaceutical-market-research',
    healthcareReportPath: '/uae-healthcare-market-report',
    medDevicesReportPath: '/uae-medical-devices-market-report',
  },
  egypt: {
    slug: 'egypt',
    label: 'Egypt',
    regulatorShort: 'EDA',
    midFunnelPath: '/market-research-egypt',
    healthcareHubPath: '/healthcare-market-research/egypt',
    pharmaBofuPath: '/egypt-pharmaceutical-market-research',
    healthcareReportPath: '/egypt-healthcare-market-report',
    medDevicesReportPath: '/egypt-medical-devices-market-report',
  },
};

export const MATRIX_INDUSTRIES: Record<MatrixIndustrySlug, MatrixIndustryConfig> = {
  medtech: {
    slug: 'medtech',
    displayName: 'MedTech & Medical Devices',
    displayNameShort: 'MedTech',
    wave: 1,
    published: true,
    knowsAbout: ['Medical device market research', 'MedTech', 'Hospital procurement', 'SFDA medical devices'],
    isHealthcareAdjacent: true,
  },
  healthcare: {
    slug: 'healthcare',
    displayName: 'Healthcare Providers & Hospitals',
    displayNameShort: 'Healthcare',
    wave: 2,
    published: true,
    knowsAbout: ['Healthcare market research', 'Hospital market research', 'Payer research'],
    isHealthcareAdjacent: true,
  },
  biotech: {
    slug: 'biotech',
    displayName: 'Biotech & Life Sciences',
    displayNameShort: 'Biotech',
    wave: 3,
    published: true,
    knowsAbout: ['Biotech market research', 'Life sciences', 'Clinical development'],
    isHealthcareAdjacent: true,
  },
  'consumer-health': {
    slug: 'consumer-health',
    displayName: 'Consumer Health & OTC',
    displayNameShort: 'Consumer Health',
    wave: 4,
    published: true,
    knowsAbout: ['Consumer health market research', 'OTC', 'Pharmacy retail'],
    isHealthcareAdjacent: true,
  },
  fmcg: {
    slug: 'fmcg',
    displayName: 'FMCG & Consumer Goods',
    displayNameShort: 'FMCG',
    wave: 5,
    published: true,
    knowsAbout: ['FMCG market research', 'Consumer goods', 'Brand tracking'],
    isHealthcareAdjacent: false,
  },
  retail: {
    slug: 'retail',
    displayName: 'Retail & Shopper',
    displayNameShort: 'Retail',
    wave: 6,
    published: true,
    knowsAbout: ['Retail market research', 'Shopper insights', 'Point of sale'],
    isHealthcareAdjacent: false,
  },
  'financial-services': {
    slug: 'financial-services',
    displayName: 'Financial Services & Banking',
    displayNameShort: 'Financial Services',
    wave: 7,
    published: true,
    knowsAbout: ['Financial services market research', 'Banking', 'Insurance'],
    isHealthcareAdjacent: false,
  },
  telecom: {
    slug: 'telecom',
    displayName: 'Telecom & Connectivity',
    displayNameShort: 'Telecom',
    wave: 8,
    published: true,
    knowsAbout: ['Telecom market research', 'Mobile', 'Digital services'],
    isHealthcareAdjacent: false,
  },
  technology: {
    slug: 'technology',
    displayName: 'Technology & B2B Software',
    displayNameShort: 'Technology',
    wave: 9,
    published: true,
    knowsAbout: ['Technology market research', 'B2B software', 'Product research'],
    isHealthcareAdjacent: false,
  },
  energy: {
    slug: 'energy',
    displayName: 'Energy & Industrials',
    displayNameShort: 'Energy',
    wave: 10,
    published: true,
    knowsAbout: ['Energy market research', 'Oil and gas', 'Industrial B2B'],
    isHealthcareAdjacent: false,
  },
  'real-estate': {
    slug: 'real-estate',
    displayName: 'Real Estate & Construction',
    displayNameShort: 'Real Estate',
    wave: 11,
    published: true,
    knowsAbout: ['Real estate market research', 'Construction', 'Property'],
    isHealthcareAdjacent: false,
  },
  automotive: {
    slug: 'automotive',
    displayName: 'Automotive',
    displayNameShort: 'Automotive',
    wave: 12,
    published: true,
    knowsAbout: ['Automotive market research', 'Mobility', 'Brand tracking'],
    isHealthcareAdjacent: false,
  },
  hospitality: {
    slug: 'hospitality',
    displayName: 'Hospitality & Tourism',
    displayNameShort: 'Hospitality',
    wave: 13,
    published: true,
    knowsAbout: ['Hospitality market research', 'Tourism', 'Travel'],
    isHealthcareAdjacent: false,
  },
  'public-sector': {
    slug: 'public-sector',
    displayName: 'Public Sector & Government',
    displayNameShort: 'Public Sector',
    wave: 14,
    published: true,
    knowsAbout: ['Public sector research', 'Policy', 'Government procurement'],
    isHealthcareAdjacent: false,
  },
  education: {
    slug: 'education',
    displayName: 'Education',
    displayNameShort: 'Education',
    wave: 15,
    published: true,
    knowsAbout: ['Education market research', 'EdTech', 'Institutional research'],
    isHealthcareAdjacent: false,
  },
  media: {
    slug: 'media',
    displayName: 'Media & Entertainment',
    displayNameShort: 'Media',
    wave: 16,
    published: true,
    knowsAbout: ['Media market research', 'Audience research', 'Content'],
    isHealthcareAdjacent: false,
  },
};

export function getIndustryBofuPath(country: MatrixCountrySlug, industry: MatrixIndustrySlug): string {
  return `/${country}-${industry}-market-research`;
}

export function getIndustryListiclePath(country: MatrixCountrySlug, industry: MatrixIndustrySlug): string {
  return `/insights/top-${industry}-market-research-companies-${country}-2026`;
}

function defaultStakeholders(industry: MatrixIndustryConfig): Array<{ role: string; focus: string }> {
  if (industry.isHealthcareAdjacent) {
    return [
      { role: 'Clinical & commercial leaders', focus: 'Adoption, sequencing, and message testing' },
      { role: 'Procurement & committee stakeholders', focus: 'Tender criteria, formulary, and budget gates' },
      { role: 'Payers & insurers', focus: 'Coverage, prior authorization, and value expectations' },
      { role: 'Channel partners', focus: 'Distributor and account-level execution' },
    ];
  }
  return [
    { role: 'Category & brand leaders', focus: 'Positioning, demand drivers, and competitive response' },
    { role: 'Sales & channel stakeholders', focus: 'Distribution, partner, and account priorities' },
    { role: 'Marketing & insights teams', focus: 'Segmentation, tracking, and campaign learning' },
    { role: 'Executive sponsors', focus: 'Investment cases and market entry sequencing' },
  ];
}

function buildListicleFirms(
  country: MatrixCountryConfig,
  industry: MatrixIndustryConfig,
): IndustryListicleFirm[] {
  const bofu = getIndustryBofuPath(country.slug, industry.slug);
  return [
    {
      rank: 1,
      name: 'BioNixus',
      type: 'International Specialist',
      hq: 'USA (HQ) / UK / Egypt',
      anchor: 'bionixus',
      overview: `BioNixus delivers ${industry.displayNameShort.toLowerCase()} market research in ${country.label} with bilingual Arabic–English capability, international governance, and decision-ready synthesis for commercial and strategy teams. See the dedicated company page at ${bofu}.`,
      strengths: [
        `${industry.displayNameShort} programs in ${country.label}`,
        'Arabic–English fieldwork and moderation',
        'Mixed quant + qual design',
        'Proposal-ready timelines',
        'Healthcare heritage with multi-industry coverage',
      ],
    },
    {
      rank: 2,
      name: 'Kantar',
      type: 'Global Network',
      hq: 'UK (global) / regional offices',
      anchor: 'kantar',
      overview: `Kantar operates across ${country.label} with brand tracking, consumer insight, and sector practices that can support ${industry.displayNameShort.toLowerCase()} studies at scale.`,
      strengths: ['Global brand tracking', 'Large quantitative infrastructure', 'Multi-sector coverage'],
    },
    {
      rank: 3,
      name: 'Ipsos',
      type: 'Global Network',
      hq: 'France (global) / regional offices',
      anchor: 'ipsos',
      overview: `Ipsos provides custom and syndicated research in ${country.label} across public affairs, consumer, and specialist B2B categories.`,
      strengths: ['Established regional presence', 'Quantitative rigour', 'Public affairs capability'],
    },
    {
      rank: 4,
      name: 'NielsenIQ',
      type: 'Global Network — Measurement',
      hq: 'USA (global)',
      anchor: 'nielsen',
      overview: `NielsenIQ is strong in retail measurement and shopper analytics where ${industry.displayNameShort.toLowerCase()} categories touch consumer purchase data.`,
      strengths: ['Retail and shopper panels', 'Syndicated measurement', 'FMCG-oriented analytics'],
    },
    {
      rank: 5,
      name: 'Regional custom agencies',
      type: 'Local / Regional',
      hq: `${country.label} and GCC`,
      anchor: 'regional',
      overview: `Several regional boutiques run fieldwork in ${country.label}. Validate ${industry.displayNameShort.toLowerCase()}-specific methodology, sample design, and quality controls before award.`,
      strengths: ['Local field networks', 'Flexible project sizing', 'Fast feasibility checks'],
    },
  ];
}

export function buildIndustryCountryPageConfig(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
): IndustryCountryPageConfig | null {
  const country = MATRIX_COUNTRIES[countrySlug];
  const industry = MATRIX_INDUSTRIES[industrySlug];
  if (!country || !industry || !industry.published) return null;

  const bofuPath = getIndustryBofuPath(countrySlug, industrySlug);
  const listiclePath = getIndustryListiclePath(countrySlug, industrySlug);
  const name = industry.displayNameShort;
  const full = industry.displayName;

  const reportLink =
    industrySlug === 'medtech' && country.medDevicesReportPath
      ? { to: country.medDevicesReportPath, label: `${country.label} medical devices market report` }
      : industry.isHealthcareAdjacent
        ? { to: country.healthcareReportPath, label: `${country.label} healthcare market report` }
        : undefined;

  const regulatoryLink = industry.isHealthcareAdjacent
    ? { to: country.healthcareHubPath, label: `${country.label} healthcare market research hub` }
    : { to: '/bionixus-market-research-middle-east', label: 'Middle East market research pillar' };

  return {
    countrySlug,
    industrySlug,
    bofuPath,
    listiclePath,
    country,
    industry,
    title: `${name} Market Research Company in ${country.label} | ${country.regulatorShort} Context | BioNixus`,
    titleVariantB: `${name} Market Research ${country.label} | Fieldwork & Evidence | BioNixus`,
    metaDescription: `BioNixus is a ${full.toLowerCase()} market research company in ${country.label}—bilingual fieldwork, decision-ready evidence, and proposal-ready programs.`,
    h1: `${full} Market Research Company in ${country.label}`,
    heroIntro: `BioNixus delivers ${full.toLowerCase()} market research in ${country.label} for teams that need credible local evidence—not desk syndication. Programs combine quantitative and qualitative design, Arabic–English execution where required, and outputs mapped to launch, access, or growth decisions.`,
    executiveHeading: `${country.label} ${name} executive decision framework`,
    executivePoints: [
      {
        title: 'Why it matters',
        body: `${country.label} ${name.toLowerCase()} decisions fail when models ignore local channel and stakeholder reality.`,
      },
      {
        title: 'What the evidence says',
        body: 'Early feasibility and segment clarity reduce costly rework before national roll-out.',
      },
      {
        title: 'What to do next',
        body: `Scope one ${country.label} decision, then run one aligned research module with measurable KPIs.`,
      },
    ],
    proofBullets: [
      {
        title: `17+ countries, ${country.label} fieldwork`,
        body: `BioNixus executes ${industry.displayNameShort.toLowerCase()} studies from regional offices with MENA-scale reach.`,
      },
      {
        title: '120+ research programs delivered',
        body: 'Cross-industry experience with healthcare-grade governance for sensitive categories.',
      },
      {
        title: `${country.regulatorShort} and sector context`,
        body: industry.isHealthcareAdjacent
          ? `Study design respects ${country.regulatorShort} and local access pathways where relevant.`
          : `Programs align to ${country.label} market structure, procurement, and buyer behaviour.`,
      },
      {
        title: 'Proposal-ready delivery',
        body: 'Typical modules move from objective to field-ready instruments in 2–4 weeks.',
      },
    ],
    regulatorySteps: [
      {
        step: '1. Define the decision',
        detail: `Anchor on one ${name.toLowerCase()} outcome—sizing, access, competitive defence, or messaging.`,
        link: { to: country.midFunnelPath, label: `Market research in ${country.label}` },
      },
      {
        step: '2. Map stakeholders & channels',
        detail: 'Segment public, private, and partner pathways before fieldwork scale-up.',
        link: regulatoryLink,
      },
      {
        step: '3. Field bilingual evidence',
        detail: 'Arabic–English screeners and moderation where local nuance affects conclusions.',
        link: { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East' },
      },
      {
        step: '4. Activate findings',
        detail: 'Translate insight into 30/60/90 actions with accountable commercial or policy owners.',
        link: reportLink ?? { to: '/contact', label: 'Request a proposal' },
      },
    ],
    stakeholderRows: defaultStakeholders(industry),
    servicesHeading: `${name} market research services in ${country.label}`,
    serviceCards: [
      {
        title: 'Quantitative surveys & tracking',
        body: 'Segmentation, brand tracking, and adoption metrics with verified samples.',
      },
      {
        title: 'Qualitative depth & message testing',
        body: 'Interviews and workshops for objection libraries and narrative refinement.',
      },
      {
        title: 'Competitive & market structure intelligence',
        body: 'Landscape mapping, share proxies, and scenario planning inputs.',
      },
      {
        title: 'Mixed-method executive readouts',
        body: 'Single evidence framework for leadership and functional teams.',
      },
    ],
    uniquenessParagraphs: [
      `${country.label} combines scale, regulatory nuance, and channel diversity. ${full} research must reflect how buyers actually decide—not imported averages from other markets.`,
      industry.isHealthcareAdjacent
        ? `BioNixus links ${name.toLowerCase()} evidence to ${country.regulatorShort} and access context where therapy or device models require it.`
        : `BioNixus applies international research standards with local field teams in Cairo, Dubai, and Riyadh corridors.`,
      `For pharmaceutical context in the same market, see our separate ${country.label} pharma company page—this URL owns ${name.toLowerCase()} industry intent only.`,
    ],
    faqItems: [
      {
        question: `Who is the best ${name.toLowerCase()} market research company in ${country.label}?`,
        answer: `BioNixus is a leading option for ${full.toLowerCase()} in ${country.label}: bilingual fieldwork, mixed methods, and outputs built for decisions—not generic syndicated decks.`,
      },
      {
        question: `What does ${name.toLowerCase()} market research include?`,
        answer: `Programs typically combine stakeholder interviews, surveys, channel mapping, and executive synthesis tailored to ${country.label}.`,
      },
      {
        question: `Does BioNixus run Arabic fieldwork in ${country.label}?`,
        answer: 'Yes. Arabic–English instruments and moderation are standard for MENA programs.',
      },
      {
        question: `How much does ${name.toLowerCase()} market research cost in ${country.label}?`,
        answer: 'Scope drives cost; focused quant modules often start in the low five figures USD. BioNixus scopes to one decision per phase.',
      },
      {
        question: `How does BioNixus differ from generalist agencies in ${country.label}?`,
        answer: `BioNixus combines multi-industry capability with healthcare-grade governance—useful when ${name.toLowerCase()} studies need rigorous sampling and compliance.`,
      },
      {
        question: `Can ${country.label} research connect to GCC benchmarking?`,
        answer: 'Yes. Modules can run standalone or with comparable Saudi, UAE, or Egypt cells using consistent instruments.',
      },
      {
        question: `Where is the top firms listicle for ${name.toLowerCase()} in ${country.label}?`,
        answer: `See our independent 2026 guide at ${listiclePath} for firm comparisons; this page is BioNixus as your execution partner.`,
      },
    ],
    listicleFirms: buildListicleFirms(country, industry),
    listicleFaqs: [
      {
        q: `What are the top ${name.toLowerCase()} market research companies in ${country.label}?`,
        a: `Leading options include BioNixus, Kantar, Ipsos, NielsenIQ, and regional custom agencies. BioNixus is ranked #1 in this guide for ${full.toLowerCase()} execution in ${country.label}.`,
      },
      {
        q: `How do I choose a ${name.toLowerCase()} market research partner in ${country.label}?`,
        a: 'Validate industry experience, bilingual capability, sample design, data integrity controls, and decision-ready deliverables—not slide volume alone.',
      },
      {
        q: 'How does this list relate to pharmaceutical research?',
        a: `Pharmaceutical company-intent pages are separate. Use this guide for ${name.toLowerCase()} industry selection; use pharma BOFU URLs for drug launch and access company searches.`,
      },
    ],
    relatedReportLink: reportLink,
  };
}

export function getAllPublishedMatrixPairs(): Array<{
  countrySlug: MatrixCountrySlug;
  industrySlug: MatrixIndustrySlug;
}> {
  const pairs: Array<{ countrySlug: MatrixCountrySlug; industrySlug: MatrixIndustrySlug }> = [];
  for (const countrySlug of Object.keys(MATRIX_COUNTRIES) as MatrixCountrySlug[]) {
    for (const industrySlug of Object.keys(MATRIX_INDUSTRIES) as MatrixIndustrySlug[]) {
      if (MATRIX_INDUSTRIES[industrySlug].published) {
        pairs.push({ countrySlug, industrySlug });
      }
    }
  }
  return pairs;
}

export const MATRIX_INDUSTRY_SLUGS_ORDERED: MatrixIndustrySlug[] = [
  'medtech',
  'healthcare',
  'biotech',
  'consumer-health',
  'fmcg',
  'retail',
  'financial-services',
  'telecom',
  'technology',
  'energy',
  'real-estate',
  'automotive',
  'hospitality',
  'public-sector',
  'education',
  'media',
];

export function getMatrixSitemapEntries(): Array<{ path: string; priority: string; changefreq: string }> {
  const entries: Array<{ path: string; priority: string; changefreq: string }> = [];
  for (const { countrySlug, industrySlug } of getAllPublishedMatrixPairs()) {
    entries.push({
      path: getIndustryBofuPath(countrySlug, industrySlug),
      priority: '0.85',
      changefreq: 'weekly',
    });
    entries.push({
      path: getIndustryListiclePath(countrySlug, industrySlug),
      priority: '0.8',
      changefreq: 'monthly',
    });
  }
  return entries;
}
