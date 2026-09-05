import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesCanada: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'canada',
  title: 'Canada Medtech: Health Canada, GPOs and Provinces (2026)',
  metaDescription:
    'Canada medical device companies: Health Canada, Medtronic, Abbott, provincial authorities, Ontario Health, hospital GPOs and local device firms.',
  introLead:
    'Canadian hospital technology is a provincial-buyer market with a federal licence on the carton: Health Canada issues the Medical Device Licence or MDEL, and Ontario Health, a Saskatchewan health authority or a Quebec CISSS opens the requisition that actually stocks the ward.',
  introRest:
    'Medtronic Canada and Abbott Canada are the multinational seats a hospital materials manager in Toronto or Montreal already has on the vendor list. SteriPro and other Canadian reprocessors and specialty manufacturers sit beside them as local names that should not be inflated into imaging peers. Provincial health authorities — Ontario Health and the hospital corporations it shadows, Alberta Health Services, PHSA in British Columbia, CISSS/CIUSSS in Quebec — are the public buyers. HealthPRO, Mohawk Medbuy and other group-purchasing organisations are the GPO layer those corporations ride. BioNixus fields named authorities and named GPOs, not a single “Canada hospital” cell.',
  stats: [
    { value: 'Health Canada', label: 'Federal Medical Device Licence and MDEL establishment gate' },
    { value: 'Provinces', label: 'Health authorities that open the requisition — not a federal warehouse' },
    { value: 'GPOs', label: 'HealthPRO, Mohawk Medbuy and peers that frame many corporation lots' },
    { value: 'Ontario Health', label: 'Densest English-speaking public overlay, and not Quebec or Alberta' },
  ],
  channelHeading: 'Licence, provincial authority, GPO contract',
  channelBody:
    'A device that will be used in a Canadian public hospital needs a Health Canada Medical Device Licence (or a Class I MDEL path) held by a Canadian manufacturer or importer, and a place on a provincial health-authority contract or a GPO agreement that the hospital corporation will raise against. That is a different commercial object from an FDA 510(k) a Minneapolis hub waves at a Toronto biomedical engineer. Capital equipment — imaging, OR integration, lab automation — is specified by the clinical department and purchased by the hospital corporation or the authority, often against a HealthPRO or Mohawk Medbuy framework and, in Quebec, against a CISSS/CIUSSS and MSSS overlay that English-language briefs keep under-sampling. Consumables and implants ride the same GPO layer: Medtronic Canada and Abbott Canada defend multinational books with Canadian clinical specialists; smaller foreign brands appoint importers who hold the MDEL and the hospital vendor number. SteriPro’s reprocessing book is a Canadian cost-containment fact on instrument trays, not a capital-equipment story. Private clinics and some specialty hospitals buy outside the GPO and behave more like US ambulatory accounts. CADTH (now Canada’s Drug Agency for some functions) sits payer-adjacent on high-cost technology files. BioNixus reconstructs the named licence, the named authority or GPO contract and the named corporation dock before a Canada volume figure is signed.',
  companies: [
    {
      name: 'Health Canada Medical Devices',
      hq: 'Ottawa',
      type: 'Government',
      focus: 'Medical Device Licence, MDEL establishments and post-market',
      notes: 'The Ottawa file a Canadian manufacturer or importer must hold before a hospital corporation store will accept the SKU onto a GPO shortlist.',
    },
    {
      name: 'Ontario Health / Ontario hospital corporations',
      hq: 'Toronto',
      type: 'Government',
      focus: 'Provincial overlay and corporation buying in the densest English-speaking market',
      notes: 'Not a federal warehouse. An Ontario Health-shadowed contract does not stock a Quebec CISSS or an Alberta Health Services site.',
    },
    {
      name: 'HealthPRO / Mohawk Medbuy (hospital GPOs)',
      hq: 'Ontario / national members',
      type: 'Operator',
      focus: 'Group-purchasing agreements hospital corporations raise against',
      notes: 'The framework layer. Missing it is how a US-hub launch fails Canadian public volume even after the Health Canada licence lands.',
    },
    {
      name: 'Medtronic Canada',
      hq: 'Brampton',
      type: 'MNC',
      focus: 'Cardiac, surgical, diabetes, spine and neuromodulation',
      notes: 'Brampton clinical specialists cover implanting centres; GPO contract status is the commercial question before volume is counted.',
    },
    {
      name: 'Abbott Canada (devices and diagnostics)',
      hq: 'Mississauga',
      type: 'MNC',
      focus: 'Diagnostics, cardiovascular, diabetes and nutrition-adjacent devices',
      notes: 'Mississauga seat that hospital labs and cath labs already know; FreeStyle and IVD placements are different books and should stay split.',
    },
    {
      name: 'SteriPro Canada',
      hq: 'Ontario',
      type: 'Local',
      focus: 'Instrument reprocessing and sterile-processing services',
      notes: 'Canadian cost-containment name on trays, not an imaging manufacturer. Briefs that file it as a Siemens peer have misread the dock.',
    },
    {
      name: 'Alberta Health Services procurement',
      hq: 'Edmonton / Calgary',
      type: 'Government',
      focus: 'Single provincial authority buying for Alberta hospitals',
      notes: 'One authority, one clock, and not Ontario. A Toronto GPO win does not stock the Foothills Medical Centre.',
    },
    {
      name: 'PHSA / BC health-authority buying',
      hq: 'Vancouver',
      type: 'Government',
      focus: 'British Columbia provincial and health-authority purchasing',
      notes: 'A third English-speaking public door. BioNixus walks Vancouver as its own contract layer.',
    },
    {
      name: 'Quebec CISSS / CIUSSS and MSSS overlay',
      hq: 'Montreal / Quebec City',
      type: 'Government',
      focus: 'Francophone public buying that English-language briefs under-sample',
      notes: 'The door a Toronto-only sample misses. MSSS and the CISSS/CIUSSS network are not a footnote to Ontario Health.',
    },
    {
      name: 'Siemens Healthineers Canada',
      hq: 'Oakville',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Oakville commercial seat that wins teaching-hospital imaging rooms; Prairie and Atlantic lots still score a service van.',
    },
    {
      name: 'GE HealthCare Canada',
      hq: 'Mississauga',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens Canada inside the same corporation imaging rooms; GPO capital frameworks are the clock.',
    },
    {
      name: 'Canadian specialty manufacturers (Exact Imaging and peers)',
      hq: 'Ontario / Quebec',
      type: 'Local',
      focus: 'Niche Canadian-developed devices sold into domestic and export rooms',
      notes: 'Smaller licensed makers that a teaching-hospital evaluation may trial; they are not Medtronic Canada and should not be briefed as such.',
    },
    {
      name: 'Canadian importers and specialty distributors',
      hq: 'GTA / Montreal / Vancouver',
      type: 'Distributor',
      focus: 'MDEL holders and hospital last-mile for brands without a full Canadian field force',
      notes: 'The vendor number a corporation store in Atlantic Canada actually pays when the Brampton seat does not bill the dock.',
    },
    {
      name: 'Johnson & Johnson MedTech Canada',
      hq: 'Markham',
      type: 'MNC',
      focus: 'Ethicon, DePuy Synthes and energy devices',
      notes: 'Markham clinical-specialist plus GPO model; a HealthPRO win is not an automatic Quebec CISSS win.',
    },
    {
      name: 'Canada’s Drug Agency / CADTH heritage (payer-adjacent)',
      hq: 'Ottawa',
      type: 'Government',
      focus: 'Health-technology assessments that unlock high-cost device files',
      notes: 'Does not raise a requisition. A favourable assessment is often what lets an authority reopen a closed capital line.',
    },
    {
      name: 'University Health Network / large Ontario teaching hospitals',
      hq: 'Toronto',
      type: 'Operator',
      focus: 'Flagship corporation evaluations inside Ontario',
      notes: 'Named academic accounts whose specs a community hospital on the same GPO will not copy.',
    },
  ],
  categoryBlurbs: {
    local:
      'Canadian reprocessors and specialty makers — SteriPro and peers — that belong on a cost-containment or niche-device brief, not on an imaging-share slide.',
    mnc:
      'Brampton, Mississauga, Oakville and Markham seats that win teaching-hospital rooms and still share Atlantic and Prairie invoices with importers.',
    regional:
      'Importers who hold the MDEL and the corporation vendor number outside the Toronto–Montreal corridor.',
    trade:
      'Health Canada as the licence, provincial authorities as the requisition, HealthPRO and Mohawk Medbuy as the GPO layer.',
  },
  growthDrivers: [
    {
      title: 'Provincial contract fragmentation',
      desc: 'Ontario, Alberta, BC and Quebec open on different statutes. A HealthPRO win that never reached a CISSS is a failed national launch.',
    },
    {
      title: 'GPO framework refresh cycles',
      desc: 'HealthPRO and Mohawk Medbuy lots reopen on published calendars; missing a refresh is a multi-year volume hole, not a soft quarter.',
    },
    {
      title: 'Health Canada licence hygiene',
      desc: 'Corporation stores now ask for the licence or MDEL number on the carton; a Minneapolis-hub SKU without a Canadian holder is a failed delivery.',
    },
    {
      title: 'Payer-adjacent HTA on high-cost files',
      desc: 'CADTH-heritage assessments reopen or close capital lines; BioNixus dates the assessment against the authority’s envelope, not against a brochure.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices licensed in Canada?',
      a: 'Health Canada issues a Medical Device Licence by class, or an MDEL establishment path for Class I. A Canadian manufacturer or importer holds the file. Hospital stores now ask for that number on the dock.',
    },
    {
      q: 'Who buys devices for Canadian public hospitals?',
      a: 'Provincial health authorities and hospital corporations, often against HealthPRO, Mohawk Medbuy or Quebec CISSS/CIUSSS contracts. There is no federal hospital warehouse.',
    },
    {
      q: 'How do Medtronic Canada and Abbott Canada sell?',
      a: 'Canadian clinical specialists plus GPO contracts. Smaller brands still appoint importers who hold the MDEL and the corporation vendor number.',
    },
    {
      q: 'Is SteriPro a device manufacturer like Medtronic?',
      a: 'No. SteriPro reprocesses instruments. It belongs on a sterile-processing and cost-containment brief, not on an implant or imaging share slide.',
    },
    {
      q: 'What does BioNixus study on Canadian device accounts?',
      a: 'Licence-to-carton traces, named provincial-authority and GPO reconstructions, Quebec CISSS walks that English briefs skip, and teaching-versus-community specification interviews.',
    },
    {
      q: 'Is this a Canadian market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus hospital-corporation fieldwork; sequence is by role, not by revenue.',
    },
  ],
  regulatorSource: {
    name: 'Health Canada — Medical Devices Directorate, licences and MDEL establishments',
    url: 'https://www.canada.ca/en/health-canada.html',
    asOf: '2026-09-05',
  },
  sources: [
    'Health Canada Medical Devices Directorate guidance, consulted 2026',
    'Ontario Health, Alberta Health Services, PHSA and Quebec CISSS/CIUSSS procurement notices',
    'HealthPRO and Mohawk Medbuy public descriptions; Medtronic Canada and Abbott Canada published Canadian sites',
    'BioNixus Canada hospital-corporation and GPO fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Ontario, Alberta, BC and Quebec authority reconstructions treated as four buyers, never as one federal warehouse.',
    'Health Canada licence-or-MDEL traces against the carton a corporation store accepts.',
    'HealthPRO versus Mohawk Medbuy versus CISSS contract-layer interviews on the same SKU family.',
    'UHN and community-hospital specification walks so a teaching-hospital trial is not counted as GPO volume.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
