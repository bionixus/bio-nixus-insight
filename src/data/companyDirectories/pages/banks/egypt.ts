import type { DirectoryPageInput } from '../../types';

export const banksEgypt: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'egypt',
  title: 'Banks in Egypt: NBE, CIB, CBE licensed names (2026)',
  metaDescription:
    'Banks in Egypt: NBE, Banque Misr, CIB, QNB Alahli, Banque du Caire and CBE — state giants, private books, pound and FX rails.',
  introLead:
    'Egyptian banking is still a two-layer system: the state giants — National Bank of Egypt and Banque Misr — hold the branch reach and much of the public-sector cash, while Commercial International Bank is the private name treasurers reach for when they want a listed alternative, and the Central Bank of Egypt writes the rules both layers live under.',
  introRest:
    'QNB Alahli, Banque du Caire, AlexBank, Arab African International Bank, Crédit Agricole Egypt, Abu Dhabi Islamic Bank Egypt, Faisal Islamic Bank of Egypt, Housing and Development Bank, HSBC Egypt, National Bank of Kuwait Egypt, Emirates NBD Egypt and Attijariwafa Bank Egypt fill the next chairs BioNixus keeps hearing in Cairo and Alexandria interviews. Banque du Caire now sits in the Banque Misr orbit and still runs as a separate licensed book. Meeza, the national card scheme run with the Egyptian Banks Company, is the rail a pharmacy cashier actually sees. CBE licences the banks, sets the pound and FX corridor, and remains the desk a foreign parent must understand before it models working capital. Read it as a Cairo-and-Alexandria treasury roster for manufacturers and hospital CFOs, not as a Zamalek savings-rate comparison.',
  stats: [
    { value: 'CBE', label: 'Central Bank of Egypt — licensing, prudential rules, pound and FX corridor' },
    { value: 'NBE / Misr', label: 'State commercial giants that still dominate branch reach and public-sector cash' },
    { value: 'CIB', label: 'Largest widely cited private listed bank; the usual second chair on corporate panels' },
    { value: 'Meeza', label: 'National card scheme a Cairo or Alexandria cashier actually reconciles against' },
  ],
  channelHeading: 'How state books, private names and CBE FX rules share an Egyptian treasury',
  channelBody:
    'A private hospital in New Cairo often keeps a pound operating account at CIB or QNB Alahli, a second line at NBE or Banque Misr for government-adjacent receipts, and an FX conversation that still starts at CBE circulars rather than at the relationship manager’s smile. Letters of credit for imported devices reprice when the pound moves; that is why a clean Ministry or EDA file can still miss a shipment if the LC bank is slow. AlexBank (Intesa Sanpaolo) and Crédit Agricole Egypt plus HSBC Egypt cover the foreign-parent slice. QNB Alahli, NBK Egypt, Emirates NBD Egypt, ADIB Egypt and Attijariwafa Bank Egypt are the regional parents that already bank the same group in Doha, Kuwait, Dubai, Abu Dhabi or Casablanca. Faisal Islamic and ADIB Egypt are the sharia chairs. Housing and Development Bank appears when the brief is a residential-adjacent clinic or a developer-linked outpatient block. Meeza sits under the banks, not beside them: it is the scheme, and the acquirer is still a CBE-licensed book. Do not forecast a specialty launch on a retail savings-rate league table.',
  companies: [
    {
      name: 'National Bank of Egypt (NBE)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Largest state commercial bank; public-sector cash, retail and corporate',
      notes: 'The state book hospital groups still keep when a receipt or a tender sits next to a ministry or a public university.',
    },
    {
      name: 'Banque Misr',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Second state commercial giant; retail, corporate and Banque du Caire orbit',
      notes: 'The other public-sector chair. Groups that already sit with NBE often add Misr rather than replacing it.',
    },
    {
      name: 'Commercial International Bank (CIB)',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Largest widely cited private listed bank; corporate and affluent retail',
      notes: 'The private name Cairo treasurers reach for when they want a listed alternative to the state pair.',
    },
    {
      name: 'QNB Alahli',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Qatari-parent commercial bank; corporate, SME and retail',
      notes: 'The regional name that keeps appearing on panels already banked with QNB in Doha; a full Egyptian book, not a representative office.',
    },
    {
      name: 'Banque du Caire',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Historic commercial bank now in the Banque Misr orbit; still a separate licence',
      notes: 'Older contracts and Alexandria trading houses still treat it as its own relationship, even after the Misr combination.',
    },
    {
      name: 'AlexBank (Intesa Sanpaolo)',
      hq: 'Alexandria',
      type: 'MNC',
      focus: 'Alexandria-rooted commercial bank inside Intesa Sanpaolo',
      notes: 'The coastal name that still matters when the distributor or clinic sits in Alexandria rather than in New Cairo.',
    },
    {
      name: 'Arab African International Bank (AAIB)',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Corporate and trade-oriented commercial bank',
      notes: 'Trade-finance chair for importers that already use AAIB for letters of credit on devices and ingredients.',
    },
    {
      name: 'Crédit Agricole Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'French-parent commercial bank; corporate, retail and affluent books',
      notes: 'Foreign-parent name on mixed French-and-Egyptian healthcare and consumer accounts.',
    },
    {
      name: 'HSBC Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Foreign bank; multinational, trade and premium retail',
      notes: 'The global name regional HQs still put on an FX and trade panel beside CIB.',
    },
    {
      name: 'Abu Dhabi Islamic Bank Egypt',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'UAE-parent Islamic commercial bank in Egypt',
      notes: 'Sharia chair for groups that already bank with ADIB in Abu Dhabi and will not sign a conventional CIB facility.',
    },
    {
      name: 'Faisal Islamic Bank of Egypt',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Dedicated Islamic commercial bank; retail and corporate sharia products',
      notes: 'Domestic Islamic name that still appears on family-group panels beside ADIB Egypt.',
    },
    {
      name: 'Housing and Development Bank',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Development-linked commercial bank; housing and adjacent retail',
      notes: 'Shows up when the outpatient block sits inside a residential development rather than inside a standalone hospital campus.',
    },
    {
      name: 'National Bank of Kuwait Egypt',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Kuwaiti-parent Egyptian commercial franchise',
      notes: 'GCC corridor name for groups already banked with NBK; useful on trade lines more than on mass retail.',
    },
    {
      name: 'Emirates NBD Egypt',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'UAE-parent Egyptian commercial franchise',
      notes: 'Appears when a Dubai-banked group wants the same relationship in Cairo rather than opening a third primary bank.',
    },
    {
      name: 'Attijariwafa Bank Egypt',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Moroccan-parent commercial bank (former Barclays Egypt book)',
      notes: 'Maghreb-parent chair; older contracts may still say Barclays. Confirm the live legal name before a tender letter.',
    },
    {
      name: 'Société Arabe Internationale de Banque (SAIB)',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Mid-tier commercial bank; corporate and SME books',
      notes: 'Further listed-and-licensed capacity for groups that already run a four-bank panel.',
    },
    {
      name: 'Meeza / Egyptian Banks Company',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'National card scheme and interbank rails under CBE-facing infrastructure',
      notes: 'Not a deposit-taking bank. Included because a Cairo cashier reconciles Meeza long before they name the acquiring bank.',
    },
    {
      name: 'Central Bank of Egypt (CBE)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Licensing, prudential supervision, pound and FX corridor, payment systems',
      notes: 'The supervisor and the FX desk. A foreign parent that models working capital without reading CBE circulars will miss the constraint that actually binds.',
    },
  ],
  categoryBlurbs: {
    local:
      'CIB, Banque du Caire, AAIB, Faisal Islamic, Housing and Development Bank and SAIB — the domestic private and specialist books that sit beside the state pair.',
    mnc:
      'AlexBank inside Intesa Sanpaolo, plus Crédit Agricole Egypt and HSBC Egypt, as the foreign-parent chairs on trade and affluent panels.',
    regional:
      'QNB Alahli, ADIB Egypt, NBK Egypt, Emirates NBD Egypt and Attijariwafa Bank Egypt — GCC and Maghreb parents that already bank the same group at home.',
    trade:
      'NBE and Banque Misr as the state commercial giants, Meeza as the card scheme, and CBE as the supervisor that also writes the pound and FX corridor.',
  },
  growthDrivers: [
    {
      title: 'State giants next to a private listed chair',
      desc: 'NBE and Banque Misr still hold public-sector cash and branch reach; CIB is the listed alternative treasurers add rather than a replacement for the state pair.',
    },
    {
      title: 'Pound and FX circulars as a working-capital gate',
      desc: 'Imported devices and ingredients reprice when CBE rules move the corridor, so an LC at CIB or QNB Alahli is a launch-critical workstream, not a back-office chore.',
    },
    {
      title: 'Regional parents already on the Cairo panel',
      desc: 'QNB, NBK, Emirates NBD, ADIB and Attijariwafa keep Egyptian books so a group does not have to open a third primary bank when it already banks in Doha, Kuwait or Dubai.',
    },
    {
      title: 'Meeza as the cashier-facing rail',
      desc: 'Outpatient collection in Cairo and Alexandria often hits Meeza before anyone names the acquiring bank, which is why the scheme belongs on a healthcare treasury map.',
    },
    {
      title: 'Islamic chairs for family groups',
      desc: 'Faisal Islamic and ADIB Egypt win boards that will not sign a conventional CIB or HSBC facility, which splits the cash-management map in two.',
    },
  ],
  sections: [
    {
      heading: 'What a Cairo or Alexandria healthcare CFO actually needs',
      paragraphs: [
        'A pound operating account that can take ministry or insurer receipts, an LC bank that still has FX appetite when a device shipment lands, payroll that clears CBE know-your-customer checks, and card acquiring a Meeza terminal can settle before the outpatient desk closes. State giants help when the counterparty is public. CIB or QNB Alahli help when the board wants a listed private book. AlexBank helps when the warehouse is in Alexandria. None of those jobs is a retail savings-rate comparison, and none of them is solved by a wallet that is not a CBE bank.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences banks in Egypt?',
      a: 'The Central Bank of Egypt. Meeza is a card scheme sitting under that system, not a second supervisor and not a deposit-taking bank.',
    },
    {
      q: 'Is Banque du Caire the same book as Banque Misr?',
      a: 'It sits in the Misr orbit and still runs as a separate licensed bank. Older Alexandria contracts often still treat the relationship as its own name. Check the live legal entity on the facility letter.',
    },
    {
      q: 'Which names should a hospital or importer map first?',
      a: 'NBE and Banque Misr if public-sector cash is in the mix, CIB if the board wants a private listed chair, then QNB Alahli or AAIB for trade. Add AlexBank when the operation is coastal.',
    },
    {
      q: 'Why does the pound corridor belong on a banking map?',
      a: 'Because letters of credit for imported drugs and devices live or die on CBE FX rules. A clean regulatory file does not move a container if the LC bank cannot allocate hard currency.',
    },
    {
      q: 'What does BioNixus study about Egyptian banks?',
      a: 'Treasury and LC interviews with private hospital and distributor CFOs in Cairo and Alexandria; how panels split state giants versus CIB; and Meeza acquiring behaviour at outpatient desks.',
    },
    {
      q: 'Are these the largest Egyptian banks by assets?',
      a: 'The table is an account map for fieldwork, not a CBE size ranking. State giants sit next to private and regional names because hospital treasurers and distributor CFOs actually bank with them.',
    },
  ],
  regulatorSource: {
    name: 'Central Bank of Egypt (CBE) — licensed banks, prudential rules, pound and FX corridor, payment systems',
    url: 'https://www.cbe.org.eg',
    asOf: '2026-09-05',
  },
  sources: [
    'Central Bank of Egypt licensed-bank and circular materials',
    'Public disclosures of NBE, Banque Misr, CIB, QNB Alahli, Banque du Caire and peer licensed names',
    'Egyptian Banks Company / Meeza scheme materials',
    'BioNixus Egypt corporate-banking, trade-finance and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Cairo hospital-CFO interviews on how NBE, Banque Misr and CIB split ministry receipts, pound operating accounts and device LCs.',
    'Alexandria distributor walkthroughs of AlexBank and AAIB trade-finance lines when a coastal warehouse is the importing node.',
    'Outpatient-desk observations in Cairo on Meeza terminals and which acquiring bank actually settles the day.',
    'Family-group conversations in Alexandria on why a conventional CIB facility is reopened at Faisal Islamic or ADIB Egypt.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
