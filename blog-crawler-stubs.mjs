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
