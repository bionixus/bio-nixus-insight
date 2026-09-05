import type { DirectoryPageInput } from '../../types';

export const banksGermany: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'germany',
  title: 'German Banks: Private, Sparkassen and Cooperative (2026)',
  metaDescription:
    'German banks directory: Deutsche Bank, Commerzbank, KfW, Sparkassen, DZ Bank, ING-DiBa, BayernLB, BaFin and Bundesbank — three pillars and Hausbank.',
  introLead:
    'German banking still runs on three pillars that a foreign product team keeps collapsing into one “German bank” cell: private commercial houses, the public Sparkassen and Landesbanken, and the cooperative Volksbanken with DZ Bank at the centre.',
  introRest:
    'Deutsche Bank and Commerzbank are the listed private names that international corporate coverage starts with in Frankfurt. KfW is the federal promotional bank: it finances programmes, it does not take walk-in current accounts. Sparkassen-Finanzgruppe is the savings-bank network that still holds the Hausbank relationship for a large share of households and Mittelstand firms; BayernLB, LBBW, Helaba and NORD/LB are the Landesbanken sitting above regional Sparkassen. DZ Bank is the cooperative central institution. ING-DiBa is the Dutch-owned direct bank that taught German households they could skip a branch. HypoVereinsbank is UniCredit’s Munich-centred German book. DKB is a large direct bank inside the public pillar. Santander Consumer Bank competes in auto and consumer credit. Deutsche Apotheker- und Ärztebank (apoBank) is a professional-group specialist. BaFin supervises with Deutsche Bundesbank; significant groups also sit under the ECB’s Single Supervisory Mechanism. The private-bank deposit-protection scheme (EdB) is the trust prompt on that pillar. BioNixus fields Frankfurt and Munich so a brief can tell a Sparkasse relationship from a listed-house coverage banker.',
  stats: [
    { value: '3', label: 'Pillars of German banking: private commercial, Sparkassen/Landesbanken, cooperative banks' },
    { value: 'BaFin', label: 'Federal Financial Supervisory Authority, working with Bundesbank on ongoing bank supervision' },
    { value: 'SSM', label: 'ECB Single Supervisory Mechanism overlay for significant German institutions' },
    { value: 'KfW', label: 'Federal promotional bank that sits beside, not inside, the three commercial pillars' },
  ],
  channelHeading: 'How a Hausbank relationship is won and supervised in Germany',
  channelBody:
    'A Mittelstand treasurer in Bavaria or Hesse usually names a Sparkasse, a Volksbank or one listed house as the Hausbank: the institution that holds the operating account, sees the tax adviser, and is called first when a guarantee or a KfW-channelled promotional loan is needed. That relationship is sticky in a way US and UK switching studies under-measure. Private commercial banks win when the firm outgrows local credit limits or needs capital-markets access in Frankfurt. Sparkassen win on proximity and on the public mandate of the savings-bank laws. Cooperatives win on member identity and on DZ Bank’s product factory. Direct banks (ING-DiBa, DKB) win the household giro and the brokerage login, then lose when the same person needs a documented commercial facility. BaFin and Bundesbank split day-to-day supervision; once a group is significant, Frankfurt also answers to ECB Joint Supervisory Teams. Deposit protection is pillar-specific: private banks point to EdB, Sparkassen and cooperatives run institutional-protection schemes that are not the same legal object. A card or SME launch that samples only Deutsche Bank and Commerzbank clients in the Bahnhofsviertel will miss the Hausbank that actually signs the SEPA mandate in a Bavarian town.',
  companies: [
    {
      name: 'Deutsche Bank',
      hq: 'Frankfurt',
      type: 'Local',
      focus: 'Listed private commercial and investment bank with a national retail book',
      notes: 'The private-pillar name international briefs start with; Postbank-heritage retail still sits inside the same group.',
    },
    {
      name: 'Commerzbank',
      hq: 'Frankfurt',
      type: 'Local',
      focus: 'Listed private bank with a Mittelstand-heavy commercial franchise',
      notes: 'Frankfurt corporate interviews treat Commerzbank as the second private Hausbank, not as a smaller Deutsche Bank.',
    },
    {
      name: 'KfW',
      hq: 'Frankfurt',
      type: 'Government',
      focus: 'Federal promotional bank for energy, SME and development programmes',
      notes: 'Not a high-street giro bank. It appears because promotional loans are often routed through a Hausbank that then sits in front of KfW.',
    },
    {
      name: 'Sparkassen-Finanzgruppe (DSGV)',
      hq: 'Berlin',
      type: 'Operator',
      focus: 'National association and brand umbrella for the savings-bank pillar',
      notes: 'The network, not a single balance sheet. Fieldwork names the local Sparkasse; strategy briefs need the Finanzgruppe as the system.',
    },
    {
      name: 'Bayerische Landesbank (BayernLB)',
      hq: 'Munich',
      type: 'Operator',
      focus: 'Bavarian public Landesbank sitting above regional Sparkassen',
      notes: 'Munich commercial work meets BayernLB as the public-pillar wholesale name, distinct from a municipal Sparkasse branch.',
    },
    {
      name: 'Landesbank Baden-Württemberg (LBBW)',
      hq: 'Stuttgart',
      type: 'Regional',
      focus: 'Landesbank for Baden-Württemberg with a wider corporate book',
      notes: 'The south-west public-pillar counterpart to BayernLB; useful when a Mittelstand sample is drawn from Baden-Württemberg rather than Bavaria.',
    },
    {
      name: 'DZ Bank',
      hq: 'Frankfurt',
      type: 'Local',
      focus: 'Central institution of the cooperative Volksbanken-Raiffeisenbanken pillar',
      notes: 'Product factory and wholesale name for the cooperative pillar; the customer-facing brand on the high street is usually the local Volksbank.',
    },
    {
      name: 'ING-DiBa',
      hq: 'Frankfurt',
      type: 'MNC',
      focus: 'Dutch-owned direct bank for giro accounts, mortgages and brokerage',
      notes: 'The digital control in German household studies; customers compare it with DKB and with listed-house apps, not with a Sparkasse lobby.',
    },
    {
      name: 'HypoVereinsbank (UniCredit Bank GmbH)',
      hq: 'Munich',
      type: 'MNC',
      focus: 'UniCredit’s German commercial and retail bank',
      notes: 'Munich fieldwork still says HVB. Treating it only as “UniCredit Italy” hides the local franchise that Bavarian corporates actually meet.',
    },
    {
      name: 'Deutsche Kreditbank (DKB)',
      hq: 'Berlin',
      type: 'Local',
      focus: 'Direct bank inside the public pillar, known for giro and card products',
      notes: 'A public-pillar digital brand; coding it as a private fintech is the usual foreign-team mistake.',
    },
    {
      name: 'Helaba (Landesbank Hessen-Thüringen)',
      hq: 'Frankfurt',
      type: 'Operator',
      focus: 'Landesbank for Hesse and Thuringia with a Frankfurt wholesale desk',
      notes: 'The public-pillar name that sits in the same city as Deutsche Bank and Commerzbank without being a private commercial peer.',
    },
    {
      name: 'Santander Consumer Bank',
      hq: 'Mönchengladbach',
      type: 'MNC',
      focus: 'Spanish-owned consumer and auto-finance bank in Germany',
      notes: 'Auto-loan and consumer-credit studies need this book; it is not a substitute for a Hausbank operating-account sample.',
    },
    {
      name: 'Deutsche Apotheker- und Ärztebank (apoBank)',
      hq: 'Düsseldorf',
      type: 'Local',
      focus: 'Cooperative-style specialist bank for pharmacists, doctors and practices',
      notes: 'Healthcare-practice finance briefs in Germany hit apoBank before they hit a listed house; that is why it is on a BioNixus map.',
    },
    {
      name: 'NORD/LB',
      hq: 'Hanover',
      type: 'Operator',
      focus: 'Northern German Landesbank with commercial and public-finance books',
      notes: 'Keeps the Landesbank tier from being coded as “only Bavaria and Baden-Württemberg.”',
    },
    {
      name: 'Federal Financial Supervisory Authority (BaFin)',
      hq: 'Bonn',
      type: 'Government',
      focus: 'Licensing and supervision of German banks, working with Bundesbank',
      notes: 'The national supervisor a partner bank will name in a filing; significant groups also answer to ECB JSTs under the SSM.',
    },
    {
      name: 'Deutsche Bundesbank',
      hq: 'Frankfurt',
      type: 'Government',
      focus: 'Central bank, on-site supervisory capacity and TARGET/payment operations',
      notes: 'BaFin’s supervisory counterpart in the field; payments and cash-operations briefs meet Bundesbank as infrastructure.',
    },
    {
      name: 'Entschädigungseinrichtung deutscher Banken (EdB)',
      hq: 'Berlin',
      type: 'Government',
      focus: 'Statutory deposit-protection scheme for private commercial banks',
      notes: 'The private-pillar trust prompt. Sparkassen and cooperatives use different institutional-protection arrangements.',
    },
    {
      name: 'Volkswagen Bank',
      hq: 'Braunschweig',
      type: 'Local',
      focus: 'Captive auto bank for Volkswagen-group financing and deposits',
      notes: 'Captive finance that auto and mobility briefs meet even when the household’s giro sits at a Sparkasse or ING-DiBa.',
    },
  ],
  categoryBlurbs: {
    local:
      'Private and specialist German names: Deutsche Bank, Commerzbank, DZ Bank as the cooperative centre, DKB, apoBank and Volkswagen Bank.',
    mnc:
      'Foreign-parent books: ING-DiBa as the direct-bank control, HypoVereinsbank as UniCredit in Munich, Santander Consumer Bank in auto credit.',
    regional:
      'Landesbank Baden-Württemberg as the south-west public-pillar wholesale name, distinct from a municipal Sparkasse and from the Frankfurt private houses.',
    trade:
      'Sparkassen-Finanzgruppe, BayernLB, Helaba and NORD/LB, plus KfW, BaFin, Bundesbank and EdB as the official and promotional layer.',
  },
  growthDrivers: [
    {
      title: 'Three pillars, three sampling frames',
      desc: 'A Mittelstand operating account at a Sparkasse is not interchangeable with a Deutsche Bank coverage line or a Volksbank membership. Designs that pool them invent a buyer who does not exist.',
    },
    {
      title: 'Hausbank stickiness',
      desc: 'The first-call relationship still decides who sees the promotional-loan file and who gets the SEPA mandate. Switching studies imported from the UK understate that inertia.',
    },
    {
      title: 'Direct banks inside and beside the pillars',
      desc: 'ING-DiBa (foreign private) and DKB (public pillar) both teach households to skip a lobby, yet they do not share an ownership or protection story.',
    },
    {
      title: 'Promotional credit through KfW',
      desc: 'Energy and SME programmes often arrive as a KfW product sold by the Hausbank. Omitting KfW hides the second signature on the loan.',
    },
    {
      title: 'BaFin, Bundesbank and the SSM at once',
      desc: 'National supervision is a two-house German job; significant groups add an ECB team. A partner’s filing calendar follows that stack.',
    },
  ],
  sections: [
    {
      heading: 'Frankfurt wholesale versus Munich public-pillar fieldwork',
      paragraphs: [
        'Frankfurt weeks are private-pillar and infrastructure weeks: Deutsche Bank, Commerzbank, DZ Bank, Helaba, Bundesbank and the ECB overlay sit within a short walk. The temptation is to treat that mile as “German banking.” It is the wholesale mile. Munich weeks are public-pillar and HVB weeks: BayernLB, Bavarian Sparkassen relationships and UniCredit’s German book set a different first mention for corporates that never need a Frankfurt trading floor.',
        'BioNixus keeps the two cities on separate frames when the decision is a Hausbank partnership, a Mittelstand credit product or a direct-bank challenge to giro fees. Averaging them produces a national score that neither city’s relationship managers will recognise.',
      ],
    },
  ],
  faq: [
    {
      q: 'What are the three pillars of German banking?',
      a: 'Private commercial banks, the public Sparkassen and Landesbanken, and the cooperative Volksbanken with DZ Bank. Each pillar has its own protection story and a different Hausbank culture.',
    },
    {
      q: 'Is KfW a bank a household can open a giro account with?',
      a: 'Households do not walk into KfW for a current account. Promotional loans are typically applied for through a Hausbank that then draws on KfW programmes.',
    },
    {
      q: 'Who supervises German banks — BaFin or the ECB?',
      a: 'Both can be true. BaFin and Bundesbank handle national supervision. Significant institutions also sit under the ECB Single Supervisory Mechanism. Name the layer the filing actually hits.',
    },
    {
      q: 'Why is Sparkassen-Finanzgruppe on the list if it is not one bank?',
      a: 'Because the customer names a local Sparkasse and the system is organised as a Finanzgruppe. Strategy briefs need the network; branch briefs then name the municipal institution.',
    },
    {
      q: 'What does BioNixus study among German banks?',
      a: 'Hausbank interviews with Mittelstand firms in Frankfurt and Munich; giro and app work that puts ING-DiBa and DKB against Sparkasse lobbies; and apoBank conversations inside medical and pharmacy practices.',
    },
    {
      q: 'Should the sequence be read as a ranking of German banks?',
      a: 'Bundesbank and published accounts already sort by size. This page is a pillar map — private, public, cooperative, promotional and supervisory — so a brief can pick the right Hausbank type. Role, not total assets, sets the order.',
    },
  ],
  regulatorSource: {
    name: 'Federal Financial Supervisory Authority (BaFin) — supervision of German credit institutions',
    url: 'https://www.bafin.de',
    asOf: '2026-09-05',
  },
  sources: [
    'BaFin public materials on credit-institution supervision',
    'Deutsche Bundesbank materials on banking supervision and payments',
    'DSGV descriptions of the Sparkassen-Finanzgruppe; published reports of Deutsche Bank, Commerzbank, DZ Bank, KfW and ING-DiBa',
    'BioNixus Germany Hausbank, retail-giro and Mittelstand fieldwork in Frankfurt and Munich, 2023–2026',
  ],
  fieldNotes: [
    'Mittelstand Hausbank interviews around Frankfurt’s banking district that separate Deutsche Bank and Commerzbank coverage from Helaba and local Sparkassen.',
    'Munich corporate and public-pillar interviews that put BayernLB, Bavarian Sparkassen and HypoVereinsbank on the same first-mention list.',
    'Household giro and app sessions comparing ING-DiBa and DKB onboarding with a municipal Sparkasse branch visit.',
    'Practice-finance conversations with pharmacists and physicians on why apoBank appears before a listed house on equipment loans.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
