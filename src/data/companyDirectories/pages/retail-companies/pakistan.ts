import type { DirectoryPageInput } from '../../types';

export const retailCompaniesPakistan: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'pakistan',
  metaDescription:
    'Retail companies in Pakistan: Imtiaz, Metro, Carrefour Pakistan, Chase Up, Al-Fatah and Utility Stores Corporation — banners, USC, neighbourhood grocers.',
  introLead:
    'Pakistani grocery research is a thin organised crust over a kiryana country: Imtiaz, Metro, Carrefour Pakistan, Chase Up and Al-Fatah are the named banners in Karachi, Lahore and Islamabad; Utility Stores Corporation is a public staple door; neighbourhood grocers still take the weekday trip the panel files as residual.',
  introRest:
    'This page is banners and formats, not the manufacturer list that lives on FMCG-companies Pakistan. Imtiaz is the high-energy local hyper that taught urban households a destination trolley. Metro (Cash & Carry) is a membership and HORECA-adjacent mission that also leaks into household bulk buys. Carrefour Pakistan is the international fascia where it operates. Chase Up and Al-Fatah are Karachi and Lahore names with different catchments. USC stores sell administered-price staples and must be sampled as their own account type — listing temperature is not a private hyper meeting. Kiryana shops, restocked from wholesale markets such as Karachi’s Bolton and Lahore’s Akbari, still move flour, ghee, tea and sachets. Pharmacies take personal care. BioNixus fields each banner as an account and USC as a public grocery gate. Name the city and the fascia. “Retail in Pakistan” is not a design.',
  stats: [
    { value: 'Imtiaz', label: 'Local destination hyper that urban households actually name' },
    { value: 'USC', label: 'Public staple door with administered prices — its own account type' },
    { value: 'Kiryana', label: 'Neighbourhood grocer still taking the weekday flour-and-ghee trip' },
    { value: '3 cities', label: 'Karachi, Lahore and Islamabad hold most organised density' },
  ],
  channelHeading: 'Local hyper, cash-and-carry, international fascia, USC, kiryana, chemist',
  channelBody:
    'Organised grocery is a three-city conversation with thin strips in Faisalabad, Peshawar and Multan. Imtiaz is the destination trolley in Karachi and Lahore — a local hyper with aggressive promotion and a general-merchandise adjacency. Metro Cash & Carry is membership, case packs and HORECA; households use it for bulk, which contaminates a “shopper” intercept if you do not say so. Carrefour Pakistan is the international listing theatre where stores are live. Chase Up is a Karachi-rooted supermarket and general-merchandise hybrid. Al-Fatah is a Lahore name with a different shopper. USC is the public staple system: flour, sugar, ghee and selected imported lines at administered prices; treat the buyer conversation as institutional. Kiryana shops, fed by wholesale markets, take the weekday trip in every city and in every town the banners have not reached. Pharmacies take baby and personal care. Write the city, the fascia and whether USC is in scope. A Karachi Imtiaz-only sample is a destination-hyper study.',
  companies: [
    {
      name: 'Imtiaz Super Market',
      hq: 'Karachi / Lahore',
      type: 'Retailer',
      focus: 'Local destination hypermarket',
      notes: 'The banner urban households name first. Promotion energy and general-merchandise adjacency differ from Carrefour; do not merge the two hypers.',
    },
    {
      name: 'Metro Pakistan (Cash & Carry)',
      hq: 'Lahore / Karachi / Islamabad',
      type: 'MNC',
      focus: 'Membership cash-and-carry and household bulk',
      notes: 'A trade-and-bulk mission. HORECA and household tickets mix; label the intercept or the SKU role will be unreadable.',
    },
    {
      name: 'Carrefour Pakistan',
      hq: 'Selected metro sites',
      type: 'Regional',
      focus: 'International hypermarket fascia',
      notes: 'The listing theatre international teams already know. Confirm live stores; it is not Imtiaz and it is not a national coverage claim.',
    },
    {
      name: 'Chase Up',
      hq: 'Karachi',
      type: 'Retailer',
      focus: 'Karachi supermarket and general-merchandise hybrid',
      notes: 'A city banner. Pasting it onto a Lahore sample as “organised retail” hides the catchment and the ticket mix.',
    },
    {
      name: 'Al-Fatah',
      hq: 'Lahore',
      type: 'Retailer',
      focus: 'Lahore supermarket name',
      notes: 'The Punjab supermarket door that is not Imtiaz. Shopper and ranging differ; keep the fascia on the brief.',
    },
    {
      name: 'Utility Stores Corporation (USC)',
      hq: 'Islamabad / national stores',
      type: 'Government',
      focus: 'Public staple grocery at administered prices',
      notes: 'Its own account type. Listing and price are not a private hyper meeting; flour and ghee substitution stories start here.',
    },
    {
      name: 'Kiryana / neighbourhood grocers',
      hq: 'Cities and towns',
      type: 'Retailer',
      focus: 'Independent grocery weekday fill-in',
      notes: 'Flour, ghee, tea and sachets. An Imtiaz destination sample files this volume as residual and then cannot explain national units.',
    },
    {
      name: 'Karachi Bolton and Lahore Akbari wholesale markets',
      hq: 'Karachi / Lahore',
      type: 'Distributor',
      focus: 'Cash wholesale into kiryana',
      notes: 'The restock spine. A coverage gap in Orangi or in a Lahore mohalla often sits in these lanes, not in a Carrefour category review.',
    },
    {
      name: 'Pharmacy banners (Servaid, D.Watson, independents)',
      hq: 'Lahore / Islamabad / Karachi',
      type: 'Retailer',
      focus: 'Urban chemist banners taking infant and hygiene trips',
      notes: 'Accounts when the pack leaves grocery. A hyper-only personal-care study will understate chemist facings in all three metros.',
    },
    {
      name: 'Islamabad-Rawalpindi supermarket independents',
      hq: 'Islamabad / Rawalpindi',
      type: 'Retailer',
      focus: 'Capital-region grocery doors outside Carrefour and Metro',
      notes: 'A third-metro cell. Twin-city catchments differ; a Karachi Imtiaz design will not read them.',
    },
    {
      name: 'Peshawar and Quetta grocers',
      hq: 'Peshawar / Quetta',
      type: 'Retailer',
      focus: 'Western-city grocery with thinner organised density',
      notes: 'If the brief claims national, these cells exist or the claim is three-metro. Ranging and wholesale feeds differ from Punjab.',
    },
    {
      name: 'Faisalabad and Multan supermarket independents',
      hq: 'Punjab secondary cities',
      type: 'Retailer',
      focus: 'Punjab city grocery outside Lahore banners',
      notes: 'The Punjab test beyond Al-Fatah. Organised density is real and still not a Lahore clone.',
    },
    {
      name: 'Naheed and other Karachi specialty / imported grocery',
      hq: 'Karachi',
      type: 'Retailer',
      focus: 'Imported and specialty grocery',
      notes: 'A premium imported door. Use it for those SKUs; do not let it stand in for Imtiaz volume or for kiryana staples.',
    },
    {
      name: 'CSD / armed-forces grocery (where relevant)',
      hq: 'Cantonments',
      type: 'Government',
      focus: 'Cantonment grocery doors with a distinct household mix',
      notes: 'A parallel staple system in selected catchments. Exclude by design if you must; do not average it into USC or Imtiaz.',
    },
  ],
  categoryBlurbs: {
    local:
      'Imtiaz, Chase Up, Al-Fatah, kiryana, secondary-city independents and specialty imported doors: Pakistani fascias that are not a Gulf hyper export.',
    mnc:
      'Metro Cash & Carry as the international membership depot. Treat household bulk tickets as a labelled mission, not as a weekly trolley.',
    regional:
      'Carrefour Pakistan as the Gulf-international fascia where stores are live. Listing theatre, not national volume.',
    trade:
      'USC as public grocery, Bolton and Akbari wholesale, pharmacy banners, CSD where relevant, and western-city grocers.',
  },
  growthDrivers: [
    {
      title: 'Imtiaz as the local destination hyper',
      desc: 'Urban households name it. International teams that only book Carrefour will photograph the wrong trolley.',
    },
    {
      title: 'USC as a public staple gate',
      desc: 'Administered prices on flour, sugar and ghee change substitution. A private-banner-only staple study will misread the household.',
    },
    {
      title: 'Kiryana restock through wholesale markets',
      desc: 'Bolton and Akbari still feed the weekday shop. Coverage gaps are often depot stories, not demand stories.',
    },
    {
      title: 'Three-metro organised density',
      desc: 'Karachi, Lahore and Islamabad hold the banners. National claims need Punjab secondary cities or an honest metro label.',
    },
  ],
  faq: [
    {
      q: 'Which retail banners should a Pakistan shopper study include?',
      a: 'Imtiaz, Metro, Carrefour Pakistan where live, Chase Up, Al-Fatah, USC as its own account type, kiryana, wholesale markets, pharmacies, and a secondary-city cell if the claim is national.',
    },
    {
      q: 'How is this different from FMCG companies in Pakistan?',
      a: 'That page is manufacturers and trade houses. This page is fascias and USC. A mill is not a kiryana.',
    },
    {
      q: 'Is Carrefour enough for a national grocery study?',
      a: 'It is the international listing theatre where it operates. Imtiaz, USC and kiryana move more of the weekday staple story.',
    },
    {
      q: 'Why is Utility Stores Corporation on a retail-companies list?',
      a: 'Because it is a public grocery door with administered staple prices. Listing and shopper behaviour are not a private hyper meeting.',
    },
    {
      q: 'What does BioNixus field on Pakistani retail?',
      a: 'Banner-level SKU audits in Imtiaz, Metro, Carrefour, Chase Up and Al-Fatah; USC staple checks; kiryana and wholesale-market walks in Karachi and Lahore; pharmacy adjacency; and a Faisalabad or Peshawar cell when the brief claims national.',
    },
    {
      q: 'Is the table a ranking?',
      a: 'No. Names are grouped by mission — local hyper, cash-and-carry, international fascia, public staple, kiryana, chemist — so the next cell is bookable.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Commerce / provincial industries departments — commercial registration of retail establishments',
    url: 'https://www.commerce.gov.pk',
    asOf: '2026-09-05',
  },
  sources: [
    'Utility Stores Corporation staple and store-network disclosures, 2024–2026',
    'Carrefour Pakistan, Metro and Imtiaz store-footprint reporting, 2024–2025',
    'Provincial industries and local-government shop-licensing context, 2024–2025',
    'BioNixus Pakistan banner, USC and kiryana fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Facing audits in Imtiaz, Metro, Carrefour, Chase Up and Al-Fatah on a named flour, ghee and personal-care basket, with Metro intercepts labelled as bulk/HORECA-adjacent.',
    'USC store checks on administered staple prices versus the nearest Imtiaz or kiryana on the same SKU.',
    'Bolton and Akbari dawn walks plus kiryana audits in one Karachi and one Lahore mohalla.',
    'Pharmacy versus grocery availability for baby packs in Lahore and Islamabad.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
