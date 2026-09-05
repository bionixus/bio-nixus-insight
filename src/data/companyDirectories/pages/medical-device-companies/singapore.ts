import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesSingapore: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'singapore',
  title: 'Singapore Medtech: HSA, Esco and Cluster Buying (2026)',
  metaDescription:
    'Singapore medical device companies: HSA, Esco, Biosensors, BD hub, Siemens SEA, Parkway IHH, NUHS and National University Hospital.',
  introLead:
    'Singapore is a city-state hospital market and a Southeast Asian device hub in the same postcode: HSA Class A–D registration is the legal door, the three public clusters plus IHH/Parkway are the buyers, and a Jurong or Tuas warehouse is often the stock point for brands that will never employ a full Malaysian or Indonesian field force.',
  introRest:
    'The Health Sciences Authority licences devices and dealers. Esco is the local life-science and hospital-equipment manufacturer that export decks already know. Biosensors International is the Singapore-born interventional house now inside a larger group. Becton Dickinson runs a regional hub from the island; Siemens Healthineers’ SEA organisation sits here and covers accounts the cluster CMOs actually name. Parkway and the wider IHH system are the private buyer; NUHS and National University Hospital are the public academic door; SingHealth and NHG complete the cluster map. BioNixus fields those named cluster and Parkway desks, not a “ASEAN hospital” blend.',
  stats: [
    { value: 'HSA', label: 'Health Sciences Authority — Class A–D device and dealer licensing' },
    { value: '3 clusters', label: 'SingHealth, NHG and NUHS — public buying systems that do not share one catalogue' },
    { value: 'IHH / Parkway', label: 'Private-hospital door that buys on a different clock from the clusters' },
    { value: 'SEA hub', label: 'Jurong and Tuas warehouses that feed brands into Malaysia, Indonesia and beyond' },
  ],
  channelHeading: 'HSA class, cluster catalogue, Parkway desk',
  channelBody:
    'A device that will be used in a Singapore public ward needs an HSA registration in the right class, a licensed dealer, and a place on a cluster catalogue or a hospital-level evaluation that the cluster CMO and the biomedical-engineering department will defend. Class A is the lightest file; Class D is the implant and high-risk path. That file is not the sale. SingHealth, the National Healthcare Group and NUHS buy as three systems: a National University Hospital evaluation does not automatically stock a SingHealth institution, and NHG’s Tan Tock Seng has its own capital committee. Capital equipment — imaging, OR integration, ICU ventilation — is specified by the user department and purchased against cluster capital envelopes that MOH still shadows. Private Parkway hospitals (Gleneagles, Mount Elizabeth, Parkway East) and the wider IHH book buy on a faster capital cycle and will take a premium SKU the cluster has not yet catalogued. Consumables ride dealer licences: BD’s Singapore hub, local dealers such as Transmedic and DKSH’s device book, and manufacturer subsidiaries that hold both the HSA dealer licence and the cluster vendor code. Esco sells laboratory and some hospital equipment from a Singapore manufacturing base into the clusters and into export. Biosensors’ interventional products still appear in regional cath-lab conversations even as the corporate parent has shifted. Siemens Healthineers SEA uses the island as a commercial and service hub; the cluster still invoices a Singapore entity. BioNixus reconstructs the named HSA class, the named cluster catalogue and the named Parkway desk before a Singapore number is treated as a regional proxy.',
  companies: [
    {
      name: 'HSA (Health Sciences Authority)',
      hq: 'Singapore',
      type: 'Government',
      focus: 'Class A–D device registration and dealer licensing',
      notes: 'The class and dealer licence a cluster biomedical engineer will ask for before the SKU is allowed onto an evaluation shortlist.',
    },
    {
      name: 'NUHS / National University Hospital procurement',
      hq: 'Singapore',
      type: 'Government',
      focus: 'Academic-cluster capital and consumable buying for NUH and NUHS institutions',
      notes: 'A NUH evaluation is not a SingHealth win. BioNixus treats NUHS as one of three public doors, not as the national buyer.',
    },
    {
      name: 'SingHealth group procurement',
      hq: 'Singapore',
      type: 'Government',
      focus: 'Largest public cluster catalogues, including SGH and the national centres',
      notes: 'SGH and the specialty centres still specify high-end imaging and OR suites; the cluster envelope is the commercial clock.',
    },
    {
      name: 'Esco',
      hq: 'Singapore',
      type: 'Local',
      focus: 'Laboratory equipment, isolators and some hospital-adjacent systems',
      notes: 'Tuas-and-export manufacturer that cluster labs already know; not a cath-lab implant house, and briefs should not file it as one.',
    },
    {
      name: 'Biosensors International',
      hq: 'Singapore',
      type: 'Local',
      focus: 'Interventional cardiology devices with a Singapore origin story',
      notes: 'Singapore-born stent house now inside a larger group; cath-lab conversations in the region still use the Biosensors name.',
    },
    {
      name: 'Becton Dickinson Singapore hub',
      hq: 'Singapore',
      type: 'MNC',
      focus: 'Medication delivery, specimen collection and regional warehousing',
      notes: 'Island hub that stocks cluster wards and also feeds SEA accounts; the HSA dealer licence and the cluster vendor code are the two files that matter.',
    },
    {
      name: 'Siemens Healthineers SEA',
      hq: 'Singapore',
      type: 'MNC',
      focus: 'Imaging, diagnostics and a regional service organisation',
      notes: 'SEA commercial seat on the island; cluster imaging replacements still invoice a Singapore entity and a named biomedical team.',
    },
    {
      name: 'Parkway / IHH Singapore hospitals',
      hq: 'Singapore',
      type: 'Operator',
      focus: 'Private-hospital capital and consumable desks at Gleneagles and Mount Elizabeth',
      notes: 'Faster capital cycle than the clusters; will take a premium SKU the public catalogue has not yet opened.',
    },
    {
      name: 'National Healthcare Group (NHG) procurement',
      hq: 'Singapore',
      type: 'Government',
      focus: 'Tan Tock Seng and NHG institution catalogues',
      notes: 'Third public door. A NUHS or SingHealth listing does not stock TTSH; BioNixus walks this desk separately.',
    },
    {
      name: 'Transmedic / specialist Singapore dealers',
      hq: 'Singapore',
      type: 'Distributor',
      focus: 'Surgical, imaging-accessory and implant dealer books',
      notes: 'Licensed dealers that hold cluster vendor codes for brands whose SEA hub does not invoice the ward.',
    },
    {
      name: 'DKSH medical Singapore',
      hq: 'Singapore',
      type: 'Distributor',
      focus: 'Regional device distribution and hospital last-mile',
      notes: 'The warehouse-and-invoice name when a European or Japanese brand has an HSA file but no cluster-facing field force.',
    },
    {
      name: 'Medtronic Singapore',
      hq: 'Singapore',
      type: 'MNC',
      focus: 'Cardiac, surgical and diabetes devices plus a regional hub',
      notes: 'Clinical specialists cover cluster implanting centres; some SKUs still ride a licensed dealer for private-hospital trays.',
    },
    {
      name: 'GE HealthCare Singapore',
      hq: 'Singapore',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Competes with Siemens SEA inside cluster imaging rooms; service contracts on the island are the renewal story.',
    },
    {
      name: 'Olympus Singapore',
      hq: 'Singapore',
      type: 'MNC',
      focus: 'GI and surgical endoscopy for cluster and Parkway units',
      notes: 'Endoscopy towers specified by cluster GI units; HSA class and dealer licence sit behind the clinical preference.',
    },
    {
      name: 'MOH cluster capital overlay',
      hq: 'Singapore',
      type: 'Government',
      focus: 'Ministry shadow on public-cluster capital envelopes',
      notes: 'Clusters buy, but MOH still shapes the envelope. A launch that only briefed a hospital HOD has not seen the envelope.',
    },
    {
      name: 'National University Hospital (as named account)',
      hq: 'Singapore',
      type: 'Operator',
      focus: 'Flagship NUHS academic hospital evaluations',
      notes: 'The named academic account on many first-in-Singapore device files; still one hospital, not the cluster, and not the country.',
    },
  ],
  categoryBlurbs: {
    local:
      'Esco and Biosensors — Singapore-origin houses whose factories or origin stories already sit in cluster and regional cath-lab conversations.',
    mnc:
      'BD, Siemens SEA, Medtronic, GE and Olympus seats that use the island as a cluster-facing and SEA-hub organisation.',
    regional:
      'Licensed dealers (Transmedic, DKSH and peers) that hold HSA dealer licences and cluster vendor codes for brands without a full field force.',
    trade:
      'HSA as the class-and-dealer gate, three public clusters plus MOH envelopes, Parkway/IHH as the private door.',
  },
  growthDrivers: [
    {
      title: 'Cluster catalogue fragmentation',
      desc: 'SingHealth, NHG and NUHS do not share one list. A NUH evaluation that never reached SGH is a failed public launch, not a soft start.',
    },
    {
      title: 'Parkway capital speed versus cluster envelopes',
      desc: 'IHH hospitals will take a premium SKU months before a cluster envelope opens; BioNixus splits those two clocks in every Singapore forecast.',
    },
    {
      title: 'SEA hub inventory versus island demand',
      desc: 'Jurong and Tuas warehouses serve Malaysia and Indonesia as much as they serve NUH. Counting hub stock as Singapore hospital demand overstates the island.',
    },
    {
      title: 'HSA class upgrades and dealer-licence hygiene',
      desc: 'Cluster biomedical engineers now ask for class and dealer numbers on the evaluation form; a regional HQ slide is not a substitute.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Singapore?',
      a: 'HSA classes them A to D and licences the dealer. The cluster biomedical engineer will ask for both numbers before the SKU joins an evaluation shortlist.',
    },
    {
      q: 'Who buys devices for public hospitals?',
      a: 'Three clusters — SingHealth, NHG and NUHS — plus a MOH shadow on capital envelopes. National University Hospital is a NUHS account, not the national buyer.',
    },
    {
      q: 'How does Parkway / IHH buy compared with the clusters?',
      a: 'Faster capital cycles, thinner catalogue discipline, more willingness to take a premium SKU the public list has not opened. It is a different commercial object.',
    },
    {
      q: 'Which Singapore-origin device names belong on a brief?',
      a: 'Esco for laboratory and hospital-adjacent equipment, Biosensors International for the interventional origin story, plus the island hubs of BD and Siemens SEA.',
    },
    {
      q: 'What does BioNixus study on Singapore device accounts?',
      a: 'HSA class-and-dealer traces, named cluster-catalogue reconstructions, Parkway desk interviews, and hub-versus-island inventory splits.',
    },
    {
      q: 'Is this a ranking of Singapore medtech share?',
      a: 'No. Names appear because they recur in BioNixus cluster and Parkway fieldwork; sequence is by role, not by revenue.',
    },
  ],
  regulatorSource: {
    name: 'HSA — Health Sciences Authority, medical device and dealer licensing',
    url: 'https://www.hsa.gov.sg',
    asOf: '2026-09-05',
  },
  sources: [
    'HSA medical-device classification and dealer-licence guidance, consulted 2026',
    'MOH cluster and institution procurement notices; NUHS and NUH published descriptions',
    'Esco, Biosensors, BD and Siemens Healthineers published Singapore / SEA site descriptions',
    'BioNixus Singapore cluster and Parkway hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SingHealth, NHG and NUHS catalogue walks treated as three public doors, never as one MOH buyer.',
    'HSA class-and-dealer number checks against the carton a cluster CSSD actually accepts.',
    'Parkway / IHH capital-desk interviews timed against cluster envelope calendars.',
    'Jurong and Tuas hub-stock splits so SEA warehouse volume is not counted as island hospital demand.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
