import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'oman-biosimilars-market-report';

/**
 * Curated copy for the Oman biosimilars programmatic report.
 * Market sizing: BioNixus estimate 2026 (~USD 23M → ~USD 41M by 2030, ~15.4% CAGR)
 * calibrated against Oman immunology (~USD 58M) and oncology (~USD 71M) spend shares.
 */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const OMAN_BIOSIMILARS_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Oman Biosimilars Market Report 2026',
  metaTitle: 'Oman Biosimilars Market Report 2026 | BioNixus',
  metaDescription:
    'Oman biosimilars market ~USD 23M in 2026 (BioNixus estimate), ~15% CAGR: Royal Hospital and SQUH referral latency, MOH tender cycles, interior hospital access—decision-ready Gulf intelligence.',
  heroLead:
    'This briefing reads Oman biosimilars through Royal Hospital and Sultan Qaboos University Hospital referral pathways: where interior hospital referral latency delays first biosimilar initiation clocks, MOH CSSD formulary listing gates access, and oncology–rheumatology indication split coding shapes how substitution programmes roll out beyond Muscat.',
  summaryPara1:
    'Oman’s biosimilars market is smaller in absolute terms but structurally important for Gulf benchmarking—particularly where referral latency from interior governorates to Muscat tertiary centres slows first biosimilar starts compared with Saudi NUPCO or UAE DOH policy channels. BioNixus sizes hospital-administered biosimilars at roughly USD 23 million in 2026, advancing toward about USD 41 million by 2030 at roughly 15% CAGR—calibrated against Oman immunology (~USD 58M) and oncology (~USD 71M) spend shares (~18% biosimilar penetration). Volume concentrates at Royal Hospital Muscat, Sultan Qaboos University Hospital (SQUH), the National Oncology Centre, and Khoula Hospital, with interior MOH hospitals pulling volume on annual tender cycles after CSSD formulary listing. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Oman healthcare market report](/oman-healthcare-market-report) for macro context, the [GCC biosimilars market report](/market-reports/gcc-biosimilars-market-report) for Gulf-wide benchmarking, the [Saudi Arabia biosimilars market report](/market-reports/saudi-arabia-biosimilars-market-report) for faster-substitution comparators, [biosimilars therapy research](/healthcare-market-research/therapy/biosimilars) for programme design, and the [healthcare market research hub](/healthcare-market-research) to scope bilingual fieldwork.',
  marketAccessNotes:
    'MOH Drug Registration and CSSD/Central Pharmacy formulary listing (18–30 month registration; 3–6 month formulary access); SQUH oncology–rheumatology indication split coding; interior hospital referral latency on first biosimilar initiation; annual MOH tender cycles; anti-TNF and oncology monoclonal biosimilars as primary categories; cold-chain confidence outside Muscat corridor',
  fieldIntelligenceParagraph:
    'BioNixus field programmes treat Oman biosimilars as a referral-and-tender market: CSSD listing and MOH tender awards set access, but interior referral latency and cold-chain confidence determine realized share outside Muscat. We pair tender tracking with prescriber confidence studies at Royal Hospital and SQUH and map referral-pathway frictions that delay first biosimilar starts. For originators, we identify patient-support levers that retain volume when interior hospitals begin pulling biosimilars on tender.',
  commercialOutlookParagraph:
    'The outlook to 2030 is steady-growth with tender-driven step changes. Biosimilar developers should plan for longer registration-to-volume timelines than in Saudi Arabia or the UAE, and budget for interior referral and cold-chain programmes. Originators retain defence room on device and patient support but face incremental MOH tender pressure. BioNixus uses a ~15% planning band; stress-test interior referral latency before locking Oman share assumptions.',
  methodologyParagraph:
    'Methodology combines BioNixus market analysis for sizing and CAGR bands—calibrated against Oman immunology and oncology therapy spend shares—with desk review of MOH Drug Registration, CSSD formulary, and tender guidance. Primary modules include prescriber confidence surveys at Royal Hospital and SQUH where data is available. Outputs are built for market access and commercial leadership and do not constitute regulatory or clinical advice.',
  sourceNotes: [
    'BioNixus estimate (2026 hospital-administered biosimilar scope)',
    'BioNixus — Oman immunology & biologics and oncology market estimates (2026)',
    'MOH Oman — drug registration and CSSD formulary process (desk review)',
  ],
  faqs: [
    {
      question: 'How large is the Oman biosimilars market in 2026?',
      answer:
        'BioNixus sizes Oman hospital-administered biosimilars at roughly USD 23 million in 2026, advancing toward about USD 41 million by 2030 at roughly 15% CAGR. The band is calibrated against immunology (~USD 58M) and oncology (~USD 71M) spend shares. Use the GCC biosimilars report for Gulf-wide context and the Oman healthcare market report for macro sizing.',
    },
    {
      question: 'Why does referral latency matter for Oman biosimilar uptake?',
      answer:
        'Interior governorate hospitals often refer first biologic and biosimilar initiations to Royal Hospital Muscat or SQUH, adding weeks to months before substitution programmes begin. BioNixus maps referral pathways and tender timing so forecasts reflect Oman’s access timeline rather than Saudi or UAE switch curves.',
    },
    {
      question: 'How does MOH procurement shape Oman biosimilar access?',
      answer:
        'MOH CSSD formulary listing and annual tender cycles gate hospital-administered biosimilar access across MOH facilities including Royal Hospital and SQUH. Registration timelines (18–30 months for innovative products; shorter for generics/biosimilars with reference approval) precede formulary listing by 3–6 months. BioNixus tracks tender calendars and formulary status for launch planning.',
    },
    {
      question: 'How does BioNixus support biosimilar teams in Oman?',
      answer:
        'BioNixus designs bilingual Oman programmes: MOH tender and CSSD intelligence, referral-pathway mapping, prescriber confidence studies at Royal Hospital and SQUH, and cold-chain workflow reviews for interior hospitals. Begin from the healthcare market research hub or request a scoped briefing through the contact page.',
    },
  ],
};
