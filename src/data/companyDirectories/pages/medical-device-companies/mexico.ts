import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesMexico: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'mexico',
  title: 'Mexico Medtech: COFEPRIS, IMSS and Private Groups (2026)',
  metaDescription:
    'Mexico medical device companies: COFEPRIS, IMSS, ISSSTE, PiSA, Siemens, GE, Médica Sur, ABC Hospital and local device distributors.',
  introLead:
    'Mexican hospital technology is a three-buyer market that a single “Mexico TAM” slide erases: COFEPRIS registro on the carton, IMSS and ISSSTE compras that take public volume, and private grupos such as Médica Sur and ABC that buy like Gulf accounts once the registro exists.',
  introRest:
    'COFEPRIS is the dispositivo médico gate. IMSS Compra Consolidada and ISSSTE purchasing are the public doors. PiSA’s hospital-solutions and IV-device book is a Mexican manufacturer that belongs on a consumable brief and should not be inflated into an imaging peer. Siemens Healthineers México and GE HealthCare México keep Mexico City organisations that bid IMSS lots and still appoint distribuidores for the interior. Médica Sur and Centro Médico ABC are the private benchmark accounts. BioNixus fields those named buyers, not a blended “Latin America hospital” cell.',
  stats: [
    { value: 'COFEPRIS', label: 'Federal commission — dispositivo médico registro and post-market' },
    { value: 'IMSS', label: 'Largest public buyer through consolidated purchases and delegaciones' },
    { value: 'ISSSTE', label: 'Second public door that IMSS awards do not automatically stock' },
    { value: 'ABC / Médica Sur', label: 'Private-hospital desks that buy on a different clock from IMSS' },
  ],
  channelHeading: 'Registro, IMSS lote, private-group desk',
  channelBody:
    'A device that will be used in a Mexican public hospital needs a COFEPRIS registro de dispositivo médico held by a Mexican legal entity — fabricante or importador — and a place on an IMSS Compra Consolidada, an ISSSTE lote, a Secretaría de Salud / INSABI-heritage path, or a state-level compra that the delegación will actually pay. That is a different commercial object from an FDA 510(k) a Miami hub waves at a Polanco biomedical engineer. Capital equipment for IMSS UMAEs and ISSSTE hospitals is specified by the user department and purchased through consolidated or delegated lots; Siemens Healthineers México and GE HealthCare México win high-end rooms in Mexico City teaching hospitals and lose more interior lots to price and service-coverage scores. Consumables and implants ride distribuidores who hold inventory in Mexican almacenes and appear on the hospital’s padrón de proveedores. PiSA’s hospital-solutions book — IV fluids and some device-adjacent lines — is a real Mexican factory story on ward consumables; BioNixus will not file it as a cath-lab implant peer. Private grupos (Médica Sur, ABC, Ángeles, Star Médica) buy on committee cycles and will take a premium SKU the IMSS lote has not awarded. State secretarías de salud add a fourth public map. BioNixus reconstructs the named COFEPRIS number, the named IMSS or ISSSTE lote and the named Médica Sur or ABC desk before a Mexico volume figure is signed.',
  companies: [
    {
      name: 'COFEPRIS',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Dispositivo médico registro, inspections and post-market duties',
      notes: 'The federal file a Mexican fabricante or importador must hold before an IMSS almacén or a private biomedical engineer will accept the SKU.',
    },
    {
      name: 'IMSS — Compra Consolidada and delegaciones',
      hq: 'Mexico City / delegaciones',
      type: 'Government',
      focus: 'Largest public-hospital equipment and consumable buying',
      notes: 'The public volume door. A Mexico City subsidiary win does not stock a delegación in the interior unless the lote says so.',
    },
    {
      name: 'ISSSTE procurement',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Second federal public-hospital buyer',
      notes: 'A different padrón and a different clock from IMSS. An IMSS award does not fill an ISSSTE hospital.',
    },
    {
      name: 'PiSA hospital solutions (device-adjacent, honestly scoped)',
      hq: 'Guadalajara',
      type: 'Local',
      focus: 'IV solutions and hospital-consumable lines beside a pharma book',
      notes: 'Guadalajara factory story on ward consumables. Not an imaging or implant house, and this directory will not label it as one.',
    },
    {
      name: 'Siemens Healthineers México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Capital-city teaching-hospital rooms; interior IMSS lots score a service van the Polanco seat cannot fake with a slide.',
    },
    {
      name: 'GE HealthCare México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens MX inside the same UMAM and private imaging rooms; delegación mid-tier lots often run through a distribuidor.',
    },
    {
      name: 'Médica Sur — procurement',
      hq: 'Mexico City',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable desk',
      notes: 'Private benchmark in the south of the capital. Faster capital cycles than IMSS; will take a premium SKU the public lote has not awarded.',
    },
    {
      name: 'Centro Médico ABC — procurement',
      hq: 'Mexico City',
      type: 'Operator',
      focus: 'Private-hospital group purchasing at Observatorio and Santa Fe',
      notes: 'Second private benchmark. A Médica Sur win does not stock ABC, and BioNixus does not average them.',
    },
    {
      name: 'Mexican hospital distribuidores',
      hq: 'Mexico City / Guadalajara / Monterrey',
      type: 'Distributor',
      focus: 'COFEPRIS file holders, inventory and interior last-mile',
      notes: 'The factura a delegación almacén actually pays when the multinational seat does not bill the dock.',
    },
    {
      name: 'Medtronic México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting centres; many SKUs still move through an importador who holds the COFEPRIS file and the padrón number.',
    },
    {
      name: 'Secretaría de Salud / state health-service buying',
      hq: 'Mexico City / state capitals',
      type: 'Government',
      focus: 'Federal SSA and state secretaría lots beside IMSS and ISSSTE',
      notes: 'A third public map. Jalisco, Nuevo León and a southern state secretaría are not IMSS, and they are not each other.',
    },
    {
      name: 'Grupo Ángeles / Star Médica — private-chain purchasing',
      hq: 'Mexico City / regional',
      type: 'Operator',
      focus: 'Additional private-hospital group desks',
      notes: 'Further private doors. BioNixus walks them separately from Médica Sur and ABC.',
    },
    {
      name: 'Philips México (Health Systems)',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in private and teaching hospitals; IMSS mid-tier lots invite price-led alternatives beside it.',
    },
    {
      name: 'Local Mexican electromedical and consumable makers (non-PiSA)',
      hq: 'Multiple states',
      type: 'Local',
      focus: 'Hospital furniture, some electromedical and disposables',
      notes: 'Smaller COFEPRIS-registered makers that IMSS mid-tier lots still pull; they are not Siemens and should not be briefed as the same industry.',
    },
    {
      name: 'Johnson & Johnson MedTech México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Clinical-specialist plus distribuidor model; an IMSS tray path is not a Médica Sur tray path.',
    },
    {
      name: 'IMSS UMAE teaching-hospital equipment committees',
      hq: 'Mexico City / state capitals',
      type: 'Operator',
      focus: 'Flagship IMSS specialty-hospital specifications',
      notes: 'Named academic accounts inside IMSS whose specs a delegación clinic will not copy.',
    },
  ],
  categoryBlurbs: {
    local:
      'PiSA’s hospital-solutions book labelled honestly as ward consumables, plus smaller Mexican makers that IMSS mid-tier lots still pull.',
    mnc:
      'Mexico City seats of Siemens, GE, Philips, Medtronic and J&J that win teaching-hospital rooms and still share interior invoices with distribuidores.',
    regional:
      'Importadores who hold the COFEPRIS file and the delegación last-mile outside the capital.',
    trade:
      'COFEPRIS as the registro, IMSS and ISSSTE as the public lotes, Médica Sur and ABC as the private desks.',
  },
  growthDrivers: [
    {
      title: 'IMSS versus ISSSTE versus SSA clocks',
      desc: 'Three public doors, three padrones. An IMSS Compra Consolidada win that never reached ISSSTE is a failed public launch, not a phased rollout.',
    },
    {
      title: 'COFEPRIS registro hygiene on the dock',
      desc: 'Almacenes now ask for the dispositivo médico number; a Miami-hub SKU without a Mexican holder is a failed delivery.',
    },
    {
      title: 'Private-group committee speed',
      desc: 'Médica Sur, ABC, Ángeles and Star Médica will trial a SKU the IMSS lote has not awarded; mixing those clocks is the briefing error.',
    },
    {
      title: 'Interior service coverage as a bid score',
      desc: 'Siemens and GE lose delegación lots when the service van is a Polanco fiction; BioNixus scores vans, not brand awareness.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Mexico?',
      a: 'COFEPRIS issues a registro de dispositivo médico to a Mexican fabricante or importador. Classification drives the file. An IMSS almacén will ask for that number on the dock.',
    },
    {
      q: 'Who buys devices for Mexican public hospitals?',
      a: 'IMSS through Compra Consolidada and delegaciones, ISSSTE through its own lotes, plus Secretaría de Salud and state secretarías. They do not share one padrón.',
    },
    {
      q: 'Is PiSA a medical device company like Siemens?',
      a: 'PiSA’s hospital-solutions and IV book is a real Mexican factory story on ward consumables. It is not an imaging or implant house.',
    },
    {
      q: 'How do Médica Sur and ABC buy compared with IMSS?',
      a: 'Private committees, faster capital cycles, willingness to take a premium SKU the public lote has not awarded. They are not one private catalogue.',
    },
    {
      q: 'What does BioNixus study on Mexican device accounts?',
      a: 'COFEPRIS-number traces, named IMSS and ISSSTE lote reconstructions, Médica Sur and ABC desk interviews, and interior service-van scores beside Mexico City subsidiary claims.',
    },
    {
      q: 'Is this a Mexican market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus IMSS, ISSSTE and private-hospital fieldwork; sequence is by role, not by facturación.',
    },
  ],
  regulatorSource: {
    name: 'COFEPRIS — Comisión Federal para la Protección contra Riesgos Sanitarios, dispositivos médicos',
    url: 'https://www.gob.mx/cofepris',
    asOf: '2026-09-05',
  },
  sources: [
    'COFEPRIS dispositivo médico registro guidance, consulted 2026',
    'IMSS Compra Consolidada and ISSSTE procurement notices',
    'PiSA, Siemens Healthineers México, GE HealthCare México, Médica Sur and Centro Médico ABC published descriptions',
    'BioNixus Mexico IMSS, ISSSTE and private-hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'IMSS, ISSSTE and one state-secretaría lote reconstructions treated as three public buyers, never as one federal warehouse.',
    'COFEPRIS-number traces against the carton a delegación almacén accepts.',
    'Médica Sur and ABC committee interviews timed against IMSS lote calendars.',
    'Interior service-van scores against Mexico City subsidiary claims on imaging and infusion lots.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
