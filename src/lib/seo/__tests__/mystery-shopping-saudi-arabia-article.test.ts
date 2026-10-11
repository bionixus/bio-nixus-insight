import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  ARTICLE,
  ARTICLE_PATH,
  ARTICLE_URL,
  AUTHOR_JOB_TITLE,
  AUTHOR_SLUG,
  BODY_HTML_FILE,
  SLUG,
  TARGET_KEYWORD,
} from '../../../../scripts/data/mystery-shopping-companies-saudi-arabia-2026.mjs';
import { CTR_SEO_BY_PATH as LIB_CTR_SEO } from '../../../../lib/ctr-seo-overrides.mjs';
import {
  ALSAADANY_PROFILE_URL,
  ALSAADANY_SAME_AS_URL,
  buildPersonNode,
  countWords,
  getIndustriesInsightHowTo,
  htmlToPlainText,
} from '../../../../lib/industries-insight-jsonld.mjs';
import { checkNode, walk } from '../../../../scripts/seo/verify-schema-properties.mjs';
import { CTR_SEO_BY_PATH as SERVER_CTR_SEO } from '@/server/ctr-seo-overrides.js';
import {
  ALSAADANY_PROFILE_URL as ROSTER_ALSAADANY_PROFILE_URL,
  ALSAADANY_SAME_AS_URL as ROSTER_ALSAADANY_SAME_AS_URL,
  WESTERN_AUTHORS,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { sanitizeBodyHtml } from '@/lib/sanitize-body-html';
import { buildSchemas, isValidSchemaNode } from '@/components/SchemaMarkup';
import { buildIndustriesInsightSchemaExtras } from '@/lib/industriesInsightSchema';
import type { BlogPost } from '@/types/blog';

const root = join(__dirname, '..', '..', '..', '..');
const bodyHtml = readFileSync(join(root, BODY_HTML_FILE), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const keyword = TARGET_KEYWORD.toLowerCase();
const rosterAuthor = WESTERN_AUTHORS.find((author) => author.slug === AUTHOR_SLUG);
const PERSON_ID = `https://www.bionixus.com/#person-${AUTHOR_SLUG}`;

const h2s = [...bodyHtml.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map(([, id, text]) => ({ id, text }));
const hrefs = [...bodyHtml.matchAll(/href="([^"]+)"/g)].map(([, href]) => href);
const referencesHtml = bodyHtml.split('<h2 id="references">')[1] ?? '';

function sectionHtml(id: string): string {
  const start = bodyHtml.indexOf(`<h2 id="${id}">`);
  const next = bodyHtml.indexOf('<h2 ', start + 1);
  return bodyHtml.slice(start, next === -1 ? undefined : next);
}

function decode(text: string): string {
  return htmlToPlainText(text);
}

describe('Mystery shopping companies Saudi Arabia — content and SEO', () => {
  it('puts the exact target phrase in the H1, title tag, meta description, summary and H2s', () => {
    expect(ARTICLE.title.toLowerCase()).toContain(keyword);
    expect(ARTICLE.seo.metaTitle.toLowerCase()).toContain(keyword);
    expect(ARTICLE.seo.metaDescription.toLowerCase()).toContain(keyword);
    expect(ARTICLE.executiveSummary.toLowerCase()).toContain(keyword);
    expect(h2s.filter((h) => h.text.toLowerCase().includes(keyword)).length).toBeGreaterThanOrEqual(2);
  });

  it('keeps title and description inside the AGENTS.md and Sanity Studio limits', () => {
    expect(ARTICLE.seo.metaTitle.length).toBeGreaterThanOrEqual(50);
    expect(ARTICLE.seo.metaTitle.length).toBeLessThanOrEqual(60);
    expect(ARTICLE.seo.metaDescription.length).toBeGreaterThanOrEqual(150);
    expect(ARTICLE.seo.metaDescription.length).toBeLessThanOrEqual(155);
    expect(ARTICLE.excerpt.length).toBeLessThanOrEqual(200);
    expect(ARTICLE.cover.alt.length).toBeLessThanOrEqual(125);
  });

  it('opens with an answer-first summary of 40 to 60 words', () => {
    const words = countWords(ARTICLE.executiveSummary);
    expect(words).toBeGreaterThanOrEqual(40);
    expect(words).toBeLessThanOrEqual(60);
  });

  it('leaves the H1 to the template, asks questions in its H2s and mirrors them in the TOC', () => {
    expect(bodyHtml).not.toMatch(/<h1\b/i);
    expect(h2s.map((h) => h.id)).toEqual(ARTICLE.tableOfContents.map((item) => item.anchor));
    const questionH2s = h2s.filter((h) => h.id !== 'references');
    expect(questionH2s.every((h) => h.text.trim().endsWith('?'))).toBe(true);
    expect([...bodyHtml.matchAll(/<h2\b/g)].length).toBe(h2s.length);
  });

  it('has a key-takeaways block, comparison tables and an ordered step list', () => {
    expect(bodyHtml).toContain('<div class="value-box">');
    expect(bodyHtml).toContain('<strong>Key takeaways</strong>');
    expect([...bodyHtml.matchAll(/<table>/g)].length).toBeGreaterThanOrEqual(3);
    expect(sectionHtml('how-to-run')).toContain('<ol>');
  });

  it('ships 5 to 8 complete FAQ items and keeps them out of the body', () => {
    expect(ARTICLE.faq.length).toBeGreaterThanOrEqual(5);
    expect(ARTICLE.faq.length).toBeLessThanOrEqual(8);
    for (const item of ARTICLE.faq) {
      expect(item.question.trim().endsWith('?')).toBe(true);
      expect(countWords(item.answer)).toBeGreaterThan(30);
    }
    expect(bodyHtml).not.toMatch(/<details|<summary/i);
  });

  it('survives the site body sanitizer with every heading, table, list and link intact', () => {
    const sanitized = sanitizeBodyHtml(bodyHtml);
    const count = (html: string, pattern: RegExp) => [...html.matchAll(pattern)].length;
    expect(count(sanitized, /<h2 /g)).toBe(count(bodyHtml, /<h2 /g));
    expect(count(sanitized, /<table>/g)).toBe(count(bodyHtml, /<table>/g));
    expect(count(sanitized, /<li>/g)).toBe(count(bodyHtml, /<li>/g));
    expect(count(sanitized, /<a /g)).toBe(count(bodyHtml, /<a /g));
    expect(sanitized).toContain('class="value-box"');
  });

  it('links internally only to indexable industries-silo pages, starting within the first 200 words', () => {
    const internal = [...new Set(hrefs.filter((href) => href.startsWith('/')))];
    expect(internal).toEqual(
      expect.arrayContaining([
        '/bionixus-industries/insights',
        '/saudi-arabia-retail-market-research',
        '/templates/mystery-shop-retail-brief',
        '/contact',
      ]),
    );
    for (const href of internal) {
      expect(sitemapXml, href).toContain(`<loc>https://www.bionixus.com${href}</loc>`);
      expect(href).not.toMatch(/^\/(blog|healthcare-market-research)(\/|$)|pharma/);
    }
    const firstHubLink = bodyHtml.indexOf('href="/bionixus-industries/insights"');
    expect(firstHubLink).toBeGreaterThan(0);
    expect(countWords(decode(bodyHtml.slice(0, firstHubLink)))).toBeLessThan(200);
  });

  it('cites every external source over https and lists each one under References', () => {
    const external = [...new Set(hrefs.filter((href) => /^https?:/.test(href)))];
    expect(external.length).toBeGreaterThanOrEqual(20);
    for (const href of external) {
      expect(href.startsWith('https://')).toBe(true);
      expect(referencesHtml, href).toContain(`href="${href}"`);
    }
    expect(bodyHtml).toContain('href="mailto:admin@bionixus.com"');
  });

  it('uses only the BioNixus facts the owner approved', () => {
    const copy = [
      decode(bodyHtml),
      ARTICLE.title,
      ARTICLE.excerpt,
      ARTICLE.executiveSummary,
      ARTICLE.ctaSection.title,
      ARTICLE.ctaSection.description,
      ...ARTICLE.faq.flatMap((item) => [item.question, item.answer]),
    ].join(' ');
    for (const fact of [
      'founded in 2012',
      '118 clients',
      '48 countries',
      '127 studies so far in 2026',
      'Dubai (Thuraya Tower 1, Al Sufouh 2)',
      'London (EC1V 2NX)',
      'Cairo, which is our biggest office in the Middle East and Africa',
      'US headquarters in Sheridan, Wyoming',
    ]) {
      expect(copy).toContain(fact);
    }
    for (const banned of [/Al Khobar/i, /S[aã]o Paulo/i, /\$\s?\d/, /\bUSD\b/, /price range/i, /\bclients? include/i]) {
      expect(copy).not.toMatch(banned);
    }
    for (const competitor of [/Ipsos/i, /Kantar/i, /Nielsen/i, /\bSGS\b/, /\bSMRC\b/, /Madarij/i, /\bMSKSA\b/]) {
      expect(copy).not.toMatch(competitor);
    }
  });

  it('serves the same exact title and description from both CTR override copies', () => {
    for (const map of [LIB_CTR_SEO, SERVER_CTR_SEO]) {
      expect(map[ARTICLE_PATH]).toEqual({
        title: ARTICLE.seo.metaTitle,
        description: ARTICLE.seo.metaDescription,
      });
    }
  });

  it('keeps the HowTo steps identical to the ordered list in the body', () => {
    const howTo = getIndustriesInsightHowTo(SLUG);
    const items = [...sectionHtml('how-to-run').matchAll(/<li><strong>([\s\S]*?)\.<\/strong>\s*([\s\S]*?)<\/li>/g)].map(
      ([, name, text]) => ({ name: decode(name), text: decode(text) }),
    );
    expect(items).toEqual(howTo.steps);
  });

  it('credits Sarah Chen, Global Research Manager, an existing Sanity author', () => {
    expect(AUTHOR_SLUG).toBe('sarah-chen');
    expect(rosterAuthor?.name).toBe('Sarah Chen');
    expect(AUTHOR_JOB_TITLE).toBe('Global Research Manager');
  });
});

describe('Mystery shopping article — shared JSON-LD helpers', () => {
  it('mirrors the Alsaadany profile rules from the editorial roster', () => {
    expect(ALSAADANY_PROFILE_URL).toBe(ROSTER_ALSAADANY_PROFILE_URL);
    expect(ALSAADANY_SAME_AS_URL).toBe(ROSTER_ALSAADANY_SAME_AS_URL);
    const person = buildPersonNode({ name: 'Mohammad Alsaadany', slug: 'mohammad-alsaadany', jobTitle: 'MEA Director' });
    const roster = withAlsaadanyPersonJsonLd<{ '@type': string; name: string; jobTitle?: string; url?: string; sameAs?: string[] }>({
      '@type': 'Person',
      name: 'Mohammad Alsaadany',
      jobTitle: 'MEA Director',
    });
    expect(person?.url).toBe(roster.url);
    expect(person?.sameAs).toEqual(roster.sameAs);
  });

  it('never gives another author Alsaadany’s LinkedIn profile', () => {
    const person = buildPersonNode({
      name: 'Dina Ibrahim',
      slug: 'dina-ibrahim',
      linkedIn: 'https://www.linkedin.com/in/mohammad-alsaadany/',
    });
    expect(person?.url).toBeUndefined();
    expect(person?.sameAs).toBeUndefined();
  });
});

describe('Mystery shopping article — React BlogPosting graph', () => {
  const imageUrl =
    'https://cdn.sanity.io/images/h2whvvpo/production/0000000000000000000000000000000000000000-1200x630.jpg?w=1200&h=630&fit=crop&fm=jpg&q=90';
  const basePost: BlogPost = {
    id: 'fixture',
    slug: SLUG,
    title: ARTICLE.title,
    excerpt: ARTICLE.excerpt,
    date: '11 Oct 2026',
    category: ARTICLE.category,
    country: ARTICLE.country,
    coverImage: imageUrl,
    coverImageAlt: ARTICLE.cover.alt,
    body: bodyHtml,
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'retail',
    tags: ARTICLE.tags,
    faq: ARTICLE.faq,
    seoKeywords: ARTICLE.seo.keywords,
    publishedAtIso: '2026-10-11T12:00:00.000Z',
    updatedAtIso: '2026-10-12T09:30:00.000Z',
    authorName: rosterAuthor?.name,
    authorSlug: AUTHOR_SLUG,
    authorTitle: AUTHOR_JOB_TITLE,
  };

  function graphFor(post: BlogPost) {
    const extras = buildIndustriesInsightSchemaExtras({
      post,
      slug: SLUG,
      pageUrl: ARTICLE_URL,
      imageUrl,
      imageWidth: 1200,
      imageHeight: 630,
      body: post.body,
      inLanguage: 'en',
      headline: post.title,
    });
    return buildSchemas({
      pageType: 'blog',
      pageUrl: ARTICLE_URL,
      language: 'en',
      headline: post.title,
      description: ARTICLE.seo.metaDescription,
      imageUrl,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      articleSection: post.category,
      keywords: extras.keywords,
      schemaMentions: extras.mentions,
      about: extras.about,
      authorName: post.authorName || 'BioNixus Research Team',
      publishedAt: post.publishedAtIso,
      modifiedAt: post.updatedAtIso,
      breadcrumb: [
        { name: 'Home', item: 'https://www.bionixus.com/' },
        { name: 'Industries', item: 'https://www.bionixus.com/bionixus-industries' },
        { name: 'Industry Insights', item: 'https://www.bionixus.com/bionixus-industries/insights' },
        { name: post.title, item: ARTICLE_URL },
      ],
      faqItems: ARTICLE.faq,
      wordCount: extras.wordCount,
      authorNode: extras.authorNode,
      imageId: extras.imageId,
      imageCaption: extras.imageCaption,
      extraNodes: extras.extraNodes,
    });
  }

  function vocabularyIssues(nodes: Record<string, unknown>[]): string[] {
    const issues: string[] = [];
    for (const node of nodes) for (const [entry, path] of walk(node)) checkNode(entry, path, issues);
    return issues;
  }

  it('emits valid BlogPosting, BreadcrumbList, FAQPage, Person, ImageObject and HowTo nodes', () => {
    const nodes = graphFor(basePost);
    expect(nodes.map((n) => n['@type'])).toEqual([
      'BlogPosting',
      'BreadcrumbList',
      'FAQPage',
      'Person',
      'ImageObject',
      'HowTo',
    ]);
    expect(nodes.every((n) => isValidSchemaNode(JSON.parse(JSON.stringify(n))))).toBe(true);
    expect(vocabularyIssues(nodes)).toEqual([]);

    expect(nodes[0]).toMatchObject({
      headline: ARTICLE.title,
      description: ARTICLE.seo.metaDescription,
      datePublished: '2026-10-11T12:00:00.000Z',
      dateModified: '2026-10-12T09:30:00.000Z',
      inLanguage: 'en',
      articleSection: 'B2C Market Research',
      keywords: ARTICLE.seo.keywords.join(', '),
      wordCount: countWords(htmlToPlainText(bodyHtml)),
      mainEntityOfPage: { '@type': 'WebPage', url: ARTICLE_URL },
      image: { '@type': 'ImageObject', '@id': `${ARTICLE_URL}#primaryimage`, width: 1200, height: 630 },
      publisher: { logo: { url: 'https://www.bionixus.com/bionixus-logo.webp', width: 200, height: 57 } },
      author: { '@type': 'Person', '@id': PERSON_ID },
    });
  });

  it('matches the FAQPage to the visible FAQ word for word', () => {
    const faqPage = graphFor(basePost).find((n) => n['@type'] === 'FAQPage') as {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
    };
    expect(faqPage.mainEntity.map((q) => ({ question: q.name, answer: q.acceptedAnswer.text }))).toEqual(ARTICLE.faq);
  });

  it('describes Sarah Chen, Global Research Manager, as the Person the article credits', () => {
    const nodes = graphFor(basePost);
    const person = {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Sarah Chen',
      jobTitle: 'Global Research Manager',
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    };
    expect(nodes.find((n) => n['@type'] === 'Person')).toEqual({ '@context': 'https://schema.org', ...person });
    expect(nodes[0].author).toEqual(person);
  });

  it('credits the BioNixus Research Team when no author is set', () => {
    const nodes = graphFor({ ...basePost, authorName: undefined, authorSlug: undefined, authorTitle: undefined });
    expect(nodes.some((n) => n['@type'] === 'Person')).toBe(false);
    expect(nodes[0]).toMatchObject({
      author: { '@type': 'Organization', name: 'BioNixus Research Team', url: 'https://www.bionixus.com' },
    });
    expect(vocabularyIssues(nodes)).toEqual([]);
  });
});
