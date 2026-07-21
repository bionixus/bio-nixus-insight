import { BlogPost } from '@/types/blog';
import { GCC_PHARMACOECONOMICS_HARDCODED_POST } from '@/data/blog-gcc-pharmacoeconomics';
import { NF1_KOSELUGO_HARDCODED_POST, NF1_KOSELUGO_DRUG_HARDCODED_POST } from '@/data/blog-nf1-koselugo-market-research';
import { DESMOID_BLOG_HARDCODED_POST } from '@/data/blog-desmoid-ogsiveo-market-research';
import { SKYRIZI_HARDCODED_POST } from '@/data/blog-skyrizi-omnichannel';
import { MARKET_RESEARCH_COMPANIES_EGYPT_HARDCODED_POST } from '@/data/blog-market-research-companies-egypt';

/**
 * Array of all hardcoded blog posts designed for SEO strategy,
 * matching the Infomine competitive outranking plan.
 * (Note: High-value MENA/KSA/UAE guides are now moved to Sanity)
 */
export const hardcodedSeoPosts: BlogPost[] = [
  GCC_PHARMACOECONOMICS_HARDCODED_POST,
  NF1_KOSELUGO_HARDCODED_POST,
  NF1_KOSELUGO_DRUG_HARDCODED_POST,
  DESMOID_BLOG_HARDCODED_POST,
  SKYRIZI_HARDCODED_POST,
  MARKET_RESEARCH_COMPANIES_EGYPT_HARDCODED_POST,
];

/** Helper to find a hardcoded post by slug */
export function getHardcodedPostBySlug(slug: string): BlogPost | undefined {
    return hardcodedSeoPosts.find((p) => p.slug === slug);
}
