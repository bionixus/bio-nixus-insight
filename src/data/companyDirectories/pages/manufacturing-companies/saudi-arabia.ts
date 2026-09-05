import type { DirectoryPageInput } from '../../types';

export const manufacturingCompaniesSaudiArabia: DirectoryPageInput = {
  entity: 'manufacturing-companies',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Saudi manufacturers: SABIC, Maaden, Tasnee, Advanced Petrochemical, Sadara — RCJY and MODON cities, Jubail and Yanbu offtakers.',
  introLead:
    'A polyethylene tonne leaving Jubail and a phosphate tonne leaving Ras Al Khair do not share a buying centre: SABIC or Sadara may own the cracker conversation, Ma’aden owns the mine-to-plant conversation, and RCJY stamps the industrial-city licence both still need.',
  introRest:
    'SABIC remains the first petrochemical name BioNixus hears from offtakers who want a Kingdom molecule rather than an import invoice. Ma’aden takes mining and downstream metals. Tasnee (National Industrialization) and Advanced Petrochemical take the listed petrochemical slice that sits beside SABIC rather than inside it. Sadara is the Jubail joint-venture complex that a cracker brief cannot skip. The Royal Commission for Jubail and Yanbu and MODON are the industrial-city landlords. This directory maps those plants and the two city desks. It is not a list of every workshop on the Second Industrial City fence.',
  stats: [
    { value: 'Jubail / Yanbu / Ras Al Khair', label: 'Three industrial theatres a principal must name before sampling a single “Kingdom plant”' },
    { value: 'SABIC molecule', label: 'Petrochemical conversation offtakers still start with, even when Tasnee or Sadara wins the tonne' },
    { value: 'RCJY licence', label: 'Royal Commission industrial-city stamp that Jubail and Yanbu plants still hang beside the commercial register' },
    { value: 'Ma’aden chain', label: 'Mine-to-plant book that a cracker questionnaire will not explain' },
  ],
  channelHeading: 'How an RCJY or MODON plot becomes a tonne at the offtaker',
  channelBody:
    'A plant’s commercial register sits with the Ministry of Commerce. The industrial licence sits with the Ministry of Industry and Mineral Resources. The plot stamp in Jubail or Yanbu sits with the Royal Commission for Jubail and Yanbu; many other cities sit with MODON. Those three papers do not replace each other. Feedstock then splits. SABIC, Sadara and the listed petrochemicals take hydrocarbons from Saudi Aramco-linked systems. Ma’aden takes ore and phosphate from its own mines. Offtake is a named buyer — a converter in the same city, an export vessel at King Fahd Industrial Port, or a giga contractor buying steel and chemicals. Labour camps and Saudization quotas are a Ministry of Human Resources conversation that a European plant tour never mentions. BioNixus therefore designs a Saudi manufacturing study around the city stamp, the named feedstock and the offtaker, not around a single “industrial GDP” cell.',
  companies: [
    {
      name: 'SABIC',
      hq: 'Riyadh / Jubail',
      type: 'Local',
      focus: 'Petrochemicals, polymers and selected specialties',
      notes: 'The molecule conversation offtakers still start with; a Tasnee or Sadara win is a different plant tour, not a SABIC footnote.',
    },
    {
      name: "Ma'aden (Saudi Arabian Mining Company)",
      hq: 'Riyadh / Ras Al Khair',
      type: 'Local',
      focus: 'Phosphate, aluminium, gold and downstream metals',
      notes: 'Mine-to-plant book; a Jubail cracker questionnaire will mis-read this P&L. Walk Ras Al Khair.',
    },
    {
      name: 'Tasnee (National Industrialization Company)',
      hq: 'Riyadh / Jubail',
      type: 'Local',
      focus: 'Listed petrochemicals and industrial investments',
      notes: 'The SABIC-adjacent listed book; do not collapse it into a SABIC affiliate slide.',
    },
    {
      name: 'Advanced Petrochemical Company',
      hq: 'Jubail',
      type: 'Local',
      focus: 'Listed propylene and polypropylene',
      notes: 'Jubail specialist that converters already quote beside SABIC grades; sample it when the brief is PP, not all molecules.',
    },
    {
      name: 'Sadara Chemical Company',
      hq: 'Jubail',
      type: 'Local',
      focus: 'Jubail joint-venture cracker and derivatives',
      notes: 'Aramco-Dow complex a cracker brief cannot skip; the offtaker meeting is on site, not in a Riyadh brand office.',
    },
    {
      name: 'Royal Commission for Jubail and Yanbu (RCJY)',
      hq: 'Jubail / Yanbu',
      type: 'Government',
      focus: 'Industrial-city landlord, licences and utilities',
      notes: 'The plot stamp Jubail and Yanbu plants hang; MODON is a different landlord on other cities.',
    },
    {
      name: 'MODON (Saudi Authority for Industrial Cities and Technology Zones)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Industrial-city landlord outside the RCJY pair',
      notes: 'Second city desk; a Riyadh Second Industrial City plant does not report to Jubail’s commission.',
    },
    {
      name: 'Saudi Aramco chemicals offtake / feedstock',
      hq: 'Dhahran / Jubail',
      type: 'Operator',
      focus: 'Feedstock and selected downstream chemicals',
      notes: 'The molecule upstream of SABIC and Sadara; interview the feedstock desk when the brief is why a cracker ran short.',
    },
    {
      name: 'Sipchem',
      hq: 'Khobar / Jubail',
      type: 'Local',
      focus: 'Listed methanol and intermediates',
      notes: 'Eastern listed book converters already know; useful as a third petrochemical name after SABIC and Tasnee.',
    },
    {
      name: 'Yansab (Yanbu National Petrochemical)',
      hq: 'Yanbu',
      type: 'Local',
      focus: 'Yanbu SABIC-affiliated complex',
      notes: 'Western-coast SABIC-affiliated plant tour; a Jubail-only sample will under-cover this Yanbu theatre.',
    },
    {
      name: 'Saudi Iron & Steel (Hadeed)',
      hq: 'Jubail',
      type: 'Local',
      focus: 'Long and flat steel for construction and industry',
      notes: 'The steel offtaker giga contractors already call first; this is not a polymer conversation.',
    },
    {
      name: 'National Industrial Clusters / other MODON tenants',
      hq: 'Riyadh / multiple cities',
      type: 'Local',
      focus: 'Mid-size converters and cluster plants',
      notes: 'The long tail a SABIC-only study will miss; sample when the brief is conversion, not the cracker.',
    },
    {
      name: 'Ministry of Industry and Mineral Resources',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Industrial licences sitting beside city stamps',
      notes: 'The industrial-licence desk in Riyadh; RCJY and MODON plot stamps do not replace this paper.',
    },
    {
      name: 'King Fahd Industrial Port (Jubail) community',
      hq: 'Jubail',
      type: 'Operator',
      focus: 'Export quay for Jubail tonnes',
      notes: 'The vessel conversation; a Riyadh HQ interview will not see the berth.',
    },
  ],
  categoryBlurbs: {
    local:
      'SABIC, Ma’aden, Tasnee, Advanced, Sadara, Sipchem, Yansab and Hadeed — Kingdom plants that still own molecules, mines and steel the import invoice cannot replace.',
    mnc:
      'Sadara’s Dow parentage is the foreign joint-venture fact on this map. Other MNC converters appear as offtakers, not as the cracker.',
    regional:
      'Gulf converters buy Kingdom tonnes. They are offtakers on this page, not manufacturers replacing SABIC.',
    trade:
      'RCJY and MODON as city landlords, the Ministry of Industry as the licence desk, Aramco as feedstock, and King Fahd Industrial Port as the export quay.',
  },
  growthDrivers: [
    {
      title: 'Two city landlords',
      desc: 'RCJY and MODON do not share a plot stamp. A study that only walks Jubail will under-cover Riyadh and other MODON cities.',
    },
    {
      title: 'Mine-to-plant beside cracker',
      desc: 'Ma’aden’s Ras Al Khair book is not a SABIC grade conversation. Mixing those plant tours invents a single “Kingdom industry” buyer.',
    },
    {
      title: 'Giga contractors as steel and chemical offtake',
      desc: 'Hadeed and selected chemicals now sell into destination packages. A converter-only sample will miss that buyer.',
    },
    {
      title: 'Listed petrochemicals beside SABIC',
      desc: 'Tasnee, Advanced and Sipchem take real tonnes. A SABIC-only slide will under-read the Jubail conversation converters actually have.',
    },
  ],
  sections: [
    {
      heading: 'Cracker theatre versus mine theatre',
      paragraphs: [
        'Jubail and Yanbu sell molecules. Ras Al Khair sells phosphate and aluminium. MODON cities sell conversion. Walk those theatres on different days so the offtake stories stay honest. A blended “Saudi manufacturing quality” score will not survive a procurement review at a converter or a giga contractor.',
        'Feedstock desks at Aramco and the port community at King Fahd Industrial Port are two more seats. Skipping them is how a brief explains a short tonne with a marketing story.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences industrial plants in Saudi Arabia?',
      a: 'The Ministry of Industry and Mineral Resources issues the industrial licence. RCJY or MODON stamps the plot. The commercial register is a third paper.',
    },
    {
      q: 'Is Tasnee the same as SABIC?',
      a: 'No. Tasnee is National Industrialization, a listed petrochemical and industrial book. Do not collapse it into a SABIC affiliate slide.',
    },
    {
      q: 'Which plants should a polymer brief tour first?',
      a: 'SABIC and Sadara in Jubail, Advanced for PP, then Yansab if the offtaker is western-coast. Add Tasnee and Sipchem as listed alternatives.',
    },
    {
      q: 'Which plants should a metals brief tour first?',
      a: 'Ma’aden at Ras Al Khair and Hadeed at Jubail. Skip the cracker sample unless chemicals are also in scope.',
    },
    {
      q: 'How does BioNixus research Saudi manufacturers?',
      a: 'Jubail and Yanbu plant tours; Ras Al Khair mine-to-plant walks; procurement interviews with converters and giga contractors; and RCJY versus MODON licence checks.',
    },
    {
      q: 'Does the table rank plants by Kingdom tonnes?',
      a: 'Rows mark plants we tour, city landlords we interview, or the licence desk. Sequence is an account map of plants and city stamps, not a tonnage table.',
    },
  ],
  regulatorSource: {
    name: 'Royal Commission for Jubail and Yanbu (RCJY) — industrial-city landlord, licences and utilities',
    url: 'https://www.rcjy.gov.sa',
    asOf: '2026-09-05',
  },
  sources: [
    'RCJY and MODON industrial-city guidance, consulted 2026',
    'SABIC, Ma’aden, Tasnee, Advanced Petrochemical and Sadara operations and exchange pages',
    'Ministry of Industry and Mineral Resources industrial-licence overview',
    'BioNixus Kingdom plant tours, converter procurement and city-landlord interviews, 2023–2026',
  ],
  fieldNotes: [
    'Jubail plant tours that keep SABIC, Sadara and Advanced on separate days so offtake stories do not blend.',
    'Ras Al Khair walks with Ma’aden that start at the mine gate, not at a Riyadh HQ slide.',
    'RCJY versus MODON licence checks against the stamp the plant manager actually hangs.',
    'Giga-contractor procurement interviews on Hadeed and chemical tonnes that converters never see.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
