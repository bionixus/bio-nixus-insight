import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesGermany: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'germany',
  title: 'German Medtech Makers, BfArM and Hospital Buying (2026)',
  metaDescription:
    'German medical device companies: Siemens Healthineers, B. Braun, Fresenius, Zeiss, Dräger, Karl Storz, Ottobock, Biotronik, Hartmann, Roche, BfArM, GKV buying.',
  introLead:
    'Germany is Europe’s densest medtech industrial base: imaging, infusion, dialysis, endoscopy, ventilation and prosthetics are designed in Erlangen, Melsungen, Bad Homburg, Tuttlingen and Duderstadt, then sold into a hospital system whose capital budgets sit inside DRG rates and whose consumable volumes sit inside GKV contracts.',
  introRest:
    'BfArM is the federal device competent authority that hospitals and notified-body files still name first after the EU MDR shift. GKV-Spitzenverband and the large Einkaufsgemeinschaften (Prospitalia, EK-UNICO, Sana Einkauf) decide which catalogues actually reach wards. Siemens Healthineers, B. Braun, Fresenius Medical Care, Fresenius Kabi, Carl Zeiss Meditec, Dräger, Karl Storz, Ottobock, Biotronik and Paul Hartmann are the domestic names a biomedical engineer in a university clinic already stocks or services. Roche Diagnostics Germany is the Swiss IVD house with the deepest German lab installed base. Medtronic and Johnson & Johnson MedTech run Düsseldorf and Norderstedt organisations that still need a German importer for many SKUs. BioNixus interviews named Klinikum buyers, not a generic “DACH hospital” cell.',
  stats: [
    { value: 'BfArM', label: 'Federal Institute for Drugs and Medical Devices — national device competent authority' },
    { value: 'GKV', label: 'Statutory-insurance umbrella whose contracts shape hospital consumable catalogues' },
    { value: 'Tuttlingen', label: 'Surgical-instrument cluster that still supplies German and export operating theatres' },
    { value: 'MDR', label: 'EU Medical Device Regulation that German notified bodies and BfArM now police' },
  ],
  channelHeading: 'How a scanner, a pump or a pack reaches a German ward',
  channelBody:
    'A Class IIa or III product that will sit in a German university hospital starts as an EU MDR technical file, a German or other notified-body certificate, and a BfArM-visible registration. That is not the sale. Capital equipment — CT, MRI, angiography, anaesthesia workstations, sterilizers — is specified by the Klinikdirektion and the biomedical-engineering department, then purchased through the hospital’s own Vergabe office or through a group-purchasing Einkaufsgemeinschaft that has already framed a multi-year lot. University clinics (Charité, LMU, Universitätsklinikum Heidelberg, Uniklinik Köln) still run their own large imaging and OR tenders; municipal and church-owned Häuser more often ride Prospitalia, EK-UNICO or Sana Einkauf. Consumables and implants follow a second path: the manufacturer or its German Vertriebspartner lists the SKU into the Einkaufskatalog, the ward or the OR coordinator pulls against a Rahmenvertrag, and GKV-Spitzenverband’s federal joint arrangements plus the hospital’s own DRG mix decide whether the premium line survives the next budget round. Siemens Healthineers sells and services imaging from Erlangen with a direct field force; B. Braun and Fresenius Kabi win infusion and nutrition on both tender and ward-preference; Karl Storz and Zeiss win endoscopy and microsurgery on surgeon preference that purchasing then has to accommodate. Foreign brands that lack a GmbH usually appoint a Fachhändler who holds inventory in a German Lager and appears on the hospital’s Lieferantenliste. Service contracts, not list price, decide the installed-base renewal. BioNixus maps those named accounts — which Einkaufsgemeinschaft holds the lot, which Uniklinik still buys direct, which Tuttlingen house still owns the tray — before a launch forecast is written.',
  companies: [
    {
      name: 'BfArM (Bundesinstitut für Arzneimittel und Medizinprodukte)',
      hq: 'Bonn',
      type: 'Government',
      focus: 'National competent authority for medical devices and vigilance',
      notes: 'Hospitals and importers still name BfArM first when an MDR file, a FSCA or a German registration question lands on a biomedical desk.',
    },
    {
      name: 'GKV-Spitzenverband / hospital purchasing overlay',
      hq: 'Berlin',
      type: 'Government',
      focus: 'Statutory-insurance umbrella that shapes hospital contract catalogues',
      notes: 'Not a warehouse. Its federal arrangements and the DRG environment decide which consumable and implant lines remain economically usable.',
    },
    {
      name: 'Siemens Healthineers',
      hq: 'Erlangen',
      type: 'Local',
      focus: 'Imaging, laboratory diagnostics, radiotherapy and digital health',
      notes: 'The Erlangen house still owns the largest German imaging installed base and sells service contracts as hard as the gantry itself.',
    },
    {
      name: 'B. Braun Melsungen',
      hq: 'Melsungen',
      type: 'Local',
      focus: 'Infusion therapy, surgical instruments, orthopaedics and dialysis accessories',
      notes: 'Melsungen remains the default German infusion and Aesculap surgical name in municipal and church hospital catalogues.',
    },
    {
      name: 'Fresenius Medical Care / Fresenius Kabi',
      hq: 'Bad Homburg',
      type: 'Local',
      focus: 'Dialysis systems and clinic services; infusion, nutrition and transfusion',
      notes: 'FMC runs a large German dialysis installed base; Kabi sits on the same campus as the hospital nutrition and infusion competitor to B. Braun.',
    },
    {
      name: 'Carl Zeiss Meditec',
      hq: 'Jena',
      type: 'Local',
      focus: 'Ophthalmic devices, surgical microscopes and intraoperative visualisation',
      notes: 'OR and eye-clinic capital lists in university Häuser still treat Zeiss as the reference microscope and ophthalmic-diagnostics house.',
    },
    {
      name: 'Drägerwerk',
      hq: 'Lübeck',
      type: 'Local',
      focus: 'Anaesthesia workstations, ICU ventilation and neonatal thermoregulation',
      notes: 'Lübeck workstations and ventilators remain the specification many German Intensivstationen write before a competitor is even invited.',
    },
    {
      name: 'Karl Storz',
      hq: 'Tuttlingen',
      type: 'Local',
      focus: 'Endoscopy towers, instruments and OR integration',
      notes: 'Tuttlingen endoscopy still wins on surgeon preference; purchasing then has to fit the tower into the Einkaufsgemeinschaft lot.',
    },
    {
      name: 'Ottobock',
      hq: 'Duderstadt',
      type: 'Local',
      focus: 'Prosthetics, orthotics and wheelchair systems',
      notes: 'Rehabilitation clinics and Sanitätshäuser treat Duderstadt as the German prosthetic reference, with GKV Hilfsmittel listing as the commercial gate.',
    },
    {
      name: 'Biotronik',
      hq: 'Berlin',
      type: 'Local',
      focus: 'Cardiac rhythm management, vascular intervention and home monitoring',
      notes: 'German electrophysiology labs still stock Berlin-made CRM devices beside the US majors, with implant choice sitting on the rhythm board.',
    },
    {
      name: 'Paul Hartmann',
      hq: 'Heidenheim',
      type: 'Local',
      focus: 'Wound care, incontinence and infection-prevention consumables',
      notes: 'Ward-level volume that Einkaufsgemeinschaften re-tender every cycle; Heidenheim competes on logistics as much as on dressing science.',
    },
    {
      name: 'Roche Diagnostics Germany',
      hq: 'Mannheim / Penzberg',
      type: 'MNC',
      focus: 'Central-lab analysers, molecular diagnostics and point-of-care',
      notes: 'Swiss IVD group with the deepest German university-lab reagent lock-in and a Mannheim commercial organisation hospitals already know.',
    },
    {
      name: 'Medtronic Germany',
      hq: 'Meerbusch',
      type: 'MNC',
      focus: 'Cardiovascular, surgical, diabetes, spine and neuromodulation',
      notes: 'Meerbusch runs clinical specialists; many implant SKUs still move through a German Fachhändler who holds the hospital Lieferantennummer.',
    },
    {
      name: 'Johnson & Johnson MedTech Germany',
      hq: 'Norderstedt',
      type: 'MNC',
      focus: 'Ethicon surgery, DePuy Synthes orthopaedics and energy devices',
      notes: 'Norderstedt clinical team sits beside appointed German distributors who carry trays into the OR and invoice the Einkaufsgemeinschaft.',
    },
    {
      name: 'Prospitalia',
      hq: 'Ulm',
      type: 'Operator',
      focus: 'Hospital group-purchasing organisation for equipment and consumables',
      notes: 'One of the Einkaufsgemeinschaften that municipal and church Häuser ride when they no longer want to run every lot themselves.',
    },
    {
      name: 'EK-UNICO',
      hq: 'Köln',
      type: 'Operator',
      focus: 'Hospital purchasing cooperative used by a large public-clinic cluster',
      notes: 'Cologne-centred buying group that appears on the same tender shortlists as Prospitalia when a launch needs a non-Uniklinik volume path.',
    },
    {
      name: 'Medizintechnik-Fachhändler (regional specialist distributors)',
      hq: 'Multiple Länder',
      type: 'Distributor',
      focus: 'Regional inventory, installation and service for brands without a full GmbH field force',
      notes: 'The Lieferantenliste name a Kreis-Krankenhaus actually pays; BioNixus scores coverage Land by Land rather than treating Düsseldorf as Germany.',
    },
  ],
  categoryBlurbs: {
    local:
      'German manufacturers whose factories and service organisations already sit inside university and municipal hospital specifications, from Erlangen imaging to Tuttlingen endoscopy.',
    mnc:
      'Non-German device and IVD houses with GmbH commercial seats that still share hospital invoices with Fachhändler and Einkaufsgemeinschaft contracts.',
    regional:
      'Länder-level specialist distributors and cluster firms that hold inventory and service contracts for Häuser outside the five largest Unikliniken.',
    trade:
      'BfArM as the competent authority, GKV-Spitzenverband as the insurance overlay, and the Einkaufsgemeinschaften that turn a certificate into a catalogue line.',
  },
  growthDrivers: [
    {
      title: 'MDR certificate scarcity and portfolio pruning',
      desc: 'Notified-body queues have forced some SKUs off German catalogues; hospitals now ask which lines still have a valid certificate before they reopen a lot.',
    },
    {
      title: 'Uniklinik imaging and OR renewal',
      desc: 'Charité, LMU and the large Baden-Württemberg and NRW university clinics are cycling CT, angiography and integrated-OR suites on service-contract clocks, not on a single federal tender.',
    },
    {
      title: 'Einkaufsgemeinschaft consolidation',
      desc: 'Prospitalia, EK-UNICO and Sana Einkauf keep absorbing municipal volume, so a launch that only briefed a Uniklinik chef buyer misses the cooperative that actually signs the Rahmenvertrag.',
    },
    {
      title: 'Home-care and Hilfsmittel shift',
      desc: 'Ottobock-class prosthetics, Hartmann-class incontinence and diabetes devices move more volume through Sanitätshaus and GKV Hilfsmittel lists than through the hospital dock.',
    },
  ],
  faq: [
    {
      q: 'Who is the German medical device regulator?',
      a: 'BfArM in Bonn is the federal competent authority for devices and vigilance. EU MDR certificates still come from notified bodies; BfArM is the German desk hospitals and importers call when a file or a field-safety action is in dispute.',
    },
    {
      q: 'How do German hospitals buy capital equipment?',
      a: 'University clinics run their own Vergabe lots for imaging and OR suites. Municipal and church Häuser more often buy through Einkaufsgemeinschaften such as Prospitalia or EK-UNICO, with biomedical engineering writing the specification the lot must meet.',
    },
    {
      q: 'What role does GKV-Spitzenverband play in device adoption?',
      a: 'It does not warehouse product. Federal statutory-insurance arrangements and the DRG mix decide whether a premium consumable or implant remains economically usable after the next budget round.',
    },
    {
      q: 'Which German manufacturers should a launch brief name first?',
      a: 'Siemens Healthineers for imaging, B. Braun and Fresenius for infusion and dialysis, Dräger for anaesthesia and ventilation, Karl Storz and Zeiss for endoscopy and microscopy, Ottobock for prosthetics, Biotronik for CRM, Hartmann for ward consumables.',
    },
    {
      q: 'What does BioNixus study on German medtech accounts?',
      a: 'Installed-base walks in named Unikliniken, Einkaufsgemeinschaft lot reconstructions, Fachhändler coverage scores by Land, and surgeon-versus-purchasing interviews on which Tuttlingen or Erlangen line actually stays on the tray.',
    },
    {
      q: 'Is this list a German market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus Klinik fieldwork and on BfArM-visible files; sequence is by role, not by revenue.',
    },
  ],
  regulatorSource: {
    name: 'BfArM — medical devices, vigilance and German competent-authority notices',
    url: 'https://www.bfarm.de',
    asOf: '2026-09-05',
  },
  sources: [
    'BfArM medical-device and field-safety publications, consulted 2026',
    'GKV-Spitzenverband hospital-contract and Hilfsmittel framework pages',
    'Siemens Healthineers, B. Braun, Fresenius, Zeiss Meditec, Dräger, Karl Storz and Roche Diagnostics published German site and annual-report descriptions',
    'BioNixus Germany hospital, Einkaufsgemeinschaft and Fachhändler fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Named Uniklinik imaging and ICU walks (Charité, LMU, Heidelberg, Köln) so an Erlangen or Lübeck installed-base claim is counted, not assumed.',
    'Einkaufsgemeinschaft lot reconstructions at Prospitalia and EK-UNICO to see which SKUs survive a Rahmenvertrag refresh.',
    'Surgeon-preference versus purchasing interviews in Tuttlingen-supplied theatres, scored separately from the catalogue price.',
    'Land-by-Land Fachhändler coverage scores so a Meerbusch subsidiary is not treated as national last-mile.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
