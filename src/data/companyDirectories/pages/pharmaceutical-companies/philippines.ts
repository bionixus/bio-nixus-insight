import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesPhilippines: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'philippines',
  metaDescription:
    'Pharmaceutical companies in the Philippines: Unilab, Pascual, Natrapharm, Interphil, Pfizer, GSK, Sanofi, Zuellig, FDA and PhilHealth — packages, Mercury Drug.',
  introLead:
    'The Philippine medicine market is still a Unilab country at retail and a Zuellig country in the warehouse: the Philippine Pharmaceutical Manufacturers Association put 2024 sales at about PHP 285 billion, up 5% from PHP 270 billion, and said only 34% of that value was made in the country.',
  introRest:
    'FDA Philippines must register every product before it can be sold. PhilHealth, under the Universal Health Care Act, then decides which case-rate packages and outpatient medicines the public purse will touch — a narrower reimbursement net than Vietnam’s BHYT or Thailand’s UCS, which is why most prescriptions are still paid in cash at the counter. That counter is often Mercury Drug, whose thousand-plus branches remain the default national pharmacy, with Watsons, The Generics Pharmacy, Southstar and Rose Pharmacy competing around it. Unilab, through its own brands plus Pharex, RiteMed and the pediatric house Pediatrica, still sets the branded-generic and OTC conversation; Pascual and Natrapharm hold specialist and primary-care niches; Interphil toll-manufactures for foreign principals who want a local plant on the FDA file. Pfizer, GSK, Sanofi, AstraZeneca, Roche and Takeda import most of what they sell. BioNixus uses the list below when a brand team needs to know who actually gets ranged in Manila, Cebu and Davao.',
  stats: [
    { value: 'PHP 285bn', label: 'Philippine pharmaceutical market in 2024, per PPMA (up 5% from PHP 270bn)' },
    { value: '34%', label: 'Share of 2024 market value manufactured locally, per PPMA' },
    { value: 'PHP 310bn', label: 'PPMA 2025 target if the industry’s 9% growth ambition is met' },
    { value: '1,000+', label: 'Mercury Drug branches, still the default national pharmacy network' },
  ],
  channelHeading: 'How FDA registration, PhilHealth packages and pharmacy chains move product',
  channelBody:
    'FDA Philippines issues the Certificate of Product Registration. Statutory review targets exist, but industry commentary still describes real clocks of one to several years for new molecules, which is why launch calendars are built around the agency rather than around a sales meeting. Once registered, an imported innovator almost always appoints Zuellig Pharma — and sometimes its affiliate Metro Drug — to warehouse, invoice and deliver; those two houses have long been estimated to carry the large majority of organised wholesale. Unilab and a handful of other local manufacturers run their own sales forces into doctors and their own or contracted logistics into Mercury Drug, Watsons and the generics chains. PhilHealth’s role is growing but still incomplete: the Universal Health Care Act automatically enrolls citizens, yet many medicines sit outside case-rate packages or are only partly covered, so the patient (or a private HMO) pays the pharmacy. DOH procures for retained hospitals and for public-health programmes, and local government units buy for their own facilities, producing a fragmented public channel rather than a single national tender. The Generics Act and the cheaper RiteMed / Pharex / TGP offer have shifted unit share toward branded generics, but originator value remains high in private hospitals and in specialty clinics. Interphil, in Laguna, is the plant foreign companies name when they want local manufacture without building a factory. For any new brand the practical questions are FDA timing, Zuellig or Metro Drug appointment, Mercury Drug ranging, and whether a PhilHealth package will ever touch the molecule.',
  companies: [
    {
      name: 'Food and Drug Administration of the Philippines',
      hq: 'Muntinlupa',
      type: 'Government',
      focus: 'Product registration, GMP and post-market surveillance',
      notes: 'The regulator whose CPR clock is the first critical path on every launch plan, often longer in practice than the published target.',
    },
    {
      name: 'Philippine Health Insurance Corporation (PhilHealth)',
      hq: 'Pasig',
      type: 'Government',
      focus: 'UHC payer, case-rate packages and selected outpatient medicines',
      notes: 'Automatic enrolment is not the same as a full drug benefit; package design here decides whether a molecule sees any public money.',
    },
    {
      name: 'Department of Health',
      hq: 'Manila',
      type: 'Government',
      focus: 'Retained-hospital procurement and public-health programme buying',
      notes: 'Buys for DOH hospitals and national programmes, while cities and provinces buy separately, so public demand is split rather than pooled.',
    },
    {
      name: 'Unilab (United Laboratories)',
      hq: 'Mandaluyong',
      type: 'Local',
      focus: 'Branded generics, OTC, vitamins and the Pharex / RiteMed generics house',
      notes: 'The domestic company that still defines pharmacy ranging and doctor detailing; any new primary-care brand is compared with a Unilab SKU first.',
    },
    {
      name: 'Pascual Laboratories',
      hq: 'Quezon City',
      type: 'Local',
      focus: 'Prescription brands, licensed lines and selected consumer health',
      notes: 'Family-owned manufacturer that remains a frequent in-licensing partner for foreign firms that do not want their own affiliate.',
    },
    {
      name: 'Natrapharm',
      hq: 'Parañaque',
      type: 'Local',
      focus: 'Primary-care branded generics and hospital lines',
      notes: 'Mid-sized Filipino house with a dense medical-representative network, often the local competitor a multinational underestimates.',
    },
    {
      name: 'Interphil Laboratories',
      hq: 'Cabuyao',
      type: 'Local',
      focus: 'Toll manufacturing for multinational and local principals',
      notes: 'Laguna plant historically tied to the Zuellig orbit; the usual answer when a foreign brand wants a Philippine factory on the FDA file.',
    },
    {
      name: 'Pediatrica',
      hq: 'Mandaluyong',
      type: 'Local',
      focus: 'Paediatric prescription and nutrition brands inside the Unilab group',
      notes: 'Unilab’s paediatric company, listed separately because paediatricians and Mercury Drug buyers treat it as its own detailing organisation.',
    },
    {
      name: 'Pfizer Philippines',
      hq: 'Makati',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives, oncology and hospital products',
      notes: 'Innovator affiliate whose hospital and vaccine lines are imported and then handed to Zuellig for national reach.',
    },
    {
      name: 'GSK Philippines',
      hq: 'Makati',
      type: 'MNC',
      focus: 'Vaccines, respiratory and specialty anti-infectives',
      notes: 'Long-standing affiliate with a vaccine and respiratory franchise that still depends on private clinics and DOH programme tenders.',
    },
    {
      name: 'Sanofi Philippines',
      hq: 'Taguig',
      type: 'MNC',
      focus: 'Diabetes, vaccines, consumer health and established brands',
      notes: 'Runs both a specialist diabetes conversation and a pharmacy consumer-health conversation, so it straddles Unilab’s OTC turf and the hospital channel.',
    },
    {
      name: 'AstraZeneca Philippines',
      hq: 'Taguig',
      type: 'MNC',
      focus: 'Oncology, cardiovascular, respiratory and rare disease',
      notes: 'Specialty affiliate selling mainly into private hospitals and HMOs while PhilHealth oncology packages slowly widen.',
    },
    {
      name: 'Roche Philippines',
      hq: 'Taguig',
      type: 'MNC',
      focus: 'Oncology, diagnostics and immunology',
      notes: 'Access work here is private-hospital formulary and patient support; PhilHealth has not yet turned most of this portfolio into a public volume story.',
    },
    {
      name: 'Takeda Philippines',
      hq: 'Manila',
      type: 'MNC',
      focus: 'Gastroenterology, oncology, rare disease and plasma-derived therapies',
      notes: 'Among the larger innovator affiliates by value in recent industry recaps, concentrated on specialty clinics rather than Mercury Drug bays.',
    },
    {
      name: 'Zuellig Pharma Philippines',
      hq: 'Makati',
      type: 'Distributor',
      focus: 'National pharmaceutical wholesale and cold chain for most originators',
      notes: 'The warehouse that imported innovators cannot avoid; ranging at Mercury Drug often starts with a Zuellig account manager.',
    },
    {
      name: 'Metro Drug',
      hq: 'Manila',
      type: 'Distributor',
      focus: 'Wholesale allied to the Zuellig group, covering hospitals and chains',
      notes: 'The second national full-line house, appointed when a principal wants a complementary or historical Metro Drug relationship.',
    },
    {
      name: 'Mercury Drug',
      hq: 'Quezon City',
      type: 'Retailer',
      focus: 'National pharmacy chain and the default dispensing counter',
      notes: 'Still the chain whose ranging decision makes or breaks an OTC or chronic-care brand; more than a thousand stores and a near-default consumer habit.',
    },
    {
      name: 'The Generics Pharmacy',
      hq: 'Quezon City',
      type: 'Retailer',
      focus: 'Franchise generics chain competing on price against Mercury Drug',
      notes: 'The organised low-price alternative, useful as a check on whether a branded generic can live outside the Mercury Drug planogram.',
    },
  ],
  categoryBlurbs: {
    local:
      'Filipino manufacturers, led by Unilab and its paediatric house, that still dominate branded generics, OTC and the doctor-detailing model.',
    mnc:
      'Originator affiliates that import most of what they sell and lean on Zuellig, private hospitals and HMOs rather than on a local factory.',
    regional:
      'ASEAN and Japanese groups that enter through Unilab or Pascual licensing, through Interphil toll manufacture, or through their own small affiliates.',
    trade:
      'FDA, PhilHealth, DOH, the Zuellig/Metro Drug wholesale pair and Mercury Drug, whose combined decisions decide whether a SKU is actually available.',
  },
  growthDrivers: [
    {
      title: 'Universal Health Care packages, still incomplete',
      desc: 'Automatic PhilHealth enrolment is widening the insured population, but drug benefits remain package-bound and partial. Companies that can show a case-rate fit or an outpatient-medicine argument gain a public channel that cash retail alone cannot give them.',
    },
    {
      title: 'Unilab-scale branded generics versus imported innovators',
      desc: 'Local houses still win units; originators still win value. That split is widening as Pharex, RiteMed and TGP take chronic-care refills while Roche, AstraZeneca and Takeda concentrate on private specialty, so a portfolio needs a different team for each side.',
    },
    {
      title: 'Pharmacy-chain ranging as the real national launch',
      desc: 'Mercury Drug, Watsons, TGP, Southstar and Rose Pharmacy now decide shelf presence more than the independent botica does. A brand that misses Mercury Drug ranging will not have a national OTC or chronic-refill story, however good the FDA file looks.',
    },
    {
      title: 'Local-manufacturing pressure on a 34% domestic share',
      desc: 'PPMA’s 2024 figure that only a third of value is made locally is now a policy talking point. Interphil and any principal willing to toll-manufacture sit on the right side of that debate when DOH or Congress asks who is investing in plants.',
    },
  ],
  faq: [
    {
      q: 'Which company dominates Philippine pharmaceuticals?',
      a: 'Unilab is the domestic company that still sets the branded-generic and OTC conversation, including through Pharex, RiteMed and Pediatrica. On value, several multinational affiliates — historically including AstraZeneca, Sanofi, GSK and Takeda — sit in the top tier. Mercury Drug dominates dispensing; Zuellig dominates wholesale.',
    },
    {
      q: 'Does PhilHealth pay for most medicines?',
      a: 'No. Enrolment is broad; the drug benefit is not. Many products are paid in cash at the pharmacy or by a private HMO. PhilHealth matters when a molecule sits inside a case-rate package or an outpatient list, and that is still a minority of SKUs.',
    },
    {
      q: 'Why do foreign companies use Zuellig rather than build a warehouse?',
      a: 'Organised wholesale has long been concentrated in Zuellig Pharma and Metro Drug. Building a parallel depot network that Mercury Drug and the hospitals will actually order from is rarely cheaper than appointing one of those two houses.',
    },
    {
      q: 'Is Interphil a competitor or a partner?',
      a: 'Both, depending on the SKU. It is a toll manufacturer for foreign principals that want a Philippine plant, and it sits in the Zuellig family orbit, so it is a partner on contract manufacturing and a piece of the same logistics system that already carries those principals’ imports.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in the Philippines?',
      a: 'Work runs through Mercury Drug and TGP category interviews in Metro Manila, Cebu and Davao, doctor-detailing quality checks against Unilab representatives, PhilHealth package mapping, and hospital-pharmacist interviews on imported originator versus local branded-generic choice.',
    },
    {
      q: 'Is BioNixus ranking Philippine drug makers by sales?',
      a: 'Sales rank is not what this directory encodes. The roster exists to show who manufactures, imports, distributes and reimburses medicines in the Philippines, using FDA records and BioNixus fieldwork rather than IQVIA league positions.',
    },
  ],
  regulatorSource: {
    name: 'Food and Drug Administration of the Philippines — registered drug products and licensed establishments',
    url: 'https://www.fda.gov.ph',
    asOf: '2026-09-04',
  },
  sources: [
    'Philippine Pharmaceutical Manufacturers Association market-value statements for 2023–2025, as reported by BusinessWorld, March 2025',
    'FDA Philippines public materials on product registration; PhilHealth and DOH materials on UHC packages',
    'Philippine Competition Commission discussion paper on pharmaceutical competition; industry recaps of Mercury Drug and Zuellig concentration',
    'BioNixus Philippines pharmacy-chain, hospital and prescriber fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Mercury Drug and TGP ranging interviews in Metro Manila, Cebu and Davao, recording which branded generics and originators actually sit on planograms versus which only appear in hospital pharmacies.',
    'PhilHealth case-rate and outpatient-medicine mapping by molecule, used to tell a client whether a launch has any public-payment story at all.',
    'Detailing-quality interviews with GPs and paediatricians comparing Unilab, Pediatrica, Pascual and multinational representatives on frequency and materials.',
    'Hospital pharmacist interviews in Metro Manila and Cebu on Zuellig versus Metro Drug service, imported-originator availability and willingness to switch to a local branded generic.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
