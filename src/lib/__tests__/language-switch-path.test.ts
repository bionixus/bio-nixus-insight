import { describe, expect, it } from 'vitest';
import {
  getLocalizedPathForLanguage,
  resolveLanguageSwitchPath,
} from '@/lib/seo';
import type { Language } from '@/lib/i18n';

const LOCALES: Language[] = ['en', 'de', 'fr', 'es', 'zh', 'ar', 'pt', 'ru'];

describe('resolveLanguageSwitchPath', () => {
  it('switches the homepage to every locale prefix', () => {
    expect(resolveLanguageSwitchPath('/', 'en')).toBe('/');
    expect(resolveLanguageSwitchPath('/', 'de')).toBe('/de');
    expect(resolveLanguageSwitchPath('/', 'fr')).toBe('/fr');
    expect(resolveLanguageSwitchPath('/', 'es')).toBe('/es');
    expect(resolveLanguageSwitchPath('/', 'zh')).toBe('/zh');
    expect(resolveLanguageSwitchPath('/', 'ar')).toBe('/ar');
    expect(resolveLanguageSwitchPath('/', 'pt')).toBe('/pt');
    expect(resolveLanguageSwitchPath('/', 'ru')).toBe('/ru');
  });

  it('keeps the same page when a localized route group exists', () => {
    expect(resolveLanguageSwitchPath('/about', 'de')).toBe('/de/about');
    expect(resolveLanguageSwitchPath('/de/about', 'fr')).toBe('/fr/about');
    expect(resolveLanguageSwitchPath('/de/about', 'en')).toBe('/about');
    expect(resolveLanguageSwitchPath('/pt/contact', 'ru')).toBe('/ru/contact');
  });

  it('does not keep an English URL when the group maps other languages to English', () => {
    const path = '/bionixus-ai-chatbots-increase-sales-and-lead-generation';
    expect(resolveLanguageSwitchPath(path, 'ar')).toBe('/ar/arabic-blog-alsawdyh');
    for (const lang of ['de', 'fr', 'es', 'zh', 'pt', 'ru'] as const) {
      const dest = resolveLanguageSwitchPath(path, lang);
      expect(dest.startsWith(`/${lang}`)).toBe(true);
      expect(dest).not.toBe(path);
    }
  });

  it('prefixes blog posts so chrome language can follow the URL', () => {
    expect(resolveLanguageSwitchPath('/blog/nmpa-class-iii-timeline-2026', 'de')).toBe(
      '/de/blog/nmpa-class-iii-timeline-2026',
    );
    expect(resolveLanguageSwitchPath('/de/blog/pharmamarktforschung-deutschland-2026', 'fr')).toBe(
      '/fr/blog/pharmamarktforschung-deutschland-2026',
    );
  });
});

describe('getLocalizedPathForLanguage', () => {
  it('returns a prefixed path for every homepage locale', () => {
    for (const lang of LOCALES) {
      const dest = getLocalizedPathForLanguage('/', lang);
      if (lang === 'en') expect(dest).toBe('/');
      else expect(dest).toBe(`/${lang}`);
    }
  });

  it('does not drop Portuguese off the healthcare hub', () => {
    expect(getLocalizedPathForLanguage('/healthcare-market-research', 'pt')).toBe(
      '/pt/healthcare-market-research',
    );
    expect(getLocalizedPathForLanguage('/healthcare-market-research', 'de')).toBe(
      '/de/healthcare-market-research/germany',
    );
  });
});
