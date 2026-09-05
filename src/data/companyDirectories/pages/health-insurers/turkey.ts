import type { DirectoryPageInput } from '../../types';

export const healthInsurersTurkey: DirectoryPageInput = {
  entity: 'health-insurers',
  countrySlug: 'turkey',
  metaDescription:
    'Health insurers in Turkey: Allianz, Anadolu, Aksigorta, Mapfre, SGK, TSS complementary cover and SEDDK — public core, private top-up.',
  introLead:
    'Almost every resident of Turkey already has a public payer — the Social Security Institution — so the commercial medical market is a complementary layer: Tamamlayıcı Sağlık Sigortası (TSS) that picks up private-hospital difference fees, and a thinner full private product (ÖSS) for people who want to step outside SGK tariffs.',
  introRest:
    'Allianz Türkiye, Anadolu Sigorta, Aksigorta, Mapfre, Türkiye Sigorta and Acıbadem Sigorta write most of those complementary and full-private cards. SEDDK, the insurance and private-pension authority, rewrote the private-health rulebook from 1 January 2026, including a standardised lifetime-renewal promise. SGK remains the volume payer through the Health Implementation Communiqué (SUT) and contracts with both Ministry city hospitals and private chains. Acıbadem and MLP Care appear here as operator accounts because their network status on a TSS card is what the product is actually selling. This directory is for a brand or access team that must tell an SGK SUT claim from an Allianz or Anadolu top-up, not for a shopper comparing outpatient copays in Kadıköy.',
  stats: [
    { value: '~99%', label: 'Residents on SGK general cover — the public core every TSS policy sits on' },
    { value: 'TSS', label: 'Tamamlayıcı ve Destekleyici Sağlık Sigortası — complementary product that pays private-hospital difference fees' },
    { value: '1 Jan 2026', label: 'Date SEDDK’s renewed private-health rules, including standardised ÖBYG offers, took effect' },
    { value: 'SUT', label: 'Health Implementation Communiqué — the tariff book that prices SGK-contracted private care' },
  ],
  channelHeading: 'How SGK tariffs and TSS policies share a Turkish hospital bill',
  channelBody:
    'A typical private-hospital admission in Istanbul produces two invoices in spirit even when the patient sees one desk. SGK pays the contracted SUT tariff, with a regulated difference fee the hospital may charge on top. TSS is the product that picks up that difference, provided the hospital is in the insurer’s network and waiting periods have passed. Full ÖSS products go further and can treat the stay as a private event, which is why they cost more and why SEDDK now polices lifetime-renewal promises more tightly. Allianz, Anadolu, Aksigorta and Mapfre compete on network breadth — whether Liv, Acıbadem, Memorial and the Medical Park tier are in — and on how harshly they apply medical underwriting. Türkiye Sigorta, the state-backed composite, adds public-adjacent capacity. Acıbadem Sigorta is the writer born from a hospital group, which is a useful reminder that in Turkey the operator and the payer can share a brand. City hospitals and university hospitals still run mostly on SGK alone. A specialty-drug launch is therefore an SGK protocol-and-SUT fight first, and a TSS/ÖSS network fight only for the slice of patients who use private chains. Medical tourism is cash or international insurance and should not be mixed into a TSS forecast.',
  companies: [
    {
      name: 'Social Security Institution (SGK)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Universal public payer; SUT tariffs; contracts with public and private hospitals',
      notes: 'The volume payer. If the molecule lacks a SUT listing and a contracted-hospital protocol, TSS brochures will not move the vials.',
    },
    {
      name: 'SEDDK (Insurance and Private Pension Regulation and Supervision Authority)',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'Licensing and conduct of TSS and ÖSS writers; 2026 private-health rulebook',
      notes: 'The financial supervisor. SGK is not a SEDDK product; keep the public tariff desk and the private-policy desk on separate slides.',
    },
    {
      name: 'Allianz Türkiye',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'TSS and ÖSS medical products; wide private-hospital networks',
      notes: 'The foreign brand hospital billing offices in Istanbul name first on many complementary cards.',
    },
    {
      name: 'Anadolu Sigorta',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Composite writer with a large TSS/ÖSS medical book',
      notes: 'İşbank-linked composite that competes with Allianz on network and on corporate TSS tenders.',
    },
    {
      name: 'Aksigorta',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Sabancı-linked composite; complementary and full private medical',
      notes: 'Second domestic composite on employer TSS panels, often next to Anadolu in a broker comparison.',
    },
    {
      name: 'Mapfre Sigorta',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'TSS and ÖSS products under a Spanish parent',
      notes: 'Foreign writer with a Turkish licence; appears on mid-to-upper corporate complementary panels.',
    },
    {
      name: 'Türkiye Sigorta',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'State-backed composite after public-insurer mergers; medical line included',
      notes: 'The public-adjacent commercial writer; useful on government-linked employee books that still want a TSS card.',
    },
    {
      name: 'Acıbadem Sigorta',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Medical writer born from the Acıbadem hospital group',
      notes: 'The clearest operator-linked insurance brand; network design and hospital ownership sit unusually close.',
    },
    {
      name: 'Groupama Sigorta',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Composite including complementary medical',
      notes: 'Further foreign-owned capacity on SME and affinity TSS books.',
    },
    {
      name: 'Sompo Sigorta',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Composite products including medical',
      notes: 'Japanese-parented writer that still appears on broker TSS grids.',
    },
    {
      name: 'Acıbadem Healthcare Group — network account',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Private-chain hospitals that TSS products are built to include',
      notes: 'IHH-owned group; being in or out of an Allianz or Anadolu network is an occupancy variable.',
    },
    {
      name: 'MLP Care (Medical Park / Liv) — network account',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Listed chain: Medical Park on public tariffs, Liv on premium complementary cards',
      notes: 'The operator that shows the two-layer model in one group — SUT beds downstairs, complementary-card beds upstairs.',
    },
    {
      name: 'Memorial Healthcare Group — network account',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Premium private hospitals on enhanced TSS and ÖSS lists',
      notes: 'Third chain brand teams map when the question is whether a complementary card actually opens a transplant or oncology ward.',
    },
    {
      name: 'Ministry of Health — city hospitals as SGK sites',
      hq: 'Ankara',
      type: 'Government',
      focus: 'PPP city hospitals that run almost entirely on SGK, not on TSS',
      notes: 'Included so teams do not assume complementary insurance funds the 1,000-bed city-hospital ward. It does not.',
    },
    {
      name: 'Insurance Association of Turkey (TSB) — health committee',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Industry body for TSS/ÖSS writers',
      notes: 'The room where Allianz, Anadolu, Aksigorta and Mapfre compare notes on SEDDK’s 2026 rulebook.',
    },
    {
      name: 'Sigorta Bilgi ve Gözetim Merkezi (SBM)',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'Insurance information and monitoring centre; health-policy data',
      notes: 'The data utility behind private-policy history, relevant now that ÖBYG rights can travel between writers.',
    },
  ],
  categoryBlurbs: {
    local:
      'Anadolu, Aksigorta, Acıbadem Sigorta and Türkiye Sigorta — domestic and state-backed writers of TSS and ÖSS — plus TSB as the industry room.',
    mnc:
      'Allianz, Mapfre, Groupama and Sompo, which hold large complementary books on Turkish licences.',
    regional:
      'Turkish writers themselves export little medical risk; the regional story here is hospital groups (IHH/Acıbadem) that sit on both operator and insurer sides.',
    trade:
      'SGK and SEDDK as the two pillars, SBM as the data utility, city hospitals as SGK-only sites, and Acıbadem, MLP Care and Memorial as the networks TSS is selling.',
  },
  growthDrivers: [
    {
      title: 'TSS as the mass private product',
      desc: 'Complementary cover is how middle-income families buy private-hospital comfort without leaving SGK. Network design at Allianz and Anadolu therefore steers a lot of elective volume.',
    },
    {
      title: 'SEDDK’s 2026 consumer-rights rulebook',
      desc: 'Standardised lifetime-renewal offers and portable waiting-period rights make TSS stickier and make switching among writers more plausible — a headache and an opportunity for hospital network teams.',
    },
    {
      title: 'Private chains living on a two-payer bill',
      desc: 'Medical Park can fill a ward on SUT; Liv and Acıbadem need the TSS/ÖSS top-up. Formulary and difference-fee fights happen at that seam.',
    },
    {
      title: 'SGK still deciding specialty-drug volume',
      desc: 'A SUT listing and a city-hospital protocol move more vials than any complementary card. Private insurance is the second conversation, not the first.',
    },
  ],
  faq: [
    {
      q: 'What is TSS and who can buy it?',
      a: 'Tamamlayıcı ve Destekleyici Sağlık Sigortası. The buyer must already be an SGK general-health beneficiary. The product pays private-hospital difference fees and some extras inside a named network, under SEDDK rules.',
    },
    {
      q: 'What changed on 1 January 2026?',
      a: 'SEDDK’s renewed private-health framework, including a requirement to offer a lifetime-renewal (ÖBYG) contract to eligible people under 60, tighter waiting-period rules and more portable rights. Read the Authority’s guide, do not rely on an old broker one-pager.',
    },
    {
      q: 'Does SGK pay private hospitals?',
      a: 'Yes, when the hospital is contracted, at SUT tariffs, with a regulated difference fee. That is why TSS exists. City hospitals and university hospitals run far more of their book on SGK alone.',
    },
    {
      q: 'Which writers and which hospital groups belong on a first map?',
      a: 'SGK first. Then Allianz, Anadolu, Aksigorta, Mapfre, Türkiye Sigorta and Acıbadem Sigorta. Then Acıbadem, MLP Care and Memorial as the networks those cards sell.',
    },
    {
      q: 'What does BioNixus study about Turkish health insurers?',
      a: 'TSS versus SUT bill-split interviews at Acıbadem, Liv and Medical Park in Istanbul and Ankara; SEDDK-rule implementation checks with brokers; and specialty-drug pathway work that starts with the SUT code, not with the complementary card.',
    },
    {
      q: 'Is this a ranking of Turkish health insurers by TSS premiums?',
      a: 'It is a two-layer map. SGK, SEDDK, complementary writers and the hospital groups they credential sit together so a planner can see which invoice a vial actually sits on. Role sets the order, not a premium league.',
    },
  ],
  regulatorSource: {
    name: 'SEDDK — private health insurance (TSS/ÖSS) supervision, with SGK as the public tariff payer',
    url: 'https://www.seddk.gov.tr',
    asOf: '2026-09-04',
  },
  sources: [
    'SEDDK Özel Sağlık Sigortalarında Yeni Dönem Bilgilendirme Rehberi and related 2026 rulebook materials',
    'SGK Health Implementation Communiqué (SUT) public materials',
    'Company materials of Allianz Türkiye, Anadolu Sigorta, Aksigorta, Mapfre, Türkiye Sigorta and Acıbadem Sigorta; BIST disclosures of MLP Care',
    'BioNixus Turkey payer, TSS and hospital-billing fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Bill-split interviews at Acıbadem, Liv and Medical Park desks in Istanbul on how a single admission is coded to SUT versus TSS.',
    'Broker interviews in Levent and Ankara on how SEDDK’s 2026 ÖBYG rules changed TSS tenders for corporate books.',
    'Specialty-drug pathway work in Ankara city hospitals that starts from the SUT protocol list rather than from a complementary card.',
    'Network-inclusion interviews with Memorial and Anadolu Sigorta teams on whether an oncology ward is actually open to a mid-tier TSS product.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
