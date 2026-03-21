import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, translations, languages } from '@/lib/i18n'; // stats: 10+, 120, 15+

const LANGUAGE_STORAGE_KEY = 'bionixus-language';

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

function getLanguageFromPath(pathname: string): Language | null {
  if (pathname === '/de' || pathname.startsWith('/de/')) return 'de';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh';
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return 'ar';
  if (pathname === '/' || pathname === '') return 'en';
  return null;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [language, setLanguageState] = useState<Language>(() => {
    const pathLanguage = getLanguageFromPath(pathname);
    if (pathLanguage) return pathLanguage;
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (stored && languages.some((item) => item.code === stored)) {
        return stored;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  const currentLang = languages.find(l => l.code === language);
  const isRTL = currentLang?.rtl || false;

  useEffect(() => {
    const pathLanguage = getLanguageFromPath(pathname);
    if (pathLanguage && pathLanguage !== language) {
      setLanguageState(pathLanguage);
      return;
    }
    if (!pathLanguage && typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (stored && stored !== language && languages.some((item) => item.code === stored)) {
        setLanguageState(stored);
      }
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
