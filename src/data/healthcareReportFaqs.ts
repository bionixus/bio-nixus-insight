import type { MarketContent, TherapyAreaContent } from '@/data/healthcareReportContent';
import { getTherapyMarketDynamics } from '@/data/marketTherapyOverlays';
import {
  bioNixusServicesParagraph,
  institutionAnchorsForMarket,
  marketComparisonFraming,
} from '@/data/marketReportGeography';

export type FAQBuildArgs = {
  marketName: string;
  marketSlug: string;
  therapyName: string;
  therapySlug: string;
  statSummaryLine: string;
  therapy: TherapyAreaContent;
  market: MarketContent;
};

const join = (...s: string[]) => s.filter(Boolean).join(' ');

const FAQ_PAD =
  'BioNixus applies EphMRA and BHBIA methodological governance, GDPR-aligned HCP outreach, and hospital consumption analogue validation before leadership teams act on forecast scenarios.';

function clampWords(text: string, min = 100, max = 160) {
  let words = text.trim().replace(/\s+/g, ' ').split(/\s+/).filter(Boolean);
  let guard = 0;
  while (words.length < min && guard < 8) {
    words = words.concat(FAQ_PAD.split(/\s+/));
    guard += 1;
  }
  if (words.length > max) {
    words = words.slice(0, max);
    const last = words[words.length - 1] ?? '';
    if (last.endsWith(',') || last.endsWith(';')) words[words.length - 1] = last.slice(0, -1);
    if (!words[words.length - 1]?.endsWith('.')) words[words.length - 1] += '.';
  }
  return words.join(' ');
}

/** Therapy-level molecule landscape without foreign institution names. */
function therapyDrugLeadersGlobal(slug: string): string {
  const m: Record<string, string> = {
    oncology:
      'PD-1/PD-L1 inhibitors, HER2-directed biologics and biosimilars, CDK4/6 agents, EGFR and ALK TKIs, KRAS G12C targeted therapy, PARP maintenance, and haematology-oncology intensification pathways anchor modern boards.',
    'diabetes-metabolic':
      'GLP-1 receptor agonists, dual GIP/GLP-1 agents, basal insulin analogues, rapid-acting insulin biosimilars, SGLT2 inhibitors, metformin extended-release, PCSK9 adjuncts, and finerenone in diabetic kidney disease shape prescribing.',
    cardiovascular:
      'ARNI, beta blockers, MRAs, high-intensity statins, PCSK9 inhibitors, P2Y12 inhibitors, DOACs, and sacubitril-valsartan post-acute protocols drive GDMT-oriented adoption.',
    'immunology-biologics':
      'Anti-TNF, IL-17, IL-23, gut-selective biologics, and oral JAK inhibitors compete across rheumatology, dermatology, and gastroenterology with treat-to-target auditing.',
    respiratory:
      'Severe asthma biologics (anti-IgE, anti-IL5, anti-IL4R), triple LABA/LAMA/ICS maintenance, antibiotic stewardship, and antifibrotics shape chronic respiratory spend.',
    'rare-diseases':
      'Enzyme replacement, substrate reduction, gene therapies, ATTR silencers, and ultra-orphan budget negotiations dominate rare disease access planning.',
    'neurology-cns':
      'MS high-efficacy therapies, migraine CGRP inhibitors, epilepsy adjuncts, Parkinson adjuncts, and emerging Alzheimer pathways depend on centre readiness and monitoring capacity.',
    biosimilars:
      'Oncology and immunology biosimilar tenders, filgrastim competition, and insulin glargine interchangeability debates influence net price and switch velocity.',
    'digital-health':
      'Remote monitoring, adherence tools, AI triage, cybersecurity governance, teledermatology protocols, and digital therapeutics pilots compete for limited insurer innovation budgets.',
    vaccines:
      'Conjugate programmes, seasonal influenza supply, meningococcal schedules, RSV prevention, and HPV adolescent uptake shape immunization planning.',
    dermatology:
      'Biologic step therapy, topical JAK classes, dupilumab in atopic disease, chronic urticaria dosing, and climate-related flare management influence access.',
  };
  return m[slug] ?? m.oncology;
}

export function buildHealthcareFaqs(args: FAQBuildArgs) {
  const { marketName, marketSlug, therapyName, therapySlug, statSummaryLine, therapy, market } = args;

  const q1 = `How big is the ${marketName} ${therapyName} market in 2026?`;
  const a1 = clampWords(
    join(
      statSummaryLine,
      marketComparisonFraming(marketSlug, marketName, market.region),
      'Sensitivity to reference pricing, tender cadence, and FX-indexed net prices should be validated against local policy updates.',
    ),
  );

  const q2 = `How are ${therapyName.toLowerCase()} medicines registered and regulated in ${marketName}?`;
  const a2 = clampWords(
    join(
      `Regulatory oversight is centred on ${market.regulatoryBody}.`,
      market.regulatoryOverview.split('\n\n')[0],
      `For ${therapyName}, dossiers typically require pharmacovigilance plans, cold chain verification, labelling compliance, clinician education, compassionate use readiness, biosimilar interchangeability evidence where relevant, companion diagnostic alignment for precision subsets, and real-world safety commitments for advanced therapies—modelled against authority gazette timelines and approval-to-formulary uplift lags in ${marketName}.`,
    ),
  );

  const q3 = `How does ${marketName} reimburse and procure ${therapyName.toLowerCase()} treatments?`;
  const a3 = clampWords(join(market.payerLandscape, getTherapyMarketDynamics(therapy, marketSlug, market)));

  const q4 = `What are the leading ${therapyName.toLowerCase()} treatment categories and molecules shaping ${marketName}?`;
  const a4 = clampWords(
    join(
      therapyDrugLeadersGlobal(therapySlug),
      `In ${marketName}, institution-level adoption at ${institutionAnchorsForMarket(marketSlug)} should be weighted in forecasts rather than assuming EU analogue curves transfer without local chart audit and payer rules.`,
    ),
  );

  const q5 = `What are the structural growth drivers shaping ${therapyName.toLowerCase()} demand in ${marketName} through 2030?`;
  const a5 = clampWords(join(therapy.clinicalLandscape.split('\n\n')[0], market.marketContext.split('\n\n')[0]));

  const q6 = `How does BioNixus support pharmaceutical leadership teams sizing the ${marketName} ${therapyName.toLowerCase()} opportunity?`;
  const a6 = clampWords(bioNixusServicesParagraph(marketSlug, marketName, therapyName));

  return [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
    { question: q3, answer: a3 },
    { question: q4, answer: a4 },
    { question: q5, answer: a5 },
    { question: q6, answer: a6 },
  ];
}
