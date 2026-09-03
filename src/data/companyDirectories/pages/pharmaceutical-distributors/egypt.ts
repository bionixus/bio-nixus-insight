import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsEgypt: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'egypt',
  metaDescription:
    'Pharmaceutical distributors in Egypt: Ibnsina Pharma, UCP, Multipharma, Pharma Overseas, EgyDrug, the Unified Procurement Authority and chains — channels and EDA rules.',
  introLead:
    'Egypt is the most volume-driven pharmaceutical market in the Middle East and Africa, with more than 80,000 registered pharmacies served by a distribution layer where four private wholesalers handle the majority of the trade and a state buyer purchases for the public system.',
  introRest:
    'Unlike the Gulf, foreign manufacturers usually do not appoint an exclusive import agent. They register with the Egyptian Drug Authority through a local scientific office or partner, manufacture or toll-manufacture locally to meet pricing rules, and then sell through national wholesalers that hold pharmacy credit relationships. Public demand flows through the Unified Procurement Authority (UPA), which since 2019 has consolidated tenders that were previously spread across ministries, university hospitals and insurers. This directory lists the wholesalers, state buyers, chain pharmacies with their own supply chains, e-pharmacy platforms and 3PLs that a brand team needs to map before launching or auditing distribution in Egypt.',
  stats: [
    { value: '80,000+', label: 'Licensed retail pharmacies, the largest count in MEA' },
    { value: 'EGP 200bn+', label: 'Egyptian pharmaceutical market by value, 2024 estimate' },
    { value: '~90%', label: 'Share of units manufactured locally' },
    { value: '4', label: 'Wholesalers holding the majority of private distribution' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Egypt',
  channelBody:
    'The private channel dominates by units. Manufacturers, whether multinational plants in 6th of October and Badr City or Egyptian generics houses, sell to national wholesalers such as Ibnsina Pharma, UCP, Multipharma and Pharma Overseas, which in turn deliver several times a day to independent pharmacies on credit. Because pharmacy margins are fixed by the EDA pricing decree, wholesalers compete on delivery frequency, credit terms and bonus units rather than price. Chain pharmacies including El Ezaby, Seif, 19011 and Roshdy have grown to hundreds of stores each and buy a rising share directly from manufacturers. The public channel is different: the Unified Procurement Authority tenders for Ministry of Health hospitals, university hospitals, the Universal Health Insurance system and the state-owned EgyDrug network, and manufacturers bid directly or through a local partner. Import shortages, currency devaluation and price re-basing have made supply continuity a constant negotiation between manufacturers, wholesalers and the regulator.',
  companies: [
    {
      name: 'Ibnsina Pharma',
      hq: 'Cairo',
      type: 'Local',
      focus: 'National pharma wholesale, cold chain and pharmacy delivery',
      notes: 'EGX-listed and the largest private wholesaler by outlets served; sets the benchmark for delivery frequency and pharmacy credit in Egypt.',
    },
    {
      name: 'United Company for Pharmacists (UCP)',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Pharmacist-owned national wholesaler',
      notes: 'Founded and owned by pharmacists; among the top wholesalers and a natural partner for OTC and consumer-health launches aimed at independents.',
    },
    {
      name: 'Multipharma',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Pharma wholesale with strong Delta and Upper Egypt coverage',
      notes: 'Long-standing wholesaler whose branch network reaches provincial pharmacies that national competitors service less often.',
    },
    {
      name: 'Pharma Overseas',
      hq: 'Cairo',
      type: 'Local',
      focus: 'National pharma wholesale and specialty products',
      notes: 'One of the big-four private distributors; frequently the second or third wholesaler in a manufacturer’s coverage plan.',
    },
    {
      name: 'EgyDrug (Egyptian Pharmaceutical Trading Company)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'State-owned distribution and pharmacy network under HoldiPharma',
      notes: 'Supplies public hospitals and runs government pharmacies; the channel of record for Ministry of Health medicines.',
    },
    {
      name: 'Unified Procurement Authority (UPA)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Central tendering for public hospitals and Universal Health Insurance',
      notes: 'Created in 2019 to pool public demand; UPA awards now decide most institutional volume for hospital medicines.',
    },
    {
      name: 'El Ezaby Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Largest pharmacy chain with in-house distribution',
      notes: 'Several hundred branches and a central warehouse, meaning a growing share of its purchases bypass wholesalers entirely.',
    },
    {
      name: 'Seif Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'National pharmacy chain and consumer-health retail',
      notes: 'Strong in Greater Cairo and Alexandria; negotiates listing and promotional support directly with manufacturers.',
    },
    {
      name: '19011 Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Pharmacy chain with call-centre and home-delivery model',
      notes: 'Built its brand on delivery; illustrates how Egyptian chains compete with wholesalers on last-mile convenience.',
    },
    {
      name: 'Roshdy Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Regional pharmacy chain expanding nationally',
      notes: 'Fast-growing banner that relies on wholesaler credit less than its peers as it scales central purchasing.',
    },
    {
      name: 'Yodawy',
      hq: 'Cairo',
      type: 'Distributor',
      focus: 'E-pharmacy marketplace and insurer-connected fulfilment',
      notes: 'Digital platform that aggregates pharmacy inventory and processes insurer claims, creating a new data-rich channel.',
    },
    {
      name: 'Chefaa',
      hq: 'Cairo',
      type: 'Distributor',
      focus: 'Online pharmacy ordering and chronic-medicine subscriptions',
      notes: 'Consumer app working with partner pharmacies; relevant for adherence programmes and OTC brand visibility.',
    },
    {
      name: 'DHL Supply Chain Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'GDP-compliant warehousing and cold chain for manufacturers',
      notes: 'Runs life-sciences facilities used by multinationals that outsource storage before handing stock to wholesalers.',
    },
    {
      name: 'Aramex Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Domestic express and pharmacy last-mile logistics',
      notes: 'Carrier for e-pharmacy and chain deliveries, particularly outside Greater Cairo where own-fleet coverage thins.',
    },
    {
      name: 'Alexandria Pharmaceutical Distribution (Alex Pharma)',
      hq: 'Alexandria',
      type: 'Local',
      focus: 'Regional wholesale for Alexandria and the north coast',
      notes: 'Example of the regional second-tier wholesalers that national distributors still rely on for coastal and Delta towns.',
    },
  ],
  categoryBlurbs: {
    local:
      'Egyptian-owned national and regional wholesalers that buy from manufacturers and deliver on credit to tens of thousands of independent pharmacies. They are the channel through which almost all private-sector volume moves.',
    mnc:
      'International logistics groups providing GDP storage and last-mile capacity to manufacturers and e-pharmacies. They do not register products and rarely sell to pharmacies themselves.',
    regional:
      'Pan-Arab trading groups with an Egyptian entity, usually focused on imported specialty products or consumer health rather than the mass generics trade.',
    trade:
      'The state buyer and state distributor, the pharmacy chains that self-distribute, and the digital platforms that are reshaping how prescriptions reach patients in Egypt’s largest cities.',
  },
  growthDrivers: [
    {
      title: 'Unified Procurement Authority tenders',
      desc: 'UPA has pulled fragmented ministry, university and insurer purchasing into national tenders. Manufacturers with local production and registered local prices win; distributors gain from the resulting predictable public volumes.',
    },
    {
      title: 'Universal Health Insurance rollout',
      desc: 'The phased UHI system, live in Port Said, Luxor, Ismailia and other governorates, is shifting chronic-disease volume from out-of-pocket pharmacy purchases into insured, prescription-driven channels that favour compliant wholesalers and connected e-pharmacies.',
    },
    {
      title: 'Pharmacy chain consolidation',
      desc: 'El Ezaby, Seif, 19011 and Roshdy keep adding branches and central warehouses. Every store that moves to chain ownership removes wholesaler volume and adds a direct negotiating counterpart for manufacturers.',
    },
    {
      title: 'Currency pressure and price re-basing',
      desc: 'Repeated devaluations and EDA price adjustments create shortage cycles. Wholesalers with working capital and cold-chain assets absorb the shocks; smaller distributors exit or merge, concentrating the trade further.',
    },
  ],
  faq: [
    {
      q: 'Do foreign pharma companies need an exclusive agent in Egypt?',
      a: 'No. Egypt does not require a sole agent for medicines. Multinationals typically operate through a scientific office or local affiliate, register products with the Egyptian Drug Authority, and sell to several wholesalers simultaneously, which is why the big four distributors all carry the same national brands.',
    },
    {
      q: 'Which distributors control most of Egypt’s pharmacy supply?',
      a: 'Ibnsina Pharma, United Company for Pharmacists, Multipharma and Pharma Overseas are usually cited as the four wholesalers handling well over half of private-sector pharmaceutical volume, with regional wholesalers and pharmacy chains covering the remainder.',
    },
    {
      q: 'How does the public sector buy medicines in Egypt?',
      a: 'Through the Unified Procurement Authority, which runs national tenders on behalf of Ministry of Health hospitals, university hospitals, the Universal Health Insurance Authority and other public bodies, with EgyDrug handling much of the resulting storage and distribution.',
    },
    {
      q: 'Are pharmacy chains replacing wholesalers in Egypt?',
      a: 'Partly. Chains still account for a minority of the 80,000-plus pharmacies, but they buy a rising share directly from manufacturers through their own warehouses, so brand teams now manage chain accounts and wholesaler accounts as two distinct channels.',
    },
    {
      q: 'What kind of distributor research does BioNixus run in Egypt?',
      a: 'Pharmacy census and purchase-record audits to estimate share of wholesaler by governorate, service-level benchmarking of the major distributors from the pharmacist’s point of view, UPA tender tracking and chain-pharmacy buyer interviews on listing and promotional terms.',
    },
    {
      q: 'Is the order of companies in this directory meaningful?',
      a: 'No. The directory is grouped by role and reflects the distributors and channels that recur in BioNixus fieldwork across Egypt, cross-checked with EDA and EGX disclosures; position in the table is not a measure of scale.',
    },
  ],
  regulatorSource: {
    name: 'Egyptian Drug Authority (EDA) — licensed pharmaceutical establishments and distribution warehouses',
    url: 'https://www.edaegypt.gov.eg/en/',
    asOf: '2026-09-03',
  },
  sources: [
    'Ibnsina Pharma EGX filings and investor presentations, 2024–2025',
    'Unified Procurement Authority tender announcements and Universal Health Insurance Authority rollout updates, 2024–2026',
    'IQVIA and Egyptian Chamber of Pharmaceutical Industry market estimates, 2024',
    'BioNixus Egypt pharmacy census and distributor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Governorate-level share-of-wholesaler estimates from pharmacy purchase-record audits covering a defined basket of chronic and OTC SKUs.',
    'Distributor service-level benchmarking: 40–80 pharmacist interviews rating delivery frequency, credit days, returns handling and bonus schemes by wholesaler.',
    'UPA tender landscaping: which manufacturers and local partners bid, award prices and the shift from fragmented hospital purchasing to pooled national contracts.',
    'Chain-pharmacy buyer interviews at El Ezaby, Seif, 19011 and Roshdy on listing fees, direct-supply terms and category management.',
  ],
};
