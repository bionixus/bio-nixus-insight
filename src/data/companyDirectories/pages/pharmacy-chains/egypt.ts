import type { DirectoryPageInput } from '../../types';

export const pharmacyChainsEgypt: DirectoryPageInput = {
  entity: 'pharmacy-chains',
  countrySlug: 'egypt',
  metaDescription:
    'Pharmacy chains in Egypt: El Ezaby, Seif, 19011, Roshdy, Misr, El Tarshouby, EgyDrug state pharmacies and e-pharmacies Chefaa and Yodawy — footprints and EDA rules.',
  introLead:
    'Egypt has more than 80,000 pharmacies, the overwhelming majority of them single-owner independents, yet a dozen chains headquartered in Cairo and Alexandria now shape how OTC, derma and chronic brands are listed, promoted and delivered in the country’s largest cities.',
  introRest:
    'Pharmacies are licensed by the Egyptian Drug Authority and must be owned by a licensed pharmacist, so chains grow through franchise-style structures, family groups and management companies rather than corporate ownership in the Western sense. The largest banners, El Ezaby and Seif, run hundreds of branches with central warehouses, while 19011 built its brand on call-centre delivery and Roshdy, Misr and El Tarshouby expanded from regional strongholds. Online platforms such as Chefaa, Yodawy and Vezeeta aggregate independent pharmacies and process insurer claims, and the state-owned EgyDrug network serves public patients. This directory lists the chains, state network and platforms that define Egypt’s organised retail pharmacy channel and how they compete with the independent majority.',
  stats: [
    { value: '80,000+', label: 'Licensed pharmacies, the largest count in the Middle East and Africa' },
    { value: '~10%', label: 'Estimated share of pharmacy sales through chains and organised banners' },
    { value: '500+', label: 'Branches operated by the largest chain (El Ezaby)' },
    { value: '2019', label: 'Year Universal Health Insurance began shifting prescriptions into insured channels' },
  ],
  channelHeading: 'How retail pharmacy works in Egypt',
  channelBody:
    'Independents dominate by count, and the national wholesalers Ibnsina Pharma, UCP, Multipharma and Pharma Overseas keep them stocked with multiple daily deliveries on credit, but the chains behave differently. El Ezaby and Seif buy a large share of their volume directly from manufacturers through central warehouses, negotiate listing fees, shelf placement and promotional support at group level, and run loyalty programmes and apps that capture chronic patients. 19011 pioneered the call-and-deliver model that now underpins every chain’s home-delivery service, and Roshdy, Misr and El Tarshouby have grown from Cairo and Alexandria neighbourhoods into multi-governorate networks. Because retail prices are fixed by the EDA, chains compete on assortment, availability during shortage cycles, delivery speed and front-of-store beauty and baby care rather than on price. Online platforms add a new layer: Chefaa and Vezeeta take consumer orders and route them to partner pharmacies, while Yodawy connects pharmacies to insurers and employers for claims processing, giving manufacturers visibility of dispensing data that the cash market never provided. The state-owned EgyDrug pharmacies and the Universal Health Insurance system dispense to public patients, and as UHI rolls out governorate by governorate, prescriptions move from cash counters into insured channels where formulary and platform integration decide brand access.',
  companies: [
    {
      name: 'El Ezaby Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Largest chain with central warehouse and national reach',
      notes: 'Hundreds of branches across Greater Cairo, Alexandria and the governorates; sets listing and promotional benchmarks for consumer-health brands.',
    },
    {
      name: 'Seif Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'National chain strong in Cairo and Alexandria',
      notes: 'Second-largest banner with central purchasing, a loyalty programme and a growing beauty and wellness assortment.',
    },
    {
      name: '19011 Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Delivery-led chain built on a call-centre model',
      notes: 'Made home delivery the standard in Egyptian pharmacy retail; strong chronic-patient base and app adoption.',
    },
    {
      name: 'Roshdy Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Fast-growing chain expanding from Cairo nationally',
      notes: 'Aggressive branch openings and central buying; increasingly a direct account for manufacturers rather than a wholesaler customer.',
    },
    {
      name: 'Misr Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Established chain with Cairo and Delta coverage',
      notes: 'Long-standing banner with dense coverage in middle-income districts and a broad generics assortment.',
    },
    {
      name: 'El Tarshouby Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Regional chain scaling across Greater Cairo',
      notes: 'Family-run network known for service and availability; representative of the mid-tier chains consolidating the capital.',
    },
    {
      name: 'Delmar Pharmacies',
      hq: 'Cairo',
      type: 'Retailer',
      focus: 'Chain concentrated in New Cairo and eastern districts',
      notes: 'Positioned in newer, higher-income neighbourhoods; a reference account for premium derma and supplements.',
    },
    {
      name: 'EgyDrug Pharmacies (HoldiPharma)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'State-owned pharmacy network serving public patients',
      notes: 'Government pharmacies under the Egyptian Pharmaceutical Trading Company; the dispensing arm for Ministry of Health and insured public programmes.',
    },
    {
      name: 'Universal Health Insurance Authority — Pharmacy Network',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Contracted pharmacies dispensing under the UHI system',
      notes: 'Live in Port Said, Luxor, Ismailia and other governorates; formulary and contracting rules determine which brands reach insured patients.',
    },
    {
      name: 'Chefaa',
      hq: 'Cairo',
      type: 'Distributor',
      focus: 'Online pharmacy ordering and chronic-medicine subscriptions',
      notes: 'Consumer app routing orders to partner pharmacies; a growing digital shelf for OTC and adherence programmes.',
    },
    {
      name: 'Yodawy',
      hq: 'Cairo',
      type: 'Distributor',
      focus: 'Pharmacy marketplace and insurer claims platform',
      notes: 'Connects pharmacies to insurers and employers, generating dispensing data that manufacturers use for account-level insight.',
    },
    {
      name: 'Vezeeta Pharmacy',
      hq: 'Cairo',
      type: 'Distributor',
      focus: 'Digital health platform with medicine delivery',
      notes: 'Extends its doctor-booking platform into pharmacy fulfilment, linking prescriptions to delivery through partner pharmacies.',
    },
    {
      name: 'Egyptian Pharmacists Syndicate',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Professional body governing pharmacy ownership and practice',
      notes: 'Influences licensing, ownership rules and chain expansion; a key stakeholder in any change to Egypt’s pharmacist-ownership model.',
    },
  ],
  categoryBlurbs: {
    local:
      'Egyptian pharmacy chains built by pharmacist families and management groups that buy centrally, run warehouses and negotiate listings directly with manufacturers.',
    mnc:
      'International pharmacy banners are largely absent from Egypt because of pharmacist-ownership rules; foreign involvement comes through private equity and technology platforms rather than store brands.',
    regional:
      'Gulf and MENA healthcare groups exploring Egyptian pharmacy retail through investment or e-pharmacy partnerships rather than direct ownership.',
    trade:
      'The state pharmacy network, the Universal Health Insurance pharmacy contracts and the digital platforms that are moving prescriptions from cash counters into insured and app-based channels.',
  },
  growthDrivers: [
    {
      title: 'Universal Health Insurance rollout',
      desc: 'As UHI expands governorate by governorate, chronic prescriptions shift into contracted pharmacies and formulary-driven dispensing, rewarding chains and platforms with insurer integration.',
    },
    {
      title: 'Chain expansion into governorates',
      desc: 'El Ezaby, Seif, Roshdy and peers are opening branches beyond Cairo and Alexandria, taking share from independents and adding central-purchasing volume that bypasses wholesalers.',
    },
    {
      title: 'E-pharmacy and delivery',
      desc: 'Chefaa, Yodawy, Vezeeta and chain apps have made delivery the default for chronic refills in large cities, shifting promotional spend and creating dispensing data that the cash market lacked.',
    },
    {
      title: 'Shortage cycles and availability',
      desc: 'Currency-driven shortages make stock availability a competitive weapon; chains with central warehouses and direct manufacturer relationships secure supply that independents cannot.',
    },
  ],
  faq: [
    {
      q: 'Can companies own pharmacy chains in Egypt?',
      a: 'Pharmacies must be owned by licensed pharmacists under EDA and syndicate rules, so chains operate through pharmacist-owned branches coordinated by family groups or management companies rather than through corporate ownership.',
    },
    {
      q: 'Which are the largest pharmacy chains in Egypt?',
      a: 'El Ezaby and Seif lead with hundreds of branches each, followed by 19011, Roshdy, Misr, El Tarshouby and Delmar, while the state-owned EgyDrug network serves public patients.',
    },
    {
      q: 'Do Egyptian chains buy from wholesalers or manufacturers?',
      a: 'The largest chains buy a significant share directly from manufacturers through central warehouses and negotiate listings at group level, while still using Ibnsina, UCP, Multipharma and Pharma Overseas for breadth and daily replenishment.',
    },
    {
      q: 'How important are online pharmacies in Egypt?',
      a: 'Increasingly important in Cairo and Alexandria, where Chefaa, Yodawy, Vezeeta and chain apps handle a growing share of OTC and chronic refills and provide insurer-linked dispensing data.',
    },
    {
      q: 'What does BioNixus study about pharmacy chains in Egypt?',
      a: 'Retail audits of availability and shelf share across chains and independents by governorate; pharmacist recommendation studies; chain buyer interviews on listing and direct-supply terms; and shopper research on delivery, app usage and brand choice.',
    },
    {
      q: 'Are chains listed in order of size?',
      a: 'No. Chains are grouped by role and appear because they recur in BioNixus Egypt retail fieldwork and on EDA licensing records; order does not reflect branch counts.',
    },
  ],
  regulatorSource: {
    name: 'Egyptian Drug Authority (EDA) — licensed pharmacies and pharmaceutical establishments',
    url: 'https://www.edaegypt.gov.eg/en/',
    asOf: '2026-09-03',
  },
  sources: [
    'Egyptian Pharmacists Syndicate pharmacy counts and ownership regulations, 2024',
    'Universal Health Insurance Authority rollout announcements, 2024–2026',
    'Company disclosures for El Ezaby, Seif and digital platforms; IQVIA Egypt consumer-health estimates, 2024',
    'BioNixus Egypt pharmacy census and shopper fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Pharmacy census and retail audits across Greater Cairo, Alexandria, Delta and Upper Egypt measuring availability, shelf share and promotional presence by chain and independent.',
    'Pharmacist recommendation studies covering OTC, derma and supplement categories by banner and governorate.',
    'Chain buyer interviews at El Ezaby, Seif, 19011 and Roshdy on listing fees, direct-supply terms and delivery economics.',
    'Shopper research on pharmacy choice, delivery usage and brand substitution during shortage periods.',
  ],
};
