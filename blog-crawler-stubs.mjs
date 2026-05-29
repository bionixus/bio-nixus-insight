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
  'nf1-koselugo-selumetinib-pharma-market-research',
]);

/** Slugs served primarily from React hardcoded modules (full HTML in SPA). */
/** Slug-specific meta descriptions (120–130 chars) for crawler HTML and SSR fallbacks. */
export const BLOG_META_DESCRIPTION_OVERRIDES = {
  'healthcare-overview-china-market-2026':
    '深度解析2026年中国医疗健康市场全景：医保支付改革、创新药出海与生物药增长、AI智慧医疗落地、老龄化诊疗需求变化、医院与基层竞争格局，及跨国药企本地化策略。BioNixus为中国药企、投资人与决策者提供可执行洞察。涵盖器械、数字医疗与支付改革路径。',
  'سوق-الدواء-السعودي-2026':
    'سوق الدواء السعودي 2026: توطين التصنيع، نمو الأدوية الحيوية، توسع التأمين ومشتريات NUPCO—تحليل BioNixus للوصول والتجاري في المملكة',
};

export function getBlogMetaDescriptionOverride(slug) {
  const key = typeof slug === 'string' ? slug.trim() : '';
  return BLOG_META_DESCRIPTION_OVERRIDES[key] ?? null;
}

/** ≤60-char primary titles for crawler HTML (before "| BioNixus" suffix). */
export const BLOG_TITLE_OVERRIDES = {
  'pharmaceutical-market-entry-saudi-arabia-2026-guide': 'Saudi Pharma Market Entry 2026',
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
  'nf1-koselugo-selumetinib-pharma-market-research': {
    title: 'NF1 & Koselugo (Selumetinib): Pharma Research & MAP | BioNixus',
    description:
      'Neurofibromatosis type 1 (NF1) landscape, MEK inhibition with Koselugo (selumetinib), and how pharma teams localize evidence for payers & specialists.',
  },
  'desmoid-tumors-nirogacestat-pharma-market-access': {
    title: 'Desmoid Tumours & OGSIVEO (Nirogacestat): Market Access Intelligence | BioNixus',
    description:
      'Desmoid tumour landscape, OGSIVEO (nirogacestat) FDA approval for progressing adults, and commercial intelligence for Gulf market access teams.',
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
