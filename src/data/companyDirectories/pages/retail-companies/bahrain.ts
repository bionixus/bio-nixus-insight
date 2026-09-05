import type { DirectoryPageInput } from '../../types';

export const retailCompaniesBahrain: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'bahrain',
  metaDescription:
    'Retail companies in Bahrain: Lulu, Carrefour, Al Jazira supermarket, Mega Mart, Seef mall grocery, pharmacies and grocers — island banners, causeway leak.',
  introLead:
    'Bahraini grocery is an island of named banners sitting next to a causeway: Lulu and Carrefour take the destination trolley, Al Jazira and Mega Mart take the weekly neighbourhood trip, Seef’s mall grocery is a Saturday mission, and the household that prices a pack in Sitra can be in a Khobar hypermarket before lunch.',
  introRest:
    'This page is a banner directory, not a manufacturer list. The Ministry of Industry and Commerce licences the trade through Sijilat; that is the establishment gate, not a shopper fact. Pharmacies — Ibn Sina, Al Jishi and independents — take personal-care and baby missions that grocery-only samples file under “other.” Traditional grocers in Muharraq, Riffa and Isa Town still fill the week between banner trips. Because the King Fahd Causeway is a commuting habit, official Bahraini planograms compete with Saudi Panda and Lulu stores on the same dairy SKU. BioNixus fields each banner as an account and treats the causeway as a leak, not a tourist footnote. Name the format and whether the catchment is island-only or causeway-exposed. “Retail in Bahrain” is not a sample frame.',
  stats: [
    { value: 'Island', label: 'Catchment small enough that two hypers already share most destination trips' },
    { value: 'Causeway', label: 'Saudi hypermarkets inside a Saturday drive — a leak, not a novelty' },
    { value: 'Al Jazira + Mega Mart', label: 'Neighbourhood supermarket names that are not Lulu clones' },
    { value: 'Sijilat', label: 'Ministry of Industry and Commerce licence the banner sits on' },
  ],
  channelHeading: 'Destination hyper, neighbourhood supermarket, mall grocery, grocer, chemist',
  channelBody:
    'Five missions sit on one island. Lulu is the volume hypermarket with a Gulf basket. Carrefour (Majid Al Futtaim) is the destination hyper with a different promotion logic. Al Jazira supermarket is a Bahraini neighbourhood name; Mega Mart is the value-and-general-merchandise hybrid households still use for a mid-week top-up. Seef Mall and similar mall grocery is a Saturday trip that mixes apparel parking with a trolley — do not treat a Seef intercept as a weekly shop. Traditional grocers in Muharraq and Riffa take rice, water and fill-in dairy. Pharmacies take baby and personal care. The causeway adds a sixth mission: a Khobar or Dammam hypermarket that looks cheaper on the same SKU, after which the island banner has to win the household back on freshness or on a pharmacy stop. Listing conversations at Lulu and Carrefour are Gulf category meetings; Al Jazira and Mega Mart are local buyer meetings. Write the banner and the catchment. A Seef-only sample is a mall study wearing a country label.',
  companies: [
    {
      name: 'Lulu Hypermarket Bahrain',
      hq: 'Manama / Sitra',
      type: 'Regional',
      focus: 'Volume hypermarket with a Gulf basket',
      notes: 'The island’s volume destination. Still not Al Jazira and still not a Khobar Lulu — price-check the causeway before you call the facing national.',
    },
    {
      name: 'Carrefour (Majid Al Futtaim) Bahrain',
      hq: 'Seef / Bahrain City Centre',
      type: 'Regional',
      focus: 'Destination hypermarket and supermarket',
      notes: 'MAF operating system. Promotion weeks and imported ranging differ from Lulu; merge the two hypers and the planogram will fit neither.',
    },
    {
      name: 'Al Jazira supermarket',
      hq: 'Manama',
      type: 'Retailer',
      focus: 'Bahraini neighbourhood supermarket',
      notes: 'The local weekly name international teams underweight. Ranging is island household, not Gulf tourist, and the buyer is not a MAF category manager.',
    },
    {
      name: 'Mega Mart Bahrain',
      hq: 'Multiple island sites',
      type: 'Retailer',
      focus: 'Value supermarket and general-merchandise hybrid',
      notes: 'Mid-week top-up and value packs. A Carrefour destination sample will misread this basket and this price architecture.',
    },
    {
      name: 'Seef Mall grocery catchments',
      hq: 'Seef',
      type: 'Operator',
      focus: 'Mall-adjacent grocery and Saturday mixed missions',
      notes: 'A place more than a banner. Intercepts here mix apparel trips with trolleys; say so in the design or the SKU story will wobble.',
    },
    {
      name: 'Ibn Sina Pharmacy and Al Jishi',
      hq: 'Manama',
      type: 'Retailer',
      focus: 'Chemist banners for personal care, baby and OTC',
      notes: 'Pharmacy missions that grocery-only samples miss. P&G and Unilever packs already live here; a Lulu-only personal-care study will understate them.',
    },
    {
      name: 'Traditional grocers (Muharraq, Riffa, Isa Town)',
      hq: 'Neighbourhoods',
      type: 'Retailer',
      focus: 'Independent grocery fill-in',
      notes: 'Rice, water and weekday dairy. A Seef-and-Sitra banner sample files them under “other” and then wonders where the volume went.',
    },
    {
      name: 'Ministry of Industry and Commerce (Sijilat)',
      hq: 'Manama',
      type: 'Government',
      focus: 'Trade licensing for retail establishments',
      notes: 'The licence gate, not a shopper. A banner without a current Sijilat record is not a legal listing door, however busy the car park looks.',
    },
    {
      name: 'Bahrain City Centre grocery',
      hq: 'Juffair / city centre',
      type: 'Operator',
      focus: 'Mall grocery and expat-heavy catchment',
      notes: 'Another mall mission. Juffair ranging is not Riffa grocer ranging; split the intercept or label the study coastal-expat.',
    },
    {
      name: 'Geant / other international hypers (where present)',
      hq: 'Selected sites',
      type: 'MNC',
      focus: 'International hyper comparison',
      notes: 'A comparison set, not the weekly island shop. Use it when the brief needs an international control, not as the national sample.',
    },
    {
      name: 'Labour-camp and Sitra industrial grocers',
      hq: 'Sitra / industrial belt',
      type: 'Retailer',
      focus: 'Value grocery for labour catchments',
      notes: 'Pack sizes and brands a Seef Carrefour will not show. If the SKU is a staple sachet, this is a cell, not a footnote.',
    },
    {
      name: 'Independent pharmacies (non-banner)',
      hq: 'Island-wide',
      type: 'Retailer',
      focus: 'Neighbourhood chemist fill-in',
      notes: 'The chemist equivalent of the grocer. Banner pharmacy samples in Seef will miss the Muharraq independent that still sells the baby pack.',
    },
    {
      name: 'Causeway-exposed households (shopper cell)',
      hq: 'Island / Eastern Province',
      type: 'Operator',
      focus: 'Households that split trolleys between Bahrain and Khobar',
      notes: 'Not a banner — a leak. Any island grocery study that ignores this cell will overstate Bahraini facing loyalty on comparable SKUs.',
    },
    {
      name: 'Waitrose / premium imported (if still trading)',
      hq: 'Selected catchments',
      type: 'MNC',
      focus: 'Premium imported supermarket ranging',
      notes: 'A thin premium door. Use it for imported SKUs; do not let it stand in for Al Jazira’s weekly Bahraini trolley.',
    },
  ],
  categoryBlurbs: {
    local:
      'Al Jazira, Mega Mart, traditional grocers, island pharmacies and Sitra industrial shops: Bahraini doors that are not Gulf hypermarket exports.',
    mnc:
      'Geant and premium imported formats where they still trade. Comparison set, not the weekly island shop.',
    regional:
      'Lulu and MAF Carrefour as Gulf operating systems. Same format word, different basket — and both leak volume across the causeway.',
    trade:
      'Sijilat licensing, Seef and City Centre mall missions, labour-camp grocers and the causeway household as a designed cell.',
  },
  growthDrivers: [
    {
      title: 'Causeway price checks on the same SKU',
      desc: 'Households compare Khobar and Sitra on one Saturday. An island-only facing study will invent loyalty that the household already spent in Dammam.',
    },
    {
      title: 'Al Jazira and Mega Mart as non-hyper missions',
      desc: 'Neighbourhood and value trips are not Lulu. Merge them into “modern trade” and the recommended planogram will exist in none of the stores.',
    },
    {
      title: 'Mall grocery as a contaminated intercept',
      desc: 'Seef and City Centre mix apparel parking with trolleys. Say so, or your shopper is a tourist-and-Saturday hybrid.',
    },
    {
      title: 'Chemist banners taking personal care',
      desc: 'Ibn Sina, Al Jishi and independents take baby and OTC-adjacent packs. Grocery-only samples understate those SKUs on a small island.',
    },
  ],
  faq: [
    {
      q: 'Which retail banners should a Bahrain shopper study name?',
      a: 'Lulu, Carrefour/MAF, Al Jazira, Mega Mart, Seef and City Centre mall grocery as a separate mission, pharmacies, traditional grocers and a causeway-exposed household cell.',
    },
    {
      q: 'Is Bahrain just a smaller UAE for grocery research?',
      a: 'No. The catchment is an island with a Saudi leak. Copied Dubai banner lists miss Al Jazira, Mega Mart and the causeway household.',
    },
    {
      q: 'Do pharmacies belong on a Bahrain grocery map?',
      a: 'Yes, when the pack is baby, skin or pharmacy-adjacent — Al Jazira Pharmacy and its peers are listing theatres, not a leftover “other outlets” bucket.',
    },
    {
      q: 'Can a GCC retail panel replace island fieldwork?',
      a: 'It can size what it sees in Lulu and Carrefour. It will not tell you Al Jazira versus Mega Mart, or whether the facing died because the household bought in Khobar.',
    },
    {
      q: 'What must the brief name besides “Bahrain retail”?',
      a: 'Banner, format and whether the catchment is causeway-exposed. “Shopper in Bahrain” is not a design.',
    },
    {
      q: 'Is this directory a ranking of Bahraini retailers?',
      a: 'No. Banners are grouped by mission — destination hyper, neighbourhood, mall, grocer, chemist, leak — so the next cell is bookable.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Industry and Commerce — Sijilat commercial licences for retail establishments',
    url: 'https://www.moic.gov.bh',
    asOf: '2026-09-05',
  },
  sources: [
    'Ministry of Industry and Commerce Sijilat licensing guidance, 2024–2026',
    'MAF, Lulu and local banner store-footprint disclosures, 2024–2025',
    'Customs Affairs and causeway traffic context for cross-border grocery trips, 2024–2025',
    'BioNixus Bahrain banner, grocer and pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Banner-level SKU audits in Lulu, Carrefour, Al Jazira and Mega Mart on a named dairy and personal-care basket, plus a Seef mall intercept labelled as mall mission.',
    'Causeway-exposed household interviews on which facing they last bought in Khobar versus Sitra on the same SKU.',
    'Pharmacy versus grocery availability checks for baby and personal-care packs at Ibn Sina, Al Jishi and one independent.',
    'Muharraq and Riffa grocer walks to catch fill-in staples a Sitra hyper sample never sees.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
