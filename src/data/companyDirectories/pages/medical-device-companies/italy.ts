import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesItaly: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'italy',
  title: 'Italian Medtech: Ministry, LivaNova and Regional Buying (2026)',
  metaDescription:
    'Italy medical device companies: Ministry of Health, LivaNova, Diasorin, Menarini, Esaote, Artsana, regional buying and hospital distributors.',
  introLead:
    'Italian hospital technology is a regional-tender market with a Roman overlay: the Ministry of Health holds the device register, AIFA’s shadow still appears on some reimbursement conversations, and the real envelope is opened by a regione — Lombardia, Lazio, Emilia-Romagna, Veneto — or by Consip when the lot is national enough.',
  introRest:
    'LivaNova (the Sorin heritage), Diasorin, Menarini Diagnostics, Esaote and Artsana are the Italian houses a ospedale universitario biomedical engineer already knows — cardiac surgery, IVD, ultrasound, baby and consumer-adjacent medical. Siemens, GE, Philips and Medtronic keep Milano and Roma seats that bid regional gare and still appoint distributori for the Mezzogiorno. The Ministry’s medical-device directorate is the register; regional centrali di committenza and ASL/AO purchasing are the volume. BioNixus fields named regioni, not a single “Italian hospital” average.',
  stats: [
    { value: 'Ministry', label: 'Ministero della Salute device register and national overlay' },
    { value: 'Regioni', label: 'Regional centrali di committenza that actually open the envelope' },
    { value: 'Consip', label: 'National framework path used when a lot is wide enough to leave the regione' },
    { value: 'CHU-peers', label: 'IRCCS and university hospitals whose specs a provincial ASL will not copy' },
  ],
  channelHeading: 'Ministry register, regional gara, distributore invoice',
  channelBody:
    'A device that will be used in an Italian public hospital needs a Ministry of Health registration (and an EU MDR certificate), plus a place on a regional gara, an ASL/AO lot or a Consip convention that the ospedale’s provveditorato will raise against. That is a different object from a CE mark a Swiss hub waves at a Milano biomedical engineer. Capital equipment is specified by the unità operativa and purchased by the regione’s centrale or by the individual IRCCS when the statute allows. Lombardia’s ARIA, Lazio’s regional vehicles, Intercent-ER in Emilia-Romagna and their peers do not share one catalogue. Consumables, implants and IVD reagents ride distributori who hold inventory in Italian magazzini and appear on the ospedale’s anagrafica fornitori. LivaNova’s cardiac-surgery heritage still sits in Italian sale operatorie; Diasorin’s immunoassay placements lock reagents into hospital and private labs; Menarini Diagnostics defends a point-of-care and lab book; Esaote competes in ultrasound and dedicated MRI inside the same rooms GE and Philips treat as theirs; Artsana’s medical-adjacent baby and consumer book should be labelled honestly and not filed as a cath-lab peer. AIFA does not run the device register the way it runs drugs, but reimbursement conversations still drag its name into the room — BioNixus keeps the Ministry file and the AIFA shadow in separate folders. Private gruppi (Humanitas, San Donato, GVM) buy on committee cycles. BioNixus reconstructs the named Ministry number, the named regional gara and the named provveditorato before an Italy volume figure is signed.',
  companies: [
    {
      name: 'Ministry of Health — medical devices directorate',
      hq: 'Rome',
      type: 'Government',
      focus: 'National device register and competent-authority overlay',
      notes: 'The Roman file a fabbricante or mandatario must hold. AIFA may appear in reimbursement talk; the register itself sits here.',
    },
    {
      name: 'Regional centrali di committenza (ARIA, Intercent-ER and peers)',
      hq: 'Milan / Bologna / regional capitals',
      type: 'Government',
      focus: 'Regional gare for equipment and consumables',
      notes: 'The envelope that stocks the ospedale. A Lombardia award does not fill a Sicilian ASL, and BioNixus will not average them.',
    },
    {
      name: 'LivaNova (Sorin heritage)',
      hq: 'London / Mirandola heritage',
      type: 'Local',
      focus: 'Cardiac surgery, cardiopulmonary and neuromodulation',
      notes: 'Mirandola-born cardiac-surgery house now listed as LivaNova; Italian sale operatorie still treat the heritage as a local name.',
    },
    {
      name: 'Diasorin',
      hq: 'Saluggia',
      type: 'Local',
      focus: 'Immunodiagnostic analysers and specialty reagents',
      notes: 'Saluggia IVD house whose hospital-lab placements are a reagent-lock story, not a one-time analyser invoice.',
    },
    {
      name: 'Menarini Diagnostics',
      hq: 'Florence',
      type: 'Local',
      focus: 'Point-of-care, haematology and laboratory systems',
      notes: 'Florence diagnostics book that ASL laboratories already stock; belongs beside Diasorin on an IVD brief, not on a stent slide.',
    },
    {
      name: 'Esaote',
      hq: 'Genoa',
      type: 'Local',
      focus: 'Ultrasound and dedicated MRI',
      notes: 'Genoa imaging house that provincial and sports-medicine rooms still shortlist when a GE or Philips quote overshoots the gara ceiling.',
    },
    {
      name: 'Artsana (medical-adjacent)',
      hq: 'Grandate',
      type: 'Local',
      focus: 'Baby care, some consumer-medical and pharmacy-adjacent devices',
      notes: 'Honestly a consumer-and-pharmacy house with medical-adjacent SKUs. Not a CHU cath-lab peer, and this page will not pretend otherwise.',
    },
    {
      name: 'Siemens Healthineers Italia',
      hq: 'Milan',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Milano commercial seat that wins IRCCS imaging rooms; Mezzogiorno gare still score a service van the seat must actually staff.',
    },
    {
      name: 'GE HealthCare Italia',
      hq: 'Milan',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens and Esaote inside the same ultrasound and CT rooms; regional gare are the clock, not a national framework.',
    },
    {
      name: 'Medtronic Italia',
      hq: 'Milan',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting IRCCS; many SKUs still move through a distributore who holds the anagrafica fornitori number.',
    },
    {
      name: 'Consip (national conventions)',
      hq: 'Rome',
      type: 'Government',
      focus: 'National public-procurement conventions some device lots still ride',
      notes: 'Used when a lot is wide enough to leave the regione. Missing the regional centrale because you only briefed Consip is a common failure.',
    },
    {
      name: 'Italian hospital distributori',
      hq: 'Milan / Rome / regional',
      type: 'Distributor',
      focus: 'Inventory, installation and ASL last-mile for foreign brands',
      notes: 'The invoice a provincial provveditorato actually pays when the Milano subsidiary does not bill the dock.',
    },
    {
      name: 'Humanitas / San Donato / GVM — private-group purchasing',
      hq: 'Milan / regional',
      type: 'Operator',
      focus: 'Private IRCCS and clinic-group capital committees',
      notes: 'Faster cycles than a regional gara on some lines. A third door beside the centrale and Consip.',
    },
    {
      name: 'Philips Italia (Health Systems)',
      hq: 'Milan',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in IRCCS and private clinics; regional gare and private committees are different clocks.',
    },
    {
      name: 'IRCCS and university-hospital provveditorati',
      hq: 'Milan / Rome / Turin / Bologna',
      type: 'Operator',
      focus: 'Academic-hospital specifications inside the SSN',
      notes: 'Policlinico specs a provincial ASL will not copy. They are public, and they are not the district hospital.',
    },
    {
      name: 'Johnson & Johnson MedTech Italia',
      hq: 'Rome / Milan',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Clinical-specialist plus distributore model; a Lombardia gara win does not automatically stock a Campania ASL.',
    },
  ],
  categoryBlurbs: {
    local:
      'Italian cardiac, IVD, ultrasound and medical-adjacent houses — LivaNova heritage, Diasorin, Menarini Diagnostics, Esaote, Artsana labelled honestly.',
    mnc:
      'Milano and Roma multinational seats that win IRCCS rooms and still share provincial invoices with distributori.',
    regional:
      'Distributori and Mezzogiorno-facing houses that hold the anagrafica fornitori number outside the northern IRCCS.',
    trade:
      'Ministry register in Rome, regional centrali and Consip as the lots, ASL/AO provveditorati as the dock.',
  },
  growthDrivers: [
    {
      title: 'Regional gara fragmentation',
      desc: 'Lombardia, Lazio, Emilia-Romagna and a Sicilian ASL open on different statutes. A Milano award that never reached Palermo is a failed national launch.',
    },
    {
      title: 'Ministry register versus AIFA shadow',
      desc: 'The device file sits at the Ministry. Reimbursement talk still drags AIFA into the room. BioNixus keeps those two folders apart.',
    },
    {
      title: 'IRCCS specs versus provincial ASL lots',
      desc: 'Humanitas, Policlinico and peer IRCCS write academic specs a district ospedale will not copy; a launch needs both samples.',
    },
    {
      title: 'Private-group committee speed',
      desc: 'San Donato, GVM and Humanitas will trial a SKU the regional gara has not opened; mixing those clocks is the briefing error.',
    },
  ],
  faq: [
    {
      q: 'Who regulates medical devices in Italy?',
      a: 'The Ministry of Health holds the device register and the competent-authority overlay. EU MDR certificates come from notified bodies. AIFA may appear in reimbursement talk; it does not replace the Ministry file.',
    },
    {
      q: 'Who buys devices for Italian public hospitals?',
      a: 'Regional centrali di committenza open most gare. Consip is used for some national conventions. Individual ASL, AO and IRCCS provveditorati still run lots their statute allows.',
    },
    {
      q: 'Which Italian manufacturers belong on a brief?',
      a: 'LivaNova (Sorin heritage) for cardiac surgery, Diasorin and Menarini Diagnostics for IVD, Esaote for ultrasound and dedicated MRI, Artsana only where the medical-adjacent book is the brief.',
    },
    {
      q: 'Does a Lombardia gara stock the whole country?',
      a: 'No. Each regione is its own buyer. A northern award does not fill a southern ASL, and Consip is a third path, not a substitute for the centrale.',
    },
    {
      q: 'What does BioNixus study on Italian device accounts?',
      a: 'Ministry-number traces, named regional gara reconstructions, IRCCS versus ASL specification interviews, and distributore coverage scores south of Rome.',
    },
    {
      q: 'Is this an Italian market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus ospedale and laboratorio fieldwork; sequence is by role, not by fatturato.',
    },
  ],
  regulatorSource: {
    name: 'Ministero della Salute — medical devices directorate and national register',
    url: 'https://www.salute.gov.it',
    asOf: '2026-09-05',
  },
  sources: [
    'Ministero della Salute medical-device register and notices, consulted 2026',
    'Regional centrale and Consip gara notices (ARIA, Intercent-ER and peers)',
    'LivaNova, Diasorin, Menarini Diagnostics, Esaote and Artsana published descriptions',
    'BioNixus Italy IRCCS, ASL and regional-gara fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Named regional gara reconstructions in Lombardia, Lazio, Emilia-Romagna and one southern ASL, treated as four buyers.',
    'Ministry register-number traces against the carton a provveditorato accepts.',
    'IRCCS versus provincial ASL specification interviews so a Policlinico spec is not copied onto a district lot.',
    'Distributore coverage scores south of Rome so a Milano subsidiary is not counted as Mezzogiorno last-mile.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
