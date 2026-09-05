import type { DirectoryPageInput } from '../../types';

export const biotechCompaniesKuwait: DirectoryPageInput = {
  entity: 'biotech-companies',
  countrySlug: 'kuwait',
  metaDescription:
    'Biotech in Kuwait: Dasman Diabetes Institute, KFAS labs, Kuwait University HSC, MOH and regional biologics offices — research, not discovery.',
  introLead:
    'Kuwait does not have a home-grown Genentech, and pretending otherwise wastes a partnering cycle: the country’s biotechnology layer is a set of well-funded research institutes, a university health-sciences campus, Ministry hospitals that consume imported biologics, and scientific offices of Gulf and multinational manufacturers.',
  introRest:
    'Dasman Diabetes Institute, created with Kuwait Foundation for the Advancement of Sciences money, is the institute foreign teams actually visit when the brief is metabolism, genetics or a Kuwaiti cohort. KFAS also stands behind other laboratory and grant programmes that look like a cluster on a slide and like a foundation portfolio in person. Kuwait University’s Health Sciences Center in Jabriya trains physicians and hosts investigator studies. The Kuwait Institute for Scientific Research adds applied laboratories that are not GMP plants. Kuwait Life Sciences Company, a KIA-linked investor, has put capital into regional life-science vehicles rather than into a Kuwaiti drug-substance factory. On the supply side, Julphar, Hikma, Sanofi, Novo Nordisk, Roche and GSK run scientific offices that register and detail insulin, vaccines and monoclonal antibodies into Ministry Central Medical Stores and into Hawally and Salmiya private-hospital pharmacies. The Ministry of Health remains the dominant buyer and the Drug and Food Control authority remains the registrar. This directory is honest about that thinness so a brand or licensing team budgets for research access and importation, not for a local fill-finish joint venture that does not exist.',
  stats: [
    { value: '0', label: 'Kuwaiti commercial drug-substance biologics plants comparable to Julphar or VACSERA' },
    { value: '~70%', label: 'Expatriate share of the population, which shapes private-hospital use of imported biologics' },
    { value: '1', label: 'Specialist institute most often named on diabetes and genomics protocols (Dasman)' },
    { value: '2014', label: 'Year Dhaman was established as the PPP that will change how insured expatriates receive care, including biologics' },
  ],
  channelHeading: 'How research institutes and imported biologics serve Kuwait',
  channelBody:
    'The science sits in institutes; the vials sit in a cold room that started in Europe, the US, India or Ras Al Khaimah. A biologic reaches a Kuwaiti patient after the Ministry’s Drug and Food Control registers the file, usually through a local agent, and after Central Medical Stores awards a Ministry lot or a private hospital pharmacy buys on its own account. Dasman can host a cohort study, a biobank draw or an investigator protocol, and KFAS can write a grant, but neither entity fills a monoclonal antibody. Kuwait University HSC and the Kuwait Cancer Control Center supply the other investigator pools. Dhaman’s new expatriate hospitals will add a third buyer with its own formulary once those sites are fully online, which matters more for insulin and specialty volume than any start-up announcement. AFYA, the retiree private-insurance experiment, was suspended in 2024, so retired citizens are back on Ministry books. Partnering conversations that ask “who is the Kuwaiti manufacturer?” should be redirected to “who is the scientific office, who is the Central Medical Stores winner, and which institute can enrol?” That is the real map.',
  companies: [
    {
      name: 'Dasman Diabetes Institute',
      hq: 'Dasman',
      type: 'Government',
      focus: 'Diabetes, metabolism, genetics research, biobank and specialist clinics',
      notes: 'KFAS-backed institute that is the first visit on any Kuwaiti cohort or metabolism protocol; clinics plus laboratories, not a commercial plant.',
    },
    {
      name: 'Kuwait Foundation for the Advancement of Sciences (KFAS)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Grant-making and institute sponsorship for health and science',
      notes: 'The money behind Dasman and other laboratories; treat it as a foundation, not as an operating biotech company.',
    },
    {
      name: 'Kuwait University — Health Sciences Center',
      hq: 'Jabriya',
      type: 'Government',
      focus: 'Medical, pharmacy and allied-health faculties; investigator studies',
      notes: 'Jabriya campus that trains the physicians who later sit on Ministry and private-hospital formularies and hosts academic protocols.',
    },
    {
      name: 'Kuwait Institute for Scientific Research (KISR)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'National applied laboratories, including health-related projects',
      notes: 'Public research campus whose health work is real and whose GMP manufacturing role is not; do not brief it as a CDMO.',
    },
    {
      name: 'Kuwait Life Sciences Company (KLSC)',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Sovereign-linked life-science investment, not in-country drug substance',
      notes: 'KIA-orbit investor that has backed regional vehicles such as ClinArt; a capital account, not a Kuwaiti fermentation hall.',
    },
    {
      name: 'Kuwait Cancer Control Center',
      hq: 'Shuwaikh',
      type: 'Government',
      focus: 'National oncology hospital, pharmacy and research protocols',
      notes: 'The public oncology account for imported monoclonal antibodies and the investigator pool for cancer studies.',
    },
    {
      name: 'Ministry of Health — Drug and Food Control',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Product registration, inspection and import licensing for biologics',
      notes: 'The registrar every scientific office files with; there is no separate biotech agency.',
    },
    {
      name: 'Ministry of Health — Central Medical Stores',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Public tenders for insulin, vaccines and hospital biologics',
      notes: 'The lot that decides Ministry volume; local-content language exists as policy talk more than as a Kuwaiti plant list.',
    },
    {
      name: 'Julphar — Kuwait scientific office',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Insulin and other Julphar biologics registered and detailed in Kuwait',
      notes: 'Ras Al Khaimah manufacturer’s commercial arm; the closest “local-region” insulin story without a Kuwaiti factory.',
    },
    {
      name: 'Hikma — Kuwait office',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Injectables and licensed specialty products including biosimilars',
      notes: 'Levant group that competes for hospital injectables and for Ministry lots through a scientific office, not a Kuwaiti suite.',
    },
    {
      name: 'Sanofi Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Vaccines, insulin and specialty biologics',
      notes: 'Affiliate that still holds many of the originator vaccine and diabetes files Central Medical Stores and private hospitals buy.',
    },
    {
      name: 'Novo Nordisk Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Insulin and GLP-1 originator products',
      notes: 'The diabetes originator account Dasman clinicians and private endocrinologists actually prescribe against.',
    },
    {
      name: 'Roche Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Oncology and immunology originator biologics',
      notes: 'Scientific office that feeds Kuwait Cancer Control Center and private tertiary pharmacies.',
    },
    {
      name: 'GSK Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Vaccines and specialty products',
      notes: 'Affiliate on the Ministry immunisation and private-clinic vaccine file.',
    },
    {
      name: 'Dhaman (Health Assurance Hospitals Company)',
      hq: 'Kuwait City',
      type: 'Operator',
      focus: 'Expatriate PPP system whose new hospitals will write their own biologics list',
      notes: 'Not a manufacturer. Listed because those Jahra, Ahmadi and Hawally sites will buy insulin and specialty vials as foreign workers leave MOH wards.',
    },
    {
      name: 'Dar Al Shifa Hospital — pharmacy and research',
      hq: 'Hawally',
      type: 'Operator',
      focus: 'Largest private hospital pharmacy and a growing research window',
      notes: 'Private-sector account for imported specialty biologics when the patient is insured or cash-paying rather than a Ministry beneficiary.',
    },
  ],
  categoryBlurbs: {
    local:
      'Kuwaiti capital and institutes — KFAS, Dasman, KLSC — that fund research and regional vehicles rather than operate a drug-substance plant.',
    mnc:
      'Sanofi, Novo Nordisk, Roche and GSK scientific offices that register and detail the originator biologics Ministry stores and private pharmacies actually dispense.',
    regional:
      'Julphar and Hikma offices that bring Gulf- and Levant-made insulin and injectables into Kuwait without building a local suite.',
    trade:
      'Ministry Drug and Food Control, Central Medical Stores, Kuwait University HSC, KISR, KCCC and Dhaman — the registrar, the buyer, the campuses and the new expatriate system.',
  },
  growthDrivers: [
    {
      title: 'Dasman and KFAS as cohort infrastructure',
      desc: 'A funded diabetes institute and a national foundation beat a fictional start-up when a sponsor needs Kuwaiti samples, genotypes or investigators.',
    },
    {
      title: 'Dhaman shifting expatriate volume',
      desc: 'As insured foreign workers move into Dhaman hospitals, a new formulary will sit beside Central Medical Stores for insulin and specialty biologics.',
    },
    {
      title: 'Regional manufacturers at the border',
      desc: 'Julphar’s Ras Al Khaimah insulin and Hikma injectables are a one-border-away supply story that localisation rhetoric in Kuwait still depends on.',
    },
    {
      title: 'Ministry lots still dominate citizen volume',
      desc: 'Citizens remain on free public care, so Central Medical Stores awards — not a venture round — decide whether a biologic is standard of care.',
    },
  ],
  faq: [
    {
      q: 'Is there a Kuwaiti commercial biologics manufacturer?',
      a: 'Not at the scale of Julphar, VACSERA or a European CDMO. What exists are institutes, a university campus, an investment company and scientific offices. Budget for importation and research access.',
    },
    {
      q: 'Why include Dasman on a company directory?',
      a: 'Because it is the operating research organisation that sponsors actually contract with for diabetes and genetics work. KFAS is the funder behind it. Neither is a plant.',
    },
    {
      q: 'Who registers and who buys?',
      a: 'Drug and Food Control registers. Central Medical Stores buys for Ministry facilities. Private hospitals and, increasingly, Dhaman buy for insured expatriates. Scientific offices of foreign manufacturers hold the files.',
    },
    {
      q: 'What happened to AFYA and does it matter for biologics?',
      a: 'The retiree private-insurance scheme was suspended in 2024 and citizens in that cohort returned to Ministry services. It matters because a private payer for older Kuwaitis disappeared, which sends specialty volume back to Central Medical Stores.',
    },
    {
      q: 'What research does BioNixus run on biotechnology organisations in Kuwait?',
      a: 'Institute and clinician interviews at Dasman, KCCC and Kuwait University HSC; Central Medical Stores lot reconstruction for insulin and monoclonal antibodies; and scientific-office mapping of who actually holds the registration for each originator and biosimilar.',
    },
    {
      q: 'Is this a ranking of Kuwait’s biotechnology industry?',
      a: 'It cannot be, because there is no deep industry to rank. The names are a fieldwork map of institutes, buyers and regional suppliers that keep appearing in BioNixus Kuwait interviews and in Ministry registers.',
    },
  ],
  regulatorSource: {
    name: 'Kuwait Ministry of Health — Drug and Food Control and Central Medical Stores (biologics registration and public procurement)',
    url: 'https://www.moh.gov.kw',
    asOf: '2026-09-04',
  },
  sources: [
    'Dasman Diabetes Institute and KFAS public programme descriptions',
    'Ministry of Health Drug and Food Control and Central Medical Stores materials',
    'Dhaman corporate disclosures; 2024 AFYA suspension notices (KUNA / Ministry statements)',
    'BioNixus Kuwait hospital, institute and scientific-office fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Clinician and laboratory interviews at Dasman and Kuwait University HSC in Jabriya on cohort studies, sample access and industry protocols.',
    'Central Medical Stores lot reconstruction in Kuwait City for insulin, vaccines and oncology biologics, including agent names on the awards.',
    'Scientific-office interviews with Julphar, Hikma, Sanofi, Novo Nordisk and Roche teams on registration timelines and private-hospital versus Ministry mix.',
    'Formulary discussions at Dar Al Shifa (Hawally) and Al Salam on how imported specialty biologics are stocked for insured expatriates.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
