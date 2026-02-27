import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { seoByLanguage, getCanonicalPath, getCanonicalUrl, getHreflangLinks, defaultOgImageUrl, getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { buildSeoDescription, ensureFallbackH1, normalizeSeoTitle } from '@/lib/seo-meta';

const DocumentHead = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const seo = seoByLanguage[language];
  const canonicalPath = getCanonicalPath(pathname || seo.canonicalPath || '/');
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  useEffect(() => {
    document.title = normalizeSeoTitle(seo.title, 'BioNixus');

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const bodyText = document.querySelector('main')?.textContent || '';
    const normalizedDescription = buildSeoDescription({
      preferred: seo.description,
      bodySource: bodyText,
      fallback: seo.description,
    });

    setMeta('description', normalizedDescription);
    setMeta('keywords', seo.keywords);

    if (language === 'de') {
      setMeta('geo.region', 'DE;GB;FR;ES;IT;AE;SA;EG');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach((el) => el.remove());

    getHreflangLinks(pathname).forEach(({ lang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    ensureFallbackH1(seo.title);

    const enforceHeadLimits = () => {
      const normalizedTitle = normalizeSeoTitle(document.title || seo.title, 'BioNixus');
      if (document.title !== normalizedTitle) {
        document.title = normalizedTitle;
      }

      const descEl = document.querySelector('meta[name="description"]');
      const descRaw = descEl?.getAttribute('content') || seo.description;
      const nextDesc = buildSeoDescription({
        preferred: descRaw,
        bodySource: document.querySelector('main')?.textContent || '',
        fallback: seo.description,
      });
      if (descEl && descEl.getAttribute('content') !== nextDesc) {
        descEl.setAttribute('content', nextDesc);
      }
      ensureFallbackH1(document.title);
    };

    enforceHeadLimits();
    const rafId = requestAnimationFrame(enforceHeadLimits);
    const timeoutId = window.setTimeout(enforceHeadLimits, 400);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [language, pathname, canonicalUrl]);

  const title = normalizeSeoTitle(seo.title, 'BioNixus');
  const description = buildSeoDescription({
    preferred: seo.description,
    bodySource: typeof document !== 'undefined' ? document.querySelector('main')?.textContent || '' : '',
    fallback: seo.description,
  });

  return (
    <OpenGraphMeta
      title={title}
      description={description}
      image={defaultOgImageUrl}
      url={canonicalUrl}
      type="website"
      locale={getOgLocale(language)}
      alternateLocales={getOgLocaleAlternates(language)}
    />
  );
};

export default DocumentHead;
