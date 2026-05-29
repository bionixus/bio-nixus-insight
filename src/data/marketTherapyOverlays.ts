import type { MarketContent, TherapyAreaContent } from '@/data/healthcareReportContent';
import { isGccMarket } from '@/data/marketReportGeography';

/** Therapy dynamics scoped to the report's primary country (no GCC boilerplate on non-GCC pages). */
export function getTherapyMarketDynamics(
  therapy: TherapyAreaContent,
  marketSlug: string,
  market?: MarketContent,
): string {
  if (isGccMarket(marketSlug)) {
    if (marketSlug === 'gcc') {
      return therapy.menaMarketDynamics;
    }
    const ctx = market?.marketContext?.split('\n\n')[0]?.trim();
    if (ctx) return ctx;
    return therapy.menaMarketDynamics;
  }
  if (therapy.globalTherapyDynamics?.trim()) {
    return therapy.globalTherapyDynamics;
  }
  const fromClinical = therapy.clinicalLandscape.split('\n\n')[0]?.trim();
  if (fromClinical) return fromClinical;
  return therapy.overviewParagraph.split('\n\n')[0]?.trim() ?? '';
}
