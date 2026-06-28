/**
 * BioNixus "across industries" architecture.
 *
 * The site runs as two linked-but-separate silos: a pharmaceutical/healthcare
 * silo and a non-healthcare (B2B + B2C) industries silo. The /bionixus-industries
 * hub and the three segment guide pages below are the only deliberate bridge
 * between them. Keep cross-silo linking confined to these pages.
 */

import {
  MATRIX_INDUSTRY_SLUGS_ORDERED,
  MATRIX_INDUSTRIES,
  type MatrixIndustrySlug,
} from './industryMarketResearchMatrix';

export type SegmentSlug = 'pharma-healthcare' | 'b2b' | 'b2c';

/** Which segment each matrix industry belongs to. Pharma core lives outside the matrix. */
export const INDUSTRY_SEGMENT: Record<MatrixIndustrySlug, SegmentSlug> = {
  medtech: 'pharma-healthcare',
  healthcare: 'pharma-healthcare',
  biotech: 'pharma-healthcare',
  'consumer-health': 'pharma-healthcare',
  technology: 'b2b',
  energy: 'b2b',
  'real-estate': 'b2b',
  'public-sector': 'b2b',
  education: 'b2b',
  fmcg: 'b2c',
  retail: 'b2c',
  'financial-services': 'b2c',
  telecom: 'b2c',
  automotive: 'b2c',
  hospitality: 'b2c',
  media: 'b2c',
};

export type CuratedLink = { to: string; label: string };

export type SegmentConfig = {
  slug: SegmentSlug;
  path: string;
  label: string;
  navLabel: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  bodyParagraphs: string[];
  buyerContext: string;
  /** In-silo cross-links shown as a curated block. */
  featuredLinks: CuratedLink[];
  faqItems: Array<{ question: string; answer: string }>;
};

export const SEGMENT_ORDER: SegmentSlug[] = ['pharma-healthcare', 'b2b', 'b2c'];

export const SEGMENTS: Record<SegmentSlug, SegmentConfig> = {
  'pharma-healthcare': {
    slug: 'pharma-healthcare',
    path: '/pharma-healthcare-industries',
    label: 'Pharma & Healthcare',
    navLabel: 'Pharma & Healthcare',
    tagline: 'Where BioNixus was built — and still leads.',
    seoTitle: 'Pharma & Healthcare Market Research | BioNixus Industries',
    seoDescription:
      'BioNixus pharmaceutical and healthcare market research: drug launch, market access, MedTech, biotech, and consumer health evidence across the Americas, EMEA, and the GCC.',
    h1: 'Pharma & Healthcare Market Research',
    intro:
      'Pharmaceutical and healthcare research is the discipline BioNixus was founded on in 2012, and it remains the core of the firm. Everything else we do in B2B and B2C markets borrows the standards we set here: verified respondents, defensible sampling, and evidence built for a decision rather than a slide library.',
    bodyParagraphs: [
      'This is the home silo for life-sciences buyers. If your work touches a molecule, a device, a diagnosis, or a pharmacy shelf, the pages below connect to deep country and therapy coverage — physician and HCP surveys, KOL and payer research, market access and HTA support, real-world evidence, and launch readiness across the EU5, the GCC, North Africa, and the Americas.',
      'BioNixus is US-headquartered in Sheridan, Wyoming, with research operations in London and Cairo. That footprint lets us run American and European programmes to the same standard as our MENA fieldwork, and to benchmark a launch across all three regions inside one evidence framework.',
    ],
    buyerContext:
      'Who briefs us here: medical affairs, commercial and brand teams, market access and HEOR leads, MedTech and diagnostics marketers, biotech founders preparing for launch, and consumer-health teams sizing OTC and pharmacy demand.',
    featuredLinks: [
      {
        to: '/clinical-diagnostics-market-research',
        label: 'Clinical diagnostics — register for full QC/IH proposal',
      },
      { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
      { to: '/market-research-healthcare', label: 'Healthcare market research services' },
      { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Saudi Arabia pharmaceutical market research' },
      { to: '/gcc-pharmaceutical-market-research', label: 'GCC pharmaceutical market research' },
      { to: '/pharmaceutical-therapy-areas', label: 'Pharmaceutical therapy areas' },
      { to: '/real-world-evidence', label: 'Real-world evidence' },
      { to: '/methodology', label: 'Research methodology' },
    ],
    faqItems: [
      {
        question: 'What pharmaceutical and healthcare research does BioNixus run?',
        answer:
          'Quantitative physician and HCP surveys, qualitative KOL and payer interviews, market access and HTA support, competitive intelligence, real-world evidence, and launch readiness — across the United States, Canada, Brazil, the UK, EU5, GCC, North Africa, Turkey, and Asia-Pacific priority markets.',
      },
      {
        question: 'Does BioNixus cover the United States and the Americas for healthcare?',
        answer:
          'Yes. BioNixus is US-headquartered in Sheridan, Wyoming, and runs healthcare and medical-device research across the United States, Canada, and Brazil, with the same governance applied to our EMEA and GCC programmes.',
      },
      {
        question: 'How is the Pharma & Healthcare section different from the B2B and B2C sections?',
        answer:
          'This section carries the regulated, clinical, and access-driven work — pharma, MedTech, biotech, and consumer health. The B2B and B2C sections apply the same research rigor to non-healthcare categories. The BioNixus industries hub links all three.',
      },
    ],
  },
  b2b: {
    slug: 'b2b',
    path: '/b2b-industries',
    label: 'B2B Industries',
    navLabel: 'B2B Industries',
    tagline: 'Enterprise, institutional, and infrastructure markets.',
    seoTitle: 'B2B Market Research | Technology, Energy, Real Estate & More | BioNixus',
    seoDescription:
      'BioNixus B2B market research for technology, energy and industrials, real estate, public sector, and education — buyer journeys, market sizing, and competitive intelligence across MENA, Africa, Europe, and the Americas.',
    h1: 'B2B Industries Market Research',
    intro:
      'B2B decisions turn on a small number of high-value buyers, long sales cycles, and committees rather than crowds. BioNixus brings the same sampling discipline and senior-led analysis we built in healthcare to technology, energy, real estate, public sector, and education research.',
    bodyParagraphs: [
      'Enterprise and institutional research rewards depth over volume. We design programmes around the people who actually sign — procurement leads, technical evaluators, budget owners, and executive sponsors — and map the buying committee, not just the end user.',
      'Across MENA we combine quantitative tracking with qualitative depth and bilingual Arabic–English fieldwork, then synthesise findings into segmentation, positioning, and market-entry decisions your commercial and strategy teams can act on.',
    ],
    buyerContext:
      'Who briefs us here: product and growth leaders, sales and channel heads, strategy and corporate-development teams, and public-sector or institutional decision-makers commissioning evidence before a major commitment.',
    featuredLinks: [
      { to: '/bionixus-industries', label: 'BioNixus across industries (hub)' },
      { to: '/b2c-industries', label: 'B2C industries market research' },
      { to: '/market-research-by-industry', label: 'All industries index (GCC & MENA)' },
      { to: '/bionixus-market-research-middle-east', label: 'Middle East market research pillar' },
    ],
    faqItems: [
      {
        question: 'Which B2B industries does BioNixus cover?',
        answer:
          'Technology and B2B software, energy and industrials, real estate and construction, public sector and government, and education — with country pages across Saudi Arabia, the UAE, Egypt, Kuwait, Qatar, Oman, Bahrain, the UK, USA, Brazil, Germany, Morocco, Nigeria, South Africa, and Kenya.',
      },
      {
        question: 'How does B2B market research differ from consumer research?',
        answer:
          'B2B studies target a smaller, harder-to-reach population of decision-makers and influencers, weight depth interviews more heavily, and map the full buying committee and procurement pathway rather than mass consumer sentiment.',
      },
      {
        question: 'Can BioNixus benchmark a B2B market across several countries?',
        answer:
          'Yes. Modules can run standalone or with comparable cells across GCC, MENA, Africa, Europe, and the Americas using consistent instruments, so cross-market findings stay directly comparable.',
      },
    ],
  },
  b2c: {
    slug: 'b2c',
    path: '/b2c-industries',
    label: 'B2C Industries',
    navLabel: 'B2C Industries',
    tagline: 'Consumer demand, brands, and the shopper journey.',
    seoTitle: 'B2C Market Research | FMCG, Retail, Telecom, Finance & More | BioNixus',
    seoDescription:
      'BioNixus B2C market research for FMCG, retail, financial services, telecom, automotive, hospitality, and media — consumer demand, brand tracking, and shopper insight across MENA, Africa, Europe, and the Americas.',
    h1: 'B2C Industries Market Research',
    intro:
      'Consumer markets move on perception, habit, and price sensitivity at scale. BioNixus measures what drives choice — across FMCG, retail, financial services, telecom, automotive, hospitality, and media — with samples that represent the real population, not an open-internet opt-in pool.',
    bodyParagraphs: [
      'Brand health, segmentation, message testing, and shopper journeys all depend on getting the sample right and reading the culture correctly. Our bilingual Arabic–English teams design instruments around how decisions actually get made in each market, then translate the data into positioning and demand decisions.',
      'Whether you are tracking a brand over time, sizing a new consumer category, or pressure-testing a campaign before launch, the programme is scoped to the decision in front of you and delivered with outputs your marketing, insight, and commercial teams can use directly.',
    ],
    buyerContext:
      'Who briefs us here: brand and category managers, marketing and insight leaders, customer-experience teams, and commercial leaders sizing demand or defending share in fast-moving consumer markets.',
    featuredLinks: [
      { to: '/bionixus-industries', label: 'BioNixus across industries (hub)' },
      { to: '/b2b-industries', label: 'B2B industries market research' },
      { to: '/market-research-by-industry', label: 'All industries index (GCC & MENA)' },
      { to: '/bionixus-market-research-middle-east', label: 'Middle East market research pillar' },
    ],
    faqItems: [
      {
        question: 'Which B2C industries does BioNixus cover?',
        answer:
          'FMCG and consumer goods, retail and shopper, financial services and banking, telecom and connectivity, automotive, hospitality and tourism, and media and entertainment — with country pages across Saudi Arabia, the UAE, Egypt, Kuwait, Qatar, Oman, Bahrain, the UK, USA, Brazil, Germany, Morocco, Nigeria, South Africa, and Kenya.',
      },
      {
        question: 'What consumer research methods does BioNixus use?',
        answer:
          'Quantitative surveys and brand trackers, segmentation, shopper and journey studies, and qualitative depth and message testing — fielded in Arabic and English with verified, representative samples.',
      },
      {
        question: 'Why does sample quality matter so much for B2C research?',
        answer:
          'Consumer conclusions only hold if the sample reflects the real population. BioNixus recruits from verified sources with quota controls rather than open-internet panels, which protects the reliability of brand and demand findings.',
      },
    ],
  },
};

/** Published matrix industries that belong to a given segment, in display order. */
export function getSegmentMatrixIndustries(slug: SegmentSlug): MatrixIndustrySlug[] {
  return MATRIX_INDUSTRY_SLUGS_ORDERED.filter(
    (industrySlug) =>
      MATRIX_INDUSTRIES[industrySlug].published && INDUSTRY_SEGMENT[industrySlug] === slug,
  );
}
