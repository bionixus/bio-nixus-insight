import type { DirectoryPageInput } from '../../types';

export const pharmacyChainsOman: DirectoryPageInput = {
  entity: 'pharmacy-chains',
  countrySlug: 'oman',
  metaDescription:
    'Pharmacy chains in Oman: Muscat Pharmacy, Ibn Sina, Mazoon, Scientific Pharmacy, Al Hashar, Badr Al Samaa and Aster Al Raffah, plus MOH dispensing and rules.',
  introLead:
    'Oman’s retail pharmacy channel is led by a small number of Muscat-based chains that grew out of pharmaceutical import houses, while the Ministry of Health dispenses most prescriptions to citizens free of charge through its hospitals and health centres across the governorates.',
  introRest:
    'Pharmacies are licensed by the Ministry of Health’s Directorate General of Pharmaceutical Affairs and Drug Control, which also fixes retail prices and approves online sales. Muscat Pharmacy is by far the largest banner with more than a hundred branches, followed by Ibn Sina, Mazoon, Scientific Pharmacy and the Al Hashar network, and each of these groups also imports and distributes medicines, so retail and wholesale sit in the same hands. Private hospital groups such as Badr Al Samaa, Aster Al Raffah, KIMS, Burjeel and Starcare run captive pharmacies for insured expatriates, and the Dhamani mandatory insurance rollout is enlarging that insured pool. This directory lists the chains, hospital networks and public bodies that shape how a brand reaches Omani pharmacy shelves.',
  stats: [
    { value: '~900', label: 'Licensed private pharmacies across Oman’s 11 governorates' },
    { value: '120+', label: 'Branches operated by the largest chain (Muscat Pharmacy)' },
    { value: '~70%', label: 'Estimated share of prescription volume dispensed through MOH facilities' },
    { value: '~40%', label: 'Expatriate share of the population, the core private-pharmacy customer' },
  ],
  channelHeading: 'How retail pharmacy works in Oman',
  channelBody:
    'The Ministry of Health procures through its Directorate General of Medical Supplies and dispenses at Royal Hospital, Khoula, Al Nahdha and regional hospitals and more than 200 health centres, capturing most chronic and specialty prescriptions for Omani citizens; Sultan Qaboos University Hospital, the Armed Forces and Royal Oman Police medical services and Petroleum Development Oman run their own closed pharmacies. Private retail pharmacies serve expatriates, cash OTC, beauty and prescriptions from private clinics and hospitals, and they are unusually concentrated: Muscat Pharmacy, Ibn Sina Pharmacy, Mazoon Pharmacy, Scientific Pharmacy and Al Hashar Pharmacy each combine an import and distribution business with a retail network, so the same group that registers and imports a brand also controls its shelf. Muscat Pharmacy alone runs more than 120 branches from Muscat to Salalah and Sohar with central warehousing and its own delivery service. Hospital groups serving insured expatriates — Badr Al Samaa, Aster Al Raffah, KIMS Oman, Burjeel Muscat, Starcare and Apollo — dispense inside their facilities, and the Dhamani unified health-insurance platform is progressively bringing employer-funded expatriates into insurer-network dispensing with formulary controls. Prices are fixed by MOH, so chains compete on coverage, availability, pharmacist service and loyalty programmes, while delivery apps and chain apps have made home ordering common in Muscat.',
  companies: [
    {
      name: 'Muscat Pharmacy & Stores',
      hq: 'Muscat',
      type: 'Retailer',
      focus: 'Largest chain with 120+ branches and in-house distribution',
      notes: 'National coverage from Musandam to Dhofar, central warehousing and delivery; the first listing call for any consumer-health brand in Oman.',
    },
    {
      name: 'Ibn Sina Pharmacy',
      hq: 'Muscat',
      type: 'Retailer',
      focus: 'Major chain combined with pharmaceutical import',
      notes: 'Dozens of branches across Muscat and the interior; the group imports and distributes multinational brands it also retails.',
    },
    {
      name: 'Mazoon Pharmacy',
      hq: 'Muscat',
      type: 'Retailer',
      focus: 'Chain and distributor with hospital supply business',
      notes: 'Retail network alongside a wholesale arm that supplies MOH tenders and private hospitals.',
    },
    {
      name: 'Scientific Pharmacy',
      hq: 'Muscat',
      type: 'Retailer',
      focus: 'Established chain with agency portfolio',
      notes: 'One of Oman’s oldest pharmacy groups; branches in Muscat and Batinah backed by a distribution division.',
    },
    {
      name: 'Al Hashar Pharmacy (Al Hashar Group)',
      hq: 'Muscat',
      type: 'Distributor',
      focus: 'Pharmacy network of a diversified trading group',
      notes: 'Part of the Al Hashar Group, which also distributes pharmaceuticals and medical devices; retail showcases its agency brands.',
    },
    {
      name: 'Badr Al Samaa Pharmacies',
      hq: 'Muscat',
      type: 'Operator',
      focus: 'Pharmacies inside Oman’s largest private hospital group',
      notes: 'Multiple hospitals and polyclinics serving insured expatriates; captive dispensing gives its formulary significant brand influence.',
    },
    {
      name: 'Aster Al Raffah Pharmacies',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Hospital and clinic pharmacies of Aster DM Healthcare in Oman',
      notes: 'Regional group with hospitals in Muscat, Sohar and Ibri; pharmacies capture prescriptions from its own network.',
    },
    {
      name: 'KIMS Oman Hospital Pharmacy',
      hq: 'Muscat',
      type: 'Operator',
      focus: 'In-hospital pharmacy of a leading private hospital',
      notes: 'High-volume private hospital with insured expatriate caseload; a reference account for private-sector formularies.',
    },
    {
      name: 'Burjeel Hospital Muscat Pharmacy',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Premium private hospital dispensing (Burjeel Holdings)',
      notes: 'UAE-headquartered group; its Muscat hospital pharmacy is relevant for specialty and premium brands.',
    },
    {
      name: 'Starcare Hospital Pharmacy',
      hq: 'Muscat',
      type: 'Operator',
      focus: 'Private hospital and clinic pharmacies',
      notes: 'Hospital in Seeb with satellite clinics; dispenses insured and cash prescriptions for a largely expatriate base.',
    },
    {
      name: 'Ministry of Health — Hospital and Health Centre Pharmacies',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Free dispensing to citizens through public facilities',
      notes: 'The dominant channel by volume, supplied by the Directorate General of Medical Supplies and governed by the national formulary.',
    },
    {
      name: 'Sultan Qaboos University Hospital Pharmacy',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Tertiary academic hospital with independent procurement',
      notes: 'Buys outside the MOH tender and runs its own formulary; an important account for specialty and oncology brands.',
    },
    {
      name: 'Dhamani — Unified Health Insurance Platform',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Mandatory insurance rollout for private-sector employees and visitors',
      notes: 'Operated under the Capital Market Authority; expands insurer-network dispensing and formulary influence over private pharmacies.',
    },
    {
      name: 'Talabat Oman Pharmacy Delivery',
      hq: 'Muscat',
      type: 'Distributor',
      focus: 'App-based delivery from partner pharmacies',
      notes: 'Delivery platform listing chain and independent pharmacies for OTC and personal care in Muscat and Sohar.',
    },
  ],
  categoryBlurbs: {
    local:
      'Omani pharmacy groups that combine import, distribution and retail under one ownership, controlling both registration and shelf for the brands they carry.',
    mnc:
      'International brands reach Omani pharmacies through these agency-retail groups rather than through foreign-owned pharmacy banners, which are largely absent.',
    regional:
      'Gulf healthcare groups such as Aster and Burjeel that run hospital-linked pharmacies in Oman as part of GCC-wide networks.',
    trade:
      'MOH and university hospital dispensing, the Dhamani insurance platform and delivery apps that determine access for prescription and OTC brands.',
  },
  growthDrivers: [
    {
      title: 'Dhamani mandatory insurance',
      desc: 'The phased rollout of unified health insurance brings private-sector employees into insurer-network dispensing, increasing insured prescriptions at private hospital and chain pharmacies.',
    },
    {
      title: 'Chain expansion beyond Muscat',
      desc: 'Muscat Pharmacy, Ibn Sina and Mazoon are adding branches in Sohar, Salalah, Nizwa and Sur, extending organised retail into governorates that were served only by independents.',
    },
    {
      title: 'Private hospital growth',
      desc: 'New capacity from Badr Al Samaa, Aster, KIMS and Burjeel raises captive dispensing volumes and creates formulary-driven brand decisions outside the MOH list.',
    },
    {
      title: 'Local manufacturing and Omanisation',
      desc: 'Government preference for locally made generics from Oman Pharmaceutical Products and National Pharmaceutical Industries shifts MOH volumes and pushes multinationals toward the private channel.',
    },
  ],
  faq: [
    {
      q: 'Who licenses pharmacies in Oman?',
      a: 'The Ministry of Health through its Directorate General of Pharmaceutical Affairs and Drug Control, which also fixes retail prices and approves online sales.',
    },
    {
      q: 'Which pharmacy chains are largest in Oman?',
      a: 'Muscat Pharmacy leads with more than 120 branches, followed by Ibn Sina, Mazoon, Scientific Pharmacy and Al Hashar, with Badr Al Samaa and Aster Al Raffah running the largest hospital-linked pharmacy networks.',
    },
    {
      q: 'Do Omani chains also distribute medicines?',
      a: 'Yes. The main chains grew out of import houses and still combine wholesale agency with retail, so the group that registers and imports a brand often also controls its shelf placement.',
    },
    {
      q: 'What is Dhamani?',
      a: 'Oman’s unified health-insurance platform, rolled out in phases to private-sector employees and visitors, which routes more prescriptions through insurer networks and formularies.',
    },
    {
      q: 'What does BioNixus study about pharmacy chains in Oman?',
      a: 'Retail audits across Muscat Pharmacy, Ibn Sina, Mazoon, Scientific and independents; pharmacist recommendation studies; interviews with chain buyers and hospital pharmacy directors; and shopper research on OTC and insurance-driven behaviour.',
    },
    {
      q: 'Is this list ranked by size?',
      a: 'No. Entries are grouped by role and included because they recur in BioNixus Oman fieldwork and MOH licensing records; order does not indicate branch count or share.',
    },
  ],
  regulatorSource: {
    name: 'Oman Ministry of Health — Directorate General of Pharmaceutical Affairs and Drug Control, licensed pharmacies',
    url: 'https://www.moh.gov.om',
    asOf: '2026-09-03',
  },
  sources: [
    'Ministry of Health Annual Health Report, private pharmacy and facility statistics, 2024',
    'Capital Market Authority Dhamani rollout announcements, 2024–2025',
    'National Centre for Statistics and Information population data; company disclosures of Muscat Pharmacy, Aster DM Healthcare and Burjeel Holdings, 2024–2025',
    'BioNixus Oman pharmacy audit and shopper fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Retail audits across Muscat Pharmacy, Ibn Sina, Mazoon, Scientific, Al Hashar and independents in Muscat, Sohar, Salalah and Nizwa measuring availability, shelf share and promotions.',
    'Pharmacist recommendation studies for OTC, dermocosmetic and supplement requests by chain and governorate.',
    'Interviews with chain buyers and hospital pharmacy directors at Badr Al Samaa, Aster Al Raffah and KIMS on listing, formulary and supply terms.',
    'Shopper research with Omani and expatriate consumers on pharmacy choice, delivery usage and MOH versus private sourcing.',
  ],
};
