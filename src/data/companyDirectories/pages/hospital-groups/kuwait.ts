import type { DirectoryPageInput } from '../../types';

export const hospitalGroupsKuwait: DirectoryPageInput = {
  entity: 'hospital-groups',
  countrySlug: 'kuwait',
  metaDescription:
    'Private hospital groups in Kuwait: Dar Al Shifa, Al Salam International, New Mowasat, Royale Hayat, Al Seef, Taiba, Hadi, Dhaman and MOH systems — networks and payers.',
  introLead:
    'Kuwait’s private hospital sector is compact — about 15 private hospitals against a public system that provides free care to citizens — but it serves a 3.4-million expatriate population, a growing insured workforce and Kuwaitis who choose private care for speed and comfort, and it is about to be reshaped by Dhaman’s new expatriate hospitals.',
  introRest:
    'The Ministry of Health runs six general hospitals, a dozen specialist hospitals and more than a hundred polyclinics, with the Kuwait Oil Company and military operating their own facilities; citizens receive care free of charge and are also sent abroad for treatment at state expense. Private hospitals — several of them listed on Boursa Kuwait — grew on expatriate demand and mandatory employer insurance, and Dhaman, the Health Assurance Hospitals Company, is building a parallel system of hospitals and primary-care centres to take expatriate workers out of MOH facilities. This directory lists the private hospital groups and operators that matter for pharmaceutical, medical device and diagnostics companies in Kuwait, alongside the public systems and payers that shape formularies and purchasing.',
  stats: [
    { value: '~35', label: 'Hospitals in Kuwait, around 15 of them private' },
    { value: '~9,500', label: 'Hospital beds nationally, with MOH holding roughly 80%' },
    { value: '~70%', label: 'Expatriate share of the population, the core private-hospital market' },
    { value: '3', label: 'Dhaman hospitals planned to serve insured expatriate workers' },
  ],
  channelHeading: 'How private hospital provision works in Kuwait',
  channelBody:
    'The public system is the default. MOH general hospitals — Mubarak Al-Kabeer, Al-Amiri, Farwaniya, Jahra, Adan and the new Jaber Al-Ahmad — and specialist centres such as Kuwait Cancer Control Center, Chest Diseases Hospital and Ibn Sina dispense and treat citizens free of charge, procuring through the Central Medical Stores’ tenders, and the state funds overseas treatment for complex cases. Expatriates pay an annual health-insurance fee and co-payments to use MOH facilities, and their employers increasingly buy private cover, which is what sustains the private hospitals. Dar Al Shifa in Hawally is the largest private hospital, Al Salam International and New Mowasat are Boursa-listed operators with expansion programmes, Royale Hayat targets the premium women’s-health and paediatric segment, and Al Seef, Taiba, Hadi, London Hospital, Al Rashid and Wara complete a tier of mid-sized hospitals that compete on insured outpatient and elective surgery volume. Dhaman is the structural change: its Health Assurance Hospitals in Jahra, Ahmadi and Hawally and network of primary-care centres will provide insured care to private-sector expatriates under a compulsory scheme, creating a new large buyer with its own formulary and procurement. Insurers such as Gulf Insurance Group, Warba, Al Ahleia and Kuwait Insurance Company administer employer plans and negotiate networks and tariffs. For manufacturers the channel has three doors: MOH Central Medical Stores tenders, private hospital pharmacy and procurement committees that buy through registered agents, and now Dhaman’s emerging purchasing function.',
  companies: [
    {
      name: 'Dar Al Shifa Hospital',
      hq: 'Hawally',
      type: 'Operator',
      focus: 'Largest private hospital with broad specialty coverage',
      notes: 'Family-owned tertiary hospital with extensive outpatient and surgical volume; the reference private account in Kuwait.',
    },
    {
      name: 'Al Salam International Hospital (Al Salam Group Holding)',
      hq: 'Bneid Al Gar',
      type: 'Operator',
      focus: 'Boursa-listed group with new tertiary capacity',
      notes: 'Multi-specialty hospital with a strong oncology, cardiac and paediatric offer; holding company also invests in regional healthcare.',
    },
    {
      name: 'New Mowasat Hospital',
      hq: 'Salmiya',
      type: 'Operator',
      focus: 'Boursa-listed hospital serving insured expatriates',
      notes: 'Long-established hospital with clinics in Salmiya and Fahaheel; high insured outpatient volume and steady procurement.',
    },
    {
      name: 'Royale Hayat Hospital',
      hq: 'Jabriya',
      type: 'Operator',
      focus: 'Premium women’s, children’s and family hospital',
      notes: 'Top-end positioning attracting Kuwaiti private patients; relevant for premium obstetrics, paediatrics and dermatology brands.',
    },
    {
      name: 'Al Seef Hospital',
      hq: 'Salmiya',
      type: 'Operator',
      focus: 'Private hospital known for maternity and paediatrics',
      notes: 'Popular with Kuwaiti and expatriate families; strong outpatient and delivery volumes.',
    },
    {
      name: 'Taiba Hospital',
      hq: 'Sabah Al Salem',
      type: 'Operator',
      focus: 'Multi-specialty hospital in the southern suburbs',
      notes: 'Serves growing residential areas south of Kuwait City; expanding surgical and diagnostic services.',
    },
    {
      name: 'Hadi Hospital',
      hq: 'Jabriya',
      type: 'Operator',
      focus: 'Established private hospital with surgical focus',
      notes: 'Mid-sized hospital with a broad consultant roster; consistent purchaser of surgical devices and consumables.',
    },
    {
      name: 'London Hospital Kuwait',
      hq: 'Fintas',
      type: 'Operator',
      focus: 'Private hospital serving the Ahmadi governorate',
      notes: 'Located near oil-sector residential areas; important for insured employer populations in the south.',
    },
    {
      name: 'Al Rashid Hospital and Wara Hospital',
      hq: 'Salmiya / Hawally',
      type: 'Operator',
      focus: 'Mid-sized private hospitals with insured caseloads',
      notes: 'Part of the tier competing on insured outpatient and elective surgery volume in Hawally and Salmiya.',
    },
    {
      name: 'Dhaman — Health Assurance Hospitals Company',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Public–private system for insured expatriate workers',
      notes: 'Building hospitals in Jahra, Ahmadi and Hawally plus primary-care centres; will become a major buyer with its own formulary.',
    },
    {
      name: 'Ministry of Health — General and Specialist Hospitals',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Free care for citizens across six general hospitals and specialist centres',
      notes: 'Jaber Al-Ahmad, Mubarak Al-Kabeer and specialist hospitals procure via Central Medical Stores; the dominant buyer of medicines and devices.',
    },
    {
      name: 'Kuwait Cancer Control Center',
      hq: 'Shuwaikh',
      type: 'Government',
      focus: 'National oncology centre',
      notes: 'Sole public cancer centre with independent clinical leadership; the key account for oncology therapies and radiotherapy equipment.',
    },
    {
      name: 'Kuwait Oil Company — Ahmadi Hospital',
      hq: 'Ahmadi',
      type: 'Government',
      focus: 'Employer hospital for the oil sector',
      notes: 'Serves KOC staff and dependants with independent procurement; an example of closed employer systems alongside MOH.',
    },
    {
      name: 'Military and Police Hospitals',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Armed Forces Hospital and Ministry of Interior facilities',
      notes: 'Closed systems with separate tenders; relevant for trauma, orthopaedics and general medicine supply.',
    },
    {
      name: 'Gulf Insurance Group and Warba Insurance',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Leading health insurers administering employer plans',
      notes: 'Network contracts, tariffs and formularies at these insurers shape which private hospitals and brands are reimbursed.',
    },
  ],
  categoryBlurbs: {
    local:
      'Kuwaiti-owned private hospitals, several listed on Boursa Kuwait, and the domestic insurers that fund employer health plans.',
    mnc:
      'International hospital operators do not own Kuwaiti hospitals; foreign expertise arrives through management agreements, affiliations and equipment partnerships.',
    regional:
      'Gulf healthcare investors and groups that hold stakes in Kuwaiti operators or partner with them on regional expansion.',
    trade:
      'The Ministry of Health, Dhaman, KOC and military systems that hold most beds and public purchasing, plus the payers that govern private access.',
  },
  growthDrivers: [
    {
      title: 'Dhaman expatriate health system',
      desc: 'Compulsory insurance for private-sector expatriates funds new Dhaman hospitals and clinics, creating a large new provider and buyer separate from MOH.',
    },
    {
      title: 'Public hospital expansion',
      desc: 'Jaber Al-Ahmad Hospital and new MOH capacity raise public procurement of medicines, devices and diagnostics through Central Medical Stores tenders.',
    },
    {
      title: 'Repatriation of overseas treatment',
      desc: 'Policy to treat more complex cases domestically rather than abroad drives investment in oncology, cardiac and rehabilitation capacity in public and private hospitals.',
    },
    {
      title: 'Private insurance growth',
      desc: 'Employer-funded plans and premium products for Kuwaitis expand the insured private market and sharpen insurer network and formulary management.',
    },
  ],
  faq: [
    {
      q: 'Which are the largest private hospitals in Kuwait?',
      a: 'Dar Al Shifa, Al Salam International, New Mowasat and Royale Hayat lead, followed by Al Seef, Taiba, Hadi, London Hospital, Al Rashid and Wara.',
    },
    {
      q: 'Who pays for private hospital care in Kuwait?',
      a: 'Employer-funded insurance for expatriates administered by insurers such as Gulf Insurance Group and Warba, cash-paying patients, and increasingly Dhaman’s compulsory scheme for private-sector expatriates.',
    },
    {
      q: 'How do Kuwaiti hospitals buy medicines and devices?',
      a: 'MOH facilities buy through Central Medical Stores tenders; private hospitals purchase through pharmacy and procurement committees from registered local agents; Dhaman is building its own procurement function.',
    },
    {
      q: 'What is Dhaman?',
      a: 'The Health Assurance Hospitals Company, a public–private venture building hospitals and primary-care centres to provide insured care to expatriate workers outside the Ministry of Health system.',
    },
    {
      q: 'What does BioNixus study about hospital groups in Kuwait?',
      a: 'Formulary and procurement decision mapping at Dar Al Shifa, Al Salam, New Mowasat and MOH hospitals; KOL and pharmacy director interviews; insurer and Dhaman research; and account-level brand tracking.',
    },
    {
      q: 'Is this a ranking of the best hospitals?',
      a: 'No. This is a B2B directory of operators grouped by role, included because they recur in BioNixus Kuwait fieldwork and Ministry of Health licensing records; order does not indicate quality or size.',
    },
  ],
  regulatorSource: {
    name: 'Kuwait Ministry of Health — Private Medical Licensing Department, licensed private hospitals',
    url: 'https://www.moh.gov.kw',
    asOf: '2026-09-03',
  },
  sources: [
    'Kuwait Ministry of Health Annual Health Report and facility statistics, 2024',
    'Dhaman (Health Assurance Hospitals Company) project and corporate disclosures, 2024–2025',
    'Boursa Kuwait filings of Al Salam Group Holding and New Mowasat; Public Authority for Civil Information population data, 2024–2025',
    'BioNixus Kuwait hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Formulary and procurement decision mapping at Dar Al Shifa, Al Salam International, New Mowasat, Royale Hayat and MOH general and specialist hospitals.',
    'KOL, pharmacy director and Central Medical Stores interviews on tender behaviour and brand adoption.',
    'Payer research with Gulf Insurance Group, Warba and TPAs, and with Dhaman on formulary and network design.',
    'Patient pathway studies with Kuwaiti and expatriate patients in oncology, cardiology, diabetes and maternity.',
  ],
};
