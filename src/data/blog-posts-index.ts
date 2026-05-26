import { BlogPost } from '@/types/blog';
import { GCC_PHARMACOECONOMICS_HARDCODED_POST } from '@/data/blog-gcc-pharmacoeconomics';

/**
 * Array of all hardcoded blog posts designed for SEO strategy,
 * matching the Infomine competitive outranking plan.
 * (Note: High-value MENA/KSA/UAE guides are now moved to Sanity)
 */
export const hardcodedSeoPosts: BlogPost[] = [
  GCC_PHARMACOECONOMICS_HARDCODED_POST,
];

/** Helper to find a hardcoded post by slug */
export function getHardcodedPostBySlug(slug: string): BlogPost | undefined {
    return hardcodedSeoPosts.find((p) => p.slug === slug);
}
