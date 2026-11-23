import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { buildIndustryMatrixRoutes } from '@/data/industryMatrixRoutes';
import { DEDICATED_INDUSTRY_LISTICLE_PATHS } from '@/data/industry-listicle-clusters';
import {
  HEALTHCARE_LIST_MERGE_DATE,
  formatHealthcareListDate,
} from '@/data/topCompanies/dedicatedHealthcareGuide';
import { fitBrandedSeoTitle } from '@/lib/seo-meta';
import { isSsrNotFoundPage } from '../../../../seo-noise-query.mjs';

const RESIDENCY_SLUG = 'health-data-residency-gcc-mena-research-2026';

const PAGES = [
  {
    path: '/insights/top-healthcare-market-research-companies-egypt-2026',
    h1: 'Top Healthcare Market Research Company in Egypt: 2026 Guide',
    title: 'Healthcare Market Research Companies Egypt 2026 | BioNixus',
    meta: 'Healthcare market research in Egypt, 2026: BioNixus runs physician, KOL, patient and EDA/UHI access studies from its Cairo AMEA office. Proposal in 48h.',
    datePublished: '2026-06-12',
    places: 'Cairo · Alexandria · Upper Egypt',
    links: [
      '/egypt-healthcare-market-research',
      '/insights/top-pharmaceutical-market-research-companies-egypt-2026',
      '/insights/top-market-research-companies-egypt-2026',
      '/egypt-obesity-market',
      '/egypt-healthcare-market-report',
      '/insights/top-healthcare-market-research-companies-mena-2026',
      '/methodology',
      '/client-reviews',
      '/contact',
    ],
  },
  {
    path: '/insights/top-healthcare-market-research-companies-qatar-2026',
    h1: 'Top Healthcare Market Research Company in Qatar: 2026 Guide',
    title: 'Healthcare Market Research Companies Qatar 2026 | BioNixus',
    meta: 'Healthcare market research in Qatar, 2026: BioNixus runs physician, KOL, patient and MoPH and HMC access studies from its Cairo AMEA office. Proposal in 48h.',
    datePublished: '2026-06-11',
    places: 'Doha',
    links: [
      '/healthcare-market-research/qatar',
      '/insights/top-pharmaceutical-market-research-companies-qatar-2026',
      '/insights/top-market-research-companies-qatar-2026',
      '/qatar-market-access-research',
      '/qatar-healthcare-market-report',
      '/insights/top-healthcare-market-research-companies-mena-2026',
      '/methodology',
      '/client-reviews',
      '/contact',
    ],
  },
  {
    path: '/insights/top-healthcare-market-research-companies-oman-2026',
    h1: 'Top Healthcare Market Research Company in Oman: 2026 Guide',
    title: 'Healthcare Market Research Companies Oman 2026 | BioNixus',
    meta: 'Healthcare market research in Oman, 2026: BioNixus runs physician, KOL, patient and MoH access studies from its Cairo AMEA office. Proposal in 48 hours.',
    datePublished: '2026-06-11',
    places: 'Muscat',
    links: [
      '/healthcare-market-research/oman',
      '/insights/top-pharmaceutical-market-research-companies-oman-2026',
      '/insights/top-market-research-companies-oman-2026',
      '/pharmaceutical-market-research-oman',
      '/oman-healthcare-market-report',
      '/insights/top-healthcare-market-research-companies-mena-2026',
      '/methodology',
      '/client-reviews',
      '/contact',
    ],
  },
  {
    path: '/insights/top-healthcare-market-research-companies-bahrain-2026',
    h1: 'Top Healthcare Market Research Company in Bahrain: 2026 Guide',
    title: 'Healthcare Market Research Companies Bahrain 2026 | BioNixus',
    meta: 'Healthcare market research in Bahrain, 2026: BioNixus runs physician, KOL, patient and NHRA access studies from its Cairo AMEA office. Proposal in 48h.',
    datePublished: '2026-06-11',
    places: 'Manama',
    links: [
      '/healthcare-market-research/bahrain',
      '/insights/top-pharmaceutical-market-research-companies-bahrain-2026',
      '/insights/top-market-research-companies-bahrain-2026',
      '/pharmaceutical-market-research-bahrain',
      '/bahrain-healthcare-market-report',
      '/insights/top-healthcare-market-research-companies-mena-2026',
      '/methodology',
      '/client-reviews',
      '/contact',
    ],
  },
] as const;

type JsonLdNode = Record<string, unknown>;

function headFrom(result: Awaited<ReturnType<typeof render>>): string {
  return [result.helmetData.title, result.helmetData.meta, result.helmetData.link, result.helmetData.script]
    .map((part) => part.toString())
    .join('\n');
}

function jsonLd(head: string): JsonLdNode[] {
  return [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}

function visibleMain(html: string): string {
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? '';
  return main.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

describe('dedicated GCC and Egypt healthcare guides', () => {
  const rendered = new Map<string, { html: string; head: string; nodes: JsonLdNode[] }>();

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const page of PAGES) {
      const result = await render(page.path);
      rendered.set(page.path, { html: result.html, head: headFrom(result), nodes: jsonLd(headFrom(result)) });
    }
  }, 180_000);

  it('keeps these paths off the generic matrix template', () => {
    const matrixPaths = new Set(buildIndustryMatrixRoutes().map((route) => route.path));
    for (const page of PAGES) {
      expect(DEDICATED_INDUSTRY_LISTICLE_PATHS.has(page.path), page.path).toBe(true);
      expect(matrixPaths.has(page.path), page.path).toBe(false);
    }
  });

  it('renders the guide copy, organization author, and merge-day dates', () => {
    const reviewed = formatHealthcareListDate(HEALTHCARE_LIST_MERGE_DATE);
    for (const page of PAGES) {
      const view = rendered.get(page.path)!;
      const text = visibleMain(view.html);
      const h1s = [...view.html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((match) =>
        match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      );
      expect(h1s, page.path).toEqual([page.h1]);
      expect(view.head, page.path).toContain(`>${page.title}</title>`);
      expect(fitBrandedSeoTitle(page.title, 60, 'BioNixus', 'strict')).toBe(page.title);
      expect(page.title.length, page.path).toBeLessThanOrEqual(60);
      expect(view.head, page.path).toContain(`content="${page.meta}"`);
      expect(page.meta.length, page.path).toBeGreaterThanOrEqual(150);
      expect(page.meta.length, page.path).toBeLessThanOrEqual(160);
      expect(view.head, page.path).toContain(`rel="canonical" href="https://www.bionixus.com${page.path}"`);
      expect(text, page.path).toContain(`Last reviewed ${reviewed}`);
      expect(text, page.path).toContain(page.places);
      expect(text, page.path).toContain('BioNixus at a glance');
      expect(text, page.path).toContain('82,000+');
      expect(text, page.path).toContain('3,200');
      expect(text, page.path).toContain('127 studies in 2026');
      expect(text, page.path).toContain('120 in 2025');
      expect(text, page.path).not.toContain('120+');
      expect(view.html.match(/<details[\s>]/g)?.length ?? 0, page.path).toBe(6);
      expect(view.html, page.path).not.toContain('id="comparison"');
      const profile = view.html.match(/id="firm-profiles"[\s\S]*?<\/section>/)?.[0] ?? '';
      const profileHeads = [...profile.matchAll(/<h3[\s>][\s\S]*?<\/h3>/g)].map((match) =>
        match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      );
      expect(profileHeads, page.path).toEqual(['BioNixus']);
      for (const link of page.links) {
        expect(view.html, `${page.path} ${link}`).toContain(`href="${link}"`);
      }

      const article = view.nodes.find((node) => node['@type'] === 'Article');
      const webpage = view.nodes.find((node) => node['@type'] === 'WebPage' && node['@id'] === `https://www.bionixus.com${page.path}#webpage`);
      const faq = view.nodes.find((node) => node['@type'] === 'FAQPage');
      expect(article?.headline, page.path).toBe(page.h1);
      expect(article?.dateModified, page.path).toBe(HEALTHCARE_LIST_MERGE_DATE);
      expect(article?.datePublished, page.path).toBe(page.datePublished);
      expect(article?.author, page.path).toMatchObject({ '@type': 'Organization', name: 'BioNixus' });
      expect(JSON.stringify(article?.author), page.path).not.toContain('Person');
      expect(webpage?.dateModified, page.path).toBe(HEALTHCARE_LIST_MERGE_DATE);
      expect(webpage?.name, page.path).toBe(page.title);
      expect((faq?.mainEntity as unknown[] | undefined)?.length, page.path).toBe(6);

      expect(text, page.path).not.toMatch(/\u2014/);
      expect(text, page.path).not.toMatch(/\bbest\b/i);
      expect(text, page.path).not.toMatch(/\bleading\b/i);
      expect(text, page.path).not.toMatch(/\bindependent\b/i);
      expect(text, page.path).not.toMatch(/top-ranked|#1|guarantee|120\+|Dawaa|Italy/i);
      expect(text, page.path).not.toMatch(/IQVIA|Kantar|Nielsen|Ipsos|Euromonitor|Infomine|Accsight/i);
    }
  });
});

describe('unpublished health-data residency slug', () => {
  beforeAll(() => {
    HelmetProvider.canUseDOM = false;
  });

  it('returns a normal 404 shell instead of a closest-page redirect', async () => {
    const result = await render(`/blog/${RESIDENCY_SLUG}`, {
      pageType: 'blog-post',
      blogSlug: RESIDENCY_SLUG,
      blogPost: null,
      blogPostLookup: 'missing',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = headFrom(result);
    expect(result.html).toContain('data-route-status="404"');
    expect(result.html).not.toContain('data-slug-redirect');
    expect(result.html).not.toContain('/blog/mental-health-market-research-saudi-arabia');
    expect(isSsrNotFoundPage(head, result.html)).toBe(true);
  });
});
