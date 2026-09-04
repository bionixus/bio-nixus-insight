import type { DirectoryPageInput } from '../../types';

export const hospitalGroupsEgypt: DirectoryPageInput = {
  entity: 'hospital-groups',
  countrySlug: 'egypt',
  metaDescription:
    'Private hospital groups in Egypt: Cleopatra Hospitals, Alameda (As-Salam, Dar Al Fouad), Saudi German Cairo, Andalusia, Wadi El Nil and public systems — networks, payers.',
  introLead:
    'Egypt’s private hospital sector is young as an organised industry: most of the country’s 1,000-plus private hospitals are small physician-owned facilities, but a decade of private-equity and listed-company consolidation has created a top tier of groups in Cairo and Alexandria that now anchors specialty care for insured and cash-paying patients.',
  introRest:
    'Egypt has roughly 1,800 hospitals and 130,000 beds, with the Ministry of Health, university hospitals, the Health Insurance Organisation and the armed forces running most capacity and the Egypt Healthcare Authority progressively taking over public provision under the Universal Health Insurance system. Cleopatra Hospitals Group, listed on the Egyptian Exchange, built the largest private network by acquisition; Alameda Healthcare consolidated As-Salam International, Dar Al Fouad and other Cairo hospitals; Saudi German and Andalusia brought Gulf capital; and specialised institutions such as Magdi Yacoub Heart Foundation, Children’s Cancer Hospital 57357 and Baheya set clinical benchmarks. This directory lists the private hospital groups and operators that matter for pharmaceutical, medical device and diagnostics companies in Egypt, alongside the public systems and payers that shape their formularies and purchasing.',
  stats: [
    { value: '~1,800', label: 'Hospitals nationwide, more than 1,000 of them private' },
    { value: '~130,000', label: 'Hospital beds, about 1.2 per 1,000 people' },
    { value: '6', label: 'Governorates live on Universal Health Insurance by 2025, with national rollout continuing' },
    { value: '~60%', label: 'Share of health spending paid out of pocket, sustaining cash private care' },
  ],
  channelHeading: 'How private hospital provision works in Egypt',
  channelBody:
    'Egyptian hospital care is layered. The Ministry of Health and Population runs general and district hospitals for the uninsured poor; the Health Insurance Organisation covers employees, students and pensioners through its own and contracted hospitals; university hospitals in Cairo, Ain Shams, Alexandria, Mansoura and Assiut deliver most complex public care; and the armed forces and police run large hospitals that also serve civilians. The Universal Health Insurance system, live in Port Said, Luxor, Ismailia, South Sinai, Suez and Aswan, is transferring public facilities to the Egypt Healthcare Authority and contracting private hospitals as accredited providers, which is the single biggest structural change for private operators. In the private tier, Cleopatra Hospitals Group runs Cleopatra, Cairo Specialised, Nile Badrawi, Al Shorouk, Queens and El Katib hospitals with central procurement and a listed balance sheet; Alameda Healthcare owns As-Salam International, Dar Al Fouad in 6th of October and Nasr City and has expanded polyclinics; Saudi German Hospital Cairo and Andalusia’s Cairo and Alexandria hospitals extend Gulf groups; and Wadi El Nil, Misr International, Ganzouri Specialised and Shifa serve Cairo’s insured and cash patients. Private insurers such as AXA Egypt, Allianz, MetLife and GIG, plus corporate self-funded schemes and TPAs, pay for a minority of care, so cash pricing and instalment plans remain central to private hospital economics, and currency devaluation has made supply of imported medicines and devices a recurring operational issue. For manufacturers the private groups offer formulary committees and central purchasing, while the Unified Procurement Authority controls public tenders and the Egypt Healthcare Authority is emerging as a third large buyer.',
  companies: [
    {
      name: 'Cleopatra Hospitals Group',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Largest private network: Cleopatra, Cairo Specialised, Nile Badrawi, Al Shorouk, Queens, El Katib',
      notes: 'EGX-listed; central procurement and formulary governance across six hospitals and polyclinics; the reference private account in Egypt.',
    },
    {
      name: 'Alameda Healthcare Group',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'As-Salam International, Dar Al Fouad and polyclinics',
      notes: 'Private-equity-backed consolidator with tertiary hospitals in Maadi, 6th of October and Nasr City; strong cardiac and transplant programmes.',
    },
    {
      name: 'Saudi German Hospital Cairo',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Large tertiary hospital of the Batterjee group',
      notes: 'Gulf-owned hospital in Cairo with regional referral links; relevant for premium brands and insured expatriates.',
    },
    {
      name: 'Andalusia Group Egypt',
      hq: 'Alexandria',
      type: 'Regional',
      focus: 'Andalusia hospitals in Alexandria and Cairo',
      notes: 'Jeddah-headquartered group operating Smouha and Maadi hospitals; cross-border procurement and referral with Saudi Arabia.',
    },
    {
      name: 'Wadi El Nil Hospital',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Large multi-specialty hospital serving insured patients',
      notes: 'Historically linked to the petroleum sector; high insured caseload and broad specialty procurement.',
    },
    {
      name: 'Misr International Hospital',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Established private hospital in Dokki',
      notes: 'Long-standing tertiary hospital with cardiac, oncology and surgical volume; part of the mid-tier that manufacturers target for KOL work.',
    },
    {
      name: 'Ganzouri Specialised Hospital',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Private tertiary hospital in Heliopolis',
      notes: 'Multi-specialty facility with strong oncology and cardiac departments; a reference site in east Cairo.',
    },
    {
      name: 'Shifa Hospital (Elaj Group)',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Private hospital and clinic network in Cairo',
      notes: 'Serves insured and cash patients in Sheikh Zayed and Cairo; representative of newer investor-backed operators.',
    },
    {
      name: 'Magdi Yacoub Heart Foundation',
      hq: 'Aswan / Cairo',
      type: 'Operator',
      focus: 'Charitable cardiac centres of excellence',
      notes: 'Aswan Heart Centre and the new Cairo Global Heart Centre; sets national standards in cardiac surgery and devices.',
    },
    {
      name: 'Children’s Cancer Hospital Egypt 57357',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Largest paediatric oncology hospital in the region',
      notes: 'Donation-funded; independent procurement of oncology therapies and a key account for paediatric cancer brands.',
    },
    {
      name: 'Baheya Foundation for Breast Cancer',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Specialised breast cancer hospitals in Haram and Sheikh Zayed',
      notes: 'Charitable operator with high patient volumes; significant purchaser of oncology and diagnostic imaging.',
    },
    {
      name: 'Egypt Healthcare Authority (Universal Health Insurance)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Operator of public facilities under UHI and accreditor of private providers',
      notes: 'Takes over MOHP and HIO hospitals as UHI rolls out; contracts private hospitals and is becoming a major buyer.',
    },
    {
      name: 'Ministry of Health and Population / Health Insurance Organisation',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Largest public hospital systems and traditional insurer',
      notes: 'Run most public beds; buy through the Unified Procurement Authority; formularies set the floor for public brand access.',
    },
    {
      name: 'University Hospitals (Cairo, Ain Shams, Alexandria, Mansoura)',
      hq: 'Cairo / Alexandria / Mansoura',
      type: 'Government',
      focus: 'Academic tertiary hospitals delivering complex public care',
      notes: 'Kasr Al Ainy, Ain Shams Specialised and Mansoura hospitals are the largest KOL and clinical-trial sites in Egypt.',
    },
    {
      name: 'Military Medical Academy and Armed Forces Hospitals',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Large military hospital network open to civilians',
      notes: 'Maadi, Kobry El Kobba and Air Force Specialised hospitals run independent procurement and high-acuity services.',
    },
  ],
  categoryBlurbs: {
    local:
      'Egyptian-owned hospital groups and charitable centres of excellence, from EGX-listed Cleopatra to physician-founded tertiary hospitals in Cairo.',
    mnc:
      'International operators are largely absent from Egyptian hospital ownership; foreign capital arrives through private equity, Gulf groups and development finance rather than global hospital brands.',
    regional:
      'Gulf healthcare groups such as Saudi German, Andalusia and Alameda’s investors that own Egyptian hospitals and link them to regional networks.',
    trade:
      'The Egypt Healthcare Authority, Ministry of Health, Health Insurance Organisation, university and military hospitals that hold most beds and public purchasing.',
  },
  growthDrivers: [
    {
      title: 'Universal Health Insurance rollout',
      desc: 'Governorate-by-governorate implementation transfers public facilities to the Egypt Healthcare Authority and accredits private hospitals as providers, creating a new payer and buyer for private groups.',
    },
    {
      title: 'Private-equity consolidation',
      desc: 'Cleopatra, Alameda and newer investor-backed platforms are acquiring single hospitals and polyclinics, centralising procurement and formulary decisions.',
    },
    {
      title: 'New cities and capacity',
      desc: 'Hospital construction in the New Administrative Capital, New Cairo, 6th of October and Alamein adds private beds and specialty centres for a growing middle class.',
    },
    {
      title: 'Currency pressure and localisation',
      desc: 'Devaluation and import constraints push hospitals toward locally manufactured medicines and devices and make supply reliability a procurement criterion.',
    },
  ],
  faq: [
    {
      q: 'Which are the largest private hospital groups in Egypt?',
      a: 'Cleopatra Hospitals Group and Alameda Healthcare are the largest organised groups, followed by Saudi German Hospital Cairo, Andalusia, Wadi El Nil, Misr International, Ganzouri and Shifa, with charitable centres such as 57357 and Magdi Yacoub setting specialty benchmarks.',
    },
    {
      q: 'Who pays for private hospital care in Egypt?',
      a: 'Mostly patients themselves, since out-of-pocket spending is around 60% of health expenditure, supplemented by private insurers, corporate schemes and increasingly the Universal Health Insurance system contracting accredited private hospitals.',
    },
    {
      q: 'How do Egyptian hospitals buy medicines and devices?',
      a: 'Private groups run formulary committees and central purchasing negotiating with local agents; public hospitals buy through the Unified Procurement Authority, and the Egypt Healthcare Authority is emerging as a third large buyer.',
    },
    {
      q: 'What is the Egypt Healthcare Authority?',
      a: 'The body that operates public facilities under the Universal Health Insurance law, accredits private providers and contracts them to deliver insured care as the system rolls out across governorates.',
    },
    {
      q: 'What does BioNixus study about hospital groups in Egypt?',
      a: 'Formulary and procurement decision mapping at Cleopatra, Alameda, Saudi German and university hospitals; KOL and pharmacy director interviews; UHI and insurer research; and account-level brand tracking across Cairo and Alexandria.',
    },
    {
      q: 'Is this a ranking of the best hospitals?',
      a: 'No. This is a B2B directory of operators grouped by role, included because they recur in BioNixus Egypt fieldwork and Ministry of Health licensing records; order does not indicate quality or size.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Health and Population and General Authority for Healthcare Accreditation and Regulation (GAHAR) — licensed and accredited hospitals',
    url: 'https://www.mohp.gov.eg',
    asOf: '2026-09-03',
  },
  sources: [
    'CAPMAS Annual Bulletin of Health Services Statistics, 2023 edition published 2024',
    'Universal Health Insurance Authority and Egypt Healthcare Authority rollout reports, 2024–2026',
    'EGX filings of Cleopatra Hospitals Group; Alameda Healthcare, Saudi German and Andalusia disclosures, 2024–2025',
    'BioNixus Egypt hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Formulary and procurement decision mapping at Cleopatra, Alameda, Saudi German Cairo, Kasr Al Ainy and Ain Shams hospitals.',
    'KOL, pharmacy director and supply-chain interviews on brand preference, shortage management and UPA tender behaviour.',
    'Payer research with UHI, HIO, private insurers and corporate schemes on reimbursement of specialty therapies and devices.',
    'Patient pathway studies across Cairo, Alexandria and the Delta in oncology, cardiology, hepatology and diabetes.',
  ],
};
