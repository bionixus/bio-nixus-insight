import type { DirectoryPageInput } from '../../types';

export const logisticsCompaniesUae: DirectoryPageInput = {
  entity: 'logistics-companies',
  countrySlug: 'uae',
  metaDescription:
    'UAE logistics accounts: DP World, Aramex, Emirates SkyCargo, Agility, DHL, FedEx — FTA and Dubai Customs, Jebel Ali and Khalifa yards.',
  introLead:
    'A pallet that lands at Jebel Ali and a pallet that lands at Khalifa Port do not share a customs file: Dubai Customs stamps one, Abu Dhabi Customs stamps the other, and the Federal Tax Authority’s VAT and excise overlay sits on both.',
  introRest:
    'DP World is the Jebel Ali landlord and terminal operator BioNixus starts with when a brief asks who actually controls the yard, not who prints a freight invoice. Aramex is the Dubai-born integrator that still owns a Gulf last-mile story the globals cannot copy. Emirates SkyCargo takes the air belly and freighter book through DXB and DWC. Agility, DHL and FedEx fill the multinational 3PL and express slice. Jebel Ali Free Zone is trade infrastructure, not a courier. This directory maps those houses, the two port theatres and the customs desks. It is not a list of every pickup van in Al Quoz.',
  stats: [
    { value: 'Jebel Ali / Khalifa', label: 'Two port theatres a principal must cover, usually through different terminal and customs files' },
    { value: 'FTA overlay', label: 'Federal Tax Authority VAT and excise rules that sit on top of emirate customs stamps' },
    { value: 'SkyCargo + DXB/DWC', label: 'Air book that still moves time-critical healthcare and high-value cargo the yard cannot' },
    { value: 'Aramex last mile', label: 'Dubai-born integrator that shippers still name when the question is Gulf doorstep, not ocean TEU' },
  ],
  channelHeading: 'How a Jebel Ali or Khalifa entry becomes a mainland or free-zone delivery',
  channelBody:
    'Ocean cargo clears Dubai Customs at Jebel Ali or Abu Dhabi Customs at Khalifa Port under federal rules now housed with the Federal Authority for Identity, Citizenship, Customs and Port Security. The Federal Tax Authority then wants the VAT and, on some goods, excise. Free-zone cargo can sit in Jafza or KEZAD for weeks before anyone decides whether it will be a mainland entry or a re-export. DP World runs the Jebel Ali terminal and much of the zone landlord conversation. Trucking to mainland Dubai or to the capital is a named 3PL in the method statement — Agility, a local haulier, or the shipper’s own fleet. Express and parcel offtake splits: Aramex for Gulf doorstep density, DHL and FedEx for international express, Emirates SkyCargo for the air leg. Healthcare and device briefs add a cold-chain clause that a dry-yard 3PL cannot fake. BioNixus therefore designs a UAE logistics study around the port of entry, the free-zone versus mainland decision and the named last-mile house, not around a federal “logistics GDP” cell.',
  companies: [
    {
      name: 'DP World',
      hq: 'Dubai',
      type: 'Operator',
      focus: 'Jebel Ali terminals, zone landlord and global ports',
      notes: 'The yard conversation; a freight-forwarder invoice is not a substitute for a DP World terminal interview.',
    },
    {
      name: 'Aramex',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Express, last mile and Gulf e-commerce delivery',
      notes: 'Dubai-born integrator shippers still name for doorstep density; ocean TEU briefs can often skip this desk.',
    },
    {
      name: 'Emirates SkyCargo',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Belly and freighter air cargo via DXB and DWC',
      notes: 'The air book healthcare and high-value shippers still call; Jebel Ali dwell time does not explain this P&L.',
    },
    {
      name: 'Agility',
      hq: 'Dubai / Kuwait-parent',
      type: 'Regional',
      focus: '3PL, contract logistics and selected warehousing',
      notes: 'Gulf-scale 3PL that industrial shippers still shortlist beside DHL; confirm the UAE operating vehicle.',
    },
    {
      name: 'DHL Express and DHL Global Forwarding — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'International express and forwarding',
      notes: 'Global express default; last-mile inside the Emirates still competes with Aramex on e-commerce files.',
    },
    {
      name: 'FedEx / TNT — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'International express',
      notes: 'Second international express book in Dubai; use it when the brief wants a DHL foil on Emirates time-definite lanes.',
    },
    {
      name: 'Jebel Ali Free Zone (Jafza)',
      hq: 'Dubai',
      type: 'Operator',
      focus: 'Zone landlord, warehousing plots and re-export rules',
      notes: 'Trade infrastructure, not a courier; cargo that sits here is not yet “UAE demand”.',
    },
    {
      name: 'Dubai Customs',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Jebel Ali and Dubai airport clearance',
      notes: 'The stamp a Jebel Ali entry cannot skip; it does not clear a Khalifa Port consignment.',
    },
    {
      name: 'Abu Dhabi Customs / Khalifa Port community',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Capital-port clearance and industrial-zone overlay',
      notes: 'The capital twin; briefs that only walk Jebel Ali will under-cover KEZAD offtake.',
    },
    {
      name: 'Federal Tax Authority',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'VAT and excise overlay on cleared cargo',
      notes: 'Federal tax brain for VAT and excise; emirate customs departments still stamp the physical entry.',
    },
    {
      name: 'PWC Logistics / selected local 3PLs',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Contract warehousing and distribution',
      notes: 'Local 3PL shippers use when Agility or DHL look over-scaled for a single-emirate book.',
    },
    {
      name: 'CEVA / CMA CGM logistics — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Ocean-linked contract logistics',
      notes: 'Line-owned 3PL that ocean shippers already meet at Jebel Ali; not a last-mile e-commerce house.',
    },
    {
      name: 'KEZAD / Abu Dhabi industrial logistics',
      hq: 'Abu Dhabi',
      type: 'Operator',
      focus: 'Capital industrial-zone warehousing and haul',
      notes: 'Capital Khalifa-adjacent industrial offtake that a Jafza-only warehouse sample will systematically miss.',
    },
    {
      name: 'Sharjah Airport and SAIF zone logistics',
      hq: 'Sharjah',
      type: 'Operator',
      focus: 'Northern-emirate air and zone cargo',
      notes: 'Third theatre for briefs that spill into Sharjah; Dubai Customs does not clear this file.',
    },
  ],
  categoryBlurbs: {
    local:
      'Aramex, Emirates SkyCargo and local 3PLs — Dubai-rooted houses that still own last mile and the air belly conversation.',
    mnc:
      'DHL, FedEx and CEVA/CMA CGM as global express and ocean-linked logistics. They do not replace DP World on the terminal conversation.',
    regional:
      'Agility brings a Kuwait-parent 3PL onto UAE yards. Other Gulf forwarders appear on selected lanes but do not run Jebel Ali.',
    trade:
      'DP World and Jafza as yard and zone, Dubai Customs and Abu Dhabi Customs as stamps, FTA as the tax overlay, KEZAD and Sharjah as the other theatres.',
  },
  growthDrivers: [
    {
      title: 'Two-port customs reality',
      desc: 'Jebel Ali and Khalifa do not share a stamp. A principal that files only Dubai Customs will under-cover capital industrial offtake.',
    },
    {
      title: 'Free-zone dwell versus mainland demand',
      desc: 'Cargo can sit in Jafza for weeks as re-export. Counting it as UAE consumption is how a demand model dies.',
    },
    {
      title: 'Air versus ocean as two P&Ls',
      desc: 'SkyCargo and the express houses move time-critical healthcare. DP World moves TEUs. Those buyers do not share a questionnaire.',
    },
    {
      title: 'Aramex as the Gulf doorstep',
      desc: 'E-commerce shippers still name the Dubai-born integrator. DHL wins international express; it does not automatically win the last mile.',
    },
  ],
  sections: [
    {
      heading: 'Yard landlord versus express invoice',
      paragraphs: [
        'DP World and Jafza decide whether the pallet has a plot. Dubai Customs decides whether it may leave. Aramex or DHL decides whether it reaches a villa. BioNixus interviews those three seats separately. A single “UAE logistics NPS” cell that mixes a terminal manager with a courier driver will not survive a shipper review.',
        'Khalifa Port and KEZAD are not a suburb of Jebel Ali. Capital energy and industrial offtake still wants an Abu Dhabi file. Sample both theatres or admit the study is a Dubai yard study.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who clears cargo in the UAE?',
      a: 'Emirate customs departments under federal rules. Dubai Customs at Jebel Ali; Abu Dhabi Customs at Khalifa. The FTA then wants VAT and excise.',
    },
    {
      q: 'Is DP World a freight forwarder?',
      a: 'DP World is the terminal and zone landlord. Forwarders and 3PLs buy its yard. Interview both; do not treat a house bill as a terminal interview.',
    },
    {
      q: 'Which house should a last-mile brief name first?',
      a: 'Aramex for Gulf doorstep density, then DHL and FedEx for international express. Skip DP World unless the question is the yard.',
    },
    {
      q: 'Which house should an ocean brief name first?',
      a: 'DP World and Jafza, then Agility, CEVA and the named haulier. Add Khalifa and KEZAD if the offtaker is in the capital.',
    },
    {
      q: 'How does BioNixus research UAE logistics?',
      a: 'Jebel Ali and Khalifa yard walks; shipper procurement interviews; Aramex and DHL mystery pickups; and customs-file walkthroughs that separate free-zone dwell from mainland entry.',
    },
    {
      q: 'Does the table rank logistics firms by tonnage?',
      a: 'Rows mark yards we walk, integrators we shop, or the customs desk. Nothing here is a ranking of UAE cargo.',
    },
  ],
  regulatorSource: {
    name: 'Federal Tax Authority (FTA) — VAT and excise overlay on goods moving through UAE ports and free zones',
    url: 'https://www.fta.gov.ae',
    asOf: '2026-09-05',
  },
  sources: [
    'Federal Tax Authority VAT and excise guidance, consulted 2026',
    'Dubai Customs and DP World / Jafza public cargo pages',
    'Company pages for Aramex, Emirates SkyCargo, Agility, DHL and FedEx UAE',
    'BioNixus UAE yard walks, shipper procurement and express mystery pickups, 2023–2026',
  ],
  fieldNotes: [
    'Paired Jebel Ali and Khalifa yard walks in the same month to catch two-theatre dwell and stamp gaps.',
    'Shipper procurement interviews that separate terminal landlord from 3PL invoice from last-mile integrator.',
    'Aramex versus DHL mystery pickups on the same e-commerce lane in Dubai and the capital.',
    'Jafza dwell audits that mark re-export holds so nobody calls the pile mainland demand.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
