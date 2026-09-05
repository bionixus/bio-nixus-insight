import type { DirectoryPageInput } from '../../types';

export const banksUsa: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'usa',
  title: 'US Banks: Money-Center, Community and Digital (2026)',
  metaDescription:
    'US banks directory: JPMorgan, Bank of America, Wells Fargo, Citi, US Bank, PNC, Capital One, Truist, OCC, Fed and FDIC — charters, community banks, digital.',
  introLead:
    'A commercial bank in the United States is first a charter, then a brand: the Office of the Comptroller of the Currency writes the national licence, state banking departments write the other, and the Federal Reserve plus the Federal Deposit Insurance Corporation decide who examines the holding company and who pays if the deposit book fails.',
  introRest:
    'Money-center names that product teams meet in New York — JPMorgan Chase, Bank of America, Citibank, Goldman Sachs Bank USA — sit beside Wells Fargo on the West Coast and a super-regional belt that includes U.S. Bank, PNC and Truist. Capital One built a national consumer book with far fewer branches than those peers. Ally Bank and SoFi Bank show what a digital charter looks like when the customer never walks into a marble lobby. TD Bank and BMO Bank bring Canadian parents into the mid-Atlantic and Chicago. Charles Schwab Bank sits on the brokerage-cash side of San Francisco and Texas. Community banks, too many to name here, still hold the primary operating account for a large share of local firms outside the money-center cities. This page is an account map for card, deposit, SME and payroll work, not a substitute for the Call Report. BioNixus fields the named institutions in New York, Chicago and San Francisco so a launch brief can tell a national examiner from a city relationship manager.',
  stats: [
    { value: '3', label: 'Federal prudential supervisors that share the dual-charter system (OCC, Federal Reserve, FDIC)' },
    { value: 'Dual', label: 'National versus state charter split that still decides who examines the commercial bank' },
    { value: 'FDIC', label: 'Federal deposit insurer that also supervises state-chartered non-member banks' },
    { value: 'BHC', label: 'Bank-holding-company layer that the Federal Reserve consolidates even when OCC charters the bank' },
  ],
  channelHeading: 'How a US deposit account is actually opened and supervised',
  channelBody:
    'A household or firm starts with a brand they already payroll through, a digital application, or a community banker who still visits the shop floor. Behind that first click sits a legal stack most foreign product teams skip: the bank charter, the holding-company umbrella, FDIC insurance on covered balances, and a consumer-protection overlay from the Consumer Financial Protection Bureau. OCC-chartered nationals file one way; state members file through the Fed; state non-members file through the FDIC. Money-center groups run national media and nationwide apps, then still assign a relationship manager in Manhattan, Chicago Loop or South of Market for the middle-market book. Super-regionals win on density in a multi-state footprint that is not quite national. Digital banks win on speed and rate, then lose when a treasurer wants a documented credit line and a human who can be in the room by Thursday. Community banks win the local operating account and often lose the card and treasury mandate to a money-center platform. Instant rails (FedNow, The Clearing House RTP) and same-day ACH have compressed the “your payment is in three days” story without collapsing the charter distinctions. A card or SME launch that treats “US bank” as one buyer type will mis-sample New York versus a Midwestern community shop.',
  companies: [
    {
      name: 'JPMorgan Chase',
      hq: 'New York',
      type: 'Local',
      focus: 'Money-center retail, cards, commercial and investment banking',
      notes: 'The first national brand most payroll and card briefs start with; Chase branches and the app set the consideration set in New York fieldwork.',
    },
    {
      name: 'Bank of America',
      hq: 'Charlotte',
      type: 'Local',
      focus: 'Nationwide consumer, preferred-rewards and middle-market banking',
      notes: 'Preferred Rewards and the Merrill link make this the household name that appears beside Chase in almost every national consideration study.',
    },
    {
      name: 'Wells Fargo',
      hq: 'San Francisco',
      type: 'Local',
      focus: 'West-coast-rooted consumer, small-business and commercial banking',
      notes: 'Still the default money-center conversation in San Francisco and the wider West, even after years of consent-order headlines.',
    },
    {
      name: 'Citibank',
      hq: 'New York',
      type: 'Local',
      focus: 'Urban consumer branches, cards and global transaction banking',
      notes: 'Thinner US branch map than Chase or Bank of America; strong in New York cards and in corporate cash management that crosses borders.',
    },
    {
      name: 'U.S. Bank',
      hq: 'Minneapolis',
      type: 'Regional',
      focus: 'Super-regional consumer and commercial franchise across the Midwest and West',
      notes: 'The name that appears when a brief wants national-scale systems without a New York money-center culture.',
    },
    {
      name: 'PNC Financial Services',
      hq: 'Pittsburgh',
      type: 'Regional',
      focus: 'Super-regional retail and corporate banking, including a growing Chicago book',
      notes: 'Chicago middle-market interviews treat PNC as a local option after the BBVA USA combination, not as an East-coast visitor.',
    },
    {
      name: 'Capital One',
      hq: 'McLean',
      type: 'Local',
      focus: 'National cards and a branch-light consumer deposit book',
      notes: 'Card-first brand that digital-bank studies must include even when the brief is written as a “branch bank” tracker.',
    },
    {
      name: 'Truist',
      hq: 'Charlotte',
      type: 'Regional',
      focus: 'Southeast super-regional after the BB&T and SunTrust combination',
      notes: 'Southeast commercial and retail work still uses Truist as the post-merger name clients actually see on the door.',
    },
    {
      name: 'Goldman Sachs Bank USA',
      hq: 'New York',
      type: 'Local',
      focus: 'Chartered bank behind Marcus deposits, private-bank cash and firm funding',
      notes: 'Not a high-street branch network; included because deposit and wealth briefs keep meeting the bank subsidiary, not only the broker-dealer.',
    },
    {
      name: 'Ally Bank',
      hq: 'Charlotte',
      type: 'Operator',
      focus: 'Digital consumer deposits, auto finance and no-branch retail',
      notes: 'The digital control in many deposit-rate and app-usability studies; customers compare it with Capital One and SoFi, not with a corner branch.',
    },
    {
      name: 'SoFi Bank',
      hq: 'San Francisco',
      type: 'Operator',
      focus: 'National bank charter attached to a digital membership brand',
      notes: 'San Francisco product interviews treat SoFi as the licensed challenger that already cleared the OCC-equivalent charter hurdle.',
    },
    {
      name: 'TD Bank, N.A.',
      hq: 'Cherry Hill',
      type: 'MNC',
      focus: 'Canadian-owned retail and commercial bank on the East Coast',
      notes: 'The foreign-parent name that still feels local from Maine through Florida; useful when a brief needs an MNC that is not a money-center.',
    },
    {
      name: 'BMO Bank',
      hq: 'Chicago',
      type: 'MNC',
      focus: 'Canadian-owned Midwest commercial and consumer bank after the Bank of the West combination',
      notes: 'Chicago treasurers meet BMO as a hometown commercial option with a Toronto parent, not as a visiting correspondent.',
    },
    {
      name: 'Charles Schwab Bank',
      hq: 'San Francisco',
      type: 'Local',
      focus: 'Brokerage-linked cash, investor checking and bank products beside the Schwab platform',
      notes: 'West-coast wealth briefs hit this charter when idle cash and checking sit next to a brokerage login rather than a branch.',
    },
    {
      name: 'Office of the Comptroller of the Currency (OCC)',
      hq: 'Washington',
      type: 'Government',
      focus: 'National-bank charters, ongoing supervision and enforcement',
      notes: 'The charter desk for most money-center banks; a product that needs a national-bank partner is negotiating inside OCC rules whether it knows it or not.',
    },
    {
      name: 'Board of Governors of the Federal Reserve System',
      hq: 'Washington',
      type: 'Government',
      focus: 'Holding-company supervision, state member banks, payments and monetary operations',
      notes: 'Consolidated supervisor of the BHC and operator of FedNow and Fedwire; belongs on every US bank map even when OCC charters the bank.',
    },
    {
      name: 'Federal Deposit Insurance Corporation (FDIC)',
      hq: 'Washington',
      type: 'Government',
      focus: 'Deposit insurance and supervision of state non-member banks',
      notes: 'Household trust in a new digital brand still collapses to the FDIC sign; resolution work after 2023 made that sign a research prompt again.',
    },
    {
      name: 'Consumer Financial Protection Bureau (CFPB)',
      hq: 'Washington',
      type: 'Government',
      focus: 'Federal consumer-finance conduct rules for cards, deposits and lending',
      notes: 'Not a prudential charterer, yet the rulebook that card and overdraft studies keep hitting when a bank redesigns a fee or disclosure.',
    },
  ],
  categoryBlurbs: {
    local:
      'US-headquartered money-center and national consumer names — JPMorgan Chase, Bank of America, Wells Fargo, Citibank, Capital One, Goldman Sachs Bank USA, Charles Schwab Bank — that set the nationwide consideration set.',
    mnc:
      'Canadian-owned East Coast and Midwest books: TD Bank along the Atlantic and BMO Bank in Chicago after absorbing Bank of the West.',
    regional:
      'Super-regionals that are not money-center New York houses: U.S. Bank, PNC and Truist, each dense in a multi-state belt rather than a single city.',
    trade:
      'Digital charters (Ally, SoFi) plus the four federal names a brief must keep straight: OCC, Federal Reserve, FDIC and CFPB.',
  },
  growthDrivers: [
    {
      title: 'Dual charter still routes the exam',
      desc: 'National versus state membership decides whether OCC, the Fed or the FDIC is in the exam room, which changes how a partner bank will time a product filing.',
    },
    {
      title: 'Community books versus money-center platforms',
      desc: 'Local operating accounts stay sticky at community banks while cards, treasury and foreign exchange migrate to money-center apps — a split that sampling frames must keep.',
    },
    {
      title: 'Digital banks with real charters',
      desc: 'Ally and SoFi are not payment apps wearing a bank logo; they hold insured deposits and force incumbents to compete on rate and onboarding speed.',
    },
    {
      title: 'Deposit insurance as a trust prompt',
      desc: 'After the 2023 regional failures, FDIC coverage and the holding-company story returned to household interviews that had ignored the sign for a decade.',
    },
    {
      title: 'Instant rails without a single buyer type',
      desc: 'FedNow and RTP shortened settlement, yet a Chicago middle-market treasurer and a San Francisco digital-only user still buy those rails through different banks.',
    },
  ],
  sections: [
    {
      heading: 'Reading New York, Chicago and San Francisco as three banking cities',
      paragraphs: [
        'New York fieldwork is money-center and global-transaction work: Chase, Citi and Goldman Sachs Bank USA appear in the same week as Fedwire conversations and holding-company lawyers. Chicago fieldwork is commercial and Midwest super-regional work: PNC, BMO and a long tail of community banks still sit on the operating account of manufacturers that never need a Manhattan coverage banker. San Francisco fieldwork mixes Wells Fargo’s remaining West-coast gravity with Schwab cash, SoFi’s membership pitch and a venture-payroll book that wants same-day movement more than a branch.',
        'A national tracker that averages those three cities into one “US urban bank” score will hide the charter and the relationship model. BioNixus keeps the cities on separate sample frames when the decision is a card launch, an SME credit line or a deposit-gathering partnership.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the difference between a national bank and a state bank in the United States?',
      a: 'A national bank holds an OCC charter. A state bank holds a state charter and then becomes a Fed member or an FDIC-supervised non-member. Households rarely see the split; product lawyers live inside it.',
    },
    {
      q: 'Who insures US bank deposits?',
      a: 'The FDIC insures covered balances at insured banks, subject to the statutory limits and account-ownership categories published on its site. Credit unions sit under a different insurer and are not this directory.',
    },
    {
      q: 'Why are community banks missing from a named list of this length?',
      a: 'There are thousands of them, and naming twenty would still miss the shop-floor banker a Midwest firm actually calls. The page flags the tier; a local study then samples the charter list in that state.',
    },
    {
      q: 'Do Ally and SoFi count as banks or as fintechs?',
      a: 'On this page they count as banks because they hold insured-deposit charters. A payments firm without that charter is left off so the table does not become a fintech catalogue.',
    },
    {
      q: 'What does BioNixus study among US banks?',
      a: 'Branch and app mystery shops in New York, Chicago and San Francisco; SME switching interviews on operating accounts versus cards; and deposit-trust work that tests whether the FDIC sign still moves a household after 2023.',
    },
    {
      q: 'Does table order rank US banks by assets or deposits?',
      a: 'Call Reports already publish size. Rows here exist so a card, deposit or SME brief can see money-center, super-regional, digital and supervisory names together. Editorial role sets the sequence.',
    },
  ],
  regulatorSource: {
    name: 'Office of the Comptroller of the Currency — national bank and federal savings association supervision',
    url: 'https://www.occ.gov',
    asOf: '2026-09-05',
  },
  sources: [
    'OCC public materials on national-bank charters and supervision',
    'Board of Governors of the Federal Reserve System materials on holding-company supervision and FedNow',
    'FDIC deposit-insurance and failed-bank resources; CFPB consumer-finance rule pages',
    'SEC and bank holding-company filings of the named listed groups; BioNixus US retail, SME and branch fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Branch and app mystery shops along Midtown Manhattan and Downtown Brooklyn comparing Chase, Bank of America, Citi and digital-only onboarding.',
    'Middle-market treasurer interviews in the Chicago Loop on why an operating account stays at PNC or BMO while cards sit at a money-center.',
    'San Francisco deposit and payroll interviews that put Wells Fargo, Schwab Bank and SoFi on the same consideration set for venture-backed firms.',
    'Post-2023 deposit-trust qualitative work that asks households to explain the FDIC sign in their own words before any brand is shown.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
