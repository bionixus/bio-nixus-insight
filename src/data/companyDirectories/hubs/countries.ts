import type { DirectoryHubInput } from '../types';

const SHARED_FAQ = (country: string, regulators: string) => [
  {
    q: `Are these ${country} company lists rankings?`,
    a: `No. Each directory is an editorial list of the accounts BioNixus studies in ${country}, checked against public registers (${regulators}). Company type describes ownership and channel role, not size.`,
  },
  {
    q: `Can BioNixus research a specific company in ${country}?`,
    a: `Yes. BioNixus fields bilingual primary research in ${country} — prescriber, purchaser, shopper, customer and channel interviews — on named accounts. Use the proposal form and list the companies you need covered.`,
  },
  {
    q: `How current are the ${country} directories?`,
    a: 'Each page shows the register consulted and its as-of date plus a modification date in the metadata. Directories are refreshed at least annually and whenever a major ownership or licensing change is confirmed.',
  },
];

export const saudiArabiaHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Saudi Arabia company directories by industry: pharma companies and distributors, medtech, hospital groups, pharmacy chains, FMCG, retail, developers and banks.',
  intro: [
    'Saudi Arabia is the largest economy in the Gulf and the market where BioNixus fields the most work. These directories list the named accounts behind that fieldwork — the SFDA-licensed pharma agents, the hospital operators consolidating under the Health Holding Company, the pharmacy chains, the Tadawul-listed developers and banks, and the FMCG and retail groups that decide what sits on Saudi shelves.',
    'Every directory follows the same structure: 12–25 companies classified by ownership and role, the channel structure that governs how they sell, growth drivers tied to Vision 2030 programmes, and the register the list was checked against. Start here when a brief covers more than one industry in the Kingdom.',
  ],
  useCases: [
    { title: 'Vision 2030 sector briefs', desc: 'Map healthcare, real estate, retail and banking accounts in one pass when a giga-project or localisation programme touches several industries.' },
    { title: 'Tender and procurement intelligence', desc: 'Identify which distributors and operators sit behind NUPCO, Health Holding Company clusters and PIF-backed developers before a tender cycle.' },
    { title: 'Riyadh–Jeddah–Dammam coverage', desc: 'Design account-level fieldwork across the three commercial regions instead of a national average.' },
  ],
  faq: SHARED_FAQ('Saudi Arabia', 'SFDA, Tadawul, SAMA, Ministry of Commerce'),
};

export const uaeHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'uae',
  metaDescription:
    'UAE company directories by industry: pharma companies and distributors, medtech, hospital groups, pharmacy chains, FMCG, retail, developers and banks (Dubai, Abu Dhabi).',
  intro: [
    'The UAE is a two-hub market — Dubai and Abu Dhabi run separate health authorities, separate real estate registries and largely separate retail catchments — served by regional headquarters for most multinationals. These directories list the accounts BioNixus fields against across both emirates: MOHAP- and DHA/DoH-facing pharma agents, the hospital groups and pharmacy chains, DFM/ADX-listed developers and banks, and the FMCG and retail groups that run the Gulf’s most competitive shelf.',
    'Use this hub when a brief is UAE-wide; the individual directories flag where an account is emirate-specific.',
  ],
  useCases: [
    { title: 'Regional HQ decisions', desc: 'See which distributors, retailers and operators multinationals already partner with before choosing a UAE launch model.' },
    { title: 'Dubai versus Abu Dhabi design', desc: 'Split samples by emirate where regulation and customer mix differ, instead of treating the UAE as one city.' },
    { title: 'Re-export and Gulf reach', desc: 'Identify UAE-based groups that also serve Oman, Bahrain and wider MENA from Jebel Ali.' },
  ],
  faq: SHARED_FAQ('the UAE', 'MOHAP, DHA, DoH Abu Dhabi, DFM, ADX, Central Bank of the UAE'),
};

export const egyptHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'egypt',
  metaDescription:
    'Egypt company directories by industry: pharma companies and distributors, medtech, hospital groups, pharmacy chains, FMCG, retail, developers and banks (EDA and EGX).',
  intro: [
    'Egypt is BioNixus’s home fieldwork market and the largest population in MENA. Its accounts look different from the Gulf: state-owned and family manufacturers in pharma, a fragmented pharmacy trade served by a few national wholesalers, EGX-listed developers building whole new cities, and FMCG and retail groups that still sell most volume through traditional trade.',
    'These directories list the Egyptian accounts behind our Cairo-based fieldwork, each checked against the relevant register — EDA, the Egyptian Exchange, the Central Bank of Egypt — and classified by ownership and channel role.',
  ],
  useCases: [
    { title: 'Traditional-trade reach', desc: 'Find the wholesalers, distributors and pharmacy groups that actually reach Egypt’s 60,000-plus pharmacies and hundreds of thousands of grocers.' },
    { title: 'Currency and pricing studies', desc: 'Design account-level pricing and availability research with the manufacturers and retailers most exposed to devaluation cycles.' },
    { title: 'New-city and NAC planning', desc: 'Map the developers, contractors and banks behind Egypt’s new urban communities before sizing demand.' },
  ],
  faq: SHARED_FAQ('Egypt', 'EDA, EGX, Central Bank of Egypt, GAFI'),
};

export const kuwaitHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'kuwait',
  metaDescription:
    'Kuwait company directories by industry: pharma companies and distributors, medtech suppliers, hospital groups, pharmacy chains, FMCG, retail, developers and banks.',
  intro: [
    'Kuwait is a small, high-income market where a few family groups hold the agencies for most imported brands and the Ministry of Health remains the dominant healthcare buyer. These directories list the accounts BioNixus fields against in Kuwait — the MOH-registered pharma agents and medical suppliers, the private hospital operators, the co-operative society and pharmacy chains, the Boursa Kuwait-listed banks and developers, and the FMCG and retail groups that serve a six-governorate market.',
    'Kuwait rewards precise account lists: the buyer universe is short, so one missed agency or co-op can distort a study.',
  ],
  useCases: [
    { title: 'Agency mapping', desc: 'See which family group holds which brand before approaching a Kuwaiti partner.' },
    { title: 'Co-operative retail', desc: 'Design shopper and shelf work around Kuwait’s co-operative societies rather than imported hypermarket assumptions.' },
    { title: 'MOH tender exposure', desc: 'Identify the suppliers and operators most exposed to Ministry of Health procurement cycles.' },
  ],
  faq: SHARED_FAQ('Kuwait', 'Kuwait MOH, Boursa Kuwait, Central Bank of Kuwait'),
};

export const qatarHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'qatar',
  metaDescription:
    'Qatar company directories by industry: pharma companies and distributors, medtech suppliers, hospital groups, pharmacy chains, FMCG, retail, developers and banks in Doha.',
  intro: [
    'Qatar is a compact, state-anchored market: Hamad Medical Corporation dominates healthcare provision, a few licensed agents import most medicines and devices, Qatar Stock Exchange-listed groups dominate banking and property, and grocery runs through a public-facing retailer (Al Meera) alongside international hypermarkets.',
    'These directories list the Doha accounts BioNixus fields against, classified by ownership and channel role and checked against MOPH, QSE and Qatar Central Bank registers.',
  ],
  useCases: [
    { title: 'State-buyer briefs', desc: 'Map the agents and operators that sit behind HMC, PHCC and government tenders before a launch.' },
    { title: 'Post-World Cup demand', desc: 'Separate durable hospitality, retail and property demand from event-driven capacity when sizing.' },
    { title: 'Small-market precision', desc: 'Use complete account lists so a study of Qatar is not two interviews wide.' },
  ],
  faq: SHARED_FAQ('Qatar', 'MOPH, Qatar Stock Exchange, Qatar Central Bank'),
};

export const omanHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'oman',
  metaDescription:
    'Oman company directories by industry: pharma companies and distributors, medtech suppliers, hospital groups, pharmacy chains, FMCG, retail, developers and banks.',
  intro: [
    'Oman is a geographically long market with a Muscat-centred private sector and a Ministry of Health network that serves most of the population. A handful of Omani trading groups hold pharma and device agencies, private hospital groups are expanding under Vision 2040 health programmes, and MSX-listed banks and developers finance the diversification agenda.',
    'These directories list the Omani accounts BioNixus fields against and the registers each was checked against — MOH Oman, the Muscat Stock Exchange and the Central Bank of Oman.',
  ],
  useCases: [
    { title: 'Muscat and beyond', desc: 'Design fieldwork that reaches Salalah, Sohar and Nizwa accounts, not only the capital area.' },
    { title: 'Agency partner selection', desc: 'Compare the trading groups that hold healthcare and consumer agencies before committing.' },
    { title: 'Vision 2040 programmes', desc: 'Identify the operators, developers and banks attached to Oman’s diversification projects.' },
  ],
  faq: SHARED_FAQ('Oman', 'MOH Oman, Muscat Stock Exchange, Central Bank of Oman'),
};

export const bahrainHub: DirectoryHubInput = {
  kind: 'country',
  countrySlug: 'bahrain',
  metaDescription:
    'Bahrain company directories by industry: pharma companies and distributors, medtech suppliers, hospital groups, pharmacy chains, FMCG, retail, developers and banks.',
  intro: [
    'Bahrain is the smallest GCC market but one of the most open: the NHRA licenses healthcare products and providers, the Central Bank of Bahrain regulates the Gulf’s densest banking sector, and Bahrain Bourse lists the developers and retailers behind Manama’s reclamation projects. Many accounts are shared with Saudi Arabia’s Eastern Province via the causeway.',
    'These directories list the Bahraini accounts BioNixus fields against, classified by ownership and role and checked against the NHRA, CBB and Bahrain Bourse registers.',
  ],
  useCases: [
    { title: 'Causeway catchments', desc: 'Account for Saudi weekend shoppers and patients when designing Bahrain retail and healthcare studies.' },
    { title: 'Financial-sector density', desc: 'Map retail, Islamic and wholesale banks in a market with more licences than any Gulf neighbour.' },
    { title: 'Complete small-market lists', desc: 'Use the full account universe so Bahrain findings are not extrapolated from three interviews.' },
  ],
  faq: SHARED_FAQ('Bahrain', 'NHRA, Central Bank of Bahrain, Bahrain Bourse'),
};
