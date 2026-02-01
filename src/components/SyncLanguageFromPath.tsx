import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const SyncLanguageFromPath = () => {
  const { pathname } = useLocation();
  const { setLanguage, language } = useLanguage();

  useEffect(() => {
    // Only sync language when on a language-specific path (home or its sub-paths)
    if (pathname.startsWith('/de')) {
      if (language !== 'de') setLanguage('de');
    } else if (pathname.startsWith('/fr')) {
      if (language !== 'fr') setLanguage('fr');
    } else if (pathname.startsWith('/es')) {
      if (language !== 'es') setLanguage('es');
    } else if (pathname.startsWith('/zh')) {
      if (language !== 'zh') setLanguage('zh');
    } else if (pathname.startsWith('/ar')) {
      if (language !== 'ar') setLanguage('ar');
    } else if (pathname === '/') {
      if (language !== 'en') setLanguage('en');
    }
    // On /blog, /privacy etc. keep current language
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps -- only sync on path change

  return null;
};

export default SyncLanguageFromPath;
