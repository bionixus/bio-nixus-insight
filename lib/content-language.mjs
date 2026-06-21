/** @typedef {'en' | 'de' | 'fr' | 'es' | 'zh' | 'ar' | 'pt' | 'ru'} ContentLanguage */

const SUPPORTED = new Set(['en', 'de', 'fr', 'es', 'zh', 'ar', 'pt', 'ru']);

/** @type {Record<ContentLanguage, string>} */
const OG_LOCALE = {
  en: 'en_US',
  ar: 'ar_SA',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  pt: 'pt_BR',
  zh: 'zh_CN',
  ru: 'ru_RU',
};

/** @type {Record<ContentLanguage, string>} */
const HTML_LANG = {
  en: 'en',
  ar: 'ar',
  de: 'de',
  fr: 'fr',
  es: 'es',
  pt: 'pt',
  zh: 'zh-CN',
  ru: 'ru',
};

/**
 * Normalize Sanity `language` or UI locale to a supported content language code.
 * @param {string | undefined | null} code
 * @param {ContentLanguage} [fallback='en']
 * @returns {ContentLanguage}
 */
export function normalizeContentLanguage(code, fallback = 'en') {
  const raw = String(code || '').trim().toLowerCase();
  if (!raw) return fallback;
  if (SUPPORTED.has(raw)) return /** @type {ContentLanguage} */ (raw);
  const base = raw.split('-')[0];
  if (SUPPORTED.has(base)) return /** @type {ContentLanguage} */ (base);
  return fallback;
}

/**
 * @param {string | undefined | null} code
 * @returns {{ lang: string; dir: 'ltr' | 'rtl' }}
 */
export function getHtmlLangAttributes(code) {
  const normalized = normalizeContentLanguage(code);
  return {
    lang: HTML_LANG[normalized] || normalized,
    dir: normalized === 'ar' ? 'rtl' : 'ltr',
  };
}

/**
 * @param {string | undefined | null} code
 * @returns {string}
 */
export function getOgLocaleForLanguage(code) {
  const normalized = normalizeContentLanguage(code);
  return OG_LOCALE[normalized] || 'en_US';
}

/**
 * @param {string | undefined | null} code
 * @returns {string[]}
 */
export function getOgLocaleAlternatesForLanguage(code) {
  const normalized = normalizeContentLanguage(code);
  if (normalized === 'en') return ['ar_SA'];
  return ['en_US'];
}

/**
 * JSON-LD `inLanguage` — matches Sanity short language codes.
 * @param {string | undefined | null} code
 * @returns {ContentLanguage}
 */
export function getJsonLdInLanguage(code) {
  return normalizeContentLanguage(code);
}
