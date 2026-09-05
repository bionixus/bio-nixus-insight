import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesMalaysia: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'malaysia',
  title: 'Malaysia Medtech: MDA, Gloves and Hospital Buying (2026)',
  metaDescription:
    'Malaysia medical device companies: MDA, Top Glove, Kossan, Supermax, IHH Pantai, Pharmaniaga, Siemens MY and local hospital distributors.',
  introLead:
    'Malaysia is two device stories that a single slide keeps gluing together: a Medical Device Authority registration that every hospital SKU now needs, and a Selangor-and-Perak glove cluster whose export numbers dwarf the domestic hospital market those same factories barely sell into.',
  introRest:
    'The Medical Device Authority in Putrajaya runs MeDC@St establishment and product registration. Top Glove, Kossan and Supermax are glove makers — device-adjacent under MDA classification for many examination and surgical SKUs, honest to label as export manufacturers, not as KL hospital imaging houses. IHH’s Pantai and Gleneagles hospitals are the private buyer. Pharmaniaga’s medical book sits beside its drug distribution franchise as a public-hospital path. Siemens Healthineers Malaysia and peer multinational seats still need a local Authorised Representative and a dealer for Ministry of Health lots. BioNixus splits glove-export facts from hospital-tender facts on every Malaysia brief.',
  stats: [
    { value: 'MDA', label: 'Medical Device Authority — MeDC@St establishment and product registration' },
    { value: 'Gloves', label: 'Selangor and Perak cluster whose export volumes dwarf domestic hospital device spend' },
    { value: 'MOH', label: 'Ministry of Health facilities that still take the largest public equipment and consumable lots' },
    { value: 'IHH', label: 'Pantai and Gleneagles private door that buys on a different clock from MOH' },
  ],
  channelHeading: 'MeDC@St file, MOH lot, Pantai desk',
  channelBody:
    'A device that will be used in a Malaysian public hospital needs an MDA registration on MeDC@St, an Authorised Representative who is a Malaysian legal entity, and a place on a Ministry of Health tender or a concession / privatisaton path that Pharmaniaga or another appointed house may already occupy. That is a different commercial object from a CE certificate a Singapore hub waves at a Kuala Lumpur biomedical engineer. Capital equipment for MOH hospitals and university medical centres is specified by the user department and opened as a tender; Siemens Healthineers Malaysia, GE and Philips bid with local partners who hold the AR file and the service van. IHH’s Pantai and Gleneagles hospitals, plus KPJ and Ramsay Sime Darby, buy capital on private-committee cycles and will take a premium SKU the MOH lot has not awarded. Consumables split three ways: gloves and some disposables from the cluster (Top Glove, Kossan, Supermax) that hospitals buy as commodities; imported implants and specialty lines that ride specialist dealers; and Pharmaniaga’s medical catalogue on the public path. Labelling the glove houses as “hospital device companies” without saying they are export manufacturers is the mistake BioNixus refuses to make. University hospitals (UMMC, UKM, USM, IIUM) tender with more academic specification language than a district MOH hospital. BioNixus reconstructs the named MeDC@St number, the named MOH lot and the named Pantai desk before a Malaysia volume figure is signed.',
  companies: [
    {
      name: 'Medical Device Authority (MDA)',
      hq: 'Putrajaya',
      type: 'Government',
      focus: 'MeDC@St establishment and product registration, post-market duties',
      notes: 'The Putrajaya file a Malaysian Authorised Representative must hold before an MOH store or a Pantai biomedical engineer will accept the SKU.',
    },
    {
      name: 'Ministry of Health Malaysia — equipment and consumable tenders',
      hq: 'Putrajaya',
      type: 'Government',
      focus: 'Public-hospital capital lots and recurring consumable awards',
      notes: 'The largest public door. A Singapore hub win or a Pantai listing does not stock a district MOH hospital.',
    },
    {
      name: 'Top Glove',
      hq: 'Shah Alam',
      type: 'Local',
      focus: 'Examination and surgical gloves — export manufacturer, device-adjacent',
      notes: 'Honestly a glove exporter. Hospital briefs should not file Shah Alam as an imaging or implant peer of Siemens or Medtronic.',
    },
    {
      name: 'Kossan Rubber Industries',
      hq: 'Klang',
      type: 'Local',
      focus: 'Medical gloves and related rubber devices for export and some domestic volume',
      notes: 'Klang cluster peer of Top Glove; MDA-visible for glove SKUs, not a tertiary cath-lab name.',
    },
    {
      name: 'Supermax',
      hq: 'Sungai Buloh',
      type: 'Local',
      focus: 'Glove manufacturing and some downstream medical disposables',
      notes: 'Third glove name on the export tape. Domestic hospital device spend is a rounding error beside its container volumes.',
    },
    {
      name: 'IHH / Pantai and Gleneagles Malaysia',
      hq: 'Kuala Lumpur',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable desks',
      notes: 'The private door. Faster capital cycles than MOH lots; will take a premium SKU the public tender has not awarded.',
    },
    {
      name: 'Pharmaniaga medical',
      hq: 'Shah Alam',
      type: 'Distributor',
      focus: 'Public-hospital medical-device and consumable distribution beside the drug book',
      notes: 'The concession-adjacent path many MOH consumable SKUs still ride; not a manufacturer, and not IHH’s private desk.',
    },
    {
      name: 'Siemens Healthineers Malaysia',
      hq: 'Petaling Jaya',
      type: 'MNC',
      focus: 'Imaging, diagnostics and service for MOH and private hospitals',
      notes: 'PJ commercial seat that still bids MOH lots with a local AR and service van the district biomedical engineer already has on speed-dial.',
    },
    {
      name: 'GE HealthCare Malaysia',
      hq: 'Kuala Lumpur',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens MY inside university and private imaging rooms; MOH mid-tier lots often run through an appointed dealer.',
    },
    {
      name: 'KPJ Healthcare procurement',
      hq: 'Kuala Lumpur',
      type: 'Operator',
      focus: 'Second private-hospital chain buying desk after IHH',
      notes: 'A different committee and vendor list from Pantai. A Gleneagles win does not stock a KPJ hospital.',
    },
    {
      name: 'Malaysian Authorised Representatives and specialist dealers',
      hq: 'Klang Valley / Penang',
      type: 'Distributor',
      focus: 'MDA AR holders, inventory and hospital last-mile for foreign brands',
      notes: 'The legal name on MeDC@St and the invoice a district store pays when the multinational seat does not bill direct.',
    },
    {
      name: 'UMMC / university medical-centre tenders',
      hq: 'Kuala Lumpur / other campuses',
      type: 'Operator',
      focus: 'Academic-hospital capital specifications',
      notes: 'UMMC, UKM, USM and IIUM write tighter specs than a district MOH lot and should be sampled as their own accounts.',
    },
    {
      name: 'Medtronic Malaysia',
      hq: 'Kuala Lumpur',
      type: 'MNC',
      focus: 'Cardiac, surgical and diabetes devices',
      notes: 'Clinical specialists cover implanting centres; many SKUs still move through an AR who holds the MDA file and the hospital vendor code.',
    },
    {
      name: 'Ramsay Sime Darby Health Care',
      hq: 'Kuala Lumpur',
      type: 'Operator',
      focus: 'Private-hospital group purchasing beside IHH and KPJ',
      notes: 'Third private door. BioNixus does not average it with Pantai or KPJ on a single “private Malaysia” cell.',
    },
    {
      name: 'Local electromedical and consumable manufacturers (non-glove)',
      hq: 'Multiple states',
      type: 'Local',
      focus: 'Hospital furniture, some electromedical and disposables outside the glove cluster',
      notes: 'Smaller MDA-registered makers that MOH mid-tier lots still pull; they are not Top Glove and should not be briefed as the same industry.',
    },
    {
      name: 'DKSH / Zuellig-heritage device distribution Malaysia',
      hq: 'Petaling Jaya',
      type: 'Distributor',
      focus: 'Multinational device books into MOH and private hospitals',
      notes: 'The regional distributor name that still appears on AR files and hospital invoices when a brand has no full Malaysian field force.',
    },
  ],
  categoryBlurbs: {
    local:
      'Glove-cluster exporters (Top Glove, Kossan, Supermax) labelled honestly as device-adjacent, plus smaller non-glove Malaysian makers on MOH lots.',
    mnc:
      'Petaling Jaya and KL multinational seats that bid MOH lots and still share invoices with Authorised Representatives.',
    regional:
      'ARs, Pharmaniaga’s medical book and specialist dealers who hold MeDC@St numbers and district last-mile.',
    trade:
      'MDA as the Putrajaya gate, MOH as the public lot, IHH/Pantai, KPJ and Ramsay Sime Darby as the private desks.',
  },
  growthDrivers: [
    {
      title: 'MeDC@St enforcement on hospital docks',
      desc: 'MOH stores and private biomedical engineers now ask for the MDA number on the carton; unregistered Singapore-hub stock is a failed delivery, not a grey channel.',
    },
    {
      title: 'MOH capital lots versus private-chain cycles',
      desc: 'Public imaging and ICU replacements ride tenders; IHH, KPJ and Ramsay Sime Darby ride committees. BioNixus never averages those two clocks.',
    },
    {
      title: 'Glove-export cycle, honestly separated',
      desc: 'Top Glove, Kossan and Supermax move with US and EU glove demand, not with KL hospital CT replacements. Mixing the two numbers is the brief we refuse.',
    },
    {
      title: 'University-centre specification language',
      desc: 'UMMC and peer campuses write academic specs that a district MOH lot will not copy; a launch needs both samples.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Malaysia?',
      a: 'The Medical Device Authority registers establishments and products on MeDC@St. A Malaysian Authorised Representative holds the file. Hospitals now ask for that number on the dock.',
    },
    {
      q: 'Who buys devices for public hospitals?',
      a: 'The Ministry of Health through capital and consumable tenders, with Pharmaniaga still occupying a share of the public distribution path. University medical centres tender with their own specs.',
    },
    {
      q: 'Are Top Glove, Kossan and Supermax hospital device companies?',
      a: 'They are glove manufacturers — device-adjacent under MDA for examination and surgical gloves, and overwhelmingly exporters. They are not imaging, implant or ICU-capital houses.',
    },
    {
      q: 'How do IHH Pantai hospitals buy compared with MOH?',
      a: 'Private committees, faster capital cycles, willingness to take a premium SKU the public lot has not awarded. KPJ and Ramsay Sime Darby are further separate desks.',
    },
    {
      q: 'What does BioNixus study on Malaysian device accounts?',
      a: 'MeDC@St number-to-carton traces, named MOH lot reconstructions, Pantai / KPJ / Ramsay desks on separate clocks, and a hard split between glove-export facts and hospital-tender facts.',
    },
    {
      q: 'Is this a Malaysian market-share ranking?',
      a: 'No. Names appear because they recur in BioNixus MOH, university and private-hospital fieldwork; sequence is by role, not by turnover.',
    },
  ],
  regulatorSource: {
    name: 'MDA — Medical Device Authority Malaysia, MeDC@St registration',
    url: 'https://www.mda.gov.my',
    asOf: '2026-09-05',
  },
  sources: [
    'Medical Device Authority MeDC@St guidance and establishment notices, consulted 2026',
    'Ministry of Health tender notices; IHH, KPJ and Ramsay Sime Darby published hospital descriptions',
    'Top Glove, Kossan and Supermax published glove-manufacturing descriptions, labelled as export manufacturers',
    'BioNixus Malaysia MOH, university and private-hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'MeDC@St number-to-carton traces on MOH and Pantai docks so an unregistered Singapore-hub SKU is caught before it is counted.',
    'Named MOH lot reconstructions treated as a different clock from IHH, KPJ and Ramsay Sime Darby committees.',
    'Glove-cluster export interviews filed separately from hospital imaging and implant walks — never averaged.',
    'UMMC and peer university-centre specification interviews so a district MOH lot is not treated as the academic spec.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
