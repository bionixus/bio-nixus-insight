import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesSouthAfrica: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'south-africa',
  metaDescription:
    'Pharmaceutical companies in South Africa: Aspen, Adcock Ingram, Cipla Medpro, Pharma Dynamics, Sanofi, Novartis, Pfizer, Roche, Dis-Chem, Clicks and SAHPRA.',
  introLead:
    'South Africa is the only African market where a JSE-listed manufacturer, a statutory single-exit-price and two national pharmacy chains together set the commercial terms that every other company must accept.',
  introRest:
    'Value sits in two almost separate economies. Medical schemes such as Discovery Health and the Government Employees Medical Scheme reimburse originators, specialty brands and higher-priced generics for a minority of households, while the National Department of Health’s Affordable Medicines Directorate buys essential medicines at tender prices for the public clinics and hospitals that treat most of the population. SAHPRA, the Pretoria-based successor to the Medicines Control Council, licenses every plant and dossier under the Medicines and Related Substances Act and has used reliance pathways to clear a backlog that once delayed launches by years. Aspen Pharmacare, Adcock Ingram and Cipla Medpro still formulate at scale in Gqeberha, East London, Midrand and Cape Town, yet the country also remains a destination for Indian and European finished packs that undercut local cost of goods once the single exit price is set. Dis-Chem and Clicks have turned the private retail shelf into a concentrated negotiation, and their private-label ranges now sit beside the same molecules that medical representatives detail to specialists at Charlotte Maxeke, Groote Schuur and Steve Biko. This page maps the manufacturers, affiliates, chains and public buyer that BioNixus interviews when a brand team needs to know who actually moves a molecule in Johannesburg, Cape Town or Durban.',
  stats: [
    { value: '9m+', label: 'Medical-scheme beneficiaries overseen by the Council for Medical Schemes (CMS report 2024/25)' },
    { value: '71', label: 'Registered medical schemes as at 31 March 2025 (CMS)' },
    { value: 'SEP', label: 'Single Exit Price: the statutory ex-manufacturer price plus a capped logistics fee' },
    { value: '2', label: 'National pharmacy groups (Clicks and Dis-Chem) that dominate organised private retail' },
  ],
  channelHeading: 'How a medicine is priced, reimbursed and stocked in South Africa',
  channelBody:
    'SAHPRA registration is the first gate: a local applicant holds the dossier, the foreign plant must satisfy GMP, and complementary medicines now sit under the same authority as orthodox products. Once registered, the single exit price published in the Government Gazette becomes the only legal selling price from manufacturer to anyone in the private chain, with an annually adjusted logistics fee and a capped pharmacist dispensing fee; discounting below SEP is unlawful, so share is won on scheme formulary status, hospital contracts and retail ranging rather than on off-invoice deals. Discovery, GEMS, Bonitas and the other open and restricted schemes decide private volume through formularies, designated service providers and chronic-medicine courier programmes, and a product that misses the Discovery formulary can lose the most profitable slice of the market overnight. Public volume is a different contest: the Affordable Medicines Directorate runs national tenders, provincial depots in Gauteng, KwaZulu-Natal and the Western Cape call off against those awards, and a late or failed delivery can lock a company out of the next cycle. Retail is concentrated. Clicks United Pharmaceutical Distributors and Dis-Chem’s wholesale arm feed their own stores and many independents, so ranging meetings in Woodmead and Cape Town now matter as much as a detail call at a teaching hospital. Specialty and oncology brands still travel through hospital pharmacies and scheme-funded centres of excellence, where Roche, Pfizer, Novartis and Sanofi keep medical teams even as their primary-care ranges face generic erosion from Aspen, Adcock, Cipla Medpro, Pharma Dynamics and Austell.',
  companies: [
    {
      name: 'Aspen Pharmacare',
      hq: 'Durban / Woodmead',
      type: 'Local',
      focus: 'Steriles, anaesthetics, branded generics, infant nutrition, APIs',
      notes: 'JSE-listed group whose Gqeberha sterile campus and older East London lines make it the largest African-owned manufacturer by global footprint.',
    },
    {
      name: 'Adcock Ingram',
      hq: 'Midrand',
      type: 'Local',
      focus: 'OTC, hospital generics, intravenous fluids, consumer health',
      notes: 'Long-standing Midrand manufacturer whose Panado and hospital bags remain fixtures in both scheme-reimbursed and public-sector baskets.',
    },
    {
      name: 'Cipla Medpro',
      hq: 'Cape Town',
      type: 'MNC',
      focus: 'Antiretrovirals, respiratory, oncology generics, hospital injectables',
      notes: 'Cipla’s South African subsidiary, built on the Medpro acquisition, still supplies a large share of public antiretroviral and respiratory volume.',
    },
    {
      name: 'Pharma Dynamics',
      hq: 'Cape Town',
      type: 'Regional',
      focus: 'Cardiovascular, central-nervous-system and diabetes generics',
      notes: 'Lupin-owned Cape Town marketer that built specialist relationships in cardiology and psychiatry and now competes head-on with originator scheme brands.',
    },
    {
      name: 'Austell Pharmaceuticals',
      hq: 'Johannesburg',
      type: 'Local',
      focus: 'Branded generics across primary care and hospital lines',
      notes: 'Fast-growing privately held manufacturer that has taken share from older local houses by pricing aggressively inside the SEP envelope.',
    },
    {
      name: 'Nativa',
      hq: 'Centurion',
      type: 'Local',
      focus: 'Complementary medicines, vitamins, consumer health',
      notes: 'Centurion-based complementary specialist whose SAHPRA-listed ranges occupy the vitamin bays that Clicks and Dis-Chem promote heavily.',
    },
    {
      name: 'Sanofi South Africa',
      hq: 'Midrand',
      type: 'MNC',
      focus: 'Diabetes, vaccines, rare disease, consumer health',
      notes: 'Keeps a Midrand commercial affiliate and vaccine relationships with the national immunisation programme alongside a large diabetes franchise.',
    },
    {
      name: 'Novartis South Africa',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Cardiovascular, immunology, oncology, ophthalmology',
      notes: 'Specialty affiliate whose scheme-access and patient-support programmes decide whether high-cost brands survive generic and biosimilar pressure.',
    },
    {
      name: 'Pfizer South Africa',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives, inflammation, hospital brands',
      notes: 'Maintains medical and access teams for vaccines and hospital products even as many primary-care molecules have already gone generic.',
    },
    {
      name: 'Roche Products (South Africa)',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Oncology, haematology, diagnostics',
      notes: 'Works through scheme-funded oncology centres and private hospital groups; diagnostics sit beside the medicines franchise in the same affiliate.',
    },
    {
      name: 'Dr Reddy’s South Africa',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Branded generics and hospital injectables',
      notes: 'Indian-origin affiliate that uses the SEP and tender systems to place a wide generic range against Aspen and Adcock on both private and public lists.',
    },
    {
      name: 'Litha Healthcare',
      hq: 'Midrand',
      type: 'Local',
      focus: 'Vaccines, hospital injectables and specialty agency lines',
      notes: 'Midrand group that holds hospital and vaccine agency books and is a frequent local home for a foreign theatre or immunisation brand.',
    },
    {
      name: 'GSK South Africa',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Vaccines, HIV, respiratory and established brands',
      notes: 'Long-standing affiliate whose vaccine and HIV franchises remain scheme-critical after the consumer-health split that created Haleon elsewhere.',
    },
    {
      name: 'Johnson & Johnson',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Janssen specialty, vaccines and consumer health',
      notes: 'Johannesburg operation spanning Janssen hospital brands and consumer shelves; Aspen has also filled sterile doses for the group at Gqeberha.',
    },
    {
      name: 'Napp Pharmaceuticals (Mundipharma)',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'Pain, oncology support and hospital specialty',
      notes: 'Mundipharma’s South African face, detailing pain and supportive-care brands into private hospitals and specialist rooms.',
    },
    {
      name: 'Discovery Health',
      hq: 'Sandton',
      type: 'Operator',
      focus: 'Administration and managed care for DHMS and contracted schemes',
      notes: 'Not a public body: the largest private administrator, whose formularies and DSP pharmacy rules steer a large share of reimbursed private scripts.',
    },
    {
      name: 'Dis-Chem Pharmacies',
      hq: 'Midrand',
      type: 'Retailer',
      focus: 'National pharmacy chain and wholesale to independents',
      notes: 'JSE-listed chain whose private-label and clinic offering now shapes first-line choice for a large share of scheme-reimbursed chronic scripts.',
    },
    {
      name: 'Clicks Group',
      hq: 'Cape Town',
      type: 'Retailer',
      focus: 'Pharmacy retail, UPD wholesale, private-label medicines',
      notes: 'Cape Town-listed group whose United Pharmaceutical Distributors arm is one of the two pipes that most private-sector packs must travel through.',
    },
    {
      name: 'National Department of Health — Affordable Medicines Directorate',
      hq: 'Pretoria',
      type: 'Government',
      focus: 'National essential-medicine tenders and provincial depot call-offs',
      notes: 'The public buyer whose contract awards for antiretrovirals, antibiotics and chronic generics set volume for every manufacturer in this table.',
    },
    {
      name: 'South African Health Products Regulatory Authority (SAHPRA)',
      hq: 'Pretoria',
      type: 'Government',
      focus: 'Registration, GMP licensing, complementary-medicine oversight',
      notes: 'Schedule 3A entity under the Medicines Act whose reliance reviews and plant inspections determine launch timing for originators and generics alike.',
    },
  ],
  categoryBlurbs: {
    local:
      'JSE-listed and privately held South African manufacturers that formulate steriles, OTC and branded generics inside the SEP envelope and still win a large share of Department of Health tenders.',
    mnc:
      'Originator affiliates and Indian-owned houses that keep Johannesburg or Cape Town medical teams for schemes, specialty hospitals and vaccines while ceding many primary-care molecules to local generics.',
    regional:
      'Lupin-owned Pharma Dynamics and other Indian-backed houses that treat South Africa as the premium branded-generic beachhead for the Southern African Customs Union.',
    trade:
      'Clicks and Dis-Chem as concentrated retail and wholesale gates, Discovery Health as the decisive private administrator, plus the Affordable Medicines Directorate and SAHPRA, whose tenders and licences decide who may sell and at what published price.',
  },
  growthDrivers: [
    {
      title: 'Scheme formularies and chronic courier programmes',
      desc: 'Discovery, GEMS and the larger open schemes now route most chronic packs through designated pharmacies and couriers, so a formulary win or loss moves share faster than a change in the published single exit price.',
    },
    {
      title: 'Public antiretroviral and vaccine contracts',
      desc: 'National tender cycles for HIV, tuberculosis and immunisation remain the highest-volume awards on the continent, and manufacturers that miss delivery windows lose both cash and the next adjudication.',
    },
    {
      title: 'Retail concentration at Clicks and Dis-Chem',
      desc: 'Two listed chains plus UPD and the Dis-Chem wholesale book now control ranging for private OTC and many chronic generics, pushing brand teams to treat category managers as seriously as key-opinion-leader programmes.',
    },
    {
      title: 'SAHPRA reliance and backlog clearance',
      desc: 'Use of reference-agency reviews has shortened time-to-approval for many dossiers, which is letting biosimilars and new generics reach scheme and tender lists before originators have finished their access negotiations.',
    },
    {
      title: 'National Health Insurance Act as a future single buyer',
      desc: 'The 2024 statute does not yet replace SEP or scheme formularies, but every account plan now carries an NHI scenario in which today’s dual private-and-tender split collapses into one purchaser — a risk Aspen, Adcock and the originator affiliates already model.',
    },
  ],
  faq: [
    {
      q: 'Who publishes the price a South African manufacturer may legally charge?',
      a: 'The single exit price, gazetted under the Medicines Act, is the only lawful selling price from the manufacturer into the private chain. A logistics fee and a capped dispensing fee sit on top; informal discounts below SEP are prohibited, which is why scheme listing and retail ranging decide share.',
    },
    {
      q: 'Which manufacturers still formulate at scale inside South Africa?',
      a: 'Aspen’s sterile campus in Gqeberha, Adcock Ingram in Midrand, Cipla Medpro in the Western Cape and several smaller plants in Gauteng and KwaZulu-Natal still produce meaningful volume. Many originator packs, however, are imported finished goods held by a local affiliate or licensee.',
    },
    {
      q: 'How do public clinics obtain essential medicines?',
      a: 'The Affordable Medicines Directorate awards national contracts; provincial medical depots then call off stock for clinics and hospitals. A company that fails to deliver against an award can be penalised and excluded from later cycles, so tender operations are a board-level risk.',
    },
    {
      q: 'Why do Discovery and GEMS matter more than raw prescription counts?',
      a: 'Those two schemes, together with a handful of other administrators, account for most reimbursed private value. A product that is not on their formularies, or that is pushed to a higher copayment tier, loses the patients who can still pay originator or premium-generic prices.',
    },
    {
      q: 'What fieldwork does BioNixus run among South African pharmaceutical companies?',
      a: 'Scheme-formulary interviews with Discovery and GEMS pharmacists, ranging discussions with Clicks and Dis-Chem category managers, tender-award reconstruction for the Affordable Medicines Directorate, and specialist interviews at Johannesburg, Cape Town and Pretoria teaching hospitals.',
    },
    {
      q: 'Is sequence on this South African page a league table?',
      a: 'It is not a ranking. Names were chosen because they appear on SAHPRA licences, JSE filings, national tender awards or BioNixus scheme and retail projects. Position in the table says nothing about revenue.',
    },
  ],
  regulatorSource: {
    name: 'South African Health Products Regulatory Authority (SAHPRA) — registered health products and licensed establishments',
    url: 'https://www.sahpra.org.za',
    asOf: '2026-09-04',
  },
  sources: [
    'SAHPRA registered-product and licensed-establishment records; Medicines and Related Substances Act single-exit-price notices',
    'National Department of Health Affordable Medicines Directorate tender awards, 2024–2026',
    'Council for Medical Schemes Annual Report 2024/25 (71 schemes; more than nine million beneficiaries)',
    'JSE annual reports for Aspen Pharmacare, Adcock Ingram, Clicks Group and Dis-Chem Pharmacies, 2024–2025',
    'BioNixus South Africa scheme, retail-ranging and public-tender fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Discovery Health and GEMS formulary interviews covering chronic cardiovascular, diabetes and antiretroviral listing criteria and designated-pharmacy rules.',
    'Clicks UPD and Dis-Chem wholesale ranging audits in Gauteng and the Western Cape, including private-label versus manufacturer-brand shelf share.',
    'Reconstruction of Affordable Medicines Directorate awards for antiretrovirals, antibiotics and large-volume parenterals, with delivery-failure notes by province.',
    'Specialist prescribing studies at Charlotte Maxeke, Groote Schuur, Inkosi Albert Luthuli (Durban) and Steve Biko comparing originator, biosimilar and local-generic choice.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
