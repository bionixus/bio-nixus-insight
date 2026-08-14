/** Crawlable depth sections for /market-reports/saudi-arabia-vaccines-market-report (IMARC-parity SEO). */

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

export const SAUDI_VACCINES_REPORT_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'saudi-arabia-vaccine-market-size-2026',
    title: 'Saudi Arabia vaccine market size 2026',
    subtitle: 'BioNixus NIP + Hajj government band versus broader published estimates.',
    paragraphs: [
      'The Saudi Arabia vaccine market is often quoted with conflicting headline numbers because publishers use different scopes. BioNixus sizes the NIP- and Hajj/Umrah-led government demand band at roughly USD 248 million in 2026, advancing toward about USD 438 million by 2030 at roughly 17.2% CAGR. That planning band is built for MOH schedule inclusion and NUPCO tender decisions—not for every private clinic, travel, or all-product channel lumped into a single all-channel total.',
      'IMARC Group publishes a broader Saudi Arabia vaccine market figure of USD 536.7 million in 2025, growing at 2.68% CAGR through 2034 toward about USD 680.9 million. Grand View Research reports USD 591.3 million in 2025, growing at 4.4% CAGR through 2033 toward about USD 847.6 million. Ken Research mid-decade figures near USD 680–715 million project toward about USD 921 million by 2030 at roughly 5.2% CAGR. Use the table below when reconciling board packs; do not treat mismatched scopes as forecast errors.',
    ],
    table: {
      caption: 'Saudi Arabia vaccine market size — scope comparison (published estimates)',
      headers: ['Source / scope', 'Reference year', 'Market size', 'Growth band', 'What is included'],
      rows: [
        [
          'BioNixus — NIP + Hajj government demand',
          '2026',
          '~USD 248M',
          '~17.2% CAGR to ~USD 438M by 2030',
          'MOH National Immunization Program and Hajj/Umrah mandatory vaccination procurement-led volume',
        ],
        [
          'IMARC Group — broad market',
          '2025',
          'USD 536.7M',
          '2.68% CAGR to USD 680.9M by 2034',
          'Wider product, indication, channel, and end-user coverage',
        ],
        [
          'Grand View Research — broad market',
          '2025',
          'USD 591.3M',
          '4.4% CAGR to USD 847.6M by 2033',
          'Viral, bacterial, and other vaccine indications across channels',
        ],
        [
          'Ken Research — broad market',
          'Mid-decade (~2024–2025)',
          '~USD 680–715M',
          '~5.2% CAGR toward ~USD 921M by 2030',
          'Procurement-led mix with rising adult/travel/specialty share in published forecasts',
        ],
      ],
    },
  },
  {
    id: 'market-by-segment',
    title: 'Saudi Arabia vaccine market by segment',
    subtitle: 'Pediatric NIP, adult expansion, Hajj–Umrah, and growth antigens.',
    paragraphs: [
      'Segment mix—not a blended CAGR—drives commercial timing in the Saudi Arabia vaccine market. Government schedule decisions and pilgrimage calendars set volume more than retail prescribing.',
    ],
    listItems: [
      'Pediatric NIP — stable tender-driven base under the MOH National Immunization Program.',
      'Adult / elderly — pneumococcal and influenza as the clearest growth corridors; HPV and RSV as expanding opportunities.',
      'Hajj and Umrah — mandatory mass-gathering vaccination (notably meningococcal ACWY) creating a unique seasonal demand engine.',
      'HPV — schedule expansion and catch-up cohorts where policy and tender openings align.',
      'Pneumococcal / influenza / RSV — adult and specialty entrants paced by NIP decisions and NUPCO awards.',
    ],
  },
  {
    id: 'sfda-registration-lot-release',
    title: 'SFDA registration and lot release',
    subtitle: 'Marketing authorisation plus batch-level release gating supply.',
    paragraphs: [
      'SFDA handles vaccine registration and lot release. Batch-level oversight can affect availability timing even after marketing authorisation, so launch calendars must include release lead times—not only dossier approval.',
      'Pair this report with the SFDA market access strategy for Saudi Arabia when registration, lot release, or NUPCO listing sits on the critical path.',
    ],
  },
  {
    id: 'moh-nip-nupco-procurement',
    title: 'MOH NIP and NUPCO procurement',
    subtitle: 'How schedule inclusion converts into government volume.',
    paragraphs: [
      'The MOH National Immunization Program defines the pediatric base and an expanding adult schedule. Most government volume flows through MOH and NUPCO tendering, so tender positioning and supply-security commitments matter more than retail dynamics.',
      'A strong clinical case can still miss a season if lot release or tender timing slips. BioNixus maps schedule decisions and procurement calendars together for each antigen.',
    ],
  },
  {
    id: 'vision-2030-localization-cold-chain',
    title: 'Vision 2030 localization and cold chain',
    subtitle: 'Supply security, local manufacturing, and campaign logistics.',
    paragraphs: [
      'Vision 2030’s local-manufacturing and supply-security agenda increasingly influences which suppliers win government volume. Cold-chain capacity and mass-campaign logistics around Hajj and Umrah shape real-world uptake even when demand is firm.',
      'Manufacturers should stress-test supply plans against both the National Immunization Program calendar and the pilgrimage season before locking Saudi revenue targets.',
    ],
  },
  {
    id: 'bionixus-vaccine-pharma-insights',
    title: 'BioNixus vaccine and adjacent pharma insights',
    subtitle: 'Vaccines alongside biologics, biosimilars, oncology, and rare-disease intelligence.',
    paragraphs: [
      'BioNixus positions vaccine market intelligence inside the same Gulf primary-research discipline used for biologics, biosimilars, rare diseases, and oncology insights—so franchise teams can connect immunisation tender dynamics to adjacent specialty access.',
      'Use the Saudi Arabia vaccine market report with BioNixus Saudi briefings on biosimilars, immunology and biologics, oncology, and rare diseases when board packs need one coherent Kingdom narrative across franchises.',
    ],
    listItems: [
      'Saudi Arabia biosimilar market report — NUPCO frameworks and hospital substitution',
      'Saudi Arabia immunology & biologics market report — specialty biologic access and tenders',
      'Saudi Arabia oncology market report — tertiary cancer networks and NUPCO oncology awards',
      'Saudi Arabia rare diseases market report — orphan funding and genome-programme adjacency',
    ],
  },
];
