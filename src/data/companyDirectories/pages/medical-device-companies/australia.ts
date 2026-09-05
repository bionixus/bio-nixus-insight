import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesAustralia: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'australia',
  title: 'Australia Medtech: TGA, Cochlear and State Buying (2026)',
  metaDescription:
    'Australia medical device companies: TGA, Cochlear, ResMed, Nanosonics, Sonic Healthcare, state health buying and hospital device distributors.',
  introLead:
    'Australian hospital technology is a state-panel market with a federal ARTG number on the carton: the Therapeutic Goods Administration lists the device, and HealthShare NSW, Victorian Health, SA Health or a Queensland HHS opens the requisition that stocks the ward.',
  introRest:
    'Cochlear, ResMed and Nanosonics are the Australian houses a biomedical engineer and a sleep or CSSD lead already know — implants, sleep-disordered-breathing devices, and automated disinfection. Sonic Healthcare is buyer-adjacent: a pathology network whose analyser and reagent decisions move IVD volume. Siemens, GE, Philips and Medtronic keep Sydney and Melbourne seats that bid state panels and still appoint sponsors for smaller SKUs. BioNixus fields named state panels and named LHDs, not a single “Australia hospital” TAM.',
  stats: [
    { value: 'TGA', label: 'Therapeutic Goods Administration — ARTG listing and sponsor duties' },
    { value: 'States', label: 'HealthShare NSW, Vic, Qld HHS and peers that open the requisition' },
    { value: 'Cochlear / ResMed', label: 'Australian-origin houses whose factories already sit in hospital and homecare briefs' },
    { value: 'MSAC', label: 'Payer-adjacent assessment path that unlocks high-cost device files' },
  ],
  channelHeading: 'ARTG listing, state panel, LHD dock',
  channelBody:
    'A device that will be used in an Australian public hospital needs an ARTG entry held by an Australian sponsor, and a place on a state procurement panel — HealthShare NSW, Victorian Health Building Authority and HealthShare Vic vehicles, SA Health, WA Health, or a Queensland Hospital and Health Service — that the local health district will raise against. That is a different commercial object from a CE mark a Singapore hub waves at a Sydney biomedical engineer. Capital equipment is specified by the clinical stream and purchased by the state panel or the LHD/HHS when the delegation allows. NSW panels do not stock a Victorian hospital; a Queensland HHS is not HealthShare NSW. Consumables and implants ride the same panels plus specialist distributors who hold inventory in Australian warehouses. Cochlear’s implant book is a named-clinic and surgeon-preference story as much as a panel story. ResMed’s sleep and ventilation book sits in homecare and hospital respiratory units. Nanosonics’ automated disinfection installed base is a CSSD fact in public and private theatres. Sonic Healthcare, as a pathology operator, is the IVD buyer whose central decisions move reagent volume — buyer-adjacent, not a device manufacturer. Private groups (Ramsay, Healthscope, St Vincent’s) buy on committee cycles. MSAC assessments sit payer-adjacent on high-cost files. BioNixus reconstructs the named ARTG number, the named state panel and the named LHD dock before an Australia volume figure is signed.',
  companies: [
    {
      name: 'TGA (Therapeutic Goods Administration)',
      hq: 'Canberra',
      type: 'Government',
      focus: 'ARTG listing, sponsor licensing and post-market vigilance',
      notes: 'The Canberra file an Australian sponsor must hold before a state-panel store will accept the SKU onto a tender shortlist.',
    },
    {
      name: 'HealthShare NSW / NSW Health procurement',
      hq: 'Sydney',
      type: 'Government',
      focus: 'New South Wales public-hospital panels and logistics',
      notes: 'The densest English-speaking state door. A HealthShare NSW award does not stock a Victorian or Queensland hospital.',
    },
    {
      name: 'Victorian and Queensland state health procurement',
      hq: 'Melbourne / Brisbane',
      type: 'Government',
      focus: 'Vic panels and Queensland HHS buying',
      notes: 'Two further public doors. BioNixus walks Melbourne and Brisbane as their own clocks, never as footnotes to Sydney.',
    },
    {
      name: 'Cochlear',
      hq: 'Sydney',
      type: 'Local',
      focus: 'Cochlear implants, bone-conduction and related hearing devices',
      notes: 'Sydney implant house whose clinic and surgeon-preference path sits beside, not inside, a generic state-panel consumable story.',
    },
    {
      name: 'ResMed',
      hq: 'Sydney / San Diego dual',
      type: 'Local',
      focus: 'Sleep-disordered-breathing devices, masks and ventilation',
      notes: 'Australian-origin sleep and ventilation book that hospital respiratory units and homecare providers already treat as a default name.',
    },
    {
      name: 'Nanosonics',
      hq: 'Sydney',
      type: 'Local',
      focus: 'Automated ultrasound-probe disinfection systems',
      notes: 'CSSD installed base in public and private theatres; replacement and consumable cycles follow infection-control audits, not a one-time capital invoice.',
    },
    {
      name: 'Sonic Healthcare (buyer-adjacent)',
      hq: 'Sydney',
      type: 'Operator',
      focus: 'Pathology network whose analyser and reagent decisions move IVD volume',
      notes: 'Not a device manufacturer. Central pathology purchasing is the IVD account a launch has to win after the ARTG number exists.',
    },
    {
      name: 'Siemens Healthineers Australia',
      hq: 'Sydney / Melbourne',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Teaching-hospital imaging rooms; state panels still score a service van the Sydney seat must actually staff in regional LHDs.',
    },
    {
      name: 'GE HealthCare Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens and Philips inside the same state-panel imaging rooms; LHD delegations are a second clock.',
    },
    {
      name: 'Medtronic Australia',
      hq: 'Sydney / Melbourne',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting centres; many SKUs still move through a sponsor-distributor who holds the ARTG and the hospital vendor number.',
    },
    {
      name: 'Australian device sponsors and hospital distributors',
      hq: 'Sydney / Melbourne / Brisbane',
      type: 'Distributor',
      focus: 'ARTG sponsors, inventory and LHD last-mile for brands without a full field force',
      notes: 'The vendor number a regional NSW or Queensland dock actually pays when the multinational seat does not invoice the ward.',
    },
    {
      name: 'Ramsay / Healthscope / St Vincent’s — private-group purchasing',
      hq: 'Sydney / Melbourne',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable committees',
      notes: 'Faster cycles than a state panel on some lines. A third door beside HealthShare NSW and the Queensland HHS.',
    },
    {
      name: 'Philips Australia (Health Systems)',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in public and private rooms; state panels and private committees are different clocks.',
    },
    {
      name: 'SA Health / WA Health procurement',
      hq: 'Adelaide / Perth',
      type: 'Government',
      focus: 'Smaller-state public buying that Sydney-only samples miss',
      notes: 'Further public doors. A NSW-and-Victoria-only brief is not Australia, and BioNixus will not file it as Australia.',
    },
    {
      name: 'MSAC (Medical Services Advisory Committee)',
      hq: 'Canberra',
      type: 'Government',
      focus: 'Payer-adjacent assessments that unlock high-cost device files',
      notes: 'Does not raise a requisition. A favourable assessment is often what lets a state reopen a closed capital line.',
    },
    {
      name: 'Johnson & Johnson MedTech Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Clinical-specialist plus sponsor model; a HealthShare NSW tray path is not a Ramsay tray path.',
    },
  ],
  categoryBlurbs: {
    local:
      'Cochlear, ResMed and Nanosonics — Australian-origin houses already on clinic, respiratory and CSSD lists — plus Sonic as the pathology buyer-adjacent account.',
    mnc:
      'Sydney and Melbourne multinational seats that win teaching-hospital rooms and still share regional invoices with ARTG sponsors.',
    regional:
      'Sponsors and distributors who hold the ARTG and the LHD vendor number outside the Sydney–Melbourne corridor.',
    trade:
      'TGA as the ARTG gate, state panels as the requisition, MSAC as the payer-adjacent unlock.',
  },
  growthDrivers: [
    {
      title: 'State-panel fragmentation',
      desc: 'HealthShare NSW, Victorian vehicles and Queensland HHS open on different calendars. A Sydney award that never reached Brisbane is a failed national launch.',
    },
    {
      title: 'ARTG sponsor hygiene',
      desc: 'LHD stores now ask for the ARTG number on the carton; a Singapore-hub SKU without an Australian sponsor is a failed delivery.',
    },
    {
      title: 'MSAC timing on high-cost files',
      desc: 'Implant and capital SKUs stall when the assessment lags the panel; BioNixus dates MSAC against the state envelope, not against a brochure.',
    },
    {
      title: 'Private-group committee speed',
      desc: 'Ramsay, Healthscope and St Vincent’s will trial a SKU the public panel has not opened; mixing those clocks is the briefing error.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices listed in Australia?',
      a: 'The TGA enters them on the ARTG against an Australian sponsor. Classification drives the file. A state-panel store will ask for that number on the dock.',
    },
    {
      q: 'Who buys devices for Australian public hospitals?',
      a: 'State procurement vehicles — HealthShare NSW, Victorian health purchasing, Queensland HHS, SA Health, WA Health — plus LHD delegations those vehicles allow.',
    },
    {
      q: 'Which Australian manufacturers belong on a brief?',
      a: 'Cochlear for hearing implants, ResMed for sleep and ventilation, Nanosonics for automated disinfection. Sonic Healthcare is the pathology buyer, not a manufacturer.',
    },
    {
      q: 'Does a NSW panel stock the whole country?',
      a: 'No. Each state is its own buyer. A HealthShare NSW award does not fill a Victorian hospital or a Queensland HHS.',
    },
    {
      q: 'What does BioNixus study on Australian device accounts?',
      a: 'ARTG-to-carton traces, named state-panel reconstructions, LHD versus private-group interviews, and Sonic pathology-buyer walks on IVD files.',
    },
    {
      q: 'Is this an Australian market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus public and private hospital fieldwork; sequence is by role, not by revenue.',
    },
  ],
  regulatorSource: {
    name: 'TGA — Therapeutic Goods Administration, ARTG medical device listings',
    url: 'https://www.tga.gov.au',
    asOf: '2026-09-05',
  },
  sources: [
    'TGA ARTG and sponsor guidance, consulted 2026',
    'HealthShare NSW, Victorian health purchasing and Queensland HHS notices',
    'Cochlear, ResMed, Nanosonics and Sonic Healthcare published descriptions',
    'BioNixus Australia state-panel and private-hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'HealthShare NSW, Victorian and Queensland HHS panel reconstructions treated as three buyers, never as one federal warehouse.',
    'ARTG-number traces against the carton an LHD store accepts.',
    'Cochlear clinic and ResMed homecare interviews filed beside, not inside, state-panel consumable walks.',
    'Sonic Healthcare pathology-buyer interviews on IVD files so the operator is not confused with a manufacturer.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
