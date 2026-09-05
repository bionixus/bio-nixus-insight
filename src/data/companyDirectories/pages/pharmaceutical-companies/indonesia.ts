import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesIndonesia: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'indonesia',
  metaDescription:
    'Pharmaceutical companies in Indonesia: Kalbe Farma, Kimia Farma, Dexa Medica, Sanbe, Bio Farma, Tempo Scan, Pfizer, BPOM and BPJS — portfolios, e-catalogue, channels.',
  introLead:
    'Indonesia is the largest pharmaceutical market in ASEAN by value, and it is also the most domestically owned: locally headquartered groups such as Kalbe Farma, Dexa Medica, Sanbe and Tempo Scan account for the greater part of prescription and OTC sales to a population of more than 280 million.',
  introRest:
    'Three institutions shape how a medicine reaches an Indonesian patient. BPOM issues the marketing authorisation and inspects every plant; BPJS Kesehatan, the single payer behind the JKN national insurance scheme, decides which molecules sit on the national formulary and at what price; and the LKPP e-catalogue converts that formulary into the price list from which public hospitals and community health centres buy. Around this public core sits a large private economy of hospital groups, pharmacy chains, herbal and consumer-health brands, and a network of licensed wholesalers known as PBFs that move product across an archipelago of 17,000 islands. The companies below are the manufacturers, multinational affiliates and distribution arms that BioNixus tracks when a client asks who really holds share in a therapy area in Jakarta, Surabaya or Medan.',
  stats: [
    { value: '$6.4bn+', label: 'Prescription and OTC pharmaceutical sales, 2024 estimate' },
    { value: '240', label: 'Pharmaceutical manufacturers licensed by BPOM, of which ~160 active (2024)' },
    { value: '270m+', label: 'JKN members covered by BPJS Kesehatan' },
    { value: '~90%', label: 'Share of active pharmaceutical ingredients imported' },
  ],
  channelHeading: 'How pharmaceutical supply and reimbursement work in Indonesia',
  channelBody:
    'Every product needs a BPOM registration number held by a licensed Indonesian entity, which in practice means a domestic manufacturer, a multinational affiliate with its own industri farmasi licence, or a toll-manufacturing partner such as Kimia Farma, Sanbe or Dexa producing a foreign brand under licence. Imported finished goods then pass through a PBF wholesaler; the largest are captive to the manufacturers themselves, with Enseval serving Kalbe, Anugrah Argon Medica serving Dexa and Kimia Farma Trading serving the state group, while independents such as Parit Padang and Tempo handle third-party principals. Public demand is governed by the Fornas national formulary and the LKPP e-catalogue: once a molecule is listed, provincial hospitals and the 10,000-plus Puskesmas order at the published price, and the lowest-priced generics from Indofarma, Phapros, Hexpharm and Dexa capture volume. Private hospital groups including Siloam, Mitra Keluarga and Hermina negotiate their own formularies and pay for branded generics and originators that JKN does not cover. Retail splits between organised chains, with Kimia Farma Apotek, Century, Guardian, K-24 and Roxy holding a few thousand outlets, and tens of thousands of independent apotek and toko obat that OTC brands reach through FMCG-style general-trade distributors. Local-content (TKDN) rules under Presidential Regulation 26/2023 now weight e-catalogue awards towards domestically manufactured product, which is pushing multinationals into toll agreements rather than pure import.',
  companies: [
    {
      name: 'Badan Pengawas Obat dan Makanan (BPOM)',
      hq: 'Jakarta',
      type: 'Government',
      focus: 'Drug registration, GMP certification and market surveillance',
      notes: 'The national regulator whose registration timelines, GMP audits and halal labelling rules define launch sequencing for every company in this table.',
    },
    {
      name: 'BPJS Kesehatan',
      hq: 'Jakarta',
      type: 'Government',
      focus: 'JKN single payer; formulary and e-catalogue demand',
      notes: 'Insures more than 270 million people and, through Fornas listing and capitation pressure, decides which generics move in volume through public hospitals and Puskesmas.',
    },
    {
      name: 'Kalbe Farma',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Prescription, consumer health, nutrition and biologics',
      notes: 'IDX-listed group with the widest footprint in the country, spanning branded generics, oncology biosimilars, Extra Joss and Promag consumer brands and its own distribution arm.',
    },
    {
      name: 'Kimia Farma',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Generics, API production and the largest pharmacy chain',
      notes: 'State-owned manufacturer under Bio Farma that also runs Kimia Farma Apotek, giving it a rare combination of e-catalogue supply and retail shelf ownership.',
    },
    {
      name: 'Bio Farma',
      hq: 'Bandung',
      type: 'Local',
      focus: 'Vaccines, blood products and the state pharmaceutical holding',
      notes: 'WHO-prequalified vaccine producer that supplies the national immunisation programme and acts as holding company for Kimia Farma and Indofarma.',
    },
    {
      name: 'Dexa Medica',
      hq: 'Tangerang',
      type: 'Local',
      focus: 'Branded generics, cardiometabolic and OTC herbals',
      notes: 'Privately held group whose Dexa, Ferron and Hexpharm labels compete in both private prescription and e-catalogue tenders, backed by Anugrah Argon Medica distribution.',
    },
    {
      name: 'Sanbe Farma',
      hq: 'Bandung',
      type: 'Local',
      focus: 'Antibiotics, injectables, IV fluids and ophthalmics',
      notes: 'Family-owned manufacturer with large sterile and beta-lactam capacity, a frequent toll partner for multinationals and a major public-tender antibiotic supplier.',
    },
    {
      name: 'Tempo Scan Pacific',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'OTC analgesics, vitamins and prescription generics',
      notes: 'IDX-listed owner of Bodrex, Hemaviton and Vidoran; its consumer strength makes it a benchmark account for any OTC or supplement launch.',
    },
    {
      name: 'Soho Global Health',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Herbal medicines, immune supplements and generics',
      notes: 'Owner of Imboost and Curcuma Plus, blending phytopharmaceuticals with a prescription portfolio distributed through its own Parit Padang wholesale arm.',
    },
    {
      name: 'Phapros',
      hq: 'Semarang',
      type: 'Local',
      focus: 'Tender generics and the Antimo OTC franchise',
      notes: 'Kimia Farma subsidiary listed on the IDX, heavily exposed to e-catalogue volumes for essential medicines and a useful proxy for public-tender pricing trends.',
    },
    {
      name: 'Indofarma',
      hq: 'Bekasi',
      type: 'Local',
      focus: 'Low-cost generics for public procurement',
      notes: 'State-owned tender specialist whose financial restructuring illustrates how thin e-catalogue margins have become for undifferentiated generics.',
    },
    {
      name: 'Combiphar',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Cough and cold, women’s health and prescription lines',
      notes: 'Owner of the OBH Combi cough range and a growing consumer-health portfolio, with production in Padalarang and strong pharmacy coverage in Java.',
    },
    {
      name: 'Pharos Indonesia',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Dermatology, branded generics and pharmacy-detailed lines',
      notes: 'Mid-sized manufacturer with an unusually strong dermatology and aesthetic franchise, marketed through intensive detailing to dermatologists and independent pharmacies.',
    },
    {
      name: 'Novell Pharmaceutical Laboratories',
      hq: 'Jakarta',
      type: 'Local',
      focus: 'Oncology, injectables and export-grade generics',
      notes: 'One of the few Indonesian plants with European GMP approval, exporting to the EU while supplying oncology and hormone generics domestically.',
    },
    {
      name: 'Darya-Varia Laboratoria',
      hq: 'Jakarta',
      type: 'Regional',
      focus: 'OTC vitamins, cold remedies and prescription generics',
      notes: 'IDX-listed subsidiary of the Philippine group Unilab, selling Enervon-C and Decolgen alongside contract manufacturing for multinational principals.',
    },
    {
      name: 'Pfizer Indonesia',
      hq: 'Jakarta',
      type: 'MNC',
      focus: 'Vaccines, oncology, anti-infectives and hospital injectables',
      notes: 'Largest innovator affiliate by hospital footprint, with pneumococcal vaccine and anti-infective volumes that make it a reference account for public-private pricing.',
    },
    {
      name: 'Sanofi Indonesia',
      hq: 'Jakarta',
      type: 'MNC',
      focus: 'Diabetes, vaccines and consumer healthcare',
      notes: 'Runs toll-manufacturing partnerships for insulin and vaccines to meet local-content rules while keeping a consumer business anchored on Enterostop and Lactacyd.',
    },
    {
      name: 'Novartis Indonesia',
      hq: 'Jakarta',
      type: 'MNC',
      focus: 'Cardiovascular, oncology and immunology innovators',
      notes: 'Focused on private hospital and specialist channels since Sandoz separated, with locally manufactured cardiometabolic lines produced under toll agreements.',
    },
    {
      name: 'PT Merck Tbk',
      hq: 'Jakarta',
      type: 'MNC',
      focus: 'Thyroid, diabetes, fertility and performance materials',
      notes: 'One of the few multinational affiliates listed on the IDX, operating a Pasar Rebo plant that manufactures Euthyrox and Glucophage for the domestic market.',
    },
    {
      name: 'Takeda Indonesia',
      hq: 'Jakarta',
      type: 'MNC',
      focus: 'Dengue vaccine, gastroenterology and rare diseases',
      notes: 'Launched the Qdenga dengue vaccine through private clinics and pharmacies, creating a self-pay vaccine channel that other companies now study.',
    },
    {
      name: 'Enseval Putera Megatrading',
      hq: 'Jakarta',
      type: 'Distributor',
      focus: 'National PBF for Kalbe and third-party principals',
      notes: 'Kalbe’s IDX-listed distribution arm with more than 40 branches, carrying multinational principals alongside group products into hospitals and pharmacies.',
    },
    {
      name: 'Anugrah Argon Medica (AAM)',
      hq: 'Tangerang',
      type: 'Distributor',
      focus: 'Nationwide pharmaceutical wholesale for Dexa and partners',
      notes: 'Dexa group wholesaler with cold-chain depots across Java, Sumatra and Sulawesi, often appointed by multinationals for outer-island coverage.',
    },
  ],
  categoryBlurbs: {
    local:
      'Indonesian-owned manufacturers, both private and state-controlled, that produce branded generics, OTC and herbal lines and hold the majority of e-catalogue and pharmacy volume.',
    mnc:
      'Innovator affiliates operating with their own industri farmasi licences or toll partners, concentrated in vaccines, oncology, diabetes and the private hospital segment.',
    regional:
      'ASEAN-headquartered groups such as Unilab that own Indonesian subsidiaries or license portfolios to local plants to reach the JKN and pharmacy channels.',
    trade:
      'The captive and independent PBF wholesalers, the national payer and the regulator whose decisions on listing, price and local content set the terms of supply.',
  },
  growthDrivers: [
    {
      title: 'Local-content rules under Perpres 26/2023',
      desc: 'Preference for domestically manufactured product in e-catalogue awards is redirecting multinationals towards toll agreements with Kimia Farma, Sanbe and Dexa, and is lifting capacity utilisation at plants that can pass GMP audits for licensed brands.',
    },
    {
      title: 'JKN formulary expansion into chronic and oncology care',
      desc: 'BPJS Kesehatan has widened coverage of diabetes, cardiovascular and cancer therapies, so generic volumes in those classes are growing faster than the market average and creating room for domestic biosimilar producers.',
    },
    {
      title: 'Consumer-health and herbal demand',
      desc: 'Indonesian shoppers spend heavily on vitamins, herbal jamu-based remedies and cough and cold brands, which supports Tempo Scan, Soho and Combiphar and gives multinationals a reason to invest in self-medication portfolios.',
    },
    {
      title: 'Digital pharmacy and chain consolidation',
      desc: 'Halodoc, Alodokter and the expansion of Kimia Farma Apotek and K-24 are shifting OTC and chronic-repeat purchases into channels with purchase data, which changes how brands negotiate listing and promotion.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies hold the largest share in Indonesia?',
      a: 'Domestic groups dominate: Kalbe Farma, Dexa Medica, Sanbe Farma, Tempo Scan and the state-owned Kimia Farma sit at the top of most audited rankings, with Pfizer, Sanofi and Novartis the largest innovator affiliates. The top fifteen companies are generally estimated to account for roughly three-quarters of market value.',
    },
    {
      q: 'Does a foreign company need a local partner to sell medicines in Indonesia?',
      a: 'Yes. BPOM registration must be held by an Indonesian licence holder, and finished goods must move through a licensed PBF wholesaler. Most multinationals operate their own affiliate for registration and appoint a PBF for logistics, while local-content rules increasingly favour toll manufacturing at an Indonesian plant.',
    },
    {
      q: 'How does the LKPP e-catalogue affect pricing?',
      a: 'Once a molecule is on the Fornas formulary, manufacturers post prices in the e-catalogue and public hospitals and Puskesmas buy at those prices without a separate tender. Competition among generic producers drives prices down, which is why tender specialists such as Indofarma and Phapros operate on thin margins.',
    },
    {
      q: 'What role do pharmacy chains play in the Indonesian market?',
      a: 'Kimia Farma Apotek, Century, Guardian, K-24 and Roxy together operate a few thousand outlets and buy centrally, but the majority of retail volume still flows through independent apotek and toko obat. OTC brands therefore need both chain listings and broad general-trade coverage.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Indonesia?',
      a: 'BioNixus fields interviews with hospital pharmacists, BPJS-experienced procurement officers and specialists in Jakarta, Surabaya, Bandung and Medan; audits pharmacy purchase records to estimate brand share by city; maps e-catalogue award histories by molecule; and runs prescriber panels to track switching between originators, branded generics and unbranded generics.',
    },
    {
      q: 'Is this a ranking?',
      a: 'It is not. Companies appear because they recur in BioNixus fieldwork across Indonesian hospitals and pharmacies and on BPOM and IDX records, and they are grouped by role rather than sorted by revenue. Position in the table should not be read as a statement about size or quality.',
    },
  ],
  regulatorSource: {
    name: 'Badan Pengawas Obat dan Makanan (BPOM) — registered drug products and licensed pharmaceutical industries',
    url: 'https://www.pom.go.id',
    asOf: '2026-09-03',
  },
  sources: [
    'BPOM statements on licensed pharmaceutical industries and industry maturity, September 2024',
    'Indonesia Stock Exchange annual reports for Kalbe Farma, Kimia Farma, Tempo Scan Pacific, Phapros, Darya-Varia and PT Merck Tbk, 2024–2025',
    'MarketLine Pharmaceuticals in Indonesia industry profile, 2024; Ministry of Health and Ministry of Industry statements on API import dependence',
    'BioNixus Indonesia hospital, pharmacy and prescriber fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Brand-share audits in Jakarta, Surabaya, Bandung and Medan pharmacies, reconciling purchase records against PBF invoices to estimate share by molecule for cardiometabolic and antibiotic baskets.',
    'E-catalogue landscaping by molecule: listed suppliers, posted prices and provincial hospital uptake, used by generic and biosimilar entrants to size public volume before registration.',
    'Prescriber panels with cardiologists, endocrinologists and oncologists in private hospital groups on originator versus branded-generic preference under JKN and out-of-pocket payment.',
    'Toll-manufacturing partner assessments: interviews with plant quality heads and multinational supply managers on capacity, GMP status and local-content qualification at Indonesian sites.',
  ],
  publishedDate: '2026-09-03',
  modifiedDate: '2026-09-03',
};
