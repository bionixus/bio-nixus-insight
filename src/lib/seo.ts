import type { Language } from './i18n';

function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin;
  return 'https://bionixus.com';
}

/** Main preview and social share image — BioNixus logo (used for og:image and twitter:image). */
export const defaultOgImageUrl = 'https://bionixus.com/bionixus-logo.png';

/** Alt text for the default OG image (BioNixus logo). */
export const defaultOgImageAlt = 'BioNixus – EMEA Healthcare Market Research';

export const seoByLanguage: Record<Language, {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}> = {
  en: {
    title: 'Healthcare Market Research Services | UK & European Pharmaceutical Insights',
    description: 'Comprehensive healthcare market research for pharmaceutical companies. Quantitative and qualitative physician surveys across UK, Europe & MENA.',
    keywords: 'healthcare market research, pharmaceutical consulting, competitive intelligence, market access, clinical trials, biotech, life sciences',
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

export function getHreflangLinks() {
  const base = getBaseUrl();
  return [
    { lang: 'x-default', href: `${base}/` },
    { lang: 'en', href: `${base}/` },
    { lang: 'de', href: `${base}/de` },
    { lang: 'fr', href: `${base}/fr` },
    { lang: 'es', href: `${base}/es` },
    { lang: 'zh-CN', href: `${base}/zh` },
    { lang: 'ar', href: `${base}/ar` },
  ];
}

export function getCanonicalUrl(path: string = '/') {
  return `${getBaseUrl()}${path}`;
}
