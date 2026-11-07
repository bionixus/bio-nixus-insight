import { describe, expect, it, vi, beforeEach } from 'vitest';

vi.mock('@/lib/sanity-server', () => ({
  sanityServer: {},
}));

vi.mock('@/lib/sanity-case-studies', () => ({
  fetchCaseStudies: vi.fn(async () => []),
  fetchCaseStudyBySlug: vi.fn(async () => null),
}));

vi.mock('@/lib/sanity-blog', () => ({
  fetchSanityPostBySlugWithClient: vi.fn(async () => null),
  fetchSanityPostsWithClient: vi.fn(async () => []),
  fetchSanityLatestInsightsWithClient: vi.fn(async () => []),
  fetchIndustriesInsightsWithClient: vi.fn(async () => []),
  fetchRelatedPostsWithClient: vi.fn(async () => ({ related: [], prev: null, next: null })),
  applySanityShareImages: vi.fn((h: unknown) => h),
}));

vi.mock('@/data/blog-posts-index', () => ({
  getHardcodedPostBySlug: vi.fn(() => null),
}));

import { fetchRouteData } from '@/data/fetchRouteData';

describe('fetchRouteData localized blog posts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.each(['de', 'fr', 'es', 'pt', 'ru', 'zh', 'ar'])(
    'returns blog-post pageType for /%s/blog/:slug',
    async (lang) => {
      const data = await fetchRouteData(`/${lang}/blog/example-slug-2026`);
      expect(data.pageType).toBe('blog-post');
      expect(data.blogSlug).toBe('example-slug-2026');
    },
  );

  it('does not treat generic paths as blog posts', async () => {
    const data = await fetchRouteData('/de/services');
    expect(data.pageType).not.toBe('blog-post');
  });
});
