import type { DirectoryPageInput } from '../../types';

export const banksTurkey: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'turkey',
  title: 'Banks in Turkey: Ziraat, İşbank, BDDK names (2026)',
  metaDescription:
    'Banks in Turkey: Ziraat, İşbank, Garanti BBVA, Yapı Kredi, Akbank, VakıfBank, Halkbank and BDDK — state trio, private books, BKM rails.',
  introLead:
    'Turkish banking is a supervision split before it is a brand split: BDDK licences and polices the banks, the Central Bank of the Republic of Turkey runs money and instant payments, and a hospital CFO in Istanbul who collapses those two desks will mis-brief every lira facility on the slide.',
  introRest:
    'Ziraat, VakıfBank and Halkbank are the state commercial trio that still hold a large share of public-adjacent cash. Türkiye İş Bankası, Yapı Kredi and Akbank are the private names Istanbul treasurers reach for when they want a listed alternative. Garanti BBVA is the foreign-branded book that hospital billing offices still say out loud. QNB Finansbank, Denizbank (Emirates NBD) and TEB (BNP Paribas) plus ING Türkiye fill the next foreign-and-regional chairs. Kuveyt Türk, Türkiye Finans and Albaraka Türk are the participation (Islamic) banks. Şekerbank is a further mid-market name. BKM, the interbank card centre, is the rail an Istanbul or Ankara cashier actually sees. Enpara is a QNB Finansbank digital brand, not a second BDDK charter. Use it as an Istanbul-and-Ankara working-capital roster, not as a Kadıköy consumer-loan poster board.',
  stats: [
    { value: 'BDDK', label: 'Banking Regulation and Supervision Agency — the bank licence and conduct desk' },
    { value: 'TCMB', label: 'Central Bank of the Republic of Turkey — money, FX corridor and FAST instant payments' },
    { value: '3', label: 'State commercial names on this map: Ziraat, VakıfBank, Halkbank' },
    { value: 'BKM', label: 'Interbank card centre a cashier in Istanbul or Ankara reconciles against' },
  ],
  channelHeading: 'How the state trio, private books and BDDK–TCMB split share a Turkish treasury',
  channelBody:
    'A private hospital in Istanbul typically keeps a lira operating account at İşbank, Garanti BBVA or Yapı Kredi, a second line at Ziraat or VakıfBank when a public-adjacent receipt is in the mix, and card acquiring that still settles through BKM. Participation banks — Kuveyt Türk, Türkiye Finans, Albaraka Türk — win boards that will not sign a conventional facility. QNB Finansbank and Denizbank keep the Gulf-parent corridor warm; TEB and ING keep the European-parent corridor warm. Enpara can onboard a founder-led clinic because it is a Finansbank surface, not a second licence. FAST, the TCMB instant-payment rail, now sits under many payroll and supplier-payment conversations and must not be confused with a BDDK bank charter. City-hospital and university receipts still lean toward the state trio. A specialty-drug importer that cannot open a trade line when the lira moves will miss a shipment even if the TİTCK file is clean. Digital brands in Turkey live inside these licensed books. Model merchant collection as BKM plus an acquiring bank.',
  companies: [
    {
      name: 'Ziraat Bankası',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Largest state commercial bank; public-adjacent cash, retail and corporate',
      notes: 'The state book hospital groups still keep when a receipt sits next to a ministry, a city hospital or a public university.',
    },
    {
      name: 'Türkiye İş Bankası (İşbank)',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Largest widely cited private commercial bank; corporate, retail and affiliates',
      notes: 'The private name Istanbul treasurers reach for when they want a listed alternative to the state trio.',
    },
    {
      name: 'Garanti BBVA',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'BBVA-branded commercial bank; corporate, retail and cards',
      notes: 'The foreign-branded chair hospital billing offices in Istanbul still say out loud on many private panels.',
    },
    {
      name: 'Yapı Kredi',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Koç-group commercial bank; corporate, retail and cards',
      notes: 'Private chair that still appears beside İşbank and Garanti on multi-banked hospital and distributor panels.',
    },
    {
      name: 'Akbank',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Sabancı-group commercial bank; corporate, retail and SME',
      notes: 'Fourth private name on many Istanbul treasury shortlists after İşbank, Garanti and Yapı Kredi.',
    },
    {
      name: 'VakıfBank',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'State commercial bank; retail, corporate and public-adjacent books',
      notes: 'Second state chair after Ziraat on many mixed public-and-private healthcare panels.',
    },
    {
      name: 'Halkbank',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'State commercial bank; SME, retail and public-adjacent books',
      notes: 'Third name in the state trio. Shows up when the counterparty is an SME supplier or a public-adjacent clinic.',
    },
    {
      name: 'QNB Finansbank',
      hq: 'Istanbul',
      type: 'Regional',
      focus: 'Qatari-parent commercial bank; retail, corporate and Enpara digital brand',
      notes: 'Gulf-parent chair. Enpara is a Finansbank surface, not a second BDDK charter — do not list it as a separate bank.',
    },
    {
      name: 'Denizbank',
      hq: 'Istanbul',
      type: 'Regional',
      focus: 'Emirates NBD-owned commercial bank; retail and corporate',
      notes: 'UAE-parent chair for groups that already sit with Emirates NBD in Dubai and want an Istanbul signatory.',
    },
    {
      name: 'TEB (Türk Ekonomi Bankası)',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'BNP Paribas-linked commercial bank; corporate, retail and SME',
      notes: 'European-parent chair. Useful on mixed French-and-Turkish healthcare and consumer accounts.',
    },
    {
      name: 'ING Türkiye',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'ING-owned commercial bank; retail, SME and corporate',
      notes: 'Further European-parent name on mid-market and affluent panels beside TEB and Garanti BBVA.',
    },
    {
      name: 'Kuveyt Türk',
      hq: 'Istanbul',
      type: 'Regional',
      focus: 'KFH-linked participation bank; retail and corporate sharia products',
      notes: 'The participation name many Istanbul boards default to when a conventional İşbank or Garanti term sheet is unacceptable.',
    },
    {
      name: 'Türkiye Finans',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Participation bank; SNB-linked heritage; retail and corporate sharia products',
      notes: 'Second participation chair after Kuveyt Türk on many family-group panels. Confirm the live shareholder story on a 2026 letter.',
    },
    {
      name: 'Albaraka Türk',
      hq: 'Istanbul',
      type: 'Regional',
      focus: 'Al Baraka-linked participation bank',
      notes: 'Third participation name for boards that already have quotes from Kuveyt Türk and Türkiye Finans.',
    },
    {
      name: 'Şekerbank',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Mid-tier commercial bank; SME and regional retail',
      notes: 'Further licensed capacity for groups that already run a four- or five-bank panel outside the headline private quartet.',
    },
    {
      name: 'BKM (Bankalararası Kart Merkezi)',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Interbank card centre and merchant rails under the licensed-bank system',
      notes: 'Not a deposit-taking bank. An Istanbul cashier closes the day against BKM long before they name Garanti or Yapı Kredi as the acquirer.',
    },
    {
      name: 'Banking Regulation and Supervision Agency (BDDK)',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'Bank licensing and conduct; distinct from TCMB monetary operations',
      notes: 'The supervisor every commercial and participation name on this page reports to. FAST and the lira corridor are TCMB jobs, not BDDK charters.',
    },
    {
      name: 'Central Bank of the Republic of Turkey (TCMB)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Monetary policy, FX corridor, FAST instant payments',
      notes: 'Not a commercial bank. Included because a lira facility and a FAST payroll file live or die on TCMB rules even when the relationship sits at İşbank.',
    },
  ],
  categoryBlurbs: {
    local:
      'İşbank, Yapı Kredi, Akbank, Türkiye Finans and Şekerbank — the domestic private and participation names that sit beside the state trio on most Istanbul panels.',
    mnc:
      'Garanti BBVA, TEB and ING Türkiye as the foreign-branded chairs multinational and European parents still put on a lira and trade panel.',
    regional:
      'QNB Finansbank, Denizbank, Kuveyt Türk and Albaraka Türk — Gulf and participation-group parents that already bank the same group in Doha, Dubai or Kuwait City.',
    trade:
      'Ziraat, VakıfBank and Halkbank as the state commercial trio, BKM as the card rail, BDDK as the licence desk and TCMB as the money-and-FAST desk.',
  },
  growthDrivers: [
    {
      title: 'BDDK versus TCMB as two desks',
      desc: 'A bank charter is a BDDK event. A FAST payment and a lira-corridor rule are TCMB events. Collapsing those desks is the usual error on a foreign treasury slide.',
    },
    {
      title: 'State trio next to a private quartet',
      desc: 'Ziraat, VakıfBank and Halkbank still hold public-adjacent cash. İşbank, Garanti BBVA, Yapı Kredi and Akbank are the listed chairs treasurers add, not a replacement for the state names.',
    },
    {
      title: 'Participation banks as a second map',
      desc: 'Kuveyt Türk, Türkiye Finans and Albaraka Türk win boards a conventional İşbank or Garanti term sheet cannot enter, which splits the cash-management map in two.',
    },
    {
      title: 'BKM as the cashier-facing rail',
      desc: 'Outpatient collection in Istanbul and Ankara hits BKM before anyone names the acquiring bank, so the merchant conversation is the card centre plus a BDDK-licensed book.',
    },
    {
      title: 'Digital brands inside existing charters',
      desc: 'Enpara lives inside QNB Finansbank. There is no SAMA-style standalone digital-bank wave. Treat app skins as surfaces, not as second licences.',
    },
  ],
  sections: [
    {
      heading: 'What an Istanbul or Ankara healthcare CFO actually needs',
      paragraphs: [
        'A lira operating account that can take SGK, complementary-insurance or private receipts, a trade line that still has FX appetite when a device shipment lands, payroll that can ride FAST, and BKM acquiring a cashier can close before the outpatient desk shuts. State trio chairs help when the counterparty is public. İşbank, Garanti, Yapı Kredi or Akbank help when the board wants a private listed book. Kuveyt Türk helps when the board has already rejected a conventional term sheet. TCMB rules bind the corridor even when the relationship manager sits in Levent. BDDK binds the licence. Keep those sentences on different slides.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences banks in Turkey?',
      a: 'BDDK. TCMB runs money, the FX corridor and FAST. BKM is the card centre. Three desks, three jobs. A commercial bank reports to BDDK and still lives under TCMB rails.',
    },
    {
      q: 'Is Enpara a separately licensed bank?',
      a: 'It is a QNB Finansbank digital brand. Deposits sit on the Finansbank book. Do not list Enpara as a second BDDK charter.',
    },
    {
      q: 'Which names should a hospital treasurer map first?',
      a: 'İşbank, Garanti BBVA, Yapı Kredi or Akbank for a private listed chair; Ziraat or VakıfBank if public-adjacent cash is in the mix; Kuveyt Türk if the board wants a participation bank. Add BKM as the rail.',
    },
    {
      q: 'Why does the lira corridor belong on a banking map?',
      a: 'Because trade lines for imported drugs and devices live or die on TCMB FX rules. A clean TİTCK file does not move a container if the bank cannot allocate hard currency.',
    },
    {
      q: 'What does BioNixus study about Turkish banks?',
      a: 'Treasury and trade-finance interviews with private hospital and distributor CFOs in Istanbul and Ankara; how panels split the state trio versus İşbank and Garanti; and BKM acquiring behaviour at outpatient desks.',
    },
    {
      q: 'Is this a ranking of Turkish banks by assets?',
      a: 'The state trio and the private quartet are grouped by role, not by a BDDK league table. Names appear because Istanbul and Ankara interviews keep putting them on the same working-capital slide.',
    },
  ],
  regulatorSource: {
    name: 'Banking Regulation and Supervision Agency (BDDK) — licensed banks and participation banks, with TCMB on monetary and FAST rails',
    url: 'https://www.bddk.org.tr',
    asOf: '2026-09-05',
  },
  sources: [
    'BDDK licensed-bank and participation-bank materials',
    'TCMB public materials on the lira corridor and FAST; BKM scheme materials',
    'Public disclosures of Ziraat, İşbank, Garanti BBVA, Yapı Kredi, Akbank, VakıfBank, Halkbank, QNB Finansbank, Denizbank, TEB, ING, Kuveyt Türk, Türkiye Finans and Albaraka Türk',
    'BioNixus Turkey corporate-banking, treasury and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Istanbul hospital-CFO interviews on how İşbank, Garanti BBVA and Yapı Kredi split lira operating accounts and device trade lines.',
    'Ankara walkthroughs with public-adjacent clinic treasurers on why Ziraat or VakıfBank still sits beside a private listed chair.',
    'Outpatient-desk observations in Istanbul on BKM terminals and which acquiring bank actually settles the day.',
    'Participation-board conversations in Istanbul on Kuveyt Türk versus Türkiye Finans versus a conventional Akbank term sheet.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
