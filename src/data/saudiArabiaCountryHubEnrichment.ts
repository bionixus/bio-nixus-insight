/**
 * Agency-intent enrichment for /healthcare-market-research/saudi-arabia.
 * Ported from the retired /healthcare-market-research-in-saudi-arabia twin (301 → hub).
 */

export type SaudiCountryHubSection = {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

export const SAUDI_ARABIA_COUNTRY_HUB_ENRICHMENT: SaudiCountryHubSection[] = [
  {
    id: 'who-briefs-ksa-healthcare-mr-company',
    title: 'Who should brief a healthcare market research company in Saudi Arabia',
    paragraphs: [
      'A healthcare market research company in Saudi Arabia is briefed when a manufacturer affiliate needs primary evidence for SFDA registration-stage perception, NUPCO tender behaviour, formulary listing, or named-hospital uptake — questions a national audit row cannot answer.',
      'Typical buyers are commercial, medical-affairs and market-access teams at pharma and medtech affiliates. Syndicated IQVIA or NielsenIQ feeds stay in place for national share; BioNixus is the account-level complement.',
      'Custom programmes typically run from $10,000 to $60,000. A written proposal follows within 48 hours of a brief. Guarantees in writing cover replacing non-qualifying respondents, the contracted minimum sample, re-field at our cost, and a credited pilot fee — not guaranteed accuracy of findings.',
    ],
  },
  {
    id: 'what-bionixus-fields-ksa',
    title: 'What BioNixus fields as a healthcare market research company in Saudi Arabia',
    paragraphs: [
      'BioNixus was founded in 2012. BioNixus has US headquarters in Sheridan, Wyoming, and offices in Dubai (Thuraya Tower 1, 5th Floor, Al Sufouh 2), Al Khobar (Saudi Arabia), Cairo (MENA regional office, Sheikh Zayed) and London. The same team that runs 127 studies in 2026 year-to-date across 48 countries designs Kingdom programmes around one commercial decision.',
      'Methods include quantitative HCP surveys from a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, qualitative IDIs, KOL mapping, payer and procurement interviews, pharmacy and hospital research, and mixed-method launch or access studies. Instruments are Arabic-first with controlled English review.',
    ],
    listItems: [
      'HCP ATU, message and demand studies with specialty and city splits',
      'NUPCO tender-cycle and hospital committee interviews',
      'SFDA-aware registration and promotional-compliance perception',
      'Patient and caregiver qualitative where access or adherence is the decision',
    ],
  },
  {
    id: 'why-healthcare-mr-saudi-differs',
    title: 'Why healthcare market research Saudi Arabia differs from global templates',
    paragraphs: [
      'Healthcare market research Saudi Arabia is shaped by SFDA registration and lot-release expectations, NUPCO centralised procurement for Ministry of Health channels, and Vision 2030 localisation and cluster accountability — not by generic global panel attitudes alone.',
      'Manufacturer affiliates comparing syndicated audits with primary fieldwork should start with the IQVIA alternative, then use this hub for SFDA-aware and NUPCO-aligned study design.',
      'BioNixus designs primary programmes around those institutional realities: Arabic- and English-capable HCP fieldwork, tender-cycle timing, formulary and access influencers, and city-level differences between Riyadh, Jeddah, and the Eastern Province.',
    ],
  },
  {
    id: 'primary-fieldwork-riyadh-jeddah-eastern',
    title: 'How BioNixus runs primary fieldwork across Riyadh, Jeddah, and Eastern Province',
    paragraphs: [
      'Riyadh anchors regulatory and public-sector insight near SFDA and MoH decision centres. Jeddah concentrates Western-region private hospital networks and life-sciences adjacency. Eastern Province programmes often include JHAH and Aramco-affiliated occupational and specialist networks.',
      'Typical engagements combine quantitative HCP surveys with KOL depth interviews and payer or procurement modules in one team — so launch, access, and medical affairs owners receive decision-linked evidence rather than subcontracted fieldwork alone.',
    ],
    listItems: [
      'SFDA-aware study design and registration-stage perception capture',
      'NUPCO tender-cycle and hospital uptake mapping where relevant',
      'City- and cluster-level sampling to avoid Riyadh-only bias',
      'Arabic-first instruments with controlled bilingual quality review',
    ],
  },
  {
    id: 'therapy-programmes-saudi-hub',
    title: 'Therapy programmes linked from healthcare market research Saudi Arabia',
    paragraphs: [
      'Country hub programmes connect to BioNixus Saudi therapy and segment briefings when launch decisions are therapy-specific. Use the reports below for market-size and access depth; use this page for agency capability, fieldwork design, and SFDA/NUPCO operating context.',
    ],
  },
  {
    id: 'bionixus-vs-syndicated-saudi',
    title: 'BioNixus vs syndicated panels for Saudi Arabia healthcare research',
    paragraphs: [
      'Syndicated and global secondary reports describe the Saudi healthcare sector; they rarely measure how prescribing, tender committees, or cluster formulary behaviour will move for a specific asset.',
      'BioNixus positions as the primary-research alternative for pharma and medtech teams that need Arabic HCP insight, KOL mapping, and NUPCO-aware access evidence — complementary to IQVIA-style datasets when primary behaviour is the decision gate. We do not invent competitive win rates; we scope studies to the decisions your team must make.',
    ],
  },
];

/** City areaServed nodes for Saudi hub Service schema. */
export const SAUDI_ARABIA_HUB_AREA_SERVED = [
  {
    '@type': 'City' as const,
    name: 'Riyadh',
    containedInPlace: { '@type': 'Country' as const, name: 'Saudi Arabia' },
  },
  {
    '@type': 'City' as const,
    name: 'Jeddah',
    containedInPlace: { '@type': 'Country' as const, name: 'Saudi Arabia' },
  },
  {
    '@type': 'City' as const,
    name: 'Al Khobar',
    containedInPlace: { '@type': 'Country' as const, name: 'Saudi Arabia' },
  },
];
