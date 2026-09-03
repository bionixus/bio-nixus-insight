import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesTurkey: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'turkey',
  metaDescription:
    'Medical device companies in Turkey: Siemens Healthineers, GE HealthCare, Philips, Medtronic, Aselsan, Alvimedica, Bıçakcılar, Acıbadem and city hospital tenders.',
  introLead:
    'Turkey is both a large medical technology market and an emerging exporter: its PPP city hospitals are among the biggest single equipment tenders in the world, its 85 million people generate more than 700 million physician visits a year, and domestic manufacturers such as Aselsan, Alvimedica, Bıçakcılar and Üzümcü now compete with multinationals at home and abroad.',
  introRest:
    'The Turkish Medicines and Medical Devices Agency (TİTCK) regulates devices and runs the ÜTS product tracking system, the Social Security Institution reimburses implants and consumables under the SUT tariff, and public hospitals buy through the Public Hospitals General Directorate and the state procurement office DMO. Multinationals including Siemens Healthineers, GE HealthCare, Philips and Medtronic run Istanbul subsidiaries with national service organisations, while private groups such as Acıbadem, MLP Care, Memorial and Medicana purchase centrally for dozens of hospitals each. Localisation policy ties public purchasing advantages to Turkish manufacturing. The directory below lists the public buyers, multinational subsidiaries, domestic manufacturers and private operators shaping medtech in Turkey and how they connect.',
  stats: [
    { value: '$3bn+', label: 'Turkish medical device market, 2024 estimate' },
    { value: '20+', label: 'PPP city hospitals operating or under construction' },
    { value: '~75%', label: 'Share of hospital beds in Ministry of Health and university systems' },
    { value: '~85%', label: 'Share of devices imported by value, with rising local production' },
  ],
  channelHeading: 'How medical devices reach hospitals in Turkey',
  channelBody:
    'Turkey’s device channel is split between very large public tenders and sophisticated private groups. The Public Hospitals General Directorate purchases equipment and consumables for Ministry of Health hospitals through provincial and central tenders, and DMO framework catalogues provide a second public route, while university hospitals tender independently. PPP city hospitals in Ankara, Istanbul, İzmir, Adana, Bursa and other provinces were equipped by their concession companies as turnkey packages, and their multi-year medical equipment service obligations create ongoing renewal demand. Implants and consumables are reimbursed by SGK under the SUT tariff, so tariff inclusion and price level determine which products hospitals adopt, and every device must be registered in TİTCK’s ÜTS tracking system with a Turkish registrant. Multinationals including Siemens Healthineers, GE HealthCare, Philips, Medtronic, Roche and Abbott operate Istanbul subsidiaries that tender directly, run national service networks and use regional dealers for smaller hospitals. Localisation rules give price preference to domestically manufactured devices in public tenders, which has propelled Aselsan into ventilators and imaging, Alvimedica into coronary stents and Bıçakcılar and Üzümcü into hospital furniture and sterilisation for both domestic tenders and export. The private channel is unusually consolidated: Acıbadem, MLP Care (Medical Park), Memorial and Medicana each operate dozens of hospitals with central procurement, and their medical-tourism strategies keep them buying premium imaging, robotic surgery and oncology systems.',
  companies: [
    {
      name: 'Public Hospitals General Directorate — Procurement',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Equipment and consumable tenders for Ministry of Health hospitals',
      notes: 'Central and provincial tenders for the public network, including specifications for city hospital replacements and upgrades.',
    },
    {
      name: 'Devlet Malzeme Ofisi (DMO)',
      hq: 'Ankara',
      type: 'Government',
      focus: 'State procurement catalogue and framework contracts',
      notes: 'Catalogue purchasing route used by public hospitals for equipment, consumables and IT, with domestic-product preference.',
    },
    {
      name: 'Sosyal Güvenlik Kurumu (SGK) — SUT reimbursement',
      hq: 'Ankara',
      type: 'Government',
      focus: 'Reimbursement of implants and consumables under the SUT tariff',
      notes: 'Tariff listing and price levels set by SGK determine hospital adoption of implants, stents and high-value consumables.',
    },
    {
      name: 'Siemens Healthineers Türkiye',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Istanbul subsidiary with national service organisation; major supplier to city hospitals and private groups.',
    },
    {
      name: 'GE HealthCare Türkiye',
      hq: 'USA',
      type: 'MNC',
      focus: 'Imaging, ultrasound and monitoring',
      notes: 'Large installed base across public and private hospitals with local applications and service teams.',
    },
    {
      name: 'Philips Türkiye (Health Systems)',
      hq: 'Netherlands',
      type: 'MNC',
      focus: 'Imaging, patient monitoring and informatics',
      notes: 'Monitoring and cardiology systems across city hospitals and Acıbadem, Memorial and Medicana facilities.',
    },
    {
      name: 'Medtronic Türkiye',
      hq: 'USA / Ireland',
      type: 'MNC',
      focus: 'Cardiovascular, surgical, spine, neuroscience and diabetes devices',
      notes: 'Istanbul subsidiary managing SUT-reimbursed implant portfolios and clinical support across hundreds of hospitals.',
    },
    {
      name: 'Johnson & Johnson MedTech Türkiye',
      hq: 'USA',
      type: 'MNC',
      focus: 'Surgery, orthopaedics and vision',
      notes: 'Ethicon and DePuy Synthes franchises with direct hospital sales and regional dealers.',
    },
    {
      name: 'Roche Diagnostics Türkiye',
      hq: 'Switzerland',
      type: 'MNC',
      focus: 'Central-lab and molecular diagnostics',
      notes: 'Anchor supplier to city hospital central laboratories and private lab networks.',
    },
    {
      name: 'Abbott Türkiye',
      hq: 'USA',
      type: 'MNC',
      focus: 'Diagnostics, cardiovascular and diabetes care',
      notes: 'IVD installed base plus FreeStyle Libre growth through pharmacies and SGK diabetes reimbursement.',
    },
    {
      name: 'Fresenius Medical Care Türkiye',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Dialysis systems, consumables and clinic networks',
      notes: 'Operates dialysis clinics and supplies public and private units in one of Europe’s largest dialysis populations.',
    },
    {
      name: 'Aselsan — Medical Systems',
      hq: 'Ankara',
      type: 'Local',
      focus: 'Domestic ventilators, imaging and monitoring',
      notes: 'Defence electronics group that entered medical technology under localisation policy; supplies public hospitals with Turkish-made equipment.',
    },
    {
      name: 'Alvimedica',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Coronary stents and interventional cardiology devices',
      notes: 'Turkish interventional manufacturer competing with multinationals in SUT-reimbursed stent tenders and exporting widely.',
    },
    {
      name: 'Bıçakcılar',
      hq: 'Istanbul',
      type: 'Local',
      focus: 'Hospital furniture, operating tables and surgical equipment',
      notes: 'Long-established domestic manufacturer supplying city hospital fit-outs and exporting to more than 80 countries.',
    },
    {
      name: 'Üzümcü',
      hq: 'Ankara',
      type: 'Local',
      focus: 'Sterilisation systems and hospital equipment',
      notes: 'Ankara manufacturer of sterilisers and medical furniture with strong public tender presence and export growth.',
    },
    {
      name: 'Acıbadem Healthcare Group — Central Procurement',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Largest private hospital group purchasing',
      notes: 'Operates more than 20 hospitals; its central procurement and medical-tourism strategy set private benchmarks for premium technology.',
    },
    {
      name: 'MLP Care (Medical Park) — Procurement',
      hq: 'Istanbul',
      type: 'Operator',
      focus: 'Borsa Istanbul-listed hospital chain purchasing',
      notes: 'Largest private hospital network by bed count; consolidated buying across dozens of hospitals nationwide.',
    },
  ],
  categoryBlurbs: {
    local:
      'Turkish manufacturers of ventilators, imaging, stents, sterilisers and hospital furniture that benefit from localisation preference in public tenders and export across the region.',
    mnc:
      'Multinational device and diagnostics subsidiaries in Istanbul that tender directly, manage SUT reimbursement and run national service networks, supplemented by regional dealers.',
    regional:
      'Turkish and cross-border groups using the country as a manufacturing and re-export base for the Caucasus, Central Asia, the Middle East and Africa.',
    trade:
      'The public buyers and payer, the city hospital concessionaires and the consolidated private hospital groups whose tenders, tariffs and central purchasing decide adoption.',
  },
  growthDrivers: [
    {
      title: 'City hospital renewal and service cycles',
      desc: 'Equipment installed in the first PPP city hospitals is entering renewal windows, and concession companies’ service obligations create predictable multi-year demand for upgrades and replacements.',
    },
    {
      title: 'Localisation and domestic manufacturing',
      desc: 'Price preference for Turkish-made devices in public tenders and DMO catalogues is expanding domestic production, prompting multinationals to localise assembly or partner with Turkish manufacturers.',
    },
    {
      title: 'Private group consolidation and medical tourism',
      desc: 'Acıbadem, MLP Care, Memorial and Medicana keep adding hospitals and international patients, sustaining premium purchases of robotic surgery, oncology and imaging systems.',
    },
    {
      title: 'SUT tariff dynamics and currency',
      desc: 'Reimbursement price adjustments and lira volatility drive adoption shifts between imported and domestic implants and consumables, making tariff strategy central to device commercial planning.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Turkey?',
      a: 'Devices must be registered in TİTCK’s ÜTS product tracking system by a Turkish manufacturer, importer or authorised representative, with CE marking recognised under Turkish medical device regulation aligned to the EU framework.',
    },
    {
      q: 'Who buys medical equipment for Turkish public hospitals?',
      a: 'The Public Hospitals General Directorate through central and provincial tenders, DMO through framework catalogues, university hospitals independently, and PPP city hospital concessionaires for their facilities’ equipment and service.',
    },
    {
      q: 'How does SGK reimbursement affect device adoption in Turkey?',
      a: 'Implants and high-value consumables are reimbursed under the SUT tariff at fixed prices, so tariff listing and price levels determine which products public and private hospitals can use for insured patients.',
    },
    {
      q: 'Are there significant Turkish medical device manufacturers?',
      a: 'Yes. Aselsan produces ventilators and imaging, Alvimedica makes coronary stents, and Bıçakcılar and Üzümcü manufacture hospital furniture and sterilisation systems, all benefiting from localisation preference and exporting widely.',
    },
    {
      q: 'What does BioNixus study about medical device companies in Turkey?',
      a: 'Installed-base and brand-share mapping across city hospitals, university hospitals and private groups; procurement-decision interviews with biomedical engineers, department heads and central buyers; SUT tariff and localisation impact studies; and dealer network evaluation.',
    },
    {
      q: 'Does the directory rank companies by market share?',
      a: 'No. Companies are grouped by function and appear because they recur in BioNixus Turkey hospital fieldwork and on TİTCK and Borsa Istanbul records; order does not indicate size.',
    },
  ],
  regulatorSource: {
    name: 'Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) — Ürün Takip Sistemi (ÜTS) medical device registrations',
    url: 'https://www.titck.gov.tr',
    asOf: '2026-09-03',
  },
  sources: [
    'Public Hospitals General Directorate and DMO tender notices, 2024–2026',
    'Borsa Istanbul filings for MLP Care and Aselsan; company annual reports, 2024–2025',
    'Ministry of Health Health Statistics Yearbook and SGK reimbursement data, 2024',
    'BioNixus Turkey hospital and biomedical engineering fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Installed-base and brand-share audits across city hospitals, university hospitals and Acıbadem, MLP Care, Memorial and Medicana facilities for imaging, ICU, laboratory and interventional equipment.',
    'Procurement-decision interviews with biomedical engineers, department heads and central buyers on tender criteria, localisation preference and service expectations.',
    'SUT tariff and localisation impact studies for implant and consumable portfolios, including domestic-versus-imported adoption shifts.',
    'Dealer and service-network evaluation for provincial coverage outside Istanbul, Ankara and İzmir.',
  ],
};
