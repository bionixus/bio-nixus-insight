/** Verified BioNixus facts only — article-rules.md / AGENTS.md. Do not invent extras. */
export const INTL_DATE_MODIFIED = '2026-10-18';

export const FACTS = {
  founded: '2012',
  clients: '118',
  countries: '48',
  studies2026: '127',
  studies2025: '120',
  physicians: '82,000+ physicians globally and about 3,200 physicians in the Middle East',
  priceLow: '$10,000',
  priceHigh: '$60,000',
  reviews: '40',
  hq: 'Sheridan, Wyoming',
  slogan: 'Guaranteed in writing.',
} as const;

export const OFFICES = {
  leadership: 'USA (Sheridan, WY), the United Kingdom (London) and Cairo (Sheikh Zayed)',
  field: 'Al Khobar, Dubai and Kuwait',
} as const;

/** Region-specific “delivered from” lines. Do not mix these. */
export const DELIVERY = {
  usa: 'Work is delivered from the BioNixus US office.',
  apac: 'Work is delivered from the US, UK, Dubai and Cairo offices.',
  europe: 'Work is delivered from the USA and UK offices.',
  latam: 'Work is delivered from the USA offices and our field teams in Brazil and LATAM.',
  apacJa: '案件は米国・英国・ドバイ・カイロ拠点から届けます。',
  apacZh: '项目由美国、英国、迪拜、开罗办公室交付。',
} as const;

export const GUARANTEES =
  'replace non-qualifying respondents free, a minimum sample, re-field at our cost if agreed quotas are missed, and a pilot fee credited to the main field';

export const BASE = 'https://www.bionixus.com';

export const PATHS = {
  usa: '/market-research/usa',
  japan: '/market-research/japan',
  china: '/market-research/china',
  singapore: '/market-research/singapore',
} as const;

export function abs(path: string): string {
  return `${BASE}${path}`;
}

export const INTL_HREFLANG_BY_PATH: Record<string, Array<{ lang: string; href: string }>> = {
  [PATHS.usa]: [
    { lang: 'x-default', href: abs(PATHS.usa) },
    { lang: 'en', href: abs(PATHS.usa) },
  ],
  [PATHS.japan]: [
    { lang: 'x-default', href: abs(PATHS.japan) },
    { lang: 'en', href: abs(PATHS.japan) },
  ],
  [PATHS.china]: [
    { lang: 'x-default', href: abs(PATHS.china) },
    { lang: 'en', href: abs(PATHS.china) },
  ],
  [PATHS.singapore]: [
    { lang: 'x-default', href: abs(PATHS.singapore) },
    { lang: 'en', href: abs(PATHS.singapore) },
  ],
};

export function countLatinWords(text: string): number {
  return text
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{link:[^|]+\|([^}]+)\}/g, '$1')
    .replace(/\{ext:[^|]+\|([^}]+)\}/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

/** CJK-aware count: Latin tokens plus half of CJK characters. */
export function countContentWords(text: string): number {
  const stripped = text
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{link:[^|]+\|([^}]+)\}/g, '$1')
    .replace(/\{ext:[^|]+\|([^}]+)\}/g, '$1');
  const cjk = stripped.match(/[\u3040-\u30ff\u3400-\u9fff]/g)?.length ?? 0;
  const latin = stripped
    .replace(/[\u3040-\u30ff\u3400-\u9fff]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
  return latin + Math.round(cjk / 2);
}

export function countPageWords(page: {
  h1: string;
  quickAnswer: string;
  proofPoints: Array<{ title: string; description: string }>;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
}): number {
  const chunks = [
    page.h1,
    page.quickAnswer,
    ...page.proofPoints.flatMap((point) => [point.title, point.description]),
    ...page.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...page.faqs.flatMap((item) => [item.question, item.answer]),
  ];
  return countContentWords(chunks.join(' '));
}

export const SPA_CHINESE_KSA =
  'https://www.spa.gov.sa/en/N2407874';
export const WAM_CHINESE_UAE =
  'https://www.wam.ae/en/article/c0o6x6t-abu-dhabi-chamber-leads-private-sector-delegation';
export const MFA_CHINA_KSA =
  'https://www.mfa.gov.cn/eng/gjhdq_665435/2675_665437/2878_663746/';
export const MFA_CHINA_UAE =
  'https://www.fmprc.gov.cn/mfa_eng/gjhdq_665435/2675_665437/2903_663806/';
export const JETRO_MEA_REPORTS =
  'https://www.jetro.go.jp/reportstop/reports/middle_east/';
export const ESG_ABU_DHABI =
  'https://www.enterprisesg.gov.sg/grow-your-business/innovate-with-us/market-access-and-networks/global-innovation-alliance/gia/gia-abu-dhabi-discovery-programme';
