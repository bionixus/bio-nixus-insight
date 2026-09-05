import type { DirectoryPageInput } from '../../types';

export const croCompaniesUae: DirectoryPageInput = {
  entity: 'cro-companies',
  countrySlug: 'uae',
  metaDescription:
    'CROs in the UAE: IQVIA, ICON, Parexel, PPD, ClinArt MENA, DHA, DoH and Cleveland Clinic Abu Dhabi — sites, ethics, approvals.',
  introLead:
    'A clinical study in the United Arab Emirates is an emirate-by-emirate exercise: Dubai Health Authority, the Department of Health – Abu Dhabi, the Ministry of Health and Prevention and Dubai Healthcare City Authority each hold a piece of ethics and permission, while the monitors who make visits usually sit in Dubai Healthcare City or Abu Dhabi.',
  introRest:
    'Global CROs — IQVIA, ICON, Parexel, PPD (Thermo Fisher), Fortrea and Syneos — run Gulf programmes from UAE desks and treat Cleveland Clinic Abu Dhabi, SEHA tertiary hospitals, Dubai Health teaching sites and a handful of private groups as the enrolment engines. ClinArt MENA, founded in Dubai Healthcare City and later bought by CTI Clinical Trial and Consulting, is the regional house that still appears when a mid-sized sponsor wants one contract across the Gulf and Egypt. MCT-CRO covers the Emirates from a Maghreb-anchored network. Hospital research offices at Cleveland Clinic Abu Dhabi, PureHealth/SEHA, Dubai Health / MBRU and Thumbay University Hospital negotiate budgets and IRBs. Foreign sponsors usually file through a Dubai- or Abu Dhabi-licensed agent, so ClinArt/CTI and the global desks still pick up paperwork-only mandates. This directory sets out who monitors, who hosts patients, who signs the ethics letter and which emirate owns the file.',
  stats: [
    { value: '4', label: 'Research-permission regimes a multi-emirate protocol can touch (DoH, DHA, MOHAP, DHCR)' },
    { value: '1', label: 'Premium quaternary site most often named on complex industry protocols (Cleveland Clinic Abu Dhabi)' },
    { value: '2001', label: 'Year ClinArt opened in Dubai Healthcare City, still the regional CRO address sponsors quote' },
    { value: '~9m', label: 'Residents on mandatory health insurance in Dubai and Abu Dhabi, the insured pool behind many observational studies' },
  ],
  channelHeading: 'How a trial is approved and staffed across the seven emirates',
  channelBody:
    'Start with the emirate, not with the CRO logo. An Abu Dhabi interventional study needs DoH research approval and an IRB at the participating SEHA, M42 or Cleveland Clinic site. A Dubai hospital study needs DHA permission, or a DHCR research permit if the work sits inside Dubai Healthcare City. Northern-emirate sites pull in MOHAP. Multi-emirate programmes therefore stack ethics clocks. The sponsor or its CRO then contracts the hospital research office — Cleveland Clinic Abu Dhabi is the most professionalised private-quaternary office; Dubai Health / MBRU and PureHealth/SEHA handle academic and public volume; Mediclinic, Burjeel and Thumbay are smaller but usable. Global CROs supply monitors, data and central-lab routes; samples often leave through Dubai. ClinArt / CTI and MCT-CRO take the mid-sized and multi-country MENA briefs that a global firm will not staff locally. Insurance is not the ethics gate, but Thiqa and Dubai Essential Benefits data, plus Malaffi and NABIDH, make retrospective and registry work unusually tractable once the permit is in hand. Feasibility that ignores emirate jurisdiction produces a pretty spreadsheet and a stalled first-patient date.',
  companies: [
    {
      name: 'IQVIA — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Full-service Phase II–IV, RWE and feasibility from a Gulf hub',
      notes: 'Largest global CRO desk in the Emirates; pairs monitoring with the commercial data sponsors use to pick Dubai versus Abu Dhabi sites.',
    },
    {
      name: 'ICON plc — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Worldwide late-phase delivery, CRA coverage, sample logistics from Dubai',
      notes: 'Places UAE hospitals inside multinational oncology and specialty books and has added local monitors as Gulf enrolment targets rose.',
    },
    {
      name: 'Parexel — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Clinical operations and regulatory consulting across emirates',
      notes: 'Combines monitors with consultants who walk sponsors through DoH versus DHA versus DHCR files.',
    },
    {
      name: 'PPD, part of Thermo Fisher Scientific',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Phase II–III execution and central-laboratory services',
      notes: 'Thermo Fisher’s lab and kit network is the differentiator in a market where many samples still fly out of Dubai.',
    },
    {
      name: 'Fortrea',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Regional clinical development and central-lab coordination',
      notes: 'Former Labcorp Drug Development book; covers UAE sites from the Gulf hub, often on cardiometabolic and oncology protocols.',
    },
    {
      name: 'Syneos Health — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Integrated clinical and commercial services',
      notes: 'Used when a sponsor wants the same vendor on Gulf enrolment and on launch-readiness work with DHA or DoH.',
    },
    {
      name: 'ClinArt MENA (CTI Clinical Trial and Consulting)',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Full-service MENA CRO; Phase I–IV and non-interventional studies',
      notes: 'Dubai Healthcare City house, acquired by CTI in 2020; the regional contract that mid-sized sponsors still sign for UAE-plus-Egypt-plus-KSA work.',
    },
    {
      name: 'MCT-CRO',
      hq: 'Tunis',
      type: 'Regional',
      focus: 'Multi-country Phase II–IV across MENA and Africa, with UAE monitors',
      notes: 'Maghreb-anchored network that fields CRAs in the Emirates when the protocol also enrols North Africa.',
    },
    {
      name: 'Department of Health – Abu Dhabi — research',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Emirate research approval, ATMP rules and site suitability',
      notes: 'The Abu Dhabi gate for interventional work at SEHA, M42 and Cleveland Clinic Abu Dhabi.',
    },
    {
      name: 'Dubai Health Authority — research office',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Dubai research permission, hospital ethics oversight and innovation files',
      notes: 'The Dubai gate outside the Healthcare City free zone; DHA hospitals now sit inside the Dubai Health academic system.',
    },
    {
      name: 'Dubai Healthcare City Authority – Regulatory (DHCR)',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Research permits for entities inside Dubai Healthcare City',
      notes: 'Issues the Approved Research Operator permit that ClinArt and other DHCC tenants need before a protocol starts inside the free zone.',
    },
    {
      name: 'Ministry of Health and Prevention — research',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Federal and northern-emirate research oversight',
      notes: 'Pulled in when a site sits in Sharjah, Ajman, Ras Al Khaimah or Fujairah, or when a federal product file rides alongside the trial.',
    },
    {
      name: 'Cleveland Clinic Abu Dhabi — research office',
      hq: 'Abu Dhabi',
      type: 'MNC',
      focus: 'Quaternary hospital site, complex-care enrolment, professionalised contracts',
      notes: 'The site sponsors want on a high-complexity protocol; M42 ownership links it to the wider Abu Dhabi research stack.',
    },
    {
      name: 'PureHealth / SEHA — academic and research units (AHS legacy)',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Public tertiary hospitals, IRBs and volume enrolment',
      notes: 'Sheikh Shakhbout, Tawam and sister SEHA hospitals remain the Abu Dhabi volume engine, now under the PureHealth holding.',
    },
    {
      name: 'Dubai Health / Mohammed Bin Rashid University',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Academic health-system IRB, teaching hospitals and early clinical work',
      notes: 'Rashid, Dubai and Latifa hospitals plus MBRU ethics; the Dubai public-academic counterpart to SEHA.',
    },
    {
      name: 'Thumbay University Hospital — research',
      hq: 'Ajman',
      type: 'Operator',
      focus: 'Teaching hospital linked to Gulf Medical University; northern-emirate site',
      notes: 'Gives sponsors an Ajman/Sharjah enrolment option with a university IRB when Dubai and Abu Dhabi sites are saturated.',
    },
    {
      name: 'Mediclinic Middle East — research office',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Private premium hospitals entering more industry protocols',
      notes: 'City Hospital and Airport Road research windows; smaller than Cleveland Clinic or SEHA but useful for insured specialty populations.',
    },
  ],
  categoryBlurbs: {
    local:
      'UAE-staffed regional operations and free-zone CROs; the domestic legal-representative role is usually played by ClinArt/CTI or by a global firm’s Dubai entity rather than by a purely Emirati boutique.',
    mnc:
      'IQVIA, ICON, Parexel, PPD, Fortrea and Syneos desks that deliver UAE sites inside global programmes, plus Cleveland Clinic and Mediclinic as international-brand sites.',
    regional:
      'ClinArt MENA under CTI and MCT-CRO, the two regional contracts that still bundle the Emirates with Egypt, the Levant and the Maghreb.',
    trade:
      'DoH, DHA, DHCR and MOHAP as permission regimes, with PureHealth/SEHA, Dubai Health/MBRU and Thumbay as the hospital research offices that enrol.',
  },
  growthDrivers: [
    {
      title: 'Professionalised quaternary and academic offices',
      desc: 'Cleveland Clinic Abu Dhabi, MBRU and SEHA research units now negotiate like European sites, which is why global protocols keep adding an UAE row.',
    },
    {
      title: 'Genomics and ATMP ambition in Abu Dhabi',
      desc: 'M42’s cohort and DoH advanced-therapy rules pull first-in-region gene and cell studies into Abu Dhabi, creating specialist CRO and site demand.',
    },
    {
      title: 'Insured, multi-ethnic catchment',
      desc: 'Mandatory cover plus a resident mix that spans South Asia, the Levant, Europe and the Gulf makes observational and some interventional enrolment faster than in thinner neighbours.',
    },
    {
      title: 'Free-zone research permits',
      desc: 'DHCR’s Approved Research Operator path lets a CRO or sponsor entity live next to the hospital inside Dubai Healthcare City, which shortens some start-up loops.',
    },
  ],
  faq: [
    {
      q: 'Does a foreign sponsor need a UAE legal presence to run a trial?',
      a: 'A locally accountable representative is expected. Global CROs with a Dubai entity, ClinArt/CTI, or another licensed organisation typically file, hold correspondence and remain visible to the emirate regulator.',
    },
    {
      q: 'Which ethics body do I use?',
      a: 'The one that owns the site. DoH and the hospital IRB for Abu Dhabi. DHA or DHCR for Dubai, depending on whether the work is inside Healthcare City. MOHAP for many northern-emirate sites. Multi-emirate protocols stack those clocks.',
    },
    {
      q: 'Which sites enrol the most industry patients?',
      a: 'Cleveland Clinic Abu Dhabi for complexity; SEHA tertiary hospitals for public volume; Dubai Health teaching hospitals for Dubai public-academic work; Mediclinic, Burjeel and Thumbay as smaller private options.',
    },
    {
      q: 'Is ClinArt still independent?',
      a: 'CTI bought it in 2020. Sponsors still meet the Dubai Healthcare City team under the ClinArt MENA name. Treat it as a CTI regional node, not as a vanished brand.',
    },
    {
      q: 'What fieldwork does BioNixus run on UAE trial vendors and sites?',
      a: 'Investigator and coordinator interviews at Cleveland Clinic Abu Dhabi, SEHA and Dubai Health sites; start-up clock mapping across DoH, DHA and DHCR; and sponsor interviews on CRA quality and payment speed.',
    },
    {
      q: 'Is this directory a ranking of CROs operating in the UAE?',
      a: 'It is a jurisdiction-and-role map. Organisations appear because they recur in BioNixus UAE site-feasibility work and on DoH, DHA and DHCR permit lists. Order follows function, not billings.',
    },
  ],
  regulatorSource: {
    name: 'Dubai Health Authority — research permissions and licensed facilities (with DoH Abu Dhabi and DHCR as sister regimes)',
    url: 'https://www.dha.gov.ae',
    asOf: '2026-09-04',
  },
  sources: [
    'Dubai Health Authority, Department of Health – Abu Dhabi and DHCR research-permit materials',
    'CTI announcement of the ClinArt acquisition, 2020; company sites of IQVIA, ICON, Parexel, PPD, Fortrea and Syneos',
    'Cleveland Clinic Abu Dhabi, Dubai Health / MBRU and PureHealth research-office descriptions',
    'BioNixus UAE site-feasibility, investigator and sponsor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Start-up clock mapping in Dubai and Abu Dhabi that separates DHA, DHCR and DoH steps on recent interventional submissions.',
    'Investigator and study-coordinator interviews at Cleveland Clinic Abu Dhabi, Sheikh Shakhbout and Dubai Health hospitals on monitor quality and query speed.',
    'Feasibility surveys estimating eligible pools for oncology and cardiometabolic protocols across Abu Dhabi, Dubai and Ajman.',
    'Sponsor medical-director interviews on why they pick ClinArt/CTI versus a global CRO desk for a multi-country MENA add-on.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
