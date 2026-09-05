import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesFrance: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'france',
  metaDescription:
    'Pharmaceutical companies in France: Sanofi, Servier, Pierre Fabre, Ipsen, Théa, ANSM, HAS and CEPS — transparency, prices, early access.',
  introLead:
    'France still runs one of the most administered medicine markets in Europe: ANSM authorises, HAS scores the medical benefit, CEPS bargains the price, and CNAM pays — while the officinal pharmacist remains a liberal professional rather than a chain employee.',
  introRest:
    'Leem’s 2024 accounts put net turnover on the regulated market at €27.7 billion and the gross regulated total near €38.4 billion before €10.9 billion of conventional discounts and rebates. That gap is the commercial fact of France. Sanofi remains the domestic champion; Servier, Pierre Fabre, Ipsen and Laboratoires Théa are the mid-size French houses that still invent or in-license rather than only genericise. Boehringer, Pfizer and Roche hold large hospital and specialty books. Early access — accès précoce and accès compassionnel, the successors to the old ATU — lets some products reach patients before a CEPS price exists, which is both an opportunity and a later clawback risk. BioNixus keeps the companies and authorities below in one directory because a French launch that treats HAS and CEPS as a single “payer meeting” usually fails one of them.',
  stats: [
    { value: '€27.7bn', label: 'Net turnover on the regulated pharmaceutical market in 2024 (Leem / GERS)' },
    { value: '€38.4bn', label: 'Gross regulated market (retail reimbursable plus hospital) in 2024, before rebates' },
    { value: '€10.9bn', label: 'Conventional discounts and rebates booked against 2024 sales (Leem)' },
    { value: '€856m', label: 'Savings CEPS attributed to list-price cuts in 2024, against an €850m target' },
  ],
  channelHeading: 'Transparency, price negotiation and the officinal network',
  channelBody:
    'ANSM is the national competent authority and the inspector of plants; EMA centralised products still need a French commercial operator and a pharmacovigilance base. Access then splits. HAS, through the Commission de la transparence, assigns an SMR (medical benefit) that decides whether CNAM will reimburse at all, and an ASMR (improvement) that sets CEPS’s bargaining room: ASMR I–III supports a premium, ASMR IV–V usually means a price at or below the comparator. CEPS is not a subcommittee of HAS; it is an inter-ministerial price committee that signs a convention with the company and later invoices the remises that create the famous gross-to-net canyon. Community pharmacies — offices tenues par des pharmaciens libéraux — dispense reimbursed specialties under a regulated margin and a legal cap on commercial discounts (2.5% of ex-factory per line in recent LFSS texts). They are not banners. Hospital products travel through the liste en sus or inside the GHS tariff, with a separate CEPS conversation. Accès précoce can put a medicine in hospitals before that conversation ends, which is why early-access volumes must be modelled as both sales and a future rebate. Wholesalers such as OCP still take the officinal box from the laboratory to the pharmacy.',
  companies: [
    {
      name: 'Sanofi',
      hq: 'Paris',
      type: 'Local',
      focus: 'Vaccines, immunology, rare disease, established products, consumer health (Opella)',
      notes: 'The French champion. Domestic plants and a still-broad CNAM book make it the account every access or manufacturing brief eventually touches.',
    },
    {
      name: 'Servier',
      hq: 'Suresnes',
      type: 'Local',
      focus: 'Cardiometabolic, oncology, generics via Biogaran',
      notes: 'Foundation-owned group: originator brands in cardiology and oncology plus, through Biogaran, one of the largest generic shares in French pharmacies.',
    },
    {
      name: 'Pierre Fabre',
      hq: 'Castres',
      type: 'Local',
      focus: 'Oncology, dermatology, consumer dermo-cosmetics',
      notes: 'Occitan group whose prescription oncology and dermo-cosmetic pharmacy brands give it both a HAS/CEPS life and a liberal-pharmacist life.',
    },
    {
      name: 'Ipsen',
      hq: 'Boulogne-Billancourt',
      type: 'Local',
      focus: 'Oncology, rare disease, neuroscience',
      notes: 'Listed specialty house; French hospital accounts still matter even though most sales now sit outside France.',
    },
    {
      name: 'Laboratoires Théa',
      hq: 'Clermont-Ferrand',
      type: 'Local',
      focus: 'Ophthalmology, from dry eye to glaucoma and anti-infectives',
      notes: 'Independent Auvergne specialist that details ophthalmologists across Europe from a French industrial base and a pharmacy-heavy channel.',
    },
    {
      name: 'Biogaran',
      hq: 'Colombes',
      type: 'Local',
      focus: 'Unbranded generics for officinal substitution',
      notes: 'Servier’s generics arm and a default name when a reimbursed INN falls into the répertoire des génériques.',
    },
    {
      name: 'Laboratoires Expanscience',
      hq: 'Paris',
      type: 'Local',
      focus: 'Rheumatology (Piascledine), dermo-paediatrics, Mustela',
      notes: 'Family laboratory that straddles a reimbursed rheumatology brand and a consumer-health line sold through the same officinal network.',
    },
    {
      name: 'Mayoly Spindler',
      hq: 'Chatou',
      type: 'Local',
      focus: 'Gastroenterology, consumer health, licensed brands',
      notes: 'Mid-size French house whose GI and self-medication brands live or die on pharmacist recommendation rather than on hospital formularies.',
    },
    {
      name: 'Boehringer Ingelheim France',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Cardiometabolic, respiratory, animal health, Reims manufacturing',
      notes: 'German family group with a major French plant at Reims and a CNAM-relevant human-pharma book in diabetes, cardio and respiratory.',
    },
    {
      name: 'Pfizer France',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Vaccines, oncology, rare disease, hospital anti-infectives',
      notes: 'Innovator affiliate whose French net sales are inseparable from CEPS remises and, for some products, from accès-précoce volumes that later true-up.',
    },
    {
      name: 'Roche SAS',
      hq: 'Boulogne-Billancourt',
      type: 'MNC',
      focus: 'Oncology, haematology, neuroscience, diagnostics',
      notes: 'Hospital and liste-en-sus specialist; ASMR wording and CEPS conventions decide French use more than pharmacy share.',
    },
    {
      name: 'Novartis Pharma SAS',
      hq: 'Rueil-Malmaison',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, gene and cell therapy',
      notes: 'Affiliate whose high-ASMR files still meet a CEPS that has been asked to find more than a billion euros of price cuts in the next budget cycle.',
    },
    {
      name: 'Viatris France',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Established brands, generics, hospital anti-infectives',
      notes: 'Post-Upjohn established-products house competing with Biogaran and other generic operators once a molecule is substitutable.',
    },
    {
      name: 'ANSM',
      hq: 'Saint-Denis',
      type: 'Government',
      focus: 'Authorisation, inspections, shortages, early-access scientific opinions',
      notes: 'Competent authority. Shortage management and the scientific side of accès précoce sit here, not at HAS or CEPS.',
    },
    {
      name: 'Haute Autorité de santé (HAS)',
      hq: 'Saint-Denis',
      type: 'Government',
      focus: 'SMR / ASMR transparency opinions, efficiency opinions, guidelines',
      notes: 'The scoring body. An ASMR V is not a polite suggestion; it is the number CEPS will use to refuse a premium.',
    },
    {
      name: 'CEPS',
      hq: 'Paris',
      type: 'Government',
      focus: 'Price conventions, remises, annual price-cut targets',
      notes: 'Inter-ministerial committee that signs the price and later invoices the rebates that turn a €38bn gross market into a €28bn net one.',
    },
    {
      name: 'Caisse nationale de l’Assurance maladie (CNAM)',
      hq: 'Paris',
      type: 'Government',
      focus: 'Reimbursement of officinal and hospital medicines, ONDAM execution',
      notes: 'The payer that actually reimburses the pharmacy and the hospital once HAS has said yes and CEPS has signed. Listing without CNAM coding is theatre.',
    },
    {
      name: 'OCP Répartition',
      hq: 'Saint-Ouen',
      type: 'Distributor',
      focus: 'Full-line wholesale to officinal pharmacies',
      notes: 'Phoenix-owned répartiteur; still the standard physical path from laboratory to liberal pharmacist for reimbursed community specialties.',
    },
  ],
  categoryBlurbs: {
    local:
      'French-owned laboratories from Sanofi’s scale to Théa’s ophthalmology and Servier’s dual originator-plus-Biogaran model, still inventing or in-licensing rather than only distributing.',
    mnc:
      'German, Swiss and US affiliates whose French net is defined by ASMR scores and CEPS remises, plus Viatris competing once a brand becomes substitutable.',
    regional:
      'European mid-size houses that keep a French exploitant for ANSM and CEPS files without building a Castres- or Suresnes-scale organisation.',
    trade:
      'ANSM, HAS, CEPS and CNAM in sequence, and the répartiteurs that serve liberal pharmacists who are not employees of a chain.',
  },
  growthDrivers: [
    {
      title: 'Gross-to-net widening under CEPS',
      desc: '€10.9 billion of 2024 remises and an €856 million price-cut harvest mean list price is not a forecast input. Launch models that skip the convention overstate France by a third or more.',
    },
    {
      title: 'HAS transparency as the real first meeting',
      desc: 'SMR decides reimbursement; ASMR decides bargaining room. Files that treat HAS as a formality and rush to CEPS lose the only lever that supports a premium.',
    },
    {
      title: 'Accès précoce before a signed price',
      desc: 'Early-access pathways put some hospital products into wards months before CEPS closes, creating volume, political facts and a later true-up that finance teams must reserve for.',
    },
    {
      title: 'The officinal pharmacist as a liberal gate',
      desc: 'Substitution, conseil and the legal discount cap make the independent pharmacist a commercial actor. Consumer-health and mature brands still live or die on that relationship, not on a banner planogram.',
    },
  ],
  sections: [
    {
      heading: 'Why HAS and CEPS must not be briefed as one institution',
      paragraphs: [
        'Transparency commissioners score clinical added value against a comparator they choose. CEPS members then translate that score into a price and a remise schedule under an Accord cadre with Leem. Sending the same slide to both rooms is a common error: HAS will ignore budget rhetoric, and CEPS will ignore a moving clinical story that was not in the avis.',
        'Accès précoce adds a third clock. ANSM and HAS share the scientific gate for early access; CEPS arrives later to regularise the price. Volumes shipped in the interval are real, and so are the rebates that follow. French hospital fieldwork has to ask what was used under early access, not only what is on the current convention.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which French-owned laboratories still shape the domestic market?',
      a: 'Sanofi, Servier (and Biogaran), Pierre Fabre, Ipsen, Théa, Expanscience and Mayoly. Sanofi is in a different weight class; the others win in ophthalmology, dermo-oncology, GI and generics rather than across the board.',
    },
    {
      q: 'What do SMR and ASMR actually change for a price?',
      a: 'SMR insufficient means CNAM will not reimburse. ASMR I–III is the usual condition for a price above the comparator; ASMR IV–V points CEPS toward a discount. Efficiency opinions sit beside that pair for high-cost files.',
    },
    {
      q: 'Is the old ATU still how early access works?',
      a: 'The ATU name was replaced in 2021 by accès précoce and accès compassionnel. The commercial idea is the same: some hospital products reach patients before a CEPS price, then regularise. Teams that still say only “ATU” will miss the current criteria.',
    },
    {
      q: 'Why are French pharmacies described as a liberal profession?',
      a: 'The officinal pharmacist owns the office, is personally responsible for dispensing, and is not a store manager in a listed chain. Margins and discounts are regulated. Trade terms therefore look nothing like a Spanish cooperative or a Swedish banner negotiation.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in France?',
      a: 'Through HAS- and CEPS-experienced access interviews in Paris, hospital-pharmacist and early-access work in Paris and Lyon, officinal substitution studies with liberal pharmacists, and reconstructions of remises where companies will discuss them.',
    },
    {
      q: 'Does placement in this directory imply a French market-share order?',
      a: 'This directory is an account map. Sequence does not encode chiffre d’affaires, HAS scores or CEPS outcomes.',
    },
  ],
  regulatorSource: {
    name: 'Agence nationale de sécurité du médicament et des produits de santé (ANSM) — authorised medicines and inspected establishments',
    url: 'https://ansm.sante.fr',
    asOf: '2026-09-04',
  },
  sources: [
    'Leem, The Pharmaceutical Market in 2025 / Bilan économique — 2024 net €27.7bn, gross regulated €38.4bn, remises €10.9bn',
    'CEPS 2024 activity report as cited by Simon-Kucher and Leem — €856m price-cut savings',
    'HAS transparency doctrine; LFSS texts on officinal discount caps; ANSM early-access pages',
    'BioNixus France HAS/CEPS, hospital and officinal fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'HAS avis reconstructions: SMR/ASMR wording versus the comparator the company hoped for, used to brief CEPS negotiation ranges.',
    'Hospital early-access interviews in Paris and Lyon on volumes shipped under accès précoce before a convention existed, and on the later true-up.',
    'Officinal substitution and conseil studies with liberal pharmacists in Île-de-France and the Lyon area for mature and genericised INNs.',
    'Gross-to-net workshops with affiliate finance teams on remises, clause de sauvegarde exposure and the difference between GERS gross and net.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
