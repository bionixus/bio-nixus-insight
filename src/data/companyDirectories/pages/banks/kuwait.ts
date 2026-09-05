import type { DirectoryPageInput } from '../../types';

export const banksKuwait: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'kuwait',
  title: 'Banks in Kuwait: NBK, KFH, CBK licensees (2026)',
  metaDescription:
    'Banks in Kuwait: NBK, KFH, Gulf Bank, Boubyan, Warba, Burgan and the Central Bank — conventional books, Islamic names, K-Net rails.',
  introLead:
    'Kuwaiti banking still turns on a familiar pair: National Bank of Kuwait on the conventional side and Kuwait Finance House on the Islamic side, with the Central Bank of Kuwait licensing both and K-Net sitting underneath almost every merchant terminal a hospital cashier sees.',
  introRest:
    'Gulf Bank, Boubyan, Commercial Bank of Kuwait (Al-Tijari), Burgan Bank, Warba Bank, Al Ahli Bank of Kuwait and Kuwait International Bank fill the domestic chairs that keep appearing in Kuwait City interviews. Boubyan is the Islamic affiliate many groups already know from an NBK relationship; Warba and KIB are further dedicated Islamic names; KFH’s group now also houses the former Ahli United franchise in the wider region. Citibank and BNP Paribas cover the foreign-parent slice. QNB, FAB and Mashreq keep Kuwaiti offices for GCC groups already banked at home. Ahli United Bank as a standalone Kuwaiti retail name is a historical label — confirm the live KFH-group entity before a tender letter. This page is for a brand or hospital-strategy desk that needs to know who extends dinar working capital and who acquires the outpatient card, not for a consumer ranking of savings rates.',
  stats: [
    { value: 'CBK', label: 'Central Bank of Kuwait — the banking supervisor; not the same letters as Commercial Bank of Kuwait' },
    { value: 'NBK / KFH', label: 'The conventional-versus-Islamic pair that still opens most Kuwait City treasury conversations' },
    { value: 'K-Net', label: 'National merchant-and-ATM switch a hospital cashier actually reconciles against' },
    { value: 'Islamic', label: 'Dedicated sharia names on this map: KFH, Boubyan, Warba, KIB' },
  ],
  channelHeading: 'How the NBK–KFH pair, smaller books and K-Net share a Kuwaiti treasury',
  channelBody:
    'A private hospital in Kuwait City typically keeps a dinar operating account at NBK or Gulf Bank, a sharia window at KFH or Boubyan, and card acquiring that still prints a K-Net slip. The Central Bank of Kuwait is the supervisor; Commercial Bank of Kuwait is a listed conventional name that happens to share the CBK letters in casual speech — those two must never share a cell on a slide. Boubyan lets an NBK-banked group add Islamic product without leaving the family. Warba and KIB are further Islamic chairs for boards that want a name outside the KFH or NBK orbit. Burgan and Al Ahli Bank of Kuwait take mid-market and specialist corporate quotes. Foreign branches such as Citibank and BNP Paribas appear when a multinational parent wants a familiar name on a trade line. QNB, FAB and Mashreq keep the GCC corridor warm. There is no standalone digital-bank charter in the same sense as SAMA’s three or CBUAE’s Wio and Zand; digital brands in Kuwait sit inside these licensed books. Model the merchant rail as K-Net plus an acquiring bank, not as a fintech substitute for a CBK licence.',
  companies: [
    {
      name: 'National Bank of Kuwait (NBK)',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Largest conventional commercial bank; corporate, retail and regional network',
      notes: 'The conventional name Kuwait City treasurers still put first on many dinar operating and trade panels.',
    },
    {
      name: 'Kuwait Finance House (KFH)',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Largest dedicated Islamic commercial bank; domestic and regional group',
      notes: 'The sharia name family offices default to. Also the group that absorbed Ahli United — use the live legal entity on any 2026 letter.',
    },
    {
      name: 'Gulf Bank',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Listed conventional commercial bank; corporate, retail and SME',
      notes: 'Frequent second conventional chair after NBK on hospital and distributor panels.',
    },
    {
      name: 'Boubyan Bank',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Islamic commercial bank; NBK-group sharia affiliate',
      notes: 'The Islamic add-on for groups that already sit with NBK and will not sign a conventional facility.',
    },
    {
      name: 'Commercial Bank of Kuwait (Al-Tijari)',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Listed conventional commercial bank',
      notes: 'The listed name that must not be confused with the Central Bank of Kuwait. Older contracts still say Al-Tijari.',
    },
    {
      name: 'Burgan Bank',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Listed conventional commercial bank; corporate and regional affiliates',
      notes: 'Mid-to-large corporate chair that still appears on multi-banked industrial and trading panels.',
    },
    {
      name: 'Warba Bank',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Dedicated Islamic commercial bank; retail and corporate sharia products',
      notes: 'Further Islamic capacity outside the KFH and Boubyan pair, including government-linked ownership conversations.',
    },
    {
      name: 'Al Ahli Bank of Kuwait (ABK)',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Listed conventional commercial bank; corporate and retail',
      notes: 'Another conventional quote for groups that already run NBK, Gulf Bank and Burgan on the same panel.',
    },
    {
      name: 'Kuwait International Bank (KIB)',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Dedicated Islamic commercial bank',
      notes: 'Smaller Islamic chair that still shows up when a board wants a fourth sharia name after KFH, Boubyan and Warba.',
    },
    {
      name: 'Citibank Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Foreign branch; multinational, markets and trade',
      notes: 'Not a mass-retail competitor. Included because global healthcare parents still route some Kuwait trade and cash through it.',
    },
    {
      name: 'BNP Paribas Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Foreign branch; corporate and trade coverage',
      notes: 'Sits on the same international-parent slice as Citibank; relevant for trade lines more than for K-Net outpatient acquiring.',
    },
    {
      name: 'Qatar National Bank — Kuwait',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Qatari parent’s Kuwaiti franchise',
      notes: 'GCC corridor name for groups already banked with QNB in Doha.',
    },
    {
      name: 'First Abu Dhabi Bank — Kuwait',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Abu Dhabi parent’s Kuwaiti office',
      notes: 'Appears when an Abu Dhabi-banked group wants the same relationship in Kuwait City.',
    },
    {
      name: 'Mashreq — Kuwait',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Dubai parent’s Kuwaiti corporate coverage',
      notes: 'Trade and mid-market corridor name for groups already sitting with Mashreq in Dubai.',
    },
    {
      name: 'K-Net (National Electronic Funds Transfer / merchant switch)',
      hq: 'Kuwait City',
      type: 'Operator',
      focus: 'National ATM and point-of-sale switch under the licensed-bank system',
      notes: 'Not a deposit-taking bank. Included because a Kuwait City cashier sees a K-Net slip long before they name NBK or KFH as the acquirer.',
    },
    {
      name: 'Central Bank of Kuwait (CBK)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Licensing, prudential supervision, dinar and payment-system rules',
      notes: 'The supervisor. Never collapse this acronym with Commercial Bank of Kuwait on a client slide.',
    },
  ],
  categoryBlurbs: {
    local:
      'NBK, KFH, Gulf Bank, Boubyan, Al-Tijari, Burgan, Warba, ABK and KIB — the domestic conventional and Islamic books that still hold most dinar deposits and facilities.',
    mnc:
      'Citibank and BNP Paribas as the foreign-branch chairs multinational parents still put on a trade and markets panel.',
    regional:
      'QNB, FAB and Mashreq Kuwaiti offices — GCC parents that keep a CBK-facing presence for groups already banked in Doha, Abu Dhabi or Dubai.',
    trade:
      'K-Net as the national merchant switch and the Central Bank of Kuwait as the supervisor — plus a reminder that CBK-the-regulator is not Al-Tijari.',
  },
  growthDrivers: [
    {
      title: 'Conventional-versus-Islamic pair as the opening move',
      desc: 'Most Kuwait City treasury conversations still start at NBK or KFH. Boubyan lets an NBK group add sharia product without leaving the family; Warba and KIB sit outside that pair.',
    },
    {
      title: 'K-Net as the cashier-facing rail',
      desc: 'Outpatient collection almost always hits K-Net before anyone names the acquiring bank, so a specialty-clinic launch that ignores the switch will mis-brief the merchant conversation.',
    },
    {
      title: 'No standalone digital-bank charter',
      desc: 'Unlike SAMA or CBUAE, Kuwait’s digital brands live inside these licensed books. Do not invent a challenger bank that is only an app skin.',
    },
    {
      title: 'Acronym collision between supervisor and Al-Tijari',
      desc: 'Casual speech uses CBK for both the Central Bank and Commercial Bank of Kuwait. That collision is a recurring briefing error on foreign slides.',
    },
    {
      title: 'GCC corridor offices',
      desc: 'QNB, FAB and Mashreq keep Kuwaiti chairs so a group already banked in Doha, Abu Dhabi or Dubai does not have to open a fourth primary bank.',
    },
  ],
  sections: [
    {
      heading: 'What a Kuwait City healthcare treasurer actually buys',
      paragraphs: [
        'A dinar operating account, a trade line for imported devices, payroll that clears Central Bank know-your-customer checks, and K-Net acquiring a cashier can close at the end of the outpatient day. Conventional boards start at NBK or Gulf Bank. Sharia boards start at KFH or Boubyan. Foreign parents add Citibank or BNP Paribas for the global relationship and still need a local book for dinar payroll. Digital apps in this market are skins on those licences, not a second supervisor.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences banks in Kuwait?',
      a: 'The Central Bank of Kuwait. K-Net is the national switch sitting under that system, not a second supervisor and not a deposit-taking bank.',
    },
    {
      q: 'Is CBK the Central Bank or Commercial Bank of Kuwait?',
      a: 'In this directory CBK means the Central Bank. Commercial Bank of Kuwait is listed separately as Al-Tijari. Foreign slides that collapse the two letters create the usual error.',
    },
    {
      q: 'What happened to Ahli United Bank in Kuwait?',
      a: 'The wider AUB franchise moved into the KFH group. Do not treat a standalone Ahli United retail name as a current Kuwaiti licence without checking the live legal entity.',
    },
    {
      q: 'Which names should a hospital treasurer map first?',
      a: 'NBK and KFH first, then Gulf Bank or Boubyan depending on conventional versus Islamic appetite. Add K-Net as the rail, not as a bank.',
    },
    {
      q: 'What does BioNixus study about Kuwaiti banks?',
      a: 'Treasury and merchant-acquiring interviews with private hospital and pharmacy groups in Kuwait City; how panels split NBK versus KFH; and K-Net slip behaviour at outpatient desks.',
    },
    {
      q: 'Is this a ranking of Kuwaiti banks by deposits?',
      a: 'It is a fieldwork roster. Domestic books, GCC offices, foreign branches, K-Net and the Central Bank appear because Kuwait City interviews keep naming them. Sequence is role, not a dinar league.',
    },
  ],
  regulatorSource: {
    name: 'Central Bank of Kuwait (CBK) — licensed banks, Islamic and conventional books, payment-system oversight',
    url: 'https://www.cbk.gov.kw',
    asOf: '2026-09-05',
  },
  sources: [
    'Central Bank of Kuwait licensed-bank materials',
    'Public disclosures of NBK, KFH, Gulf Bank, Boubyan, Commercial Bank of Kuwait, Burgan, Warba, ABK and KIB',
    'K-Net / national electronic-funds materials; KFH communications on the Ahli United combination',
    'BioNixus Kuwait corporate-banking, treasury and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Kuwait City hospital-treasurer interviews on how NBK and Gulf Bank split dinar operating accounts and device trade lines.',
    'Sharia-board conversations in Kuwait City on why a conventional NBK term sheet is reopened at KFH or Boubyan.',
    'Outpatient-desk walkthroughs in Kuwait City of K-Net terminals and which acquiring bank actually settles the day.',
    'Distributor-CFO interviews in Kuwait City on QNB, FAB and Mashreq corridor lines for groups already banked elsewhere in the Gulf.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
