import type { DirectoryPageInput } from '../../types';

export const pharmacyChainsTurkey: DirectoryPageInput = {
  entity: 'pharmacy-chains',
  countrySlug: 'turkey',
  title: 'Pharmacy Chains in Turkey: Who Fills the Role (2026 List)',
  h1: 'Pharmacy Chains in Turkey: Cooperatives, Wholesalers and Groups That Fill the Role (2026)',
  metaDescription:
    'Turkey bans pharmacy chains, so cooperatives (EDAK, BEK), wholesalers (Selçuk, Hedef Alliance), TEB, SGK and hospital groups fill the role for 28,000 pharmacies.',
  introLead:
    'Turkey has no pharmacy chains by law: the 6197 pharmacy statute allows each licensed pharmacist to own a single eczane, so the country’s roughly 28,000 pharmacies are all independents — yet a well-organised layer of cooperatives, wholesalers, professional bodies and the SGK reimbursement system performs the functions that chains perform elsewhere.',
  introRest:
    'For a manufacturer or consumer-health brand this matters because listing, promotion, replenishment and data flow through these intermediaries rather than through a chain buyer. The Turkish Pharmacists Association (TEB) and 54 regional chambers govern practice and negotiate with the state, pharmacist-owned cooperatives such as EDAK and BEK act as buying groups for thousands of members, the national wholesalers Selçuk Ecza Deposu and Hedef Alliance deliver several times a day, and the Social Security Institution (SGK) reimburses most prescriptions through the Medula system, making its positive list the single biggest determinant of what is dispensed. Hospital pharmacies inside public and private groups handle inpatient medicines, and drugstore chains such as Gratis, Watsons and Rossmann sell dermocosmetics and supplements that pharmacies also carry. This directory maps the organisations that shape Turkish pharmacy retail in the absence of chains.',
  stats: [
    { value: '~28,000', label: 'Licensed community pharmacies, all pharmacist-owned single outlets' },
    { value: '1 : 3,500', label: 'Pharmacist-to-population ratio set by the 2012 licensing rule for new pharmacies' },
    { value: '~85%', label: 'Share of prescription value reimbursed by SGK through the Medula system' },
    { value: '~40%', label: 'Estimated share of pharmacy purchasing routed through pharmacist cooperatives' },
  ],
  channelHeading: 'How retail pharmacy works in Turkey without chains',
  channelBody:
    'The eczane is a protected profession. Law 6197 restricts ownership to a single pharmacy per pharmacist, the 2012 amendment tied new licences to a population ratio and seniority points, and chambers under the Turkish Pharmacists Association enforce location, advertising and practice rules; corporate or franchise chains are therefore illegal and even shared branding is limited. Purchasing power is nonetheless organised. Pharmacist-owned cooperatives — EDAK in the Aegean, BEK in Bursa and Marmara, TEKB in Thrace and Güney Ecza Koop in the south — pool orders, negotiate manufacturer terms and run their own depots, while the two national wholesalers, Selçuk Ecza Deposu and Hedef Alliance (Walgreens Boots Alliance’s Turkish arm, in partnership with Hedef Holding), plus Nevzat Ecza and regional depots, deliver two or three times a day on credit and carry most of the SKU range. Reimbursement is the real chain buyer: the Social Security Institution covers most of the population, its positive list and reference pricing decide which brands are dispensed, and the Medula system and the pharmacy software vendors connected to it create dispensing data that manufacturers use for account-level targeting. Hospital pharmacies within the Ministry of Health’s city hospitals, university hospitals and private groups such as Acıbadem, Medical Park, Memorial and Liv procure through the Public Procurement Authority or group purchasing and handle inpatient and chemotherapy medicines. Because retail prices are fixed and generic substitution is pharmacist-led, brands compete on pharmacist engagement, cooperative promotions and the front-of-store dermocosmetics and supplements segment, where drugstore chains Gratis, Watsons and Rossmann are legal competitors for non-medicine categories.',
  companies: [
    {
      name: 'Türk Eczacıları Birliği (Turkish Pharmacists Association)',
      hq: 'Ankara',
      type: 'Local',
      focus: 'National professional body governing 28,000 pharmacies',
      notes: 'Negotiates the pharmacy protocol with SGK, sets practice rules through 54 chambers and runs the TEB pharmacy software and data initiatives.',
    },
    {
      name: 'Istanbul and Ankara Chambers of Pharmacists',
      hq: 'Istanbul / Ankara',
      type: 'Local',
      focus: 'Largest regional chambers enforcing licensing and practice',
      notes: 'Represent the densest pharmacy markets; approve locations, monitor advertising rules and organise continuing education.',
    },
    {
      name: 'EDAK Ecza Kooperatifi',
      hq: 'İzmir',
      type: 'Distributor',
      focus: 'Largest pharmacist cooperative, Aegean and beyond',
      notes: 'Member-owned buying group with its own depots and delivery fleet; the closest Turkish equivalent to a chain’s central purchasing.',
    },
    {
      name: 'Bursa Ecza Kooperatifi (BEK)',
      hq: 'Bursa',
      type: 'Distributor',
      focus: 'Cooperative serving Marmara region pharmacies',
      notes: 'Pools purchasing for thousands of members and negotiates manufacturer promotions on their behalf.',
    },
    {
      name: 'Trakya Ecza Kooperatifi (TEKB) and Güney Ecza Koop',
      hq: 'Edirne / Adana',
      type: 'Distributor',
      focus: 'Regional cooperatives in Thrace and the south',
      notes: 'Complete the cooperative network alongside EDAK and BEK; together cooperatives handle a large share of pharmacy purchasing.',
    },
    {
      name: 'Selçuk Ecza Deposu',
      hq: 'Istanbul',
      type: 'Distributor',
      focus: 'Largest national pharmaceutical wholesaler',
      notes: 'BIST-listed; delivers several times daily to most pharmacies and carries the broadest SKU range, making it the primary route to the independent channel.',
    },
    {
      name: 'Hedef Alliance (Walgreens Boots Alliance / Hedef Holding)',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Second national wholesaler with international ownership',
      notes: 'Combines Hedef Holding’s local depots with WBA’s systems; provides logistics, data and pharmacy services that substitute for chain infrastructure.',
    },
    {
      name: 'Nevzat Ecza Deposu',
      hq: 'Istanbul',
      type: 'Distributor',
      focus: 'Third-largest wholesaler with regional depots',
      notes: 'Long-established family wholesaler serving pharmacies across Anatolia; important for coverage outside the largest cities.',
    },
    {
      name: 'Sosyal Güvenlik Kurumu (SGK) — Medula',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Reimbursement authority and e-prescription system',
      notes: 'Covers most of the population; its positive list, reference pricing and Medula platform decide which brands pharmacies dispense.',
    },
    {
      name: 'Ministry of Health — City Hospital Pharmacies',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Inpatient pharmacies of the public hospital network',
      notes: 'City hospitals and state hospitals procure through the Public Procurement Authority and the DMO; the largest institutional buyer of medicines.',
    },
    {
      name: 'Acıbadem Healthcare Group Pharmacies',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Hospital pharmacies of the largest private group',
      notes: 'IHH Healthcare-owned; central procurement and formulary across 20+ hospitals shape private-sector brand access.',
    },
    {
      name: 'MLP Care (Medical Park, Liv Hospital, VM Medical Park) Pharmacies',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Hospital pharmacies of a BIST-listed private group',
      notes: 'Group purchasing for 30+ hospitals; a key account for hospital-use pharmaceuticals and oncology.',
    },
    {
      name: 'Memorial Healthcare Group Pharmacies',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Private hospital pharmacies and medical tourism',
      notes: 'Premium private group with strong international patient flows; formulary decisions influence branded original demand.',
    },
    {
      name: 'Gratis, Watsons Turkey and Rossmann',
      hq: 'Istanbul',
      type: 'Retailer',
      focus: 'Drugstore chains for dermocosmetics and supplements',
      notes: 'Legal chains for non-medicine categories that compete with pharmacies for skincare, personal care and wellness spend.',
    },
  ],
  categoryBlurbs: {
    local:
      'The professional bodies and pharmacist cooperatives that organise Turkey’s single-owner pharmacies into collective purchasing and negotiating power.',
    mnc:
      'International participation comes through wholesale and services, led by Walgreens Boots Alliance’s stake in Hedef Alliance, rather than through retail banners, which are prohibited.',
    regional:
      'Regional wholesalers and depots that complete national coverage in Anatolia and the Black Sea where the two largest wholesalers are thinner.',
    trade:
      'SGK reimbursement, public and private hospital pharmacies and drugstore chains that shape what is dispensed, procured and sold in adjacent categories.',
  },
  growthDrivers: [
    {
      title: 'SGK pricing and reimbursement policy',
      desc: 'Reference pricing, the fixed euro exchange rate for medicines and positive-list decisions drive shortages, generic substitution and the brands pharmacists dispense.',
    },
    {
      title: 'Cooperative and wholesaler services',
      desc: 'Cooperatives and wholesalers are adding data, category management and marketing services to members and customers, creating chain-like promotional platforms for manufacturers.',
    },
    {
      title: 'Dermocosmetics and consumer health',
      desc: 'Non-reimbursed skincare, supplements and OTC are the margin engine for pharmacies and the battleground with Gratis, Watsons and Rossmann, driving in-pharmacy merchandising investment.',
    },
    {
      title: 'Private hospital groups and medical tourism',
      desc: 'Acıbadem, MLP Care and Memorial expand capacity and international patient volumes, concentrating hospital-pharmacy purchasing in a few groups.',
    },
  ],
  faq: [
    {
      q: 'Are pharmacy chains legal in Turkey?',
      a: 'No. Law 6197 allows each licensed pharmacist to own one pharmacy and prohibits corporate or franchise chains, so all of Turkey’s roughly 28,000 pharmacies are independents.',
    },
    {
      q: 'What replaces chains in Turkey?',
      a: 'Pharmacist cooperatives such as EDAK and BEK pool purchasing, national wholesalers Selçuk and Hedef Alliance provide logistics and data, TEB and its chambers set practice rules, and SGK reimbursement decides which brands are dispensed.',
    },
    {
      q: 'How do brands reach Turkish pharmacies?',
      a: 'Through wholesalers and cooperatives that deliver several times a day, supported by pharmacist engagement, cooperative promotions and SGK positive-list inclusion for reimbursed products.',
    },
    {
      q: 'Can drugstores sell medicines in Turkey?',
      a: 'No. Gratis, Watsons and Rossmann sell cosmetics, personal care and some supplements, but medicines and most OTC products may only be sold in licensed pharmacies.',
    },
    {
      q: 'What does BioNixus study about pharmacy retail in Turkey?',
      a: 'Pharmacy audits and pharmacist recommendation studies across Istanbul, Ankara, İzmir and Anatolia; cooperative and wholesaler interviews; hospital pharmacy formulary research; and shopper studies on dermocosmetics and OTC across pharmacies and drugstores.',
    },
    {
      q: 'Is this list ranked?',
      a: 'No. Organisations are grouped by role and included because they recur in BioNixus Turkey fieldwork and TİTCK and TEB records; order does not indicate size.',
    },
  ],
  regulatorSource: {
    name: 'Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) and Turkish Pharmacists Association — pharmacy licensing and statistics',
    url: 'https://www.titck.gov.tr',
    asOf: '2026-09-03',
  },
  sources: [
    'Turkish Pharmacists Association pharmacy statistics and SGK–TEB protocol, 2024–2025',
    'Ministry of Health Health Statistics Yearbook, 2023 edition published 2024',
    'BIST filings of Selçuk Ecza Deposu and MLP Care; Hedef Alliance and Acıbadem disclosures, 2024–2025',
    'BioNixus Turkey pharmacy audit and pharmacist fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Pharmacy audits across Istanbul, Ankara, İzmir, Bursa and Anatolian cities measuring availability, recommendation and dermocosmetic shelf share by cooperative membership.',
    'Pharmacist recommendation and substitution studies covering reimbursed, OTC and dermocosmetic categories.',
    'Interviews with cooperative managers, wholesaler category teams and hospital pharmacy directors at Acıbadem, MLP Care and Memorial.',
    'Shopper research comparing pharmacy and drugstore purchase behaviour for skincare, supplements and personal care.',
  ],
};
