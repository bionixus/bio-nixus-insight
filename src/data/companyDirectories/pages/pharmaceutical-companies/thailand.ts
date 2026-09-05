import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesThailand: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'thailand',
  metaDescription:
    'Pharmaceutical companies in Thailand: GPO, Siam Bioscience, Mega Lifesciences, Pfizer, Roche, Zuellig, Thai FDA and NHSO — UCS reimbursement, medical-hub hospitals.',
  introLead:
    'Thailand’s medicine economy is split between a price-capped public channel paid by the Universal Coverage Scheme and a private hospital-plus-pharmacy channel where originators and emerging-market exporters still earn their margins.',
  introRest:
    'Krungsri Research puts 2024 hospital generics at about 112 billion baht, patented hospital products at 74 billion and pharmacy OTC at 42 billion, with 6–7% annual growth expected through 2027 as the National Health Security Office’s Gold Card budget — 235 billion baht in fiscal 2025 — keeps widening access. The Thai Food and Drug Administration in Nonthaburi licenses every manufacturer, importer and modern pharmacy under the Drug Act B.E. 2510, and PIC/S membership has forced more than 150 plants to hold internationally recognisable GMP. On the public side the Government Pharmaceutical Organization remains both a state manufacturer of essential medicines and a privileged supplier into Ministry of Public Health hospitals, while Siam Bioscience showed during the pandemic that a royally sponsored biologics campus can fill a national vaccine gap. Private value is held by SET-listed Mega Lifesciences, long-standing Thai houses such as Berlin Pharmaceutical, Siam Pharmaceutical and Greater Pharma, and innovator affiliates led in recent share rankings by Novartis, Pfizer, GSK and AstraZeneca. Physical movement of those packs is oligopolistic: Zuellig Pharma and DKSH warehouse the multinational book, while Fascino, Save Drug, Pure and 7-Eleven’s eXta Plus outlets are concentrating OTC retail. Roughly nine tenths of Thai output is swallowed at home; the rest goes mainly to CLMV neighbours. The organisations below are the ones BioNixus maps when a client needs to know who registers, who bids, who details and who delivers a class in Bangkok, Chiang Mai or Hat Yai.',
  stats: [
    { value: 'THB 228bn+', label: 'Approximate 2024 domestic sales: hospital generics 112bn, patented 74bn, OTC 42bn (Krungsri)' },
    { value: '150+', label: 'Modern pharmaceutical plants certified to GMP, of which few make APIs (Thai FDA / Krungsri)' },
    { value: 'THB 235bn', label: 'Universal Coverage Scheme budget allocated for fiscal 2025, up 8.3% year on year' },
    { value: '22,065', label: 'Registered pharmacies as of July 2024, of which 19,126 sell modern medicines' },
  ],
  channelHeading: 'How Thai registration, UCS reimbursement and private trade fit together',
  channelBody:
    'Nothing is sold until the Thai FDA has licensed the establishment and registered the product, a process now run against PIC/S GMP and, for many dossiers, reliance on reference-agency reviews. Public demand then splits across three insurance schemes that together cover almost the entire eligible population: the Universal Coverage Scheme administered by the National Health Security Office, the Social Security Scheme for formal workers, and the Civil Servant Medical Benefit Scheme, whose reference prices the Comptroller General’s Department and the Ministry of Public Health publish to cap what a public hospital may pay. The Government Pharmaceutical Organization still enjoys a structural advantage inside Ministry hospitals for essential oral solids and selected NCD therapies, although the Public Procurement and Supplies Administration Act now requires GPO to compete on more lots than it once did, opening room for Indian and Chinese generics as well as Thai private plants. Gold Card patients can collect some chronic medicines at accredited community pharmacies, which is why Fascino, hospital-group chains and modern-trade pharmacy corners have become a second public-access shelf rather than a purely commercial one. Private hospitals — Bumrungrad, Bangkok Hospital, Samitivej and the medical-tourist campuses — buy originators and high-end generics through Zuellig and DKSH on commercial terms that ignore UCS reference prices. Medical representatives still create demand among specialists, but hospital drug-and-therapeutics committees and NHSO listing decisions increasingly decide whether a new molecule ever sees volume. Export is a Mega Lifesciences and contract-manufacturing story into Myanmar, Vietnam, Cambodia and Laos rather than a national industrial programme; imports of high-value originators from the United States, Germany, France and India dwarf that outward flow.',
  companies: [
    {
      name: 'Thai Food and Drug Administration (Thai FDA)',
      hq: 'Nonthaburi',
      type: 'Government',
      focus: 'Establishment licensing, product registration, PIC/S GMP and pharmacy oversight',
      notes: 'Office of the Food and Drug Administration under the Ministry of Public Health; its licence and registration clocks are the first gate for every name in this table.',
    },
    {
      name: 'National Health Security Office (NHSO)',
      hq: 'Bangkok',
      type: 'Government',
      focus: 'Universal Coverage Scheme / Gold Card reimbursement and medicine listing',
      notes: 'Payer for the large majority of Thai citizens; a molecule that misses NHSO listing will not see public-hospital volume at UCS prices.',
    },
    {
      name: 'Government Pharmaceutical Organization (GPO)',
      hq: 'Bangkok',
      type: 'Government',
      focus: 'State manufacture of essential medicines and selected high-value imports',
      notes: 'State enterprise that still anchors Ministry hospital supply for many oral solids and NCD therapies, even as procurement law forces more open competition.',
    },
    {
      name: 'Siam Bioscience',
      hq: 'Bangkok',
      type: 'Local',
      focus: 'Biologics, vaccine fill-finish and technology-transfer partnerships',
      notes: 'Royally sponsored biologics campus that filled AstraZeneca COVID vaccine under licence and remains the national reference site for complex biologics capacity.',
    },
    {
      name: 'Mega Lifesciences',
      hq: 'Samut Prakan',
      type: 'Local',
      focus: 'Branded generics and emerging-market export from a Thai base',
      notes: 'SET-listed group whose Maxxcare and related brands travel into dozens of developing markets; the private Thai manufacturer with the widest overseas footprint.',
    },
    {
      name: 'Berlin Pharmaceutical Industry',
      hq: 'Bangkok',
      type: 'Local',
      focus: 'Long-established generics and hospital essential medicines',
      notes: 'One of the oldest Thai plants (1930s), still a regular bidder into public hospitals and a useful proxy for domestic generic pricing pressure.',
    },
    {
      name: 'Siam Pharmaceutical',
      hq: 'Bangkok',
      type: 'Local',
      focus: 'Low-cost generics for public and private hospital formularies',
      notes: 'Thai-shareholder manufacturer grouped by Krungsri with the domestic low-cost cohort that competes against GPO and Indian imports.',
    },
    {
      name: 'Greater Pharma',
      hq: 'Bangkok',
      type: 'Local',
      focus: 'Branded generics and pharmacy-detailed primary-care lines',
      notes: 'Privately held Thai house with a wide primary-care book that shows up in both hospital tenders and stand-alone pharmacy audits.',
    },
    {
      name: 'Biolab',
      hq: 'Samut Prakan',
      type: 'Local',
      focus: 'Contract manufacturing for local and foreign principals',
      notes: 'CMO that foreign companies without a Thai plant use for PIC/S-standard oral solids; a recurring name in toll-manufacturing due diligence.',
    },
    {
      name: 'Bangkok Lab & Cosmetic',
      hq: 'Bangkok',
      type: 'Local',
      focus: 'Dermatology, cosmetics-adjacent medicines and pharmacy brands',
      notes: 'Thai manufacturer whose skin and personal-care overlap makes it a bridge account between prescription dermatology and modern-trade pharmacy.',
    },
    {
      name: 'Pfizer Thailand',
      hq: 'Bangkok',
      type: 'MNC',
      focus: 'Vaccines, hospital anti-infectives, oncology and specialty',
      notes: 'Innovator affiliate that ranks among the largest private-channel sellers and is a standard counterpart for public-private vaccine and hospital contracting.',
    },
    {
      name: 'Novartis (Thailand)',
      hq: 'Bangkok',
      type: 'MNC',
      focus: 'Cardiovascular, oncology, immunology and ophthalmology innovators',
      notes: 'Reported as the highest-revenue private pharmaceutical company in 2023 industry rankings; the specialty benchmark in Bangkok private hospitals.',
    },
    {
      name: 'GSK Thailand',
      hq: 'Bangkok',
      type: 'MNC',
      focus: 'Vaccines, respiratory and HIV',
      notes: 'Innovator affiliate with a deep vaccine and respiratory franchise detailed into both private hospitals and selected UCS immunisation programmes.',
    },
    {
      name: 'AstraZeneca (Thailand)',
      hq: 'Bangkok',
      type: 'MNC',
      focus: 'Oncology, cardiovascular, respiratory and vaccine partnerships',
      notes: 'Commercial affiliate whose pandemic fill-finish link with Siam Bioscience still shapes how the company is read in Thai industrial-policy discussions.',
    },
    {
      name: 'Roche Thailand',
      hq: 'Bangkok',
      type: 'MNC',
      focus: 'Oncology, diagnostics and immunology biologics',
      notes: 'Detailed into university and private cancer centres; NHSO oncology listing is the event that changes its volume, not community-pharmacy ranging.',
    },
    {
      name: 'Zuellig Pharma Thailand',
      hq: 'Bangkok',
      type: 'Distributor',
      focus: 'National GDP wholesale for multinational and selected local principals',
      notes: 'The logistics backbone for most innovator hospital products; cold-chain capability makes it the default appointment for vaccines and biologics.',
    },
    {
      name: 'DKSH Thailand',
      hq: 'Bangkok',
      type: 'Distributor',
      focus: 'Market expansion services, registration support and pharmacy wholesale',
      notes: 'Swiss distributor that complements Zuellig on consumer-health and mid-specialty books and offers regulatory-affairs support to principals without an affiliate.',
    },
  ],
  categoryBlurbs: {
    local:
      'Thai-shareholder manufacturers and the royally sponsored biologics campus that supply UCS hospitals, stand-alone pharmacies and, in Mega’s case, a wide emerging-market export book.',
    mnc:
      'Innovator affiliates that dominate patented hospital value and medical-tourist campuses, led in recent private-channel rankings by Novartis, Pfizer, GSK and AstraZeneca.',
    regional:
      'CLMV-facing Thai exporters and contract manufacturers that treat Bangkok as a hub for Myanmar, Vietnam, Cambodia and Lao PDR rather than as a stand-alone destination.',
    trade:
      'Thai FDA as the PIC/S licence authority, NHSO and GPO as the public volume setters, and the Zuellig–DKSH wholesale duopoly that physically reaches hospitals and 22,000 pharmacies.',
  },
  growthDrivers: [
    {
      title: 'Gold Card budget and pharmacy collection points',
      desc: 'An 8.3% rise in the UCS allocation for 2025, plus the right of Gold Card patients to pick up chronic medicines at accredited pharmacies, is shifting some public volume out of hospital windows and onto chain and stand-alone shelves.',
    },
    {
      title: 'Super-aged demography and NCD load',
      desc: 'Thailand is heading from an aged to a super-aged society, and three quarters of people over sixty already carry at least one NCD; that arithmetic underwrites long-run demand for antihypertensives, diabetes therapies and stroke secondaries regardless of short-term tender prices.',
    },
    {
      title: 'PIC/S upgrades and BOI-backed biologics',
      desc: 'Compulsory PIC/S GMP and Board of Investment support for biotech projects are sorting plants into those that can take originator toll work or export dossiers and those that will remain low-cost UCS bidders only.',
    },
    {
      title: 'Medical tourism and private-hospital formularies',
      desc: 'Bangkok’s international hospitals buy originators that UCS will never list, so specialty launches can still build a profitable private book even when NHSO reference prices make the public channel unattractive.',
    },
  ],
  faq: [
    {
      q: 'Which organisations set the tone of the Thai medicines market?',
      a: 'Thai FDA licenses the sellers, NHSO pays for Gold Card care, GPO still supplies a large essential-medicine block into Ministry hospitals, and Zuellig plus DKSH move most multinational packs. On the private manufacturing side Mega Lifesciences, Berlin, Siam Pharmaceutical and Greater Pharma are the domestic names that recur in BioNixus work.',
    },
    {
      q: 'What is the Government Pharmaceutical Organization’s role now?',
      a: 'GPO remains a state manufacturer and importer for the public system, especially for essential oral solids and selected NCD products sold at administered prices. Procurement-law changes mean it must compete more often, but Ministry-hospital relationships and cost structure still give it an advantage on many lots.',
    },
    {
      q: 'How does Universal Coverage affect launch planning?',
      a: 'A product that is not listed by NHSO will not be reimbursed for Gold Card patients, who are the majority of the population. Launch teams therefore decide early whether to price for UCS reference bands and chase hospital tenders, or to stay in the private and medical-tourist channel at originator prices.',
    },
    {
      q: 'Do foreign firms need a Thai factory?',
      a: 'No. Most innovators register through their Bangkok affiliate or a local holder and appoint Zuellig or DKSH for GDP distribution. A factory becomes interesting when PIC/S toll capacity or industrial-policy incentives outweigh the cost, which is the Siam Bioscience and Biolab conversation rather than the default path.',
    },
    {
      q: 'How does BioNixus study pharmaceutical companies in Thailand?',
      a: 'Hospital-pharmacist and D&T-committee interviews in Bangkok, Chiang Mai and Hat Yai; Gold Card pharmacy-collection audits at chain and stand-alone outlets; reconstruction of GPO and NHSO-facing awards by molecule; and specialty-prescriber panels in private and medical-tourist hospitals on originator uptake when UCS listing is absent.',
    },
    {
      q: 'Is the order of this Thai list a ranking by sales?',
      a: 'No sales rank is intended. Entries are grouped as regulator, public payer and manufacturer, Thai plants, innovator affiliates and the two logistics houses, chosen because they recur in BioNixus Thailand projects and on Thai FDA and SET records.',
    },
  ],
  regulatorSource: {
    name: 'Thai Food and Drug Administration (Thai FDA) — licensed drug establishments and registered medicinal products',
    url: 'https://www.fda.moph.go.th',
    asOf: '2026-09-04',
  },
  sources: [
    'Krungsri Research, Industry Outlook Pharmaceuticals 2025–2027 and 2026 updates (hospital, patented and OTC sales; UCS budget; pharmacy counts; PIC/S plant base)',
    'Thai FDA (Office of the Food and Drug Administration) establishment and product registers; Drug Act B.E. 2510 framework',
    'National Health Security Office Gold Card budget and listing communications; Government Pharmaceutical Organization public-supply role',
    'BioNixus Thailand hospital, pharmacy and medical-tourist fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'NHSO listing and reference-price landscaping for cardiometabolic and respiratory classes, used to decide whether a launch should chase UCS volume or stay private.',
    'Purchase-record reads in Fascino, Save Drug, Pure and independent modern pharmacies in Bangkok and Chiang Mai for OTC and Gold Card collection SKUs.',
    'Specialty panels with oncologists and cardiologists at private and medical-tourist hospitals on originator persistence when a UCS generic exists.',
    'Plant and CMO assessments at Mega, Biolab and Siam Bioscience covering PIC/S status, spare capacity and technology-transfer appetite.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
