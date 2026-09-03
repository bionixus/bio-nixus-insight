import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsSaudiArabia: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Pharmaceutical distributors in Saudi Arabia: NUPCO, Cigalah, Banaja, Tamer, Salehiya and cold-chain 3PLs — channel structure, SFDA licensing, tender routes.',
  introLead:
    'Saudi Arabia moves medicines through two very different pipes: a single government buyer (NUPCO) that tenders for Ministry of Health and most public hospitals, and a handful of family-owned import agents that hold the exclusive SFDA marketing authorisation for foreign brands and sell them into private hospitals and the 10,000-plus community pharmacies.',
  introRest:
    'The directory below lists the distributors, agents and logistics partners a pharma or consumer-health brand actually deals with in the Kingdom. It is organised the way a market-entry or channel-audit brief is organised: who holds the licence, who physically ships, who invoices which channel, and where the public and private routes diverge. Company classification reflects ownership and role, not turnover.',
  stats: [
    { value: '$11bn+', label: 'Saudi pharmaceutical market, 2024 estimate' },
    { value: '~60%', label: 'Share of drug spend routed through public procurement' },
    { value: '10,000+', label: 'Licensed community pharmacies' },
    { value: '1', label: 'Central public buyer for MOH tenders (NUPCO)' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Saudi Arabia',
  channelBody:
    'A foreign manufacturer cannot sell directly in the Kingdom. It appoints a Saudi agent, and that agent registers the product with the SFDA, holds the import licence and becomes the legal marketing authorisation holder. For the public channel the agent bids into NUPCO tenders and then delivers to NUPCO warehouses or directly to hospital stores. For the private channel the same agent sells to private hospital groups, to the two national pharmacy chains (Nahdi and Al-Dawaa) that together control roughly a third of retail counters, and to independent pharmacies through regional wholesale depots. Cold-chain biologics increasingly move through specialised 3PLs that the agent subcontracts. Local manufacturers such as SPIMACO, Jamjoom and Tabuk run their own sales forces but still rely on the same wholesale depots for pharmacy reach outside Riyadh, Jeddah and Dammam.',
  companies: [
    {
      name: 'NUPCO (National Unified Procurement Company)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Central procurement and warehousing for MOH and government hospitals',
      notes: 'PIF-owned single buyer for public tenders; also operates national distribution centres and the Wasfaty e-prescription supply chain.',
    },
    {
      name: 'Cigalah Group',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Pharma, consumer health and medical import agency',
      notes: 'One of the largest family-owned agents; represents multiple global pharma and OTC brands with nationwide pharmacy coverage.',
    },
    {
      name: 'Banaja Holdings',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Ethical pharma, OTC and hospital supply distribution',
      notes: 'Long-standing agent for European and US innovators; strong western-region and private-hospital reach.',
    },
    {
      name: 'Tamer Group',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Pharma, consumer health, beauty and logistics',
      notes: 'Diversified agent with its own 3PL arm; a benchmark account for anyone launching an OTC or derma brand.',
    },
    {
      name: 'Salehiya Medical',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Specialty pharma, biologics and hospital tenders',
      notes: 'Riyadh-based agent with heavy exposure to NUPCO and tertiary hospitals; frequent partner for oncology and rare-disease launches.',
    },
    {
      name: 'Abdulrehman Algosaibi GTC',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Pharma and medical supplies import agency',
      notes: 'Eastern-province rooted trading group with a dedicated healthcare division serving hospitals and retail pharmacy.',
    },
    {
      name: 'Alhaya Medical Company',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Pharma, nutrition and consumer health distribution',
      notes: 'Mid-sized agent often chosen by second-wave entrants that want a focused portfolio rather than a mega-distributor.',
    },
    {
      name: 'MEDISERV (Medical Supplies & Services Co.)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Hospital pharmaceuticals, devices and consumables',
      notes: 'Tender-driven supplier to MOH, military and university hospitals; useful comparator for hospital-only brands.',
    },
    {
      name: 'Gulf Medical Company',
      hq: 'Jeddah',
      type: 'Regional',
      focus: 'Pharma and medical import agency across the GCC',
      notes: 'Operates in several Gulf markets; relevant when a brand wants one regional agent rather than country-by-country appointments.',
    },
    {
      name: 'Abdulla Fouad Health Services',
      hq: 'Dammam',
      type: 'Local',
      focus: 'Pharma, diagnostics and hospital solutions',
      notes: 'Eastern-province distributor with Aramco-area hospital relationships; strong in diagnostics and specialty lines.',
    },
    {
      name: 'Bait Al Batterjee Medical',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Hospital and pharmacy supply linked to the Saudi German Hospitals group',
      notes: 'Captive-plus-third-party distribution; a reminder that provider groups also act as wholesalers in the Kingdom.',
    },
    {
      name: 'Arabian Health Care Supply Company (AHCS)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Pharma and medical products for tenders and private hospitals',
      notes: 'Tender specialist with warehousing in Riyadh and Jeddah; often sub-distributes for larger agents.',
    },
    {
      name: 'Al Amin Medical Instruments',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Medical devices and pharma-adjacent hospital supply',
      notes: 'Device-led distributor that frequently carries injectable and consumable lines alongside equipment.',
    },
    {
      name: 'Al Faisaliah Medical Systems',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Medical equipment, IVD and hospital pharmacy automation',
      notes: 'Part of Al Faisaliah Group; sets the standard for service-backed distribution in imaging and lab.',
    },
    {
      name: 'DHL Supply Chain Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'GDP-compliant pharma 3PL and cold chain',
      notes: 'Runs dedicated life-sciences warehouses; the usual subcontractor when an agent lacks validated cold storage.',
    },
    {
      name: 'Almajdouie Logistics',
      hq: 'Dammam',
      type: 'Distributor',
      focus: 'Healthcare 3PL, customs clearance and temperature-controlled transport',
      notes: 'Saudi logistics group with a healthcare vertical; frequent partner for port-to-warehouse movement of biologics.',
    },
    {
      name: 'Naqel Express',
      hq: 'Riyadh',
      type: 'Distributor',
      focus: 'Last-mile pharmacy and e-pharmacy delivery',
      notes: 'Carrier behind much of the pharmacy-to-patient delivery growth since Wasfaty and e-commerce pharmacies scaled.',
    },
  ],
  categoryBlurbs: {
    local:
      'Saudi-owned agents that hold SFDA marketing authorisations for foreign brands and own the customer relationship with hospitals and pharmacies. Almost every launch in the Kingdom passes through one of them.',
    mnc:
      'Global logistics operators that provide GDP-compliant warehousing and cold chain but do not hold product licences. They are subcontracted by agents rather than appointed by manufacturers.',
    regional:
      'Gulf-wide trading groups able to represent a brand in Saudi Arabia and neighbouring markets under one contract, trading depth of coverage for simplicity.',
    trade:
      'The public buyer, provider-linked wholesalers and specialist 3PL and last-mile carriers that physically move product from port to hospital store or pharmacy shelf.',
  },
  growthDrivers: [
    {
      title: 'NUPCO centralisation and the Health Holding Company clusters',
      desc: 'As MOH hospitals move into regional health clusters under the Health Holding Company, NUPCO tender volumes and delivery specifications keep changing. Agents with tender desks and buffer stock win; those relying on hospital-by-hospital selling lose share.',
    },
    {
      title: 'Localisation targets under Vision 2030',
      desc: 'The SFDA and Ministry of Industry favour locally manufactured or locally packaged products in tenders. Distributors are forming contract-packaging and toll-manufacturing ventures so their principals qualify for local-content preference.',
    },
    {
      title: 'Pharmacy consolidation and e-pharmacy',
      desc: 'Nahdi and Al-Dawaa negotiate directly with agents and increasingly bypass regional wholesalers. Wasfaty e-prescriptions and pharmacy delivery apps have made last-mile capability part of the distributor pitch.',
    },
    {
      title: 'Cold-chain biologics and specialty',
      desc: 'Oncology, immunology and GLP-1 volumes are pushing agents to validate cold rooms and reefers or to subcontract to DHL, Almajdouie and similar 3PLs, changing the margin structure of distribution.',
    },
  ],
  faq: [
    {
      q: 'Can a foreign pharmaceutical company sell directly in Saudi Arabia?',
      a: 'Not in practice. Imported medicines must be registered with the SFDA by a licensed Saudi establishment that acts as the marketing authorisation holder and importer. Foreign companies may open a scientific office to promote products, but the commercial and regulatory chain runs through an appointed Saudi agent or distributor.',
    },
    {
      q: 'Who is the largest pharmaceutical buyer in Saudi Arabia?',
      a: 'NUPCO, the National Unified Procurement Company, which centralises purchasing for the Ministry of Health and most government hospital systems. Winning or losing a NUPCO tender can move a brand’s national volume more than any private-sector account.',
    },
    {
      q: 'How do distributors reach community pharmacies outside the big cities?',
      a: 'Through regional wholesale depots in Riyadh, Jeddah and Dammam and, increasingly, through the chains’ own distribution centres. Nahdi and Al-Dawaa self-distribute to their stores; independents are served by agents’ regional branches or by sub-wholesalers.',
    },
    {
      q: 'Do Saudi distributors handle cold-chain biologics?',
      a: 'The large agents do, either through validated in-house cold rooms or by subcontracting to GDP-certified 3PLs such as DHL Supply Chain and Almajdouie. Smaller agents typically rely entirely on 3PL partners for temperature-controlled lines.',
    },
    {
      q: 'What does BioNixus study about pharmaceutical distributors in Saudi Arabia?',
      a: 'Distributor due-diligence interviews with hospital pharmacists and purchasers, share-of-wholesaler estimates by pharmacy region, service-level benchmarking (fill rate, delivery frequency, credit terms) and tender-outcome tracking. Fieldwork is bilingual and account-level, so the output names the accounts rather than averaging the market.',
    },
    {
      q: 'Is this list a ranking of the best distributors?',
      a: 'No. It is an editorial directory of the distributors, agents and logistics partners BioNixus encounters most often in Saudi fieldwork, checked against the SFDA establishment register. Order and inclusion do not indicate size or quality.',
    },
  ],
  regulatorSource: {
    name: 'Saudi Food and Drug Authority (SFDA) — licensed drug establishments and importers register',
    url: 'https://www.sfda.gov.sa/en/drugs-establishments',
    asOf: '2026-09-03',
  },
  sources: [
    'NUPCO corporate disclosures and tender portal (nupco.com), 2025–2026',
    'General Authority for Statistics (GaStat) health facility counts and SFDA pharmacy licensing statistics, 2024–2025',
    'IQVIA and company annual reports for Saudi market-size estimates, 2024',
    'BioNixus Saudi hospital and retail pharmacy fieldwork, 2024–2026',
  ],
  fieldNotes: [
    'Distributor due diligence: 20–40 interviews with hospital purchasers and pharmacy owners on service levels, credit terms and delivery reliability by agent.',
    'Share-of-wholesaler estimates by region (Central, Western, Eastern) for a defined basket of SKUs, from pharmacy purchase-record audits.',
    'NUPCO tender landscaping: which agents bid, at what price bands, and how award patterns shifted after cluster reorganisation.',
    'Cold-chain readiness audits for biologics launches, covering validated storage, reefer capacity and last-mile handling.',
  ],
};
