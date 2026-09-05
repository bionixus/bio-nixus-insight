import type { DirectoryPageInput } from '../../types';

export const retailCompaniesIraq: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'iraq',
  metaDescription:
    'Retail companies in Iraq: Family Mall, Carrefour MAF Iraq, Ankawa grocers, Baghdad wholesale markets and local supermarket groups — banners versus souq.',
  introLead:
    'Iraqi grocery research is a mall-and-souq split that also splits by city: Family Mall and Carrefour MAF in Erbil and selected Baghdad sites are the organised doors international teams can walk; Ankawa neighbourhood grocers, Baghdad wholesale markets and local supermarket groups still move the weekday staple trolley.',
  introRest:
    'This page is banners, malls and markets — not a manufacturer catalogue. Organised grocery is thin and geographically specialised. Family Mall in Erbil is a destination mix of apparel and grocery, not a weekly hyper in the Gulf sense. Carrefour MAF Iraq is the international fascia where it has been able to operate; treat each city as a separate licence and security fact. Ankawa’s grocers serve a distinct Erbil catchment. Baghdad’s wholesale markets (Shorja and peers) restock neighbourhood shops that never see a mall planogram. Local supermarket groups in Baghdad, Basra and Najaf are named accounts in their cities and invisible in another. Pharmacies take personal care. BioNixus fields city first, then fascia. A study that only walks Family Mall has an Erbil mall sample, not an Iraq retail study.',
  stats: [
    { value: 'City-first', label: 'Erbil, Baghdad and Basra as separate retail systems, not one national banner set' },
    { value: 'Family Mall', label: 'Erbil destination mix — grocery plus apparel, not a Gulf weekly hyper' },
    { value: 'Shorja', label: 'Baghdad wholesale market still restocking neighbourhood shops' },
    { value: 'MAF where live', label: 'Carrefour as a city-licence fact, not a national coverage claim' },
  ],
  channelHeading: 'Mall grocery, MAF fascia, Ankawa grocer, Baghdad wholesale, local supermarket',
  channelBody:
    'Start with the city. Erbil’s organised grocery sits in Family Mall and a handful of supermarket groups; Ankawa grocers take a different household mix, including a larger imported-food share. Baghdad’s organised doors are fewer; Shorja and related wholesale markets still feed tens of neighbourhood shops that sell rice, oil, sugar and long-life dairy. Basra and Najaf have local supermarket names that do not travel. Carrefour MAF, where it is open, is a destination listing theatre with Gulf grammar and Iraqi operating constraints — security, power, and which SKUs customs will actually release. Traditional grocers and street stalls take the weekday trip in every city. Pharmacies take baby and personal care when grocery ranging is thin. Write the city, the fascia and whether the cell is mall, wholesale-fed grocer or local supermarket. “Iraq modern trade” as one row is how a Basra gap gets sold as a national win.',
  companies: [
    {
      name: 'Family Mall (Erbil)',
      hq: 'Erbil',
      type: 'Operator',
      focus: 'Destination mall with grocery and general merchandise',
      notes: 'The Erbil door international teams already know. Grocery here shares parking with apparel; label intercepts as mall mission, not weekly trolley.',
    },
    {
      name: 'Carrefour (Majid Al Futtaim) Iraq',
      hq: 'Selected cities where operating',
      type: 'Regional',
      focus: 'International hypermarket fascia under Iraqi operating constraints',
      notes: 'A city-licence fact. Confirm the live sites before you brief national coverage; a closed or delayed store is not a panel cell.',
    },
    {
      name: 'Ankawa neighbourhood grocers',
      hq: 'Erbil (Ankawa)',
      type: 'Retailer',
      focus: 'Independent grocery in a distinct Erbil catchment',
      notes: 'Imported-leaning ranging and a different household mix than Family Mall. An Erbil-only mall sample will miss this trolley.',
    },
    {
      name: 'Baghdad wholesale markets (Shorja and peers)',
      hq: 'Baghdad',
      type: 'Distributor',
      focus: 'Cash wholesale into neighbourhood grocery',
      notes: 'The restock spine for the capital’s shops. A mall-only Baghdad visit will not see the case that left Shorja at dawn.',
    },
    {
      name: 'Baghdad neighbourhood grocers',
      hq: 'Baghdad districts',
      type: 'Retailer',
      focus: 'Independent grocery fed by wholesale markets',
      notes: 'Rice, oil, sugar and long-life dairy. District mix (Karrada versus Sadr City) changes the brand set; do not average them.',
    },
    {
      name: 'Local supermarket groups — Baghdad',
      hq: 'Baghdad',
      type: 'Retailer',
      focus: 'City supermarket banners that do not travel nationally',
      notes: 'Named accounts in the capital. They are invisible in Basra; do not file them as “Iraq supermarket” on a national slide.',
    },
    {
      name: 'Local supermarket groups — Basra',
      hq: 'Basra',
      type: 'Retailer',
      focus: 'Southern city supermarket doors',
      notes: 'A second retail system. Gulf-adjacent ranging and a different wholesale feed; an Erbil mall design will fail here.',
    },
    {
      name: 'Najaf and Karbala grocery independents',
      hq: 'Najaf / Karbala',
      type: 'Retailer',
      focus: 'Pilgrimage-season and resident grocery',
      notes: 'Seasonal spikes around ziyarat. Label the fieldwork month or the SKU story will confuse pilgrimage demand with household demand.',
    },
    {
      name: 'Pharmacy independents and small banners',
      hq: 'Cities',
      type: 'Retailer',
      focus: 'Chemist missions where grocery personal-care ranging is thin',
      notes: 'Baby and OTC-adjacent packs often live here first. A mall grocery sample will understate them in every city.',
    },
    {
      name: 'Ministry of Trade / food-ration adjacency',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Public ration and selected staple distribution that still shapes demand',
      notes: 'Not a banner. Ration availability changes what the grocer needs to hold; ignore it and you will misread staple substitution.',
    },
    {
      name: 'Erbil supermarket independents (non-mall)',
      hq: 'Erbil',
      type: 'Retailer',
      focus: 'City supermarket doors outside Family Mall',
      notes: 'The weekly Erbil trolley that is not a mall intercept. If the brief is resident grocery, this cell has to exist.',
    },
    {
      name: 'Mosul reconstruction grocery',
      hq: 'Mosul',
      type: 'Retailer',
      focus: 'Reopened shops and thin organised doors',
      notes: 'A third northern system. Do not paste an Erbil mall design onto Mosul and call it Kurdistan-plus.',
    },
    {
      name: 'Labour and camp-adjacent shops',
      hq: 'Selected catchments',
      type: 'Retailer',
      focus: 'Value grocery in displacement-adjacent districts',
      notes: 'Pack sizes and brands a Family Mall sample will not show. Include or exclude by design; do not average them into a mall trolley.',
    },
    {
      name: 'Customs and port-of-entry grocery (Umm Qasr, Ibrahim Khalil)',
      hq: 'Basra / Kurdistan border',
      type: 'Operator',
      focus: 'Import release that decides which SKU the banner can actually range',
      notes: 'Not a shopper. A listed SKU that never cleared Umm Qasr or Ibrahim Khalil is a supply story, not a demand story.',
    },
  ],
  categoryBlurbs: {
    local:
      'Ankawa grocers, Baghdad and Basra supermarket groups, neighbourhood shops and pilgrimage-city independents: Iraqi doors that are not a Gulf mall export.',
    mnc:
      'International grocery arrives mainly as MAF Carrefour where it is allowed to operate. Confirm the live city before you treat it as a cell.',
    regional:
      'Family Mall as a Kurdistan destination mix and MAF as a Gulf fascia under Iraqi constraints. Neither is a national weekly shop.',
    trade:
      'Shorja and peer wholesale markets, ration adjacency, customs release, pharmacies and displacement-adjacent shops.',
  },
  growthDrivers: [
    {
      title: 'City systems, not a national banner set',
      desc: 'Erbil, Baghdad and Basra do not share a fascia map. A Family Mall study wearing an Iraq label is the usual failure mode.',
    },
    {
      title: 'Wholesale markets still feeding the capital',
      desc: 'Shorja-type markets restock neighbourhood grocery. Mall intercepts in Baghdad will not see that case movement.',
    },
    {
      title: 'MAF as a licence-and-security fact',
      desc: 'Carrefour sites open, pause or constrain ranging for reasons a UAE playbook does not list. Date-stamp the store list.',
    },
    {
      title: 'Pilgrimage and ration as demand shocks',
      desc: 'Najaf/Karbala seasons and ration availability rewrite staple substitution. Fieldwork month is part of the design.',
    },
  ],
  faq: [
    {
      q: 'Which retail doors should an Iraq shopper brief name?',
      a: 'Family Mall and Erbil non-mall grocers, Carrefour MAF only where live, Ankawa shops, Baghdad wholesale markets and neighbourhood grocers, Basra supermarket groups, pharmacies, and a pilgrimage-city cell if the SKU is a staple.',
    },
    {
      q: 'Is Family Mall enough for a national Iraq study?',
      a: 'No. It is an Erbil mall mission. Baghdad wholesale-fed grocery and Basra supermarket groups are different systems.',
    },
    {
      q: 'Why is Shorja on a retail-companies page?',
      a: 'Because in Baghdad the wholesale market still decides whether a neighbourhood shop has the case. Brand-versus-competitor work that skips it will mis-attribute a coverage gap.',
    },
    {
      q: 'Can we copy a UAE or Jordan banner design onto Iraq?',
      a: 'No. Organised density is thinner, city systems do not share fascias, and customs plus security change what can be ranged this month.',
    },
    {
      q: 'What does BioNixus field on Iraqi retail?',
      a: 'City-first fascia and grocer audits in Erbil and Baghdad, a Shorja restock walk, a Basra supermarket cell when the brief claims south, and pharmacy adjacency on personal care.',
    },
    {
      q: 'Is the table ranked?',
      a: 'No. Doors are grouped by city and mission so the next flight and the next market walk are obvious.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Trade — company registration and selected food-retail and ration rules',
    url: 'https://www.mot.gov.iq',
    asOf: '2026-09-05',
  },
  sources: [
    'Ministry of Trade registration and ration-related circulars, 2024–2026',
    'MAF and Family Mall operating disclosures where published, 2024–2025',
    'Customs and chamber reporting on Umm Qasr and Ibrahim Khalil grocery inflows, 2024–2025',
    'BioNixus Iraq banner, wholesale-market and grocer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Erbil split: Family Mall grocery intercept labelled as mall mission versus Ankawa and non-mall supermarket walks on the same basket.',
    'Baghdad Shorja dawn walk plus neighbourhood-grocer audits in two districts with different income mixes.',
    'Live-store confirmation for Carrefour MAF before any “international hyper” cell is opened.',
    'Pharmacy versus grocery availability for baby packs in Erbil and Baghdad, where grocery personal-care ranging is thin.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
