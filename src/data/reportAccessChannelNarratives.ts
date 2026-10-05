export type ReportAccessChannelNarrative = {
  sectionId: string;
  title: string;
  paragraphs: string[];
};

export const REPORT_ACCESS_CHANNEL_NARRATIVES: Record<string, ReportAccessChannelNarrative> = {
  india: {
    sectionId: 'procurement-channels',
    title: 'India medical devices market — CDSCO pathways, public procurement, and private hospital adoption',
    paragraphs: [
      'India’s medical device market is regulated under the Medical Devices Rules 2017 (CDSCO), with risk-based classification aligned to IMDRF principles. Importers and domestic manufacturers must obtain manufacturing or import licences, maintain ISO 13485 quality systems, and — for notified devices — comply with labelling, vigilance, and post-market surveillance obligations. The Production Linked Incentive (PLI) scheme and Medical Device Parks are accelerating domestic manufacturing of consumables, implants, and diagnostics, which is reshaping both price competition and hospital tender specifications.',
      'Public procurement remains a major volume channel: central and state government hospitals, AIIMS networks, and Ayushman Bharat–linked facilities run centralised tenders with emphasis on lowest qualified bid, local content preferences, and GST-inclusive pricing. Private hospital chains (Apollo, Fortis, Max, Narayana) operate faster adoption cycles for premium implants and robotics but still negotiate with group purchasing organisations and distributor networks. A commercial plan that treats “India” as a single average price point will mis-size opportunity between a high-volume government tender and a premium private cath-lab upgrade.',
      'Pricing pressure is structural: NPPA has historically capped prices on select devices and stents, and hospital committees increasingly demand total cost-of-care evidence for capital equipment. For GCC and MENA manufacturers evaluating Indian partners or competitive entry, BioNixus maps institution-level adoption, distributor coverage, and CDSCO registration timelines alongside comparative India versus GCC procurement logic — see our India healthcare market report and GCC medical devices market report for linked sizing.',
      'Field research in India typically combines hospital procurement interviews, cardiologist or surgeon panels in tier-1 cities, and distributor audits in Mumbai, Delhi NCR, Bengaluru, and Hyderabad. Programs are designed with GDPR-aligned governance for multinational sponsors and documented respondent verification suitable for medical affairs review.',
      'BioNixus also supports Indian manufacturers and multinationals comparing India tender economics with GCC NUPCO or MOHAP pathways when planning dual-region launches — contact the team for a scoped proposal rather than relying on desk extrapolation.',
      'Therapy-specific device studies (cardiology, orthopaedics, imaging, IVD) should name the institution tier (government medical college hospital vs corporate chain) in the brief so sample design matches where purchasing authority sits.',
      'Export-oriented Indian OEMs increasingly bundle service networks and spare-part availability into Gulf tenders — a positioning theme BioNixus tests in paired India and UAE procurement interviews.',
    ],
  },
  singapore: {
    sectionId: 'procurement-channels',
    title: 'Singapore medical devices market — HSA registration, cluster procurement, and ASEAN hub economics',
    paragraphs: [
      'Singapore’s Health Sciences Authority (HSA) oversees medical device registration under the Health Products Act, with ASEAN Medical Device Directive harmonisation through the ASEAN CSDT dossier for many product classes. Singapore is an Access Consortium member alongside Australia, Canada, and others, enabling abridged review for eligible devices — a strategic reason multinationals base regional regulatory teams here. Premium pricing is achievable in private hospitals and specialist centres, while restructured public clusters (SingHealth, NHG, NUHS) run disciplined value-based procurement with pharmacoeconomic scrutiny for high-cost implants and capital equipment.',
      'Logistics and re-export make Singapore a distribution hub for Southeast Asia even when end-patient volumes are modest relative to Indonesia or Vietnam. Device companies often win Singapore first for HSA approval and regional customer support, then scale into Malaysia, Thailand, and Indonesia with distributor-led models. Medical tourism (orthopaedics, cardiology, oncology) supports uptake of premium brands in private settings; public sector adoption tracks Ministry of Health guidance and cluster formulary decisions.',
      'For IVD and diagnostics — a growing query cluster in search — HSA classification and LDT governance matter alongside hospital laboratory consolidation. BioNixus supports Singapore and ASEAN device teams with HSA pathway intelligence, cluster procurement research, specialist KOL mapping, and comparative Singapore versus GCC private-hospital economics for sponsors planning dual-hub strategies (Dubai + Singapore).',
      'Primary research combines interviews with cluster procurement, private hospital pharmacy and cath-lab committees, and regional distributor heads. Outputs are structured for launch, tender defence, and ASEAN roll-up planning rather than desk-based market sizing alone.',
      'Singapore IVD and point-of-care entrants should map laboratory consolidation and LDT policy alongside HSA device registration — see our MedTech Singapore blog and healthcare market research hub for linked methodology.',
      'Capital equipment cycles (MRI, cath labs, robotic surgery) often require 12–18 month committee evaluation; disposable pull-through should be modelled separately from the initial tender win.',
    ],
  },
  brazil: {
    sectionId: 'sus-ans-channels',
    title: 'Brazil healthcare market — SUS incorporation, ANS private insurance, and CMED pricing in practice',
    paragraphs: [
      'Brazil’s dual-channel system defines every access strategy. SUS (Sistema Único de Saúde) provides constitutionally guaranteed care funded by federal, state, and municipal budgets; innovative medicines and devices typically require CONITEC health technology assessment, PCDT protocol alignment, and budget-impact negotiation before national or state incorporation. The ANS-regulated supplementary insurance sector covers roughly 50 million lives with a mandated Rol de Procedimentos that expanded in 2022 to include additional oncology, biologic, and gene therapies — creating a high-value private hospital channel (Albert Einstein, Sírio-Libanês, BP, Mater Dei) with pricing closer to international benchmarks.',
      'CMED sets maximum factory (PCFAR) and consumer (PMC) prices for pharmaceuticals; reference pricing references selected international markets. ANVISA registration timelines (12–36 months depending on track) gate all commercial activity. Medical device companies face ANVISA plus INMETRO requirements for electrified equipment, and SUS procurement favours tenders with local representation and service networks.',
      'BioNixus helps Brazilian and Latin American sponsors compare SUS versus ANS prioritisation, map CONITEC evidence expectations, and — for groups expanding to GCC — translate Brazil tender discipline into NUPCO and MOHAP access planning. This narrative complements the KPI and epidemiology blocks above for teams sizing Brazil as a standalone market or as a LatAm hub paired with Middle East entry.',
    ],
  },
};
