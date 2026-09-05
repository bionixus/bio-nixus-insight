import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsIndonesia: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'indonesia',
  metaDescription:
    'Pharmaceutical distributors in Indonesia: Enseval, Millennium Pharmacon, Tempo Scan Pacific, Kimia Farma, BPOM and BPJS Kesehatan — PBF books, JKN, island coverage.',
  introLead:
    'Indonesia’s medicine path is an island-and-JKN story: Enseval, Millennium Pharmacon International and Tempo Scan Pacific still invoice most private apotek, Kimia Farma is both factory and state-linked PBF, and BPJS Kesehatan decides which pack a JKN patient will actually be dispensed.',
  introRest:
    'BPOM licenses manufacturers, importers and pedagang besar farmasi (PBF). A house without a current PBF licence is not a legal wholesaler, which is the first filter on this list. Enseval (Kalbe group) is the private book most principals still put first. MPI is the second listed PBF. Tempo Scan Pacific blurs manufacturing, distribution and retail. Kimia Farma’s distribution arm feeds its own apotek and selected public doors. JKN — the national health-insurance system run by BPJS Kesehatan — has pulled a large share of volume into e-catalogue and hospital formulary logic that a private PBF appointment does not automatically win. Outer-island coverage (Makassar, Medan, Balikpapan, Kupang) is where even Enseval branches thin and regional PBF or Kimia Farma outlets take the drop. BioNixus names the PBF, the BPJS door and the island, because a Jakarta apotek listing will not predict a Palembang hospital e-catalogue win.',
  stats: [
    { value: 'PBF', label: 'Licensed wholesaler class — the only legal private invoice path' },
    { value: 'Enseval + MPI', label: 'Two listed private books that still dominate apotek drops' },
    { value: 'JKN / BPJS', label: 'Insurance logic that steers hospital and puskesmas packs' },
    { value: 'Islands', label: 'Makassar, Medan and eastern depots as the coverage test' },
  ],
  channelHeading: 'PBF invoices, Kimia Farma doors and BPJS e-catalogue',
  channelBody:
    'A multinational affiliate or a local industrial (Kalbe, Dexa, Soho, Sanbe) sells to Enseval, MPI, Tempo Scan’s distribution arm and a tail of regional PBF. Those houses deliver to independent apotek, small banners and private hospitals on credit that follows Indonesian banking rates. Kimia Farma’s PBF and its apotek chain are a state-linked loop: factory, warehouse, store. JKN patients are dispensed against BPJS rules and e-catalogue prices; hospital pharmacy departments in Jakarta, Surabaya and Bandung buy on that logic, and puskesmas follow district health-office contracts. BPOM serialization and batch rules sit on the invoice. Cold chain for vaccines and biologics concentrates in Jakarta, Surabaya and Medan, with 3PLs used for eastern islands when a PBF will not hold a validated room. Write the island cluster, the PBF and whether the outlet is JKN-facing. A “national Indonesian distributor” without those three is a Java study.',
  companies: [
    {
      name: 'Enseval Putera Megatrading',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Largest private PBF, Kalbe-linked, apotek and hospital coverage',
      notes: 'The first book on most launch shortlists. Branch fill rate in Sulawesi and Nusa Tenggara is the question a Jakarta HQ slide will not answer.',
    },
    {
      name: 'Millennium Pharmacon International (MPI)',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Listed private PBF and second national book',
      notes: 'The dual-PBF name beside Enseval. Apotek credit terms and hospital tender support are different teams inside the same listing.',
    },
    {
      name: 'Tempo Scan Pacific (distribution)',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Manufacturer-distributor with consumer-health and selected Rx',
      notes: 'Factory plus PBF plus retail adjacency. A wholesaler-only sample will miss Tempo vans on consumer-health lines that never need Enseval.',
    },
    {
      name: 'Kimia Farma distribution and apotek',
      hq: 'Jakarta',
      type: 'Government',
      focus: 'State-linked PBF and chemist banner',
      notes: 'The SOE loop. Public-adjacent and own-store volume moves here; treating Kimia Farma only as a factory hides the warehouse door.',
    },
    {
      name: 'BPOM (Badan POM)',
      hq: 'Jakarta',
      type: 'Government',
      focus: 'Licensing of manufacturers, importers and PBF establishments',
      notes: 'The register. A PBF number that has lapsed is not a legal invoice path, regardless of the commercial relationship.',
    },
    {
      name: 'BPJS Kesehatan',
      hq: 'Jakarta',
      type: 'Government',
      focus: 'JKN reimbursement and e-catalogue demand steering',
      notes: 'Not a wholesaler. Formulary and e-catalogue rules decide which pack a JKN hospital will order from whichever PBF won the inbound.',
    },
    {
      name: 'LKPP e-catalogue / hospital pharmacy departments',
      hq: 'Jakarta / hospital seats',
      type: 'Government',
      focus: 'Public e-purchasing for hospital and puskesmas packs',
      notes: 'The public buying door. A private PBF appointment does not place a SKU on e-catalogue; that is a separate manufacturer filing.',
    },
    {
      name: 'Kalbe Farma in-house adjacency',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Manufacturer fleet that still shares streets with Enseval',
      notes: 'Kalbe owns Enseval and still runs factory-adjacent coverage. Map which SKU travels on which invoice or you will double-count the group.',
    },
    {
      name: 'Regional PBF — Medan and Makassar houses',
      hq: 'Medan / Makassar',
      type: 'Distributor',
      focus: 'Sumatra and Sulawesi wholesale where national branches thin',
      notes: 'The island test. National PBF branches exist; fill rate still often sits with a regional house the Jakarta team under-names.',
    },
    {
      name: 'Apotek K-24 and other banners',
      hq: 'Yogyakarta / national',
      type: 'Retailer',
      focus: 'Chemist banners with growing central purchasing',
      notes: 'Retail DCs in the making. Not Enseval, not Kimia Farma; a third conversation when the brief is banner listing.',
    },
    {
      name: 'District health offices (Dinkes) and puskesmas stores',
      hq: 'Kabupaten seats',
      type: 'Government',
      focus: 'Primary-care depot feed under JKN and local budgets',
      notes: 'The puskesmas door. Java Dinkes is not Papua Dinkes; lead times and substitution are the fieldwork, not the e-catalogue PDF.',
    },
    {
      name: 'Dexa Medica / Soho distribution adjacency',
      hq: 'Jakarta / Palembang',
      type: 'Local',
      focus: 'Domestic industrials with their own PBF or appointed books',
      notes: 'Factory houses that still decide how a local molecule reaches apotek. A Kalbe-only map will miss them.',
    },
    {
      name: 'DHL / TNT Indonesia life-science rooms',
      hq: 'Jakarta',
      type: 'MNC',
      focus: 'GDP warehousing for affiliates and eastern-island freight',
      notes: '3PL rooms used when a PBF will not hold biologics for Kupang or Ambon. They do not invoice apotek and they do not win e-catalogue.',
    },
    {
      name: 'Hospital groups (Siloam, Mitra Keluarga) pharmacy inbound',
      hq: 'Jakarta / Surabaya',
      type: 'Operator',
      focus: 'Private-hospital central pharmacies buying beside PBF drops',
      notes: 'Private hospital DCs. A JKN public brief will miss them; a private-hospital launch must name them beside Enseval.',
    },
  ],
  categoryBlurbs: {
    local:
      'Enseval, MPI, Tempo Scan’s PBF, Kalbe and Dexa adjacencies, and Medan–Makassar regional houses: Indonesian books that still invoice apotek across the islands.',
    mnc:
      'International 3PLs holding GDP rooms for affiliates. They store and fly east; they do not replace a PBF licence.',
    regional:
      'ASEAN traders who treat Jakarta beside Kuala Lumpur or Manila, typically on selected imported specialty rather than JKN generics.',
    trade:
      'BPOM, BPJS Kesehatan, LKPP e-catalogue, Kimia Farma’s SOE loop, Dinkes/puskesmas stores and chemist banners building DCs.',
  },
  growthDrivers: [
    {
      title: 'JKN e-catalogue as the public demand gate',
      desc: 'BPJS rules and LKPP listings decide hospital and puskesmas packs. A private PBF win without an e-catalogue filing is a private-only story.',
    },
    {
      title: 'Outer-island fill rates',
      desc: 'Enseval and MPI branches exist east of Java; fill rate often does not. Regional PBF and Kimia Farma outlets still close that gap, which is a coverage fact.',
    },
    {
      title: 'Kimia Farma as factory-plus-PBF-plus-apotek',
      desc: 'The SOE loop internalises a slice of volume. Principals that only meet Enseval will under-see state-linked doors.',
    },
    {
      title: 'Chemist banners centralising',
      desc: 'K-24 and peers add DC habits. Independent apotek remain the majority, but urban listing is already a banner meeting in several cities.',
    },
  ],
  faq: [
    {
      q: 'Must a foreign manufacturer appoint one exclusive Indonesian PBF?',
      a: 'Most affiliates appoint Enseval and MPI, sometimes Tempo Scan, and still negotiate Kimia Farma and hospital e-catalogue separately. Exclusive paper is uncommon outside specialty.',
    },
    {
      q: 'What is a PBF and why does it matter?',
      a: 'Pedagang besar farmasi is the licensed wholesaler class. BPOM issues the licence. Without it, the house cannot legally invoice an apotek or hospital pharmacy.',
    },
    {
      q: 'How does BPJS Kesehatan change distribution?',
      a: 'JKN reimbursement and e-catalogue prices steer which pack a hospital or puskesmas will order. The PBF delivers; BPJS decides the demand.',
    },
    {
      q: 'Is Kimia Farma a competitor to Enseval or a public buyer?',
      a: 'Both, in parts. It is a state-linked manufacturer, PBF and apotek chain. Map the warehouse door you need; do not file the whole group as “government.”',
    },
    {
      q: 'What does BioNixus field on Indonesian pharmaceutical distribution?',
      a: 'PBF invoice cuts in Jakarta, Surabaya, Medan and Makassar; BPJS/e-catalogue versus private apotek splits; Kimia Farma door checks; and puskesmas store walks in one kabupaten.',
    },
    {
      q: 'Is company order a ranking?',
      a: 'No. Names are grouped by private PBF, SOE loop, regulator, BPJS/e-catalogue, regional houses, banners and 3PLs so the next island visit is planned.',
    },
  ],
  regulatorSource: {
    name: 'BPOM (Badan Pengawas Obat dan Makanan) — licensed manufacturers, importers and pedagang besar farmasi',
    url: 'https://www.pom.go.id',
    asOf: '2026-09-05',
  },
  sources: [
    'BPOM PBF and manufacturer licensing notices, 2024–2026',
    'BPJS Kesehatan and LKPP e-catalogue circulars; Kimia Farma and Enseval IDX filings, 2024–2026',
    'IDX disclosures for MPI and Tempo Scan Pacific, 2024–2025',
    'BioNixus Indonesia apotek, hospital and PBF fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Apotek purchase-record audits in Jakarta, Surabaya, Medan and Makassar splitting Enseval, MPI, Tempo Scan and regional PBF invoices.',
    'JKN hospital and puskesmas store checks: e-catalogue SKU versus what was actually dispensed, and which PBF invoiced inbound.',
    'Kimia Farma apotek versus independent apotek price and availability on the same molecule in one Jakarta catchment.',
    'Eastern-island 3PL and PBF branch walks on validated cold rooms versus ambient holds that still move tablets to Kupang.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
