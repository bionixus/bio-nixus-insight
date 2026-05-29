import type { TherapySegment } from '@/data/marketIntelligence/types';

/** Public or internal attribution for a numeric claim. */
export type SourceNote = string;

export type StatTuple = readonly [string, string, string, string, string, string];

export interface SourcedMetric {
  label: string;
  value: string;
  source: SourceNote;
  year?: number;
}

export interface TherapyMarketFact {
  marketSlug: string;
  therapySlug: string;
  marketSize2026: SourcedMetric;
  forecast2030: SourcedMetric;
  cagr: SourcedMetric;
  /** Full country therapy mix when available (for bar charts). */
  segments?: TherapySegment[];
  /** Distinct sources cited on this fact set. */
  sources: SourceNote[];
}

export const BIO_NIXUS_ESTIMATE: SourceNote = 'BioNixus estimate';

export function factKey(marketSlug: string, therapySlug: string): string {
  return `${marketSlug}:${therapySlug}`;
}
