import type { DirectoryPageInput } from '../../types';

export const hospitalGroupsSaudiArabia: DirectoryPageInput = {
  entity: 'hospital-groups',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Private hospital groups in Saudi Arabia: Dr. Sulaiman Al Habib, Mouwasat, Dallah, Fakeeh Care, Saudi German, Almoosa, Al Hammadi and Care — networks and payers.',
  introLead:
    'Saudi Arabia has the largest and fastest-consolidating private hospital sector in the Middle East: eight groups listed on Tadawul run more than 60 hospitals between them, and Vision 2030’s health transformation is deliberately shifting volume from the Ministry of Health to private operators and insurers.',
  introRest:
    'The Kingdom operates around 500 hospitals and 80,000 beds, roughly 60% of them under the Ministry of Health, with the remainder split between other government systems — National Guard Health Affairs, King Faisal Specialist Hospital, Armed Forces and Aramco — and a private sector that now delivers most insured care for the 11 million people covered under the Council of Health Insurance. Private groups have raised capital through IPOs, acquisitions and sukuk to build hospital clusters in Riyadh, Jeddah, Dammam and the growing secondary cities, while the Health Holding Company reorganises public provision into regional clusters that buy some services privately. This directory lists the private hospital groups and operators that matter for a pharmaceutical, medical device or diagnostics company, alongside the public systems and payers that shape their formularies and purchasing.',
  stats: [
    { value: '~500', label: 'Hospitals nationwide, about 170 of them private' },
    { value: '~11m', label: 'Residents covered by mandatory private health insurance' },
    { value: '8', label: 'Hospital operators listed on Tadawul, the most of any regional exchange' },
    { value: '2030', label: 'Vision 2030 target year for private-sector delivery of a larger share of care' },
  ],
  channelHeading: 'How private hospital provision works in Saudi Arabia',
  channelBody:
    'The private sector is organised around integrated groups rather than single hospitals. Dr. Sulaiman Al Habib Medical Group is the largest by revenue and market value, with more than 20 hospitals and medical centres in Riyadh, Jeddah, the Eastern Province and Dubai, its own pharmacy chain and central procurement that negotiates directly with manufacturers. Mouwasat dominates the Eastern Province and Jubail, Dallah Health is a Riyadh anchor with new capacity in Namar and Al Kharj, Fakeeh Care Group and Saudi German Health are Jeddah-rooted groups with national expansion, Almoosa Health leads Al Ahsa, Al Hammadi operates three Riyadh hospitals, National Medical Care serves Riyadh and Jeddah, and Specialized Medical Company added a Riyadh cluster to the listed roster in 2024. Demand is funded mainly by insurers — Bupa Arabia and Tawuniya hold most of the market — whose networks, formularies and pre-authorisation rules determine which hospitals and which brands are reimbursed, and by cash-paying patients for elective care. Public systems remain the largest buyers of medicines and devices through NUPCO’s central tenders, and the Health Holding Company is contracting private groups to run services for its clusters, so the boundary between public and private is blurring. For a manufacturer this means three doors: group-level procurement and formulary committees at the listed operators, insurer formularies that decide reimbursement, and NUPCO for public volumes, each with distinct pricing and evidence expectations.',
  companies: [
    {
      name: 'Dr. Sulaiman Al Habib Medical Group (HMG)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Largest private group: 20+ hospitals and medical centres, own pharmacies',
      notes: 'Tadawul-listed; the reference account for premium brands, with central procurement, a large oncology and IVF practice and international expansion.',
    },
    {
      name: 'Mouwasat Medical Services',
      hq: 'Dammam',
      type: 'Operator',
      focus: 'Eastern Province leader with Riyadh and Jubail hospitals',
      notes: 'Tadawul-listed; high insured caseload from industrial employers and Aramco contractors; new hospitals in Khobar and Riyadh.',
    },
    {
      name: 'Dallah Health (Dallah Healthcare)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Riyadh hospital cluster with Namar and Al Kharj expansion',
      notes: 'Tadawul-listed; large tertiary hospital in Nakheel plus stakes in Makkah and other operators; significant pharmacy and procurement scale.',
    },
    {
      name: 'Fakeeh Care Group (Dr. Soliman Fakeeh Hospital)',
      hq: 'Jeddah',
      type: 'Operator',
      focus: 'Jeddah anchor expanding to Riyadh and the UAE',
      notes: 'Listed on Tadawul in 2024; academic affiliation through Fakeeh College and a strong medical-tourism and complex-care profile.',
    },
    {
      name: 'Saudi German Health (Batterjee Group)',
      hq: 'Jeddah',
      type: 'Operator',
      focus: 'National network of Saudi German Hospitals',
      notes: 'Hospitals in Jeddah, Riyadh, Madinah, Aseer, Dammam, Hail and Makkah plus regional operations; Tadawul-listed as Middle East Healthcare Company.',
    },
    {
      name: 'Almoosa Health',
      hq: 'Al Ahsa',
      type: 'Operator',
      focus: 'Leading operator in Al Ahsa with new Khobar hospital',
      notes: 'Listed in 2024; rehabilitation and long-term care specialities alongside acute hospitals; grows with Eastern Province demand.',
    },
    {
      name: 'Al Hammadi Holding',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Three Riyadh hospitals (Olaya, Suwaidi, Nuzha)',
      notes: 'Tadawul-listed; mid-market insured population in the capital; steady pharmacy and consumables procurement.',
    },
    {
      name: 'National Medical Care Company (Care)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Riyadh Care and Riyadh National hospitals plus Jeddah',
      notes: 'Tadawul-listed with GOSI as anchor shareholder; historically strong in government-referred and insured patients.',
    },
    {
      name: 'Specialized Medical Company (SMC)',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Riyadh hospital cluster with new tertiary capacity',
      notes: 'Listed on Tadawul in 2024; adding beds in north Riyadh; representative of the newest wave of listed operators.',
    },
    {
      name: 'Andalusia Health',
      hq: 'Jeddah',
      type: 'Regional',
      focus: 'Jeddah hospitals with Egyptian operations',
      notes: 'Private group operating Andalusia hospitals in Jeddah and Alexandria and Cairo; cross-border referral and procurement.',
    },
    {
      name: 'Kingdom Hospital and Consulting Clinics',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'Premium single-site hospital owned by Kingdom Holding',
      notes: 'Upper-income Riyadh catchment; relevant for premium brands and elective specialties.',
    },
    {
      name: 'Ministry of Health / Health Holding Company',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Largest public system, reorganising into regional health clusters',
      notes: 'Around 300 hospitals being transferred to clusters under the Health Holding Company; buys through NUPCO and contracts private operators for selected services.',
    },
    {
      name: 'King Faisal Specialist Hospital & Research Centre',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Flagship tertiary and research hospital (Riyadh, Jeddah, Madinah)',
      notes: 'Independent procurement and formulary; the premier account for oncology, transplant and rare-disease therapies.',
    },
    {
      name: 'National Guard Health Affairs and Johns Hopkins Aramco Healthcare',
      hq: 'Riyadh / Dhahran',
      type: 'Government',
      focus: 'Closed employer-linked hospital systems',
      notes: 'Large tertiary networks serving National Guard and Aramco populations with independent procurement and high adoption of innovative therapies.',
    },
    {
      name: 'Bupa Arabia and Tawuniya',
      hq: 'Jeddah / Riyadh',
      type: 'Local',
      focus: 'Dominant health insurers funding private hospital care',
      notes: 'Together hold most of the insured market; their networks, formularies and pre-authorisation rules decide hospital and brand reimbursement.',
    },
  ],
  categoryBlurbs: {
    local:
      'Saudi-owned hospital groups, most of them Tadawul-listed, and the domestic insurers whose networks fund the majority of private care.',
    mnc:
      'International operators participate mainly through management contracts, academic affiliations and joint ventures rather than owning Saudi hospital networks outright.',
    regional:
      'Gulf and MENA groups such as Andalusia and Saudi German that operate across borders, linking Saudi hospitals to Egypt, the UAE and beyond.',
    trade:
      'The Ministry of Health clusters, specialist government hospitals and NUPCO tenders that remain the largest buyers of medicines and devices.',
  },
  growthDrivers: [
    {
      title: 'Vision 2030 health transformation',
      desc: 'Corporatisation of public hospitals into clusters under the Health Holding Company and expanded private-sector contracting shift volume and procurement toward private operators.',
    },
    {
      title: 'Insurance coverage expansion',
      desc: 'Growth in mandatory insurance for private-sector employees, dependants and visitors enlarges the insured pool that funds private hospital admissions and outpatient prescriptions.',
    },
    {
      title: 'Capital-market funding',
      desc: 'Four hospital IPOs since 2023 and active sukuk issuance give groups capital for new hospitals in Riyadh, Jeddah, Khobar and secondary cities.',
    },
    {
      title: 'Medical tourism and specialty care',
      desc: 'Government programmes to attract regional patients and localise oncology, cardiac and IVF care raise demand for premium therapies and devices in private tertiary hospitals.',
    },
  ],
  faq: [
    {
      q: 'Which are the largest private hospital groups in Saudi Arabia?',
      a: 'Dr. Sulaiman Al Habib Medical Group leads, followed by Mouwasat, Dallah Health, Fakeeh Care, Saudi German Health, Almoosa, Al Hammadi, National Medical Care and Specialized Medical Company, all listed on Tadawul.',
    },
    {
      q: 'Who pays for private hospital care in Saudi Arabia?',
      a: 'Mainly private health insurers led by Bupa Arabia and Tawuniya under the Council of Health Insurance framework, plus cash patients and, increasingly, government contracts for services delivered privately.',
    },
    {
      q: 'How do hospital groups buy medicines and devices?',
      a: 'Listed groups run central procurement and formulary committees that negotiate with manufacturers and agents; public systems buy through NUPCO tenders, and insurer formularies determine reimbursement in the private channel.',
    },
    {
      q: 'What is the Health Holding Company?',
      a: 'The entity created under Vision 2030 to take over Ministry of Health hospitals and run them as regional health clusters with purchaser–provider separation and private-sector contracting.',
    },
    {
      q: 'What does BioNixus study about hospital groups in Saudi Arabia?',
      a: 'Formulary and procurement decision mapping at listed groups and government hospitals; KOL and pharmacy director interviews; patient pathway and insurer-network research; and account-level brand share tracking across hospital clusters.',
    },
    {
      q: 'Is this a ranking of the best hospitals?',
      a: 'No. This is a B2B directory of operators grouped by role, included because they recur in BioNixus Saudi fieldwork and Council of Health Insurance and Tadawul records; order does not indicate quality or size.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Health Statistical Yearbook and Council of Health Insurance — licensed private hospitals and insured population',
    url: 'https://www.moh.gov.sa/en/Ministry/Statistics/book/Pages/default.aspx',
    asOf: '2026-09-03',
  },
  sources: [
    'Ministry of Health Statistical Yearbook, 2023 edition published 2024',
    'Council of Health Insurance annual report and insured population statistics, 2024',
    'Tadawul annual reports of HMG, Mouwasat, Dallah, Fakeeh Care, Middle East Healthcare, Almoosa, Al Hammadi, Care and SMC, 2024–2025',
    'BioNixus Saudi hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Formulary and procurement decision mapping at Al Habib, Mouwasat, Dallah, Fakeeh and Saudi German, and at King Faisal Specialist Hospital and National Guard Health Affairs.',
    'KOL, pharmacy director and supply-chain interviews on tender behaviour, brand preference and NUPCO dynamics.',
    'Insurer-network and pre-authorisation research with Bupa Arabia, Tawuniya and TPAs on reimbursement of specialty therapies.',
    'Patient pathway studies across Riyadh, Jeddah and the Eastern Province in oncology, cardiology, diabetes and IVF.',
  ],
};
