import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { seoByLanguage, getCanonicalPath, getCanonicalUrl, getHreflangLinks, defaultOgImageUrl, getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { normalizeSeoTitle } from '@/lib/seo-meta';

const DocumentHead = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const seo = seoByLanguage[language];
  const canonicalPath = getCanonicalPath(pathname || seo.canonicalPath || '/');
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  const title = normalizeSeoTitle(seo.title, 'BioNixus');
  const description = seo.description;
  const contentLanguage = language === 'zh' ? 'zh-CN' : language;
  const gscId = import.meta.env.VITE_GSC_VERIFICATION;
  const hreflangLinks = getHreflangLinks(pathname);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="llm-access" content="allow" />
        <meta httpEquiv="content-language" content={contentLanguage} />
        {gscId ? <meta name="google-site-verification" content={gscId} /> : null}
        {language === 'de' ? <meta name="geo.region" content="DE;GB;FR;ES;IT;AE;SA;EG" /> : null}
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
