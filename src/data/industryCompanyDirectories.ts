import {
  getIndustryBofuPath,
  getIndustryListiclePath,
} from '@/data/industryMarketResearchMatrix';

export type IndustryDirectorySlug = 'fmcg' | 'retail' | 'real-estate';
export type IndustryDirectoryCountrySlug = 'egypt' | 'uae' | 'saudi-arabia' | 'kuwait' | 'oman' | 'qatar';
export type IndustryCompanyType =
  | 'Local'
  | 'MNC'
  | 'Regional'
  | 'Distributor'
  | 'Retailer'
  | 'Developer'
  | 'Operator'
  | 'Government';

export type IndustryCompanyEntry = {
  name: string;
  hq: string;
  type: IndustryCompanyType;
  focus: string;
  notes: string;
};

export type IndustryDirectoryConfig = {
  path: string;
  industry: IndustryDirectorySlug;
  industryLabel: string;
  countrySlug: IndustryDirectoryCountrySlug;
  countryName: string;
  countryDisplay: string;
  title: string;
  metaDescription: string;
  h1: string;
  introLead: string;
  introRest: string;
  stats: { value: string; label: string }[];
  channelHeading: string;
  channelBody: string;
  companies: IndustryCompanyEntry[];
  categoryBlurbs: { local: string; mnc: string; regional: string; trade: string };
  growthDrivers: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  listicleTo: string;
  listicleLabel: string;
  bofuTo: string;
  relatedLinks: { to: string; label: string }[];
  publishedDate: string;
  modifiedDate: string;
  /** Optional matrix-era fields (see src/data/companyDirectories/types.ts). */
  regulatorSource?: { name: string; url: string; asOf: string };
  sources?: string[];
  fieldNotes?: string[];
  /** Entity-specific prose sections (e.g. developer launch pipeline, off-plan vs ready). */
  sections?: { heading: string; paragraphs: string[] }[];
};

const PUBLISHED = '2026-09-02';

const INDUSTRY_LABEL: Record<IndustryDirectorySlug, string> = {
  fmcg: 'FMCG',
  retail: 'Retail',
  'real-estate': 'Real Estate',
};

const TITLE_SUFFIX: Record<IndustryDirectorySlug, string> = {
  fmcg: 'Traditional + Modern Trade',
  retail: 'Traditional + Modern Trade',
  'real-estate': 'Developers We Study',
};

const COUNTRY_META: Record<
  IndustryDirectoryCountrySlug,
  { countryName: string; countryDisplay: string; titlePlace: string; h1Place: string }
> = {
  egypt: { countryName: 'Egypt', countryDisplay: 'Egypt', titlePlace: 'Egypt', h1Place: 'Egypt' },
  uae: {
    countryName: 'United Arab Emirates',
    countryDisplay: 'the UAE',
    titlePlace: 'UAE',
    h1Place: 'the UAE',
  },
  'saudi-arabia': {
    countryName: 'Saudi Arabia',
    countryDisplay: 'Saudi Arabia',
    titlePlace: 'Saudi Arabia',
    h1Place: 'Saudi Arabia',
  },
  kuwait: { countryName: 'Kuwait', countryDisplay: 'Kuwait', titlePlace: 'Kuwait', h1Place: 'Kuwait' },
  oman: { countryName: 'Oman', countryDisplay: 'Oman', titlePlace: 'Oman', h1Place: 'Oman' },
  qatar: { countryName: 'Qatar', countryDisplay: 'Qatar', titlePlace: 'Qatar', h1Place: 'Qatar' },
};

const SIBLING_COUNTRIES: Record<
  IndustryDirectoryCountrySlug,
  [IndustryDirectoryCountrySlug, IndustryDirectoryCountrySlug]
> = {
  egypt: ['uae', 'saudi-arabia'],
  uae: ['saudi-arabia', 'egypt'],
  'saudi-arabia': ['uae', 'egypt'],
  kuwait: ['saudi-arabia', 'qatar'],
  oman: ['uae', 'saudi-arabia'],
  qatar: ['uae', 'kuwait'],
};

const INDUSTRY_SLUGS: IndustryDirectorySlug[] = ['fmcg', 'retail', 'real-estate'];

export function getIndustryDirectoryPath(
  industry: IndustryDirectorySlug,
  country: IndustryDirectoryCountrySlug,
): string {
  return `/${industry}-companies-${country}`;
}

function relatedLinksFor(
  industry: IndustryDirectorySlug,
  country: IndustryDirectoryCountrySlug,
): { to: string; label: string }[] {
  const cm = COUNTRY_META[country];
  const label = INDUSTRY_LABEL[industry];
  const siblingIndustries = INDUSTRY_SLUGS.filter((slug) => slug !== industry);
  const [c1, c2] = SIBLING_COUNTRIES[country];
  return [
    {
      to: getIndustryListiclePath(country, industry),
      label: `Top ${label} market research companies in ${cm.titlePlace}`,
    },
    {
      to: getIndustryBofuPath(country, industry),
      label: `${label} market research in ${cm.titlePlace}`,
    },
    ...siblingIndustries.map((slug) => ({
      to: getIndustryDirectoryPath(slug, country),
      label: `${INDUSTRY_LABEL[slug]} companies in ${cm.h1Place}`,
    })),
    {
      to: getIndustryDirectoryPath(industry, c1),
      label: `${label} companies in ${COUNTRY_META[c1].h1Place}`,
    },
    {
      to: getIndustryDirectoryPath(industry, c2),
      label: `${label} companies in ${COUNTRY_META[c2].h1Place}`,
    },
    {
      to: `/pharmaceutical-companies-${country}`,
      label: `Pharmaceutical companies in ${cm.titlePlace}`,
    },
    { to: '/nielsen-alternative', label: 'Nielsen alternative' },
    { to: '/account-level-market-research', label: 'Account-level market research' },
  ];
}

function finish(
  industry: IndustryDirectorySlug,
  country: IndustryDirectoryCountrySlug,
  rest: Omit<
    IndustryDirectoryConfig,
    | 'path'
    | 'industry'
    | 'industryLabel'
    | 'countrySlug'
    | 'countryName'
    | 'countryDisplay'
    | 'title'
    | 'h1'
    | 'listicleTo'
    | 'listicleLabel'
    | 'bofuTo'
    | 'relatedLinks'
    | 'publishedDate'
    | 'modifiedDate'
  > &
    Partial<Pick<IndustryDirectoryConfig, 'title' | 'h1' | 'modifiedDate'>>,
): IndustryDirectoryConfig {
  const cm = COUNTRY_META[country];
  const industryLabel = INDUSTRY_LABEL[industry];
  const n = rest.companies.length;
  return {
    path: getIndustryDirectoryPath(industry, country),
    industry,
    industryLabel,
    countrySlug: country,
    countryName: cm.countryName,
    countryDisplay: cm.countryDisplay,
    title: `Top ${n} ${industryLabel} Companies in ${cm.titlePlace} (2026) | ${TITLE_SUFFIX[industry]}`,
    h1: `${industryLabel} Companies in ${cm.h1Place}`,
    listicleTo: getIndustryListiclePath(country, industry),
    listicleLabel: `Best ${industryLabel} market research firms in ${cm.titlePlace} (2026)`,
    bofuTo: getIndustryBofuPath(country, industry),
    relatedLinks: relatedLinksFor(industry, country),
    publishedDate: PUBLISHED,
    modifiedDate: PUBLISHED,
    ...rest,
  };
}

const FMCG_EGYPT = finish('fmcg', 'egypt', {
  metaDescription:
    '2026 directory of FMCG companies in Egypt: Edita, Juhayna, Nestlé, Unilever. Traditional grocers plus modern trade. Account- and SKU-level primary research.',
  introLead:
    'Egypt’s pantry is still decided in kiosks, bakals, and wholesale markets — not only on a Carrefour or Metro planogram. Edita, Juhayna, Obour Land (Domty), Beyti, Egypt Foods, and Arma set the local branded baseline; Nestlé, Unilever, P&G, PepsiCo, and Coca-Cola compete through the same dual system.',
  introRest:
    'BioNixus fields account-level and SKU-level primary research across that mix. Nielsen-style modern-trade panels remain useful for national share. They do not replace a study that names the accounts, cities, and pack sizes where volume actually moves. Pair this directory with our FMCG market research in Egypt when the brief is brand versus competitor, not category sizing.',
  stats: [
    { value: '13', label: 'Companies we list and study' },
    { value: 'Dual trade', label: 'Kiosk + modern grocery' },
    { value: 'SKU', label: 'Brand vs competitor cut' },
    { value: 'Mansour', label: 'Classic route-to-market name' },
  ],
  channelHeading: 'How FMCG actually reaches Egyptian households',
  channelBody:
    'Traditional grocers and wholesale still carry a large share of biscuits, dairy, oils, and CSDs. Modern trade (Carrefour, Metro, BIM, Spinneys) is the listing and promotion theatre. Pharmacy and chemist banners matter for OTC-adjacent personal care. A useful brief names both the account and the pack — “Juhayna 1L in Metro 6th of October” is a research question; “dairy in Cairo” is not.',
  companies: [
    { name: 'Edita Food Industries', hq: 'Egypt', type: 'Local', focus: 'Bakery, snacks, confectionery', notes: 'EGX-listed snack and bakery leader; Freska, TODO, Molto' },
    { name: 'Juhayna Food Industries', hq: 'Egypt', type: 'Local', focus: 'Dairy, juice', notes: 'Flagship UHT milk and juice; dual-trade distribution' },
    { name: 'Obour Land (Domty)', hq: 'Egypt', type: 'Local', focus: 'Cheese, dairy', notes: 'Domty white cheese is a staple SKU in bakals' },
    { name: 'Beyti (Almarai)', hq: 'Egypt / Saudi Arabia', type: 'Regional', focus: 'Dairy, juice', notes: 'Almarai’s Egyptian dairy and juice platform' },
    { name: 'Egypt Foods', hq: 'Egypt', type: 'Local', focus: 'Snacks, processed foods', notes: 'Local snack competitor to Edita and PepsiCo' },
    { name: 'Arma Food Industries', hq: 'Egypt', type: 'Local', focus: 'Edible oils, fats', notes: 'Household oils; traditional-trade heavy' },
    { name: 'Nestlé', hq: 'Switzerland', type: 'MNC', focus: 'Dairy, coffee, nutrition', notes: 'Nescafé, Maggi, infant nutrition; factory footprint in Egypt' },
    { name: 'Unilever', hq: 'UK / Netherlands', type: 'MNC', focus: 'Home care, personal, foods', notes: 'Lipton, Dove, Knorr — strong traditional + modern mix' },
    { name: 'Procter & Gamble', hq: 'USA', type: 'MNC', focus: 'Home care, personal care', notes: 'Ariel, Pampers, Always; chemist and grocery dual path' },
    { name: 'PepsiCo', hq: 'USA', type: 'MNC', focus: 'Snacks, beverages', notes: 'Chipsy and Pepsi system; high impulse in kiosks' },
    { name: 'The Coca-Cola Company', hq: 'USA', type: 'MNC', focus: 'Sparkling and still drinks', notes: 'Bottler network plus modern-trade coolers' },
    { name: 'Americana Foods', hq: 'Kuwait / regional', type: 'Regional', focus: 'QSR and packaged foods', notes: 'Regional kitchen brands with Egyptian plants and listings' },
    { name: 'Mansour Distribution', hq: 'Egypt', type: 'Distributor', focus: 'FMCG route-to-market', notes: 'The distributor most briefs name when they say “who actually sells it”' },
  ],
  categoryBlurbs: {
    local: 'Edita, Juhayna, Obour Land, Egypt Foods, and Arma are the Egyptian names buyers use when they mean “local branded FMCG,” not private label. Their mix is bakery, dairy, cheese, snacks, and oils — categories where traditional trade still decides the week.',
    mnc: 'Nestlé, Unilever, P&G, PepsiCo, and Coca-Cola run Egypt as a volume market. The research gap is rarely “are they present?” It is which SKU wins in which account, including the kiosk and wholesale cut a dashboard averages away.',
    regional: 'Beyti under Almarai and Americana sit between local plants and GCC brand systems. They are the accounts we field when a KSA or Kuwait brand team asks how their Egyptian twin is actually merchandised.',
    trade: 'Mansour Distribution is the named route-to-market partner. Listing still happens at Carrefour, Metro, and BIM; volume still leaks through bakals. We study both, not the modern-trade slice alone.',
  },
  growthDrivers: [
    { title: 'Dual-trade volume, not a single banner', desc: 'Egypt’s FMCG growth is still split between organised grocery and a dense traditional network. A panel that only sees modern trade understates snack, dairy, and CSD reality.' },
    { title: 'Local listed brands with factory scale', desc: 'Edita and Juhayna are EGX stories with real plants. Competitor work has to treat them as peers to MNCs, not as “local filler.”' },
    { title: 'Almarai and Americana as GCC bridges', desc: 'Beyti and Americana pull Egyptian SKUs into a regional brand conversation. Cross-country briefs should not copy a KSA questionnaire onto Cairo wholesale.' },
    { title: 'Chemist adjacency for personal care', desc: 'P&G and Unilever move a material share through pharmacies and beauty shops. That is a channel, not a footnote.' },
    { title: 'Price-pack architecture under inflation', desc: 'Households trade down pack size before they abandon the brand. SKU-level work is how you see that, not a category average.' },
    { title: 'Distributor as a decision unit', desc: 'When the brief is “why are we dark in Upper Egypt,” the unit of analysis is often Mansour or a sub-distributor, not a national share point.' },
  ],
  faq: [
    { q: 'Which FMCG companies in Egypt should a brand team actually map?', a: 'Start with Edita, Juhayna, Obour Land/Domty, Beyti, Egypt Foods, and Arma on the local side, then Nestlé, Unilever, P&G, PepsiCo, Coca-Cola, and Americana. Add Mansour Distribution if the question is route-to-market rather than a factory brand.' },
    { q: 'Does Nielsen cover traditional trade in Egypt well enough?', a: 'NielsenIQ is strongest on modern-trade measurement and household panels. Egyptian volume in biscuits, dairy, and CSDs still moves through bakals and wholesale. BioNixus complements that feed with account- and SKU-level primary fieldwork — it does not replace the subscription.' },
    { q: 'What does account-level FMCG research mean in Egypt?', a: 'A named banner or distributor, a named city or district, and a named pack. Example: Domty white cheese facings in Metro versus a wholesale market in Alexandria — not “cheese in Egypt.”' },
    { q: 'How is BioNixus different from a syndicated FMCG dashboard?', a: 'Dashboards answer what the category did in the audited universe. We answer how your SKU is performing versus named competitors in the accounts you can still influence this quarter.' },
    { q: 'Can we keep Nielsen and still commission BioNixus in Egypt?', a: 'Yes. The usual model is Nielsen or similar for national modern-trade share, plus a custom study for traditional trade, subregions, or a launch SKU. That is the complement, not a rip-and-replace.' },
  ],
});

const FMCG_UAE = finish('fmcg', 'uae', {
  metaDescription:
    '2026 directory of FMCG companies in the UAE: Agthia, IFFCO, Al Rawabi, Nestlé, Unilever. Modern trade plus traditional souk. SKU-level research by BioNixus.',
  introLead:
    'The UAE pantry is a re-export and listing market first: Agthia, IFFCO, Al Rawabi, Mai Dubai, and Al Ghurair Foods sit next to Unilever, Nestlé, P&G, PepsiCo, Coca-Cola, Americana, and Almarai. MAF Carrefour and Lulu set the planogram; independent grocers and souk wholesale still decide whether a water or dairy SKU actually turns.',
  introRest:
    'BioNixus studies those accounts at brand-versus-competitor and SKU level. A Nielsen modern-trade cut is the right buy for national FMCG share in the UAE. It is the wrong buy when you need Al Rawabi versus Almarai in Union Coop, or Mai Dubai versus Agthia in a traditional grocery cluster. Use this list with our FMCG market research in the UAE.',
  stats: [
    { value: '12', label: 'Companies we list and study' },
    { value: 'MAF + Lulu', label: 'Listing theatres' },
    { value: 'Water + dairy', label: 'Local brand battlegrounds' },
    { value: 'Re-export', label: 'Jebel Ali adjacency' },
  ],
  channelHeading: 'Listing in Dubai is not the same as turning in the Northern Emirates',
  channelBody:
    'MAF Carrefour, Lulu, Spinneys, Union Coop, and Choithrams are the modern-trade gates. Traditional grocers in Sharjah, Ajman, and the labour-camp catchments still move water, rice, and cooking oil at a different price pack. Al Ghurair and IFFCO feel that split every week. A useful UAE brief names the emirate and the banner — not “GCC grocery.”',
  companies: [
    { name: 'Agthia Group', hq: 'UAE', type: 'Local', focus: 'Water, flour, tomato, protein', notes: 'Al Ain Water and Grand Mills; ADX-listed national champion' },
    { name: 'IFFCO', hq: 'UAE', type: 'Local', focus: 'Oils, fats, bakery, foods', notes: 'Sharjah-based industrial foods group; trade-heavy oils' },
    { name: 'Al Rawabi Dairy', hq: 'UAE', type: 'Local', focus: 'Fresh dairy, juice', notes: 'Dubai fresh-milk brand versus long-life Almarai' },
    { name: 'Mai Dubai', hq: 'UAE', type: 'Local', focus: 'Bottled water', notes: 'DEWA-linked water brand; cooler and grocery fight with Agthia' },
    { name: 'Al Ghurair Foods', hq: 'UAE', type: 'Local', focus: 'Flour, rice, oils, sugar', notes: 'Family industrial foods; traditional-trade staple SKUs' },
    { name: 'Unilever', hq: 'UK / Netherlands', type: 'MNC', focus: 'Home care, personal, foods', notes: 'Regional hub in Dubai; modern + traditional execution' },
    { name: 'Nestlé', hq: 'Switzerland', type: 'MNC', focus: 'Dairy, coffee, confectionery', notes: 'Middle East hub; water and coffee compete with local brands' },
    { name: 'Procter & Gamble', hq: 'USA', type: 'MNC', focus: 'Home care, personal care', notes: 'Pharmacy and grocery dual path across the emirates' },
    { name: 'PepsiCo', hq: 'USA', type: 'MNC', focus: 'Snacks, beverages', notes: 'Impulse and modern-trade coolers; food-service adjacency' },
    { name: 'The Coca-Cola Company', hq: 'USA', type: 'MNC', focus: 'Sparkling and still drinks', notes: 'Competes with Mai Dubai and Agthia on still water' },
    { name: 'Americana', hq: 'Kuwait / UAE', type: 'Regional', focus: 'QSR and packaged foods', notes: 'Regional kitchen plus grocery listings' },
    { name: 'Almarai', hq: 'Saudi Arabia', type: 'Regional', focus: 'Dairy, juice, bakery, poultry', notes: 'Long-life dairy that Al Rawabi does not try to be' },
  ],
  categoryBlurbs: {
    local: 'Agthia, IFFCO, Al Rawabi, Mai Dubai, and Al Ghurair Foods are the UAE names that own water, flour, oils, and fresh dairy. They are not “small locals.” They are the competitors MNC brand teams underestimate in traditional grocery.',
    mnc: 'Unilever, Nestlé, P&G, PepsiCo, and Coca-Cola run Dubai as a hub market. The brief we take is rarely awareness. It is SKU and account: which water, which detergent, which cooler in which emirate.',
    regional: 'Almarai and Americana import a GCC brand system into UAE grocery. Almarai’s long-life dairy is a different job from Al Rawabi’s fresh milk — treat them as different occasions, not one “dairy” row.',
    trade: 'MAF Carrefour and Lulu are the listing conversation. Union Coop, Choithrams, and independent grocers are where water and rice still turn on price. We field both. A Nielsen modern-trade average is not that study.',
  },
  growthDrivers: [
    { title: 'Water as a branded category, not a commodity', desc: 'Mai Dubai versus Agthia versus the MNC still-water lines is a UAE-specific fight. National CSD share will not tell you who won the cooler.' },
    { title: 'Fresh dairy versus long-life dairy', desc: 'Al Rawabi and Almarai are not substitutes in the same fridge. Occasion and banner mix have to be designed into the sample.' },
    { title: 'Industrial foods behind the brand', desc: 'IFFCO and Al Ghurair sell oils and flour into bakeries and traditional trade. B2B grocery is part of FMCG here, not a separate industry.' },
    { title: 'Hub pricing and re-export leakage', desc: 'Jebel Ali means some “UAE” volume is not UAE consumption. Account-level work is how you stop a dashboard from mixing the two.' },
    { title: 'Co-op and independent grocery', desc: 'Union Coop and neighbourhood grocers still matter for staple packs. Ignoring them is a Dubai-mall sample, not a UAE sample.' },
    { title: 'Personal care through pharmacy banners', desc: 'Life Pharmacy and Aster sit next to grocery for P&G and Unilever. Include them when the SKU is a chemist SKU.' },
  ],
  faq: [
    { q: 'Who are the main FMCG companies in the UAE?', a: 'On the local side: Agthia, IFFCO, Al Rawabi, Mai Dubai, and Al Ghurair Foods. On the MNC side: Unilever, Nestlé, P&G, PepsiCo, and Coca-Cola. Almarai and Americana are the regional names most briefs also need on the map.' },
    { q: 'Is the UAE a modern-trade-only FMCG market?', a: 'No. MAF Carrefour, Lulu, and Spinneys are the listing theatres, but traditional grocers and souk wholesale still move water, rice, and oils — especially outside Dubai Marina catchments. We field both.' },
    { q: 'How should we treat Al Rawabi versus Almarai?', a: 'As different jobs. Al Rawabi is fresh dairy; Almarai in the UAE is largely long-life and adjacent pantry. A single “dairy share” number hides the occasion you are actually trying to win.' },
    { q: 'When do we keep Nielsen and add BioNixus in the UAE?', a: 'Keep NielsenIQ for modern-trade category sizing. Add BioNixus when the question is a named SKU in a named banner or emirate, including traditional trade, or when water and dairy locals are the real competitors.' },
    { q: 'Does BioNixus replace a Nielsen subscription in the UAE?', a: 'No. We complement it. The dashboard answers what audited modern trade did. The brief we take is brand versus competitor at account and SKU level, including the grocers the panel undersamples.' },
  ],
});

const FMCG_KSA = finish('fmcg', 'saudi-arabia', {
  metaDescription:
    '2026 directory of FMCG companies in Saudi Arabia: Almarai, Savola, NADEC, Unilever, P&G. Panda and BinDawood listing. Account-level research by BioNixus.',
  introLead:
    'Saudi FMCG is a dairy, oil, and protein story before it is a detergent story. Almarai, Savola, NADEC, SADAFCO, Halwani Brothers, and Almunajem set the local branded pantry. Unilever, P&G, Nestlé, PepsiCo, Coca-Cola, and Americana compete through Panda, BinDawood, Othaim, and Tamimi — and through a traditional grocer network that Vision 2030 did not retire.',
  introRest:
    'BioNixus fields the account and the SKU. A Nielsen modern-trade feed is the right tool for national category share in the Kingdom. It is the wrong tool when you need Almarai versus NADEC in Othaim Qassim, or Savola oil versus a private-label pack in a Riyadh grocer. Read this list with our FMCG market research in Saudi Arabia.',
  stats: [
    { value: '12', label: 'Companies we list and study' },
    { value: 'Panda + BinDawood', label: 'Listed grocery gates' },
    { value: 'Dairy + oils', label: 'Local brand core' },
    { value: 'Vision 2030', label: 'Localisation pressure' },
  ],
  channelHeading: 'Panda listing is not the same as Qassim traditional trade',
  channelBody:
    'Panda, BinDawood / Danube, Othaim, and Tamimi are the modern-trade conversation — several of them listed, all of them professionalised. Traditional grocers and wholesale still move ghee, rice, and value dairy outside the Riyadh–Jeddah–Dammam triangle. SADAFCO and Halwani feel that geography every week. Name the banner and the region, or the study will average a Kingdom that does not shop as one.',
  companies: [
    { name: 'Almarai', hq: 'Saudi Arabia', type: 'Local', focus: 'Dairy, juice, bakery, poultry', notes: 'Tadawul-listed dairy champion; the SKU most briefs start with' },
    { name: 'Savola Group', hq: 'Saudi Arabia', type: 'Local', focus: 'Edible oils, sugar, foods; Panda parent', notes: 'Oils and foods plus the Panda retail system' },
    { name: 'NADEC', hq: 'Saudi Arabia', type: 'Local', focus: 'Dairy, juice, agriculture', notes: 'Almarai’s most-named local dairy competitor' },
    { name: 'SADAFCO', hq: 'Saudi Arabia', type: 'Local', focus: 'Dairy, tomato, ice cream', notes: 'Saudia brand; strong traditional-trade ice cream and milk' },
    { name: 'Halwani Brothers', hq: 'Saudi Arabia', type: 'Local', focus: 'Processed meats, sweets, dairy', notes: 'Hijazi heritage brand; modern + traditional dual path' },
    { name: 'Almunajem Foods', hq: 'Saudi Arabia', type: 'Local', focus: 'Frozen protein, foodservice', notes: 'Frozen meat and poultry into grocery and HORECA' },
    { name: 'Unilever', hq: 'UK / Netherlands', type: 'MNC', focus: 'Home care, personal, foods', notes: 'Lipton and home care versus local pantry brands' },
    { name: 'Procter & Gamble', hq: 'USA', type: 'MNC', focus: 'Home care, personal care', notes: 'Ariel and Pampers; grocery plus pharmacy' },
    { name: 'Nestlé', hq: 'Switzerland', type: 'MNC', focus: 'Dairy, coffee, nutrition, water', notes: 'Competes with Almarai and NADEC on dairy-adjacent age' },
    { name: 'PepsiCo', hq: 'USA', type: 'MNC', focus: 'Snacks, beverages', notes: 'Impulse plus food-service; bottler geography matters' },
    { name: 'The Coca-Cola Company', hq: 'USA', type: 'MNC', focus: 'Sparkling and still drinks', notes: 'Cooler fight in Panda and traditional grocery' },
    { name: 'Americana', hq: 'Kuwait / regional', type: 'Regional', focus: 'QSR and packaged foods', notes: 'Regional kitchen brands with KSA grocery listings' },
  ],
  categoryBlurbs: {
    local: 'Almarai, Savola, NADEC, SADAFCO, Halwani, and Almunajem are the Saudi pantry. Dairy, oils, frozen protein, and processed meat — not a “local SME” tier. Treat them as the competitive set, not as colour around the MNCs.',
    mnc: 'Unilever, P&G, Nestlé, PepsiCo, and Coca-Cola have deep KSA systems. The gap is account and SKU: which detergent in Othaim versus BinDawood, which dairy-adjacent nutrition SKU versus Almarai.',
    regional: 'Americana is the regional kitchen-and-grocery hybrid most KSA briefs still forget to put on the map next to the dairy locals.',
    trade: 'Panda (Savola), BinDawood, Othaim, and Tamimi are the listing gates. Traditional grocers remain the volume leak for oils and value dairy. We study both. A modern-trade-only dashboard is a partial Kingdom.',
  },
  growthDrivers: [
    { title: 'Local dairy as a strategic category', desc: 'Almarai versus NADEC versus SADAFCO is a Saudi industrial policy story as much as a brand story. Questionnaires copied from the UAE miss that weight.' },
    { title: 'Savola as manufacturer and retailer', desc: 'Savola owns brands and Panda. Competitive work has to separate the oil SKU from the banner that lists it — they are not independent.' },
    { title: 'Frozen protein and HORECA bleed', desc: 'Almunajem’s grocery facings are only half the story. Food-service offtake changes what “share” means for frozen meat.' },
    { title: 'Vision 2030 localisation pressure', desc: 'Procurement and consumer preference tilt toward Saudi-made pantry brands. That shows up in listing and in traditional trade, not only in a CSR slide.' },
    { title: 'Three-city fallacy', desc: 'Riyadh, Jeddah, and Dammam are not the Kingdom. Othaim’s Central and Qassim strength is a different shopper than Danube in Jeddah.' },
    { title: 'Pharmacy path for personal care', desc: 'Nahdi and Al Dawaa sit beside grocery for P&G and Unilever. Leave them out and you will misread personal-care velocity.' },
  ],
  faq: [
    { q: 'Which FMCG companies dominate the Saudi pantry?', a: 'Almarai, Savola, NADEC, SADAFCO, Halwani Brothers, and Almunajem on the local side. Unilever, P&G, Nestlé, PepsiCo, Coca-Cola, and Americana on the international and regional side. Start there before you add long-tail importers.' },
    { q: 'Is Panda the only grocery account that matters in KSA?', a: 'No. Panda is the largest modern banner and is Savola-owned, which creates a manufacturer–retailer overlap. BinDawood/Danube, Othaim, and Tamimi are distinct listing and shopper systems. Traditional grocers still move oils and value dairy.' },
    { q: 'How do we research Almarai versus NADEC properly?', a: 'At the SKU and account, not as “dairy.” Fresh, long-life, juice, and poultry are different jobs. Othaim in Qassim is not Danube in Jeddah. That is the brief BioNixus takes.' },
    { q: 'Does BioNixus replace Nielsen in Saudi Arabia?', a: 'No. Keep NielsenIQ for modern-trade category sizing. Add BioNixus for account-level or SKU-level brand-versus-competitor work, including traditional trade and regions the panel undersamples.' },
    { q: 'Why do Vision 2030 briefs keep asking about local FMCG brands?', a: 'Because localisation is visible in listing, procurement, and shopper preference — not only in factory announcements. A study that only benchmarks MNCs will miss the competitor the shopper actually switched to.' },
  ],
});

const FMCG_KUWAIT = finish('fmcg', 'kuwait', {
  metaDescription:
    '2026 directory of FMCG companies in Kuwait: Kuwait Flour Mills, KDD, Americana, Unilever. Co-ops and Sultan Center. Account- and SKU-level primary research.',
  introLead:
    'Kuwait is a small, high-income grocery market with a few local names that still punch above their size: Kuwait Flour Mills & Bakeries, KDD, Al-Sayer, and National Food Company, plus Americana’s historic home base. Unilever, Nestlé, P&G, PepsiCo, Coca-Cola, and Almarai fill the rest of the trolley. The gate is often a co-operative society, not a hypermarket buyer in Dubai.',
  introRest:
    'BioNixus fields those accounts at SKU level. A regional Nielsen cut that treats Kuwait as a GCC leftover will miss co-op listing rules and KDD’s dairy hold. Use this directory with our FMCG market research in Kuwait when the question is brand versus competitor inside a named co-op or Sultan Center cluster.',
  stats: [
    { value: '11', label: 'Companies we list and study' },
    { value: 'Co-ops', label: 'Kuwait-specific gate' },
    { value: 'KDD + KFM', label: 'Local pantry anchors' },
    { value: 'Import-heavy', label: 'MNC + GCC brands' },
  ],
  channelHeading: 'Co-operative societies are the channel, not a footnote',
  channelBody:
    'Kuwait’s consumer co-ops are a political and commercial institution. They set price and listing in a way MAF Carrefour does not in Dubai. Sultan Center is the professional modern banner; Lulu and Carrefour exist; the co-op still decides whether KDD laban or Almarai long-life gets the fridge. If your sample only hits Sultan Center, you have a tourist grocery study.',
  companies: [
    { name: 'Kuwait Flour Mills & Bakeries', hq: 'Kuwait', type: 'Local', focus: 'Flour, bread, consumer staples', notes: 'State-linked staple brand; traditional + co-op core' },
    { name: 'KDD (Kuwait Danish Dairy)', hq: 'Kuwait', type: 'Local', focus: 'Dairy, juice, ice cream', notes: 'The local dairy name; fridge competitor to Almarai' },
    { name: 'Americana', hq: 'Kuwait', type: 'Regional', focus: 'QSR and packaged foods', notes: 'Historic Kuwaiti group; grocery plus food-service' },
    { name: 'Al-Sayer Group', hq: 'Kuwait', type: 'Local', focus: 'Automotive and FMCG distribution', notes: 'Family group with food and consumer distribution' },
    { name: 'National Food Company', hq: 'Kuwait', type: 'Local', focus: 'Processed foods, protein', notes: 'Local processed-food manufacturer and brand owner' },
    { name: 'Unilever', hq: 'UK / Netherlands', type: 'MNC', focus: 'Home care, personal, foods', notes: 'Co-op and Sultan Center dual execution' },
    { name: 'Nestlé', hq: 'Switzerland', type: 'MNC', focus: 'Dairy, coffee, nutrition', notes: 'Competes with KDD on dairy-adjacent occasions' },
    { name: 'Procter & Gamble', hq: 'USA', type: 'MNC', focus: 'Home care, personal care', notes: 'Grocery plus pharmacy banners' },
    { name: 'PepsiCo', hq: 'USA', type: 'MNC', focus: 'Snacks, beverages', notes: 'Impulse and cooler; food-service adjacency' },
    { name: 'The Coca-Cola Company', hq: 'USA', type: 'MNC', focus: 'Sparkling and still drinks', notes: 'Co-op cooler competition with PepsiCo' },
    { name: 'Almarai', hq: 'Saudi Arabia', type: 'Regional', focus: 'Dairy, juice, bakery, poultry', notes: 'Long-life dairy imported into KDD’s home market' },
  ],
  categoryBlurbs: {
    local: 'Kuwait Flour Mills, KDD, Al-Sayer, and National Food Company are the Kuwaiti pantry. They are few, and they are not optional on a competitor map. KDD especially is the dairy incumbent Almarai has to dislodge, not the other way around.',
    mnc: 'Unilever, Nestlé, P&G, PepsiCo, and Coca-Cola treat Kuwait as a high-value, short-distance market. Execution quality in co-ops is the research question, not brand awareness.',
    regional: 'Americana is Kuwaiti in origin; Almarai is the Saudi dairy import. Together they are the regional layer that a “GCC dashboard” flattens into one row.',
    trade: 'Co-operative societies plus Sultan Center are the dual gate. Lulu and Carrefour add modern-trade depth. Skip the co-ops and you have misread Kuwait on purpose.',
  },
  growthDrivers: [
    { title: 'Co-op listing as a political-commercial fact', desc: 'Co-ops are not “another banner.” They have different buyers, price rules, and shopper missions. Design the sample around them.' },
    { title: 'KDD as the dairy incumbent', desc: 'Almarai’s Kuwait problem is KDD, not Nestlé. Occasion and fridge share have to be measured, not assumed from KSA.' },
    { title: 'Americana’s dual grocery–QSR system', desc: 'Packaged Americana SKUs and QSR traffic inform each other. A grocery-only brief will understate the brand.' },
    { title: 'Import dependence with local flour and dairy', desc: 'Most of the trolley is imported, but flour and fresh dairy are still local fights. Do not write Kuwait as “100% import.”' },
    { title: 'Short distances, sharp catchment differences', desc: 'Hawalli is not Ahmadi. A national Kuwait average can still hide a dead SKU in one governorate.' },
    { title: 'Pharmacy adjacency for personal care', desc: 'P&G and Unilever move chemist SKUs through pharmacy banners as well as grocery. Include them when the SKU belongs there.' },
  ],
  faq: [
    { q: 'Which FMCG companies matter most in Kuwait?', a: 'Kuwait Flour Mills, KDD, Americana, Al-Sayer, and National Food Company locally; Unilever, Nestlé, P&G, PepsiCo, Coca-Cola, and Almarai internationally. That set covers staples, dairy, and the MNC trolley.' },
    { q: 'Why do Kuwait FMCG briefs keep mentioning co-ops?', a: 'Because consumer co-operative societies are a primary listing and price-setting channel, not a secondary traditional-trade leftover. A Sultan Center-only sample is incomplete.' },
    { q: 'Is Almarai stronger than KDD in Kuwait?', a: 'Do not assume it from KSA. KDD is the local dairy name. Whether Almarai wins a given fridge is an account- and SKU-level question — which is why we field it rather than import a Kingdom number.' },
    { q: 'Can a GCC Nielsen subscription replace a Kuwait study?', a: 'It can size modern trade. It will not tell you how a SKU listed in a co-op versus Sultan Center, or how KDD is merchandised against Almarai. That is the complement BioNixus sells.' },
    { q: 'What does BioNixus need in a Kuwait FMCG brief?', a: 'Named brands, named packs, and whether the sample must include co-ops, Sultan Center, Lulu/Carrefour, or traditional grocers. “FMCG in Kuwait” is not a design.' },
  ],
});

const FMCG_OMAN = finish('fmcg', 'oman', {
  metaDescription:
    '2026 directory of FMCG companies in Oman: A’saffa, Oman Flour Mills, Areej, Nestlé, Khimji Ramdas. Lulu plus wilayat grocers. SKU-level primary research.',
  introLead:
    'Omani FMCG still runs through a few national plants and one trade house everyone names: A’saffa in poultry, Oman Flour Mills, Areej in oils, Oman Refreshment Company as the Pepsi bottler, Tanuf in water, and Khimji Ramdas as the distributor that actually reaches the wilayats. Nestlé, Unilever, P&G, Coca-Cola, and Almarai ride that same spine.',
  introRest:
    'Lulu is the modern-trade fact on the coast. Interior grocers are the volume fact everywhere else. BioNixus fields both at account and SKU level. A GCC panel that parks Oman under “rest of Gulf” will not tell you whether Tanuf or an MNC water won Nizwa. Pair this list with our FMCG market research in Oman.',
  stats: [
    { value: '11', label: 'Companies we list and study' },
    { value: 'Lulu', label: 'Coastal modern-trade gate' },
    { value: 'Khimji', label: 'Named trade house' },
    { value: 'Wilayats', label: 'Interior grocery reality' },
  ],
  channelHeading: 'Muscat hypermarkets are not the interior',
  channelBody:
    'Lulu and Carrefour concentrate modern trade in Muscat and Salalah. A’saffa chicken and Oman Flour Mills bags still move through wilayat grocers that a coastal panel undersamples. Khimji Ramdas is often the unit of analysis — the brand team in Dubai may never have visited the store, but the case still went through Khimji. Name the governorate.',
  companies: [
    { name: 'A’saffa Foods', hq: 'Oman', type: 'Local', focus: 'Poultry, protein', notes: 'MSM-linked poultry name; grocery plus food-service' },
    { name: 'Oman Flour Mills', hq: 'Oman', type: 'Local', focus: 'Flour, animal feed, foods', notes: 'Staple flour brand; traditional-trade heavy' },
    { name: 'Areej Vegetable Oils & Derivatives', hq: 'Oman', type: 'Local', focus: 'Edible oils, fats', notes: 'Local oils versus IFFCO and Savola imports' },
    { name: 'Oman Refreshment Company', hq: 'Oman', type: 'Local', focus: 'Pepsi system beverages', notes: 'Pepsi bottler; cooler and traditional-trade spine' },
    { name: 'Tanuf', hq: 'Oman', type: 'Local', focus: 'Bottled water', notes: 'Omani water brand versus MNC still lines' },
    { name: 'Nestlé', hq: 'Switzerland', type: 'MNC', focus: 'Dairy, coffee, nutrition', notes: 'Hub-served; competes with Almarai on dairy-adjacent' },
    { name: 'Unilever', hq: 'UK / Netherlands', type: 'MNC', focus: 'Home care, personal, foods', notes: 'Executed through modern trade and Khimji-type reach' },
    { name: 'Procter & Gamble', hq: 'USA', type: 'MNC', focus: 'Home care, personal care', notes: 'Grocery plus pharmacy path' },
    { name: 'The Coca-Cola Company', hq: 'USA', type: 'MNC', focus: 'Sparkling and still drinks', notes: 'Cooler fight with Oman Refreshment / Pepsi' },
    { name: 'Almarai', hq: 'Saudi Arabia', type: 'Regional', focus: 'Dairy, juice, bakery, poultry', notes: 'Imported long-life dairy and protein versus A’saffa' },
    { name: 'Khimji Ramdas', hq: 'Oman', type: 'Distributor', focus: 'FMCG and general trade', notes: 'The trade house most Oman briefs eventually name' },
  ],
  categoryBlurbs: {
    local: 'A’saffa, Oman Flour Mills, Areej, Oman Refreshment, and Tanuf are the Omani industrial pantry — poultry, flour, oils, a bottler, and water. They are the competitors a Dubai questionnaire forgets.',
    mnc: 'Nestlé, Unilever, P&G, and Coca-Cola are hub-served from the UAE more often than they are “Omani subsidiaries.” That is why account-level work has to start in-country, not from a Jebel Ali shipment report.',
    regional: 'Almarai is the Saudi dairy and protein import that sits next to A’saffa in the freezer and next to local milk in the long-life bay.',
    trade: 'Khimji Ramdas is the named distributor. Lulu is the coastal hypermarket. Wilayat grocers are the rest of the country. A study that only interviews Muscat Lulu has not done Oman.',
  },
  growthDrivers: [
    { title: 'Poultry as a national brand', desc: 'A’saffa is not a generic protein SKU. It is the local name Almarai and frozen imports have to beat in grocery and food-service.' },
    { title: 'Bottler geography', desc: 'Oman Refreshment (Pepsi) versus Coca-Cola is a cooler and traditional-trade fight. National beverage share without account cuts hides who owns the fridge.' },
    { title: 'Tanuf versus imported water', desc: 'Water is branded and local. Treat it as a category with a home-market incumbent, not as a commodity filler.' },
    { title: 'Khimji as a decision unit', desc: 'When coverage dies in a wilayat, the first call is often the trade house, not the brand team. Design questions that can survive that fact.' },
    { title: 'Vision 2040 food security language', desc: 'Local flour, poultry, and water sit inside a policy story. Shoppers may not recite Vision 2040; listing committees sometimes do.' },
    { title: 'Coast versus interior shopper', desc: 'Muscat Lulu shoppers are not Nizwa grocer shoppers. Split the sample or admit you only bought the coast.' },
  ],
  faq: [
    { q: 'Which FMCG companies should we map in Oman?', a: 'A’saffa, Oman Flour Mills, Areej, Oman Refreshment Company, Tanuf, and Khimji Ramdas locally; Nestlé, Unilever, P&G, Coca-Cola, and Almarai internationally. That set covers protein, staples, beverages, and the trade house.' },
    { q: 'Is Lulu enough modern trade for an Oman FMCG study?', a: 'Lulu is the coastal hypermarket fact. It is not the interior. If the brand sells flour, poultry, or water nationally, you need wilayat grocers — usually via a house such as Khimji Ramdas.' },
    { q: 'How is Oman different from UAE FMCG fieldwork?', a: 'Fewer banners, a stronger named trade house, and a real coast-versus-interior split. Copying a Dubai MAF sample onto Muscat and calling it “GCC” is how briefs fail.' },
    { q: 'Does Nielsen replace primary work in Oman?', a: 'A syndicated modern-trade cut can size what it sees. It will not tell you A’saffa versus Almarai in a wilayat freezer. BioNixus complements the panel; it does not replace it.' },
    { q: 'Why is Khimji Ramdas on an FMCG company list?', a: 'Because in Oman the distributor is often the account. Brand-versus-competitor work that ignores the trade house will mis-attribute a coverage gap to the brand.' },
  ],
});

const FMCG_QATAR = finish('fmcg', 'qatar', {
  metaDescription:
    '2026 directory of FMCG companies in Qatar: Baladna, Widam, Qatar Flour Mills, Al Meera. Food-security brands plus MNC trolley. SKU-level primary research.',
  introLead:
    'Qatar’s FMCG story is food security with a listing gate: Baladna in dairy, Widam in meat, Qatar Flour Mills in staples — then Unilever, Nestlé, P&G, PepsiCo, Coca-Cola, Almarai, and Americana on the imported trolley. Al Meera is not “a retailer we might mention.” It is the public-facing grocery system most SKUs have to survive.',
  introRest:
    'World Cup leftover modern trade made Doha look more like Dubai than it shops. Traditional souq grocery and Al Meera catchment stores still set the week for milk and flour. BioNixus fields the account and the SKU. Pair this directory with our FMCG market research in Qatar; keep Nielsen for the modern-trade average if you already buy it.',
  stats: [
    { value: '11', label: 'Companies we list and study' },
    { value: 'Al Meera', label: 'Listing gate' },
    { value: 'Baladna', label: 'Dairy food-security brand' },
    { value: 'Import trolley', label: 'MNC + GCC fill' },
  ],
  channelHeading: 'Al Meera is the gate; Lulu is the comparison set',
  channelBody:
    'Al Meera’s hybrid public–retail role means listing and price conversations are not a private-equity grocery meeting. Lulu and Carrefour are the international comparison set. Family grocers and souq shops still move rice, water, and value dairy. Baladna’s fresh dairy job is not Almarai’s long-life job. If the brief says “grocery in Doha,” ask which banner — the answer changes the design.',
  companies: [
    { name: 'Baladna', hq: 'Qatar', type: 'Local', focus: 'Dairy, juice, food security', notes: 'Post-blockade dairy champion; fresh milk versus Almarai long-life' },
    { name: 'Widam Food Company', hq: 'Qatar', type: 'Local', focus: 'Red meat, protein', notes: 'Listed meat company; grocery plus food-service' },
    { name: 'Qatar Flour Mills', hq: 'Qatar', type: 'Local', focus: 'Flour, staples', notes: 'National flour; traditional + Al Meera staple bay' },
    { name: 'Unilever', hq: 'UK / Netherlands', type: 'MNC', focus: 'Home care, personal, foods', notes: 'Al Meera and Lulu dual execution' },
    { name: 'Nestlé', hq: 'Switzerland', type: 'MNC', focus: 'Dairy, coffee, nutrition', notes: 'Competes with Baladna on dairy-adjacent occasions' },
    { name: 'Procter & Gamble', hq: 'USA', type: 'MNC', focus: 'Home care, personal care', notes: 'Grocery plus pharmacy banners' },
    { name: 'PepsiCo', hq: 'USA', type: 'MNC', focus: 'Snacks, beverages', notes: 'Impulse and cooler; food-service adjacency' },
    { name: 'The Coca-Cola Company', hq: 'USA', type: 'MNC', focus: 'Sparkling and still drinks', notes: 'Cooler competition in Al Meera and Lulu' },
    { name: 'Almarai', hq: 'Saudi Arabia', type: 'Regional', focus: 'Dairy, juice, bakery, poultry', notes: 'Imported long-life dairy into Baladna’s home market' },
    { name: 'Americana', hq: 'Kuwait / regional', type: 'Regional', focus: 'QSR and packaged foods', notes: 'Regional kitchen brands with Qatar listings' },
    { name: 'Al Meera', hq: 'Qatar', type: 'Retailer', focus: 'Grocery listing gate', notes: 'The retailer most Qatar FMCG briefs must name' },
  ],
  categoryBlurbs: {
    local: 'Baladna, Widam, and Qatar Flour Mills are food-security brands with listed-equity visibility. They are the reason a Qatar pantry map cannot be a copy of a UAE map with “Doha” pasted on.',
    mnc: 'Unilever, Nestlé, P&G, PepsiCo, and Coca-Cola fill the imported trolley. The research gap is Al Meera versus Lulu execution, not whether the brand “is in Qatar.”',
    regional: 'Almarai and Americana are the GCC layer. Almarai versus Baladna is the dairy question that a regional dashboard will flatten.',
    trade: 'Al Meera is the listing gate. Lulu and Carrefour are the international banners. Souq and family grocers still move staples. Name the gate in the brief.',
  },
  growthDrivers: [
    { title: 'Baladna as policy and brand', desc: 'Dairy here is a food-security asset. Shopper preference, listing, and national narrative travel together. Design questions that can separate those layers.' },
    { title: 'Widam and the protein bay', desc: 'Red meat in Qatar is not a generic frozen-import row. Widam’s grocery and food-service mix changes what “protein share” means.' },
    { title: 'Al Meera as a public grocery system', desc: 'Listing conversations have a different temperature than a private hypermarket. Treat Al Meera as its own account type.' },
    { title: 'Post-World Cup modern trade without Dubai shopper habits', desc: 'The stores look newer. The staple trip is still Al Meera and the neighbourhood grocer. Do not sample only West Bay.' },
    { title: 'Long-life versus fresh dairy', desc: 'Almarai and Baladna are often different occasions. A single dairy KPI will lie to both brand teams.' },
    { title: 'Expat versus Qatari trolley', desc: 'Catchment mix changes the brand set. Split the sample when the SKU is culturally marked — dairy, meat, and staples usually are.' },
  ],
  faq: [
    { q: 'Which FMCG companies define the Qatar pantry?', a: 'Baladna, Widam, and Qatar Flour Mills locally; Unilever, Nestlé, P&G, PepsiCo, Coca-Cola, Almarai, and Americana on the imported and regional side. Al Meera belongs on the same map as a listing gate.' },
    { q: 'Why is Al Meera on an FMCG company directory?', a: 'Because in Qatar the retailer is the decision unit for listing and price. Brand-versus-competitor work that ignores Al Meera is a Lulu-only study wearing a national label.' },
    { q: 'How should we compare Baladna and Almarai?', a: 'As fresh-versus-long-life and as home-market-versus-import, not as one dairy share point. That is an SKU- and account-level brief — the work BioNixus fields.' },
    { q: 'Is Qatar just a smaller UAE for FMCG research?', a: 'No. Food-security brands, Al Meera’s public grocery role, and a different expat/Qatari mix make a copied Dubai design the most common failure mode we see.' },
    { q: 'Do we still need Nielsen if we hire BioNixus in Qatar?', a: 'If you already buy a modern-trade panel, keep it for category sizing. Add BioNixus for the Al Meera / traditional / SKU cut the feed cannot sell you.' },
  ],
});

const RETAIL_EGYPT = finish('retail', 'egypt', {
  metaDescription:
    '2026 directory of retail companies in Egypt: Carrefour, BIM, Seoudi, Metro, Lulu. Traditional grocers plus pharmacy banners. Account-level shopper research.',
  introLead:
    'Egyptian grocery is a collision of hard discount, local supermarkets, and Gulf hypermarkets. BIM taught value shoppers a new price. Seoudi and Metro remain the Cairene supermarket names. Carrefour (MAF), Lulu, and Spinneys brought the Gulf hypermarket format. Traditional grocers and chemist banners (El Ezaby, Seif) still take trips the dashboard files under “other.”',
  introRest:
    'BioNixus studies banners as accounts — not “retail in Egypt” as a mood. Nielsen can size modern-trade categories. It cannot tell you whether BIM stole a SKU from Seoudi in Alexandria or whether a personal-care pack now turns in El Ezaby. Use this list with our retail market research in Egypt.',
  stats: [
    { value: '10', label: 'Banners we list and study' },
    { value: 'BIM', label: 'Hard-discount disruptor' },
    { value: 'Seoudi + Metro', label: 'Local supermarket names' },
    { value: 'El Ezaby / Seif', label: 'Pharmacy banners' },
  ],
  channelHeading: 'Hard discount, local supermarket, Gulf hypermarket, bakal',
  channelBody:
    'Those are four different shopper missions. BIM is a small-box value trip. Seoudi and Metro are weekly supermarket trips with Egyptian ranging. Carrefour and Lulu are destination hypermarkets. The bakal is the fill-in. Pharmacy banners are a fifth path for personal care and baby. If the study averages them, it will recommend a planogram that exists in none of them.',
  companies: [
    { name: 'Carrefour (Majid Al Futtaim)', hq: 'UAE / France', type: 'Regional', focus: 'Hypermarket, supermarket', notes: 'MAF-operated Carrefour; destination grocery' },
    { name: 'Lulu Hypermarket', hq: 'UAE / Oman', type: 'Regional', focus: 'Hypermarket', notes: 'Gulf hypermarket format in Greater Cairo and coastal cities' },
    { name: 'Spinneys', hq: 'UAE / Lebanon', type: 'Regional', focus: 'Premium supermarket', notes: 'Upper-income catchment; imported ranging' },
    { name: 'BIM', hq: 'Turkey', type: 'MNC', focus: 'Hard discount', notes: 'The value format that rewrote Egyptian small-box grocery' },
    { name: 'Seoudi Supermarket', hq: 'Egypt', type: 'Retailer', focus: 'Local supermarket', notes: 'Cairene supermarket name; local ranging vs Gulf hypers' },
    { name: 'Metro Markets', hq: 'Egypt', type: 'Retailer', focus: 'Local supermarket / hyper', notes: 'Mansour-linked banner; a different shopper than BIM' },
    { name: 'Gourmet Egypt', hq: 'Egypt', type: 'Retailer', focus: 'Premium / specialty grocery', notes: 'Specialty and imported; not a volume banner' },
    { name: 'El Ezaby Pharmacy', hq: 'Egypt', type: 'Retailer', focus: 'Pharmacy banner', notes: 'National chemist chain; personal-care adjacency' },
    { name: 'Seif Pharmacies', hq: 'Egypt', type: 'Retailer', focus: 'Pharmacy banner', notes: 'Competing chemist system for OTC and baby' },
    { name: 'Traditional grocers (bakals)', hq: 'Egypt', type: 'Retailer', focus: 'Independent grocery', notes: 'The fill-in channel most modern-trade panels undersample' },
  ],
  categoryBlurbs: {
    local: 'Seoudi, Metro, Gourmet, El Ezaby, and Seif are Egyptian retail names with distinct missions — supermarket, Mansour-linked grocery, specialty, and chemist. They are not one “local retail” bucket.',
    mnc: 'BIM is the international format that changed the value equation. Treat it as a hard-discount system, not as a small Carrefour.',
    regional: 'Carrefour/MAF, Lulu, and Spinneys import Gulf hypermarket and premium supermarket operating systems. Their ranging and promotion logic is not Seoudi’s.',
    trade: 'Traditional bakals remain the fill-in and the volume leak. Pharmacy banners take personal-care and baby trips. A modern-trade-only shopper study is a partial Egypt.',
  },
  growthDrivers: [
    { title: 'BIM as a format, not a banner anecdote', desc: 'Hard discount changed pack architecture and promotion. Competitor work has to include BIM or admit it only studied full-range grocery.' },
    { title: 'Mansour and Metro as a system', desc: 'Metro is not a generic local chain. It sits inside a distribution family that also touches FMCG. That overlap is a research fact.' },
    { title: 'Gulf hypers as destination trips', desc: 'Carrefour and Lulu pull a different basket. Do not merge them with Seoudi in the same “modern trade” cell without a reason.' },
    { title: 'Chemist banners as grocery competitors', desc: 'El Ezaby and Seif take baby and personal-care missions. P&G brand teams already know this; grocery-only samples still forget it.' },
    { title: 'Alexandria and coastal ranging', desc: 'A Cairo-only supermarket sample will misread Lulu and Carrefour coastal stores and the bakal density of Alexandria.' },
    { title: 'Inflation and pack-down', desc: 'Shoppers trade pack size before banner. SKU-level work inside each format is how you see that, not a banner NPS.' },
  ],
  faq: [
    { q: 'Which retail companies matter for shopper work in Egypt?', a: 'Carrefour/MAF, Lulu, Spinneys, BIM, Seoudi, Metro, Gourmet, El Ezaby, Seif, and the traditional bakal channel. That set covers hard discount, local supermarket, Gulf hypermarket, premium, chemist, and fill-in.' },
    { q: 'Why is BIM on a “premium” research firm’s Egypt list?', a: 'Because BIM is where value volume moved. Ignoring it is a catchment error, not a positioning choice. We study the accounts where the SKU turns.' },
    { q: 'Do pharmacy chains belong in a grocery directory?', a: 'When the SKU is personal care, baby, or OTC-adjacent, yes. El Ezaby and Seif are accounts, not a footnote under “other outlets.”' },
    { q: 'Can Nielsen replace banner-level shopper research in Egypt?', a: 'NielsenIQ can size modern-trade categories. It cannot tell you how a SKU faces in BIM versus Seoudi versus a bakal. That is the primary study BioNixus runs.' },
    { q: 'What should an Egypt retail brief name?', a: 'Formats and banners, not “Cairo retail.” Example: BIM versus Metro on a value dairy SKU in Alexandria — that is a designable study.' },
  ],
});

const RETAIL_UAE = finish('retail', 'uae', {
  metaDescription:
    '2026 directory of retail companies in the UAE: Carrefour, Lulu, Spinneys, Union Coop, Choithrams. Modern trade plus pharmacy. Account-level shopper research.',
  introLead:
    'UAE grocery is the most modern-trade-dense market in this set — and it is still not one banner. MAF Carrefour is the destination hypermarket. Lulu is the volume hypermarket with a different basket. Spinneys and Waitrose-type ranging sit in premium catchments. Union Coop is an Emirati co-op system, not a MAF clone. Choithrams and Al Fair hold neighbourhood and older-expat trips. Life Pharmacy and Aster take the chemist mission.',
  introRest:
    'BioNixus treats each of those as accounts. A Nielsen panel is the right buy for national FMCG share in modern trade. It is the wrong buy when you need Spinneys versus Union Coop on a dairy SKU, or whether a personal-care pack now lives in Life Pharmacy. Read this with our retail market research in the UAE.',
  stats: [
    { value: '10', label: 'Banners we list and study' },
    { value: 'MAF Carrefour', label: 'Destination hypermarket' },
    { value: 'Union Coop', label: 'Emirati co-op system' },
    { value: 'Life / Aster', label: 'Pharmacy banners' },
  ],
  channelHeading: 'Five grocery missions, not one “UAE modern trade”',
  channelBody:
    'Destination hypermarket (MAF Carrefour), volume hypermarket (Lulu), premium supermarket (Spinneys), co-op (Union Coop), and neighbourhood (Choithrams, Al Fair) are different missions. Independent grocers in Sharjah and Ajman still exist. Pharmacy banners are a parallel path. If your sample is only Dubai Mall-adjacent Carrefour, you have a tourism retail study.',
  companies: [
    { name: 'Carrefour (Majid Al Futtaim)', hq: 'UAE / France', type: 'Regional', focus: 'Hypermarket, supermarket', notes: 'MAF’s flagship grocery system' },
    { name: 'Lulu Hypermarket', hq: 'UAE / Oman', type: 'Regional', focus: 'Hypermarket', notes: 'Volume basket; different shopper than MAF Carrefour' },
    { name: 'Spinneys', hq: 'UAE / Lebanon', type: 'Regional', focus: 'Premium supermarket', notes: 'Imported ranging; premium catchment' },
    { name: 'Union Coop', hq: 'UAE', type: 'Retailer', focus: 'Co-operative grocery', notes: 'Emirati co-op; not a MAF operating clone' },
    { name: 'Choithrams', hq: 'UAE', type: 'Retailer', focus: 'Neighbourhood supermarket', notes: 'Older-expat and neighbourhood trip' },
    { name: 'Al Fair', hq: 'UAE / Oman', type: 'Retailer', focus: 'Supermarket', notes: 'Neighbourhood grocery; Oman–UAE family banner' },
    { name: 'Waitrose (UAE)', hq: 'UK / UAE', type: 'MNC', focus: 'Premium supermarket', notes: 'Premium imported ranging in selected catchments' },
    { name: 'Life Pharmacy', hq: 'UAE', type: 'Retailer', focus: 'Pharmacy banner', notes: 'Largest chemist chain; personal-care adjacency' },
    { name: 'Aster Pharmacy', hq: 'UAE', type: 'Retailer', focus: 'Pharmacy banner', notes: 'Aster DM system; competing chemist mission' },
    { name: 'Independent grocers', hq: 'UAE', type: 'Retailer', focus: 'Traditional / neighbourhood grocery', notes: 'Sharjah, Ajman, and labour-catchment fill-in' },
  ],
  categoryBlurbs: {
    local: 'Union Coop, Choithrams, Al Fair, Life Pharmacy, and Aster are the UAE names that are not Gulf hypermarket exports. Co-op, neighbourhood, and chemist — three missions a “Carrefour vs Lulu” brief will skip.',
    mnc: 'Waitrose is the international premium supermarket format. BIM is not the UAE story; do not import an Egypt hard-discount narrative onto Dubai.',
    regional: 'MAF Carrefour, Lulu, and Spinneys are the regional operating systems. They share “modern trade” only in a dashboard. Their buyers, ranging, and shoppers differ.',
    trade: 'Independent grocers still take fill-in trips outside the marina catchments. Pharmacy banners take personal care. We field them when the SKU lives there.',
  },
  growthDrivers: [
    { title: 'MAF versus Lulu as two hypermarkets', desc: 'Same format word, different basket and promotion logic. Merging them in analysis is the most common UAE grocery error we see.' },
    { title: 'Union Coop as an Emirati system', desc: 'Co-op ranging and price are not a private hypermarket meeting. Sample it as its own account type.' },
    { title: 'Premium supermarket split', desc: 'Spinneys and Waitrose are not volume. Use them when the SKU is imported or premium — not as a national shopper proxy.' },
    { title: 'Pharmacy as a grocery competitor', desc: 'Life and Aster take baby and personal-care missions. Grocery-only samples understate those SKUs.' },
    { title: 'Northern Emirates fill-in', desc: 'Sharjah and Ajman independents still move staples and water. A Dubai-only sample is a city study.' },
    { title: 'Tourism versus resident baskets', desc: 'West Bay and Marina stores mix tourist missions. Say so in the design or the SKU story will wobble.' },
  ],
  faq: [
    { q: 'Which retail companies should a UAE shopper study include?', a: 'MAF Carrefour, Lulu, Spinneys, Union Coop, Choithrams, Al Fair, Waitrose, Life Pharmacy, Aster Pharmacy, and independent grocers in the Northern Emirates. That set covers destination, volume, premium, co-op, neighbourhood, chemist, and fill-in.' },
    { q: 'Is the UAE a modern-trade-only grocery market?', a: 'It is the most modern-trade-dense market in this set, and independent grocers still take fill-in trips in Sharjah and Ajman. A marina-Carrefour sample is a catchment, not the country.' },
    { q: 'Why separate MAF Carrefour from Lulu?', a: 'Same format word, different basket, buyer, and promotion logic. Merging them into one “hypermarket” cell is the usual way a UAE shopper study lies to itself.' },
    { q: 'Do pharmacy banners belong on a UAE retail map?', a: 'When the SKU is personal care or baby, yes. Life Pharmacy and Aster are accounts. Grocery-only samples understate those missions.' },
    { q: 'When do we add BioNixus alongside Nielsen in the UAE?', a: 'Keep NielsenIQ for modern-trade category sizing. Add BioNixus when the question is a named SKU in a named banner — Union Coop versus Spinneys, or chemist versus grocery.' },
  ],
});

const RETAIL_KSA = finish('retail', 'saudi-arabia', {
  metaDescription:
    '2026 directory of retail companies in Saudi Arabia: Panda, BinDawood, Othaim, Tamimi, Lulu. Traditional grocers plus Nahdi. Account-level shopper research.',
  introLead:
    'Saudi grocery is a listed-equity story. Panda (Savola) is the volume modern banner. BinDawood and Danube hold the Hijaz premium-to-mid trip. Othaim is the Central and Qassim supermarket system. Tamimi is the Eastern Province name. Lulu and Carrefour add the Gulf hypermarket format. Nahdi and Al Dawaa take the chemist mission. Traditional grocers still fill the week outside the three cities.',
  introRest:
    'BioNixus fields banners as accounts. A Nielsen modern-trade cut can size the category. It cannot tell you whether a dairy SKU died in Othaim Qassim while it lived in Danube Jeddah. Use this directory with our retail market research in Saudi Arabia.',
  stats: [
    { value: '10', label: 'Banners we list and study' },
    { value: 'Panda', label: 'Savola-owned volume gate' },
    { value: 'Othaim / BinDawood', label: 'Regional supermarket systems' },
    { value: 'Nahdi', label: 'Pharmacy as grocery competitor' },
  ],
  channelHeading: 'Listed grocers, regional systems, chemist, traditional fill-in',
  channelBody:
    'Panda, BinDawood/Danube, Othaim, and Tamimi are professionalised, often listed, and geographically specialised. Merging them into “KSA modern trade” hides the shopper. Lulu and Carrefour are the Gulf hypers. Nahdi and Al Dawaa take baby and personal care. Traditional grocers remain the volume leak in secondary cities. Name the banner and the region.',
  companies: [
    { name: 'Panda Retail', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Hypermarket, supermarket', notes: 'Savola-owned; the volume modern banner' },
    { name: 'BinDawood Holding', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Supermarket (BinDawood, Danube)', notes: 'Hijaz system; Danube as the premium cut' },
    { name: 'Abdullah Al Othaim Markets', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Supermarket', notes: 'Central and Qassim strength; not a Jeddah clone' },
    { name: 'Tamimi Markets', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Supermarket', notes: 'Eastern Province grocery name' },
    { name: 'Lulu Hypermarket', hq: 'UAE / Oman', type: 'Regional', focus: 'Hypermarket', notes: 'Gulf hypermarket format in KSA cities' },
    { name: 'Carrefour (MAF)', hq: 'UAE / France', type: 'Regional', focus: 'Hypermarket', notes: 'MAF Carrefour destination stores' },
    { name: 'Nahdi Medical', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Pharmacy banner', notes: 'Largest chemist; personal-care and OTC adjacency' },
    { name: 'Al Dawaa Pharmacies', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Pharmacy banner', notes: 'Second national chemist system' },
    { name: 'Farm Superstores', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Supermarket', notes: 'Western-region grocery; distinct from BinDawood' },
    { name: 'Traditional grocers', hq: 'Saudi Arabia', type: 'Retailer', focus: 'Independent grocery', notes: 'Secondary-city fill-in; oils and value dairy leak' },
  ],
  categoryBlurbs: {
    local: 'Panda, BinDawood, Othaim, Tamimi, Farm, Nahdi, and Al Dawaa are Saudi retail systems with listed-equity or national-chain scale. They are not one “local grocery” row.',
    mnc: 'International grocery formats arrive mainly through MAF Carrefour and Lulu, not through a European hard-discount wave. Do not paste BIM’s Egypt story onto Riyadh.',
    regional: 'Lulu and MAF Carrefour import Gulf hypermarket operating systems. Their ranging is a comparison set, not the Saudi supermarket core.',
    trade: 'Traditional grocers still move staples outside Riyadh–Jeddah–Dammam. Pharmacy banners take personal-care missions. We field both when the SKU lives there.',
  },
  growthDrivers: [
    { title: 'Savola as manufacturer and retailer', desc: 'Panda listing and Savola brand work are not independent. Competitive studies have to say so or they will misread facings.' },
    { title: 'Othaim’s Central and Qassim system', desc: 'A Jeddah-heavy sample will understate Othaim and overstate Danube. Geography is the design, not a quota footnote.' },
    { title: 'Eastern Province as Tamimi’s home', desc: 'Dammam–Khobar grocery is not a Riyadh clone. Tamimi is the account that makes that visible.' },
    { title: 'Chemist banners as grocery competitors', desc: 'Nahdi and Al Dawaa take baby and personal-care trips. Grocery-only samples understate P&G and Unilever velocity.' },
    { title: 'Vision 2030 retail formalisation', desc: 'More organised grocery does not retire traditional trade. It changes the mix. Measure both.' },
    { title: 'Premium Hijaz versus value Central', desc: 'Danube and Panda are different missions in different cities. A national “modern trade” average hides the SKU you came to save.' },
  ],
  faq: [
    { q: 'Which retail companies define grocery in Saudi Arabia?', a: 'Panda, BinDawood/Danube, Othaim, Tamimi, Farm, Lulu, Carrefour/MAF, Nahdi, Al Dawaa, and traditional grocers. That set covers volume, Hijaz, Central, Eastern Province, Gulf hypers, chemist, and fill-in.' },
    { q: 'Why not treat all KSA modern trade as one channel?', a: 'Because Panda, Othaim, and BinDawood are geographically specialised systems with different shoppers. A single modern-trade cell is how SKU deaths get averaged away.' },
    { q: 'Do Nahdi and Al Dawaa belong on a grocery map?', a: 'Yes, when the SKU is personal care, baby, or OTC-adjacent. They are accounts, not “other outlets.”' },
    { q: 'Does Nielsen replace banner-level work in the Kingdom?', a: 'NielsenIQ can size modern-trade categories. It cannot tell you Othaim Qassim versus Danube Jeddah on a named pack. That is the primary study we run.' },
    { q: 'What must a KSA retail brief name?', a: 'Banner and region. “Shopper in Saudi Arabia” is not a design. “Almarai fresh in Othaim versus Panda in Qassim” is.' },
  ],
});

const RETAIL_KUWAIT = finish('retail', 'kuwait', {
  metaDescription:
    '2026 directory of retail companies in Kuwait: Sultan Center, Lulu, Carrefour, co-ops. Pharmacy banners plus traditional grocers. Account-level shopper research.',
  introLead:
    'Kuwait grocery is a co-op market with a professional modern banner. Sultan Center is the listed supermarket name international brand teams know. Consumer co-operative societies are the channel they underestimate. Lulu and Carrefour add Gulf hypermarkets. City Centre retail is a mall trip, not a weekly trolley. Pharmacy banners take personal care. Traditional grocers still fill the week in the governorates.',
  introRest:
    'BioNixus fields co-ops as accounts, not as “traditional leftover.” A GCC Nielsen cut that parks Kuwait under rest-of-Gulf will miss co-op listing rules. Use this list with our retail market research in Kuwait.',
  stats: [
    { value: '8', label: 'Banners we list and study' },
    { value: 'Co-ops', label: 'Kuwait-specific gate' },
    { value: 'Sultan Center', label: 'Listed modern banner' },
    { value: 'Governorates', label: 'Catchment, not one city' },
  ],
  channelHeading: 'Co-ops first, Sultan Center second, hypers as comparison',
  channelBody:
    'If the sample only hits Sultan Center and a Lulu, you have the tourist-and-expat grocery study. Co-ops set price and listing across governorates. That is the Kuwait fact, not a GCC footnote. Pharmacy banners and independents take the rest of the week.',
  companies: [
    { name: 'The Sultan Center', hq: 'Kuwait', type: 'Retailer', focus: 'Supermarket, hypermarket', notes: 'Listed modern banner international teams know' },
    { name: 'Kuwait consumer co-ops', hq: 'Kuwait', type: 'Retailer', focus: 'Co-operative grocery', notes: 'Primary listing and price-setting channel' },
    { name: 'Lulu Hypermarket', hq: 'UAE / Oman', type: 'Regional', focus: 'Hypermarket', notes: 'Gulf hypermarket comparison set' },
    { name: 'Carrefour', hq: 'UAE / France', type: 'Regional', focus: 'Hypermarket', notes: 'MAF-format destination stores' },
    { name: 'City Centre (retail)', hq: 'UAE / Kuwait', type: 'Regional', focus: 'Mall retail', notes: 'Mall trip; not a weekly trolley proxy' },
    { name: 'Geant / other hypers', hq: 'France / regional', type: 'MNC', focus: 'Hypermarket', notes: 'International hyper comparison where present' },
    { name: 'Pharmacy banners', hq: 'Kuwait', type: 'Retailer', focus: 'Chemist / personal care', notes: 'Personal-care and OTC adjacency' },
    { name: 'Traditional grocers', hq: 'Kuwait', type: 'Retailer', focus: 'Independent grocery', notes: 'Governorate fill-in beyond co-ops and Sultan Center' },
  ],
  categoryBlurbs: {
    local: 'Sultan Center, the co-op system, pharmacy banners, and independents are the Kuwaiti grocery spine. The co-op is the account most imported questionnaires skip.',
    mnc: 'International hypers (Carrefour, Geant where present) are a comparison set. They are not the weekly shop for most households.',
    regional: 'Lulu and mall retail (City Centre) import Gulf formats. Use them as comparison, not as the national sample.',
    trade: 'Co-ops plus traditional grocers still decide whether a staple SKU lives. A Sultan Center-only study is a banner study wearing a country label.',
  },
  growthDrivers: [
    { title: 'Co-op as institution', desc: 'Listing and price in a co-op are not a private-equity grocery meeting. Design the sample around that fact.' },
    { title: 'Sultan Center as the professional banner', desc: 'It is the named modern account. It is not the whole market.' },
    { title: 'Governorate catchments', desc: 'Hawalli is not Ahmadi. A national Kuwait average can still hide a dead SKU.' },
    { title: 'Mall retail versus grocery', desc: 'City Centre is a different mission. Do not mix mall intercepts into a weekly trolley study without saying so.' },
    { title: 'Pharmacy adjacency', desc: 'Personal-care SKUs leave grocery. Include chemist banners when the pack belongs there.' },
    { title: 'High income, short distance', desc: 'Kuwait is small and expensive. Shoppers still split missions. Format mix matters more than mileage.' },
  ],
  faq: [
    { q: 'Which retail companies matter in Kuwait?', a: 'Sultan Center, the consumer co-ops, Lulu, Carrefour, mall retail, pharmacy banners, and traditional grocers. Skip the co-ops and you have misread the country.' },
    { q: 'Why do Kuwait retail briefs insist on co-ops?', a: 'Because they are a primary listing and price-setting channel, not a secondary traditional leftover. That is Kuwait-specific, not a generic GCC note.' },
    { q: 'Is Sultan Center enough for a national shopper study?', a: 'It is the professional modern banner. It is not the co-op shopper and not the governorate fill-in. Say which mission you bought.' },
    { q: 'Can a GCC retail panel replace Kuwait fieldwork?', a: 'It can size what it sees. It will not tell you co-op versus Sultan Center on a named SKU. That is the complement BioNixus sells.' },
    { q: 'What should the brief name?', a: 'Co-ops, Sultan Center, and whether hypers or chemists are in scope. “Retail in Kuwait” is not a design.' },
  ],
});

const RETAIL_OMAN = finish('retail', 'oman', {
  metaDescription:
    '2026 directory of retail companies in Oman: Lulu, Carrefour, Al Fair, Khimji. Wilayat grocers plus pharmacies. Account-level shopper research by BioNixus.',
  introLead:
    'Omani grocery is a Lulu country on the coast and a grocer country in the interior. Lulu is the volume hypermarket. Carrefour adds the international comparison. Al Fair is the neighbourhood supermarket name. Khimji’s retail and distribution arms still reach wilayats a Muscat panel never sees. Muscat Pharmacy and independents take chemist and fill-in trips.',
  introRest:
    'BioNixus fields the coast and the interior as different accounts. A GCC dashboard that files Oman under rest-of-Gulf will recommend a Lulu planogram to a Nizwa grocer. Use this directory with our retail market research in Oman.',
  stats: [
    { value: '8', label: 'Banners we list and study' },
    { value: 'Lulu', label: 'Coastal volume hypermarket' },
    { value: 'Al Fair', label: 'Neighbourhood supermarket' },
    { value: 'Wilayats', label: 'Interior grocery reality' },
  ],
  channelHeading: 'Coastal hypermarket versus wilayat grocer',
  channelBody:
    'Muscat and Salalah Lulu stores are not the interior. Al Fair and independent grocers take the weekly trip in towns a tourist sample never reaches. Khimji sits behind many of those shelves. Pharmacy banners take personal care. Name the governorate or admit you only bought the coast.',
  companies: [
    { name: 'Lulu Hypermarket', hq: 'UAE / Oman', type: 'Regional', focus: 'Hypermarket', notes: 'Omani-rooted Gulf hyper; coastal volume gate' },
    { name: 'Carrefour', hq: 'UAE / France', type: 'Regional', focus: 'Hypermarket', notes: 'International hyper comparison in Muscat' },
    { name: 'Al Fair', hq: 'Oman / UAE', type: 'Retailer', focus: 'Neighbourhood supermarket', notes: 'Local supermarket name; not a Lulu clone' },
    { name: 'Khimji retail / trade', hq: 'Oman', type: 'Distributor', focus: 'Retail and distribution', notes: 'The house that still reaches wilayat shelves' },
    { name: 'SPAR / local affiliates', hq: 'Netherlands / Oman', type: 'MNC', focus: 'Supermarket franchise', notes: 'International neighbourhood format where present' },
    { name: 'Muscat Pharmacy', hq: 'Oman', type: 'Retailer', focus: 'Pharmacy banner', notes: 'Chemist and personal-care adjacency' },
    { name: 'Traditional wilayat grocers', hq: 'Oman', type: 'Retailer', focus: 'Independent grocery', notes: 'Interior weekly shop; the sample most briefs skip' },
    { name: 'Salalah independents', hq: 'Oman', type: 'Retailer', focus: 'Southern grocery', notes: 'Dhofar is not a Muscat catchment' },
  ],
  categoryBlurbs: {
    local: 'Al Fair, Khimji, Muscat Pharmacy, wilayat grocers, and Salalah independents are the Omani retail spine beyond Lulu. They are the accounts a Dubai questionnaire forgets.',
    mnc: 'SPAR-type franchise formats are a neighbourhood comparison, not the national system. Do not import a European convenience story onto Nizwa.',
    regional: 'Lulu is Omani-rooted and Gulf-scaled; Carrefour is the international hyper. They are the coastal comparison set, not the interior.',
    trade: 'Wilayat grocers and Khimji’s reach are the trade fact. A Muscat Lulu-only study is a city study.',
  },
  growthDrivers: [
    { title: 'Lulu as home hypermarket', desc: 'Lulu is not “another UAE banner that also operates in Oman.” It is the coastal volume fact. Still not the interior.' },
    { title: 'Al Fair as neighbourhood', desc: 'Different mission from Lulu. Merge them and you will write a planogram for a store that does not exist.' },
    { title: 'Khimji as retail and distribution', desc: 'Coverage gaps in the interior often sit with the trade house. Design questions that can see that.' },
    { title: 'Dhofar as a second Oman', desc: 'Salalah ranging and seasonality (Khareef) are not Muscat. Split the sample or say you skipped the south.' },
    { title: 'Pharmacy adjacency', desc: 'Muscat Pharmacy and independents take personal-care missions. Grocery-only samples understate those SKUs.' },
    { title: 'Vision 2040 formalisation without erasing grocers', desc: 'More modern trade on the coast does not retire wilayat shops. Measure the mix.' },
  ],
  faq: [
    { q: 'Which retail companies should an Oman shopper study include?', a: 'Lulu, Carrefour, Al Fair, Khimji’s retail/trade arm, SPAR-type formats where present, Muscat Pharmacy, wilayat grocers, and Salalah independents.' },
    { q: 'Is Lulu enough to call a study national?', a: 'Lulu is the coastal hypermarket. It is not Nizwa and it is not Dhofar. National claims need the interior or an honest coastal label.' },
    { q: 'Why is Khimji on a retail directory?', a: 'Because in Oman the trade house still decides whether a SKU reaches a wilayat shelf. Brand-versus-competitor work that ignores it will mis-attribute a coverage gap.' },
    { q: 'How is Oman retail different from UAE retail?', a: 'Fewer banners, a stronger interior grocer, and Lulu as a home hyper rather than one of five Dubai missions. Copied UAE designs fail here.' },
    { q: 'Does a GCC panel replace Oman fieldwork?', a: 'It can size coastal modern trade. It will not tell you Al Fair versus a wilayat grocer on a named pack. That is the BioNixus complement.' },
  ],
});

const RETAIL_QATAR = finish('retail', 'qatar', {
  metaDescription:
    '2026 directory of retail companies in Qatar: Al Meera, Lulu, Carrefour, Family Food Centre. Listing-gate grocery plus pharmacies. Account-level research.',
  introLead:
    'Qatari grocery has a public-facing gate: Al Meera. Lulu and Carrefour set the international benchmark shoppers compare it against. Family Food Centre and Mega Mart take neighbourhood and value trips. Traditional souq grocery still moves rice and water. Pharmacy banners take personal care. World Cup leftover stores made Doha look more modern than the weekly trolley actually is.',
  introRest:
    'BioNixus treats Al Meera as its own account type — listing and price are not a private hypermarket meeting. A Nielsen modern-trade average that flattens Al Meera into “Qatar grocery” will miss the gate. Use this list with our retail market research in Qatar.',
  stats: [
    { value: '8', label: 'Banners we list and study' },
    { value: 'Al Meera', label: 'Public grocery gate' },
    { value: 'Lulu + Carrefour', label: 'International comparison' },
    { value: 'Souq + family', label: 'Fill-in still alive' },
  ],
  channelHeading: 'Al Meera first; hypers as the comparison set',
  channelBody:
    'If the sample is only Lulu in Aspire or Carrefour in a mall, you have an expat-and-tourist study. Al Meera catchment stores and family grocers still set the staple week. Pharmacy banners take chemist missions. Name the gate.',
  companies: [
    { name: 'Al Meera Consumer Goods', hq: 'Qatar', type: 'Retailer', focus: 'National grocery system', notes: 'The listing gate most Qatar briefs must name' },
    { name: 'Lulu Hypermarket', hq: 'UAE / Oman', type: 'Regional', focus: 'Hypermarket', notes: 'International volume comparison' },
    { name: 'Carrefour', hq: 'UAE / France', type: 'Regional', focus: 'Hypermarket', notes: 'Destination hyper; mall-adjacent catchments' },
    { name: 'Family Food Centre', hq: 'Qatar', type: 'Retailer', focus: 'Neighbourhood / value grocery', notes: 'Local banner; not an Al Meera clone' },
    { name: 'Mega Mart', hq: 'Qatar', type: 'Retailer', focus: 'Value grocery', notes: 'Value mission; different basket from Carrefour' },
    { name: 'Pharmacy banners', hq: 'Qatar', type: 'Retailer', focus: 'Chemist / personal care', notes: 'Personal-care and OTC adjacency' },
    { name: 'Souq and family grocers', hq: 'Qatar', type: 'Retailer', focus: 'Traditional grocery', notes: 'Rice, water, value dairy fill-in' },
    { name: 'Mall retail (City Centre / Place Vendôme)', hq: 'Qatar / UAE', type: 'Regional', focus: 'Mall retail', notes: 'Mall trip; not a weekly trolley proxy' },
  ],
  categoryBlurbs: {
    local: 'Al Meera, Family Food Centre, Mega Mart, pharmacy banners, and souq grocers are the Qatari spine. Al Meera is the gate; the others are missions around it.',
    mnc: 'International grocery arrives mainly as Carrefour. Do not import a European discounter narrative onto Doha.',
    regional: 'Lulu and mall retail import Gulf formats. Use them as comparison, not as the national weekly shop.',
    trade: 'Souq and family grocers still move staples. A Lulu-only study is a catchment study.',
  },
  growthDrivers: [
    { title: 'Al Meera as public grocery', desc: 'Listing conversations have a different temperature than a private hyper. Treat it as its own account type.' },
    { title: 'Post-World Cup store stock without Dubai habits', desc: 'The boxes look newer. Weekly staples are still bought at Al Meera and the corner grocer, not the showcase malls.' },
    { title: 'Expat versus Qatari catchments', desc: 'West Bay is not Al Rayyan. Split the sample when the SKU is culturally marked.' },
    { title: 'Value banners versus destination hypers', desc: 'Mega Mart and Family Food Centre are not Carrefour. Merge them and the planogram will fit none.' },
    { title: 'Pharmacy adjacency', desc: 'Personal-care SKUs leave grocery. Add Qatar’s chemist banners to the sample whenever the pack sells through pharmacy.' },
    { title: 'Mall intercepts as a contamination risk', desc: 'Place Vendôme is not a weekly trolley. Say so if you mix mall missions into grocery work.' },
  ],
  faq: [
    { q: 'Which retail companies define grocery in Qatar?', a: 'Al Meera, Lulu, Carrefour, Family Food Centre, Mega Mart, pharmacy banners, souq/family grocers, and mall retail as a separate mission. Al Meera is the gate.' },
    { q: 'Why is Al Meera not “just another supermarket”?', a: 'Because of its public-facing grocery role. Listing and price are not a standard private-banner meeting. Brand-versus-competitor work has to name it.' },
    { q: 'Is Lulu enough for a Qatar shopper study?', a: 'Lulu is the international volume comparison. It is not Al Meera and not the souq fill-in. National claims need the gate.' },
    { q: 'Can we copy a UAE retail design onto Doha?', a: 'No. Food-security brands, Al Meera’s role, and a different catchment mix make a copied Dubai design the usual failure mode.' },
    { q: 'When do we add BioNixus next to a panel?', a: 'Keep a modern-trade panel for category sizing if you already buy it. Add BioNixus for Al Meera versus Lulu, or chemist versus grocery, on a named SKU.' },
  ],
});

const RE_MODIFIED = '2026-09-03';

const RE_EGYPT = finish('real-estate', 'egypt', {
  title: 'Top 24 Real Estate Developers in Egypt (2026 List)',
  h1: 'Top Real Estate Developers in Egypt (2026)',
  modifiedDate: RE_MODIFIED,
  metaDescription:
    '2026 list of real estate developers in Egypt: TMG, SODIC, Palm Hills, Emaar Misr, Ora, Mountain View, Hyde Park, City Edge and more — pipeline, off-plan, buyers, brokers.',
  introLead:
    'Egypt’s residential market is built by developers, not by a resale stock: almost every home sold in New Cairo, 6th of October, the New Administrative Capital and the North Coast is an off-plan unit bought from one of roughly 40 active developers on a five- to ten-year payment plan, which makes the developer — its brand, delivery record and pricing — the unit of analysis for anyone studying Egyptian housing demand.',
  introRest:
    'Talaat Moustafa Group set the East Cairo compound template with Al Rehab and Madinaty; SODIC, Palm Hills and Mountain View own the West Cairo and coastal conversation; Emaar Misr imported a Gulf operating model; Ora, Tatweer Misr and La Vista scaled second-home destinations; and government-backed City Edge and the Administrative Capital for Urban Development supply the new cities. Land is allocated by the New Urban Communities Authority, contracts and pricing respond to currency moves and interest rates, and brokers close a large share of tickets. This directory lists the developers that define Egypt’s primary housing market, explains how launches, payment plans, buyer segments and brokerage actually work, and shows how BioNixus researches them for developers, banks and building-material brands.',
  stats: [
    { value: '~EGP 1trn', label: 'Estimated annual primary residential sales value in 2024 at launch prices' },
    { value: '8–10 yrs', label: 'Typical off-plan instalment plan offered by leading developers' },
    { value: '~70%', label: 'Share of Greater Cairo primary sales concentrated in New Cairo, 6th of October and the New Capital' },
    { value: '4', label: 'EGX-listed developers (TMG, Palm Hills, MNHD, Heliopolis Housing) plus SODIC under Aldar–ADQ' },
  ],
  channelHeading: 'How developers sell homes in Egypt',
  channelBody:
    'Egyptian developers acquire land from the New Urban Communities Authority or private owners, launch phases off-plan with a 5–10% down payment and instalments over eight to ten years, and fund construction from customer receipts rather than bank debt. Sales run through in-house teams at project sales galleries and through a large brokerage layer — Coldwell Banker Egypt, Nawy, Bayut Egypt, Property Finder and thousands of independent brokers — that earns 2–5% commission and steers a significant share of first-time buyers. Demand is segmented by geography: East Cairo (New Cairo, Madinaty, Mostakbal City) for upper-middle-income families, West Cairo (Sheikh Zayed, 6th of October) for a comparable but distinct buyer, the New Administrative Capital for government-linked and investor demand, and the North Coast, Ain Sokhna and Red Sea for second homes. Currency devaluation has made real estate the default inflation hedge, so investor buyers and Egyptians abroad paying in dollars are a growing segment, and developers respond with export-style pricing and dollar-linked launches. Delivery risk, resale liquidity and payment-plan terms matter as much as price per metre, which is why BioNixus fieldwork combines buyer surveys with broker interviews and sales-gallery mystery shopping.',
  companies: [
    { name: 'Talaat Moustafa Group (TMG)', hq: 'Cairo', type: 'Developer', focus: 'Madinaty, Al Rehab, Noor, SouthMed; hospitality', notes: 'EGX-listed and the largest by land bank and sales; its compound model and payment plans are the benchmark every East Cairo competitor prices against.' },
    { name: 'SODIC', hq: 'Cairo', type: 'Developer', focus: 'West Cairo communities, East Cairo, North Coast', notes: 'Controlled by Aldar and ADQ since 2021; Allegria, Eastown and June bring a Gulf-style operating model to Egyptian premium housing.' },
    { name: 'Palm Hills Developments', hq: 'Cairo', type: 'Developer', focus: 'West Cairo, New Cairo, North Coast, Alexandria', notes: 'EGX-listed with Badya and Palm Hills New Cairo; one of the most active launchers of new phases and co-development deals.' },
    { name: 'Emaar Misr', hq: 'Cairo', type: 'Regional', focus: 'Uptown Cairo, Mivida, Marassi, Cairo Gate', notes: 'Emaar’s Egyptian arm; Marassi defines the premium North Coast segment and its delivery record sets buyer expectations.' },
    { name: 'Mountain View (DMG)', hq: 'Cairo', type: 'Developer', focus: 'iCity, Mountain View Ras El Hikma, Hyde Park adjacency', notes: 'Fast-growing family developer with a distinctive design-led brand and strong broker following in both East and West Cairo.' },
    { name: 'Ora Developers', hq: 'Cairo', type: 'Developer', focus: 'ZED East and West, Silversands, Solana', notes: 'Naguib Sawiris’ developer with mixed-use towers and coastal projects; a premium-segment competitor to Emaar and SODIC.' },
    { name: 'Hyde Park Developments', hq: 'Cairo', type: 'Developer', focus: 'Hyde Park New Cairo, Seashore, Tawny', notes: 'East Cairo compound developer with a large land bank and phased launches that compete directly with TMG and Mountain View.' },
    { name: 'Madinet Masr (MNHD)', hq: 'Cairo', type: 'Developer', focus: 'Taj City, Sarai, Zahw', notes: 'EGX-listed developer with a large East Cairo land bank; pioneered flexible payment tools and partnership models.' },
    { name: 'Orascom Development Egypt', hq: 'Cairo / El Gouna', type: 'Developer', focus: 'El Gouna, O West, Makadi Heights', notes: 'Listed destination developer; El Gouna is the model for hospitality-led residential towns and O West extends it to West Cairo.' },
    { name: 'Hassan Allam Properties', hq: 'Cairo', type: 'Developer', focus: 'Swan Lake, Haptown, Seasons', notes: 'Contractor-backed developer with East Cairo and Sheikh Zayed projects; construction capability differentiates delivery credibility.' },
    { name: 'Tatweer Misr', hq: 'Cairo', type: 'Developer', focus: 'Fouka Bay, IL Monte Galala, Bloomfields', notes: 'Second-home and new-city specialist; Ain Sokhna and North Coast launches make it a reference for coastal demand.' },
    { name: 'La Vista Developments', hq: 'Cairo', type: 'Developer', focus: 'La Vista Bay, El Patio, Ras El Hikma', notes: 'Established coastal and Sokhna developer with strong repeat-buyer base; now expanding into New Cairo residential.' },
    { name: 'Al Marasem Development', hq: 'Cairo', type: 'Developer', focus: 'Fifth Square, Moon Residences', notes: 'Bin Laden Group-linked developer with premium New Cairo projects; a competitor set for TMG and Hyde Park at the top end.' },
    { name: 'Misr Italia Properties', hq: 'Cairo', type: 'Developer', focus: 'IL Bosco, Vinci, Kai Sokhna, La Nuova Vista', notes: 'New Capital and New Cairo developer with a design-led brand; among the largest private developers in the New Administrative Capital.' },
    { name: 'Marakez (Fawaz Alhokair Group)', hq: 'Cairo', type: 'Regional', focus: 'District 5, Mall of Arabia, Aeon', notes: 'Saudi-owned mixed-use developer combining retail malls with residential districts in East and West Cairo.' },
    { name: 'Al Ahly Sabbour', hq: 'Cairo', type: 'Developer', focus: 'Keeva, Gaia, L’Avenir, Odyssia', notes: 'Joint venture with the National Bank of Egypt; broad East and West Cairo portfolio and coastal launches at Ras El Hikma.' },
    { name: 'Iwan Developments', hq: 'Cairo', type: 'Developer', focus: 'Jedar, Atrio, Jeera in Sheikh Zayed', notes: 'West Cairo specialist with a loyal Sheikh Zayed buyer base; representative of mid-size developers scaling through phased launches.' },
    { name: 'Dorra Group', hq: 'Cairo', type: 'Developer', focus: 'Address East, Village West, Dorra Bay', notes: 'Contractor-developer with New Cairo, Sheikh Zayed and coastal projects; delivery record is a core selling point.' },
    { name: 'Arabia Holding', hq: 'Cairo', type: 'Developer', focus: 'Galleria Moon Valley, Sun Capital, Sky Park', notes: 'Diversified developer active in New Cairo, 6th of October and the New Capital across mid-market segments.' },
    { name: 'City Edge Developments', hq: 'Cairo', type: 'Government', focus: 'New Alamein, New Mansoura, Zahya, Etapa', notes: 'Owned by NUCA and Housing & Development Bank; the state’s developer for fourth-generation cities and a large launcher in New Alamein.' },
    { name: 'Administrative Capital for Urban Development (ACUD)', hq: 'New Administrative Capital', type: 'Government', focus: 'Master developer of the New Administrative Capital', notes: 'Sells land to private developers and develops government districts; its release schedule drives New Capital supply.' },
    { name: 'New Urban Communities Authority (NUCA)', hq: 'Cairo', type: 'Government', focus: 'Land allocation and new-city planning', notes: 'Allocates land through auctions and partnerships; its pricing and instalment terms to developers shape every launch price.' },
    { name: 'Heliopolis Housing & Development', hq: 'Cairo', type: 'Developer', focus: 'Heliopark, New Heliopolis land bank', notes: 'EGX-listed state-affiliated developer monetising a large East Cairo land bank through partnerships with private developers.' },
    { name: 'Al-Futtaim Group Real Estate', hq: 'Dubai / Cairo', type: 'Regional', focus: 'Cairo Festival City', notes: 'UAE group developing the Cairo Festival City mixed-use district in New Cairo; a Gulf benchmark for integrated communities.' },
  ],
  categoryBlurbs: {
    local: 'Egyptian developers from TMG and Palm Hills to Mountain View, Hyde Park, Ora and Tatweer Misr: family or listed groups that launch off-plan phases and fund construction from instalments.',
    mnc: 'No Western homebuilder operates in Egypt; international exposure comes through Gulf capital in SODIC and Emaar Misr, DFI lending and dollar-paying buyers abroad.',
    regional: 'Gulf developers — Emaar Misr, Marakez, Al-Futtaim and SODIC’s owners Aldar and ADQ — that bring regional operating models and capital to Egyptian land.',
    trade: 'The state layer: NUCA allocates land, ACUD masters the New Capital and City Edge develops fourth-generation cities, together setting the supply calendar and land prices.',
  },
  sections: [
    {
      heading: 'Launch pipeline and new cities',
      paragraphs: [
        'Supply in Egypt is calendar-driven. Developers launch phases in waves timed to NUCA land instalments, Ramadan and summer selling seasons and currency events, and the pipeline for 2025–2027 is dominated by three theatres: East Cairo, where TMG’s Noor, Hyde Park, Mountain View and Madinet Masr continue to release phases along the Suez Road and in Mostakbal City; the New Administrative Capital, where Misr Italia, Arabia Holding and dozens of mid-size developers build around ACUD’s government district; and the North Coast, where Ras El Hikma’s ADQ-backed masterplan, New Alamein under City Edge and Emaar’s Marassi extension have turned a summer strip into a year-round investment market.',
        'The West Cairo pipeline is smaller but premium, with SODIC, Palm Hills’ Badya, Ora’s ZED West, O West and Sheikh Zayed infill from Iwan and Dorra. Beyond Cairo, New Mansoura, New Alamein and Sokhna are the fourth-generation cities where state developers and private partners test demand outside the capital. Tracking this pipeline by developer, phase and price per metre is the starting point for any competitor study, because the phase a buyer compares against changes every quarter.',
      ],
    },
    {
      heading: 'Off-plan versus ready homes',
      paragraphs: [
        'Egypt is an off-plan market. Most units are sold before or during construction on instalment plans of eight to ten years with 5–10% down, and the payment plan is as much the product as the villa or apartment: developers compete on down payment, instalment length, delivery date and cashback rather than list price. Ready or near-ready inventory commands a premium and is mostly resold by earlier buyers, which has created a secondary market run by brokers and platforms such as Nawy and Aqarmap where resale liquidity is a key buyer concern.',
        'For research this means the buyer decision is a financing decision. BioNixus instruments capture plan terms, perceived delivery risk by developer, resale expectations and the trade-off between location and instalment length, and pair buyer surveys with developer sales data to explain why one launch sells out in a weekend while a neighbouring phase stalls.',
      ],
    },
    {
      heading: 'Buyer segments',
      paragraphs: [
        'Four buyer groups drive the primary market. Upper-middle-income Cairo families upgrading from older districts to compounds in East or West Cairo; investors and savers using off-plan property as an inflation hedge after successive devaluations; Egyptians working in the Gulf and abroad who pay in dollars and are courted with export-style pricing and international sales events; and second-home buyers for the North Coast, Sokhna and Red Sea, a segment that has broadened from elite families to upper-middle-income households buying on instalments.',
        'Each segment weighs developer brand, location, plan and delivery differently, and the same developer often sells to all four across its portfolio. Segment-level sampling — by theatre, income band, residence and purchase motive — is what turns a sentiment survey into a usable product and pricing brief.',
      ],
    },
    {
      heading: 'Brokerage and sales channels',
      paragraphs: [
        'Brokers close a large share of Egyptian primary sales. Developers run in-house teams and sales galleries but pay 2–5% commission to a brokerage layer that ranges from Coldwell Banker Egypt, RE/MAX, Nawy, Bayut and Property Finder to thousands of independent agents and social-media sellers, and many buyers meet a project first through a broker rather than a developer campaign. Brokers steer buyers between developers based on commission, delivery reputation and plan flexibility, so broker sentiment predicts sales momentum.',
        'Digital platforms and proptech — Nawy, Aqarmap, Coldwell Banker’s and developers’ own apps, and instalment-financing startups — increasingly shape discovery and comparison. BioNixus fields broker interviews, mystery shopping of sales galleries and platform-listing audits alongside buyer research so developers see the channel that actually converts.',
      ],
    },
  ],
  growthDrivers: [
    { title: 'Currency and inflation hedging', desc: 'Successive devaluations have made off-plan property the default savings vehicle, pulling investors and expatriate Egyptians into launches and letting developers reprice quickly.' },
    { title: 'Ras El Hikma and the North Coast', desc: 'The ADQ-backed Ras El Hikma masterplan, New Alamein and Marassi are converting the coast into a year-round market and lifting land values for every developer with coastal exposure.' },
    { title: 'Gulf capital in Egyptian developers', desc: 'Aldar–ADQ at SODIC, Emaar Misr, Marakez and Al-Futtaim bring Gulf operating models, financing and buyer networks that raise the competitive bar on delivery and design.' },
    { title: 'State developers and new cities', desc: 'City Edge, ACUD and NUCA control land supply and price, and their releases in the New Capital and fourth-generation cities set the calendar for private launches.' },
    { title: 'Payment-plan innovation', desc: 'Ten-year plans, low down payments, cashback and instalment-financing partners have become the main competitive weapon, changing how buyers compare developers.' },
    { title: 'Export-style sales to Egyptians abroad', desc: 'Dollar-priced launches, Gulf roadshows and international sales events target the diaspora, adding a buyer segment with different priorities and price sensitivity.' },
  ],
  faq: [
    { q: 'Who are the largest real estate developers in Egypt?', a: 'Talaat Moustafa Group, SODIC, Palm Hills, Emaar Misr, Mountain View, Ora, Hyde Park, Madinet Masr, Orascom Development and Hassan Allam Properties lead the private market, with City Edge and ACUD as the main state developers.' },
    { q: 'How do payment plans work with Egyptian developers?', a: 'Buyers typically pay 5–10% down and the balance in instalments over eight to ten years while the developer builds; delivery dates, instalment length and cashback are core competitive terms alongside price per metre.' },
    { q: 'Where are new homes being launched in Egypt?', a: 'Mainly East Cairo (New Cairo, Madinaty, Mostakbal City), West Cairo (Sheikh Zayed, 6th of October), the New Administrative Capital and the North Coast around Ras El Hikma and New Alamein, plus fourth-generation cities such as New Mansoura.' },
    { q: 'Do brokers matter in Egyptian real estate?', a: 'Yes. Brokers and platforms such as Coldwell Banker Egypt, Nawy, Bayut and independent agents close a large share of primary sales for 2–5% commission and steer buyers between developers.' },
    { q: 'What does BioNixus study about real estate developers in Egypt?', a: 'Buyer segmentation and purchase-driver surveys by theatre; developer brand and delivery-reputation tracking; broker and sales-gallery research; payment-plan and pricing tests; and demand studies for building-material and home-finance brands.' },
    { q: 'Is this list ranked?', a: 'No. Developers are grouped by role and included because they recur in BioNixus Egypt fieldwork and on NUCA and EGX records; order does not indicate size or sales.' },
  ],
  regulatorSource: {
    name: 'New Urban Communities Authority (NUCA) — licensed developers and land allocations; Egyptian Exchange listed real estate companies',
    url: 'https://www.newcities.gov.eg',
    asOf: '2026-09-03',
  },
  sources: [
    'EGX annual reports of TMG, Palm Hills, Madinet Masr, Orascom Development Egypt and Heliopolis Housing, 2024–2025',
    'Ministry of Housing and NUCA land allocation announcements and New Alamein / New Capital releases, 2024–2025',
    'CBE and CAPMAS housing and construction statistics; Nawy and Aqarmap market reports, 2024',
    'BioNixus Egypt developer, buyer and broker fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Buyer segmentation surveys across East Cairo, West Cairo, the New Capital and the North Coast covering purchase motive, plan preference and developer brand perception.',
    'Developer brand and delivery-reputation tracking among recent buyers and prospects for TMG, SODIC, Palm Hills, Emaar Misr, Mountain View and challengers.',
    'Broker interviews and sales-gallery mystery shopping to map commission, steering behaviour and conversion practices by developer.',
    'Payment-plan and pricing tests, and demand studies for building-material, finishing and home-finance brands tied to developer handover schedules.',
  ],
});

const RE_UAE = finish('real-estate', 'uae', {
  title: 'Top 24 Real Estate Developers in UAE (2026 List)',
  h1: 'Top Real Estate Developers in the UAE (2026)',
  modifiedDate: RE_MODIFIED,
  metaDescription:
    '2026 list of real estate developers in the UAE: Emaar, Aldar, Dubai Holding, Damac, Sobha, Binghatti, Azizi, Danube, Arada and more — pipeline, off-plan, buyers, brokers.',
  introLead:
    'The UAE is the Middle East’s most developer-led housing market: Dubai alone recorded more than 180,000 property transactions in 2024, the majority of them off-plan sales by a few dozen developers, and Abu Dhabi, Sharjah and Ras Al Khaimah have each built their own developer champions around freehold reforms and mega-projects.',
  introRest:
    'Emaar sets the Dubai master-community script, Dubai Holding Real Estate now combines Nakheel, Meraas and Meydan under government ownership, Damac, Sobha, Binghatti, Azizi and Danube compete for the off-plan investor, and Aldar, Modon, Imkan and Bloom dominate Abu Dhabi; Arada and Eagle Hills lead Sharjah and RAK Properties and Al Hamra anchor Ras Al Khaimah’s Wynn-driven boom. The Dubai Land Department, Abu Dhabi Real Estate Centre and Sharjah RERA regulate escrow, off-plan sales and brokers, and roughly 20,000 licensed agents drive transactions. This directory lists the developers that define UAE housing supply, explains how launches, off-plan versus ready inventory, buyer segments and brokerage actually work, and shows how BioNixus researches them for developers, lenders and building-product brands.',
  stats: [
    { value: '180,000+', label: 'Dubai property transactions in 2024, a record year' },
    { value: '~60%', label: 'Share of Dubai residential sales that were off-plan in 2024' },
    { value: '4', label: 'Regulators: DLD/RERA, ADREC, Sharjah RERA and RAK Municipality' },
    { value: '~20,000', label: 'Licensed real estate brokers in Dubai' },
  ],
  channelHeading: 'How developers sell homes in the UAE',
  channelBody:
    'UAE developers launch off-plan phases into escrow-protected accounts regulated by DLD and ADREC, sell through in-house teams and a large brokerage layer, and increasingly through international roadshows in London, Mumbai, Moscow and Shanghai. Dubai’s market splits between master communities built by Emaar, Dubai Holding and Nakheel — Downtown, Dubai Hills, Dubai Creek Harbour, Palm Jumeirah, Jumeirah Village — and tower and branded-residence developers such as Damac, Sobha, Binghatti, Omniyat, Select Group and Ellington, with Azizi, Danube, Samana and Reportage serving the affordable off-plan investor with 1% monthly payment plans. Abu Dhabi works differently: Aldar dominates Yas, Saadiyat and Reem Island, Modon and Imkan develop Hudayriyat and Jubail, and end-user demand from Emiratis and long-term residents outweighs flipping. Sharjah’s Arada and Eagle Hills and Ras Al Khaimah’s RAK Properties and Al Hamra have opened freehold to foreigners and built master communities around Aljada, Maryam Island and Al Marjan Island. Investors buy for rental yield, capital gains and Golden Visa eligibility, end-users buy for schools and commute, and brokers steer both; the mix by emirate and product is what a research design has to name before it can measure anything.',
  companies: [
    { name: 'Emaar Properties', hq: 'Dubai', type: 'Developer', focus: 'Downtown, Dubai Hills, Dubai Creek Harbour, The Oasis, Rashid Yachts', notes: 'DFM-listed market leader; its launch calendar, pricing and payment plans are the reference for every Dubai competitor.' },
    { name: 'Aldar Properties', hq: 'Abu Dhabi', type: 'Developer', focus: 'Yas Island, Saadiyat, Reem, Dubai and Egypt expansion', notes: 'ADX-listed Abu Dhabi champion with a growing Dubai and international pipeline; end-user and Emirati demand dominate.' },
    { name: 'Dubai Holding Real Estate (Nakheel, Meraas, Meydan, Dubai Properties)', hq: 'Dubai', type: 'Government', focus: 'Palm Jumeirah, Bluewaters, City Walk, Meydan, Jumeirah Beach Residence', notes: 'Government-owned master developer formed by the 2024 merger; controls much of Dubai’s prime and waterfront land bank.' },
    { name: 'Damac Properties', hq: 'Dubai', type: 'Developer', focus: 'Damac Hills, Damac Lagoons, branded residences, Damac Islands', notes: 'Privately held after delisting; the largest private off-plan seller with aggressive launch cadence and international roadshows.' },
    { name: 'Sobha Realty', hq: 'Dubai', type: 'Developer', focus: 'Sobha Hartland, Sobha One, Siniya Island (Umm Al Quwain)', notes: 'Backward-integrated builder known for delivery quality; premium off-plan competitor to Emaar with a strong Indian buyer base.' },
    { name: 'Binghatti Developers', hq: 'Dubai', type: 'Developer', focus: 'Branded towers with Bugatti, Mercedes-Benz and Jacob & Co', notes: 'Fastest-growing private developer by launches; brand collaborations define the new branded-residence segment.' },
    { name: 'Azizi Developments', hq: 'Dubai', type: 'Developer', focus: 'Riviera at MBR City, Azizi Venice, Al Furjan', notes: 'High-volume mid-market off-plan developer targeting investors with long payment plans and large master communities.' },
    { name: 'Danube Properties', hq: 'Dubai', type: 'Developer', focus: 'Affordable off-plan towers with 1% monthly plans', notes: 'Pioneered the 1% monthly payment plan; a core account for understanding first-time investor demand.' },
    { name: 'Ellington Properties', hq: 'Dubai', type: 'Developer', focus: 'Design-led boutique residences in JVC, Downtown, Palm', notes: 'Premium boutique developer whose buyers prioritise design and end-use over yield; expanding into Ras Al Khaimah.' },
    { name: 'Omniyat', hq: 'Dubai', type: 'Developer', focus: 'Ultra-luxury: One at Palm, Vela, Orla by Dorchester', notes: 'Defines the top of the market with branded ultra-prime residences and record price per square foot.' },
    { name: 'Select Group', hq: 'Dubai', type: 'Developer', focus: 'Six Senses Residences, Peninsula, Marina towers', notes: 'Waterfront and branded-residence developer in Dubai Marina and Business Bay with a high-net-worth buyer base.' },
    { name: 'Deyaar Development', hq: 'Dubai', type: 'Developer', focus: 'Business Bay, Al Furjan, Dubai Production City', notes: 'DFM-listed developer backed by Dubai Islamic Bank; mid-market residential and hospitality pipeline.' },
    { name: 'Union Properties', hq: 'Dubai', type: 'Developer', focus: 'Motor City, Green Community, Dubai Investments Park', notes: 'DFM-listed master developer of Motor City relaunching its land bank after restructuring.' },
    { name: 'MAG Group Property Development', hq: 'Dubai', type: 'Developer', focus: 'Keturah, MAG City, MAG 22', notes: 'Lifestyle and wellness-branded off-plan developer competing with Damac and Sobha in the upper-mid segment.' },
    { name: 'Samana Developers', hq: 'Dubai', type: 'Developer', focus: 'Private-pool apartments in JVC, Arjan, Dubailand', notes: 'Rapid-launch developer serving investors with amenity-led mid-market towers and extended plans.' },
    { name: 'Nshama', hq: 'Dubai', type: 'Developer', focus: 'Town Square Dubai master community', notes: 'Affordable master-community developer whose townhouses and apartments target end-user families.' },
    { name: 'Wasl Properties', hq: 'Dubai', type: 'Government', focus: 'Wasl1, Wasl Gate, rental portfolio and Port de La Mer', notes: 'Dubai government real estate arm with the emirate’s largest rental portfolio and growing freehold sales.' },
    { name: 'Modon Holding', hq: 'Abu Dhabi', type: 'Government', focus: 'Hudayriyat Island, Ras El Hekma (Egypt), Nawayef', notes: 'ADX-listed, government-backed master developer; anchors Abu Dhabi’s newest island communities.' },
    { name: 'Imkan Properties', hq: 'Abu Dhabi', type: 'Developer', focus: 'Makers District, Nudra, AlJurf', notes: 'Abu Dhabi developer of Reem Island and Ghantoot communities; premium end-user positioning.' },
    { name: 'Bloom Holding', hq: 'Abu Dhabi', type: 'Developer', focus: 'Bloom Living in Zayed City', notes: 'Abu Dhabi master-community developer focused on villa and townhouse demand from Emirati and expatriate families.' },
    { name: 'Reportage Properties', hq: 'Abu Dhabi', type: 'Developer', focus: 'Affordable off-plan in Abu Dhabi, Dubai and Egypt', notes: 'High-volume affordable developer with a broad investor base across emirates.' },
    { name: 'Arada', hq: 'Sharjah', type: 'Developer', focus: 'Aljada, Masaar, Sharjah and Dubai launches', notes: 'Sharjah’s largest developer and the driver of the emirate’s freehold market; expanding into Dubai and Australia.' },
    { name: 'Eagle Hills', hq: 'Abu Dhabi', type: 'Regional', focus: 'Maryam Island (Sharjah), Ramhan Island, Bahrain, Europe', notes: 'Abu Dhabi-based regional master developer active in Sharjah, Bahrain and Eastern Europe.' },
    { name: 'RAK Properties and Al Hamra', hq: 'Ras Al Khaimah', type: 'Developer', focus: 'Mina Al Arab, Al Marjan Island, Al Hamra Village', notes: 'Ras Al Khaimah’s listed developers benefiting from the Wynn Al Marjan resort and freehold investor inflows.' },
  ],
  categoryBlurbs: {
    local: 'UAE-owned developers from listed Emaar, Aldar and Deyaar to private groups such as Damac, Binghatti, Azizi, Danube, Ellington and Omniyat, each with a distinct product and buyer.',
    mnc: 'No foreign homebuilder develops at scale in the UAE; international involvement comes through hotel-branded residences, foreign buyers and Indian-origin developers such as Sobha and Danube.',
    regional: 'Regional master developers such as Eagle Hills, and UAE developers exporting to Egypt, Saudi Arabia and Europe, link Emirati capital to neighbouring markets.',
    trade: 'Government master developers — Dubai Holding Real Estate, Wasl, Modon — that hold prime land banks and set the pace of supply in Dubai and Abu Dhabi.',
  },
  sections: [
    {
      heading: 'Launch pipeline by emirate',
      paragraphs: [
        'Dubai’s pipeline is the region’s largest, with more than 100,000 units scheduled for handover between 2025 and 2027 and new launches every week. Emaar continues to release The Oasis, Dubai Hills and Creek Harbour phases; Dubai Holding Real Estate is activating Palm Jebel Ali, Dubai Islands and Meydan land; Damac, Sobha, Binghatti, Azizi and Danube launch towers and communities across Dubailand, MBR City, JVC and Business Bay; and Omniyat, Select and Ellington add branded ultra-prime stock on the Palm and Marina.',
        'Abu Dhabi supply is concentrated in Aldar’s Yas, Saadiyat and Reem projects, Modon’s Hudayriyat Island and Bloom Living in Zayed City, with a stronger villa and end-user mix. Sharjah’s Aljada and Masaar by Arada and Maryam Island by Eagle Hills, and Ras Al Khaimah’s Al Marjan Island around the Wynn resort, are the fastest-growing secondary pipelines. Tracking launches by developer, community and price band each quarter is essential because comparable inventory shifts constantly.',
      ],
    },
    {
      heading: 'Off-plan versus ready homes',
      paragraphs: [
        'Off-plan sales made up roughly 60% of Dubai residential transactions in 2024. Developers sell into DLD-regulated escrow with 10–20% down and construction-linked or post-handover plans, and payment structure — 1% monthly, 60/40 or 80/20 post-handover — is a primary competitive lever. Ready homes trade in a deep secondary market with mortgage financing and command a premium for immediate rental yield, while off-plan attracts investors betting on capital appreciation and resale before completion.',
        'Abu Dhabi and the northern emirates carry a higher share of end-user and ready purchases, and mortgage penetration is rising with lower down-payment rules. BioNixus research separates off-plan and ready buyers, captures plan-term sensitivity, perceived delivery risk by developer and resale intent, and links these to developer sales data to explain absorption differences.',
      ],
    },
    {
      heading: 'Buyer segments',
      paragraphs: [
        'UAE developers sell to five distinct groups: international investors from India, the UK, Russia, China and the GCC buying for yield, capital gains and Golden Visa eligibility; resident end-users upgrading to villas and townhouses in master communities; Emirati families in Abu Dhabi and Sharjah using government housing programmes and freehold zones; high-net-worth buyers of branded and ultra-prime residences; and first-time investors drawn by 1% monthly plans in affordable towers.',
        'Each segment differs in nationality mix, financing, decision timeline and channel, and emirate matters: Dubai skews investor, Abu Dhabi and Sharjah skew end-user. Segment-level quotas by nationality, residence, purchase motive and product type are what make a UAE buyer study actionable for pricing and launch design.',
      ],
    },
    {
      heading: 'Brokerage and sales channels',
      paragraphs: [
        'Brokers dominate distribution. Roughly 20,000 RERA-licensed agents in Dubai, from Betterhomes, Allsopp & Allsopp, haus & haus, Driven Properties and fäm Properties to thousands of small brokerages, earn 2–5% commission and originate most off-plan and secondary sales, with Property Finder, Bayut and Dubizzle as the discovery layer. Developers run flagship sales centres and international roadshows but rely on broker networks and incentive programmes to move launches, and broker incentives regularly exceed 5% on slower projects.',
        'Abu Dhabi and Sharjah are more developer-direct, with Aldar and Arada selling significant volume through their own teams and apps. BioNixus fields broker interviews and incentive tracking, sales-centre mystery shopping and portal-listing audits alongside buyer research so developers understand the channel that actually converts by emirate and product.',
      ],
    },
  ],
  growthDrivers: [
    { title: 'Golden Visa and residency-linked demand', desc: 'Ten-year visas for property buyers above AED 2 million and remote-work residency have made real estate an immigration product, sustaining international investor inflows.' },
    { title: 'Government master developer consolidation', desc: 'The merger of Nakheel, Meraas and Meydan into Dubai Holding Real Estate and Modon’s expansion concentrate prime land supply and change how private developers access sites.' },
    { title: 'Branded and ultra-prime residences', desc: 'Hotel- and fashion-branded towers from Omniyat, Binghatti, Select and Damac have created a top tier with record prices and a distinct high-net-worth buyer.' },
    { title: 'Payment-plan competition', desc: '1% monthly, post-handover and rent-to-own structures from Danube, Azizi, Samana and Reportage have widened the investor base and made plan terms a primary purchase driver.' },
    { title: 'Northern emirates freehold', desc: 'Sharjah’s freehold opening, Arada’s Aljada and Ras Al Khaimah’s Wynn-driven Al Marjan Island are pulling investors and developers beyond Dubai and Abu Dhabi.' },
    { title: 'Handover wave and delivery risk', desc: 'More than 100,000 Dubai units due by 2027 make delivery track record and construction quality decisive brand attributes, favouring backward-integrated developers.' },
  ],
  faq: [
    { q: 'Who are the largest real estate developers in the UAE?', a: 'Emaar, Dubai Holding Real Estate (Nakheel, Meraas, Meydan), Damac, Sobha, Binghatti, Azizi and Danube lead Dubai; Aldar, Modon, Imkan and Bloom lead Abu Dhabi; Arada leads Sharjah and RAK Properties and Al Hamra lead Ras Al Khaimah.' },
    { q: 'How do off-plan sales work in the UAE?', a: 'Developers sell units before completion into DLD- or ADREC-regulated escrow accounts, typically with 10–20% down and construction-linked or post-handover instalments; off-plan made up about 60% of Dubai residential sales in 2024.' },
    { q: 'Who buys homes from UAE developers?', a: 'International investors from India, the UK, Russia, China and the GCC, resident end-users, Emirati families, high-net-worth buyers of branded residences and first-time investors using 1% monthly plans, with the mix varying sharply by emirate.' },
    { q: 'How important are brokers in the UAE?', a: 'Very. Around 20,000 licensed agents in Dubai originate most off-plan and secondary sales for 2–5% commission, supported by Property Finder, Bayut and Dubizzle, while Abu Dhabi and Sharjah developers sell more directly.' },
    { q: 'What does BioNixus study about real estate developers in the UAE?', a: 'Buyer segmentation by nationality and motive; developer brand and delivery-reputation tracking; broker incentive and steering research; payment-plan and pricing tests; and demand studies for building-product, fit-out and mortgage brands.' },
    { q: 'Is this list ranked?', a: 'No. Developers are grouped by role and included because they recur in BioNixus UAE fieldwork and DLD, ADREC and exchange records; order does not indicate size or sales.' },
  ],
  regulatorSource: {
    name: 'Dubai Land Department / RERA registered developers and Abu Dhabi Real Estate Centre (ADREC) licensed developers',
    url: 'https://dubailand.gov.ae',
    asOf: '2026-09-03',
  },
  sources: [
    'Dubai Land Department transaction statistics and RERA developer and broker registers, 2024–2025',
    'ADREC and Sharjah RERA licensing data; DFM and ADX annual reports of Emaar, Aldar, Deyaar, Union Properties, Modon and RAK Properties, 2024–2025',
    'Property Finder, Bayut and Property Monitor market reports, 2024',
    'BioNixus UAE developer, buyer and broker fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Buyer segmentation surveys across Dubai, Abu Dhabi, Sharjah and Ras Al Khaimah by nationality, residence, purchase motive and product type.',
    'Developer brand and delivery-reputation tracking among recent buyers and prospects for Emaar, Aldar, Damac, Sobha, Binghatti, Azizi and challengers.',
    'Broker interviews, incentive tracking and sales-centre mystery shopping to map commission, steering and conversion practices by developer and emirate.',
    'Payment-plan and pricing tests, and demand studies for building-product, fit-out, furniture and mortgage brands tied to handover schedules.',
  ],
});

const RE_KSA = finish('real-estate', 'saudi-arabia', {
  title: 'Top 24 Real Estate Developers in Saudi Arabia (2026 List)',
  h1: 'Top Real Estate Developers in Saudi Arabia (2026)',
  modifiedDate: RE_MODIFIED,
  metaDescription:
    '2026 list of real estate developers in Saudi Arabia: ROSHN, NHC, Dar Al Arkan, Jabal Omar, RETAL, Red Sea Global, Diriyah and more — pipeline, off-plan, buyers, brokers.',
  introLead:
    'Saudi Arabia is running the largest housing programme in the region: Vision 2030 targets 70% home ownership, the Sakani programme has supported more than a million families since 2017, and PIF-backed giga-developers, the National Housing Company and a growing tier of Tadawul-listed and private developers are building whole districts in Riyadh, Jeddah, the Eastern Province and the Holy Cities.',
  introRest:
    'ROSHN and NHC supply master-planned communities at national scale; Dar Al Arkan, RETAL, Al Akaria, Sumou and Arriyadh Development are the listed developers investors track; Jabal Omar, Makkah Construction, Umm Al Qura and Rua Al Madinah build around the Two Holy Mosques; and Red Sea Global, NEOM, Diriyah, Qiddiya and New Murabba are the giga-projects that redefine what a Saudi development company is. The Real Estate General Authority licenses developers and brokers, Wafi regulates off-plan sales, and the Real Estate Development Fund and Saudi Real Estate Refinance Company finance demand. This directory lists the developers that define Saudi housing supply, explains how launches, off-plan sales, buyer segments and brokerage work in the Kingdom, and shows how BioNixus researches them for developers, lenders and building-product brands.',
  stats: [
    { value: '70%', label: 'Vision 2030 home-ownership target, up from about 47% in 2016' },
    { value: '~64%', label: 'Saudi home-ownership rate reached by 2024 under the Housing Program' },
    { value: '1m+', label: 'Families supported by Sakani housing solutions since 2017' },
    { value: '5', label: 'PIF giga-projects with residential components: NEOM, Red Sea, Diriyah, Qiddiya, ROSHN' },
  ],
  channelHeading: 'How developers sell homes in Saudi Arabia',
  channelBody:
    'The Saudi primary market runs on policy and programme as much as on brand. The Ministry of Municipal, Rural Affairs and Housing’s Sakani platform matches eligible citizens to subsidised mortgages, land and off-plan units from approved developers, and the Real Estate Development Fund and SRC channel financing through banks such as Al Rajhi, SNB and Riyad Bank, so eligibility and mortgage terms shape who buys what. Developers sell through Wafi-licensed off-plan programmes with escrow accounts, in-house sales centres and a brokerage layer that is professionalising under REGA licensing and the Ejar and Wafi platforms. Supply is city-specific: Riyadh, where ROSHN’s Sedra and Warefa, NHC’s suburbs, Dar Al Arkan’s Shams Ar Riyadh and Diriyah and New Murabba dominate; Jeddah, where Emaar The Economic City, Dar Al Arkan and Sedco develop along the coast and King Abdullah Economic City; the Eastern Province, where RETAL, Sumou and Ajdan lead Khobar and Dammam; and Makkah and Madinah, where Jabal Omar, Umm Al Qura’s Masar and Rua Al Madinah build hospitality-residential districts for pilgrims. Investors are a smaller share than in Dubai, expatriate ownership is only now being liberalised, and Saudi end-user families financed through Sakani remain the core buyer, which is why a Dubai off-plan instrument misreads Saudi demand.',
  companies: [
    { name: 'ROSHN Group', hq: 'Riyadh', type: 'Government', focus: 'Sedra, Warefa, Alarous, Marafy; national master communities', notes: 'PIF giga-developer building integrated communities in Riyadh, Jeddah, the Eastern Province and Makkah; the volume benchmark for Saudi housing.' },
    { name: 'National Housing Company (NHC)', hq: 'Riyadh', type: 'Government', focus: 'Suburban communities and Sakani supply', notes: 'Ministry-owned master developer delivering hundreds of thousands of units through partnerships with private developers.' },
    { name: 'Dar Al Arkan Real Estate Development', hq: 'Riyadh', type: 'Developer', focus: 'Shams Ar Riyadh, Sedra Jeddah, branded residences, international', notes: 'Tadawul-listed developer with two decades of track record and branded projects in Dubai, Bosnia and the Maldives.' },
    { name: 'RETAL Urban Development', hq: 'Khobar', type: 'Developer', focus: 'Eastern Province and Riyadh communities', notes: 'Tadawul-listed developer with a quality reputation in Khobar and Dammam and a growing Riyadh pipeline.' },
    { name: 'Jabal Omar Development Company', hq: 'Makkah', type: 'Developer', focus: 'Jabal Omar hospitality and residential district beside the Grand Mosque', notes: 'Tadawul-listed developer of the largest private project in Makkah; hospitality-led residential for pilgrims.' },
    { name: 'Emaar The Economic City', hq: 'King Abdullah Economic City', type: 'Regional', focus: 'KAEC master developer', notes: 'Tadawul-listed Emaar affiliate developing the King Abdullah Economic City north of Jeddah with PIF as a shareholder.' },
    { name: 'Red Sea Global', hq: 'Riyadh', type: 'Government', focus: 'The Red Sea and Amaala luxury destinations', notes: 'PIF giga-developer of resort and residential communities on the Red Sea coast; sets the ultra-luxury benchmark.' },
    { name: 'NEOM', hq: 'Tabuk', type: 'Government', focus: 'The Line, Sindalah, Trojena, Oxagon', notes: 'PIF giga-project with residential programmes for a new region; its procurement and design standards influence the whole sector.' },
    { name: 'Diriyah Company', hq: 'Riyadh', type: 'Government', focus: 'Diriyah Gate heritage and residential district', notes: 'PIF developer of the Diriyah masterplan with premium residential and hospitality near central Riyadh.' },
    { name: 'Qiddiya Investment Company', hq: 'Riyadh', type: 'Government', focus: 'Entertainment city with residential districts', notes: 'PIF giga-project south-west of Riyadh combining entertainment, sports and housing.' },
    { name: 'New Murabba Development Company', hq: 'Riyadh', type: 'Government', focus: 'New Murabba downtown and the Mukaab', notes: 'PIF developer of a new Riyadh downtown with 100,000-plus residential units planned.' },
    { name: 'Rua Al Madinah Holding', hq: 'Madinah', type: 'Government', focus: 'Rua Al Madinah district near the Prophet’s Mosque', notes: 'PIF developer of a hospitality and residential district for Madinah pilgrims and residents.' },
    { name: 'Umm Al Qura for Development (Masar)', hq: 'Makkah', type: 'Developer', focus: 'Masar Destination boulevard in Makkah', notes: 'Developer of the Masar mixed-use corridor linking central Makkah to the Grand Mosque.' },
    { name: 'Saudi Real Estate Company (Al Akaria)', hq: 'Riyadh', type: 'Developer', focus: 'Riyadh residential and commercial; Widyan', notes: 'Tadawul-listed developer majority-owned by PIF; redeveloping legacy Riyadh land into new communities.' },
    { name: 'Makkah Construction and Development Company', hq: 'Makkah', type: 'Developer', focus: 'Abraj Al Bait and Makkah real estate', notes: 'Tadawul-listed owner-developer of the Abraj Al Bait complex; a reference for pilgrim-driven real estate.' },
    { name: 'Taiba Investments', hq: 'Madinah', type: 'Developer', focus: 'Madinah hospitality and residential', notes: 'Tadawul-listed developer and hotel owner around the Prophet’s Mosque, merged with Dur Hospitality.' },
    { name: 'Arriyadh Development Company', hq: 'Riyadh', type: 'Developer', focus: 'Riyadh mixed-use and residential', notes: 'Tadawul-listed developer with a Riyadh-focused portfolio of residential and commercial projects.' },
    { name: 'Sumou Real Estate', hq: 'Khobar', type: 'Developer', focus: 'Eastern Province and Riyadh communities', notes: 'Tadawul-listed developer of villa and apartment communities in Dammam, Khobar and Riyadh.' },
    { name: 'Jeddah Economic Company', hq: 'Jeddah', type: 'Developer', focus: 'Jeddah Economic City and Jeddah Tower', notes: 'Kingdom Holding-led developer of the Jeddah Tower district; relaunched construction in 2025.' },
    { name: 'Ajdan Real Estate Development', hq: 'Khobar', type: 'Developer', focus: 'Ajdan Walk, Ajdan Rise, Eastern Province waterfront', notes: 'Private Eastern Province developer known for waterfront mixed-use projects and premium apartments.' },
    { name: 'Dar Wa Emaar', hq: 'Riyadh', type: 'Developer', focus: 'Sakani-eligible villa communities in Riyadh and Jeddah', notes: 'Private developer delivering large volumes of affordable villas through NHC and Sakani partnerships.' },
    { name: 'Al Saedan Real Estate', hq: 'Riyadh', type: 'Developer', focus: 'Riyadh residential communities', notes: 'Long-established private Riyadh developer with a broad mid-market villa and apartment portfolio.' },
    { name: 'Sedco Development', hq: 'Jeddah', type: 'Developer', focus: 'Jeddah residential and mixed-use', notes: 'Sedco Holding’s development arm with premium Jeddah communities and commercial assets.' },
    { name: 'Real Estate General Authority (REGA) and Real Estate Development Fund', hq: 'Riyadh', type: 'Government', focus: 'Developer and broker licensing, Wafi off-plan regulation, Sakani financing', notes: 'REGA licenses developers and brokers and runs Wafi; REDF and SRC finance the subsidised mortgages behind most Saudi purchases.' },
  ],
  categoryBlurbs: {
    local: 'Saudi developers from Tadawul-listed Dar Al Arkan, RETAL, Al Akaria and Sumou to private groups such as Ajdan, Dar Wa Emaar, Al Saedan and Sedco, each with a city-specific portfolio.',
    mnc: 'International homebuilders do not develop in Saudi Arabia; foreign expertise arrives through giga-project joint ventures, hotel brands and design and construction partners.',
    regional: 'Gulf developers — Emaar through Emaar The Economic City and UAE groups exploring Saudi entry — that bring regional operating models to Saudi land.',
    trade: 'The state layer: PIF giga-developers ROSHN, Red Sea Global, NEOM, Diriyah, Qiddiya, New Murabba and Rua Al Madinah, plus NHC, REGA and the Real Estate Development Fund that set supply, rules and financing.',
  },
  sections: [
    {
      heading: 'Launch pipeline and giga-projects',
      paragraphs: [
        'Saudi supply is programme-driven. ROSHN is delivering Sedra and Warefa in Riyadh, Alarous in Jeddah and Marafy and Eastern Province communities toward a target of hundreds of thousands of homes, and NHC is releasing suburban land and units through partnerships with private developers across Riyadh, Jeddah and Dammam. Riyadh’s pipeline also includes New Murabba’s downtown, Diriyah Gate, Qiddiya’s residential districts and Al Akaria’s Widyan, while Jeddah adds KAEC phases, Jeddah Economic City and Red Sea Global’s coastal resorts to the north.',
        'The Holy Cities carry a distinct pipeline: Jabal Omar, Masar, Rua Al Madinah and Taiba build hospitality-residential districts timed to pilgrim growth toward 30 million a year. The Eastern Province pipeline from RETAL, Sumou and Ajdan is smaller but premium. Tracking releases by developer, city and Sakani eligibility each quarter is essential because subsidised supply reprices the private market.',
      ],
    },
    {
      heading: 'Off-plan versus ready homes',
      paragraphs: [
        'Off-plan sales in Saudi Arabia run through the Wafi programme, which licenses projects, mandates escrow accounts and lets developers sell units before completion to Sakani-eligible and open-market buyers. Ready villas and apartments still account for a larger share of transactions than in Dubai, because subsidised mortgages through REDF and banks favour completed units and because many buyers purchase land and self-build through contractors, a channel that competes directly with developers.',
        'Developers therefore compete on delivery certainty, mortgage pre-approval partnerships and monthly instalment affordability rather than on speculative appreciation. BioNixus research separates Wafi off-plan, ready-unit and self-build buyers, captures mortgage and eligibility constraints and measures developer trust, which is the decisive attribute in a market where delivery delays remain common.',
      ],
    },
    {
      heading: 'Buyer segments',
      paragraphs: [
        'Saudi housing demand centres on citizen families: first-time buyers using Sakani subsidies and REDF-backed mortgages; upgraders moving from rented apartments or older districts into master communities; and affluent families buying premium villas in Riyadh’s north, Jeddah’s Obhur coast or Khobar’s waterfront. A fourth, smaller segment of investors buys apartments for rental yield as Riyadh’s population and expatriate workforce grow, and a fifth is emerging as foreign ownership rules liberalise and giga-projects market branded residences internationally.',
        'Segment behaviour differs by city and programme, and the same developer may serve Sakani-eligible buyers in one project and premium end-users in another. Quotas by city, eligibility, income band and purchase motive are what make Saudi buyer research usable for product design and pricing.',
      ],
    },
    {
      heading: 'Brokerage and sales channels',
      paragraphs: [
        'Saudi brokerage is professionalising quickly. REGA licensing, the Wafi and Ejar platforms and the growth of firms such as Century 21 Saudi, Aqar and regional brokerages are replacing informal agents, while listing portals Aqar, Bayut Saudi and Wasalt shape discovery. Developers sell primarily through their own sales centres and digital channels, with NHC’s and ROSHN’s platforms handling large volumes directly, and pay brokers commissions of around 2.5% for referred buyers.',
        'Banks are a channel in their own right, because mortgage pre-approval through Al Rajhi, SNB, Riyad Bank and Alinma often determines which developer a family can buy from. BioNixus fields broker and bank-channel interviews, sales-centre mystery shopping and portal audits alongside buyer research so developers see how Saudi purchases are actually originated.',
      ],
    },
  ],
  growthDrivers: [
    { title: 'Housing Program and Sakani', desc: 'Subsidised mortgages, land grants and off-plan support toward the 70% ownership target underpin most citizen purchases and define which developers and units qualify.' },
    { title: 'PIF giga-developers', desc: 'ROSHN, Red Sea Global, NEOM, Diriyah, Qiddiya and New Murabba concentrate capital, land and design standards in state-backed developers that private firms partner with or price against.' },
    { title: 'Riyadh population growth', desc: 'The capital’s push toward 15–20 million residents, regional headquarters relocations and Expo 2030 drive apartment demand and premium villa supply in the north and around new districts.' },
    { title: 'Pilgrim-driven real estate', desc: 'Growth toward 30 million pilgrims a year sustains hospitality-residential development around the Grand Mosque and the Prophet’s Mosque by Jabal Omar, Masar, Rua Al Madinah and Taiba.' },
    { title: 'Foreign ownership liberalisation', desc: 'Rules allowing non-Saudis to own property in designated zones open a new international buyer segment and change how giga-projects market branded residences.' },
    { title: 'Capital-market and REIT funding', desc: 'Tadawul listings, sukuk and real estate funds give developers and NHC partners capital for large phased communities and raise disclosure standards across the sector.' },
  ],
  faq: [
    { q: 'Who are the largest real estate developers in Saudi Arabia?', a: 'ROSHN and the National Housing Company lead by volume, Dar Al Arkan, RETAL, Al Akaria, Sumou and Arriyadh Development are the main listed developers, Jabal Omar, Masar and Rua Al Madinah build in the Holy Cities, and Red Sea Global, NEOM, Diriyah, Qiddiya and New Murabba are the PIF giga-projects.' },
    { q: 'How do off-plan sales work in Saudi Arabia?', a: 'Through the Wafi programme, which licenses projects, requires escrow accounts and allows sales before completion; buyers often combine off-plan purchase with Sakani eligibility and REDF-subsidised mortgages.' },
    { q: 'Who buys homes from Saudi developers?', a: 'Mainly Saudi families using Sakani subsidies and bank mortgages, upgraders moving into master communities and affluent villa buyers, with a smaller investor segment and an emerging international segment as ownership rules liberalise.' },
    { q: 'How important are brokers in Saudi Arabia?', a: 'Growing but less dominant than in Dubai; developers sell mostly through their own sales centres and platforms, REGA-licensed brokers earn around 2.5% on referrals, and banks’ mortgage pre-approval often decides which developer a buyer can choose.' },
    { q: 'What does BioNixus study about real estate developers in Saudi Arabia?', a: 'Buyer segmentation by city, eligibility and motive; developer brand and delivery-trust tracking; broker, bank-channel and sales-centre research; pricing and instalment tests; and demand studies for building-product, finishing and home-finance brands.' },
    { q: 'Is this list ranked?', a: 'No. Developers are grouped by role and included because they recur in BioNixus Saudi fieldwork and REGA, Wafi and Tadawul records; order does not indicate size or sales.' },
  ],
  regulatorSource: {
    name: 'Real Estate General Authority (REGA) — licensed developers and Wafi off-plan projects; Tadawul listed real estate development companies',
    url: 'https://rega.gov.sa',
    asOf: '2026-09-03',
  },
  sources: [
    'Ministry of Municipal, Rural Affairs and Housing — Housing Program and Sakani annual reports, 2024–2025',
    'Tadawul annual reports of Dar Al Arkan, RETAL, Jabal Omar, Emaar The Economic City, Al Akaria, Sumou and Arriyadh Development, 2024–2025',
    'PIF and giga-project disclosures (ROSHN, Red Sea Global, NEOM, Diriyah, New Murabba); GASTAT housing statistics, 2024',
    'BioNixus Saudi developer, buyer and broker fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Buyer segmentation surveys across Riyadh, Jeddah, the Eastern Province and the Holy Cities by Sakani eligibility, income band, purchase motive and product type.',
    'Developer brand and delivery-trust tracking among recent buyers and prospects for ROSHN, NHC partners, Dar Al Arkan, RETAL, Jabal Omar and challengers.',
    'Broker, bank-channel and sales-centre research mapping mortgage pre-approval, commission and conversion practices by developer and city.',
    'Pricing and instalment tests, and demand studies for building-product, finishing, furniture and home-finance brands tied to handover schedules.',
  ],
});


const RE_KUWAIT = finish('real-estate', 'kuwait', {
  metaDescription:
    '2026 directory of real estate companies in Kuwait: Mabanee, URC, NREC, Tamdeen. Retail-led developers we study. Account-level primary research by BioNixus.',
  introLead:
    'Kuwaiti development is retail-led more than giga-residential. Mabanee is The Avenues — the shopping-district operating system the country actually uses. United Real Estate (URC) and National Real Estate Company (NREC) are the listed developers. Tamdeen builds 360 Mall and Al Kout as destination retail, then residential around it. This is not a ROSHN volume-housing market and not a Dubai off-plan market.',
  introRest:
    'Syndicated FMCG panels do not cover developers. BioNixus fields shoppers, tenants, brokers, and sales centres at the asset and the developer. Use this list with our real estate market research in Kuwait.',
  stats: [
    { value: '8', label: 'Developers we list and study' },
    { value: 'Mabanee', label: 'The Avenues system' },
    { value: 'Retail-led', label: 'Mall then residential' },
    { value: 'No panel', label: 'Primary research only' },
  ],
  channelHeading: 'Malls as the masterplan; housing as the adjacency',
  channelBody:
    'Demand conversations start at The Avenues, 360 Mall, and Al Kout, then move to the residential they pull. Waterfront and listed-developer plots are a second theatre. A questionnaire written for Riyadh Sakani or Dubai off-plan will ask the wrong job. Name the asset.',
  companies: [
    { name: 'Mabanee Company', hq: 'Kuwait', type: 'Developer', focus: 'The Avenues, retail destinations', notes: 'The shopping-district system Kuwait actually uses' },
    { name: 'United Real Estate Company (URC)', hq: 'Kuwait', type: 'Developer', focus: 'Listed mixed-use', notes: 'Boursa-listed developer; regional assets too' },
    { name: 'National Real Estate Company (NREC)', hq: 'Kuwait', type: 'Developer', focus: 'Listed development, regional', notes: 'Listed name with Kuwait and regional plots' },
    { name: 'Tamdeen Group', hq: 'Kuwait', type: 'Developer', focus: '360 Mall, Al Kout, residential', notes: 'Retail destination then housing adjacency' },
    { name: 'Salhiya Real Estate', hq: 'Kuwait', type: 'Developer', focus: 'Salhiya complex, commercial', notes: 'City-centre commercial-retail name' },
    { name: 'Alargan International', hq: 'Kuwait', type: 'Developer', focus: 'Residential and mixed use', notes: 'Kuwaiti developer with regional work' },
    { name: 'IFA Hotels & Resorts', hq: 'Kuwait', type: 'Developer', focus: 'Hospitality-residential', notes: 'Hotel-residences; not a mall story' },
    { name: 'Kuwait Real Estate Company', hq: 'Kuwait', type: 'Developer', focus: 'Listed property', notes: 'Long-running Boursa property name' },
  ],
  categoryBlurbs: {
    local: 'Mabanee, URC, NREC, Tamdeen, Salhiya, Alargan, IFA, and Kuwait Real Estate Company are Kuwaiti developers. Retail-led destinations are the centre of gravity — not volume housing.',
    mnc: 'International brands arrive as mall tenants and hotel flags, not as homebuilders. Do not force a US production-home narrative onto The Avenues.',
    regional: 'URC and NREC hold regional plots. The research question in Kuwait is still the local asset — Avenues, 360, Al Kout — not a GCC average.',
    trade: 'The channel is the mall, the tenant mix, and the residential sales centre next to it. There is no grocery audit to buy.',
  },
  growthDrivers: [
    { title: 'The Avenues as urban infrastructure', desc: 'Mabanee is not “a mall.” It is how Kuwait shops and spends a weekend. Competitor work that starts with housing will miss the demand engine.' },
    { title: 'Tamdeen’s dual mall-and-home model', desc: '360 and Al Kout pull residential. Measure both jobs or you will only see the shopper.' },
    { title: 'Listed-developer discipline', desc: 'URC, NREC, and Kuwait Real Estate Company are Boursa stories. Instrument for that capital, not for a Dubai off-plan flyer.' },
    { title: 'Waterfront versus city-centre', desc: 'Al Kout and Salhiya are different catchments. A national average hides the asset you came to study.' },
    { title: 'Hospitality-residential as a side door', desc: 'IFA-type products are not mall-adjacent villas. Split them out.' },
    { title: 'Small geography, sharp assets', desc: 'Kuwait is short-distance. Asset quality still splits demand. Name the project.' },
  ],
  faq: [
    { q: 'Which real estate companies matter in Kuwait?', a: 'Mabanee, URC, NREC, Tamdeen, Salhiya, Alargan, IFA Hotels & Resorts, and Kuwait Real Estate Company. Start with Mabanee if the brief is how the country actually spends.' },
    { q: 'Why is a mall company on a real estate directory?', a: 'Because in Kuwait the mall is the masterplan. Residential demand often sits next to Mabanee and Tamdeen destinations. Ignoring them is a housing-only fiction.' },
    { q: 'Can we reuse a KSA or UAE developer questionnaire?', a: 'No. There is no ROSHN-style volume programme and no Dubai freehold investor script. Retail-led assets are the Kuwait fact.' },
    { q: 'Do Nielsen or IQVIA cover this?', a: 'They cover grocery and pharma audits. Developer and mall-adjacent housing demand is primary fieldwork. We complement those firms elsewhere; we do not pretend they sell this cut.' },
    { q: 'What must the brief name?', a: 'Asset and job — The Avenues shopper, a Tamdeen residential buyer, a listed-developer plot. “Kuwait real estate” is not a design.' },
  ],
});

const RE_OMAN = finish('real-estate', 'oman', {
  metaDescription:
    '2026 directory of real estate companies in Oman: Omran, Al Mouj, Muriya. Tourism-led mixed-use communities we study. Account-level primary research by BioNixus.',
  introLead:
    'Omani development is tourism-led mixed use, not a Dubai freehold clone. Omran is the state tourism developer. Al Mouj (The Wave) is the Muscat waterfront community everyone uses as a comparison. Muriya is the Oman–Egypt destination story (Salalah, El Gouna adjacency). Tilal and Muscat Hills sit in the local community conversation. This is not off-plan investor volume.',
  introRest:
    'There is no syndicated real estate panel. BioNixus fields end-users, second-home buyers, brokers, and hotel-residential guests at the community. Use this list with our real estate market research in Oman.',
  stats: [
    { value: '8', label: 'Developers we list and study' },
    { value: 'Omran', label: 'State tourism developer' },
    { value: 'Al Mouj', label: 'Muscat waterfront comparison' },
    { value: 'No panel', label: 'Primary research only' },
  ],
  channelHeading: 'Tourism communities, not tower off-plan',
  channelBody:
    'Al Mouj, Omran destinations, and Muriya’s Salalah assets convert through a mix of end-user, second-home, and hospitality. Muscat Hills and Tilal are local community products. A Downtown Dubai questionnaire will ask about yield and visa in a market that still shops lifestyle and tourism adjacency. Name the community.',
  companies: [
    { name: 'Omran Group', hq: 'Oman', type: 'Developer', focus: 'State tourism destinations', notes: 'The national tourism developer; not a private off-plan shop' },
    { name: 'Al Mouj (The Wave Muscat)', hq: 'Oman', type: 'Developer', focus: 'Waterfront community', notes: 'The Muscat comparison community everyone names' },
    { name: 'Muriya Tourism Development', hq: 'Oman / Egypt', type: 'Regional', focus: 'Destination residential', notes: 'Salalah and destination towns; Orascom-adjacent story' },
    { name: 'Tilal Development', hq: 'Oman', type: 'Developer', focus: 'Muscat communities', notes: 'Local community name versus Al Mouj' },
    { name: 'Muscat Hills', hq: 'Oman', type: 'Developer', focus: 'Golf / community residential', notes: 'Lifestyle community; different buyer than the Wave' },
    { name: 'National Real Estate / Ominvest adjacency', hq: 'Oman', type: 'Developer', focus: 'Listed investment-development', notes: 'Capital-side developer; not a tourism CGI story' },
    { name: 'Majid Al Futtaim (Oman assets)', hq: 'UAE', type: 'Regional', focus: 'Retail destinations', notes: 'Mall-led mixed use; City Centre Muscat adjacency' },
    { name: 'Galfar / contractor-developers', hq: 'Oman', type: 'Local', focus: 'Infrastructure-adjacent development', notes: 'Contractor-to-developer; different capital story' },
  ],
  categoryBlurbs: {
    local: 'Omran, Al Mouj, Tilal, Muscat Hills, Ominvest-adjacent names, and Galfar-type contractor-developers are the Omani set. Tourism communities and local compounds — not tower off-plan.',
    mnc: 'International brands arrive as hotel flags inside Omran and Muriya destinations, not as production homebuilders.',
    regional: 'Muriya and MAF are the regional layer. Salalah is not Muscat. City Centre Muscat is a retail destination, not a Wave villa.',
    trade: 'The channel is the community sales office, the hotel-residential desk, and the broker. There is no grocery panel.',
  },
  growthDrivers: [
    { title: 'Omran as state tourism supply', desc: 'Destination assets are policy as well as product. A private off-plan questionnaire will miss the buyer.' },
    { title: 'Al Mouj as the comparison community', desc: 'Most Muscat briefs eventually say “versus The Wave.” Design for that comparison instead of discovering it in fieldwork.' },
    { title: 'Salalah and Khareef seasonality', desc: 'Muriya’s south is a seasonal demand system. A Muscat-only sample will not see it.' },
    { title: 'Golf and lifestyle compounds', desc: 'Muscat Hills is not Al Mouj. Split lifestyle products or the recommendation will fit neither.' },
    { title: 'Retail-led mixed use', desc: 'MAF destinations pull a shopper, not always a home buyer. Say which job you are measuring.' },
    { title: 'Vision 2040 tourism language', desc: 'Listing and positioning still borrow tourism-policy language. Shoppers may not recite it; sales teams sometimes do.' },
  ],
  faq: [
    { q: 'Which real estate companies should we map in Oman?', a: 'Omran, Al Mouj (The Wave), Muriya, Tilal, Muscat Hills, Ominvest-adjacent developers, MAF Oman assets, and contractor-developers such as Galfar. That set covers state tourism, Muscat communities, and Salalah.' },
    { q: 'Is Oman a smaller Dubai for property research?', a: 'No. Tourism-led mixed use and local communities are the product. Off-plan investor language imported from Dubai is the usual failure mode.' },
    { q: 'Why is Omran on a “companies we study” list?', a: 'Because the state tourism developer sets destination supply. Private communities sell next to it. Ignoring Omran is a private-only fiction.' },
    { q: 'Do syndicated panels cover Omani real estate?', a: 'No. This is primary fieldwork — community offices, brokers, end-users, hospitality-residential guests. BioNixus fields it.' },
    { q: 'What must the brief name?', a: 'Community and buyer — Al Mouj end-user, a Salalah second home, an Omran destination guest. “Oman real estate” is not a design.' },
  ],
});

const RE_QATAR = finish('real-estate', 'qatar', {
  metaDescription:
    '2026 directory of real estate companies in Qatar: Qatari Diar, Barwa, Ezdan, UDC, Msheireb. Lusail and Pearl we study. Account-level primary research.',
  introLead:
    'Qatari residential is a masterplan-and-state story. Qatari Diar is the sovereign developer. Barwa and Ezdan are the listed volume names. United Development Company (UDC) is The Pearl. Msheireb Properties rebuilt downtown as a walkable city, not as a tower flyer. Lusail absorption after the World Cup is a real research question — vacancy and end-user mix, not CGI.',
  introRest:
    'Grocery panels do not cover this. BioNixus fields end-users, investors, brokers, and sales centres at the masterplan. Use this directory with our real estate market research in Qatar.',
  stats: [
    { value: '8', label: 'Developers we list and study' },
    { value: 'UDC / Pearl', label: 'Island freehold comparison' },
    { value: 'Msheireb', label: 'Downtown rebuild' },
    { value: 'No panel', label: 'Primary research only' },
  ],
  channelHeading: 'Masterplans: Lusail, Pearl, Msheireb — not one Doha',
  channelBody:
    'The Pearl, Lusail, Msheireb Downtown, and West Bay towers are different products and different buyers. Post-World Cup absorption is about who stayed, who left, and what rent does — not about a new launch brochure. A Dubai off-plan instrument will ask about visa yield in a market that still shops family end-use and state-linked supply.',
  companies: [
    { name: 'Qatari Diar', hq: 'Qatar', type: 'Developer', focus: 'Sovereign masterplans', notes: 'State developer; Lusail-scale thinking' },
    { name: 'Barwa', hq: 'Qatar', type: 'Developer', focus: 'Listed residential and commercial', notes: 'Qatar Exchange volume name' },
    { name: 'Ezdan Holding', hq: 'Qatar', type: 'Developer', focus: 'Listed residential communities', notes: 'Volume residential; different job from UDC' },
    { name: 'United Development Company (UDC)', hq: 'Qatar', type: 'Developer', focus: 'The Pearl', notes: 'The island freehold comparison everyone names' },
    { name: 'Msheireb Properties', hq: 'Qatar', type: 'Developer', focus: 'Downtown regeneration', notes: 'Walkable downtown; not a Pearl villa' },
    { name: 'Mazaya Qatar', hq: 'Qatar', type: 'Developer', focus: 'Listed development', notes: 'Exchange-listed developer name' },
    { name: 'Alijarah Holding', hq: 'Qatar', type: 'Developer', focus: 'Listed property and leasing', notes: 'Leasing-adjacent listed name' },
    { name: 'Qatari Investors Group', hq: 'Qatar', type: 'Developer', focus: 'Industrial and mixed use', notes: 'Industrial-mixed; not a Pearl brochure' },
  ],
  categoryBlurbs: {
    local: 'Qatari Diar, Barwa, Ezdan, UDC, Msheireb, Mazaya, Alijarah, and Qatari Investors Group are Qatari developers with distinct jobs — sovereign masterplan, listed volume, island freehold, downtown rebuild.',
    mnc: 'International brands arrive as hotel flags and tower names inside masterplans, not as production homebuilders.',
    regional: 'Gulf capital appears in towers and joint ventures. The research question is still Lusail versus Pearl versus Msheireb — not a GCC average.',
    trade: 'The channel is the masterplan sales centre and the broker. There is no grocery audit. Primary fieldwork is the product.',
  },
  growthDrivers: [
    { title: 'Post-World Cup absorption', desc: 'The question is who occupies Lusail and West Bay now, not what the 2022 brochure promised. Instrument for vacancy and mix.' },
    { title: 'The Pearl as the freehold comparison', desc: 'UDC’s island is the comparison set for international buyers. It is not Ezdan volume housing.' },
    { title: 'Msheireb as a downtown product', desc: 'Walkable regeneration is a different job from an island villa. Do not merge them in one “Doha residential” cell.' },
    { title: 'Listed volume versus sovereign supply', desc: 'Barwa/Ezdan and Qatari Diar do not share a buyer. Say which capital you are studying.' },
    { title: 'Family end-use versus investor yield', desc: 'Qatari family demand and expat investor yield are different samples. Split them or do not claim both.' },
    { title: 'Industrial-mixed as a side door', desc: 'Qatari Investors Group is not a Pearl brochure. Keep industrial-mixed out of a residential-only design.' },
  ],
  faq: [
    { q: 'Which real estate companies should we map in Qatar?', a: 'Qatari Diar, Barwa, Ezdan, UDC (The Pearl), Msheireb Properties, Mazaya Qatar, Alijarah Holding, and Qatari Investors Group. That set covers sovereign masterplans, listed volume, the island, and downtown.' },
    { q: 'Is Lusail the same market as The Pearl?', a: 'No. Different developer logic, different buyer mix, different absorption story after the World Cup. Blend them and the brief ends up pricing a unit that exists in neither district.' },
    { q: 'Can we copy a Dubai freehold questionnaire onto Doha?', a: 'Not without rewriting it. State-linked supply, family end-use, and post-event absorption are the Qatar facts. Visa-yield language is the usual import error.' },
    { q: 'Do Nielsen or IQVIA sell this cut?', a: 'No. Those feeds are grocery and pharma. Developer demand is primary fieldwork. BioNixus complements them in the categories they cover; we do not pretend they cover housing.' },
    { q: 'What must the brief name?', a: 'Masterplan and buyer — Pearl investor, Msheireb end-user, Lusail absorption. “Qatar real estate” is not a design.' },
  ],
});

export const INDUSTRY_COMPANY_DIRECTORIES: IndustryDirectoryConfig[] = [
  FMCG_EGYPT,
  FMCG_UAE,
  FMCG_KSA,
  FMCG_KUWAIT,
  FMCG_OMAN,
  FMCG_QATAR,
  RETAIL_EGYPT,
  RETAIL_UAE,
  RETAIL_KSA,
  RETAIL_KUWAIT,
  RETAIL_OMAN,
  RETAIL_QATAR,
  RE_EGYPT,
  RE_UAE,
  RE_KSA,
  RE_KUWAIT,
  RE_OMAN,
  RE_QATAR,
];

export function getIndustryDirectory(
  industry: IndustryDirectorySlug,
  country: IndustryDirectoryCountrySlug,
): IndustryDirectoryConfig | undefined {
  return INDUSTRY_COMPANY_DIRECTORIES.find((d) => d.industry === industry && d.countrySlug === country);
}

export function getIndustryDirectoryByPath(path: string): IndustryDirectoryConfig | undefined {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return INDUSTRY_COMPANY_DIRECTORIES.find((d) => d.path === normalized);
}
