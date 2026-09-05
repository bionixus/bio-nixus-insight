import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesPakistan: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'pakistan',
  metaDescription:
    'Pharmaceutical companies in Pakistan: Getz, Searle, Sami, GSK Pakistan, Abbott, Hilton, Highnoon, Ferozsons, Martin Dow and DRAP — portfolios, channels, tenders.',
  introLead:
    'Pakistan’s medicine market passed one trillion rupees in annual sales during 2025, and unlike most South Asian markets it is dominated by home-grown branded-generic houses rather than by multinationals or by unbranded generics.',
  introRest:
    'Around 750 companies hold DRAP manufacturing or import licences, but the top fifteen account for roughly three fifths of retail value, and Getz Pharma, Sami, Searle, Abbott and GSK have traded the top positions for a decade. Most of the volume is prescription-generated but paid in cash at pharmacies, which is why field forces of several thousand medical representatives remain the main competitive weapon. Multinationals have thinned out: Sanofi and Pfizer sold their Pakistani operations to local groups in 2023–2024, while Abbott, GSK, Haleon and Novartis stayed and continue to rank among the ten largest sellers. Lahore and Karachi host most plants, formulation is almost entirely from imported APIs, and exports rose to a record $457 million in FY25 before the Afghanistan border closure cut shipments. The table below groups manufacturers, affiliates, the regulator and the largest provincial buyer so that a brand team can see who competes in each therapeutic class and through which channel.',
  stats: [
    { value: 'PKR 1tn+', label: 'Retail pharmaceutical sales in 2025 (about $3.8bn), IQVIA MAT December 2025' },
    { value: '750+', label: 'Companies in the IQVIA Pakistan universe holding DRAP licences' },
    { value: '~61%', label: 'Share of market value held by the fifteen largest companies' },
    { value: '$457m', label: 'Pharmaceutical exports in FY25, a 34% year-on-year increase' },
  ],
  channelHeading: 'How pharmaceutical companies reach patients in Pakistan',
  channelBody:
    'Every product sold in Pakistan needs a DRAP registration and, for imports, a locally licensed importer who becomes the marketing authorisation holder; multinationals use their own affiliate while smaller foreign firms appoint a Pakistani partner such as AGP, OBS or Hilton to hold the file. DRAP also sets maximum retail prices, with essential medicines under a tighter formula than the non-essential list that was deregulated in 2024, so launch timing is planned around pricing decisions. Once registered, a company hands physical distribution to one or two national distributors, most often Muller & Phipps, IBL Operations, Premier Agencies or Ali Gohar, which carry stock to some 50,000 pharmacies and medical stores and to private hospitals on credit. Demand creation stays with the manufacturer: sales representatives call on general practitioners, consultants and hospital pharmacists, and prescription share is tracked through IQVIA panel data and pharmacy audits. Public procurement is provincial rather than national, so Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan each tender for their hospital networks and basic health units, and the Sehat Sahulat insurance scheme routes inpatient volume to empanelled private hospitals in KP and parts of Punjab. Organised pharmacy chains such as Servaid, D.Watson and Dvago and online platforms are still a small slice of outlets but negotiate listings directly, especially for OTC and nutrition lines.',
  companies: [
    {
      name: 'Getz Pharma',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Cardiometabolic, anti-infectives, gastroenterology, CNS',
      notes: 'Privately held company that has held the top retail position for several years and runs one of the largest field forces in the country.',
    },
    {
      name: 'The Searle Company',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Gastroenterology, cardiology, paediatric antibiotics',
      notes: 'PSX-listed member of the IBL group with brands such as Nuberol and Gravinate; also sells through its sister distributor IBL Operations.',
    },
    {
      name: 'Sami Pharmaceuticals',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Antibiotics, urology, ophthalmics, dermatology',
      notes: 'Family-owned manufacturer consistently in the top three by value, with strong hospital anti-infective franchises and a growing export book.',
    },
    {
      name: 'GSK Pakistan',
      hq: 'Karachi',
      type: 'MNC',
      focus: 'Antibiotics, respiratory, vaccines, dermatology',
      notes: 'PSX-listed affiliate manufacturing at Karachi sites; Augmentin and Calpol remain among the country’s largest brands by revenue.',
    },
    {
      name: 'Abbott Laboratories (Pakistan)',
      hq: 'Karachi',
      type: 'MNC',
      focus: 'Established pharmaceuticals, paediatric nutrition, diagnostics',
      notes: 'Listed affiliate whose Brufen, Duphaston and nutrition lines give it one of the broadest pharmacy footprints among multinationals.',
    },
    {
      name: 'Haleon Pakistan',
      hq: 'Karachi',
      type: 'MNC',
      focus: 'OTC analgesics, oral care, vitamins',
      notes: 'Consumer-health company spun out of GSK, owning Panadol, the single largest pharmacy brand in Pakistan by value.',
    },
    {
      name: 'Novartis Pharma (Pakistan)',
      hq: 'Karachi',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, ophthalmology',
      notes: 'Innovator affiliate with a Jamshoro manufacturing legacy; now concentrates on specialty launches and patient-access programmes.',
    },
    {
      name: 'Hilton Pharma',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Cardiology, diabetes, anti-infectives, licensed brands',
      notes: 'Manufactures its own portfolio and in-licenses products from foreign originators, making it a frequent partner for companies without an affiliate.',
    },
    {
      name: 'Ferozsons Laboratories',
      hq: 'Lahore',
      type: 'Local',
      focus: 'Hepatology, oncology, gastroenterology, biologics via BF Biosciences',
      notes: 'PSX-listed firm known for licensed hepatitis C antivirals and for BF Biosciences, its joint venture producing interferons and biosimilars.',
    },
    {
      name: 'Highnoon Laboratories',
      hq: 'Lahore',
      type: 'Local',
      focus: 'Cardiology, diabetes, GI, respiratory',
      notes: 'Listed Lahore manufacturer with seven brands above one billion rupees and export awards in 2024 and 2025 for its African and Asian shipments.',
    },
    {
      name: 'CCL Pharmaceuticals',
      hq: 'Lahore',
      type: 'Local',
      focus: 'Cardiology, CNS, gastroenterology, injectables',
      notes: 'Privately held Lahore company with a large primary-care field force and a growing presence in Central Asian export markets.',
    },
    {
      name: 'Martin Dow',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Cardiology, CNS, vitamins, licensed innovator brands',
      notes: 'Acquired Roche’s Pakistani plant and later Merck KGaA’s local business, so its portfolio mixes own generics with ex-innovator brands.',
    },
    {
      name: 'AGP Limited',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Cardiometabolic, respiratory, licensed and acquired brands',
      notes: 'PSX-listed company built through acquisitions, including the Pakistan rights to several multinational portfolios and a Sandoz distribution agreement.',
    },
    {
      name: 'Bosch Pharmaceuticals',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Anti-infectives, gastroenterology, cardiology',
      notes: 'Mid-sized manufacturer that has climbed the retail rankings through aggressive primary-care promotion and rapid generic launches.',
    },
    {
      name: 'PharmEvo',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Cardiology, diabetes, urology, gastroenterology',
      notes: 'Karachi company with a reputation for medical education programmes and export registrations across Africa and Southeast Asia.',
    },
    {
      name: 'OBS Pakistan',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Ex-AstraZeneca and MSD brands, cardiology, anti-infectives',
      notes: 'Took over the Pakistani operations of AstraZeneca and later parts of MSD’s portfolio, illustrating how local groups absorb departing multinationals.',
    },
    {
      name: 'Macter International',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Anti-infectives, cardiology, dermatology, biosimilars',
      notes: 'Listed manufacturer with a dedicated biosimilar unit and one of the older EU-audited facilities in Karachi.',
    },
    {
      name: 'Atco Laboratories',
      hq: 'Karachi',
      type: 'Local',
      focus: 'Anti-infectives, gynaecology, nutrition, dermatology',
      notes: 'Family-run company whose antibiotic and gynaecology franchises are widely prescribed in secondary cities of Sindh and Punjab.',
    },
    {
      name: 'Drug Regulatory Authority of Pakistan (DRAP)',
      hq: 'Islamabad',
      type: 'Government',
      focus: 'Registration, GMP licensing, pricing and pharmacovigilance',
      notes: 'Federal regulator whose pricing decisions and registration timelines determine launch sequencing for every company on this list.',
    },
    {
      name: 'Punjab Specialized Healthcare & Medical Education Department',
      hq: 'Lahore',
      type: 'Government',
      focus: 'Tenders for teaching hospitals and tertiary institutes',
      notes: 'Largest single provincial buyer of hospital medicines, procuring for Mayo, Jinnah, Services and other teaching hospitals in Punjab.',
    },
    {
      name: 'Muller & Phipps Pakistan',
      hq: 'Karachi',
      type: 'Distributor',
      focus: 'National distribution for multinational and local principals',
      notes: 'Distribution house that physically delivers many of the brands above to pharmacies and hospitals; a shared dependency across competitors.',
    },
  ],
  categoryBlurbs: {
    local:
      'Karachi and Lahore-based branded-generic manufacturers that dominate prescription value, run large medical-representative teams and increasingly in-license or acquire multinational brands.',
    mnc:
      'The remaining innovator and consumer-health affiliates, several of them PSX-listed, that manufacture locally and hold the largest single pharmacy brands in analgesics, antibiotics and nutrition.',
    regional:
      'Gulf and South Asian groups that enter through licensing agreements with Pakistani manufacturers or through DRAP-registered importers rather than with their own affiliates.',
    trade:
      'The national distributors that carry stock on credit to tens of thousands of outlets, plus the federal regulator and provincial health departments that set prices and award public tenders.',
  },
  growthDrivers: [
    {
      title: 'Price deregulation of non-essential medicines',
      desc: 'DRAP’s 2024 decision to free prices of products outside the essential list lifted industry margins above 40% and triggered a wave of relaunches, so companies are re-evaluating which brands to promote and which to harvest.',
    },
    {
      title: 'Multinational exits and local consolidation',
      desc: 'Sale of the Pfizer and Sanofi affiliates to Pakistani groups, following the earlier AstraZeneca, Roche and Merck transfers, keeps moving established brands into local hands and reshuffling field-force coverage across therapy areas.',
    },
    {
      title: 'Export drive and regulatory upgrades',
      desc: 'Record shipments to Africa, Central Asia and the Philippines, supported by PharmEx Pakistan and WHO-GMP upgrades, are pushing Highnoon, Getz, PharmEvo and CCL to invest in plants that also raise domestic quality benchmarks.',
    },
    {
      title: 'Chronic disease and insurance-backed hospital demand',
      desc: 'Diabetes prevalence above 30% in adults, rising hypertension and Sehat Sahulat coverage in KP and Punjab expand cardiometabolic prescribing and institutional purchasing, favouring companies with both primary-care and hospital teams.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies sell the most in Pakistan?',
      a: 'Getz Pharma, Sami, Abbott, GSK and Searle usually occupy the top five positions in IQVIA retail audits, followed by Haleon, Hilton, Highnoon, Martin Dow and Novartis. Positions shift year to year, and local companies now hold most of the top twenty.',
    },
    {
      q: 'Are multinationals leaving Pakistan?',
      a: 'Several have sold their affiliates to local groups because of currency depreciation and price controls, including Pfizer, Sanofi, AstraZeneca and Merck KGaA. Abbott, GSK, Haleon and Novartis remain with manufacturing or commercial operations in Karachi.',
    },
    {
      q: 'How are medicine prices set in Pakistan?',
      a: 'DRAP fixes maximum retail prices for essential medicines under the Drug Pricing Policy, with annual adjustments linked to inflation. Prices of non-essential medicines were deregulated in 2024, which is why margins and launch activity rose sharply in 2025.',
    },
    {
      q: 'Who buys medicines for public hospitals in Pakistan?',
      a: 'Health is a provincial responsibility, so Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan run their own tenders, with Punjab’s specialised healthcare and primary healthcare departments the largest buyers. Federal institutions and the armed forces procure separately.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Pakistan?',
      a: 'By interviewing prescribers, hospital pharmacists and pharmacy owners in Karachi, Lahore, Islamabad, Peshawar and secondary cities on brand perception and representative quality, auditing pharmacy purchase records to estimate brand share by molecule, and mapping provincial tender awards.',
    },
    {
      q: 'Is this a ranking of Pakistani pharmaceutical companies?',
      a: 'It is not. The list groups manufacturers, affiliates and public bodies that appear repeatedly in BioNixus Pakistan projects and on DRAP records; sequence in the table does not reflect turnover or market share.',
    },
  ],
  regulatorSource: {
    name: 'Drug Regulatory Authority of Pakistan (DRAP) — registered drug manufacturers and importers',
    url: 'https://www.dra.gov.pk',
    asOf: '2026-09-03',
  },
  sources: [
    'IQVIA Pakistan retail audit, MAT December 2025, as cited in Highnoon Laboratories corporate briefing, 2026',
    'PACRA pharmaceutical sector research and State Bank of Pakistan export data, FY25–FY26',
    'Pakistan Stock Exchange annual reports for Searle, GSK Pakistan, Abbott Pakistan, Ferozsons, Highnoon, AGP and Macter, 2024–2025',
    'BioNixus Pakistan prescriber, pharmacy and hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Brand-perception and detailing-quality interviews with 60–120 general practitioners, cardiologists and diabetologists across five cities, benchmarking local branded generics against multinational originals.',
    'Molecule-level brand share estimation from pharmacy purchase-record audits in Karachi, Lahore and Rawalpindi for cardiometabolic, antibiotic and gastro baskets.',
    'Provincial tender landscaping covering Punjab, Sindh and KP awards, bidder lists and price points for hospital injectables and oncology.',
    'Hospital pharmacist and purchase-committee interviews on formulary inclusion, credit terms and distributor service for private hospital groups in Karachi and Lahore.',
  ],
  publishedDate: '2026-09-03',
  modifiedDate: '2026-09-03',
};
