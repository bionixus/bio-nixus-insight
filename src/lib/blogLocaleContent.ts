import type { PortableTextBlock } from '@portabletext/types';
import type { BlogPostCtaSection } from '@/types/blog';
import type { BlogArticleLocale } from '@/lib/blogPostUiStrings';
import type { BlogFaqItem } from '@/data/germanBlogFaq';
import {
  getGermanBlogFaqItems,
  localizeTocForGerman,
  resolveGermanExecutiveSummary,
} from '@/data/germanBlogFaq';
import { getGermanBlogCta } from '@/data/germanBlogCta';
import {
  getArabicBlogFaqItems,
  localizeTocForArabic,
  resolveArabicExecutiveSummary,
} from '@/data/arabicBlogFaq';
import { getArabicBlogCta } from '@/data/arabicBlogCta';
import {
  getGenericLocaleBlogCta,
  getGenericLocaleBlogFaq,
  getRelatedResearchLinksForLocale,
  localizeTocForGenericLocale,
  resolveGenericLocaleExecutiveSummary,
  type RelatedResearchLink,
} from '@/data/localizedBlogGeneric';

export type { RelatedResearchLink };
export { getRelatedResearchLinksForLocale };

export function getLocalizedBlogFaqItems(
  locale: BlogArticleLocale,
  slug: string | undefined,
  title: string | undefined,
  sanityFaq: BlogFaqItem[] = [],
): BlogFaqItem[] {
  if (locale === 'de') return getGermanBlogFaqItems(slug, title, sanityFaq);
  if (locale === 'ar') return getArabicBlogFaqItems(slug, title, sanityFaq);
  if (locale !== 'en') return getGenericLocaleBlogFaq(locale, title, sanityFaq);
  return sanityFaq;
}

export function getLocalizedBlogCta(
  locale: BlogArticleLocale,
  slug: string | undefined,
  sanityCta: BlogPostCtaSection | undefined | null,
): BlogPostCtaSection | undefined | null {
  if (locale === 'en') return sanityCta;
  if (locale === 'de') return getGermanBlogCta(slug, sanityCta);
  if (locale === 'ar') return getArabicBlogCta(slug, sanityCta);
  return getGenericLocaleBlogCta(locale, sanityCta);
}

export function resolveLocalizedExecutiveSummary(
  locale: BlogArticleLocale,
  title: string | undefined,
  slug: string | undefined,
  summary: string | PortableTextBlock[] | null,
): string | PortableTextBlock[] | null {
  if (locale === 'en') return summary;
  if (locale === 'de') return resolveGermanExecutiveSummary(title, slug, summary);
  if (locale === 'ar') return resolveArabicExecutiveSummary(title, slug, summary);
  return resolveGenericLocaleExecutiveSummary(locale, title, summary);
}

export function localizeTocForLocale<T extends { heading?: string; anchor?: string }>(
  locale: BlogArticleLocale,
  items: T[] | null | undefined,
): T[] | null {
  if (locale === 'en' || !items?.length) return items ?? null;
  if (locale === 'de') return localizeTocForGerman(items);
  if (locale === 'ar') return localizeTocForArabic(items);
  return localizeTocForGenericLocale(locale, items);
}
