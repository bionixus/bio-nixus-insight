import type { DirectoryPageInput } from '../../types';

export const retailCompaniesNigeria: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'nigeria',
  metaDescription:
    'Retail companies in Nigeria: Shoprite, Spar Nigeria, Justrite, Market Square, FoodCo and open markets — organised banners versus Idumota and Onitsha.',
  introLead:
    'Nigerian grocery research is an organised crust over open-market volume: Shoprite, Spar Nigeria, Justrite, Market Square and FoodCo are the listing theatres in Lagos and Abuja; Idumota, Onitsha and Kano wholesale still restock the kiosk that sells the sachet the dashboard never sees.',
  introRest:
    'This page is banners and markets. Dangote Sugar, Flour Mills, Nestlé Nigeria and Unilever Nigeria sit on the FMCG-companies Nigeria file; they are factories, not shopper missions. Shoprite’s remaining and reconfigured stores are still the destination hyper international teams name. Spar Nigeria is a different franchise logic. Justrite and Market Square are local organised doors with different catchments. FoodCo (and related conglomerate grocery) is a southwest supermarket name. Traditional open markets — not “informal leftover” — are the wholesale spine into kiosks and table-top sellers. Pharmacies and patent-medicine shops take personal care. Naira resets since 2023 rewrote pack sizes in every format. BioNixus fields each banner as an account and each named market as a cell. Name the city cluster and the format. “Retail in Nigeria” is a mood.',
  stats: [
    { value: 'Open markets', label: 'Idumota, Onitsha and Kano as the wholesale spine into kiosks' },
    { value: 'Shoprite / Spar', label: 'International fascias that are listing theatres, not national volume' },
    { value: 'Justrite + Market Square + FoodCo', label: 'Local organised doors with city-specific catchments' },
    { value: 'Naira reset', label: 'Pack-size shifts that hit banners and kiosks on different clocks' },
  ],
  channelHeading: 'Destination hyper, franchise supermarket, local organised, open market, kiosk, chemist',
  channelBody:
    'Start in Lagos and Abuja, then admit the rest of the country. Shoprite, where it still operates or has been reconfigured, is the destination hyper with a listing grammar international category teams know. Spar Nigeria is a franchise supermarket with a different buyer and a thinner file. Justrite is a local organised door that is not a Shoprite annex. Market Square is another local fascia with its own catchment mix. FoodCo is a southwest supermarket conversation, often Ibadan-and-Lagos, not a northern story. Open markets — Idumota for Lagos restock, Onitsha for the east, Kano for the north — sell by the carton into kiosks and table-top sellers; that is the national unit path for sachets, cubes and oil. Patent-medicine shops and pharmacies take personal care and some food-adjacent packs. Write the banner, the market and the city cluster. A Lekki Shoprite sample is a catchment study.',
  companies: [
    {
      name: 'Shoprite Nigeria',
      hq: 'Lagos / selected cities',
      type: 'MNC',
      focus: 'Destination hypermarket where stores remain live',
      notes: 'The listing theatre international teams still name. Confirm the current store file; a closed or handed-over site is not a panel cell.',
    },
    {
      name: 'Spar Nigeria',
      hq: 'Lagos / franchise sites',
      type: 'MNC',
      focus: 'Franchise supermarket',
      notes: 'A different buyer and a thinner file than Shoprite. Merge them into one “international grocery” cell and you will invent a facing.',
    },
    {
      name: 'Justrite',
      hq: 'Lagos',
      type: 'Retailer',
      focus: 'Local organised supermarket and general-merchandise adjacency',
      notes: 'A Nigerian organised door. Catchment and ticket mix differ from Shoprite; keep the fascia on the brief.',
    },
    {
      name: 'Market Square',
      hq: 'Lagos / selected cities',
      type: 'Retailer',
      focus: 'Local organised grocery banner',
      notes: 'Another local fascia. Shopper and ranging are not a Justrite clone; treat it as its own account.',
    },
    {
      name: 'FoodCo / conglomerate grocery',
      hq: 'Ibadan / Lagos',
      type: 'Retailer',
      focus: 'Southwest supermarket system',
      notes: 'A southwest conversation. Pasting it onto Abuja or Kano as “Nigerian supermarket” hides the catchment.',
    },
    {
      name: 'Idumota market (Lagos)',
      hq: 'Lagos Island',
      type: 'Distributor',
      focus: 'Open-market wholesale into kiosks and small shops',
      notes: 'The Lagos restock spine. A Shoprite-only study will not see the carton that left Idumota before dawn.',
    },
    {
      name: 'Onitsha market corridor',
      hq: 'Onitsha',
      type: 'Distributor',
      focus: 'Southeast wholesale into eastern kiosks',
      notes: 'The eastern counterpart. A Lagos banner map will invent coverage across the Niger.',
    },
    {
      name: 'Kano open markets',
      hq: 'Kano',
      type: 'Distributor',
      focus: 'Northern wholesale into kiosks and small shops',
      notes: 'The northern restock. Seasonality and FX change what is on the stall; a Q2 Lekki audit will not see that.',
    },
    {
      name: 'Kiosks and table-top sellers',
      hq: 'Neighbourhoods nationwide',
      type: 'Retailer',
      focus: 'Sachet and cube fill-in',
      notes: 'The last yard. Pack sizes here are the national fact a banner planogram will not show.',
    },
    {
      name: 'Patent-medicine shops and pharmacies',
      hq: 'Cities and towns',
      type: 'Retailer',
      focus: 'Personal care, baby and selected food-adjacent packs',
      notes: 'PCN premises classes differ. Grocery-only personal-care samples understate these doors in every city cluster.',
    },
    {
      name: 'Abuja supermarket independents',
      hq: 'Abuja',
      type: 'Retailer',
      focus: 'Capital organised grocery outside Shoprite and Spar',
      notes: 'A second-city cell. Civil-service and expat catchments differ from Lekki; split them or label the study.',
    },
    {
      name: 'Port Harcourt and southeast supermarket independents',
      hq: 'Port Harcourt / Enugu',
      type: 'Retailer',
      focus: 'Niger Delta and eastern city grocery',
      notes: 'If the brief claims south-south or east, these doors exist. A Lagos banner design will not read them.',
    },
    {
      name: 'Carrefour / other international attempts (where live)',
      hq: 'Selected Lagos sites',
      type: 'Regional',
      focus: 'International fascia where still operating',
      notes: 'Date-stamp the store list. Nigeria has seen fascias enter and thin out; a 2022 store file is not a 2026 cell.',
    },
    {
      name: 'Labour-camp and estate mini-marts',
      hq: 'Lagos / Abuja estates',
      type: 'Retailer',
      focus: 'Closed-catchment grocery inside estates and camps',
      notes: 'A distinct ticket. Estate mini-marts are not kiosks and not Shoprite; include them when the SKU is a staple sachet in a gated catchment.',
    },
  ],
  categoryBlurbs: {
    local:
      'Justrite, Market Square, FoodCo, kiosks, estate mini-marts and city independents: Nigerian organised and neighbourhood doors that are not a South African hyper export.',
    mnc:
      'Shoprite and Spar as international fascias. Listing theatres in Lagos and Abuja; confirm the live store file before you treat them as national.',
    regional:
      'Carrefour-type Gulf or European fascias only where still live. Date-stamp; do not import a 2022 store list.',
    trade:
      'Idumota, Onitsha and Kano markets, patent-medicine shops, and the naira-reset pack-size fact that hits every format.',
  },
  growthDrivers: [
    {
      title: 'Open-market restock as national volume',
      desc: 'Idumota, Onitsha and Kano still feed kiosks. A banner-only brief will photograph listing and miss units.',
    },
    {
      title: 'Live-store discipline on international fascias',
      desc: 'Shoprite, Spar and other foreign names have reconfigured. A stale store file is the usual way a Nigeria retail study lies to itself.',
    },
    {
      title: 'Local organised doors with city catchments',
      desc: 'Justrite, Market Square and FoodCo are not one “Nigerian supermarket.” Catchment and ticket mix differ.',
    },
    {
      title: 'Naira-reset pack architecture',
      desc: 'Sachets and smaller counts moved at different speeds in banners versus kiosks. SKU-level work inside each format is how you see that.',
    },
  ],
  faq: [
    {
      q: 'Which retail doors should a Nigeria shopper brief name?',
      a: 'Shoprite and Spar where live, Justrite, Market Square, FoodCo, Idumota/Onitsha/Kano markets, kiosks, patent-medicine shops, and an Abuja or Port Harcourt independent cell if the claim is more than Lagos.',
    },
    {
      q: 'How is this different from FMCG companies in Nigeria?',
      a: 'That page is manufacturers (Dangote Sugar, Flour Mills, Nestlé Nigeria). This page is fascias and open markets. A mill is not a kiosk.',
    },
    {
      q: 'Can a Shoprite walk stand in for the country?',
      a: 'It is a destination listing theatre where stores remain live. Open-market kiosk volume is the national unit path for many staples.',
    },
    {
      q: 'Why are Idumota and Onitsha on a retail-companies page?',
      a: 'Because they restock the kiosks that sell the sachet. Brand-versus-competitor work that skips them will mis-attribute a coverage gap to demand.',
    },
    {
      q: 'What does BioNixus field on Nigerian retail?',
      a: 'Live-store banner audits in Lagos and Abuja, open-market carton checks in Idumota and one other named market, kiosk pack-size audits, and chemist/patent-shop adjacency on personal care.',
    },
    {
      q: 'Is the table ranked by turnover?',
      a: 'No. Doors are grouped by mission — international fascia, local organised, open market, kiosk, chemist — so the next visit is obvious.',
    },
  ],
  regulatorSource: {
    name: 'Corporate Affairs Commission / NAFDAC retail-sale rules for foods and cosmetics',
    url: 'https://www.cac.gov.ng',
    asOf: '2026-09-05',
  },
  sources: [
    'Shoprite, Spar Nigeria and local banner store-file reporting, 2024–2026',
    'NAFDAC retail-sale and labelling rules as they constrain banner and market ranging, 2024–2026',
    'Lagos, Anambra and Kano market-administration context for Idumota, Onitsha and Kano, 2024–2025',
    'BioNixus Nigeria banner, open-market and kiosk fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Live-store confirmation and SKU audits in Shoprite, Spar, Justrite, Market Square and FoodCo on a named staple and personal-care basket.',
    'Dawn carton checks in Idumota and one of Onitsha or Kano on the same SKUs, then kiosk availability in a linked neighbourhood.',
    'Pack-size notes after naira resets, split by banner versus kiosk, so a single “Nigeria SKU” story cannot hide the split.',
    'Patent-medicine shop versus grocery availability for baby and personal-care packs in Lagos and Abuja.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
