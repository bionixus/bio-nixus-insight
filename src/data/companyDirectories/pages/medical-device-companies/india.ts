import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesIndia: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'india',
  title: 'India Medtech: CDSCO, Meril and Hospital Tenders (2026)',
  metaDescription:
    'India medical device companies: Poly Medicure, HMD, Trivitron, Skanray, Meril, Transasia, BPL, Apollo buying, AIIMS tenders and CDSCO rules.',
  introLead:
    'Indian hospital technology is a three-layer market that a single “India TAM” slide erases: CDSCO licence on the file, a GeM or AIIMS rate-contract on the public dock, and a private chain such as Apollo that buys like a Gulf account once the licence is in hand.',
  introRest:
    'Poly Medicure, Hindustan Syringes & Medical Devices, Trivitron, Skanray, Meril, Transasia and BPL Medical Technologies are the domestic names already on government rate contracts and on private-chain vendor lists. CDSCO’s medical-device rules (the 2017 framework and the licence waves that followed) turned a loosely notified sector into a registrant-and-importer market. AIIMS and other central institutes still set the public specification many state tenders copy. Apollo’s central procurement is the private benchmark; other chains (Fortis, Max, Manipal, Narayana, Medanta) run their own capital committees. Multinational imaging and implant houses keep Indian subsidiaries and still need a local importer or C&F for many SKUs. BioNixus studies those named licences, rate contracts and chain vendor codes.',
  stats: [
    { value: 'CDSCO', label: 'Central Drugs Standard Control Organisation — medical-device licensing authority' },
    { value: 'GeM / AIIMS', label: 'Public rate-contract and institute-tender path most central-hospital volume still rides' },
    { value: 'PLI', label: 'Production-linked incentive that pulled more device assembly onto Indian factory floors' },
    { value: 'Apollo', label: 'Private-chain procurement benchmark other groups are measured against in fieldwork' },
  ],
  channelHeading: 'Licence, rate contract, chain vendor code',
  channelBody:
    'A device that will be used in an Indian public hospital needs a CDSCO medical-device licence — import or manufacture — held by an Indian legal entity, plus a place on a GeM catalogue, an AIIMS or other institute rate contract, or a state-corporation tender (TNMSC, KMSCL, Odisha, Rajasthan and the others). That is a different object from a US 510(k) or an EU MDR certificate that the importer waves at a private biomedical engineer. Capital equipment for AIIMS, ESIC, railway and defence hospitals is specified by the institute’s stores and the user department, then opened as a tender that domestic preference language now shapes. Skanray and BPL fight for mid-tier monitoring and imaging seats on those lots; GE HealthCare India and Siemens Healthineers India still win the high-end teaching-hospital rooms. Consumables — syringes, IV cannulae, sutures, rapid tests — are volume sports: Hindustan Syringes and Poly Medicure live on rate contracts; Transasia and Trivitron live on analyser-plus-reagent placements in public and private labs. Meril has used domestic manufacturing and clinical programmes to put stents and structural-heart devices onto Indian cath-lab shelves beside the import majors. Apollo’s central procurement, and the equivalent desks at Fortis, Max and Narayana, buy capital on committee cycles and consumables on vendor-code contracts that a new importer will not enter by sending a Delhi hotel meeting request. State corporations remain a separate map: a Tamil Nadu win does not stock a Rajasthan dock. BioNixus reconstructs the named CDSCO licence, the named rate contract and the named chain vendor code before an India volume number is treated as real.',
  companies: [
    {
      name: 'CDSCO medical devices',
      hq: 'New Delhi',
      type: 'Government',
      focus: 'Import and manufacturing licences, classification and post-market duties',
      notes: 'The licence an Indian legal entity must hold before GeM, AIIMS or Apollo procurement will treat the SKU as a real catalogue line.',
    },
    {
      name: 'AIIMS / central institute and GeM tenders',
      hq: 'New Delhi / GeM',
      type: 'Government',
      focus: 'Institute specifications and the Government e-Marketplace catalogue path',
      notes: 'AIIMS user-department specs are still copied by state corporations; GeM is the catalogue many central and state buyers now raise against.',
    },
    {
      name: 'Apollo Hospitals — central procurement',
      hq: 'Chennai / Hyderabad',
      type: 'Operator',
      focus: 'Largest private-chain capital and consumable vendor-code desk',
      notes: 'The private benchmark. A launch that only briefed a Delhi importer has not entered Apollo’s vendor-code and capital-committee cycle.',
    },
    {
      name: 'Poly Medicure',
      hq: 'Faridabad',
      type: 'Local',
      focus: 'Infusion therapy, vascular access and dialysis consumables',
      notes: 'Faridabad volume house that public rate contracts and private chains already treat as a default cannula and infusion name.',
    },
    {
      name: 'Hindustan Syringes & Medical Devices (HMD)',
      hq: 'Faridabad',
      type: 'Local',
      focus: 'Syringes, needles and auto-disable public-health volumes',
      notes: 'The syringe name state immunisation and hospital rate contracts have used for decades; not a premium implant story.',
    },
    {
      name: 'Trivitron Healthcare',
      hq: 'Chennai',
      type: 'Local',
      focus: 'IVD, imaging accessories and hospital-equipment distribution plus manufacture',
      notes: 'Chennai group that sits on both the analyser placement and the dealer side of public and private laboratory tenders.',
    },
    {
      name: 'Skanray Technologies',
      hq: 'Mysuru',
      type: 'Local',
      focus: 'Patient monitoring, imaging and electromedical systems',
      notes: 'Mysuru manufacturer that mid-tier public-hospital lots shortlist when an import monitoring quote fails the tender ceiling.',
    },
    {
      name: 'Meril',
      hq: 'Vapi',
      type: 'Local',
      focus: 'Coronary stents, structural heart, orthopaedics and endosurgery',
      notes: 'Vapi manufacturing and clinical programmes have put Meril onto Indian cath-lab shelves beside the import majors on many lots.',
    },
    {
      name: 'Transasia Bio-Medicals (Erba)',
      hq: 'Mumbai',
      type: 'Local',
      focus: 'Clinical-chemistry and immunoassay analysers and reagents',
      notes: 'Mumbai IVD house whose placements in public and mid-tier private labs are a reagent-lock story, not a one-time analyser sale.',
    },
    {
      name: 'BPL Medical Technologies',
      hq: 'Bengaluru',
      type: 'Local',
      focus: 'Monitoring, ECG, defibrillation and imaging',
      notes: 'Bengaluru electromedical name that district-hospital tenders still recognise when a multinational monitoring quote is out of band.',
    },
    {
      name: 'GE HealthCare India',
      hq: 'Bengaluru',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Bengaluru commercial and some manufacturing presence; wins teaching-hospital imaging rooms and loses more district lots than global slides show.',
    },
    {
      name: 'Siemens Healthineers India',
      hq: 'Bengaluru / Mumbai',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Teaching-hospital CT/MR and lab seats; state-corporation mid-tier lots increasingly invite Skanray, BPL or other domestic names beside it.',
    },
    {
      name: 'Medtronic India',
      hq: 'Mumbai / Delhi NCR',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting centres; many SKUs still move through an Indian importer who holds the CDSCO licence and the hospital code.',
    },
    {
      name: 'State medical-services corporations (TNMSC, KMSCL and peers)',
      hq: 'State capitals',
      type: 'Government',
      focus: 'State-level rate contracts for equipment and consumables',
      notes: 'A Tamil Nadu award does not stock Rajasthan. BioNixus treats each corporation as its own buyer, not as a footnote to AIIMS.',
    },
    {
      name: 'Indian C&F and hospital distributors',
      hq: 'Delhi NCR / Mumbai / Chennai',
      type: 'Distributor',
      focus: 'Licence-holding importers, warehousing and hospital last-mile',
      notes: 'The vendor code a district store actually pays when the multinational subsidiary does not invoice the dock.',
    },
    {
      name: 'Fortis / Max / Narayana — chain procurement desks',
      hq: 'Delhi NCR / Bengaluru',
      type: 'Operator',
      focus: 'Private-hospital capital committees and consumable vendor lists',
      notes: 'Second-tier private volume after Apollo; each desk has its own capital cycle and will not share Apollo’s vendor-code clock.',
    },
  ],
  categoryBlurbs: {
    local:
      'Faridabad, Vapi, Mysuru, Chennai and Bengaluru manufacturers already on GeM, AIIMS-style rate contracts and private-chain vendor lists.',
    mnc:
      'Bengaluru and Mumbai multinational seats that win teaching-hospital rooms and still share district invoices with C&F houses.',
    regional:
      'State-corporation winners and city C&F houses that hold the licence and the last-mile when a subsidiary does not invoice the dock.',
    trade:
      'CDSCO as the licence, GeM and AIIMS as the public specification, Apollo and peer chains as the private vendor-code door.',
  },
  growthDrivers: [
    {
      title: 'CDSCO licence waves and importer accountability',
      desc: 'Classification waves turned informal import books into licensed files; a hospital store now asks for the CDSCO number before it opens a new vendor code.',
    },
    {
      title: 'PLI and domestic preference on public lots',
      desc: 'Production-linked incentive and make-in-India language on GeM and institute tenders have pulled Skanray, BPL, Meril and Poly Medicure onto lots import houses used to treat as automatic.',
    },
    {
      title: 'Private-chain capital cycles',
      desc: 'Apollo, Fortis, Max, Manipal and Narayana refresh imaging and OR suites on committee calendars that a Delhi hotel meeting will not unlock.',
    },
    {
      title: 'State-corporation fragmentation',
      desc: 'TNMSC, KMSCL and their peers reset consumable prices on their own clocks; a single AIIMS rate contract is not a national public win.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices licensed in India?',
      a: 'CDSCO issues import or manufacturing licences under the medical-device rules. An Indian legal entity holds the file. Hospitals and GeM catalogues now ask for that number before they open a vendor code.',
    },
    {
      q: 'Who buys equipment for Indian public hospitals?',
      a: 'AIIMS and other central institutes run their own tenders. GeM is the catalogue many central and state buyers raise against. State medical-services corporations run separate rate contracts.',
    },
    {
      q: 'How does Apollo procurement work for devices?',
      a: 'A central desk issues vendor codes and runs capital committees. Other chains copy the structure but not the calendar. A new importer is not on the list until that desk says so.',
    },
    {
      q: 'Which Indian manufacturers belong on a launch brief?',
      a: 'Poly Medicure and HMD for consumables, Trivitron and Transasia for IVD, Skanray and BPL for electromedical, Meril for stents and implants — each already on public or chain lists.',
    },
    {
      q: 'What does BioNixus study on Indian device accounts?',
      a: 'CDSCO licence-to-SKU traces, AIIMS and state-corporation rate-contract reconstructions, Apollo and peer-chain vendor-code interviews, and district-versus-teaching-hospital installed-base walks.',
    },
    {
      q: 'Is the directory an Indian market-share table?',
      a: 'No. Names appear because they recur in BioNixus hospital and laboratory fieldwork; sequence is by role, not by turnover.',
    },
  ],
  regulatorSource: {
    name: 'CDSCO — Central Drugs Standard Control Organisation, medical device licensing',
    url: 'https://cdsco.gov.in',
    asOf: '2026-09-05',
  },
  sources: [
    'CDSCO medical-device rules, classification and licence notices, consulted 2026',
    'GeM catalogue and AIIMS / central-institute tender notices',
    'Poly Medicure, HMD, Trivitron, Skanray, Meril, Transasia and BPL published company descriptions',
    'BioNixus India hospital, laboratory and state-corporation fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'CDSCO licence-to-SKU traces so the number on the file matches the carton a district store unwraps.',
    'AIIMS and named state-corporation rate-contract reconstructions (TNMSC, KMSCL and peers) treated as separate buyers.',
    'Apollo, Fortis, Max and Narayana vendor-code and capital-committee interviews on different calendars.',
    'Teaching-hospital versus district installed-base walks for imaging and monitoring, so a Bengaluru multinational seat is not counted as national cover.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
