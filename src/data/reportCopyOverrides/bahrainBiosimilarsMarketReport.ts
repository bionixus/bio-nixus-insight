import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'bahrain-biosimilars-market-report';

/**
 * Curated copy for the Bahrain biosimilars programmatic report.
 * Market sizing: BioNixus estimate 2026 (~USD 19M → ~USD 34M by 2030, ~15.7% CAGR)
 * calibrated against Bahrain immunology (~USD 48M) and oncology (~USD 62M) spend shares.
 */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const BAHRAIN_BIOSIMILARS_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Bahrain Biosimilars Market Report 2026',
  metaTitle: 'Bahrain Biosimilars Market Report 2026 | BioNixus',
  metaDescription:
    'Bahrain biosimilars market ~USD 19M in 2026 (BioNixus estimate), ~16% CAGR: NHRA interchangeability dossiers, Salmaniya infusion constraints, causeway leakage—decision-ready Gulf intelligence.',
  heroLead:
    'This briefing reads Bahrain biosimilars through compact NHRA interchangeability dossiers and Salmaniya Medical Complex infusion footprint constraints: where causeway leakage to Saudi providers can distort audited substitution counts, and where a small but fully insured population concentrates biologic volume in a handful of hospital accounts.',
  summaryPara1:
    'Bahrain is the smallest GCC biosimilars market by absolute spend, but NHRA’s interchangeability framework and high insurance penetration mean substitution rules are formalised quickly once dossiers clear. BioNixus sizes hospital-administered biosimilars at roughly USD 19 million in 2026, advancing toward about USD 34 million by 2030 at roughly 16% CAGR—calibrated against Bahrain immunology (~USD 48M) and oncology (~USD 62M) spend shares (~17% biosimilar penetration, aligned with peer Gulf ratios). Volume concentrates at Salmaniya Medical Complex, King Hamad University Hospital, and private oncology centres. Causeway cross-border care to Eastern Province Saudi hospitals can leak switching telemetry, so audited Bahrain volume should be validated account by account. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Bahrain healthcare market report](/bahrain-healthcare-market-report) for macro context, the [GCC biosimilars market report](/market-reports/gcc-biosimilars-market-report) for Gulf-wide benchmarking, the [Saudi Arabia biosimilars market report](/market-reports/saudi-arabia-biosimilars-market-report) for causeway-adjacent substitution comparators, [biosimilars therapy research](/healthcare-market-research/therapy/biosimilars) for programme design, and the [healthcare market research hub](/healthcare-market-research) to scope bilingual fieldwork.',
  marketAccessNotes:
    'NHRA compact interchangeability dossiers versus Salmaniya infusion footprint constraints; causeway leakage to Saudi providers distorting audited substitution counts; high insurance penetration accelerating formulary refresh; anti-TNF and oncology monoclonal biosimilars as primary tender categories; clinician confidence and nocebo concerns in small rheumatology panels',
  fieldIntelligenceParagraph:
    'BioNixus field programmes treat Bahrain biosimilars as a compact-account market where NHRA interchangeability decisions and Salmaniya infusion capacity set the pace. We pair NHRA dossier tracking with prescriber confidence studies and causeway-leakage audits—because cross-border care can understate or overstate Bahrain switching depending on where infusions are administered. For originators, we map defence levers in private hospitals that retain premium insured patients after public formulary refresh.',
  commercialOutlookParagraph:
    'The outlook to 2030 is moderate-growth in absolute terms but high percentage growth from a small base. Biosimilar developers gain access through NHRA registration and Salmaniya formulary placement; originators face incremental erosion as interchangeability dossiers clear. BioNixus uses a ~16% planning band; validate causeway leakage before locking Bahrain share assumptions.',
  methodologyParagraph:
    'Methodology combines BioNixus market analysis for sizing and CAGR bands—calibrated against Bahrain immunology and oncology therapy spend shares—with desk review of NHRA interchangeability guidance and Salmaniya formulary practice. Primary modules include prescriber confidence surveys where data is available. Outputs are built for market access and commercial leadership and do not constitute regulatory or clinical advice.',
  sourceNotes: [
    'BioNixus estimate (2026 hospital-administered biosimilar scope)',
    'BioNixus — Bahrain immunology & biologics and oncology market estimates (2026)',
    'NHRA — biosimilar interchangeability framework (desk review)',
  ],
  faqs: [
    {
      question: 'How large is the Bahrain biosimilars market in 2026?',
      answer:
        'BioNixus sizes Bahrain hospital-administered biosimilars at roughly USD 19 million in 2026, advancing toward about USD 34 million by 2030 at roughly 16% CAGR. The band is calibrated against immunology (~USD 48M) and oncology (~USD 62M) spend shares. Use the GCC biosimilars report for Gulf-wide context and the Bahrain healthcare market report for macro sizing.',
    },
    {
      question: 'How does NHRA regulate biosimilar interchangeability in Bahrain?',
      answer:
        'NHRA evaluates compact interchangeability dossiers that determine whether hospital committees and pharmacists can substitute biosimilars for reference biologics. Registration establishes biosimilarity; interchangeability governs switching. BioNixus recommends mapping NHRA approval, hospital formulary status, and committee practice together for each target account.',
    },
    {
      question: 'Why does causeway leakage matter for Bahrain biosimilar forecasts?',
      answer:
        'Patients crossing the causeway to Eastern Province Saudi hospitals for oncology or rheumatology care can receive biosimilar infusions outside Bahrain’s audited channels, distorting local substitution telemetry. BioNixus validates account-level volume before applying Gulf-wide switch curves to Bahrain forecasts.',
    },
    {
      question: 'How does BioNixus support biosimilar teams in Bahrain?',
      answer:
        'BioNixus designs bilingual Bahrain programmes: NHRA dossier tracking, Salmaniya formulary intelligence, causeway-leakage audits, and prescriber confidence studies. Begin from the healthcare market research hub or request a scoped briefing through the contact page.',
    },
  ],
};
