import { describe, expect, it, vi } from 'vitest';
import type { SanityClient } from '@sanity/client';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { socialArticle as egyptArticle } from '@/data/blog-egypt-eda-decree-480-drug-pricing-2026';
import {
  applySanityShareImages,
  fetchSanityPostBySlugWithClient,
} from '@/lib/sanity-blog';
import type { BlogPost } from '@/types/blog';

const OG = 'https://cdn.sanity.io/images/h2whvvpo/production/og-1200x630.jpg';
const MAIN = 'https://cdn.sanity.io/images/h2whvvpo/production/main-1200x630.jpg';

describe('applySanityShareImages', () => {
  it('prefers Sanity ogImage, then mainImage, when the hardcoded post has no cover', () => {
    const base = { ...egyptArticle, ogImage: undefined, coverImage: undefined } as BlogPost;
    const fromOg = applySanityShareImages(base, {
      ...base,
      ogImage: OG,
      ogImageAlt: 'OG alt',
      coverImage: MAIN,
      coverImageAlt: 'Main alt',
    });
    expect(fromOg.ogImage).toBe(OG);
    expect(fromOg.coverImage).toBe(OG);
    expect(fromOg.ogImageAlt).toBe('OG alt');
    expect(fromOg.title).toBe(egyptArticle.title);

    const fromMain = applySanityShareImages(base, {
      ...base,
      ogImage: undefined,
      coverImage: MAIN,
      coverImageAlt: 'Main alt',
    });
    expect(fromMain.ogImage).toBe(MAIN);
    expect(fromMain.coverImage).toBe(MAIN);
    expect(fromMain.coverImageAlt).toBe('Main alt');
  });

  it('keeps a local cover instead of replacing it with Sanity', () => {
    const local = 'https://www.bionixus.com/images/blog/local-cover.jpg';
    const merged = applySanityShareImages(
      { ...egyptArticle, ogImage: local, coverImage: local, ogImageAlt: 'Local' },
      { ...egyptArticle, ogImage: OG, coverImage: MAIN },
    );
    expect(merged.ogImage).toBe(local);
    expect(merged.coverImage).toBe(local);
  });
});

describe('fetchSanityPostBySlugWithClient share images', () => {
  it('keeps hardcoded copy and attaches Sanity ogImage for the hero and og:image', async () => {
    const client = {
      fetch: vi.fn(async () => ({
        _id: 'sanity-egypt',
        title: 'Sanity title that must not replace the page',
        slug: egyptArticle.slug,
        bodyHtml: '<p>Sanity body that must not replace the page</p>',
        ogImageUrl: OG,
        ogImageAlt: 'Navy and gold Egypt cover',
        coverImage: MAIN,
        coverImageAlt: 'Main alt',
      })),
    } as unknown as SanityClient;

    const post = await fetchSanityPostBySlugWithClient(egyptArticle.slug, client);
    expect(client.fetch).toHaveBeenCalled();
    expect(post?.title).toBe(egyptArticle.title);
    expect(String(post?.body)).not.toContain('Sanity body');
    expect(post?.ogImage).toBe(OG);
    expect(post?.coverImage).toBe(OG);
    expect(post?.ogImageAlt).toBe('Navy and gold Egypt cover');
  });
});

describe('blog hero prefers Sanity ogImage', () => {
  it('renders one og:image pointing at cdn.sanity.io and uses it as the hero', async () => {
    HelmetProvider.canUseDOM = false;
    const result = await render(`/blog/${egyptArticle.slug}`, {
      pageType: 'blog-post',
      blogSlug: egyptArticle.slug,
      blogPost: {
        ...egyptArticle,
        ogImage: OG,
        ogImageAlt: 'Navy and gold Egypt cover',
        coverImage: MAIN,
        coverImageAlt: 'Main alt',
      },
      blogPostLookup: 'found',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = result.helmetData?.meta?.toString() ?? '';
    const images = [...head.matchAll(/property="og:image" content="([^"]+)"/g)].map((match) =>
      match[1].replace(/&amp;/g, '&'),
    );
    expect(images).toEqual([`${OG}?w=1200&h=630&fit=crop&fm=jpg&q=90`]);
    expect(head).toContain('property="og:image:alt" content="Navy and gold Egypt cover"');
    expect(result.html).toContain('Navy and gold Egypt cover');
    expect(result.html).toContain('cdn.sanity.io/images/h2whvvpo/production/og-1200x630.jpg');
    expect(result.html).not.toContain('og-image.png');
  });
});
