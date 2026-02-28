import { BlogPost } from '@/types/blog';
import { menaHealthcareStatistics2025 } from './blog-mena-healthcare-statistics-2025';
import { nupcoTenderingGuide } from './blog-nupco-saudi-arabia-tendering-guide';
import { uaeFormularyGuide } from './blog-abu-dhabi-doh-vs-dubai-dha-formulary';

/**
 * Array of all hardcoded blog posts designed for SEO strategy,
 * matching the Infomine competitive outranking plan.
 */
export const hardcodedSeoPosts: BlogPost[] = [
    menaHealthcareStatistics2025,
    nupcoTenderingGuide,
    uaeFormularyGuide
];

/** Helper to find a hardcoded post by slug */
export function getHardcodedPostBySlug(slug: string): BlogPost | undefined {
    return hardcodedSeoPosts.find((p) => p.slug === slug);
}
