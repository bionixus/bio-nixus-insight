import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isSsrNotFoundPage } from '../../../../seo-noise-query.mjs';
import {
  KSA_GOV_CSAT_DISPLAY_TITLE,
  KSA_GOV_CSAT_HARDCODED_POST,
  KSA_GOV_CSAT_PATH,
  KSA_GOV_CSAT_SLUG,
} from '@/data/blog-government-customer-satisfaction-saudi-arabia';
import {
  IQVIA_UAE_PRIMARY_HARDCODED_POST,
  IQVIA_UAE_PRIMARY_PATH,
  IQVIA_UAE_PRIMARY_SLUG,
} from '@/data/blog-iqvia-alternative-uae-primary-research';
import { HEALTHCARE_BLOG_INDEX_PATH, INDUSTRIES_INSIGHTS_INDEX_PATH } from '@/lib/blog-content-silo';

const UNKNOWN_SLUG = 'this-slug-does-not-exist';
const UNKNOWN_PATH = `/bionixus-industries/insights/${UNKNOWN_SLUG}`;

function headFrom(helmet: { title: { toString(): string }; meta: { toString(): string }; link: { toString(): string }; script: { toString(): string } }): string {
  return [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
}

function metaContent(head: string, name: string): string[] {
  const re = new RegExp(`<meta[^>]*name="${name}"[^>]*>`, 'g');
  return [...head.matchAll(re)].map((match) => /content="([^"]*)"/.exec(match[0])?.[1] ?? '');
}

describe('industries insight slug SSR status', () => {
  beforeAll(() => {
    HelmetProvider.canUseDOM = false;
  });

  it('renders an unknown industries slug as a closest-page redirect shell', async () => {
    const result = await render(UNKNOWN_PATH, {
      pageType: 'blog-post',
      blogSlug: UNKNOWN_SLUG,
      blogPost: null,
      blogPostLookup: 'missing',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = headFrom(result.helmetData);
    expect(result.html).toContain(`data-slug-redirect="${INDUSTRIES_INSIGHTS_INDEX_PATH}"`);
    expect(result.html).not.toContain('This Slug Does Not Exist');
    expect(result.html).not.toContain('data-route-status="404"');
    expect(metaContent(head, 'prerender-status')).not.toContain('404');
    expect(isSsrNotFoundPage(head, result.html)).toBe(false);
  });

  it('keeps a known hardcoded industries post indexable', async () => {
    const result = await render(KSA_GOV_CSAT_PATH, {
      pageType: 'blog-post',
      blogSlug: KSA_GOV_CSAT_SLUG,
      blogPost: KSA_GOV_CSAT_HARDCODED_POST,
      blogPostLookup: 'found',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = headFrom(result.helmetData);
    const h1s = [...result.html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((match) =>
      match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    );
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(KSA_GOV_CSAT_DISPLAY_TITLE);
    expect(result.html).not.toContain('data-route-status="404"');
    expect(metaContent(head, 'robots')[0]).toMatch(/^index,follow/);
    expect(isSsrNotFoundPage(head, result.html)).toBe(false);
  });

  it('redirects a healthcare article requested on the industries path to its blog canonical', async () => {
    const result = await render(`/bionixus-industries/insights/${IQVIA_UAE_PRIMARY_SLUG}`, {
      pageType: 'blog-post',
      blogSlug: IQVIA_UAE_PRIMARY_SLUG,
      blogPost: IQVIA_UAE_PRIMARY_HARDCODED_POST,
      blogPostLookup: 'found',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = headFrom(result.helmetData);
    expect(result.html).toContain(`data-slug-redirect="${IQVIA_UAE_PRIMARY_PATH}"`);
    expect(result.html).not.toContain('data-route-status="404"');
    expect(isSsrNotFoundPage(head, result.html)).toBe(false);
  });

  it('keeps the soft-miss page when the Sanity lookup failed', async () => {
    const result = await render(UNKNOWN_PATH, {
      pageType: 'blog-post',
      blogSlug: UNKNOWN_SLUG,
      blogPost: null,
      blogPostLookup: 'error',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = headFrom(result.helmetData);
    expect(result.html).toContain('This Slug Does Not Exist');
    expect(result.html).not.toContain('data-slug-redirect');
    expect(result.html).not.toContain('data-route-status="404"');
    expect(isSsrNotFoundPage(head, result.html)).toBe(false);
  });

  it('renders an unknown /blog/ slug as a closest-page redirect shell', async () => {
    const result = await render(`/blog/${UNKNOWN_SLUG}`, {
      pageType: 'blog-post',
      blogSlug: UNKNOWN_SLUG,
      blogPost: null,
      blogPostLookup: 'missing',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = headFrom(result.helmetData);
    expect(result.html).toContain(`data-slug-redirect="${HEALTHCARE_BLOG_INDEX_PATH}"`);
    expect(result.html).not.toContain('This Slug Does Not Exist');
    expect(result.html).not.toContain('data-route-status="404"');
    expect(isSsrNotFoundPage(head, result.html)).toBe(false);
  });
});
