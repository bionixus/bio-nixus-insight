import type { DirectoryPageInput } from '../../types';

export const healthInsurersEgypt: DirectoryPageInput = {
  entity: 'health-insurers',
  countrySlug: 'egypt',
  metaDescription:
    'Health insurers in Egypt: AXA, MetLife, Allianz, GIG, UHIA, HIO and the FRA — universal rollout versus private medical cover.',
  introLead:
    'Egyptian medical finance is two systems occupying the same hospitals: the Universal Health Insurance Authority is rolling a statutory public scheme governorate by governorate, while AXA, MetLife, Allianz and GIG still write the private policies that pay for Cleopatra, Alameda and cash-lite corporate care in Cairo and Alexandria.',
  introRest:
    'Law 2 of 2018 created UHIA as the public insurer, the Egypt Healthcare Authority as the public provider in live governorates, and a supervision split that leaves private medical policies with the Financial Regulatory Authority. The older Health Insurance Organization still covers employees, students and pensioners in governorates that have not yet gone live. Out-of-pocket spending remains the majority of national health expenditure, which is why private hospitals price in cash and instalments as much as in insurer tariffs. Nextcare and other TPAs run the private networks. Misr Insurance, Suez Canal Insurance and several takaful windows add domestic capacity. This directory is written for a brand or hospital-strategy desk that must know which payer will exist in Port Said versus Zamalek next year, not for a consumer comparing outpatient copays.',
  stats: [
    { value: '2018', label: 'Year Law 2 created UHIA and the new universal-insurance architecture' },
    { value: '6+', label: 'Governorates already live on UHIA, starting with the Canal and selected Upper Egypt / Sinai governorates' },
    { value: '~60%', label: 'Approximate household share of national health spend, which keeps cash private care alive' },
    { value: 'FRA', label: 'Financial Regulatory Authority — supervisor of private medical insurance companies' },
  ],
  channelHeading: 'How UHIA and private medical policies sit side by side',
  channelBody:
    'In a live UHIA governorate the public story is becoming simpler: residents contribute, UHIA pays, the Egypt Healthcare Authority runs many former Ministry hospitals and contracts accredited private facilities. Benefit design is still being learned in practice, and private insurers argue that gaps will remain — which is their commercial reason to stay. In Cairo, Giza and Alexandria, which hold most private-insurance premium, the old world still dominates: HIO for many formal employees, Ministry and university hospitals for the uninsured poor and the complex public case, and AXA, Allianz, MetLife and GIG for corporates and upper-middle families who want Cleopatra or Dar Al Fouad. FRA licences those writers and polices conduct; it does not set UHIA benefits. TPAs build the private provider lists and run pre-authorisation. Currency devaluation blows up both public drug budgets and private claim costs, which is why annual medical-policy renewals have been brutal and why hospitals push cash packages. A brand launch that models “the Egyptian payer” as a single national insurer will be wrong in Heliopolis and increasingly incomplete in Port Said. Model both, and date the UHIA map.',
  companies: [
    {
      name: 'Universal Health Insurance Authority (UHIA)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Statutory public insurer under Law 2/2018; live in phased governorates',
      notes: 'The public payer that will matter nationally once Greater Cairo joins; already the claims desk in Port Said, Luxor, Ismailia, South Sinai, Suez and Aswan.',
    },
    {
      name: 'Health Insurance Organization (HIO)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Legacy employee, student and pensioner scheme in non-UHIA governorates',
      notes: 'Still the public medical card for much of Greater Cairo; do not retire it from a 2026 account map.',
    },
    {
      name: 'Egypt Healthcare Authority',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Public provider in UHIA governorates; contracts accredited private hospitals',
      notes: 'Not an insurer, but the body that receives UHIA money and decides which private facility is in-network in a live governorate.',
    },
    {
      name: 'Financial Regulatory Authority (FRA)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Licensing and conduct supervision of private insurance companies',
      notes: 'The private-market regulator. UHIA does not report to FRA; collapsing the two is a common foreign-team error.',
    },
    {
      name: 'AXA Egypt (life and general medical writers)',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Corporate and individual medical plans, wide private-hospital networks',
      notes: 'The private writer hospital billing offices in Zamalek and New Cairo name first on many corporate cards.',
    },
    {
      name: 'MetLife Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Group life and medical for corporates and affinity books',
      notes: 'Long-standing American book that still sits on multinational employer panels in Cairo and Alexandria.',
    },
    {
      name: 'Allianz Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Health Plus and other medical packages, Nextcare-administered networks',
      notes: 'Private writer whose published Health Plus tiers are a useful window on how Egyptian medical products are still sold as packaged hospital networks.',
    },
    {
      name: 'GIG Egypt (including the life writer)',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Medical and composite products under the Gulf Insurance Group brand',
      notes: 'Kuwaiti-parented writer that competes for the same corporate medical panels as AXA and Allianz.',
    },
    {
      name: 'Misr Insurance',
      hq: 'Cairo',
      type: 'Government',
      focus: 'State-owned composite with a medical line',
      notes: 'Public-sector insurer that still appears on state-linked employee books beside HIO.',
    },
    {
      name: 'Suez Canal Insurance',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Domestic composite including medical',
      notes: 'Egyptian writer used on mid-market corporate panels that do not want a multinational brand.',
    },
    {
      name: 'Nextcare Egypt',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'TPA and network administration for Allianz and other writers',
      notes: 'The administrator many Cleopatra and Alameda cashiers actually call; same regional TPA brand as in the Gulf.',
    },
    {
      name: 'Insurance Federation of Egypt — health committee',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Industry body for private writers discussing UHIA interface',
      notes: 'Not a payer, but the room where AXA, Allianz, MetLife and GIG compare notes on how UHIA will treat complementary products.',
    },
    {
      name: 'Cleopatra Hospitals Group — insurer relations',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Largest private network; tariff and rejection counterpart to private writers',
      notes: 'Included as the provider account that private medical policies are designed around in Greater Cairo.',
    },
    {
      name: 'Alameda Healthcare — insurer relations',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'As-Salam and Dar Al Fouad; premium insured caseload',
      notes: 'The other private group whose tariff negotiations tell you what an enhanced Egyptian medical policy is really worth.',
    },
    {
      name: 'Unified Procurement Authority — public drug spend',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Central buying that sits beside UHIA and HIO hospital pharmacies',
      notes: 'Not an insurer, but the public drug budget that still dwarfs private medical-policy pharmacy spend.',
    },
    {
      name: 'Egyptian Takaful / sharia medical windows',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Takaful medical products for clients who will not use a conventional writer',
      notes: 'Smaller than AXA or Allianz, included because some employer panels specify a sharia window.',
    },
  ],
  categoryBlurbs: {
    local:
      'Misr, Suez Canal and takaful windows, plus the Federation seat where domestic and foreign writers argue about UHIA’s leftover complementary market.',
    mnc:
      'AXA, MetLife and Allianz, which still write the Cairo and Alexandria corporate medical book that private tertiary hospitals depend on.',
    regional:
      'GIG Egypt and Nextcare, the Gulf-parented writer and the TPA that administers a large share of private claims.',
    trade:
      'UHIA, HIO, Egypt Healthcare Authority, FRA and UPA — public insurer, legacy scheme, public provider, private-market supervisor and public drug buyer.',
  },
  growthDrivers: [
    {
      title: 'UHIA’s geographic march',
      desc: 'Each governorate that goes live retires a piece of HIO and creates a new public tariff. The day Greater Cairo joins, private writers will have to redefine complementary cover or lose the mass story.',
    },
    {
      title: 'Cash as the silent majority payer',
      desc: 'Until out-of-pocket falls, private hospitals will keep dual price lists, and a medical policy will remain a minority funding source even in listed groups.',
    },
    {
      title: 'Corporate medical as a talent product',
      desc: 'Multinational and large Egyptian employers still buy AXA, Allianz, MetLife or GIG plans to keep staff out of HIO queues, which is why those networks stay commercially important.',
    },
    {
      title: 'Currency shocks on claim cost',
      desc: 'Imported drugs and devices reprice in pounds faster than premiums can, which forces tighter formularies and more cash top-ups at each renewal.',
    },
  ],
  faq: [
    {
      q: 'Does UHIA already cover Cairo?',
      a: 'Not as a completed roll-out. Live governorates began with Port Said and other Canal, Sinai and Upper Egypt names. Greater Cairo still runs largely on HIO, Ministry, university and private policies. Date your map.',
    },
    {
      q: 'Who supervises AXA or Allianz medical products?',
      a: 'The Financial Regulatory Authority. UHIA is a separate public insurer created by Law 2/2018. They are not the same desk.',
    },
    {
      q: 'Will private medical insurance disappear?',
      a: 'The law imagined a more unified pool. In practice, private writers expect to survive as complementary or faster-access products, especially in Cairo, if UHIA benefits stay thin. That outcome is still being negotiated, not settled.',
    },
    {
      q: 'Which private writers should a hospital or brand team map first?',
      a: 'AXA, Allianz, MetLife and GIG, plus Nextcare as the TPA. Then Misr and the domestic composites. Then UHIA and HIO as the public pair.',
    },
    {
      q: 'What does BioNixus study about Egyptian health insurers?',
      a: 'UHIA versus HIO pathway interviews in Port Said and Cairo; private-network mapping at Cleopatra and Alameda; and broker interviews on how corporates renew AXA, Allianz, MetLife and GIG after devaluation.',
    },
    {
      q: 'Is this a ranking of Egyptian medical insurers?',
      a: 'It is a two-system map. Public statutory bodies and private writers sit in one table because a patient in 2026 can still hit either, depending on governorate and employer. Order is role, not premium rank.',
    },
  ],
  regulatorSource: {
    name: 'Universal Health Insurance Authority (UHIA) — statutory public scheme, with the Financial Regulatory Authority supervising private writers',
    url: 'https://www.uhia.gov.eg',
    asOf: '2026-09-04',
  },
  sources: [
    'Law 2/2018 materials and UHIA roll-out communications',
    'Financial Regulatory Authority and Insurance Federation of Egypt member lists',
    'AXA Egypt, Allianz Egypt, MetLife Egypt and GIG Egypt product pages; Nextcare network materials',
    'BioNixus Egypt payer, TPA and private-hospital billing fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'UHIA beneficiary and hospital-admin interviews in Port Said and Ismailia on what the statutory package actually pays versus cash top-ups.',
    'HIO versus private-policy pathway interviews in Cairo and Giza with patients and billing clerks at university and Cleopatra hospitals.',
    'Broker and HR interviews in New Cairo on renewal pricing after pound moves for AXA, Allianz, MetLife and GIG books.',
    'TPA desk work with Nextcare-facing cashiers at Dar Al Fouad and Nile Badrawi on specialty-drug pre-authorisation.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
