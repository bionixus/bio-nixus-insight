import type { ReportEntry } from '@/data/healthcareReportTypes';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';

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
    `${m.name} — ${report.therapyArea}: ${notes} BioNixus triangulates these signals against ${regulator} dossier modules (pharmacovigilance, bilingual labelling, biosimilar interchangeability where relevant, companion diagnostic linkage, compassionate access bridging).`,
    `Procurement and payer mechanics in ${m.name} combine centralized awards, insurer prior-authorization ladders, and clinician advocacy dossiers; ${report.therapyArea} global-budget carve-outs require reconciling tender discounting with originator rebate defensives rather than naive EU net-price analogues.`,
    `Class-level ${report.therapyArea} adoption in ${m.name} depends on immunogenicity vigilance, inpatient versus ambulatory initiation ratios, genomic eligibility throughput, pharmacist substitution statutes, and Ramadan or pilgrimage seasonal adherence counselling—tracked in BioNixus longitudinal analogue notebooks.`,
    `${m.payerLandscape.split('\n\n')[0]?.slice(0, 280) ?? m.name + ' payer landscape'} …extended with institution-level consumption panels across flagship tertiary centres referenced in BioNixus GCC and Cairo field governance.`,
    `Operational deliverables: multilingual HCP trackers (EphMRA / BHBIA aligned), formulary uplift simulation boards, NUPCO and UAE insurer award radars, and cold-chain SLA attestations tied to primary procurement artefacts—not desk extrapolation.`,
  ];
}
