import type { Language } from '@/lib/i18n';
import type { AboutPageCopyMap } from './aboutPageCopy.types';
import { aboutPageCopyEn } from './aboutPageCopy.en';
import { aboutPageCopyDe } from './aboutPageCopy.de';
import { aboutPageCopyFr } from './aboutPageCopy.fr';
import { aboutPageCopyEs } from './aboutPageCopy.es';
import { aboutPageCopyZh } from './aboutPageCopy.zh';
import { aboutPageCopyAr } from './aboutPageCopy.ar';
import { aboutPageCopyPt } from './aboutPageCopy.pt';
import { aboutPageCopyRu } from './aboutPageCopy.ru';

export const ABOUT_PAGE_COPY: AboutPageCopyMap = {
  en: aboutPageCopyEn,
  de: aboutPageCopyDe,
  fr: aboutPageCopyFr,
  es: aboutPageCopyEs,
  zh: aboutPageCopyZh,
  ar: aboutPageCopyAr,
  pt: aboutPageCopyPt,
  ru: aboutPageCopyRu,
};

export function getAboutPageCopy(language: Language) {
  return ABOUT_PAGE_COPY[language] ?? ABOUT_PAGE_COPY.en;
}

export * from './aboutPageCopy.types';
