import type { DirectoryPageInput } from '../../types';

export const logisticsCompaniesEgypt: DirectoryPageInput = {
  entity: 'logistics-companies',
  countrySlug: 'egypt',
  metaDescription:
    'Egypt logistics accounts: SCCT, Damietta, EgyptAir Cargo, CMA CGM, DB Schenker, Aramex — Customs Authority, Sokhna and Alexandria gates.',
  introLead:
    'A box at East Port Said and a box at Alexandria do not share a terminal file: the Customs Authority stamps both, but SCCT, Damietta or Sokhna is the yard conversation, and the inland haul to Tenth of Ramadan is a different truck ticket.',
  introRest:
    'Suez Canal Container Terminal and Damietta are the two Mediterranean gates BioNixus walks when a brief asks who actually controls the quay, not who prints a Cairo freight invoice. EgyptAir Cargo takes the air book through CAI. CMA CGM and DB Schenker fill the line-owned and German 3PL slice. Aramex Egypt takes last-mile and express density that the ocean houses do not own. The Egyptian Customs Authority is the stamp. The rows below are the quay, air and last-mile seats a shipper brief should book. Informal pickup vans in Mohandessin stay off the table.',
  stats: [
    { value: 'Customs stamp', label: 'Egyptian Customs Authority clearance that still sits in front of a legal inland delivery' },
    { value: 'SCCT / Damietta / Sokhna', label: 'Three ocean theatres a principal must name before sampling a single “Egypt port”' },
    { value: 'CAI air', label: 'EgyptAir Cargo book that time-critical healthcare still uses when the quay is too slow' },
    { value: 'Aramex doorstep', label: 'Express density Cairo and Alexandria shippers still name after the global 3PLs' },
  ],
  channelHeading: 'How a Customs Authority entry becomes a Cairo or industrial-belt delivery',
  channelBody:
    'Ocean cargo clears the Egyptian Customs Authority at East Port Said (SCCT), Damietta, Ain Sokhna or Alexandria. The terminal operator — SCCT, Damietta Port, or the Sokhna concession — is a second interview. Inland haul to Tenth of Ramadan, 6th of October or New Administrative Capital is a named trucker across a country that is not a city-state, with checkpoints and forex-linked diesel that a Gulf method statement never mentions. Air cargo clears CAI through EgyptAir Cargo and the same customs authority. Last mile in Cairo and Alexandria splits between Aramex, global express houses and a long tail of local couriers. Industrial offtake along the Suez corridor often never touches a Cairo sortation hub. BioNixus therefore designs an Egypt logistics study around the named quay, the customs stamp and the inland belt, not around a single “Suez tonnage” cell.',
  companies: [
    {
      name: 'Suez Canal Container Terminal (SCCT)',
      hq: 'East Port Said',
      type: 'Operator',
      focus: 'Mediterranean container quay',
      notes: 'The East Port Said yard conversation; a Cairo freight invoice is not a substitute for a quay interview.',
    },
    {
      name: 'Damietta Port / container community',
      hq: 'Damietta',
      type: 'Operator',
      focus: 'Second Mediterranean gate and industrial-adjacent yard',
      notes: 'Not a suburb of SCCT; shippers who only walk Port Said will under-cover this file.',
    },
    {
      name: 'EgyptAir Cargo',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Belly and freighter air cargo via CAI',
      notes: 'The air book healthcare and high-value shippers still call; quay dwell does not explain this P&L.',
    },
    {
      name: 'CMA CGM — Egypt',
      hq: 'Cairo / Port Said',
      type: 'MNC',
      focus: 'Ocean line and line-owned logistics',
      notes: 'Line conversation that SCCT already meets; last-mile e-commerce can skip this desk.',
    },
    {
      name: 'DB Schenker — Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Contract logistics and forwarding',
      notes: 'German 3PL industrial shippers still shortlist; confirm the Cairo DC versus a port-side yard.',
    },
    {
      name: 'Aramex Egypt',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Express and last-mile density',
      notes: 'Doorstep name Cairo shippers still quote; ocean TEU briefs can often skip this desk.',
    },
    {
      name: 'Egyptian Customs Authority',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Clearance at ports and airports',
      notes: 'The stamp a legal inland delivery cannot skip; terminal operators do not replace this desk.',
    },
    {
      name: 'Ain Sokhna Port / SCZONE logistics',
      hq: 'Ain Sokhna',
      type: 'Operator',
      focus: 'Red Sea gate and economic-zone yards',
      notes: 'Red Sea and Suez-corridor offtake that a Mediterranean-only quay sample will systematically miss.',
    },
    {
      name: 'Alexandria Port community',
      hq: 'Alexandria',
      type: 'Operator',
      focus: 'Historic Mediterranean gate and bulk-adjacent yard',
      notes: 'Still a live file; treating SCCT as the only quay invents a geography shippers do not use.',
    },
    {
      name: 'DHL — Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'International express and forwarding',
      notes: 'Global express default; domestic doorstep still competes with Aramex and local couriers.',
    },
    {
      name: 'Local Tenth of Ramadan 3PLs',
      hq: 'Tenth of Ramadan',
      type: 'Local',
      focus: 'Industrial-belt warehousing and distribution',
      notes: 'The DC a factory actually uses; a Zamalek freight office is not the warehouse.',
    },
    {
      name: 'Maersk / APM terminals-adjacent Egypt',
      hq: 'East Port Said / Cairo',
      type: 'MNC',
      focus: 'Ocean line and terminal-adjacent logistics',
      notes: 'Second line conversation beside CMA CGM; useful when the brief is the quay, not the villa.',
    },
    {
      name: 'Cairo Airport customs community',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Air-side clearance sitting beside EgyptAir Cargo',
      notes: 'Third stamp path for time-critical cargo; do not fold it into an SCCT walk.',
    },
    {
      name: 'Local Cairo courier tail',
      hq: 'Cairo',
      type: 'Local',
      focus: 'District last mile that integrators do not fully own',
      notes: 'The long tail e-commerce shippers still use; mystery pickups should include one named local beside Aramex.',
    },
  ],
  categoryBlurbs: {
    local:
      'EgyptAir Cargo, industrial-belt 3PLs and the courier tail — Egyptian P&Ls that still own air handling, factory DCs and district doorstep.',
    mnc:
      'CMA CGM, DB Schenker, DHL and Maersk as line, 3PL and express. They do not replace SCCT on the quay conversation.',
    regional:
      'Aramex Egypt brings a Dubai-born integrator onto Cairo doorsteps. Other Gulf forwarders appear on selected lanes.',
    trade:
      'Customs Authority as the stamp, SCCT, Damietta, Sokhna and Alexandria as the gates, plus CAI as the air path.',
  },
  growthDrivers: [
    {
      title: 'Four-gate ocean reality',
      desc: 'SCCT, Damietta, Sokhna and Alexandria do not share a terminal file. A principal that only walks East Port Said will under-cover Red Sea or Alex offtake.',
    },
    {
      title: 'Industrial-belt DCs versus Cairo offices',
      desc: 'Tenth of Ramadan warehouses decide whether the factory is served. A Zamalek freight-office interview will miss the forklift.',
    },
    {
      title: 'Forex-linked diesel and dwell',
      desc: 'Inland haul is a currency and checkpoint conversation. Method statements copied from Jebel Ali will mis-read programme risk.',
    },
    {
      title: 'Air as the healthcare bypass',
      desc: 'EgyptAir Cargo and CAI customs still move time-critical product the quay cannot. Those buyers do not share a questionnaire with SCCT.',
    },
  ],
  sections: [
    {
      heading: 'Quay operator versus Cairo invoice',
      paragraphs: [
        'SCCT and Damietta decide whether the box has a crane. Customs decides whether it may leave. A Tenth of Ramadan 3PL decides whether the factory is served. Aramex decides whether the villa is served. BioNixus interviews those seats separately.',
        'Sokhna and the economic zone are a Red Sea operating system. Mediterranean-only samples invent a country the Suez corridor does not recognise.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who clears cargo in Egypt?',
      a: 'The Egyptian Customs Authority at the named port or airport. Terminal operators do not replace the stamp.',
    },
    {
      q: 'Is SCCT the only quay that matters?',
      a: 'It is the headline Mediterranean gate, not the only file. Damietta, Sokhna and Alexandria still take real offtake. Name the factory’s gate before sampling.',
    },
    {
      q: 'Which house should a last-mile brief name first?',
      a: 'Aramex Egypt, then DHL and a named local courier. Skip CMA CGM unless the question is the ocean line.',
    },
    {
      q: 'Which house should an industrial DC brief name first?',
      a: 'The Tenth of Ramadan or 6th of October 3PL the factory already uses, then DB Schenker if a global contract is in play. Walk the belt, not Zamalek.',
    },
    {
      q: 'How does BioNixus research Egypt logistics?',
      a: 'SCCT, Damietta and Sokhna yard walks; EgyptAir Cargo interviews; Aramex mystery pickups; and customs-file walkthroughs with importers in Cairo and Alexandria.',
    },
    {
      q: 'Does the table rank firms by Egyptian tonnage?',
      a: 'Rows mark quays we walk, integrators we shop, or the customs desk. Nothing here is a ranking of Egyptian cargo.',
    },
  ],
  regulatorSource: {
    name: 'Egyptian Customs Authority — clearance at ports and airports',
    url: 'https://www.customs.gov.eg',
    asOf: '2026-09-05',
  },
  sources: [
    'Egyptian Customs Authority importer guidance, consulted 2026',
    'SCCT, Damietta and Ain Sokhna public terminal pages',
    'EgyptAir Cargo, CMA CGM, DB Schenker and Aramex Egypt operations notes',
    'BioNixus Egypt yard walks, industrial-belt DC visits and express mystery pickups, 2023–2026',
  ],
  fieldNotes: [
    'Paired SCCT and Sokhna walks in the same month to catch Mediterranean-versus-Red-Sea dwell gaps.',
    'Tenth of Ramadan DC tours that record which 3PL actually holds the factory’s inventory.',
    'Aramex versus local-courier mystery pickups on the same Cairo e-commerce lane.',
    'Customs-file walkthroughs at CAI and Alexandria that separate air-side stamps from ocean stamps.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
