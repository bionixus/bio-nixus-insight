/**
 * Registers article-waves posts in every crawler, SEO and sitemap list:
 * blog-robots, crawler stubs, both CTR override tables, generate-sitemap
 * (three places), public/sitemap.xml, llms.txt, llm.txt, verify-ssr-bundle
 * and vercel.json. Each slug is inserted after the previous wave slug, so
 * the lists stay in brief order. Slugs already present are skipped.
 *
 *   node scripts/register-wave-article.mjs              # every wave slug
 *   node scripts/register-wave-article.mjs <slug> ...   # selected slugs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadWaveArticles } from './generate-wave-article-sanity-json.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://www.bionixus.com';
const FIRST_ANCHOR = 'china-biotech-export-controls-pharma-deals-2026';

const q = (value) => `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function edit(file, fn) {
  const full = path.join(root, file);
  const before = fs.readFileSync(full, 'utf8');
  const after = fn(before);
  if (after !== before) {
    fs.writeFileSync(full, after);
    console.log(`  updated ${file}`);
  }
}

/** Inserts `block` after every line that equals `anchorLine` (trimmed). */
function afterLines(source, anchorLine, block) {
  const lines = source.split('\n');
  const out = [];
  let hits = 0;
  for (const line of lines) {
    out.push(line);
    if (line.trim() === anchorLine) {
      hits += 1;
      out.push(block(line));
    }
  }
  if (!hits) throw new Error(`Anchor not found: ${anchorLine}`);
  return out.join('\n');
}

/** Inserts `block` after the object or array that opens with `opener`. */
function afterEntry(source, opener, closer, block) {
  const start = source.indexOf(opener);
  if (start === -1) throw new Error(`Entry not found: ${opener.trim()}`);
  const end = source.indexOf(closer, start) + closer.length;
  return source.slice(0, end) + block + source.slice(end);
}

function register(article, anchor) {
  const { slug, path: urlPath, url, metaTitle, metaDescription } = article;
  const cta = article.ctaSection.buttonUrl.replace(ORIGIN, '');
  console.log(`${slug} (after ${anchor})`);

  const slugLine = (line) => line.replace(anchor, slug);
  const has = (source, needle) => source.includes(needle);

  edit('src/lib/blog-robots.ts', (s) => (has(s, `'${slug}'`) ? s : afterLines(s, `'${anchor}',`, slugLine)));

  edit('blog-crawler-stubs.mjs', (s) => {
    if (has(s, `'${slug}'`)) return s;
    s = afterLines(s, `'${anchor}',`, slugLine);
    return afterEntry(
      s,
      `  '${anchor}': {\n`,
      '  },\n',
      `  '${slug}': {\n    title: ${q(metaTitle)},\n    description:\n      ${q(metaDescription)},\n  },\n`,
    );
  });

  for (const file of ['lib/ctr-seo-overrides.mjs', 'src/server/ctr-seo-overrides.js']) {
    edit(file, (s) =>
      has(s, `'${urlPath}'`)
        ? s
        : afterEntry(
            s,
            `  '/blog/${anchor}': {\n`,
            '  },\n',
            `  '${urlPath}': {\n    title: ${q(metaTitle)},\n    description:\n      ${q(metaDescription)},\n  },\n`,
          ),
    );
  }

  edit('scripts/verify-ssr-bundle.mjs', (s) =>
    has(s, `'${urlPath}'`) ? s : afterLines(s, `'/blog/${anchor}',`, slugLine),
  );

  edit('scripts/generate-sitemap.mjs', (s) => {
    if (has(s, `path: '${urlPath}'`)) return s;
    s = afterLines(s, `'${anchor}',`, slugLine);
    const lastmod = article.updatedIso.slice(0, 10);
    const staticLine = s
      .split('\n')
      .find((line) => line.trim().startsWith(`{ path: '/blog/${anchor}'`));
    if (!staticLine) throw new Error(`staticPages entry not found for ${anchor}`);
    s = afterLines(s, staticLine.trim(), () =>
      `  { path: '${urlPath}', priority: '0.88', changefreq: 'monthly', lastmod: '${lastmod}' },`,
    );
    return afterEntry(
      s,
      `  '/blog/${anchor}': [\n`,
      '  ],\n',
      `  '${urlPath}': [\n    'src/data/blog-${slug}.ts',\n    'src/data/articleWaves/buildWaveArticle.ts',\n  ],\n`,
    );
  });

  edit('vercel.json', (s) => {
    if (has(s, `"source": "${urlPath}"`)) return s;
    const at = s.indexOf(`      "source": "/blog/${anchor}",`);
    if (at === -1) throw new Error(`vercel.json rewrite not found for ${anchor}`);
    const open = s.lastIndexOf('    {', at);
    const end = s.indexOf('    },\n', open) + '    },\n'.length;
    const entry = `    {\n      "source": "${urlPath}",\n      "destination": "/api/indexnow-key?__ssr=1&url=${urlPath}"\n    },\n`;
    return s.slice(0, end) + entry + s.slice(end);
  });

  edit('public/llms.txt', (s) => {
    if (has(s, `(${url})`)) return s;
    const line = s.split('\n').find((l) => l.includes(`(${ORIGIN}/blog/${anchor})`));
    if (!line) throw new Error(`llms.txt line not found for ${anchor}`);
    const summary = article.excerpt.replace(/\s+/g, ' ').trim();
    return afterLines(s, line.trim(), () =>
      `- [${article.breadcrumbLabel}](${url}): sourced 2026 briefing. ${summary} (links to /healthcare-market-research and ${cta})`,
    );
  });

  edit('public/llm.txt', (s) => {
    if (has(s, url)) return s;
    const line = s.split('\n').find((l) => l.endsWith(`${ORIGIN}/blog/${anchor}`));
    if (!line) throw new Error(`llm.txt line not found for ${anchor}`);
    return afterLines(s, line.trim(), () => `- ${metaTitle} (EN): ${url}`);
  });

  edit('public/sitemap.xml', (s) => {
    if (has(s, `<loc>${url}</loc>`)) return s;
    const entry = `  <url>\n    <loc>${url}</loc>\n    <lastmod>${article.updatedIso.slice(0, 10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.88</priority>\n  </url>\n`;
    const blogLocs = [...s.matchAll(/ {2}<url>\n {4}<loc>(https:\/\/www\.bionixus\.com\/blog\/[^<]+)<\/loc>/g)];
    const next = blogLocs.find((m) => m[1] > url);
    const at = next ? next.index : s.lastIndexOf('</urlset>');
    return s.slice(0, at) + entry + s.slice(at);
  });
}

const wanted = process.argv.slice(2);
const articles = await loadWaveArticles();
articles.forEach((article, index) => {
  if (wanted.length && !wanted.includes(article.slug)) return;
  register(article, index === 0 ? FIRST_ANCHOR : articles[index - 1].slug);
});
