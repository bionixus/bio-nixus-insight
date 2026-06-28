import type { Language } from '@/lib/i18n';
import type { BionixusIndustriesPageCopyMap } from './bionixusIndustriesPageCopy.types';
import { bionixusIndustriesPageCopyEn } from './bionixusIndustriesPageCopy.en';
import { bionixusIndustriesPageCopyDe } from './bionixusIndustriesPageCopy.de';
import { bionixusIndustriesPageCopyFr } from './bionixusIndustriesPageCopy.fr';
import { bionixusIndustriesPageCopyEs } from './bionixusIndustriesPageCopy.es';
import { bionixusIndustriesPageCopyZh } from './bionixusIndustriesPageCopy.zh';
import { bionixusIndustriesPageCopyAr } from './bionixusIndustriesPageCopy.ar';
import { bionixusIndustriesPageCopyPt } from './bionixusIndustriesPageCopy.pt';
import { bionixusIndustriesPageCopyRu } from './bionixusIndustriesPageCopy.ru';

export const BIONIXUS_INDUSTRIES_PAGE_COPY: BionixusIndustriesPageCopyMap = {
  en: bionixusIndustriesPageCopyEn,
  de: bionixusIndustriesPageCopyDe,
  fr: bionixusIndustriesPageCopyFr,
  es: bionixusIndustriesPageCopyEs,
  zh: bionixusIndustriesPageCopyZh,
  ar: bionixusIndustriesPageCopyAr,
  pt: bionixusIndustriesPageCopyPt,
  ru: bionixusIndustriesPageCopyRu,
};

export function getBionixusIndustriesPageCopy(language: Language) {
  return BIONIXUS_INDUSTRIES_PAGE_COPY[language] ?? BIONIXUS_INDUSTRIES_PAGE_COPY.en;
}

export * from './bionixusIndustriesPageCopy.types';
