import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesSpain: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'spain',
  metaDescription:
    'Pharmaceutical companies in Spain: Almirall, Esteve, Grifols, Ferrer, Rovi, PharmaMar, Cinfa, AEMPS and SNS — reference prices, regional tenders.',
  introLead:
    'Spanish medicines policy is a two-step dance that foreign teams keep underestimating: AEMPS and the Interministerial Pricing Commission speak for the State, then seventeen autonomous communities buy, tender and sometimes delay.',
  introRest:
    'The Ministry of Health’s 2024 SNS pharmaceutical report put outpatient prescription spending at €13.865 billion, 4.9% above 2023, with generics already 47.4% of packs on those prescriptions. Farmaindustria-linked figures for 2023 had placed the combined hospital-plus-retail market near €23 billion, and hospital lines have been growing faster than the pharmacy counter ever since. What is distinctive is the industrial mix. Barcelona and its hinterland hold Almirall, Esteve, Grifols, Ferrer and Reig Jofre; Madrid holds Rovi and PharmaMar; Navarre’s Cinfa and the Basque Faes Farma complete a domestically owned strip that is stronger in dermatology, plasma, hospital injectables and unbranded generics than in primary-care originator brands. Pfizer and Novartis still lead many specialty value pools. Reference pricing then compresses anything that has a generic or a same-ATC-5 neighbour. BioNixus keeps the companies and institutions below on one sheet because a national price letter without a Catalan, Madrid or Andalusian tender plan is only half a launch.',
  stats: [
    { value: '€13.87bn', label: 'SNS outpatient prescription spend in 2024, Ministry of Health (+4.9% vs 2023)' },
    { value: '47.4%', label: 'Generic share of SNS prescription packs in 2024 (24.5% of that spend)' },
    { value: '17', label: 'Autonomous communities that run health services, formularies and hospital tenders' },
    { value: '22,557', label: 'Medicine presentations financed by the SNS at end-2024, 68.4% of those authorised' },
  ],
  channelHeading: 'National listing, then seventeen buyers: how Spanish medicines move',
  channelBody:
    'AEMPS grants the marketing authorisation, or recognises an EMA decision, and writes the Informe de Posicionamiento Terapéutico that frames clinical value. Price and reimbursement then move to the Comisión Interministerial de Precios de los Medicamentos. Once a product is financed, the sistema de precios de referencia can pull it into a group whose reimbursed price is the lowest cost-per-day in that ATC-5 plus route cluster — a mechanism that has made Spain a hard market for anything that is no longer unique. After that national layer, the 17 comunidades autónomas take over. Catalonia’s CatSalut, Madrid’s SERMAS, Andalusia’s SAS and the Basque Osakidetza run their own commissions, hospital tenders and, in some cases, centralised purchasing. Hospital pharmacy directors sit on those committees and behave as buyers, not as a channel. Community pharmacies remain owner-operated offices supplied by cooperatives such as Cofares and Bidafarma; they dispense the SNS prescription but do not set the financed price. Plasma (Grifols), hospital heparins and biosimilars (Rovi), and oncology from the sea (PharmaMar) give Spain a specialty manufacturing identity that is easy to miss if the brief only lists affiliates.',
  companies: [
    {
      name: 'Almirall',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Medical dermatology, aesthetics-adjacent prescription brands',
      notes: 'Listed Catalan specialist that exited broad primary care to concentrate on dermatology; a frequent counterpart in hospital and office-dermatology studies.',
    },
    {
      name: 'Esteve',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Pain, CNS, contract manufacturing, licensed brands',
      notes: 'Family-owned group that combines a Spanish prescription book with a sizable CDMO, so it appears both as a competitor and as a plant partner.',
    },
    {
      name: 'Grifols',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Plasma-derived medicines, diagnostic systems, hospital biologics',
      notes: 'Global plasma fractionator headquartered in Catalonia; hospital immunoglobulin and albumin tenders in Spain are rarely understood without it.',
    },
    {
      name: 'Ferrer',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Pulmonary vascular, neurology, licensed specialty',
      notes: 'B-Corp Catalan house that narrowed into specialty after selling older primary-care lines; still a named account in pulmonary-hypertension work.',
    },
    {
      name: 'Laboratorios Farmacéuticos Rovi',
      hq: 'Madrid',
      type: 'Local',
      focus: 'Low-molecular-weight heparins, hospital injectables, biosimilar fill-finish',
      notes: 'Madrid-listed manufacturer whose bemiparin franchise and contract filling of third-party biologics make it a hospital-pharmacy regular.',
    },
    {
      name: 'PharmaMar',
      hq: 'Madrid',
      type: 'Local',
      focus: 'Marine-derived oncology, hospital specialty',
      notes: 'Yondelis and later marine cytotoxics keep this small listed company inside oncology-commission conversations that larger affiliates also contest.',
    },
    {
      name: 'Cinfa',
      hq: 'Huarte',
      type: 'Local',
      focus: 'Unbranded and branded generics, consumer health, pharmacy services',
      notes: 'Navarrese cooperative-origin manufacturer that is a default name on Spanish generic substitution and on pharmacy-shelf consumer lines.',
    },
    {
      name: 'Faes Farma',
      hq: 'Leioa',
      type: 'Local',
      focus: 'Respiratory, allergy, animal health, licensed brands',
      notes: 'Basque listed group with a Bilbao-area plant and an Iberian-plus-Latam commercial footprint that still starts from Spanish primary care.',
    },
    {
      name: 'Reig Jofre',
      hq: 'Barcelona',
      type: 'Local',
      focus: 'Injectables, antibiotics, dermatology, CDMO',
      notes: 'Catalan mid-cap whose sterile plant is used both for own hospital brands and for contract filling, including vaccine fill in earlier campaigns.',
    },
    {
      name: 'Laboratorios Normon',
      hq: 'Tres Cantos',
      type: 'Local',
      focus: 'High-volume generics for SNS substitution',
      notes: 'Madrid manufacturer built for reference-price competition; hospital and outpatient tenders in high-volume INNs almost always include it.',
    },
    {
      name: 'Kern Pharma',
      hq: 'Terrassa',
      type: 'Local',
      focus: 'Generics, biosimilars, hospital injectables',
      notes: 'Catalan generics house (Insud/Chemo group) that is a frequent biosimilar bidder once a molecule falls into the reference-price system.',
    },
    {
      name: 'Pfizer España',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Vaccines, oncology, inflammation, hospital products',
      notes: 'Innovator affiliate whose Spanish hospital value sits in autonomous-community tenders and in national immunisation purchasing more than in retail audits.',
    },
    {
      name: 'Novartis España',
      hq: 'Barcelona',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, ophthalmology',
      notes: 'Catalonia-based affiliate; specialty launches still need a second campaign after CIPM if CatSalut, SERMAS or SAS commissions move slowly.',
    },
    {
      name: 'Roche Farma España',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Oncology, haematology, neuroscience, diagnostics',
      notes: 'Hospital-pharmacy counterpart: IPT wording, outcome agreements and regional committee votes decide whether a listed Roche brand is used.',
    },
    {
      name: 'Spanish Agency of Medicines and Medical Devices (AEMPS)',
      hq: 'Madrid',
      type: 'Government',
      focus: 'Authorisation, IPT coordination, inspections, shortages',
      notes: 'National competent authority. The therapeutic-positioning report it helps shape is the document regional commissions actually quote.',
    },
    {
      name: 'Ministerio de Sanidad — pharmaceutical provision',
      hq: 'Madrid',
      type: 'Government',
      focus: 'Financing decisions, reference-price system, SNS statistics',
      notes: 'Hosts the Interministerial Pricing Commission and publishes the annual prestación farmacéutica figures every access model should start from.',
    },
    {
      name: 'Servei Català de la Salut (CatSalut)',
      hq: 'Barcelona',
      type: 'Government',
      focus: 'Catalan formulary, hospital purchasing, access commissions',
      notes: 'Largest and most closely watched autonomous buyer after the State itself; a CatSalut delay is a national launch problem, not a local footnote.',
    },
    {
      name: 'Cofares',
      hq: 'Madrid',
      type: 'Distributor',
      focus: 'Cooperative wholesale to community pharmacies',
      notes: 'Dominant full-line cooperative; the physical path for SNS prescriptions once a financed product is meant to sit in an oficina de farmacia.',
    },
  ],
  categoryBlurbs: {
    local:
      'Spanish-owned houses clustered in Catalonia, Madrid, Navarre and the Basque Country — dermatology, plasma, hospital injectables, marine oncology and high-volume generics.',
    mnc:
      'Originator affiliates whose Spanish value is hospital specialty and vaccines, released only after CIPM pricing and a second round of autonomous-community decisions.',
    regional:
      'Latin American and wider-Iberian groups (Kern’s Insud parent is the type case) that use a Spanish plant or affiliate to reach SNS tenders and Portuguese spillover.',
    trade:
      'AEMPS, the Ministry, CatSalut and the other sixteen health services, plus pharmacy cooperatives that move financed packs to owner-operated offices.',
  },
  growthDrivers: [
    {
      title: 'Reference-price compression',
      desc: 'Once a molecule or ATC-5 group has a cheaper neighbour, the SNS reimburses the lowest cost-per-day. That is why Cinfa, Normon and Kern take pack share and why originators exit or re-license older lines.',
    },
    {
      title: 'Seventeen autonomous tenders',
      desc: 'Hospital specialty does not travel on a single national contract. Catalonia, Madrid, Andalusia and the Basque Country each run commissions and lots, so access research is a multi-payer design.',
    },
    {
      title: 'Plasma and hospital injectables as Spanish specialties',
      desc: 'Grifols on immunoglobulins and Rovi on heparins and fill-finish give domestic capital a hospital role that generic substitution cannot erase, and they set tender norms other suppliers must meet.',
    },
    {
      title: 'Hospital growth outrunning the pharmacy counter',
      desc: 'Ministry and Farmaindustria series both show hospital lines rising faster than outpatient prescriptions, which pulls budget, IPT scrutiny and regional politics toward oncology, immunology and advanced therapies.',
    },
  ],
  sections: [
    {
      heading: 'Why the IPT and the autonomous commission are separate research jobs',
      paragraphs: [
        'The Informe de Posicionamiento Terapéutico is written to be quoted. Regional pharmacists lift sentences from it into commission papers, which is why a fuzzy comparator or an ungenerous place-in-therapy paragraph can stall a brand in Barcelona or Seville even after CIPM has set a price. BioNixus therefore tests IPT language with hospital pharmacists before the document is final, not after.',
        'Autonomous tenders then add a second clock. A community can wait for a biosimilar, bundle lots across hospitals, or demand an outcome clause the national letter never mentioned. Madrid and Catalonia are not interchangeable, and Andalusia’s scale can move national pack share on its own.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which Spanish-owned pharmaceutical companies should a brand team know first?',
      a: 'Almirall, Esteve, Grifols, Ferrer, Rovi, PharmaMar, Cinfa, Faes Farma, Reig Jofre, Normon and Kern Pharma. They do not form one league: plasma, dermatology and unbranded generics are different businesses that happen to share a passport.',
    },
    {
      q: 'How does the Spanish reference-price system change a launch?',
      a: 'When a financed presentation shares an ATC-5 group and route with a cheaper product, the SNS pays the lowest cost-per-day. Late generics can therefore reprice a whole cluster. Unique hospital specialties stay outside that trap until a competitor or biosimilar arrives.',
    },
    {
      q: 'Do autonomous communities really delay nationally financed medicines?',
      a: 'They can. Commissions, hospital formularies and tenders are regional. CatSalut, SERMAS and SAS are the three offices most launch teams model explicitly; the other fourteen still move volume.',
    },
    {
      q: 'Why does Grifols appear on a medicines-company directory?',
      a: 'Because plasma-derived immunoglobulins, albumin and alpha-1 antitrypsin are hospital medicines bought on autonomous tenders. Treating Grifols as a diagnostics footnote misses a large Spanish hospital P&L.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Spain?',
      a: 'By interviewing hospital pharmacy directors and commission members in Madrid and Barcelona, reconstructing CIPM and IPT outcomes, mapping autonomous tender lots for heparins, immunoglobulins and oncology, and auditing pharmacy cooperatives for generic substitution rates.',
    },
    {
      q: 'Is BioNixus ranking Spanish pharmaceutical firms by sales?',
      a: 'Sales rank is not the organising principle. A plasma fractionator, a regional health service and a Pamplona generics house sit together because each decides a different slice of Spanish demand.',
    },
  ],
  regulatorSource: {
    name: 'Agencia Española de Medicamentos y Productos Sanitarios (AEMPS) — authorised medicines and inspected manufacturers',
    url: 'https://www.aemps.gob.es',
    asOf: '2026-09-04',
  },
  sources: [
    'Ministerio de Sanidad, Prestación Farmacéutica en el SNS 2024 — €13.865bn outpatient spend, generic pack share 47.4%',
    'Farmaindustria / Faus-Moliner pricing chapter on 2023 hospital-plus-retail market structure and the reference-price system',
    'AEMPS authorisation and IPT publications; CatSalut and SERMAS procurement notices, 2024–2026',
    'BioNixus Spain IPT, autonomous-tender and hospital-pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'IPT language tests with hospital pharmacists in Madrid and Barcelona, measuring which comparator and place-in-therapy sentences later appear in commission papers.',
    'Autonomous-community tender landscaping for immunoglobulins, LMWH and oncology lots across Catalonia, Madrid and Andalusia, including awarded prices where published.',
    'Reference-price cluster reconstructions: which INNs lost originator value after Cinfa, Normon or Kern entered the group.',
    'Dermatology and hospital-injectable account work on Almirall, Rovi and Ferrer versus affiliate competitors, using purchase records rather than claimed share.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
