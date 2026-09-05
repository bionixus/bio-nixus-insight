import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesFrance: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'france',
  title: 'French Medtech: ANSM, AP-HP Buying and IVD Houses (2026)',
  metaDescription:
    'France medical device companies: ANSM, AP-HP buying, bioMérieux, Guerbet, Stago, Air Liquide Medical, Essilor, Siemens, GE and Philips.',
  introLead:
    'French hospital technology is a reimbursement file wearing a CHU badge: ANSM watches the device, HAS and the LPPR or T2A rules decide whether the SKU is economically usable, and AP-HP’s central purchasing is the public account every launch team wants and almost none should treat as “France”.',
  introRest:
    'bioMérieux, Guerbet, Stago, Air Liquide Medical Systems and Essilor’s instrument book are the French houses a CHU biomedical engineer and a laboratory director already stock. ANSM is the competent authority after MDR. AP-HP buys for the Paris university-hospital system; UGAP and the regional CHU groupements buy for everyone else. Siemens Healthineers France, GE HealthCare France and Philips France hold large imaging and monitoring installed bases and still share provincial invoices with distributeurs. BioNixus interviews named CHU and AP-HP desks, not a single “French hospital” cell.',
  stats: [
    { value: 'ANSM', label: 'Agence nationale de sécurité du médicament et des produits de santé — device competent authority' },
    { value: 'AP-HP', label: 'Paris university-hospital buyer that is large, and is not the rest of France' },
    { value: 'LPPR / T2A', label: 'Reimbursement and DRG environment that decides whether a premium SKU survives the year' },
    { value: 'CHU', label: 'Regional university hospitals whose groupements buy beside AP-HP and UGAP' },
  ],
  channelHeading: 'ANSM file, LPPR or T2A, AP-HP or CHU lot',
  channelBody:
    'A device that will be used in a French public hospital needs an EU MDR certificate, an ANSM-visible registration or vigilance path, and a place on a purchasing lot that AP-HP, a CHU groupement, UGAP or a GHT will actually award. That is a different commercial object from a CE mark that used to travel on a handshake. Capital equipment — imaging, anaesthesia, endoscopy, laboratory automation — is specified by the Pôle and the biomedical-engineering department, then purchased through a marché that the Assistance Publique or the regional CHU runs under public-procurement law. AP-HP’s central direction des achats is the densest single account in the country and still only covers Île-de-France university hospitals. Consumables, implants and IVD reagents ride a second path: LPPR listing for many outpatient and some inpatient devices, T2A bundling for the rest, and a distributeur who holds inventory in a French entrepôt. bioMérieux wins analyser-plus-reagent placements in CHU and private labs; Stago owns a large haemostasis installed base; Guerbet defends contrast-media and some interventional lines; Air Liquide Medical Systems sits on ventilation and medical-gas capital lists; Essilor’s instrument book sits in ophthalmology clinics more than in the CHU cath lab. Siemens, GE and Philips sell imaging with French field forces and still lose provincial lots when the service van is a Paris fiction. Private groups (Ramsay Santé, Elsan, Vivalto) buy on committee cycles that look more like IHH than like AP-HP. BioNixus reconstructs the named ANSM-visible file, the named marché and the named CHU or AP-HP desk before a France volume number is signed.',
  companies: [
    {
      name: 'ANSM',
      hq: 'Saint-Denis',
      type: 'Government',
      focus: 'National competent authority for devices, vigilance and inspections',
      notes: 'The Saint-Denis desk hospitals and fabricants still name when an MDR file or a matériovigilance action is in dispute.',
    },
    {
      name: 'AP-HP — direction des achats',
      hq: 'Paris',
      type: 'Government',
      focus: 'Central purchasing for the Paris university-hospital system',
      notes: 'The densest public account in France, and not the CHU de Lyon, and not a GHT in Brittany. BioNixus will not treat it as the country.',
    },
    {
      name: 'bioMérieux',
      hq: 'Marcy-l’Étoile',
      type: 'Local',
      focus: 'Microbiology and molecular IVD analysers and reagents',
      notes: 'CHU and private-lab reagent-lock name; the commercial object is the placement, not a one-time analyser invoice.',
    },
    {
      name: 'Guerbet',
      hq: 'Villepinte',
      type: 'Local',
      focus: 'Contrast media and some interventional imaging accessories',
      notes: 'French contrast house that radiology departments already have on the LPPR-adjacent and hospital-pharmacy list.',
    },
    {
      name: 'Stago',
      hq: 'Asnières-sur-Seine',
      type: 'Local',
      focus: 'Haemostasis analysers and reagents',
      notes: 'Haemostasis installed base in CHU and private labs that a launch in coagulation has to walk, not assume from a Paris HQ slide.',
    },
    {
      name: 'Air Liquide Medical Systems',
      hq: 'Antony',
      type: 'Local',
      focus: 'Ventilation, anaesthesia accessories and medical-gas systems',
      notes: 'Antony capital-equipment name on ICU and medical-gas lots; not the industrial-gas truck, and briefs should keep those two books apart.',
    },
    {
      name: 'Essilor instruments (ophthalmic)',
      hq: 'Charenton-le-Pont / worldwide',
      type: 'Local',
      focus: 'Ophthalmic diagnostic and finishing instruments',
      notes: 'Clinic and ophthalmology-department book more than a CHU cath-lab book; belongs on an eye-care brief, not on a stent slide.',
    },
    {
      name: 'Siemens Healthineers France',
      hq: 'Saint-Denis',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Large CHU imaging installed base; provincial marchés still score a service van the Saint-Denis seat must actually staff.',
    },
    {
      name: 'GE HealthCare France',
      hq: 'Buc / national',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Buc heritage and a French field force that competes with Siemens and Philips inside the same CHU imaging rooms.',
    },
    {
      name: 'Philips France (Health Systems)',
      hq: 'Suresnes',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in CHU and private clinics; AP-HP lots and provincial GHTs are different clocks.',
    },
    {
      name: 'UGAP / CHU and GHT groupements',
      hq: 'Champs-sur-Marne / regional',
      type: 'Government',
      focus: 'Public procurement vehicles beside AP-HP',
      notes: 'The path a provincial CHU or a GHT rides when it is not AP-HP. Missing it is how a Paris-only launch fails the rest of the map.',
    },
    {
      name: 'French hospital distributeurs',
      hq: 'Île-de-France / regional',
      type: 'Distributor',
      focus: 'Inventory, installation and last-mile for brands without a full French field force',
      notes: 'The fournisseur number a CHU pharmacy or biomedical store actually pays when the multinational seat does not invoice the dock.',
    },
    {
      name: 'Medtronic France',
      hq: 'Boulogne-Billancourt',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting CHUs; LPPR or T2A status is the commercial question before volume is counted.',
    },
    {
      name: 'Ramsay Santé / Elsan — private-group purchasing',
      hq: 'Paris / regional',
      type: 'Operator',
      focus: 'Private-clinic capital and consumable committees',
      notes: 'Faster cycles than AP-HP on some lines, thinner public-procurement discipline. A third door beside CHU and AP-HP.',
    },
    {
      name: 'HAS / CNEDiMTS overlay (payer-adjacent)',
      hq: 'Saint-Denis',
      type: 'Government',
      focus: 'Health-technology opinions that unlock LPPR or hospital adoption',
      notes: 'Does not raise a bon de commande. A favourable opinion is often what lets a CHU reopen a closed marché line.',
    },
    {
      name: 'Johnson & Johnson MedTech France',
      hq: 'Issy-les-Moulineaux',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Clinical-specialist plus distributeur model; AP-HP trays and private-clinic trays do not share one invoice path.',
    },
  ],
  categoryBlurbs: {
    local:
      'French IVD, contrast, ventilation and ophthalmic houses — bioMérieux, Guerbet, Stago, Air Liquide Medical, Essilor instruments — already on CHU lists.',
    mnc:
      'Saint-Denis, Buc, Suresnes and Boulogne seats that win CHU imaging and implant rooms and still share provincial invoices with distributeurs.',
    regional:
      'Distributeurs and GHT-facing houses that hold the fournisseur number outside AP-HP.',
    trade:
      'ANSM as the competent authority, AP-HP and UGAP/CHU groupements as the public lots, HAS as the payer-adjacent unlock.',
  },
  growthDrivers: [
    {
      title: 'AP-HP versus the rest of the CHU map',
      desc: 'A Paris university-hospital award that never reached Lyon, Lille or a Breton GHT is a failed national launch, not a phased rollout.',
    },
    {
      title: 'LPPR and T2A economics',
      desc: 'Premium SKUs die when they are trapped inside a T2A bundle or missing an LPPR line; BioNixus dates that status before counting volume.',
    },
    {
      title: 'HAS / CNEDiMTS opinions as reopeners',
      desc: 'Clinicians reopen closed marchés when an opinion gives the direction des achats something to file; the opinion is not a purchase order.',
    },
    {
      title: 'Private-group committee speed',
      desc: 'Ramsay Santé and Elsan will trial a SKU the AP-HP lot has not opened; mixing those two clocks is the briefing error we keep seeing.',
    },
  ],
  faq: [
    {
      q: 'Who regulates medical devices in France?',
      a: 'ANSM is the national competent authority for devices and matériovigilance. EU MDR certificates still come from notified bodies; ANSM is the French desk hospitals call when a file is in dispute.',
    },
    {
      q: 'How does AP-HP buying work?',
      a: 'A central direction des achats runs marchés for the Paris university-hospital system. It is the densest public account in France and it is not the CHU de Lyon or a provincial GHT.',
    },
    {
      q: 'Which French manufacturers belong on a launch brief?',
      a: 'bioMérieux for microbiology IVD, Stago for haemostasis, Guerbet for contrast, Air Liquide Medical Systems for ventilation and medical gas, Essilor instruments for ophthalmic clinics.',
    },
    {
      q: 'What is LPPR versus T2A for devices?',
      a: 'LPPR lists many outpatient and some inpatient devices for reimbursement. T2A bundles much inpatient care. A premium SKU that is trapped in the bundle needs a different commercial story.',
    },
    {
      q: 'What does BioNixus study on French device accounts?',
      a: 'Named AP-HP and CHU marché reconstructions, ANSM-visible file checks, LPPR/T2A status interviews, and private-group committee walks on a separate clock.',
    },
    {
      q: 'Is this a French market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus CHU and private-clinic fieldwork; sequence is by role, not by chiffre d’affaires.',
    },
  ],
  regulatorSource: {
    name: 'ANSM — Agence nationale de sécurité du médicament et des produits de santé, medical devices',
    url: 'https://ansm.sante.fr',
    asOf: '2026-09-05',
  },
  sources: [
    'ANSM device and matériovigilance publications, consulted 2026',
    'AP-HP and UGAP procurement notices; HAS / CNEDiMTS opinion pages',
    'bioMérieux, Guerbet, Stago, Air Liquide Medical Systems and Essilor published descriptions',
    'BioNixus France CHU, AP-HP and private-group hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'AP-HP direction-des-achats reconstructions treated as Île-de-France, never as the national CHU map.',
    'LPPR versus T2A status checks on premium SKUs before volume is counted as “adopted”.',
    'Named CHU and GHT marché walks in Lyon, Lille, Marseille and a Breton groupement.',
    'Ramsay Santé and Elsan committee interviews timed against AP-HP lot calendars.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
