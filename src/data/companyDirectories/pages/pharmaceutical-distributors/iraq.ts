import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsIraq: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'iraq',
  metaDescription:
    'Pharmaceutical distributors in Iraq: KIMADIA, KRG medical supplies, Zozik Group, SDI, Pioneer, Awamedica and scientific bureaus — federal and Kurdistan channels.',
  introLead:
    'Iraq is a 45-million-person market supplied through two parallel systems: the federal state importer KIMADIA, which buys for Ministry of Health hospitals, and a private network of licensed scientific bureaus and drug stores that register foreign brands and sell them to the private pharmacies where most Iraqis actually buy their medicines.',
  introRest:
    'The Kurdistan Region adds a third layer with its own Ministry of Health, its own registration track and its own distributors based in Erbil and Sulaymaniyah. Foreign manufacturers therefore appoint a Baghdad scientific bureau for federal registration and often a separate Kurdish partner for the north. The directory below lists the state buyers, the domestic manufacturers that supply tenders, the leading private distributors and the regional pharmaceutical groups that market through Iraqi bureaus, arranged so that a brand team can see how product reaches Baghdad, Basra, Mosul and Erbil.',
  stats: [
    { value: '$2.5bn+', label: 'Iraqi pharmaceutical market, 2024 estimate' },
    { value: '~65%', label: 'Share of spend paid out-of-pocket through private pharmacies' },
    { value: '2', label: 'Registration tracks (federal MOH and Kurdistan Region MOH)' },
    { value: '~15,000', label: 'Licensed private pharmacies' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Iraq',
  channelBody:
    'The public channel begins with KIMADIA, the State Company for Marketing Drugs and Medical Appliances, which registers suppliers, issues tenders for Ministry of Health hospitals and primary-care centres, imports awarded products and distributes them to governorate warehouses. Tender payment delays and formulary gaps mean public facilities frequently run short, pushing patients into the private market. In that private channel, a foreign brand is registered at the MOH by a licensed scientific bureau, which imports through Basra, Baghdad International Airport or the Turkish and Jordanian land borders and sells on to wholesalers in the Shorja and Bab Al-Muadham drug markets and to private hospitals, before product reaches around 15,000 pharmacies. The Kurdistan Region operates separately: the KRG Ministry of Health registers products, Erbil-based groups such as Zozik distribute, and cross-border flows from Turkey and Iran are significant. Domestic manufacturers, led by Samarra Drug Industries in the state sector and Pioneer, Awamedica, Al Mansour and Modern Drug Industries in the private sector, supply KIMADIA tenders with local-preference status and increasingly compete in retail. Cold chain remains the weakest link, with validated storage concentrated in Baghdad and Erbil.',
  companies: [
    {
      name: 'KIMADIA (State Company for Marketing Drugs and Medical Appliances)',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Federal importer and distributor for Ministry of Health facilities',
      notes: 'The single public buyer for federal Iraq; supplier registration and KIMADIA tenders are the gateway to hospital volume.',
    },
    {
      name: 'KRG Ministry of Health — Directorate of Medical Supplies',
      hq: 'Erbil',
      type: 'Government',
      focus: 'Registration and procurement for Kurdistan Region hospitals',
      notes: 'Runs a separate registration and tender track, so brands need a Kurdish partner in addition to a Baghdad bureau.',
    },
    {
      name: 'Samarra Drug Industries (SDI)',
      hq: 'Samarra',
      type: 'Government',
      focus: 'State-owned generics manufacturing for public supply',
      notes: 'Legacy state manufacturer that remains a large KIMADIA supplier and a benchmark for local-preference pricing.',
    },
    {
      name: 'Pioneer Co. for Pharmaceutical Industries',
      hq: 'Sulaymaniyah',
      type: 'Local',
      focus: 'Private generics manufacturer supplying federal and KRG tenders',
      notes: 'One of the most modern private plants in Iraq; supplies both public systems and private pharmacies nationwide.',
    },
    {
      name: 'Awamedica (Awa Group)',
      hq: 'Erbil',
      type: 'Local',
      focus: 'Generics manufacturing and distribution in Kurdistan',
      notes: 'Erbil manufacturer with its own distribution network and contract-manufacturing deals with regional brands.',
    },
    {
      name: 'Al Mansour Pharmaceutical Industries',
      hq: 'Baghdad',
      type: 'Local',
      focus: 'Private generics manufacturer and tender supplier',
      notes: 'Baghdad-based producer supplying KIMADIA and private wholesalers; an example of the revived private manufacturing sector.',
    },
    {
      name: 'Modern Drug Industries (MDI)',
      hq: 'Baghdad',
      type: 'Local',
      focus: 'Generics production and retail distribution',
      notes: 'Private manufacturer active in both tender supply and branded generics for the pharmacy channel.',
    },
    {
      name: 'Zozik Group',
      hq: 'Erbil',
      type: 'Local',
      focus: 'Pharma import agency and distribution across Kurdistan and federal Iraq',
      notes: 'The leading private distributor in the north, representing multinational principals and operating validated warehousing in Erbil.',
    },
    {
      name: 'MS Pharma (Iraq)',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Regional pharma group marketing through Iraqi bureaus',
      notes: 'Jordan-headquartered company with a substantial Iraqi business, illustrating how Levant groups use bureaus for registration and wholesalers for reach.',
    },
    {
      name: 'Hikma Pharmaceuticals (Iraq operations)',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Branded generics and injectables supplied via local partners',
      notes: 'Long-standing MENA manufacturer whose Iraqi volumes move through KIMADIA tenders and appointed scientific bureaus.',
    },
    {
      name: 'Julphar (Iraq)',
      hq: 'Ras Al Khaimah',
      type: 'Regional',
      focus: 'Gulf generics distributed through Iraqi agents',
      notes: 'UAE manufacturer with a dedicated Iraq commercial team; a reference case for Gulf brands entering through bureaus and wholesalers.',
    },
    {
      name: 'DHL Global Forwarding Iraq',
      hq: 'Baghdad',
      type: 'MNC',
      focus: 'Inbound freight, customs brokerage and temperature-controlled transport',
      notes: 'Handles air and sea inbound flows for multinationals shipping to Baghdad and Erbil bureaus.',
    },
    {
      name: 'Aramex Iraq',
      hq: 'Baghdad',
      type: 'MNC',
      focus: 'Domestic express and pharmacy-level distribution',
      notes: 'Carrier used by distributors to reach pharmacies in secondary cities where own-fleet coverage is thin.',
    },
  ],
  categoryBlurbs: {
    local:
      'Iraqi scientific bureaus, drug stores and private manufacturers that register brands, import them and sell to wholesalers, private hospitals and pharmacies in federal Iraq and Kurdistan.',
    mnc:
      'International logistics groups providing inbound freight, customs clearance and domestic transport for distributors and manufacturers; they do not register products.',
    regional:
      'MENA pharmaceutical groups from Jordan, the Gulf and Turkey that market in Iraq through appointed bureaus and their own scientific offices, often combining tender supply with branded-generics detailing.',
    trade:
      'The federal and Kurdish state buyers and the state manufacturer whose tenders, payment cycles and formularies define the public channel and, by their gaps, the size of the private one.',
  },
  growthDrivers: [
    {
      title: 'KIMADIA tender reform and payment normalisation',
      desc: 'Higher federal health budgets and efforts to clear supplier arrears are restoring KIMADIA’s credibility as a buyer, drawing multinational bidders back and squeezing the grey-market share of the private channel.',
    },
    {
      title: 'Private hospital expansion in Baghdad, Basra and Erbil',
      desc: 'New private hospitals and specialty centres are creating institutional accounts that buy directly from bureaus at higher service levels than the traditional wholesale markets provide.',
    },
    {
      title: 'Local manufacturing revival',
      desc: 'Pioneer, Awamedica, Al Mansour and MDI are expanding capacity and winning tender preference, prompting foreign brands to consider toll-manufacturing and licensing deals rather than pure import.',
    },
    {
      title: 'Regulatory tightening and anti-counterfeit controls',
      desc: 'Stricter MOH registration, border inspection and track-and-trace pilots are raising barriers for informal importers and rewarding licensed bureaus with compliant cold-chain and documentation.',
    },
  ],
  faq: [
    {
      q: 'How does a foreign pharmaceutical company register a product in Iraq?',
      a: 'Through a licensed Iraqi scientific bureau that submits the dossier to the federal Ministry of Health and, for the north, through a Kurdish partner filing with the KRG Ministry of Health. The bureau becomes the importer of record for the private channel, while KIMADIA supplier registration is a separate step for tenders.',
    },
    {
      q: 'Is KIMADIA the only buyer for Iraqi public hospitals?',
      a: 'For federal Ministry of Health facilities, yes. The Kurdistan Region procures separately, and some ministries and university hospitals run supplementary purchases, but KIMADIA tenders remain the single largest institutional demand source.',
    },
    {
      q: 'Why is the private pharmacy channel so large in Iraq?',
      a: 'Because public facilities have historically run short of medicines, most Iraqis buy prescriptions out of pocket at private pharmacies supplied by wholesalers in Baghdad’s drug markets and by bureaus, making the private channel the majority of value.',
    },
    {
      q: 'Do brands need separate distributors for Kurdistan?',
      a: 'Usually. The KRG registers products independently, Erbil and Sulaymaniyah distributors such as Zozik dominate northern coverage, and cross-border logistics from Turkey make the north a distinct commercial territory from Baghdad and Basra.',
    },
    {
      q: 'What does BioNixus study about pharmaceutical distribution in Iraq?',
      a: 'Bureau and distributor evaluation through interviews with hospital pharmacists, wholesalers and pharmacy owners in Baghdad, Basra and Erbil; KIMADIA and KRG tender mapping; pharmacy availability audits; and grey-import and counterfeit exposure assessments for specific molecules.',
    },
    {
      q: 'Does this list rank Iraqi distributors?',
      a: 'It does not. Organisations are grouped by function and included because they recur in BioNixus Iraq fieldwork and public registrations; the sequence carries no judgement about size or reliability.',
    },
  ],
  regulatorSource: {
    name: 'Iraq Ministry of Health — KIMADIA supplier registration and licensed scientific bureaus',
    url: 'https://moh.gov.iq',
    asOf: '2026-09-03',
  },
  sources: [
    'KIMADIA tender announcements and supplier registration notices, 2024–2026',
    'Kurdistan Region Ministry of Health registration and procurement updates, 2024–2025',
    'World Bank and WHO Iraq health financing and out-of-pocket expenditure data, 2023–2024',
    'BioNixus Iraq pharmacy, hospital and distributor fieldwork in Baghdad, Basra and Erbil, 2023–2026',
  ],
  fieldNotes: [
    'Bureau and distributor due diligence: 20–40 interviews with hospital pharmacists, wholesalers and pharmacy owners across Baghdad, Basra, Mosul and Erbil on coverage, credit and cold-chain reliability.',
    'KIMADIA and KRG tender landscaping: bidders, award prices, payment timing and the share of volume met by domestic manufacturers.',
    'Pharmacy availability and price audits for defined molecule baskets, including grey-import and parallel-trade exposure.',
    'Private hospital purchasing studies in Baghdad and Erbil covering formulary access and direct-from-bureau supply.',
  ],
};
