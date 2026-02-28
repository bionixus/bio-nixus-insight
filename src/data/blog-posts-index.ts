import { BlogPost } from '@/types/blog';
import { menaHealthcareStatistics2025 } from './blog-mena-healthcare-statistics-2025';

/**
 * Array of all hardcoded blog posts designed for SEO strategy,
 * matching the Infomine competitive outranking plan.
 */
export const hardcodedSeoPosts: BlogPost[] = [
    // 9 migrated posts removed from fallback; now managed in Sanity CMS.
    menaHealthcareStatistics2025,
];

/** Helper to find a hardcoded post by slug */
export function getHardcodedPostBySlug(slug: string): BlogPost | undefined {
    return hardcodedSeoPosts.find((p) => p.slug === slug);
}
