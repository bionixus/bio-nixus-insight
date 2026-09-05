import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesSouthKorea: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'south-korea',
  title: 'Korea Medtech: Samsung Medison, MFDS and NHIS (2026)',
  metaDescription:
    'South Korea medtech: Samsung Medison, Alpinion, Osstem, Vatech, Lunit, Seegene, Siemens KR, MFDS registration and NHIS hospital buying.',
  introLead:
    'Korean hospital technology is a reimbursement market wearing an export-industry face: MFDS clearance puts a device on the legal shelf, an NHIS or HIRA code puts it on the claim, and the five big hospital systems (Asan, Samsung Medical Center, Severance, Seoul National, St. Mary’s) decide whether the SKU ever reaches a tertiary tray.',
  introRest:
    'Samsung Medison, Alpinion, Osstem, Vatech, Lunit and Seegene are the Korean houses a biomedical engineer and a laboratory director already know — ultrasound, implants, dental imaging, AI readout, molecular IVD. Siemens Healthineers Korea holds a large imaging and lab installed base beside GE and Philips seats. The Ministry of Food and Drug Safety is the device gate; the National Health Insurance Service and HIRA write the codes that make a premium implant or an AI readout economically usable. Hospital procurement at the five majors is committee-led and brand-sticky. BioNixus interviews those named committees, not a generic “Korea hospital” cell.',
  stats: [
    { value: 'MFDS', label: 'Ministry of Food and Drug Safety — Korean device approval and post-market owner' },
    { value: 'NHIS / HIRA', label: 'Insurer and review agency whose codes decide whether a premium SKU is claimable' },
    { value: 'Big 5', label: 'Asan, SMC, Severance, SNUH and St. Mary’s — tertiary committees that set the tray' },
    { value: 'Export', label: 'Korean ultrasound, dental and IVD houses that sell abroad from the same factories' },
  ],
  channelHeading: 'MFDS file, HIRA code, tertiary committee',
  channelBody:
    'A device that will be used on a Korean insured patient needs an MFDS licence held by a Korean manufacturer or importer, and, for anything that will be claimed, a HIRA reimbursement code or a hospital’s willingness to take it as non-covered. That second gate is where many AI and premium implant launches stall. Capital equipment — ultrasound, CT, MR, dental CBCT, laboratory automation — is specified by the department and purchased by the hospital’s equipment committee, with the Big Five systems running the most sophisticated evaluations in the country. Samsung Medison and Alpinion fight GE and Siemens on ultrasound inside those rooms; Vatech owns a large dental-imaging installed base that sits closer to clinic chains than to Asan’s radiology floor. Consumables, dental implants and IVD reagents ride a different path: Osstem has made Korean dental implant volume a domestic story; Seegene’s molecular kits sit in hospital and commercial labs on reagent-rental logic; Lunit’s AI readouts need both MFDS clearance and a HIRA or hospital-budget story before a radiology chair will keep the licence live. Siemens Healthineers Korea sells and services imaging and lab systems with a direct organisation; smaller foreign brands appoint 수입업체 who hold the MFDS file and the hospital vendor code. NHIS does not warehouse product, but its fee schedule is the commercial document BioNixus reads before a Korea forecast is signed. Export success from Wonju, Seoul and Songdo does not automatically mean Asan has adopted the same SKU.',
  companies: [
    {
      name: 'MFDS (Ministry of Food and Drug Safety)',
      hq: 'Osong',
      type: 'Government',
      focus: 'Device approval, manufacturing licences and post-market surveillance',
      notes: 'The Osong file a Korean manufacturer or importer must hold before a tertiary committee will put the SKU on an evaluation shortlist.',
    },
    {
      name: 'NHIS / HIRA hospital reimbursement and procurement overlay',
      hq: 'Wonju / Seoul',
      type: 'Government',
      focus: 'Insurance codes and claim review that make a device economically usable',
      notes: 'Not a warehouse. A missing HIRA code is why a cleared AI or implant SKU still dies in the hospital budget meeting.',
    },
    {
      name: 'Samsung Medison',
      hq: 'Seoul',
      type: 'Local',
      focus: 'Diagnostic ultrasound systems for obstetrics, cardiology and general imaging',
      notes: 'Samsung’s ultrasound house; Big Five and secondary hospitals already treat it as a domestic alternative to GE and Philips probes.',
    },
    {
      name: 'Alpinion Medical Systems',
      hq: 'Seoul',
      type: 'Local',
      focus: 'Ultrasound platforms and transducers',
      notes: 'Smaller Korean ultrasound challenger that secondary-hospital lots shortlist when a Samsung or import quote overshoots the committee ceiling.',
    },
    {
      name: 'Osstem Implant',
      hq: 'Seoul',
      type: 'Local',
      focus: 'Dental implants, biomaterials and digital dentistry',
      notes: 'Clinic-chain volume more than a tertiary OR story; Korean dental implant share is an Osstem fact before it is an import fact.',
    },
    {
      name: 'Vatech',
      hq: 'Hwaseong',
      type: 'Local',
      focus: 'Dental CBCT, panoramic imaging and sensors',
      notes: 'Hwaseong dental-imaging installed base sits in clinics and dental hospitals, not on Asan’s radiology floor, and should be briefed that way.',
    },
    {
      name: 'Lunit',
      hq: 'Seoul',
      type: 'Local',
      focus: 'AI chest and mammography readout software',
      notes: 'MFDS-cleared AI that still needs a HIRA or hospital-budget path; BioNixus asks which radiology chairs kept the licence live.',
    },
    {
      name: 'Seegene',
      hq: 'Seoul',
      type: 'Local',
      focus: 'Molecular IVD reagents and multiplex PCR platforms',
      notes: 'Laboratory reagent-rental name; hospital and commercial labs treat Seegene as a kit system, not as a one-time analyser sale.',
    },
    {
      name: 'Siemens Healthineers Korea',
      hq: 'Seoul',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Large Korean imaging and lab installed base with a direct service organisation the Big Five already know by name.',
    },
    {
      name: 'GE HealthCare Korea',
      hq: 'Seoul',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Samsung Medison and Siemens inside the same tertiary ultrasound and CT rooms; service contracts decide the renewal.',
    },
    {
      name: 'Medtronic Korea',
      hq: 'Seoul',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes and neuromodulation',
      notes: 'Clinical specialists cover implanting centres; HIRA code status is the commercial question BioNixus asks before counting volume.',
    },
    {
      name: 'Asan / SMC / Severance / SNUH / St. Mary’s procurement',
      hq: 'Seoul',
      type: 'Operator',
      focus: 'Tertiary equipment committees and vendor-code desks at the Big Five',
      notes: 'Five committees, five clocks. A Samsung Medical Center win does not stock Asan, and BioNixus does not average them.',
    },
    {
      name: 'Korean device importers (수입업체)',
      hq: 'Seoul / Gyeonggi',
      type: 'Distributor',
      focus: 'MFDS file holders and hospital vendor-code owners for foreign brands',
      notes: 'The legal name on the Osong file and the invoice a secondary hospital pays when the multinational seat does not bill direct.',
    },
    {
      name: 'Philips Korea (Health Systems)',
      hq: 'Seoul',
      type: 'MNC',
      focus: 'Imaging, monitoring and informatics',
      notes: 'Monitoring and ultrasound seats in tertiary rooms; Samsung Medison and Alpinion now sit on the same shortlist more often than a decade ago.',
    },
    {
      name: 'Secondary hospital and clinic-chain buying groups',
      hq: 'Nationwide',
      type: 'Operator',
      focus: 'Non-Big-Five hospital and dental-clinic volume',
      notes: 'Where Osstem, Vatech and mid-tier ultrasound actually make their Korean numbers; a Seoul tertiary-only sample will miss them.',
    },
    {
      name: 'Sewoon Medical / domestic consumable makers',
      hq: 'Multiple',
      type: 'Local',
      focus: 'Hospital consumables and electromedical accessories',
      notes: 'Ward-level Korean manufacturers that secondary-hospital purchasing still pulls when an import consumable fails the fee schedule.',
    },
  ],
  categoryBlurbs: {
    local:
      'Korean ultrasound, dental, AI and IVD houses whose factories already feed tertiary rooms, clinic chains and export containers.',
    mnc:
      'Seoul multinational seats that hold Big Five imaging and implant share and still share secondary-hospital invoices with 수입업체.',
    regional:
      'Importers and secondary-hospital dealers who hold the MFDS file and the vendor code outside the five Seoul majors.',
    trade:
      'MFDS as the Osong gate, NHIS and HIRA as the claim code, Big Five committees as the tertiary tray.',
  },
  growthDrivers: [
    {
      title: 'HIRA code timing versus MFDS clearance',
      desc: 'A cleared AI or implant SKU that lacks a claim path dies in the budget meeting; BioNixus dates the code, not only the licence.',
    },
    {
      title: 'Big Five capital-committee cycles',
      desc: 'Asan, SMC, Severance, SNUH and St. Mary’s refresh ultrasound, CT and lab automation on separate calendars that a single Seoul dinner will not unlock.',
    },
    {
      title: 'Dental and clinic-chain volume',
      desc: 'Osstem and Vatech make their Korean numbers in clinics, not in Asan radiology; a tertiary-only brief under-counts the domestic champions.',
    },
    {
      title: 'Export factories versus domestic adoption',
      desc: 'Wonju and Songdo export success does not mean the same SKU is on a Korean tertiary tray; BioNixus splits those two facts.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices approved in South Korea?',
      a: 'MFDS in Osong licences the manufacturer or importer. Classification drives the file. A hospital committee will ask for that licence number before it opens an evaluation.',
    },
    {
      q: 'How does NHIS reimbursement affect device use?',
      a: 'HIRA codes decide whether the hospital can claim the SKU. Non-covered devices need a hospital-budget story. Many AI and premium implant launches stall on this gate, not on MFDS.',
    },
    {
      q: 'Who are the Korean manufacturers a brief should name?',
      a: 'Samsung Medison and Alpinion for ultrasound, Osstem for dental implants, Vatech for dental imaging, Lunit for AI readout, Seegene for molecular IVD.',
    },
    {
      q: 'Do the Big Five hospitals buy the same way?',
      a: 'No. Asan, Samsung Medical Center, Severance, Seoul National and St. Mary’s run separate committees and vendor codes. A win at one is not a win at five.',
    },
    {
      q: 'What does BioNixus study on Korean device accounts?',
      a: 'MFDS-to-SKU traces, HIRA-code timing interviews, Big Five committee walks, and clinic-chain installed-base counts for Osstem and Vatech.',
    },
    {
      q: 'Is this a Korean market-share ranking?',
      a: 'No. Entries are grouped by role and appear because they recur in BioNixus tertiary and clinic fieldwork; order is not turnover.',
    },
  ],
  regulatorSource: {
    name: 'MFDS — Ministry of Food and Drug Safety, medical device approval and surveillance',
    url: 'https://www.mfds.go.kr',
    asOf: '2026-09-05',
  },
  sources: [
    'MFDS medical-device approval and post-market notices, consulted 2026',
    'NHIS and HIRA reimbursement-code and claim-review publications',
    'Samsung Medison, Alpinion, Osstem, Vatech, Lunit and Seegene published company descriptions',
    'BioNixus Korea Big Five and clinic-chain hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Big Five equipment-committee interviews treated as five buyers, never as one Seoul average.',
    'HIRA-code versus MFDS-licence date checks on AI and implant SKUs that cleared but never claimed.',
    'Clinic-chain CBCT and implant installed-base counts for Vatech and Osstem outside tertiary radiology.',
    '수입업체 coverage scores so a Seoul multinational seat is not counted as secondary-hospital last-mile.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
