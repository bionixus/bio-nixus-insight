import type { DirectoryPageInput } from '../../types';

export const banksUk: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'uk',
  title: 'UK Banks: High Street, Mutuals and Challengers (2026)',
  metaDescription:
    'UK banks directory: HSBC, Barclays, Lloyds, NatWest, Nationwide, Santander UK, Starling, Monzo, PRA, FCA and Bank of England — ring-fence and mutuals.',
  introLead:
    'British retail banking is a twin-peaks market: the Prudential Regulation Authority inside the Bank of England watches capital and resolvability, the Financial Conduct Authority watches how the product is sold, and large high-street groups must keep a ring-fenced retail bank legally apart from the investment-banking house.',
  introRest:
    'HSBC, Barclays, Lloyds Banking Group and NatWest still occupy the high-street consideration set that mystery shops record on Oxford Street and in Manchester’s Spinningfields. Nationwide remains a building society, not a plc bank, and that mutual charter is a research variable, not a footnote. Santander UK is the Spanish-owned high-street name. Standard Chartered is a London-headquartered international group with a thin domestic branch story. TSB carries a Sabadell parent. Metro Bank kept a store model when peers were closing them. Starling and Monzo hold full UK bank permissions and now appear in switching studies that used to stop at the big four. Handelsbanken runs a distinctly local-manager model. The Co-operative Bank gives Manchester a named mutual-heritage competitor. Coventry Building Society extends the mutual tier beyond Nationwide. The Financial Services Compensation Scheme sits behind covered deposits. BioNixus uses this map when a card, current-account or SME brief needs the PRA register rather than a fintech slide.',
  stats: [
    { value: '2', label: 'UK supervisors on the twin-peaks split: PRA (prudential) and FCA (conduct)' },
    { value: 'Ring-fence', label: 'Statutory separation of large retail books from investment banking after the Vickers reforms' },
    { value: 'FSCS', label: 'Statutory compensation scheme behind covered deposits at PRA-authorised firms' },
    { value: 'Mutual', label: 'Building-society charter still used by Nationwide and Coventry instead of a plc bank licence' },
  ],
  channelHeading: 'How a UK current account is opened under PRA and FCA rules',
  channelBody:
    'Most adults still arrive through a salary mandate, a student account that aged into a packaged current account, or an app that promised faster onboarding than a high-street appointment. The legal path is a PRA authorisation for the deposit-taker and an FCA conduct perimeter for the way the account, overdraft and insurance add-on are sold. Ring-fenced entities inside HSBC, Barclays, Lloyds and NatWest are the retail counterparties a card issuer or payroll firm actually contracts with; the investment-banking sister is a different legal person. Building societies take deposits under a mutual constitution and are authorised as such, which is why Nationwide must not be coded as “just another plc.” Challenger banks cleared the same deposit-taking permission, then built distribution that never needed a High Street lease. Open Banking rails let a switching journey start inside another firm’s app. Manchester fieldwork is not a smaller London: the Co-operative Bank, regional building-society density and a different SME mix change which brands appear in the first five mentions. A product team that samples only Canary Wharf employees will overstate digital-challenger share and understate the Lloyds and Nationwide hold on family current accounts.',
  companies: [
    {
      name: 'HSBC UK',
      hq: 'London',
      type: 'Local',
      focus: 'Ring-fenced UK retail and commercial bank inside the HSBC group',
      notes: 'The domestic entity a UK current-account or SME brief should name; HSBC’s international wholesale house is a separate conversation.',
    },
    {
      name: 'Barclays',
      hq: 'London',
      type: 'Local',
      focus: 'Ring-fenced UK consumer and business bank plus a distinct investment bank',
      notes: 'Barclays UK is the high-street and app counterpart; mixing it with the corporate-and-investment bank is the usual foreign-brief error.',
    },
    {
      name: 'Lloyds Banking Group',
      hq: 'London',
      type: 'Local',
      focus: 'Lloyds, Halifax and Bank of Scotland brands on a large UK retail book',
      notes: 'Multi-brand high-street density that still dominates family current-account and mortgage mentions outside central London.',
    },
    {
      name: 'NatWest Group',
      hq: 'Edinburgh',
      type: 'Local',
      focus: 'NatWest, Royal Bank of Scotland and Ulster Bank brands',
      notes: 'Scotland and Northern Ireland briefs must keep the brand architecture; English mystery shops mostly see NatWest on the fascia.',
    },
    {
      name: 'Nationwide Building Society',
      hq: 'Swindon',
      type: 'Operator',
      focus: 'Largest building-society mutual for UK retail deposits and mortgages',
      notes: 'Code it as a mutual. Treating Nationwide as a fourth plc high-street bank flattens the ownership prompt that members still volunteer.',
    },
    {
      name: 'Santander UK',
      hq: 'London',
      type: 'MNC',
      focus: 'Spanish-owned UK ring-fenced retail and commercial bank',
      notes: 'The foreign-parent high-street name that still behaves like a domestic current-account competitor in switching studies.',
    },
    {
      name: 'Standard Chartered',
      hq: 'London',
      type: 'Local',
      focus: 'London-headquartered international wholesale and private bank',
      notes: 'Thin UK high-street story; included because City and emerging-market corporate briefs keep meeting the group in London.',
    },
    {
      name: 'TSB Bank',
      hq: 'Edinburgh',
      type: 'MNC',
      focus: 'UK retail bank owned by Banco Sabadell',
      notes: 'A second Spanish-owned high-street fascia, useful when a tracker needs a challenger-scale branch brand that is not Metro.',
    },
    {
      name: 'Metro Bank',
      hq: 'London',
      type: 'Local',
      focus: 'Store-based community banking with seven-day opening in selected cities',
      notes: 'The branch-experience control: longer hours and a store format that digital-only peers cannot replicate in a mystery shop.',
    },
    {
      name: 'Starling Bank',
      hq: 'London',
      type: 'Operator',
      focus: 'Digital-only UK bank with a full deposit-taking permission',
      notes: 'Business-account and personal-switching studies treat Starling as a licensed bank, not as a prepaid card.',
    },
    {
      name: 'Monzo Bank',
      hq: 'London',
      type: 'Operator',
      focus: 'Digital-only UK bank aimed at everyday consumer payments',
      notes: 'Younger urban samples name Monzo unprompted; older family samples still need a probe or they will only list the high street.',
    },
    {
      name: 'Handelsbanken UK',
      hq: 'London',
      type: 'MNC',
      focus: 'Swedish-owned relationship bank with local branch managers',
      notes: 'SME interviews in Manchester and the North West keep volunteering the local-manager model as the opposite of a call-centre bank.',
    },
    {
      name: 'The Co-operative Bank',
      hq: 'Manchester',
      type: 'Regional',
      focus: 'Ethical-positioned retail and SME bank with a Manchester centre of gravity',
      notes: 'The named Manchester competitor that stops a North-West sample from looking like a thinner version of London.',
    },
    {
      name: 'Coventry Building Society',
      hq: 'Coventry',
      type: 'Operator',
      focus: 'Mutual savings and mortgage lender beyond the Nationwide scale',
      notes: 'Keeps the building-society tier from collapsing into a single Nationwide dummy in mutual-versus-plc designs.',
    },
    {
      name: 'Prudential Regulation Authority (PRA)',
      hq: 'London',
      type: 'Government',
      focus: 'Prudential authorisation and supervision of banks and building societies',
      notes: 'The register a deposit-taking partner must sit on; part of the Bank of England, not a separate Whitehall department.',
    },
    {
      name: 'Financial Conduct Authority (FCA)',
      hq: 'London',
      type: 'Government',
      focus: 'Conduct supervision of retail financial products and firms',
      notes: 'Overdraft, insurance add-on and Consumer Duty work lands here even when the PRA is happy with the bank’s capital.',
    },
    {
      name: 'Bank of England',
      hq: 'London',
      type: 'Government',
      focus: 'Monetary authority, RTGS/CHAPS operator and home of the PRA',
      notes: 'Payments and resolution briefs meet Threadneedle Street as infrastructure, not only as the PRA’s landlord.',
    },
    {
      name: 'Financial Services Compensation Scheme (FSCS)',
      hq: 'London',
      type: 'Government',
      focus: 'Statutory compensation for covered deposits at authorised firms',
      notes: 'The trust prompt in challenger-bank qualitative work: households ask whether the app is FSCS-protected before they move a salary.',
    },
  ],
  categoryBlurbs: {
    local:
      'UK-headquartered high-street and wholesale names: HSBC UK, Barclays, Lloyds Banking Group, NatWest Group, Standard Chartered and Metro Bank.',
    mnc:
      'Foreign-parent books that still compete for UK current accounts: Santander UK, TSB (Sabadell) and Handelsbanken’s local-manager network.',
    regional:
      'The Co-operative Bank as the Manchester-centred name that stops a North-West sample from being coded as a smaller London.',
    trade:
      'Mutuals (Nationwide, Coventry), digital banks (Starling, Monzo) and the official layer: PRA, FCA, Bank of England and FSCS.',
  },
  growthDrivers: [
    {
      title: 'Twin peaks split the filing',
      desc: 'A product can clear PRA capital tests and still fail an FCA Consumer Duty review, so research designs must ask both “is it safe” and “is it sold fairly.”',
    },
    {
      title: 'Ring-fencing as a contracting fact',
      desc: 'Payroll, card and deposit partners sign with the ring-fenced retail bank. Treating the investment-banking sister as the same counterparty breaks the legal map.',
    },
    {
      title: 'Mutuals that households still recognise',
      desc: 'Nationwide’s building-society identity remains a prompted differentiator; collapsing it into “high street” hides the ownership reason members give.',
    },
    {
      title: 'Licensed digital banks in the switching set',
      desc: 'Starling and Monzo hold PRA deposit permissions, which is why they belong on a bank tracker and a prepaid e-money firm does not.',
    },
    {
      title: 'Manchester is not a London suburb',
      desc: 'The Co-operative Bank, regional mutual density and a different SME mix change first mentions; a single London sample will not travel.',
    },
  ],
  sections: [
    {
      heading: 'High street, mutual and challenger as three research cells',
      paragraphs: [
        'A usable UK tracker keeps three cells even when the brand list is longer. High-street plc banks (HSBC UK, Barclays, Lloyds, NatWest, Santander UK, TSB, Metro) share branch heritage and ring-fence paperwork. Mutuals (Nationwide, Coventry, and the Co-operative Bank’s ethical positioning) share an ownership story that still appears in unprompted language. Digital banks (Starling, Monzo) share an onboarding path that never required a branch appointment.',
        'Mixing the cells in one “consideration of UK banks” score produces a number that no product owner can act on. BioNixus reports the cells separately, then only pools them when the decision is a market-level switcher rate rather than a brand redesign.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the PRA a different organisation from the Bank of England?',
      a: 'The PRA is the Bank of England’s prudential arm for deposit-takers and insurers. Threadneedle Street also runs monetary policy and high-value payments. Briefs should name the function, not only the parent.',
    },
    {
      q: 'Why is Nationwide listed if it is not a bank plc?',
      a: 'It is a building society authorised to take retail deposits. Households treat it as a current-account and mortgage competitor, so a bank directory that omits it is incomplete for UK retail work.',
    },
    {
      q: 'Are Starling and Monzo fully authorised UK banks?',
      a: 'Yes. Both hold PRA deposit-taking permissions. That is the inclusion test on this page. An e-money or payments firm without that permission is out of scope.',
    },
    {
      q: 'What is ring-fencing and why do research briefs mention it?',
      a: 'Large groups must legally separate the UK retail bank from the investment bank. The current-account counterparty is the ring-fenced entity. Coverage bankers in the wholesale house are not that entity.',
    },
    {
      q: 'What does BioNixus study among UK banks?',
      a: 'Current-account switching and mystery shops in London and Manchester; SME interviews that contrast Handelsbanken’s local manager with high-street call centres; and FSCS-trust probes on challenger apps.',
    },
    {
      q: 'Is this a league table of UK banks by balance-sheet size?',
      a: 'PRA and published accounts already order firms by size. The rows here are an account map for high-street, mutual, challenger and supervisory work. Editorial function, not assets, sets the order.',
    },
  ],
  regulatorSource: {
    name: 'Prudential Regulation Authority — Bank of England prudential supervision of banks and building societies',
    url: 'https://www.bankofengland.co.uk/prudential-regulation',
    asOf: '2026-09-05',
  },
  sources: [
    'Bank of England / PRA public register and ring-fencing materials',
    'Financial Conduct Authority Consumer Duty and retail-banking conduct pages',
    'FSCS protection materials; published reports of the named high-street groups, Nationwide and UK digital banks',
    'BioNixus UK current-account, SME and branch fieldwork in London and Manchester, 2023–2026',
  ],
  fieldNotes: [
    'Current-account mystery shops on Oxford Street and in Canary Wharf comparing ring-fenced high-street brands with Starling and Monzo onboarding.',
    'SME interviews in Spinningfields, Manchester, that contrast The Co-operative Bank and Handelsbanken’s local manager with London call-centre models.',
    'Mutual-versus-plc qualitative groups in which Nationwide members explain the building-society prompt in their own language.',
    'FSCS-awareness probes that ask challenger-app users to name the protection scheme before any brand stimulus is shown.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
