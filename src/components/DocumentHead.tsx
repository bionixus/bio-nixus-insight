import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { seoByLanguage, getCanonicalUrl, getHreflangLinks, defaultOgImageUrl, defaultOgImageAlt, defaultOgImageWidth, defaultOgImageHeight } from '@/lib/seo';

const DocumentHead = () => {
  const { language } = useLanguage();
  const seo = seoByLanguage[language];
  const canonicalPath = seo.canonicalPath || '/';

  useEffect(() => {
    document.title = seo.title;

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

    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setMeta('og:title', seo.title, true);
    setMeta('og:description', seo.description, true);
    setMeta('og:image', defaultOgImageUrl, true);
    setMeta('og:image:width', String(defaultOgImageWidth), true);
    setMeta('og:image:height', String(defaultOgImageHeight), true);
    setMeta('og:image:alt', defaultOgImageAlt, true);
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setMeta('twitter:image', defaultOgImageUrl);
    setMeta('twitter:image:alt', defaultOgImageAlt);

    if (language === 'de') {
      setMeta('geo.region', 'DE;GB;FR;ES;IT;AE;SA;EG');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', getCanonicalUrl(canonicalPath));

    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach((el) => el.remove());

    getHreflangLinks().forEach(({ lang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });
  }, [language]);

  return null;
};

export default DocumentHead;
