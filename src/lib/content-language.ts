import type { Language } from '@/lib/i18n';
import {
  getHtmlLangAttributes as getHtmlLangAttributesRaw,
  getJsonLdInLanguage as getJsonLdInLanguageRaw,
  getOgLocaleAlternatesForLanguage as getOgLocaleAlternatesForLanguageRaw,
  getOgLocaleForLanguage as getOgLocaleForLanguageRaw,
  normalizeContentLanguage as normalizeContentLanguageRaw,
} from '../../lib/content-language.mjs';

export type ContentLanguage = Language;

export function normalizeContentLanguage(
  postLanguage?: string | null,
  uiLanguage: Language = 'en',
): ContentLanguage {
  return normalizeContentLanguageRaw(postLanguage ?? uiLanguage, uiLanguage) as ContentLanguage;
}

export function resolveBlogContentLanguage(
  postLanguage?: string | null,
  uiLanguage: Language = 'en',
): ContentLanguage {
  if (postLanguage?.trim()) {
    return normalizeContentLanguageRaw(postLanguage, uiLanguage) as ContentLanguage;
  }
  return uiLanguage;
}

export function getHtmlLangAttributes(language: ContentLanguage) {
  return getHtmlLangAttributesRaw(language);
}

export function getOgLocaleForContentLanguage(language: ContentLanguage): string {
  return getOgLocaleForLanguageRaw(language);
}

export function getOgLocaleAlternatesForContentLanguage(language: ContentLanguage): string[] {
  return getOgLocaleAlternatesForLanguageRaw(language);
}

export function getJsonLdInLanguage(language: ContentLanguage): ContentLanguage {
  return getJsonLdInLanguageRaw(language) as ContentLanguage;
}
