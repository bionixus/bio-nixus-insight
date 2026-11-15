import { describe, expect, it } from 'vitest';
import { STATS, STATS_PROJECTS_PHRASE, STATS_STUDIES_YEAR_LABEL } from '@/lib/companyStats';
import { BIONIXUS_MARKETING_CLAIMS } from '@/data/marketingClaims';
import { homePageHardcoded } from '@/lib/homePageHardcoded';
import {
  buildCreateDocument,
  buildPatchFields,
  omitDottedKeys,
} from '../scripts/publish-social-articles-2026-10-18.mjs';

const article = {
  slug: 'medicare-globe-model-part-b-account-level-2027',
  title: 'Medicare GLOBE',
  bodyHtml: '<p>Body</p>',
  excerpt: 'Excerpt',
  tableOfContents: [],
  faq: [],
  sources: [],
  publishedAtIso: '2026-10-18T00:00:00.000Z',
  updatedAtIso: '2026-10-18T00:00:00.000Z',
  readingTime: 8,
  tags: ['medicare'],
  ctaSection: { headline: 'Talk to us', buttonLabel: 'Contact', buttonUrl: 'https://www.bionixus.com/contact' },
  category: 'Market Access',
  country: 'United States',
  seoMetaTitle: 'Medicare GLOBE Model: A Guide for Part B Brand Teams',
  seoMetaDescription: 'What Part B brand teams need before the 2027 GLOBE model.',
  focusKeyword: 'medicare globe model',
  keywords: ['medicare', 'globe'],
  seoCanonicalUrl: 'https://www.bionixus.com/blog/medicare-globe-model-part-b-account-level-2027',
  ogTitle: 'Medicare GLOBE Model',
  ogDescription: 'Part B brand guide',
};

describe('verified study counts', () => {
  it('keeps 127 in 2026 year-to-date and 120 in 2025', () => {
    expect(STATS.studies2025).toBe('120');
    expect(STATS.studies2026Ytd).toBe('127');
    expect(STATS.projectsAnnual).toBe('120+');
    expect(STATS_PROJECTS_PHRASE).toBe('120+ studies a year (120 in 2025; 127 in 2026 YTD)');
    expect(STATS_PROJECTS_PHRASE).not.toContain('127 in 2025');
    expect(STATS_STUDIES_YEAR_LABEL).toBe('studies a year (127 in 2026 YTD)');
    expect(BIONIXUS_MARKETING_CLAIMS.studies2025.value).toBe('120');
    expect(BIONIXUS_MARKETING_CLAIMS.studies2026Ytd.value).toBe('127');
  });

  it('uses the year-split label on the about industries block', () => {
    expect(homePageHardcoded.en.industriesGateway.stats[0]).toEqual({
      value: '120+',
      label: 'studies a year (127 in 2026 YTD)',
    });
    for (const locale of Object.values(homePageHardcoded)) {
      const stat = locale.industriesGateway.stats[0];
      expect(stat.value).not.toMatch(/127\+|١٢٧\+|一百二十七/);
      expect(stat.label.toLowerCase()).not.toContain('127 in 2025');
    }
  });
});

describe('social article Sanity create payload', () => {
  it('drops dotted keys on create and keeps them on patch', () => {
    const created = buildCreateDocument(article, 'author-1', 'category-1');
    const patched = buildPatchFields(article, 'author-1', 'category-1');

    expect(Object.keys(created).some((key) => key.includes('.'))).toBe(false);
    expect(created.seo.focusKeyword).toBe(article.focusKeyword);
    expect(created.seo.metaTitle).toBe(article.seoMetaTitle);
    expect(created.openGraph.ogTitle).toBe(article.ogTitle);
    expect(created.openGraph.ogDescription).toBe(article.ogDescription);
    expect(created._id).toBe(`social-2026-10-18.${article.slug}`);
    expect(created.slug.current).toBe(article.slug);

    expect(patched['seo.focusKeyword']).toBe(article.focusKeyword);
    expect(patched['seo.metaTitle']).toBe(article.seoMetaTitle);
    expect(patched['openGraph.ogTitle']).toBe(article.ogTitle);
    expect(patched['openGraph.ogDescription']).toBe(article.ogDescription);
    expect(omitDottedKeys(patched)['seo.focusKeyword']).toBeUndefined();
  });

  it('uses one document id per slug so a re-run cannot create a second post', () => {
    const first = buildCreateDocument(article, 'author-1', null);
    const second = buildCreateDocument(article, 'author-1', null);
    expect(first._id).toBe(second._id);
    expect(first.slug).toEqual(second.slug);
  });
});
