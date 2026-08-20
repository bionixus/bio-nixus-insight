/** Crawlable depth sections for /market-reports/gcc-vaccines-market-report. */

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

export const GCC_VACCINES_REPORT_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'gcc-vaccine-market-size-2026',
    title: 'GCC vaccine market size 2026',
    subtitle: 'Six-country schedule and procurement scope versus single-country totals.',
    paragraphs: [
      'The GCC vaccine market is frequently mis-sized when analysts apply one national curve across Saudi Arabia, the UAE, Kuwait, Qatar, Oman, and Bahrain. BioNixus sizes the six-market government and ministry-led vaccine opportunity at roughly USD 1.18 billion in 2026, advancing toward about USD 2.06 billion by 2030 at roughly 17.9% CAGR. That band is built for schedule inclusion, ministry tender, and pilgrimage or travel-demand decisions—not for every private clinic SKU aggregated into a single headline.',
      'Saudi Arabia anchors National Immunization Program volume and Hajj/Umrah mandatory vaccination; the UAE adds a dual public–private and travel-vaccine engine; Kuwait, Qatar, Bahrain, and Oman contribute smaller but structurally distinct ministry schedules. Adult immunisation—HPV catch-up, pneumococcal and influenza expansion, RSV entrants—drives the shared growth corridor across all six states rather than a uniform pediatric base.',
    ],
    table: {
      caption: 'GCC vaccine market — country contribution bands (BioNixus 2026 planning scope)',
      headers: ['Country', '2026 planning band', 'Primary volume driver', 'Channel note'],
      rows: [
        [
          'Saudi Arabia',
          'Majority share of GCC value',
          'MOH NIP + Hajj/Umrah mandatory vaccination',
          'NUPCO tendering and pilgrimage calendars set volume timing',
        ],
        [
          'United Arab Emirates',
          'Second-largest GCC contributor',
          'MOHAP/DHA/DOH schedules + private/travel vaccines',
          'Dual public–private mix; travel and employer programmes',
        ],
        [
          'Kuwait',
          '~USD 44M planning band',
          'MOH childhood schedule + influenza/HPV expansion',
          'Compact hospital network; ministry tender-led',
        ],
        [
          'Qatar',
          '~USD 49M planning band',
          'Ministry immunisation + adult schedule pilots',
          'Public procurement concentration',
        ],
        [
          'Oman / Bahrain',
          '~USD 24M / ~USD 20M bands',
          'MOH schedules + school mandates',
          'Smaller networks; faster schedule refresh cycles',
        ],
      ],
    },
  },
  {
    id: 'gcc-vaccine-by-segment',
    title: 'GCC vaccine market by segment',
    subtitle: 'Pediatric NIP, adult expansion, pilgrimage, and travel corridors.',
    paragraphs: [
      'Segment mix—not a blended CAGR—drives commercial timing in the GCC vaccine market. Schedule decisions, tender bundling, and cold-chain logistics gate volume more than retail prescribing in most Gulf states.',
    ],
    listItems: [
      'Pediatric NIP — stable tender-driven base under national immunisation programmes.',
      'Adult / elderly — pneumococcal, influenza, and RSV as the clearest shared growth corridors.',
      'Hajj and Umrah — Saudi mandatory mass-gathering vaccination (notably meningococcal ACWY) creating a unique seasonal engine.',
      'HPV — schedule expansion and catch-up cohorts where ministry policy and tender openings align.',
      'Travel and private — UAE-led employer, clinic, and outbound-travel vaccine demand outside pure NIP scope.',
      'Conjugate and meningococcal — tender bundling across school mandates and pilgrimage requirements.',
    ],
  },
  {
    id: 'gcc-vaccine-procurement',
    title: 'GCC vaccine procurement and cold-chain gates',
    subtitle: 'How ministry tenders and logistics decide realised volume.',
    paragraphs: [
      'GCC vaccine access is procurement-led. Saudi MOH and NUPCO tendering sets regional price and supplier shortlists; UAE authorities run parallel schedule and tender tracks across emirates; smaller Gulf states concentrate volume in ministry lots with cold-chain and mass-campaign logistics as operational gates.',
      'Manufacturers stress-test volume by country schedule decisions and tender cycles rather than applying a uniform GCC curve. BioNixus pairs immunisation-committee and public-health interviews with tender post-mortems and cold-chain diligence so commercial teams see where schedule inclusion converts into delivered doses.',
    ],
  },
  {
    id: 'gcc-vaccine-commercial-outlook',
    title: 'GCC vaccine commercial outlook to 2030',
    subtitle: 'Policy-led growth with country-specific sequencing.',
    paragraphs: [
      'Through 2030 the GCC vaccine outlook is strong-growth and policy-led. Pediatric bases remain tender-driven; upside comes from adult schedule expansion, continued mass-gathering requirements in Saudi Arabia, and private/travel resilience in the UAE.',
      'Pair this regional briefing with the Saudi Arabia and UAE vaccine market reports for country depth, the GCC pharmaceutical market report 2026 for macro pharma context, and the healthcare market research hub to commission bilingual schedule and tender intelligence programmes.',
    ],
  },
];
