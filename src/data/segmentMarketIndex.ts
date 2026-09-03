/**
 * Lightweight index of the geography × segment market landing pages.
 *
 * routes.tsx, DocumentHead-adjacent helpers, and hub link blocks import THIS file,
 * never src/data/segmentMarketPages.ts — the full page copy is ~800KB and must stay
 * behind the lazy route chunk (see src/pages/SegmentMarketRoute.tsx) so it never
 * lands in the initial bundle.
 *
 * scripts/data/app-route-registries.mjs fails the build if this list drifts from
 * the full registry.
 */

import type { SegmentMarketGroup } from '@/data/segmentMarkets/types';

export type SegmentMarketIndexEntry = {
  slug: string;
  group: SegmentMarketGroup;
  /** Descriptive anchor text, e.g. "Saudi Arabia molecular diagnostics market". */
  label: string;
};

export const SEGMENT_MARKET_INDEX: SegmentMarketIndexEntry[] = [
  { slug: 'saudi-arabia-diagnostic-labs-market', group: 'saudi-diagnostics', label: 'Saudi Arabia diagnostic labs market' },
  { slug: 'saudi-arabia-molecular-diagnostics-market', group: 'saudi-diagnostics', label: 'Saudi Arabia molecular diagnostics market' },
  { slug: 'saudi-arabia-diagnostic-testing-market', group: 'saudi-diagnostics', label: 'Saudi Arabia diagnostic testing market' },
  { slug: 'saudi-arabia-home-diagnostic-testing-market', group: 'saudi-diagnostics', label: 'Saudi Arabia home diagnostic testing market' },
  { slug: 'saudi-arabia-in-vitro-diagnostics-market', group: 'saudi-diagnostics', label: 'Saudi Arabia in-vitro diagnostics (IVD) market' },
  { slug: 'saudi-arabia-genetic-testing-market', group: 'saudi-diagnostics', label: 'Saudi Arabia genetic testing market' },
  { slug: 'saudi-arabia-next-generation-sequencing-market', group: 'saudi-diagnostics', label: 'Saudi Arabia next-generation sequencing market' },
  { slug: 'saudi-arabia-biomarkers-market', group: 'saudi-diagnostics', label: 'Saudi Arabia biomarkers market' },
  { slug: 'saudi-arabia-cancer-biomarkers-market', group: 'saudi-diagnostics', label: 'Saudi Arabia cancer biomarkers market' },

  { slug: 'saudi-arabia-biotechnology-market', group: 'saudi-biotech', label: 'Saudi Arabia biotechnology market' },
  { slug: 'saudi-arabia-regenerative-medicine-market', group: 'saudi-biotech', label: 'Saudi Arabia regenerative medicine market' },
  { slug: 'saudi-arabia-cell-therapy-market', group: 'saudi-biotech', label: 'Saudi Arabia cell therapy market' },
  { slug: 'saudi-arabia-cancer-immunotherapy-market', group: 'saudi-biotech', label: 'Saudi Arabia cancer immunotherapy market' },
  { slug: 'saudi-arabia-precision-medicine-market', group: 'saudi-biotech', label: 'Saudi Arabia precision medicine market' },
  { slug: 'saudi-arabia-api-market', group: 'saudi-biotech', label: 'Saudi Arabia API (active pharmaceutical ingredients) market' },
  { slug: 'saudi-arabia-biocatalyst-market', group: 'saudi-biotech', label: 'Saudi Arabia biocatalyst market' },
  { slug: 'saudi-arabia-plasma-fractionation-market', group: 'saudi-biotech', label: 'Saudi Arabia plasma fractionation market' },
  { slug: 'saudi-arabia-biologics-market', group: 'saudi-biotech', label: 'Saudi Arabia biologics market' },

  { slug: 'saudi-arabia-cardiovascular-devices-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia cardiovascular devices market' },
  { slug: 'saudi-arabia-aesthetics-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia aesthetics market' },
  { slug: 'saudi-arabia-plasma-fractional-laser-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia plasma fractional laser market' },
  { slug: 'saudi-arabia-skincare-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia skincare market' },
  { slug: 'saudi-arabia-home-infusion-therapy-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia home infusion therapy market' },
  { slug: 'saudi-arabia-pharmaceutical-packaging-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia pharmaceutical packaging market' },
  { slug: 'saudi-arabia-obesity-market', group: 'saudi-devices-consumer', label: 'Saudi Arabia (KSA) obesity market insights' },

  { slug: 'gcc-otc-drugs-market', group: 'gcc', label: 'GCC over-the-counter (OTC) drugs market' },
  { slug: 'gcc-tablet-market', group: 'gcc', label: 'GCC tablet (oral solid dose) market' },
  { slug: 'gcc-nutraceuticals-market', group: 'gcc', label: 'GCC nutraceuticals market' },
  { slug: 'gcc-intravenous-solutions-market', group: 'gcc', label: 'GCC intravenous solutions market' },
  { slug: 'gcc-medical-tourism-market', group: 'gcc', label: 'GCC medical tourism market' },
  { slug: 'gcc-obesity-market', group: 'gcc', label: 'GCC obesity market' },
  { slug: 'qatar-personalized-medicine-market', group: 'gcc', label: 'Qatar personalized medicine market' },

  { slug: 'middle-east-biomarkers-market', group: 'middle-east', label: 'Middle East biomarkers market' },
  { slug: 'middle-east-in-vitro-diagnostics-market', group: 'middle-east', label: 'Middle East in vitro diagnostics market' },
  { slug: 'middle-east-biologics-market', group: 'middle-east', label: 'Middle East biologics market' },

  { slug: 'uae-in-vitro-diagnostics-devices-market', group: 'country', label: 'UAE in-vitro diagnostics devices market' },
  { slug: 'uae-obesity-market', group: 'country', label: 'UAE obesity market insights' },
  { slug: 'kuwait-obesity-market', group: 'country', label: 'Kuwait obesity market insights' },
  { slug: 'egypt-medical-tourism-market', group: 'country', label: 'Egypt medical tourism market' },
  { slug: 'turkey-medical-tourism-market', group: 'country', label: 'Turkey medical tourism market' },

  { slug: 'bionixus-saudi-arabia-oncology-insights', group: 'flagship', label: 'BioNixus Saudi Arabia oncology insights' },
  { slug: 'bionixus-uae-oncology-insights', group: 'flagship', label: 'BioNixus UAE oncology insights' },
  { slug: 'top-pharmacies-saudi-arabia', group: 'flagship', label: 'Top pharmacies operating in Saudi Arabia' },
  { slug: 'pharmaceutical-product-registration-saudi-arabia', group: 'flagship', label: 'SFDA pricing submission and launch readiness in Saudi Arabia' },
];

export const SEGMENT_MARKET_SLUGS: string[] = SEGMENT_MARKET_INDEX.map((entry) => entry.slug);

const SEGMENT_MARKET_SLUG_SET = new Set(SEGMENT_MARKET_SLUGS);

export function isSegmentMarketPath(pathname: string): boolean {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return SEGMENT_MARKET_SLUG_SET.has(path.startsWith('/') ? path.slice(1) : path);
}

export const SEGMENT_MARKET_GROUP_LABELS: Record<SegmentMarketGroup, string> = {
  'saudi-diagnostics': 'Saudi Arabia — diagnostics, genomics & biomarkers',
  'saudi-biotech': 'Saudi Arabia — biotechnology & advanced therapies',
  'saudi-devices-consumer': 'Saudi Arabia — devices, consumer health & services',
  gcc: 'GCC-wide market segments',
  'middle-east': 'Middle East regional segments',
  country: 'UAE, Kuwait, Egypt & Turkey segments',
  flagship: 'Flagship BioNixus intelligence',
};

const SEGMENT_MARKET_GROUP_ORDER: SegmentMarketGroup[] = [
  'saudi-diagnostics',
  'saudi-biotech',
  'saudi-devices-consumer',
  'gcc',
  'middle-east',
  'country',
  'flagship',
];

/** Grouped list used by hub pages to surface every segment page with descriptive anchor text. */
export function getGroupedSegmentMarketIndex(): Array<{
  group: SegmentMarketGroup;
  label: string;
  entries: SegmentMarketIndexEntry[];
}> {
  return SEGMENT_MARKET_GROUP_ORDER.map((group) => ({
    group,
    label: SEGMENT_MARKET_GROUP_LABELS[group],
    entries: SEGMENT_MARKET_INDEX.filter((entry) => entry.group === group),
  })).filter((section) => section.entries.length > 0);
}
