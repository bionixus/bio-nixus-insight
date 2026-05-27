import type { Language } from '@/lib/i18n';
import { getLocalizedPathForLanguage } from '@/lib/seo';

/** Localized path for methodology page internal links (honours `localizedRouteGroups` when present). */
export function methodologyLocalizedPath(lang: Language, canonicalEnglishPath: string): string {
  const p = canonicalEnglishPath.startsWith('/') ? canonicalEnglishPath : `/${canonicalEnglishPath}`;
  return getLocalizedPathForLanguage(p, lang);
}
