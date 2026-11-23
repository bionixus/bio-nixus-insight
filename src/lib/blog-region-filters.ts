import type { BlogPost } from '@/types/blog';

/**
 * Region buckets added to the blog country filter.
 * Order here is the editorial list. The dropdown sorts these with every other
 * country label using the same localeCompare order as the existing options.
 */
export const PINNED_BLOG_REGIONS = ['USA', 'Canada', 'LATAM', 'APAC'] as const;

export type PinnedBlogRegion = (typeof PINNED_BLOG_REGIONS)[number];

const USA = new Set(['usa', 'us', 'united states', 'united states of america']);

const CANADA = new Set(['canada']);

const LATAM = new Set([
  'latam',
  'latin america',
  'south america',
  'central america',
  'brazil',
  'brasil',
  'mexico',
  'argentina',
  'colombia',
  'chile',
  'peru',
  'ecuador',
  'venezuela',
  'bolivia',
  'paraguay',
  'uruguay',
  'guyana',
  'suriname',
  'french guiana',
  'costa rica',
  'panama',
  'guatemala',
  'honduras',
  'el salvador',
  'nicaragua',
  'belize',
  'cuba',
  'dominican republic',
  'haiti',
  'puerto rico',
  'jamaica',
  'trinidad and tobago',
]);

const APAC = new Set([
  'apac',
  'asia pacific',
  'southeast asia',
  'south east asia',
  'asean',
  'china',
  'prc',
  'peoples republic of china',
  'japan',
  'india',
  'singapore',
  'vietnam',
  'viet nam',
  'korea',
  'south korea',
  'north korea',
  'republic of korea',
  'australia',
  'new zealand',
  'indonesia',
  'malaysia',
  'thailand',
  'philippines',
  'taiwan',
  'hong kong',
  'hong kong sar',
  'cambodia',
  'laos',
  'myanmar',
  'burma',
  'bangladesh',
  'sri lanka',
  'nepal',
  'mongolia',
  'brunei',
  'macau',
  'macao',
  'papua new guinea',
  'fiji',
]);

function normalizeGeoToken(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[.'’]/g, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function regionForToken(value: string): PinnedBlogRegion | null {
  const token = normalizeGeoToken(value);
  if (!token) return null;
  if (LATAM.has(token)) return 'LATAM';
  if (APAC.has(token)) return 'APAC';
  if (USA.has(token)) return 'USA';
  if (CANADA.has(token)) return 'Canada';
  return null;
}

function splitGeoLabel(value: string): string[] {
  return value
    .split(/\s*(?:,|&|\/|·|\band\b)\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * Map a Sanity country or region string onto USA, Canada, LATAM, or APAC.
 * Compound labels roll up only when every part belongs to the same bucket,
 * so "Japan and China" is APAC and "Global / GCC" stays untouched.
 */
export function resolvePinnedBlogRegion(value: string | null | undefined): PinnedBlogRegion | null {
  if (!value?.trim()) return null;
  const direct = regionForToken(value);
  if (direct) return direct;
  const parts = splitGeoLabel(value);
  if (parts.length <= 1) return null;
  const mapped = parts.map((part) => regionForToken(part));
  const first = mapped[0];
  if (!first || mapped.some((item) => item !== first)) return null;
  return first;
}

/**
 * Filter key for a post. A pinned region on either the country or region field
 * wins over the raw country label. Mixed or unrecognised labels stay as written.
 */
export function postBlogFilterKey(post: Pick<BlogPost, 'country' | 'region'>): string {
  const country = post.country?.trim() ?? '';
  const region = post.region?.trim() ?? '';
  const countryRollup = country ? resolvePinnedBlogRegion(country) : null;
  const regionRollup = region ? resolvePinnedBlogRegion(region) : null;
  if (regionRollup && countryRollup && regionRollup !== countryRollup) return regionRollup;
  if (countryRollup) return countryRollup;
  if (regionRollup) return regionRollup;
  return country || region;
}
