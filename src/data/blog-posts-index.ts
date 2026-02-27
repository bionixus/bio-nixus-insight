import { BlogPost } from '@/types/blog';
import { sfdaDrugRegistrationGuide } from './blog-sfda-registration';
import { gccMethodologiesGuide } from './blog-gcc-methodologies';
import { kolMappingGuide } from './blog-kol-mapping';
import { uaeMarketAccessGuide } from './blog-uae-market-access';
import { therapyAreasSaudiArabia } from './blog-top-therapy-saudi';
import { saudiPharmaEntryPlaybook } from './blog-saudi-market-entry';
import { ciPharmaGccGuide } from './blog-ci-pharma-gcc';
import { niceHtaGuide } from './blog-nice-hta-guide';
import { patientJourneySaudiArabia } from './blog-patient-journey-saudi';

/**
 * Array of all hardcoded blog posts designed for SEO strategy,
 * matching the Infomine competitive outranking plan.
 */
export const hardcodedSeoPosts: BlogPost[] = [
    sfdaDrugRegistrationGuide,
    gccMethodologiesGuide,
    kolMappingGuide,
    uaeMarketAccessGuide,
    therapyAreasSaudiArabia,
    saudiPharmaEntryPlaybook,
    ciPharmaGccGuide,
    niceHtaGuide,
    patientJourneySaudiArabia,
];

/** Helper to find a hardcoded post by slug */
export function getHardcodedPostBySlug(slug: string): BlogPost | undefined {
    return hardcodedSeoPosts.find((p) => p.slug === slug);
}
