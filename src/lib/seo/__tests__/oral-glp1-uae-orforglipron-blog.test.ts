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
  ORAL_GLP1_UAE_BODY_HTML,
  ORAL_GLP1_UAE_COVER_IMAGE,
  ORAL_GLP1_UAE_COVER_IMAGE_ALT,
  ORAL_GLP1_UAE_DISPLAY_SUBTITLE,
  ORAL_GLP1_UAE_DISPLAY_TITLE,
  ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML,
  ORAL_GLP1_UAE_FAQ,
  ORAL_GLP1_UAE_FIGURES,
  ORAL_GLP1_UAE_HARDCODED_POST,
  ORAL_GLP1_UAE_HERO_IMAGE,
  ORAL_GLP1_UAE_HERO_IMAGE_ALT,
  ORAL_GLP1_UAE_META_DESCRIPTION,
  ORAL_GLP1_UAE_META_TITLE,
  ORAL_GLP1_UAE_PATH,
  ORAL_GLP1_UAE_SLUG,
  ORAL_GLP1_UAE_TABLE_OF_CONTENTS,
  ORAL_GLP1_UAE_TAGS,
  ORAL_GLP1_UAE_URL,
  ORAL_GLP1_UAE_WORD_COUNT,
  ORAL_GLP1_UAE_WORKSTREAMS,
  countWords,
} from '@/data/blog-oral-glp1-uae-orforglipron';

const PHRASE = 'oral glp-1 uae market research';
const SAO_PAULO_PHRASE = 'São Paulo is a field office for LATAM';

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
  const result = await render(ORAL_GLP1_UAE_PATH, {
    pageType: 'blog-post',
    blogSlug: ORAL_GLP1_UAE_SLUG,
    blogPost: ORAL_GLP1_UAE_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/oral-glp-1-uae-market-research: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(ORAL_GLP1_UAE_DISPLAY_TITLE);
    expect(h1s[0]).toContain(ORAL_GLP1_UAE_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE);
    const visible = text(html);
    expect(visible).toContain('What is oral GLP-1 UAE market research?');
    expect(visible).toContain('Ivona Gunjova');
    expect(visible).toContain('Global Research Manager');
    expect(visible).toContain('References');
    expect(visible).not.toMatch(/Mohammad Ashour/i);
    for (const item of ORAL_GLP1_UAE_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(2500);
  });

  it('links the UAE obesity page and the research hub inside the first 200 words', () => {
    const opening = `${text(ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML)} ${text(ORAL_GLP1_UAE_BODY_HTML)}`;
    const first200 = opening.split(/\s+/).slice(0, 200).join(' ');
    expect(ORAL_GLP1_UAE_BODY_HTML).toContain('href="/uae-obesity-market"');
    expect(ORAL_GLP1_UAE_BODY_HTML).toContain('href="/healthcare-market-research"');
    expect(first200.toLowerCase()).toMatch(/uae obesity market/);
    expect(first200.toLowerCase()).toMatch(/healthcare market research/);
  });

  it('cross-links Thiqa, Qatar GLP-1 and the UAE obesity hub without retelling those briefs', () => {
    expect(ORAL_GLP1_UAE_BODY_HTML).toContain('href="/blog/thiqa-obesity-reimbursement-abu-dhabi"');
    expect(ORAL_GLP1_UAE_BODY_HTML).toContain('href="/blog/qatar-obesity-glp1-market-research"');
    expect(ORAL_GLP1_UAE_BODY_HTML).toContain('href="/uae-obesity-market"');
    expect(ORAL_GLP1_UAE_BODY_HTML.toLowerCase()).not.toMatch(/bmi 30\.0–34\.9/);
    expect(ORAL_GLP1_UAE_BODY_HTML.toLowerCase()).not.toMatch(/hamad medical corporation entitlement/);
  });

  it('puts the text-free artwork path behind the h1 and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${ORAL_GLP1_UAE_HERO_IMAGE}" alt="${ORAL_GLP1_UAE_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${ORAL_GLP1_UAE_COVER_IMAGE}"`);
    expect(ORAL_GLP1_UAE_HARDCODED_POST.ogImage).toBe(ORAL_GLP1_UAE_COVER_IMAGE);
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
    for (const nav of navs) expect(text(nav)).toBe('Home / Blog / Oral GLP-1 UAE orforglipron research');
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Blog',
      'Oral GLP-1 UAE orforglipron research',
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${ORAL_GLP1_UAE_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([ORAL_GLP1_UAE_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${ORAL_GLP1_UAE_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${ORAL_GLP1_UAE_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([ORAL_GLP1_UAE_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([ORAL_GLP1_UAE_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([ORAL_GLP1_UAE_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([ORAL_GLP1_UAE_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-16T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-16T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Ivona Gunjova']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(ORAL_GLP1_UAE_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([ORAL_GLP1_UAE_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([ORAL_GLP1_UAE_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([ORAL_GLP1_UAE_COVER_IMAGE_ALT]);
  });
});

describe('/blog/oral-glp-1-uae-market-research: JSON-LD', () => {
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

  it('fills every BlogPosting property, with an ImageObject cover and Ivona Gunjova as Person', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(ORAL_GLP1_UAE_DISPLAY_TITLE);
    expect(article.description).toBe(ORAL_GLP1_UAE_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-16T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-16T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Market Research');
    expect(article.keywords).toBe(ORAL_GLP1_UAE_TAGS.join(', '));
    expect(article.wordCount).toBe(ORAL_GLP1_UAE_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${ORAL_GLP1_UAE_URL}#webpage`,
      url: ORAL_GLP1_UAE_URL,
    });
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${ORAL_GLP1_UAE_URL}#primaryimage`,
      url: `https://www.bionixus.com${ORAL_GLP1_UAE_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: ORAL_GLP1_UAE_COVER_IMAGE_ALT,
    });
    expect(images.slice(1)).toEqual(
      ORAL_GLP1_UAE_FIGURES.map((figure) => ({
        '@type': 'ImageObject',
        url: `https://www.bionixus.com${figure.src}`,
        width: figure.width,
        height: figure.height,
        caption: figure.caption,
      })),
    );
    expect(article.author).toMatchObject({
      '@type': 'Person',
      name: 'Ivona Gunjova',
      jobTitle: 'Global Research Manager',
    });
    expect(JSON.stringify(article.author)).not.toMatch(/Mohammad Ashour|Alsaadany/i);
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${ORAL_GLP1_UAE_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${ORAL_GLP1_UAE_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${ORAL_GLP1_UAE_URL}#breadcrumb` });
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
    const page = stripDefaultOrganizationJsonLd(indexHtml, ORAL_GLP1_UAE_PATH);
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
    ).toEqual(ORAL_GLP1_UAE_FAQ);
    expect(ORAL_GLP1_UAE_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(ORAL_GLP1_UAE_FAQ.length).toBeLessThanOrEqual(8);
  });

  it('lists the same workstreams in the ItemList and the comparison table', () => {
    const [itemList] = byType('ItemList');
    const names = itemList.itemListElement.map((entry: JsonLdNode) => entry.item?.name ?? entry.name);
    expect(names).toEqual(ORAL_GLP1_UAE_WORKSTREAMS.map((entry) => entry.name));
    for (const entry of itemList.itemListElement) {
      expect(entry.item).toBeUndefined();
      expect(JSON.stringify(entry)).not.toMatch(/https?:\/\//);
    }
  });
});

describe('/blog/oral-glp-1-uae-market-research: copy rules', () => {
  const allCopy = [
    ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML,
    ORAL_GLP1_UAE_BODY_HTML,
    JSON.stringify(ORAL_GLP1_UAE_FAQ),
    JSON.stringify(ORAL_GLP1_UAE_HARDCODED_POST.ctaSection),
    JSON.stringify(ORAL_GLP1_UAE_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(ORAL_GLP1_UAE_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(ORAL_GLP1_UAE_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(ORAL_GLP1_UAE_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(ORAL_GLP1_UAE_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(getCtrSeo(ORAL_GLP1_UAE_PATH)).toEqual({
      title: ORAL_GLP1_UAE_META_TITLE,
      description: ORAL_GLP1_UAE_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(ORAL_GLP1_UAE_SLUG)).toEqual({
      title: ORAL_GLP1_UAE_META_TITLE,
      description: ORAL_GLP1_UAE_META_DESCRIPTION,
    });
  });

  it('places the exact target phrase in the title, meta, answer-first summary and H2s', () => {
    const summary = text(ORAL_GLP1_UAE_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    expect(ORAL_GLP1_UAE_META_TITLE.toLowerCase()).toContain(PHRASE);
    expect(ORAL_GLP1_UAE_META_DESCRIPTION.toLowerCase()).toContain(PHRASE);
    expect(summary.toLowerCase()).toContain(PHRASE);
    expect(ORAL_GLP1_UAE_BODY_HTML.toLowerCase()).toContain(PHRASE);
    expect(ORAL_GLP1_UAE_BODY_HTML.toLowerCase()).toContain('orforglipron uae');
    expect(ORAL_GLP1_UAE_WORD_COUNT).toBeGreaterThanOrEqual(2500);
    expect(ORAL_GLP1_UAE_WORD_COUNT).toBeLessThanOrEqual(5000);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...ORAL_GLP1_UAE_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(ORAL_GLP1_UAE_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
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
    const [narrative, referenceList] = ORAL_GLP1_UAE_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    const linked = items.filter(([, , html]) => html.includes('<a '));
    const unlinked = items.filter(([, , html]) => !html.includes('<a '));
    expect(linked.length).toBeGreaterThanOrEqual(16);
    expect(unlinked.map(([, id]) => id)).toEqual(['grand-view', '6wresearch', 'ken-research']);
    for (const [, , html] of linked) {
      const url = /href="([^"]+)"/.exec(html)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and never links a competitor host', () => {
    const external = [...ORAL_GLP1_UAE_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(20);
    for (const [, href, attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
      expect(href).not.toMatch(
        /iqvia\.com|ipsos\.com|kantar\.com|euromonitor\.com|grandviewresearch\.com|imarcgroup\.com|kenresearch\.com|6wresearch\.com/i,
      );
    }
  });

  it('places lazy-loaded in-content figures with alt text, captions and files under 120 KB', () => {
    for (const figure of ORAL_GLP1_UAE_FIGURES) {
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
    const cover = join(root, 'public', ORAL_GLP1_UAE_COVER_IMAGE);
    const hero = join(root, 'public', ORAL_GLP1_UAE_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
    const coverScript = readFileSync(join(root, 'scripts/generate-oral-glp1-uae-cover.mjs'), 'utf8');
    expect(coverScript).toMatch(/playwright/);
    expect(coverScript).toMatch(/from 'sharp'/);
    expect(coverScript).toMatch(/#101C30/);
    expect(coverScript).toMatch(/#F5A503/);
    expect(coverScript).toMatch(/bionixus-logo\.png/);
    expect(coverScript).not.toMatch(/gemini-2\.5-flash-image|Gemini cover pending|Imagen via Gemini/);
    const coverSpec = readFileSync(join(root, 'scripts/data/linkedin-blog-cover-specs.mjs'), 'utf8');
    const oralSpec = coverSpec.slice(
      coverSpec.indexOf("'oral-glp-1-uae-market-research'"),
      coverSpec.indexOf("'thiqa-obesity-reimbursement-abu-dhabi'"),
    );
    expect(oralSpec).toContain('Oral GLP-1');
    expect(oralSpec).not.toMatch(/Foundayo|orforglipron|Wegovy|Mounjaro/i);
  });
});

describe('/blog/oral-glp-1-uae-market-research: Sanity payload', () => {
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

  it('fills every healthcare-silo blogPost field with Ivona Gunjova and a ready cover', () => {
    const payload = JSON.parse(
      readFileSync(join(root, 'scripts/data/oral-glp-1-uae-market-research.json'), 'utf8'),
    ) as Record<string, unknown>;
    for (const field of SANITY_FIELDS) {
      expect(payload[field], field).toBeDefined();
    }
    expect(payload.author).toMatchObject({
      _type: 'reference',
      _ref: '5e67519a-1cdc-4b57-a881-29391db4accd',
      name: 'Ivona Gunjova',
      jobTitle: 'Global Research Manager',
    });
    expect(payload.geminiCoverPending).toBe(false);
    expect((payload.sources as unknown[]).length).toBeGreaterThanOrEqual(20);
    expect((payload.faq as unknown[]).length).toBe(ORAL_GLP1_UAE_FAQ.length);
    expect(payload.bodyHtml as string).toContain('oral GLP-1 UAE market research');
    expect(payload.bodyHtml as string).toContain('href="/uae-obesity-market"');
    const publishScript = readFileSync(join(root, 'scripts/publish-oral-glp1-uae-orforglipron.mjs'), 'utf8');
    expect(publishScript).toMatch(/5e67519a-1cdc-4b57-a881-29391db4accd/);
    expect(publishScript).toMatch(/process\.exit\(2\)/);
    expect(publishScript).not.toMatch(/Do not generate these files with another model/);
  });
});

describe('/blog/oral-glp-1-uae-market-research: registration', () => {
  it('is a hardcoded, force-indexed post', () => {
    expect(hardcodedSeoPosts).toContain(ORAL_GLP1_UAE_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(ORAL_GLP1_UAE_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(ORAL_GLP1_UAE_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(ORAL_GLP1_UAE_SLUG)).toBe(true);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(ORAL_GLP1_UAE_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${ORAL_GLP1_UAE_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 16 October 2026', () => {
    expect(ORAL_GLP1_UAE_HARDCODED_POST.date).toBe('16 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${ORAL_GLP1_UAE_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-16'`,
    );
    expect(sitemapXml).toMatch(
      new RegExp(`<loc>${ORAL_GLP1_UAE_URL}</loc>\\s*<lastmod>2026-10-16</lastmod>`),
    );
    expect(llms).toContain(ORAL_GLP1_UAE_URL);
  });
});
