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
    id: 'why-healthcare-mr-saudi-differs',
    title: 'Why healthcare market research Saudi Arabia differs from global templates',
    paragraphs: [
      'Healthcare market research Saudi Arabia is shaped by SFDA registration and lot-release expectations, NUPCO centralised procurement for Ministry of Health channels, and Vision 2030 localisation and cluster accountability — not by generic global panel attitudes alone.',
      'Buyers comparing general research agencies — not only pharma fieldwork — should start with our Kingdom-wide firm rankings before therapy-specific programmes.',
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
