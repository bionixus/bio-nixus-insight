import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const SyncLanguageFromPath = () => {
  const { pathname } = useLocation();
  const { setLanguage, language } = useLanguage();

  useEffect(() => {
    // Only sync language when on a locale prefix path (/de, /de/..., etc.)
    if (pathname === '/de' || pathname.startsWith('/de/')) {
      if (language !== 'de') setLanguage('de');
    } else if (pathname === '/fr' || pathname.startsWith('/fr/')) {
      if (language !== 'fr') setLanguage('fr');
    } else if (pathname === '/es' || pathname.startsWith('/es/')) {
      if (language !== 'es') setLanguage('es');
    } else if (pathname === '/zh' || pathname.startsWith('/zh/')) {
      if (language !== 'zh') setLanguage('zh');
    } else if (pathname === '/ar' || pathname.startsWith('/ar/')) {
      if (language !== 'ar') setLanguage('ar');
    } else if (pathname.startsWith('/pt')) {
      if (language !== 'pt') setLanguage('pt');
    } else if (pathname.startsWith('/ru')) {
      if (language !== 'ru') setLanguage('ru');
    } else if (pathname === '/') {
      if (language !== 'en') setLanguage('en');
    }
    // On /blog, /privacy etc. keep current language
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps -- only sync on path change

  return null;
};

export default SyncLanguageFromPath;
