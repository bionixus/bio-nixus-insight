/**
 * 301 untranslated locale country copies to the English CountryPage.
 * Keep in sync with untranslatedLocaleEnglishPath() in src/lib/seo.ts.
 * Explicit hub/blog maps live in config/legacy-redirects.json.
 */

const TRANSLATED_LOCALE_COUNTRY_PAGES = new Set([
  '/de/healthcare-market-research/germany',
  '/es/healthcare-market-research/spain',
  '/fr/healthcare-market-research/france',
  '/ar/healthcare-market-research/saudi-arabia',
]);

/**
 * @param {string} pathname
 * @returns {string | null}
 */
export function resolveUntranslatedLocaleRedirect(pathname) {
  const normalized = (pathname || '/').replace(/\/+$/, '') || '/';
  const country = normalized.match(/^\/(de|es|fr|ar)\/healthcare-market-research\/([^/]+)$/);
  if (country && !TRANSLATED_LOCALE_COUNTRY_PAGES.has(normalized)) {
    return `/healthcare-market-research/${country[2]}`;
  }
  return null;
}
