import type { MatrixCountrySlug, MatrixIndustrySlug } from '@/data/industryMarketResearchMatrix';
import { MATRIX_COUNTRIES, MATRIX_INDUSTRIES } from '@/data/industryMarketResearchMatrix';
import type { ServiceLandingExpandedContent } from '@/data/serviceLandingContent';

export type IndustryBofuHeroStat = {
  value: string;
  label: string;
  sub?: string;
};

type PageEnhancement = {
  heroIntro?: string;
  heroTagline?: string;
  heroStats?: IndustryBofuHeroStat[];
  stakeholderRows?: Array<{ role: string; focus: string }>;
  uniquenessParagraphs?: string[];
};

const COMMERCIAL_DELIVERABLES = [
  'Executive summary mapped to one product, channel, or customer-experience decision',
  'Segmentation with banked, under-banked, and wallet-user quotas where inclusion context matters',
  'Quantitative tracking, NPS, and concept modules with verified Arabic–English samples',
  'Qualitative depth for trust, switching barriers, and branch versus digital journeys',
  'Competitive brand and channel intelligence with governorate-level readouts',
  'Audit-ready methodology appendix for compliance and internal review',
];

type CountryIndustryKey = `${MatrixCountrySlug}:${MatrixIndustrySlug}`;

const PAGE_ENHANCEMENTS: Partial<Record<CountryIndustryKey, PageEnhancement>> = {
  'egypt:financial-services': {
    heroTagline: 'CBE inclusion context · bilingual fieldwork · decision-ready evidence',
    heroIntro:
      'Egypt’s banking and payments market is shifting from access to quality — 77.6% financial inclusion and 54.7 million active transactional accounts (CBE, December 2025) create demand for research that segments banked, wallet, and under-banked Egyptians by governorate, gender, and age. BioNixus delivers financial services market research in Egypt with Cairo-based field teams, Arabic–English moderation, and outputs mapped to product launch, digital channel, and customer-experience decisions — not syndicated dashboards alone.',
    heroStats: [
      { value: '77.6%', label: 'Financial inclusion', sub: 'CBE · citizens 15+ · Dec 2025' },
      { value: '54.7M', label: 'Active accounts', sub: 'Bank · Post · wallet · prepaid' },
      { value: '1.35M+', label: 'POS terminals', sub: '2022–2025 inclusion strategy' },
      { value: 'CBE + FRA', label: 'Dual regulator', sub: 'Banking & capital markets' },
    ],
    stakeholderRows: [
      {
        role: 'Retail banking customers',
        focus: 'NPS, product adoption, branch versus app journeys, trust after inflation shocks',
      },
      {
        role: 'Mobile wallet & fintech users',
        focus: 'Agent-network reach, telco-wallet switching, fees, and digital trust barriers',
      },
      {
        role: 'SME & corporate banking clients',
        focus: 'Lending appetite, cash management, trade finance, and FX-sensitive pricing',
      },
      {
        role: 'Insurance & wealth segments',
        focus: 'Proposition testing, advisor influence, and Sharia-compliant product fit',
      },
      {
        role: 'Marketing & digital product teams',
        focus: 'Segmentation, campaign learning, and message testing under FRA promotional rules',
      },
    ],
    uniquenessParagraphs: [
      'Egypt is the Arab world’s most populous market and one of MENA’s largest banking systems by branch and payment-terminal footprint. Financial services research must reflect how CBE inclusion policy, mobile-wallet growth, and FX liquidity jointly shape lending, card usage, and savings behaviour — not imported averages from Gulf or European panels.',
      'The Central Bank of Egypt (CBE) governs banking supervision, payment systems, and financial inclusion; the Financial Regulatory Authority (FRA) oversees non-bank financial activities including capital markets and insurance. Product concept tests spanning both regulators require separate compliance review of instruments before field scales.',
      'Inclusion gains were uneven: women’s rate reached 71.4% and youth (15–35) 56.8% by early 2026 — research designs must quota by gender, age, urban/rural geography, and product type. Cairo-only samples systematically overstate digital adoption and credit appetite relative to Upper Egypt and peri-urban governorates.',
      'Mobile wallets and agent banking reach populations branch networks miss. BioNixus Egypt programmes combine governorate quotas, Arabic-first fieldwork, and explicit banked versus under-banked definitions — with wallet users separated from branch-only customers before national extrapolation.',
      'For the 2026 firm comparison guide, see our independent listicle ranking top financial services market research companies in Egypt; this page is BioNixus as your execution partner with Cairo office coverage and healthcare-grade research governance.',
    ],
  },
  'uae:medtech': {
    uniquenessParagraphs: [
      'MedTech market research in the UAE must separate Dubai private-hospital procurement from Abu Dhabi insurance-mandated pathways and federal MOHAP registration — three parallel systems that syndicated device reports collapse into a single “UAE average” that misprices launch sequencing.',
      'Mandatory health insurance tiers create distinct device adoption curves: Essential Benefits Plan networks favour cost-contained utilisation, while premium international hospital groups sustain innovator uptake for robotics, advanced imaging, and interventional cardiology.',
      'BioNixus UAE MedTech programmes recruit verified biomedical engineers, cath-lab directors, OR managers, and procurement leads across DHA-licensed Dubai facilities and DOH Abu Dhabi networks — with Arabic–English moderation standard for administrator and clinician depth.',
      'Emirate-tagged readouts precede national roll-up: Dubai medical-tourism corridors and Abu Dhabi insurance density require separate 30/60/90 commercial actions before regional portfolio committees extrapolate a single UAE forecast.',
    ],
  },
  'uae:consumer-health': {
    uniquenessParagraphs: [
      'Consumer health and OTC research in the UAE reflects among the highest e-commerce penetration rates in MENA, mall-pharmacy formats, and influencer-led discovery alongside traditional community pharmacy — each channel follows distinct shopper missions that capital-city-only samples misrepresent.',
      'Emirate-level income segmentation drives category growth: Dubai premium wellness missions differ materially from Northern Emirates mass-market OTC behaviour; research quotas must document emirate, nationality cohort, and insurance tier before national media spend is committed.',
      'Regulatory claims boundaries for supplements, cosmetics, and OTC medicines require legal review before concept testing scales; BioNixus scopes permissible health-benefit language per MOHAP category before shopper message modules field.',
      'Multilingual fieldwork — Arabic, English, Hindi, and Tagalog — reaches expatriate shopper segments that dominate specific OTC categories; pharmacist recommendation modules capture detail beyond shelf analytics where category dynamics require both channels.',
    ],
  },
  'egypt:medtech': {
    uniquenessParagraphs: [
      'MedTech market research in Egypt runs through EDA device registration, ministry hospital tender cycles, and distributor networks that differ materially from Gulf NUPCO models — a single “MENA device average” systematically misstates listing probability and replacement-cycle timing.',
      'Public ministry hospitals, university centres, and fast-growing private groups follow distinct procurement rhythms; BioNixus sample design reflects realistic listing accounts rather than convenience capital-city panels that overstate private-sector device uptake.',
      'Hard-currency budgets and FX-sensitive tenders affect device affordability; total cost of ownership, local service capability, and spare-parts logistics weigh as heavily as clinical enthusiasm in Egyptian biomedical engineering committee decisions.',
      'Upper Egypt referral patterns differ from Cairo corridors; geographic quotas prevent capital-city skew in national adoption forecasts — Arabic fieldwork is mandatory for physician, biomedical engineering, and procurement depth interviews.',
    ],
  },
  'egypt:consumer-health': {
    uniquenessParagraphs: [
      'Consumer health research in Egypt spans mass-market pharmacy chains, traditional outlets, and mobile-wallet e-commerce — out-of-pocket spend dominates many OTC categories, so pricing and pack-size testing requires income-segmented shopper modules beyond Greater Cairo elites.',
      'Regulatory scope for supplements and OTC claims follows EDA categories; message research aligns to permissible claims before national roll-out, preventing creative concepts that cannot legally deploy after research completes.',
      'Seasonal demand, Ramadan purchasing patterns, and rural–urban splits affect distribution velocity; field quotas document governorate geography before conclusions drive national media investment across Egypt’s 105+ million population.',
      'Pharmacist recommendation remains influential for OTC categories; pharmacy intercept and pharmacist depth modules complement shopper quant where category dynamics require both recommendation behaviour and shelf analytics.',
    ],
  },
};

const REGULATORY_CONTENT: Partial<
  Record<CountryIndustryKey, ServiceLandingExpandedContent['regulatory']['paragraphs']>
> = {
  'egypt:financial-services': [
    'Financial services research in Egypt must respect the split between Central Bank of Egypt (CBE) banking supervision and Financial Regulatory Authority (FRA) oversight of non-bank financial activities. Instruments touching savings, lending, insurance, or investment products need compliance review against the regulator that governs each proposition — a single “financial services” screener often misclassifies eligibility and biases response sets.',
    'CBE’s Financial Inclusion Strategy (2022–2025) closed at 77.6% inclusion with a 2026–2030 successor in preparation. Research briefs should anchor on inclusion geography — which governorates, age cohorts, and gender segments drove gains — before product teams treat national averages as homogeneous demand.',
    'Payment-system expansion — 1.35 million+ POS terminals and agent-banking networks — reshapes channel strategy. Studies should tag wallet users, Egypt Post account holders, and traditional branch customers separately; Ipsos BankScape Egypt and similar syndicated trackers show persistent credit-product gaps despite headline bank satisfaction.',
    'Promotional and disclosure rules differ for banking versus capital-markets products. Message testing must align to permissible claims under FRA and CBE guidance before national media or digital activation — especially for yield-led savings narratives after inflation and currency volatility eroded retail trust.',
    'Personal data handling for financial respondent recruitment should follow Egyptian data-protection expectations and client banking confidentiality policies. BioNixus anonymises outputs, obtains consent at recruitment, and never exposes account-level identifiers in deliverables.',
    'Cross-MENA benchmarking helps multinational banks, but Egyptian FX policy, agent-network economics, and governorate-level income dispersion require local primary research rather than imported UAE or Saudi averages.',
  ],
};

const MARKET_CONTEXT: Partial<
  Record<CountryIndustryKey, ServiceLandingExpandedContent['marketContext']['paragraphs']>
> = {
  'egypt:financial-services': [
    'Egypt’s competitive battlefield has moved from basic account access to service quality, digital trust, credit penetration, and segment-specific value propositions. Product and marketing teams need evidence on why wallet users stay, why credit products stall, and which governorates justify branch investment versus agent expansion.',
    'BioNixus maintains Cairo field capacity with Arabic–English execution standard across retail banking, insurance, and fintech programmes. Mixed quant and qual designs link stated satisfaction to revealed switching behaviour — critical when inflation shocks make yield-only messaging insufficient for savings and investment products.',
    'Global networks (Ipsos BankScape, Kantar brand tracking) and syndicated publishers (Euromonitor category reports) complement custom research: syndicated data sizes categories; BioNixus fieldwork explains local decision drivers committees act on. The strongest programmes combine both rather than relying on desk extrapolation.',
    'Women’s and youth inclusion lag headline rates — dedicated cells for female entrepreneurs, first-job cohorts, and rural agent-network users prevent capital-city skew in national launch models. Governorate quotas should reflect CBE inclusion geography, not convenience sampling in Greater Cairo alone.',
    'SME lending, trade finance, and corporate cash management follow different cycles from retail NPS work. B2B modules recruit finance managers and business owners through screened telephone verification — standard online panels under-represent verified SME banking relationships.',
  ],
};

function key(countrySlug: MatrixCountrySlug, industrySlug: MatrixIndustrySlug): CountryIndustryKey {
  return `${countrySlug}:${industrySlug}`;
}

function buildCommercialExpandedContent(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
): ServiceLandingExpandedContent | null {
  const k = key(countrySlug, industrySlug);
  const regulatoryParagraphs = REGULATORY_CONTENT[k];
  if (!regulatoryParagraphs?.length) return null;

  const country = MATRIX_COUNTRIES[countrySlug];
  const industry = MATRIX_INDUSTRIES[industrySlug];
  if (!country || !industry) return null;

  const industryName = industry.displayNameShort;
  const bofuPath = `/${countrySlug}-${industrySlug}-market-research`;
  const marketParagraphs = MARKET_CONTEXT[k] ?? [];

  return {
    hubLink: { to: '/market-research/financial-services', label: 'financial services market research hub' },
    regulatory: {
      heading: `CBE, FRA, and market structure for ${industryName} research in ${country.label}`,
      paragraphs: regulatoryParagraphs,
    },
    marketContext: {
      heading: `Why ${industryName} teams invest in ${country.label} market research now`,
      paragraphs: marketParagraphs,
    },
    services: {
      heading: `${industryName} market research services BioNixus delivers in ${country.label}`,
      items: [
        {
          title: 'Customer experience & NPS programmes',
          description: `Relationship and transactional NPS, customer effort score, and journey diagnostics for retail banking — with governorate quotas and Arabic–English instruments aligned to ${country.label} channel reality.`,
        },
        {
          title: 'Product & proposition concept testing',
          description: `Concept tests for lending, savings, insurance, and wallet features — segmenting banked, under-banked, and wallet-first users before national roll-out under CBE and FRA promotional boundaries.`,
        },
        {
          title: 'Brand tracking & competitive intelligence',
          description: `Prompted and unprompted awareness, trust, and switching intent versus key bank, fintech, and wallet competitors — wave or ad-hoc designs with verified ${country.label} samples.`,
        },
        {
          title: 'Digital channel & fintech adoption research',
          description: `App UX, agent-network usability, and telco-wallet migration studies — linking digital enthusiasm to FX-sensitive affordability and trust barriers unique to ${country.label}.`,
        },
        {
          title: 'SME & corporate banking insight',
          description: `Screened B2B interviews with finance managers and business owners on lending, cash management, and trade finance — separate from retail panels that misrepresent corporate relationships.`,
        },
        {
          title: 'Mixed-method executive readouts',
          description: `Integrated quant and qual synthesis with 30/60/90 actions for product, marketing, and digital owners — optional GCC appendices when regional leadership requires comparable readouts.`,
        },
      ],
    },
    methodology: {
      heading: `${industryName} market research methodology in ${country.label}`,
      paragraphs: [
        `BioNixus anchors every ${country.label} programme on one ${industryName.toLowerCase()} decision — launch sequencing, channel mix, competitive defence, or customer-experience uplift — before recruitment calendars lock. Feasibility documents banked definitions, governorate quotas, and bilingual requirements.`,
        `Mixed-method designs combine tracking and concept quant with qual depth on trust, switching, and agent-network behaviour. Soft-launch validation completes before full field; daily telemetry flags geography or channel skew early.`,
        `Arabic–English screeners and discussion guides undergo terminology review with local advisors. Respondent verification confirms product ownership, account type, and governorate — reducing misclassification common in open-access panels.`,
        `Deliverables include executive synthesis, competitive objection libraries, compliance-ready appendices, and activation workshops. Ethics and banking confidentiality constraints are mapped during feasibility so fieldwork does not stall mid-program.`,
        `For multinational portfolios, harmonized instruments allow ${country.label} appendices within Saudi or UAE-led MENA programmes without assuming identical regulatory or channel behaviour.`,
      ],
    },
    useCases: {
      heading: `Common ${industryName} research use cases in ${country.label}`,
      paragraph: `${industryName} research in ${country.label} supports digital channel investment, inclusion-aligned segmentation, competitive response, and product launch sequencing when local evidence is required for leadership or regulator dialogue.`,
      areas: [
        'Post-inclusion customer experience and NPS benchmarking',
        'Mobile wallet and agent-banking adoption diagnostics',
        'Credit and savings product concept and pricing tests',
        'Brand health tracking versus bank and fintech competitors',
        'SME lending and corporate cash-management insight',
        'Insurance and wealth proposition message testing',
        'Governorate-level channel and branch productivity analysis',
        'Inclusion-strategy impact measurement (gender, youth, rural)',
      ],
    },
    process: {
      heading: `How BioNixus runs ${industryName} programs in ${country.label}`,
      steps: [
        {
          title: 'Decision framing and feasibility',
          body: `Align on one ${industryName.toLowerCase()} outcome, map CBE/FRA scope, define banked and wallet segments, and document governorate quotas before field opens.`,
        },
        {
          title: 'Instrument design and compliance review',
          body: 'Build Arabic–English screeners and guides; compliance teams review promotional claims and sensitive product wording before soft-launch.',
        },
        {
          title: 'Field execution with telemetry',
          body: `Recruit verified respondents across target segments with daily quota review — Cairo, Alexandria, Delta, and Upper Egypt cells as brief requires.`,
        },
        {
          title: 'Executive synthesis and activation',
          body: 'Deliver integrated readout, trust and switching libraries, and 30/60/90 actions for product, digital, and marketing owners.',
        },
      ],
    },
    deliverables: {
      heading: `Typical ${industryName} deliverables in ${country.label}`,
      bullets: COMMERCIAL_DELIVERABLES,
    },
    decisionBlueprint: {
      why: `${country.label} ${industryName.toLowerCase()} decisions concentrate in segment, channel, and trust dynamics that syndicated averages flatten — especially after inclusion milestones shifted competition from access to quality.`,
      evidence: `Governorate-tagged mixed-method research with CBE inclusion context surfaces behaviour national desk data cannot explain — wallet versus branch, gender gaps, and credit-product stall points.`,
      next: `Scope a ${country.label} financial services module on one decision; BioNixus delivers written feasibility and methodology within one week.`,
    },
    faqs: [
      {
        question: `Who is the best financial services market research company in ${country.label}?`,
        answer: `BioNixus is a leading option for financial services in ${country.label}: Cairo-based bilingual fieldwork, CBE/FRA-aware design, and decision-ready outputs — see ${bofuPath} for company-intent detail and the 2026 firms listicle for independent comparisons.`,
      },
      {
        question: `What does financial services market research include in ${country.label}?`,
        answer: `Programs typically combine customer surveys, depth interviews, brand tracking, channel mapping, and executive synthesis — with explicit banked, wallet, and governorate segmentation aligned to CBE inclusion geography.`,
      },
      {
        question: `Does BioNixus run Arabic fieldwork for banking research in ${country.label}?`,
        answer: 'Yes. Arabic–English instruments and moderation are standard. Terminology is reviewed before field for lending, insurance, and wallet categories.',
      },
      {
        question: `How much does financial services market research cost in ${country.label}?`,
        answer: 'Scope drives cost; focused qual modules often start in the low five figures USD. BioNixus scopes to one decision per phase with written feasibility before commitment.',
      },
      {
        question: `Can ${country.label} research connect to GCC banking benchmarks?`,
        answer: 'Yes. Modules run standalone or with comparable Saudi and UAE cells using harmonized instruments — with explicit notes where Egyptian FX and inclusion dynamics differ from Gulf markets.',
      },
      {
        question: `Where is the 2026 top firms listicle for financial services in ${country.label}?`,
        answer: `See /insights/top-financial-services-market-research-companies-egypt-2026 for firm profiles; this page is BioNixus as your execution partner.`,
      },
    ],
  };
}

export function getCommercialIndustryExpandedContent(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
): ServiceLandingExpandedContent | null {
  return buildCommercialExpandedContent(countrySlug, industrySlug);
}

export function getIndustryBofuPageEnhancements(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
): PageEnhancement | null {
  return PAGE_ENHANCEMENTS[key(countrySlug, industrySlug)] ?? null;
}
