import { translations, type Language } from './i18n';
import { homePageHardcoded, type HomePageHardcodedCopy } from './homePageHardcoded';
import { homePageUiStrings } from './homePageUiStrings';
import { getUiChromeStrings, type UiChromeStrings } from './uiChromeStrings';

type EnglishTranslations = (typeof translations)['en'];

type CtaVariantCopy = NonNullable<(typeof homePageUiStrings)['en']['ctaVariants']>;

export type MergedTranslations = EnglishTranslations & {
  homePage: HomePageHardcodedCopy;
  ui: UiChromeStrings;
  ctaVariants: CtaVariantCopy;
};

/**
 * Locales are translated incrementally, so a non-English bundle can lack keys
 * that components read unconditionally — `pt` is currently missing 93 of 169.
 * English backfills them so those reads stay defined; `t.insights.items.map()`
 * throws on an absent key rather than degrading to untranslated copy.
 */
function withEnglishFallback<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (
    base === null ||
    typeof base !== 'object' ||
    Array.isArray(base) ||
    typeof override !== 'object' ||
    Array.isArray(override)
  ) {
    return override as T;
  }

  const merged: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    merged[key] = withEnglishFallback(merged[key], value);
  }
  return merged as T;
}

export function getTranslations(lang: Language): MergedTranslations {
  const base = withEnglishFallback(translations.en, translations[lang]);
  const overlay = homePageUiStrings[lang];

  return {
    ...base,
    homePage: homePageHardcoded[lang],
    ui: getUiChromeStrings(lang),
    ctaVariants: withEnglishFallback(
      homePageUiStrings.en.ctaVariants as CtaVariantCopy,
      overlay.ctaVariants,
    ),
    hero: {
      ...base.hero,
      ...(overlay.heroTrust
        ? {
            trustStripPrimary: overlay.heroTrust.trustStripPrimary,
            trustStripStats: overlay.heroTrust.trustStripStats,
          }
        : {}),
    },
    services: {
      ...base.services,
      ...(overlay.services ?? {}),
    },
    footer: {
      ...base.footer,
      ...(overlay.footer ?? {}),
    },
    clientReviewsTeaser: {
      ...base.clientReviewsTeaser,
      ...(overlay.clientReviewsTeaser ?? {}),
    },
  };
}
