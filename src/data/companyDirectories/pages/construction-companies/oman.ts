import type { DirectoryPageInput } from '../../types';

export const constructionCompaniesOman: DirectoryPageInput = {
  entity: 'construction-companies',
  countrySlug: 'oman',
  metaDescription:
    'Oman contractors: Galfar, Bahwan Engineering, Al-Hassan, CCC, ASYAD project houses — Tender Board grades, Duqm and Sohar packages.',
  introLead:
    'A warehouse in Sohar Freezone or a jetty package at Duqm is awarded after the bidder shows a Tender Board classification that matches the rial value, not after a Muttrah hoarding: the e-tendering portal, the Ministry of Commerce register, and the named port offtaker sit on three desks.',
  introRest:
    'Galfar Engineering & Contracting is the listed local book BioNixus hears first from owners who want an Omani civil house rather than a visiting Gulf joint venture. Bahwan Engineering and Al-Hassan Engineering take MEP-heavy and mid-size civil files that Galfar is too large or too busy for. CCC’s Oman vehicle still appears on heavy civil and marine packages. ASYAD and the port companies at Sohar and Salalah are offtakers: they let logistics and marine packages, they do not pour. The Secretariat General of the Tender Board runs the e-tendering portal that public files still clear. This page maps those houses, the logistics offtakers and the Tender Board desk. It is not a list of every wadi-road subcontractor in Dhofar.',
  stats: [
    { value: 'Tender Board class', label: 'Secretariat General grades on the e-tendering portal that still gate most ministry civil files' },
    { value: 'Sohar / Duqm / Salalah', label: 'Three port theatres a contractor must staff separately for camps and plant' },
    { value: 'ASYAD offtake', label: 'Group that lets logistics and marine packages without being the trade contractor' },
    { value: 'MOCIIP register', label: 'Commercial licence that sits beside Tender Board class and does not replace it' },
  ],
  channelHeading: 'How a Tender Board class becomes a Muscat or Duqm award',
  channelBody:
    'Public contractor classification sits with the Secretariat General of the Tender Board. Firms register on the e-tendering portal, upload audited accounts and plant, and receive a class that caps bid value. The commercial licence sits with the Ministry of Commerce, Industry and Investment Promotion; a free-zone plot at Sohar or Duqm adds a third no-objection from the zone authority. PDO and the energy companies run their own prequalification for oil-and-gas civil that treats Tender Board class as background, not as a pass. Payment on ministry files follows a Ministry of Finance cycle; payment on ASYAD or port files follows the company’s milestone certificate. Materials clear Sohar, Sultan Qaboos Port or Salalah, then move across the Hajar or down the coast under a named haulier. Labour camps need Ministry of Labour approvals plus a municipality permit. BioNixus therefore starts an Oman contractor study with the Tender Board class, the named offtaker (ministry, ASYAD, PDO or free zone), and the port of entry.',
  companies: [
    {
      name: 'Galfar Engineering & Contracting',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Civil, roads, buildings and listed contracting book',
      notes: 'The Muscat house ministries and private owners name first; Duqm and Dhofar still need a local camp this book does not always keep hot.',
    },
    {
      name: 'Bahwan Engineering Company',
      hq: 'Muscat',
      type: 'Local',
      focus: 'MEP, buildings and selected civil',
      notes: 'Family engineering house that hospital and commercial owners call when the fight is services rather than a highway embankment.',
    },
    {
      name: 'Al-Hassan Engineering',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Civil, buildings and mid-size packages',
      notes: 'The mid-size local book used when Galfar looks over-scaled for a private warehouse or a ministry school.',
    },
    {
      name: 'Consolidated Contractors Company (CCC) — Oman',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Heavy civil, marine and selected industrial',
      notes: 'Levant-parent vehicle invited when the file is a jetty or heavy civil that local mid-size houses do not staff alone.',
    },
    {
      name: 'ASYAD Group (project offtaker)',
      hq: 'Muscat',
      type: 'Operator',
      focus: 'Logistics-group packages at ports, yards and hinterland',
      notes: 'Offtaker, not a pourer: ASYAD lets the warehouse or jetty package; Galfar, CCC or a named house executes.',
    },
    {
      name: 'SOHAR Port and Freezone (capital projects)',
      hq: 'Sohar',
      type: 'Operator',
      focus: 'Northern port and industrial-zone offtake',
      notes: 'Sohar-specific buyer whose invitations a Muscat-only camp cannot answer without a Batinah mobilisation.',
    },
    {
      name: 'Port of Salalah (capital projects)',
      hq: 'Salalah',
      type: 'Operator',
      focus: 'Dhofar port packages and related civil',
      notes: 'Southern offtaker; treating it as a Sohar twin will miss the Dhofar labour and haul reality.',
    },
    {
      name: 'Secretariat General of the Tender Board',
      hq: 'Muscat',
      type: 'Government',
      focus: 'E-tendering portal and contractor classification',
      notes: 'The class certificate ministry files still ask to see; a brochure without the portal registration does not open the envelope.',
    },
    {
      name: 'Petroleum Development Oman (civil offtake)',
      hq: 'Muscat / interior fields',
      type: 'Operator',
      focus: 'Upstream civil and field infrastructure packages',
      notes: 'Energy buyer whose prequalification does not copy the Tender Board school list; Galfar and CCC are not automatic winners here.',
    },
    {
      name: 'Oman Tender Board registered mid-tier houses',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Class-appropriate ministry schools and local roads',
      notes: 'The long tail of classified firms that win the files Galfar no longer prices; sample them when the brief is a wilayat school.',
    },
    {
      name: 'Carillion Alawi residual / successor vehicles',
      hq: 'Muscat',
      type: 'Local',
      focus: 'Remaining building packages under successor licences',
      notes: 'Historic name owners still say; confirm the live legal entity and Tender Board class before treating it as one book.',
    },
    {
      name: 'Special Economic Zone Authority at Duqm (offtake)',
      hq: 'Duqm',
      type: 'Government',
      focus: 'SEZAD land and industrial packages',
      notes: 'Duqm offtaker sitting beside ASYAD; a Muscat estimator who has never staffed the coast will lose the invitation.',
    },
    {
      name: 'Ministry of Commerce, Industry and Investment Promotion',
      hq: 'Muscat',
      type: 'Government',
      focus: 'Commercial licences for contractor operating companies',
      notes: 'Trade-licence desk; Tender Board class is a second stamp and free-zone NOCs are a third.',
    },
    {
      name: 'Kharafi / regional Gulf vehicles in Oman',
      hq: 'Muscat',
      type: 'Regional',
      focus: 'Selected large remaining packages',
      notes: 'Visiting Gulf books that appear on a handful of heavy files; they do not replace Galfar on the ministry school list.',
    },
  ],
  categoryBlurbs: {
    local:
      'Galfar, Bahwan Engineering, Al-Hassan and the Tender Board mid-tier — Muscat-rooted houses that still take most ministry and private building awards.',
    mnc:
      'Foreign EPCs appear on Duqm and energy packages through joint ventures. They are not the default on a wilayat school or a Muttrah renovation.',
    regional:
      'CCC Oman and visiting Gulf vehicles bring heavy-civil capacity. ASYAD and the ports are offtakers on the same map, not regional contractors.',
    trade:
      'Tender Board as classifier, MOCIIP as the commercial-licence desk, ASYAD, Sohar, Salalah, SEZAD and PDO as the offtakers that let the live packages.',
  },
  growthDrivers: [
    {
      title: 'Three-port mobilisation',
      desc: 'Sohar, Duqm and Salalah do not share a camp. A “national contractor” claim that only staffs Muscat fails the second and third theatres.',
    },
    {
      title: 'Tender Board portal as the public gate',
      desc: 'Without the e-tendering class the ministry invitation is decorative. Launch timing for a new joint venture is a portal queue as much as a sales visit.',
    },
    {
      title: 'ASYAD and SEZAD as industrial offtake',
      desc: 'Logistics and free-zone packages now move more plant than many municipal files. Sampling only ministry schools under-states where cranes went.',
    },
    {
      title: 'PDO civil as a fourth buyer',
      desc: 'Interior field civil does not copy the Tender Board school list. Galfar’s energy camp and a Muscat building crew are different P&Ls.',
    },
  ],
  sections: [
    {
      heading: 'Muscat buildings versus coast industrial',
      paragraphs: [
        'Capital awards are ministries, hospitals and commercial plots that Bahwan and Al-Hassan can staff. Coast awards at Sohar and Duqm are warehouses, jetties and industrial halls that need a second camp and often CCC or a Galfar heavy crew. Those two seats cannot share one questionnaire.',
        'Dhofar adds a seasonal labour and haul problem that a Batinah method statement does not mention. Port of Salalah packages fail when the estimator priced them like Sohar.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who classifies public contractors in Oman?',
      a: 'The Secretariat General of the Tender Board, through the e-tendering portal. The Ministry of Commerce issues the trade licence. Free zones and PDO add their own gates.',
    },
    {
      q: 'Is ASYAD a construction company?',
      a: 'ASYAD is a logistics-group offtaker. It lets port and hinterland packages. Galfar, CCC or a named house pours. Do not list ASYAD as the trade contractor.',
    },
    {
      q: 'Which local houses should a building brief name first?',
      a: 'Galfar for larger civil and listed capacity; Bahwan Engineering for MEP-heavy buildings; Al-Hassan for mid-size private and ministry files.',
    },
    {
      q: 'Can one camp cover Sohar and Duqm?',
      a: 'Not as a serious mobilisation. The coast gap and labour rules make them separate theatres. A Muscat-only vehicle that promises both is promising a weekend van.',
    },
    {
      q: 'What fieldwork does BioNixus run among Oman contractors?',
      a: 'Tender Board class checks on the portal; procurement interviews with ASYAD, SEZAD and ministry clients; and gate walks at Sohar, Duqm and Salalah.',
    },
    {
      q: 'Is row order a ranking by awarded rials?',
      a: 'No. Sequence is a fieldwork map of classified houses and the port offtakers. Nothing claims one firm out-awards another.',
    },
  ],
  regulatorSource: {
    name: 'Secretariat General of the Tender Board — e-tendering portal and contractor classification',
    url: 'https://etendering.tenderboard.gov.om',
    asOf: '2026-09-05',
  },
  sources: [
    'Oman Tender Board e-tendering and classification pages, consulted 2026',
    'ASYAD, SOHAR Port and Port of Salalah project communications',
    'Capability and exchange notes for Galfar, Bahwan Engineering, Al-Hassan Engineering and CCC Oman',
    'BioNixus Oman contractor, port-offtaker and Tender Board fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Tender Board portal walkthroughs that record the class a house claims versus the class the last ministry letter printed.',
    'Sohar and Duqm gate walks in the same month to catch two-theatre mobilisation gaps.',
    'ASYAD and SEZAD package-manager interviews on why a Muscat building résumé lost a warehouse file.',
    'PDO civil prequalification conversations that separate energy camps from ministry school crews.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
