/**
 * Full content registry for geography × segment market landing pages.
 *
 * HEAVY MODULE — roughly 800KB of page copy. Import it only from the lazy route
 * chunk (src/pages/SegmentMarketRoute.tsx) and from Node build scripts. Anything
 * in the initial bundle (routes.tsx, hub link blocks) must import
 * src/data/segmentMarketIndex.ts instead.
 */

import type { SegmentMarketContent } from '@/data/segmentMarkets/types';
import { SAUDI_DIAGNOSTICS_SEGMENT_PAGES } from '@/data/segmentMarkets/saudiDiagnostics';
import { SAUDI_BIOTECH_SEGMENT_PAGES } from '@/data/segmentMarkets/saudiBiotech';
import { SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES } from '@/data/segmentMarkets/saudiDevicesConsumer';
import { GCC_MIDDLE_EAST_SEGMENT_PAGES } from '@/data/segmentMarkets/gccAndMiddleEast';
import { COUNTRY_FLAGSHIP_SEGMENT_PAGES } from '@/data/segmentMarkets/countryAndFlagship';

export type { SegmentMarketContent, SegmentMarketGroup } from '@/data/segmentMarkets/types';

export const SEGMENT_MARKET_PAGES: SegmentMarketContent[] = [
  ...SAUDI_DIAGNOSTICS_SEGMENT_PAGES,
  ...SAUDI_BIOTECH_SEGMENT_PAGES,
  ...SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES,
  ...GCC_MIDDLE_EAST_SEGMENT_PAGES,
  ...COUNTRY_FLAGSHIP_SEGMENT_PAGES,
];

export const SEGMENT_MARKET_BY_SLUG: Map<string, SegmentMarketContent> = new Map(
  SEGMENT_MARKET_PAGES.map((page) => [page.slug, page]),
);
