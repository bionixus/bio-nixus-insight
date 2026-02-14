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
 * Get suggestion using browser locale detection (no external API call).
 * Uses navigator.language which is fast, reliable, and avoids rate-limit errors
 * from third-party geolocation services.
 */
export async function getRegionSuggestionAsync(): Promise<RegionSuggestion | null> {
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
