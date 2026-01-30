import type { Language } from '@/lib/i18n';

/**
 * Map browser locale (e.g. ar-AE, de-DE) to our app Language and a display region name.
 * Used for the "You are opening from [Region]. Switch to [Language]?" popup.
 */
const localeToLanguage: Record<string, Language> = {
  ar: 'ar',
  'ar-AE': 'ar',
  'ar-SA': 'ar',
  'ar-EG': 'ar',
  'ar-KW': 'ar',
  'ar-BH': 'ar',
  'ar-QA': 'ar',
  'ar-OM': 'ar',
  'ar-YE': 'ar',
  'ar-SY': 'ar',
  'ar-JO': 'ar',
  'ar-LB': 'ar',
  'ar-IQ': 'ar',
  de: 'de',
  'de-DE': 'de',
  'de-AT': 'de',
  'de-CH': 'de',
  fr: 'fr',
  'fr-FR': 'fr',
  'fr-BE': 'fr',
  'fr-CH': 'fr',
  'fr-CA': 'fr',
  es: 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'es-AR': 'es',
  'es-CO': 'es',
  'es-CL': 'es',
  zh: 'zh',
  'zh-CN': 'zh',
  'zh-TW': 'zh',
  'zh-HK': 'zh',
  'zh-SG': 'zh',
};

/**
 * Get region display name from locale (e.g. AE -> "UAE", DE -> "Germany").
 * Uses Intl when available, else a small fallback map.
 */
function getRegionDisplayName(regionCode: string): string {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(regionCode) ?? regionCode;
  } catch {
    const fallback: Record<string, string> = {
      AE: 'UAE',
      SA: 'Saudi Arabia',
      DE: 'Germany',
      FR: 'France',
      ES: 'Spain',
      CN: 'China',
      TW: 'Taiwan',
      HK: 'Hong Kong',
      AT: 'Austria',
      CH: 'Switzerland',
      GB: 'UK',
      US: 'USA',
    };
    return fallback[regionCode] ?? regionCode;
  }
}

export interface RegionSuggestion {
  language: Language;
  regionName: string;
  languageName: string;
}

const languageDisplayNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  zh: '中文',
  ar: 'العربية',
};

/**
 * Normalize locale for lookup (e.g. ar-ae -> ar-AE) since browsers may use different casing.
 */
function normalizeLocale(locale: string): string {
  const parts = locale.split('-');
  if (parts.length >= 2) {
    return `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}`;
  }
  return parts[0]?.toLowerCase() ?? locale;
}

/**
 * Detect suggested language and region from browser.
 * Returns null if locale is English or not in our supported list.
 */
export function getRegionSuggestion(): RegionSuggestion | null {
  if (typeof navigator === 'undefined') return null;

  const rawLocale = navigator.language || (navigator.languages && navigator.languages[0]) || '';
  const locale = normalizeLocale(rawLocale);
  const langPart = locale.split('-')[0].toLowerCase();
  const regionPart = locale.split('-')[1]?.toUpperCase() || '';

  const language = localeToLanguage[locale] ?? localeToLanguage[langPart] ?? null;
  if (!language || language === 'en') return null;

  const regionName = regionPart ? getRegionDisplayName(regionPart) : languageDisplayNames[language];
  const languageName = languageDisplayNames[language];

  return { language, regionName, languageName };
}

/**
 * Map country code (from IP geolocation) to our app Language.
 * Used to suggest language based on where the user is opening from.
 */
const countryCodeToLanguage: Record<string, Language> = {
  AE: 'ar', SA: 'ar', EG: 'ar', KW: 'ar', BH: 'ar', QA: 'ar', OM: 'ar', YE: 'ar', SY: 'ar', JO: 'ar', LB: 'ar', IQ: 'ar', PS: 'ar', SD: 'ar', LY: 'ar', TN: 'ar', DZ: 'ar', MA: 'ar',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de', LU: 'de',
  FR: 'fr', BE: 'fr', MC: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  CN: 'zh', TW: 'zh', HK: 'zh', SG: 'zh', MO: 'zh',
};

/**
 * Fetch the user's country from their IP using a free geolocation API.
 * Returns country name and code, or null if fetch fails or country is English-speaking (no popup needed).
 */
export async function getCountryFromIP(): Promise<{ countryName: string; countryCode: string } | null> {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const data = await res.json();
    const countryCode = data.country_code as string | undefined;
    const countryName = data.country_name as string | undefined;
    if (!countryCode || !countryName) return null;
    return { countryName, countryCode };
  } catch {
    return null;
  }
}

/**
 * Get region suggestion from country (IP-based). Returns null if country is English or not in our map.
 */
export function getSuggestionFromCountry(countryName: string, countryCode: string): RegionSuggestion | null {
  const code = countryCode.toUpperCase();
  const language = countryCodeToLanguage[code] ?? null;
  if (!language || language === 'en') return null;

  const languageName = languageDisplayNames[language];
  return { language, regionName: countryName, languageName };
}

/**
 * Get suggestion: first try IP-based country, then fall back to browser locale.
 * Call this after a delay (e.g. 5 seconds) so the popup doesn’t show immediately.
 */
export async function getRegionSuggestionAsync(): Promise<RegionSuggestion | null> {
  const fromIP = await getCountryFromIP();
  if (fromIP) {
    const suggestion = getSuggestionFromCountry(fromIP.countryName, fromIP.countryCode);
    if (suggestion) return suggestion;
  }
  return getRegionSuggestion();
}

/**
 * For testing: return a fixed suggestion (e.g. Arabic / UAE) so the popup can be shown without changing browser language.
 */
export function getTestSuggestion(): RegionSuggestion {
  return {
    language: 'ar',
    regionName: 'UAE',
    languageName: 'العربية',
  };
}
