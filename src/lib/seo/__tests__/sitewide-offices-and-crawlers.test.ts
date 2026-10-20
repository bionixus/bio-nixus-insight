import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { buildGoogleLocalBusiness } from '@/lib/seo/googleReviewsSchema';
import {
  applyLatamOfficeFacts,
  HEADLINE,
  SUBHEADLINE,
} from '../../../../scripts/data/press-release-brazil-latam-2026.mjs';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  headers: Array<{ source: string; headers: Array<{ key: string; value: string }> }>;
  rewrites: Array<{ source: string; destination: string; has?: unknown[] }>;
  redirects: Array<{ source: string; destination: string; statusCode?: number }>;
};

describe('office roster', () => {
  it('keeps six Google addresses and labels leadership versus field offices', () => {
    expect(GOOGLE_OFFICES.map((office) => office.id)).toEqual(['us', 'uk', 'eg', 'ae', 'sa', 'kw']);
    expect(GOOGLE_OFFICES.filter((office) => office.tier === 'leadership').map((office) => office.id)).toEqual([
      'us',
      'uk',
      'eg',
    ]);
    expect(GOOGLE_OFFICES.filter((office) => office.tier === 'field').map((office) => office.id)).toEqual([
      'ae',
      'sa',
      'kw',
    ]);
    const org = buildCanonicalOrganization();
    const addresses = org.address as Array<{ addressLocality: string; streetAddress: string }>;
    expect(addresses.map((address) => address.addressLocality)).toEqual([
      'Sheridan',
      'London',
      'Sheikh Zayed',
      'Dubai',
      'Al Khobar',
      'Salmiya',
    ]);
    expect(JSON.stringify(org)).not.toContain('São Paulo');
    const locations = org.location as Array<{ description: string; address: { streetAddress: string } }>;
    expect(locations.map((place) => place.description)).toEqual(GOOGLE_OFFICES.map(officeRoleLabel));
    expect(locations.every((place) => place.address.streetAddress.length > 0)).toBe(true);
    const dubai = buildGoogleLocalBusiness(GOOGLE_OFFICES.find((office) => office.id === 'ae')!);
    expect(dubai.department).toEqual({ '@type': 'Organization', name: 'Field office' });
    const sheridan = buildGoogleLocalBusiness(GOOGLE_OFFICES.find((office) => office.id === 'us')!);
    expect((sheridan.department as { name: string }).name).toContain('US headquarters');
  });
});

describe('LATAM press copy', () => {
  it('replaces the Sanity claim that a São Paulo office already opened', () => {
    const corrected = applyLatamOfficeFacts({
      slug: 'bionixus-brazil-office-latam-expansion-2026',
      headline: 'BioNixus Expands Latin America Presence with São Paulo Office Opening in Q2 2026',
      subheadline: 'New Brazil hub strengthens quantitative research.',
      body: [{ _type: 'block' }],
    }) as { headline: string; subheadline: string; body: unknown };
    expect(corrected.headline).toBe(HEADLINE);
    expect(corrected.subheadline).toBe(SUBHEADLINE);
    expect(JSON.stringify(corrected)).not.toMatch(/Q2 2026|Brazil hub|São Paulo hub/);
    expect(corrected.subheadline).toContain('in the process of opening a São Paulo office by the end of 2026');
    expect(Array.isArray(corrected.body)).toBe(true);
  });
});

describe('home-staging and blog crawler routing', () => {
  it('returns 410 for /home-staging, keeps the content file, and omits it from the sitemap', () => {
    const html = readFileSync(join(root, 'public/home-staging.html'), 'utf8');
    expect(html.length).toBeGreaterThan(200);
    expect(html).toContain('<meta name="robots" content="noindex, nofollow">');
    const server = readFileSync(join(root, 'server.js'), 'utf8');
    expect(server).toContain("app.get(['/home-staging', '/home-staging/', '/home-staging.html']");
    expect(server).toContain('res.status(410)');
    const gone = vercel.redirects.filter(
      (entry) => entry.source === '/home-staging' || entry.source === '/home-staging.html' || entry.source === '/home-staging/',
    );
    expect(gone.map((entry) => entry.statusCode)).toEqual([410, 410, 410]);
    expect(vercel.rewrites.some((entry) => entry.source === '/home-staging' || entry.source === '/home-staging.html')).toBe(
      false,
    );
    const header = vercel.headers.find((entry) => entry.source === '/home-staging');
    expect(header?.headers).toEqual([{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]);
    const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
    expect(sitemap).not.toContain('home-staging');
  });

  it('sends every crawler /blog/:slug hit to the full SSR function', () => {
    const crawler = vercel.rewrites.find(
      (rewrite) => rewrite.source === '/blog/:slug' && Array.isArray(rewrite.has),
    );
    expect(crawler?.destination).toBe('/api/indexnow-key?__ssr=1&url=/blog/:slug');
    const stubRoutes = vercel.rewrites.filter((rewrite) => rewrite.destination.startsWith('/api/blog/'));
    for (const post of hardcodedSeoPosts) {
      expect(stubRoutes.some((rewrite) => rewrite.source.includes(post.slug))).toBe(false);
    }
  });
});
