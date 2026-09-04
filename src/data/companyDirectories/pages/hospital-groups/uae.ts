import type { DirectoryPageInput } from '../../types';

export const hospitalGroupsUae: DirectoryPageInput = {
  entity: 'hospital-groups',
  countrySlug: 'uae',
  metaDescription:
    'Private hospital groups in the UAE: Burjeel, NMC, Mediclinic, Aster, PureHealth, American Hospital Dubai, Saudi German, Thumbay, Prime and Zulekha — networks and payers.',
  introLead:
    'The UAE has more private hospital capacity per capita than any other Gulf state and a handful of listed and investor-backed groups run most of it, funded by mandatory insurance in Dubai and Abu Dhabi and by a medical-tourism strategy that positions the country as a regional referral hub.',
  introRest:
    'Around 150 hospitals operate across the seven emirates, more than 100 of them private, regulated by the Dubai Health Authority, the Department of Health Abu Dhabi and the Emirates Health Services for the northern emirates. Burjeel Holdings and PureHealth are listed on the Abu Dhabi exchange, NMC Healthcare emerged from restructuring under creditor ownership, Mediclinic and Aster bring international and Indian-origin capital, and family groups such as Al Mulla, Thumbay, Zulekha and Prime run long-established networks. Public provision is now consolidated into PureHealth’s SEHA network in Abu Dhabi, Dubai Health and Emirates Health Services. This directory lists the private hospital groups and operators that matter for pharmaceutical, medical device and diagnostics companies, alongside the public systems and insurers that shape their formularies.',
  stats: [
    { value: '~150', label: 'Hospitals across the UAE, more than 100 of them private' },
    { value: '~9m', label: 'Residents with mandatory health insurance in Dubai and Abu Dhabi' },
    { value: '2', label: 'Hospital operators listed on ADX (Burjeel Holdings, PureHealth)' },
    { value: '~700k', label: 'Medical tourists a year targeted by Dubai Health Authority programmes' },
  ],
  channelHeading: 'How private hospital provision works in the UAE',
  channelBody:
    'Insurance is the engine. Abu Dhabi’s Thiqa and Basic plans and Dubai’s mandatory employer cover route almost every resident through insurer networks administered by Daman, AXA-GIG, Cigna, MetLife, Sukoon and others, and the Malaffi and NABIDH health-information exchanges let regulators and payers see prescribing and utilisation in real time. Private groups compete for network status and complex-care volume. Burjeel Holdings runs Burjeel, Medeor, LLH and Lifecare hospitals and clinics with a tertiary flagship in Abu Dhabi and expansion into Saudi Arabia; NMC Healthcare, the largest private operator by facility count, rebuilt under creditor ownership with NMC Royal and specialty hospitals; Mediclinic Middle East operates seven hospitals including City Hospital and Airport Road; Aster DM Healthcare’s GCC business, now Alpha GCC, runs Aster and Medcare hospitals and hundreds of clinics and pharmacies; and American Hospital Dubai, Saudi German Hospital, Thumbay, Prime, Zulekha and Al Zahra anchor family and regional groups. Abu Dhabi’s public hospitals were folded into PureHealth, which also owns Daman and international assets, while Dubai Health merged Dubai Health Authority hospitals into an academic health system, and Emirates Health Services runs the northern emirates. Procurement is decentralised by group, with formulary committees and central purchasing at each operator, while Abu Dhabi’s Rafed group purchasing organisation consolidates public buying. Cleveland Clinic Abu Dhabi under M42 and King’s College Hospital London Dubai set the premium tier and attract complex regional referrals, so specialty-brand adoption often starts there before spreading through the private networks.',
  companies: [
    {
      name: 'Burjeel Holdings',
      hq: 'Abu Dhabi',
      type: 'Operator',
      focus: 'Burjeel, Medeor, LLH and Lifecare hospitals; tertiary flagship in Abu Dhabi',
      notes: 'ADX-listed; strongest oncology and complex-care profile among private groups and expanding into Saudi Arabia and Oman.',
    },
    {
      name: 'NMC Healthcare',
      hq: 'Abu Dhabi',
      type: 'Operator',
      focus: 'Largest private operator by facility count after restructuring',
      notes: 'NMC Royal and NMC Specialty hospitals plus clinics across the emirates; creditor-owned since 2022 with renewed procurement discipline.',
    },
    {
      name: 'Mediclinic Middle East',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Seven hospitals including City Hospital and Airport Road',
      notes: 'Part of Mediclinic Group under Remgro–MSC ownership; premium insured caseload and structured formulary governance.',
    },
    {
      name: 'Aster DM Healthcare GCC (Alpha GCC) — Aster and Medcare Hospitals',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Hospitals, 100+ clinics and pharmacies across the Gulf',
      notes: 'Separated from the Indian business in 2024; integrated model captures patients from clinic to pharmacy; a key account for chronic-care brands.',
    },
    {
      name: 'PureHealth (SEHA network)',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Abu Dhabi public hospitals, Daman insurance and international assets',
      notes: 'ADX-listed but government-controlled; SEHA hospitals such as Sheikh Shakhbout and Tawam make it the largest provider in the country.',
    },
    {
      name: 'American Hospital Dubai (Mohamed & Obaid Al Mulla Group)',
      hq: 'Dubai',
      type: 'Operator',
      focus: 'Premium tertiary hospital with satellite clinics',
      notes: 'Mayo Clinic Care Network member; a reference site for innovative therapies and high-income insured patients.',
    },
    {
      name: 'Saudi German Hospitals UAE',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Dubai, Sharjah and Ajman hospitals of the Batterjee group',
      notes: 'Regional group headquartered in Jeddah; large mid-market insured caseload in the northern emirates.',
    },
    {
      name: 'Thumbay Group Hospitals',
      hq: 'Ajman',
      type: 'Operator',
      focus: 'Academic hospitals linked to Gulf Medical University',
      notes: 'Thumbay University Hospital and network across Ajman, Sharjah, Dubai and Fujairah; teaching status drives clinical-trial and KOL relevance.',
    },
    {
      name: 'Prime Healthcare Group',
      hq: 'Dubai',
      type: 'Operator',
      focus: 'Prime Hospital and a dense clinic network',
      notes: 'Mid-market group with strong outpatient volume across Dubai and Sharjah; important for primary-care prescribing.',
    },
    {
      name: 'Zulekha Healthcare Group',
      hq: 'Sharjah',
      type: 'Operator',
      focus: 'Zulekha Hospitals in Dubai and Sharjah',
      notes: 'Family-owned group serving the northern emirates’ insured workforce; steady pharmacy and consumables procurement.',
    },
    {
      name: 'Al Zahra Hospital (Gulf Medical Projects Company)',
      hq: 'Sharjah',
      type: 'Operator',
      focus: 'Al Zahra hospitals in Dubai and Sharjah',
      notes: 'Owned by ADX-listed Gulf Medical Projects Company; long-established tertiary provider in Sharjah.',
    },
    {
      name: 'Cleveland Clinic Abu Dhabi (M42)',
      hq: 'Abu Dhabi',
      type: 'MNC',
      focus: 'Premium quaternary hospital under Mubadala’s M42',
      notes: 'Sets the standard for complex cardiac, transplant and neuro care; early adopter of specialty therapies and digital health.',
    },
    {
      name: 'King’s College Hospital London Dubai and Fakeeh University Hospital',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'International-brand tertiary hospitals in Dubai Hills and Silicon Oasis',
      notes: 'Newer premium entrants that attract medical tourists and complex referrals; relevant for oncology and specialty devices.',
    },
    {
      name: 'Dubai Health and Emirates Health Services',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Public academic health system for Dubai and northern-emirates hospitals',
      notes: 'Dubai Health runs Rashid, Dubai and Latifa hospitals; EHS operates hospitals in Sharjah, Ajman, Fujairah and Ras Al Khaimah.',
    },
    {
      name: 'Daman, Sukoon and AXA-GIG',
      hq: 'Abu Dhabi / Dubai',
      type: 'Local',
      focus: 'Leading health insurers funding private hospital care',
      notes: 'Network inclusion, formularies and pre-authorisation rules at these payers determine which hospitals and brands are reimbursed.',
    },
  ],
  categoryBlurbs: {
    local:
      'UAE-owned hospital groups, from listed Burjeel to family networks such as Al Mulla, Thumbay, Zulekha and Prime, and the domestic insurers that fund them.',
    mnc:
      'International operators and brands — Mediclinic, Cleveland Clinic, King’s College Hospital — that set the premium tier and pioneer specialty-therapy adoption.',
    regional:
      'Gulf and Indian-origin groups such as Aster and Saudi German that run multi-country networks with the UAE as a hub.',
    trade:
      'PureHealth’s SEHA network, Dubai Health and Emirates Health Services, plus the insurers and information exchanges that govern access.',
  },
  growthDrivers: [
    {
      title: 'Insurance and health-information exchanges',
      desc: 'Mandatory cover in Dubai and Abu Dhabi plus Malaffi and NABIDH give payers real-time utilisation data, tightening network and formulary management across private groups.',
    },
    {
      title: 'Consolidation and capital markets',
      desc: 'Burjeel and PureHealth listings, NMC’s restructuring and Aster’s GCC carve-out concentrate purchasing power in fewer, better-capitalised groups.',
    },
    {
      title: 'Medical tourism and premium care',
      desc: 'Dubai and Abu Dhabi programmes to attract regional and international patients drive investment in oncology, orthopaedics, fertility and cosmetic surgery capacity.',
    },
    {
      title: 'Northern emirates capacity',
      desc: 'Population growth in Sharjah, Ajman and Ras Al Khaimah is pulling Saudi German, Thumbay, Zulekha and NMC to add beds outside Dubai and Abu Dhabi.',
    },
  ],
  faq: [
    {
      q: 'Which are the largest private hospital groups in the UAE?',
      a: 'NMC Healthcare, Burjeel Holdings, Mediclinic Middle East and Aster DM Healthcare GCC are the largest private groups, with American Hospital Dubai, Saudi German, Thumbay, Prime, Zulekha and Al Zahra forming the next tier.',
    },
    {
      q: 'Who regulates hospitals in the UAE?',
      a: 'The Dubai Health Authority in Dubai, the Department of Health Abu Dhabi in Abu Dhabi, and the Ministry of Health and Prevention with Emirates Health Services in the northern emirates.',
    },
    {
      q: 'How do UAE hospital groups buy medicines and devices?',
      a: 'Each group runs its own formulary committee and central procurement negotiating with registered agents; Abu Dhabi public hospitals buy through Rafed, and insurer formularies determine reimbursement.',
    },
    {
      q: 'What is PureHealth?',
      a: 'The ADX-listed, government-controlled group that owns Abu Dhabi’s SEHA public hospital network, the insurer Daman and international hospital assets, making it the UAE’s largest healthcare company.',
    },
    {
      q: 'What does BioNixus study about hospital groups in the UAE?',
      a: 'Formulary and procurement decision mapping at Burjeel, NMC, Mediclinic, Aster and SEHA; KOL and pharmacy director interviews; insurer-network research; and account-level brand tracking across emirates.',
    },
    {
      q: 'Is this a ranking of the best hospitals?',
      a: 'No. This is a B2B directory of operators grouped by role, included because they recur in BioNixus UAE fieldwork and DHA and DoH licensing records; order does not indicate quality or size.',
    },
  ],
  regulatorSource: {
    name: 'Department of Health Abu Dhabi and Dubai Health Authority — licensed hospital facility registers',
    url: 'https://www.doh.gov.ae',
    asOf: '2026-09-03',
  },
  sources: [
    'Department of Health Abu Dhabi and Dubai Health Authority health statistics, 2024',
    'ADX filings of Burjeel Holdings, PureHealth and Gulf Medical Projects Company, 2024–2025',
    'Mediclinic Group, Aster DM Healthcare and NMC Healthcare disclosures, 2024–2025',
    'BioNixus UAE hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Formulary and procurement decision mapping at Burjeel, NMC, Mediclinic, Aster, American Hospital Dubai and SEHA hospitals.',
    'KOL, pharmacy director and supply-chain interviews on brand adoption, tendering and Rafed dynamics.',
    'Insurer-network and pre-authorisation research with Daman, Sukoon, AXA-GIG and TPAs on specialty-therapy reimbursement.',
    'Patient pathway studies across Dubai, Abu Dhabi and the northern emirates in oncology, cardiology, diabetes and fertility.',
  ],
};
