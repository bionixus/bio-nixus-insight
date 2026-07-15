import type { Language } from './i18n';

function getBaseUrl() {
  return 'https://www.bionixus.com';
}

/** Social share image (Facebook, Twitter, LinkedIn): 1200×630, full logo visible. */
export const defaultOgImageUrl = 'https://www.bionixus.com/og-image.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Alt text for the default OG image. */
export const defaultOgImageAlt =
  'BioNixus — global pharmaceutical and healthcare market research company';

export const seoByLanguage: Record<Language, {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}> = {
  en: {
    // Brand-first ≤60 chars; primary keyword cluster for branded + category SERPs.
    title: 'BioNixus | Global Pharma & Healthcare Market Research',
    description:
      'Global market research for pharma & medtech. Physician, payer & hospital evidence for launch and access — Americas, Europe, MENA & APAC. Proposal in 24 hours.',
    keywords:
      'market research company, pharmaceutical market research company, healthcare market research company, global healthcare market research, pharma market research, physician surveys, KOL mapping, market access research, MENA market research, GCC pharmaceutical research, UAE healthcare research, Saudi Arabia pharma research, Egypt market research, medtech market research, competitive intelligence',
    canonicalPath: '/',
  },
  de: {
    title: 'BioNixus | Pharma- & Gesundheitsmarktforschung Global',
    description:
      'Globale Pharma- & Healthcare-Marktforschung: Ärztebefragungen, Payer-Insights und Market Access in DE, Europa und MENA. Angebot in 24 Stunden.',
    keywords:
      'Gesundheitsmarktforschung, Pharmaforschung Deutschland, Ärztebefragungen, Market Access Deutschland, HTA-Forschung, G-BA, IQWiG, KOL-Interviews, Pharma Insights Europa, MENA Marktforschung',
    canonicalPath: '/de',
  },
  fr: {
    title: 'BioNixus | Études de Marché Pharma & Santé Mondiales',
    description:
      'Études de marché santé et pharma : enquêtes médecins, insights payeurs et accès marché en France, Europe et MENA. Proposition sous 24 h.',
    keywords:
      'études de marché santé, recherche pharmaceutique France, enquêtes médecins, accès au marché, HAS CEPS, market research EMEA, MENA, BioNixus',
    canonicalPath: '/fr',
  },
  es: {
    title: 'BioNixus | Investigación de Mercado Pharma y Salud',
    description:
      'Investigación farmacéutica y sanitaria: encuestas a médicos, pagadores y acceso al mercado en España, Europa y MENA. Propuesta en 24 h.',
    keywords:
      'investigación mercado sanitario, investigación farmacéutica España, encuestas médicos, acceso mercado, AEMPS, market research EMEA, MENA, BioNixus',
    canonicalPath: '/es',
  },
  zh: {
    title: 'BioNixus | 全球医药与医疗市场研究',
    description:
      '全球医药与医疗市场研究：医生调研、支付方洞察与市场准入，覆盖美洲、欧洲、中东与亚太。24小时内出具方案。',
    keywords: '医疗市场研究, 制药市场研究, 医生调研, 市场准入, 全球市场研究, BioNixus',
    canonicalPath: '/zh',
  },
  ar: {
    title: 'BioNixus | أبحاث سوق صحية ودوائية عالمية',
    description:
      'أبحاث سوق صحية ودوائية عالمية: استطلاعات الأطباء، رؤى جهات الدفع، ودعم الوصول للسوق عبر الخليج وأوروبا والأمريكتين. عرض خلال 24 ساعة.',
    keywords:
      'أبحاث سوق صحية, أبحاث سوق دوائية, أبحاث سوق الخليج, السعودية, الإمارات, مصر, الوصول للسوق, BioNixus',
    canonicalPath: '/ar',
  },
  pt: {
    title: 'BioNixus | Pesquisa de Mercado Pharma e Saúde Global',
    description:
      'Pesquisa farmacêutica e de saúde: médicos, pagadores e acesso ao mercado nas Américas, Europa e MENA. Proposta em 24 horas.',
    keywords:
      'pesquisa de mercado saúde, pesquisa farmacêutica Brasil, ANVISA, acesso ao mercado, América Latina, BioNixus',
    canonicalPath: '/pt',
  },
  ru: {
    title: 'BioNixus | Маркетинговые исследования Pharma и Healthcare',
    description:
      'Маркетинговые исследования для фармацевтики и здравоохранения: врачи, плательщики и доступ к рынку в Европе и MENA. Предложение за 24 часа.',
    keywords:
      'маркетинговые исследования здравоохранение, фармацевтические исследования, доступ к рынку, BioNixus',
    canonicalPath: '/ru',
  },
};

export const languagePaths: Record<Language, string> = {
  en: '/',
  de: '/de',
  ar: '/ar',
  fr: '/fr',
  es: '/es',
  zh: '/zh',
  pt: '/pt',
  ru: '/ru',
};

/** Canonical localized path for the dedicated Contact page (matches `localizedRouteGroups['/contact']`). */
export function localizedContactPath(language: Language): string {
  if (language === 'fr') return '/fr/contacts';
  if (language === 'ar') return '/ar/contacts';
  const base = languagePaths[language] || '/';
  return base === '/' ? '/contact' : `${base}/contact`;
}

function normalizePath(path: string): string {
  if (!path) return '/';
  const noQuery = path.split('?')[0].split('#')[0] || '/';
  if (noQuery === '/') return '/';
  return noQuery.endsWith('/') ? noQuery.slice(0, -1) : noQuery;
}

const localizedRouteGroups: Record<string, Record<string, string>> = {
  '/': {
    en: '/',
    de: '/de',
    fr: '/fr',
    es: '/es',
    zh: '/zh',
    ar: '/ar',
    pt: '/pt',
    ru: '/ru',
  },
  '/contact': {
    en: '/contact',
    de: '/de/contact',
    fr: '/fr/contacts',
    es: '/es/contact',
    zh: '/zh/contact',
    ar: '/ar/contacts',
    pt: '/pt/contact',
    ru: '/ru/contact',
  },
  '/methodology': {
    en: '/methodology',
    de: '/de/methodology',
    fr: '/fr/methodology',
    es: '/es/methodology',
    zh: '/zh/methodology',
    ar: '/ar/methodology',
    pt: '/pt/methodology',
    ru: '/ru/methodology',
  },
  '/about': {
    en: '/about',
    de: '/de/about',
    fr: '/fr/about',
    es: '/es/about',
    zh: '/zh/about',
    ar: '/ar/about',
    pt: '/pt/about',
    ru: '/ru/about',
  },
  '/bionixus-industries': {
    en: '/bionixus-industries',
    de: '/de/bionixus-industries',
    fr: '/fr/bionixus-industries',
    es: '/es/bionixus-industries',
    zh: '/zh/bionixus-industries',
    ar: '/ar/bionixus-industries',
    pt: '/pt/bionixus-industries',
    ru: '/ru/bionixus-industries',
  },
  '/services': {
    en: '/services',
    de: '/de/services',
  },
  '/blog': {
    en: '/blog',
    de: '/de/blog',
    fr: '/fr/blog',
    ar: '/ar/blog',
    pt: '/pt/blog',
    ru: '/ru/blog',
  },
  '/market-access': {
    en: '/services/market-access',
    es: '/es/market-access',
  },
  '/healthcare-market-research': {
    en: '/healthcare-market-research',
    de: '/de/healthcare-market-research/germany',
    fr: '/fr/healthcare-market-research',
    es: '/es/healthcare-market-research',
    ar: '/ar/healthcare-market-research',
    zh: '/zh/healthcare-market-research',
    ru: '/ru/healthcare-market-research',
  },
  '/healthcare-market-research/saudi-arabia': {
    en: '/healthcare-market-research/saudi-arabia',
    ar: '/ar/healthcare-market-research/saudi-arabia',
  },
  // Deliberately self-reference only: /market-research (the multi-industry
  // hub) and /market-research-healthcare (below) are two distinct English
  // pages. This group previously claimed the exact same de/fr/es/zh/ar/pt/ru
  // "/xx/market-research-healthcare" URLs as /market-research-healthcare's
  // own group — since those locale pages are actual translations of the
  // healthcare-specific page, not this broader hub, claiming them here too
  // produced two different English pages pointing at the same alternates
  // (Ahrefs: "Duplicate_language"/"Incomplete_group" across the whole set).
  '/market-research': {
    en: '/market-research',
  },
  '/market-research-uae': {
    en: '/market-research-uae',
    ar: '/ar/market-research-uae',
  },
  '/market-research-ksa': {
    en: '/market-research-ksa',
    ar: '/ar/market-research-ksa',
  },
  '/market-research-saudi': {
    en: '/market-research-saudi',
    ar: '/ar/market-research-saudi',
  },
  '/market-research-kuwait': {
    en: '/market-research-kuwait',
    ar: '/ar/market-research-kuwait',
  },
  '/market-research-egypt': {
    en: '/market-research-egypt',
    ar: '/ar/market-research-egypt',
  },
  '/strategic-portfolio': {
    en: '/strategic-portfolio',
    ar: '/ar/strategic-portfolio',
  },
  '/insights/top-market-research-companies-egypt-2026': {
    en: '/insights/top-market-research-companies-egypt-2026',
    ar: '/ar/insights/top-market-research-companies-egypt-2026',
  },
  '/blog/top-market-research-companies-egypt-2026': {
    en: '/insights/top-market-research-companies-egypt-2026',
    ar: '/ar/insights/top-market-research-companies-egypt-2026',
  },
  '/insights/top-market-research-companies-brazil-2026': {
    en: '/insights/top-market-research-companies-brazil-2026',
    pt: '/pt/insights/top-market-research-companies-brasil-2026',
  },
  '/insights/top-healthcare-market-research-companies-brazil-2026': {
    en: '/insights/top-healthcare-market-research-companies-brazil-2026',
    pt: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026',
  },
  '/insights/top-market-research-companies-argentina-2026': {
    en: '/insights/top-market-research-companies-argentina-2026',
    es: '/es/insights/top-empresas-investigacion-mercado-argentina-2026',
  },
  '/insights/top-healthcare-market-research-companies-argentina-2026': {
    en: '/insights/top-healthcare-market-research-companies-argentina-2026',
    es: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026',
  },
  '/market-research-saudi-arabia-pharmaceutical': {
    en: '/market-research-saudi-arabia-pharmaceutical',
    ar: '/ar/abhath-suq-adwiyah-saudi-arabia',
  },
  '/brazil-pharmaceutical-market-research': {
    en: '/brazil-pharmaceutical-market-research',
    pt: '/pt/pesquisa-mercado-farmaceutico-brasil',
  },
  '/market-research-healthcare': {
    en: '/market-research-healthcare',
    de: '/de/market-research-healthcare',
    fr: '/fr/market-research-healthcare',
    es: '/es/market-research-healthcare',
    zh: '/zh/market-research-healthcare',
    ar: '/ar/market-research-healthcare',
    pt: '/pt/market-research-healthcare',
    ru: '/ru/market-research-healthcare',
  },
  '/qualitative-market-research': {
    en: '/qualitative-market-research',
  },
  '/pharmacies-saudi-arabia-marketing': {
    en: '/pharmacies-saudi-arabia-marketing',
  },
  '/bionixus-ai-chatbots-increase-sales-and-lead-generation': {
    en: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    de: '/de/success-in-startups',
    fr: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    es: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    zh: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    ar: '/ar/arabic-blog-alsawdyh',
  },
};

function findRouteGroup(pathname: string) {
  const normalized = normalizePath(pathname);
  for (const groupKey of Object.keys(localizedRouteGroups)) {
    const variants = Object.values(localizedRouteGroups[groupKey]);
    if (variants.includes(normalized)) return groupKey;
  }
  return null;
}

function stripLanguagePrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  const prefixes = ['de', 'fr', 'es', 'zh', 'ar', 'pt', 'ru'] as const;
  for (const lang of prefixes) {
    const prefix = languagePaths[lang];
    if (!prefix || prefix === '/') continue;
    if (normalized === prefix) return '/';
    if (normalized.startsWith(`${prefix}/`)) {
      return normalized.slice(prefix.length) || '/';
    }
  }
  return normalized;
}

/**
 * Resolve the URL to navigate to when switching UI language from the current path.
 * Uses localized route groups when available; otherwise strips/adds language prefixes.
 */
export function resolveLanguageSwitchPath(pathname: string, targetLang: Language): string {
  const normalized = normalizePath(pathname);
  const groupKey = findRouteGroup(normalized);
  if (groupKey) {
    const group = localizedRouteGroups[groupKey];
    const target = group[targetLang];
    if (typeof target === 'string') return target;
    if (typeof group.en === 'string') {
      return targetLang === 'en' ? group.en : languagePaths[targetLang] || '/';
    }
  }

  const stripped = stripLanguagePrefix(normalized);
  if (targetLang === 'en') return stripped;
  const base = languagePaths[targetLang] || '/';
  if (stripped === '/') return base;
  return base;
}

export function getCanonicalPath(pathname: string = '/') {
  const normalized = normalizePath(pathname);
  const group = findRouteGroup(normalized);
  if (!group) return normalized;
  const routes = localizedRouteGroups[group];
  return Object.values(routes).includes(normalized) ? normalized : routes.en;
}

const HREFLANG_LANG_KEYS: readonly Language[] = ['en', 'de', 'fr', 'es', 'zh', 'ar', 'pt', 'ru'];

function hreflangLangCode(key: Language): string {
  return key === 'zh' ? 'zh-CN' : key;
}

/** Detect the UI language implied by a path's prefix (e.g. /de/... -> 'de'), defaulting to 'en'. */
function detectLanguageFromPath(normalized: string): Language {
  const candidates = (Object.keys(languagePaths) as Language[])
    .filter((lang) => lang !== 'en')
    .sort((a, b) => languagePaths[b].length - languagePaths[a].length);
  for (const lang of candidates) {
    const prefix = languagePaths[lang];
    if (normalized === prefix || normalized.startsWith(`${prefix}/`)) return lang;
  }
  return 'en';
}

export function getHreflangLinks(pathname: string = '/') {
  const base = getBaseUrl();
  const normalized = normalizePath(pathname);
  const group = findRouteGroup(normalized);
  const absoluteHref = (path: string) => `${base}${normalizePath(path)}`;

  if (!group) {
    const fallbackHref = absoluteHref(normalized);
    const currentLang = detectLanguageFromPath(normalized);
    const selfLang = hreflangLangCode(currentLang);
    return [
      { lang: 'x-default', href: fallbackHref },
      { lang: selfLang, href: fallbackHref },
    ];
  }

  const routes = localizedRouteGroups[group];
  const enPath = routes.en ?? normalized;
  const enHref = absoluteHref(enPath);

  /** One representative language per distinct URL (first declared key wins). */
  const hrefToLang = new Map<string, Language>();
  for (const key of HREFLANG_LANG_KEYS) {
    const path = routes[key];
    if (!path) continue;
    const href = absoluteHref(path);
    if (!hrefToLang.has(href)) {
      hrefToLang.set(href, key);
    }
  }

  const links: Array<{ lang: string; href: string }> = [
    { lang: 'x-default', href: enHref },
    { lang: 'en', href: enHref },
  ];

  for (const [href, key] of hrefToLang) {
    if (href === enHref) continue;
    links.push({ lang: hreflangLangCode(key), href });
  }

  return links;
}

/**
 * Map a canonical English path to the correct URL for the active UI language
 * (e.g. /blog → /de/blog when entries exist in localizedRouteGroups).
 */
export function getLocalizedPathForLanguage(enCanonicalPath: string, lang: Language): string {
  const normalized = normalizePath(enCanonicalPath);
  const routes = localizedRouteGroups[normalized as keyof typeof localizedRouteGroups];
  if (routes && typeof routes[lang] === 'string') {
    return routes[lang];
  }
  return normalized;
}

export function getCanonicalUrl(path: string = '/') {
  return `${getBaseUrl()}${path}`;
}

export function getOgLocale(language: Language): string {
  if (language === 'ar') return 'ar_SA';
  return 'en_US';
}

export function getOgLocaleAlternates(language: Language): string[] {
  return language === 'ar' ? ['en_US'] : ['ar_SA'];
}

/**
 * Infer a single ISO 3166-1 alpha-2 geo.region + display name from a URL path.
 * Only returns a value when the page is explicitly about one country.
 * Multi-country pages (MENA, GCC, EMEA) return null — a broad geo.region
 * mis-signals search intent.
 */
export function getGeoMeta(pathname: string): { region: string; placename: string } | null {
  const path = normalizePath(pathname).toLowerCase();
  if (path === '/' || path === '') return null;

  // Ordered from most-specific to least to avoid false positives
  const PATTERNS: Array<[RegExp, string, string]> = [
    [/egypt/,                               'EG', 'Egypt'],
    [/saudi|[/-]ksa($|\/)/,                 'SA', 'Saudi Arabia'],
    [/\buae\b|-uae($|\/)|united-arab/,      'AE', 'United Arab Emirates'],
    [/kuwait/,                              'KW', 'Kuwait'],
    [/qatar/,                              'QA', 'Qatar'],
    [/bahrain/,                             'BH', 'Bahrain'],
    [/\boman\b/,                            'OM', 'Oman'],
    [/jordan/,                              'JO', 'Jordan'],
    [/morocco/,                             'MA', 'Morocco'],
    [/turkey|türkiye/,                      'TR', 'Turkey'],
    [/brazil/,                              'BR', 'Brazil'],
    [/germany/,                             'DE', 'Germany'],
    [/france/,                              'FR', 'France'],
    [/\bitaly\b/,                           'IT', 'Italy'],
    [/\bspain\b/,                           'ES', 'Spain'],
    [/\bjapan\b/,                           'JP', 'Japan'],
    [/\bchina\b/,                           'CN', 'China'],
    [/\bindia\b/,                           'IN', 'India'],
    [/south.korea|southkorea/,              'KR', 'South Korea'],
    [/singapore/,                           'SG', 'Singapore'],
    [/malaysia/,                            'MY', 'Malaysia'],
    [/poland/,                              'PL', 'Poland'],
    [/\bturkey\b/,                          'TR', 'Turkey'],
    [/netherlands/,                         'NL', 'Netherlands'],
    [/sweden/,                              'SE', 'Sweden'],
    [/argentina/,                           'AR', 'Argentina'],
    [/ireland/,                             'IE', 'Ireland'],
    [/australia/,                           'AU', 'Australia'],
    [/canada/,                              'CA', 'Canada'],
    [/united.kingdom/,                      'GB', 'United Kingdom'],
  ];

  for (const [re, region, placename] of PATTERNS) {
    if (re.test(path)) return { region, placename };
  }
  return null;
}
