import type { DirectoryPageInput } from '../../types';

export const croCompaniesJordan: DirectoryPageInput = {
  entity: 'cro-companies',
  countrySlug: 'jordan',
  metaDescription:
    'CROs in Jordan: IQVIA, ClinServ, Triumpharma, Pharmaceutical Research Unit, KHCC, university hospitals and JFDA — trials, BE units, ethics.',
  introLead:
    'Jordan is the Levant’s clinical-research workshop: Amman CROs and bioequivalence units can file a JFDA protocol in English, King Hussein Cancer Center and the university hospitals can enrol Arabic-speaking patients at Gulf-adjacent quality, and a generation of monitors already knows FDA and EMA language from US-bound generic files.',
  introRest:
    'IQVIA’s Amman desk delivers the country inside global Phase II–III programmes. ClinServ and other regional houses use Jordan as a Levant hub when a protocol also needs Palestine, Iraq or Gulf overflow. Triumpharma and the Pharmaceutical Research Unit dominate much of the bioequivalence and healthy-volunteer work that Jordanian and regional generic manufacturers need for JFDA and GCC files. King Hussein Cancer Center is the oncology site sponsors name without being prompted. Jordan University Hospital, King Abdullah University Hospital at JUST in Irbid, and the larger private hospitals — Istishari, Specialty, Abdali — add beds and investigators. The Jordan Food and Drug Administration authorises interventional studies and inspects BE units; hospital IRBs are the second clock. This directory separates global monitors, Jordanian BE houses, regional CROs, academic and cancer sites and the Authority so a sponsor can match the vendor to the study type rather than briefing “Amman research” as one shop.',
  stats: [
    { value: '1', label: 'National authority that authorises drug trials and inspects BE units (JFDA)' },
    { value: 'KHCC', label: 'King Hussein Cancer Center — the oncology site most industry feasibility notes already name' },
    { value: '2', label: 'Study types that dominate local CRO revenue: bioequivalence for generics, and late-phase / oncology for industry' },
    { value: 'Amman + Irbid', label: 'Cities that recur on industry site lists (university hospitals plus KHCC and private tertiary)' },
  ],
  channelHeading: 'How JFDA, Amman BE units and KHCC sites run a Jordanian study',
  channelBody:
    'Pick the study type first. A bioequivalence file for a Jordanian, Iraqi or GCC generic usually goes to Triumpharma or the Pharmaceutical Research Unit — EDA- and JFDA-familiar clinical pharmacology units with a GCP ward and a bioanalytical lab that already ship chromatograms to Gulf regulators. A multinational Phase III goes to IQVIA or another global CRO, which then contracts King Hussein Cancer Center, Jordan University Hospital, King Abdullah University Hospital in Irbid, or a private tertiary such as Istishari. A mid-sized regional protocol often lands on ClinServ or a local monitoring shop that can also cover Levant overflow. Every interventional drug study needs JFDA authorisation and a local IRB letter; a foreign sponsor without a Jordanian entity appoints a legal representative, which is everyday business for the Amman CRO bench. Start-up time is driven by the hospital research office as much as by the Authority — KHCC and the university hospitals are used to industry contracts, district hospitals are not. Samples for global trials still travel to European or Gulf central labs; BE samples stay on the Amman campus. English protocol language is not the barrier here; Arabic patient materials, insurance wording and the JFDA’s clinical-trials unit calendar are. Feasibility that quotes “Jordan as a cheap EU bridge” without naming KHCC versus a BE ward will miss first-patient by months.',
  companies: [
    {
      name: 'IQVIA Jordan',
      hq: 'Amman',
      type: 'MNC',
      focus: 'Full-service Phase II–IV and country management inside global programmes',
      notes: 'The global CRO desk Jordanian principal investigators see most often on oncology and specialty protocols.',
    },
    {
      name: 'ClinServ',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Full-service monitoring and project management across Jordan, the Levant and wider MENA',
      notes: 'Regional house that mid-sized sponsors use when they want a Levant CRA team rather than a global framework agreement.',
    },
    {
      name: 'Triumpharma',
      hq: 'Amman',
      type: 'Local',
      focus: 'Bioequivalence, bioanalysis, healthy-volunteer and generic-file support',
      notes: 'Amman clinical-pharmacology house that Jordanian and regional manufacturers use for JFDA and GCC generic files.',
    },
    {
      name: 'Pharmaceutical Research Unit (PRU)',
      hq: 'Amman',
      type: 'Local',
      focus: 'Bioequivalence, pharmacokinetics and bioanalytical studies',
      notes: 'The other Amman BE name sponsors put beside Triumpharma; inspect the ward and the lab, not the brochure.',
    },
    {
      name: 'Pharmaceutical Solutions Center',
      hq: 'Amman',
      type: 'Local',
      focus: 'Regulatory affairs, JFDA submissions, local representation for foreign sponsors',
      notes: 'Regulatory-heavy shop that picks up legal-representative and dossier work when the sponsor has no Jordanian entity.',
    },
    {
      name: 'King Hussein Cancer Center (KHCC)',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Oncology tertiary care and industry trial enrolment',
      notes: 'The site feasibility notes name first for solid-tumour and haematology protocols; research office is used to industry contracts.',
    },
    {
      name: 'Jordan University Hospital',
      hq: 'Amman',
      type: 'Government',
      focus: 'Academic tertiary site, multi-specialty investigator access',
      notes: 'University of Jordan’s teaching hospital; the academic counterpart to KHCC for non-oncology industry work in Amman.',
    },
    {
      name: 'King Abdullah University Hospital (JUST)',
      hq: 'Irbid',
      type: 'Government',
      focus: 'Academic tertiary site in the north; enrolment outside Amman',
      notes: 'JUST’s Irbid hospital; included so a Jordan feasibility is not an Amman-only sample.',
    },
    {
      name: 'Istishari Hospital',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Private tertiary site with a research office for industry protocols',
      notes: 'Private-chain alternative when the protocol needs insured specialty patients rather than university-hospital volume.',
    },
    {
      name: 'Specialty Hospital',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Private tertiary and surgical site work',
      notes: 'Second private name that appears on device and surgical-protocol lists beside Istishari.',
    },
    {
      name: 'Abdali Hospital',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Private tertiary hospital on the Abdali medical campus',
      notes: 'Newer private bed base that industry monitors now add when KHCC and university sites are capacity-constrained.',
    },
    {
      name: 'ICON / Fortrea / Syneos — Jordan country coverage',
      hq: 'Amman',
      type: 'MNC',
      focus: 'Global-book monitoring through regional or visiting CRA models',
      notes: 'Global CROs that run Jordanian sites inside multinational programmes, often without a large standalone Amman office.',
    },
    {
      name: 'Jordan Food and Drug Administration (JFDA) — clinical trials',
      hq: 'Amman',
      type: 'Government',
      focus: 'Authorisation of interventional studies, BE-unit inspection, import of investigational product',
      notes: 'The national file every company on this list lives under; ethics letters from hospital IRBs do not replace it.',
    },
    {
      name: 'Ministry of Health — hospital research governance',
      hq: 'Amman',
      type: 'Government',
      focus: 'Public-hospital research permissions beyond the university and KHCC systems',
      notes: 'The extra desk a protocol needs when it wants Ministry hospitals rather than university or private tertiary sites.',
    },
    {
      name: 'University of Jordan — Institutional Review Board',
      hq: 'Amman',
      type: 'Government',
      focus: 'Academic ethics review for university-hospital and faculty studies',
      notes: 'The IRB clock that sits beside JFDA for academic-site work; not interchangeable with KHCC’s own ethics board.',
    },
    {
      name: 'Royal Medical Services — research office',
      hq: 'Amman',
      type: 'Government',
      focus: 'Military-hospital research and selected industry site work',
      notes: 'Parallel public system that appears on some specialty protocols; access is a separate governance path from Ministry or university hospitals.',
    },
  ],
  categoryBlurbs: {
    local:
      'Amman bioequivalence houses — Triumpharma, PRU, Pharmaceutical Solutions — and the hospital research offices that actually enrol.',
    mnc:
      'IQVIA and other global CROs that run Jordanian sites inside multinational books, often from a lean Amman desk or a visiting CRA model.',
    regional:
      'ClinServ and Levant-hub monitors that treat Jordan as a base for Palestine, Iraq or Gulf overflow rather than as a standalone EU-style country office.',
    trade:
      'JFDA clinical-trials unit, hospital IRBs, Ministry of Health governance and Royal Medical Services — the files and ethics boards that sit above any CRO logo.',
  },
  growthDrivers: [
    {
      title: 'Bioequivalence as a regional export service',
      desc: 'Jordanian BE units still file for GCC and Levant generics; that work funds the GCP wards that industry late-phase teams later borrow.',
    },
    {
      title: 'KHCC as an oncology magnet',
      desc: 'A single cancer centre with industry-ready contracts pulls protocols that would otherwise skip the Levant for Turkey or Egypt.',
    },
    {
      title: 'English-and-Arabic dual language',
      desc: 'Investigators and CRAs who can run an FDA-style file in English and consent patients in Arabic remain Jordan’s practical advantage over several larger neighbours.',
    },
    {
      title: 'Levant overflow and Gulf referral',
      desc: 'Sponsors that already use ClinServ or IQVIA in the Gulf add Jordan when they need Arabic enrolment without Egypt’s volume politics or Turkey’s TİTCK calendar.',
    },
  ],
  faq: [
    {
      q: 'Who authorises clinical trials in Jordan?',
      a: 'The Jordan Food and Drug Administration for interventional drug studies, plus a hospital or university IRB. A foreign sponsor without a local entity appoints a legal representative.',
    },
    {
      q: 'Where should oncology feasibility start?',
      a: 'King Hussein Cancer Center first, then university hospitals if the protocol needs additional investigators. Private tertiary sites are a third door, not a substitute for KHCC.',
    },
    {
      q: 'Who runs bioequivalence studies in Jordan?',
      a: 'Triumpharma and the Pharmaceutical Research Unit are the houses generic manufacturers name. Inspect the clinical ward and the bioanalytical lab; do not treat them as interchangeable with IQVIA.',
    },
    {
      q: 'Is Jordan only an Amman market for trials?',
      a: 'Amman holds KHCC, Jordan University Hospital and the private tertiary sites. King Abdullah University Hospital in Irbid is the northern academic door and should be on any national feasibility.',
    },
    {
      q: 'What fieldwork does BioNixus run on Jordanian CROs and sites?',
      a: 'Investigator and research-office interviews at KHCC, university hospitals and private tertiary sites; BE-unit capability checks in Amman; and JFDA start-up timing for industry versus generic files.',
    },
    {
      q: 'Does table order rank Jordanian CROs?',
      a: 'No. Names appear because they recur in BioNixus Levant feasibility work. The sort is by role: global monitor, BE house, regional CRO, site, authority.',
    },
  ],
  regulatorSource: {
    name: 'Jordan Food and Drug Administration (JFDA) — clinical trials authorisation and inspected bioequivalence units',
    url: 'https://www.jfda.jo',
    asOf: '2026-09-05',
  },
  sources: [
    'JFDA clinical-trials and bioequivalence-unit materials',
    'King Hussein Cancer Center and university-hospital research-office public materials',
    'Company and service descriptions of IQVIA Jordan, ClinServ, Triumpharma and the Pharmaceutical Research Unit',
    'BioNixus Jordan and Levant clinical-research feasibility fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'KHCC and university-hospital research-office interviews on oncology versus multi-specialty start-up clocks.',
    'Amman BE-unit walkthroughs at Triumpharma and PRU that separate inspected wards from brochure capacity.',
    'JFDA clinical-trials unit timing for industry Phase III versus generic bioequivalence files.',
    'Private-tertiary (Istishari, Specialty, Abdali) investigator interviews on insured-specialty enrolment versus university volume.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
