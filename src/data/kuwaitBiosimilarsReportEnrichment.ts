/** Crawlable depth sections for /market-reports/kuwait-biosimilars-market-report. */

export type EnrichmentTable = {
  headers: string[];
  rows: string[][];
  caption: string;
};

export type EnrichmentSection = {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  table?: EnrichmentTable;
  listItems?: string[];
};

export const KUWAIT_BIOSIMILARS_REPORT_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'kuwait-biosimilar-market-size-2026',
    title: 'Kuwait biosimilar market size 2026',
    subtitle: 'Hospital-administered BioNixus scope in a compact GCC tender market.',
    paragraphs: [
      'Kuwait is a compact but structurally distinct GCC biosimilars market—smaller than Saudi Arabia or the UAE, but with full public reimbursement of hospital-administered biologics and rising chronic-disease prevalence driving substitution pressure. BioNixus sizes hospital-administered biosimilars at roughly USD 42 million in 2026, advancing toward about USD 74 million by 2030 at roughly 15% CAGR.',
      'Volume concentrates in oncology (trastuzumab, bevacizumab), immunology (adalimumab, etanercept), and supportive care at Kuwait Cancer Control Centre, Ibn Sina Hospital, and Al Sabah specialty hubs. MOH tender lots remain the primary access gate; dual public–private coding splits create payer clawback risk on switching programmes.',
    ],
    table: {
      caption: 'Kuwait biosimilar market — molecule concentration (2026 planning)',
      headers: ['Molecule class', 'Share of hospital biosimilar value', 'Access gate', 'Clinical concentration'],
      rows: [
        [
          'Oncology mAbs (trastuzumab, bevacizumab)',
          'Majority of tender-led value',
          'MOH oncology lots + flagship centre formularies',
          'Kuwait Cancer Control Centre, Ibn Sina Hospital',
        ],
        [
          'Immunology anti-TNF (adalimumab, etanercept)',
          'Second-largest hospital band',
          'MOH rheumatology lots + dual-channel coding risk',
          'Al Sabah specialty hubs, rheumatology networks',
        ],
        [
          'Supportive care (G-CSF, insulin glargine)',
          'Growing supportive-care band',
          'Pharmacist substitution ambiguity on some molecules',
          'Oncology maintenance and diabetes crossover',
        ],
      ],
    },
  },
  {
    id: 'kuwait-moh-tender-dynamics',
    title: 'Kuwait MOH tender dynamics and substitution',
    subtitle: 'How lots convert into sustained hospital volume.',
    paragraphs: [
      'MOH tender trastuzumab and anti-TNF lot awards can reset net pricing across public hospitals in a single cycle, but dual public–private coding splits create clawback risk when patients move between channels. BioNixus maps tender timing and hospital pull-through so teams plan around procurement calendars rather than retail substitution alone.',
      'Clinician confidence and nocebo concerns in oncology maintenance settings remain brakes on switching even after MOH awards compress public pricing. Originators defend via device experience and patient-support documentation at private hospitals where MOH list prices do not fully govern prescribing.',
    ],
  },
  {
    id: 'kuwait-biosimilar-outlook',
    title: 'Kuwait biosimilar commercial outlook to 2030',
    subtitle: 'Tender-driven step changes in a concentrated account market.',
    paragraphs: [
      'The outlook to 2030 is steady-growth with tender-driven step changes rather than smooth erosion curves. Biosimilar developers gain access through MOH lots but must plan for dual-channel coding complexity and pharmacist substitution uncertainty on insulin and supportive-care molecules.',
      'Use this briefing with the Kuwait healthcare market report for macro context, the GCC biosimilars market report for Gulf-wide benchmarking, and the Saudi Arabia biosimilars market report for NUPCO-led substitution comparators when building regional launch sequencing.',
    ],
  },
];
