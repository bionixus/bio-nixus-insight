import type { DirectoryPageInput } from '../../types';

export const logisticsCompaniesSaudiArabia: DirectoryPageInput = {
  entity: 'logistics-companies',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Saudi logistics accounts: SAL, Bahri, SAPTCO freight, Naqel, SMSA, DHL, King Abdullah Port — ZATCA customs, Riyadh and Jeddah yards.',
  introLead:
    'A container at King Abdullah Port and a parcel leaving a Riyadh sortation hub do not share a buying centre: ZATCA clears the box, SAL or Bahri may have carried it, and Naqel or SMSA may own the last mile.',
  introRest:
    'SAL Saudi Logistics is the listed air-and-logistics book BioNixus hears first from shippers who want a Kingdom P&L rather than a global express invoice. Bahri takes the national shipping line and selected logistics adjacencies. SAPTCO’s freight slice and Naqel take domestic road and parcel density; SMSA Express is the other local express name still quoted beside DHL. King Abdullah Port is the western ocean gate that now sits beside Jeddah Islamic Port. ZATCA is the customs and zakat desk that stamps the entry. This directory maps those houses and the authority. It is not a list of every pickup truck on the Dammam highway.',
  stats: [
    { value: 'ZATCA stamp', label: 'Customs and zakat authority that still clears the box before a legal mainland delivery' },
    { value: 'KAP / Jeddah / Dammam', label: 'Three ocean theatres a principal must cover, usually through different terminal files' },
    { value: 'SAL listed', label: 'Kingdom logistics P&L shippers can interview without flying a regional vice-president' },
    { value: 'Naqel / SMSA', label: 'Two local express books that still contest DHL on domestic doorstep density' },
  ],
  channelHeading: 'How a ZATCA entry becomes a Riyadh or Jeddah delivery',
  channelBody:
    'Ocean cargo clears ZATCA at King Abdullah Port, Jeddah Islamic Port or King Abdulaziz Port in Dammam. Air cargo clears the same authority at King Khalid, King Abdulaziz or King Fahd airports, often through SAL’s handling book. Inland haul is a named road house — SAPTCO freight, a private fleet, or a 3PL — across a country that is not a city-state. Last mile then splits: Naqel and SMSA for domestic density, DHL for international express, and a growing e-commerce sortation layer in Riyadh and Jeddah. Giga projects add a fourth offtaker: destination companies that book dedicated camps and yards the public parcel networks do not see. Healthcare and device briefs add cold-chain clauses that a dry trucker cannot fake. BioNixus therefore designs a Saudi logistics study around the ZATCA stamp, the named port or airport, and the last-mile house, not around a single “Vision logistics” cell.',
  companies: [
    {
      name: 'SAL Saudi Logistics',
      hq: 'Riyadh / Jeddah',
      type: 'Local',
      focus: 'Air cargo handling, logistics and listed Kingdom book',
      notes: 'The interviewable local P&L; ocean-terminal questions still belong at the port, not at this desk.',
    },
    {
      name: 'Bahri (National Shipping Company of Saudi Arabia)',
      hq: 'Riyadh / Jeddah',
      type: 'Local',
      focus: 'National shipping line and logistics adjacencies',
      notes: 'The line conversation; a last-mile parcel brief can skip it, a crude or dry-bulk brief cannot.',
    },
    {
      name: 'SAPTCO freight / logistics slice',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Domestic road freight and selected logistics',
      notes: 'Highway density a city-state 3PL does not have; giga camp haul often starts as a road conversation here or with peers.',
    },
    {
      name: 'Naqel Express',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Domestic express and e-commerce last mile',
      notes: 'The doorstep name shippers still quote beside SMSA; DHL does not automatically win this lane.',
    },
    {
      name: 'SMSA Express',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Domestic express and parcel',
      notes: 'Second local express book; mystery pickups must pair Naqel and SMSA in the same city week.',
    },
    {
      name: 'DHL — Saudi Arabia',
      hq: 'Riyadh / Jeddah',
      type: 'MNC',
      focus: 'International express and forwarding',
      notes: 'Global express default on international lanes; domestic doorstep still competes with Naqel and SMSA.',
    },
    {
      name: 'King Abdullah Port',
      hq: 'Rabigh / KAEC',
      type: 'Operator',
      focus: 'Western ocean terminal and industrial-adjacent yard',
      notes: 'The newer western gate; Jeddah Islamic Port is still a second file, not a suburb.',
    },
    {
      name: 'Zakat, Tax and Customs Authority (ZATCA)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Customs clearance, zakat and tax overlay',
      notes: 'The stamp a legal mainland delivery cannot skip; port terminals do not replace this desk.',
    },
    {
      name: 'Jeddah Islamic Port',
      hq: 'Jeddah',
      type: 'Operator',
      focus: 'Historic western ocean terminal',
      notes: 'Still a live file beside KAP; a study that only walks Rabigh will under-cover Hijazi offtake.',
    },
    {
      name: 'King Abdulaziz Port (Dammam)',
      hq: 'Dammam',
      type: 'Operator',
      focus: 'Eastern ocean terminal for industrial offtake',
      notes: 'Eastern theatre; Riyadh inland offtake often still traces to this gate or to KAP, not to a single “national port”.',
    },
    {
      name: 'FedEx — Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'International express',
      notes: 'Second international express book in Riyadh; use it when the brief wants a DHL foil on Kingdom time-definite lanes.',
    },
    {
      name: 'Aramex — Saudi Arabia',
      hq: 'Riyadh / Jeddah',
      type: 'Regional',
      focus: 'Express and e-commerce last mile',
      notes: 'Dubai-born integrator with Kingdom density; sample it beside Naqel, not as a substitute for SAL’s air handling.',
    },
    {
      name: 'Giga project logistics desks',
      hq: 'NEOM / Red Sea / Riyadh',
      type: 'Operator',
      focus: 'Dedicated camp and yard logistics for destination owners',
      notes: 'Fourth offtaker public parcel networks do not see; interview the destination logistics manager, not only SMSA.',
    },
    {
      name: 'Local Riyadh and Jeddah 3PLs',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Contract warehousing and distribution',
      notes: 'Mid-size books shippers use when a global 3PL looks over-scaled for a single-city DC.',
    },
  ],
  categoryBlurbs: {
    local:
      'SAL, Bahri, SAPTCO freight, Naqel, SMSA and city 3PLs — Kingdom P&Ls that still own air handling, the line, the highway and domestic doorstep.',
    mnc:
      'DHL and FedEx as global express. They win international time-definite; they do not automatically win Naqel’s last mile.',
    regional:
      'Aramex brings a Dubai-born integrator onto Kingdom doorsteps. Other Gulf forwarders appear on selected lanes.',
    trade:
      'ZATCA as the stamp, King Abdullah Port, Jeddah Islamic Port and Dammam as the three ocean theatres, plus giga logistics desks as a fourth offtaker.',
  },
  growthDrivers: [
    {
      title: 'Three-port ocean reality',
      desc: 'KAP, Jeddah and Dammam do not share a terminal file. A principal that only walks one western gate will under-cover Hijazi or Eastern offtake.',
    },
    {
      title: 'Local express still contesting DHL',
      desc: 'Naqel and SMSA own domestic density many shippers still prefer. A brief written like a European express study will sample the wrong doorstep.',
    },
    {
      title: 'Giga yards as a fourth buyer',
      desc: 'Destination logistics managers book dedicated camps. Public parcel NPS will not explain that offtake.',
    },
    {
      title: 'SAL as the interviewable air P&L',
      desc: 'Listed handling and logistics give research a Kingdom desk. Global express GMs often cannot speak for airport handling.',
    },
  ],
  sections: [
    {
      heading: 'Ocean gate versus Riyadh sortation',
      paragraphs: [
        'Bahri and the ports move the box. SAL handles the air side. Naqel and SMSA sort the parcel in Riyadh. ZATCA stamps all of it. BioNixus interviews those seats separately. A single “Saudi logistics” tracker that mixes a KAP terminal manager with a Naqel courier will not survive a shipper review.',
        'Giga camps add a closed loop. The destination company may never touch a public sortation hub. Admit when the study is a public-network study and when it is a giga-yard study.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who clears cargo in Saudi Arabia?',
      a: 'ZATCA. Ports and airports are the physical gates. Terminal operators do not replace the customs stamp.',
    },
    {
      q: 'Is SAL a shipping line?',
      a: 'SAL is the listed air-and-logistics book. Bahri is the national line. Interview the right desk; do not treat them as one Kingdom logistics brand.',
    },
    {
      q: 'Which house should a domestic parcel brief name first?',
      a: 'Naqel and SMSA, then Aramex and DHL. Skip Bahri and the ports unless the question is the inbound box.',
    },
    {
      q: 'Which gate should an ocean brief walk first?',
      a: 'Name the offtaker’s city. Jeddah and KAP for the west, Dammam for the east, then the inland haul to Riyadh. Do not invent a single national port.',
    },
    {
      q: 'How does BioNixus research Saudi logistics?',
      a: 'KAP, Jeddah and Dammam yard walks; SAL handling interviews; Naqel versus SMSA mystery pickups; and ZATCA-file walkthroughs with importers.',
    },
    {
      q: 'Does the table rank firms by Kingdom tonnage?',
      a: 'Rows mark gates we walk, express books we shop, or the ZATCA desk. Nothing here is a ranking of Kingdom cargo.',
    },
  ],
  regulatorSource: {
    name: 'Zakat, Tax and Customs Authority (ZATCA) — customs clearance, zakat and tax overlay',
    url: 'https://zatca.gov.sa',
    asOf: '2026-09-05',
  },
  sources: [
    'ZATCA customs and importer guidance, consulted 2026',
    'SAL, Bahri, Naqel, SMSA and King Abdullah Port public operations pages',
    'SAPTCO freight and DHL Kingdom communications',
    'BioNixus Saudi yard walks, express mystery pickups and shipper interviews, 2023–2026',
  ],
  fieldNotes: [
    'Paired KAP and Jeddah Islamic Port walks in the same month to catch western-gate dwell gaps.',
    'Naqel versus SMSA mystery pickups on the same Riyadh e-commerce lane.',
    'SAL handling interviews that separate airport cargo from ocean-terminal talking points.',
    'Giga logistics-manager conversations on camp yards that never touch a public sortation hub.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
