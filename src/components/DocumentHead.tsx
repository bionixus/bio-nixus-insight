import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { seoByLanguage, getCanonicalPath, getCanonicalUrl, getHreflangLinks, defaultOgImageUrl, getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { normalizeSeoTitle } from '@/lib/seo-meta';
import type { Language } from '@/lib/i18n';

function cleanPath(pathname: string): string {
  const p = pathname.split('?')[0].split('#')[0] || '/';
  return p === '/' ? '/' : p.replace(/\/+$/, '');
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

function buildRouteDescription(pathname: string, language: Language, fallback: string): string {
  const path = cleanPath(pathname);
  const parts = path.split('/').filter(Boolean);
  const noPrefixParts = ['de', 'fr', 'es', 'ar', 'zh'].includes(parts[0]) ? parts.slice(1) : parts;

  if (path === '/') {
    return clampDescription(
      'Healthcare and pharmaceutical market research across MENA, GCC, UK, and Europe with quantitative, qualitative, and market access insight programs.'
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
      'ابحاث سوق صحية ودوائية في الخليج واوروبا مع رؤى كمية ونوعية تدعم قرارات الاطلاق والوصول الى السوق.'
    );
  }

  if (path === '/blog' || path === '/de/blog' || path === '/fr/blog') {
    return clampDescription(
      'Read BioNixus healthcare and pharmaceutical market research insights on market access, physician behavior, Saudi Arabia strategy, and regional trends.'
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
      'Saudi pharmacy marketing research with retail and institutional channel insights to improve pharmaceutical activation, messaging, and growth strategy.'
    );
  }

  if (path === '/es/market-access') {
    return clampDescription(
      'Market access para farma y salud con evidencia, insights de pagadores y estrategia practica para decisiones comerciales y de acceso.'
    );
  }

  if (path === '/ar/contacts' || path === '/fr/contacts' || path === '/contact' || path === '/de/contact') {
    return clampDescription(
      'Contact BioNixus for healthcare and pharmaceutical market research proposals across Saudi Arabia, GCC, UK, Europe, and global healthcare markets.'
    );
  }

  if (path === '/de/success-in-startups') {
    return clampDescription(
      'Erfolgsfaktoren fuer Healthcare Startups mit evidenzbasierter Marktstrategie, Marktzugang und skalierbarer Umsetzung in regulierten Gesundheitsmaerkten.'
    );
  }

  if (path === '/ar/arabic-blog-alsawdyh') {
    return clampDescription(
      'مقال عربي متخصص في ابحاث السوق الدوائي في السعودية مع تركيز على التنظيم والتسعير وديناميكيات تبني المنتجات الصحية.'
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

const globalSeoFallbackRoutes = new Set([
  '/',
  '/de',
  '/fr',
  '/es',
  '/zh',
  '/ar',
  '/contact',
  '/de/contact',
  '/fr/contacts',
  '/ar/contacts',
  '/es/contact',
  '/zh/contact',
  '/methodology',
  '/de/methodology',
  '/fr/methodology',
  '/es/methodology',
  '/zh/methodology',
  '/ar/methodology',
  '/verify-email',
]);

const DocumentHead = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const seo = seoByLanguage[language];
  const canonicalPath = getCanonicalPath(pathname || '/');
  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const normalizedPath = cleanPath(pathname || '/');
  const useGlobalSeoFallback = globalSeoFallbackRoutes.has(normalizedPath);

  const title = normalizeSeoTitle(seo.title, 'BioNixus');
  const description = buildRouteDescription(pathname, language, seo.description);
  const contentLanguage = language === 'zh' ? 'zh-CN' : language;
  const gscId = import.meta.env.VITE_GSC_VERIFICATION;
  const hreflangLinks = getHreflangLinks(pathname);

  return (
    <>
      <Helmet>
        {useGlobalSeoFallback ? <title>{title}</title> : null}
        {useGlobalSeoFallback ? <meta name="description" content={description} /> : null}
        {useGlobalSeoFallback ? <meta name="keywords" content={seo.keywords} /> : null}
        <meta name="llm-access" content="allow" />
        <meta httpEquiv="content-language" content={contentLanguage} />
        {gscId ? <meta name="google-site-verification" content={gscId} /> : null}
        {language === 'de' ? <meta name="geo.region" content="DE;GB;FR;ES;IT;AE;SA;EG" /> : null}
        <link rel="canonical" href={canonicalUrl} />
        {hreflangLinks.map(({ lang, href }) => (
          <link key={`${lang}-${href}`} rel="alternate" hrefLang={lang} href={href} />
        ))}
      </Helmet>
      {useGlobalSeoFallback ? (
        <OpenGraphMeta
          title={title}
          description={description}
          image={defaultOgImageUrl}
          url={canonicalUrl}
          type="website"
          locale={getOgLocale(language)}
          alternateLocales={getOgLocaleAlternates(language)}
        />
      ) : null}
    </>
  );
};

export default DocumentHead;
