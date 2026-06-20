import React, { createContext, useContext, useState, ReactNode, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, translations, languages } from '@/lib/i18n'; // stats: 10+, 120, 15+

/** useLayoutEffect on the client, useEffect on the server (avoids SSR warning). */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
  isRTL: boolean;
}

const fallbackLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
  isRTL: false,
};

const LanguageContext = createContext<LanguageContextType | undefined>(fallbackLanguageContext);

function getLanguageFromPath(pathname: string): Language {
  if (pathname === '/de' || pathname.startsWith('/de/')) return 'de';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh';
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return 'ar';
  if (pathname === '/pt' || pathname.startsWith('/pt/')) return 'pt';
  if (pathname === '/ru' || pathname.startsWith('/ru/')) return 'ru';
  return 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [language, setLanguageState] = useState<Language>(() => getLanguageFromPath(pathname));

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('bionixus-language', lang);
    }
  };

  const currentLang = languages.find(l => l.code === language);
  const isRTL = currentLang?.rtl || false;

  // Language always follows the URL prefix — never localStorage alone — so nav links
  // match the page the user is actually on (prevents wrong /ar/contact on English URLs).
  useIsomorphicLayoutEffect(() => {
    const pathLanguage = getLanguageFromPath(pathname);
    if (pathLanguage !== language) {
      setLanguageState(pathLanguage);
    }
  }, [pathname, language]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const value = {
    language: language,
    setLanguage,
    t: translations[language],
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context ?? fallbackLanguageContext;
};
