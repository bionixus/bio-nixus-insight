import type { DirectoryPageInput } from '../../types';

export const healthInsurersKuwait: DirectoryPageInput = {
  entity: 'health-insurers',
  countrySlug: 'kuwait',
  metaDescription:
    'Health insurers in Kuwait: GIG, Wethaq, Gulf Insurance, Dhaman, AFYA, MOH and the IRU — public payer, expats and takaful.',
  introLead:
    'Kuwait’s medical-finance map is a public core with two interrupted experiments around it: citizens still receive Ministry care at no charge, AFYA’s retiree private cover was suspended in 2024, and Dhaman is building the expatriate insurer-provider that New Kuwait 2035 promised.',
  introRest:
    'Gulf Insurance Group, headquartered in Kuwait and listed on Boursa, is the regional composite that also owns medical books from Cairo to Dubai; its home-market writer and sister companies (including the former AXA franchise in several Gulf states) dominate commercial group medical. Wethaq Takaful, Al Ahleia, Kuwait Insurance Company, Warba and first-line takaful windows sell employer and family products that keep Dar Al Shifa, Al Salam, New Mowasat and Royale Hayat busy. The Insurance Regulatory Unit licences those writers from Kamco Tower. The Ministry of Health remains the true payer for citizens and, until Dhaman’s hospitals take the load, for many expatriates who still use public wards against an annual fee. This directory is blunt about AFYA’s suspension and about Dhaman’s unfinished build so a brand team does not brief a retiree private market that is currently off, or an expatriate system that is only partly on.',
  stats: [
    { value: '2014', label: 'Year Law 114 created AFYA retiree cover — suspended by Ministry action and decree in 2024' },
    { value: '2014', label: 'Year Dhaman was established as the PPP insurer-provider for private-sector expatriates' },
    { value: '~70%', label: 'Expatriate share of the population, the commercial reason group medical and Dhaman exist' },
    { value: 'IRU', label: 'Insurance Regulatory Unit — licensing authority for commercial writers (iru.gov.kw)' },
  ],
  channelHeading: 'How the state, Dhaman and commercial policies split Kuwait’s risk',
  channelBody:
    'Start with citizenship. A Kuwaiti who is not on a leftover AFYA card uses Ministry hospitals and polyclinics for free; Central Medical Stores buys the drugs. AFYA tried to give retirees a private-insurance overlay into private hospitals; the Ministry terminated the operator contract in September 2024 and a decree paused the law for a year, so that overlay is not a 2026 planning assumption. An expatriate has three doors: the Ministry (annual fee, copays, crowded wards), a commercial group medical policy from GIG, Wethaq or a peer that opens Dar Al Shifa and Al Salam, and — as Dhaman’s Jahra, Ahmadi and Hawally hospitals and primary centres come online — the PPP scheme that was designed to take private-sector foreign workers out of MOH facilities. IRU licences the commercial writers and the takaful firms; it does not run AFYA or Dhaman. Employer medical is still the volume that private hospitals live on. A specialty-drug launch therefore has a Ministry CMS file for citizens, a GIG/Wethaq/TPA file for insured expatriates, and a Dhaman formulary file that will matter more each year the PPP beds open. Do not collapse those into one “Kuwait payer.”',
  companies: [
    {
      name: 'Gulf Insurance Group (GIG Kuwait)',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Home-market composite and parent of regional medical writers',
      notes: 'Boursa-listed group that is both a Kuwaiti medical writer and the owner of GIG books across MENA; the first commercial payer conversation.',
    },
    {
      name: 'Wethaq Takaful Insurance',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Takaful medical and general products',
      notes: 'Sharia window that employer panels use when a conventional GIG product will not clear the board.',
    },
    {
      name: 'Al Ahleia Insurance',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Composite including group medical',
      notes: 'Long-established Kuwaiti writer that still sits on industrial and trading-house panels.',
    },
    {
      name: 'Kuwait Insurance Company',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Composite medical and general lines',
      notes: 'Domestic writer whose medical cards appear at mid-market private hospitals alongside GIG.',
    },
    {
      name: 'Warba Insurance',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Composite products including medical',
      notes: 'Further listed capacity for SME and government-linked employee books.',
    },
    {
      name: 'First Takaful / peer takaful windows',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Sharia-compliant medical products',
      notes: 'Smaller takaful capacity that still matters on panels that specify a fully Islamic structure.',
    },
    {
      name: 'AXA legacy book in Kuwait (now inside GIG)',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Former AXA medical portfolio migrated under GIG ownership',
      notes: 'Hospital staff still say AXA; the legal writer is now the GIG franchise. Check the card, not the corridor name.',
    },
    {
      name: 'Dhaman (Health Assurance Hospitals Company)',
      hq: 'Kuwait City',
      type: 'Operator',
      focus: 'PPP insurer-provider for private-sector expatriates; hospitals plus insurance',
      notes: 'KIA/PIFSS-backed PPP that is the structural change; its formulary and primary-care network will become a third buyer as beds open.',
    },
    {
      name: 'AFYA retiree scheme (suspended)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Law 114/2014 private cover for retirees — contract ended and law paused in 2024',
      notes: 'Included so teams do not brief a live retiree private market. Citizens in that cohort are back on Ministry services unless a successor is launched.',
    },
    {
      name: 'Ministry of Health — public payer and provider',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Free citizen care, fee-based expatriate access, Central Medical Stores',
      notes: 'The dominant payer by lives and by drug spend. No commercial writer matches it on citizen volume.',
    },
    {
      name: 'Insurance Regulatory Unit (IRU)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Licensing and conduct of commercial insurers and takaful firms',
      notes: 'Kamco Tower regulator at iru.gov.kw. Supervises GIG and peers; does not supervise MOH provision or the AFYA political file.',
    },
    {
      name: 'Public Institution for Social Security (PIFSS)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Pension institution and Dhaman shareholder',
      notes: 'Not a medical writer, but a Dhaman owner; relevant when the brief is who stands behind the expatriate PPP.',
    },
    {
      name: 'Kuwait Investment Authority — Dhaman stake',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Sovereign shareholder in the expatriate insurer-provider',
      notes: 'Explains why Dhaman is a state project, not a private start-up hospital company.',
    },
    {
      name: 'Dar Al Shifa — insurer relations',
      hq: 'Hawally',
      type: 'Operator',
      focus: 'Largest private hospital; commercial-policy volume',
      notes: 'The provider account that shows how GIG, Wethaq and TPA rules actually pay in Hawally.',
    },
    {
      name: 'Al Salam International Hospital — insurer relations',
      hq: 'Bneid Al Gar',
      type: 'Operator',
      focus: 'Listed private hospital; insured expatriate and Kuwaiti cash mix',
      notes: 'Second private account for mapping commercial medical tariffs.',
    },
    {
      name: 'Nextcare / regional TPA desks in Kuwait',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Claims administration for some group medical books',
      notes: 'Where a TPA sits on the card, the hospital pre-auth fight is with the administrator, not with GIG’s brand team.',
    },
  ],
  categoryBlurbs: {
    local:
      'Kuwaiti composites and takaful windows — Wethaq, Al Ahleia, Kuwait Insurance, Warba — that write employer medical beside the GIG home book.',
    mnc:
      'The AXA name that still appears on cards and in corridors, now legally inside GIG; few standalone foreign medical writers remain.',
    regional:
      'GIG as both home writer and MENA parent, plus regional TPAs that adjudicate some Kuwaiti group books.',
    trade:
      'MOH as public payer, IRU as commercial regulator, Dhaman as PPP insurer-provider, AFYA as the suspended retiree overlay, and the private hospitals that collect commercial claims.',
  },
  growthDrivers: [
    {
      title: 'Dhaman’s unfinished expatriate shift',
      desc: 'Each primary centre and hospital that opens pulls insured foreign workers out of MOH wards and creates a new formulary a brand must map.',
    },
    {
      title: 'AFYA’s pause returning retirees to MOH',
      desc: 'The 2024 suspension sent an older, higher-need cohort back onto public books, which raises Central Medical Stores specialty volume and removes a private-hospital payer.',
    },
    {
      title: 'Employer medical as private-hospital oxygen',
      desc: 'Until Dhaman is complete, Dar Al Shifa and peers still live on GIG, Wethaq and sister cards; a network exclusion is an occupancy event.',
    },
    {
      title: 'IRU professionalising the commercial market',
      desc: 'A dedicated insurance unit, rather than an older ministry desk, is slowly standardising conduct — useful for foreign teams used to CHI- or DHA-style rulebooks.',
    },
  ],
  faq: [
    {
      q: 'Do Kuwaiti citizens need private health insurance?',
      a: 'Not as a legal default. Ministry care is free. Some hold commercial or leftover AFYA-style cards for speed and private rooms. AFYA itself is suspended; do not brief it as live.',
    },
    {
      q: 'What is Dhaman?',
      a: 'A PPP insurer-provider, with KIA and PIFSS among the owners, built to cover private-sector expatriates through its own primary centres and hospitals. It is not a Boursa medical writer like GIG.',
    },
    {
      q: 'Who licences GIG and Wethaq?',
      a: 'The Insurance Regulatory Unit (iru.gov.kw). MOH licences facilities and runs public care. Keep the two desks separate in a launch plan.',
    },
    {
      q: 'Is AXA still a Kuwaiti writer?',
      a: 'The brand lingered after GIG took the Gulf franchise. Treat current cards as a GIG legal entity unless the policy schedule still names AXA.',
    },
    {
      q: 'What does BioNixus study about Kuwaiti health insurers?',
      a: 'MOH-versus-commercial pathway interviews in Kuwait City and Hawally; Dhaman readiness discussions; and billing interviews at Dar Al Shifa and Al Salam on GIG, Wethaq and TPA rules.',
    },
    {
      q: 'Are Kuwait’s health insurers listed from largest to smallest?',
      a: 'They are not. Public payer, suspended scheme, PPP, commercial writers and hospitals sit together so a 2026 plan can see which door is open. Role, not premium rank, sets the order.',
    },
  ],
  regulatorSource: {
    name: 'Insurance Regulatory Unit (IRU) — licensed insurers and takaful firms, with the Ministry of Health as public payer',
    url: 'https://www.iru.gov.kw',
    asOf: '2026-09-04',
  },
  sources: [
    'Insurance Regulatory Unit licensed-entity materials (iru.gov.kw)',
    'Ministry of Health and KUNA statements on the 2024 AFYA suspension; Decree-Law 105/2024 reporting',
    'Dhaman corporate disclosures; Boursa filings of Gulf Insurance Group and domestic writers',
    'BioNixus Kuwait payer, hospital-billing and Dhaman fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Ministry-versus-private pathway interviews with clinicians and billing clerks at Mubarak Al-Kabeer and Dar Al Shifa.',
    'Employer-broker interviews in Kuwait City on how group medical panels mix GIG, Wethaq and Al Ahleia after the AXA brand faded.',
    'Dhaman readiness discussions in Jahra and Ahmadi on which expatriate cohorts have actually moved out of MOH wards.',
    'Retiree-care interviews after the AFYA suspension, tracking whether specialty volume returned to Central Medical Stores or stayed in private hospitals as cash.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
