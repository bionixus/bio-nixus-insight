import type { SanityClient } from '@sanity/client';
import { describe, expect, it, vi } from 'vitest';
import { EU_GCC_ENTRY_PATH } from '@/data/blog-europe-to-gcc-market-entry-research';
import { IQVIA_UAE_PRIMARY_HARDCODED_POST, IQVIA_UAE_PRIMARY_PATH, IQVIA_UAE_PRIMARY_SLUG } from '@/data/blog-iqvia-alternative-uae-primary-research';
import { NIELSEN_KSA_PATH, NIELSEN_KSA_SLUG } from '@/data/blog-nielsen-alternative-saudi-arabia';
import { HEMATOLOGY_KSA_PATH, HEMATOLOGY_KSA_SLUG } from '@/data/blog-hematology-market-research-saudi-arabia';
import { NUPCO_TENDER_PATH } from '@/data/blog-nupco-tender-market-research-saudi-arabia';
import { KSA_GOV_CSAT_HARDCODED_POST, KSA_GOV_CSAT_PATH } from '@/data/blog-government-customer-satisfaction-saudi-arabia';
import { HEALTHCARE_BLOG_INDEX_PATH, INDUSTRIES_INSIGHTS_INDEX_PATH } from '@/lib/blog-content-silo';
import { closestKnownPostPath, missingArticleRedirect } from '@/lib/missing-article-redirect';
import { fetchSanityPostBySlugWithClient } from '@/lib/sanity-blog';

const UNKNOWN_SLUG = 'this-slug-does-not-exist';

describe('closestKnownPostPath', () => {
  it('sends a keyword overlap to the closest known article', () => {
    expect(closestKnownPostPath('nielsen-alternative-ksa', `/bionixus-industries/insights/nielsen-alternative-ksa`)).toBe(NIELSEN_KSA_PATH);
    expect(closestKnownPostPath('nupco-tender-oncology', '/blog/nupco-tender-oncology')).toBe(NUPCO_TENDER_PATH);
    expect(closestKnownPostPath('nupco-oncology-tender', '/blog/nupco-oncology-tender')).toBe(NUPCO_TENDER_PATH);
    expect(closestKnownPostPath('europe-gcc-entry', '/bionixus-industries/insights/europe-gcc-entry')).toBe(EU_GCC_ENTRY_PATH);
    expect(closestKnownPostPath('europe-gcc-entry', '/blog/europe-gcc-entry')).toBe(EU_GCC_ENTRY_PATH);
  });

  it('returns the canonical of an exact known slug when the request path differs', () => {
    expect(
      closestKnownPostPath(IQVIA_UAE_PRIMARY_SLUG, `/bionixus-industries/insights/${IQVIA_UAE_PRIMARY_SLUG}`),
    ).toBe(IQVIA_UAE_PRIMARY_PATH);
  });

  it('returns null when no distinctive overlap is reasonable', () => {
    expect(closestKnownPostPath(UNKNOWN_SLUG, `/blog/${UNKNOWN_SLUG}`)).toBeNull();
    expect(closestKnownPostPath('kol', '/blog/kol')).toBeNull();
  });

  it('does not return the request path itself', () => {
    expect(closestKnownPostPath(HEMATOLOGY_KSA_SLUG, HEMATOLOGY_KSA_PATH)).toBeNull();
    expect(closestKnownPostPath(NIELSEN_KSA_SLUG, NIELSEN_KSA_PATH)).not.toBe(NIELSEN_KSA_PATH);
  });
});

describe('missingArticleRedirect', () => {
  it('301s an unknown industries slug to the closest page or the insights hub', () => {
    expect(
      missingArticleRedirect({
        pathname: '/bionixus-industries/insights/nielsen-alternative-ksa',
        slug: 'nielsen-alternative-ksa',
        lookup: 'missing',
        post: null,
      }),
    ).toEqual({ pageType: 'redirect', statusCode: 301, redirectTo: NIELSEN_KSA_PATH });

    expect(
      missingArticleRedirect({
        pathname: `/bionixus-industries/insights/${UNKNOWN_SLUG}`,
        slug: UNKNOWN_SLUG,
        lookup: 'missing',
        post: null,
      }),
    ).toEqual({ pageType: 'redirect', statusCode: 301, redirectTo: INDUSTRIES_INSIGHTS_INDEX_PATH });
  });

  it('301s an unknown blog slug to the closest page or /blog', () => {
    expect(
      missingArticleRedirect({
        pathname: '/blog/nupco-tender-oncology',
        slug: 'nupco-tender-oncology',
        lookup: 'missing',
        post: null,
      }),
    ).toEqual({ pageType: 'redirect', statusCode: 301, redirectTo: NUPCO_TENDER_PATH });

    expect(
      missingArticleRedirect({
        pathname: `/blog/${UNKNOWN_SLUG}`,
        slug: UNKNOWN_SLUG,
        lookup: 'missing',
        post: null,
      }),
    ).toEqual({ pageType: 'redirect', statusCode: 301, redirectTo: HEALTHCARE_BLOG_INDEX_PATH });
  });

  it('301s a healthcare article requested on the industries path to its canonical', () => {
    expect(
      missingArticleRedirect({
        pathname: `/bionixus-industries/insights/${IQVIA_UAE_PRIMARY_SLUG}`,
        slug: IQVIA_UAE_PRIMARY_SLUG,
        lookup: 'found',
        post: IQVIA_UAE_PRIMARY_HARDCODED_POST,
      }),
    ).toEqual({ pageType: 'redirect', statusCode: 301, redirectTo: IQVIA_UAE_PRIMARY_PATH });
  });

  it('301s an industries article requested under /blog/ to its insights path', () => {
    expect(
      missingArticleRedirect({
        pathname: `/blog/${NIELSEN_KSA_SLUG}`,
        slug: NIELSEN_KSA_SLUG,
        lookup: 'found',
        post: { slug: NIELSEN_KSA_SLUG, contentSilo: 'industries', seoCanonicalUrl: `https://www.bionixus.com${NIELSEN_KSA_PATH}` },
      }),
    ).toEqual({ pageType: 'redirect', statusCode: 301, redirectTo: NIELSEN_KSA_PATH });
  });

  it('renders a post that is already on its silo path', () => {
    expect(
      missingArticleRedirect({
        pathname: KSA_GOV_CSAT_PATH,
        slug: KSA_GOV_CSAT_HARDCODED_POST.slug,
        lookup: 'found',
        post: KSA_GOV_CSAT_HARDCODED_POST,
      }),
    ).toBeNull();
    expect(
      missingArticleRedirect({
        pathname: IQVIA_UAE_PRIMARY_PATH,
        slug: IQVIA_UAE_PRIMARY_SLUG,
        lookup: 'found',
        post: IQVIA_UAE_PRIMARY_HARDCODED_POST,
      }),
    ).toBeNull();
  });

  it('does not redirect when the Sanity lookup failed', () => {
    expect(
      missingArticleRedirect({
        pathname: `/bionixus-industries/insights/${UNKNOWN_SLUG}`,
        slug: UNKNOWN_SLUG,
        lookup: 'error',
        post: null,
      }),
    ).toBeNull();
    expect(
      missingArticleRedirect({
        pathname: `/blog/${UNKNOWN_SLUG}`,
        slug: UNKNOWN_SLUG,
        lookup: 'error',
        post: null,
      }),
    ).toBeNull();
  });

  it('leaves Arabic blog addresses unchanged', () => {
    expect(
      missingArticleRedirect({
        pathname: `/ar/blog/${UNKNOWN_SLUG}`,
        slug: UNKNOWN_SLUG,
        lookup: 'missing',
        post: null,
      }),
    ).toBeNull();
  });
});

describe('fetchSanityPostBySlugWithClient outage', () => {
  it('rethrows when Sanity fails and there is no hardcoded fallback', async () => {
    const client = {
      fetch: vi.fn(async () => {
        throw new Error('sanity outage');
      }),
    } as unknown as SanityClient;
    await expect(fetchSanityPostBySlugWithClient(UNKNOWN_SLUG, client)).rejects.toThrow('sanity outage');
  });

  it('still returns a hardcoded SEO post when Sanity is down', async () => {
    const client = {
      fetch: vi.fn(async () => {
        throw new Error('sanity outage');
      }),
    } as unknown as SanityClient;
    const post = await fetchSanityPostBySlugWithClient(NIELSEN_KSA_SLUG, client);
    expect(post?.slug).toBe(NIELSEN_KSA_SLUG);
    expect(client.fetch).toHaveBeenCalled();
  });
});
