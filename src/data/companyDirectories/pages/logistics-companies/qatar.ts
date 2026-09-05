import type { DirectoryPageInput } from '../../types';

export const logisticsCompaniesQatar: DirectoryPageInput = {
  entity: 'logistics-companies',
  countrySlug: 'qatar',
  metaDescription:
    'Qatar logistics accounts: Mwani Qatar, QTerminals, GWC, Qatar Post, DHL — Hamad Port stamps, Mesaieed and Industrial Area yards.',
  introLead:
    'A box at Hamad Port and a parcel leaving GWC’s Industrial Area warehouse do not share a buying centre: Mwani and QTerminals control the quay, Customs stamps the entry, and Qatar Post or DHL may own the last mile.',
  introRest:
    'Mwani Qatar is the ports authority BioNixus starts with when a brief asks who actually sets the quay rules. QTerminals is the operating company that runs Hamad Port’s cranes. GWC (Gulf Warehousing Company) is the listed 3PL that still owns much of the contract-logistics conversation inside the Industrial Area. Qatar Post takes domestic density the globals do not fully replace. DHL fills international express. This directory maps those houses and the authority stack. It is not a leftover festival list of temporary warehouses.',
  stats: [
    { value: 'Hamad quay', label: 'Single main ocean gate that replaced the old Doha berth for most container offtake' },
    { value: 'GWC listed', label: 'Qatari 3PL shippers can interview without flying a regional vice-president' },
    { value: 'Mwani + QTerminals', label: 'Authority-versus-operator pair a brief must split before the first quay walk' },
    { value: 'Qatar Post / DHL', label: 'Domestic density versus international express — two doorsteps that do not share a pickup script' },
  ],
  channelHeading: 'How a Hamad Port entry becomes a West Bay or Industrial Area delivery',
  channelBody:
    'Ocean cargo clears General Authority of Customs at Hamad Port. Mwani Qatar sets port rules; QTerminals runs the cranes. Inland haul to the Industrial Area, Mesaieed or West Bay is a named trucker on a compact geography that still has two operating systems: a closed industrial loop and a city last mile. GWC holds much of the bonded and contract-logistics book. Air cargo clears Hamad International through the same customs authority and a handling community that is not GWC. Last mile then splits: Qatar Post for domestic density, DHL for international express, and a thin local courier tail. Energy offtake at Mesaieed and Ras Laffan often never touches a West Bay sortation hub. BioNixus therefore designs a Qatar logistics study around the Hamad stamp, the GWC yard and the named last-mile house, not around a leftover “World Cup warehouse” cell.',
  companies: [
    {
      name: 'Mwani Qatar',
      hq: 'Doha',
      type: 'Government',
      focus: 'Ports authority, rules and landlord overlay',
      notes: 'The rules conversation; QTerminals runs the crane. Interview both or the quay story will be a press release.',
    },
    {
      name: 'QTerminals',
      hq: 'Hamad Port',
      type: 'Operator',
      focus: 'Hamad Port crane and yard operations',
      notes: 'The operator a shipper’s vessel actually meets; Mwani is not a substitute for this interview.',
    },
    {
      name: 'Gulf Warehousing Company (GWC)',
      hq: 'Industrial Area / Doha',
      type: 'Local',
      focus: 'Listed 3PL, bonded and contract logistics',
      notes: 'The interviewable Qatari logistics P&L; last-mile villa delivery is a different desk.',
    },
    {
      name: 'Qatar Post',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Domestic parcel and selected logistics',
      notes: 'Doha villa density the integrator still does not fully own; pair mystery pickups with DHL the same week.',
    },
    {
      name: 'DHL — Qatar',
      hq: 'Doha',
      type: 'MNC',
      focus: 'International express and forwarding',
      notes: 'Global express default on time-definite lanes; domestic density still competes with Qatar Post on villa doors.',
    },
    {
      name: 'General Authority of Customs',
      hq: 'Doha',
      type: 'Government',
      focus: 'Clearance at Hamad Port and the airport',
      notes: 'The stamp a legal inland delivery cannot skip; QTerminals does not replace this desk.',
    },
    {
      name: 'Mesaieed industrial logistics',
      hq: 'Mesaieed',
      type: 'Operator',
      focus: 'Energy-adjacent yards and closed-loop haul',
      notes: 'Energy-adjacent industrial offtake that a West Bay parcel survey will never reach or measure.',
    },
    {
      name: 'Hamad International cargo community',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Air-side handling and time-critical cargo',
      notes: 'The air book healthcare shippers still use; Hamad Port dwell does not explain this P&L.',
    },
    {
      name: 'Aramex — Qatar',
      hq: 'Doha',
      type: 'Regional',
      focus: 'Express and e-commerce last mile',
      notes: 'Dubai-born integrator with Doha density; sample it beside Qatar Post, not as a substitute for GWC.',
    },
    {
      name: 'FedEx — Qatar',
      hq: 'Doha',
      type: 'MNC',
      focus: 'International express',
      notes: 'Second international express book in Doha; book it when the shipper wants a DHL foil.',
    },
    {
      name: 'Local Industrial Area 3PLs',
      hq: 'Industrial Area',
      type: 'Local',
      focus: 'Mid-size warehousing beside GWC',
      notes: 'The long tail shippers use when GWC looks over-scaled for a single SKU book.',
    },
    {
      name: 'Ras Laffan logistics offtake',
      hq: 'Ras Laffan',
      type: 'Operator',
      focus: 'Energy-city closed-loop cargo',
      notes: 'Second industrial theatre beside Mesaieed; public parcel NPS will not explain it.',
    },
    {
      name: 'Qatar Airways Cargo',
      hq: 'Doha',
      type: 'Local',
      focus: 'Belly and freighter air cargo',
      notes: 'The line-side air book sitting beside the airport handling community; interview both on time-critical files.',
    },
    {
      name: 'Ministry of Commerce (logistics licences)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Commercial licences for 3PLs and couriers',
      notes: 'Trade-licence counter for 3PLs; the customs stamp and Mwani quay rules remain separate gates.',
    },
  ],
  categoryBlurbs: {
    local:
      'GWC, Qatar Post, Qatar Airways Cargo and Industrial Area 3PLs — Qatari P&Ls that still own contract logistics, domestic density and the air line.',
    mnc:
      'DHL and FedEx as global express. They win international time-definite; they do not replace GWC on the bonded yard.',
    regional:
      'Aramex brings a Dubai-born integrator onto Doha doorsteps. Other Gulf forwarders appear on selected lanes.',
    trade:
      'Mwani as the authority, QTerminals as the crane, Customs as the stamp, plus Mesaieed and Ras Laffan as closed industrial loops.',
  },
  growthDrivers: [
    {
      title: 'Hamad as the single main quay',
      desc: 'Estimators who still print the old Doha berth on a 2026 method statement have not walked the live quay. Start at Hamad or label the study historic.',
    },
    {
      title: 'Mwani versus QTerminals as two seats',
      desc: 'Rules and cranes are different interviews. A brief that only meets the authority will miss why a vessel waited.',
    },
    {
      title: 'GWC as the interviewable 3PL',
      desc: 'Listed contract logistics give research a Qatari desk. Global express GMs often cannot speak for the bonded yard.',
    },
    {
      title: 'Energy loops beside city last mile',
      desc: 'Mesaieed and Ras Laffan never touch a West Bay sortation hub. Admit when the study is a public-network study.',
    },
  ],
  sections: [
    {
      heading: 'Quay rules versus Industrial Area racking',
      paragraphs: [
        'Mwani writes the port rule. QTerminals moves the box. GWC racks it. Qatar Post or DHL delivers the parcel. BioNixus interviews those seats separately. A single “Qatar logistics” score that mixes a crane supervisor with a courier will not survive a shipper review.',
        'Festival warehouses closed. Researchers who still carry a 2022 warehouse map will waste the first morning on empty sheds. Energy loops at Mesaieed and Ras Laffan kept running through that thinning; they were never festival sheds, and a public-parcel sample that treats them as leftover capacity will mis-read both dwell and badge rules.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who clears cargo in Qatar?',
      a: 'The General Authority of Customs at Hamad Port or the airport. QTerminals runs cranes; it does not replace the stamp.',
    },
    {
      q: 'Is Mwani the same as QTerminals?',
      a: 'Mwani is the ports authority. QTerminals operates Hamad Port. Split the interviews. A press page that blends them will mis-brief the quay walk.',
    },
    {
      q: 'Which house should a contract-logistics brief name first?',
      a: 'GWC, then the mid-size Industrial Area tail. Skip Qatar Post unless last mile is in scope. Skip Mwani unless the question is the quay rule.',
    },
    {
      q: 'Which house should a parcel brief name first?',
      a: 'Qatar Post and DHL, then Aramex. Skip QTerminals unless the inbound box is in scope.',
    },
    {
      q: 'How does BioNixus research Qatar logistics?',
      a: 'Hamad Port walks with QTerminals; GWC yard tours; Qatar Post versus DHL mystery pickups; and customs-file walkthroughs with importers.',
    },
    {
      q: 'Does the table rank firms by Qatari tonnage?',
      a: 'Rows mark the quay we walk, the 3PL we tour, or the customs desk. Nothing here is a ranking of Qatari cargo.',
    },
  ],
  regulatorSource: {
    name: 'Mwani Qatar — ports authority, Hamad Port rules and landlord overlay',
    url: 'https://www.mwani.com.qa',
    asOf: '2026-09-05',
  },
  sources: [
    'Mwani Qatar and QTerminals public port pages, consulted 2026',
    'GWC exchange and operations communications',
    'Qatar Post, DHL Qatar and General Authority of Customs guidance',
    'BioNixus Doha quay walks, GWC tours and express mystery pickups, 2023–2026',
  ],
  fieldNotes: [
    'Hamad Port walks that interview Mwani rules staff and QTerminals crane supervisors as two seats.',
    'GWC Industrial Area tours that record which shipper books actually sit in bonded racking.',
    'Qatar Post versus DHL mystery pickups on the same West Bay e-commerce lane.',
    'Mesaieed closed-loop walks when the brief is energy cargo rather than a villa parcel.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
