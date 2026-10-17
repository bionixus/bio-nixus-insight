import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { analyticsPagePath } from '@/lib/analytics';
import {
  canonicalRedirectTarget,
  isAttributionQueryKey,
  publicPathFromRewrite,
} from '../../../../seo-noise-query.mjs';

const CONTACT_UTM =
  '/contact?utm_source=linkedin&utm_medium=newsletter&utm_campaign=test';
const BLOG_UTM =
  '/blog/nupco-tender-market-research-saudi-arabia?utm_source=linkedin&utm_medium=newsletter&utm_campaign=test&gclid=abc&fbclid=def';

describe('attribution query is not a redirect', () => {
  it('keeps utm, gclid, and fbclid on the URL', () => {
    expect(isAttributionQueryKey('utm_source')).toBe(true);
    expect(isAttributionQueryKey('utm_id')).toBe(true);
    expect(isAttributionQueryKey('gclid')).toBe(true);
    expect(isAttributionQueryKey('fbclid')).toBe(true);
    expect(isAttributionQueryKey('path')).toBe(false);

    for (const input of [CONTACT_UTM, BLOG_UTM]) {
      const target = canonicalRedirectTarget(input);
      expect(target.changed).toBe(false);
      expect(target.full).toBe(input);
    }
  });

  it('drops a leaked path capture and keeps the campaign query', () => {
    const target = canonicalRedirectTarget(
      '/blog/nupco-tender-market-research-saudi-arabia?utm_source=linkedin&path=blog/nupco-tender-market-research-saudi-arabia',
    );
    expect(target.changed).toBe(true);
    expect(target.full).toBe(
      '/blog/nupco-tender-market-research-saudi-arabia?utm_source=linkedin',
    );
    expect(target.full).not.toContain('path=');
  });

  it('still strips internal flags and a trailing slash without dropping utm', () => {
    expect(canonicalRedirectTarget('/contact?__ssr=1').full).toBe('/contact');
    expect(canonicalRedirectTarget('/contact?trk=newsletter').full).toBe('/contact');
    expect(canonicalRedirectTarget('/contact/?utm_source=linkedin').full).toBe(
      '/contact?utm_source=linkedin',
    );
  });

  it('does not copy the rewrite capture onto the public URL', () => {
    const pub = publicPathFromRewrite('/blog/rare-disease-market-research-saudi-arabia', {
      __ssr: '1',
      url: '/blog/rare-disease-market-research-saudi-arabia',
      path: 'blog/rare-disease-market-research-saudi-arabia',
      splat: 'blog/rare-disease-market-research-saudi-arabia',
      utm_source: 'linkedin',
      utm_medium: 'newsletter',
      utm_campaign: 'test',
      gclid: 'abc',
    });
    expect(pub).toBe(
      '/blog/rare-disease-market-research-saudi-arabia?utm_source=linkedin&utm_medium=newsletter&utm_campaign=test&gclid=abc',
    );
    expect(canonicalRedirectTarget(pub).changed).toBe(false);
    expect(pub).not.toContain('path=');
  });
});

describe('analytics reads the query before any cleanup', () => {
  it('includes utm parameters in the page path', () => {
    expect(
      analyticsPagePath({
        pathname: '/contact',
        search: '?utm_source=linkedin&utm_medium=newsletter&utm_campaign=test',
      }),
    ).toBe(CONTACT_UTM);
    expect(
      analyticsPagePath({
        pathname: '/blog/nupco-tender-market-research-saudi-arabia',
        search: '?gclid=abc&fbclid=def',
      }),
    ).toContain('gclid=abc');
  });
});

describe('SSR canonical ignores the campaign query', () => {
  beforeAll(() => {
    HelmetProvider.canUseDOM = false;
  });

  async function canonical(url: string): Promise<string> {
    const result = await render(url, { pageType: 'generic' });
    const head = [result.helmetData.title, result.helmetData.meta, result.helmetData.link, result.helmetData.script]
      .map((part) => part.toString())
      .join('\n');
    return /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/.exec(head)?.[1]
      ?? /<link[^>]*href="([^"]+)"[^>]*rel="canonical"/.exec(head)?.[1]
      ?? '';
  }

  it('serves a clean canonical for contact and a deep blog URL', async () => {
    expect(await canonical(CONTACT_UTM)).toBe('https://www.bionixus.com/contact');
    const blogCanonical = await canonical(BLOG_UTM);
    expect(blogCanonical).toBe(
      'https://www.bionixus.com/blog/nupco-tender-market-research-saudi-arabia',
    );
    expect(blogCanonical).not.toContain('utm_');
    expect(blogCanonical).not.toContain('path=');
  });
});

describe('vercel routing does not name the capture path', () => {
  const vercel = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8')) as {
    redirects: Array<{ source: string; destination: string; has?: Array<{ key?: string }> }>;
    rewrites: Array<{ source: string; destination: string }>;
  };

  it('has no utm or click-id redirect and no :path capture', () => {
    const blob = JSON.stringify(vercel);
    expect(blob).not.toContain(':path');
    expect(blob).not.toContain('?path=');
    for (const redirect of vercel.redirects) {
      const keys = (redirect.has ?? []).map((rule) => rule.key);
      expect(keys).not.toContain('utm_source');
      expect(keys).not.toContain('gclid');
      expect(keys).not.toContain('fbclid');
    }
    const catchAll = vercel.rewrites.find((rule) => rule.destination.includes('url=/:splat'));
    expect(catchAll?.source).toBe('/:splat((?!api/).*)');
    expect(catchAll?.destination).toBe('/api/indexnow-key?__ssr=1&url=/:splat');
  });
});
