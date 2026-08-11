/** Crawlable depth sections for /market-reports/saudi-arabia-biosimilars-market-report (IMARC-parity SEO). */

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

export const SAUDI_BIOSIMILARS_REPORT_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'saudi-arabia-biosimilar-market-size-2026',
    title: 'Saudi Arabia biosimilar market size 2026',
    subtitle: 'Hospital-administered BioNixus scope versus broader published estimates.',
    paragraphs: [
      'The Saudi Arabia biosimilar market is often quoted with conflicting headline numbers because publishers use different scopes. BioNixus sizes the hospital-administered biosimilar opportunity at roughly USD 382 million in 2026, advancing toward about USD 668 million by 2030 at roughly 15% CAGR. That planning band is built for NUPCO-framework and hospital-substitution decisions—not for retail insulin, somatropin, or every channel lumped into a single all-product total.',
      'IMARC Group publishes a broader Saudi Arabia biosimilar market figure of USD 664.2 million in 2025, growing at 12.97% CAGR through 2034 toward about USD 1,990.5 million—covering a wider molecule and channel set. Insights10’s monoclonal-antibody-only trajectory ($118.9 million in 2022 to $614.8 million by 2030 at 22.8% CAGR) sits between those scopes. Use the table below when reconciling board packs; do not treat mismatched scopes as forecast errors.',
    ],
    table: {
      caption: 'Saudi Arabia biosimilar market size — scope comparison (published estimates)',
      headers: ['Source / scope', 'Reference year', 'Market size', 'Growth band', 'What is included'],
      rows: [
        [
          'BioNixus — hospital-administered',
          '2026',
          '~USD 382M',
          '~15% CAGR to ~USD 668M by 2030',
          'Hospital immunology, oncology, and supportive-care biosimilars under NUPCO/hospital pull',
        ],
        [
          'IMARC Group — broad market',
          '2025',
          'USD 664.2M',
          '12.97% CAGR to USD 1,990.5M by 2034',
          'Wider molecule set including insulin, somatropin, and multi-channel coverage',
        ],
        [
          'Insights10 — mAbs only',
          '2022 → 2030',
          '$118.9M → $614.8M',
          '22.8% CAGR',
          'Saudi biosimilar monoclonal antibodies only',
        ],
      ],
    },
  },
  {
    id: 'market-by-molecule',
    title: 'Saudi Arabia biosimilar market by molecule',
    subtitle: 'Active substitution and framework categories for 2026 planning.',
    paragraphs: [
      'Molecule waves—not a blended CAGR—drive commercial timing in the Saudi Arabia biosimilar market. NUPCO therapeutic-area framework agreements pre-qualify suppliers; hospitals then pull volume, so molecule readiness, cold-chain SLAs, and clinician confidence decide realized share after listing.',
    ],
    listItems: [
      'Adalimumab, etanercept, infliximab — high-activity immunology anti-TNF biosimilars under sustained framework and hospital budget pressure.',
      'Trastuzumab, rituximab, bevacizumab — major oncology monoclonal biosimilar categories in tertiary and MOH-linked centres.',
      'Filgrastim, pegfilgrastim, epoetin — supportive-care biosimilars adding steady underlying hospital volume.',
      'Insulin glargine and related analogues — material in broader published market totals; treated separately from BioNixus hospital mAb/supportive core when scoping NUPCO immunology/oncology frameworks.',
      'Infliximab, somatropin, follitropin alfa, and other IMARC-listed molecules — track for all-channel sizing; validate hospital vs retail channel before applying BioNixus hospital CAGR.',
    ],
  },
  {
    id: 'market-by-indication',
    title: 'Saudi Arabia biosimilar market by indication',
    subtitle: 'Where hospital substitution concentrates spend.',
    paragraphs: [
      'Indication mix in the Saudi Arabia biosimilar market concentrates in autoimmune disease, oncology, diabetes (broader-scope publishers), blood disorders/supportive care, and selected specialty uses. BioNixus hospital programmes prioritise rheumatology, gastroenterology, oncology, and supportive-care chairs because those settings sit on NUPCO frameworks and formulary committees.',
    ],
    listItems: [
      'Autoimmune / immunology — anti-TNF and related biologic erosion under pharmacist substitution after framework placement.',
      'Oncology — trastuzumab, rituximab, and bevacizumab waves tied to tertiary centre protocols and tender calendars.',
      'Diabetes — larger share of broad published market totals (insulin analogues); separate from hospital mAb planning unless the brief explicitly includes endocrine injectables.',
      'Supportive care / blood disorders — G-CSF and ESA biosimilars with high hospital throughput.',
      'Other (growth deficiency, infertility, etc.) — included in some desk-research segmentations; validate local volume before board forecasts.',
    ],
  },
  {
    id: 'sfda-pathway-interchangeability',
    title: 'SFDA pathway and interchangeability',
    subtitle: 'Registration speed versus hospital switching practice.',
    paragraphs: [
      'SFDA’s biosimilar pathway accepts EMA or FDA approval as supporting evidence, typically shortening registration to roughly 8–14 months with prior international approval versus 18–28 months without. SFDA lists 38+ approved biosimilars across oncology, diabetes, and autoimmune categories. Under DS-G-113-V1.1 (effective July 2024), biosimilar submissions require Budget Impact Analysis and Cost-Minimization Analysis.',
      'Registration establishes biosimilarity; interchangeability and substitution are interpreted at hospital and committee level, with pharmacist substitution commonly applied after NUPCO framework placement. Pair this report with the SFDA market access strategy for Saudi Arabia when registration and listing sit on the critical path.',
    ],
  },
  {
    id: 'nupco-framework-agreements',
    title: 'NUPCO framework agreements and substitution',
    subtitle: 'How awards convert into hospital pull-through.',
    paragraphs: [
      'Since 2024, NUPCO has shifted from fixed-volume lump tenders to therapeutic-area framework agreements that pre-qualify suppliers at set prices while hospitals request volumes on actual demand. Framework placement still enables rapid biosimilar substitution on molecules such as adalimumab, trastuzumab, and rituximab, but volume materialises as hospital pull—making consumption tracking and ICV positioning more important than under legacy tenders.',
      'Tender criteria weigh price, supply security, and increasingly In-Country Value and local-manufacturing commitments under Vision 2030. For launch sequencing and physician-adoption detail, use the biosimilar market entry Saudi Arabia strategy guide alongside this market-size briefing.',
    ],
  },
  {
    id: 'localization-competitive-landscape',
    title: 'Localization and competitive landscape',
    subtitle: 'Vision 2030, ICV scoring, and originator defence.',
    paragraphs: [
      'Vision 2030’s local-manufacturing target (about 40% of pharmaceutical volume locally by 2030) and ICV scoring increasingly favour Saudi-produced biosimilars in routine categories. Imported originators on mature molecules face faster mid-framework switching as hospitals pull lower-cost biosimilars on budget pressure.',
      'Competitive defence therefore combines price discipline with device and administration experience, patient-support operations, indication breadth, and Saudi-specific real-world evidence that formulary committees expect under DS-G-113-V1.1. Localization partners and technology-transfer models change regulatory responsibility, pricing, and tender eligibility—map those before locking Saudi revenue or erosion assumptions.',
    ],
  },
];
