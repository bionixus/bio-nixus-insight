import type { DirectoryPageInput } from '../../types';

export const biotechCompaniesTurkey: DirectoryPageInput = {
  entity: 'biotech-companies',
  countrySlug: 'turkey',
  metaDescription:
    'Biotech companies in Turkey: Abdi İbrahim, DEVA, Koçak Farma, Nobel İlaç, TİTCK and TÜBİTAK MAM — vaccines, biosimilars, domestic plants.',
  introLead:
    'Turkish biotechnology grew out of large chemistry-based pharmaceutical houses that bolted on vaccine, hormone and biosimilar suites, not out of a venture-backed antibody cluster sitting beside a single campus.',
  introRest:
    'Abdi İbrahim is the domestic volume leader and has spent a decade putting biologics and sterile capacity next to its classic branded-generic engine. DEVA, listed and export-heavy, talks biosimilars the way it once talked oral solids. Koçak Farma is the name that appears on pandemic vaccine files — both its own inactivated candidate and filling work on TURKOVAC batches — which is as close as Turkey has to a VACSERA-style national antigen story. Nobel İlaç, Atabay, Vem, Ali Raif and Biofarma add further sterile and specialty plants across Istanbul, Kocaeli and Tekirdağ. Eczacıbaşı-Monrol occupies a different niche, radiopharmaceuticals, which hospital nuclear-medicine departments treat as a biologic-adjacent supply problem. TİTCK registers every product and inspects every suite. TÜBİTAK MAM and TÜSEB fund and host the public-lab side; Erciyes University’s vaccine centre showed during COVID that an academic GMP unit can matter. SGK reimbursement, not a venture exit, is what makes a Turkish biosimilar real. The directory therefore lists manufacturers, public labs, the agency and a few originator affiliates so a partnering team can see who has steel, who has a file and who pays.',
  stats: [
    { value: '1', label: 'National medicines agency (TİTCK) that registers biologics, vaccines and biosimilars' },
    { value: '~99%', label: 'Residents on SGK general cover — the reimbursement door that makes a biosimilar launch real' },
    { value: '2', label: 'Public science counterparts most often named on vaccine files: TÜBİTAK MAM and TÜSEB' },
    { value: '2020–22', label: 'Years when Koçak, Erciyes and TÜSEB put Turkish-made COVID antigens into regulated studies' },
  ],
  channelHeading: 'How Turkish manufacturers turn chemistry houses into biologics plants',
  channelBody:
    'The path is incremental. A listed or family company already selling SGK-reimbursed tablets adds a sterile hall, licences a biosimilar or a vaccine technology, and files a TİTCK biologic dossier. Drug-substance capability exists in places — hormones, some antigens, radiopharmacy — but many “biologics” on the Turkish market are still filled or packaged from imported bulk. TİTCK’s biosimilar and biological-product guidance sits on top of ordinary GMP and pricing rules; a reference product and a comparability package are expected, and a Turkish marketing authorisation holder is mandatory. Once registered, the commercial question is SGK’s Health Implementation Communiqué: if the molecule is missing from the communiqué and from ward protocols, the biosimilar stays on the shelf, however elegant the plant tour. Private chains — Acıbadem, MLP Care, Memorial — adopt some originator specialties faster than Ministry city hospitals, which is why originator affiliates remain in this table. Export to the Balkans, the Caucasus, the Gulf and North Africa pays for the next suite. Academic engines at Hacettepe, Istanbul University, Koç and Erciyes supply investigators and, occasionally, a platform; they do not replace TİTCK or SGK. A foreign developer that wants a Turkish manufacturing partner is therefore shopping among chemistry houses with biologics ambitions, not among twenty Genentech copies.',
  companies: [
    {
      name: 'Abdi İbrahim',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Largest domestic pharma group; sterile, biosimilar and specialty expansion',
      notes: 'The first local name hospital pharmacists mention; biologics sit beside a classic branded-generic field force and a wide SGK listing.',
    },
    {
      name: 'DEVA Holding',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'BIST-listed manufacturer with biosimilar and sterile injectables ambitions',
      notes: 'Export-oriented listed house that treats biosimilars as the next chapter of a chemistry business rather than as a separate venture firm.',
    },
    {
      name: 'Koçak Farma',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Vaccines, sterile manufacturing and pandemic antigen work including TURKOVAC filling',
      notes: 'The closest Turkish equivalent to a national vaccine manufacturer; ran Koçak-19 studies and produced TURKOVAC batches alongside other sites.',
    },
    {
      name: 'Nobel İlaç',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Branded generics, sterile lines and specialty products for home and export markets',
      notes: 'Long-established manufacturer that appears on hospital injectables and selected biologic-adjacent tenders.',
    },
    {
      name: 'Atabay İlaç',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Anti-infectives, hospital products and sterile manufacturing',
      notes: 'Family house with a hospital-heavy book; relevant when a sponsor wants a Turkish sterile partner outside the two listed giants.',
    },
    {
      name: 'Vem İlaç',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Hospital injectables and licensed specialty products',
      notes: 'Domestic manufacturer that competes for clinic and hospital sterile volume and for in-licensed biologics commercialisation.',
    },
    {
      name: 'Ali Raif İlaç',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Formulation manufacturing and selected sterile and specialty lines',
      notes: 'Another chemistry house that sits in TİTCK establishment lists and in SGK hospital files rather than on conference “biotech” panels.',
    },
    {
      name: 'Biofarma İlaç',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Finished-dose manufacturing including sterile capacity',
      notes: 'Name that confuses foreign teams: a Turkish pharmaceutical manufacturer, not a discovery-stage antibody company.',
    },
    {
      name: 'Eczacıbaşı-Monrol',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Radiopharmaceuticals for nuclear medicine',
      notes: 'The hospital nuclear-medicine supply account; not a classic biosimilar house, but the closest Turkish industrial play in a regulated biologic-adjacent class.',
    },
    {
      name: 'Hasbiotech İlaç',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Hospital and specialty pharmaceuticals with biologic-adjacent listings',
      notes: 'Smaller specialist that appears when the brief is Turkish hospital biologics rather than mass-market tablets.',
    },
    {
      name: 'Roche Turkey and Novo Nordisk Turkey',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Originator biologics, oncology, diabetes and switching baseline',
      notes: 'Affiliates that still define the originator side of any biosimilar or insulin conversation with SGK and private chains.',
    },
    {
      name: 'TÜBİTAK Marmara Research Center (MAM)',
      hq: 'Gebze',
      type: 'Government',
      focus: 'Public applied-research campus, including life-science and process laboratories',
      notes: 'Gebze campus that hosts grant-funded biologics and vaccine work and is the public-lab counterpart foreign teams are told to visit after TİTCK.',
    },
    {
      name: 'TÜSEB (Health Institutes of Turkey)',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'National health-research funding and vaccine programme coordination',
      notes: 'The public body that sat on TURKOVAC and related files; useful when a project needs a ministry-linked research partner rather than a private plant.',
    },
    {
      name: 'Erciyes University — vaccine research and GCP centre',
      hq: 'Kayseri',
      type: 'Government',
      focus: 'Academic vaccine development (ERAGEM) and early clinical units',
      notes: 'Kayseri academic engine behind ERUCoV-VAC / TURKOVAC clinical work; proof that Turkish university GMP can reach a national programme.',
    },
    {
      name: 'Turkish Medicines and Medical Devices Agency (TİTCK)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Biologics and biosimilar registration, GMP inspection, clinical-trial authorisation',
      notes: 'The single agency every company in this table files with; also the inspector of the sterile suites that marketing decks call biotechnology.',
    },
    {
      name: 'Social Security Institution (SGK) — pharmaceuticals',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Reimbursement codes, SUT rules and hospital protocol lists for biologics',
      notes: 'Without a SUT listing a Turkish biosimilar is a brochure. Included because it is the demand regulator, not because it manufactures.',
    },
  ],
  categoryBlurbs: {
    local:
      'Istanbul- and Marmara-region chemistry houses that added vaccine, hormone, radiopharma or biosimilar suites — Abdi İbrahim, DEVA, Koçak, Nobel and their peers.',
    mnc:
      'Originator affiliates that still set the switching and protocol baseline for insulin, oncology and immunology biologics inside SGK and private chains.',
    regional:
      'Turkish groups themselves act as the regional manufacturers for the Balkans and the Caucasus; incoming Levant or Gulf plants are rare on this file.',
    trade:
      'TİTCK, SGK, TÜBİTAK MAM, TÜSEB and the Erciyes vaccine centre — the agency, the payer and the public laboratories.',
  },
  growthDrivers: [
    {
      title: 'SGK reimbursement as the real launch gate',
      desc: 'A TİTCK licence without a SUT code leaves a biosimilar on the shelf; hospital protocols and city-hospital tenders then decide monthly volume.',
    },
    {
      title: 'Vaccine files that outlived the pandemic',
      desc: 'Koçak, Erciyes and TÜSEB built antigen and filling know-how that the Ministry still treats as strategic, even after COVID demand fell.',
    },
    {
      title: 'Export cash for the next sterile hall',
      desc: 'Balkan, Caucasian, Gulf and North African tenders pay for suites that SGK prices alone would not justify.',
    },
    {
      title: 'Private chains as early specialty adopters',
      desc: 'Acıbadem, Liv and Memorial take originator biologics and some biosimilars faster than Ministry city hospitals, creating a second, smaller but faster door.',
    },
  ],
  faq: [
    {
      q: 'Does Turkey have a VACSERA-style national vaccine company?',
      a: 'Not as a single holding company. Koçak Farma, Erciyes University’s vaccine centre and TÜSEB jointly carried the highest-profile antigen files. Treat that triangle as the functional equivalent, not as one equity story.',
    },
    {
      q: 'Who leads domestic biologics manufacturing?',
      a: 'Abdi İbrahim and DEVA are the scale pharmaceutical groups adding biosimilar and sterile capacity. Koçak is the vaccine specialist. Eczacıbaşı-Monrol owns radiopharmacy. None is a pure discovery biotech.',
    },
    {
      q: 'What does TİTCK require for a biosimilar?',
      a: 'A biological-product file with comparability to a reference, Turkish GMP and a local marketing authorisation holder, then a separate SGK listing fight. There is no PIF-style joint-venture shortcut.',
    },
    {
      q: 'Where should a plant tour go?',
      a: 'Istanbul and Kocaeli/Gebze for most private suites and for TÜBİTAK MAM; Kayseri for Erciyes; Ankara for TİTCK and SGK. Tekirdağ and other Marmara towns hold additional formulation halls.',
    },
    {
      q: 'What fieldwork does BioNixus run on Turkish biotechnology organisations?',
      a: 'Hospital-pharmacist interviews in Istanbul, Ankara and Izmir on biosimilar switching; TİTCK and SGK pathway mapping; and plant-capability discussions with Abdi İbrahim, DEVA and Koçak that separate licensed files from commissioned suites.',
    },
    {
      q: 'Does table order imply which Turkish biotech is most important?',
      a: 'It does not imply rank. Entries are here because they recur in BioNixus Turkey hospital and plant work and in TİTCK and BIST records. The sort is by role — manufacturer, originator affiliate, public lab, agency, payer.',
    },
  ],
  regulatorSource: {
    name: 'Turkish Medicines and Medical Devices Agency (TİTCK) — registered biological products and licensed establishments',
    url: 'https://www.titck.gov.tr',
    asOf: '2026-09-04',
  },
  sources: [
    'TİTCK biological-product and establishment materials',
    'Company and Borsa Istanbul disclosures by Abdi İbrahim, DEVA Holding and peers; TURKOVAC / Koçak clinical-trial registry entries',
    'TÜBİTAK MAM and TÜSEB public programme descriptions; SGK Health Implementation Communiqué (SUT)',
    'BioNixus Turkey biologics, vaccine and hospital-pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Biosimilar switching interviews with hospital pharmacists at Ministry city hospitals and at Acıbadem and MLP Care sites in Istanbul and Ankara.',
    'Plant-capability discussions in Istanbul, Gebze and Kayseri that record which vaccine and biosimilar suites are inspected versus announced.',
    'SUT and protocol-list mapping with medical directors on how a newly registered biologic actually reaches a city-hospital ward.',
    'Investigator interviews at Hacettepe, Koç and Erciyes on industry versus academic biologics protocols.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
