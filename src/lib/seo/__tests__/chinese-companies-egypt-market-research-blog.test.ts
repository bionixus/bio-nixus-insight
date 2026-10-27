import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { INDUSTRIES_INSIGHT_EDITORIAL_LINKS } from '@/lib/blog-content-silo';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import { stripDefaultOrganizationJsonLd } from '../../../../lib/strip-industries-insights-org.mjs';
import {
  CN_EGYPT_BODY_HTML,
  CN_EGYPT_COVER_IMAGE,
  CN_EGYPT_COVER_IMAGE_ALT,
  CN_EGYPT_COVER_PENDING,
  CN_EGYPT_DISPLAY_SUBTITLE,
  CN_EGYPT_DISPLAY_TITLE,
  CN_EGYPT_EXECUTIVE_SUMMARY_HTML,
  CN_EGYPT_FAQ,
  CN_EGYPT_HARDCODED_POST,
  CN_EGYPT_HERO_IMAGE,
  CN_EGYPT_HERO_IMAGE_ALT,
  CN_EGYPT_META_DESCRIPTION,
  CN_EGYPT_META_TITLE,
  CN_EGYPT_PATH,
  CN_EGYPT_REFERENCES,
  CN_EGYPT_SLUG,
  CN_EGYPT_TABLE_OF_CONTENTS,
  CN_EGYPT_TAGS,
  CN_EGYPT_URL,
  CN_EGYPT_WORD_COUNT,
  countWords,
} from '@/data/blog-chinese-companies-egypt-market-research';

const PHRASE = 'chinese companies egypt market research';
const GULF_CHINA_PATH = '/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae';
const SAO_PAULO_PHRASE = 'in the process of opening a São Paulo office by the end of 2026';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
const ssrFunctionSource = readFileSync(join(root, 'api/indexnow-key.ts'), 'utf8');
const serverSource = readFileSync(join(root, 'server.js'), 'utf8');

type JsonLdNode = Record<string, any>;

function text(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function metaContent(head: string, attr: 'property' | 'name', key: string): string[] {
  const re = new RegExp(`<meta[^>]*${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g');
  return [...head.matchAll(re)].map((m) => /content="([^"]*)"/.exec(m[0])?.[1] ?? '');
}

let html = '';
let head = '';
let jsonLd: JsonLdNode[] = [];

beforeAll(async () => {
  HelmetProvider.canUseDOM = false;
  const result = await render(CN_EGYPT_PATH, {
    pageType: 'blog-post',
    blogSlug: CN_EGYPT_SLUG,
    blogPost: CN_EGYPT_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/bionixus-industries/insights/chinese-companies-egypt-market-research: server render', () => {
  it('ships the full article, the FAQ and one h1 that is the full article title', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(CN_EGYPT_DISPLAY_TITLE);
    expect(h1s[0]).toContain(CN_EGYPT_DISPLAY_SUBTITLE);
    const visible = text(html);
    expect(visible.toLowerCase()).toContain(PHRASE);
    expect(visible).toContain('industry insights hub');
    expect(visible).toContain('References');
    for (const item of CN_EGYPT_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1800);
  });

  it('uses the hero path in the page and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${CN_EGYPT_HERO_IMAGE}"`);
    expect(html).toContain(`alt="${CN_EGYPT_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${CN_EGYPT_COVER_IMAGE}"`);
    expect(CN_EGYPT_HARDCODED_POST.ogImage).toBe(CN_EGYPT_COVER_IMAGE);
    expect(CN_EGYPT_HARDCODED_POST.ogImageAlt).toBe(CN_EGYPT_COVER_IMAGE_ALT);
  });

  it('emits the industries BreadcrumbList even without a visible breadcrumbLabel trail', () => {
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Industries',
      'Industry Insights',
      CN_EGYPT_DISPLAY_TITLE,
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${CN_EGYPT_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([CN_EGYPT_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${CN_EGYPT_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${CN_EGYPT_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([CN_EGYPT_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([CN_EGYPT_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([CN_EGYPT_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([CN_EGYPT_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-17T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-18T13:30:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Armela Belba']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['B2B Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(CN_EGYPT_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([CN_EGYPT_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([CN_EGYPT_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([CN_EGYPT_COVER_IMAGE_ALT]);
  });
});

describe('/bionixus-industries/insights/chinese-companies-egypt-market-research: JSON-LD', () => {
  const byType = (type: string) => jsonLd.filter((node) => node['@type'] === type);

  it('emits only valid, parseable nodes of every required type', () => {
    const types = jsonLd.map((node) => node['@type']);
    for (const type of ['BlogPosting', 'BreadcrumbList', 'WebPage', 'Organization', 'FAQPage']) {
      expect(types).toContain(type);
    }
    expect(types).not.toContain('ItemList');
    for (const node of jsonLd) {
      expect(node['@context']).toBe('https://schema.org');
      expect(isValidSchemaNode(node)).toBe(true);
    }
  });

  it('fills BlogPosting as the Article node, with an ImageObject cover linked to the WebPage', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(CN_EGYPT_DISPLAY_TITLE);
    expect(article.description).toBe(CN_EGYPT_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-17T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-18T13:30:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('B2B Market Research');
    expect(article.keywords).toBe(CN_EGYPT_TAGS.join(', '));
    expect(article.wordCount).toBe(CN_EGYPT_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${CN_EGYPT_URL}#webpage`,
      url: CN_EGYPT_URL,
    });
    expect(article.about).toEqual(
      expect.arrayContaining([
        { '@type': 'Thing', name: 'Market entry research' },
        { '@type': 'Thing', name: 'Market research' },
        { '@type': 'Country', name: 'Egypt' },
        { '@type': 'Country', name: 'China' },
      ]),
    );
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${CN_EGYPT_URL}#primaryimage`,
      url: `https://www.bionixus.com${CN_EGYPT_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: CN_EGYPT_COVER_IMAGE_ALT,
    });
    expect(article.author).toEqual({
      '@type': 'Person',
      name: 'Armela Belba',
      jobTitle: 'Global Research Manager',
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    });
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${CN_EGYPT_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${CN_EGYPT_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${CN_EGYPT_URL}#breadcrumb` });
  });

  it('keeps the Organization node to the verified facts and all six labelled offices', () => {
    const orgs = byType('Organization');
    expect(orgs).toHaveLength(1);
    const pageOrg = orgs.find((node) => typeof node.description === 'string' && node.description.includes('127 studies'));
    expect(pageOrg).toBeDefined();
    expect(pageOrg!['@id']).toBe('https://www.bionixus.com/#organization');
    expect(pageOrg!.foundingDate).toBe('2012');
    expect(pageOrg!.slogan).toBe('Guaranteed in writing.');
    for (const fact of ['118 clients', '48 countries', '127 studies', '$10,000 to $60,000', 'Field offices']) {
      expect(pageOrg!.description).toContain(fact);
    }
    expect(pageOrg!.description).not.toMatch(/3,200 physicians|guaranteed accuracy/i);
    const localities = pageOrg!.address.map((address: JsonLdNode) => address.addressLocality);
    expect(localities).toEqual(['Sheridan', 'London', 'Sheikh Zayed', 'Dubai', 'Al Khobar', 'Salmiya']);
    const labels = pageOrg!.location.map((place: JsonLdNode) => place.description);
    expect(labels).toEqual([
      'Americas office and global HQ',
      'Europe office',
      'AMEA (APAC, Middle East, Africa) office',
      'field office for UAE',
      'partner office for KSA',
      'field office for Kuwait',
    ]);
    for (const listed of GOOGLE_OFFICES) expect(pageOrg!.sameAs).toContain(listed.mapsUrl);
    expect(pageOrg!.sameAs).toContain('https://www.linkedin.com/company/bionixus/');
  });

  it('mentions São Paulo only as an office being opened, never as an address or Place', () => {
    const countMentions = (value: string) => value.split('São Paulo').length - 1;
    const countPhrase = (value: string) => value.split(SAO_PAULO_PHRASE).length - 1;
    const visible = text(html);
    expect(countPhrase(visible)).toBe(1);
    expect(countMentions(visible)).toBe(countPhrase(visible));
    const graph = JSON.stringify(jsonLd);
    expect(countPhrase(graph)).toBeGreaterThanOrEqual(1);
    expect(countMentions(graph)).toBe(countPhrase(graph));
    const places = jsonLd.flatMap((node) => [...JSON.stringify(node).matchAll(/"addressLocality":"([^"]+)"/g)]);
    expect(places.map((match) => match[1])).not.toContain('São Paulo');
  });

  it('keeps São Paulo out of the sitewide Organization block', () => {
    expect(JSON.stringify(buildCanonicalOrganization())).not.toContain('São Paulo');
    expect(indexHtml).not.toContain('São Paulo');
  });

  it('drops the template Organization from this page only', () => {
    const page = stripDefaultOrganizationJsonLd(indexHtml, CN_EGYPT_PATH);
    expect(page).toContain('<!-- org-schema:start --><!-- org-schema:end -->');
    expect(page).not.toMatch(/"Organization"|Al Khobar|Salmiya/);
    expect(stripDefaultOrganizationJsonLd(indexHtml, '/blog/turkey-pharmaceutical-market-2026-titck-top-companies')).toBe(
      indexHtml,
    );
    for (const source of [ssrFunctionSource, serverSource]) {
      expect(source).toMatch(/stripDefaultOrganizationJsonLd\(/);
    }
  });

  it('mirrors the visible FAQ exactly in FAQPage', () => {
    const [faq] = byType('FAQPage');
    expect(
      faq.mainEntity.map((question: JsonLdNode) => ({
        question: question.name,
        answer: question.acceptedAnswer.text,
      })),
    ).toEqual(CN_EGYPT_FAQ);
    expect(CN_EGYPT_FAQ).toHaveLength(7);
  });
});

describe('/bionixus-industries/insights/chinese-companies-egypt-market-research: copy rules', () => {
  const allCopy = [
    CN_EGYPT_EXECUTIVE_SUMMARY_HTML,
    CN_EGYPT_BODY_HTML,
    JSON.stringify(CN_EGYPT_FAQ),
    JSON.stringify(CN_EGYPT_HARDCODED_POST.ctaSection),
    JSON.stringify(CN_EGYPT_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(CN_EGYPT_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(CN_EGYPT_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(CN_EGYPT_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(CN_EGYPT_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(CN_EGYPT_WORD_COUNT).toBeGreaterThanOrEqual(1600);
    expect(CN_EGYPT_WORD_COUNT).toBeLessThanOrEqual(3200);
    expect(getCtrSeo(CN_EGYPT_PATH)).toEqual({
      title: CN_EGYPT_META_TITLE,
      description: CN_EGYPT_META_DESCRIPTION,
    });
    expect(getCtrSeo(`/blog/${CN_EGYPT_SLUG}`)).toEqual({
      title: CN_EGYPT_META_TITLE,
      description: CN_EGYPT_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(CN_EGYPT_SLUG)).toEqual({
      title: CN_EGYPT_META_TITLE,
      description: CN_EGYPT_META_DESCRIPTION,
    });
  });

  it('places the target phrase in the title, meta, answer-first summary and an H2', () => {
    const summary = text(CN_EGYPT_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    const h2s = [...CN_EGYPT_BODY_HTML.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
      text(m[1]).toLowerCase(),
    );
    expect(CN_EGYPT_META_TITLE.toLowerCase()).toContain(PHRASE);
    expect(CN_EGYPT_META_DESCRIPTION.toLowerCase()).toContain(PHRASE);
    expect(summary.toLowerCase()).toContain(PHRASE);
    expect(h2s.some((h2) => h2.includes('before you send money'))).toBe(true);
    expect(CN_EGYPT_BODY_HTML.toLowerCase()).toContain(PHRASE);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...CN_EGYPT_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(CN_EGYPT_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('states the approved commercial facts and labels field offices', () => {
    expect(allCopy).toMatch(/\$10,000 to \$60,000/);
    expect(allCopy).toMatch(/field offices/i);
    expect(allCopy).toMatch(/Al Khobar/);
    expect(allCopy).toMatch(/Sheikh Zayed/);
    expect(allCopy).toMatch(/Guaranteed in writing/);
    expect(allCopy).toMatch(/Forty client reviews|40 client reviews/i);
    expect(allCopy).not.toMatch(/guaranteed accuracy|guaranteed findings/i);
    expect(allCopy).not.toMatch(/Mohammad Ashour/);
    expect(allCopy).not.toMatch(/3,200 physicians/);
    expect(allCopy).not.toContain('/healthcare-market-research');
    expect(allCopy).not.toContain('/home-staging');
  });

  it('cross-links the Gulf China playbook once and does not reprint that file', () => {
    const matches = [...CN_EGYPT_BODY_HTML.matchAll(new RegExp(`href="${GULF_CHINA_PATH}"`, 'g'))];
    expect(matches).toHaveLength(1);
    expect(allCopy).not.toMatch(/RHQ Investor Manual|special-category capital|minimum capital of SAR/i);
  });

  it('cites every linked reference inline', () => {
    const [narrative, referenceList] = CN_EGYPT_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    expect(items.map(([, id]) => id)).toEqual(CN_EGYPT_REFERENCES.map((ref) => ref.id));
    expect(items.length).toBe(22);
    for (const [, , itemHtml] of items) {
      expect(itemHtml).toContain('<a ');
      const url = /href="([^"]+)"/.exec(itemHtml)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and keeps tel/mailto links', () => {
    const external = [...CN_EGYPT_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(15);
    for (const [, , attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
    }
    expect(CN_EGYPT_BODY_HTML).toContain('href="mailto:admin@bionixus.com"');
    expect(CN_EGYPT_BODY_HTML).toContain('href="tel:+201206882323"');
    expect(CN_EGYPT_BODY_HTML).toContain('href="/bionixus-industries/insights"');
    expect(CN_EGYPT_BODY_HTML).toContain('href="/egypt-retail-market-research"');
    expect(CN_EGYPT_BODY_HTML).toContain('href="/egypt-automotive-market-research"');
    expect(CN_EGYPT_BODY_HTML).toContain('href="/egypt-energy-market-research"');
  });

  it('links the industries hub within the first 200 visible words', () => {
    const firstPara = text(/<p>([\s\S]*?)<\/p>/.exec(CN_EGYPT_BODY_HTML)?.[1] ?? '');
    expect(countWords(firstPara)).toBeLessThan(200);
    expect(CN_EGYPT_BODY_HTML.split('</p>')[0]).toContain('href="/bionixus-industries/insights"');
  });
});

describe('/bionixus-industries/insights/chinese-companies-egypt-market-research: registration', () => {
  it('is a hardcoded, force-indexed industries post linked from the hub', () => {
    expect(hardcodedSeoPosts).toContain(CN_EGYPT_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(CN_EGYPT_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(CN_EGYPT_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(CN_EGYPT_SLUG)).toBe(true);
    expect(CN_EGYPT_HARDCODED_POST.contentSilo).toBe('industries');
    expect(INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => item.to)).toContain(CN_EGYPT_PATH);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(CN_EGYPT_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/bionixus-industries/insights/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/bionixus-industries/insights/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(`/api/indexnow-key?__ssr=1&url=${CN_EGYPT_PATH}`);
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
    expect(JSON.stringify(vercel.rewrites)).not.toContain('/api/blog/:slug?industriesInsight=1');
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 17 October 2026', () => {
    expect(CN_EGYPT_HARDCODED_POST.date).toBe('17 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${CN_EGYPT_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-18'`,
    );
    expect(sitemapXml).toMatch(new RegExp(`<loc>${CN_EGYPT_URL}</loc>\\s*<lastmod>2026-10-18</lastmod>`));
    expect(llms).toContain(CN_EGYPT_URL);
  });

  it('keeps the hero and OG card at 1200 by 630 once the cover is no longer pending', async () => {
    expect(CN_EGYPT_COVER_PENDING).toBe(false);
    const cover = join(root, 'public', CN_EGYPT_COVER_IMAGE);
    const hero = join(root, 'public', CN_EGYPT_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
  });
});
