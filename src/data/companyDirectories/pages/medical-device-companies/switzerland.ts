import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesSwitzerland: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'switzerland',
  title: 'Swiss Medtech: Swissmedic, Roche and Insel Buying (2026)',
  metaDescription:
    'Switzerland medical device companies: Swissmedic, Roche Diagnostics, Straumann, Sonova, Ypsomed, Hamilton Medical, Medtronic and Inselspital.',
  introLead:
    'Swiss hospital technology is a cantonal-buyer market sitting on an export-industry floor: Swissmedic clears the device, Inselspital and the other university hospitals write the specification, and Roche Diagnostics, Straumann, Sonova, Ypsomed and Hamilton Medical already sell from Swiss factories into rooms that foreign launch decks treat as a rounding error.',
  introRest:
    'Swissmedic is the competent authority after the country’s MDR-aligned shift. Roche Diagnostics in Rotkreuz is the IVD house whose analysers lock reagents into Kantonsspital labs. Straumann owns the dental-implant conversation; Sonova the hearing-system conversation; Ypsomed the injection-and-diabetes-device conversation; Hamilton Medical the ICU-ventilation conversation. Medtronic Switzerland keeps a commercial seat that still needs a Swiss importer for some SKUs. University hospitals — Insel (Bern), USZ, CHUV, HUG, USB — and the large Kantonsspitäler are the public buyers. BioNixus fields those named Häuser, not a generic “DACH” cell borrowed from a German brief.',
  stats: [
    { value: 'Swissmedic', label: 'Swiss agency for therapeutic products — device competent authority' },
    { value: 'Insel / USZ', label: 'University-hospital buyers whose specs a regional Kantonsspital will not copy' },
    { value: 'OKP / BAG', label: 'Compulsory-insurance and federal overlay that makes a premium SKU economically usable' },
    { value: 'Export floor', label: 'Swiss factories whose overseas numbers dwarf domestic hospital device spend' },
  ],
  channelHeading: 'Swissmedic file, university-hospital lot, Kantonsspital van',
  channelBody:
    'A device that will be used in a Swiss public hospital needs a Swissmedic-visible registration (and, for many SKUs, an EU MDR certificate that Switzerland still recognises under the current alignment), plus a place on a university-hospital or Kantonsspital purchasing lot that the Einkauf and the biomedical-engineering department will award. That is a different commercial object from a German Einkaufsgemeinschaft win a Zürich sales lead waves at Insel. Capital equipment — imaging, anaesthesia, ventilation, laboratory automation — is specified by the Klinik and purchased by the university hospital or the cantonal hospital under public-procurement rules that vary by canton. Inselspital, Universitätsspital Zürich, CHUV, HUG and USB do not share one catalogue. Consumables, implants and IVD reagents ride a second path: BAG and OKP reimbursement status for many outpatient and some inpatient devices, and a Swiss importer who holds inventory in a Swiss Lager. Roche Diagnostics wins analyser-plus-reagent placements that are a lock, not a one-time sale. Straumann’s implant book lives in clinics as much as in hospital OMS theatres. Sonova’s hearing systems sit closer to audiology than to the Insel cath lab. Ypsomed’s injection devices sit in diabetes and pharma-device conversations. Hamilton Medical’s ventilators are the Lübeck-peer name Swiss Intensivstationen already specify. Medtronic Switzerland sells with clinical specialists and still shares some invoices with importers. BioNixus reconstructs the named Swissmedic file, the named university-hospital lot and the named Kantonsspital dock before a Switzerland volume figure is treated as a DACH proxy.',
  companies: [
    {
      name: 'Swissmedic',
      hq: 'Bern',
      type: 'Government',
      focus: 'Device authorisation, establishment licences and vigilance',
      notes: 'The Bern file a Swiss manufacturer or importer must hold before Insel Einkauf will put the SKU on an evaluation shortlist.',
    },
    {
      name: 'Insel Gruppe / university-hospital purchasing',
      hq: 'Bern',
      type: 'Operator',
      focus: 'Flagship academic-hospital capital and consumable lots',
      notes: 'Named account, not the country. An Insel award does not stock USZ, CHUV or a regional Kantonsspital.',
    },
    {
      name: 'Roche Diagnostics (Rotkreuz)',
      hq: 'Rotkreuz',
      type: 'Local',
      focus: 'Central-lab analysers, molecular diagnostics and point-of-care',
      notes: 'Swiss IVD house whose Kantonsspital reagent lock-in is the commercial object; the analyser invoice is the opening move, not the year.',
    },
    {
      name: 'Straumann',
      hq: 'Basel',
      type: 'Local',
      focus: 'Dental implants, biomaterials and digital dentistry',
      notes: 'Clinic-chain and OMS-theatre name; hospital briefs should not file Basel as a cath-lab implant peer of Medtronic.',
    },
    {
      name: 'Sonova',
      hq: 'Stäfa',
      type: 'Local',
      focus: 'Hearing instruments, cochlear and wireless audiology systems',
      notes: 'Stäfa hearing house whose Swiss numbers sit in audiology, not in the Insel angiography suite.',
    },
    {
      name: 'Ypsomed',
      hq: 'Burgdorf',
      type: 'Local',
      focus: 'Injection systems, insulin delivery and diabetes devices',
      notes: 'Burgdorf device house that diabetes and pharma-device briefs already name; not an imaging manufacturer.',
    },
    {
      name: 'Hamilton Medical',
      hq: 'Bonaduz',
      type: 'Local',
      focus: 'ICU ventilation and respiratory-care systems',
      notes: 'Bonaduz ventilators that Swiss Intensivstationen specify beside Dräger; replacement cycles follow service contracts, not a single federal tender.',
    },
    {
      name: 'Medtronic Switzerland',
      hq: 'Münchenbuchsee / national',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting university hospitals; some SKUs still move through a Swiss importer who holds the Swissmedic file.',
    },
    {
      name: 'Universitätsspital Zürich / CHUV / HUG / USB purchasing',
      hq: 'Zürich / Lausanne / Geneva / Basel',
      type: 'Operator',
      focus: 'Remaining university-hospital Einkauf desks',
      notes: 'Four further academic doors. BioNixus does not average them with Insel into a single “Swiss Unispital” cell.',
    },
    {
      name: 'Siemens Healthineers Switzerland',
      hq: 'Zürich',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Zürich commercial seat that wins university-hospital imaging rooms; regional Kantonsspitäler still score a service van.',
    },
    {
      name: 'Swiss hospital importers and Fachhändler',
      hq: 'Zürich / Bern / Romandie',
      type: 'Distributor',
      focus: 'Swissmedic file holders and Kantonsspital last-mile',
      notes: 'The Lieferantennummer a regional house in Graubünden actually pays when the Münchenbuchsee seat does not invoice the dock.',
    },
    {
      name: 'BAG / OKP reimbursement overlay',
      hq: 'Bern',
      type: 'Government',
      focus: 'Federal insurance list and tariff environment for many devices',
      notes: 'Not a warehouse. Missing OKP status is why a cleared SKU still dies in the Kantonsspital budget meeting.',
    },
    {
      name: 'Johnson & Johnson MedTech Switzerland',
      hq: 'Zug / national',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Clinical-specialist plus importer model; an Insel tray path is not a regional Kantonsspital tray path.',
    },
    {
      name: 'Regional Kantonsspital purchasing (Lucerne, St. Gallen and peers)',
      hq: 'Multiple cantons',
      type: 'Operator',
      focus: 'Non-university cantonal-hospital lots',
      notes: 'Where mid-tier imaging and consumable volume actually lives; a university-hospital-only sample under-counts Switzerland.',
    },
    {
      name: 'Philips Switzerland (Health Systems)',
      hq: 'Zürich',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in university and cantonal rooms; Hamilton and Dräger still sit on the same ventilation shortlist.',
    },
    {
      name: 'Hirslanden / private-group purchasing',
      hq: 'Zürich',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable desks',
      notes: 'Faster cycles than a university-hospital lot on some lines. A third door beside Insel and the Kantonsspital.',
    },
  ],
  categoryBlurbs: {
    local:
      'Roche Diagnostics, Straumann, Sonova, Ypsomed and Hamilton Medical — Swiss factories already on lab, clinic, diabetes and ICU lists.',
    mnc:
      'Münchenbuchsee, Zürich and Zug seats that win university-hospital rooms and still share cantonal invoices with importers.',
    regional:
      'Fachhändler who hold the Swissmedic file and the Lieferantennummer outside the five university hospitals.',
    trade:
      'Swissmedic as the Bern gate, Insel and peer university hospitals as the academic lots, BAG/OKP as the insurance overlay.',
  },
  growthDrivers: [
    {
      title: 'University-hospital versus Kantonsspital clocks',
      desc: 'An Insel award that never reached a St. Gallen Kantonsspital is a failed national launch. BioNixus dates both lots.',
    },
    {
      title: 'OKP status versus Swissmedic clearance',
      desc: 'A cleared SKU that lacks a reimbursement path dies in the budget meeting; BioNixus dates the list, not only the licence.',
    },
    {
      title: 'Export-factory numbers versus domestic rooms',
      desc: 'Rotkreuz, Stäfa and Bonaduz export success does not mean the same SKU is on every Swiss Intensivstation; the two facts stay split.',
    },
    {
      title: 'Hirslanden committee speed',
      desc: 'Private Häuser will trial a SKU the university-hospital lot has not opened; mixing those clocks is the DACH briefing error we keep seeing.',
    },
  ],
  faq: [
    {
      q: 'Who regulates medical devices in Switzerland?',
      a: 'Swissmedic in Bern is the competent authority. Alignment with EU MDR still shapes many files. A hospital Einkauf desk will ask for the Swissmedic-visible number before it opens an evaluation.',
    },
    {
      q: 'Who buys devices for Swiss public hospitals?',
      a: 'University hospitals (Insel, USZ, CHUV, HUG, USB) and cantonal hospitals under public-procurement rules that vary by canton. There is no single federal hospital warehouse.',
    },
    {
      q: 'Which Swiss manufacturers belong on a brief?',
      a: 'Roche Diagnostics for IVD, Straumann for dental implants, Sonova for hearing, Ypsomed for injection and diabetes devices, Hamilton Medical for ICU ventilation.',
    },
    {
      q: 'Is Switzerland just a DACH add-on to Germany?',
      a: 'No. Swissmedic, cantonal procurement and OKP lists are a different commercial object from BfArM and a German Einkaufsgemeinschaft. BioNixus fields them as their own map.',
    },
    {
      q: 'What does BioNixus study on Swiss device accounts?',
      a: 'Swissmedic-file traces, named university-hospital and Kantonsspital lot reconstructions, OKP-status interviews, and export-versus-domestic installed-base splits.',
    },
    {
      q: 'Is this a Swiss market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus Spital fieldwork; sequence is by role, not by Umsatz.',
    },
  ],
  regulatorSource: {
    name: 'Swissmedic — Swiss Agency for Therapeutic Products, medical devices',
    url: 'https://www.swissmedic.ch',
    asOf: '2026-09-05',
  },
  sources: [
    'Swissmedic medical-device and establishment notices, consulted 2026',
    'Insel Gruppe, USZ, CHUV, HUG and USB published procurement descriptions',
    'Roche Diagnostics, Straumann, Sonova, Ypsomed and Hamilton Medical published Swiss site descriptions',
    'BioNixus Switzerland university-hospital and Kantonsspital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Insel, USZ, CHUV, HUG and USB Einkauf reconstructions treated as five academic buyers, never as one DACH cell.',
    'Swissmedic-number traces against the carton a Kantonsspital store accepts.',
    'OKP-status versus clearance-date checks on premium SKUs before volume is counted as adopted.',
    'Export-factory versus domestic-room splits for Roche, Hamilton and Ypsomed so overseas numbers are not filed as Swiss hospital demand.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
