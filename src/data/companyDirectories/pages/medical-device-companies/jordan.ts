import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesJordan: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'jordan',
  metaDescription:
    'Medical device companies in Jordan: Siemens Healthineers, GE HealthCare, Philips, Medtronic, Roche, Munir Sukhtian, Joswe Medical, KHCC and JPD tenders — JFDA rules.',
  introLead:
    'Jordan punches above its weight in medical technology because it treats far more patients than its own population: medical tourism from Iraq, Yemen, Libya, Sudan and the Gulf fills Amman’s private hospitals and King Hussein Cancer Center, sustaining an installed base of imaging, oncology and surgical equipment that a country of eleven million would not otherwise support.',
  introRest:
    'Devices are registered with the Jordan Food and Drug Administration through a locally licensed agent, and the Joint Procurement Department tenders for the Ministry of Health, the Royal Medical Services and the university hospitals, while King Hussein Cancer Center and the private groups buy directly. Multinationals such as Siemens Healthineers, GE HealthCare, Philips and Medtronic serve Jordan from Amman or regional offices through agencies including the Munir Sukhtian Group, and a small domestic manufacturing sector led by Joswe Medical exports disposables across the region. This directory lists the public buyers, brands, agencies, manufacturers and hospital operators that define medtech in Jordan and how they connect.',
  stats: [
    { value: '$350m+', label: 'Jordanian medical device market, 2024 estimate' },
    { value: '250,000+', label: 'International patients treated annually (medical tourism estimate)' },
    { value: '1', label: 'Central public buyer for MOH, RMS and university hospitals (JPD)' },
    { value: '~95%', label: 'Share of devices imported' },
  ],
  channelHeading: 'How medical devices reach hospitals in Jordan',
  channelBody:
    'Public purchasing is unusually consolidated. The Joint Procurement Department runs unified tenders for equipment and consumables on behalf of the Ministry of Health, the Royal Medical Services, Jordan University Hospital and King Abdullah University Hospital, giving suppliers one counterpart and one reference price, although the Royal Medical Services and the university hospitals still run supplementary purchases for specialty items. A foreign manufacturer registers devices with the JFDA through a Jordanian agent, and that agent bids JPD tenders, imports through Queen Alia International Airport or Aqaba, installs and services. King Hussein Cancer Center, funded by its foundation and international donors, procures independently at premium specifications and is the reference oncology account in the Levant. The private channel is large for the country’s size: Jordan Hospital, Specialty Hospital, Istishari, Al Khalidi, Arab Medical Center and Abdali Hospital compete for regional patients and buy imaging, surgical and laboratory technology directly from agents, often at specifications matching Gulf private hospitals. Munir Sukhtian Group and other Amman trading houses represent multinational portfolios, and manufacturers including Siemens Healthineers, GE HealthCare, Philips and Roche keep Amman teams for clinical and service support. Domestic manufacturers such as Joswe Medical supply disposables to JPD tenders and export across the Gulf and Africa.',
  companies: [
    {
      name: 'Joint Procurement Department (JPD)',
      hq: 'Amman',
      type: 'Government',
      focus: 'Unified equipment and consumable tenders for MOH, RMS and university hospitals',
      notes: 'The national public buyer whose tenders and reference prices anchor device volumes across the Jordanian public system.',
    },
    {
      name: 'Royal Medical Services — Directorate of Supplies',
      hq: 'Amman',
      type: 'Government',
      focus: 'Military health system specialty purchasing',
      notes: 'Participates in JPD tenders and runs supplementary procurement for the King Hussein Medical Center and RMS hospitals.',
    },
    {
      name: 'King Hussein Cancer Center — Procurement',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Comprehensive cancer centre equipment and consumables',
      notes: 'Foundation-funded reference oncology account for radiotherapy, imaging and laboratory technology in the Levant.',
    },
    {
      name: 'King Abdullah University Hospital — Procurement',
      hq: 'Irbid',
      type: 'Government',
      focus: 'Northern academic tertiary hospital purchasing',
      notes: 'Largest hospital in northern Jordan; buys through JPD and directly for specialty and research equipment.',
    },
    {
      name: 'Siemens Healthineers Jordan',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Amman presence supporting KHCC, university and private hospital imaging and lab installations via agencies.',
    },
    {
      name: 'GE HealthCare Jordan',
      hq: 'USA',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Installed base across public and private hospitals with Amman-based service and applications support.',
    },
    {
      name: 'Philips Healthcare Jordan',
      hq: 'Netherlands',
      type: 'MNC',
      focus: 'Imaging, patient monitoring and informatics',
      notes: 'Monitoring and cardiology systems in private hospitals competing for regional patients; delivered through local agents.',
    },
    {
      name: 'Medtronic Jordan',
      hq: 'USA / Ireland',
      type: 'MNC',
      focus: 'Cardiovascular, surgical, spine and diabetes devices',
      notes: 'Amman clinical specialists support cases in private cardiac and spine centres; agencies hold inventory and bid.',
    },
    {
      name: 'Johnson & Johnson MedTech (Jordan)',
      hq: 'USA',
      type: 'MNC',
      focus: 'Surgery, orthopaedics and vision',
      notes: 'Ethicon and DePuy Synthes portfolios distributed through Jordanian agencies with company case coverage.',
    },
    {
      name: 'Roche Diagnostics Jordan',
      hq: 'Switzerland',
      type: 'MNC',
      focus: 'Central-lab and molecular diagnostics',
      notes: 'Anchor supplier to KHCC, university laboratories and private lab chains such as Biolab and Medlabs.',
    },
    {
      name: 'Abbott Jordan',
      hq: 'USA',
      type: 'MNC',
      focus: 'Diagnostics, cardiovascular and diabetes care',
      notes: 'IVD installed base plus FreeStyle Libre growth through Pharmacy One and Dawacom.',
    },
    {
      name: 'Fresenius Medical Care Jordan',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Dialysis systems and consumables',
      notes: 'Supplies MOH and RMS dialysis units and private nephrology centres.',
    },
    {
      name: 'Mindray (Jordan)',
      hq: 'China',
      type: 'MNC',
      focus: 'Monitoring, ultrasound and IVD',
      notes: 'Value-segment brand gaining share in JPD monitoring and laboratory tenders through local agents.',
    },
    {
      name: 'Munir Sukhtian Group — Medical Division',
      hq: 'Amman',
      type: 'Distributor',
      focus: 'Medical equipment, diagnostics and healthcare distribution',
      notes: 'Diversified Jordanian group whose healthcare arm represents multinational device brands to public and private hospitals.',
    },
    {
      name: 'Joswe Medical',
      hq: 'Amman',
      type: 'Local',
      focus: 'Disposable medical devices manufacturing',
      notes: 'Jordan Sweden Medical and Sterilization Company; supplies syringes and infusion sets to JPD tenders and exports regionally.',
    },
    {
      name: 'Jordan Hospital — Procurement',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Large private hospital equipment purchasing',
      notes: 'One of the biggest private hospitals in the country and a reference account for regional-patient-driven premium technology.',
    },
  ],
  categoryBlurbs: {
    local:
      'Jordanian manufacturers of disposables and sterilisation products, led by Joswe Medical, that supply JPD tenders with local preference and export across the region.',
    mnc:
      'Multinational device and diagnostics companies with Amman teams for clinical, key-account and service support, transacting through JFDA-licensed agencies.',
    regional:
      'Levant and Gulf medtech distributors that include Jordan in wider agency portfolios, particularly for niche surgical, dental and ophthalmic brands.',
    trade:
      'The central public buyer, the military supply directorate, the cancer centre and the private hospital operators whose tenders and direct purchases shape demand.',
  },
  growthDrivers: [
    {
      title: 'Medical tourism and private hospital competition',
      desc: 'Regional patients from Iraq, Libya, Yemen and the Gulf sustain investment in premium imaging, oncology and surgical technology at Amman’s private hospitals, which compete on equipment as a marketing asset.',
    },
    {
      title: 'Joint Procurement Department consolidation',
      desc: 'JPD keeps widening the range of devices and institutions covered by unified tenders, concentrating public volume into fewer awards and raising the value of each specification decision.',
    },
    {
      title: 'Oncology and specialty centre investment',
      desc: 'King Hussein Cancer Center expansion and new cardiac, neuroscience and fertility centres drive demand for radiotherapy, interventional and laboratory systems at reference specifications.',
    },
    {
      title: 'Export-oriented local manufacturing',
      desc: 'Jordanian disposable and sterilisation manufacturers are expanding capacity for Gulf and African export, attracting contract-manufacturing interest and benefiting from local preference at home.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Jordan?',
      a: 'With the Jordan Food and Drug Administration through a locally licensed agent, which files the device dossier, holds the import approval and represents the manufacturer in Joint Procurement Department tenders.',
    },
    {
      q: 'Who buys medical equipment for Jordan’s public hospitals?',
      a: 'The Joint Procurement Department tenders for the Ministry of Health, the Royal Medical Services and the two main university hospitals, with RMS and the universities retaining supplementary purchasing for specialty items.',
    },
    {
      q: 'How does medical tourism affect the device market in Jordan?',
      a: 'Substantially. Regional patients fill private hospitals and KHCC, justifying premium imaging, oncology and surgical technology at a scale the domestic population alone would not support, and making private operators key accounts for multinationals.',
    },
    {
      q: 'Is there local medical device manufacturing in Jordan?',
      a: 'Yes, mainly in disposables and sterilisation products. Joswe Medical and peers supply JPD tenders with local preference and export across the Gulf and Africa.',
    },
    {
      q: 'What does BioNixus study about medical device companies in Jordan?',
      a: 'Installed-base and brand-share mapping across JPD-served, KHCC and private hospitals; procurement-decision interviews with biomedical engineers, department heads and JPD-experienced buyers; agency evaluation; and medical-tourism-driven capital planning studies.',
    },
    {
      q: 'Is this list a ranking of device companies in Jordan?',
      a: 'No. Entries are grouped by role and included because they recur in BioNixus Jordan hospital fieldwork and on JFDA records; order carries no information about market share.',
    },
  ],
  regulatorSource: {
    name: 'Jordan Food and Drug Administration (JFDA) — medical device registration and licensed agents',
    url: 'https://www.jfda.jo',
    asOf: '2026-09-03',
  },
  sources: [
    'Joint Procurement Department tender announcements and awards, 2024–2026',
    'Private Hospitals Association of Jordan medical tourism statistics, 2024',
    'King Hussein Cancer Center annual report and procurement notices, 2024–2025',
    'BioNixus Jordan hospital and biomedical engineering fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Installed-base and brand-share audits across MOH, RMS, university, KHCC and private hospitals for imaging, oncology, ICU and laboratory equipment.',
    'Procurement-decision interviews with JPD-experienced buyers, biomedical engineers and department heads on tender criteria, service expectations and brand preference.',
    'Agency evaluation for Jordanian entry scoring tender record, service organisation and brand portfolio from hospital-side interviews.',
    'Private hospital capital-planning studies at Jordan Hospital, Specialty Hospital, Istishari and Abdali on medical-tourism-driven technology investment.',
  ],
};
