import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesSpain: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'spain',
  title: 'Spanish Medtech: AEMPS, Grifols and Regional Services (2026)',
  metaDescription:
    'Spain medical device companies: AEMPS, Grifols, Werfen, Palex, Fenin, SERMAS, Andalusia health services and multinational device offices.',
  introLead:
    'Spanish hospital technology is seventeen health services wearing one AEMPS badge: the Agencia Española de Medicamentos y Productos Sanitarios clears the producto sanitario, and SERMAS, the Andalusian SAS, CatSalut or Osakidetza opens the envelope that actually stocks the planta.',
  introRest:
    'Grifols, Werfen and Palex are the Spanish names a hospital biomedical engineer already meets — plasma-derived and diagnostic systems, IVD and haemostasis, and the distributor-integrator that carries other people’s towers. Fenin is the industry association, useful as a trade door, not as a warehouse. Siemens, GE, Philips and Medtronic keep Madrid and Barcelona seats that bid regional concursos and still need distribuidores for the smaller comunidades. BioNixus fields named servicios de salud, not a single “Spanish hospital” TAM.',
  stats: [
    { value: 'AEMPS', label: 'Spanish agency for medicines and medical devices — producto sanitario gate' },
    { value: '17', label: 'Autonomous-community health services that do not share one catalogue' },
    { value: 'SERMAS / SAS', label: 'Madrid and Andalusia — two of the densest public buyers, and not each other' },
    { value: 'Fenin', label: 'Industry association the trade uses; not a purchasing body' },
  ],
  channelHeading: 'AEMPS file, regional concurso, Palex van',
  channelBody:
    'A device that will be used in a Spanish public hospital needs an EU MDR certificate, an AEMPS-visible registration, and a place on a concurso that SERMAS (Madrid), the Servicio Andaluz de Salud, CatSalut, Osakidetza or another servicio de salud will award. That is a different commercial object from a CE mark a Lisbon hub waves at a Madrid biomedical engineer. Capital equipment is specified by the servicio clínico and purchased by the comunidad’s central purchasing or by the hospital when the statute allows. SERMAS lots do not stock Seville; SAS lots do not stock Hospital La Paz. Consumables, implants and IVD reagents ride distribuidores: Palex is the Spanish integrator many towers and specialty lines still travel with; smaller regional houses hold the albarán a comarca hospital stamps. Grifols sits closer to plasma-derived medicines and diagnostic systems than to a generic “device” cell; Werfen (including the former Instrumentation Laboratory and Biokit heritage) owns a large haemostasis and IVD installed base. Fenin convenes the industry and publishes the numbers the trade argues from; it does not raise a pedido. Private grupos (Quirónsalud, HM, Vithas) buy on committee cycles that look more like Parkway than like SERMAS. BioNixus reconstructs the named AEMPS-visible file, the named regional concurso and the named Palex or regional van before a Spain volume figure is signed.',
  companies: [
    {
      name: 'AEMPS',
      hq: 'Madrid',
      type: 'Government',
      focus: 'Producto sanitario registration, vigilance and inspections',
      notes: 'The Madrid file a fabricante or representante must hold before a servicio de salud store will accept the SKU onto a concurso shortlist.',
    },
    {
      name: 'SERMAS (Servicio Madrileño de Salud) procurement',
      hq: 'Madrid',
      type: 'Government',
      focus: 'Madrid public-hospital capital and consumable concursos',
      notes: 'The densest single-community buyer. A SERMAS award does not stock Andalusia, Catalonia or the Basque Country.',
    },
    {
      name: 'Servicio Andaluz de Salud (SAS)',
      hq: 'Seville',
      type: 'Government',
      focus: 'Andalusian public-hospital purchasing',
      notes: 'Second dense public door. BioNixus walks Seville as its own clock, never as a footnote to Madrid.',
    },
    {
      name: 'Grifols',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Plasma-derived therapies and diagnostic systems',
      notes: 'Barcelona house whose hospital story is plasma and diagnostics, not a generic implant book, and briefs should keep that boundary.',
    },
    {
      name: 'Werfen',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Haemostasis, acute-care and specialty IVD',
      notes: 'Hospital-lab installed base (including IL and Biokit heritage) that a coagulation or acute-care launch has to walk, not assume.',
    },
    {
      name: 'Palex Medical',
      hq: 'Barcelona / Madrid',
      type: 'Distributor',
      focus: 'Hospital-equipment integrator and specialty-line distributor',
      notes: 'The Spanish van many towers and specialty SKUs still ride when the multinational seat does not invoice the planta.',
    },
    {
      name: 'Fenin (Federación Española de Empresas de Tecnología Sanitaria)',
      hq: 'Madrid',
      type: 'Operator',
      focus: 'Industry association — trade door, not a warehouse',
      notes: 'Publishes the numbers the trade argues from. Does not raise a pedido. Useful on a brief as the association, not as a buyer.',
    },
    {
      name: 'Siemens Healthineers España',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Madrid commercial seat that wins large-community imaging rooms; smaller comunidades still score a service van the seat must staff.',
    },
    {
      name: 'GE HealthCare España',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens and Philips inside the same SERMAS and SAS imaging rooms; regional concursos are the clock.',
    },
    {
      name: 'Philips España (Health Systems)',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in public and Quirónsalud rooms; SERMAS and a small-comunidad concurso are different objects.',
    },
    {
      name: 'CatSalut / Osakidetza and other servicios',
      hq: 'Barcelona / Vitoria / regional',
      type: 'Government',
      focus: 'Catalan, Basque and remaining-community public buying',
      notes: 'Further public doors. A Madrid-and-Seville-only sample is not Spain, and BioNixus will not file it as Spain.',
    },
    {
      name: 'Regional Spanish device distribuidores',
      hq: 'Multiple comunidades',
      type: 'Distributor',
      focus: 'Last-mile and service for brands Palex or the MNC seat does not cover',
      notes: 'The albarán a comarca hospital stamps when the Barcelona integrator is not on that concurso.',
    },
    {
      name: 'Medtronic Iberia',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting hospitals; many SKUs still move through a distribuidor who holds the hospital código de proveedor.',
    },
    {
      name: 'Quirónsalud / HM / Vithas — private-group purchasing',
      hq: 'Madrid / regional',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable committees',
      notes: 'Faster cycles than a SERMAS concurso on some lines. A fourth door beside the three largest public servicios.',
    },
    {
      name: 'Johnson & Johnson MedTech Spain',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Clinical-specialist plus distribuidor model; a SERMAS tray path is not a Quirónsalud tray path.',
    },
    {
      name: 'Hospital universitario purchasing desks (La Paz, Virgen del Rocío and peers)',
      hq: 'Madrid / Seville / Barcelona',
      type: 'Operator',
      focus: 'Flagship hospital specifications inside the servicios',
      notes: 'Named academic accounts whose specs a comarca hospital will not copy; they are public, and they are not the district.',
    },
  ],
  categoryBlurbs: {
    local:
      'Grifols and Werfen as Spanish diagnostic and plasma-adjacent houses; Palex as the integrator; Fenin as the association, not a warehouse.',
    mnc:
      'Madrid multinational seats that win large-community imaging and implant rooms and still share smaller-comunidad invoices with distribuidores.',
    regional:
      'Community-level houses that hold the albarán outside Madrid, Barcelona and Seville.',
    trade:
      'AEMPS as the producto sanitario gate, SERMAS / SAS / CatSalut / Osakidetza as the public envelopes, Fenin as the trade forum.',
  },
  growthDrivers: [
    {
      title: 'Seventeen-service fragmentation',
      desc: 'A SERMAS award that never reached SAS or CatSalut is a failed national launch. BioNixus dates each servicio’s concurso, not a Madrid average.',
    },
    {
      title: 'AEMPS file hygiene on the dock',
      desc: 'Hospital stores now ask for the producto sanitario number; a Lisbon-hub SKU without a Spanish holder is a failed delivery.',
    },
    {
      title: 'Palex-versus-direct invoice paths',
      desc: 'Towers and specialty lines still ride Palex in rooms where the multinational seat thought it billed direct; BioNixus reads the albarán.',
    },
    {
      title: 'Private-group committee speed',
      desc: 'Quirónsalud, HM and Vithas will trial a SKU the public concurso has not opened; mixing those clocks is the briefing error.',
    },
  ],
  faq: [
    {
      q: 'Who regulates medical devices in Spain?',
      a: 'AEMPS is the national agency for productos sanitarios. EU MDR certificates come from notified bodies. The hospital store will ask for the AEMPS-visible number on the dock.',
    },
    {
      q: 'Who buys devices for Spanish public hospitals?',
      a: 'The seventeen autonomous-community health services. SERMAS and the Andalusian SAS are the densest; CatSalut, Osakidetza and the others are further doors, not footnotes.',
    },
    {
      q: 'What is Fenin on a device brief?',
      a: 'The Spanish medtech industry association. It publishes trade numbers and convenes the manufacturers. It does not raise a purchase order.',
    },
    {
      q: 'Which Spanish companies belong on a launch brief?',
      a: 'Grifols for plasma and diagnostics, Werfen for haemostasis and specialty IVD, Palex as the integrator many towers still ride, plus the Madrid multinational seats.',
    },
    {
      q: 'What does BioNixus study on Spanish device accounts?',
      a: 'AEMPS-number traces, named SERMAS / SAS / CatSalut concurso reconstructions, Palex-versus-direct albarán checks, and private-group committee walks.',
    },
    {
      q: 'Is this a Spanish market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus hospital fieldwork; sequence is by role, not by facturación.',
    },
  ],
  regulatorSource: {
    name: 'AEMPS — Agencia Española de Medicamentos y Productos Sanitarios, productos sanitarios',
    url: 'https://www.aemps.gob.es',
    asOf: '2026-09-05',
  },
  sources: [
    'AEMPS producto sanitario notices, consulted 2026',
    'SERMAS, SAS, CatSalut and Osakidetza concurso notices',
    'Grifols, Werfen, Palex and Fenin published descriptions',
    'BioNixus Spain public-servicio and private-group hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SERMAS, SAS, CatSalut and one smaller-comunidad concurso reconstructions treated as four buyers.',
    'AEMPS-number traces against the carton a hospital store accepts.',
    'Palex versus multinational-direct albarán checks on tower and specialty lots.',
    'Quirónsalud, HM and Vithas committee interviews timed against public concurso calendars.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
