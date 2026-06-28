import { translations, type Language } from './i18n';
import { homePageHardcoded, type HomePageHardcodedCopy } from './homePageHardcoded';
import { homePageUiStrings } from './homePageUiStrings';

export type MergedTranslations = (typeof translations)[Language] & {
  homePage: HomePageHardcodedCopy;
};

export function getTranslations(lang: Language): MergedTranslations {
  const base = translations[lang];
  const overlay = homePageUiStrings[lang];

  return {
    ...base,
    homePage: homePageHardcoded[lang],
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
  } as MergedTranslations;
}
