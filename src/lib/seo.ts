import type { Language } from './i18n';

function getBaseUrl() {
  return 'https://www.bionixus.com';
}

/** Social share image (Facebook, Twitter, LinkedIn): 1200×630, full logo visible. */
export const defaultOgImageUrl = 'https://www.bionixus.com/og-image.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Alt text for the default OG image. */
export const defaultOgImageAlt = 'BioNixus — pharmaceutical and healthcare market research';

export const seoByLanguage: Record<Language, {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}> = {
  en: {
    // Brand-first title (≤60 chars after normalizeSeoTitle) so search engines never see a
    // truncated tail and the brand name "Bionixus" / "BioNixus" wins its own SERP at #1.
    title: 'BioNixus | Pharmaceutical & Healthcare Market Research',
    description:
      'Global pharmaceutical and healthcare market research across the Americas, Europe, and the Middle East — plus B2B and B2C market research. Physician surveys, KOL mapping, payer insight, and market access strategy. US-headquartered with London and Cairo offices, serving 48 global clients across 127+ projects since 2012.',
    keywords: 'pharmaceutical market research company, healthcare market research company, healthcare market research, MENA market research, pharmaceutical consulting, competitive intelligence, market access, clinical trials, UAE healthcare research, healthcare market research company UAE, pharma market research company UAE, Saudi Arabia pharma research, healthcare market research company Saudi Arabia, pharma market research company KSA, healthcare market research company Egypt, pharma market research company Egypt, market research company Egypt, market research Egypt, medtech market research Saudi Arabia, medtech market research UAE, medtech market research Egypt, FMCG market research Middle East, financial services market research GCC, biotech, life sciences',
    canonicalPath: '/',
  },
  de: {
    title: 'Gesundheitsmarktforschung EMEA | Pharma-Insights Deutschland Europa',
    description: 'Führende Gesundheitsmarktforschung für Pharmaunternehmen in der EMEA-Region. Quantitative und qualitative Ärztebefragungen in Deutschland, UK, Frankreich, VAE, Saudi-Arabien und Nordafrika.',
    keywords: 'Gesundheitsmarktforschung, Pharmaforschung Deutschland, Ärztebefragungen, Krankenhausforschung, quantitative Marktforschung, qualitative Pharmaforschung, EMEA Healthcare Research, Market Access Deutschland, HTA-Forschung, G-BA Studien, IQWiG Evidenz, Ärztliche Meinungsbildner, KOL-Interviews, Pharma Insights Europa',
    canonicalPath: '/de',
  },
  fr: {
    title: 'Études de Marché Santé EMEA | Insights Pharma France Europe',
    description: 'Études de marché santé pour l\'industrie pharmaceutique dans la région EMEA. Enquêtes médecins quantitatives et qualitatives en France, UK, Allemagne, EAU, Arabie Saoudite et Afrique du Nord.',
    keywords: 'études de marché santé, recherche pharmaceutique France, enquêtes médecins, études hospitalières, market research EMEA, conseil accès au marché, HAS CEPS',
    canonicalPath: '/fr',
  },
  es: {
    title: 'Investigación de Mercado Sanitario EMEA | Insights Farmacéuticos España Europa',
    description: 'Investigación de mercado sanitario para la industria farmacéutica en la región EMEA. Encuestas cuantitativas y cualitativas a médicos en España, UK, Alemania, EAU, Arabia Saudí y Norte de África.',
    keywords: 'investigación mercado sanitario, investigación farmacéutica España, encuestas médicos, estudios hospitalarios, market research EMEA, consultoría acceso mercado, AEMPS',
    canonicalPath: '/es',
  },
  zh: {
    title: 'EMEA医疗市场研究 | 欧洲中东非洲制药洞察',
    description: '为EMEA地区制药行业提供医疗市场研究。在英国、德国、法国、西班牙、阿联酋、沙特和埃及进行医生定量和定性调研。',
    keywords: '医疗市场研究, 制药研究, 医生调研, 医院研究, EMEA市场研究, 市场准入咨询',
    canonicalPath: '/zh',
  },
  ar: {
    title: 'EMEA Healthcare Market Research | Pharma Insights Europe & MENA',
    description: 'Leading UK healthcare market research firm delivering quantitative & qualitative pharmaceutical insights from physicians and hospitals across Europe, UAE, Saudi Arabia, Egypt, Kuwait & Qatar.',
    keywords: 'healthcare market research, pharmaceutical consulting, competitive intelligence, market access, clinical trials, biotech, life sciences',
    canonicalPath: '/ar',
  },
  pt: {
    title: 'BioNixus — Pesquisa de Mercado em Saúde | Brasil, América Latina, Europa & MENA',
    description: 'Empresa global de pesquisa de mercado em saúde com sede nos EUA e escritórios no Reino Unido e Oriente Médio. Entregamos insights quantitativos e qualitativos farmacêuticos para o Brasil, América Latina, Europa e MENA.',
    keywords: 'pesquisa de mercado saúde Brasil, pesquisa farmacêutica Brasil, ANVISA pesquisa de mercado, acesso ao mercado Brasil, pesquisa de mercado América Latina, BioNixus Brasil, KOL mapeamento Brasil, CONITEC pesquisa',
    canonicalPath: '/pt',
  },
  ru: {
    title: 'BioNixus — Маркетинговые исследования | Россия, Европа, MENA',
    description: 'Глобальная компания по маркетинговым исследованиям в сфере здравоохранения. Количественные и качественные исследования для фармацевтических компаний в России, Европе и MENA.',
    keywords: 'маркетинговые исследования здравоохранение Россия, фармацевтические исследования, исследования рынка фармацевтика, BioNixus Россия',
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

const HREFLANG_LANG_KEYS = ['en', 'de', 'fr', 'es', 'zh', 'ar'] as const;

function hreflangLangCode(key: (typeof HREFLANG_LANG_KEYS)[number]): string {
  return key === 'zh' ? 'zh-CN' : key;
}

export function getHreflangLinks(pathname: string = '/') {
  const base = getBaseUrl();
  const normalized = normalizePath(pathname);
  const group = findRouteGroup(normalized);
  const absoluteHref = (path: string) => `${base}${normalizePath(path)}`;

  if (!group) {
    const fallbackHref = absoluteHref(normalized);
    return [
      { lang: 'x-default', href: fallbackHref },
      { lang: 'en', href: fallbackHref },
    ];
  }

  const routes = localizedRouteGroups[group];
  const enPath = routes.en ?? normalized;
  const enHref = absoluteHref(enPath);

  /** One representative language per distinct URL (first declared key wins). */
  const hrefToLang = new Map<string, (typeof HREFLANG_LANG_KEYS)[number]>();
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
    [/australia/,                           'AU', 'Australia'],
    [/canada/,                              'CA', 'Canada'],
    [/united.kingdom/,                      'GB', 'United Kingdom'],
  ];

  for (const [re, region, placename] of PATTERNS) {
    if (re.test(path)) return { region, placename };
  }
  return null;
}
