import type { DirectoryPageInput } from '../../types';

export const manufacturingCompaniesTurkey: DirectoryPageInput = {
  entity: 'manufacturing-companies',
  countrySlug: 'turkey',
  metaDescription:
    'Turkey manufacturers: Erdemir, Tüpraş, Şişecam, Arçelik, Ford Otosan — Ministry of Industry licences, Marmara and Iskenderun plants.',
  introLead:
    'A coil leaving Erdemir and a white-good leaving Arçelik do not share a buying centre: the Ministry of Industry and Technology stamps both halls, but the offtaker is an auto OEM or a contractor in one case and a retailer in the other.',
  introRest:
    'Erdemir (OYAK) is the first steel name BioNixus hears from Turkish and export buyers who want a coil rather than an import invoice. Tüpraş takes refining — a plant tour that a white-good questionnaire will not explain. Şişecam takes glass. Arçelik takes appliances. Ford Otosan takes vehicles and is the OEM offtaker many tier-one halls already live for. The Ministry of Industry and Technology is the licence desk. This directory maps those plants and the ministry. It is not a list of every KOSGEB workshop on the Gebze fence.',
  stats: [
    { value: 'MoIT licence', label: 'Ministry of Industry and Technology industrial stamp that still sits in front of a legal hall' },
    { value: 'Erdemir coil', label: 'OYAK steel conversation contractors and OEMs still start with on long and flat' },
    { value: 'Marmara / Iskenderun', label: 'Two heavy-industry theatres a principal must name before sampling a single “Turkey plant”' },
    { value: 'Ford Otosan offtake', label: 'OEM that many Marmara tier-one halls already treat as the first buyer, not as a peer manufacturer' },
  ],
  channelHeading: 'How a Ministry of Industry licence becomes a coil, a glass tonne or a vehicle',
  channelBody:
    'A plant’s industrial registration sits with the Ministry of Industry and Technology. Organised industrial zones (OSBs) add a landlord stamp. Those papers do not replace each other. Feedstock then splits. Erdemir takes iron units and scrap on the Black Sea and Iskenderun belts. Tüpraş takes crude at Izmit, Izmir and Kırıkkale. Şişecam takes silica and energy. Arçelik takes steel, plastics and components. Ford Otosan takes parts from a Marmara supplier park and sells vehicles. Offtake is a named buyer — an OEM, a contractor, a fuel wholesaler, a retailer, or an export vessel at Gebze, Gemlik or Iskenderun. Customs sits with the trade ministry at those gates. BioNixus therefore designs a Turkey manufacturing study around the ministry stamp, the named belt and the offtaker, not around a single “industry share” cell.',
  companies: [
    {
      name: 'Erdemir (OYAK)',
      hq: 'Zonguldak / Iskenderun belt',
      type: 'Local',
      focus: 'Flat and long steel',
      notes: 'The coil conversation OEMs and contractors still start with; an Arçelik white-good tour is a different hall.',
    },
    {
      name: 'Tüpraş',
      hq: 'Kocaeli / Izmir / Kırıkkale',
      type: 'Local',
      focus: 'Refining and selected downstream fuels',
      notes: 'The refinery tour; a glass or appliance questionnaire will mis-read every unit.',
    },
    {
      name: 'Şişecam',
      hq: 'Istanbul / multiple plants',
      type: 'Local',
      focus: 'Glass, chemicals-adjacent and industrial materials',
      notes: 'Glass book auto and construction offtakers already know; keep it off the Erdemir discussion guide.',
    },
    {
      name: 'Arçelik',
      hq: 'Istanbul / Marmara plants',
      type: 'Local',
      focus: 'White goods and selected electronics',
      notes: 'Retailer-facing appliance hall; Ford Otosan is not the offtaker on this white-good line.',
    },
    {
      name: 'Ford Otosan',
      hq: 'Kocaeli / Eskişehir / Yeniköy',
      type: 'Local',
      focus: 'Light commercial and passenger vehicles',
      notes: 'OEM that Marmara tier-ones already live for; treat it as offtaker and manufacturer, two seats.',
    },
    {
      name: 'Ministry of Industry and Technology',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Industrial registration, incentives and OSB overlay',
      notes: 'The stamp a legal hall cannot skip; an OSB landlord letter does not replace it.',
    },
    {
      name: 'İsdemir (Iskenderun Erdemir affiliate)',
      hq: 'Iskenderun',
      type: 'Local',
      focus: 'Southern steel capacity in the OYAK family',
      notes: 'Southern OYAK steel theatre; a Zonguldak-only mill sample will under-cover this Iskenderun belt.',
    },
    {
      name: 'TOFAŞ / other Marmara OEMs',
      hq: 'Bursa',
      type: 'Local',
      focus: 'Vehicle assembly and supplier-park offtake',
      notes: 'Second Marmara OEM a tier-one brief should name beside Ford Otosan on the same park map.',
    },
    {
      name: 'Marmara OSB tenant tail',
      hq: 'Gebze / Bursa / Kocaeli',
      type: 'Local',
      focus: 'Tier-one and converter halls',
      notes: 'The long tail an Erdemir-only study will miss; sample when the brief is the supplier park.',
    },
    {
      name: 'Petkim / selected petrochemicals',
      hq: 'Aliaga',
      type: 'Local',
      focus: 'Petrochemicals sitting beside Tüpraş’s western system',
      notes: 'Molecule book a refining-only tour will under-read; useful when the brief is polymers.',
    },
    {
      name: 'Bosch / selected MNC Marmara halls',
      hq: 'Bursa / Kocaeli',
      type: 'MNC',
      focus: 'Auto and industrial components',
      notes: 'Foreign hall that already lives for OEM offtake; useful as a third plant beside Ford Otosan and TOFAŞ.',
    },
    {
      name: 'Organised industrial zone authorities (selected OSBs)',
      hq: 'Marmara / Anatolia',
      type: 'Government',
      focus: 'Zone landlord stamps sitting beside MoIT licences',
      notes: 'Second paper on most halls; a ministry stamp without the OSB letter is a fieldwork warning on zone plots.',
    },
    {
      name: 'Gebze and Iskenderun export communities',
      hq: 'Kocaeli / Hatay',
      type: 'Operator',
      focus: 'Vessel and Ro-Ro conversation for steel, vehicles and glass',
      notes: 'The berth an Ankara HQ interview will not see; name the gate before claiming export offtake.',
    },
    {
      name: 'KOSGEB-adjacent mid-size manufacturers',
      hq: 'Multiple cities',
      type: 'Local',
      focus: 'SME halls that fill the converter tail',
      notes: 'Useful when the brief is density rather than a named champion; skip on a Tüpraş-only fuels study.',
    },
  ],
  categoryBlurbs: {
    local:
      'Erdemir, Tüpraş, Şişecam, Arçelik, Ford Otosan, İsdemir and the OSB tail — Turkish halls that still own coil, fuels, glass, appliances and vehicles.',
    mnc:
      'Bosch and other Marmara foreign halls. They are often offtakers’ suppliers, not a replacement for Erdemir on the coil conversation.',
    regional:
      'European OEMs and retailers buy Turkish tonnes and goods. Treat them as buyers sitting outside the mill gate.',
    trade:
      'Ministry of Industry as the licence desk, OSB authorities as landlords, plus Gebze and Iskenderun as export gates.',
  },
  growthDrivers: [
    {
      title: 'Two steel theatres',
      desc: 'Zonguldak-belt Erdemir and Iskenderun İsdemir do not share a quay. A single “Turkish steel” sample will invent a geography buyers do not use.',
    },
    {
      title: 'OEM supplier parks as a second map',
      desc: 'Ford Otosan and TOFAŞ already set the calendar for many Marmara halls. A champion-only slide will miss those offtakers.',
    },
    {
      title: 'Refining versus white goods',
      desc: 'Tüpraş and Arçelik do not share a process. Mixing those tours invents a single “Turkish industry” buyer.',
    },
    {
      title: 'OSB stamp beside the ministry licence',
      desc: 'Zone plots need both papers. Soft openings slip on the OSB letter as often as on the ministry file.',
    },
  ],
  sections: [
    {
      heading: 'Coil mill versus OEM park',
      paragraphs: [
        'Erdemir sells coil. Ford Otosan buys parts and sells vehicles. Arçelik sells to retailers. Tüpraş sells fuels. Do not run those four tours as one questionnaire. A blended “Turkey manufacturing quality” score will not survive a procurement review at an OEM or a fuel wholesaler.',
        'Iskenderun and Marmara are different export systems. Naming “the port” without the gate is how a brief invents an offtake path the mill does not use.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences industrial plants in Turkey?',
      a: 'The Ministry of Industry and Technology issues the industrial registration. Organised industrial zones add a landlord stamp. Customs sits at the export gate.',
    },
    {
      q: 'Is İsdemir separate from Erdemir?',
      a: 'İsdemir is the southern OYAK steel theatre. Walk it when the offtaker is Iskenderun-adjacent. A Zonguldak-only tour will under-cover that belt.',
    },
    {
      q: 'Which plants should an auto-supplier brief tour first?',
      a: 'Ford Otosan and TOFAŞ as OEM offtakers, then the Marmara OSB tail and Bosch-type halls. Add Erdemir if coil is in scope. Skip Tüpraş.',
    },
    {
      q: 'Which plants should a materials brief tour first?',
      a: 'Erdemir / İsdemir for steel, Şişecam for glass, Tüpraş if fuels are in scope. Skip Arçelik unless appliances are in scope.',
    },
    {
      q: 'How does BioNixus research Turkish manufacturers?',
      a: 'Erdemir and İsdemir mill tours; Ford Otosan supplier-park interviews; Arçelik and Şişecam hall walks; and MoIT versus OSB licence checks.',
    },
    {
      q: 'Does the table rank plants by Turkish tonnes?',
      a: 'Rows mark halls we tour, OEM parks we walk, or the ministry desk. Rows exist because we walk the mill or the OEM park, not because of output rank.',
    },
  ],
  regulatorSource: {
    name: 'Republic of Türkiye Ministry of Industry and Technology — industrial registration, incentives and OSB overlay',
    url: 'https://www.sanayi.gov.tr',
    asOf: '2026-09-05',
  },
  sources: [
    'Ministry of Industry and Technology industrial-registration guidance, consulted 2026',
    'Erdemir, Tüpraş, Şişecam, Arçelik and Ford Otosan operations and exchange pages',
    'OSB authority and Gebze / Iskenderun export-community notes',
    'BioNixus Turkey plant tours, OEM-park and contractor procurement interviews, 2023–2026',
  ],
  fieldNotes: [
    'Paired Erdemir and İsdemir mill tours so the Black Sea and Iskenderun theatres stay distinct.',
    'Ford Otosan supplier-park interviews held apart from any Arçelik retailer conversation.',
    'Tüpraş unit walks with fuel-wholesaler offtake sitting on a different guide from Şişecam.',
    'MoIT versus OSB licence checks against the two papers the plant manager hangs.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
