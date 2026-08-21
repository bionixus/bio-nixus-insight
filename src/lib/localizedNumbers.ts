import type { Language } from './i18n';

const CHINESE_DIGITS = '零一二三四五六七八九';
const CHINESE_UNITS = ['', '十', '百', '千'];

/** Converts 0–9999 to Chinese numerals (38 → 三十八, 127 → 一百二十七, 108 → 一百零八). */
export function toChineseNumeral(value: number): string {
  if (!Number.isFinite(value)) return String(value);
  const n = Math.trunc(value);
  if (n < 0) return `负${toChineseNumeral(-n)}`;
  if (n === 0) return '零';

  const digits = String(n);
  if (digits.length > CHINESE_UNITS.length) return String(n);

  let out = '';
  let pendingZero = false;
  for (let i = 0; i < digits.length; i += 1) {
    const digit = Number(digits[i]);
    const unitIndex = digits.length - 1 - i;
    if (digit === 0) {
      pendingZero = true;
      continue;
    }
    if (pendingZero && out) out += CHINESE_DIGITS[0];
    pendingZero = false;
    // Idiomatic Chinese drops the leading "一" in the teens: 15 is 十五, not 一十五.
    const isLeadingTen = digit === 1 && unitIndex === 1 && i === 0;
    if (!isLeadingTen) out += CHINESE_DIGITS[digit];
    out += CHINESE_UNITS[unitIndex];
  }
  return out;
}

const NUMBER_LOCALES: Record<Language, string> = {
  en: 'en-GB',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-BR',
  ru: 'ru-RU',
  zh: 'zh-CN',
  ar: 'ar-EG',
};

/** Renders a whole number in the active language, using Chinese numerals on the zh locale. */
export function formatLocalizedNumber(value: number, language: Language): string {
  if (language === 'zh') return toChineseNumeral(value);
  return value.toLocaleString(NUMBER_LOCALES[language]);
}

/**
 * Renders a decimal such as a review score. Chinese has no idiomatic numeral form for
 * decimals, so the integer part is spelled out and the fraction follows digit by digit.
 */
export function formatLocalizedDecimal(
  value: number,
  language: Language,
  fractionDigits = 1,
): string {
  if (language !== 'zh') {
    return value.toLocaleString(NUMBER_LOCALES[language], {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    });
  }
  const [whole, fraction = ''] = value.toFixed(fractionDigits).split('.');
  const spelledFraction = [...fraction].map((d) => CHINESE_DIGITS[Number(d)]).join('');
  return spelledFraction
    ? `${toChineseNumeral(Number(whole))}点${spelledFraction}`
    : toChineseNumeral(Number(whole));
}
