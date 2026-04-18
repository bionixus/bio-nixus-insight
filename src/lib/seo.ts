import type { Language } from './i18n';

function getBaseUrl() {
  return 'https://www.bionixus.com';
}

/** Social share image (Facebook, Twitter, LinkedIn): 1200×630, full logo visible. */
export const defaultOgImageUrl = 'https://www.bionixus.com/og-image.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Alt text for the default OG image. */
export const defaultOgImageAlt = 'BioNixus – EMEA Healthcare Market Research';

export const seoByLanguage: Record<Language, {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}> = {
  en: {
    title: 'BioNixus — #1 Healthcare Market Research Company in MENA | Pharma Insights Europe & Middle East',
    description: 'BioNixus is the leading healthcare market research company in the MENA region. Headquartered in the USA with offices in London, UK — delivering quantitative & qualitative pharmaceutical insights from physicians across UAE, Saudi Arabia, Egypt, Kuwait, Qatar, and Europe.',
    keywords: 'healthcare market research, MENA market research, pharmaceutical consulting, competitive intelligence, market access, clinical trials, UAE healthcare research, Saudi Arabia pharma research, biotech, life sciences',
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
};

export const languagePaths: Record<Language, string> = {
  en: '/',
  de: '/de',
  ar: '/ar',
  fr: '/fr',
  es: '/es',
  zh: '/zh',
};

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
  },
  '/contact': {
    en: '/contact',
    de: '/de/contact',
    fr: '/fr/contacts',
    es: '/es/contact',
    zh: '/zh/contact',
    ar: '/ar/contacts',
  },
  '/methodology': {
    en: '/methodology',
    de: '/de/methodology',
    fr: '/fr/methodology',
    es: '/es/methodology',
    zh: '/zh/methodology',
    ar: '/ar/methodology',
  },
  '/blog': {
    en: '/blog',
    de: '/de/blog',
    fr: '/fr/blog',
    es: '/blog',
    zh: '/blog',
    ar: '/blog',
  },
  '/market-access': {
    en: '/services/market-access',
    de: '/services/market-access',
    fr: '/services/market-access',
    es: '/es/market-access',
    zh: '/services/market-access',
    ar: '/services/market-access',
  },
  '/market-research': {
    en: '/market-research',
    de: '/market-research',
    fr: '/market-research',
    es: '/market-research',
    zh: '/market-research',
    ar: '/market-research',
  },
  '/market-research-uae': {
    en: '/market-research-uae',
    de: '/market-research-uae',
    fr: '/market-research-uae',
    es: '/market-research-uae',
    zh: '/market-research-uae',
    ar: '/ar/market-research-uae',
  },
  '/market-research-ksa': {
    en: '/market-research-ksa',
    de: '/market-research-ksa',
    fr: '/market-research-ksa',
    es: '/market-research-ksa',
    zh: '/market-research-ksa',
    ar: '/ar/market-research-ksa',
  },
  '/market-research-saudi': {
    en: '/market-research-saudi',
    de: '/market-research-saudi',
    fr: '/market-research-saudi',
    es: '/market-research-saudi',
    zh: '/market-research-saudi',
    ar: '/ar/market-research-saudi',
  },
  '/market-research-kuwait': {
    en: '/market-research-kuwait',
    de: '/market-research-kuwait',
    fr: '/market-research-kuwait',
    es: '/market-research-kuwait',
    zh: '/market-research-kuwait',
    ar: '/ar/market-research-kuwait',
  },
  '/market-research-egypt': {
    en: '/market-research-egypt',
    de: '/market-research-egypt',
    fr: '/market-research-egypt',
    es: '/market-research-egypt',
    zh: '/market-research-egypt',
    ar: '/ar/market-research-egypt',
  },
  '/conf': {
    en: '/conf',
    ar: '/ar/conf',
  },
  '/insights/top-market-research-companies-egypt-2026': {
    en: '/insights/top-market-research-companies-egypt-2026',
    ar: '/ar/insights/top-market-research-companies-egypt-2026',
  },
  '/market-research-saudi-arabia-pharmaceutical': {
    en: '/market-research-saudi-arabia-pharmaceutical',
    de: '/market-research-saudi-arabia-pharmaceutical',
    fr: '/market-research-saudi-arabia-pharmaceutical',
    es: '/market-research-saudi-arabia-pharmaceutical',
    zh: '/market-research-saudi-arabia-pharmaceutical',
    ar: '/market-research-saudi-arabia-pharmaceutical',
  },
  '/market-research-healthcare': {
    en: '/market-research-healthcare',
    de: '/de/market-research-healthcare',
    fr: '/fr/market-research-healthcare',
    es: '/es/market-research-healthcare',
    zh: '/zh/market-research-healthcare',
    ar: '/ar/market-research-healthcare',
  },
  '/qualitative-market-research': {
    en: '/qualitative-market-research',
    de: '/qualitative-market-research',
    fr: '/qualitative-market-research',
    es: '/qualitative-market-research',
    zh: '/qualitative-market-research',
    ar: '/qualitative-market-research',
  },
  '/pharmacies-saudi-arabia-marketing': {
    en: '/pharmacies-saudi-arabia-marketing',
    de: '/pharmacies-saudi-arabia-marketing',
    fr: '/pharmacies-saudi-arabia-marketing',
    es: '/pharmacies-saudi-arabia-marketing',
    zh: '/pharmacies-saudi-arabia-marketing',
    ar: '/pharmacies-saudi-arabia-marketing',
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

export function getCanonicalPath(pathname: string = '/') {
  const normalized = normalizePath(pathname);
  const group = findRouteGroup(normalized);
  if (!group) return normalized;
  const routes = localizedRouteGroups[group];
  return Object.values(routes).includes(normalized) ? normalized : routes.en;
}

export function getHreflangLinks(pathname: string = '/') {
  const base = getBaseUrl();
  const normalized = normalizePath(pathname);
  const group = findRouteGroup(normalized);
  const canonicalHrefForPath = (path: string) => `${base}${getCanonicalPath(path)}`;
  if (!group) {
    const fallbackHref = canonicalHrefForPath(normalized);
    return [
      { lang: 'x-default', href: fallbackHref },
      { lang: 'en', href: fallbackHref },
    ];
  }

  const routes = localizedRouteGroups[group];
  const routeFor = (lang: 'en' | 'de' | 'fr' | 'es' | 'zh' | 'ar') => routes[lang] || routes.en;
  const rawLinks = [
    { lang: 'x-default', href: canonicalHrefForPath(routeFor('en')) },
    { lang: 'en', href: canonicalHrefForPath(routeFor('en')) },
    { lang: 'de', href: canonicalHrefForPath(routeFor('de')) },
    { lang: 'fr', href: canonicalHrefForPath(routeFor('fr')) },
    { lang: 'es', href: canonicalHrefForPath(routeFor('es')) },
    { lang: 'zh-CN', href: canonicalHrefForPath(routeFor('zh')) },
    { lang: 'ar', href: canonicalHrefForPath(routeFor('ar')) },
  ];
  // Avoid duplicate href targets being assigned to multiple languages.
  const seenHrefs = new Set<string>();
  return rawLinks.filter(({ href }) => {
    if (seenHrefs.has(href)) return false;
    seenHrefs.add(href);
    return true;
  });
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
