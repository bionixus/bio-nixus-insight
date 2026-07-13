import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';
import { canonicalRedirectTarget, isSsrNotFoundPage } from './seo-noise-query.mjs';
import { BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH, BLOG_LEGACY_FULL_PATH_REDIRECTS } from './blog-legacy-redirects.mjs';
import { getBlogMetaDescriptionOverride } from './blog-crawler-stubs.mjs';
import { formatMetaDescriptionInRange } from './src/server/seo-meta.js';
import { normalizeOgCardPath, renderOgCardSvg } from './lib/og-card-svg.mjs';
import { buildLcpPreloadTag, getClientAssetHints } from './lib/ssr-client-asset-hints.mjs';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from './lib/country-industry-redirects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT || 5173);

function inferHtmlLang(pathname, initialData) {
  if (pathname === '/de' || pathname.startsWith('/de/')) return { lang: 'de', dir: 'ltr' };
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return { lang: 'fr', dir: 'ltr' };
  if (pathname === '/es' || pathname.startsWith('/es/')) return { lang: 'es', dir: 'ltr' };
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return { lang: 'ar', dir: 'rtl' };
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return { lang: 'zh-CN', dir: 'ltr' };
  if (initialData?.pageType === 'blog-post' && isArabicBlogContent(initialData.blogPost, initialData.blogSlug)) {
    return { lang: 'ar', dir: 'rtl' };
  }
  return { lang: 'en', dir: 'ltr' };
}

/** Latin-slug Arabic articles published under `/blog/` (transliterated URLs). */
const LATIN_SLUG_ARABIC_BLOG_POSTS = new Set([
  'souk-adwiya-saudiya-dalil-shamel-rueya-2030-2026',
]);

const ARABIC_SCRIPT_RE = /[\u0600-\u06FF]/;

function isArabicBlogContent(post, slug) {
  if (post?.language === 'ar') return true;
  if (slug && LATIN_SLUG_ARABIC_BLOG_POSTS.has(slug)) return true;
  if (ARABIC_SCRIPT_RE.test(post?.slug ?? slug ?? '')) return true;
  if (ARABIC_SCRIPT_RE.test(post?.title ?? '')) return true;
  return false;
}

function applyHtmlLang(template, pathname, initialData) {
  const { lang, dir } = inferHtmlLang(pathname || '/', initialData);
  return template.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${dir}">`);
}

const TITLE_UPPERCASE_TOKENS = new Set([
  'uae', 'ksa', 'gcc', 'mena', 'emea', 'heor', 'rwe', 'kol', 'hta', 'nice',
  'ai', 'amnog', 'sfda', 'hcv', 'moh', 'mohap', 'kfda', 'fda', 'cns', 'usa',
  'uk', 'eu', 'us', 'nhs', 'rwd', 'pico', 'icer', 'qaly',
]);

function titleCaseFromSlug(value) {
  return String(value || '')
    .split('-')
    .filter(Boolean)
    .map((part) =>
      TITLE_UPPERCASE_TOKENS.has(part.toLowerCase())
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(' ');
}

const ARABIC_BLOG_TITLE_OVERRIDES = {
  'quantitative-market-research-and-market-access':
    'أبحاث السوق الكمية وأثر الوصول إلى السوق | BioNixus',
};

/** `/blog/` article with Arabic slug (decoded path segment). Must match BlogPost.tsx SSR + Helmet. */
const GCC_MEAST_PHARMA_HEALTH_AR_SLUG =
  'أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي';
const GCC_MEAST_PHARMA_HEALTH_AR_BLOG_EN_TITLE =
  'GCC & MENA Pharma Market Research Outlook 2026 | BioNixus';
const GCC_MEAST_PHARMA_HEALTH_AR_BLOG_AR_TITLE =
  'أبحاث السوق الصيدلانية الشرق الأوسط والخليج 2026 | BioNixus';
const GCC_MEAST_PHARMA_HEALTH_AR_META_DESCRIPTION =
  'تحليل معمق لسوق الرعاية الصحية في دول الخليج العربي لعام 2026. اكتشف فرص التوطين، التحول الرقمي، واستراتيجيات النجاح في السعودية والإمارات.';

/** Saudi pharma market outlook; Arabic slug under `/blog/` (decoded segment). Matches BlogPost.tsx. */
const SAUDI_PHARMA_MARKET_2026_AR_SLUG = 'سوق-الدواء-السعودي-2026';
const SAUDI_PHARMA_MARKET_2026_AR_BLOG_EN_TITLE =
  'Saudi Arabia Pharmaceutical Market Outlook 2026 | BioNixus';
const SAUDI_PHARMA_MARKET_2026_AR_BLOG_AR_TITLE =
  'سوق الدواء السعودي 2026: رؤى واتجاهات | BioNixus';
const SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION =
  'سوق الدواء السعودي 2026: توطين التصنيع، نمو الأدوية الحيوية، توسع التأمين ومشتريات NUPCO—تحليل BioNixus للوصول والتجاري في المملكة';

const SKYRIZI_ROOT_SLUG = 'skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement';
const SKYRIZI_ROOT_TITLE = 'Skyrizi Tops July Pharma Rankings: Omnichannel Lessons | BioNixus';
const SKYRIZI_ROOT_DESCRIPTION =
  'Skyrizi led July pharma TV ad spend and brand-impression rankings. What AbbVie immunology leadership means for omnichannel engagement, HCP digital, and promotional ROI.';

const GENERIC_DEFAULT_TITLES = new Set([
  'BioNixus | Healthcare & Pharmaceutical Market Research',
  'BioNixus | Global Pharmaceutical & Healthcare Market Research',
  'BioNixus',
  'Healthcare & Pharmaceutical Market Research | BioNixus',
]);

/** GSC CTR overrides — keep in sync with BlogPost.tsx EGYPT/KUWAIT constants */
const EGYPT_HEALTHCARE_2026_SLUG = 'healthcare-overview-egypt-market-2026';
const EGYPT_HEALTHCARE_2026_TITLE = 'Cairo Hospitals Healthcare 2023–2026 | BioNixus';
const EGYPT_HEALTHCARE_2026_META =
  'Cairo hospitals healthcare 2023–2026: Kasr Al-Ainy, Cleopatra, Saudi German Cairo, EDA pharma access, UHI payer trends — BioNixus Egypt market research.';
const KUWAIT_HEALTHCARE_2026_SLUG = 'healthcare-overview-kuwait-market-2026';
const KUWAIT_HEALTHCARE_2026_TITLE = 'April Healthcare Kuwait | Healthcare 2026 | BioNixus';
const KUWAIT_HEALTHCARE_2026_META =
  'April healthcare Kuwait & Kuwait healthcare 2026: MOH hospitals, pharma distributors, tender policy, and physician insights from BioNixus market research.';

function buildFallbackTitle(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');
  const localeRoots = new Set(['/', '/de', '/fr', '/es', '/ar', '/zh']);
  if (path === '/') return 'Healthcare & Pharmaceutical Market Research | BioNixus';
  if (path === '/zh') return 'EMEA Healthcare Market Research (Chinese) | BioNixus';
  if (localeRoots.has(path)) return 'BioNixus | Healthcare & Pharmaceutical Market Research';

  if (path === '/market-research-home') return 'Market research data insights | BioNixus Consultancy';

  if (path === '/contact') return 'Contact BioNixus Healthcare Research Team | BioNixus';
  if (path === '/de/contact') return 'Kontakt BioNixus | Gesundheits- & Pharma-Marktforschung';
  if (path === '/fr/contacts') return 'Contacter BioNixus | Études de marché santé & pharma';
  if (path === '/es/contact') return 'Contacto BioNixus | Investigación de Mercado Sanitaria';
  if (path === '/zh/contact') return '联系 BioNixus | 医疗与制药市场研究咨询';
  if (path === '/ar/contacts') return 'تواصل مع BioNixus | أبحاث السوق الصحي والدوائي';

  if (
    path === '/methodology'
    || path === '/de/methodology'
    || path === '/fr/methodology'
    || path === '/es/methodology'
    || path === '/zh/methodology'
    || path === '/ar/methodology'
  ) {
    return 'Healthcare Research Methodology & Process | BioNixus';
  }

  if (path === '/sitemap') return 'Sitemap & Content Directory | BioNixus';
  if (path === '/privacy') return 'Privacy Policy & Terms for BioNixus Services';
  if (path === '/strategic-portfolio') return 'BioNixus Strategic Portfolio | Market Research & Consulting';
  if (path === '/ar/strategic-portfolio') return 'محفظة BioNixus الاستراتيجية | أبحاث السوق والاستشارات';
  if (path === '/insights/top-market-research-companies-egypt-2026') return '5 Best Market Research Companies in Egypt (2026) | Ranked Buyer Guide | BioNixus';
  if (path === '/ar/insights/top-market-research-companies-egypt-2026') return '5 أفضل شركات أبحاث السوق في مصر (2026) | دليل المشترين | BioNixus';
  if (path === '/insights/top-market-research-companies-brazil-2026') return '5 Best Market Research Companies in Brazil (2026) | LATAM Agency Rankings | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-brazil-2026') return '5 Best Healthcare Market Research Firms in Brazil (2026) | ANVISA Specialists | BioNixus';
  if (path === '/insights/top-market-research-companies-argentina-2026') return '5 Best Market Research Companies in Argentina (2026) | LATAM Agency Rankings | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-argentina-2026') return '5 Best Healthcare Market Research Firms in Argentina (2026) | ANMAT Specialists | BioNixus';
  if (path === '/pt/insights/top-market-research-companies-brasil-2026') return '5 Melhores Empresas de Pesquisa de Mercado no Brasil (2026) | Rankings | BioNixus';
  if (path === '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026') return '5 Melhores Empresas de Pesquisa de Mercado em Saúde no Brasil (2026) | ANVISA | BioNixus';
  if (path === '/es/insights/top-empresas-investigacion-mercado-argentina-2026') return '5 Mejores Empresas de Investigación de Mercado en Argentina (2026) | Rankings | BioNixus';
  if (path === '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026') return '5 Mejores Empresas de Investigación de Mercado en Salud en Argentina (2026) | ANMAT | BioNixus';
  if (path === '/insights/top-market-research-companies-saudi-arabia-2026') return '6 Best Market Research Companies in Saudi Arabia (2026) | KSA Agency Rankings | BioNixus';
  if (path === '/insights/top-market-research-companies-uae-2026') return '6 Best Market Research Companies in the UAE (2026) | Agency Rankings | BioNixus';
  if (path === '/insights/top-market-research-companies-dubai-2026') return '6 Best Market Research Companies in Dubai (2026) | UAE Agency Rankings | BioNixus';
  if (path === '/insights/top-market-research-companies-abu-dhabi-2026') return '6 Best Market Research Companies in Abu Dhabi (2026) | UAE Agency Rankings | BioNixus';
  if (path === '/insights/top-market-research-companies-riyadh-2026') return '6 Best Market Research Companies in Riyadh (2026) | KSA Agency Rankings | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-saudi-arabia-2026') return '5 Best Healthcare Market Research Firms in Saudi Arabia (2026) | SFDA Specialists | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-dubai-2026') return '5 Best Healthcare Market Research Firms in Dubai (2026) | DHA Specialists | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-abu-dhabi-2026') return '5 Best Healthcare Market Research Firms in Abu Dhabi (2026) | DoH Specialists | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-kuwait-2026') return '5 Best Healthcare Market Research Firms in Kuwait (2026) | MOH Specialists | BioNixus';
  if (path === '/insights/top-healthcare-market-research-companies-riyadh-2026') return '5 Best Healthcare Market Research Firms in Riyadh (2026) | SFDA Specialists | BioNixus';

  const matrixListicle = path.match(/^\/insights\/top-([\w-]+)-market-research-companies-(saudi-arabia|uae|egypt)-2026$/);
  if (matrixListicle) {
    const [, industrySlug, countrySlug] = matrixListicle;
    const countryLabel = countrySlug === 'saudi-arabia' ? 'Saudi Arabia' : countrySlug === 'uae' ? 'UAE' : 'Egypt';
    const industryLabel = titleCaseFromSlug(industrySlug);
    return `5 Best ${industryLabel} Market Research Firms in ${countryLabel} (2026 Rankings) | BioNixus`;
  }

  const matrixBofu = path.match(/^\/(saudi-arabia|uae|egypt)-([\w-]+)-market-research$/);
  if (matrixBofu) {
    const [, countrySlug, industrySlug] = matrixBofu;
    const countryLabel = countrySlug === 'saudi-arabia' ? 'Saudi Arabia' : countrySlug === 'uae' ? 'UAE' : 'Egypt';
    const industryLabel = titleCaseFromSlug(industrySlug);
    const healthcareAdjacent = new Set([
      'medtech', 'healthcare', 'biotech', 'consumer-health',
    ]);
    const suffix = healthcareAdjacent.has(industrySlug) ? 'Context' : 'Fieldwork & Insights';
    const regulator = countrySlug === 'saudi-arabia' ? 'SFDA' : countrySlug === 'uae' ? 'MOHAP' : 'EDA';
    const titleSuffix = healthcareAdjacent.has(industrySlug) ? `${regulator} ${suffix}` : suffix;
    return `${industryLabel} Market Research Company in ${countryLabel} (2026) | ${titleSuffix} | BioNixus`;
  }

  if (path === '/healthcare-market-research') return 'Healthcare Market Research by Country | US HQ · Global Coverage | BioNixus';
  if (path === '/fr/healthcare-market-research') return 'Recherche de marché santé et pharma | Europe et MENA | BioNixus';
  if (path === '/fr/healthcare-market-research/france') return 'Études de marché pharmaceutique France | HAS et ANSM | BioNixus';
  if (path === `/${SKYRIZI_ROOT_SLUG}`) return SKYRIZI_ROOT_TITLE;
  if (path === '/global-websites/united-arab-emirates') return 'UAE Pharmaceutical Go-to-Market Blueprint | Dubai DHA & Abu Dhabi DOH | BioNixus';
  if (path === '/global-websites/saudi-arabia') return 'Saudi Arabia Pharma Market Entry Blueprint | SFDA, NUPCO & Vision 2030 | BioNixus';
  if (path === '/healthcare-market-research/united-arab-emirates') return 'United Arab Emirates Healthcare Market Research | MOHAP, DHA & DOH | BioNixus';
  if (path === '/case-studies') return 'Healthcare & Pharmaceutical Case Studies | BioNixus';
  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/').pop() || 'case-study';
    return `${titleCaseFromSlug(slug)} | BioNixus Case Study`;
  }

  if (path === '/blog') return 'Healthcare & Pharmaceutical Blog Insights | BioNixus';
  if (path === '/ar/blog') return 'المدونة العربية: أبحاث السوق الصحي والدوائي | BioNixus';
  if (path.startsWith('/ar/blog/')) {
    let slug = path.split('/').pop() || 'insight';
    try {
      slug = decodeURIComponent(slug);
    } catch {
      /* malformed percent-encoding — keep raw segment */
    }
    if (ARABIC_BLOG_TITLE_OVERRIDES[slug]) return ARABIC_BLOG_TITLE_OVERRIDES[slug];
    if (slug === SAUDI_PHARMA_MARKET_2026_AR_SLUG) {
      return SAUDI_PHARMA_MARKET_2026_AR_BLOG_AR_TITLE;
    }
    if (slug === GCC_MEAST_PHARMA_HEALTH_AR_SLUG) {
      return GCC_MEAST_PHARMA_HEALTH_AR_BLOG_AR_TITLE;
    }
    return `${titleCaseFromSlug(slug)} | مدونة BioNixus`;
  }
  if (path.startsWith('/blog/')) {
    let slug = path.split('/').pop() || 'insight';
    try {
      slug = decodeURIComponent(slug);
    } catch {
      /* malformed percent-encoding — use raw segment */
    }
    if (slug === SAUDI_PHARMA_MARKET_2026_AR_SLUG) {
      return SAUDI_PHARMA_MARKET_2026_AR_BLOG_EN_TITLE;
    }
    if (slug === GCC_MEAST_PHARMA_HEALTH_AR_SLUG) {
      return GCC_MEAST_PHARMA_HEALTH_AR_BLOG_EN_TITLE;
    }
    if (slug === 'quantitative-market-research-and-market-access') {
      return 'Quantitative Healthcare Market Research & Market Access 2026 | BioNixus';
    }
    if (slug === 'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait') {
      return 'GCC Pharma Comparison UAE vs Saudi vs Kuwait 2026 | BioNixus';
    }
    if (slug === SKYRIZI_ROOT_SLUG) {
      return SKYRIZI_ROOT_TITLE;
    }
    if (slug === EGYPT_HEALTHCARE_2026_SLUG) {
      return EGYPT_HEALTHCARE_2026_TITLE;
    }
    if (slug === KUWAIT_HEALTHCARE_2026_SLUG) {
      return KUWAIT_HEALTHCARE_2026_TITLE;
    }
    return `${titleCaseFromSlug(slug)} | BioNixus Blog`;
  }

  if (path.startsWith('/healthcare-market-research/')) {
    const slug = path.split('/').pop() || 'market';
    return `Healthcare Market Research in ${titleCaseFromSlug(slug)} | BioNixus`;
  }

  if (path === '/pharmacies-saudi-arabia-marketing') {
    return 'Pharmacy Market Research Saudi Arabia: Boost Retail Sales 40% | BioNixus';
  }

  if (path === '/real-world-evidence') {
    return 'Real World Evidence (RWE) for Pharma | BioNixus EMEA & MENA';
  }

  if (path === '/bionixus-vs-iqvia-mena') {
    return 'BioNixus vs IQVIA MENA Research (2026) | BioNixus';
  }

  if (path === '/biosimilar-market-entry-saudi-arabia') {
    return 'Biosimilar Entry Saudi Arabia (2026) | BioNixus';
  }

  const segment = path.split('/').filter(Boolean).pop() || 'home';
  return `${titleCaseFromSlug(segment)} | BioNixus`;
}

const KNOWN_TITLE_SUFFIXES = [
  '| BioNixus Case Studies',
  '| BioNixus Case Study',
  '| BioNixus Blog',
  '| مدونة BioNixus',
  '| BioNixus Consultancy',
  '| BioNixus',
];

/**
 * Decode the common HTML entities so length measurement counts what users / Google
 * actually see. Without this, "Cairo Hospitals &amp; Egypt..." is treated as 61 chars
 * and the 60-char budget clips a real character off the end of the title.
 */
function decodeTitleEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function normalizeTitleLength(title, max = 60) {
  const clean = decodeTitleEntities(String(title || '').replace(/\s+/g, ' ').trim());
  if (!clean) return 'BioNixus';
  // Hebrew / Arabic scripts: truncate by UTF-16 code units mangles SSR titles vs visible text.
  if (/[\u0590-\u08FF]/.test(clean)) return clean;
  if (clean.length <= max) return clean;

  for (const suffix of KNOWN_TITLE_SUFFIXES) {
    if (!clean.endsWith(suffix)) continue;
    const prefix = clean.slice(0, clean.length - suffix.length).trim();
    const prefixMax = Math.max(12, max - suffix.length - 1);
    const truncated = prefix
      .slice(0, prefixMax)
      .trim()
      .replace(/[|,;:\-–—\s]+$/, '');
    return `${truncated} ${suffix}`;
  }

  return clean
    .slice(0, Math.max(0, max - 1))
    .trim()
    .replace(/[|,;:\-–—\s]+$/, '');
}

function buildFallbackDescription(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');

  if (path === '/' || path === '/de' || path === '/fr' || path === '/es' || path === '/ar' || path === '/zh') {
    return 'Healthcare and pharmaceutical market research across MENA, GCC, UK, and Europe with quantitative and qualitative insights by BioNixus.';
  }
  if (path === '/market-research-home') {
    return 'Stay updated with the latest data insights and market research trends in the Middle East, focusing on Saudi Arabia and UAE, with proven expertise.';
  }
  if (path === '/terms') {
    return 'BioNixus terms of service for our website and healthcare market research: acceptable use, confidentiality, and client policies.';
  }
  if (path === '/contact') {
    return 'Request a BioNixus healthcare and pharmaceutical market research proposal: Saudi Arabia, GCC, UK, and Europe coverage with quantitative, qualitative, and market access programs.';
  }
  if (path === '/de/contact') {
    return 'Kontakt zu BioNixus: Markt- und Gesundheitsforschung für Pharma in DACH, UK und MENA—Angebote, Feldforschung und evidenzbasierte Strategieberatung.';
  }
  if (path === '/fr/contacts') {
    return 'Contactez BioNixus pour études de marché santé et pharma: couverture Europe, UK et MENA, méthodes quantitatives et qualitatives, et intelligence accès marché.';
  }
  if (path === '/ar/contacts') {
    return 'تواصل مع BioNixus لطلبات أبحاث السوق الصحي والدوائي في السعودية والخليج والمملكة المتحدة وأوروبا—برامج كمية ونوعية ودعم استراتيجي للوصول إلى السوق.';
  }
  if (path === '/es/contact') {
    return 'Contacto BioNixus: investigación de mercado farmacéutico y sanitario en España, Europa y MENA—propuestas, campo cualitativo y cuantitativo, y acceso al mercado.';
  }
  if (path === '/zh/contact') {
    return '联系 BioNixus：面向中国团队的医疗与制药市场研究咨询，覆盖欧洲、中东与海湾地区，提供定量定性研究与市场准入情报支持。';
  }
  if (path === '/strategic-portfolio') {
    return 'BioNixus strategic portfolio: healthcare, pharmaceutical, and consumer market research capabilities across EMEA and MENA.';
  }
  if (path === '/ar/strategic-portfolio') {
    return 'محفظة BioNixus الاستراتيجية: قدرات أبحاث السوق الصحي والدوائي والمستهلك عبر أوروبا والشرق الأوسط وأفريقيا.';
  }
  if (path === '/healthcare-market-research') {
    return 'US-headquartered healthcare market research from BioNixus — physician, payer, and hospital evidence across 20+ countries: USA, Canada, Brazil, UK, Europe, GCC, MENA, and Asia-Pacific with local fieldwork.';
  }
  if (path === '/fr/healthcare-market-research') {
    return 'Études de marché pharmaceutique et santé en Europe et au Moyen-Orient : preuves médecins, payeurs et hôpitaux pour lancement, accès au marché et croissance — BioNixus.';
  }
  if (path === '/fr/healthcare-market-research/france') {
    return 'Études de marché pharmaceutique France : panels médecins, payeurs, préparation HAS/ASMR et modules CEESP pour équipes internationales — BioNixus.';
  }
  if (path === `/${SKYRIZI_ROOT_SLUG}`) {
    return SKYRIZI_ROOT_DESCRIPTION;
  }
  if (path === '/global-websites/united-arab-emirates') {
    return 'UAE pharmaceutical go-to-market blueprint: DHA, DOH, and MOHAP launch sequencing, payer mapping, and commercialization intelligence for Dubai and Abu Dhabi.';
  }
  if (path === '/global-websites/saudi-arabia') {
    return 'Saudi Arabia pharma market entry blueprint with SFDA, NUPCO, and Vision 2030 context — registration sequencing, procurement logic, and KSA commercialization planning.';
  }
  if (path === '/healthcare-market-research/united-arab-emirates') {
    return 'United Arab Emirates healthcare market research across MOHAP, DHA, and DOH jurisdictions — physician surveys, payer evidence, and hospital fieldwork for UAE-wide pharma programs.';
  }
  if (path === '/case-studies') {
    return 'Explore BioNixus healthcare and pharmaceutical case studies across Europe, the Middle East, and Africa.';
  }
  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/').pop() || 'case-study';
    return `${titleCaseFromSlug(slug)} case study from BioNixus with actionable healthcare and pharmaceutical market research outcomes.`;
  }
  if (path === '/blog') {
    return 'Read BioNixus healthcare and pharmaceutical market insights on market access, physician behavior, and regional growth strategy.';
  }
  if (path.startsWith('/blog/')) {
    let slug = path.split('/').pop() || 'insight';
    try {
      slug = decodeURIComponent(slug);
    } catch {
      /* keep raw segment */
    }
    const blogMetaOverride = getBlogMetaDescriptionOverride(slug);
    if (blogMetaOverride) return blogMetaOverride;
    if (slug === SAUDI_PHARMA_MARKET_2026_AR_SLUG) {
      return SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION;
    }
    if (slug === GCC_MEAST_PHARMA_HEALTH_AR_SLUG) {
      return GCC_MEAST_PHARMA_HEALTH_AR_META_DESCRIPTION;
    }
    if (slug === 'quantitative-market-research-and-market-access') {
      return 'Quantitative healthcare market research guide for pharma market access: KPI frameworks, payer evidence, and links to methodology at BioNixus.';
    }
    if (slug === 'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait') {
      return 'UAE vs Saudi Arabia vs Kuwait pharmaceutical market comparison: tenders, SFDA-scale regulation in KSA, UAE emirate payers, Kuwait access concentration—BioNixus GCC.';
    }
    if (slug === SKYRIZI_ROOT_SLUG) {
      return SKYRIZI_ROOT_DESCRIPTION;
    }
    if (slug === EGYPT_HEALTHCARE_2026_SLUG) {
      return EGYPT_HEALTHCARE_2026_META;
    }
    if (slug === KUWAIT_HEALTHCARE_2026_SLUG) {
      return KUWAIT_HEALTHCARE_2026_META;
    }
    return `${titleCaseFromSlug(slug)} insight article from BioNixus covering healthcare and pharmaceutical market strategy.`;
  }
  if (path.startsWith('/ar/blog/')) {
    let slug = path.split('/').pop() || 'insight';
    try {
      slug = decodeURIComponent(slug);
    } catch {
      /* keep raw segment */
    }
    if (slug === SAUDI_PHARMA_MARKET_2026_AR_SLUG) {
      return SAUDI_PHARMA_MARKET_2026_AR_META_DESCRIPTION;
    }
    if (slug === 'quantitative-market-research-and-market-access') {
      return 'ملخص عربي: أبحاث السوق الكمية وتأثيرها على الوصول إلى السوق للدواء—رؤى للشركات في الشرق الأوسط ودول الخليج من BioNixus.';
    }
    return `مقال عربي من BioNixus حول ${titleCaseFromSlug(slug)}: أبحاث السوق الصحي والدوائي وتوجيهات استراتيجية.`;
  }
  if (path.startsWith('/healthcare-market-research/')) {
    const slug = path.split('/').pop() || 'market';
    return `Pharmaceutical market research in ${titleCaseFromSlug(slug)} with localized stakeholder insight and execution-focused strategy support from BioNixus.`;
  }
  if (path === '/real-world-evidence') {
    return 'BioNixus delivers real world evidence (RWE) for pharma: principal-led design, EMEA and MENA field execution, HTA-ready narratives, and GCC programs—decision-ready outputs for medical, access, and commercial teams.';
  }
  if (path === '/gfk-alternative-egypt') {
    return 'GfK joined NIQ in 2023. BioNixus is a Cairo partner for pharma, healthcare, and consumer research across Egypt and the GCC.';
  }
  if (path === '/kantar-health-alternative-gcc') {
    return 'Kantar Health has no GCC healthcare desk. BioNixus pharma research across KSA, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt.';
  }
  if (path === '/pharmaceutical-market-research-dubai') {
    return 'Pharma market research in Dubai: physician surveys, hospital data, KOL mapping, and UAE payer-aware market access—BioNixus.';
  }
  if (path === '/iqvia-alternative') {
    return 'BioNixus IQVIA alternative: hospital sales data, consumption analytics, and flexible global studies for pharmaceutical teams.';
  }
  if (path === '/bionixus-vs-iqvia-mena') {
    return 'Compare BioNixus and IQVIA for MENA healthcare research, including hospital data, analytics, and market access support tailored for Saudi Arabia and the GCC.';
  }
  if (path === '/physician-survey-saudi-arabia') {
    return 'Saudi physician surveys for pharma: Arabic fieldwork, verified HCP samples, SFDA-aware design, and consumption data from BioNixus.';
  }
  if (path === '/sfda-market-access-strategy-saudi-arabia') {
    return 'SFDA market access in Saudi Arabia 2026: NUPCO formulary, HTA evidence, utilization and payer research for pharma teams—BioNixus.';
  }
  if (path === '/kol-mapping-saudi-arabia-oncology') {
    return 'Oncology KOL mapping in Saudi Arabia: physician networks, influence scoring, utilization context, and GCC engagement—BioNixus.';
  }
  if (path === '/biosimilar-market-entry-saudi-arabia') {
    return 'Biosimilar entry in Saudi Arabia 2026: SFDA pathways, NUPCO dynamics, utilization research, and physician adoption—BioNixus.';
  }

  const segment = path.split('/').filter(Boolean).pop() || 'home';
  return `${titleCaseFromSlug(segment)} page from BioNixus with healthcare and pharmaceutical market research insights and services context.`;
}

function normalizeDescriptionLength(description) {
  return formatMetaDescriptionInRange(description);
}

function shouldForceLocaleFallback(pathname, chosen) {
  if (!chosen) return false;
  // For Arabic-prefixed pages, if the rendered title contains no Arabic
  // characters at all, the React component is showing English content and we
  // must force the Arabic fallback so the AR URL doesn't emit the same title
  // as its EN counterpart (a duplicate-title audit hit).
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    const hasArabic = /[\u0590-\u08FF]/.test(chosen);
    if (!hasArabic) return true;
  }
  return false;
}

function extractDocumentTitles(html) {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) return [];
  return Array.from(headMatch[1].matchAll(/<title[^>]*>([\s\S]*?)<\/title>/ig))
    .map((m) => (m[1] || '').trim())
    .filter(Boolean);
}

function ensureTitleTag(html, pathname) {
  const fallbackTitle = normalizeTitleLength(buildFallbackTitle(pathname));
  const headTitles = extractDocumentTitles(html);
  const chosen = headTitles.at(-1) ?? '';
  const normalized = normalizeTitleLength(chosen || fallbackTitle);
  // If the rendered title is a generic site default (the index.html fallback
  // that React-Helmet didn't override at SSR time, typically because page
  // data is fetched async from Sanity), replace it with the path-specific
  // fallback so each URL ships a unique <title>.
  const isGeneric = chosen
    ? GENERIC_DEFAULT_TITLES.has(chosen) || /^BioNixus \| Global Pharmaceutical/i.test(chosen)
    : false;
  const forceLocale = shouldForceLocaleFallback(pathname, chosen);
  const strengthened =
    isGeneric || forceLocale || normalized.length < 30 ? fallbackTitle : normalized;

  const withoutTitles = html.replace(/<title[^>]*>[\s\S]*?<\/title>/ig, '');
  return withoutTitles.replace(
    /<meta name="viewport"[^>]*>/i,
    `$&\n<title>${strengthened}</title>`,
  );
}

function shouldForceArabicMetaDescription(pathname, chosen) {
  if (!chosen) return false;
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    return !/[\u0590-\u08FF]/.test(chosen);
  }
  return false;
}

function escapeHtmlAttribute(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function ensureMetaDescriptionTag(html, pathname) {
  const fallbackDescription = normalizeDescriptionLength(buildFallbackDescription(pathname));
  const matches = Array.from(html.matchAll(/<meta[^>]+name=(["'])description\1[^>]*>/ig));
  const chosen = matches
    .map((m) => {
      const tag = m[0];
      const contentMatch = tag.match(/content=(["'])([\s\S]*?)\1/i);
      return (contentMatch?.[2] || '').trim();
    })
    .filter(Boolean)
    .at(-1);
  const forceArDescription = shouldForceArabicMetaDescription(pathname, chosen);
  const base = forceArDescription ? fallbackDescription : (chosen || fallbackDescription);
  const normalizedContent = normalizeDescriptionLength(base);
  const safeContent = escapeHtmlAttribute(normalizedContent);

  const withoutDescriptions = html.replace(/<meta[^>]+name=(["'])description\1[^>]*>\s*/ig, '');
  return withoutDescriptions.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `$&\n<meta name="description" content="${safeContent}" />`,
  );
}

/**
 * When Helmet omits rel=canonical on SSR, inject exactly one tag for the request path.
 * If a canonical link is already present, leave it unchanged (BlogPost / routes set preferred URLs).
 */
function ensureCanonicalTag(html, pathname) {
  if (/<link\b[^>]*\brel\s*=\s*["']canonical["']/i.test(html)) return html;
  const clean = String(pathname || '/').split('?')[0].split('#')[0] || '/';
  const trimmed = clean === '/' ? '/' : clean.replace(/\/+$/, '');
  const absolute =
    trimmed === '/' ? 'https://www.bionixus.com/' : `https://www.bionixus.com${trimmed}`;
  const escaped = escapeHtmlAttribute(absolute);
  const linkTag = `<link rel="canonical" href="${escaped}" />`;
  const headClose = /<\/head>/i;
  if (headClose.test(html)) {
    return html.replace(headClose, `  ${linkTag}\n</head>`);
  }
  return html.replace(/<meta name="viewport"[^>]*>/i, `$&\n${linkTag}`);
}

/**
 * JSON.stringify rejects BigInt and other exotic values → uncaught SSR 500 during HTML injection.
 */
function serializeInitialDataForInlineScript(initialData) {
  const replacer = (_key, value) => (typeof value === 'bigint' ? value.toString() : value);
  try {
    return JSON.stringify(initialData ?? {}, replacer).replace(/</g, '\\u003c');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('SSR: __INITIAL_DATA__ serialization failed:', error);
    return JSON.stringify({ pageType: 'generic', hydrationPayload: 'unavailable' }).replace(/</g, '\\u003c');
  }
}

async function startServer() {
  // eslint-disable-next-line no-console
  console.log(`Starting ${isProduction ? 'production' : 'development'} SSR server on port ${port}…`);
  const app = express();
  app.use(compression());
  const CANONICAL_HOST = 'www.bionixus.com';
  const REDIRECTS = {
    '/healthcare-market-research-saudi-arabia': '/healthcare-market-research/saudi-arabia',
    '/healthcare-market-research-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-in-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-kuwait': '/healthcare-market-research/kuwait',
    '/healthcare-market-research-uk': '/healthcare-market-research/uk',
    '/healthcare-market-research/united-kingdom': '/healthcare-market-research/uk',
    '/healthcare-market-research-europe': '/healthcare-market-research/europe',
    '/insights/top-market-research-companies-ksa-2026': '/insights/top-market-research-companies-saudi-arabia-2026',
    '/insights/top-market-research-companies-abudhabi-2026': '/insights/top-market-research-companies-abu-dhabi-2026',
    '/insights/top-obesity-market-research-companies-2026':
      '/insights/best-obesity-weight-management-market-research-firms-2026',
    '/conf': '/strategic-portfolio',
    '/ar/conf': '/ar/strategic-portfolio',
    '/quantitative-market-research': '/services/quantitative-research',
    '/techniques-and-tools-in-quantitative-healthcare-market-research': '/services/quantitative-research',
    '/fr/contact': '/fr/contacts',
    '/ar/contact': '/ar/contacts',
    '/adobe-experience-cloud': '/services',
    '/ar/healthcare-market-research-saudi-arabia-ksa': '/healthcare-market-research/saudi-arabia',
    '/ar/services': '/services',
    '/ar/sustainability-saudi-arabia-ksa': '/healthcare-market-research/saudi-arabia',
    '/best-market-research-company-saudi-arabia': '/healthcare-market-research/saudi-arabia',
    '/bionixus-ai-crm-tools': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    '/bionixus-market-research-customer-experience-blog': '/blog',
    '/career-portal': '/about',
    '/careers': '/about',
    '/chatgpt-is-down': '/blog',
    '/contact-details-bionixus': '/contact',
    '/customer-experience': '/services/competitive-intelligence',
    '/cx-ai-services': '/services/competitive-intelligence',
    '/de/contacts': '/de/contact',
    '/de/services': '/services',
    '/digital-transformation': '/services',
    '/fr/services': '/services',
    '/fr/market-research-healthcare': '/fr/healthcare-market-research',
    '/fr/quantitative-research': '/services/quantitative-research',
    '/fr/qualitative-research': '/services/qualitative-research',
    '/fr/success-in-startups': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    '/market-research-customer-insight': '/market-research',
    '/market-research-in-uae': '/healthcare-market-research/uae',
    '/pharma-market-research-in-uae': '/healthcare-market-research/uae',
    '/market-research-methods-simplified-how-to-understand-your-customers-like-marvel': '/methodology',
    '/page': '/',
    '/privacy-policy': '/privacy',
    '/quantitative-market-research-healthcare': '/quantitative-healthcare-market-research',
    '/recruitment-services': '/services',
    '/sales-growth': '/services',
    '/startup-digital-marketing-package': '/services',
    '/terms-and-conditions': '/terms',
    '/de/page-z6rdBM': '/de',
    '/de/page-z6rdbm': '/de',
    '/de/page-zJiHuV': '/de',
    '/de/page-zV_yZf': '/de',
    '/de/page-zZ8hGv': '/de',
    '/de/page-zjihuv': '/de',
    '/de/page-zv_yzf': '/de',
    '/de/page-zz8hgv': '/de',
    '/de/page-zzW-Z8': '/de',
    '/de/page-zzw-z8': '/de',
    '/fr/page-z6rdBM': '/fr',
    '/fr/page-z6rdbm': '/fr',
    '/fr/page-zJiHuV': '/fr',
    '/fr/page-zV_yZf': '/fr',
    '/fr/page-zZ8hGv': '/fr',
    '/fr/page-zjihuv': '/fr',
    '/fr/page-zv_yzf': '/fr',
    '/fr/page-zz8hgv': '/fr',
    '/fr/page-zzW-Z8': '/fr',
    '/fr/page-zzw-z8': '/fr',
    ...BLOG_LEGACY_FULL_PATH_REDIRECTS,
    ...BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH,
    '/blog/\u0623\u0628\u062D\u0627\u062B-\u0627\u0644\u0633\u0648\u0642-\u0627\u0644\u062F\u0648\u0627\u0626\u064A\u0629-\u0641\u064A-\u0627\u0644\u0634\u0631\u0642-\u0627\u0644\u0623\u0648\u0633\u0637-\u0648-\u062F\u0648\u0644-\u0627\u0644\u062E\u0644\u064A\u062C-\u0627\u0644\u0639\u0631\u0628\u064A': '/ar/blog/pharmaceutical-market-research-middle-east-gcc',
    '/blog/\u0633\u0648\u0642-\u0627\u0644\u062F\u0648\u0627\u0621-\u0627\u0644\u0633\u0639\u0648\u062F\u064A-2026': '/ar/blog/saudi-pharma-market-2026',
    '/market-reports/gcc-pharma-market-report-2026': '/gcc-pharma-market-report-2026',
    '/market-reports/saudi-arabia-pharma-market-report-2026': '/saudi-arabia-healthcare-market-report',
    '/market-reports/uae-pharma-market-report-2026': '/uae-healthcare-market-report',
    '/market-reports/kuwait-pharma-market-report-2026': '/kuwait-healthcare-market-report',
    '/market-reports/egypt-pharma-market-report-2026': '/egypt-healthcare-market-report',
    '/market-reports/qatar-pharma-market-report-2026': '/qatar-healthcare-market-report',
    '/market-reports/china-pharma-market-report-2026': '/healthcare-market-research/china',
    '/market-reports/europe-pharma-market-report-2026': '/healthcare-market-research/europe',
    '/market-reports/germany-pharma-market-report-2026': '/germany-healthcare-market-report',
    '/gcc-diabetes-market-report': '/market-reports/gcc-diabetes-market-report',
    '/gcc-biosimilars-market-report': '/market-reports/gcc-biosimilars-market-report',
    '/gcc-digital-health-market-report': '/market-reports/gcc-digital-health-market-report',
    '/gcc-vaccines-market-report': '/market-reports/gcc-vaccines-market-report',
    '/gcc-neurology-cns-market-report': '/market-reports/gcc-neurology-cns-market-report',
    '/gcc-rare-diseases-market-report': '/market-reports/gcc-rare-diseases-market-report',
    '/gcc-immunology-biologics-market-report': '/market-reports/gcc-immunology-biologics-market-report',
    '/gcc-respiratory-market-report': '/market-reports/gcc-respiratory-market-report',
    '/gcc-oncology-market-report': '/market-reports/gcc-oncology-market-report',
    '/gcc-cardiovascular-market-report': '/market-reports/gcc-cardiovascular-market-report',
    '/gcc-dermatology-market-report': '/market-reports/gcc-dermatology-market-report',
    '/ar/pharmaceutical-market-research-dubai': '/pharmaceutical-market-research-dubai',
    '/ar/gfk-alternative-egypt': '/gfk-alternative-egypt',
    '/ar/kantar-health-alternative-gcc': '/kantar-health-alternative-gcc',
  };

  const strategicPortfolioAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/strategic-portfolio.html') : path.join('public', 'conf/strategic-portfolio.html'),
  );
  const strategicPortfolioArAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/strategic-portfolio-ar.html') : path.join('public', 'conf/strategic-portfolio-ar.html'),
  );

  /** Full-page static deck (authoritative HTML, not the SPA shell). */
  app.get('/strategic-portfolio/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/strategic-portfolio');
    return next();
  });
  app.get('/strategic-portfolio', (_req, res) => {
    res.type('html').sendFile(strategicPortfolioAbsolutePath);
  });
  app.get('/ar/strategic-portfolio/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/ar/strategic-portfolio');
    return next();
  });
  app.get('/ar/strategic-portfolio', (_req, res) => {
    res.type('html').sendFile(strategicPortfolioArAbsolutePath);
  });

  app.get('/life-sciences-diagnostics-market-research', (_req, res) => {
    res.redirect(301, '/clinical-diagnostics-market-research');
  });

  const clinicalDiagnosticsProposalPath = path.resolve(
    __dirname,
    isProduction
      ? path.join('dist/client', 'conf/clinical-diagnostics-market-assessment-proposal.html')
      : path.join('public', 'conf/clinical-diagnostics-market-assessment-proposal.html'),
  );
  app.get('/clinical-diagnostics-market-assessment-proposal/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/clinical-diagnostics-market-assessment-proposal');
    return next();
  });
  app.get('/clinical-diagnostics-market-assessment-proposal', (_req, res) => {
    res.type('html').sendFile(clinicalDiagnosticsProposalPath);
  });

  /** Static comparison page — same pattern as strategic-portfolio. */
  const vsIqviaAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/bionixus-vs-iqvia-mena.html') : path.join('public', 'conf/bionixus-vs-iqvia-mena.html'),
  );
  app.get('/bionixus-vs-iqvia-mena/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/bionixus-vs-iqvia-mena');
    return next();
  });
  app.get('/bionixus-vs-iqvia-mena', (_req, res) => {
    res.type('html').sendFile(vsIqviaAbsolutePath);
  });

  /** Static KOL mapping page. */
  const kolMappingAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/kol-mapping-saudi-arabia-oncology.html') : path.join('public', 'conf/kol-mapping-saudi-arabia-oncology.html'),
  );
  app.get('/kol-mapping-saudi-arabia-oncology/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/kol-mapping-saudi-arabia-oncology');
    return next();
  });
  app.get('/kol-mapping-saudi-arabia-oncology', (_req, res) => {
    res.type('html').sendFile(kolMappingAbsolutePath);
  });

  /** Static physician survey page. */
  const physicianSurveyAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/physician-survey-saudi-arabia.html') : path.join('public', 'conf/physician-survey-saudi-arabia.html'),
  );
  app.get('/physician-survey-saudi-arabia/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/physician-survey-saudi-arabia');
    return next();
  });
  app.get('/physician-survey-saudi-arabia', (_req, res) => {
    res.type('html').sendFile(physicianSurveyAbsolutePath);
  });

  /** Static SFDA market access page. */
  const sfdaAccessAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/sfda-market-access-strategy-saudi-arabia.html') : path.join('public', 'conf/sfda-market-access-strategy-saudi-arabia.html'),
  );
  app.get('/sfda-market-access-strategy-saudi-arabia/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/sfda-market-access-strategy-saudi-arabia');
    return next();
  });
  app.get('/sfda-market-access-strategy-saudi-arabia', (_req, res) => {
    res.type('html').sendFile(sfdaAccessAbsolutePath);
  });

  /** Static biosimilar market entry page. */
  const biosimilarAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/biosimilar-market-entry-saudi-arabia.html') : path.join('public', 'conf/biosimilar-market-entry-saudi-arabia.html'),
  );
  app.get('/biosimilar-market-entry-saudi-arabia/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/biosimilar-market-entry-saudi-arabia');
    return next();
  });
  app.get('/biosimilar-market-entry-saudi-arabia', (_req, res) => {
    res.type('html').sendFile(biosimilarAbsolutePath);
  });

  /** Static IQVIA alternative page. */
  const iqviaAltAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/iqvia-alternative.html') : path.join('public', 'conf/iqvia-alternative.html'),
  );
  app.get('/iqvia-alternative/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/iqvia-alternative');
    return next();
  });
  app.get('/iqvia-alternative', (_req, res) => {
    res.type('html').sendFile(iqviaAltAbsolutePath);
  });

  /** Static Dubai pharma market research page. */
  const dubaiPharmaAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/pharmaceutical-market-research-dubai.html') : path.join('public', 'conf/pharmaceutical-market-research-dubai.html'),
  );
  app.get('/pharmaceutical-market-research-dubai/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/pharmaceutical-market-research-dubai');
    return next();
  });
  app.get('/pharmaceutical-market-research-dubai', (_req, res) => {
    res.type('html').sendFile(dubaiPharmaAbsolutePath);
  });

  /** Static Kantar Health alternative GCC page. */
  const kantarAltAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/kantar-health-alternative-gcc.html') : path.join('public', 'conf/kantar-health-alternative-gcc.html'),
  );
  app.get('/kantar-health-alternative-gcc/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/kantar-health-alternative-gcc');
    return next();
  });
  app.get('/kantar-health-alternative-gcc', (_req, res) => {
    res.type('html').sendFile(kantarAltAbsolutePath);
  });

  /** Static GfK Alternative Egypt page. */
  const gfkAltEgyptAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/gfk-alternative-egypt.html') : path.join('public', 'conf/gfk-alternative-egypt.html'),
  );
  app.get('/gfk-alternative-egypt/', (req, res, next) => {
    if (req.path.endsWith('/')) return res.redirect(301, '/gfk-alternative-egypt');
    return next();
  });
  app.get('/gfk-alternative-egypt', (_req, res) => {
    res.type('html').sendFile(gfkAltEgyptAbsolutePath);
  });

  let vite;
  if (!isProduction) {
    // eslint-disable-next-line no-console
    console.log('Loading Vite dev server (first start can take several minutes)…');
    const { createServer } = await import('vite');
    vite = await createServer({
      root: __dirname,
      appType: 'custom',
      server: { middlewareMode: true },
    });
    app.use(vite.middlewares);
    // eslint-disable-next-line no-console
    console.log('Vite dev server ready.');
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  app.get('/robots.txt', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/robots.txt'));
  });

  app.get('/llms.txt', (_req, res) => {
    res.type('text/plain').sendFile(path.resolve(__dirname, 'public/llms.txt'));
  });

  app.get('/llms-full.txt', (_req, res) => {
    res.type('text/plain').sendFile(path.resolve(__dirname, 'public/llms-full.txt'));
  });

  // Fallback canonicalization for non-edge environments.
  app.use((req, res, next) => {
    const forwardedHost = String(req.headers['x-forwarded-host'] || req.headers.host || '')
      .split(',')[0]
      .trim()
      .toLowerCase();
    const host = forwardedHost.replace(/:\d+$/, '');
    const forwardedProto = String(req.headers['x-forwarded-proto'] || req.protocol || 'http')
      .split(',')[0]
      .trim()
      .toLowerCase();
    const isLocal = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');

    if (!isLocal && (host === 'bionixus.com' || host === CANONICAL_HOST)) {
      if (host !== CANONICAL_HOST || forwardedProto !== 'https') {
        const target = `https://${CANONICAL_HOST}${req.originalUrl || req.url || '/'}`;
        res.redirect(301, target);
        return;
      }
    }

    next();
  });

  app.get('/api/og-card', (req, res) => {
    const raw = typeof req.query.path === 'string' ? req.query.path : '';
    const svg = renderOgCardSvg(normalizeOgCardPath(raw || undefined));
    res
      .status(200)
      .set({
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      })
      .send(svg);
  });

  app.use(async (req, res, next) => {
    try {
      const rawPathAndQuery = (req.originalUrl || req.url || '/').split('#')[0];
      const canonical = canonicalRedirectTarget(rawPathAndQuery);
      if (canonical.changed && canonical.full !== canonical.original) {
        res.redirect(301, canonical.full);
        return;
      }

      let decodedPath = req.path;
      try {
        decodedPath = decodeURIComponent(req.path);
      } catch {
        /* keep raw path */
      }
      // Some crawlers/CDN layers double-encode non-Latin path segments (e.g. Arabic
      // slugs), and Unicode text can arrive in NFD form. Try a second decode pass and
      // NFC normalization so the REDIRECTS lookup still matches in those cases instead
      // of falling through to the full SSR render for a legacy alias.
      let doubleDecodedPath = decodedPath;
      try {
        doubleDecodedPath = decodeURIComponent(decodedPath);
      } catch {
        /* keep single-decoded path */
      }
      const normalize = (value) => {
        try {
          return value.normalize('NFC');
        } catch {
          return value;
        }
      };
      const redirectLookupCandidates = [
        req.path,
        decodedPath,
        doubleDecodedPath,
        normalize(req.path),
        normalize(decodedPath),
        normalize(doubleDecodedPath),
      ];
      const blogRedirectTarget = redirectLookupCandidates
        .map((candidate) => REDIRECTS[candidate])
        .find((target) => target);
      if (blogRedirectTarget) {
        res.redirect(301, blogRedirectTarget);
        return;
      }

      const legacyCountryIndustryTarget = resolveLegacyCountryIndustryMarketResearchRedirect(req.path);
      if (legacyCountryIndustryTarget) {
        res.redirect(301, legacyCountryIndustryTarget);
        return;
      }

      const url = req.originalUrl;

      let template;
      let render;
      let fetchRouteData;

      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const serverMod = await vite.ssrLoadModule('/src/server-entry.ts');
        render = serverMod.render;
        fetchRouteData = serverMod.fetchRouteData;
      } else {
        const distClient = path.resolve(__dirname, 'dist/client');
        const ssrTemplate = path.join(distClient, '_ssr-template.html');
        const indexHtml = path.join(distClient, 'index.html');
        const templateFile = fs.existsSync(ssrTemplate) ? ssrTemplate : indexHtml;
        template = fs.readFileSync(templateFile, 'utf-8');

        const serverMod = await import('./dist/server/server-entry.js');
        render = serverMod.render;
        fetchRouteData = serverMod.fetchRouteData;
      }

      const initialData = await fetchRouteData(url).catch((routeErr) => {
        // eslint-disable-next-line no-console
        console.error('SSR fetchRouteData failed:', routeErr);
        return { pageType: 'generic', routeFetchError: true };
      });
      if (initialData?.pageType === 'redirect' && typeof initialData.redirectTo === 'string') {
        res.redirect(Number(initialData.statusCode) || 301, initialData.redirectTo);
        return;
      }
      let renderResult;
      try {
        renderResult = render(url, initialData);
      } catch (renderErr) {
        // Safety net for legacy `/blog/{arabic-slug}` aliases: if SSR render still
        // throws for one of these (e.g. an encoding edge case the REDIRECTS lookup
        // above didn't catch), redirect to the canonical /ar/blog/ URL instead of
        // surfacing a 500 to users and crawlers.
        const cleanPath = decodedPath.split('?')[0].split('#')[0];
        if (cleanPath.startsWith('/blog/') && ARABIC_SCRIPT_RE.test(cleanPath)) {
          // eslint-disable-next-line no-console
          console.error('SSR render failed for legacy Arabic /blog/ alias, redirecting to /ar/blog/:', renderErr);
          res.redirect(301, `/ar/blog/${cleanPath.slice('/blog/'.length)}`);
          return;
        }
        throw renderErr;
      }
      const { html: appHtml, helmetData } = renderResult;

      const headTags = [
        helmetData?.title?.toString() || '',
        helmetData?.meta?.toString() || '',
        helmetData?.link?.toString() || '',
        helmetData?.script?.toString() || '',
      ].join('\n')
        .replace(/hrefLang=/g, 'hreflang=')
        .replace(/crossOrigin=""/g, 'crossorigin="anonymous"');

      const statusCode = isSsrNotFoundPage(headTags, appHtml) ? 404 : 200;

      const initialDataSerialized = serializeInitialDataForInlineScript(initialData);

      const perfHints = isProduction
        ? [getClientAssetHints(path.resolve(__dirname, 'dist/client/assets')), buildLcpPreloadTag(initialData)].filter(Boolean).join('\n')
        : buildLcpPreloadTag(initialData);
      const combinedHead = perfHints ? `${perfHints}\n${headTags}` : headTags;

      const page = template
        .replace('<!--ssr-head-->', combinedHead)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace(
          '<!--ssr-data-->',
          `<script>window.__INITIAL_DATA__ = ${initialDataSerialized}</script>`,
        );
      // NOTE: We intentionally do NOT inject a synthetic in-<main> share-card image here.
      // Anything inserted into the React-rendered #root markup (e.g. the old
      // ensureMainContentImage share <aside>) is treated as an unexpected node during
      // hydrateRoot() and discarded by React on the client — which both removes the node
      // for real users and corrupts hydration of the surrounding subtree (the
      // "Expected server HTML to contain a matching <div> in <main>" warning). Page-level
      // imagery/social cards are handled inside the React tree and via OpenGraph meta tags.
      const localizedPage = ensureCanonicalTag(
        ensureMetaDescriptionTag(
          ensureTitleTag(applyHtmlLang(page, req.path, initialData), req.path),
          req.path,
        ),
        req.path,
      );

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(localizedPage);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('SSR request failed:', error);
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(error);
      }
      next(error);
    }
  });

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`SSR server running at http://localhost:${port}`);
  });
}

startServer();

