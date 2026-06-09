import { MARKET_INTELLIGENCE } from '@/data/marketIntelligenceData';
import type { TherapySegment } from '@/data/marketIntelligence/types';
import { LEGACY_STAT_TUPLES } from '@/data/contentAccuracy/legacyStatTuples';
import {
  BIO_NIXUS_ESTIMATE,
  factKey,
  type SourcedMetric,
  type StatTuple,
  type TherapyMarketFact,
} from '@/data/contentAccuracy/types';
import { THERAPY_SEGMENT_AREA } from '@/data/contentAccuracy/therapyAreaLabels';

function tupleToMetrics(tuple: StatTuple, sizeSource: string, forecastSource: string): Pick<
  TherapyMarketFact,
  'marketSize2026' | 'forecast2030' | 'cagr'
> {
  return {
    marketSize2026: { label: tuple[1], value: tuple[0], source: sizeSource, year: 2026 },
    forecast2030: { label: tuple[3], value: tuple[2], source: forecastSource, year: 2030 },
    cagr: { label: tuple[5], value: tuple[4], source: sizeSource, year: 2026 },
  };
}

function findSegment(marketSlug: string, therapySlug: string): TherapySegment | undefined {
  const intel = MARKET_INTELLIGENCE[marketSlug];
  if (!intel?.therapySegments?.length) return undefined;
  const areaLabel = THERAPY_SEGMENT_AREA[therapySlug];
  if (!areaLabel) return undefined;
  return intel.therapySegments.find(
    (s) => s.area.toLowerCase() === areaLabel.toLowerCase() || s.area.startsWith(areaLabel.split(' ')[0] ?? ''),
  );
}

function buildFact(marketSlug: string, therapySlug: string): TherapyMarketFact | undefined {
  const key = factKey(marketSlug, therapySlug);
  const tuple = LEGACY_STAT_TUPLES[key];
  if (!tuple) return undefined;

  const segment = findSegment(marketSlug, therapySlug);
  const intel = MARKET_INTELLIGENCE[marketSlug];
  const segmentSource = BIO_NIXUS_ESTIMATE;
  const sizeSource = segment ? segmentSource : BIO_NIXUS_ESTIMATE;
  const forecastSource = BIO_NIXUS_ESTIMATE;

  const base = tupleToMetrics(tuple, sizeSource, forecastSource);

  if (segment) {
    base.marketSize2026 = {
      label: 'Market size 2026',
      value: segment.marketSize2026,
      source: segmentSource,
      year: 2026,
    };
    base.cagr = {
      label: 'CAGR 2026–2030',
      value: segment.cagr.replace(/\s*CAGR\s*/i, '').trim() || segment.cagr,
      source: segmentSource,
      year: 2026,
    };
  }

  const sources = new Set<string>([base.marketSize2026.source, base.forecast2030.source, base.cagr.source]);
  if (intel?.epidemiology?.length) {
    intel.epidemiology.slice(0, 2).forEach((e) => {
      if (e.source) sources.add(e.source);
    });
  }

  return {
    marketSlug,
    therapySlug,
    ...base,
    segments: intel?.therapySegments,
    sources: [...sources],
  };
}

const REGISTRY: Map<string, TherapyMarketFact> = new Map();

for (const key of Object.keys(LEGACY_STAT_TUPLES)) {
  const [marketSlug, therapySlug] = key.split(':');
  if (!marketSlug || !therapySlug) continue;
  const fact = buildFact(marketSlug, therapySlug);
  if (fact) REGISTRY.set(key, fact);
}

export function getTherapyMarketFact(
  marketSlug: string,
  therapySlug: string,
): TherapyMarketFact | undefined {
  return REGISTRY.get(factKey(marketSlug, therapySlug));
}

export function getTherapyMarketFactOrThrow(marketSlug: string, therapySlug: string): TherapyMarketFact {
  const fact = getTherapyMarketFact(marketSlug, therapySlug);
  if (!fact) {
    throw new Error(`Missing therapy market fact for ${marketSlug}:${therapySlug}`);
  }
  return fact;
}

/** Executive dashboard triple derived from a therapy fact. */
export function executiveStatsFromFact(fact: TherapyMarketFact): {
  stat1Value: string;
  stat1Label: string;
  stat1Source: string;
  stat2Value: string;
  stat2Label: string;
  stat2Source: string;
  stat3Value: string;
  stat3Label: string;
  stat3Source: string;
  sources: string[];
} {
  return {
    stat1Value: fact.marketSize2026.value,
    stat1Label: fact.marketSize2026.label,
    stat1Source: fact.marketSize2026.source,
    stat2Value: fact.forecast2030.value,
    stat2Label: fact.forecast2030.label,
    stat2Source: fact.forecast2030.source,
    stat3Value: fact.cagr.value,
    stat3Label: fact.cagr.label,
    stat3Source: fact.cagr.source,
    sources: fact.sources,
  };
}

export function statSummaryLineFromFact(
  fact: TherapyMarketFact,
  therapyName: string,
  marketName: string,
): string {
  return `${marketName} ${therapyName} revenue is estimated at ${fact.marketSize2026.value} (${fact.marketSize2026.label}; source: ${fact.marketSize2026.source}), with a ${fact.forecast2030.label} near ${fact.forecast2030.value} (source: ${fact.forecast2030.source}) and ${fact.cagr.label} around ${fact.cagr.value} (source: ${fact.cagr.source}).`;
}

export function allTherapyMarketFacts(): TherapyMarketFact[] {
  return [...REGISTRY.values()];
}

export function sourcedMetricsFromFact(fact: TherapyMarketFact): SourcedMetric[] {
  return [fact.marketSize2026, fact.forecast2030, fact.cagr];
}
