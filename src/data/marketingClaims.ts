import type { SourcedMetric } from '@/data/contentAccuracy/types';

/** Verified or labelled claims reused on hub and service pages. */
export const BIONIXUS_MARKETING_CLAIMS = {
  completedProjectsMena: {
    label: 'Global projects annually',
    value: '120+',
    source: 'BioNixus internal project records (2026)',
  } satisfies SourcedMetric,
  projects2025: {
    label: 'Projects delivered in 2025',
    value: '127',
    source: 'BioNixus internal project records (2025)',
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
