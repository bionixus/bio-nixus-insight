import { BlogPost } from '@/types/blog';

/**
 * Array of all hardcoded blog posts designed for SEO strategy,
 * matching the Infomine competitive outranking plan.
 * (Note: High-value MENA/KSA/UAE guides are now moved to Sanity)
 */
export const hardcodedSeoPosts: BlogPost[] = [
    // Legacy hardcoded posts can be added here if needed,
    // though Sanity is now the primary content source.
];

/** Helper to find a hardcoded post by slug */
export function getHardcodedPostBySlug(slug: string): BlogPost | undefined {
    return hardcodedSeoPosts.find((p) => p.slug === slug);
}
