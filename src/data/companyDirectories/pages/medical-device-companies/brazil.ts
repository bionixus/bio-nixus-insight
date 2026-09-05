import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesBrazil: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'brazil',
  title: 'Brazil Medtech: Anvisa, SUS Buying and Local Makers (2026)',
  metaDescription:
    'Brazil medical device companies: Anvisa, SUS buying, Baumer, Fanem, Siemens, GE, B. Braun, Unimed, Hapvida and hospital distributors.',
  introLead:
    'Brazilian hospital technology lives behind an Anvisa registro and a SUS invoice: the federal regulator clears the SKU, the Ministry of Health and the municipal/state secretarias buy for the public system, and Unimed and Hapvida buy for the private system on a completely different clock.',
  introRest:
    'Baumer and Fanem are the Brazilian manufacturers a public-hospital biomedical engineer already meets on furniture, sterilisation and neonatal equipment. WEG appears on hospital briefs as the industrial house that electrifies and automates plant rooms — relevant to capital projects, not as a cath-lab implant peer. Siemens Healthineers Brasil, GE HealthCare Brasil and B. Braun Brasil keep São Paulo organisations that bid SUS lots and still appoint distributors for interior municipalities. Anvisa is the registro and Cadastro gate. SUS procurement through the Ministry and the fundos municipais is the public volume. Unimed cooperatives and Hapvida NotreDame Intermédica are the private buyers. BioNixus fields named secretarias and named Unimed cooperativas, not a single “Brazil hospital” TAM.',
  stats: [
    { value: 'Anvisa', label: 'National Health Surveillance Agency — device registro / Cadastro gate' },
    { value: 'SUS', label: 'Public system whose Ministry and municipal secretarias take the largest equipment lots' },
    { value: 'Unimed / Hapvida', label: 'Private-operator doors that buy on a different clock from SUS' },
    { value: 'Interior', label: 'Municipal hospitals whose distributors, not São Paulo subsidiaries, hold the invoice' },
  ],
  channelHeading: 'Registro, SUS lot, Unimed desk',
  channelBody:
    'A device that will be used in a Brazilian public hospital needs an Anvisa registro or Cadastro held by a Brazilian legal entity — fabricante or importador — and a place on a Ministry of Health, state or municipal tender that SIASG and the fundos de saúde actually pay. That is a different object from an FDA or MDR certificate a Miami Latin America hub waves at a São Paulo biomedical engineer. Capital equipment for SUS hospitals is specified by the user department and purchased by the secretaria or the federal programme (oncology, imaging, neonatal). Baumer wins a share of furniture, sterilisation and OR-support lots; Fanem still owns a large neonatal installed base in public maternities; Siemens and GE win high-end imaging rooms in capital-city teaching hospitals and lose more interior lots to price and service-coverage scores. Consumables and implants ride distributors: B. Braun Brasil manufactures and imports infusion and surgical lines; specialist importadores hold Anvisa files for niche surgical books; municipal stores pay the distributor, not the multinational’s Vila Olímpia seat. Unimed cooperativas and Hapvida NotreDame Intermédica buy as private operators — faster capital in some cooperativas, aggressive standardisation in Hapvida. WEG is the hospital plant-room and power-quality name on a turnkey project, and BioNixus will not pretend it sells stents. Interior São Paulo, Minas, Nordeste and Sul secretarias are four maps. BioNixus reconstructs the named Anvisa number, the named secretaria lot and the named Unimed or Hapvida desk before a Brazil volume figure is treated as real.',
  companies: [
    {
      name: 'Anvisa (Agência Nacional de Vigilância Sanitária)',
      hq: 'Brasília',
      type: 'Government',
      focus: 'Device registro / Cadastro, inspections and post-market duties',
      notes: 'The Brasília file a Brazilian fabricante or importador must hold before a secretaria store or a Unimed biomedical engineer will accept the SKU.',
    },
    {
      name: 'SUS / Ministry of Health procurement',
      hq: 'Brasília / state and municipal secretarias',
      type: 'Government',
      focus: 'Federal programmes and secretaria tenders for public-hospital equipment and consumables',
      notes: 'The public volume door. A São Paulo subsidiary win does not stock a municipal hospital in the interior unless the secretaria lot says so.',
    },
    {
      name: 'Baumer',
      hq: 'São Paulo state',
      type: 'Local',
      focus: 'Hospital furniture, sterilisation and OR-support equipment',
      notes: 'Brazilian manufacturer that public-hospital CSSD and furniture lots still shortlist when an import quote fails the secretaria ceiling.',
    },
    {
      name: 'Fanem',
      hq: 'Guarulhos',
      type: 'Local',
      focus: 'Neonatal incubators, phototherapy and maternity-ward equipment',
      notes: 'Guarulhos neonatal installed base in SUS maternities is a replacement-cycle fact, not a brochure claim.',
    },
    {
      name: 'WEG (hospital plant and automation, honestly scoped)',
      hq: 'Jaraguá do Sul',
      type: 'Local',
      focus: 'Motors, generators and automation that electrify hospital plant rooms',
      notes: 'Relevant on turnkey capital projects as the plant-room house. Not a device implant or imaging peer, and this directory will not label it as one.',
    },
    {
      name: 'Siemens Healthineers Brasil',
      hq: 'São Paulo',
      type: 'MNC',
      focus: 'Imaging, diagnostics and radiotherapy',
      notes: 'Capital-city teaching-hospital rooms; interior secretaria lots score service coverage that a Vila Olímpia seat cannot fake with a slide.',
    },
    {
      name: 'GE HealthCare Brasil',
      hq: 'São Paulo',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens BR inside the same teaching-hospital imaging rooms; municipal mid-tier lots often run through an importador.',
    },
    {
      name: 'B. Braun Brasil',
      hq: 'Rio de Janeiro / São Paulo',
      type: 'MNC',
      focus: 'Infusion, surgical instruments and hospital consumables, with local manufacture',
      notes: 'German house with Brazilian manufacturing and a public-tender book that secretarias already recognise on infusion lots.',
    },
    {
      name: 'Unimed system — cooperative purchasing',
      hq: 'Multiple cooperativas',
      type: 'Operator',
      focus: 'Private cooperative hospitals and clinics buying as local Unimeds',
      notes: 'Not one national catalogue. A Unimed-Belo Horizonte desk is not Unimed-Rio, and BioNixus does not average them.',
    },
    {
      name: 'Hapvida NotreDame Intermédica',
      hq: 'Fortaleza / São Paulo',
      type: 'Operator',
      focus: 'Verticalised private-operator hospital and clinic standardisation',
      notes: 'Aggressive SKU standardisation. A premium import that Unimed-SP will trial can die on a Hapvida protocol in the same month.',
    },
    {
      name: 'Brazilian importadores and hospital distributors',
      hq: 'São Paulo / Campinas / Porto Alegre',
      type: 'Distributor',
      focus: 'Anvisa file holders, inventory and municipal last-mile',
      notes: 'The invoice a secretaria store in the interior actually pays when the multinational seat does not bill the dock.',
    },
    {
      name: 'Philips Brasil (Health Systems)',
      hq: 'São Paulo',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in private and teaching hospitals; SUS mid-tier lots invite domestic and price-led alternatives beside it.',
    },
    {
      name: 'Medtronic Brasil',
      hq: 'São Paulo',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting centres; many SKUs still move through an importador who holds the Anvisa file and the municipal vendor code.',
    },
    {
      name: 'Hospital das Clínicas / university-hospital buying (USP and peers)',
      hq: 'São Paulo / state capitals',
      type: 'Operator',
      focus: 'Academic-hospital capital specifications inside SUS',
      notes: 'HC-FMUSP and peer university hospitals write specs a municipal lot will not copy; they are SUS, and they are not the district hospital.',
    },
    {
      name: 'Cristália / other Brazilian hospital-adjacent manufacturers',
      hq: 'Itapira / multiple',
      type: 'Local',
      focus: 'Hospital solutions and some device-adjacent lines beside a pharma book',
      notes: 'Named only where the hospital-solutions book is real; BioNixus will not inflate a pharma house into a full medtech peer.',
    },
    {
      name: 'State and municipal secretarias de saúde (named-account layer)',
      hq: 'State capitals and municípios',
      type: 'Government',
      focus: 'Local SUS buyers who actually open the envelope',
      notes: 'Minas, Bahia, Paraná and interior São Paulo secretarias are four maps. A Brasília programme slide is not their lot.',
    },
  ],
  categoryBlurbs: {
    local:
      'Baumer, Fanem and honestly scoped industrial names such as WEG on plant rooms — Brazilian factories that SUS lots already know.',
    mnc:
      'São Paulo seats of Siemens, GE, Philips, B. Braun and Medtronic that win teaching-hospital rooms and still share interior invoices with importadores.',
    regional:
      'Importadores and municipal distributors who hold the Anvisa file and the secretaria last-mile outside the capital-city teaching hospitals.',
    trade:
      'Anvisa as the registro, SUS Ministry and secretarias as the public lot, Unimed cooperativas and Hapvida as the private desks.',
  },
  growthDrivers: [
    {
      title: 'Anvisa registro hygiene on the dock',
      desc: 'Secretaria stores now ask for the registro number on the carton; a Miami-hub SKU without a Brazilian holder is a failed delivery.',
    },
    {
      title: 'SUS programme lots versus municipal envelopes',
      desc: 'Federal oncology or imaging programmes and municipal fundos de saúde open on different clocks; winning Brasília is not winning the município.',
    },
    {
      title: 'Unimed fragmentation versus Hapvida standardisation',
      desc: 'Cooperativas buy locally; Hapvida standardises. A private-Brazil average of those two behaviours is a briefing error.',
    },
    {
      title: 'Interior service coverage as a bid score',
      desc: 'Siemens and GE lose interior lots when the service van is a São Paulo fiction; BioNixus scores vans, not brand awareness.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Brazil?',
      a: 'Anvisa issues a registro or Cadastro to a Brazilian fabricante or importador. Classification drives the file. A secretaria store will ask for that number on the dock.',
    },
    {
      q: 'Who buys devices for SUS hospitals?',
      a: 'The Ministry of Health through federal programmes, plus state and municipal secretarias that open their own lots and pay through fundos de saúde. University hospitals add a third public specification layer.',
    },
    {
      q: 'What do Unimed and Hapvida do as device buyers?',
      a: 'Unimed cooperativas buy as local private systems. Hapvida NotreDame Intermédica standardises SKUs across a verticalised network. They are not one private catalogue.',
    },
    {
      q: 'Is WEG a medical device company?',
      a: 'WEG electrifies and automates hospital plant rooms. It belongs on a turnkey capital brief. It does not belong on an implant or imaging share slide.',
    },
    {
      q: 'What does BioNixus study on Brazilian device accounts?',
      a: 'Anvisa number-to-carton traces, named secretaria lot reconstructions, Unimed-versus-Hapvida desk interviews, and interior service-van scores beside São Paulo subsidiary claims.',
    },
    {
      q: 'Is this a Brazilian market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus SUS and private-operator fieldwork; sequence is by role, not by revenue.',
    },
  ],
  regulatorSource: {
    name: 'Anvisa — Agência Nacional de Vigilância Sanitária, medical device registro and Cadastro',
    url: 'https://www.gov.br/anvisa',
    asOf: '2026-09-05',
  },
  sources: [
    'Anvisa device registro / Cadastro guidance, consulted 2026',
    'Ministry of Health and secretaria tender notices; SIASG-visible public awards',
    'Baumer, Fanem, WEG, Siemens Healthineers Brasil, GE HealthCare Brasil and B. Braun Brasil published descriptions',
    'BioNixus Brazil SUS, Unimed and Hapvida hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Anvisa registro-to-carton traces on municipal docks so a Miami-hub SKU is not counted as a Brazilian sale.',
    'Named secretaria lot reconstructions in Minas, Bahia, Paraná and interior São Paulo, treated as four buyers.',
    'Unimed cooperativa versus Hapvida protocol interviews so private volume is not one cell.',
    'Interior service-van scores against São Paulo subsidiary claims on imaging and infusion lots.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
