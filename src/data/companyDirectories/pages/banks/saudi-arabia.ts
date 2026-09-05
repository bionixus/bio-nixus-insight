import type { DirectoryPageInput } from '../../types';

export const banksSaudiArabia: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'saudi-arabia',
  title: 'Banks in Saudi Arabia: SNB, Al Rajhi, SAMA names (2026)',
  metaDescription:
    'Banks in Saudi Arabia: SNB, Al Rajhi, SAB, Alinma, STC Bank and SAMA — Islamic books, digital licences, Vision 2030 corporate banking.',
  introLead:
    'Kingdom banking is a SAMA-licensed franchise first and a brand story second: Saudi National Bank and Al Rajhi still take most of the corporate and retail conversation, while Vision 2030 project finance, Islamic books and three digital-bank charters are rewriting who a hospital treasurer or distributor CFO actually calls.',
  introRest:
    'SAMA, the Saudi Central Bank, still publishes under that historic acronym even as English materials also say Saudi Central Bank. Listed names that recur in Tadawul filings and in BioNixus Kingdom interviews include Riyad Bank, Saudi Awwal Bank, Banque Saudi Fransi, Arab National Bank, Alinma, Bank AlJazira, Bank Albilad and The Saudi Investment Bank. Gulf International Bank’s Saudi vehicle, a National Bank of Kuwait branch and a Deutsche Bank branch sit on the foreign-and-regional slice. STC Bank, D360 Bank and Vision Bank hold the dedicated digital-bank licences SAMA created for a branch-light model; they are not stored-value facilities. Stored-value and payment-service licences are a separate SAMA class and must not be read as deposit-taking bank charters. This page is an account map for a healthcare or consumer-brand team that needs to know who extends working capital, who runs the merchant terminal in a Riyadh or Jeddah pharmacy, and which sharia window a family group will accept.',
  stats: [
    { value: '3', label: 'SAMA digital-bank licensees now operating: STC Bank, D360 Bank, Vision Bank' },
    { value: 'SAMA', label: 'Saudi Central Bank — still the public brand and the banking supervisor' },
    { value: 'Islamic', label: 'Dedicated sharia banks on this map: Al Rajhi, Alinma, Albilad, AlJazira' },
    { value: 'Tadawul', label: 'Exchange where the large local commercial names publish the filings this list was checked against' },
  ],
  channelHeading: 'How SAMA licences, Islamic books and Vision 2030 cash move through Kingdom banks',
  channelBody:
    'A private hospital group in Riyadh typically keeps a primary operating account at SNB or Riyad Bank, a sharia window or a second line at Al Rajhi or Alinma, and card-acquiring that still settles through the national mada rails. Payroll for mixed Saudi-and-expatriate workforces is a banking product, not an HR afterthought: wage protection, iban verification and SAMA know-your-customer rules decide how fast a new clinic can hire. Project finance for Vision 2030 health clusters, industrial cities and giga-project clinics sits with the large listed books and with GIB’s Saudi vehicle more often than with a digital-only charter. STC Bank, D360 and Vision Bank matter for consumer deposits and for app-native SME current accounts; they do not yet replace SNB or Al Rajhi on a multi-year construction facility. Foreign branches such as Deutsche Bank and NBK’s Kingdom office appear when a multinational parent wants a familiar name on a trade-finance line. Stored-value wallets remain useful for low-value payments and must be labelled as payment licences, not as banks, whenever a slide deck mixes “fintech” with “SAMA bank”. Islamic share is structural, not cosmetic: many family offices will not sign a conventional facility, which is why Al Rajhi, Alinma, Albilad and AlJazira belong on the first map a brand team draws.',
  companies: [
    {
      name: 'Saudi National Bank (SNB)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Largest listed conventional book; corporate, retail and project finance',
      notes: 'The NCB–Samba combination still dominates many Kingdom treasury panels; hospital groups name SNB first on working-capital and payroll tenders.',
    },
    {
      name: 'Al Rajhi Bank',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Largest dedicated Islamic commercial bank; retail and corporate sharia books',
      notes: 'The sharia name family offices and retail depositors default to; a specialty-clinic launch that needs murabaha working capital usually starts here.',
    },
    {
      name: 'Riyad Bank',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed commercial bank with a wide corporate and mid-market franchise',
      notes: 'Frequent second name on multi-banked hospital and distributor panels after SNB, especially for riyal cash management.',
    },
    {
      name: 'Saudi Awwal Bank (SAB)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed commercial bank; SABB–Alawwal combination with historic HSBC DNA',
      notes: 'The vehicle multinational treasurers still associate with HSBC even though the licence and listing are Saudi; useful on mixed local-and-parent banking panels.',
    },
    {
      name: 'Banque Saudi Fransi',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed commercial bank with a long Credit Agricole heritage',
      notes: 'Corporate and private-banking name that still appears on French-linked and mixed-ownership healthcare accounts.',
    },
    {
      name: 'Arab National Bank (ANB)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed commercial bank; corporate, retail and Arab Bank-linked franchise',
      notes: 'Mid-to-large corporate book that shows up when a group already banks with Arab Bank elsewhere in the region.',
    },
    {
      name: 'Alinma Bank',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed Islamic commercial bank; corporate and retail sharia products',
      notes: 'Second dedicated Islamic name after Al Rajhi on many employer and family-group panels that refuse a conventional facility.',
    },
    {
      name: 'Bank AlJazira',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Jeddah-rooted Islamic commercial bank',
      notes: 'Western-region Islamic book that hospital and trading groups in Jeddah still keep even when Riyadh names dominate headlines.',
    },
    {
      name: 'Bank Albilad',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed Islamic commercial bank; retail and SME sharia books',
      notes: 'Further Islamic capacity for SME clinic and pharmacy groups that want a third sharia quote after Al Rajhi and Alinma.',
    },
    {
      name: 'The Saudi Investment Bank',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Listed commercial bank; corporate, private and investment-adjacent books',
      notes: 'Smaller listed name that still appears on specialist corporate and private-banking slices rather than on mass retail maps.',
    },
    {
      name: 'Gulf International Bank — Saudi',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'Bahrain-parent wholesale and corporate banking inside the Kingdom',
      notes: 'Regional wholesale name used on larger project and trade facilities that a purely domestic retail book may not want to hold alone.',
    },
    {
      name: 'National Bank of Kuwait — Saudi branch',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'Kuwaiti parent’s SAMA-licensed Kingdom branch',
      notes: 'Appears when a GCC group wants the same relationship across Kuwait and Riyadh rather than opening a second local primary bank.',
    },
    {
      name: 'Bank Muscat — Saudi branch',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'Omani parent’s SAMA-licensed Kingdom branch',
      notes: 'Thin but real foreign-branch capacity for Omani-linked trading and healthcare accounts that already sit with Bank Muscat at home.',
    },
    {
      name: 'Deutsche Bank — Saudi Arabia',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Foreign-branch wholesale, markets and multinational coverage',
      notes: 'Not a mass-retail competitor; included because global healthcare and device parents still route some Kingdom trade and markets work through it.',
    },
    {
      name: 'STC Bank',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'SAMA digital-bank licensee; telecom-group consumer and SME accounts',
      notes: 'Evolved from the STC Pay wallet into a full digital-bank charter; treat it as a bank, not as a stored-value facility, on any 2026 map.',
    },
    {
      name: 'D360 Bank',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'SAMA digital-bank licensee; sharia-leaning app-native retail and wealth',
      notes: 'PIF- and Derayah-linked digital charter that opened after the 2021 licence wave; a consumer and SME name, not a giga-project book.',
    },
    {
      name: 'Vision Bank',
      hq: 'Riyadh',
      type: 'Operator',
      focus: 'SAMA digital-bank licensee; incremental retail and SME digital book',
      notes: 'Third dedicated digital charter; formerly discussed as Saudi Digital Bank. Confirm live products against current SAMA notices before treating it as a payroll bank.',
    },
    {
      name: 'Saudi Central Bank (SAMA)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Licensing, prudential supervision, payment rails and monetary policy',
      notes: 'The supervisor every name on this page reports to; included so a brand team does not confuse a SAMA bank charter with a payment-service or stored-value licence.',
    },
  ],
  categoryBlurbs: {
    local:
      'Tadawul-listed commercial and Islamic names — SNB, Al Rajhi, Riyad Bank, SAB, Banque Saudi Fransi, ANB, Alinma, AlJazira, Albilad, SAIB — that still hold most Kingdom deposits and facilities.',
    mnc:
      'Deutsche Bank’s Kingdom branch is the foreign wholesale name on this map; historic HSBC and Credit Agricole DNA now lives inside SAB and Banque Saudi Fransi as local licences.',
    regional:
      'GIB’s Saudi vehicle plus NBK and Bank Muscat branches — GCC parents that keep a SAMA office for groups already banked in Kuwait, Bahrain or Oman.',
    trade:
      'STC Bank, D360 and Vision Bank as the three digital-bank charters, and SAMA as the supervisor that also polices stored-value and payment-service licences next door.',
  },
  growthDrivers: [
    {
      title: 'Vision 2030 health and giga-project cash',
      desc: 'Cluster hospitals, industrial-city clinics and giga-project contractors still need multi-year riyal facilities that sit with SNB, Riyad Bank, SAB and GIB more than with a digital-only charter.',
    },
    {
      title: 'Islamic share as a hard constraint',
      desc: 'Family offices and many listed groups will not sign a conventional loan, so Al Rajhi, Alinma, Albilad and AlJazira are a separate map, not a product footnote on a conventional slide.',
    },
    {
      title: 'Three digital-bank charters now live',
      desc: 'STC Bank, D360 and Vision Bank take consumer and SME current accounts that used to wait in a branch queue, which changes who a pharmacy chain’s younger customers actually hold.',
    },
    {
      title: 'Wage-protection and merchant rails',
      desc: 'A new clinic cannot hire or take cards until SAMA KYC, wage-protection and mada acquiring are live, so the banking conversation is an operations gate, not a treasury luxury.',
    },
    {
      title: 'Payment licences sitting beside bank charters',
      desc: 'Stored-value and payment-service approvals look like “fintech banks” in vendor decks; they are not deposit-taking charters, and mixing the two classes is the fastest way to mis-brief a Kingdom launch.',
    },
  ],
  sections: [
    {
      heading: 'What a healthcare treasurer actually buys from a Kingdom bank',
      paragraphs: [
        'Working capital, letters of credit for imported devices, payroll under the wage-protection scheme, and card acquiring for outpatient cash collection are the four products BioNixus keeps hearing in Riyadh and Jeddah interviews. A specialty-drug importer that cannot open an LC at SNB or SAB will miss a tender even if the SFDA file is clean. A private group that wants a sharia facility will walk past a conventional term sheet and reopen the conversation at Al Rajhi or Alinma. Digital-bank apps help the SME clinic’s owner move money on Friday night; they do not yet stand behind a 200-bed fit-out. Keep those two jobs on separate slides.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences banks in the Kingdom?',
      a: 'SAMA, the Saudi Central Bank. A digital-bank charter, a conventional commercial licence and a stored-value or payment-service approval are different classes. Read the licence, not the app icon.',
    },
    {
      q: 'Are STC Bank and STC Pay the same thing?',
      a: 'They are not. STC Pay was a wallet. STC Bank holds a SAMA digital-bank licence and can take deposits under that charter. Older contracts and consumer habit still blur the two names.',
    },
    {
      q: 'Which banks matter for a hospital or distributor treasury?',
      a: 'SNB, Al Rajhi and Riyad Bank first for riyal operating accounts and facilities. Then SAB, Banque Saudi Fransi and Alinma. Add a digital charter only if the question is consumer deposits or a founder-led SME account.',
    },
    {
      q: 'Do Islamic banks replace SAMA supervision?',
      a: 'They do not. Al Rajhi, Alinma, Albilad and AlJazira are SAMA-licensed banks that happen to run a sharia book. The supervisor is still SAMA; the product filter is the sharia board.',
    },
    {
      q: 'What does BioNixus study about Saudi banks?',
      a: 'Treasury and merchant-acquiring interviews with private hospital and pharmacy groups in Riyadh and Jeddah; how panels split conventional versus Islamic facilities; and whether digital-bank apps have reached payroll or still sit at the consumer edge.',
    },
    {
      q: 'Does this page rank Saudi banks by assets or deposits?',
      a: 'No. Names appear because they keep showing up in SAMA notices, Tadawul filings and BioNixus Kingdom interviews. Order on the page is a fieldwork map, not an asset league.',
    },
  ],
  regulatorSource: {
    name: 'Saudi Central Bank (SAMA) — licensed banks, digital-bank charters and payment-service / stored-value classes',
    url: 'https://www.sama.gov.sa',
    asOf: '2026-09-05',
  },
  sources: [
    'Saudi Central Bank (SAMA) licensed-bank and digital-bank communications',
    'Tadawul disclosures of SNB, Al Rajhi, Riyad Bank, SAB, Banque Saudi Fransi, ANB, Alinma, Bank AlJazira, Bank Albilad and The Saudi Investment Bank',
    'Public launch materials for STC Bank, D360 Bank and Vision Bank as SAMA digital-bank licensees',
    'BioNixus Saudi corporate-banking, treasury and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Hospital-treasurer interviews in Riyadh on how SNB, Riyad Bank and Al Rajhi split operating accounts, LCs and wage-protection payroll.',
    'Pharmacy-chain merchant-acquiring walkthroughs in Jeddah on mada terminals and which local book actually settles the outpatient day.',
    'Family-office and sharia-board conversations in Riyadh on why a conventional SAB or SNB term sheet is rejected in favour of Alinma or Albilad.',
    'Founder-clinic interviews in Jeddah comparing STC Bank and D360 onboarding against a branch account at Bank AlJazira.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
