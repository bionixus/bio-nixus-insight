import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesMexico: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'mexico',
  metaDescription:
    'Pharmaceutical companies in Mexico: Genomma Lab, Sanfer, Liomont, Silanes, PiSA, Neolpharma, Probiomed, Pfizer, COFEPRIS and IMSS — portfolios, channels, buyers.',
  introLead:
    'Mexico is the second-largest medicines market in Latin America, worth close to $20bn at retail value in 2024, and it is unusual in the region for the depth of its domestically owned manufacturers: Sanfer, Liomont, Silanes, PiSA and Genomma Lab sell far beyond the country and hold plants that supply public tenders at scale.',
  introRest:
    'Approval of every product rests with COFEPRIS, whose registration backlog and reliance on reference-agency pathways shape launch timing more than commercial planning does. Public demand is fragmented across IMSS, ISSSTE, IMSS-Bienestar, PEMEX and state health services, but consolidated purchasing has swung between UNOPS, the Secretaría de Salud and, since 2024, Birmex as a state-run buyer and distributor, leaving suppliers with unpredictable award cycles and long receivables. Private demand runs through wholesalers such as Nadro and Marzam into more than 60,000 pharmacy outlets, where consultorios adjacent to pharmacies generate a large share of first-line prescriptions. This page profiles the manufacturers, affiliates and institutions a brand must understand before deciding how to compete for either the public or the private channel in Mexico.',
  stats: [
    { value: '$19.8bn', label: 'Mexican pharmaceutical market at retail value, 2024 (ANAFAM / IMARC)' },
    { value: '~62,500', label: 'Establishments selling medicines, INEGI DENUE, May 2024' },
    { value: '77.4m', label: 'IMSS beneficiaries (derechohabientes), December 2024' },
    { value: '~18%', label: 'Public sector share of market value, 2025 (private channel holds the rest)' },
  ],
  channelHeading: 'How medicines reach patients in Mexico',
  channelBody:
    'Every marketed medicine needs a COFEPRIS registro sanitario, renewable every five years, and since 2020 the agency has accepted abbreviated reviews for products already cleared by the FDA, EMA, Health Canada, Swissmedic or the TGA, which is why most multinational launches now arrive within two to three years of a US approval. Once registered, a product is sold into two very different worlds. The public system buys through consolidated annual purchases that have changed hands repeatedly: the IMSS ran them until 2019, UNOPS was contracted for 2021–2022, the Secretaría de Salud and IMSS took them back, and from 2024 Birmex was designated the single purchaser and logistics operator for federal institutions, with mixed early results on delivery and payment. Awards are based on the Compendio Nacional de Insumos para la Salud, so a molecule outside the compendium cannot be bought by IMSS or ISSSTE at any price. The private channel is larger by value: manufacturers sell to national wholesalers such as Nadro, Marzam and Fármacos Nacionales, which supply the big chains Farmacias Guadalajara, Farmacias del Ahorro, Farmacias Benavides, Farmacias Similares and Walmart, as well as tens of thousands of independent pharmacies. Consultorios adyacentes a farmacias employ physicians who write a very large share of primary-care prescriptions, often for the chain’s own generics. Private hospitals buy directly from manufacturers or through specialised distributors, and out-of-pocket spending on medicines by households has more than doubled in real terms since 2018.',
  companies: [
    {
      name: 'COFEPRIS (Comisión Federal para la Protección contra Riesgos Sanitarios)',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Registration, GMP certification, pharmacovigilance and pricing oversight',
      notes: 'The federal regulator; its registration queue, reliance-pathway rulings and plant inspections determine when and whether a product can be sold in Mexico.',
    },
    {
      name: 'IMSS (Instituto Mexicano del Seguro Social)',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Social security health system covering formal-sector workers and families',
      notes: 'Serving 77 million beneficiaries, IMSS is the largest single purchaser of medicines in the country and anchors the consolidated public tenders.',
    },
    {
      name: 'Birmex (Laboratorios de Biológicos y Reactivos de México)',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'State purchasing agent, vaccine importer and public-sector logistics operator',
      notes: 'Reassigned in 2024 to run consolidated purchases and distribution for federal health institutions, Birmex is now the counterpart for most public volume.',
    },
    {
      name: 'Genomma Lab Internacional',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'OTC medicines, personal care and branded generics across Latin America',
      notes: 'BMV-listed and heavily advertised, Genomma has built its own plant in the State of Mexico and exports to 18 countries from a Mexican base.',
    },
    {
      name: 'Laboratorios Sanfer',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Branded generics, ophthalmology, women’s health, gastroenterology and OTC',
      notes: 'One of the largest privately held Mexican groups, Sanfer has acquired brands from multinationals and operates across Central and South America.',
    },
    {
      name: 'Laboratorios Liomont',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Respiratory, gastrointestinal, pain and paediatric prescription brands',
      notes: 'Family-owned manufacturer with plants in Ocoyoacac; it prospered in the 2021 vaccine-fill campaign and remains a frequent public-tender supplier.',
    },
    {
      name: 'Laboratorios Silanes',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Diabetes, cardiometabolic brands and antivenoms (Instituto Bioclon)',
      notes: 'Silanes combines a strong metformin franchise with the world’s largest antivenom business, exported to the United States and Africa.',
    },
    {
      name: 'Grupo Neolpharma',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Generics, APIs, biotech and contract manufacturing for public tenders',
      notes: 'Owner of Psicofarma and Alpharma, Neolpharma is a high-volume supplier to IMSS and ISSSTE and one of few Mexican groups making its own APIs.',
    },
    {
      name: 'Probiomed',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Biosimilars and recombinant biologics for oncology, nephrology and rheumatology',
      notes: 'Mexico’s first biosimilar developer, with a Tenancingo biotech plant; its products compete with originators in institutional tenders.',
    },
    {
      name: 'Grupo PiSA Farmacéutica',
      hq: 'Guadalajara',
      type: 'Local',
      focus: 'Injectables, IV solutions, oncology, dialysis and hospital supplies',
      notes: 'The dominant supplier of parenteral solutions and hospital injectables to public institutions, PiSA operates one of the largest plant networks in Latin America.',
    },
    {
      name: 'Landsteiner Scientific',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Generics, biosimilars and specialty hospital products',
      notes: 'A mid-sized producer in Toluca that wins consolidated tender lots in oncology and anti-infectives and pursues biosimilar partnerships.',
    },
    {
      name: 'Laboratorios Chinoin',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Prescription brands in pain, respiratory and gastroenterology; OTC lines',
      notes: 'Founded in 1936, Chinoin remains privately owned and pairs a doctor-detailing model with a well-known consumer franchise.',
    },
    {
      name: 'Laboratorios Senosiain',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Cardiovascular, metabolic and CNS branded generics',
      notes: 'Senosiain’s Guanajuato plant supplies its own brands and licensed molecules, with a prescriber base built through long-standing cardiology detailing.',
    },
    {
      name: 'Laboratorios Sophia',
      hq: 'Guadalajara',
      type: 'Local',
      focus: 'Ophthalmology, from dry-eye drops to glaucoma and anti-infectives',
      notes: 'The country’s reference ophthalmic manufacturer, Sophia exports across Latin America, supplies public eye-care programmes and detail ophthalmologists in every major city.',
    },
    {
      name: 'Laboratorios Carnot',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Gynaecology, urology, dermatology and metabolic prescription brands',
      notes: 'A prescription-led Mexican house with an Argentine and Andean footprint, Carnot competes in specialist categories rather than commodity generics.',
    },
    {
      name: 'Pfizer México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Vaccines, oncology, anti-infectives, inflammation and hospital products',
      notes: 'Pfizer’s Toluca plant is a regional supply hub, and its vaccine and biologic lines are among the highest-value lots in public tenders.',
    },
    {
      name: 'Sanofi México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Insulins, vaccines, rare disease, consumer health and established products',
      notes: 'Runs an Ocoyoacac manufacturing site and supplies insulin and vaccines to IMSS and the national immunisation programme in volume.',
    },
    {
      name: 'Bayer de México',
      hq: 'Mexico City',
      type: 'MNC',
      focus: 'Cardiovascular, women’s health, ophthalmology and consumer health',
      notes: 'Bayer manufactures in Lerma and Orizaba and leads several OTC categories through the pharmacy chains alongside its prescription business.',
    },
    {
      name: 'Grupo Nadro',
      hq: 'Mexico City',
      type: 'Distributor',
      focus: 'National pharmaceutical wholesale to chains, independents and hospitals',
      notes: 'The largest private wholesaler in the country, Nadro is the route to independent pharmacies and a required listing for any retail launch.',
    },
    {
      name: 'Marzam',
      hq: 'Mexico City',
      type: 'Distributor',
      focus: 'Full-line wholesale, specialty logistics and pharmacy services',
      notes: 'A second national wholesaler with cold-chain capacity and a growing specialty arm, Marzam also serves private hospitals and government contracts.',
    },
  ],
  categoryBlurbs: {
    local:
      'Mexican-owned manufacturers, several with exports across Latin America, that dominate branded generics, hospital injectables and OTC and supply the bulk of consolidated public tender volume.',
    mnc:
      'Global companies with Mexican plants or large affiliates, carrying vaccines, biologics and innovative specialty brands into IMSS tenders and private hospitals.',
    regional:
      'Latin American groups from Argentina, Brazil and Colombia that operate Mexican subsidiaries for branded generics and consumer health, usually via licensed local manufacturing.',
    trade:
      'National wholesalers, the state purchasing agent and the public institutions whose award decisions and payment terms define the commercial reality of the Mexican market.',
  },
  growthDrivers: [
    {
      title: 'Restructuring of consolidated public procurement',
      desc: 'The move to Birmex as purchaser and logistics operator, combined with multi-year framework awards, is reshaping which manufacturers hold public volume and how quickly they are paid, creating openings for suppliers able to guarantee delivery.',
    },
    {
      title: 'Chronic disease burden and biosimilar entry',
      desc: 'Mexico has one of the highest diabetes and obesity prevalences in the OECD, and the arrival of insulin, GLP-1 and oncology biosimilars from Probiomed, Landsteiner and importers is expanding institutional access while pressuring originator pricing.',
    },
    {
      title: 'Pharmacy chains and adjacent consultorios',
      desc: 'Farmacias Similares, Guadalajara, del Ahorro and Benavides keep adding outlets and clinics, so pharmacy-based physicians increasingly determine first-line therapy and private-label generics gain share at the expense of branded prescriptions.',
    },
    {
      title: 'Nearshoring and export manufacturing',
      desc: 'USMCA rules and announced investments of about MX$12bn in new capacity are attracting API, sterile and biologics production, strengthening Mexico as a supply hub for North and Latin America and raising GMP standards across the domestic industry.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies are the largest in Mexico by domestic sales?',
      a: 'Multinationals such as Pfizer, Sanofi, Bayer, Roche and Novartis lead in value, while Mexican groups Sanfer, Genomma Lab, PiSA, Liomont, Silanes and Neolpharma lead in units and hold most of the consolidated public tender volume. Exact ranks shift with tender cycles and peso movements, and audited retail data understate manufacturers whose sales are concentrated in institutional channels.',
    },
    {
      q: 'How long does COFEPRIS registration take for a new medicine?',
      a: 'Statutory timelines are 60 to 180 working days, but real durations depend on whether the product qualifies for the reliance pathway based on FDA, EMA or other reference approvals. Innovative products under reliance often clear within a year; complex generics and biosimilars usually take longer.',
    },
    {
      q: 'Who buys medicines for the Mexican public sector?',
      a: 'IMSS, ISSSTE, IMSS-Bienestar, PEMEX and state services are the end users, but purchasing has been centralised: Birmex has run the consolidated purchase and distribution since 2024, following earlier arrangements with UNOPS and the Secretaría de Salud. Inclusion in the Compendio Nacional is a precondition.',
    },
    {
      q: 'Why do pharmacy consultorios matter to pharmaceutical brands?',
      a: 'Physicians working in consultorios next to pharmacies see a very large share of primary-care visits and tend to prescribe what the adjoining pharmacy stocks, including private-label generics. Detailing them differs from targeting hospital specialists and often demands trade rather than medical marketing, since the chain’s procurement team decides what the consultorio can recommend.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Mexico?',
      a: 'BioNixus interviews IMSS and ISSSTE pharmacy chiefs, private hospital purchasers, chain category managers and consultorio physicians; maps consolidated tender awards by molecule; audits purchase records at independent pharmacies in Mexico City, Guadalajara and Monterrey; and profiles domestic manufacturers’ plant capacity and export footprints.',
    },
    {
      q: 'Is this list a ranking of Mexican pharmaceutical companies?',
      a: 'It is not. Companies appear because they shape either the public tender channel or the private pharmacy channel and because they surface repeatedly in COFEPRIS records, BMV filings and BioNixus fieldwork. Sequence carries no meaning about revenue or market share.',
    },
  ],
  regulatorSource: {
    name: 'COFEPRIS — Registros Sanitarios de Medicamentos and licensed establishments database',
    url: 'https://www.gob.mx/cofepris',
    asOf: '2026-09-03',
  },
  sources: [
    'ANAFAM submission on Mexican market size and IMSS prescription shortfalls; IMARC market estimate, 2024–2025',
    'INEGI DENUE count of pharmaceutical retail establishments, May 2024; IMSS Informe al Ejecutivo on beneficiaries, December 2024',
    'Bolsa Mexicana de Valores filings for Genomma Lab; Compendio Nacional de Insumos para la Salud and Birmex consolidated purchase notices, 2024–2026',
    'BioNixus Mexico public-tender, hospital pharmacy and retail channel fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Consolidated tender landscaping by molecule across IMSS, ISSSTE and Birmex cycles since 2021: bidders, awarded prices, local versus imported share and reported delivery failures.',
    'Consultorio-physician prescribing studies in Farmacias Similares, del Ahorro and Guadalajara clinics measuring brand versus private-label choice in primary-care categories.',
    'Private hospital purchasing interviews at Grupo Ángeles, Christus Muguerza, ABC and Médica Sur covering formulary entry, distributor terms, payment cycles and willingness to switch to biosimilars.',
    'Retail purchase-record audits at independent pharmacies in Mexico City, Guadalajara and Monterrey estimating wholesaler share and brand penetration for OTC and chronic-care baskets.',
  ],
  publishedDate: '2026-09-03',
  modifiedDate: '2026-09-03',
};
