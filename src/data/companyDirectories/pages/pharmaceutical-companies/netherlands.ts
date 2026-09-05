import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesNetherlands: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'netherlands',
  metaDescription:
    'Pharmaceutical companies in the Netherlands: Pharming, uniQure, Synthon, InnoGenerics, CBG and Zorginstituut — HTA, preference pricing, specialty.',
  introLead:
    'The Dutch medicines market is small in pack terms and unusually strict on value: Zorginstituut Nederland can keep a product out of the basic package, and every health insurer now runs a preference list that can erase a generic brand overnight.',
  introRest:
    'Zorginstituut’s GIP databank put extramural medicine spending at €5.7 billion in 2024, up 7.3%, for 11.8 million users. NZa’s wider pharmacy-plus-medicine series landed near €5.59 billion the same year. Those are modest numbers next to France or Italy, yet Leiden, Utrecht and Amsterdam host a specialty and gene-therapy cluster — Pharming, uniQure, Synthon, InnoGenerics, Astellas Europe, Byondis, Merus, Janssen’s vaccine unit — that punches far above the domestic P&L. CBG-MEB is the competent authority beside the EMA. VWS sets maximum prices under the Wet geneesmiddelenprijzen and decides, after a ZiN advice, whether a costly product enters the basispakket or sits in the sluis (lock) while a financial arrangement is negotiated. Parallel export from Dutch pharmacies into higher-priced neighbours is a chronic supply headache. BioNixus uses the roster below when a client needs to know who manufactures here, who commercialises here, and which insurer preference cycle will decide generic share.',
  stats: [
    { value: '€5.7bn', label: 'Extramural medicine expenditure in 2024, GIP databank / Zorginstituut (+7.3%)' },
    { value: '11.8m', label: 'People who used an extramural medicine in 2024, GIP databank' },
    { value: '€5.59bn', label: 'NZa 2024 total for medicines plus public-pharmacy care (provisional)' },
    { value: 'All', label: 'Health insurers running preferentiebeleid since 2024, VWS evaluation' },
  ],
  channelHeading: 'Package decisions, insurer preference and hospital lock procedures',
  channelBody:
    'CBG-MEB issues or recognises the marketing authorisation. Reimbursement is a different door. Most established outpatient products fall under the Geneesmiddelenvergoedingssysteem: they are clustered and reimbursed at a reference limit. Insurers — Zilveren Kruis, VGZ, CZ, Menzis and the smaller labels — then designate a preferred product inside many clusters. Since 2024 every insurer does this. A manufacturer that is not preferred can still be prescribed, but the patient often pays the difference, which in practice kills share. Expensive extras sit outside that machine. ZiN advises VWS on whether the product belongs in the basispakket; if the budget impact is large, VWS can lock it in the sluis until a financial arrangement is signed. Hospital intramural medicines have their own expensive-drug negotiations with the same ministry. Parallel trade is the other Dutch peculiarity: low Wgp ceilings and a trading culture make the Netherlands a source country, which is why shortages and export notifications keep landing on CBG and KNMP desks. Community pharmacies are independent or grouped under formulas such as Brocacef’s partners; they dispense what the insurer prefers unless a medical exception is documented.',
  companies: [
    {
      name: 'Pharming Group',
      hq: 'Leiden',
      type: 'Local',
      focus: 'Rare disease (hereditary angioedema), specialty biologics',
      notes: 'Leiden-listed rare-disease company; a type case of Dutch specialty that sells globally while still running its commercial and medical core from the Bio Science Park.',
    },
    {
      name: 'uniQure',
      hq: 'Amsterdam',
      type: 'Local',
      focus: 'Gene therapy manufacturing and development',
      notes: 'Amsterdam gene-therapy house whose Lexington and Dutch sites matter more as a European ATMP plant than as a large Dutch prescriber brand.',
    },
    {
      name: 'Synthon',
      hq: 'Nijmegen',
      type: 'Local',
      focus: 'Complex generics, finished-dose development, partnerships',
      notes: 'Privately held developer that licenses products to commercial partners; Dutch and foreign generic labels often start from a Nijmegen dossier.',
    },
    {
      name: 'InnoGenerics',
      hq: 'Leiden',
      type: 'Local',
      focus: 'Essential-medicine manufacturing, former Teva site',
      notes: 'State-backed restart of the old Leiden Teva plant, created to keep Dutch production of essential generics after Teva’s withdrawal.',
    },
    {
      name: 'Astellas Pharma Europe',
      hq: 'Leiden',
      type: 'MNC',
      focus: 'Oncology, urology, transplantation, European HQ functions',
      notes: 'Japanese group’s European hub on the Leiden park; a reminder that “Dutch pharma” is often a regional headquarters, not only a local P&L.',
    },
    {
      name: 'Byondis',
      hq: 'Nijmegen',
      type: 'Local',
      focus: 'Antibody-drug conjugates, oncology biologics',
      notes: 'Independent spin from the old Organon/MSD Oss-Nijmegen tradition; ADC pipeline work rather than a broad primary-care book.',
    },
    {
      name: 'Merus',
      hq: 'Utrecht',
      type: 'Local',
      focus: 'Bispecific antibodies in oncology',
      notes: 'Utrecht-listed biotech whose commercial story is still mostly partner and US-trial driven, but whose HQ sits inside the Dutch specialty cluster.',
    },
    {
      name: 'Janssen Vaccines & Prevention',
      hq: 'Leiden',
      type: 'MNC',
      focus: 'Viral-vector vaccines, Leiden manufacturing and R&D',
      notes: 'J&J’s Leiden vaccine unit; a manufacturing and science site rather than a large community-pharmacy detailing operation.',
    },
    {
      name: 'HAL Allergy',
      hq: 'Leiden',
      type: 'Local',
      focus: 'Allergen immunotherapy, diagnostics',
      notes: 'Specialist manufacturer of allergy vaccines, typical of the Leiden park’s mid-size industrial layer beneath the listed biotechs.',
    },
    {
      name: 'Sandoz Nederland',
      hq: 'Almere',
      type: 'MNC',
      focus: 'Generics and biosimilars under insurer preference',
      notes: 'The affiliate that lives or dies on preferentiebeleid: winning a Zilveren Kruis or VGZ designation can swing national generic share in a quarter.',
    },
    {
      name: 'Pfizer Nederland',
      hq: 'Capelle aan den IJssel',
      type: 'MNC',
      focus: 'Vaccines, oncology, rare disease, inflammation',
      notes: 'Innovator affiliate whose costly launches go through ZiN and, often, the sluis before any GP ever writes a script.',
    },
    {
      name: 'Novartis Nederland',
      hq: 'Amsterdam',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology, ophthalmology',
      notes: 'Specialty affiliate; package decisions and hospital arrangements matter more here than a primary-care field force.',
    },
    {
      name: 'Roche Nederland',
      hq: 'Woerden',
      type: 'MNC',
      focus: 'Oncology, haematology, neuroscience, diagnostics',
      notes: 'Hospital and lock-procedure regular; ZiN cost-effectiveness questions arrive before a Dutch oncologist can initiate at scale.',
    },
    {
      name: 'Medicines Evaluation Board (CBG-MEB)',
      hq: 'Utrecht',
      type: 'Government',
      focus: 'National authorisation, shortages, pharmacovigilance',
      notes: 'Competent authority. Shortage and parallel-export notifications sit on this desk beside classical variation and DCP work.',
    },
    {
      name: 'Zorginstituut Nederland',
      hq: 'Diemen',
      type: 'Government',
      focus: 'Pakket advice, cost-effectiveness, GIP databank',
      notes: 'The NICE-like gate for expensive extras. A negative or conditional advice is the event that sends a product into the sluis or out of the package.',
    },
    {
      name: 'Ministerie van Volksgezondheid, Welzijn en Sport (VWS)',
      hq: 'The Hague',
      type: 'Government',
      focus: 'Wgp maximum prices, sluis, financial arrangements, package decisions',
      notes: 'Takes ZiN’s advice and holds the lock. Also sets the four-country Wgp ceiling that keeps Dutch list prices among Europe’s lowest.',
    },
    {
      name: 'Zilveren Kruis',
      hq: 'Leiden',
      type: 'Operator',
      focus: 'Largest insurer preference lists for outpatient generics',
      notes: 'Achmea label whose preferentiebeleid designations are watched as a leading indicator for the other insurers’ annual cycles.',
    },
    {
      name: 'Brocacef Groep',
      hq: 'Maarssen',
      type: 'Distributor',
      focus: 'Wholesale and pharmacy formula serving community pharmacies',
      notes: 'Leading wholesaler-retail combination; the physical route for preference products once an insurer has named them.',
    },
  ],
  categoryBlurbs: {
    local:
      'Dutch specialty and manufacturing names — rare disease, gene therapy, complex generics, essential-medicine restart — clustered on the Leiden, Utrecht and Nijmegen parks.',
    mnc:
      'European hubs and commercial affiliates whose Dutch sales wait on ZiN and VWS, plus Sandoz competing for insurer preference rather than for GP brand loyalty.',
    regional:
      'Benelux or German generics and specialty houses that appoint a Dutch MA holder and then live or die on the same preference and sluis rules as locals.',
    trade:
      'CBG, ZiN and VWS in sequence, the four large insurers’ preference machines, and wholesaler-pharmacy groups that dispense whatever those lists name.',
  },
  growthDrivers: [
    {
      title: 'Universal insurer preference',
      desc: 'Every insurer now designates preferred generics. Annual cycles at Zilveren Kruis, VGZ, CZ and Menzis reshuffle pack share faster than any medical-representative plan can answer.',
    },
    {
      title: 'ZiN advice and the sluis',
      desc: 'Costly extras stay locked until VWS has a financial arrangement. Time-to-package, not time-to-authorisation, is the Dutch launch metric that forecast models miss.',
    },
    {
      title: 'Specialty and ATMP cluster',
      desc: 'Leiden and Amsterdam host gene therapy, rare-disease and vaccine plants whose customers are global. Domestic reimbursement is a side story for those sites and the main story for the affiliates.',
    },
    {
      title: 'Parallel export and Wgp ceilings',
      desc: 'Low statutory maximum prices make the Netherlands a source country. Shortages and export notifications now sit inside every availability conversation with hospital pharmacists.',
    },
  ],
  sections: [
    {
      heading: 'Preferentiebeleid is not a tender, and the sluis is not HTA',
      paragraphs: [
        'Insurer preference is a reimbursement designation inside a GVS cluster. It is not a hospital tender and it is not a quality ranking. The designated product is the one the insured person can take without an extra bill. Losing that designation in January is a commercial event even if CBG registration and ZiN history are untouched.',
        'The sluis is a ministerial waiting room. ZiN may already have written that the product is effective; VWS still withholds package entry until a price arrangement exists. Interviewing only ZiN methodologists and skipping VWS and the insurers produces a Dutch access map with the two gates that actually move money left blank.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the Netherlands a large domestic branded-generic market?',
      a: 'No. Extramural spend is a few billion euros, preference lists flatten brand premiums, and much of the industrial story is specialty manufacturing and European HQs. Teams that copy a Polish or Italian generic playbook will be surprised.',
    },
    {
      q: 'What does Zorginstituut Nederland decide?',
      a: 'Whether a medicine belongs in the basic insurance package, and on what conditions. It publishes the GIP expenditure series and writes the cost-effectiveness advice VWS uses before opening the sluis or listing an expensive extra.',
    },
    {
      q: 'How does preferentiebeleid change generic competition?',
      a: 'Insurers name one (or a short list of) reimbursed products per cluster. Patients who want another brand usually pay extra. Sandoz, Teva-era leftovers and smaller labels therefore compete for the designation, not for the GP’s favourite colour of box.',
    },
    {
      q: 'Why do Dutch pharmacies export medicines in parallel?',
      a: 'Wgp ceilings keep official prices low relative to Germany and some Nordic markets, and the trading infrastructure exists. CBG and the inspectorate monitor notifications; hospital pharmacists still report holes on the shelf that started as legal export.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in the Netherlands?',
      a: 'By interviewing ZiN-experienced consultants and hospital pharmacists in Amsterdam and Utrecht, reconstructing insurer preference cycles, mapping sluis and arrangement outcomes, and talking to Leiden-park manufacturers about capacity versus domestic demand.',
    },
    {
      q: 'Is this a ranked list of Dutch pharmaceutical companies?',
      a: 'Readers looking for a turnover ranking will not find one. Inclusion follows CBG records, ZiN dossiers and fieldwork, not a league table.',
    },
  ],
  regulatorSource: {
    name: 'College ter Beoordeling van Geneesmiddelen (CBG-MEB) — authorised medicines and licensed manufacturers',
    url: 'https://www.cbg-meb.nl',
    asOf: '2026-09-04',
  },
  sources: [
    'Zorginstituut Nederland GIP databank update for 2024 — €5.7bn extramural spend, 11.8m users',
    'NZa key figures on medicines and public-pharmacy care, 2019–2024 (provisional 2024 total €5.59bn)',
    'VWS evaluation of Wgp and preferentiebeleid; all insurers applying preference policy from 2024',
    'BioNixus Netherlands ZiN, insurer-preference and Leiden-cluster fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Insurer preference-cycle reconstructions for high-volume GVS clusters, comparing Zilveren Kruis designations with VGZ, CZ and Menzis in the same year.',
    'Hospital-pharmacist and ZiN-experienced interviews in Amsterdam and Utrecht on sluis duration, arrangement terms and initiation after package entry.',
    'Leiden Bio Science Park manufacturer conversations on export share versus Dutch demand, used when a client confuses a plant’s existence with domestic brand share.',
    'Shortage and parallel-export incident reviews with hospital pharmacies, linking Wgp ceilings to reported holes in essential-medicine lines.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
