import type { DirectoryPageInput } from '../../types';

export const healthInsurersQatar: DirectoryPageInput = {
  entity: 'health-insurers',
  countrySlug: 'qatar',
  metaDescription:
    'Health insurers in Qatar: QLM, Damaan, Al Khaleej Takaful, QIC, Seha/NHI history, MoPH and QCB — medical lines and networks.',
  introLead:
    'Qatar tried a national health-insurance scheme once, pulled most Qataris back onto Hamad Medical Corporation, and is now rebuilding mandatory cover for visitors and many expatriates through licensed writers rather than through a single Seha card.',
  introRest:
    'QLM Life & Medical, listed on the Qatar Stock Exchange, is the specialist medical writer hospital billing offices name first on private cards. Damaan Islamic Insurance and Al Khaleej Takaful hold the sharia medical books. Qatar Insurance Company, Doha Insurance, Seib and Alkoot add composite capacity. The Ministry of Public Health sets health-system rules and still sits over HMC, Sidra and the Primary Health Care Corporation, which remain the real providers for citizens. Qatar Central Bank licences insurers. The Seha / National Health Insurance chapter — launched in the early 2010s, then scaled back so Qataris stayed on public provision — is included so foreign teams stop briefing a live single-payer private scheme that is not how 2026 actually works. Private hospitals — The View, Al Ahli, Al Emadi, Doha Clinic — live on commercial medical cards and cash. This directory maps writers, takaful windows, the public providers and the two regulators.',
  stats: [
    { value: '~88%', label: 'Expatriate share of residents, the population commercial medical products are built around' },
    { value: '12', label: 'Hospitals Hamad Medical Corporation operates — still the citizen provision core after Seha was scaled back' },
    { value: 'QLM', label: 'Specialist listed medical writer most often named on private-hospital cards' },
    { value: '2', label: 'Supervisors a medical product touches: MoPH for health-system rules, QCB for the insurance licence' },
  ],
  channelHeading: 'How Qatari medical cover moved from Seha toward licensed insurers',
  channelBody:
    'Seha taught everyone the politics. A national insurance brand was stood up, private providers geared for insured volume, and then the state decided citizens would remain on HMC, Sidra and PHCC, funded directly, rather than on a universal private-style card. What survived is a thinner, more orthodox insurance market: QCB-licensed writers sell group and individual medical products, MoPH sets facility and, increasingly, mandatory-cover rules for visitors and designated expatriate groups, and HMC continues to be the acute-care system for citizens and for residents who still use public wards. QLM is the specialist. Takaful houses take the sharia slice. Composites — QIC, Doha Insurance, Seib, Alkoot — sell medical as one line next to motor and property. Private hospitals negotiate tariffs with those writers; they do not replace HMC. A specialty-drug launch therefore still has a public door (HMC/Sidra/PHCC procurement under MoPH) and a private door (QLM and peers). Anyone whose 2014 slide still says “Seha pays for everyone” needs a new slide.',
  companies: [
    {
      name: 'QLM Life & Medical Insurance',
      hq: 'Doha',
      type: 'Local',
      focus: 'Specialist listed medical and life writer; private-hospital networks',
      notes: 'QSE-listed specialist that private billing offices treat as the default commercial medical card.',
    },
    {
      name: 'Damaan Islamic Insurance',
      hq: 'Doha',
      type: 'Local',
      focus: 'Takaful medical and general products',
      notes: 'Sharia writer on employer panels that will not use a conventional QLM or QIC product.',
    },
    {
      name: 'Al Khaleej Takaful',
      hq: 'Doha',
      type: 'Local',
      focus: 'Takaful including medical lines',
      notes: 'Second takaful name that appears on family and SME medical books.',
    },
    {
      name: 'Qatar Insurance Company (QIC)',
      hq: 'Doha',
      type: 'Local',
      focus: 'Largest composite; medical as one line inside a regional group',
      notes: 'Flagship Qatari insurer; medical is not its only story, but the group’s network still shows up on corporate panels.',
    },
    {
      name: 'Doha Insurance Group',
      hq: 'Doha',
      type: 'Local',
      focus: 'Composite products including group medical',
      notes: 'Domestic writer used on mid-market employer books beside QLM.',
    },
    {
      name: 'Seib Insurance & Reinsurance',
      hq: 'Doha',
      type: 'Local',
      focus: 'Composite including medical for corporates and individuals',
      notes: 'Another QCB-licensed writer that private hospitals credential.',
    },
    {
      name: 'Alkoot Insurance & Reinsurance',
      hq: 'Doha',
      type: 'Local',
      focus: 'Medical and composite products, historically close to public-sector books',
      notes: 'Writer that foreign teams meet when the client is a government-linked employer rather than a private hospital chain.',
    },
    {
      name: 'Qatar Islamic Insurance Company',
      hq: 'Doha',
      type: 'Local',
      focus: 'Islamic composite including medical',
      notes: 'Further takaful capacity on sharia-specified panels.',
    },
    {
      name: 'Ministry of Public Health',
      hq: 'Doha',
      type: 'Government',
      focus: 'Health-system regulation, facility licensing, insurance-mandate design',
      notes: 'Sets the health-policy frame. Not the insurance-licence desk — that is QCB — but the body behind HMC, Sidra, PHCC and any new mandatory-cover rule.',
    },
    {
      name: 'Qatar Central Bank — insurance supervision',
      hq: 'Doha',
      type: 'Government',
      focus: 'Licensing of insurance and takaful firms',
      notes: 'The financial supervisor for QLM, Damaan, Al Khaleej Takaful and the composites.',
    },
    {
      name: 'Hamad Medical Corporation',
      hq: 'Doha',
      type: 'Government',
      focus: 'Public hospital system; de facto payer-provider for citizens after Seha’s retreat',
      notes: 'Twelve hospitals and the largest drug budget in the country. Included because it is the citizen “payer” in operational terms.',
    },
    {
      name: 'Primary Health Care Corporation (PHCC)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Public primary-care network and chronic dispensing',
      notes: 'The outpatient public door that commercial medical cards only partly substitute for expatriates.',
    },
    {
      name: 'Sidra Medicine',
      hq: 'Doha',
      type: 'Government',
      focus: 'Women’s and children’s tertiary hospital under Qatar Foundation',
      notes: 'Separate procurement and a distinct insured-versus-public mix from HMC; relevant for paediatric specialty brands.',
    },
    {
      name: 'Seha / National Health Insurance (historical scheme)',
      hq: 'Doha',
      type: 'Government',
      focus: 'Early-2010s national insurance brand, later scaled back for citizens',
      notes: 'Listed so teams stop treating it as the current single payer. Useful as history and as a warning about mandate design.',
    },
    {
      name: 'Elegancia Healthcare / The View Hospital — insurer relations',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Premium private tertiary; commercial-policy and medical-tourism mix',
      notes: 'Estithmar’s flagship; the provider that shows how QLM and peer tariffs work at the top of the private tier.',
    },
    {
      name: 'Al Ahli Hospital — insurer relations',
      hq: 'Doha',
      type: 'Operator',
      focus: 'Largest non-profit private hospital; dense insured caseload',
      notes: 'The long-standing private account for mapping commercial medical networks before The View existed.',
    },
  ],
  categoryBlurbs: {
    local:
      'Qatari writers — QLM as the specialist, QIC, Doha Insurance, Seib, Alkoot, and the takaful houses Damaan, Al Khaleej and Qatar Islamic.',
    mnc:
      'Foreign medical brands are thin on the ground; most international employers buy a Qatari-licensed product rather than a passport Cigna-style plan.',
    regional:
      'QIC’s wider group gives a regional composite flavour; incoming GCC writers are secondary to the Doha-licensed list.',
    trade:
      'MoPH and QCB as the two supervisors, HMC, PHCC and Sidra as the public provision core, Seha as history, and The View and Al Ahli as the private tariff counterpart.',
  },
  growthDrivers: [
    {
      title: 'Mandatory cover for visitors and designated expatriates',
      desc: 'New mandate waves, unlike Seha’s citizen chapter, push volume toward QLM and peers and toward private hospitals that can take a tariff.',
    },
    {
      title: 'A specialist listed medical writer',
      desc: 'QLM gives Qatar something many small Gulf markets lack: a focused medical insurer whose network decisions are a launch variable.',
    },
    {
      title: 'Private tertiary capacity arriving late',
      desc: 'The View and peers created somewhere for an enhanced commercial policy to send a complex case that is not HMC.',
    },
    {
      title: 'Citizen care remaining public',
      desc: 'Because Qataris stayed on HMC after Seha, a brand’s citizen volume is still a public-procurement story, not an insurance-formulary story.',
    },
  ],
  faq: [
    {
      q: 'Is Seha still the national health insurer?',
      a: 'Not as a universal citizen card. The early-2010s scheme was scaled back; Qataris use HMC, Sidra and PHCC. Commercial writers and newer mandates cover visitors and many expatriates. Brief the history, do not live in it.',
    },
    {
      q: 'Who licences a medical insurance company?',
      a: 'Qatar Central Bank. MoPH licences facilities and writes health-system rules, including any mandatory-cover design. Two desks, one product.',
    },
    {
      q: 'Which writer should a private hospital or brand team map first?',
      a: 'QLM, then the takaful pair Damaan and Al Khaleej Takaful, then QIC, Doha Insurance, Seib and Alkoot. Then HMC as the public volume that insurance does not replace.',
    },
    {
      q: 'Do citizens need a QLM card?',
      a: 'Not as a legal substitute for HMC. Some hold commercial policies for private-hospital speed. Public tertiary care remains a state provision story.',
    },
    {
      q: 'What does BioNixus study about Qatari health insurers?',
      a: 'Private-network mapping at The View, Al Ahli and Al Emadi; MoPH/QCB pathway interviews; and billing studies on how QLM and takaful cards actually pay versus HMC pharmacy.',
    },
    {
      q: 'Does this table rank Qatari medical insurers?',
      a: 'It does not. Specialist writer, takaful houses, composites, public providers and the Seha chapter share a page so a team can see which payer is live. Function sets the order, not a premium league.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Public Health — health-system and insurance-mandate rules, with Qatar Central Bank licensing writers',
    url: 'https://www.moph.gov.qa',
    asOf: '2026-09-04',
  },
  sources: [
    'Ministry of Public Health National Health Strategy and facility materials',
    'Qatar Central Bank insurance-licensing materials; QSE disclosures of QLM and composite writers',
    'Contemporary reporting and official history of the Seha / National Health Insurance scale-back',
    'BioNixus Qatar payer, HMC and private-hospital billing fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Billing-office interviews at The View and Al Ahli on QLM, Damaan and QIC tariffs versus cash medical-tourism packs.',
    'HMC and PHCC pharmacy interviews on how citizen volume still bypasses commercial formularies.',
    'Broker interviews in West Bay on which employers buy QLM versus a takaful window versus a composite add-on.',
    'Mandate-design interviews with MoPH-facing consultants on visitor cover versus the retired Seha citizen model.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
