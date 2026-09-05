import type { DirectoryPageInput } from '../../types';

export const banksSpain: DirectoryPageInput = {
  entity: 'banks',
  countrySlug: 'spain',
  title: 'Spanish Banks: Santander, Cajas Legacy and Banco de España (2026)',
  metaDescription:
    'Spanish banks directory: Santander, BBVA, CaixaBank, Sabadell, Bankinter, Unicaja, Openbank, Banco de España, FROB and FGD — cajas and resolution.',
  introLead:
    'Spanish commercial banking is a post-caja market: the old savings-bank map was concentrated through resolution and mergers into a short list of national groups, while Banco de España and FROB still sit on the official layer that product lawyers meet before they meet a branch manager.',
  introRest:
    'Banco Santander and BBVA are the two internationally recognised Spanish groups. CaixaBank is the large domestic book that absorbed Bankia and much of the eastern savings-bank heritage. Sabadell remains an independent commercial name whose periodic combination rumours are a research context, not a completed fact on this page. Bankinter is the agile mid-tier that affluent and digital-curious samples still volunteer. Unicaja, Abanca, Kutxabank and Ibercaja are the surviving regional names that carry caja DNA without being CaixaBank. ING Spain is the foreign direct-bank control. Openbank is Santander’s digital-only brand and must be coded as its own experience. Cajamar is a cooperative-credit group. EVO Banco is another digital fascia. Deutsche Bank SAE is a foreign wholesale and affluent residual. The Fondo de Garantía de Depósitos is the deposit-protection prompt. Instituto de Crédito Oficial is the promotional bank on SME and public-programme files. BioNixus fields Madrid and Barcelona so a brief can tell a national group from a Catalan or Basque regional book.',
  stats: [
    { value: 'BdE', label: 'Banco de España — national prudential supervisor under the Single Supervisory Mechanism' },
    { value: 'FROB', label: 'Resolution authority that managed caja-era recapitalisations and still sits on the official map' },
    { value: 'Cajas', label: 'Savings-bank legacy now concentrated in CaixaBank and in surviving regional names such as Unicaja, Ibercaja and Kutxabank' },
    { value: 'FGD', label: 'Deposit-guarantee fund financed by Spanish credit institutions' },
  ],
  channelHeading: 'How a Spanish cuenta corriente sits after the caja consolidation',
  channelBody:
    'A salary in Spain still lands on a cuenta corriente that is often bundled with a nómina offer, a card, and sometimes an insurer sold from the same desk. The legal deposit-taker is a Banco de España-supervised credit institution; significant groups also answer to ECB teams. Households in Madrid may name Santander, BBVA, CaixaBank or Bankinter first. Households in Barcelona still name CaixaBank and Sabadell with a Catalan gravity that a Madrid-only sample will understate. Former caja regions keep Unicaja, Ibercaja, Kutxabank or Abanca as the local operating-account brand even when national advertising is dominated by the three large groups. Openbank and ING win the digital-first cell; treating Openbank as “just Santander” hides a distinct onboarding path. Cajamar keeps a cooperative membership story in the South-East. ICO programmes often arrive as a promotional facility sold through the Hausbank, the same pattern German briefs know from KfW, though the legal objects differ. FROB is not a commercial competitor; it is the resolution authority whose caja-era work still explains why the brand map is shorter than it was before the crisis. A card or SME launch that samples only Salamanca district offices in Madrid will miss the Catalan and Basque books that still sign the recibo.',
  companies: [
    {
      name: 'Banco Santander',
      hq: 'Boadilla del Monte',
      type: 'Local',
      focus: 'International Spanish group with a large domestic retail and commercial book',
      notes: 'The global name foreign briefs already print; domestic work must still keep Openbank as a separate digital experience inside the same group.',
    },
    {
      name: 'BBVA',
      hq: 'Bilbao',
      type: 'Local',
      focus: 'Second internationally recognised Spanish group, strong in digital retail',
      notes: 'Madrid and Basque interviews treat BBVA as a national commercial pole, not as a smaller Santander. App-led retail is part of the brand story.',
    },
    {
      name: 'CaixaBank',
      hq: 'Valencia',
      type: 'Local',
      focus: 'Large domestic group carrying Bankia and eastern caja heritage',
      notes: 'Barcelona and eastern samples name CaixaBank as the local giant. Coding it only as “third Spanish bank” hides that regional gravity.',
    },
    {
      name: 'Banco Sabadell',
      hq: 'Alicante',
      type: 'Local',
      focus: 'Independent commercial bank with a Catalan and SME heritage',
      notes: 'Barcelona SME interviews still volunteer Sabadell. Combination headlines are context for trust questions, not a reason to retire the brand from a 2026 map.',
    },
    {
      name: 'Bankinter',
      hq: 'Madrid',
      type: 'Local',
      focus: 'Mid-tier commercial and digital-curious retail bank',
      notes: 'Affluent Madrid samples name Bankinter when the brief is service and agility rather than the largest balance sheet.',
    },
    {
      name: 'Unicaja Banco',
      hq: 'Málaga',
      type: 'Regional',
      focus: 'Andalusian-rooted bank from caja combinations, including Liberbank',
      notes: 'Keeps the southern regional tier on the map so CaixaBank does not become the only caja-heritage dummy.',
    },
    {
      name: 'Abanca',
      hq: 'A Coruña',
      type: 'Regional',
      focus: 'Galician commercial bank built from caja and later acquisitions',
      notes: 'North-west samples treat Abanca as the hometown book. A Madrid-only tracker will under-count it.',
    },
    {
      name: 'Kutxabank',
      hq: 'Bilbao',
      type: 'Regional',
      focus: 'Basque banking group with caja heritage',
      notes: 'Bilbao fieldwork will correct a design that only prints BBVA as the Basque name. Kutxabank is the other local pole.',
    },
    {
      name: 'Ibercaja Banco',
      hq: 'Zaragoza',
      type: 'Regional',
      focus: 'Aragonese bank that remained independent through the caja years',
      notes: 'The Ebro-valley regional name that stops the surviving-caja cell from being only Andalusia and the Basque Country.',
    },
    {
      name: 'ING Spain',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'Dutch-owned direct bank for Spanish consumer deposits and mortgages',
      notes: 'The foreign digital control. Households compare it with Openbank and Bankinter apps, not with a provincial caja lobby.',
    },
    {
      name: 'Openbank',
      hq: 'Madrid',
      type: 'Operator',
      focus: 'Santander’s digital-only bank brand',
      notes: 'Code the experience separately. Customers who opened Openbank did not necessarily choose a Santander branch, and the mystery-shop path is different.',
    },
    {
      name: 'Cajamar',
      hq: 'Almería',
      type: 'Operator',
      focus: 'Cooperative-credit group with a South-East agricultural and SME book',
      notes: 'Membership and agri-SME work in Andalusia and Murcia hit Cajamar before they hit a national advertising brand.',
    },
    {
      name: 'EVO Banco',
      hq: 'Madrid',
      type: 'Operator',
      focus: 'Digital retail fascia competing for nómina and mortgage switchers',
      notes: 'A second Spanish digital cell beside Openbank so the app-first tier is not a single-brand dummy.',
    },
    {
      name: 'Deutsche Bank SAE',
      hq: 'Madrid',
      type: 'MNC',
      focus: 'German-owned Spanish bank for affluent and wholesale residual books',
      notes: 'Not a mass nómina competitor. Included because affluent and corporate briefs in Madrid still meet the SAE entity.',
    },
    {
      name: 'Banco de España',
      hq: 'Madrid',
      type: 'Government',
      focus: 'National central bank and prudential supervisor under the SSM',
      notes: 'Spanish filings start here. A significant group then adds an ECB joint supervisory team on top of the Cibeles desk.',
    },
    {
      name: 'FROB (Fondo de Reestructuración Ordenada Bancaria)',
      hq: 'Madrid',
      type: 'Government',
      focus: 'Resolution authority for credit institutions',
      notes: 'Not a commercial bank. It belongs on the map because the caja-era consolidations that shortened this list ran through FROB.',
    },
    {
      name: 'Fondo de Garantía de Depósitos (FGD)',
      hq: 'Madrid',
      type: 'Government',
      focus: 'Deposit-guarantee fund for Spanish credit institutions',
      notes: 'The trust prompt when a household is asked to move a nómina onto a digital brand they have never seen on a high street.',
    },
    {
      name: 'Instituto de Crédito Oficial (ICO)',
      hq: 'Madrid',
      type: 'Government',
      focus: 'State promotional bank for SME and public-programme facilities',
      notes: 'Facilities are often sold through a commercial Hausbank. Omitting ICO hides the second signature on many SME files.',
    },
  ],
  categoryBlurbs: {
    local:
      'National Spanish groups: Santander, BBVA, CaixaBank, Sabadell and Bankinter — the names a Madrid corporate slide already carries.',
    mnc:
      'Foreign-parent books: ING Spain as the direct-bank control and Deutsche Bank SAE as the affluent and wholesale residual.',
    regional:
      'Surviving caja-heritage names outside the national three: Unicaja, Abanca, Kutxabank and Ibercaja.',
    trade:
      'Digital and cooperative operators (Openbank, EVO, Cajamar) plus Banco de España, FROB, FGD and ICO as the official and promotional layer.',
  },
  growthDrivers: [
    {
      title: 'Caja concentration is the starting map',
      desc: 'The brand list is shorter than a pre-crisis savings-bank map. Research that still samples vanished cajas will interview ghosts.',
    },
    {
      title: 'Madrid is not Barcelona',
      desc: 'CaixaBank and Sabadell carry Catalan gravity that a Salamanca-district sample understates. Basque work must keep Kutxabank beside BBVA.',
    },
    {
      title: 'Digital brands inside and beside the groups',
      desc: 'Openbank is Santander’s app-only path; ING and EVO are outside that group. Collapsing all three into “Spanish digital” hides ownership.',
    },
    {
      title: 'Resolution memory through FROB',
      desc: 'Household trust language still references the caja years. FROB is the official name behind that memory even though it is not a high-street brand.',
    },
    {
      title: 'ICO facilities on SME files',
      desc: 'Promotional credit often arrives as an ICO product sold by the Hausbank. A design that only names Santander or BBVA misses the second institution.',
    },
  ],
  sections: [
    {
      heading: 'Madrid national groups versus Barcelona’s Catalan commercial set',
      paragraphs: [
        'Madrid weeks are national-group and official weeks: Santander, BBVA, Bankinter, Openbank, ING, Banco de España, FROB, FGD and ICO sit inside one city. First mentions in the Salamanca district will look like a national advertising reel. Barcelona weeks are CaixaBank and Sabadell weeks, with a Catalan commercial vocabulary that treats those two as local poles rather than as line items on a Madrid league slide.',
        'BioNixus keeps the cities apart when the decision is a nómina product, an SME operating account or a digital challenge to a caja-heritage book. A pooled “Spanish urban” score will overstate national-group symmetry and understate the eastern books that still hold the recibo.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who supervises Spanish banks — Banco de España or the ECB?',
      a: 'Banco de España leads national supervision. Once a group is significant, an ECB joint team joins the file. Say which desk the paperwork actually reaches.',
    },
    {
      q: 'What is FROB doing on a list of banks?',
      a: 'FROB is the resolution authority. The caja-era consolidations that produced today’s shorter brand map ran through it. Product lawyers still meet FROB on resolution questions.',
    },
    {
      q: 'Is Openbank a different bank from Santander?',
      a: 'It is Santander’s digital-only brand. Customers and mystery-shop paths treat it as a distinct onboarding experience. Code the experience separately even when the owner is the same.',
    },
    {
      q: 'Did the cajas disappear?',
      a: 'The old savings-bank map was concentrated. CaixaBank holds a large share of that heritage. Unicaja, Ibercaja, Kutxabank, Abanca and cooperative groups such as Cajamar are surviving regional names, not museum pieces.',
    },
    {
      q: 'What does BioNixus study among Spanish banks?',
      a: 'Nómina and SME interviews in Madrid and Barcelona; digital-cell work that keeps Openbank, ING and EVO apart; and regional sessions that put Kutxabank, Unicaja and Ibercaja back on the first-mention list.',
    },
    {
      q: 'Is the Spanish list a ranking by customer deposits?',
      a: 'Banco de España statistics already publish deposit stocks. This page is a post-caja account map — national groups, surviving regionals, digital brands, resolution and deposit protection. Function, not deposit share, sets the sequence.',
    },
  ],
  regulatorSource: {
    name: 'Banco de España — supervision of credit institutions and national central-bank functions',
    url: 'https://www.bde.es',
    asOf: '2026-09-05',
  },
  sources: [
    'Banco de España public materials on credit-institution supervision and the SSM',
    'FROB resolution-authority materials; FGD deposit-guarantee explanations; ICO programme pages',
    'Published reports of Santander, BBVA, CaixaBank, Sabadell, Bankinter and the named regional groups',
    'BioNixus Spain retail, SME and digital-bank fieldwork in Madrid and Barcelona, 2023–2026',
  ],
  fieldNotes: [
    'Madrid nómina and affluent interviews that keep Bankinter and Openbank apart from Santander branch paths.',
    'Barcelona SME and household sessions that put CaixaBank and Sabadell on the first-mention list before any national advertising reel.',
    'Basque and southern regional probes that test whether Kutxabank, Unicaja and Ibercaja appear without a prompt.',
    'Deposit-trust conversations that ask households to name FGD before any digital-brand stimulus is shown.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
