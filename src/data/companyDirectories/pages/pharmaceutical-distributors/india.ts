import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsIndia: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'india',
  metaDescription:
    'Pharmaceutical distributors in India: Entero, TNMSC, HLL, MedPlus, Jan Aushadhi, CGHS and CDSCO — state buyers, listed wholesalers, manufacturer fleets.',
  introLead:
    'India’s medicine path is a three-track system: a listed consolidator such as Entero Healthcare buying up regional depots, state medical corporations and Jan Aushadhi stores buying for the public, and manufacturer fleets from Cipla and Sun still running their own vans beside the appointed stockist.',
  introRest:
    'The Central Drugs Standard Control Organisation licenses manufacturers, importers and wholesale establishments; state drug controllers inspect the godowns that actually invoice pharmacies. Tamil Nadu Medical Services Corporation pioneered pooled public buying and remains the template other states copy. HLL Lifecare supplies devices and selected medicines into the same public spine. CGHS and ESI hospitals purchase on their own indent cycles. Pradhan Mantri Bhartiya Janaushadhi Pariyojana, run by PMBI, has turned generic retail into a government-backed channel that sits next to private chemists rather than replacing them. MedPlus is both a chemist banner and a wholesaler, which is why a launch plan that files it only under retail will miss the depot conversation. Super Religare’s old wholesale book and the still-busy Masjid Bunder and Bhagirath Palace clusters remain the cash-and-carry layer for smaller chemists in Mumbai and Delhi. Alliance Healthcare’s India presence, where it still holds principals, is a Cencora-linked specialty and pre-wholesale option rather than a national chemist van. BioNixus maps who invoices, who tenders, who owns the last mile and who is only a 3PL before a brand treats “India distribution” as one appointment.',
  stats: [
    { value: '28+', label: 'State and union-territory medical corporations or equivalent public buyers' },
    { value: '10,000+', label: 'Jan Aushadhi Kendras under PMBI, a parallel generic retail spine' },
    { value: 'Entero', label: 'NSE-listed consolidator buying regional wholesale books' },
    { value: 'Two fleets', label: 'Appointed stockists plus Cipla and Sun in-house vans on the same chemist' },
  ],
  channelHeading: 'State tenders, listed wholesalers and manufacturer vans on one chemist',
  channelBody:
    'A foreign principal usually registers through a local affiliate or importer, then appoints CFA warehouses and stockists by state rather than one exclusive national agent. Those stockists invoice tens of thousands of retail chemists on credit; margins are thin and competition is about fill rates, bounce cheques and how fast a short-dated SKU comes back. Entero and a handful of listed or private consolidators have been buying those books, which changes who a brand negotiates with in Pune versus Coimbatore. Public volume is a different desk: TNMSC, Karnataka’s KMSCL, Rajasthan Medical Services Corporation and their peers run e-tenders, hold buffer stock and feed district warehouses. HLL Lifecare sits on devices, contraceptives and selected hospital lines that never touch a private chemist. CGHS dispensaries in Delhi, NCR and other cities indent on a central rate contract that is not a state corporation tender. Jan Aushadhi stores buy through PMBI, so a generic house can win a chemist and still lose the government generic aisle. MedPlus warehouses supply its own stores and, in some cities, neighbouring independents — treat that overlap as a fact, not a footnote. Mumbai’s Masjid Bunder and Delhi’s Bhagirath Palace still move cash lots to small chemists that never open a principal’s portal. Cold chain for vaccines and biologics concentrates in Bhiwandi, Hyderabad, Bengaluru and the NCR, with 3PLs filling the lanes the manufacturer fleet will not run daily. Name the state, the buyer type and whether the SKU is chemist, Jan Aushadhi or hospital — a single “national distributor” slide is how Indian coverage gaps get hidden.',
  companies: [
    {
      name: 'Entero Healthcare Solutions',
      hq: 'Mumbai / Navi Mumbai',
      type: 'Local',
      focus: 'Listed consolidator of regional pharmaceutical wholesale books',
      notes: 'NSE-visible buyer of state-level depot networks; the negotiation counterpart is increasingly a group CFO, not a family stockist in each city.',
    },
    {
      name: 'Tamil Nadu Medical Services Corporation (TNMSC)',
      hq: 'Chennai',
      type: 'Government',
      focus: 'Pooled tendering and warehouse feed for Tamil Nadu public facilities',
      notes: 'The original state medical corporation model; award prices and delivery SLAs here still get copied by other state buyers across India.',
    },
    {
      name: 'HLL Lifecare',
      hq: 'Thiruvananthapuram',
      type: 'Government',
      focus: 'Public-sector devices, contraceptives and selected hospital medicines',
      notes: 'A PSU that is not a chemist wholesaler; hospital and programme volume moves on HLL contracts that private stockists never see.',
    },
    {
      name: 'MedPlus Health Services',
      hq: 'Hyderabad',
      type: 'Retailer',
      focus: 'Chemist banner with its own wholesale and warehouse spine',
      notes: 'Honest overlap: stores buy internally, yet some city depots still invoice independents, so a brand must split retail listing from wholesale terms.',
    },
    {
      name: 'Central Drugs Standard Control Organisation (CDSCO)',
      hq: 'New Delhi',
      type: 'Government',
      focus: 'Central licensing of manufacturers, importers and selected wholesale classes',
      notes: 'Not a buyer. The register and the state drug-controller inspections are the compliance gate every depot and CFA must clear.',
    },
    {
      name: 'Central Government Health Scheme (CGHS)',
      hq: 'New Delhi',
      type: 'Government',
      focus: 'Rate-contract buying for CGHS wellness centres and empaneled hospitals',
      notes: 'A federal indent cycle distinct from state corporations; Delhi and NCR volume here does not predict what TNMSC will award.',
    },
    {
      name: 'PMBI / Jan Aushadhi (PMBJP)',
      hq: 'New Delhi',
      type: 'Government',
      focus: 'Generic retail kendras and central supply for government-branded medicines',
      notes: 'More than ten thousand kendras create a second retail door for generics; winning a private chemist does not win this aisle.',
    },
    {
      name: 'Super Religare / legacy Religare wholesale book',
      hq: 'Delhi NCR',
      type: 'Distributor',
      focus: 'Historic national wholesale name still referenced in NCR chemist credit',
      notes: 'The brand has been restructured, yet older chemists still describe the book; map the successor depot, not the letterhead, before you brief a launch.',
    },
    {
      name: 'Mumbai Masjid Bunder wholesale cluster',
      hq: 'Mumbai',
      type: 'Distributor',
      focus: 'Cash wholesale to independent chemists across the island and Thane',
      notes: 'The physical market that still restocks small stores a CFA van misses; treat it as a channel, not as one company you can appoint.',
    },
    {
      name: 'Delhi Bhagirath Palace wholesale cluster',
      hq: 'Old Delhi',
      type: 'Distributor',
      focus: 'North India cash wholesale for chemists and small hospitals',
      notes: 'The NCR counterpart to Masjid Bunder; hospital and chemist buyers still walk the lanes when a stockist is short.',
    },
    {
      name: 'Cipla in-house distribution',
      hq: 'Mumbai',
      type: 'Local',
      focus: 'Manufacturer-owned CFA and field fleet alongside appointed stockists',
      notes: 'A brand team that only interviews stockists will miss the Cipla van that already calls the same chemist three times a week.',
    },
    {
      name: 'Sun Pharma in-house distribution',
      hq: 'Mumbai',
      type: 'Local',
      focus: 'Manufacturer-owned coverage for chronic and hospital lines',
      notes: 'Same dual-fleet fact as Cipla: principal vans and stockists share the chemist, and credit terms can differ by SKU family.',
    },
    {
      name: 'Alliance Healthcare India (Cencora-linked)',
      hq: 'Mumbai',
      type: 'MNC',
      focus: 'Specialty, pre-wholesale and selected principal logistics',
      notes: 'Not a mass chemist van. Use it when the brief is biologics, imported specialty or a principal that already sits on the Cencora network.',
    },
    {
      name: 'Karnataka Medical Supplies Corporation (KMSCL)',
      hq: 'Bengaluru',
      type: 'Government',
      focus: 'State tenders and district warehouse feed for Karnataka',
      notes: 'A second-state check against TNMSC: award lists, delayed payments and substitution rules are not interchangeable with Tamil Nadu.',
    },
    {
      name: 'Employees’ State Insurance (ESI) medical stores',
      hq: 'New Delhi',
      type: 'Government',
      focus: 'Institutional buying for ESI hospitals and dispensaries',
      notes: 'Another federal buyer beside CGHS; industrial-belt cities can show ESI volume that a chemist census will never record.',
    },
    {
      name: 'TCI Supply Chain / GDP 3PL lanes',
      hq: 'Gurugram',
      type: 'Distributor',
      focus: 'Temperature-controlled warehousing and inter-state pharma freight',
      notes: 'A logistics layer, not an importer of record; manufacturers use it when their own CFA cannot hold validated cold rooms in a new state.',
    },
  ],
  categoryBlurbs: {
    local:
      'Entero, MedPlus’s depot arm, Cipla and Sun fleets, and the Mumbai–Delhi wholesale clusters: Indian books that invoice chemists on credit or cash and still decide whether a SKU is on the shelf by Friday.',
    mnc:
      'Alliance Healthcare’s Cencora-linked specialty and pre-wholesale work, plus international 3PLs. They store and move; they rarely own the chemist relationship in Tier-2 towns.',
    regional:
      'South Asian trading houses that treat India as one spoke beside Bangladesh or Sri Lanka, usually on consumer-health and OTC rather than reimbursed chronic packs.',
    trade:
      'TNMSC, KMSCL, HLL, CGHS, ESI and Jan Aushadhi / PMBI: the public buyers and generic retail spine that a private-stockist map will systematically under-count.',
  },
  growthDrivers: [
    {
      title: 'Listed wholesale consolidation',
      desc: 'Entero and peers buying family depot books change credit, IT and principal negotiations from a city conversation into a group conversation. Coverage maps that still name only the old proprietor will be stale within a year.',
    },
    {
      title: 'Jan Aushadhi as a second generic door',
      desc: 'PMBI kendras keep adding outlets in district towns. A generic manufacturer now needs a chemist plan and a government-generic plan, and the two price architectures do not match.',
    },
    {
      title: 'State corporation e-tenders',
      desc: 'TNMSC-style buyers in more states mean public volume is won on portal awards and warehouse SLAs, not on a Delhi scientific-office lunch. Delayed payment cycles are part of the bid math.',
    },
    {
      title: 'Manufacturer fleets that never retired',
      desc: 'Cipla and Sun still run vans beside stockists. Digital order apps sit on top of that dual call, which is why a “leave it to the distributor” brief under-measures who actually writes the order.',
    },
  ],
  faq: [
    {
      q: 'Does a foreign manufacturer appoint one exclusive Indian wholesaler?',
      a: 'Almost never. Registration sits with CDSCO and a local affiliate; physical stock moves through CFAs and state stockists, plus the manufacturer’s own fleet on many chronic lines. Exclusive agency is a Gulf habit, not an Indian one.',
    },
    {
      q: 'Who buys medicines for Indian public hospitals?',
      a: 'State medical corporations such as TNMSC and KMSCL run the large e-tenders. CGHS and ESI indent on federal rate contracts. HLL Lifecare handles selected devices and programme lines. District warehouses, not chemist vans, complete those orders.',
    },
    {
      q: 'Why is MedPlus on a distributor list as well as a chemist list?',
      a: 'Because its warehouses supply its own stores and, in several cities, neighbouring independents. Filing it only as retail hides a wholesale negotiation that still moves units.',
    },
    {
      q: 'What is Jan Aushadhi’s role versus a private chemist?',
      a: 'PMBI-run kendras sell government-branded generics at administered prices. They sit on high streets next to private chemists and pull a share of out-of-pocket chronic volume that stockists do not invoice.',
    },
    {
      q: 'What does BioNixus field on Indian pharmaceutical distribution?',
      a: 'State-by-state stockist and CFA mapping, chemist purchase-record cuts in Mumbai, Delhi, Hyderabad, Chennai and two Tier-2 cities, tender landscaping at TNMSC and one other corporation, and a MedPlus-versus-independent split on a named chronic basket.',
    },
    {
      q: 'Does table order reflect turnover?',
      a: 'No. Names are grouped by function — consolidator, state buyer, chemist-wholesaler, manufacturer fleet, cash market, 3PL — because those are the desks a launch team actually calls.',
    },
  ],
  regulatorSource: {
    name: 'Central Drugs Standard Control Organisation (CDSCO) — licensed manufacturers, importers and wholesale establishments',
    url: 'https://cdsco.gov.in',
    asOf: '2026-09-05',
  },
  sources: [
    'CDSCO establishment and import licensing notices, 2024–2026',
    'TNMSC, KMSCL and PMBI tender and outlet disclosures; CGHS rate-contract circulars, 2024–2026',
    'Entero Healthcare and MedPlus exchange filings and investor presentations, 2024–2025',
    'BioNixus India chemist, stockist and public-buyer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Chemist invoice audits in six cities splitting share among Entero-booked depots, independent stockists, MedPlus warehouses and manufacturer vans on a defined chronic and OTC basket.',
    'TNMSC and KMSCL tender reconstruction: bidders, award prices, fill-rate complaints and how substitution rules change the SKU that actually lands in a district warehouse.',
    'Jan Aushadhi versus private-chemist price and availability checks in the same catchment, including whether the kendra stock matches the PMBI list.',
    'CFA and 3PL walk-throughs in Bhiwandi, Hyderabad and NCR on validated cold rooms versus ambient godowns that principals still use for tablets.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
