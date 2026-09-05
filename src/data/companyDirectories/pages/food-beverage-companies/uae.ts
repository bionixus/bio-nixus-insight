import type { DirectoryPageInput } from '../../types';

export const foodBeverageCompaniesUae: DirectoryPageInput = {
  entity: 'food-beverage-companies',
  countrySlug: 'uae',
  metaDescription:
    'UAE food-and-beverage manufacturers: Agthia, Al Ain Farms, Al Rawabi, IFFCO, Mai Dubai, Americana, Unilever Food Solutions, ADAFSA and Dubai Municipality halls.',
  introLead:
    'Food manufacture in the UAE is an emirate-by-emirate licensing story sitting under federal policy: Abu Dhabi’s Agriculture and Food Safety Authority inspects Al Ain water and dairy halls, Dubai Municipality’s Food Safety Department inspects Jebel Ali sugar, oils and HORECA commissaries, and a chef in Downtown still writes specifications that never appear on a Carrefour planogram.',
  introRest:
    'Agthia’s Grand Mills and Al Ain Water, Al Ain Farms’ fresh dairy, Al Rawabi’s Dubai milk, IFFCO’s Sharjah oils and bakery fats, Mai Dubai’s bottling halls and Al Ghurair’s staple mills are the plants BioNixus walks when a brief asks who actually bottles, mills or fries inside the country. Americana and Al Islami pack freezer protein for kitchens as well as freezers. Unilever Food Solutions runs a professional culinary book from Dubai that is a different company, commercially, from household home care. Nestlé’s regional hub sells both retail and chef ranges. This directory stays on those halls and on ADAFSA, Dubai Municipality and the federal health and climate desks that write the rules. Detergents, nappies and pharmacy-adjacent personal care stay on the FMCG spoke. Re-export through Jebel Ali is flagged so a dashboard does not treat a re-packed oil tote as Emirati consumption.',
  stats: [
    { value: '2019', label: 'Year ADAFSA succeeded the Abu Dhabi Food Control Authority as the emirate food-safety body' },
    { value: 'ADX-listed', label: 'Agthia reports water, flour, tomato and protein manufacture as a listed industrial group' },
    { value: 'Two inspectors', label: 'Abu Dhabi ADAFSA versus Dubai Municipality Food Safety — halls do not face one federal factory desk' },
    { value: 'Jebel Ali', label: 'Industrial-food and re-export cluster where IFFCO, Al Khaleej Sugar and Al Ghurair volumes can leave the country' },
  ],
  channelHeading: 'Emirate licences, then kitchens, then banners',
  channelBody:
    'A hall in Al Ain answers to ADAFSA’s food-safety and farm rules, including handler training under the Essential Food Safety Training scheme. A hall in Dubai Industrial City or Jebel Ali answers to Dubai Municipality’s Food Safety Department for establishment permits, vehicle permits and inspection scores. Sharjah, Ajman and the northern emirates add their own municipal inspectors. Federal ministries (health, climate change and environment, industry) write policy and standards; they do not replace the emirate inspector who walks the floor. Once the hall is legal, volume leaves in three directions. Fresh milk and laban from Al Rawabi and Al Ain Farms travel a short cold chain into Union Coop, Spinneys and neighbourhood grocers — a different job from Almarai long-life that arrives already ambient. Water from Mai Dubai, Agthia and Masafi fights in coolers, fountain contracts and labour-camp catchments. Oils, flour, sugar and bakery fats from IFFCO, Al Ghurair and Al Khaleej Sugar leave mill doors toward industrial bakeries and hotel commissaries as often as they leave toward a household bay. Unilever Food Solutions and Nestlé professional ranges sell chef specifications, pack sizes and training that a household Nielsen cell will never see. BioNixus therefore names the emirate, the inspector and the kitchen or banner before it writes a questionnaire.',
  companies: [
    {
      name: 'Agthia Group',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Water, flour, tomato, dates and protein brands',
      notes: 'ADX-listed manufacturer behind Al Ain Water and Grand Mills; the plant map, not the grocery aisle, is why brand teams put it first.',
    },
    {
      name: 'Al Ain Farms',
      hq: 'Al Ain',
      type: 'Local',
      focus: 'Fresh dairy, juice and farm-gate protein',
      notes: 'Oasis dairy that still contests Al Rawabi on fresh milk and sells into Abu Dhabi hotel breakfast specs ADAFSA already knows.',
    },
    {
      name: 'Al Rawabi Dairy',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Fresh milk, laban and juice',
      notes: 'Dubai fresh-milk hall whose short-life fridge job is not interchangeable with ambient Almarai cartons.',
    },
    {
      name: 'IFFCO',
      hq: 'Sharjah',
      type: 'Local',
      focus: 'Oils, fats, bakery ingredients and packaged foods',
      notes: 'Sharjah industrial-food group whose mill-door fats feed bakeries and HORECA fryers across the northern emirates.',
    },
    {
      name: 'Al Ghurair Foods',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Flour, rice, oils and sugar milling',
      notes: 'Family mills that industrial bakers and traditional grocers still quote by brand when they specify staple packs.',
    },
    {
      name: 'Mai Dubai',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Bottled water and cooler contracts',
      notes: 'DEWA-linked bottling halls that fight Agthia and Masafi in grocery coolers and in food-service fountain bids.',
    },
    {
      name: 'Masafi',
      hq: 'Fujairah',
      type: 'Local',
      focus: 'Spring water and juices',
      notes: 'Fujairah bottler that remains the named alternative when a brief is water plants, not a sparkling-brand office.',
    },
    {
      name: 'Unikai Foods',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Dairy, juice and ice cream manufacture',
      notes: 'Listed Dubai dairy-and-ice-cream hall that still appears on food-service dessert specs as well as retail freezers.',
    },
    {
      name: 'Al Islami Foods',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Frozen halal protein and further-processed meats',
      notes: 'Freezer manufacturer whose hotel and airline specs are the reason it belongs on a plant list rather than a detergent list.',
    },
    {
      name: 'Al Khaleej Sugar',
      hq: 'Jebel Ali',
      type: 'Local',
      focus: 'Cane-sugar refining for industrial and retail packs',
      notes: 'Jebel Ali refinery whose industrial totes can leave as re-export; account-level work has to separate UAE melt from transit.',
    },
    {
      name: 'Americana',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Kitchen brands, frozen and canned manufacture',
      notes: 'Regional group whose UAE packing and QSR commissaries sit beside grocery listings; treat the hall as the unit, not the restaurant logo.',
    },
    {
      name: 'Unilever Food Solutions UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Professional culinary, sauces and chef training',
      notes: 'Dubai hub for hotel and catering specifications. Household laundry and personal care are out of scope on this page.',
    },
    {
      name: 'Nestlé Middle East',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Coffee, confectionery, water and professional culinary',
      notes: 'Regional hub that sells both retail and chef ranges; the professional pack is a different buyer from the household jar.',
    },
    {
      name: 'Dubai Refreshments (Pepsi bottler)',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Pepsi-system bottling and fountain',
      notes: 'Listed bottler whose fountain and cooler contracts are the factory story, not a brand-awareness slide.',
    },
    {
      name: 'Coca-Cola Al Ahlia Beverages',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Sparkling and still bottling',
      notes: 'Bottling halls that contest Mai Dubai and Agthia on still water and contest Dubai Refreshments on fountain.',
    },
    {
      name: 'Almarai',
      hq: 'Saudi Arabia',
      type: 'Regional',
      focus: 'Ambient dairy, juice, bakery and poultry into UAE',
      notes: 'Long-life import that sits next to Al Rawabi without doing the same fridge job; do not average them into one dairy cell.',
    },
    {
      name: 'Abu Dhabi Agriculture and Food Safety Authority (ADAFSA)',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Farm-to-fork inspection, handler training, food-security policy in Abu Dhabi',
      notes: 'Successor to ADFCA. Al Ain halls live or die on its scores; a Dubai Municipality certificate does not travel automatically.',
    },
    {
      name: 'Dubai Municipality — Food Safety Department',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Establishment permits, vehicle permits and inspection of Dubai halls',
      notes: 'The inspector Jebel Ali sugar, oils and HORECA commissaries actually see. Federal MOHAP policy does not replace this desk.',
    },
  ],
  categoryBlurbs: {
    local:
      'Abu Dhabi water and flour, Dubai fresh dairy, Sharjah oils and Fujairah springs. These halls own the industrial pantry and the short-life fridge; they are not “small locals” around a multinational hub.',
    mnc:
      'Nestlé, Coca-Cola bottling and Unilever Food Solutions run Dubai as a professional and retail hub. The brief we take is which hall and which chef pack, not whether a regional office exists in Media City.',
    regional:
      'Americana and Almarai import Gulf brand systems. One packs kitchens; the other mostly arrives ambient. They are not one “GCC dairy and QSR” row.',
    trade:
      'ADAFSA in Abu Dhabi and Dubai Municipality Food Safety in Dubai, plus mill-door bakery and hotel commissary buyers. MAF Carrefour still lists, but a plant study that only interviews a hypermarket buyer has skipped the inspector and the chef.',
  },
  growthDrivers: [
    {
      title: 'Split inspectors, not one federal factory licence',
      desc: 'ADAFSA and Dubai Municipality keep separate establishment files. A launch that clears Al Ain can still stall in Jebel Ali. Design timelines around the emirate that holds the hall.',
    },
    {
      title: 'Fresh milk versus ambient cartons',
      desc: 'Al Rawabi and Al Ain Farms sell a short-life job. Almarai sells a pantry job. Averaging them into “UAE dairy share” hides the occasion the client is actually trying to win.',
    },
    {
      title: 'Water plants as branded industrial assets',
      desc: 'Mai Dubai, Agthia and Masafi fight on bottling capacity, cooler contracts and labour-camp catchments. A sparkling-brand awareness number will not tell you who won the five-gallon.',
    },
    {
      title: 'Industrial fats and sugar behind the brand',
      desc: 'IFFCO, Al Ghurair and Al Khaleej Sugar sell to bakeries and HORECA first. Re-export through Jebel Ali can inflate a “UAE” tonne that never reached an Emirati kitchen.',
    },
    {
      title: 'Chef specifications as a separate book',
      desc: 'Unilever Food Solutions and Nestlé professional ranges live on hotel and catering contracts. Folding them into a household Unilever or Nestlé FMCG study will mis-attribute the volume.',
    },
  ],
  sections: [
    {
      heading: 'HORECA commissaries versus grocery coolers',
      paragraphs: [
        'Dubai’s hotel and airline kitchens buy water, dairy, frozen protein and culinary fats on contracts that name a plant, a halal certificate and a delivery window. Those contracts do not show up in a modern-trade panel the way a 330 ml can does. BioNixus splits the sample: one cell for cooler and banner execution, one cell for receiving-bay specifications. A brief that says “food in the UAE” without that split will recommend a pack the chef cannot use and a chef pack the grocer will not face.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who manufactures food and beverages inside the UAE, as opposed to who merely lists in grocery?',
      a: 'Agthia, Al Ain Farms, Al Rawabi, IFFCO, Al Ghurair, Mai Dubai, Masafi, Unikai, Al Islami, Al Khaleej Sugar and Dubai Refreshments run halls. Americana and Nestlé add packing or professional ranges. Almarai is mostly an incoming ambient book. ADAFSA and Dubai Municipality inspect those halls.',
    },
    {
      q: 'Is food-safety approval federal in the UAE?',
      a: 'Policy and standards are federal. Establishment inspection is emirate-level. Abu Dhabi halls file with ADAFSA; Dubai halls file with the Municipality Food Safety Department. Do not promise a client that one certificate covers both.',
    },
    {
      q: 'Why is Unilever Food Solutions on this list when Unilever is also an FMCG name?',
      a: 'Because the professional culinary book sells to chefs, not to household laundry shoppers. This page keeps Food Solutions and drops home care. The FMCG directory is where detergents belong.',
    },
    {
      q: 'How should a brief treat Jebel Ali volumes?',
      a: 'Ask whether the tonne was melted, bottled or packed for UAE kitchens or whether it left as re-export. Al Khaleej Sugar and some IFFCO and Al Ghurair flows mix the two unless the study tags the destination.',
    },
    {
      q: 'What does BioNixus actually field among UAE food manufacturers?',
      a: 'Hall walks in Al Ain, Dubai Industrial City, Sharjah and Jebel Ali; chef and commissary interviews in Downtown, Abu Dhabi and the northern emirates; and cooler audits that separate Mai Dubai, Agthia and Masafi by catchment rather than by national average.',
    },
    {
      q: 'Does the sequence of companies here rank UAE food manufacturers by sales?',
      a: 'It does not. Rows are a map of halls, bottlers and the two inspectors we keep meeting. Rank is not implied by position on the table.',
    },
  ],
  regulatorSource: {
    name: 'Abu Dhabi Agriculture and Food Safety Authority (ADAFSA) — food safety, farm inspection and handler training (successor to ADFCA)',
    url: 'https://www.adafsa.gov.ae',
    asOf: '2026-09-05',
  },
  sources: [
    'Abu Dhabi Agriculture and Food Safety Authority, food-safety and Essential Food Safety Training pages, consulted 2026',
    'Dubai Municipality Food Safety Department establishment-permit guidance; UAE Ministry of Health and Prevention (MOHAP) federal health-policy pages',
    'Agthia and Unikai exchange disclosures; company plant descriptions for IFFCO, Al Ghurair Foods, Mai Dubai and Al Khaleej Sugar',
    'BioNixus UAE plant, commissary and cooler fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Al Ain Water and Al Ain Farms floor walks timed against ADAFSA inspection scores, then compared with what Abu Dhabi hotel receiving bays actually accept.',
    'Dubai Municipality permit checks at Jebel Ali sugar and Sharjah oil halls, tagging which totes stay in-country and which leave as re-export.',
    'Chef-specification interviews with Unilever Food Solutions and Nestlé professional buyers in Downtown and Abu Dhabi hotels, kept separate from household range work.',
    'Cooler and five-gallon audits in labour-camp and Union Coop catchments that score Mai Dubai, Agthia and Masafi as plants, not as sparkling-brand proxies.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
