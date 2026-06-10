import type { ReportEntry } from '@/data/healthcareReportTypes';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';
import {
  adoptionContextSnippet,
  operationsSnippet,
  procurementSnippet,
} from '@/data/marketReportGeography';

function regShort(marketSlug: string): string {
  const body = MARKET_CONTENT[marketSlug]?.regulatoryBody;
  if (!body) return 'the national regulator';
  return body.split('•')[0]?.trim() ?? body;
}

/** Five market- and therapy-specific access bullets per programmatic report. */
export function getAccessBullets(report: ReportEntry): string[] {
  const m = MARKET_CONTENT[report.marketSlug];
  const regulator = regShort(report.marketSlug);
  const notes = report.marketAccessNotes;

  return [
    `${m.name} — ${report.therapyArea}: ${notes} BioNixus triangulates these signals against ${regulator} dossier requirements (pharmacovigilance, labelling, biosimilar interchangeability where relevant, companion diagnostics, and compassionate access bridging).`,
    procurementSnippet(report.marketSlug, m.name),
    adoptionContextSnippet(report.marketSlug, m.name, report.therapyArea),
    `${m.payerLandscape.split('\n\n')[0]?.slice(0, 320) ?? `${m.name} payer landscape`} Institution-level consumption panels in ${m.name} inform access sequencing—not assumptions imported from other countries.`,
    operationsSnippet(report.marketSlug, m.name),
  ];
}
