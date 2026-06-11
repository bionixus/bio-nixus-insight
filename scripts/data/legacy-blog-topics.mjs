/**
 * Topic metadata for legacy blog rewrites.
 * Titles and excerpts are merged from Sanity at runtime when available.
 */

import { inferLegacyCluster } from './legacy-blog-internal-links.mjs';

/** @typedef {{
 *   slug: string;
 *   title: string;
 *   cluster: string;
 *   geo: string;
 *   language: string;
 *   focusKeyword: string;
 *   excerpt?: string;
 *   preserveBody?: boolean;
 * }} LegacyTopic */

/** Slugs with curated local HTML in scripts/data/*. */
export const LOCAL_BODY_FILES = {
  'top-healthcare-market-research-companies-uae': 'top-healthcare-market-research-companies-uae-body.html',
  'top-healthcare-market-research-companies-kuwait': 'top-healthcare-market-research-companies-kuwait-body.html',
  'top-healthcare-market-research-firms-saudi-arabia': 'top-healthcare-market-research-firms-saudi-arabia-body.html',
  'top-market-research-companies-egypt-2026': 'top-market-research-companies-egypt-2026-body.html',
  'digital-therapeutics-regulation-mena-markets': 'digital-therapeutics-mena-body.html',
};

/** Posts flagged for manual medical/clinical review after auto-rewrite. */
export const MANUAL_REVIEW_SLUGS = new Set([
  'sfda-approval-qfitlia-saudi-arabia-pharmaceutical-market',
  'fda-update-glp-1-obesity-market-crackdown-2026',
  'rare-disease-orphan-drug-saudi-arabia-sfda-2026',
  'deutsche-pharmaunternehmen-2026-pipeline-updates',
  'أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي',
  'سوق-الدواء-السعودي-2026',
]);

const GEO_BY_CLUSTER = {
  'gcc-pillar': 'GCC and MENA',
  saudi: 'Saudi Arabia',
  uae: 'United Arab Emirates',
  kuwait: 'Kuwait',
  egypt: 'Egypt',
  qatar: 'Qatar',
  china: 'China',
  europe: 'Europe and UK',
  germany: 'Germany',
  access: 'GCC and global',
  methodology: 'GCC and multinational',
  commercial: 'GCC',
  oncology: 'GCC oncology',
  digital: 'MENA digital health',
  'firm-guide': 'MENA',
};

/**
 * @param {{ slug: string; title?: string; excerpt?: string; language?: string }} post
 * @returns {LegacyTopic}
 */
export function buildTopicFromPost(post) {
  const cluster = inferLegacyCluster(post.slug);
  const title =
    post.title?.trim() ||
    post.slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  const geo = GEO_BY_CLUSTER[cluster] ?? 'GCC and MENA';
  const language = post.language || (/[\u0600-\u06FF]/.test(post.slug) ? 'ar' : 'en');

  return {
    slug: post.slug,
    title,
    cluster,
    geo,
    language,
    focusKeyword: title.split(':')[0].slice(0, 60),
    excerpt: post.excerpt,
    preserveBody: Boolean(LOCAL_BODY_FILES[post.slug]),
  };
}
