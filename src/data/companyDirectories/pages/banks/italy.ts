import type { DirectoryPageInput } from '../../types';

export const banksItaly: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'italy',
  title: 'Italian Banks: Intesa, UniCredit and Regional Groups (2026)',
  metaDescription:
    'Italian banks directory: Intesa Sanpaolo, UniCredit, Banco BPM, MPS, BPER, Fineco, BancoPosta, Banca d’Italia, IVASS and FITD — popolari and bancassurance.',
  introLead:
    'Italian commercial banking is a two-group national story sitting on a much older local one: Intesa Sanpaolo and UniCredit are the names a foreign treasurer already knows, while Banco BPM, Monte dei Paschi di Siena, BPER, Credem and Banca Popolare di Sondrio still hold city and regional operating accounts that those two groups do not automatically inherit.',
  introRest:
    'Mediobanca is the investment-house name that corporate interviews in Milan volunteer beside the commercial giants. FinecoBank is the guided-trading and online-account brand that younger affluent samples name without a prompt. Banca Mediolanum sells banking through a network-adviser model rather than a branch grid. BancoPosta, inside Poste Italiane, puts savings and payment products on the post-office counter that still reaches towns without a commercial branch. ICCREA Banca is a central institution for cooperative credit. Crédit Agricole Italia is the French-owned domestic book, strong in Emilia and the North. ING Italy is the direct-bank control. Banca d’Italia is the national supervisor inside the ECB Single Supervisory Mechanism. IVASS matters whenever the same group sells life or health cover through a branch. FITD is the interbank deposit-protection fund. Cassa Depositi e Prestiti is the promotional and postal-savings counterpart, not a high-street giro bank. BioNixus fields Milan and Rome so a brief can tell a northern commercial Hausbank from a postal or supervisory conversation.',
  stats: [
    { value: 'BdI', label: 'Banca d’Italia — national supervisor inside the ECB Single Supervisory Mechanism' },
    { value: '2', label: 'Nationwide commercial groups that foreign corporate coverage already treats as the Italian core (Intesa Sanpaolo, UniCredit)' },
    { value: 'FITD', label: 'Interbank deposit-protection fund that Italian credit institutions contribute to' },
    { value: 'IVASS', label: 'Insurance supervisor that matters whenever a bank distributes life or health cover' },
  ],
  channelHeading: 'How an Italian conto corrente is held across commercial, postal and cooperative rails',
  channelBody:
    'A salary in Italy still lands on a conto corrente that may sit at Intesa Sanpaolo or UniCredit in a northern city, at a former popolare in a provincial capital, or at BancoPosta in a town where the commercial branch closed. The legal deposit-taker is a Banca d’Italia-supervised credit institution, with significant groups also answering to ECB Joint Supervisory Teams. Bancassurance is not an add-on: the same branch or Mediolanum adviser often sells a life policy that IVASS, not Banca d’Italia, polices. Fineco wins the self-directed affluent who want trading tools on the same login as the conto. MPS carries a public-rescue history that still shapes how Tuscan and national samples talk about trust. BPER and Banco BPM are the next commercial names a Milan mid-market brief meets after the two giants. Cooperative credit through ICCREA remains a local-membership story that a national brand tracker will miss if the sample is only Porta Nuova office workers. Rome fieldwork adds the supervisory and promotional layer — Banca d’Italia, IVASS, CDP — and a heavier BancoPosta presence. A card or SME launch that treats “Italian bank” as Intesa plus UniCredit will under-sample the provincial operating account that still signs the RID mandate.',
  companies: [
    {
      name: 'Intesa Sanpaolo',
      hq: 'Turin',
      type: 'Local',
      focus: 'Largest domestic commercial group, retail and corporate, with a Milan markets presence',
      notes: 'The first Italian name most foreign corporate briefs already print; retail work must still put it beside regional and postal alternatives.',
    },
    {
      name: 'UniCredit',
      hq: 'Milan',
      type: 'Local',
      focus: 'Pan-European group with a major Italian commercial and retail book',
      notes: 'Milan coverage treats UniCredit as the other national commercial pole, not as a smaller Intesa. The German HVB book is a different country page.',
    },
    {
      name: 'Banco BPM',
      hq: 'Milan',
      type: 'Local',
      focus: 'Third-scale commercial bank from the Banco Popolare and BPM combination',
      notes: 'Milan mid-market interviews name Banco BPM when the brief is an operating account that is not already parked at the two giants.',
    },
    {
      name: 'Banca Monte dei Paschi di Siena (MPS)',
      hq: 'Siena',
      type: 'Local',
      focus: 'Historic commercial bank with a public-rescue legacy and a Tuscan core',
      notes: 'Trust language in Tuscan and national samples still references the rescue years; omit that history and the brand comments will puzzle you.',
    },
    {
      name: 'BPER Banca',
      hq: 'Modena',
      type: 'Local',
      focus: 'Emilia-rooted commercial bank that absorbed several former popolari',
      notes: 'The Emilia-Romagna commercial name that a North-East mid-market sample will volunteer after Intesa and UniCredit.',
    },
    {
      name: 'Mediobanca',
      hq: 'Milan',
      type: 'Local',
      focus: 'Investment and corporate house, not a mass-retail branch grid',
      notes: 'Included because Milan corporate interviews keep naming it beside the commercial giants when the brief is advisory or wholesale.',
    },
    {
      name: 'Credito Emiliano (Credem)',
      hq: 'Reggio Emilia',
      type: 'Local',
      focus: 'Emilia commercial bank with a reputation for credit quality',
      notes: 'A named alternative to BPER in Emilia operating-account work; collapsing both into “regional banks” loses a distinction treasurers still make.',
    },
    {
      name: 'FinecoBank',
      hq: 'Milan',
      type: 'Local',
      focus: 'Online bank and guided-trading platform for affluent self-directed clients',
      notes: 'The digital-affluent control in northern samples; it is a licensed bank, not a brokerage add-on sitting outside the register.',
    },
    {
      name: 'Banca Popolare di Sondrio',
      hq: 'Sondrio',
      type: 'Regional',
      focus: 'Lombard popolare with a commercial book that survived the sector’s combinations',
      notes: 'Keeps the popolare tier on the map as a living bank, not only as a history of mergers into BPER and Banco BPM.',
    },
    {
      name: 'Crédit Agricole Italia',
      hq: 'Parma',
      type: 'MNC',
      focus: 'French-owned Italian commercial bank, strong in Emilia and the North',
      notes: 'The foreign-parent domestic book that Emilia samples already treat as local. It is not a correspondent visiting from Paris.',
    },
    {
      name: 'BancoPosta (Poste Italiane)',
      hq: 'Rome',
      type: 'Operator',
      focus: 'Postal savings, payments and conto products through post-office counters',
      notes: 'Towns without a commercial branch still see BancoPosta as the default counter. Rome inclusion work starts here.',
    },
    {
      name: 'ICCREA Banca',
      hq: 'Rome',
      type: 'Operator',
      focus: 'Central institution for a large set of cooperative credit banks',
      notes: 'The system name. Fieldwork then records the local BCC the member actually walks into.',
    },
    {
      name: 'Banca Mediolanum',
      hq: 'Basiglio',
      type: 'Local',
      focus: 'Bank-and-advice model sold through a network of family bankers',
      notes: 'Affluent household work in Lombardy meets a Mediolanum adviser rather than a branch queue; keep that channel as its own cell.',
    },
    {
      name: 'ING Italy',
      hq: 'Milan',
      type: 'MNC',
      focus: 'Direct-bank brand for Italian consumer deposits and mortgages',
      notes: 'The foreign digital control beside Fineco; useful when a design needs an app-first cell that is not Italian-owned.',
    },
    {
      name: 'Banca d’Italia',
      hq: 'Rome',
      type: 'Government',
      focus: 'National central bank and supervisor inside the SSM',
      notes: 'Via Nazionale is the register a partner bank will cite; significant Italian groups also report into an ECB joint team.',
    },
    {
      name: 'IVASS',
      hq: 'Rome',
      type: 'Government',
      focus: 'Insurance supervisor for life and non-life products sold through banks',
      notes: 'Bancassurance briefs that only map Banca d’Italia will miss the rulebook on the policy sitting in the same branch conversation.',
    },
    {
      name: 'Fondo Interbancario di Tutela dei Depositi (FITD)',
      hq: 'Rome',
      type: 'Government',
      focus: 'Interbank deposit-protection fund for member credit institutions',
      notes: 'The trust prompt in Italian qualitative work when a household is asked to move a salary onto an app-only brand.',
    },
    {
      name: 'Cassa Depositi e Prestiti (CDP)',
      hq: 'Rome',
      type: 'Government',
      focus: 'Promotional institution and postal-savings counterpart, not a walk-in giro bank',
      notes: 'Appears on infrastructure and SME-programme files. It is not a substitute for Intesa or UniCredit on a household conto sample.',
    },
  ],
  categoryBlurbs: {
    local:
      'Italian commercial, investment and advice names: Intesa Sanpaolo, UniCredit, Banco BPM, MPS, BPER, Mediobanca, Credem, Fineco and Mediolanum.',
    mnc:
      'Foreign-parent domestic books: Crédit Agricole Italia in Emilia and the North, ING Italy as the direct-bank control.',
    regional:
      'Banca Popolare di Sondrio as a living Lombard popolare that was not absorbed into the last round of combinations.',
    trade:
      'BancoPosta and ICCREA as the postal and cooperative rails, plus Banca d’Italia, IVASS, FITD and CDP as the official layer.',
  },
  growthDrivers: [
    {
      title: 'Two national groups do not exhaust the conto',
      desc: 'Intesa Sanpaolo and UniCredit dominate foreign slides. Provincial operating accounts still sit at former popolari, cooperative banks and BancoPosta.',
    },
    {
      title: 'Bancassurance under a second supervisor',
      desc: 'The branch conversation often includes a life policy. IVASS, not only Banca d’Italia, sets the rules on that half of the bundle.',
    },
    {
      title: 'Postal counters where branches closed',
      desc: 'BancoPosta remains the everyday rail in towns that lost a commercial window. Urban Milan samples will under-count it.',
    },
    {
      title: 'Online affluent versus network advice',
      desc: 'Fineco and Mediolanum win different wealthy households. Pooling them as “Italian digital banking” hides the adviser versus self-directed split.',
    },
    {
      title: 'Promotional files through CDP',
      desc: 'Infrastructure and SME programmes can carry a CDP signature beside a commercial line. Omitting CDP hides the second institution on the file.',
    },
  ],
  sections: [
    {
      heading: 'Milan commercial density versus Rome’s postal and official layer',
      paragraphs: [
        'Milan weeks are commercial and markets weeks: Intesa Sanpaolo’s northern book, UniCredit, Banco BPM, Mediobanca, Fineco and Mediolanum sit inside one metro system. First mentions in Porta Nuova will over-weight those brands. Rome weeks add Banca d’Italia, IVASS, CDP and a heavier BancoPosta presence, plus a different public-sector payroll path onto the conto corrente.',
        'BioNixus keeps the cities on separate frames when the decision is a mid-market operating account, a bancassurance bundle or an inclusion product that has to work where the commercial branch has already closed. A single “Italian urban” score will not survive contact with either city.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who supervises Italian banks — Banca d’Italia or the ECB?',
      a: 'Banca d’Italia is the national supervisor. Significant groups also sit under the ECB Single Supervisory Mechanism. Less-significant firms remain a Banca d’Italia-led job. Name the layer the filing hits.',
    },
    {
      q: 'Why is IVASS on a bank directory?',
      a: 'Because Italian branches and adviser networks sell life and health cover. IVASS supervises those policies. A bancassurance brief that only maps Banca d’Italia is half a map.',
    },
    {
      q: 'Is BancoPosta a bank in the same sense as Intesa Sanpaolo?',
      a: 'It is a ring-fenced set of postal financial products inside Poste Italiane, used as a conto and savings rail. Inclusion fieldwork must treat the post-office counter as a real alternative, not as a curiosity.',
    },
    {
      q: 'What happened to the popolari?',
      a: 'Many combined into Banco BPM, BPER and peers. Some, such as Banca Popolare di Sondrio, still operate under their own name. The tier did not vanish; it concentrated.',
    },
    {
      q: 'What does BioNixus study among Italian banks?',
      a: 'Conto-corrente and SME interviews in Milan and Rome; bancassurance work that brings IVASS rules into the same interview as the branch; and postal-counter observation where commercial branches have closed.',
    },
    {
      q: 'Does this page rank Italian banks by total assets?',
      a: 'Banca d’Italia statistics already publish size. Rows exist so a brief can see national commercial groups, former popolari, postal, cooperative and supervisory names in one place. Editorial role, not assets, sets the order.',
    },
  ],
  regulatorSource: {
    name: 'Banca d’Italia — supervision of credit institutions and national central-bank functions',
    url: 'https://www.bancaditalia.it',
    asOf: '2026-09-05',
  },
  sources: [
    'Banca d’Italia public materials on credit-institution supervision and the SSM',
    'IVASS materials on insurance distribution; FITD deposit-protection explanations',
    'Published reports of Intesa Sanpaolo, UniCredit, Banco BPM, MPS, BPER, Fineco and Poste Italiane',
    'BioNixus Italy retail, SME and bancassurance fieldwork in Milan and Rome, 2023–2026',
  ],
  fieldNotes: [
    'Milan mid-market treasurer interviews that place Banco BPM and BPER beside Intesa Sanpaolo and UniCredit on the operating-account set.',
    'Rome postal-counter and inclusion sessions that test when BancoPosta appears without a commercial-bank prompt.',
    'Bancassurance interviews in which the same household explains the life policy and the conto, then is asked which supervisor they think sits behind each.',
    'Fineco versus Mediolanum affluent sessions that keep self-directed trading apart from the family-banker channel.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
