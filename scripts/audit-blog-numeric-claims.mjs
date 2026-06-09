#!/usr/bin/env node
/**
 * Lists blog posts whose excerpt/title may contain numeric claims needing editorial review.
 * Outputs CSV to stdout. Requires Sanity env for live CMS scan; otherwise scans hardcoded index.
 *
 * Run: npm run audit:blog-numeric-claims
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const NUMERIC_RE = /[$£€%]|\b\d+(\.\d+)?\s*(million|billion|bn|m\b|%)/i;

function scanText(slug, title, text) {
  if (!text || !NUMERIC_RE.test(text)) return null;
  const matches = text.match(
    /[$£€]?\s*\d[\d,.]*\s*(?:%|million|billion|bn|m\b)?/gi,
  );
  return {
    slug,
    title: (title ?? slug).slice(0, 80),
    matchCount: matches?.length ?? 0,
    sample: (matches ?? []).slice(0, 3).join(' | '),
  };
}

async function scanSanity() {
  const projectId = process.env.SANITY_PROJECT_ID ?? process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET ?? process.env.VITE_SANITY_DATASET ?? 'production';
  const token = process.env.SANITY_API_TOKEN;
  if (!projectId) return null;

  const { createClient } = await import('@sanity/client');
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: false,
    token: token || undefined,
  });

  const posts = await client.fetch(
    `*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current,
      title,
      excerpt,
      "bodyText": pt::text(body)
    }`,
  );
  return posts;
}

async function scanHardcoded() {
  try {
    const { loadModuleBundle } = await import('./loadReportDataBundle.mjs');
    const { hardcodedSeoPosts } = await loadModuleBundle('src/data/blog-posts-index.ts');
    return (hardcodedSeoPosts ?? []).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      bodyText: '',
    }));
  } catch {
    return [];
  }
}

const rows = [];
let source = 'hardcoded-index';

try {
  let posts = await scanSanity();
  if (posts?.length) {
    source = 'sanity';
  } else {
    posts = await scanHardcoded();
  }

  for (const post of posts ?? []) {
    const combined = [post.title, post.excerpt, post.bodyText].filter(Boolean).join(' ');
    const hit = scanText(post.slug, post.title, combined);
    if (hit) rows.push(hit);
  }

  const header = 'slug,title,matchCount,sample';
  const csv = [
    header,
    ...rows.map((r) =>
      [r.slug, `"${r.title.replace(/"/g, '""')}"`, r.matchCount, `"${r.sample.replace(/"/g, '""')}"`].join(
        ',',
      ),
    ),
  ].join('\n');

  const outPath = join(root, 'docs/seo/blog-numeric-claims-audit.csv');
  writeFileSync(outPath, `${csv}\n`, 'utf8');

  console.log(`Source: ${source}`);
  console.log(`Posts with numeric patterns: ${rows.length}`);
  console.log(`Wrote ${outPath}`);
  console.log('\nEditorial: add sources[] and factCheckedAt in Sanity for each row before republishing stats.');
} catch (err) {
  console.error(err);
  process.exit(1);
}
