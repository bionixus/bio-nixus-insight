import type { DirectoryPageInput } from '../../types';

export const biotechCompaniesUae: DirectoryPageInput = {
  entity: 'biotech-companies',
  countrySlug: 'uae',
  metaDescription:
    'UAE biotech: M42, PureHealth, Hayat Biotech, Julphar, ADSCC, NYUAD, Khalifa University, MOHAP and DoH — hub, capital and regulation.',
  introLead:
    'Biotechnology in the United Arab Emirates is a hub, capital and regulation play: sovereign platforms buy genomics, parks and fill-finish, while discovery chemistry still arrives from Boston, Basel, Shanghai or London rather than from a dense local start-up cluster.',
  introRest:
    'M42, formed when G42 Healthcare merged with Mubadala Health, now holds the Emirati Genome Programme, the Omics Center of Excellence and the Abu Dhabi Biobank, and it signs the gene-editing and longevity partnerships that give the country a visible life-science story. PureHealth folds SEHA hospitals, Daman and the Abu Dhabi Stem Cells Center into one listed group. Hayat Biotech, the G42–Sinopharm CNBG joint venture, runs a vial plant in KEZAD. Julphar in Ras Al Khaimah remains the only Gulf manufacturer with dedicated insulin and erythropoietin drug-substance suites. Around them sit university laboratories at New York University Abu Dhabi, Khalifa University, UAE University and the University of Sharjah, plus tenants of Dubai Science Park that sell reagents and instruments rather than molecules. MOHAP, DoH Abu Dhabi and DHA split the licence, so a partnering team has to know which emirate owns the file before it asks who will manufacture. BioNixus sets the names out by function — sovereign platform, biologics plant, academic engine, park tenant, regulator — so a licensing or market-access conversation starts with the right door.',
  stats: [
    { value: '3', label: 'Health regulators that licence biologics and research (MOHAP, DoH Abu Dhabi, DHA)' },
    { value: '~800k', label: 'Whole genomes M42 reports as sequenced under the Emirati Genome Programme' },
    { value: '200m', label: 'Vials a year of stated filling capacity at Hayat Biotech’s KEZAD plant' },
    { value: '40m', label: 'Insulin vials a year of published capacity at Julphar’s Ras Al Khaimah biologics campus' },
  ],
  channelHeading: 'How capital, parks and regulators shape biotechnology in the UAE',
  channelBody:
    'Money and licences travel faster than discovery here. Abu Dhabi sovereign capital funds M42 and PureHealth, which then buy platforms, sequence citizens, bank samples and invite foreign developers to run studies or transfer filling. Dubai Science Park, which absorbed the older DuBiotech free zone, leases wet-lab and distribution space to instrument and reagent houses; it is a logistics and commercial address, not a Genentech campus. Ras Al Khaimah hosts Julphar’s insulin crystal and cartridge lines, the one piece of upstream biologics manufacturing that predates the pandemic wave of announcements. Hayat Biotech’s KEZAD factory was built for Sinopharm antigens and is now offered as regional contract filling. Registration of a biologic still needs a UAE marketing authorisation holder and inspection by the emirate that owns the plant or the importer: MOHAP for federal files and the northern emirates, DoH for Abu Dhabi manufacturing and research, DHA for Dubai Healthcare City and Dubai hospital use. Pricing follows the Ministry’s unified list, while Abu Dhabi’s Jawda and DoH innovation pathways can speed first use of a cell or gene therapy inside SEHA and Cleveland Clinic Abu Dhabi. Demand is insurance-funded in Dubai and Abu Dhabi, so a locally filled insulin or biosimilar still has to win Daman, Sukoon and GIG formularies after it clears the regulator. Partnering therefore runs through four rooms — M42 or PureHealth for data and sites, Julphar or Hayat for steel, a university for investigators, and the emirate regulator for the licence — and a team that treats the UAE as a deep discovery cluster will waste a year talking to the wrong counterpart.',
  companies: [
    {
      name: 'M42 (including former G42 Healthcare)',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Genomics, biobank, AI diagnostics, clinical research infrastructure, life-science partnerships',
      notes: 'Mubadala-backed platform that absorbed G42 Healthcare; runs the Omics Center of Excellence, Abu Dhabi Biobank and the Emirati Genome Programme, and signs the gene-editing and longevity deals that sponsors see first.',
    },
    {
      name: 'PureHealth',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'SEHA hospitals, Daman insurance, stem-cell and international hospital assets',
      notes: 'ADX-listed, government-controlled group that turns public beds and a national insurer into a single account for advanced-therapy adoption and hospital-based manufacturing discussions.',
    },
    {
      name: 'Hayat Biotech',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Vaccine and biologics filling; KEZAD plant offered as regional CMO capacity',
      notes: 'G42–Sinopharm CNBG joint venture whose declared 200-million-vial line was built for pandemic antigens and is now the UAE’s main pitch for contract filling rather than novel antigen discovery.',
    },
    {
      name: 'Julphar (Gulf Pharmaceutical Industries)',
      hq: 'Ras Al Khaimah',
      type: 'Local',
      focus: 'Recombinant insulin and erythropoietin drug substance plus cartridge filling',
      notes: 'ADX-listed manufacturer with two biologics API suites on the Digdaga campus and a published insulin-analogue licensing deal with Sunshine Lake; the only Gulf plant that has made insulin crystals at scale for years.',
    },
    {
      name: 'Abu Dhabi Stem Cells Center (ADSCC)',
      hq: 'Abu Dhabi',
      type: 'Operator',
      focus: 'Bone-marrow transplant, cell therapy and regenerative-medicine programmes',
      notes: 'Hospital-based unit now inside the PureHealth orbit; the practical counterpart for CAR-T, MSC and transplant protocols that need a licensed Abu Dhabi clean room rather than a park start-up.',
    },
    {
      name: 'New York University Abu Dhabi — biology and bioengineering research',
      hq: 'Abu Dhabi',
      type: 'MNC',
      focus: 'Academic wet-lab research, investigator-initiated studies, graduate training',
      notes: 'Saadiyat campus laboratories that publish in genomics, immunology and bioengineering; useful for investigator access, not for GMP supply.',
    },
    {
      name: 'Khalifa University — Center for Biotechnology',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'University biotechnology research, bioprocess teaching and industry contracts',
      notes: 'The main federal research university’s biotech centre; partners with DoH and M42 on applied projects and trains the process engineers that parks advertise but rarely employ at GMP scale.',
    },
    {
      name: 'United Arab Emirates University — College of Medicine and Health Sciences',
      hq: 'Al Ain',
      type: 'Government',
      focus: 'Academic medicine, public-health genomics and teaching-hospital research',
      notes: 'Al Ain faculty that feeds investigators into DoH-approved studies and remains the oldest federal medical school, complementary to the Abu Dhabi island campuses.',
    },
    {
      name: 'Mohammed Bin Rashid University of Medicine and Health Sciences (Dubai Health)',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Academic health-system research ethics, education and early clinical studies',
      notes: 'Dubai Health’s university; its IRB and teaching hospitals are the Dubai door for academic and industry protocols that do not sit inside Abu Dhabi’s M42 network.',
    },
    {
      name: 'University of Sharjah — Research Institute of Medical and Health Sciences',
      hq: 'Sharjah',
      type: 'Government',
      focus: 'Sharjah-based biomedical research and graduate programmes',
      notes: 'Northern-emirate academic node that gives sponsors a Sharjah ethics committee and investigators outside the two capital-city systems.',
    },
    {
      name: 'Neopharma',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Finished-dose manufacturing and historical biopharma joint-venture activity',
      notes: 'Abu Dhabi manufacturer better known for small-molecule plants than for a live biosimilar pipeline; still appears in localisation conversations because of its industrial footprint and earlier NeoBiocon chapter.',
    },
    {
      name: 'Dubai Science Park',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Free-zone landlord for life-science tenants, labs and regional HQs',
      notes: 'Tecom park that absorbed DuBiotech; a real address for Thermo Fisher, Merck Life Science and regional affiliates, not a substitute for a discovery company.',
    },
    {
      name: 'Thermo Fisher Scientific — Dubai Science Park',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Instruments, reagents, cold-chain and regional laboratory support',
      notes: 'Park tenant that supplies the kits and freezers M42, hospitals and Julphar actually buy; a channel account, not a UAE-origin pipeline.',
    },
    {
      name: 'Merck Life Science — regional hub',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Process materials, filters and laboratory chemicals for biomanufacturing',
      notes: 'Sells into Julphar, hospital pharmacies and park laboratories; inclusion here is about input supply, which is where most UAE “biotech” purchasing still sits.',
    },
    {
      name: 'Department of Health – Abu Dhabi',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Emirate regulator for research, advanced therapies and facility licensing',
      notes: 'Writes the Abu Dhabi research and ATMP rules that M42, ADSCC and Hayat live under, and co-signs the high-profile gene-editing memoranda.',
    },
    {
      name: 'Ministry of Health and Prevention (MOHAP)',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Federal product registration, pricing and northern-emirate oversight',
      notes: 'Holds the national marketing authorisation and price list that a biologic still needs even when DoH or DHA blessed the trial or the plant.',
    },
    {
      name: 'Dubai Health Authority — research and innovation',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Dubai research permits, hospital ethics and innovation pathways',
      notes: 'The Dubai counterpart for protocols and first-in-emirate use that sit outside Abu Dhabi’s DoH file.',
    },
  ],
  categoryBlurbs: {
    local:
      'Sovereign-backed platforms and the two plants that actually make or fill biologics — M42, Hayat Biotech, Julphar and Neopharma — plus the listed PureHealth system that owns beds and an insurer.',
    mnc:
      'NYU’s Saadiyat campus and the Science Park instrument houses that bring foreign kits, freezers and teaching labs rather than a UAE-invented molecule.',
    regional:
      'Gulf manufacturers with UAE plants or offices appear in this market mainly as Julphar itself; most other regional houses still treat the Emirates as a commercial hub, not a drug-substance site.',
    trade:
      'Federal and emirate regulators, Dubai Science Park as landlord, and the university institutes that supply investigators and ethics committees.',
  },
  growthDrivers: [
    {
      title: 'Sovereign genomics and biobank scale',
      desc: 'M42’s sequenced Emirati cohort and Abu Dhabi Biobank give foreign developers a reason to place observational and precision-medicine work in Abu Dhabi even when the molecule was discovered elsewhere.',
    },
    {
      title: 'Fill-finish and insulin steel already standing',
      desc: 'Hayat’s KEZAD vials and Julphar’s Ras Al Khaimah crystals are usable assets today; localisation talks start from those suites instead of from a greenfield promise.',
    },
    {
      title: 'Split but digital regulation',
      desc: 'DoH, DHA and MOHAP still split the map, yet Malaffi, NABIDH and Jawda let a first-use advanced therapy be watched in real time once an emirate licence is in hand.',
    },
    {
      title: 'Insurance-funded tertiary hospitals',
      desc: 'Mandatory cover in Dubai and Abu Dhabi plus Cleveland Clinic Abu Dhabi and SEHA tertiary sites create a paying launch pad for cell therapy and high-cost biologics that thinner Gulf markets cannot match.',
    },
  ],
  faq: [
    {
      q: 'Is the UAE a discovery biotechnology cluster?',
      a: 'Not in the Boston or Cambridge sense. The country buys platforms, sequences a national cohort, fills vials and licences foreign molecules. Julphar’s insulin suites are the main exception on drug substance. Treat the market as capital, regulation and late-stage infrastructure.',
    },
    {
      q: 'Who should a foreign developer call first in Abu Dhabi?',
      a: 'M42 if the need is genomics, biobank access or a health-system research partnership; DoH if the need is an ATMP or research licence; Hayat or Julphar if the need is filling or insulin-related manufacturing; PureHealth or ADSCC if the need is hospital-based cell therapy.',
    },
    {
      q: 'Which authority registers a biologic for national sale?',
      a: 'MOHAP issues the federal marketing authorisation and price. DoH and DHA still govern research, facility licences and first use inside their emirates, so a file often has a federal product number and an emirate research number.',
    },
    {
      q: 'What does Dubai Science Park actually host?',
      a: 'Regional headquarters, distribution warehouses and application laboratories for instrument and reagent companies, plus a smaller set of manufacturing and compounding tenants. It is not a pipeline of UAE-origin monoclonal antibodies.',
    },
    {
      q: 'What fieldwork does BioNixus run on UAE biotechnology organisations?',
      a: 'Stakeholder interviews in Abu Dhabi, Dubai and Ras Al Khaimah with hospital pharmacists, DoH and DHA research officers, and plant managers; mapping of which emirate owns a given licence; and account studies on how Daman and SEHA treat locally filled insulin versus imported originator packs.',
    },
    {
      q: 'Should readers treat this list as a league table of UAE biotech firms?',
      a: 'Treat it as a role map. Names are here because they keep appearing in BioNixus UAE interviews and in MOHAP, DoH and ADX disclosures. Sequence follows function — platform, plant, campus, park, regulator — not valuation or headcount.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Health and Prevention (MOHAP) — registered biological products and licensed establishments',
    url: 'https://mohap.gov.ae',
    asOf: '2026-09-04',
  },
  sources: [
    'M42 public announcements on the Emirati Genome Programme, Abu Dhabi Biobank and life-science partnerships, 2024–2026',
    'Hayat Biotech and Department of Health – Abu Dhabi statements on the KEZAD filling plant',
    'Julphar (Gulf Pharmaceutical Industries) disclosures on insulin and erythropoietin facilities and the Sunshine Lake analogue licence',
    'BioNixus UAE biotechnology and hospital-pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Pharmacist and formulary interviews at SEHA, Cleveland Clinic Abu Dhabi and Dubai Health hospitals on originator-versus-locally-filled insulin and erythropoietin.',
    'Licence-pathway mapping with DoH Abu Dhabi, DHA and MOHAP officers that separates federal product files from emirate research permits.',
    'Plant-visit and capacity discussions in Ras Al Khaimah (Julphar) and KEZAD (Hayat) focused on what is commissioned versus announced.',
    'Investigator interviews at NYU Abu Dhabi, Khalifa University and MBRU on what industry protocols they can actually host.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
