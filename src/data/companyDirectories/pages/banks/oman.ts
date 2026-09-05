import type { DirectoryPageInput } from '../../types';

export const banksOman: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'oman',
  title: 'Banks in Oman: Bank Muscat, NBO, CBO list (2026)',
  metaDescription:
    'Banks in Oman: Bank Muscat, NBO, Bank Dhofar, Sohar International, Bank Nizwa and CBO — consolidation, Islamic books, Sohar corridor.',
  introLead:
    'Omani banking is a consolidation story with one long-standing commercial centre of gravity — Bank Muscat — and a Central Bank of Oman that has already watched HSBC’s local book and Alizz Islamic fold into Sohar International rather than remain as separate high-street names.',
  introRest:
    'National Bank of Oman, Bank Dhofar, Sohar International, Bank Nizwa, Oman Arab Bank and Ahli Bank are the domestic chairs BioNixus keeps hearing in Muscat and Sohar. Bank of Beirut, First Abu Dhabi Bank, Qatar National Bank and Habib Bank Limited keep Sultanate offices for groups already banked in Beirut, Abu Dhabi, Doha or Karachi. Standard Chartered still covers a thin foreign-parent slice. Oman Housing Bank and Oman Development Bank are policy lenders: useful on a clinic-build or housing-adjacent outpatient block, not substitutes for a Bank Muscat operating account. OmanNet is the national switch a cashier in Mutrah or Sohar actually reconciles against. Maisarah is Bank Dhofar’s Islamic window, not a second licence. This page is for a brand or hospital-strategy desk that needs to know who extends rial working capital along the Muscat–Sohar corridor, not for a tourist ranking of airport desks.',
  stats: [
    { value: 'CBO', label: 'Central Bank of Oman — licensing, prudential rules and payment-system oversight' },
    { value: 'Muscat', label: 'Long-standing largest Omani commercial name; still the default treasury chair' },
    { value: 'Sohar Int’l', label: 'Book that absorbed HSBC Oman and Alizz Islamic rather than leaving them as high-street brands' },
    { value: 'OmanNet', label: 'National merchant-and-ATM switch a Muscat or Sohar cashier reconciles against' },
  ],
  channelHeading: 'How Bank Muscat, the Sohar combination and CBO rails share a Sultanate treasury',
  channelBody:
    'A private hospital in Muscat typically keeps a rial operating account at Bank Muscat or National Bank of Oman, a sharia conversation at Bank Nizwa or at Maisarah inside Bank Dhofar, and card acquiring that still prints an OmanNet slip. Sohar International is the name to use after the HSBC Oman and Alizz combinations — older term sheets that still say HSBC or Alizz will bounce. The industrial corridor around Sohar and the port changes the banking map: trading houses and clinic groups up the coast often keep Sohar International or Bank Dhofar as the local chair even when Muscat headlines say Bank Muscat. Oman Arab Bank carries the Arab Bank relationship into the Sultanate. Ahli Bank takes a further mid-market quote. Policy lenders — Oman Housing Bank, Oman Development Bank — sit beside a commercial facility on a housing-linked or SME clinic-build; they do not replace CBO supervision. Digital brands in Oman live inside these licensed books. There is no standalone digital-bank charter in the SAMA or CBUAE sense. Model merchant collection as OmanNet plus an acquiring bank.',
  companies: [
    {
      name: 'Bank Muscat',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Largest Omani commercial bank; corporate, retail and Islamic window',
      notes: 'The Muscat name hospital treasurers still open with. Islamic product here is a window, not a second licence.',
    },
    {
      name: 'National Bank of Oman (NBO)',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Listed commercial bank; corporate, retail and SME',
      notes: 'The usual second Muscat chair when a group does not want to sit only with Bank Muscat.',
    },
    {
      name: 'Bank Dhofar',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Listed commercial bank; Maisarah Islamic window; southern-region franchise',
      notes: 'Matters more when the warehouse or clinic sits toward Salalah or when the board wants Maisarah rather than Bank Nizwa.',
    },
    {
      name: 'Sohar International',
      hq: 'Sohar',
      type: 'Local',
      focus: 'Commercial bank after the HSBC Oman and Alizz Islamic combinations',
      notes: 'The live name for paper that still says HSBC Oman or Alizz. Check the Sohar International legal title on any 2026 facility letter.',
    },
    {
      name: 'Bank Nizwa',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Dedicated Islamic commercial bank',
      notes: 'The standalone sharia chair for boards that will not take a conventional Bank Muscat or NBO term sheet or a window inside Dhofar.',
    },
    {
      name: 'Oman Arab Bank',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Commercial bank with Arab Bank heritage',
      notes: 'The Sultanate chair for groups that already sit with Arab Bank in Amman or elsewhere and want one relationship letter.',
    },
    {
      name: 'Ahli Bank Oman',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Listed commercial bank; corporate and retail',
      notes: 'Further mid-market quote for groups that already run Bank Muscat, NBO and Dhofar on one panel.',
    },
    {
      name: 'Bank of Beirut — Oman',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Lebanese parent’s Sultanate franchise',
      notes: 'Levant corridor name for trading and healthcare groups already banked in Beirut.',
    },
    {
      name: 'First Abu Dhabi Bank — Oman',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Abu Dhabi parent’s Sultanate office',
      notes: 'Useful when an Abu Dhabi treasury already runs FAB and wants a Muscat signatory on the same group.',
    },
    {
      name: 'Qatar National Bank — Oman',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Qatari parent’s Sultanate franchise',
      notes: 'Doha corridor name for groups that already treat QNB as the home bank.',
    },
    {
      name: 'Habib Bank Limited — Oman',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Pakistani parent’s Sultanate branch',
      notes: 'South-Asian corridor name for trading houses and clinics that already sit with HBL in Karachi.',
    },
    {
      name: 'Standard Chartered Oman',
      hq: 'Muscat',
      type: 'MNC',
      focus: 'Foreign bank; corporate and trade coverage',
      notes: 'Thin foreign-parent chair. HSBC’s former local book now lives inside Sohar International — do not list HSBC as a current Sultanate high-street bank.',
    },
    {
      name: 'Oman Housing Bank',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Policy housing lender; adjacent to residential clinic and outpatient blocks',
      notes: 'Not a retail substitute for Bank Muscat. Include it when the outpatient block sits inside a housing scheme.',
    },
    {
      name: 'Oman Development Bank',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Policy and SME development lender',
      notes: 'Can sit beside a commercial facility on a clinic-build. Does not replace CBO supervision or the operating account.',
    },
    {
      name: 'OmanNet',
      hq: 'Muscat',
      type: 'Operator',
      focus: 'National ATM and merchant switch under the CBO-facing system',
      notes: 'Not a deposit-taking bank. A Mutrah or Sohar cashier closes the day against OmanNet long before they name Bank Muscat as the acquirer.',
    },
    {
      name: 'Central Bank of Oman (CBO)',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Licensing, prudential supervision, rial and payment-system rules',
      notes: 'The supervisor. Combinations such as HSBC-into-Sohar and Alizz-into-Sohar are CBO-facing events, not marketing rebrands.',
    },
  ],
  categoryBlurbs: {
    local:
      'Bank Muscat, NBO, Bank Dhofar, Sohar International, Bank Nizwa, Oman Arab Bank and Ahli Bank — the domestic commercial and Islamic books that still hold most rial deposits and facilities.',
    mnc:
      'Standard Chartered as the remaining foreign high-street chair; HSBC’s former Sultanate book now lives inside Sohar International.',
    regional:
      'Bank of Beirut, FAB, QNB and Habib Bank Limited — Levant, Gulf and South-Asian parents that keep a CBO-facing office for groups already banked at home.',
    trade:
      'Oman Housing Bank and Oman Development Bank as policy lenders, OmanNet as the merchant switch, and CBO as the supervisor that also blessed the Sohar combinations.',
  },
  growthDrivers: [
    {
      title: 'Sohar International as the combination vehicle',
      desc: 'HSBC Oman and Alizz Islamic no longer behave as high-street counterparties. Facility letters that still use those labels will miss the live Sohar International entity.',
    },
    {
      title: 'Industrial-corridor banking up the coast',
      desc: 'Sohar port and the adjacent industrial estate pull trading houses and clinic groups toward Sohar International or Bank Dhofar even when Muscat headlines still say Bank Muscat.',
    },
    {
      title: 'Dedicated Islamic chair versus windows',
      desc: 'Bank Nizwa is a standalone sharia licence. Maisarah is a window inside Bank Dhofar. Bank Muscat also runs a window. Those three are not interchangeable on a sharia board paper.',
    },
    {
      title: 'Policy lenders beside commercial facilities',
      desc: 'Oman Housing Bank and Oman Development Bank can sit next to a Bank Muscat or NBO line on a housing-linked or SME clinic-build without replacing the operating account.',
    },
    {
      title: 'OmanNet as the cashier-facing rail',
      desc: 'Outpatient collection in Muscat and Sohar hits the national switch before anyone names the acquiring bank, so the merchant conversation is OmanNet plus a CBO-licensed book.',
    },
  ],
  sections: [
    {
      heading: 'What a Muscat or Sohar healthcare CFO actually needs',
      paragraphs: [
        'A rial operating account, a trade line for imported devices landing through Sohar or Sultan Qaboos port, payroll that clears CBO know-your-customer checks, and OmanNet acquiring a cashier can close before the outpatient desk shuts. Bank Muscat or NBO still open most Muscat conversations. Sohar International opens more of them once the warehouse sits up the coast. Bank Nizwa opens the conversation when the board has already rejected a conventional term sheet. Policy lenders help on a programme; they do not run payroll.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences banks in Oman?',
      a: 'The Central Bank of Oman. OmanNet is the national switch. Oman Housing Bank and Oman Development Bank are policy lenders under the same perimeter, not a second supervisor.',
    },
    {
      q: 'Can I still write a facility to HSBC Oman or Alizz?',
      a: 'Those high-street books have been combined into Sohar International. Use the live Sohar legal name. Older paper will still show the retired labels.',
    },
    {
      q: 'Is Maisarah a separate bank?',
      a: 'It is Bank Dhofar’s Islamic window. Bank Nizwa is the standalone sharia licence. Do not treat the window and the licence as the same counterparty.',
    },
    {
      q: 'Which names should a hospital treasurer map first?',
      a: 'Bank Muscat and NBO in Muscat, Sohar International if the operation sits on the industrial corridor, Bank Nizwa if the board wants a dedicated Islamic licence. Add OmanNet as the rail.',
    },
    {
      q: 'What does BioNixus study about Omani banks?',
      a: 'Treasury and merchant-acquiring interviews with private hospital and pharmacy groups in Muscat and Sohar; how panels treat the Sohar combinations; and OmanNet slip behaviour at outpatient desks.',
    },
    {
      q: 'Is this a ranking of Omani banks by assets?',
      a: 'Bank Muscat’s gravity is noted because Doha-to-Muscat counterparties already treat it as the opening chair. The rest of the table is a Sultanate fieldwork roster, not a CBO league.',
    },
  ],
  regulatorSource: {
    name: 'Central Bank of Oman (CBO) — licensed banks, Islamic windows and dedicated licences, payment-system oversight',
    url: 'https://cbo.gov.om',
    asOf: '2026-09-05',
  },
  sources: [
    'Central Bank of Oman licensed-bank materials',
    'Public disclosures of Bank Muscat, NBO, Bank Dhofar, Sohar International, Bank Nizwa, Oman Arab Bank and Ahli Bank',
    'Sohar International communications on the HSBC Oman and Alizz combinations; OmanNet scheme materials; Oman Housing Bank and Oman Development Bank programme pages',
    'BioNixus Oman corporate-banking, treasury and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Muscat hospital-treasurer interviews on how Bank Muscat and NBO split rial operating accounts and device trade lines.',
    'Sohar industrial-corridor walkthroughs with distributor CFOs on why Sohar International replaced an older HSBC Oman facility letter.',
    'Outpatient-desk observations in Muscat on OmanNet terminals and which acquiring bank actually settles the day.',
    'Sharia-board conversations in Muscat on Bank Nizwa versus Maisarah inside Bank Dhofar versus a window at Bank Muscat.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
