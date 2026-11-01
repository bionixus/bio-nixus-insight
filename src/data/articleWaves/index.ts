/**
 * Registry of shipped article-waves posts, in brief order.
 * Add each new wave article here; the blog index, the Sanity scripts and
 * src/lib/seo/__tests__/article-waves.test.ts all read this list.
 */
import type { BlogPost } from '@/types/blog';
import type { WaveArticle } from '@/data/articleWaves/buildWaveArticle';
import { KUWAIT_DRUG_PRICING_ARTICLE } from '@/data/blog-kuwait-drug-pricing-2026-decision-62';
import { UAE_PHARMACOVIGILANCE_ARTICLE } from '@/data/blog-uae-pharmacovigilance-requirements-2026';
import { JAPANESE_PHARMA_MIDDLE_EAST_ARTICLE } from '@/data/blog-japanese-pharmaceutical-companies-middle-east-entry';

export const WAVE_ARTICLES: readonly WaveArticle[] = [
  KUWAIT_DRUG_PRICING_ARTICLE,
  UAE_PHARMACOVIGILANCE_ARTICLE,
  JAPANESE_PHARMA_MIDDLE_EAST_ARTICLE,
];

export const WAVE_ARTICLE_POSTS: BlogPost[] = WAVE_ARTICLES.map((article) => article.post);
