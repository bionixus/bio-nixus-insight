import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations, languages } from '@/lib/i18n'; // stats: 10+, 120, 15+

const LANGUAGE_STORAGE_KEY = 'bionixus-language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname;
  if (path.startsWith('/de')) return 'de';
  if (path.startsWith('/ar')) return 'ar';
  if (path.startsWith('/fr')) return 'fr';
  if (path.startsWith('/es')) return 'es';
  if (path.startsWith('/zh')) return 'zh';
  return 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  const currentLang = languages.find(l => l.code === language);
  const isRTL = currentLang?.rtl || false;

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  }, [language, isRTL]);

  const value = {
    language,
    setLanguage,
    t: translations[language] ?? translations.en,
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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
