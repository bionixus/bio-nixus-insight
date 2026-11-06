import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { GCC_PHARMACOECONOMICS_SLUG } from '@/data/blog-gcc-pharmacoeconomics';

const fetchSanityPostBySlugWithClient = vi.fn();
const fetchRelatedPostsWithClient = vi.fn();

vi.mock('@/lib/sanity-server', () => ({
  sanityServer: { fetch: vi.fn() },
}));

vi.mock('@/lib/sanity-blog', () => ({
  fetchSanityPostBySlugWithClient: (...args: unknown[]) => fetchSanityPostBySlugWithClient(...args),
  fetchRelatedPostsWithClient: (...args: unknown[]) => fetchRelatedPostsWithClient(...args),
  fetchSanityPostsWithClient: vi.fn(),
  fetchSanityLatestInsightsWithClient: vi.fn(),
  fetchIndustriesInsightsWithClient: vi.fn(),
  applySanityShareImages: (hardcoded: unknown) => hardcoded,
}));

describe('fetchRouteData localized blog paths', () => {
  beforeEach(() => {
    fetchSanityPostBySlugWithClient.mockReset();
    fetchRelatedPostsWithClient.mockReset();
    fetchSanityPostBySlugWithClient.mockResolvedValue(null);
    fetchRelatedPostsWithClient.mockResolvedValue({ related: [], prev: null, next: null });
  });

  it('returns blog-post initial data for /de/blog/:slug (SSR fix)', async () => {
    const { fetchRouteData } = await import('../fetchRouteData');
    const data = await fetchRouteData(`/de/blog/${GCC_PHARMACOECONOMICS_SLUG}`);
    expect(data.pageType).toBe('blog-post');
    expect(data.blogSlug).toBe(GCC_PHARMACOECONOMICS_SLUG);
    expect(data.blogPost).toBeTruthy();
  });

  it('returns blog-post initial data for /fr/blog/:slug', async () => {
    const { fetchRouteData } = await import('../fetchRouteData');
    const data = await fetchRouteData(`/fr/blog/${GCC_PHARMACOECONOMICS_SLUG}`);
    expect(data.pageType).toBe('blog-post');
    expect(data.blogPost).toBeTruthy();
  });

  it('SSR renders an h1 for /de/blog/:slug', async () => {
    HelmetProvider.canUseDOM = false;
    const { fetchRouteData } = await import('../fetchRouteData');
    const { render } = await import('@/entry-server');
    const path = `/de/blog/${GCC_PHARMACOECONOMICS_SLUG}`;
    const initialData = await fetchRouteData(path);
    const { html } = await render(path, initialData);
    expect(html.match(/<h1[\s>]/gi)?.length ?? 0).toBeGreaterThanOrEqual(1);
    expect(html).toContain('<main');
  }, 120_000);
});
