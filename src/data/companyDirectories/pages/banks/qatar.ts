import type { DirectoryPageInput } from '../../types';

export const banksQatar: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'qatar',
  title: 'Banks in Qatar: QNB, QIB, QCB licensed names (2026)',
  metaDescription:
    'Banks in Qatar: QNB, Commercial Bank, QIB, Doha Bank, Masraf Al Rayan, Dukhan and QCB — riyal books, Islamic names, NAPS rails.',
  introLead:
    'Qatari banking has a single centre of gravity that every Doha treasurer already knows: Qatar National Bank, routinely described in public rankings as the region’s largest bank by assets, sitting beside a Qatar Central Bank that licences the rest of the onshore book and runs the rails those books settle on.',
  introRest:
    'The Commercial Bank, Qatar Islamic Bank, Doha Bank, Masraf Al Rayan, Dukhan Bank, Qatar International Islamic Bank and Ahli Bank are the domestic names that keep recurring in BioNixus Doha interviews. HSBC and Standard Chartered cover the foreign-parent slice. Arab Bank, FAB and Mashreq keep Qatari offices for regional groups already banked at home. Qatar Development Bank is a policy lender, not a retail substitute for QNB. Lesha Bank holds a sharia investment-banking licence and belongs on a wholesale map, not on a hospital payroll map. NAPS, the national ATM and point-of-sale switch, is the rail a Doha cashier actually sees. Al Khaliji’s combination into Masraf Al Rayan is a historical label — use the live Rayan entity. Treat the roster as a Doha working-capital map for importers and hospital CFOs, not as an airport-desk currency guide.',
  stats: [
    { value: 'QCB', label: 'Qatar Central Bank — onshore licensing, prudential rules and payment-system oversight' },
    { value: 'QNB', label: 'Domestic centre of gravity; widely cited in public materials as the region’s largest bank by assets' },
    { value: 'Islamic', label: 'Dedicated sharia names on this map: QIB, QIIB, Masraf Al Rayan, Dukhan Bank' },
    { value: 'NAPS', label: 'National ATM and point-of-sale switch a Doha cashier reconciles against' },
  ],
  channelHeading: 'How QNB, Islamic books and QCB rails share a Doha treasury',
  channelBody:
    'A private hospital in Doha typically keeps a riyal operating account at QNB or The Commercial Bank, a sharia window at QIB or Masraf Al Rayan, and card acquiring that still settles through NAPS. Energy-linked and government-adjacent receipts often stay at QNB because that is where the counterparties already sit. Dukhan Bank — the Barwa combination — and QIIB take further Islamic quotes. Ahli Bank and Doha Bank fill mid-market chairs. HSBC and Standard Chartered appear when a multinational parent wants a familiar name on a trade line and still need a local book for riyal payroll. Qatar Development Bank can sit beside a commercial facility on a clinic-build or SME programme; it does not replace QCB supervision or a QNB operating account. Lesha Bank is a wholesale Islamic investment name and should not be forecast as a retail acquirer. There is no standalone digital-bank charter in the SAMA or CBUAE sense; digital brands in Doha live inside these licensed books. Model merchant collection as NAPS plus an acquiring bank.',
  companies: [
    {
      name: 'Qatar National Bank (QNB)',
      hq: 'Doha',
      type: 'Local',
      focus: 'Largest domestic commercial bank; corporate, retail and regional group',
      notes: 'The Doha name hospital and energy-adjacent treasurers still put first. Public rankings routinely call the group the region’s largest by assets.',
    },
    {
      name: 'The Commercial Bank (Qatar)',
      hq: 'Doha',
      type: 'Local',
      focus: 'Listed conventional commercial bank; corporate, retail and cards',
      notes: 'Frequent second conventional chair after QNB. Casual speech says CBQ; confirm the live legal name on the facility letter.',
    },
    {
      name: 'Qatar Islamic Bank (QIB)',
      hq: 'Doha',
      type: 'Local',
      focus: 'Largest dedicated Islamic commercial bank in Qatar',
      notes: 'The sharia name Doha family groups default to when a conventional QNB or Commercial Bank term sheet is unacceptable.',
    },
    {
      name: 'Doha Bank',
      hq: 'Doha',
      type: 'Local',
      focus: 'Listed conventional commercial bank; corporate, SME and retail',
      notes: 'Mid-market chair that still appears on multi-banked trading and clinic panels beside QNB and The Commercial Bank.',
    },
    {
      name: 'Masraf Al Rayan',
      hq: 'Doha',
      type: 'Local',
      focus: 'Islamic commercial bank; absorbed Al Khaliji',
      notes: 'Use the live Rayan entity. Older contracts may still say Al Khaliji; do not treat that label as a current standalone licence.',
    },
    {
      name: 'Dukhan Bank',
      hq: 'Doha',
      type: 'Local',
      focus: 'Islamic commercial bank; Barwa combination',
      notes: 'Further Islamic capacity. Confirm the live Dukhan legal name — older paper still says Barwa Bank.',
    },
    {
      name: 'Qatar International Islamic Bank (QIIB)',
      hq: 'Doha',
      type: 'Local',
      focus: 'Dedicated Islamic commercial bank; retail and corporate sharia products',
      notes: 'Fourth Islamic chair for boards that already have quotes from QIB, Rayan and Dukhan.',
    },
    {
      name: 'Ahli Bank Qatar',
      hq: 'Doha',
      type: 'Local',
      focus: 'Listed conventional commercial bank; corporate and retail',
      notes: 'Smaller conventional quote for groups that already run QNB, The Commercial Bank and Doha Bank on one panel.',
    },
    {
      name: 'HSBC Qatar',
      hq: 'Doha',
      type: 'MNC',
      focus: 'Foreign bank; multinational, trade and premium retail',
      notes: 'The global name regional HQs still put on an FX and trade panel beside QNB.',
    },
    {
      name: 'Standard Chartered Qatar',
      hq: 'Doha',
      type: 'MNC',
      focus: 'Foreign bank; corporate, trade and wealth',
      notes: 'Sits on the same international-parent slice as HSBC; relevant for trade lines more than for NAPS outpatient acquiring.',
    },
    {
      name: 'Arab Bank — Qatar',
      hq: 'Doha',
      type: 'Regional',
      focus: 'Amman-parent Qatari franchise',
      notes: 'Levant-and-Gulf corridor name for groups already banked with Arab Bank elsewhere.',
    },
    {
      name: 'First Abu Dhabi Bank — Qatar',
      hq: 'Doha',
      type: 'Regional',
      focus: 'Abu Dhabi parent’s Qatari office',
      notes: 'Appears when an Abu Dhabi-banked group wants the same relationship in Doha.',
    },
    {
      name: 'Mashreq — Qatar',
      hq: 'Doha',
      type: 'Regional',
      focus: 'Dubai parent’s Qatari corporate coverage',
      notes: 'Trade and mid-market corridor name for groups already sitting with Mashreq in Dubai.',
    },
    {
      name: 'Qatar Development Bank',
      hq: 'Doha',
      type: 'Government',
      focus: 'Policy and SME development lender; programmes beside commercial banks',
      notes: 'Not a retail substitute for QNB. Included because clinic-build and SME programmes sometimes sit beside a commercial facility.',
    },
    {
      name: 'Lesha Bank',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Sharia investment bank; wholesale, not retail payroll or acquiring',
      notes: 'Formerly Qatar First Bank. Belongs on a wholesale Islamic map. Do not forecast it as a hospital operating bank.',
    },
    {
      name: 'NAPS (National ATM and Point of Sale Switch)',
      hq: 'Doha',
      type: 'Operator',
      focus: 'National ATM and merchant switch under the QCB-facing system',
      notes: 'Not a deposit-taking bank. Included because a Doha cashier sees a NAPS settlement long before they name QNB as the acquirer.',
    },
    {
      name: 'Qatar Central Bank (QCB)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Licensing, prudential supervision, riyal and payment-system rules',
      notes: 'The supervisor every onshore name on this page reports to. Policy lenders and investment banks sit under it, not beside it.',
    },
  ],
  categoryBlurbs: {
    local:
      'QNB, The Commercial Bank, QIB, Doha Bank, Masraf Al Rayan, Dukhan Bank, QIIB and Ahli Bank — the domestic conventional and Islamic books that still hold most riyal deposits and facilities.',
    mnc:
      'HSBC and Standard Chartered as the foreign chairs multinational parents still put on a Doha trade and markets panel.',
    regional:
      'Arab Bank, FAB and Mashreq Qatari offices — regional parents that keep a QCB-facing presence for groups already banked in Amman, Abu Dhabi or Dubai.',
    trade:
      'Qatar Development Bank as the policy lender, Lesha Bank as the wholesale Islamic investment name, NAPS as the merchant switch, and QCB as the supervisor.',
  },
  growthDrivers: [
    {
      title: 'QNB as the default Doha chair',
      desc: 'Energy-adjacent and government-linked receipts often stay at QNB because counterparties already sit there, which is why a healthcare group with public contracts is usually multi-banked rather than QNB-only.',
    },
    {
      title: 'Islamic books as a second map',
      desc: 'QIB, QIIB, Masraf Al Rayan and Dukhan Bank win boards a conventional QNB or Commercial Bank term sheet cannot enter.',
    },
    {
      title: 'NAPS as the cashier-facing rail',
      desc: 'Outpatient collection in Doha hits the national switch before anyone names the acquiring bank, so the merchant conversation is NAPS plus a licensed book.',
    },
    {
      title: 'Policy lending beside commercial facilities',
      desc: 'Qatar Development Bank can sit next to a QNB or QIB line on a clinic-build or SME programme without replacing QCB supervision or the operating account.',
    },
    {
      title: 'Live legal names after combinations',
      desc: 'Al Khaliji now lives inside Masraf Al Rayan; Barwa paper now lives inside Dukhan; Qatar First now lives inside Lesha. Foreign slides that keep the old labels miss the counterparty.',
    },
  ],
  sections: [
    {
      heading: 'What a Doha hospital or importer actually needs from a bank',
      paragraphs: [
        'A riyal operating account that can take energy-adjacent or insurer receipts, a trade line for imported devices, payroll that clears QCB know-your-customer checks, and NAPS acquiring a cashier can close at the end of the outpatient day. Conventional boards start at QNB or The Commercial Bank. Sharia boards start at QIB or Masraf Al Rayan. Foreign parents add HSBC or Standard Chartered for the global relationship and still need a local book for riyal payroll. Lesha Bank does not do that job.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences onshore banks in Qatar?',
      a: 'Qatar Central Bank. NAPS is the national switch sitting under that system. Qatar Development Bank is a policy lender under the same perimeter, not a second supervisor.',
    },
    {
      q: 'Is Al Khaliji still a standalone bank?',
      a: 'The combination sits inside Masraf Al Rayan. Older contracts may still show Al Khaliji. Use the live Rayan legal name on any 2026 facility letter.',
    },
    {
      q: 'Which names should a hospital treasurer map first?',
      a: 'QNB first, then The Commercial Bank or QIB depending on conventional versus Islamic appetite. Add NAPS as the rail. Add Qatar Development Bank only if a programme facility is in the brief.',
    },
    {
      q: 'Is Lesha Bank a retail payroll bank?',
      a: 'It is a sharia investment bank, formerly Qatar First. Do not put it on a hospital payroll or NAPS-acquiring slide.',
    },
    {
      q: 'What does BioNixus study about Qatari banks?',
      a: 'Treasury and merchant-acquiring interviews with private hospital and pharmacy groups in Doha; how panels split QNB versus QIB; and NAPS slip behaviour at outpatient desks.',
    },
    {
      q: 'Does this page rank Qatari banks by assets?',
      a: 'QNB’s public size is noted because counterparties already treat it as the default chair. The rest of the table is a Doha fieldwork roster, not a QCB league table.',
    },
  ],
  regulatorSource: {
    name: 'Qatar Central Bank (QCB) — licensed banks, Islamic and conventional books, payment-system oversight',
    url: 'https://www.qcb.gov.qa',
    asOf: '2026-09-05',
  },
  sources: [
    'Qatar Central Bank licensed-bank materials',
    'Public disclosures of QNB, The Commercial Bank, QIB, Doha Bank, Masraf Al Rayan, Dukhan Bank, QIIB and Ahli Bank',
    'Qatar Development Bank programme materials; Lesha Bank (formerly Qatar First) licence communications; NAPS scheme materials',
    'BioNixus Qatar corporate-banking, treasury and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Doha hospital-treasurer interviews on how QNB and The Commercial Bank split riyal operating accounts and energy-adjacent receipts.',
    'Sharia-board conversations in Doha on why a conventional QNB term sheet is reopened at QIB or Masraf Al Rayan.',
    'Outpatient-desk walkthroughs in Doha of NAPS terminals and which acquiring bank actually settles the day.',
    'Clinic-build interviews in Doha on when Qatar Development Bank sits beside a commercial facility rather than replacing it.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
