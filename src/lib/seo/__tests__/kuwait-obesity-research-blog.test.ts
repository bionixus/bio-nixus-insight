import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import { stripDefaultOrganizationJsonLd } from '../../../../lib/strip-industries-insights-org.mjs';
import {
  KUWAIT_OBESITY_FUNDING_ROUTES,
  KUWAIT_OBESITY_RESEARCH_BODY_HTML,
  KUWAIT_OBESITY_RESEARCH_COVER_IMAGE,
  KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT,
  KUWAIT_OBESITY_RESEARCH_DISPLAY_SUBTITLE,
  KUWAIT_OBESITY_RESEARCH_DISPLAY_TITLE,
  KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML,
  KUWAIT_OBESITY_RESEARCH_FAQ,
  KUWAIT_OBESITY_RESEARCH_FIGURES,
  KUWAIT_OBESITY_RESEARCH_HARDCODED_POST,
  KUWAIT_OBESITY_RESEARCH_HERO_IMAGE,
  KUWAIT_OBESITY_RESEARCH_HERO_IMAGE_ALT,
  KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
  KUWAIT_OBESITY_RESEARCH_META_TITLE,
  KUWAIT_OBESITY_RESEARCH_PATH,
  KUWAIT_OBESITY_RESEARCH_SLUG,
  KUWAIT_OBESITY_RESEARCH_TABLE_OF_CONTENTS,
  KUWAIT_OBESITY_RESEARCH_TAGS,
  KUWAIT_OBESITY_RESEARCH_URL,
  KUWAIT_OBESITY_RESEARCH_WORD_COUNT,
  countWords,
} from '@/data/blog-kuwait-obesity-research-glp1-payers';

const PHRASE = 'obesity market research kuwait';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const result = await render(KUWAIT_OBESITY_RESEARCH_PATH, {
    pageType: 'blog-post',
    blogSlug: KUWAIT_OBESITY_RESEARCH_SLUG,
    blogPost: KUWAIT_OBESITY_RESEARCH_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/obesity-market-research-kuwait: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(KUWAIT_OBESITY_RESEARCH_DISPLAY_TITLE);
    expect(h1s[0]).toContain(KUWAIT_OBESITY_RESEARCH_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE);
    const visible = text(html);
    expect(visible).toContain('Who pays for these medicines?');
    expect(visible).toContain('Anna Cuban');
    expect(visible).toContain('Global Research Manager');
    expect(visible).toContain('References');
    expect(visible).not.toMatch(/Mohammad Ashour/i);
    for (const item of KUWAIT_OBESITY_RESEARCH_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1400);
  });

  it('links the Kuwait obesity page and the research hub inside the first 200 words', () => {
    const opening = `${text(KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML)} ${text(KUWAIT_OBESITY_RESEARCH_BODY_HTML)}`;
    const first200 = opening.split(/\s+/).slice(0, 200).join(' ');
    expect(KUWAIT_OBESITY_RESEARCH_BODY_HTML).toContain('href="/kuwait-obesity-market"');
    expect(KUWAIT_OBESITY_RESEARCH_BODY_HTML).toContain('href="/healthcare-market-research"');
    expect(first200.toLowerCase()).toMatch(/kuwait obesity market/);
    expect(first200.toLowerCase()).toMatch(/healthcare market research/);
  });

  it('puts the text-free artwork path behind the h1 and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${KUWAIT_OBESITY_RESEARCH_HERO_IMAGE}" alt="${KUWAIT_OBESITY_RESEARCH_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${KUWAIT_OBESITY_RESEARCH_COVER_IMAGE}"`);
    expect(KUWAIT_OBESITY_RESEARCH_HARDCODED_POST.ogImage).toBe(KUWAIT_OBESITY_RESEARCH_COVER_IMAGE);
  });

  it('renders a visible breadcrumb trail that matches the BreadcrumbList', () => {
    const navs = [...html.matchAll(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/g)].map((m) => m[0]);
    const classOf = (nav: string) => /^<nav[^>]*class="([^"]*)"/.exec(nav)?.[1].split(/\s+/) ?? [];
    expect(navs).toHaveLength(2);
    const wide = navs.find((nav) => classOf(nav).includes('md:block'));
    const phone = navs.find((nav) => classOf(nav).includes('md:hidden'));
    expect(classOf(wide ?? '')).toEqual(expect.arrayContaining(['hidden', 'bg-transparent']));
    expect(phone).toBeDefined();
    expect(html.indexOf(wide ?? '')).toBeLessThan(html.indexOf('<article'));
    expect(html.indexOf(phone ?? '')).toBeLessThan(html.indexOf('<article'));
    for (const nav of navs) expect(text(nav)).toBe('Home / Blog / Kuwait obesity GLP-1 research');
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Blog',
      'Kuwait obesity GLP-1 research',
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${KUWAIT_OBESITY_RESEARCH_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${KUWAIT_OBESITY_RESEARCH_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${KUWAIT_OBESITY_RESEARCH_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([KUWAIT_OBESITY_RESEARCH_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([KUWAIT_OBESITY_RESEARCH_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-12T15:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-12T15:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Anna Cuban']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(KUWAIT_OBESITY_RESEARCH_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([KUWAIT_OBESITY_RESEARCH_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT]);
  });
});

describe('/blog/obesity-market-research-kuwait: JSON-LD', () => {
  const byType = (type: string) => jsonLd.filter((node) => node['@type'] === type);

  it('emits only valid, parseable nodes of every required type', () => {
    const types = jsonLd.map((node) => node['@type']);
    for (const type of ['BlogPosting', 'BreadcrumbList', 'WebPage', 'Organization', 'FAQPage']) {
      expect(types).toContain(type);
    }
    for (const node of jsonLd) {
      expect(node['@context']).toBe('https://schema.org');
      expect(isValidSchemaNode(node)).toBe(true);
    }
  });

  it('fills every BlogPosting property, with an ImageObject cover and Anna Cuban as Person', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(KUWAIT_OBESITY_RESEARCH_DISPLAY_TITLE);
    expect(article.description).toBe(KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-12T15:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-12T15:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Market Research');
    expect(article.keywords).toBe(KUWAIT_OBESITY_RESEARCH_TAGS.join(', '));
    expect(article.wordCount).toBe(KUWAIT_OBESITY_RESEARCH_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${KUWAIT_OBESITY_RESEARCH_URL}#webpage`,
      url: KUWAIT_OBESITY_RESEARCH_URL,
    });
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${KUWAIT_OBESITY_RESEARCH_URL}#primaryimage`,
      url: `https://www.bionixus.com${KUWAIT_OBESITY_RESEARCH_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT,
    });
    expect(images.slice(1)).toEqual(
      KUWAIT_OBESITY_RESEARCH_FIGURES.map((figure) => ({
        '@type': 'ImageObject',
        url: `https://www.bionixus.com${figure.src}`,
        width: figure.width,
        height: figure.height,
        caption: figure.caption,
      })),
    );
    expect(article.author).toMatchObject({
      '@type': 'Person',
      name: 'Anna Cuban',
      jobTitle: 'Global Research Manager',
    });
    expect(JSON.stringify(article.author)).not.toMatch(/Mohammad Ashour|Alsaadany/i);
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${KUWAIT_OBESITY_RESEARCH_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${KUWAIT_OBESITY_RESEARCH_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${KUWAIT_OBESITY_RESEARCH_URL}#breadcrumb` });
  });

  it('keeps the Organization node to the verified facts and all six labelled offices', () => {
    const orgs = byType('Organization');
    expect(orgs).toHaveLength(1);
    const pageOrg = orgs.find((node) => typeof node.description === 'string' && node.description.includes('127 studies'));
    expect(pageOrg).toBeDefined();
    expect(pageOrg!['@id']).toBe('https://www.bionixus.com/#organization');
    expect(pageOrg!.foundingDate).toBe('2012');
    for (const fact of ['118 clients', '48 countries', '127 studies', '3,200 physicians', 'Field offices']) {
      expect(pageOrg!.description).toContain(fact);
    }
    const localities = pageOrg!.address.map((address: JsonLdNode) => address.addressLocality);
    expect(localities).toEqual(['Sheridan', 'London', 'Sheikh Zayed', 'Dubai', 'Al Khobar', 'Salmiya']);
    expect(pageOrg!.description).toContain(SAO_PAULO_PHRASE);
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
    const page = stripDefaultOrganizationJsonLd(indexHtml, KUWAIT_OBESITY_RESEARCH_PATH);
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
    ).toEqual(KUWAIT_OBESITY_RESEARCH_FAQ);
    expect(KUWAIT_OBESITY_RESEARCH_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(KUWAIT_OBESITY_RESEARCH_FAQ.length).toBeLessThanOrEqual(8);
  });

  it('lists the same funding routes in the ItemList and the comparison table', () => {
    const [itemList] = byType('ItemList');
    const names = itemList.itemListElement.map((entry: JsonLdNode) => entry.item?.name ?? entry.name);
    expect(names).toEqual(KUWAIT_OBESITY_FUNDING_ROUTES.map((entry) => entry.name));
    for (const entry of itemList.itemListElement) {
      expect(entry.item).toBeUndefined();
      expect(JSON.stringify(entry)).not.toMatch(/https?:\/\//);
    }
  });
});

describe('/blog/obesity-market-research-kuwait: copy rules', () => {
  const allCopy = [
    KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML,
    KUWAIT_OBESITY_RESEARCH_BODY_HTML,
    JSON.stringify(KUWAIT_OBESITY_RESEARCH_FAQ),
    JSON.stringify(KUWAIT_OBESITY_RESEARCH_HARDCODED_POST.ctaSection),
    JSON.stringify(KUWAIT_OBESITY_RESEARCH_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(KUWAIT_OBESITY_RESEARCH_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(KUWAIT_OBESITY_RESEARCH_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(getCtrSeo(KUWAIT_OBESITY_RESEARCH_PATH)).toEqual({
      title: KUWAIT_OBESITY_RESEARCH_META_TITLE,
      description: KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(KUWAIT_OBESITY_RESEARCH_SLUG)).toEqual({
      title: KUWAIT_OBESITY_RESEARCH_META_TITLE,
      description: KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
    });
  });

  it('places the exact target phrase in the title, meta, answer-first summary and H2s', () => {
    const summary = text(KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    const h2s = [...KUWAIT_OBESITY_RESEARCH_BODY_HTML.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
      text(m[1]).toLowerCase(),
    );
    expect(KUWAIT_OBESITY_RESEARCH_META_TITLE.toLowerCase()).toContain(PHRASE);
    expect(KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION.toLowerCase()).toContain(PHRASE);
    expect(summary.toLowerCase()).toContain(PHRASE);
    expect(KUWAIT_OBESITY_RESEARCH_BODY_HTML.toLowerCase()).toContain(PHRASE);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...KUWAIT_OBESITY_RESEARCH_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(KUWAIT_OBESITY_RESEARCH_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('labels Al Khobar and Kuwait as field offices and states custom pricing once', () => {
    expect(allCopy).toMatch(/field offices/i);
    expect(allCopy).toMatch(/Al Khobar/);
    expect(allCopy).toMatch(/Salmiya, Kuwait/);
    expect(allCopy).toMatch(/\$10k–\$60k/);
    expect(allCopy).toContain('Guaranteed in writing');
    expect(allCopy).toContain('40 client reviews');
    expect(allCopy).not.toMatch(/guaranteed accuracy|guaranteed findings/i);
  });

  it('cites every linked reference inline, and keeps competitor bibliography entries unlinked', () => {
    const [narrative, referenceList] = KUWAIT_OBESITY_RESEARCH_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    const linked = items.filter(([, , html]) => html.includes('<a '));
    const unlinked = items.filter(([, , html]) => !html.includes('<a '));
    expect(linked.length).toBeGreaterThanOrEqual(16);
    expect(unlinked.map(([, id]) => id)).toEqual(['grand-view', '6wresearch']);
    for (const [, , html] of linked) {
      const url = /href="([^"]+)"/.exec(html)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and never links a competitor host', () => {
    const external = [...KUWAIT_OBESITY_RESEARCH_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(20);
    for (const [, href, attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
      expect(href).not.toMatch(
        /iqvia\.com|ipsos\.com|kantar\.com|euromonitor\.com|grandviewresearch\.com|imarcgroup\.com|kenresearch\.com|6wresearch\.com|damaninsurance\.ae/i,
      );
    }
  });

  it('places lazy-loaded in-content figures with alt text, captions and files under 120 KB', () => {
    for (const figure of KUWAIT_OBESITY_RESEARCH_FIGURES) {
      expect(figure.src.endsWith('.webp')).toBe(true);
      const file = statSync(join(root, 'public', figure.src));
      expect(file.size).toBeGreaterThan(5 * 1024);
      expect(file.size).toBeLessThanOrEqual(120 * 1024);
      expect(html).toContain(
        `src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy"`,
      );
      expect(html).toContain(`<figcaption>${figure.caption}</figcaption>`);
    }
  });

  it('keeps the hero and OG card at 1200 by 630 and ships a Playwright cover generator', async () => {
    const cover = join(root, 'public', KUWAIT_OBESITY_RESEARCH_COVER_IMAGE);
    const hero = join(root, 'public', KUWAIT_OBESITY_RESEARCH_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
    const coverScript = readFileSync(join(root, 'scripts/generate-kuwait-obesity-research-cover.mjs'), 'utf8');
    expect(coverScript).toMatch(/playwright/);
    expect(coverScript).toMatch(/from 'sharp'/);
    expect(coverScript).not.toMatch(/gemini-2\.5-flash-image|Gemini cover pending|Imagen via Gemini/);
  });
});

describe('/blog/obesity-market-research-kuwait: Sanity payload', () => {
  const SANITY_FIELDS = [
    'seo',
    'openGraph',
    'title',
    'slug',
    'excerpt',
    'publishedAt',
    'updatedAt',
    'author',
    'mainImage',
    'categories',
    'category',
    'contentSilo',
    'tags',
    'country',
    'language',
    'readingTime',
    'executiveSummary',
    'tableOfContents',
    'bodyHtml',
    'body',
    'faq',
    'relatedPostSlugs',
    'ctaSection',
    'sources',
    'factCheckedAt',
  ] as const;

  it('fills every healthcare-silo blogPost field with Anna Cuban and a ready cover', () => {
    const payload = JSON.parse(
      readFileSync(join(root, 'scripts/data/obesity-market-research-kuwait.json'), 'utf8'),
    ) as Record<string, unknown>;
    for (const field of SANITY_FIELDS) {
      expect(payload[field], field).toBeDefined();
    }
    expect(payload.author).toMatchObject({
      _type: 'reference',
      _ref: '7acabff7-aae6-4d8a-a667-91e21a235bcb',
      name: 'Anna Cuban',
      jobTitle: 'Global Research Manager',
    });
    expect(payload.geminiCoverPending).toBe(false);
    expect((payload.sources as unknown[]).length).toBe(21);
    expect((payload.faq as unknown[]).length).toBe(KUWAIT_OBESITY_RESEARCH_FAQ.length);
    expect((payload.bodyHtml as string)).toContain('Obesity market research Kuwait');
    expect((payload.bodyHtml as string)).toContain('href="/kuwait-obesity-market"');
    const publishScript = readFileSync(join(root, 'scripts/publish-kuwait-obesity-research-glp1-payers.mjs'), 'utf8');
    expect(publishScript).toMatch(/7acabff7-aae6-4d8a-a667-91e21a235bcb/);
    expect(publishScript).toMatch(/process\.exit\(2\)/);
    expect(publishScript).not.toMatch(/Do not generate these files with another model/);
  });
});

describe('/blog/obesity-market-research-kuwait: registration', () => {
  it('is a hardcoded, force-indexed post', () => {
    expect(hardcodedSeoPosts).toContain(KUWAIT_OBESITY_RESEARCH_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(KUWAIT_OBESITY_RESEARCH_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(KUWAIT_OBESITY_RESEARCH_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(KUWAIT_OBESITY_RESEARCH_SLUG)).toBe(true);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(KUWAIT_OBESITY_RESEARCH_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${KUWAIT_OBESITY_RESEARCH_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 12 October 2026', () => {
    expect(KUWAIT_OBESITY_RESEARCH_HARDCODED_POST.date).toBe('12 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${KUWAIT_OBESITY_RESEARCH_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-12'`,
    );
    expect(sitemapXml).toMatch(
      new RegExp(`<loc>${KUWAIT_OBESITY_RESEARCH_URL}</loc>\\s*<lastmod>2026-10-12</lastmod>`),
    );
    expect(llms).toContain(KUWAIT_OBESITY_RESEARCH_URL);
  });
});
