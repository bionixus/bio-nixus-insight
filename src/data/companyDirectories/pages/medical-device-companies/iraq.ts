import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesIraq: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'iraq',
  metaDescription:
    'Medical device companies in Iraq: KIMADIA and KRG procurement, Siemens Healthineers, GE HealthCare, Philips, Medtronic, Mindray, Zozik Group and private hospital buyers.',
  introLead:
    'Iraq is rebuilding its hospital infrastructure after two decades of under-investment, and every new oncology centre in Baghdad, cardiac hospital in Najaf or private tertiary facility in Erbil is a medical technology tender fought between multinational brands represented by Iraqi scientific bureaus and a rising cohort of value-segment manufacturers.',
  introRest:
    'Devices are registered with the federal Ministry of Health through licensed bureaus, and KIMADIA imports and distributes equipment and consumables for public hospitals, while the Kurdistan Region runs its own registration and procurement from Erbil. Multinationals such as Siemens Healthineers, GE HealthCare, Philips and Medtronic manage Iraq from Dubai, Amman or Istanbul regional teams and rely on bureaus and Kurdish distributors such as Zozik for import, installation and service. Religious-endowment hospitals in Karbala and Najaf and private groups such as Faruk Medical City are creating a direct-purchase channel that buys at premium specifications. This directory lists the public buyers, brands, distributors and operators shaping Iraq’s medtech market and how they connect across federal Iraq and Kurdistan.',
  stats: [
    { value: '$800m+', label: 'Iraqi medical device market, 2024 estimate' },
    { value: '2', label: 'Procurement systems (federal KIMADIA and Kurdistan Region MOH)' },
    { value: '300+', label: 'Public hospitals under federal and KRG health ministries' },
    { value: '~99%', label: 'Share of devices imported' },
  ],
  channelHeading: 'How medical devices reach hospitals in Iraq',
  channelBody:
    'The public channel runs through KIMADIA, which registers suppliers, tenders for equipment and consumables on behalf of the federal Ministry of Health and receives shipments at central warehouses before distribution to governorate health directorates. Large projects, including new hospitals built under Ministry of Health and Ministry of Construction programmes and turnkey deals with Korean, Turkish and Chinese contractors, often bundle equipment into construction contracts, so manufacturers compete for inclusion in contractor specifications as much as in KIMADIA tenders. A foreign manufacturer registers devices through a licensed Iraqi scientific bureau, which imports via Umm Qasr, Baghdad International Airport or the Turkish border, installs, trains and services; because service reach outside Baghdad is thin, uptime commitments weigh heavily in awards. The Kurdistan Region registers and procures independently through its Ministry of Health, and Erbil-based groups such as Zozik dominate northern distribution with validated warehousing and cross-border logistics from Turkey. Multinationals including Siemens Healthineers, GE HealthCare, Philips, Medtronic and Roche manage the country from regional offices in Dubai, Amman or Istanbul with visiting clinical and service teams. A private and endowment channel is growing fast: Al-Kafeel Super Speciality Hospital in Karbala, Imam Hussein Medical City and Faruk Medical City in Sulaymaniyah buy directly at premium specifications, and private hospital construction in Baghdad and Basra is adding more such accounts. Mindray and other value brands have gained share in monitoring, ultrasound and laboratory tenders where budget constraints dominate.',
  companies: [
    {
      name: 'KIMADIA (State Company for Marketing Drugs and Medical Appliances)',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Federal importer and distributor of equipment and consumables',
      notes: 'The single public buyer for federal Ministry of Health hospitals; supplier registration and KIMADIA tenders gate access to public volume.',
    },
    {
      name: 'KRG Ministry of Health — Medical Supplies',
      hq: 'Erbil',
      type: 'Government',
      focus: 'Registration and procurement for Kurdistan Region hospitals',
      notes: 'Independent track for the north; manufacturers need Kurdish registration and distribution separate from Baghdad.',
    },
    {
      name: 'Baghdad Medical City — Procurement',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Largest public teaching hospital complex',
      notes: 'Flagship federal complex whose equipment needs anchor many KIMADIA tenders and donor-funded upgrades.',
    },
    {
      name: 'Siemens Healthineers (Iraq)',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Supplies CT, MRI and radiotherapy for new oncology centres via Iraqi bureaus; managed from Gulf regional offices.',
    },
    {
      name: 'GE HealthCare (Iraq)',
      hq: 'USA',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Installed base in federal and KRG hospitals delivered through appointed bureaus and Kurdish distributors.',
    },
    {
      name: 'Philips Healthcare (Iraq)',
      hq: 'Netherlands',
      type: 'MNC',
      focus: 'Imaging, patient monitoring and cardiology systems',
      notes: 'Monitoring and cath-lab presence in new cardiac centres in Baghdad, Najaf and Erbil through local partners.',
    },
    {
      name: 'Medtronic (Iraq)',
      hq: 'USA / Ireland',
      type: 'MNC',
      focus: 'Cardiovascular, surgical and neuroscience devices',
      notes: 'Served from Dubai regional teams with case support in major cardiac centres; bureaus hold inventory.',
    },
    {
      name: 'Roche Diagnostics (Iraq)',
      hq: 'Switzerland',
      type: 'MNC',
      focus: 'Central-lab and molecular diagnostics',
      notes: 'Analyser and reagent supplier to public central laboratories and private hospital labs via bureaus.',
    },
    {
      name: 'Fresenius Medical Care (Iraq)',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Dialysis systems and consumables',
      notes: 'Supplies KIMADIA dialysis tenders and private nephrology centres in a market with rapidly growing dialysis demand.',
    },
    {
      name: 'Mindray (Iraq)',
      hq: 'China',
      type: 'MNC',
      focus: 'Monitoring, ultrasound and IVD',
      notes: 'Strong share in value-segment tenders for monitoring and laboratory equipment across federal and KRG hospitals.',
    },
    {
      name: 'Dräger (Iraq)',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Anaesthesia, ventilation and neonatal care',
      notes: 'ICU and theatre equipment supplier active in new hospital fit-outs through Iraqi and Kurdish partners.',
    },
    {
      name: 'Zozik Group — Medical Division',
      hq: 'Erbil',
      type: 'Distributor',
      focus: 'Device and diagnostics distribution across Kurdistan and federal Iraq',
      notes: 'Leading private healthcare distributor in the north with validated warehousing and multinational brand representation.',
    },
    {
      name: 'Al-Kafeel Super Speciality Hospital — Procurement',
      hq: 'Karbala',
      type: 'Operator',
      focus: 'Endowment-funded tertiary hospital purchasing',
      notes: 'Al-Abbas Holy Shrine hospital equipped to premium specifications; a reference direct-purchase account outside the KIMADIA system.',
    },
    {
      name: 'Faruk Medical City',
      hq: 'Sulaymaniyah',
      type: 'Operator',
      focus: 'Private tertiary hospital in Kurdistan',
      notes: 'One of the largest private hospitals in Iraq; buys directly from distributors and benchmarks premium imaging and surgical brands.',
    },
    {
      name: 'DHL Global Forwarding Iraq',
      hq: 'Baghdad',
      type: 'MNC',
      focus: 'Inbound freight, customs brokerage and project logistics',
      notes: 'Handles equipment imports for bureaus and turnkey hospital projects via Umm Qasr and Baghdad airport.',
    },
  ],
  categoryBlurbs: {
    local:
      'Iraqi scientific bureaus and biomedical engineering firms that register devices, import, install and service equipment for federal hospitals, alongside Kurdish distributors serving the north.',
    mnc:
      'Multinational device and diagnostics companies managing Iraq from Dubai, Amman or Istanbul regional offices, dependent on bureaus and distributors for registration, tenders and first-line service.',
    regional:
      'Gulf, Jordanian and Turkish medtech distributors that cover Iraq through local partners or cross-border operations, particularly for Kurdistan.',
    trade:
      'The federal and Kurdish public buyers, the flagship teaching complex and the endowment and private hospital operators whose tenders and direct purchases define demand.',
  },
  growthDrivers: [
    {
      title: 'Hospital reconstruction and new-build programmes',
      desc: 'Federal and KRG budgets, turnkey contracts with Korean, Turkish and Chinese builders and donor projects are delivering new hospitals whose equipment packages represent the largest medtech opportunities in the region.',
    },
    {
      title: 'Oncology and cardiac centre expansion',
      desc: 'National cancer and cardiovascular initiatives are funding radiotherapy, cath labs and advanced imaging in Baghdad, Basra, Najaf, Karbala and Erbil, favouring brands able to deliver installation and training at scale.',
    },
    {
      title: 'Endowment and private hospital investment',
      desc: 'Religious-endowment hospitals and private groups are building premium facilities and buying directly, creating accounts that value service and brand reputation over lowest tender price.',
    },
    {
      title: 'Service reach and value-segment competition',
      desc: 'Thin service coverage outside Baghdad and Erbil and constrained budgets have opened space for Mindray and other value brands, while multinationals invest in local biomedical partnerships to protect share.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Iraq?',
      a: 'Through a licensed scientific bureau filing with the federal Ministry of Health, with separate KIMADIA supplier registration for public tenders, and through a Kurdish partner filing with the KRG Ministry of Health for the north.',
    },
    {
      q: 'Who buys medical equipment for Iraqi public hospitals?',
      a: 'KIMADIA for federal Ministry of Health facilities and the KRG Ministry of Health for Kurdistan, with large new-build projects often bundling equipment into construction contracts managed by other ministries.',
    },
    {
      q: 'Do multinational device companies operate directly in Iraq?',
      a: 'Most manage Iraq from Dubai, Amman or Istanbul regional teams and work through Iraqi bureaus and Kurdish distributors for import, installation, tenders and service, with visiting clinical specialists for major installations.',
    },
    {
      q: 'Is Kurdistan a separate medtech market?',
      a: 'Commercially yes. The KRG registers and procures independently, Erbil-based distributors such as Zozik dominate northern coverage, and private hospitals like Faruk Medical City buy directly, so brands need a distinct northern strategy.',
    },
    {
      q: 'What does BioNixus study about medical device companies in Iraq?',
      a: 'Installed-base and brand-share mapping across federal, KRG, endowment and private hospitals; procurement-decision interviews with biomedical engineers and hospital directors; bureau and distributor evaluation; and tender and project-pipeline tracking.',
    },
    {
      q: 'Does the directory rank companies by size?',
      a: 'No. Organisations are grouped by function and included because they recur in BioNixus Iraq hospital fieldwork and public procurement records; position implies no ranking.',
    },
  ],
  regulatorSource: {
    name: 'Iraq Ministry of Health — KIMADIA supplier registration and medical device import approvals',
    url: 'https://moh.gov.iq',
    asOf: '2026-09-03',
  },
  sources: [
    'KIMADIA tender announcements and supplier registration notices, 2024–2026',
    'Kurdistan Region Ministry of Health procurement and hospital project updates, 2024–2025',
    'World Bank and WHO Iraq health infrastructure and financing data, 2023–2024',
    'BioNixus Iraq hospital fieldwork in Baghdad, Basra, Karbala and Erbil, 2023–2026',
  ],
  fieldNotes: [
    'Installed-base and brand-share audits across Baghdad Medical City, governorate hospitals, KRG facilities and endowment and private hospitals for imaging, ICU, laboratory and dialysis equipment.',
    'Procurement-decision interviews with biomedical engineers, hospital directors and KIMADIA-experienced staff on tender criteria, service expectations and brand preference.',
    'Bureau and distributor evaluation for Iraqi entry scoring registration capability, service reach and cross-border logistics between Baghdad and Erbil.',
    'Project-pipeline tracking of new hospital builds and equipment packages across federal ministries, the KRG and endowment investors.',
  ],
};
