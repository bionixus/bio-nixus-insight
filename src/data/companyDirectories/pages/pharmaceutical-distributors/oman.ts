import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsOman: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'oman',
  metaDescription:
    'Pharmaceutical distributors in Oman: Muscat Pharmacy, Ibn Sina, Mazoon, Scientific Pharmacy, Al Hashar, KR Healthcare and MOH central stores — channels and licensing.',
  introLead:
    'Oman’s pharmaceutical trade is unusual in the Gulf because its largest distributors are also its largest pharmacy chains: family groups that hold import agencies for foreign brands, run wholesale depots and operate hundreds of retail counters under the same name.',
  introRest:
    'The Ministry of Health registers medicines through its Directorate General of Pharmaceutical Affairs and Drug Control, and a locally licensed drug store must act as agent and importer. Public supply is centralised in the Directorate General of Medical Supplies in Muscat, which also participates in Gulf Health Council joint tenders, while private demand is met through the integrated pharmacy groups, private hospitals such as Badr Al Samaa and Aster Al Raffah, and two domestic manufacturers with local-preference status. The directory below lists the public buyer, the agent-chains, the manufacturers and the logistics groups, grouped so that a brand team can see which company plays which role along Oman’s long, thinly populated distribution routes.',
  stats: [
    { value: '$900m+', label: 'Omani pharmaceutical market, 2024 estimate' },
    { value: '~1,000', label: 'Licensed private pharmacies' },
    { value: '~70%', label: 'Share of medicine spend funded publicly (MOH, SQU, Royal Oman Police, PDO)' },
    { value: '2', label: 'Domestic manufacturers supplying MOH tenders directly (OPP, NPI)' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Oman',
  channelBody:
    'An imported medicine enters Oman through the drug store named as agent on its MOH registration; that agent clears customs at Sohar, Muscat or Salalah and holds stock in its own warehouse. The public channel, which still funds most treatment, runs through the Directorate General of Medical Supplies, which issues annual tenders for MOH hospitals and health centres and receives deliveries at its central stores before onward distribution to governorates. Oman also buys selected products through the Gulf Health Council joint procurement programme, so some volumes are negotiated at GCC level and delivered through the agent. In the private channel the same agents sell to Badr Al Samaa, Aster Al Raffah, KIMS, Starcare and other private hospitals and to the roughly 1,000 pharmacies, a large share of which they own themselves under the Muscat Pharmacy, Ibn Sina, Mazoon, Scientific and Al Hashar banners. Oman Pharmaceutical Products and National Pharmaceutical Industries supply generics and IV fluids to MOH tenders directly and enjoy local-industry preference. Geography matters: covering Salalah, Sur, Nizwa and the interior requires regional depots, so distribution cost per pack is higher than in neighbouring Gulf states.',
  companies: [
    {
      name: 'MOH Directorate General of Medical Supplies (DGMS)',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Central procurement and warehousing for Ministry of Health facilities',
      notes: 'Principal public buyer; its annual tenders and central stores determine supply for hospitals and health centres across all governorates.',
    },
    {
      name: 'Gulf Health Council — Joint Procurement',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'GCC-level pooled tenders in which Oman participates',
      notes: 'Regional programme that negotiates selected vaccines and medicines for member states; awards are executed through the Omani agent.',
    },
    {
      name: 'Muscat Pharmacy & Stores',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Largest integrated agent, wholesaler and pharmacy chain',
      notes: 'Represents a wide list of global principals and operates the biggest retail network in the country, giving it unmatched pharmacy reach.',
    },
    {
      name: 'Ibn Sina Pharmacy',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Import agency with national pharmacy chain',
      notes: 'Long-established group combining agency, wholesale and retail; a first-call partner for OTC and consumer-health launches.',
    },
    {
      name: 'Mazoon Pharmacy',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Pharma agency, distribution and retail pharmacies',
      notes: 'Family group with strong interior and northern-region coverage, valued for reach beyond Muscat.',
    },
    {
      name: 'Scientific Pharmacy',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Pharma and medical import agency with retail outlets',
      notes: 'Agent for several European and Asian manufacturers; active in both MOH tenders and private hospital supply.',
    },
    {
      name: 'Al Hashar Pharmacy',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Agency, wholesale and pharmacy chain',
      notes: 'Part of the Al Hashar group; combines brand representation with a retail footprint concentrated in Muscat and Batinah.',
    },
    {
      name: 'Khimji Ramdas Healthcare',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Pharma, devices and consumer-health distribution',
      notes: 'Healthcare arm of one of Oman’s largest conglomerates; brings FMCG-style logistics and trade marketing to pharmacy distribution.',
    },
    {
      name: 'Oman Pharmaceutical Products (OPP)',
      hq: 'Salalah',
      type: 'Local',
      focus: 'Local generics manufacturing with direct tender supply',
      notes: 'Salalah-based manufacturer supplying MOH and exporting to the GCC; benefits from national-product preference in tenders.',
    },
    {
      name: 'National Pharmaceutical Industries (NPI)',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Generics and IV solutions manufacturer',
      notes: 'Rusayl-based producer that supplies hospitals directly and partners with foreign brands for local packaging.',
    },
    {
      name: 'Aster Pharmacy Oman',
      hq: 'Muscat',
      type: 'Retailer',
      focus: 'Pharmacy chain linked to Aster Al Raffah hospitals and clinics',
      notes: 'Captures prescriptions generated inside the group’s own facilities; buys centrally from agents.',
    },
    {
      name: 'Asyad Group (Logistics)',
      hq: 'Muscat',
      type: 'Government',
      focus: 'National logistics, ports and warehousing platform',
      notes: 'State-owned logistics group whose ports and free-zone warehousing underpin inbound pharma flows at Sohar and Salalah.',
    },
    {
      name: 'DHL Global Forwarding Oman',
      hq: 'Muscat',
      type: 'MNC',
      focus: 'Temperature-controlled freight and customs brokerage',
      notes: 'Inbound cold-chain partner for multinational manufacturers shipping to Omani agents.',
    },
    {
      name: 'Oman Air Cargo — Pharma',
      hq: 'Muscat',
      type: 'MNC',
      focus: 'Air-side cool-chain handling at Muscat International',
      notes: 'National carrier’s pharma product used for time-critical biologics and vaccine shipments into the Sultanate.',
    },
  ],
  categoryBlurbs: {
    local:
      'Omani drug stores that hold import agencies, run wholesale depots and, in most cases, own pharmacy chains. Their integration means a brand’s agent choice also decides its retail shelf presence.',
    mnc:
      'International freight and air-cargo providers that move temperature-sensitive product into Muscat, Sohar and Salalah for the agents and manufacturers.',
    regional:
      'GCC-level procurement and Gulf trading groups that fold Oman into multi-country agreements, relevant for vaccines and for brands sequencing entry across the peninsula.',
    trade:
      'The public buyer, the domestic manufacturers with tender preference, the provider-linked pharmacy chains and the state logistics platform that together define access to Omani patients.',
  },
  growthDrivers: [
    {
      title: 'Dhamani mandatory health insurance',
      desc: 'The phased Dhamani scheme obliges private employers to insure expatriate workers, moving prescriptions from out-of-pocket purchases into insured private hospitals and pharmacies and enlarging the channel served by agents outside MOH.',
    },
    {
      title: 'Local manufacturing and Vision 2040 localisation',
      desc: 'OPP, NPI and new investments in Duqm and Salalah are expanding domestic production. Tender preference for national products pushes foreign brands toward local packaging or toll-manufacturing partnerships.',
    },
    {
      title: 'Consolidation of agent-chains',
      desc: 'The integrated groups keep adding pharmacies and warehouse capacity, so listing negotiations with Muscat Pharmacy, Ibn Sina or Mazoon increasingly cover retail promotion as well as import terms.',
    },
    {
      title: 'Logistics build-out under Asyad',
      desc: 'Investment in Sohar and Salalah ports, free-zone cold storage and road links to Saudi Arabia is lowering inbound costs and positioning Oman as a secondary entry point for GCC-bound pharma.',
    },
  ],
  faq: [
    {
      q: 'Does a foreign pharmaceutical company need an Omani agent?',
      a: 'Yes. Registration with the Ministry of Health must be filed by a locally licensed drug store, which becomes the importer of record. The agent relationship is therefore inseparable from the product’s regulatory status in Oman.',
    },
    {
      q: 'Why do Omani distributors also own pharmacy chains?',
      a: 'Historically the same family groups obtained both import licences and pharmacy licences, and the small population made vertical integration the only way to reach scale. As a result, agency, wholesale and retail decisions in Oman are often made by the same management team.',
    },
    {
      q: 'How does Oman buy medicines for public hospitals?',
      a: 'Through the Directorate General of Medical Supplies, which runs annual MOH tenders and receives stock at central stores in Muscat, and through participation in Gulf Health Council joint procurement for selected products.',
    },
    {
      q: 'Which private hospitals are the key accounts for distributors in Oman?',
      a: 'Badr Al Samaa, Aster Al Raffah, KIMS Oman, Starcare and Burjeel Muscat operate most of the private beds and negotiate directly with agents, with their in-house pharmacies increasingly influencing brand choice for insured patients.',
    },
    {
      q: 'What does BioNixus research about pharmaceutical distribution in Oman?',
      a: 'Agent evaluation combining interviews with MOH pharmacists, private hospital purchasers and pharmacy managers; DGMS tender-outcome mapping; retail audits across the integrated chains to measure availability and shelf presence; and insured-channel tracking as Dhamani expands.',
    },
    {
      q: 'Are the companies here listed by market share?',
      a: 'They are not. The directory groups organisations by role and lists those that recur in BioNixus fieldwork across Oman, verified against MOH agent registrations; position does not indicate scale.',
    },
  ],
  regulatorSource: {
    name: 'Oman Ministry of Health — Directorate General of Pharmaceutical Affairs and Drug Control, licensed drug stores and agents',
    url: 'https://www.moh.gov.om',
    asOf: '2026-09-03',
  },
  sources: [
    'Directorate General of Medical Supplies tender notices and Oman Tender Board awards, 2024–2026',
    'National Centre for Statistics and Information health statistics, 2024',
    'Gulf Health Council joint procurement announcements, 2024–2025',
    'BioNixus Oman hospital pharmacy and pharmacy chain fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Agent shortlisting for Omani entry: interviews with MOH and private hospital pharmacists, chain-pharmacy category managers and current principals to score coverage, tender record and retail integration.',
    'DGMS tender landscaping: bidders, award prices, local-preference effects and delivery-performance feedback from central stores.',
    'Retail availability audits across Muscat Pharmacy, Ibn Sina, Mazoon, Scientific and Al Hashar outlets in Muscat, Batinah and Dhofar.',
    'Dhamani insurance channel tracking: how mandatory coverage is redistributing prescription volume between MOH facilities and private providers.',
  ],
};
