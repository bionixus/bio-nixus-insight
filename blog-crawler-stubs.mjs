/**
 * Crawler-facing blog metadata (AhrefsBot / social bots hit /api/blog/:slug via Vercel rewrite).
 * Keeps index,follow aligned with React hardcoded pillars when Sanity has no document.
 */

export const BLOG_FORCE_INDEX_SLUGS = new Set([
  'healthcare-overview-china-market-2026',
  'سوق-الدواء-السعودي-2026',
  'pharmacoeconomics-gcc-practical-guide',
  'gcc-pharmacoeconomics',
  'uae-healthcare-market-trends-2025',
  'desmoid-tumors-nirogacestat-pharma-market-access',
  'neurofibromatosis',
  'skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
  'uae-healthcare-market-trends-2026',
  'nf1-koselugo-selumetinib-pharma-market-research',
  'market-research-companies-egypt',
  'medtech-singapore-2026-market-hsa-registration',
  'turkey-pharmaceutical-market-2026-titck-top-companies',
  'nmpa-class-iii-registration-timeline-2026',
  'china-device-vbp-rounds-explained',
  'who-does-obesity-market-research-saudi-arabia',
  'feasibility-study-company-saudi-arabia',
  'glp-1-physician-survey-saudi-arabia',
  'customer-satisfaction-surveys-uae-csat-nps-ces',
  'brand-tracking-research-agency-dubai',
  'market-entry-research-saudi-arabia',
  'consumer-survey-company-saudi-arabia',
  'b2b-market-research-uae',
  'europe-to-gcc-market-entry-research',
  'obesity-market-research-kuwait',
  'qatar-obesity-glp1-market-research',
  'hematology-market-research-saudi-arabia',
  'iqvia-alternative-uae-primary-research',
  'how-to-choose-healthcare-market-research-agency-saudi-arabia',
]);

/** Slugs served primarily from React hardcoded modules (full HTML in SPA). */
/** Slug-specific meta descriptions (120–130 chars) for crawler HTML and SSR fallbacks. */
export const BLOG_META_DESCRIPTION_OVERRIDES = {
  'healthcare-overview-china-market-2026':
    '深度解析2026年中国医疗健康市场全景：医保支付改革、创新药出海与生物药增长、AI智慧医疗落地、老龄化诊疗需求变化、医院与基层竞争格局，及跨国药企本地化策略。BioNixus为中国药企、投资人与决策者提供可执行洞察。涵盖器械、数字医疗与支付改革路径。',
  'سوق-الدواء-السعودي-2026':
    'سوق الدواء السعودي 2026: توطين التصنيع، نمو الأدوية الحيوية، توسع التأمين ومشتريات NUPCO—تحليل BioNixus للوصول والتجاري في المملكة',
  'skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement':
    'Skyrizi led July pharma TV ad spend and brand-impression rankings. What AbbVie immunology leadership means for omnichannel engagement, HCP digital, and promotional ROI.',
  // Owner URL for "sfda drug registration", "pharmaceutical product registration in saudi arabia",
  // "medicinal product registration in saudi arabia". Keep in sync with lib/ctr-seo-overrides.mjs.
  'sfda-drug-registration-guide':
    'Pharmaceutical and medicinal product registration in Saudi Arabia: SFDA drug registration steps, eCTD dossier, fees, timelines.',
};

export function getBlogMetaDescriptionOverride(slug) {
  const key = typeof slug === 'string' ? slug.trim() : '';
  return BLOG_META_DESCRIPTION_OVERRIDES[key] ?? null;
}

/** ≤60-char primary titles for crawler HTML (before "| BioNixus" suffix). */
export const BLOG_TITLE_OVERRIDES = {
  'pharmaceutical-market-entry-saudi-arabia-2026-guide': 'Saudi Pharma Market Entry 2026',
  'skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement':
    'Skyrizi Tops July Pharma Rankings: Omnichannel Lessons',
  'sfda-drug-registration-guide': 'SFDA Drug Registration Saudi Arabia: 2026 Guide',
};

export function getBlogTitleOverride(slug) {
  const key = typeof slug === 'string' ? slug.trim() : '';
  return BLOG_TITLE_OVERRIDES[key] ?? null;
}

export const BLOG_HARDCODED_CRAWLER_STUBS = {
  'gcc-pharmacoeconomics': {
    title: 'GCC Pharmacoeconomics: Health Economics, HTA Signals & Tender Evidence',
    description:
      'GCC pharmacoeconomics playbook: Saudi & UAE payer cues, tender dossiers, BIA vs CEA sequencing, comparator localization—BioNixus HEOR.',
  },
  neurofibromatosis: {
    title: 'Neurofibromatosis: NF1 Pharma Research & MAP | BioNixus',
    description:
      'Neurofibromatosis type 1 (NF1) landscape, oral MEK inhibition for plexiform neurofibromas, and how pharma teams localize evidence for payers & specialists.',
  },
  'desmoid-tumors-nirogacestat-pharma-market-access': {
    title: 'Desmoid Tumours & OGSIVEO (Nirogacestat): Market Access Intelligence | BioNixus',
    description:
      'Desmoid tumour landscape, OGSIVEO (nirogacestat) FDA approval for progressing adults, and commercial intelligence for Gulf market access teams.',
  },
  'uae-healthcare-market-trends-2026': {
    title: 'UAE Healthcare Market Trends 2026: Payer, Specialty, and Access Shifts',
    description:
      'UAE healthcare trends 2026: payer tightening, DHA vs DOH access, specialty and biosimilars, and digital-health signals for pharma and medtech.',
  },
  'nf1-koselugo-selumetinib-pharma-market-research': {
    title: 'Koselugo (Selumetinib) Market Research: NF1 Plexiform Neurofibroma Access',
    description:
      'Koselugo (selumetinib) market research for NF1 plexiform neurofibromas — FDA chronology, EU vs EZMEKLY, launch economics, and specialist adoption.',
  },
  'market-research-companies-egypt': {
    title: 'Top Market Research Companies in Egypt (2026 Compared)',
    description:
      'Compare leading market research companies operating in Egypt — global networks (Kantar, Ipsos, NielsenIQ, IQVIA, YouGov) and healthcare specialists.',
  },
  'medtech-singapore-2026-market-hsa-registration': {
    title: 'MedTech in Singapore 2026: Market Size, HSA Registration & Key Players',
    description:
      "Singapore's medtech industry in 2026 — manufacturing scale, HSA Class A–D registration, Access Consortium, and the top device makers with Singapore plants.",
  },
  'turkey-pharmaceutical-market-2026-titck-top-companies': {
    title: 'Turkey Pharmaceutical Market 2026: Size, TITCK & Top Companies',
    description:
      "Turkey's pharmaceutical market in 2026 — size and growth, TITCK drug registration steps, reference pricing, and the leading local and multinational companies.",
  },
  'nmpa-class-iii-registration-timeline-2026': {
    title: 'NMPA Class III Registration Timeline 2026: CMDE Review & Clinical Evidence',
    description:
      'NMPA Class III medical device registration in China 2026: CMDE review steps, clinical evaluation options, Resident Agent duties, and 18–36 month planning benchmarks.',
  },
  'china-device-vbp-rounds-explained': {
    title: 'China Device VBP Rounds Explained 2026: Price Cuts & Volume Commitments',
    description:
      'How China’s medical device Volume-Based Procurement works in 2026: stent and joint price-cut examples, win vs lose outcomes, renewals, and private-hospital escape valves.',
  },
  'who-does-obesity-market-research-saudi-arabia': {
    title: 'Who Does Obesity Market Research in Saudi Arabia? (2026)',
    description:
      'Who does obesity market research in Saudi Arabia? A sourced 2026 shortlist of 8 providers for obesity GLP-1 market research Saudi Arabia teams can act on.',
  },
  'feasibility-study-company-saudi-arabia': {
    title: 'Feasibility Study Company Saudi Arabia (2026 Guide)',
    description:
      'Feasibility study company Saudi Arabia: what the 2026 market section must prove — demand, price, channels, competition and SIDF-ready primary evidence.',
  },
  'glp-1-physician-survey-saudi-arabia': {
    title: 'GLP-1 Physician Survey Saudi Arabia: 2026 Methods Guide',
    description:
      'How to design a GLP-1 physician survey Saudi Arabia brand teams can act on: published KAP findings, specialty quotas, and BioNixus 3,200-physician reach.',
  },
  'customer-satisfaction-surveys-uae-csat-nps-ces': {
    title: 'Customer Satisfaction Survey Company UAE (2026 Guide)',
    description:
      'Customer satisfaction survey company UAE guide to CSAT, NPS and CES — how an NPS survey company Saudi Arabia brief should specify the recommend question.',
  },
  'brand-tracking-research-agency-dubai': {
    title: 'Brand Tracking Research Agency Dubai: Custom Tracker',
    description:
      'Brand tracking research agency Dubai guide: custom tracker vs syndicated data, bilingual UAE fieldwork from a Dubai field office, KPIs that move budgets.',
  },
  'market-entry-research-saudi-arabia': {
    title: 'Market Entry Research Saudi Arabia (2026 Playbook)',
    description:
      'Market entry research Saudi Arabia playbook for US, UK and European firms: demand, MISA registration, cities, channels and price before you commit capital.',
  },
  'consumer-survey-company-saudi-arabia': {
    title: 'Consumer Survey Company Saudi Arabia: 2026 Methods',
    description:
      'Consumer survey company Saudi Arabia guide to sampling, Arabic/English, online vs CATI/F2F, women respondents, regions, costs and how to choose a firm.',
  },
  'b2b-market-research-uae': {
    title: 'B2B Market Research UAE: Recruiting Decision-Makers',
    description:
      'B2B market research UAE for hard-to-reach buyers: methods, recruitment, costs, and how to choose a B2B market research company Dubai. Named-sample 2026.',
  },
  'europe-to-gcc-market-entry-research': {
    title: 'Europe-to-GCC Market Entry Research (2026 Playbook)',
    description:
      'Europe-to-GCC market entry research for European brands: six-country sequencing, VAT, G-Mark, channels and price before a brand committee commits capital.',
  },
  'obesity-market-research-kuwait': {
    title: 'Obesity Market Research Kuwait: Who Funds GLP-1s 2026',
    description:
      'Obesity market research Kuwait: who funds GLP-1s, what MOH and private payers need to see, and how BioNixus designs 2026 access studies for brand teams.',
  },
  'qatar-obesity-glp1-market-research': {
    title: 'Qatar Obesity GLP-1 Market Research: Wegovy to Oral',
    description:
      'Qatar obesity GLP-1 market research after Wegovy and MOPH oral GLP-1 approval: what STEPS, HMC cover and private prices mean for 2026 brand-team studies.',
  },
  'hematology-market-research-saudi-arabia': {
    title: 'Hematology Market Research Saudi Arabia: Launch 2026',
    description:
      'Hematology market research Saudi Arabia for sickle cell, thalassemia and Casgevy: what pharma must study before a 2026 launch, with sourced access facts.',
  },
  'iqvia-alternative-uae-primary-research': {
    title: 'IQVIA Alternative UAE Primary Research: Keep Audit',
    description:
      'IQVIA alternative UAE primary research for brand teams that keep syndicated audits and add custom physician, payer and patient studies from a Dubai office.',
  },
  'how-to-choose-healthcare-market-research-agency-saudi-arabia': {
    title: 'Healthcare Market Research Agency Saudi Arabia: 10 Questions',
    description:
      'Ten questions to ask a healthcare market research agency Saudi Arabia: field office, PDPL, SFDA, NUPCO, CHI panels, and what BioNixus puts in writing.',
  },
};

export function isFallbackBlogSlug(slug) {
  return typeof slug === 'string' && /^fallback-\d+$/.test(slug);
}

export function shouldCrawlerIndexBlogSlug(slug) {
  const key = typeof slug === 'string' ? slug.trim().toLowerCase() : '';
  return BLOG_FORCE_INDEX_SLUGS.has(key) || key in BLOG_HARDCODED_CRAWLER_STUBS;
}

export function getCrawlerStubForSlug(slug) {
  const key = typeof slug === 'string' ? slug.trim() : '';
  return BLOG_HARDCODED_CRAWLER_STUBS[key] ?? null;
}
