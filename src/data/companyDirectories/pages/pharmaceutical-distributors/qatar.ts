import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsQatar: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'qatar',
  metaDescription:
    'Pharmaceutical distributors in Qatar: Ebn Sina Medical, Qatar Pharma, Khalid Scientific, HMC and PHCC procurement, GWC and QR Pharma cold chain — channels and MoPH rules.',
  introLead:
    'Qatar has fewer than three million residents but one of the highest per-capita medicine spends in the region, and almost all of that spend is concentrated in Hamad Medical Corporation, the Primary Health Care Corporation and a short list of licensed agents that import on their behalf.',
  introRest:
    'Medicines are registered with the Ministry of Public Health (MoPH) Pharmacy and Drug Control department through a locally licensed agent, which then imports, warehouses and supplies both the public system and the private clinics and pharmacies that serve the expatriate workforce. Because HMC and PHCC operate essentially free care for citizens and heavily subsidised care for residents, their tenders decide national volume for most therapeutic categories. The directory below sets out the public buyers, the agents that dominate imports, the local manufacturer, the pharmacy chains and the logistics groups that give Qatar its role as a Gulf cold-chain gateway.',
  stats: [
    { value: '$1bn+', label: 'Qatari pharmaceutical market, 2024 estimate' },
    { value: '~80%', label: 'Share of medicine spend flowing through HMC and PHCC' },
    { value: '~600', label: 'Licensed private pharmacies' },
    { value: '~95%', label: 'Share of medicines imported' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Qatar',
  channelBody:
    'A foreign manufacturer names a Qatari agent, the agent registers the product with MoPH and obtains a Qatar price, and from that point the agent is the sole legal importer. Public demand is procured through Hamad Medical Corporation’s supply-chain department, which buys for HMC hospitals and increasingly runs consolidated tenders with PHCC health centres and Sidra Medicine; awards are typically annual with defined delivery schedules to HMC central stores. The private channel comprises private hospitals such as Al Ahli, Al Emadi, Doha Clinic and The View, hundreds of polyclinics serving employer-sponsored workers, and retail pharmacy banners including Kulud, Wellcare and Aster, all supplied directly by agents’ own delivery fleets since there is no independent wholesale tier. Qatar Pharma in Mesaieed is the only sizeable domestic manufacturer and supplies HMC directly under local-preference rules. Cold-chain and specialty products move through GWC’s pharma-certified warehouses or through Qatar Airways Cargo’s pharma corridor at Hamad International Airport, which also serves as a regional transhipment point.',
  companies: [
    {
      name: 'Hamad Medical Corporation — Supply Chain',
      hq: 'Doha',
      type: 'Government',
      focus: 'Procurement and central stores for HMC hospitals',
      notes: 'The national reference buyer; HMC tenders and formulary decisions set volumes and prices for most hospital medicines in Qatar.',
    },
    {
      name: 'Primary Health Care Corporation (PHCC)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Medicines procurement for public health centres',
      notes: 'Operates the primary-care network and its pharmacies; a significant buyer of chronic-disease and vaccine products alongside HMC.',
    },
    {
      name: 'Ebn Sina Medical (Ali Bin Ali Holding)',
      hq: 'Doha',
      type: 'Local',
      focus: 'Pharma, consumer health and medical import agency',
      notes: 'The largest healthcare agent in the country, representing dozens of global principals across hospital tenders and retail pharmacy.',
    },
    {
      name: 'Qatar Pharma',
      hq: 'Mesaieed',
      type: 'Local',
      focus: 'Local generics and IV solutions manufacturing with direct supply',
      notes: 'Qatar’s principal domestic manufacturer; supplies HMC and PHCC directly and benefits from national-industry preference in tenders.',
    },
    {
      name: 'Khalid Scientific Company',
      hq: 'Doha',
      type: 'Local',
      focus: 'Medical equipment, consumables and hospital pharmaceuticals',
      notes: 'Long-established scientific and medical supplier to HMC and private hospitals; carries pharma-adjacent injectable and diagnostic lines.',
    },
    {
      name: 'Sidra Medicine — Pharmacy Procurement',
      hq: 'Doha',
      type: 'Government',
      focus: 'Specialist women’s and children’s hospital purchasing',
      notes: 'Qatar Foundation hospital that tenders for paediatric, rare-disease and maternity medicines, often jointly with HMC.',
    },
    {
      name: 'Kulud Pharmacy',
      hq: 'Doha',
      type: 'Retailer',
      focus: 'Retail pharmacy chain with centralised buying',
      notes: 'One of the largest domestic pharmacy banners; negotiates directly with agents and runs its own warehouse for OTC and beauty.',
    },
    {
      name: 'Wellcare Pharmacy',
      hq: 'Doha',
      type: 'Retailer',
      focus: 'Pharmacy chain in malls and residential districts',
      notes: 'Strong presence in high-footfall retail locations; a priority listing account for consumer-health and derma brands.',
    },
    {
      name: 'Aster Pharmacy Qatar',
      hq: 'Doha',
      type: 'Retailer',
      focus: 'Pharmacy chain integrated with Aster clinics',
      notes: 'Part of Aster DM Healthcare; captures a large share of expatriate prescriptions generated in the group’s own medical centres.',
    },
    {
      name: 'GWC (Gulf Warehousing Company)',
      hq: 'Doha',
      type: 'Distributor',
      focus: 'GDP-certified pharma warehousing and cold chain',
      notes: 'QSE-listed logistics group whose pharma facilities are contracted by agents and manufacturers for temperature-controlled storage.',
    },
    {
      name: 'Milaha Logistics',
      hq: 'Doha',
      type: 'Distributor',
      focus: 'Freight, customs clearance and healthcare transport',
      notes: 'Qatar Navigation subsidiary handling inbound freight and domestic distribution for several healthcare agencies.',
    },
    {
      name: 'Qatar Airways Cargo — QR Pharma',
      hq: 'Doha',
      type: 'MNC',
      focus: 'Air-cargo pharma corridor and cool-chain handling',
      notes: 'Hamad International Airport pharma hub that makes Doha a transhipment point for temperature-sensitive medicines between Europe and Asia.',
    },
    {
      name: 'DHL Global Forwarding Qatar',
      hq: 'Doha',
      type: 'MNC',
      focus: 'Temperature-controlled freight and brokerage',
      notes: 'Inbound logistics partner for multinational manufacturers shipping to Qatari agents and HMC.',
    },
  ],
  categoryBlurbs: {
    local:
      'Qatari agencies and the domestic manufacturer that register medicines, import them and supply HMC, PHCC, private hospitals and pharmacies. Every imported brand in the market sits with one of them.',
    mnc:
      'International freight and air-cargo operators moving temperature-sensitive shipments into and through Doha, supporting agents rather than selling to providers.',
    regional:
      'Gulf trading houses that fold Qatar into a multi-country agency agreement, chosen by brands that want to sequence Doha after Riyadh or Dubai under one contract.',
    trade:
      'The two public buyers, the pharmacy chains that buy centrally and the listed logistics groups that provide GDP warehousing and domestic distribution.',
  },
  growthDrivers: [
    {
      title: 'Consolidated HMC–PHCC tendering',
      desc: 'Joint tenders across HMC, PHCC and Sidra Medicine are lengthening contract terms and raising documentation requirements, favouring agents with complete registration files and reliable inbound supply.',
    },
    {
      title: 'Mandatory health insurance for expatriates',
      desc: 'The phased introduction of compulsory private insurance for non-citizens is moving prescriptions into private hospitals, polyclinics and retail pharmacies, expanding the channel that agents serve outside HMC.',
    },
    {
      title: 'Local manufacturing under the national strategy',
      desc: 'Qatar Pharma’s expansion and new fill-finish and biologics projects announced with Qatar Free Zones give domestic supply a tender advantage, prompting foreign brands to explore local packaging partnerships.',
    },
    {
      title: 'Doha as a regional cold-chain hub',
      desc: 'QR Pharma and GWC capacity has turned Hamad International Airport into a transit point for biologics and vaccines, so agents with hub-linked warehousing can serve neighbouring Gulf and East African markets.',
    },
  ],
  faq: [
    {
      q: 'Who is allowed to import pharmaceuticals into Qatar?',
      a: 'Only a Qatari-licensed pharmaceutical agent or manufacturer approved by the Ministry of Public Health. The agent registers each product and is named on the import permit, so a brand effectively chooses its Qatar importer when it chooses its agent.',
    },
    {
      q: 'How dominant is Hamad Medical Corporation as a buyer?',
      a: 'HMC, together with PHCC, accounts for roughly four-fifths of medicine spend in Qatar. For most hospital and chronic-disease molecules, an HMC award is the difference between a meaningful national presence and a marginal one.',
    },
    {
      q: 'Is there an independent wholesaler tier in Qatar?',
      a: 'No. Agents deliver directly to hospitals, clinics and pharmacies with their own vehicles or contracted logistics. Pharmacy chains such as Kulud, Wellcare and Aster buy from agents and hold stock in their own warehouses.',
    },
    {
      q: 'Where are cold-chain medicines stored in Qatar?',
      a: 'Mostly in GWC’s pharma-certified facilities and in the larger agents’ own temperature-controlled rooms, with QR Pharma at Hamad International Airport handling the air-side cool chain for inbound and transit shipments.',
    },
    {
      q: 'How does BioNixus study pharmaceutical distributors in Qatar?',
      a: 'Through interviews with HMC and PHCC pharmacists, private hospital purchasers and chain-pharmacy buyers about agent performance; HMC tender-outcome mapping; and account-level audits of formulary access and stock availability by agent.',
    },
    {
      q: 'Does inclusion here mean a distributor is recommended?',
      a: 'Inclusion reflects presence in BioNixus Qatar fieldwork and on MoPH registrations, not a recommendation or ranking; the table is organised by function and lists companies without regard to turnover.',
    },
  ],
  regulatorSource: {
    name: 'Qatar Ministry of Public Health — Pharmacy and Drug Control, licensed pharmaceutical agents and establishments',
    url: 'https://www.moph.gov.qa',
    asOf: '2026-09-03',
  },
  sources: [
    'Hamad Medical Corporation and PHCC procurement announcements, 2024–2026',
    'Qatar Stock Exchange filings for GWC and Milaha, 2024–2025',
    'Planning and Statistics Authority health statistics and IQVIA market estimates, 2024',
    'BioNixus Qatar hospital pharmacy and agency fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Agent due diligence for Qatar entry: interviews with HMC and private hospital pharmacists and with principals currently represented, scoring coverage, tender record and cold-chain assets.',
    'HMC–PHCC tender landscaping: bidders, award prices and the effect of local-manufacturing preference on recent cycles.',
    'Retail pharmacy audits across Kulud, Wellcare, Aster and independents to measure availability and shelf presence by agent.',
    'Private-insurance channel tracking: how mandatory expatriate coverage is shifting prescription volume between HMC, polyclinics and retail pharmacy.',
  ],
};
