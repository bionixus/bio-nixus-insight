import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsTurkey: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'turkey',
  metaDescription:
    'Pharmaceutical distributors in Turkey: Selçuk Ecza, Hedef Alliance, Nevzat, As Ecza, Bahar, pharmacist cooperatives, SGK and DMO — TİTCK licensing and channel structure.',
  introLead:
    'Turkey moves more medicine packs than any other market between Western Europe and India, and nearly all of it passes through a small set of national ecza depoları, the licensed wholesalers that deliver several times a day to 28,000 pharmacist-owned pharmacies and hold the payer-mandated stock that the reimbursement system depends on.',
  introRest:
    'The Turkish Medicines and Medical Devices Agency (TİTCK) licenses manufacturers, importers and wholesalers, while the Social Security Institution (SGK) reimburses the vast majority of prescriptions through its pharmacy protocol and sets the reference prices that define margins along the chain. Hospitals belonging to the Ministry of Health buy through the Public Hospitals General Directorate and the state procurement office DMO, and private hospital groups such as Acıbadem, Medical Park and Memorial purchase directly from manufacturers and wholesalers. This directory covers the national and regional wholesalers, the pharmacist cooperatives, the public buyers and payer, and the logistics providers that constitute pharmaceutical distribution in Turkey, organised by the role each plays.',
  stats: [
    { value: '$9bn+', label: 'Turkish pharmaceutical market by value, 2024 estimate' },
    { value: '~28,000', label: 'Pharmacist-owned community pharmacies' },
    { value: '~90%', label: 'Share of prescriptions reimbursed by SGK' },
    { value: '5', label: 'National wholesalers handling most private-channel volume' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Turkey',
  channelBody:
    'Manufacturers and importers licensed by TİTCK sell almost exclusively to wholesalers, because Turkish law prohibits pharmacy chains and pharmacies are too numerous and fragmented to serve directly. Selçuk Ecza Deposu and Hedef Alliance are the two national leaders, followed by Nevzat, As Ecza and Bahar, and together these five carry most of the private-channel volume through dozens of regional depots that deliver to pharmacies two or three times a day. Pharmacist cooperatives such as EDAK in the Aegean, BEK in Bursa and the members of the TEKB union hold a meaningful share in their regions and negotiate collectively with manufacturers. Pharmacies dispense under the SGK pharmacy protocol, which reimburses at reference prices and imposes fixed retail margins, so wholesalers compete on delivery speed, credit terms and IT integration with pharmacy software rather than on price. The public channel is separate: Ministry of Health hospitals buy through tenders run by the Public Hospitals General Directorate and via DMO framework contracts, and university and private hospitals tender or negotiate directly. Cold-chain biologics, oncology and specialty products are increasingly handled through dedicated wholesaler units or 3PLs such as Ekol Logistics, and the İTS track-and-trace system requires every pack to be serialised and scanned at each step from manufacturer to pharmacy.',
  companies: [
    {
      name: 'Selçuk Ecza Deposu',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Largest national pharmaceutical wholesaler',
      notes: 'Borsa Istanbul-listed market leader with more than 100 branches and daily coverage of nearly every pharmacy in the country.',
    },
    {
      name: 'Hedef Alliance (Alliance Healthcare Türkiye)',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'National wholesale within the Alliance Healthcare / Cencora network',
      notes: 'The only foreign-owned national wholesaler; brings international pre-wholesale and specialty logistics practices to the Turkish channel.',
    },
    {
      name: 'Nevzat Ecza Deposu',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'National wholesale with strong Marmara and Aegean coverage',
      notes: 'Family-owned wholesaler ranking among the top three by pharmacy reach; a frequent second wholesaler in launch plans.',
    },
    {
      name: 'As Ecza Deposu',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'National wholesaler with growing hospital and specialty business',
      notes: 'Expanded rapidly over the past decade through regional depots and hospital tenders; often chosen for oncology and biologics lines.',
    },
    {
      name: 'Bahar Ecza Deposu',
      hq: 'Ankara',
      type: 'Local',
      focus: 'National wholesaler rooted in Central Anatolia',
      notes: 'Ankara-based operator with dense coverage of Anatolian pharmacies and public hospital supply relationships.',
    },
    {
      name: 'EDAK (Ege Eczacılar Kooperatifi)',
      hq: 'İzmir',
      type: 'Local',
      focus: 'Pharmacist cooperative wholesale for the Aegean region',
      notes: 'One of the largest pharmacist cooperatives, distributing to member pharmacies across İzmir and neighbouring provinces.',
    },
    {
      name: 'BEK (Bursa Eczacılar Kooperatifi)',
      hq: 'Bursa',
      type: 'Local',
      focus: 'Cooperative wholesale for Bursa and the southern Marmara',
      notes: 'Regional cooperative that negotiates collectively with manufacturers on behalf of member pharmacies.',
    },
    {
      name: 'TEKB (Tüm Eczacı Kooperatifleri Birliği)',
      hq: 'Ankara',
      type: 'Local',
      focus: 'Union of pharmacist cooperatives with joint purchasing',
      notes: 'Umbrella body coordinating cooperative wholesalers nationally; relevant when a brand negotiates cooperative listing terms.',
    },
    {
      name: 'Sosyal Güvenlik Kurumu (SGK)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'National payer reimbursing prescriptions through the pharmacy protocol',
      notes: 'Reimbursement list inclusion and reference pricing by SGK determine whether a product moves through the retail channel at scale.',
    },
    {
      name: 'Devlet Malzeme Ofisi (DMO)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'State procurement office for public institutions',
      notes: 'Runs framework contracts and catalogue purchasing used by Ministry of Health hospitals for medicines and consumables.',
    },
    {
      name: 'Public Hospitals General Directorate — Procurement',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Tendering for Ministry of Health hospitals and city hospitals',
      notes: 'Centralises hospital purchasing for the public network, including the large PPP city hospitals that anchor tertiary demand.',
    },
    {
      name: 'Acıbadem Healthcare Group — Central Purchasing',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Private hospital group procurement',
      notes: 'Largest private hospital operator; buys directly from manufacturers and wholesalers and sets private-formulary benchmarks.',
    },
    {
      name: 'Ekol Logistics (Healthcare)',
      hq: 'Istanbul',
      type: 'Distributor',
      focus: 'GDP-compliant warehousing, cold chain and pre-wholesale',
      notes: 'Turkish 3PL with dedicated pharma facilities used by multinationals before stock is released to wholesalers.',
    },
    {
      name: 'DHL Supply Chain Türkiye (Life Sciences)',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Pharma warehousing, serialisation and temperature-controlled transport',
      notes: 'International 3PL handling importer-of-record logistics and İTS serialisation for foreign manufacturers.',
    },
    {
      name: 'Abdi İbrahim',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Largest domestic manufacturer supplying the wholesale channel',
      notes: 'Reference case for how Turkish producers manage wholesaler allocation, cooperative terms and hospital tenders simultaneously.',
    },
  ],
  categoryBlurbs: {
    local:
      'Turkish-owned national and regional wholesalers plus pharmacist cooperatives licensed by TİTCK to buy from manufacturers and deliver to pharmacies and hospitals multiple times a day.',
    mnc:
      'Foreign-owned wholesale and logistics operators, led by Hedef Alliance and international 3PLs, that bring pre-wholesale, serialisation and cold-chain services to the Turkish market.',
    regional:
      'Cross-border groups using Turkey as a manufacturing and re-export base for the Caucasus, Central Asia and the Middle East, often pairing Turkish wholesalers with export logistics.',
    trade:
      'The national payer, the state procurement bodies and the private hospital operators whose reimbursement rules, tenders and formularies decide what the wholesalers actually move.',
  },
  growthDrivers: [
    {
      title: 'Reference pricing and currency adjustments',
      desc: 'The euro-linked reference price used by SGK is updated periodically against the lira, and each adjustment changes wholesaler margins and stock valuations, making inventory timing a competitive lever.',
    },
    {
      title: 'City hospitals and public tender scale',
      desc: 'The PPP city hospital programme has concentrated tertiary demand into very large tenders run through the Public Hospitals General Directorate and DMO, favouring wholesalers with hospital logistics and tender desks.',
    },
    {
      title: 'Local production incentives',
      desc: 'Localisation policies tie reimbursement and tender advantages to domestic manufacturing, prompting multinationals to license or contract-manufacture with Turkish producers and altering which products wholesalers prioritise.',
    },
    {
      title: 'Serialisation and specialty logistics',
      desc: 'The İTS track-and-trace system and growth in biologics and oncology are pushing wholesalers and 3PLs to invest in serialisation, cold rooms and direct-to-hospital specialty channels.',
    },
  ],
  faq: [
    {
      q: 'Can pharmaceutical companies sell directly to pharmacies in Turkey?',
      a: 'In practice no. With around 28,000 independent pharmacies and no chains, manufacturers and importers rely on licensed ecza depoları and cooperatives for retail distribution, though they sell directly to hospitals through tenders.',
    },
    {
      q: 'Which wholesalers dominate Turkish pharmaceutical distribution?',
      a: 'Selçuk Ecza Deposu and Hedef Alliance lead nationally, with Nevzat, As Ecza and Bahar completing the group of five national wholesalers that handle most private-channel volume, alongside regional pharmacist cooperatives.',
    },
    {
      q: 'How does SGK affect distribution?',
      a: 'SGK reimburses roughly nine in ten prescriptions at reference prices and fixes retail margins through the pharmacy protocol. Inclusion on its reimbursement list is therefore the precondition for volume, and its price updates directly reshape wholesaler economics.',
    },
    {
      q: 'What role do pharmacist cooperatives play?',
      a: 'Cooperatives such as EDAK and BEK, coordinated through TEKB, act as regional wholesalers owned by their member pharmacists. They hold significant share in the Aegean, Marmara and southern regions and negotiate collectively with manufacturers.',
    },
    {
      q: 'What does BioNixus research about pharmaceutical distributors in Turkey?',
      a: 'Wholesaler service benchmarking from pharmacist interviews across Istanbul, Ankara, İzmir and Anatolian provinces; share-of-wholesaler estimates from pharmacy purchase records; public and private hospital tender mapping; and cold-chain and specialty-channel readiness studies for biologics launches.',
    },
    {
      q: 'Does the order of this list reflect wholesaler size?',
      a: 'No. Organisations are grouped by role and appear because they recur in BioNixus fieldwork in Turkey and on TİTCK licensing records; position within the table does not indicate revenue.',
    },
  ],
  regulatorSource: {
    name: 'Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) — licensed pharmaceutical wholesalers (ecza depoları) register',
    url: 'https://www.titck.gov.tr',
    asOf: '2026-09-03',
  },
  sources: [
    'Borsa Istanbul filings and annual reports for Selçuk Ecza Deposu, 2024–2025',
    'Association of Research-Based Pharmaceutical Companies (AİFD) and İEİS market reports, 2024',
    'Sosyal Güvenlik Kurumu reimbursement statistics and Public Hospitals General Directorate tender notices, 2024–2026',
    'BioNixus Turkey pharmacy, hospital and wholesaler fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Wholesaler service benchmarking: 60–100 pharmacist interviews across Istanbul, Ankara, İzmir, Bursa, Antalya and eastern provinces rating delivery frequency, credit days, IT integration and stock-out handling by depot.',
    'Share-of-wholesaler estimates by region from pharmacy purchase-record audits of defined chronic, OTC and specialty baskets.',
    'Public hospital and city hospital tender landscaping: bidders, award prices and wholesaler participation across recent cycles.',
    'Specialty and cold-chain channel studies for oncology and biologics, covering wholesaler capabilities, 3PL use and direct-to-hospital models.',
  ],
};
