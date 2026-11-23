/**
 * Build-time catalog of live articles for llms.txt, llms-full.txt and the blog RSS feed.
 * Published Sanity posts plus hardcoded posts. Drafts and redirecting URLs are left out.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { hardcodedSeoPosts } from '../src/data/blog-posts-index';
import {
  blogCardPath,
  isListableBlogPost,
  type BlogListingHub,
} from '../src/lib/blog-listing-eligibility';
import { decodeHtmlEntities } from '../lib/html-meta-escape.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.bionixus.com';
const START = '<!-- live-articles:start -->';
const END = '<!-- live-articles:end -->';

type SourcePost = {
  id?: string;
  _id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  seoMetaDescription?: string;
  metaDescription?: string;
  contentSilo?: string;
  publishedAtIso?: string;
  date?: string;
};

type Article = {
  title: string;
  path: string;
  description: string;
  publishedAt: string;
};

function hubOf(contentSilo: string | undefined): BlogListingHub {
  return contentSilo === 'industries' ? 'industries' : 'healthcare';
}

function publishedTime(value: string): number {
  const time = Date.parse(value);
  return Number.isNaN(time) ? 0 : time;
}

function plainText(value: string | undefined, max: number): string {
  let text = decodeHtmlEntities(String(value || ''))
    .replace(/<[^>]*>/g, ' ')
    .replace(/[\u2014\u2013]/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+,/g, ',')
    .replace(/,{2,}/g, ',');
  if (!text) text = 'Research note from BioNixus.';
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = (lastSpace > Math.floor(max * 0.6) ? slice.slice(0, lastSpace) : slice)
    .trim()
    .replace(/[,:;.\s]+$/g, '');
  return `${cut}.`;
}

function toArticle(post: SourcePost): Article | null {
  const slug = post.slug?.trim() ?? '';
  const hub = hubOf(post.contentSilo);
  const id = post.id || post._id;
  if (!isListableBlogPost({ id, slug }, hub)) return null;
  const path = blogCardPath(slug, hub);
  return {
    title: plainText(post.title || slug, 180).replace(/\.$/, ''),
    path,
    description: plainText(post.seoMetaDescription || post.metaDescription || post.excerpt || post.title, 220),
    publishedAt: post.publishedAtIso || post.date || '',
  };
}

function markdownLine(article: Article, max: number): string {
  const title = article.title.replace(/[\[\]]/g, '');
  const description = plainText(article.description, max);
  return `- [${title}](${BASE}${article.path}): ${description}`;
}

function upsertSection(file: string, body: string) {
  const block = `${START}\n${body.trim()}\n${END}`;
  const current = readFileSync(file, 'utf8');
  const next = current.includes(START) && current.includes(END)
    ? current.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block)
    : `${current.trimEnd()}\n\n${block}\n`;
  writeFileSync(file, next.endsWith('\n') ? next : `${next}\n`, 'utf8');
}

function escXml(value: string): string {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(iso: string): string {
  const date = iso ? new Date(iso) : new Date();
  if (Number.isNaN(date.getTime())) return new Date().toUTCString();
  return date.toUTCString();
}

function buildRss(articles: Article[]): string {
  const items = articles
    .map((article) => {
      const link = `${BASE}${article.path}`;
      return `<item>
  <title>${escXml(article.title)}</title>
  <link>${escXml(link)}</link>
  <guid isPermaLink="true">${escXml(link)}</guid>
  <pubDate>${toRfc822(article.publishedAt)}</pubDate>
  <description>${escXml(plainText(article.description, 280))}</description>
</item>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BioNixus blog</title>
    <link>${BASE}/blog</link>
    <description>Healthcare and industry research articles from BioNixus.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

function writeRss(xml: string) {
  const targets = [join(root, 'public/blog/rss.xml')];
  const distDir = join(root, 'dist/client/blog');
  if (existsSync(join(root, 'dist/client'))) targets.push(join(distDir, 'rss.xml'));
  for (const target of targets) {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, xml, 'utf8');
  }
}

async function fetchSanityPosts(): Promise<SourcePost[]> {
  const projectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
  const dataset = process.env.VITE_SANITY_DATASET || 'production';
  const token =
    process.env.SANITY_API_TOKEN ||
    process.env.SANITY_TOKEN ||
    process.env.VITE_SANITY_API_TOKEN ||
    undefined;
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: !token,
    ...(token ? { token } : {}),
  });
  const query = `*[_type == "blogPost" && defined(slug.current) && !(_id in path("drafts.**"))]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "metaDescription": seo.metaDescription,
    contentSilo,
    "publishedAtIso": coalesce(publishedAt, _createdAt)
  }`;
  const rows = await client.fetch<SourcePost[]>(query);
  return Array.isArray(rows) ? rows : [];
}

async function main() {
  const sanityPosts = await fetchSanityPosts();
  const byPath = new Map<string, Article>();
  for (const post of sanityPosts) {
    const article = toArticle(post);
    if (!article) continue;
    byPath.set(article.path, article);
  }
  for (const post of hardcodedSeoPosts) {
    const article = toArticle(post);
    if (!article || byPath.has(article.path)) continue;
    byPath.set(article.path, article);
  }
  const articles = [...byPath.values()].sort(
    (a, b) => publishedTime(b.publishedAt) - publishedTime(a.publishedAt) || a.title.localeCompare(b.title),
  );
  if (articles.length < 20) {
    throw new Error(`Refusing to write a catalog of only ${articles.length} live articles.`);
  }

  const shortBody = ['## Live articles', ...articles.map((article) => markdownLine(article, 180))].join('\n');
  const fullBody = ['## Live articles', ...articles.map((article) => markdownLine(article, 320))].join('\n');
  upsertSection(join(root, 'public/llms.txt'), shortBody);
  upsertSection(join(root, 'public/llms-full.txt'), fullBody);
  if (existsSync(join(root, 'dist/client'))) {
    const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
    const llmsFull = readFileSync(join(root, 'public/llms-full.txt'), 'utf8');
    writeFileSync(join(root, 'dist/client/llms.txt'), llms, 'utf8');
    writeFileSync(join(root, 'dist/client/llms-full.txt'), llmsFull, 'utf8');
  }
  writeRss(buildRss(articles));
  const required = [
    '/blog/gazya-obinutuzumab-lupus-anvisa-brazil-access-2026',
    '/blog/saudi-hematology-diagnostics-vs-ward-brand-cut',
    '/blog/saudi-diabetes-syndicated-vs-hospital-switching',
  ];
  const missing = required.filter((path) => !byPath.has(path));
  if (missing.length) {
    throw new Error(`Live catalog is missing ${missing.join(', ')}`);
  }
  console.log(`Live articles: ${articles.length}. Wrote llms.txt, llms-full.txt and public/blog/rss.xml.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
