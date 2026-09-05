import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesUk: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'uk',
  title: 'UK Medtech: Smith & Nephew, MHRA and NHS Supply (2026)',
  metaDescription:
    'UK medical device companies: Smith & Nephew, Convatec, Medtronic, J&J MedTech, Olympus, GE HealthCare, Renishaw, MHRA, NICE and NHS Supply Chain.',
  introLead:
    'England’s hospital technology still arrives through two doors that foreign launch decks keep merging: an MHRA registration held by a UK Responsible Person, and an NHS Supply Chain framework that trust procurement will not bypass unless a NICE-backed exception or a specialised-commissioning lot says otherwise.',
  introRest:
    'Smith & Nephew and Convatec are the listed British houses a trust materials manager already has on the wound and orthopaedics catalogue. ICU Medical now owns the Smiths Medical legacy syringe-pump and airway book that many ICU nurses still call “Smiths”. Renishaw’s neurological and additive-manufacturing healthcare line is a Gloucestershire specialist, not a volume consumable. Olympus, Medtronic, Johnson & Johnson MedTech and GE HealthCare keep UK commercial seats that bid NHS Supply Chain lots and still appoint dealers for private hospitals and the devolved nations. NICE does not buy devices; its Medtech Innovation Briefings and guidance change whether a trust can defend a premium SKU at the next framework refresh. BioNixus fields named trusts and ICS procurement leads, not a single “NHS buyer” persona.',
  stats: [
    { value: 'MHRA', label: 'UK medicines and device regulator; UKCA and post-market owner after EU exit' },
    { value: 'NHS SC', label: 'NHS Supply Chain — the framework route most English trust consumable volume still rides' },
    { value: 'NICE', label: 'Payer-adjacent guidance house whose MIBs and appraisals unlock or block premium SKUs' },
    { value: '4 nations', label: 'England, Scotland, Wales and Northern Ireland buy on separate statutory paths' },
  ],
  channelHeading: 'Registration, frameworks and the trust loading bay',
  channelBody:
    'A device that will be used on an NHS ward in England needs a UK Responsible Person on the MHRA register and, for most volume SKUs, a place on an NHS Supply Chain framework or a trust-level exception that the ICS procurement team will actually sign. That is a different commercial object from a CE certificate that used to travel freely. Capital equipment — theatres, imaging, endoscopy stacks, radiotherapy — is specified by the trust’s clinical engineering and estates teams, then purchased through a combination of NHS Supply Chain capital frameworks, specialist lots (for example imaging or renal) and, for the largest teaching hospitals, local OJEU-successor procedures. Private groups (HCA, Spire, Circle, Nuffield) buy outside those frameworks and behave more like Gulf cash-pay accounts. Consumables and implants ride NHS Supply Chain hubs: the manufacturer or its UK distributor wins a place on the framework, the trust raises a purchase order against that framework, and the hub or the appointed logistics partner delivers to the loading bay. Scotland’s National Procurement, NHS Wales Shared Services and Northern Ireland’s BSO are not NHS Supply Chain and will punish a brief that treated London as the United Kingdom. NICE sits beside the buy: a positive MIB or guidance note is often what lets a clinician reopen a closed framework line. Smith & Nephew and Convatec defend listed British brands inside those frameworks; Medtronic, J&J MedTech, Olympus and GE HealthCare defend multinational books with UK clinical specialists plus dealer cover for independent hospitals. BioNixus reconstructs the named framework, the named trust exception and the named Responsible Person before a UK forecast is signed.',
  companies: [
    {
      name: 'MHRA (Medicines and Healthcare products Regulatory Agency)',
      hq: 'London',
      type: 'Government',
      focus: 'UK device registration, UKCA transition and post-market vigilance',
      notes: 'The register a UK Responsible Person must appear on before a trust or a private hospital will accept the SKU onto a catalogue.',
    },
    {
      name: 'NHS Supply Chain',
      hq: 'Normanton / national hubs',
      type: 'Government',
      focus: 'Framework contracts and logistics for English NHS trust volume',
      notes: 'The door most English consumable and many capital lots still walk through; missing it is not a branding problem, it is a volume problem.',
    },
    {
      name: 'NICE (National Institute for Health and Care Excellence)',
      hq: 'London / Manchester',
      type: 'Government',
      focus: 'Payer-adjacent technology guidance and Medtech Innovation Briefings',
      notes: 'Does not raise a purchase order. A favourable note is often what lets a clinician reopen a framework line a buyer had closed.',
    },
    {
      name: 'Smith & Nephew',
      hq: 'Watford / Hull',
      type: 'Local',
      focus: 'Orthopaedics, sports medicine, ENT and advanced wound management',
      notes: 'Listed British house that trust theatres and tissue-viability nurses already treat as a default catalogue name, not as an import story.',
    },
    {
      name: 'Convatec',
      hq: 'London',
      type: 'Local',
      focus: 'Ostomy, continence, infusion sets and advanced wound care',
      notes: 'Community and trust continence volume sits on NHS Supply Chain frameworks; the commercial fight is the next framework refresh, not a launch ad.',
    },
    {
      name: 'ICU Medical (Smiths Medical legacy)',
      hq: 'USA / UK legacy sites',
      type: 'MNC',
      focus: 'Syringe pumps, airway, vascular access and vital-care consumables',
      notes: 'ICU nurses still say Smiths. The invoice now says ICU Medical; service and parts continuity is the question BioNixus asks on the ward.',
    },
    {
      name: 'Renishaw healthcare',
      hq: 'Wotton-under-Edge',
      type: 'Local',
      focus: 'Neurological drug-delivery, craniomaxillofacial and additive implants',
      notes: 'A Gloucestershire specialist selling into neurosurgical centres, not a volume syringe brand, and should be briefed as such.',
    },
    {
      name: 'Olympus Medical UK',
      hq: 'Southend / national',
      type: 'MNC',
      focus: 'GI and surgical endoscopy systems and service',
      notes: 'Endoscopy units in teaching trusts specify towers on clinical preference; NHS Supply Chain and local capital lots then have to catch up.',
    },
    {
      name: 'Medtronic UK',
      hq: 'Watford',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes, spine and neuromodulation',
      notes: 'Watford clinical specialists cover implanting centres; independent hospitals and some devolved-nation accounts still run through dealers.',
    },
    {
      name: 'Johnson & Johnson MedTech UK',
      hq: 'Wokingham / national',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Framework plus clinical-specialist model; private-hospital trays often move on a different invoice path from the English NHS hub.',
    },
    {
      name: 'GE HealthCare UK',
      hq: 'Chalfont St Giles',
      type: 'MNC',
      focus: 'Imaging, ultrasound, monitoring and digital solutions',
      notes: 'Chalfont remains the UK imaging commercial seat; trust radiology replacements ride capital frameworks and local teaching-hospital lots.',
    },
    {
      name: 'Siemens Healthineers UK',
      hq: 'Frimley',
      type: 'MNC',
      focus: 'Imaging, diagnostics and radiotherapy',
      notes: 'Frimley service organisation is the installed-base story; BioNixus counts named scanners, not a UK share percentage printed in a brochure.',
    },
    {
      name: 'Bunzl Healthcare / specialist UK dealers',
      hq: 'London / regional',
      type: 'Distributor',
      focus: 'Ward consumables and dealer cover for brands without full UK field force',
      notes: 'The delivery note a ward clerk actually stamps when the multinational’s UK seat does not hold the last-mile contract.',
    },
    {
      name: 'NHS Scotland National Procurement',
      hq: 'Edinburgh',
      type: 'Government',
      focus: 'Central buying for territorial boards north of the border',
      notes: 'A separate statutory buyer. A Watford framework win in England does not automatically stock a Glasgow board.',
    },
    {
      name: 'HCA / Spire / Circle — private hospital procurement',
      hq: 'London and national',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable purchasing outside NHS frameworks',
      notes: 'Cash-pay and insured private volume that behaves like a Gulf account: faster capital cycles, thinner framework discipline.',
    },
    {
      name: 'B. Braun UK',
      hq: 'Sheffield',
      type: 'MNC',
      focus: 'Infusion, Aesculap instruments and hospital consumables',
      notes: 'Sheffield plant and commercial seat give the German house a UK manufacturing story that trust buyers still recognise on infusion lots.',
    },
  ],
  categoryBlurbs: {
    local:
      'British manufacturers — Smith & Nephew, Convatec, Renishaw healthcare — whose SKUs already sit on trust catalogues and community frameworks.',
    mnc:
      'Watford, Wokingham, Frimley and Chalfont seats that bid NHS Supply Chain lots and still need dealers for private hospitals and devolved nations.',
    regional:
      'Specialist UK dealers and logistics houses that hold the last-mile contract when the multinational seat does not invoice the ward.',
    trade:
      'MHRA as the register, NHS Supply Chain and the devolved buyers as the volume doors, NICE as the payer-adjacent unlock.',
  },
  growthDrivers: [
    {
      title: 'UKCA and Responsible Person friction',
      desc: 'Trusts now ask who the UK Responsible Person is before they reopen a line; brands that still treat MHRA as a paperwork afterthought lose framework slots.',
    },
    {
      title: 'NHS Supply Chain framework refresh cycles',
      desc: 'Wound, infusion, endoscopy and imaging lots re-open on published calendars; missing a refresh is a two-to-four-year volume hole, not a quarter of soft sales.',
    },
    {
      title: 'NICE-backed premium exceptions',
      desc: 'Clinicians reopen closed framework lines when a MIB or guidance note gives the ICS procurement lead something to file; BioNixus tracks those notes against named trusts.',
    },
    {
      title: 'Devolved-nation and private-hospital divergence',
      desc: 'Scotland, Wales and Northern Ireland buy on different statutes; HCA, Spire and Circle buy on private terms. A single English hub win is not a United Kingdom win.',
    },
  ],
  faq: [
    {
      q: 'How is a medical device registered for the UK?',
      a: 'Through the MHRA, with a UK Responsible Person named on the register. UKCA transition rules still sit beside accepted EU certificates; the trust will ask for the Responsible Person before it stocks the SKU.',
    },
    {
      q: 'Who buys devices for English NHS hospitals?',
      a: 'NHS Supply Chain frameworks carry most consumable volume and many capital lots. Individual trusts and ICS procurement teams still run exceptions and large teaching-hospital capital procedures.',
    },
    {
      q: 'Does NICE purchase equipment?',
      a: 'No. NICE publishes guidance and Medtech Innovation Briefings. Those documents change whether a trust can defend a premium device at the next framework or exception meeting.',
    },
    {
      q: 'Which British manufacturers matter on a UK brief?',
      a: 'Smith & Nephew for orthopaedics and wound, Convatec for ostomy and continence, Renishaw healthcare for a narrow neurosurgical book, plus the Smiths Medical legacy now inside ICU Medical.',
    },
    {
      q: 'What does BioNixus study on UK device accounts?',
      a: 'Named-trust framework reconstructions, Responsible Person and UKCA file checks, NICE-note impact interviews, and separate Scotland / Wales / Northern Ireland buying-path walks.',
    },
    {
      q: 'Does the directory rank UK companies by share?',
      a: 'No. Entries are grouped by function and appear because they recur in BioNixus trust and private-hospital fieldwork; order is not a league table.',
    },
  ],
  regulatorSource: {
    name: 'MHRA — Medicines and Healthcare products Regulatory Agency, device registration and vigilance',
    url: 'https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency',
    asOf: '2026-09-05',
  },
  sources: [
    'MHRA device registration and Responsible Person guidance, consulted 2026',
    'NHS Supply Chain framework notices and hub descriptions',
    'NICE Medtech Innovation Briefing and medical-technologies guidance pages',
    'Smith & Nephew, Convatec and Renishaw published UK site descriptions; BioNixus England and devolved-nation hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Named English trust and ICS procurement interviews so an NHS Supply Chain win is separated from a local exception that never scaled.',
    'MHRA Responsible Person file checks against the SKU the ward actually unwraps, not the brochure family name.',
    'NICE MIB and guidance impact interviews with clinicians who reopened a closed framework line.',
    'Scotland National Procurement, NHS Wales and BSO walks so a Watford seat is not counted as four-nation coverage.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
