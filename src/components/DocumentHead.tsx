import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { seoByLanguage, getCanonicalPath, getCanonicalUrl, getHreflangLinks, getGeoMeta, defaultOgImageUrl, getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { normalizeSeoTitle } from '@/lib/seo-meta';
import type { Language } from '@/lib/i18n';

function cleanPath(pathname: string): string {
  const p = pathname.split('?')[0].split('#')[0] || '/';
  return p === '/' ? '/' : p.replace(/\/+$/, '');
}

/**
 * These routes render a full Helmet (title, description, canonical, OG). DocumentHead must not
 * duplicate them or crawlers see multiple <title> tags (e.g. slug-derived title + CMS title).
 */
function routeProvidesOwnDocumentHead(pathname: string): boolean {
  const path = cleanPath(pathname);
  /** Blog index + locales (each page ships its own full Helmet stack). */
  if (path === '/blog' || path === '/de/blog' || path === '/fr/blog' || path === '/ar/blog') return true;
  if (/^\/blog\/.+/.test(path)) return true;
  if (/^\/ar\/blog\/.+/.test(path)) return true;
  if (/^\/case-studies\/.+/.test(path)) return true;
  if (path === '/news' || path === '/media') return true;
  if (/^\/news\/.+/.test(path) && path !== '/news/feed.xml') return true;

  /** SEOHead-based healthcare hub + service / therapy detail pages. */
  if (path === '/healthcare-market-research') return true;
  if (path.startsWith('/healthcare-market-research/services/')) return true;
  if (path.startsWith('/healthcare-market-research/therapy/')) return true;

  /** Localized “market research healthcare” landings. */
  if (
    path === '/market-research-healthcare'
    || path === '/de/market-research-healthcare'
    || path === '/fr/market-research-healthcare'
    || path === '/es/market-research-healthcare'
    || path === '/zh/market-research-healthcare'
    || path === '/ar/market-research-healthcare'
  ) {
    return true;
  }

  /** Country intent landings (SEOHead in MarketResearchCountryLanding). */
  if (
    /^\/market-research-(uae|ksa|saudi|kuwait|egypt)$/.test(path)
    || /^\/ar\/market-research-(uae|ksa|saudi|kuwait|egypt)$/.test(path)
  ) {
    return true;
  }

  if (path === '/sitemap') return true;
  if (path === '/insights/top-market-research-companies-egypt-2026') return true;
  if (path === '/ar/insights/top-market-research-companies-egypt-2026') return true;

  return false;
}

function slugToWords(value: string): string {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleCase(value: string): string {
  return slugToWords(value)
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function clampDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 100 ? cut.slice(0, lastSpace) : cut).trim()}.`;
}

function buildRouteTitle(pathname: string, language: Language, fallback: string): string {
  const path = cleanPath(pathname);
  const parts = path.split('/').filter(Boolean);
  const noPrefixParts = ['de', 'fr', 'es', 'ar', 'zh'].includes(parts[0]) ? parts.slice(1) : parts;
  const makeTitle = (value: string) => normalizeSeoTitle(value, 'BioNixus');

  if (path === '/' || path === '/de' || path === '/fr' || path === '/es' || path === '/zh' || path === '/ar') {
    return makeTitle(fallback);
  }

  if (path === '/about') {
    return makeTitle('About BioNixus | International Healthcare Market Research — EMEA Heritage');
  }

  if (path === '/services') {
    return makeTitle('Healthcare Market Research Services in EMEA | BioNixus');
  }

  if (path === '/faq') {
    return makeTitle('FAQ | BioNixus Healthcare Market Research');
  }

  if (path === '/strategic-portfolio' || path === '/strategic-portfolios') {
    return makeTitle('BioNixus — Strategic Portfolio | Market Research & Consulting');
  }

  if (path === '/blog' || path === '/de/blog' || path === '/fr/blog') {
    return makeTitle('Healthcare & Pharmaceutical Blog Insights | BioNixus');
  }

  if (path.startsWith('/blog/')) {
    const slug = noPrefixParts.slice(1).join('-');
    const topic = titleCase(slug);
    return makeTitle(`${topic} | BioNixus Blog`);
  }

  if (path === '/case-studies') {
    return makeTitle('Healthcare & Pharmaceutical Case Studies | BioNixus');
  }

  if (path.startsWith('/case-studies/')) {
    const slug = noPrefixParts.slice(1).join('-');
    const topic = titleCase(slug);
    return makeTitle(`${topic} | BioNixus Case Study`);
  }

  if (path.startsWith('/services/')) {
    const service = titleCase(noPrefixParts[1] || 'service');
    return makeTitle(`${service} Services | BioNixus`);
  }

  if (path.startsWith('/healthcare-market-research/services/')) {
    const service = titleCase(noPrefixParts[2] || 'service');
    return makeTitle(`${service} Healthcare Research Service | BioNixus`);
  }

  if (path.startsWith('/healthcare-market-research/therapy/')) {
    const therapy = titleCase(noPrefixParts[2] || 'therapy');
    return makeTitle(`${therapy} Healthcare Market Research | BioNixus`);
  }

  if (path.startsWith('/healthcare-market-research/')) {
    const country = titleCase(noPrefixParts[1] || 'market');
    return makeTitle(`Healthcare Market Research in ${country} | BioNixus`);
  }

  if (path === '/real-world-evidence') {
    return makeTitle('Real World Evidence (RWE) for Pharma | BioNixus EMEA & MENA');
  }

  if (path.startsWith('/pharmaceutical-companies-')) {
    const country = titleCase(path.replace('/pharmaceutical-companies-', ''));
    return makeTitle(`Pharmaceutical Companies in ${country} | BioNixus`);
  }

  const topic = titleCase(noPrefixParts.join(' ') || slugToWords(path.replace(/\//g, ' ')));
  return makeTitle(`${topic} | BioNixus`);
}

function buildRouteDescription(pathname: string, language: Language, fallback: string): string {
  const path = cleanPath(pathname);
  const parts = path.split('/').filter(Boolean);
  const noPrefixParts = ['de', 'fr', 'es', 'ar', 'zh'].includes(parts[0]) ? parts.slice(1) : parts;

  if (path === '/') {
    return clampDescription(
      'Pharmaceutical & healthcare market research for MENA, Europe, and GCC — physician surveys, KOL mapping, payer insight, and market access strategy.'
    );
  }

  if (path === '/about') {
    return clampDescription(
      'BioNixus is an international healthcare market research firm with offices in the US and UK, specializing in pharma consulting across 17+ EMEA countries.'
    );
  }

  if (path === '/services') {
    return clampDescription(
      'Quantitative, qualitative, market access, KOL mapping, competitive intelligence, and clinical trial support across the UK, Europe, GCC, and MENA.'
    );
  }

  if (path === '/faq') {
    return clampDescription(
      'Frequently asked questions about BioNixus healthcare market research services: MENA coverage, therapeutic areas, physician surveys, HTA support, and GDPR compliance.'
    );
  }

  if (path === '/strategic-portfolio' || path === '/strategic-portfolios') {
    return clampDescription(
      'BioNixus strategic portfolio: healthcare and consumer market research, global pharma relationships, MENA field capabilities, and board-ready consulting methodology across Egypt and the region.'
    );
  }

  if (path === '/de') {
    return clampDescription(
      'Gesundheits- und Pharmamarktforschung in Deutschland, Europa und MENA mit quantitativen und qualitativen Insights für fundierte Entscheidungen.'
    );
  }

  if (path === '/fr') {
    return clampDescription(
      'Etudes de marche sante et pharma en France, Europe et MENA avec insights quantitatifs et qualitatifs pour decisions strategiques.'
    );
  }

  if (path === '/es') {
    return clampDescription(
      'Investigacion de mercado sanitario y farmaceutico para Europa y MENA con estudios cuantitativos, cualitativos y estrategia de market access.'
    );
  }

  if (path === '/ar') {
    return clampDescription(
      'أبحاث سوق صحية ودوائية من BioNixus في الخليج وأوروبا: دراسات كمية ونوعية، خرائط أصحاب تأثير، ودعم الوصول للسوق والإطلاق الدوائي لمكاتب الأدوية الإقليمية والعالمية.'
    );
  }

  if (path === '/ar/methodology') {
    return clampDescription(
      'منهجيات أبحاث السوق الصحي والدوائي لدى BioNixus: تصميم الدراسات، الميدان ثنائي اللغة، تحليل الجودة، والحوكمة لدعم فرق الأدوية والوصول للسوق في الخليج وأوروبا.'
    );
  }

  if (path === '/blog') {
    return clampDescription(
      'Read BioNixus healthcare and pharmaceutical market research insights on market access, physician behavior, Saudi Arabia strategy, and regional trends.'
    );
  }
  if (path === '/de/blog') {
    return clampDescription(
      'BioNixus Markt-Insights: pharmazeutische und Healthcare-Marktforschung, Market Access, Evidence-Planung, Feldstudien und Strategie für Pharma-Teams in DACH, Europa und MENA.'
    );
  }
  if (path === '/fr/blog') {
    return clampDescription(
      'Insights BioNixus — études de marché santé et pharma, accès marché, preuves payeurs, essais cliniques et stratégie pour les équipes en France, Europe et MENA.'
    );
  }

  if (path.startsWith('/blog/')) {
    const slug = noPrefixParts.slice(1).join('-');
    const topic = titleCase(slug);
    return clampDescription(
      `${topic} insight article from BioNixus covering pharmaceutical market research, healthcare strategy, and practical regional decision-making context.`
    );
  }

  if (path.startsWith('/case-studies/')) {
    const slug = noPrefixParts.slice(1).join('-');
    const topic = titleCase(slug);
    return clampDescription(
      `${topic} case study showing how BioNixus research programs improve pharmaceutical launch, access, and growth decisions across healthcare markets.`
    );
  }

  if (path === '/case-studies') {
    return clampDescription(
      'Explore healthcare and pharmaceutical market research case studies from BioNixus across Saudi Arabia, GCC, UK, and Europe.'
    );
  }

  if (path.startsWith('/services/')) {
    const service = titleCase(noPrefixParts[1] || 'service');
    return clampDescription(
      `${service} by BioNixus for healthcare and pharmaceutical teams, with decision-ready evidence for strategy, market access, and execution planning.`
    );
  }

  if (path.startsWith('/healthcare-market-research/services/')) {
    const service = titleCase(noPrefixParts[2] || 'service');
    return clampDescription(
      `${service} healthcare market research service with practical outputs for pharmaceutical strategy, stakeholder alignment, and market execution.`
    );
  }

  if (path.startsWith('/healthcare-market-research/therapy/')) {
    const therapy = titleCase(noPrefixParts[2] || 'therapy');
    return clampDescription(
      `${therapy} healthcare market research insights for pharmaceutical teams, including stakeholder evidence, demand signals, and market opportunity priorities.`
    );
  }

  if (path.startsWith('/healthcare-market-research/')) {
    const country = titleCase(noPrefixParts[1] || 'market');
    return clampDescription(
      `Pharmaceutical market research in ${country} with localized stakeholder insights, healthcare system context, and execution-focused strategy support.`
    );
  }

  if (path === '/real-world-evidence') {
    return clampDescription(
      'BioNixus real world evidence (RWE) for pharma: principal-led study design, EMEA and MENA execution, HTA and payer-ready narratives, and GCC programs for medical, access, and commercial decisions.'
    );
  }

  if (path.startsWith('/pharmaceutical-companies-')) {
    const country = titleCase(path.replace('/pharmaceutical-companies-', ''));
    return clampDescription(
      `Top pharmaceutical companies in ${country} with market intelligence and strategic context from BioNixus healthcare research teams.`
    );
  }

  if (path === '/market-research-saudi-arabia-pharmaceutical') {
    return clampDescription(
      'Saudi Arabia pharmaceutical market research with SFDA-aligned insights, Vision 2030 context, stakeholder interviews, and market access strategy support.'
    );
  }

  if (path === '/market-research-healthcare') {
    return clampDescription(
      'Healthcare market research services for pharmaceutical teams with compliance-aware evidence, stakeholder insights, and 2026 market trend analysis.'
    );
  }

  if (path === '/qualitative-market-research') {
    return clampDescription(
      'Qualitative market research for healthcare and pharma using IDIs, focus groups, and decision-journey analysis to reveal adoption drivers and barriers.'
    );
  }

  if (path === '/market-research') {
    return clampDescription(
      'Complete healthcare and pharmaceutical market research services hub with quantitative, qualitative, Saudi-focused, and market access strategy options.'
    );
  }

  if (path === '/pharmacies-saudi-arabia-marketing') {
    return clampDescription(
      'How pharmacies in Saudi Arabia use market research and marketing automation to boost retail sales by 40%. Covers Nahdi, Al-Dawaa, SFDA compliance, Vision 2030 opportunities. Expert pharmacy research from BioNixus.'
    );
  }

  if (path === '/es/market-access') {
    return clampDescription(
      'Market access para farma y salud con evidencia, insights de pagadores y estrategia practica para decisiones comerciales y de acceso.'
    );
  }

  if (path === '/contact') {
    return clampDescription(
      'Get a tailored healthcare market research proposal from BioNixus within 24 hours. Pharma, biotech, and access teams across the UK, EU, GCC, and MENA.',
    );
  }
  if (path === '/de/contact') {
    return clampDescription(
      'Kontakt zu BioNixus: Markt- und Gesundheitsforschung für Pharma in DACH, UK und MENA—Angebote, Feldforschung und evidenzbasierte Strategieberatung.',
    );
  }
  if (path === '/fr/contacts') {
    return clampDescription(
      'Contactez BioNixus pour études de marché santé et pharma: couverture Europe, UK et MENA, méthodes quantitatives et qualitatives, et intelligence accès marché.',
    );
  }
  if (path === '/ar/contacts') {
    return clampDescription(
      'تواصل مع BioNixus لطلبات أبحاث السوق الصحي والدوائي في السعودية والخليج والمملكة المتحدة وأوروبا—برامج كمية ونوعية ودعم استراتيجي للوصول إلى السوق.',
    );
  }

  if (path === '/de/success-in-startups') {
    return clampDescription(
      'Erfolgsfaktoren fuer Healthcare Startups mit evidenzbasierter Marktstrategie, Marktzugang und skalierbarer Umsetzung in regulierten Gesundheitsmaerkten.'
    );
  }

  if (path === '/ar/arabic-blog-alsawdyh') {
    return clampDescription(
      'محتوى عربي من BioNixus لأبحاث السوق الدوائي في السعودية ودول الخليج—تنظيم، تسعير، ديناميكيات التبني، ومسارات داخلية تنفيذية لفرق الأدوية.'
    );
  }

  if (path === '/bionixus-ai-chatbots-increase-sales-and-lead-generation') {
    return clampDescription(
      'How AI chatbots can support healthcare market research workflows, lead qualification, and faster insight-to-action execution for pharma teams.'
    );
  }

  // Generic fallback still route-specific to prevent duplicates.
  const topic = titleCase(noPrefixParts.join(' ') || slugToWords(path.replace(/\//g, ' ')));
  const langSuffix = language === 'en' ? '' : ` (${language.toUpperCase()})`;
  return clampDescription(
    `${topic}${langSuffix} page from BioNixus with healthcare and pharmaceutical market research insight, services context, and strategic guidance.`
  ) || fallback;
}

const DocumentHead = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const seo = seoByLanguage[language];
  const canonicalPath = getCanonicalPath(pathname || '/');
  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const title = buildRouteTitle(pathname, language, seo.title);
  const description = buildRouteDescription(pathname, language, seo.description);
  const contentLanguage = language === 'zh' ? 'zh-CN' : language;
  const gscId = import.meta.env.VITE_GSC_VERIFICATION;
  const hreflangLinks = getHreflangLinks(pathname);
  const geoMeta = getGeoMeta(pathname);

  if (routeProvidesOwnDocumentHead(pathname || '/')) {
    return (
      <Helmet>
        <meta name="llm-access" content="allow" />
        <meta httpEquiv="content-language" content={contentLanguage} />
        {gscId ? <meta name="google-site-verification" content={gscId} /> : null}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
      </Helmet>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        <meta name="llm-access" content="allow" />
        <meta httpEquiv="content-language" content={contentLanguage} />
        {gscId ? <meta name="google-site-verification" content={gscId} /> : null}
        {geoMeta ? <meta name="geo.region" content={geoMeta.region} /> : null}
        {geoMeta ? <meta name="geo.placename" content={geoMeta.placename} /> : null}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangLinks.map(({ lang, href }) => (
          <link key={`${lang}-${href}`} rel="alternate" hrefLang={lang} href={href} />
        ))}
      </Helmet>
      <OpenGraphMeta
        title={title}
        description={description}
        image={defaultOgImageUrl}
        url={canonicalUrl}
        type="website"
        locale={getOgLocale(language)}
        alternateLocales={getOgLocaleAlternates(language)}
      />
    </>
  );
};

export default DocumentHead;
