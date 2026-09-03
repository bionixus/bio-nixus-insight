import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesOman: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'oman',
  metaDescription:
    'Medical device companies in Oman: GE HealthCare, Siemens Healthineers, Philips, Medtronic, Roche, Mustafa Sultan, Khimji Ramdas, Muscat Pharmacy and MOH tenders.',
  introLead:
    'Oman’s medical technology market is shaped by geography as much as by budget: a Ministry of Health network of more than 50 hospitals stretched from Musandam to Dhofar, a flagship Royal Hospital and Sultan Qaboos University Hospital in Muscat, and a private sector concentrated in the capital, all supplied through a small group of Omani agencies that import, install and service equipment across very long distances.',
  introRest:
    'Devices are registered with the Ministry of Health’s Directorate General of Pharmaceutical Affairs and Drug Control through a locally licensed agent, and the Directorate General of Medical Supplies tenders for MOH facilities while SQUH, the Royal Oman Police and Petroleum Development Oman hospitals procure separately. Multinationals including GE HealthCare, Siemens Healthineers, Philips and Medtronic support the market from Muscat or regional Gulf offices, and agencies such as Mustafa Sultan Science & Industry, Khimji Ramdas Healthcare and Muscat Pharmacy carry their portfolios. Private hospitals led by Badr Al Samaa, Aster Al Raffah and KIMS form a growing direct-purchase channel as Dhamani insurance rolls out. The directory below lists these participants by role.',
  stats: [
    { value: '$350m+', label: 'Omani medical device market, 2024 estimate' },
    { value: '50+', label: 'Ministry of Health hospitals across 11 governorates' },
    { value: '~75%', label: 'Share of device spend funded by MOH and other government systems' },
    { value: '~98%', label: 'Share of devices imported' },
  ],
  channelHeading: 'How medical devices reach hospitals in Oman',
  channelBody:
    'The public system buys most equipment. The Directorate General of Medical Supplies issues tenders for consumables, implants and replacement equipment across MOH hospitals and health centres, and large capital projects such as new regional hospitals and the planned Sultan Qaboos Medical City are tendered through the Tender Board, often as turnkey packages. Sultan Qaboos University Hospital, the Royal Oman Police Hospital, the Armed Forces Hospital and PDO’s medical services run their own procurement and are distinct accounts. A foreign manufacturer appoints an Omani agent registered with the MOH, and that agent bids, imports through Sohar or Muscat, installs, trains and holds the maintenance contract, which matters greatly when a CT scanner in Salalah or Sur is a day’s drive from Muscat. Mustafa Sultan Science & Industry, Khimji Ramdas Healthcare, Muscat Pharmacy and Al Hashar are among the agencies encountered most frequently, each representing a mix of imaging, laboratory, surgical and consumable brands. Manufacturers such as GE HealthCare, Siemens Healthineers and Philips maintain Oman-focused teams for clinical and service escalation. The private channel, anchored by Badr Al Samaa, Aster Al Raffah, KIMS Oman, Starcare and Burjeel Muscat, buys directly from agents and is expanding as Dhamani mandatory insurance brings expatriate workers into private care.',
  companies: [
    {
      name: 'MOH Directorate General of Medical Supplies (DGMS)',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Equipment and consumable tenders for Ministry of Health facilities',
      notes: 'Principal public buyer for hospitals and health centres in all governorates; capital projects pass through the Tender Board.',
    },
    {
      name: 'Sultan Qaboos University Hospital — Procurement',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Academic tertiary hospital purchasing',
      notes: 'Procures independently of MOH and sets the specification benchmark for advanced imaging, laboratory and surgical technology.',
    },
    {
      name: 'GE HealthCare Oman',
      hq: 'USA',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Large MOH imaging installed base delivered through local agencies with Muscat-based service support.',
    },
    {
      name: 'Siemens Healthineers Oman',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Strong in CT, MRI and lab automation at the Royal Hospital, SQUH and regional hospitals via Mustafa Sultan.',
    },
    {
      name: 'Philips Healthcare Oman',
      hq: 'Netherlands',
      type: 'MNC',
      focus: 'Imaging, patient monitoring and informatics',
      notes: 'Monitoring and cath-lab presence across public and private hospitals through appointed agents.',
    },
    {
      name: 'Medtronic Oman',
      hq: 'USA / Ireland',
      type: 'MNC',
      focus: 'Cardiovascular, surgical, spine and diabetes devices',
      notes: 'Supported from Gulf regional offices with case coverage in Muscat; agencies hold inventory and bid tenders.',
    },
    {
      name: 'Johnson & Johnson MedTech (Oman)',
      hq: 'USA',
      type: 'MNC',
      focus: 'Surgery, orthopaedics and vision',
      notes: 'Ethicon and DePuy Synthes lines carried by Omani distributors with regional clinical support.',
    },
    {
      name: 'Roche Diagnostics Oman',
      hq: 'Switzerland',
      type: 'MNC',
      focus: 'Central-lab and molecular diagnostics',
      notes: 'Analyser and reagent supplier to MOH central laboratories, SQUH and private hospital labs.',
    },
    {
      name: 'Abbott Oman',
      hq: 'USA',
      type: 'MNC',
      focus: 'Diagnostics, cardiovascular and diabetes care',
      notes: 'IVD presence in public labs and FreeStyle Libre distribution through pharmacy chains and MOH diabetes clinics.',
    },
    {
      name: 'Fresenius Medical Care Oman',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Dialysis systems and consumables',
      notes: 'Supplies MOH dialysis units distributed across governorates, a logistics-intensive account given Oman’s geography.',
    },
    {
      name: 'Mindray (Oman)',
      hq: 'China',
      type: 'MNC',
      focus: 'Monitoring, ultrasound and IVD',
      notes: 'Value-segment brand gaining share in regional hospitals and private clinics through local agents.',
    },
    {
      name: 'Mustafa Sultan Science & Industry',
      hq: 'Muscat',
      type: 'Distributor',
      focus: 'Medical equipment, laboratory and turnkey projects',
      notes: 'Part of Mustafa Sultan Enterprises; a leading medtech agency and long-standing partner for imaging and laboratory brands in MOH tenders.',
    },
    {
      name: 'Khimji Ramdas Healthcare',
      hq: 'Muscat',
      type: 'Distributor',
      focus: 'Devices, consumables and pharma distribution',
      notes: 'Healthcare division of one of Oman’s largest conglomerates, with nationwide logistics reach into regional hospitals.',
    },
    {
      name: 'Muscat Pharmacy & Stores — Medical Division',
      hq: 'Muscat',
      type: 'Distributor',
      focus: 'Medical equipment and hospital consumables',
      notes: 'Device arm of the largest integrated pharma agent; supplies MOH and private hospitals alongside its pharmacy business.',
    },
    {
      name: 'Al Hashar Group (Medical)',
      hq: 'Muscat',
      type: 'Distributor',
      focus: 'Medical and laboratory equipment agency',
      notes: 'Family group representing device and diagnostic brands to public and private hospitals.',
    },
    {
      name: 'Badr Al Samaa Group — Biomedical Procurement',
      hq: 'Muscat',
      type: 'Operator',
      focus: 'Largest private hospital network purchasing',
      notes: 'Multi-site private operator whose central purchasing defines private-channel benchmarks for equipment and consumables.',
    },
  ],
  categoryBlurbs: {
    local:
      'Oman has limited domestic device manufacturing; the local layer consists of biomedical maintenance firms and agencies’ service teams that keep equipment running across distant governorates.',
    mnc:
      'Multinational device and diagnostics companies serving Oman from Muscat or Gulf regional offices, providing clinical and service support while agencies register, import and tender.',
    regional:
      'Gulf medtech distributors that include Oman in a multi-country agency portfolio, often for niche surgical, dental or ophthalmic brands.',
    trade:
      'The public buyers, the agencies that bid and service, and the private operators whose expansion under Dhamani insurance is enlarging the direct-purchase channel.',
  },
  growthDrivers: [
    {
      title: 'Dhamani insurance and private capacity',
      desc: 'Mandatory health insurance for private-sector workers is shifting procedures into Badr Al Samaa, Aster Al Raffah, KIMS and new private hospitals, expanding demand for imaging, surgical and laboratory technology bought directly from agents.',
    },
    {
      title: 'Regional hospital and Medical City projects',
      desc: 'New regional hospitals, the planned Sultan Qaboos Medical City and upgrades in Dhofar and Batinah create turnkey equipment tenders that favour agencies with project-management and installation capacity.',
    },
    {
      title: 'Service reach across governorates',
      desc: 'Distances between Muscat and regional hospitals make uptime and local biomedical engineering decisive in tenders, pushing agencies to station technicians in Salalah, Sohar and Nizwa.',
    },
    {
      title: 'Laboratory consolidation and digital health',
      desc: 'MOH investment in central laboratory automation, PACS and the Al Shifa health information system rewards vendors able to integrate devices with national platforms.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Oman?',
      a: 'With the Ministry of Health’s Directorate General of Pharmaceutical Affairs and Drug Control through a locally licensed agent, which holds the registration and import approval and represents the manufacturer in tenders.',
    },
    {
      q: 'Who buys medical equipment for Oman’s public hospitals?',
      a: 'The Directorate General of Medical Supplies for Ministry of Health facilities, with capital projects routed through the Tender Board, while SQUH, the Royal Oman Police, the Armed Forces and PDO hospitals procure independently.',
    },
    {
      q: 'Which agencies are most active in Omani device tenders?',
      a: 'Mustafa Sultan Science & Industry, Khimji Ramdas Healthcare, Muscat Pharmacy’s medical division and Al Hashar recur across imaging, laboratory, surgical and consumable awards, each representing a portfolio of multinational brands.',
    },
    {
      q: 'How important is the private hospital channel for devices in Oman?',
      a: 'It is smaller than MOH but growing fastest. Badr Al Samaa, Aster Al Raffah, KIMS Oman, Starcare and Burjeel Muscat buy directly from agents, and Dhamani insurance is increasing their patient volumes and capital budgets.',
    },
    {
      q: 'What does BioNixus study about medical device companies in Oman?',
      a: 'Installed-base and brand-share mapping across MOH, SQUH and private hospitals; procurement-decision interviews with biomedical engineers, department heads and DGMS-experienced buyers; agency evaluation; and service-reach and pricing benchmarking across governorates.',
    },
    {
      q: 'Does the order of companies indicate market share?',
      a: 'No. Companies are grouped by function and listed because they recur in BioNixus Oman hospital fieldwork and on MOH agent registrations; position carries no ranking.',
    },
  ],
  regulatorSource: {
    name: 'Oman Ministry of Health — Directorate General of Pharmaceutical Affairs and Drug Control, medical device registration and agents',
    url: 'https://www.moh.gov.om',
    asOf: '2026-09-03',
  },
  sources: [
    'Directorate General of Medical Supplies tender notices and Oman Tender Board awards, 2024–2026',
    'National Centre for Statistics and Information health facility statistics, 2024',
    'Muscat Stock Exchange and company disclosures for listed healthcare groups, 2024–2025',
    'BioNixus Oman hospital and biomedical engineering fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Installed-base and brand-share audits across the Royal Hospital, SQUH, regional MOH hospitals and private facilities for imaging, ICU, laboratory and dialysis equipment.',
    'Procurement-decision interviews with DGMS-experienced buyers, biomedical engineers and department heads on tender criteria, uptime requirements and agency performance.',
    'Agency evaluation for Omani market entry scoring service reach across governorates, tender record and brand portfolio.',
    'Private hospital purchasing studies at Badr Al Samaa, Aster Al Raffah and KIMS on premium-brand preference and insurance-driven capital plans.',
  ],
};
