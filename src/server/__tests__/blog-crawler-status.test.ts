import { beforeEach, describe, expect, it, vi } from 'vitest';

const fetchMock = vi.hoisted(() => vi.fn());

vi.mock('@sanity/client', () => ({
  createClient: () => ({ fetch: fetchMock }),
}));

import handler from '../../../api/blog/[slug].js';

function mockRes() {
  const headers = new Map<string, string>();
  const res = {
    statusCode: 200,
    body: '',
    headers,
    setHeader(name: string, value: string) {
      headers.set(name.toLowerCase(), value);
      return this;
    },
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    send(payload: unknown) {
      this.body = Buffer.isBuffer(payload) ? payload.toString('utf8') : String(payload);
      return this;
    },
    redirect(code: number, url: string) {
      this.statusCode = code;
      this.body = url;
      return this;
    },
  };
  return res;
}

function run(slug: string) {
  const req = { query: { slug }, headers: { 'accept-encoding': '' } };
  const res = mockRes();
  return handler(req, res).then(() => res);
}

describe('api/blog crawler status', () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  it('returns 404 with noindex when the slug is genuinely missing', async () => {
    fetchMock.mockResolvedValue(null);
    const res = await run('missing-blog-slug-not-in-stubs');
    expect(res.statusCode).toBe(404);
    expect(res.headers.get('x-robots-tag')).toBe('noindex, follow');
    expect(res.headers.get('retry-after')).toBeUndefined();
    expect(res.body).toContain('noindex, follow');
    expect(res.body).toContain('rel="canonical" href="https://www.bionixus.com/blog/missing-blog-slug-not-in-stubs"');
  });

  it('returns 503 without noindex when Sanity fails', async () => {
    fetchMock.mockRejectedValue(new Error('sanity unavailable'));
    const res = await run('kol-mapping-pharma-middle-east');
    expect(res.statusCode).toBe(503);
    expect(res.headers.get('retry-after')).toBe('120');
    expect(res.headers.get('cache-control')).toBe('private, no-store');
    expect(res.headers.get('x-robots-tag')).toBeUndefined();
    expect(res.body).not.toContain('noindex');
    expect(res.body).toContain('Article temporarily unavailable');
    expect(res.body).toContain('rel="canonical" href="https://www.bionixus.com/blog/kol-mapping-pharma-middle-east"');
  });

  it('returns 200 indexable stubs for hardcoded posts missing from Sanity', async () => {
    fetchMock.mockResolvedValue(null);
    const slugs = [
      'uae-healthcare-market-trends-2026',
      'nf1-koselugo-selumetinib-pharma-market-research',
      'market-research-companies-egypt',
      'medtech-singapore-2026-market-hsa-registration',
      'turkey-pharmaceutical-market-2026-titck-top-companies',
      'nmpa-class-iii-registration-timeline-2026',
      'china-device-vbp-rounds-explained',
    ];
    for (const slug of slugs) {
      const res = await run(slug);
      expect(res.statusCode, slug).toBe(200);
      expect(res.body, slug).toContain('name="robots" content="index, follow"');
      expect(res.body, slug).toContain(`rel="canonical" href="https://www.bionixus.com/blog/${slug}"`);
    }
  });

  it('301s the truncated Kresladi slug to the live article', async () => {
    const res = await run('kresladi-marnetegragene-lad1-fda-');
    expect(res.statusCode).toBe(301);
    expect(res.body).toContain('/blog/kresladi-marnetegragene-lad1-fda-2026');
  });

  it('returns 200 indexable HTML with the CTR title when the post exists', async () => {
    fetchMock.mockResolvedValue({
      title: 'KOL Mapping for Pharma Companies in the Middle East: Complete Guide',
      body: 'Peer nomination and hospital hierarchies for Middle East KOLs.',
      publishedAt: '2026-07-13',
    });
    const res = await run('kol-mapping-pharma-middle-east');
    expect(res.statusCode).toBe(200);
    expect(res.body).toContain('<title>KOL Mapping Guide for Middle East Pharma | BioNixus</title>');
    expect(res.body).toContain('name="robots" content="index, follow"');
    expect(res.body).toContain('rel="canonical" href="https://www.bionixus.com/blog/kol-mapping-pharma-middle-east"');
    expect(res.body).toContain('"dateModified":"2026-09-29"');
    expect(res.headers.get('retry-after')).toBeUndefined();
  });
});
