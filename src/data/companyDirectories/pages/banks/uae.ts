import type { DirectoryPageInput } from '../../types';

export const banksUae: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'uae',
  title: 'Banks in the UAE: FAB, Emirates NBD, CBUAE list (2026)',
  metaDescription:
    'Banks in the UAE: FAB, Emirates NBD, ADCB, Mashreq, DIB, ADIB, Wio, Zand and CBUAE — onshore books, Islamic names, digital charters.',
  introLead:
    'Onshore banking in the Emirates is a Central Bank of the UAE franchise: First Abu Dhabi Bank and Emirates NBD still sit on most federal and emirate corporate panels, while ADCB, Mashreq, Dubai Islamic Bank and Abu Dhabi Islamic Bank take the next chair, and a short list of separately licensed digital names now holds its own balance sheet.',
  introRest:
    'CBUAE publishes the register that decides who may take a dirham deposit. Commercial Bank of Dubai, Emirates Islamic, RAKBANK and Sharjah Islamic Bank fill the mid-tier that hospital groups in the northern emirates still keep. HSBC and Standard Chartered cover the multinational parent that wants a familiar name on a trade line. QNB’s UAE office and NBK’s Emirates branch serve GCC groups that already bank at home. Wio Bank and Zand Bank hold conventional retail licences; Al Maryah Community Bank and Ruya Community Islamic Bank sit on specialised charters in the same CBUAE register — they are banks, not stored-value facilities. Liv. and Mashreq Neo are product brands inside Emirates NBD and Mashreq, not separate licences. DIFC and ADGM firms are a different perimeter and should not be mixed into an onshore CBUAE map. This page is for a brand or hospital-strategy desk that needs to know who clears a Dubai pharmacy’s cards and who signs an Abu Dhabi working-capital line.',
  stats: [
    { value: 'CBUAE', label: 'Central Bank of the UAE — the onshore banking supervisor and licence register' },
    { value: '2', label: 'Cities that still split most corporate conversations: Abu Dhabi and Dubai' },
    { value: 'Wio / Zand', label: 'CBUAE conventional retail digital-first names with their own balance sheets' },
    { value: 'SVF', label: 'Stored-value facility — a CBUAE payments class, not a bank charter' },
  ],
  channelHeading: 'How CBUAE onshore books, Islamic names and digital charters share an Emirates treasury',
  channelBody:
    'Abu Dhabi corporates still open the first conversation at FAB or ADCB; Dubai trading houses and hospital groups still open it at Emirates NBD or Mashreq. That is a habit, not a law, and plenty of groups keep both cities on one panel. Islamic books are a second map: DIB and ADIB win clients who will not sign a conventional facility, with Emirates Islamic and Sharjah Islamic Bank taking the next quote. Card acquiring for a Dubai outpatient desk usually settles through the national switch and a local acquirer sitting inside one of the large books — the cashier sees a terminal brand, not a CBUAE licence number. Wio and Zand can hold a founder-led clinic’s operating account; they are rarely the bank of record on a 300-bed construction facility. Al Maryah and Ruya are specialised CBUAE names, useful when the brief is community or sharia-digital, not when the brief is a federal tender. Free-zone banks and representative offices in DIFC or ADGM may house the parent’s investment book and still cannot take the onshore dirham deposit a SEHA or DHA contractor needs. Stored-value facilities and retail-payment licences — the SVF class CBUAE lists beside banks — move wallets, not working capital. Keep the classes apart on the slide.',
  companies: [
    {
      name: 'First Abu Dhabi Bank (FAB)',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Largest onshore book; federal, emirate and multinational corporate banking',
      notes: 'The Abu Dhabi name hospital and government-linked treasurers still put first on many dirham operating and project panels.',
    },
    {
      name: 'Emirates NBD',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Dubai-rooted commercial giant; retail, corporate and Liv. digital brand',
      notes: 'The Dubai treasury default. Liv. is an Emirates NBD product, not a second CBUAE charter — do not list it as a separate bank.',
    },
    {
      name: 'Abu Dhabi Commercial Bank (ADCB)',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Onshore commercial bank; corporate, retail and government-adjacent books',
      notes: 'Second Abu Dhabi chair after FAB on many mixed public-and-private healthcare panels.',
    },
    {
      name: 'Mashreq',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Dubai commercial bank; corporate, trade and Mashreq Neo digital brand',
      notes: 'Trade-finance and mid-market name that pharmacy and distributor CFOs in Dubai still keep beside Emirates NBD. Neo is a brand, not a licence.',
    },
    {
      name: 'Dubai Islamic Bank (DIB)',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Largest dedicated Islamic commercial bank in the Emirates',
      notes: 'The sharia name Dubai family groups default to when a conventional Emirates NBD or Mashreq term sheet is unacceptable.',
    },
    {
      name: 'Abu Dhabi Islamic Bank (ADIB)',
      hq: 'Abu Dhabi',
      type: 'Local',
      focus: 'Abu Dhabi dedicated Islamic commercial bank',
      notes: 'The capital’s sharia counterpart to DIB; appears on Abu Dhabi employer and hospital panels that want a local Islamic book.',
    },
    {
      name: 'Commercial Bank of Dubai',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Listed mid-tier commercial bank; corporate and SME books',
      notes: 'Dubai mid-market name that still appears when a group wants a third onshore quote after Emirates NBD and Mashreq.',
    },
    {
      name: 'Emirates Islamic',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Islamic commercial bank inside the Emirates NBD group',
      notes: 'Separate Islamic licence, same group. Useful when the parent wants sharia product without leaving the Emirates NBD relationship.',
    },
    {
      name: 'RAKBANK (National Bank of Ras Al Khaimah)',
      hq: 'Ras Al Khaimah',
      type: 'Local',
      focus: 'Northern-emirates commercial bank; retail, SME and cards',
      notes: 'The book that still matters when the clinic or trading house sits in RAK rather than on Sheikh Zayed Road.',
    },
    {
      name: 'Sharjah Islamic Bank',
      hq: 'Sharjah',
      type: 'Local',
      focus: 'Sharjah-rooted dedicated Islamic commercial bank',
      notes: 'Northern-emirates sharia capacity for groups that will not place the account in Dubai or Abu Dhabi.',
    },
    {
      name: 'HSBC UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Foreign bank; multinational, trade and premium retail',
      notes: 'The parent-company name on many regional-HQ and energy-linked healthcare accounts; networks look more like global HSBC than like FAB retail.',
    },
    {
      name: 'Standard Chartered UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Foreign bank; corporate, trade and wealth',
      notes: 'Sits on the same international-employer slice as HSBC; relevant for regional HQs more than for a DHA-network outpatient desk.',
    },
    {
      name: 'Qatar National Bank — UAE',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Qatari parent’s onshore Emirates franchise',
      notes: 'Appears when a Qatari or regional group wants the same relationship in Doha and Dubai rather than opening a second primary bank.',
    },
    {
      name: 'National Bank of Kuwait — UAE',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Kuwaiti parent’s Emirates branch and corporate coverage',
      notes: 'GCC corridor name for groups already banked with NBK at home; thin on mass retail, useful on trade lines.',
    },
    {
      name: 'Wio Bank',
      hq: 'Abu Dhabi',
      type: 'Operator',
      focus: 'CBUAE conventional retail licence; digital-first consumer and business accounts',
      notes: 'Own balance sheet, not a brand inside FAB. Founder-led clinics use it; construction facilities still go to FAB or Emirates NBD.',
    },
    {
      name: 'Zand Bank',
      hq: 'Dubai',
      type: 'Operator',
      focus: 'CBUAE conventional retail licence; digital-first corporate and retail',
      notes: 'Dubai-headquartered digital-first bank on the CBUAE register. Treat it as a bank, not as an SVF wallet.',
    },
    {
      name: 'Al Maryah Community Bank',
      hq: 'Abu Dhabi',
      type: 'Operator',
      focus: 'CBUAE conventional specialised / community bank',
      notes: 'Licensed ahead of the 2022 digital-retail wave; a specialised onshore name, not a stored-value facility and not a FAB product.',
    },
    {
      name: 'Ruya Community Islamic Bank',
      hq: 'Ajman',
      type: 'Operator',
      focus: 'CBUAE Islamic specialised community bank',
      notes: 'Ajman-licensed sharia community name on the July 2026 CBUAE register. Include it when the brief is Islamic-digital, not when the brief is a federal project facility.',
    },
    {
      name: 'Central Bank of the UAE (CBUAE)',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Onshore licensing, prudential supervision, payment systems and monetary policy',
      notes: 'The register that separates a bank from an SVF or a retail-payment licence. DIFC and ADGM are not this desk.',
    },
  ],
  categoryBlurbs: {
    local:
      'Onshore commercial and Islamic names — FAB, Emirates NBD, ADCB, Mashreq, DIB, ADIB, CBD, Emirates Islamic, RAKBANK, Sharjah Islamic Bank — that still hold most dirham deposits and facilities.',
    mnc:
      'HSBC and Standard Chartered as the foreign books multinational parents still put on a regional-HQ and trade-finance panel.',
    regional:
      'QNB and NBK Emirates offices — GCC parents that keep an onshore CBUAE presence for groups already banked in Doha or Kuwait City.',
    trade:
      'Wio, Zand, Al Maryah and Ruya as separately licensed digital or community banks, and CBUAE as the supervisor that also lists stored-value facilities in a different class.',
  },
  growthDrivers: [
    {
      title: 'Two-city corporate habit',
      desc: 'Abu Dhabi panels still open at FAB or ADCB and Dubai panels still open at Emirates NBD or Mashreq, so a healthcare group with sites in both cities is usually multi-banked whether it wants to be or not.',
    },
    {
      title: 'Islamic books as a second map',
      desc: 'DIB, ADIB, Emirates Islamic and Sharjah Islamic Bank win clients a conventional term sheet cannot enter, which doubles the number of cash-management platforms a brand must understand.',
    },
    {
      title: 'Digital-first licences with their own capital',
      desc: 'Wio and Zand are CBUAE banks, not app skins. That changes who a founder-led clinic banks with, without changing who signs a 300-bed construction facility.',
    },
    {
      title: 'Free-zone perimeter versus onshore deposits',
      desc: 'DIFC and ADGM houses may hold the parent’s investment book and still cannot replace a CBUAE dirham account a DHA or DoH contractor needs for local payroll.',
    },
    {
      title: 'SVF and payment licences beside the bank register',
      desc: 'CBUAE lists stored-value facilities and retail-payment firms next to banks. Mixing those classes on a “fintech bank” slide is the usual briefing error in Dubai.',
    },
  ],
  sections: [
    {
      heading: 'What an Emirates hospital or pharmacy actually needs from a bank',
      paragraphs: [
        'Dirham operating accounts, wage payments that clear CBUAE know-your-customer checks, letters of credit for imported devices, and card acquiring that a DHA or DoH cashier can reconcile at close of day. A multinational parent that only has a DIFC relationship will still need an onshore book for local payroll. A family group that wants sharia product will walk past FAB or Mashreq and reopen at ADIB or DIB. Wio or Zand can onboard the outpatient start-up over a weekend; they will not, on current fieldwork, stand behind a government-linked construction facility. Put the jobs on different slides.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences onshore banks in the Emirates?',
      a: 'CBUAE. A conventional retail licence, a specialised community licence, an Islamic licence and a stored-value facility are different rows on the same public register. DIFC and ADGM are not that register.',
    },
    {
      q: 'Is Liv. or Mashreq Neo a separate bank?',
      a: 'Neither is. Liv. lives inside Emirates NBD. Mashreq Neo lives inside Mashreq. Wio and Zand, by contrast, hold their own CBUAE licences and their own capital.',
    },
    {
      q: 'Which names should a hospital treasurer map first?',
      a: 'FAB and ADCB in Abu Dhabi, Emirates NBD and Mashreq in Dubai, then DIB or ADIB if the board wants sharia product. Add HSBC or Standard Chartered only when the parent already banks with them globally.',
    },
    {
      q: 'What is an SVF on the CBUAE register?',
      a: 'A stored-value facility — a payments class for wallets and prepaid value. It is not a bank charter and it does not replace a dirham operating account at FAB or Emirates NBD.',
    },
    {
      q: 'What does BioNixus study about UAE banks?',
      a: 'Treasury and merchant-acquiring interviews with private hospital and pharmacy groups in Abu Dhabi and Dubai; how panels split conventional versus Islamic books; and whether Wio or Zand has reached payroll or still sits at the founder-clinic edge.',
    },
    {
      q: 'Is this a league table of UAE banks by assets?',
      a: 'It is not. CBUAE licensees sit here because corporate-banking and merchant-acquiring interviews in Abu Dhabi and Dubai keep naming them. Position on the page is not a ranking.',
    },
  ],
  regulatorSource: {
    name: 'Central Bank of the UAE (CBUAE) — licensed banks register, digital-first and specialised charters, stored-value facilities',
    url: 'https://www.centralbank.ae',
    asOf: '2026-09-05',
  },
  sources: [
    'Central Bank of the UAE licensed-banks register and licensing materials',
    'Public disclosures of FAB, Emirates NBD, ADCB, Mashreq, DIB, ADIB and peer listed names',
    'CBUAE register entries for Wio Bank, Zand Bank, Al Maryah Community Bank and Ruya Community Islamic Bank',
    'BioNixus UAE corporate-banking, treasury and merchant-acquiring fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Abu Dhabi hospital-treasurer interviews on how FAB and ADCB split government-linked operating accounts and project facilities.',
    'Dubai pharmacy-chain walkthroughs of Emirates NBD and Mashreq merchant acquiring at DHA-network outpatient desks.',
    'Sharia-board and family-office conversations in Abu Dhabi on why a conventional FAB term sheet is reopened at ADIB.',
    'Founder-clinic interviews in Dubai comparing Wio and Zand onboarding against a branch account at Commercial Bank of Dubai.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
