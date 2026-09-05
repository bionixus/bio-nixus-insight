import type { DirectoryPageInput } from '../../types';

export const croCompaniesEgypt: DirectoryPageInput = {
  entity: 'cro-companies',
  countrySlug: 'egypt',
  metaDescription:
    'CROs in Egypt: IQVIA, ClinServ, ARC, GRC, RAY, NRC, university hospitals and the EDA — trial sites, bioequivalence, ethics.',
  introLead:
    'Egypt is the population engine of MENA clinical research: university hospitals in Cairo, Ain Shams, Alexandria and Mansoura can enrol at a scale Gulf sites cannot, and a thicket of local CROs grew up to run bioequivalence, late-phase and investigator-initiated work under the Egyptian Drug Authority.',
  introRest:
    'IQVIA’s Cairo office delivers the country inside global Phase II–III programmes. ClinServ, a Paris-founded organisation with a Dokki desk, is the regional house sponsors still name for Egypt-plus-Levant monitoring. Advanced Research Center (ARC) in Nasr City and Genuine Research Center (GRC) in Heliopolis dominate much of the bioequivalence and healthy-volunteer work that Egyptian generic manufacturers need for EDA and GCC files. RAY CRO, Giza-based, shows up on real-world evidence and late-phase briefs. The National Research Centre in Dokki and the large university complexes — Kasr Al-Ainy, Ain Shams, Alexandria, Mansoura — plus Children’s Cancer Hospital 57357 and the National Cancer Institute, recruit the patients. EDA authorises interventional drug studies and inspects BE units. Ethics sit with hospital and faculty IRBs that are uneven in speed. This directory separates global monitors, Egyptian BE houses, regional CROs, academic sites and the Authority so a sponsor can match the vendor to the study type.',
  stats: [
    { value: '1', label: 'National authority that authorises drug trials and inspects BE units (EDA)' },
    { value: '4', label: 'University cities that recur on industry feasibility (Cairo, Ain Shams/Abbasiya, Alexandria, Mansoura)' },
    { value: '2', label: 'Study types that dominate local CRO revenue: bioequivalence for generics, and late-phase / RWE for industry' },
    { value: '~1,800', label: 'Hospitals nationwide, of which a small tertiary tier actually enrols industry patients' },
  ],
  channelHeading: 'How sponsors open Egyptian sites and clear EDA ethics',
  channelBody:
    'Pick the study type first. A bioequivalence file for an Egyptian or GCC generic usually goes to ARC, GRC or another EDA-inspected clinical pharmacology unit with a GCP ward and a GLP bioanalytical lab on one campus. A multinational Phase III goes to IQVIA or another global CRO, which then contracts Kasr Al-Ainy, Ain Shams, Alexandria University, Mansoura or 57357. A mid-sized regional protocol often lands on ClinServ, RAY or ClinArt’s Cairo team. Every interventional drug study needs EDA authorisation and a local IRB letter; insurance and a local responsible person are expected when the sponsor has no Egyptian entity. Start-up time is driven by the hospital research office as much as by the Authority — Kasr Al-Ainy and 57357 are used to industry contracts, district hospitals are not. Samples for global trials still travel to European or Gulf central labs; BE samples stay on the Cairo campus. Currency and payment delays are a CRA-retention issue, not a footnote. Feasibility that quotes “Egypt’s 100 million people” without naming a hospital research office will miss first-patient by months.',
  companies: [
    {
      name: 'IQVIA Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Full-service Phase II–IV and country management inside global programmes',
      notes: 'The global CRO desk Egyptian principal investigators see most often on oncology, immunology and vaccine protocols.',
    },
    {
      name: 'ClinServ',
      hq: 'Dokki',
      type: 'Regional',
      focus: 'Full-service monitoring and project management across Egypt, the Levant and wider MENA',
      notes: 'Paris-founded, Dokki-staffed organisation that mid-sized sponsors use when they want a regional CRA team rather than a global framework agreement.',
    },
    {
      name: 'Advanced Research Center (ARC)',
      hq: 'Nasr City',
      type: 'Local',
      focus: 'Bioequivalence, biowaiver, bioanalysis and stability studies',
      notes: 'EDA-facing BE house with a clinical unit and GLP lab on one site; a default vendor for Egyptian generic files and some GCC work.',
    },
    {
      name: 'Genuine Research Center (GRC)',
      hq: 'Heliopolis',
      type: 'Local',
      focus: 'Bioequivalence, healthy-volunteer studies and clinical monitoring',
      notes: 'Heliopolis unit that competes with ARC for manufacturer BE work and also fields some patient-study monitoring.',
    },
    {
      name: 'RAY CRO',
      hq: 'Giza',
      type: 'Regional',
      focus: 'Real-world evidence, late-phase and health-economics studies',
      notes: 'Giza-based organisation that appears on RWE and post-marketing briefs in Egyptian hospitals and, at times, in Gulf add-on work.',
    },
    {
      name: 'ClinArt MENA — Cairo office',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Egyptian sites inside multi-country MENA contracts',
      notes: 'The Cairo node of the Dubai-headquartered, CTI-owned CRO; useful when the same contract already covers the Gulf.',
    },
    {
      name: 'MCT-CRO — Egypt coverage',
      hq: 'Tunis',
      type: 'Regional',
      focus: 'Multi-country Phase II–IV including Egyptian sites',
      notes: 'Maghreb-anchored network that enrols Egypt when the protocol needs North African plus Levant plus Gulf patients.',
    },
    {
      name: 'Egyptian Drug Authority — clinical trials',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Trial authorisation, BE-unit inspection, GCP oversight',
      notes: 'The Authority that must see the protocol, the investigational product and the insurance before an interventional drug study starts.',
    },
    {
      name: 'National Research Centre (NRC)',
      hq: 'Dokki',
      type: 'Government',
      focus: 'National laboratories, ethics and investigator-initiated biomedical work',
      notes: 'Dokki campus that hosts methods work and some academic protocols; not a substitute for a hospital site on a Phase III.',
    },
    {
      name: 'Cairo University — Kasr Al-Ainy hospitals',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Largest public academic complex; industry and investigator studies',
      notes: 'The default Cairo tertiary site; its research office and IRB set the pace many other faculties copy.',
    },
    {
      name: 'Ain Shams University Hospitals',
      hq: 'Abbasiya',
      type: 'Operator',
      focus: 'Academic tertiary site, busy IRB, strong specialty departments',
      notes: 'Abbasiya complex that rivals Kasr Al-Ainy for industry enrolment in several therapeutic areas.',
    },
    {
      name: 'Alexandria University Hospitals',
      hq: 'Alexandria',
      type: 'Operator',
      focus: 'Coastal academic site and second-city enrolment',
      notes: 'The site that keeps a protocol from being Cairo-only; useful for infectious disease, cardiology and oncology add-on.',
    },
    {
      name: 'Mansoura University Hospitals',
      hq: 'Mansoura',
      type: 'Operator',
      focus: 'Delta academic tertiary site, notably urology, nephrology and oncology',
      notes: 'Gives sponsors a Lower Egypt catchment that Cairo hospitals do not duplicate.',
    },
    {
      name: 'Children’s Cancer Hospital 57357',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Paediatric oncology trials and a professionalised research office',
      notes: 'Charity hospital that global paediatric oncology protocols treat as a reference Egyptian site.',
    },
    {
      name: 'National Cancer Institute (NCI Egypt)',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Public oncology tertiary site and academic trials',
      notes: 'Fom El-Khalig institute that still enrols adult oncology studies alongside 57357’s paediatric book.',
    },
    {
      name: 'Theodor Bilharz Research Institute',
      hq: 'Giza',
      type: 'Government',
      focus: 'Hepatic and parasitic-disease research hospital',
      notes: 'Specialist Giza site for liver and endemic-disease protocols that general university hospitals handle less tightly.',
    },
  ],
  categoryBlurbs: {
    local:
      'Egyptian BE and clinical houses — ARC and GRC especially — that hold EDA-inspected wards and bioanalytical labs for generic and some patient studies.',
    mnc:
      'IQVIA’s Cairo country office, the global firm that still delivers most multinational Phase II–III monitoring in Egypt.',
    regional:
      'ClinServ, RAY, ClinArt’s Cairo node and MCT-CRO, which fold Egyptian sites into Levant, Gulf and Maghreb contracts.',
    trade:
      'EDA as authoriser, NRC as national lab, and the university and charity hospitals that enrol — Kasr Al-Ainy, Ain Shams, Alexandria, Mansoura, 57357, NCI, Theodor Bilharz.',
  },
  growthDrivers: [
    {
      title: 'University-hospital enrolment scale',
      desc: 'Kasr Al-Ainy, Ain Shams, Alexandria and Mansoura can still put up monthly numbers that Gulf private hospitals cannot, which keeps Egypt on global feasibility lists.',
    },
    {
      title: 'A standing bioequivalence industry',
      desc: 'Domestic generic houses need EDA and GCC BE packages, which keeps ARC, GRC and peer units busy independently of multinational Phase III cycles.',
    },
    {
      title: 'EDA as a single door',
      desc: 'One Authority for product and trial files beats the older split-agency era, even when hospital IRBs remain the slower clock.',
    },
    {
      title: 'Specialist charity and institute sites',
      desc: '57357, NCI and Theodor Bilharz give paediatric oncology, adult oncology and hepatic protocols a professionalised home outside the general university crush.',
    },
  ],
  faq: [
    {
      q: 'Can a foreign sponsor file an Egyptian trial without a local company?',
      a: 'EDA expects a locally accountable person or organisation. A licensed CRO commonly holds the correspondence, insurance liaison and GCP face to the Authority.',
    },
    {
      q: 'Who does bioequivalence in Egypt?',
      a: 'Specialist units such as ARC and GRC, not the global Phase III houses. Pick them when the product is a generic file; pick IQVIA or a regional full-service CRO when the product is an innovative multinational protocol.',
    },
    {
      q: 'Which hospitals should be on a first feasibility list?',
      a: 'Kasr Al-Ainy and Ain Shams in Cairo, Alexandria University, Mansoura for Delta catchments, 57357 for paediatric oncology, NCI for adult oncology. Add Theodor Bilharz when the question is liver or endemic disease.',
    },
    {
      q: 'How long does start-up take?',
      a: 'The EDA clock is only half the story. Hospital research-office and IRB time varies sharply by faculty. Sponsors should budget from recent comparable submissions at the named site, not from a single national average.',
    },
    {
      q: 'How does BioNixus research CROs in Egypt?',
      a: 'Principal-investigator and coordinator interviews at Kasr Al-Ainy, Ain Shams, Alexandria and 57357; BE-unit capability checks in Nasr City and Heliopolis; and EDA timeline reconstruction from recent interventional and BE submissions.',
    },
    {
      q: 'Does placement in the table mean one Egyptian CRO outranks another?',
      a: 'Placement means role. BE houses, global monitors, regional CROs, academic sites and the Authority are grouped so a sponsor can match vendor to study type, not so a league table can be read down the page.',
    },
  ],
  regulatorSource: {
    name: 'Egyptian Drug Authority (EDA) — clinical trial authorisation and inspected bioequivalence establishments',
    url: 'https://www.edaegypt.gov.eg',
    asOf: '2026-09-04',
  },
  sources: [
    'Egyptian Drug Authority clinical-trial and establishment materials',
    'Company descriptions of ClinServ, ARC, GRC, RAY CRO and IQVIA Egypt; ClinArt/CTI Cairo coverage',
    'Research-office materials of Kasr Al-Ainy, Ain Shams, 57357, NCI and Theodor Bilharz',
    'BioNixus Egypt site-feasibility, BE-unit and sponsor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Investigator and coordinator interviews at Kasr Al-Ainy, Ain Shams and 57357 on query load, monitoring cadence and payment delays.',
    'On-campus capability checks at ARC (Nasr City) and GRC (Heliopolis) that record bed counts, bioanalytical scope and recent inspector visits.',
    'EDA and IRB timeline reconstruction for interventional versus BE submissions completed in the last two years.',
    'Enrolment-pool estimates for oncology and cardiometabolic protocols across Cairo, Alexandria and Mansoura, including competing-study overlap.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
