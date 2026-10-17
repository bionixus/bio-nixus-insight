/**
 * The five 18 October 2026 social articles, published together.
 */
import { socialArticle as socialArticle0 } from '@/data/blog-medicare-globe-model-part-b-account-level-2027';
import { socialArticle as socialArticle1 } from '@/data/blog-rasonque-daraxonrasib-pancreatic-ema-chmp-2026';
import { socialArticle as socialArticle2 } from '@/data/blog-gazya-obinutuzumab-lupus-anvisa-brazil-access-2026';
import { socialArticle as socialArticle3 } from '@/data/blog-orzeyful-oveporexton-narcolepsy-japan-china-launch-2026';
import { socialArticle as socialArticle4 } from '@/data/blog-egypt-eda-decree-480-drug-pricing-2026';
import type { BlogPost } from '@/types/blog';

export type SocialArticleRecord = BlogPost & {
  keywords: string[];
  sources: string[];
  focusKeyword: string;
};

export const SOCIAL_ARTICLES_2026_10_18: SocialArticleRecord[] = [
  socialArticle0,
  socialArticle1,
  socialArticle2,
  socialArticle3,
  socialArticle4,
];
