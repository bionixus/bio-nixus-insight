import { describe, expect, it } from 'vitest';
import type { BlogPost } from '@/types/blog';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import {
  ALL_COUNTRIES,
  ALL_TOPICS,
  blogIndexFiltersFromSearchParams,
  buildFilterOptions,
  filterBlogPosts,
  searchParamsForBlogIndexFilters,
} from '@/lib/blog-index-filters';
import { postBlogFilterKey, resolvePinnedBlogRegion } from '@/lib/blog-region-filters';
import {
  ALL_INDUSTRIES,
  ALL_SEGMENTS,
  filterIndustriesInsightsPosts,
} from '@/lib/industries-insights-filters';

function post(partial: Partial<BlogPost> & Pick<BlogPost, 'slug' | 'country'>): BlogPost {
  return {
    id: partial.slug,
    title: partial.title ?? partial.slug,
    excerpt: partial.excerpt ?? '',
    date: partial.date ?? '2026-01-01',
    category: partial.category ?? 'Market Access',
    ...partial,
  };
}

describe('blog region filters', () => {
  it('maps United States and USA aliases to USA', () => {
    for (const country of ['United States', 'USA', 'US', 'U.S.', 'U.S.A.', 'United States of America']) {
      expect(resolvePinnedBlogRegion(country), country).toBe('USA');
    }
    expect(postBlogFilterKey(post({ slug: 'gazyva-primary-membranous-nephropathy-fda-approval-2026', country: 'United States' }))).toBe('USA');
    expect(postBlogFilterKey(post({ slug: 'region-only', country: '', region: 'United States' }))).toBe('USA');
  });

  it('maps Canada, Latin America, and Asia-Pacific countries', () => {
    expect(resolvePinnedBlogRegion('Canada')).toBe('Canada');
    for (const country of ['Brazil', 'Brasil', 'Mexico', 'México', 'Argentina', 'Colombia', 'Chile', 'Peru', 'LATAM', 'Latin America']) {
      expect(resolvePinnedBlogRegion(country), country).toBe('LATAM');
    }
    for (const country of [
      'China',
      'Japan',
      'India',
      'Singapore',
      'Vietnam',
      'Viet Nam',
      'Korea',
      'South Korea',
      'Australia',
      'New Zealand',
      'Southeast Asia',
      'South East Asia',
      'APAC',
      'Asia-Pacific',
      'Japan and China',
    ]) {
      expect(resolvePinnedBlogRegion(country), country).toBe('APAC');
    }
  });

  it('leaves existing region labels on their own filters', () => {
    for (const country of ['Global', 'GCC', 'MENA', 'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Egypt', 'Europe', 'Global / GCC', 'GCC and MENA', 'Europe and UK']) {
      expect(resolvePinnedBlogRegion(country), country).toBeNull();
      expect(postBlogFilterKey(post({ slug: country, country }))).toBe(country);
    }
  });

  it('shows the four regions even when none of the posts match, in the existing alphabetical order', () => {
    const options = buildFilterOptions(
      [
        post({ slug: 'ksa', country: 'Saudi Arabia' }),
        post({ slug: 'eg', country: 'Egypt' }),
        post({ slug: 'us', country: 'United States' }),
        post({ slug: 'br', country: 'Brazil' }),
      ],
      'country',
    );
    expect(options.map((option) => `${option.value}:${option.count}`)).toEqual([
      'APAC:0',
      'Canada:0',
      'Egypt:1',
      'LATAM:1',
      'Saudi Arabia:1',
      'USA:1',
    ]);
  });

  it('filters the Gazyva example into USA and keeps an empty Canada result', () => {
    const posts = [
      post({
        slug: 'gazyva-primary-membranous-nephropathy-fda-approval-2026',
        title: 'Gazyva FDA approval',
        country: 'United States',
      }),
      post({ slug: 'gcc-note', country: 'Global / GCC' }),
      post({ slug: 'brazil-note', country: 'Brazil' }),
      post({ slug: 'china-note', country: 'Japan and China' }),
    ];
    expect(filterBlogPosts(posts, { search: '', country: 'USA', topic: ALL_TOPICS }).map((item) => item.slug)).toEqual([
      'gazyva-primary-membranous-nephropathy-fda-approval-2026',
    ]);
    expect(filterBlogPosts(posts, { search: '', country: 'United States', topic: ALL_TOPICS })).toHaveLength(1);
    expect(filterBlogPosts(posts, { search: '', country: 'Canada', topic: ALL_TOPICS })).toEqual([]);
    expect(filterBlogPosts(posts, { search: '', country: 'LATAM', topic: ALL_TOPICS }).map((item) => item.slug)).toEqual(['brazil-note']);
    expect(filterBlogPosts(posts, { search: 'apac', country: ALL_COUNTRIES, topic: ALL_TOPICS }).map((item) => item.slug)).toEqual(['china-note']);
  });

  it('keeps the industries listing on the same country buckets', () => {
    const posts = [
      post({ slug: 'sg', country: 'Singapore', contentSilo: 'industries' }),
      post({ slug: 'ca', country: 'Canada', contentSilo: 'industries' }),
    ];
    const latam = filterIndustriesInsightsPosts(posts, {
      search: '',
      country: 'APAC',
      topic: ALL_TOPICS,
      segment: ALL_SEGMENTS,
      industry: ALL_INDUSTRIES,
    });
    expect(latam.map((item) => item.slug)).toEqual(['sg']);
  });

  it('round-trips country, topic, and search in the query string', () => {
    const params = searchParamsForBlogIndexFilters(new URLSearchParams('utm=1'), {
      search: 'fda',
      country: 'USA',
      topic: 'Market Access',
    });
    expect(params.get('utm')).toBe('1');
    expect(blogIndexFiltersFromSearchParams(params)).toEqual({
      search: 'fda',
      country: 'USA',
      topic: 'Market Access',
    });
    const cleared = searchParamsForBlogIndexFilters(params, {
      search: '',
      country: ALL_COUNTRIES,
      topic: ALL_TOPICS,
    });
    expect(cleared.get('country')).toBeNull();
    expect(cleared.get('utm')).toBe('1');
  });

  it('rolls hardcoded src/data posts into the new regions by their country field', () => {
    const grouped = hardcodedSeoPosts.filter((item) =>
      ['USA', 'Canada', 'LATAM', 'APAC'].includes(postBlogFilterKey(item)),
    );
    expect(grouped.some((item) => item.country === 'United States' && postBlogFilterKey(item) === 'USA')).toBe(true);
    expect(grouped.some((item) => item.country === 'Brazil' && postBlogFilterKey(item) === 'LATAM')).toBe(true);
    expect(grouped.some((item) => (item.country === 'China' || item.country === 'Singapore' || item.country === 'Japan and China') && postBlogFilterKey(item) === 'APAC')).toBe(true);
    expect(hardcodedSeoPosts.filter((item) => item.country === 'GCC').every((item) => postBlogFilterKey(item) === 'GCC')).toBe(true);
  });
});
