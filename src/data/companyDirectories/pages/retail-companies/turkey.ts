import type { DirectoryPageInput } from '../../types';

export const retailCompaniesTurkey: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'turkey',
  metaDescription:
    'Retail companies in Turkey: BIM, A101, Şok, Migros, CarrefourSA, Macrocenter and Bizim Toptan — discount banners as accounts, not factories.',
  introLead:
    'Turkish grocery as a research object is a discount-triad country: BIM, A101 and Şok set the organised-volume tempo on almost every residential street; Migros and CarrefourSA remain the listing and promotion theatres; Macrocenter is a premium trolley; Bizim Toptan feeds the bakkal that the triad has not yet replaced.',
  introRest:
    'This directory is banners and formats. Ülker, Hayat, Eczacıbaşı Tüketim, Coca-Cola İçecek and Unilever belong on the FMCG-companies Turkey page; they are manufacturers, not shopper missions. BIM taught households a short-range, private-label-heavy trip. A101 and Şok copied the density and now sit in Anatolian towns as well as in Istanbul and Ankara. Listing a SKU into that triad is a pack-architecture conversation. Migros (including Macrocenter as its premium cut) and CarrefourSA are full-range theatres where promotion weeks still happen. Bizim Toptan, inside the Yıldız orbit, is cash-and-carry into bakkals and small HORECA — a trade door, not a household trolley. Traditional bakkals and weekly pazars still move biscuits, oil, tea and milk in towns where a discount banner has not fully replaced the grocer. BioNixus fields each fascia as an account. Name the banner type and the region — Marmara is not the southeast. “Retail in Turkey” is not a sample frame.',
  stats: [
    { value: 'BIM + A101 + Şok', label: 'Hard-discount triad that now sets organised grocery tempo' },
    { value: 'Migros / CarrefourSA', label: 'Full-range listing and promotion theatres' },
    { value: 'Macrocenter', label: 'Premium cut inside the Migros family — a different trolley' },
    { value: 'Bizim Toptan', label: 'Cash-and-carry into bakkals, not a household banner' },
  ],
  channelHeading: 'Hard discount, full-range supermarket, premium, cash-and-carry, bakkal, pazar',
  channelBody:
    'The fascia map in Turkey starts with three hard-discount boxes, not with a full-range supermarket. BIM Birleşik Mağazalar is the reference small box: short range, private-label weight, a price architecture that punishes imported pack sizes. A101 matches the density and leans harder into some general-merchandise adjacencies. Şok, inside the Yıldız group, is the third small box and often the one that still carries more manufacturer brands beside private label. Migros is the professional full-range supermarket and the listed name category teams already have in their CRM; Macrocenter is its premium fascia and must not be averaged into a Migros volume cell. CarrefourSA is the other full-range theatre, with a different buyer and a thinner store file than Migros. Bizim Toptan restocks bakkals and small kitchens; a household intercept there is a design error. Bakkals and pazars still take oil, tea, cheese and fruit in Anatolian towns. Pharmacies and kozmetik shops take personal care. Write the fascia and the region. An Istanbul Macrocenter sample is a premium catchment study.',
  companies: [
    {
      name: 'BIM Birleşik Mağazalar',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Hard-discount small box, private-label heavy',
      notes: 'The reference value trip. Pack architecture that wins in Migros will die here; competitor work that skips BIM only studied full-range grocery.',
    },
    {
      name: 'A101',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Hard-discount density across Anatolia and the metros',
      notes: 'The second small box. General-merchandise adjacency is heavier than BIM on some sites; do not treat the two as one discount cell without a reason.',
    },
    {
      name: 'Şok Marketler',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Hard-discount banner inside the Yıldız orbit',
      notes: 'The third triad name. Manufacturer-brand weight can differ from BIM; a private-label-only discount story will misread Şok.',
    },
    {
      name: 'Migros',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Full-range supermarket and the professional listing theatre',
      notes: 'The named full-range account. Promotion weeks and category reviews live here; it is not the national volume tempo anymore.',
    },
    {
      name: 'CarrefourSA',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Full-range hyper and supermarket',
      notes: 'The other listing theatre. Buyer and store file differ from Migros; merge them into one “supermarket” cell and you will invent a facing.',
    },
    {
      name: 'Macrocenter',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Premium supermarket cut inside Migros',
      notes: 'Imported and premium ranging. Use it when the SKU is premium; never let it stand in for BIM or for Migros volume stores.',
    },
    {
      name: 'Bizim Toptan',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Cash-and-carry into bakkals and small HORECA',
      notes: 'A trade door, not a household trolley. Coverage gaps in Konya or Gaziantep often trace to this depot layer, not to a Migros planogram.',
    },
    {
      name: 'Traditional bakkals',
      hq: 'Neighbourhoods and Anatolian towns',
      type: 'Retailer',
      focus: 'Independent grocery fill-in',
      notes: 'Still moving biscuits, oil, tea and milk. The triad has thinned them, not retired them; a discount-only sample will overstate organised share.',
    },
    {
      name: 'Weekly pazars',
      hq: 'Districts nationwide',
      type: 'Retailer',
      focus: 'Open-air fresh and staple fill-in',
      notes: 'Fruit, vegetables and some pantry. A supermarket produce audit will overstate share if the pazar cell is missing.',
    },
    {
      name: 'Ministry of Trade / retail-competition desk',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Unfair-trading, opening-hours and selected retail-competition files',
      notes: 'The rule layer on promotions and supplier terms. Not a shopper; still the reason a discount banner’s price architecture can become a file.',
    },
    {
      name: 'Metro Türkiye (cash-and-carry)',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'International cash-and-carry into HORECA and independents',
      notes: 'A second depot logic beside Bizim Toptan. HORECA briefs should name it; household shopper briefs usually should not.',
    },
    {
      name: 'Eczane and kozmetik shops',
      hq: 'Cities',
      type: 'Retailer',
      focus: 'Personal-care and derma missions outside grocery',
      notes: 'Tissue, shampoo and derma packs leave the discount aisle. Grocery-only personal-care samples understate these doors.',
    },
    {
      name: 'Southeast and eastern Anatolia independents',
      hq: 'Gaziantep / Diyarbakır / Erzurum',
      type: 'Retailer',
      focus: 'Regional grocery where triad density is real but ranging differs',
      notes: 'A second Turkey. An Istanbul triad sample will misread pack size and brand set; split the region or drop the national claim.',
    },
    {
      name: 'Aegean and Mediterranean seasonal stores',
      hq: 'Izmir / Antalya / Muğla',
      type: 'Retailer',
      focus: 'Tourism-season grocery mixed with resident trolleys',
      notes: 'Summer intercepts mix tourists and residents. Label the month and the catchment or the SKU story will wobble.',
    },
  ],
  categoryBlurbs: {
    local:
      'BIM, A101, Şok, Migros, Macrocenter, Bizim Toptan, bakkals and pazars: Turkish fascias and traditional doors that decide the trolley.',
    mnc:
      'Metro as international cash-and-carry. CarrefourSA is a local joint-venture fascia, not a copied French hyper sample.',
    regional:
      'No Gulf hyper operating system defines Turkey. The regional fact is Anatolian discount density versus Marmara full-range theatres.',
    trade:
      'Bizim Toptan and Metro depots, Ministry of Trade promotion rules, eczane/kozmetik adjacency and eastern ranging splits.',
  },
  growthDrivers: [
    {
      title: 'Discount triad as organised tempo',
      desc: 'BIM, A101 and Şok set volume. Full-range theatres still matter for listing photographs; they no longer set the national pack architecture.',
    },
    {
      title: 'Macrocenter as a premium contaminant',
      desc: 'Averaging Macrocenter into Migros volume stores hides both the premium SKU and the volume SKU. Split the fascia.',
    },
    {
      title: 'Cash-and-carry behind the bakkal',
      desc: 'Bizim Toptan and Metro decide whether a town shop has the case. A household-only sample will mis-attribute a coverage gap.',
    },
    {
      title: 'Regional ranging, not one Turkey',
      desc: 'Southeast pack sizes and brand sets differ from Marmara. A national average can still hide a dead SKU.',
    },
  ],
  faq: [
    {
      q: 'Which retail banners should a Turkey shopper study name?',
      a: 'BIM, A101, Şok, Migros, CarrefourSA, Macrocenter as a separate premium cut, Bizim Toptan as trade, bakkals, pazars, and eczane/kozmetik when the SKU is personal care.',
    },
    {
      q: 'How is this different from FMCG companies in Turkey?',
      a: 'The FMCG page is manufacturers (Ülker, Hayat, Coca-Cola İçecek). This page is fascias. A biscuit factory is not a BIM aisle.',
    },
    {
      q: 'Is Migros still the national grocery proxy?',
      a: 'It is the professional listing theatre. Organised volume tempo now sits with the discount triad. A Migros-only study is a full-range study.',
    },
    {
      q: 'Why is Bizim Toptan on a household-retail list?',
      a: 'Because it restocks bakkals. Coverage questions that ignore it will blame demand for a depot gap.',
    },
    {
      q: 'What does BioNixus field on Turkish retail?',
      a: 'Fascia-level SKU audits across the triad plus Migros and CarrefourSA, a Macrocenter premium cut, Bizim Toptan depot walks, bakkal/pazar cells in one Anatolian city, and a southeast ranging split when the brief claims national.',
    },
    {
      q: 'Does table order mean share?',
      a: 'No. Names are grouped by mission — discount, full-range, premium, cash-and-carry, traditional, chemist — so the next cell is bookable.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Trade — retail competition, unfair trading and commercial registration',
    url: 'https://www.ticaret.gov.tr',
    asOf: '2026-09-05',
  },
  sources: [
    'BIST filings and presentations for BIM, Şok, Migros and Bizim Toptan, 2024–2025',
    'Ministry of Trade retail-competition and opening-hours notices, 2024–2026',
    'CarrefourSA and A101 store-footprint reporting, 2024–2025',
    'BioNixus Turkey banner, bakkal and depot fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SKU-facing audits in BIM, A101, Şok, Migros and CarrefourSA on a named biscuit, dairy and laundry basket, with Macrocenter kept as a premium cut.',
    'Bizim Toptan and one independent depot walk in an Anatolian city to see what bakkals actually restock.',
    'Bakkal and pazar availability checks on the same basket versus the nearest discount banner.',
    'Southeast versus Marmara ranging notes on pack size so a national average cannot hide a dead SKU.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
