import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesMorocco: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'morocco',
  metaDescription:
    'Medical device companies in Morocco: Siemens Healthineers, GE HealthCare, Philips, Medtronic, Roche, Promamec, Akdital, Oncorad and CHU tenders — market map, AMMPS rules.',
  introLead:
    'Morocco is in the middle of the largest hospital-building programme in its history: new university hospital centres in Tangier, Agadir, Laâyoune and Errachidia, a rebuilt CHU Ibn Sina in Rabat and a wave of private clinics led by the listed Akdital group are all being equipped at once, which is why medical technology imports have grown faster than the wider health budget.',
  introRest:
    'Devices are regulated by the new Agence Marocaine des Médicaments et des Produits de Santé (AMMPS), which took over from the Direction du Médicament et de la Pharmacie, and are imported by locally licensed distributors that register products and bid public tenders. The Ministry of Health and Social Protection equips public hospitals through national tenders and CHU-level procurement, while private groups such as Akdital and Oncorad buy directly. Multinationals including Siemens Healthineers, GE HealthCare, Philips and Medtronic maintain Casablanca subsidiaries, and Promamec anchors a small domestic manufacturing and distribution sector. The directory below lists the public buyers, multinational brands, distributors, manufacturers and private operators shaping Morocco’s medtech market and how they connect.',
  stats: [
    { value: '$500m+', label: 'Moroccan medical device market, 2024 estimate' },
    { value: '5', label: 'New university hospital centres commissioned or under construction' },
    { value: '~65%', label: 'Share of device spend funded by the public sector' },
    { value: '~90%', label: 'Share of devices imported' },
  ],
  channelHeading: 'How medical devices reach hospitals in Morocco',
  channelBody:
    'Public procurement follows two tracks. The Ministry of Health and Social Protection runs national tenders for equipment programmes across regional and provincial hospitals, often financed by the state budget or development partners, while each Centre Hospitalier Universitaire in Casablanca, Rabat, Fès, Marrakech, Oujda and the newer cities procures much of its own capital equipment under its autonomous status. New-build CHUs are frequently equipped as turnkey packages within construction contracts, so manufacturers compete to be specified by contractors and project consultants. A foreign manufacturer registers devices with AMMPS through a licensed Moroccan distributor, which imports via Casablanca or Tanger Med, bids tenders, installs and holds the maintenance contract; multinationals such as Siemens Healthineers, GE HealthCare, Philips, Medtronic and Roche run Casablanca subsidiaries that tender directly for major systems and manage service, using distributors for consumables and provincial reach. The private channel has grown quickly: Akdital, listed on the Casablanca Stock Exchange, operates dozens of clinics and buys centrally at premium specifications, Oncorad runs radiology and oncology centres, and independent clinics in Casablanca, Rabat and Marrakech add volume. Generalised health insurance under AMO Tadamon is expanding demand for diagnostics and dialysis across both channels. Promamec manufactures disposables locally and distributes imported equipment, and the government’s industrial strategy is courting device assembly in Tanger Med and Casablanca free zones.',
  companies: [
    {
      name: 'Ministry of Health and Social Protection — Direction des Équipements et de la Maintenance',
      hq: 'Rabat',
      type: 'Government',
      focus: 'National equipment programmes for regional and provincial hospitals',
      notes: 'Plans and tenders equipment for the public hospital network and coordinates fit-out of new facilities.',
    },
    {
      name: 'CHU Ibn Rochd Casablanca — Procurement',
      hq: 'Casablanca',
      type: 'Government',
      focus: 'Largest university hospital centre purchasing',
      notes: 'Autonomous CHU procurement anchors imaging, oncology and laboratory demand in the economic capital.',
    },
    {
      name: 'CHU Ibn Sina Rabat — Procurement',
      hq: 'Rabat',
      type: 'Government',
      focus: 'Rebuilt flagship university hospital equipment',
      notes: 'The new Ibn Sina hospital project is one of the largest single equipment packages in North Africa.',
    },
    {
      name: 'Siemens Healthineers Maroc',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Casablanca subsidiary tendering directly for CHU imaging and lab automation with a national service organisation.',
    },
    {
      name: 'GE HealthCare Maroc',
      hq: 'USA',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Long-standing presence in public and private imaging; partners with Promamec and other distributors for provincial coverage.',
    },
    {
      name: 'Philips Maroc (Health Systems)',
      hq: 'Netherlands',
      type: 'MNC',
      focus: 'Imaging, patient monitoring and informatics',
      notes: 'Monitoring and cardiology systems across CHUs and Akdital clinics; Casablanca-based service team.',
    },
    {
      name: 'Medtronic Maroc',
      hq: 'USA / Ireland',
      type: 'MNC',
      focus: 'Cardiovascular, surgical, spine and diabetes devices',
      notes: 'Casablanca office supporting cardiac and surgical centres; distributors carry inventory and provincial sales.',
    },
    {
      name: 'Johnson & Johnson MedTech Maroc',
      hq: 'USA',
      type: 'MNC',
      focus: 'Surgery, orthopaedics and vision',
      notes: 'Ethicon and DePuy Synthes lines sold through Moroccan distributors with company clinical support.',
    },
    {
      name: 'Roche Diagnostics Maroc',
      hq: 'Switzerland',
      type: 'MNC',
      focus: 'Central-lab and molecular diagnostics',
      notes: 'Anchor supplier to CHU laboratories and private lab networks; growing with AMO-driven testing volumes.',
    },
    {
      name: 'Abbott Maroc',
      hq: 'USA',
      type: 'MNC',
      focus: 'Diagnostics, cardiovascular and diabetes care',
      notes: 'IVD installed base plus FreeStyle Libre distribution through the pharmacy wholesale chain.',
    },
    {
      name: 'Fresenius Medical Care Maroc',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Dialysis systems, consumables and clinic services',
      notes: 'Morocco’s dialysis population is expanding under AMO coverage, making this a key public and private account.',
    },
    {
      name: 'Mindray (Maroc)',
      hq: 'China',
      type: 'MNC',
      focus: 'Monitoring, ultrasound and IVD',
      notes: 'Value-segment brand winning share in provincial hospital and private clinic tenders via local distributors.',
    },
    {
      name: 'Promamec',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Disposables manufacturing and medical equipment distribution',
      notes: 'The leading Moroccan medtech group, manufacturing syringes and consumables locally while distributing imported imaging and hospital equipment.',
    },
    {
      name: 'Akdital — Central Procurement',
      hq: 'Casablanca',
      type: 'Operator',
      focus: 'Largest private clinic group purchasing',
      notes: 'Casablanca Stock Exchange-listed operator whose rapid clinic roll-out makes it the reference private account for imaging, surgical and oncology equipment.',
    },
    {
      name: 'Oncorad Group',
      hq: 'Casablanca',
      type: 'Operator',
      focus: 'Private radiology and oncology centres',
      notes: 'Specialised operator buying radiotherapy, PET-CT and imaging systems directly; a benchmark for premium oncology technology in the private sector.',
    },
    {
      name: 'DHL Global Forwarding Maroc',
      hq: 'Casablanca',
      type: 'MNC',
      focus: 'Project logistics and temperature-controlled freight',
      notes: 'Handles inbound equipment and reagent shipments via Casablanca Mohammed V and Tanger Med for subsidiaries and distributors.',
    },
  ],
  categoryBlurbs: {
    local:
      'Moroccan manufacturers and distributors, led by Promamec, that produce disposables locally and register and import equipment for public tenders and private clinics.',
    mnc:
      'Multinational device and diagnostics subsidiaries in Casablanca that tender directly for major systems, run national service teams and use distributors for consumables and provincial reach.',
    regional:
      'Maghreb and pan-African medtech groups that use Morocco as a base for francophone West Africa, reflecting the country’s export-hub ambitions.',
    trade:
      'The ministry equipment directorate, the autonomous university hospital centres and the listed and specialised private operators whose tenders and purchases define demand.',
  },
  growthDrivers: [
    {
      title: 'University hospital construction programme',
      desc: 'New CHUs in Tangier, Agadir, Laâyoune and Errachidia and the rebuilt Ibn Sina in Rabat represent multi-year equipment packages that favour manufacturers able to deliver turnkey installation and training.',
    },
    {
      title: 'Private clinic consolidation',
      desc: 'Akdital’s stock-market-funded expansion and the growth of Oncorad and other groups are centralising private purchasing and raising specifications toward European standards.',
    },
    {
      title: 'Generalised health insurance',
      desc: 'AMO Tadamon coverage for previously uninsured households is lifting demand for diagnostics, dialysis and elective surgery across public and private facilities.',
    },
    {
      title: 'Industrial localisation and export hub',
      desc: 'Government incentives for device assembly in Tanger Med and Casablanca free zones, together with Morocco’s trade links to West Africa, are attracting manufacturers seeking a regional production base.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Morocco?',
      a: 'With the Agence Marocaine des Médicaments et des Produits de Santé through a licensed Moroccan establishment, either the manufacturer’s subsidiary or a local distributor, which holds the registration and import authorisation.',
    },
    {
      q: 'Who buys medical equipment for Moroccan public hospitals?',
      a: 'The Ministry of Health and Social Protection through national equipment programmes and the autonomous university hospital centres through their own procurement, with new-build CHUs often equipped via turnkey construction contracts.',
    },
    {
      q: 'Do multinational device companies operate directly in Morocco?',
      a: 'Yes. Siemens Healthineers, GE HealthCare, Philips, Medtronic, Roche and others run Casablanca subsidiaries that tender directly for major systems and manage service, using distributors such as Promamec for consumables and provincial coverage.',
    },
    {
      q: 'How important is the private channel for devices in Morocco?',
      a: 'Increasingly important. Akdital, Oncorad and independent clinics account for a growing share of imaging, surgical and oncology equipment purchases and buy at premium specifications with central procurement.',
    },
    {
      q: 'What does BioNixus study about medical device companies in Morocco?',
      a: 'Installed-base and brand-share mapping across CHUs, regional hospitals and private clinics; procurement-decision interviews with biomedical engineers, CHU directors and Akdital buyers; distributor evaluation; and project-pipeline tracking for new hospitals.',
    },
    {
      q: 'Does the list rank Moroccan device companies?',
      a: 'No. Organisations are grouped by role and included because they recur in BioNixus Morocco hospital fieldwork and on AMMPS and Casablanca Stock Exchange records; sequence implies no ranking.',
    },
  ],
  regulatorSource: {
    name: 'Agence Marocaine des Médicaments et des Produits de Santé (AMMPS) — medical device registration and licensed establishments',
    url: 'https://www.ammps.gov.ma',
    asOf: '2026-09-03',
  },
  sources: [
    'Ministry of Health and Social Protection equipment tenders and CHU construction programme announcements, 2024–2026',
    'Casablanca Stock Exchange filings for Akdital, 2024–2025',
    'Haut-Commissariat au Plan and Ministry of Health facility statistics, 2024',
    'BioNixus Morocco hospital and clinic fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Installed-base and brand-share audits across CHUs in Casablanca, Rabat, Fès and Marrakech, regional hospitals and Akdital and Oncorad facilities.',
    'Procurement-decision interviews with CHU directors, biomedical engineers and private clinic buyers on tender criteria, service expectations and brand preference.',
    'Distributor evaluation for Moroccan entry scoring registration capability, provincial service reach and tender record.',
    'Project-pipeline tracking of new CHU and private clinic builds and their equipment packages.',
  ],
};
