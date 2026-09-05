import type { DirectoryPageInput } from '../../types';

export const healthInsurersUae: DirectoryPageInput = {
  entity: 'health-insurers',
  countrySlug: 'uae',
  metaDescription:
    'Health insurers in the UAE: Daman, Sukoon, GIG, Salama, NAS, Neuron, DHA Essential Benefits and DoH Thiqa — payers and TPAs.',
  introLead:
    'Health insurance is the operating system of UAE private medicine: Abu Dhabi and Dubai legally require cover, Thiqa and the Essential Benefits / ISAHD floors set the minimum, and a short list of writers and TPAs decide which hospital and which brand get paid.',
  introRest:
    'Daman, the National Health Insurance Company now inside PureHealth, still administers Thiqa for Abu Dhabi citizens and a large Basic and enhanced book. Sukoon, the rebranded Oman Insurance Company, is the Dubai-listed composite that hospital billing offices name next. Gulf Insurance Group’s UAE operations — the book many clinicians still call AXA-GIG or GIG Ali — sit on countless employer panels. Salama writes the takaful medical product. NAS, Neuron, Nextcare and MedNet adjudicate claims, often as the only logo a cashier sees. Cigna and MetLife hold the expatriate international-school and energy-company slice. DoH Abu Dhabi and DHA write the mandate, the floor benefits and much of the coding discipline; Malaffi and NABIDH give them utilisation sight. This directory is a payer map for a brand or hospital-strategy desk, not a consumer shopping guide.',
  stats: [
    { value: '2', label: 'Emirates with long-standing mandatory resident cover (Abu Dhabi, Dubai)' },
    { value: 'Thiqa', label: 'Abu Dhabi citizens’ plan, administered by Daman under DoH rules' },
    { value: 'EBP / ISAHD', label: 'Dubai essential-benefits floor that every employer plan must clear' },
    { value: '4', label: 'TPA names hospital cashiers repeat most often: NAS, Neuron, Nextcare, MedNet' },
  ],
  channelHeading: 'How emirate mandates and TPAs steer UAE medical claims',
  channelBody:
    'Abu Dhabi starts with DoH. Citizens sit on Thiqa, which Daman administers; other residents hold Basic or enhanced products from Daman or competing writers, all of which must meet DoH benefit and coding rules. Dubai starts with DHA: every employee needs a plan at or above the Essential Benefits / ISAHD floor, sold by a licensed writer and usually run through a TPA. Northern emirates are patchier — MOHAP and Emirates Health Services still dominate public provision — but large employers there often buy Dubai-style products anyway. Network design is the real formulary. A specialty therapy that is “registered” but missing from Daman Thiqa, Sukoon gold and GIG enhanced is a cash product. Pre-authorisation, step-edits and diagnosis coding on Malaffi or NABIDH now happen in days, not in a quarterly meeting. PureHealth’s ownership of Daman plus SEHA means one group can be the public hospital and the largest Abu Dhabi payer at the same time, which is a conflict foreign teams should model rather than ignore. Medical-tourism self-pay sits outside these networks and should not be used to forecast resident reimbursement.',
  companies: [
    {
      name: 'Daman (National Health Insurance Company)',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Thiqa administration, Basic and enhanced Abu Dhabi products, national account',
      notes: 'PureHealth-owned writer that still defines Abu Dhabi reimbursement; Thiqa is the citizen door, Basic/enhanced is the resident door.',
    },
    {
      name: 'Sukoon (formerly Oman Insurance Company)',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Listed composite with a large Dubai and northern-emirates medical book',
      notes: 'The Dubai-listed name hospital billing offices use after Daman; rebranded from Oman Insurance, which older contracts still show.',
    },
    {
      name: 'Gulf Insurance Group — UAE (GIG / former AXA-GIG)',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Corporate medical plans across the Emirates',
      notes: 'The book clinicians still call AXA; GIG’s Kuwaiti parent now owns the franchise. A default employer-panel writer.',
    },
    {
      name: 'Salama (Islamic Arab Insurance Company)',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Takaful medical and general products',
      notes: 'ADX-listed takaful writer that wins sharia-sensitive employer and family books Daman and Sukoon cannot take in the same form.',
    },
    {
      name: 'Orient Insurance',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Composite products including group medical, Al-Futtaim-linked',
      notes: 'Large Dubai composite that appears on trading-house and family-group panels.',
    },
    {
      name: 'Dubai Insurance Company',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Listed composite with a medical line',
      notes: 'Smaller than Sukoon or GIG but still on SME and older Dubai employer lists.',
    },
    {
      name: 'Cigna Gulf',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'International and premium expatriate medical plans',
      notes: 'The energy, school and regional-HQ book; networks and formularies look more like a global Cigna plan than like Thiqa.',
    },
    {
      name: 'MetLife Gulf',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Group life and medical for regional corporates',
      notes: 'Sits on the same international-employer slice as Cigna; relevant for premium private hospitals more than for SEHA Basic.',
    },
    {
      name: 'NAS (Network of Affiliated Services)',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'TPA, network management and claims adjudication',
      notes: 'The TPA logo many Dubai cashiers see even when the risk carrier is Sukoon, GIG or another writer.',
    },
    {
      name: 'Neuron',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'TPA and medical-management services',
      notes: 'Second TPA that hospital pre-auth desks live with daily; often the operational counterpart on enhanced corporate plans.',
    },
    {
      name: 'Nextcare — UAE',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'TPA operations for multiple licensed writers',
      notes: 'Same regional TPA brand as in Saudi and Egypt; useful when a sponsor wants one administrator conversation across GCC books.',
    },
    {
      name: 'MedNet',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'TPA and preferred-provider network administration',
      notes: 'Fourth TPA name that still appears on northern-emirates and mid-market Dubai cards.',
    },
    {
      name: 'Department of Health – Abu Dhabi — insurance regulation',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Thiqa and Basic rules, coding, provider-payer discipline',
      notes: 'Writes the Abu Dhabi mandate that makes Daman Thiqa a public-policy instrument rather than just a commercial product.',
    },
    {
      name: 'Dubai Health Authority — insurance regulation',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Essential Benefits / ISAHD floor, insurer licensing interface, NABIDH utilisation',
      notes: 'The Dubai mandate-holder. Every employer plan in the emirate is a DHA product before it is a Sukoon or GIG product.',
    },
    {
      name: 'PureHealth — payer-provider owner',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Owns Daman and the SEHA hospital network',
      notes: 'The conflict and the opportunity: one listed group can be the largest Abu Dhabi payer and the largest public provider.',
    },
    {
      name: 'Emirates Health Services / northern-emirates public payer role',
      hq: 'Sharjah',
      type: 'Government',
      focus: 'Public provision and residual payer functions outside Dubai and Abu Dhabi mandates',
      notes: 'Still the default for many northern-emirate citizens and residents who are not on a Dubai or Abu Dhabi employer plan.',
    },
  ],
  categoryBlurbs: {
    local:
      'UAE-licensed writers — Sukoon, Salama, Orient, Dubai Insurance — plus Daman as the national Abu Dhabi instrument sitting inside PureHealth.',
    mnc:
      'Cigna and MetLife, which hold the international-employer slice rather than the Thiqa or Essential Benefits mass book.',
    regional:
      'GIG’s UAE franchise and the TPA layer — NAS, Neuron, Nextcare, MedNet — that actually adjudicates the claim.',
    trade:
      'DoH and DHA as mandate-holders, PureHealth as payer-provider owner, and Emirates Health Services for the northern emirates.',
  },
  growthDrivers: [
    {
      title: 'Emirate mandates that never sunset',
      desc: 'Thiqa and Dubai Essential Benefits keep almost every resident on a named network, which is why a formulary decision at Daman or Sukoon is a market-access event.',
    },
    {
      title: 'TPA as the operational payer',
      desc: 'Hospitals fight NAS, Neuron and Nextcare on coding even when Sukoon or GIG holds the risk; mapping only the carrier misses the desk that says no.',
    },
    {
      title: 'Health-information exchanges',
      desc: 'Malaffi and NABIDH let DoH and DHA see utilisation in near real time, which tightens step-edits on high-cost therapies.',
    },
    {
      title: 'PureHealth’s dual role',
      desc: 'Owning Daman and SEHA lets one group set both network design and public-hospital practice in Abu Dhabi — a concentration foreign teams must model.',
    },
  ],
  faq: [
    {
      q: 'What is Thiqa and who runs it?',
      a: 'Thiqa is the Abu Dhabi citizens’ health plan. DoH sets the rules. Daman administers it. It is not a Dubai product and it is not interchangeable with Essential Benefits.',
    },
    {
      q: 'What must a Dubai employer buy?',
      a: 'A licensed plan at or above the Essential Benefits / ISAHD floor, usually sold by Sukoon, GIG, Daman or a peer and often administered by a TPA. Enhanced plans sit on top of that floor.',
    },
    {
      q: 'Why do hospital cashiers talk about NAS instead of the insurer?',
      a: 'Because the TPA adjudicates. The risk may sit with Sukoon or GIG, but the pre-authorisation phone number on the card is often NAS, Neuron, Nextcare or MedNet.',
    },
    {
      q: 'Is AXA still a UAE health insurer?',
      a: 'The brand many clinicians still say is now the GIG UAE book after the Gulf Insurance Group acquisition. Check the current legal writer on the card, not the corridor nickname.',
    },
    {
      q: 'What does BioNixus study about UAE health insurers?',
      a: 'Network and pre-authorisation mapping in Abu Dhabi and Dubai; cashier and billing interviews at SEHA, Mediclinic and Burjeel on TPA behaviour; and employer-broker interviews on Thiqa versus enhanced corporate plans.',
    },
    {
      q: 'Does the sequence of insurers reflect market share?',
      a: 'Sequence reflects role — mandate-holder, risk carrier, TPA, owner — not a published share table. Names are here because they recur in BioNixus UAE payer work and on DoH and DHA licensed-writer lists.',
    },
  ],
  regulatorSource: {
    name: 'Department of Health – Abu Dhabi — mandatory health-insurance rules (Thiqa/Basic) and licensed writers, with DHA as the Dubai counterpart',
    url: 'https://www.doh.gov.ae',
    asOf: '2026-09-04',
  },
  sources: [
    'Department of Health – Abu Dhabi Thiqa and Basic materials; Dubai Health Authority Essential Benefits / ISAHD materials',
    'ADX and DFM disclosures of PureHealth/Daman, Sukoon and Salama; GIG communications on the former AXA Gulf book',
    'TPA public materials of NAS, Neuron, Nextcare and MedNet',
    'BioNixus UAE payer, TPA and hospital-billing fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Thiqa versus enhanced-plan pathway interviews with Daman and DoH-facing hospital billing teams in Abu Dhabi.',
    'TPA desk studies in Dubai with NAS, Neuron and Nextcare on specialty-drug pre-authorisation turnaround.',
    'Employer-broker interviews in Dubai International Financial Centre and Abu Dhabi on how panels mix Sukoon, GIG, Salama and Cigna.',
    'Cashier and pharmacy interviews at SEHA, Mediclinic City Hospital and Burjeel on which card actually pays for a high-cost biologic.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
