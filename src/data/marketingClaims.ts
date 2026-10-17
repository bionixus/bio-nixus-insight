import type { SourcedMetric } from '@/data/contentAccuracy/types';

/** Verified or labelled claims reused on hub and service pages. */
export const BIONIXUS_MARKETING_CLAIMS = {
  completedProjectsMena: {
    label: 'Studies a year',
    value: '120+',
    source: 'BioNixus internal project records (2026)',
  } satisfies SourcedMetric,
  studies2025: {
    label: 'Studies in 2025',
    value: '120',
    source: 'BioNixus internal project records (2025)',
  } satisfies SourcedMetric,
  studies2026Ytd: {
    label: 'Studies in 2026 year-to-date',
    value: '127',
    source: 'BioNixus internal project records (2026)',
  } satisfies SourcedMetric,
  globalClients: {
    label: 'Global clients served',
    value: '118',
    source: 'BioNixus internal client records (2026)',
  } satisfies SourcedMetric,
  operatingHistory: {
    label: 'Years operating',
    value: '15+',
    source: 'BioNixus company history (2026)',
  } satisfies SourcedMetric,
} as const;

export function formatSourcedClaim(metric: SourcedMetric): string {
  return `${metric.value} (${metric.source})`;
}
