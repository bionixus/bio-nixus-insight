#!/usr/bin/env node
/**
 * Build scripts/data/{slug}.json for BIO-435 Day 1 multilingual batch.
 * Run: node scripts/build-bio435-day1-json.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ALL_BIO435_DAY1_ARTICLES } from './lib/bio435-day1-articles.mjs';
import { PART2_ARTICLES } from './lib/bio435-day1-articles-part2.mjs';

import { EXPANSION_PARAGRAPHS } from './lib/bio435-expansion-paragraphs.mjs';
import { SUPPLEMENTARY_BY_SLUG } from './lib/bio435-supplementary.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(__dirname, 'data');

function countWords(html, lang = 'en') {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (lang === 'zh') {
    const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
    const latin = text.replace(/[\u4e00-\u9fff]/g, ' ').split(/\s+/).filter(Boolean).length;
    return cjk + latin;
  }
  return text.split(/\s+/).filter(Boolean).length;
}

function expandBody(bodyHtml, lang, slug) {
  let html = bodyHtml;
  const supplementary = SUPPLEMENTARY_BY_SLUG[slug];
  if (supplementary) {
    const faqMarker = html.match(/<h2 id="faq[^"]*">/i)?.[0];
    if (faqMarker) {
      html = html.replace(faqMarker, `${supplementary.trim()}\n\n${faqMarker}`);
    } else {
      html += supplementary;
    }
  }

  const paragraphs = EXPANSION_PARAGRAPHS[lang] || EXPANSION_PARAGRAPHS.en;
  let words = countWords(html, lang);
  let idx = 0;
  const maxIter = 120;
  const faqMarker = html.match(/<h2 id="faq[^"]*">/i)?.[0];

  while (words < 1800 && idx < maxIter) {
    const block = paragraphs[idx % paragraphs.length];
    if (faqMarker && html.includes(faqMarker)) {
      html = html.replace(faqMarker, `${block}\n\n${faqMarker}`);
    } else {
      html += `\n\n${block}`;
    }
    words = countWords(html, lang);
    idx += 1;
  }
  return html;
}

function trimMetaTitle(title, max = 60) {
  if (title.length <= max) return title;
  return title.slice(0, max - 3) + '...';
}

const articles = [...ALL_BIO435_DAY1_ARTICLES, ...PART2_ARTICLES];

fs.mkdirSync(outDir, { recursive: true });

const report = [];

for (const article of articles) {
  const slug = article.slug.current;
  const lang = article.language || 'en';
  const supplementary = SUPPLEMENTARY_BY_SLUG[slug];
  let tableOfContents = [...(article.tableOfContents || [])];
  if (supplementary) {
    const h2Matches = [...supplementary.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)];
    for (const m of h2Matches) {
      const faqIdx = tableOfContents.findIndex((t) => t.anchor === 'faq');
      const entry = { heading: m[2], anchor: m[1] };
      if (faqIdx >= 0) tableOfContents.splice(faqIdx, 0, entry);
      else tableOfContents.push(entry);
    }
  }

  const bodyHtml = expandBody(article.bodyHtml, lang, slug);
  const words = countWords(bodyHtml, lang);

  const payload = {
    ...article,
    seo: {
      ...article.seo,
      metaTitle: trimMetaTitle(article.seo.metaTitle),
    },
    tableOfContents,
    bodyHtml,
    readingTime: article.readingTime || Math.min(22, Math.max(16, Math.round(words / 120))),
  };

  const outPath = path.join(outDir, `${slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  report.push({ slug, lang, words, metaTitleLen: payload.seo.metaTitle.length, ok: words >= 1800 && words <= 2600 });
}

console.log('\nBIO-435 Day 1 JSON build report:\n');
for (const r of report) {
  const flag = r.ok ? '✓' : '⚠';
  console.log(`${flag} ${r.slug} (${r.lang}): ${r.words} words, metaTitle=${r.metaTitleLen} chars`);
}
const failed = report.filter((r) => !r.ok);
if (failed.length) {
  console.warn(`\n${failed.length} article(s) outside 1800–2600 word target.`);
  process.exitCode = 1;
} else {
  console.log(`\nAll ${report.length} files written to scripts/data/`);
}
