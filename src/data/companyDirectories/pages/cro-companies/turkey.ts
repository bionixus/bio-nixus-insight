import type { DirectoryPageInput } from '../../types';

export const croCompaniesTurkey: DirectoryPageInput = {
  entity: 'cro-companies',
  countrySlug: 'turkey',
  metaDescription:
    'CROs in Turkey: IQVIA, Monitor CRO, Omega, Klinar, Koç, Hacettepe and TİTCK — service scope, hospital sites and approvals.',
  introLead:
    'Turkey is the clinical-research bridge between Europe and the Middle East: a single agency, TİTCK, authorises studies on an electronic file, SGK-insured city hospitals and university campuses can enrol at European scale, and a deep bench of Istanbul-based local CROs grew up beside the global firms.',
  introRest:
    'IQVIA Turkey remains the country manager most multinational sponsors keep on the framework. Monitor CRO, founded in Istanbul in 1999, is the local full-service house investigators name without being prompted. Omega, Klinar, Vital and Trio add further Turkish-owned monitoring and regulatory shops. ICON, PPD, Fortrea and Syneos run Turkish sites inside global books. The academic engines are Hacettepe in Ankara, Koç University Hospital and Istanbul University / Cerrahpaşa in Istanbul, and Erciyes in Kayseri for vaccine and early work. Ministry city hospitals — Başakşehir Çam ve Sakura among them — now appear on large Phase III lists because of bed counts. Acıbadem and MLP Care research offices give a private-chain alternative. TİTCK’s clinical-trials department and the hospital ethics committees are the two clocks. This directory groups global firms, Turkish CROs, academic and city-hospital sites and the agency so a sponsor can see who files, who monitors and who enrols.',
  stats: [
    { value: '1', label: 'National agency that authorises drug and device trials (TİTCK clinical trials department)' },
    { value: '1999', label: 'Year Monitor CRO opened in Istanbul, still the local full-service name PIs quote' },
    { value: '~99%', label: 'Population under SGK, which is why city-hospital and university sites can enrol at scale' },
    { value: '3', label: 'Cities that dominate industry feasibility: Istanbul, Ankara and Izmir, with Kayseri for vaccine/early work' },
  ],
  channelHeading: 'How TİTCK, ethics boards and hospital sites run a Turkish study',
  channelBody:
    'The electronic TİTCK file is the national gate. A sponsor or its CRO — often Monitor, Omega or a global country office — loads the protocol, investigational-product dossier, insurance and site list. Each hospital ethics committee must also clear the work; university IRBs at Hacettepe, Istanbul University and Koç are used to industry language, while some city-hospital boards are still learning the contract. A foreign sponsor without a Turkish entity appoints a legal representative, which is everyday business for the local CRO bench. Enrolment strategy is a mix: university hospitals for specialist investigators, city hospitals for volume, private chains for insured specialty and medical-tourism populations. Central-lab samples move to Europe or to Turkish laboratories that TİTCK has seen. KVKK data rules apply to any electronic data capture that holds resident information. Start-up that treats Turkey as “like Poland but cheaper” underestimates ethics-committee variance and overestimates how fast a city-hospital contract office signs. Start-up that treats it as a Gulf market underestimates how many trained CRAs and Phase III-experienced investigators already live in Şişli, Çankaya and Bornova.',
  companies: [
    {
      name: 'IQVIA Turkey',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Full-service country management, Phase II–IV and RWE',
      notes: 'The global framework desk most multinational medical directors keep for Turkish sites.',
    },
    {
      name: 'Monitor CRO',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Full-service operations, regulatory, data management, pharmacovigilance',
      notes: 'Şişli-based house open since 1999; the local full-service name principal investigators still give unprompted.',
    },
    {
      name: 'Omega CRO',
      hq: 'Ankara',
      type: 'Local',
      focus: 'Clinical operations and regulatory work for domestic and international sponsors',
      notes: 'Ankara-rooted Turkish CRO that is useful when the file and the ethics committees sit in the capital.',
    },
    {
      name: 'Klinar CRO',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Monitoring, project management and TİTCK submissions',
      notes: 'Istanbul local shop that competes with Monitor on mid-sized industry and domestic-sponsor work.',
    },
    {
      name: 'Vital CRO',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Clinical monitoring and site management',
      notes: 'Further Turkish-owned bench capacity for sponsors who do not want a global framework on a local protocol.',
    },
    {
      name: 'ICON plc — Turkey',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Global Phase III delivery and site monitoring',
      notes: 'Brings Turkish sites into worldwide oncology and specialty programmes alongside the IQVIA and PPD desks.',
    },
    {
      name: 'PPD, part of Thermo Fisher Scientific — Turkey',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Phase II–III execution and central-lab coordination',
      notes: 'Thermo Fisher lab routes are the practical reason some sponsors pick PPD for Turkish sample logistics.',
    },
    {
      name: 'Fortrea Turkey',
      hq: 'Istanbul',
      type: 'MNC',
      focus: 'Regional clinical development coverage',
      notes: 'Continues the former Labcorp Drug Development book on Turkish sites.',
    },
    {
      name: 'Turkish Medicines and Medical Devices Agency (TİTCK) — clinical trials',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Electronic trial authorisation, GCP inspection, registry',
      notes: 'The national door. Every interventional drug or device study in this table passes its clinical-trials department.',
    },
    {
      name: 'Hacettepe University Hospitals — research',
      hq: 'Ankara',
      type: 'Operator',
      focus: 'Flagship academic tertiary site and ethics committee',
      notes: 'Ankara’s reference university hospital for industry protocols across oncology, rare disease and internal medicine.',
    },
    {
      name: 'Koç University Hospital — research',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Academic-private hybrid site with a professionalised research office',
      notes: 'Istanbul site that sponsors use when they want university investigators and private-hospital contracting habits in one place.',
    },
    {
      name: 'Istanbul University / Cerrahpaşa — research',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Large public academic departments and busy ethics boards',
      notes: 'The historic Istanbul university hospitals that still enrol high volumes on infectious disease, internal medicine and oncology.',
    },
    {
      name: 'Erciyes University — IKUM / vaccine clinical units',
      hq: 'Kayseri',
      type: 'Operator',
      focus: 'Early-phase and vaccine studies, GCP centre',
      notes: 'Kayseri unit that ran TURKOVAC early work; the early-phase and vaccine counterpart to the Istanbul/Ankara late-phase engine.',
    },
    {
      name: 'Başakşehir Çam ve Sakura City Hospital — research',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Ministry city-hospital volume site',
      notes: 'PPP city hospital that appears on large Phase III lists because of specialty bed counts, not because of a boutique research brand.',
    },
    {
      name: 'Acıbadem Healthcare Group — research',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Private-chain research offices across multiple hospitals',
      notes: 'IHH-owned group whose research office is the private-sector alternative when the protocol needs insured specialty patients.',
    },
    {
      name: 'MLP Care (Medical Park / Liv) — research',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Listed private-chain sites, including premium Liv hospitals',
      notes: 'Medical Park carries publicly tariffed volume; Liv chases premium and international patients. Both now take industry protocols more seriously than a decade ago.',
    },
    {
      name: 'TÜSEB — research coordination',
      hq: 'Istanbul',
      type: 'Government',
      focus: 'National health-research programmes and public-private trial coordination',
      notes: 'Useful when a protocol sits next to a Ministry priority — vaccines, pandemic preparedness, selected public-health files — rather than a purely commercial Phase III.',
    },
  ],
  categoryBlurbs: {
    local:
      'Istanbul- and Ankara-owned full-service houses — Monitor, Omega, Klinar, Vital — that file TİTCK submissions and monitor for domestic and international sponsors.',
    mnc:
      'IQVIA, ICON, PPD and Fortrea country offices that deliver Turkish sites inside global Phase II–III programmes.',
    regional:
      'Turkish CROs themselves are the regional vendors for the Balkans and Caucasus; incoming Gulf CROs are secondary on this file.',
    trade:
      'TİTCK and TÜSEB plus the sites that enrol — Hacettepe, Koç, Istanbul University/Cerrahpaşa, Erciyes, city hospitals, Acıbadem and MLP Care.',
  },
  growthDrivers: [
    {
      title: 'Electronic TİTCK submissions',
      desc: 'A single national electronic door beats multi-emirate Gulf stacks and is why Turkey stays on European feasibility lists after cheaper countries drop off quality metrics.',
    },
    {
      title: 'City-hospital bed counts',
      desc: 'PPP city hospitals added thousands of specialty beds, which late-phase sponsors now treat as enrolment capacity rather than as construction news.',
    },
    {
      title: 'A trained local CRO bench',
      desc: 'Monitor and peers have been hiring CRAs since the late 1990s, so a mid-sized sponsor can staff a Turkish study without opening a country office.',
    },
    {
      title: 'Private-chain research offices',
      desc: 'Acıbadem and Liv give a contracting path that looks like Western Europe, useful when the protocol needs insured specialty rather than Ministry volume.',
    },
  ],
  faq: [
    {
      q: 'Does a foreign sponsor need a Turkish legal representative?',
      a: 'Yes, when it has no registered entity. Local CROs treat that appointment as routine: they file the TİTCK application, hold correspondence and remain the GCP face.',
    },
    {
      q: 'Which CRO do investigators name first?',
      a: 'IQVIA on global programmes; Monitor CRO on local full-service work. Omega and Klinar appear next. The right pick depends on whether the protocol is a worldwide Phase III or a Turkey-heavy mid-sized study.',
    },
    {
      q: 'Which sites belong on a first feasibility list?',
      a: 'Hacettepe in Ankara; Koç, Istanbul University/Cerrahpaşa and a city hospital in Istanbul; Izmir university hospitals for Aegean catchments; Erciyes when the work is early-phase or vaccine.',
    },
    {
      q: 'How do ethics committees relate to TİTCK?',
      a: 'Both must clear an interventional study. TİTCK is national and electronic. The ethics committee is institutional. Sponsors should track them as parallel clocks, not as a single queue.',
    },
    {
      q: 'What fieldwork does BioNixus run on Turkish CROs and sites?',
      a: 'Investigator and coordinator interviews in Istanbul, Ankara and Izmir on monitor quality; TİTCK and ethics timeline reconstruction; and sponsor interviews comparing Monitor, Omega and global desks on price and start-up.',
    },
    {
      q: 'Are these Turkish CROs sorted by trial volume or headcount?',
      a: 'They are sorted by role. Global desks, Turkish full-service houses, the agency and the hospital sites are grouped so a sponsor can choose a filing path, not so a revenue ranking can be inferred.',
    },
  ],
  regulatorSource: {
    name: 'Turkish Medicines and Medical Devices Agency (TİTCK) — clinical trials department and electronic submissions',
    url: 'https://www.titck.gov.tr',
    asOf: '2026-09-04',
  },
  sources: [
    'TİTCK clinical-trial submission materials',
    'Monitor CRO, Omega CRO, Klinar and IQVIA Turkey company descriptions; Borsa Istanbul and IHH disclosures on private-hospital research',
    'Hacettepe, Koç University Hospital, Erciyes IKUM and city-hospital research-office materials',
    'BioNixus Turkey site-feasibility, investigator and sponsor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Investigator and CRA-performance interviews at Hacettepe, Koç and Cerrahpaşa on monitoring rhythm, query turnaround and how fast sites get paid.',
    'TİTCK electronic-file and ethics-committee timeline reconstruction from recent Istanbul and Ankara submissions.',
    'Site-level enrolment guesses for oncology and metabolic protocols across Istanbul city hospitals, Ankara university campuses and Izmir.',
    'Sponsor medical-director interviews comparing Monitor CRO, Omega and IQVIA on representative-service quality and budget.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
