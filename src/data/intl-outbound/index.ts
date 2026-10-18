import { CHINA_EN_INTL_PAGE } from './chinaEn';
import { CHINA_ZH_INTL_PAGE } from './chinaZh';
import { JAPAN_EN_INTL_PAGE } from './japanEn';
import { JAPAN_JA_INTL_PAGE } from './japanJa';
import { PATHS } from './shared';
import { SINGAPORE_INTL_PAGE } from './singapore';
import type { IntlMoneyPage } from './types';
import { USA_INTL_PAGE } from './usa';

export const INTL_MONEY_PAGES: readonly IntlMoneyPage[] = [
  USA_INTL_PAGE,
  JAPAN_EN_INTL_PAGE,
  JAPAN_JA_INTL_PAGE,
  CHINA_EN_INTL_PAGE,
  CHINA_ZH_INTL_PAGE,
  SINGAPORE_INTL_PAGE,
];

export const INTL_MONEY_PATHS = PATHS;

export function normalizeIntlPath(pathname: string): string {
  const clean = (pathname || '/').split('?')[0].split('#')[0] || '/';
  return clean === '/' ? '/' : clean.replace(/\/+$/, '');
}

export function getIntlMoneyPage(pathname: string): IntlMoneyPage | undefined {
  const path = normalizeIntlPath(pathname);
  return INTL_MONEY_PAGES.find((page) => page.path === path);
}

export function getIntlMoneyHreflang(pathname: string): IntlMoneyPage['hreflang'] | undefined {
  return getIntlMoneyPage(pathname)?.hreflang;
}

export {
  CHINA_EN_INTL_PAGE,
  CHINA_ZH_INTL_PAGE,
  JAPAN_EN_INTL_PAGE,
  JAPAN_JA_INTL_PAGE,
  SINGAPORE_INTL_PAGE,
  USA_INTL_PAGE,
};
export type { IntlMoneyPage, IntlMoneyPageId } from './types';
export {
  countContentWords,
  countLatinWords,
  countPageWords,
  INTL_DATE_MODIFIED,
  INTL_HREFLANG_BY_PATH,
} from './shared';
