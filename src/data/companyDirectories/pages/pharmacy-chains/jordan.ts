import type { DirectoryPageInput } from '../../types';

export const pharmacyChainsJordan: DirectoryPageInput = {
  entity: 'pharmacy-chains',
  countrySlug: 'jordan',
  metaDescription:
    'Pharmacy chains in Jordan: Pharmacy One, Dawacom, hospital pharmacies at KHCC and private groups, Royal Medical Services and MOH dispensing, plus JFDA rules.',
  introLead:
    'Jordan has more than 4,000 pharmacies for 11 million people, one of the highest densities in the region, and almost all of them are pharmacist-owned independents; two Amman-based chains, Pharmacy One and Dawacom, are the exception and have become the organised-retail benchmark for consumer-health brands.',
  introRest:
    'The Jordan Food and Drug Administration licenses pharmacies and fixes retail prices, and the Jordan Pharmacists Association enforces ownership rules that require each pharmacy to be owned by a licensed pharmacist, which is why chains grew through franchise-like structures rather than corporate roll-ups. Public dispensing is split between the Ministry of Health, the Royal Medical Services, university hospitals and King Hussein Cancer Center, all supplied through the Joint Procurement Department, while private hospitals in Amman dispense to insured and cash patients. This directory lists the chains, hospital pharmacy systems, public bodies and wholesalers that determine how a brand reaches Jordanian patients, and how the fragmented independent channel is served.',
  stats: [
    { value: '4,000+', label: 'Licensed community pharmacies, roughly one per 2,700 residents' },
    { value: '~5%', label: 'Estimated share of pharmacies belonging to organised chains' },
    { value: '~70%', label: 'Share of the population with some public or private health coverage' },
    { value: '~30%', label: 'Share of medicine volume dispensed through MOH, RMS and university hospitals' },
  ],
  channelHeading: 'How retail pharmacy works in Jordan',
  channelBody:
    'The independent pharmacy is the unit of the Jordanian channel. More than 4,000 pharmacist-owned shops buy from Amman wholesalers and manufacturer depots — Arab Drug Store, Munir Sukhtian Group, Hikma’s and Dar Al Dawa’s distribution arms and dozens of regional wholesalers — on credit terms that often run beyond ninety days, and they compete on location, pharmacist relationships and stock breadth rather than price, which the JFDA fixes. Pharmacy One built the first genuine chain with well over a hundred branches, central purchasing, a loyalty programme and app-based delivery, and Dawacom followed with a smaller network concentrated in Amman’s western districts; both negotiate listings, planograms and promotions directly with manufacturers and have made front-of-store beauty and supplements a core revenue line. Public dispensing is significant and multi-headed: the Ministry of Health dispenses through its hospitals and health centres, the Royal Medical Services serves military personnel and their families, Jordan University Hospital and King Abdullah University Hospital run academic pharmacies, and King Hussein Cancer Center has its own oncology formulary, all supplied through the Joint Procurement Department’s tenders. Private hospitals — Arab Medical Center, Specialty Hospital, Istishari, Jordan Hospital, Al Khalidi and others — dispense to insured patients and medical tourists inside their walls. Because Jordan is a regional manufacturing hub, local brands from Hikma, Dar Al Dawa, JPM and MS Pharma dominate generics shelves, and multinationals rely on agents and pharmacist recommendation to hold share. Delivery through chain apps and platforms grew after 2020 and the JFDA now regulates online pharmacy services.',
  companies: [
    {
      name: 'Pharmacy One',
      hq: 'Amman',
      type: 'Retailer',
      focus: 'Jordan’s largest pharmacy chain with 100+ branches',
      notes: 'National coverage from Irbid to Aqaba, central purchasing, loyalty programme and app delivery; the primary listing account for consumer health.',
    },
    {
      name: 'Dawacom Pharmacies',
      hq: 'Amman',
      type: 'Retailer',
      focus: 'Second chain concentrated in western Amman',
      notes: 'Smaller network with a premium positioning in Abdoun, Sweifieh and Dabouq; strong in dermocosmetics and wellness.',
    },
    {
      name: 'Jordan Pharmacists Association',
      hq: 'Amman',
      type: 'Local',
      focus: 'Professional body governing pharmacy ownership and practice',
      notes: 'Enforces pharmacist-ownership rules and licensing standards that shape how chains and independents operate.',
    },
    {
      name: 'Ministry of Health — Hospital and Health Centre Pharmacies',
      hq: 'Amman',
      type: 'Government',
      focus: 'Public dispensing for civil insurance and low-income patients',
      notes: 'Dispenses through MOH hospitals and hundreds of health centres nationwide; supplied by Joint Procurement Department tenders.',
    },
    {
      name: 'Royal Medical Services Pharmacies',
      hq: 'Amman',
      type: 'Government',
      focus: 'Military health system with own hospitals and pharmacies',
      notes: 'Covers armed forces personnel and families through King Hussein Medical Center and regional hospitals; a large closed formulary channel.',
    },
    {
      name: 'Jordan University Hospital Pharmacy',
      hq: 'Amman',
      type: 'Government',
      focus: 'Academic tertiary hospital dispensing',
      notes: 'Teaching hospital with independent formulary committee; a reference site for specialty and innovative brands.',
    },
    {
      name: 'King Hussein Cancer Center Pharmacy',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Oncology pharmacy with dedicated procurement',
      notes: 'The region’s leading cancer centre; its formulary and procurement decisions are central for oncology and supportive-care brands.',
    },
    {
      name: 'Arab Medical Center Pharmacy',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Private hospital dispensing for insured and medical-tourism patients',
      notes: 'Leading private hospital in Amman with in-house pharmacy serving Jordanian insured patients and visitors from Iraq, Libya and Yemen.',
    },
    {
      name: 'Specialty Hospital Pharmacy',
      hq: 'Amman',
      type: 'Operator',
      focus: 'In-hospital pharmacy of a major private hospital',
      notes: 'High-acuity private hospital with a large medical-tourism caseload; formulary is a benchmark for private-sector brands.',
    },
    {
      name: 'Istishari Hospital Pharmacy',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Private hospital pharmacy and outpatient dispensing',
      notes: 'Modern private hospital whose pharmacy serves insured outpatients and inpatients across specialties.',
    },
    {
      name: 'Jordan Hospital and Al Khalidi Hospital Pharmacies',
      hq: 'Amman',
      type: 'Operator',
      focus: 'Established private hospitals with in-house pharmacies',
      notes: 'Part of Amman’s private-hospital tier that dispenses insured prescriptions and negotiates directly with agents and manufacturers.',
    },
    {
      name: 'Arab Drug Store',
      hq: 'Amman',
      type: 'Distributor',
      focus: 'Leading wholesaler supplying independent pharmacies',
      notes: 'Agent for multinational brands and daily supplier to thousands of independents; the main route to the fragmented channel.',
    },
    {
      name: 'Munir Sukhtian Group — Pharma Distribution',
      hq: 'Amman',
      type: 'Distributor',
      focus: 'Diversified group distributing pharma and consumer health',
      notes: 'Supplies chains, independents and hospitals with multinational and consumer-health portfolios.',
    },
    {
      name: 'Hikma and Dar Al Dawa — Domestic Distribution',
      hq: 'Amman',
      type: 'Local',
      focus: 'Manufacturer-owned distribution to pharmacies',
      notes: 'Jordan’s leading manufacturers deliver directly to pharmacies, giving local generics a structural shelf advantage.',
    },
  ],
  categoryBlurbs: {
    local:
      'Jordanian pharmacist-owned chains, the professional body that governs ownership, and manufacturer-owned distribution that reaches pharmacies directly.',
    mnc:
      'International pharmacy banners are absent from Jordan because of ownership rules; multinational brands reach shelves through Amman agents and pharmacist recommendation.',
    regional:
      'Regional healthcare groups and investors participating in Jordanian pharmacy through hospital ownership or platform partnerships rather than retail banners.',
    trade:
      'MOH, Royal Medical Services, university and cancer-centre pharmacies supplied by Joint Procurement, plus the wholesalers that serve the independent majority.',
  },
  growthDrivers: [
    {
      title: 'Chain growth against a fragmented base',
      desc: 'Pharmacy One’s continued expansion and Dawacom’s premium positioning are drawing share from independents in Amman and secondary cities, creating direct-listing accounts that did not exist a decade ago.',
    },
    {
      title: 'Medical tourism and private hospitals',
      desc: 'Patients from Iraq, Libya, Yemen and the Gulf sustain private hospital pharmacies and demand for branded originals, offsetting price pressure in the domestic cash market.',
    },
    {
      title: 'Insurance coverage expansion',
      desc: 'Growth in civil, military and private insurance shifts prescriptions into formulary-driven channels where Joint Procurement and insurer lists decide brand access.',
    },
    {
      title: 'Online pharmacy regulation',
      desc: 'JFDA rules for online pharmacy services and chain apps have legitimised delivery, giving chains a digital advantage over independents.',
    },
  ],
  faq: [
    {
      q: 'Are pharmacy chains allowed in Jordan?',
      a: 'Each pharmacy must be owned by a licensed pharmacist under JFDA and Jordan Pharmacists Association rules, so chains such as Pharmacy One and Dawacom operate through pharmacist-owned branches coordinated by a management company.',
    },
    {
      q: 'Which are the largest pharmacy chains in Jordan?',
      a: 'Pharmacy One is by far the largest with more than a hundred branches nationwide, followed by Dawacom in Amman; the rest of the market is independent pharmacies.',
    },
    {
      q: 'How do brands reach independent pharmacies in Jordan?',
      a: 'Through Amman wholesalers such as Arab Drug Store and Munir Sukhtian, manufacturer-owned distribution from Hikma and Dar Al Dawa, and regional wholesalers that deliver daily on credit.',
    },
    {
      q: 'Who dispenses public prescriptions in Jordan?',
      a: 'The Ministry of Health, Royal Medical Services, Jordan University Hospital, King Abdullah University Hospital and King Hussein Cancer Center, all supplied through Joint Procurement Department tenders.',
    },
    {
      q: 'What does BioNixus study about pharmacy retail in Jordan?',
      a: 'Retail audits across Pharmacy One, Dawacom and independents by governorate; pharmacist recommendation and substitution studies; chain buyer and hospital pharmacy interviews; and patient research on medical tourism and insurance-driven behaviour.',
    },
    {
      q: 'Is this list ranked?',
      a: 'No. Entries are grouped by role and included because they recur in BioNixus Jordan fieldwork and JFDA licensing records; order does not indicate size.',
    },
  ],
  regulatorSource: {
    name: 'Jordan Food and Drug Administration (JFDA) — licensed pharmacies and drug stores',
    url: 'https://www.jfda.jo',
    asOf: '2026-09-03',
  },
  sources: [
    'Jordan Pharmacists Association pharmacy counts and ownership regulations, 2024',
    'Ministry of Health Annual Statistical Report and Joint Procurement Department tender data, 2024',
    'Department of Statistics population data; Pharmacy One and Hikma corporate disclosures, 2024–2025',
    'BioNixus Jordan pharmacy audit and patient fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Retail audits across Pharmacy One, Dawacom and independent pharmacies in Amman, Zarqa, Irbid and Aqaba measuring availability, shelf share and promotions.',
    'Pharmacist recommendation and generic-substitution studies covering OTC, chronic and dermocosmetic categories.',
    'Interviews with chain buyers, wholesalers and hospital pharmacy directors at KHCC, Arab Medical Center and Specialty Hospital on listing, formulary and supply terms.',
    'Patient research with Jordanian and medical-tourism patients on pharmacy choice, brand preference and insurance coverage.',
  ],
};
