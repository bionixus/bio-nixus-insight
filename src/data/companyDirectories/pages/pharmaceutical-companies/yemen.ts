import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesYemen: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'yemen',
  metaDescription:
    'Pharmaceutical companies in Yemen: YEDCO, Shaphaco, Global Pharma, Modern Pharma, Hikma, Eva, Pharco, Cipla and SBDMA — dual authorities, cash pharmacies.',
  introLead:
    'Medicines still reach Yemeni patients through three overlapping systems that do not report to one another: SBDMA registrations, humanitarian consignments, and a private cash trade that never fully stopped in Sanaa or Aden.',
  introRest:
    'YEDCO, Shaphaco, Global Pharmaceutical Industries and Modern Pharma keep formulation lines open despite fuel, forex and inspection problems, while Jordanian, Egyptian and Indian houses — Hikma, Eva, Pharco, Cipla, Dar Al Dawa — remain the familiar brands on pharmacy shelves. Dual authorities mean a file accepted in one capital may be ignored in the other, and WHO or UNICEF shipments can crowd out or substitute for commercial SKUs in the same governorate. The directory records the manufacturers, regional suppliers and public bodies BioNixus treats as real counterparties when a client needs to know who can actually put a pack in a Sanaa or Aden pharmacy.',
  stats: [
    { value: '3', label: 'Overlapping supply systems: SBDMA-registered commercial, humanitarian, and unregulated cash' },
    { value: 'YEDCO', label: 'Oldest national manufacturer (1960s origins), Madhbah / Sanaa, public-majority ownership' },
    { value: 'Sanaa + Aden', label: 'Two regulatory and commercial poles a dossier may have to satisfy' },
    { value: 'Cash', label: 'Still the dominant way a private pharmacy in either city is paid' },
  ],
  channelHeading: 'Humanitarian pipelines beside a cash pharmacy trade',
  channelBody:
    'Supreme Board of Drugs and Medical Appliances paper is still the document a commercial importer wants in his folder, and the board’s .gov.ye site remains the official place for decrees on manufacture and trade. That paper does not travel cleanly across the front line. A registration or inspection accepted in Sanaa can be worthless at an Aden port, and the reverse is also true, so serious principals budget for two conversations and two sets of stamps. Humanitarian pipelines — UNICEF, WHO, and implementing NGOs — move essential lists into governorates where commercial trucks will not go, which is good for patients and awkward for a brand that thought a tender or a pharmacy launch would meet that demand. Meanwhile the private cash market in Sanaa’s old pharmacy streets and in Aden’s Crater and Sheikh Othman districts keeps trading: Shaphaco and Global Pharma packs sit beside Hikma, Eva, Pharco and Cipla, prices float with the rial and with whatever dollar the importer could find, and quality is a rumour until someone tests a batch. Local plants are not a curiosity. YEDCO has been through bankruptcy and a public-sector revival of antibiotic lines; Shaphaco still advertises GCC-central registration; Global Pharma and Modern Pharma run solids and liquids from Sanaa and Aden. They do not, however, make Yemen self-sufficient, and they cannot ship if fuel or letters of credit fail. A realistic plan therefore names a holder in each authority area, a humanitarian-overlap check, and a cash-pharmacy audit — not a single national launch calendar.',
  companies: [
    {
      name: 'Yemen Drug Company (YEDCO)',
      hq: 'Sanaa',
      type: 'Local',
      focus: 'Public-majority manufacture of essentials, antibiotics and solutions',
      notes: 'Oldest national house, Madhbah site, revived antibiotic lines after years of distress; ownership is still mostly public, so treat it as both a factory and a political asset.',
    },
    {
      name: 'Shaphaco Pharmaceutical Industries',
      hq: 'Sanaa',
      type: 'Local',
      focus: 'Tablets, liquids, topicals; GCC-central registration claimed',
      notes: 'Attan plant that still presents itself as the first Yemeni manufacturer registered centrally in the Gulf, which is why it appears in both domestic audits and export-registration talk.',
    },
    {
      name: 'Global Pharmaceutical Industries',
      hq: 'Sanaa',
      type: 'Local',
      focus: 'Branded generics from Sanaa with an Aden-area facility',
      notes: 'Private manufacturer that entered in the 2000s and now claims a meaningful domestic branded-generic share; useful as the “new” local comparator to YEDCO and Shaphaco.',
    },
    {
      name: 'Modern Pharma',
      hq: 'Aden',
      type: 'Local',
      focus: 'Antibiotics and solids from an Aden / Ber Ahmed industrial footprint',
      notes: 'The southern manufacturer pharmacists in Aden name first; its geography matters when a study is really two markets, not one national share.',
    },
    {
      name: 'Shiba Pharma',
      hq: 'Sanaa',
      type: 'Local',
      focus: 'Domestic branded generics',
      notes: 'Smaller Sanaa laboratory that appears in industry inventories beside Shaphaco and Global; include it when a local-bench cut must go beyond the four headline plants.',
    },
    {
      name: 'Star Plus Pharmaceutical Industries',
      hq: 'Sanaa',
      type: 'Local',
      focus: 'Local formulation for the cash pharmacy channel',
      notes: 'Another Sanaa-area manufacturer that field pharmacists mention when asked who besides Shaphaco still packs locally; treat claimed shares with caution.',
    },
    {
      name: 'Hikma',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Jordanian branded generics and injectables',
      notes: 'The Levant brand Yemeni pharmacists reach for when an originator is gone and a local pack is untrusted; present in both Sanaa and Aden cash trade.',
    },
    {
      name: 'Eva Pharma',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Egyptian branded generics and hospital lines',
      notes: 'Egyptian house whose range matches what cash pharmacies can sell without a functioning insurer; often sits next to Hikma on the same shelf.',
    },
    {
      name: 'Pharco',
      hq: 'Alexandria',
      type: 'Regional',
      focus: 'Egyptian generics, anti-infectives and chronic-care brands',
      notes: 'Alexandria manufacturer that has long treated Yemen as a trade market; quality complaints and genuine demand coexist, so audits must record batch and importer, not only the logo.',
    },
    {
      name: 'Cipla',
      hq: 'Mumbai',
      type: 'MNC',
      focus: 'Indian branded generics, antiretrovirals and respiratory',
      notes: 'The Indian name that still appears on Yemeni shelves and in some humanitarian-adjacent tenders; usually via a local holder rather than a Cipla affiliate office.',
    },
    {
      name: 'Dar Al Dawa',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Jordanian branded generics',
      notes: 'Second Jordanian house after Hikma in many pharmacy bays; useful when a study wants a Levant branded-generic set, not a single-principal story.',
    },
    {
      name: 'Julphar (Gulf Pharmaceutical Industries)',
      hq: 'Ras Al Khaimah',
      type: 'Regional',
      focus: 'Gulf generics into the Yemeni cash and tender mix',
      notes: 'UAE manufacturer whose packs cross into Yemen through the same agency routes as other Gulf goods; more visible in Aden trade than in northern humanitarian lists.',
    },
    {
      name: 'EIPICO',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Egyptian branded generics',
      notes: 'Nile-delta manufacturer that Yemeni importers already know how to land; belongs in any Egyptian-origin cut of the cash market.',
    },
    {
      name: 'Sanofi',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Diabetes and established brands, mostly via agents',
      notes: 'Originator whose older brands still carry recognition; supply is irregular and usually agent-led, so presence on a shelf is not evidence of a functioning affiliate.',
    },
    {
      name: 'Supreme Board of Drugs and Medical Appliances (SBDMA)',
      hq: 'Sanaa',
      type: 'Government',
      focus: 'Registration, manufacture and trade rules for medicines and appliances',
      notes: 'The statutory regulator. In a split country its stamps are necessary and not always sufficient; Aden-side clearance can demand a second conversation.',
    },
    {
      name: 'Ministry of Public Health and Population',
      hq: 'Sanaa / Aden',
      type: 'Government',
      focus: 'Health policy, facility supply and dual-authority public buying',
      notes: 'Two ministries in practice. Public volume, such as it is, follows whichever authority pays the warehouse in that governorate.',
    },
    {
      name: 'UNICEF Yemen supply line',
      hq: 'Aden / Sanaa',
      type: 'Operator',
      focus: 'Humanitarian procurement of essentials for accessible governorates',
      notes: 'Not a company in the commercial sense. Listed because its kits change what a Sanaa or Aden pharmacy bothers to hold and what a public store will tender for.',
    },
    {
      name: 'WHO Yemen essential-medicines pipeline',
      hq: 'Aden / Sanaa',
      type: 'Operator',
      focus: 'Emergency and programme supply of selected medicines',
      notes: 'The other humanitarian pipe. Overlap with UNICEF and with commercial SKUs is the whole analytical problem: three channels, one patient.',
    },
  ],
  categoryBlurbs: {
    local:
      'Yemeni plants that never fully went dark — YEDCO, Shaphaco, Global Pharma, Modern Pharma, plus smaller Sanaa laboratories — working around fuel, forex and split inspections.',
    mnc:
      'A light innovator and Indian presence, Cipla and leftover Sanofi brands, almost always through a holder rather than a staffed affiliate.',
    regional:
      'The packs that actually fill cash bays: Hikma and Dar Al Dawa from Jordan, Eva, Pharco and EIPICO from Egypt, Julphar from the Gulf.',
    trade:
      'SBDMA and two health ministries as the paper layer, plus UNICEF and WHO pipelines that move essentials outside the commercial invoice.',
  },
  growthDrivers: [
    {
      title: 'Dual stamps for a single country',
      desc: 'A dossier that satisfies Sanaa can stall in Aden, and the reverse. Launch calendars that assume one regulator will understate cost and overstate reachable volume.',
    },
    {
      title: 'Humanitarian kits as a competing channel',
      desc: 'When UNICEF or WHO covers an essential molecule in a governorate, commercial tenders shrink and pharmacies stop restocking that SKU. Mapping the kit list is part of demand work, not an afterthought.',
    },
    {
      title: 'A cash market that refused to die',
      desc: 'Sanaa and Aden private pharmacies still sell for rials or dollars on the day. That is where Hikma, Eva and local plants meet the patient, and it is the only channel that yields a usable audit trail.',
    },
    {
      title: 'Fragile but real local lines',
      desc: 'YEDCO’s antibiotic restart and the continued running of Shaphaco, Global Pharma and Modern Pharma mean a localisation or contract-manufacture question is no longer absurd — provided fuel and inspection access hold.',
    },
  ],
  faq: [
    {
      q: 'Who manufactures medicines inside Yemen?',
      a: 'YEDCO in Madhbah is the old public house. Shaphaco and Global Pharmaceutical Industries are the Sanaa private names. Modern Pharma is the Aden name. Shiba and Star Plus sit on the smaller Sanaa bench. None of them, alone or together, replace imports.',
    },
    {
      q: 'Is SBDMA the only regulator a foreign company must satisfy?',
      a: 'SBDMA is the statutory board and its decrees still matter. In a split administration a second set of stamps or port practices in Aden can block a shipment that Sanaa has already accepted. Budget for both poles.',
    },
    {
      q: 'Why list UNICEF and WHO on a company directory?',
      a: 'Because their consignments are a supply channel with volume. They are tagged as operators, not as manufacturers, so that a brand team does not mistake a quiet pharmacy bay for a lost detailing war.',
    },
    {
      q: 'Do private pharmacies in Sanaa and Aden still function?',
      a: 'Yes, on cash. They are not a pretty formal market — quality, price and forex are all unstable — but they are where most non-humanitarian packs change hands, and they are auditable if a team is willing to walk the streets.',
    },
    {
      q: 'How does BioNixus approach pharmaceutical work in Yemen?',
      a: 'Paired Sanaa and Aden pharmacy audits; a humanitarian-kit overlay so commercial demand is not double-counted; and holder interviews that record which authority actually cleared the last shipment.',
    },
    {
      q: 'Is placement in this Yemeni roster a claim about turnover?',
      a: 'Sorting in this table is editorial. A name appears when it keeps showing up in SBDMA paper, pharmacy shelves or humanitarian supply notes, not because anyone published a reliable national ranking.',
    },
  ],
  regulatorSource: {
    name: 'Supreme Board of Drugs and Medical Appliances (SBDMA) — regulation of medicine manufacture and trade',
    url: 'https://sbdma.gov.ye',
    asOf: '2026-09-04',
  },
  sources: [
    'SBDMA institutional pages (sbdma.gov.ye / sbd-ye.org) on the board’s mandate and manufacture-and-trade decrees',
    'YEDCO (yedcoyemen.com) and Ministry of Economy notices on the Madhbah antibiotic-line restart',
    'Company sites for Shaphaco, Global Pharmaceutical Industries and Modern Pharma on plant locations and claimed GCC or domestic roles',
    'WHO / UNICEF Yemen situation and supply notes on humanitarian medicine pipelines',
    'BioNixus Yemen pharmacy, holder and humanitarian-overlap fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Sanaa old-city and Sixty Street pharmacy walks that record local versus Egyptian versus Jordanian origin, asking price, and whether the pharmacist will vouch for the batch.',
    'Aden Crater and Sheikh Othman shelf checks paired with the Sanaa walk, so the study can say whether Modern Pharma and Julphar behave differently south of the line.',
    'Humanitarian-kit overlays against those shelves: molecules present in UNICEF or WHO lists are flagged so commercial “share” is not invented out of a donated catchment.',
    'Holder and clearing-agent interviews in both capitals on which stamp moved the last container and which stamp was ignored at the port.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
