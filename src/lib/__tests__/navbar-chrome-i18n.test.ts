import { describe, expect, it } from 'vitest';
import { getTranslations } from '@/lib/getTranslations';
import type { Language } from '@/lib/i18n';

const LOCALES: Exclude<Language, 'en'>[] = ['de', 'fr', 'es', 'pt', 'ru', 'zh', 'ar'];

/** French "Services" and "Contact" are the same words as English; they still count as translated. */
const NAV_KEYS_MUST_DIFFER: Record<Exclude<Language, 'en'>, Array<'home' | 'services' | 'industries' | 'about' | 'contact'>> = {
  de: ['home', 'services', 'industries', 'about', 'contact'],
  fr: ['home', 'industries', 'about'],
  es: ['home', 'services', 'industries', 'about', 'contact'],
  pt: ['home', 'services', 'industries', 'about', 'contact'],
  ru: ['home', 'services', 'industries', 'about', 'contact'],
  zh: ['home', 'services', 'industries', 'about', 'contact'],
  ar: ['home', 'services', 'industries', 'about', 'contact'],
};

describe('navbar chrome is localized', () => {
  it('does not keep English nav labels on other locales', () => {
    const en = getTranslations('en');
    for (const lang of LOCALES) {
      const t = getTranslations(lang);
      for (const key of NAV_KEYS_MUST_DIFFER[lang]) {
        expect(t.nav[key], `${lang}.nav.${key}`).not.toBe(en.nav[key]);
      }
      expect(t.nav.services.length).toBeGreaterThan(0);
      expect(t.nav.contact.length).toBeGreaterThan(0);
    }
  });

  it('translates Search and Global Sites chrome for every locale', () => {
    const en = getTranslations('en').ui.nav;
    for (const lang of LOCALES) {
      const nav = getTranslations(lang).ui.nav;
      expect(nav.globalSites, `${lang}.globalSites`).not.toBe(en.globalSites);
      expect(nav.searchOpen, `${lang}.searchOpen`).not.toBe(en.searchOpen);
      expect(nav.searchPlaceholder, `${lang}.searchPlaceholder`).not.toBe(en.searchPlaceholder);
      expect(nav.searchTitle, `${lang}.searchTitle`).not.toBe(en.searchTitle);
      expect(nav.logoAlt, `${lang}.logoAlt`).not.toBe(en.logoAlt);
      expect(nav.watchFullPage, `${lang}.watchFullPage`).not.toBe(en.watchFullPage);
    }
  });
});

describe('homepage and footer chrome is localized', () => {
  it('translates the home problem section for every locale', () => {
    const en = getTranslations('en').homeProblem;
    for (const lang of LOCALES) {
      const copy = getTranslations(lang).homeProblem;
      expect(copy.h2, `${lang}.homeProblem.h2`).not.toBe(en.h2);
      expect(copy.linkLabel, `${lang}.homeProblem.linkLabel`).not.toBe(en.linkLabel);
      expect(copy.columns[0].title, `${lang}.homeProblem.columns[0]`).not.toBe(en.columns[0].title);
    }
  });

  it('translates explore-research labels that used to stay English', () => {
    const en = getTranslations('en').ui.exploreResearch;
    for (const lang of LOCALES) {
      const explore = getTranslations(lang).ui.exploreResearch;
      expect(explore.kicker, `${lang}.explore.kicker`).not.toBe(en.kicker);
      expect(explore.accountLevel, `${lang}.explore.accountLevel`).not.toBe(en.accountLevel);
      expect(explore.pricing, `${lang}.explore.pricing`).not.toBe(en.pricing);
      expect(explore.nielsen, `${lang}.explore.nielsen`).not.toBe(en.nielsen);
    }
  });

  it('translates footer headings that used to fall back to English', () => {
    const en = getTranslations('en').footer as Record<string, string>;
    for (const lang of LOCALES) {
      const footer = getTranslations(lang).footer as Record<string, string>;
      expect(footer.quickLinksHeading, `${lang}.footer.quickLinksHeading`).not.toBe(en.quickLinksHeading);
      expect(footer.companyDirectories, `${lang}.footer.companyDirectories`).not.toBe(en.companyDirectories);
      expect(footer.healthcareHub, `${lang}.footer.healthcareHub`).not.toBe(en.healthcareHub);
    }
  });
});
