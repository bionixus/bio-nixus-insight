import type { BlogPost } from '@/types/blog';
import type { Language } from '@/lib/i18n';
import { translations } from '@/lib/i18n';

const SITE_ORIGIN = 'https://www.bionixus.com';
const ORG_ID = `${SITE_ORIGIN}/#organization`;
const ORG_IMAGE = `${SITE_ORIGIN}/og-image.png`;

/** Matches the six cards in `ServicesSection` (paths align with on-page links). */
export const HOME_SERVICE_PATHS = [
  '/services/quantitative-research',
  '/services/qualitative-research',
  '/services/market-access',
  '/services/kol-stakeholder-mapping',
  '/healthcare-market-research',
  '/methodology',
] as const;

function toHttpsUrl(url: string): string {
  if (!url) return SITE_ORIGIN;
  try {
    const parsed = new URL(url, SITE_ORIGIN);
    parsed.protocol = 'https:';
    return parsed.toString();
  } catch {
    return SITE_ORIGIN;
  }
}

type ServiceItemShape = {
  title: string;
  description?: string;
  bullets?: string[];
};

function pickServiceItems(language: Language): ServiceItemShape[] {
  const items = translations[language].services.items as ServiceItemShape[];
  if (Array.isArray(items) && items.length >= HOME_SERVICE_PATHS.length) {
    return items;
  }
  return translations.en.services.items as ServiceItemShape[];
}

function buildServiceDescription(item: ServiceItemShape): string {
  const base = typeof item.description === 'string' ? item.description.trim() : '';
  const bullets =
    Array.isArray(item.bullets) && item.bullets.length > 0 ? item.bullets.map((b) => b.trim()).filter(Boolean).join(' ') : '';
  const combined = [base, bullets].filter(Boolean).join(' ').trim();
  return combined || base || item.title;
}

export function buildHomeServiceJsonLdNodes(language: Language): Record<string, unknown>[] {
  const items = pickServiceItems(language);
  const inLanguage = language;

  return HOME_SERVICE_PATHS.map((path, index) => {
    const item = items[index] ?? items[items.length - 1];
    const name = item.title?.trim() || 'Healthcare market research';
    const description = buildServiceDescription(item).slice(0, 8000);
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      url: toHttpsUrl(path),
      provider: { '@id': ORG_ID },
      serviceType: 'Healthcare market research',
      areaServed: 'EMEA',
      inLanguage,
    };
  });
}

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

function isRenderableHomeArticlePost(post: BlogPost): boolean {
  return Boolean(post.slug && !post.slug.startsWith('fallback-') && post.title?.trim());
}

export function buildHomeArticleJsonLdNodes(
  posts: BlogPost[] | undefined,
  language: Language,
): Record<string, unknown>[] {
  if (!Array.isArray(posts) || posts.length === 0) return [];
  const inLanguage = language;

  return posts.filter(isRenderableHomeArticlePost).map((post) => {
    const pageUrl = toHttpsUrl(`/blog/${post.slug}`);
    const published = toIsoDate(post.publishedAtIso) || toIsoDate(post.date) || new Date().toISOString();
    const modified = toIsoDate(post.updatedAtIso) || published;
    const imageCandidate = post.ogImage || post.coverImage;
    const image = imageCandidate ? toHttpsUrl(imageCandidate) : ORG_IMAGE;

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: pageUrl,
      headline: post.title.trim(),
      description: (post.excerpt || post.title).trim().slice(0, 5000),
      image: [image],
      author: {
        '@type': 'Person',
        name: post.authorName?.trim() || 'BioNixus Editorial',
      },
      datePublished: published,
      dateModified: modified,
      publisher: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'BioNixus',
        logo: {
          '@type': 'ImageObject',
          url: ORG_IMAGE,
        },
      },
      inLanguage,
    };
  });
}
