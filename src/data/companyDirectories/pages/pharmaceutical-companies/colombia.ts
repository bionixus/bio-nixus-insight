import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesColombia: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'colombia',
  metaDescription:
    'Pharmaceutical companies in Colombia: Procaps, Tecnoquímicas, Lafrancol, Genfar, Pfizer, INVIMA and ADRES — EPS reimbursement, CIR prices, Andean plants.',
  introLead:
    'Colombia’s medicine business is an insurance business: almost every resident is assigned to an EPS, ADRES moves the UPC money, and ASCIF put 2024 market value near COP 29 trillion, with ninety-eight INVIMA-certified plants still supplying about four fifths of units used in the system.',
  introRest:
    'INVIMA holds the sanitary registration and inspects those plants. The Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos (CIR) then caps many molecules, so a launch model that worked in an unregulated Andean neighbour can fail on the first circular. Public and contributory demand is not a ministry warehouse; it is a chain of EPS plans that contract gestores farmacéuticos such as Audifarma, Cruz Verde and Colsubsidio, then wait on ADRES to replenish the UPC and the maximum budgets for high-cost care. When that chain stalls, laboratories collect 90- to 180-day receivables and some gestores enter reorganisation, which is why cash-cycle diligence sits next to clinical diligence in any Colombia plan. Constitutional tutelas still pull originator and orphan brands into treatment when the Plan de Beneficios omits them, creating a parallel high-cost channel that Roche, Novartis and Pfizer know well. On the industrial side, Procaps in Barranquilla and Tecnoquímicas in Cali give Colombia a genuine Andean manufacturing base, while Sanofi’s Genfar and Lafrancol brands sit on top of acquired Colombian houses. The accounts below are the makers, affiliates, gestores and public bodies BioNixus treats as the competitive set in Bogotá, Medellín and Cali.',
  stats: [
    { value: 'COP 29tn', label: 'Pharmaceutical market in 2024, per ASCIF' },
    { value: '98', label: 'INVIMA-certified pharmaceutical plants (ASCIF, 2025)' },
    { value: '~80%', label: 'Share of medicines used, by volume, supplied by domestic manufacturers (ASCIF)' },
    { value: '28–30%', label: 'Medicines as a share of the UPC health-insurance capitation (ASCIF)' },
  ],
  channelHeading: 'How INVIMA, CIR, EPS plans and ADRES move a medicine',
  channelBody:
    'A product needs an INVIMA registro sanitario held by a Colombian establishment, plus GMP certification of the manufacturing site. Parallel to that file, the CIR publishes price-regulation circulars that set maximums for a long list of molecules; companies therefore model both the INVIMA clock and the circular that will cap the ex-manufacturer price. Once registered, most volume does not go to a ministry tender. EPS organisations in the contributory and subsidised regimes contract pharmacies and gestores to dispense the Plan de Beneficios, and ADRES pays the UPC plus, for many high-cost technologies, maximum budgets that have been politically contested. Specialised and oncologic lines often travel through those maximum-budget rules or through tutelas ordered by judges under Article 86 of the Constitution, which is why access for a new biologic can look like a legal caseload as much as a formulary win. Institutional gestores — Audifarma, Cruz Verde, Colsubsidio, Cafam — concentrate dispensing for tens of millions of affiliates and have become the credit counterpart that laboratories actually invoice. Retail OTC and private prescription volume, by contrast, still runs through Tecnoquímicas-style consumer brands and through independent droguerías and chain pharmacies that patients pay out of pocket. Andean export manufacturing, especially Procaps softgels and solids shipped from Barranquilla, sits beside this domestic insurance machine and is one reason Colombia is used as a regional supply point rather than only as a demand market.',
  companies: [
    {
      name: 'INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos)',
      hq: 'Bogotá',
      type: 'Government',
      focus: 'Sanitary registration, GMP certification and market surveillance',
      notes: 'The gate on every launch; backlog clearance and plant inspections in 2024–2026 have been as commercially important as any EPS listing.',
    },
    {
      name: 'ADRES (Administradora de los Recursos del Sistema General de Seguridad Social en Salud)',
      hq: 'Bogotá',
      type: 'Government',
      focus: 'UPC transfers and high-cost budget flows to EPS organisations',
      notes: 'The national purse for the insurance system; when ADRES payments slow, EPS plans and then gestores delay laboratory invoices.',
    },
    {
      name: 'Ministerio de Salud y Protección Social',
      hq: 'Bogotá',
      type: 'Government',
      focus: 'Benefits plan, pharmaceutical policy and UPC-setting',
      notes: 'Writes the Plan de Beneficios and the political arithmetic of the UPC, which decides whether a newly registered molecule is actually paid for.',
    },
    {
      name: 'Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos (CIR)',
      hq: 'Bogotá',
      type: 'Government',
      focus: 'Maximum-price circulars for regulated medicines and devices',
      notes: 'Price regulator whose circulars can erase a launch premium overnight and force Andean transfer-price reviews.',
    },
    {
      name: 'Procaps',
      hq: 'Barranquilla',
      type: 'Local',
      focus: 'Softgels, solids, consumer health and contract manufacturing for the Andes',
      notes: 'NASDAQ-listed Barranquilla group that is the clearest Colombian example of a plant used as an Andean export platform, not only a domestic brand house.',
    },
    {
      name: 'Tecnoquímicas',
      hq: 'Cali',
      type: 'Local',
      focus: 'OTC, personal care, generics and mass-channel brands (including MK)',
      notes: 'Cali-based private group that owns some of the most visible pharmacy brands in the country and a plant network built for volume, not specialty.',
    },
    {
      name: 'Laboratorio Franco Colombiano (Lafrancol)',
      hq: 'Cali',
      type: 'MNC',
      focus: 'Branded generics and established prescription lines inside Sanofi',
      notes: 'Historic Colombian house acquired by Sanofi; the Lafrancol name still appears on packs and in EPS listings alongside Genfar.',
    },
    {
      name: 'Genfar (Sanofi)',
      hq: 'Cali',
      type: 'MNC',
      focus: 'Affordable generics for the EPS and private pharmacy channels',
      notes: 'Sanofi’s Andean generics brand, built on a Colombian manufacturing base and used as the high-volume counterpart to Sanofi’s innovator book.',
    },
    {
      name: 'Sanofi Colombia',
      hq: 'Bogotá',
      type: 'MNC',
      focus: 'Vaccines, diabetes, rare disease and the Genfar / Lafrancol generics stack',
      notes: 'The affiliate that now owns the two largest acquired Colombian generics identities and still details innovator specialties to hospital committees.',
    },
    {
      name: 'Pfizer Colombia',
      hq: 'Bogotá',
      type: 'MNC',
      focus: 'Vaccines, oncology, anti-infectives and hospital specialty',
      notes: 'Innovator affiliate whose high-cost lines are frequent subjects of EPS maximum-budget fights and of tutelas when the benefits plan lags the label.',
    },
    {
      name: 'Novartis de Colombia',
      hq: 'Bogotá',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology and ophthalmology',
      notes: 'Keeps a specialty model that depends on EPS high-cost pathways and judicial access as much as on INVIMA approval.',
    },
    {
      name: 'Roche Colombia',
      hq: 'Bogotá',
      type: 'MNC',
      focus: 'Oncology, neuroscience, ophthalmology and diagnostics',
      notes: 'A regular party in tutela and maximum-budget cases for oncology biologics, with diagnostics pulling companion-test demand in private institutes.',
    },
    {
      name: 'Abbott Colombia',
      hq: 'Bogotá',
      type: 'MNC',
      focus: 'Established pharmaceuticals, nutrition and diagnostics',
      notes: 'Broad affiliate whose nutrition and mature brands sit in both EPS dispensaries and private pharmacies, unlike pure oncology houses.',
    },
    {
      name: 'Laboratorios Chalver',
      hq: 'Bogotá',
      type: 'Local',
      focus: 'Generics and hospital products for institutional contracts',
      notes: 'Domestic manufacturer that competes for EPS and hospital lots where CIR-capped molecules leave little room for brand premiums.',
    },
    {
      name: 'Humax Pharmaceutical',
      hq: 'Medellín',
      type: 'Local',
      focus: 'Branded generics and specialty hospital lines',
      notes: 'Antioquia-based lab that shows up in Medellín institutional work and in Andean export registrations beyond the EPS channel.',
    },
    {
      name: 'Laboratorios Ecar',
      hq: 'Medellín',
      type: 'Local',
      focus: 'Primary-care generics and institutional tenders',
      notes: 'Another Medellín manufacturer used as a price benchmark in EPS generic lots once CIR circulars have flattened originator mark-ups.',
    },
    {
      name: 'Adium Colombia (ex Biotoscana)',
      hq: 'Bogotá',
      type: 'Regional',
      focus: 'Specialty and licensed innovator brands across the Andes',
      notes: 'Regional specialty group that in-licenses oncology and rare-disease products for Colombia when a global affiliate is thin or absent.',
    },
    {
      name: 'Audifarma',
      hq: 'Pereira',
      type: 'Distributor',
      focus: 'EPS pharmaceutical management and institutional dispensing',
      notes: 'A leading gestor whose payment delays and 2020s reorganisation made it a credit-risk case study for every laboratory selling into the EPS channel.',
    },
    {
      name: 'Cruz Verde Colombia',
      hq: 'Bogotá',
      type: 'Retailer',
      focus: 'Pharmacy chain and EPS dispensing network',
      notes: 'Retail and institutional hybrid: a consumer-facing chain that also dispenses for millions of EPS affiliates, so listing talks cover two P&Ls.',
    },
  ],
  categoryBlurbs: {
    local:
      'Colombian manufacturers in Barranquilla, Cali, Medellín and Bogotá that still supply most units used in the EPS system and, in Procaps’ case, run Andean export plants.',
    mnc:
      'Innovator affiliates plus Sanofi’s acquired Colombian generics brands, selling into EPS high-cost pathways, tutelas and private institutes.',
    regional:
      'Andean specialty groups such as Adium that in-license molecules for Colombia rather than building a full primary-care field force.',
    trade:
      'EPS gestores, Cruz Verde and the public bodies — INVIMA, CIR, ADRES, the Ministry — whose circulars, UPC flows and invoices define cash conversion.',
  },
  growthDrivers: [
    {
      title: 'EPS and ADRES liquidity stress',
      desc: 'Stretched UPC arithmetic and gestor arrears are forcing laboratories to ration institutional credit and to prefer cash retail or export plants over EPS-only launches.',
    },
    {
      title: 'CIR price circulars on originator premiums',
      desc: 'Maximum-price regulation keeps pulling high-visibility molecules toward generic and biosimilar bids, which favours Genfar, Chalver, Ecar and other volume manufacturers.',
    },
    {
      title: 'Tutela-driven high-cost access',
      desc: 'Judicial orders continue to open treatment for oncology and orphan brands omitted from the benefits plan, creating a caseload channel that specialty affiliates must staff.',
    },
    {
      title: 'Andean manufacturing from Barranquilla and Cali',
      desc: 'Procaps and Tecnoquímicas plants, plus Sanofi’s inherited Colombian sites, let companies use Colombia as a supply hub for Central America and the Andes rather than only as a demand market.',
    },
    {
      title: 'INVIMA backlog clearance',
      desc: 'Agency efforts to work through pending sanitary registrations change launch sequencing: a file that sat for years can suddenly compete with an already-detailed brand.',
    },
  ],
  faq: [
    {
      q: 'Which laboratories actually make medicines in Colombia?',
      a: 'Procaps, Tecnoquímicas, the Sanofi-owned Genfar and Lafrancol sites, Chalver, Humax and Ecar are the names that recur on INVIMA plant lists. ASCIF counted 98 certified plants and said domestic makers still supply about four fifths of units. Innovator affiliates import most of their specialty book.',
    },
    {
      q: 'How does INVIMA registration interact with CIR prices?',
      a: 'INVIMA decides whether the product may be sold; CIR circulars then often cap what may be charged. A clean sanitary file with an unworkable maximum price is a common reason specialty teams pause a Colombia launch after approval.',
    },
    {
      q: 'Who pays for medicines inside the EPS system?',
      a: 'EPS plans contract gestores and pharmacies to dispense the benefits plan. ADRES funds those plans through the UPC and through maximum budgets for many high-cost technologies. Laboratories invoice the gestor or the EPS, not ADRES directly, which is why gestor liquidity has become a credit topic.',
    },
    {
      q: 'What is a tutela and why do specialty brands care?',
      a: 'A constitutional injunction (Article 86) that a patient can use to obtain a medicine the benefits plan does not cover. Oncology and orphan brands at Roche, Novartis and Pfizer still see a material slice of treated patients arrive through this judicial door.',
    },
    {
      q: 'How does BioNixus study the Colombian pharmaceutical industry on the ground?',
      a: 'EPS and gestor credit interviews in Bogotá; hospital and oncology-committee work in Bogotá, Medellín and Cali; CIR circular impact reviews by molecule; and plant tours at Barranquilla and Cali sites used for Andean supply.',
    },
    {
      q: 'Should readers treat this Colombia list as a sales ranking?',
      a: 'No. The directory is a map of INVIMA-licensed makers, EPS-facing institutions and Andean plants that BioNixus meets in fieldwork. Order is editorial, not a league table of revenue.',
    },
  ],
  regulatorSource: {
    name: 'INVIMA — registros sanitarios and certified pharmaceutical establishments',
    url: 'https://www.invima.gov.co',
    asOf: '2026-09-04',
  },
  sources: [
    'ASCIF / PharmaBoardroom interview with Clara Rodríguez on 2024 market value (COP 29 trillion), plant count and domestic volume share, 2025',
    'La República and Portafolio coverage of EPS / gestor arrears and Audifarma reorganisation, 2024–2025',
    'Ministry of Health and CIR circulars on medicine price regulation; ADRES UPC and maximum-budget rules',
    'BioNixus Colombia EPS, hospital and manufacturing fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'EPS medical-director and gestor credit interviews in Bogotá mapping UPC shortfalls, maximum-budget disputes and laboratory receivable days.',
    'Oncology and high-cost committee discussions in Bogotá, Medellín and Cali on tutela caseloads versus benefits-plan listings for the same molecule.',
    'CIR circular impact reviews: pre- and post-regulation ex-manufacturer prices for a basket of originator and generic molecules.',
    'Andean plant and export interviews at Barranquilla and Cali sites, including Procaps contract-manufacturing capacity and Tecnoquímicas OTC lines.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
