import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesIran: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'iran',
  metaDescription:
    'Medical device companies in Iran: IMED-regulated market with Pooyandegan Rah Saadat, Behyaar, Parto Negar Persia, Pishtaz Teb, Mindray, SSO and university buyers.',
  introLead:
    'Iran is the only country in the Middle East with a genuinely large domestic medical device industry: sanctions, currency controls and a population of nearly 90 million have pushed local manufacturers into patient monitoring, ICU equipment, imaging, dialysis and IVD, so the market map looks less like the Gulf and more like a self-reliant emerging economy with selective imports.',
  introRest:
    'Devices are regulated by the Iran Medical Device Regulatory Authority (IMED) within the Ministry of Health and Medical Education’s Food and Drug Administration, which classifies products, licenses importers and manufacturers and sets import priorities based on domestic availability. Public university-of-medical-sciences hospitals and the Social Security Organization network are the main buyers, and imports of multinational technology move through Iranian authorised representatives under humanitarian exemptions and allocated foreign currency. Chinese and Korean brands have expanded as Western supply has become intermittent. This directory lists the regulator, public buyers, domestic manufacturers, importing representatives and foreign brands present in Iran’s medtech market and explains how they interact under current constraints.',
  stats: [
    { value: '$1.5bn+', label: 'Iranian medical device market, 2024 estimate' },
    { value: '~50%', label: 'Share of device demand met by domestic manufacturers (by volume)' },
    { value: '60+', label: 'Universities of medical sciences operating public hospital networks' },
    { value: '~70', label: 'Hospitals run by the Social Security Organization' },
  ],
  channelHeading: 'How medical devices reach hospitals in Iran',
  channelBody:
    'Iran’s device channel is shaped by IMED classification, currency allocation and sanctions. Every device must be registered with IMED by an Iranian manufacturer or licensed importer, and IMED periodically restricts imports of categories where domestic production is deemed sufficient, which protects local makers of monitors, beds, ICU equipment, disposables and increasingly imaging and dialysis systems. Public hospitals are run by more than 60 universities of medical sciences under the Ministry of Health and buy through university procurement, with capital equipment often allocated centrally through ministry programmes and budget-linked foreign-currency approvals; the Social Security Organization runs its own network of around 70 hospitals, including Milad in Tehran, and procures separately, as do the armed forces, oil company and charitable hospitals. Imported technology from Siemens Healthineers, GE HealthCare, Philips and others reaches Iran through authorised representatives and intermediaries under humanitarian exemptions, but service, spare parts and payment channels are unreliable, so Chinese brands such as Mindray and Korean brands such as Samsung Medison have gained substantial share in monitoring, ultrasound and imaging. Domestic manufacturers including Pooyandegan Rah Saadat, Behyaar Sanat Sepahan and Parto Negar Persia sell directly to hospitals and through regional distributors, and IVD producers such as Pishtaz Teb supply laboratories with locally made kits. The private hospital sector in Tehran, Shiraz, Mashhad and Isfahan buys premium imported equipment where currency access allows and is a key account for representatives.',
  companies: [
    {
      name: 'Iran Medical Device Regulatory Authority (IMED)',
      hq: 'Tehran',
      type: 'Government',
      focus: 'Device classification, registration and import licensing',
      notes: 'Sets import priorities based on domestic availability and licenses every manufacturer and importer operating in the market.',
    },
    {
      name: 'Universities of Medical Sciences — Hospital Procurement',
      hq: 'Tehran',
      type: 'Government',
      focus: 'Public hospital purchasing across more than 60 university networks',
      notes: 'Tehran, Shahid Beheshti, Iran, Shiraz, Mashhad and Isfahan universities anchor public capital-equipment demand under ministry allocations.',
    },
    {
      name: 'Social Security Organization (SSO) — Medical Procurement',
      hq: 'Tehran',
      type: 'Government',
      focus: 'Equipment for around 70 SSO hospitals including Milad',
      notes: 'Independent public buyer with its own tenders and one of the largest single hospital networks in the country.',
    },
    {
      name: 'Pooyandegan Rah Saadat',
      hq: 'Tehran',
      type: 'Local',
      focus: 'Patient monitors, ECG and central monitoring systems',
      notes: 'The leading Iranian monitoring manufacturer, supplying most public ICUs and exporting to neighbouring markets.',
    },
    {
      name: 'Behyaar Sanat Sepahan',
      hq: 'Isfahan',
      type: 'Local',
      focus: 'ICU beds, ventilators and hospital equipment',
      notes: 'Isfahan-based manufacturer whose ICU and ward equipment fills categories where imports are restricted.',
    },
    {
      name: 'Parto Negar Persia (PNP)',
      hq: 'Tehran',
      type: 'Local',
      focus: 'Domestic imaging systems including CT, MRI and nuclear medicine',
      notes: 'Iran’s principal imaging manufacturer, developed with state support to reduce dependence on sanctioned imports.',
    },
    {
      name: 'Pishtaz Teb Diagnostics',
      hq: 'Tehran',
      type: 'Local',
      focus: 'IVD kits and laboratory reagents',
      notes: 'Major domestic diagnostics producer supplying public and private laboratories with locally made immunoassay and biochemistry kits.',
    },
    {
      name: 'Mindray (Iran representatives)',
      hq: 'China',
      type: 'MNC',
      focus: 'Monitoring, ultrasound, imaging and IVD',
      notes: 'The most widely installed foreign brand in recent years, supplied through Iranian representatives with local service capacity.',
    },
    {
      name: 'Samsung Medison (Iran representatives)',
      hq: 'South Korea',
      type: 'MNC',
      focus: 'Ultrasound and digital radiography',
      notes: 'Korean imaging brand with meaningful share in ultrasound through authorised Iranian distributors.',
    },
    {
      name: 'Siemens Healthineers (via Iranian representatives)',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Imaging and laboratory diagnostics installed base',
      notes: 'Large legacy installed base in university hospitals; new supply and service move through representatives under humanitarian exemptions and remain intermittent.',
    },
    {
      name: 'GE HealthCare (via Iranian representatives)',
      hq: 'USA',
      type: 'MNC',
      focus: 'Imaging and monitoring installed base',
      notes: 'Historic installed base in CT and MRI; parts and upgrades constrained by sanctions, creating service gaps filled by local engineering firms.',
    },
    {
      name: 'Philips (via Iranian representatives)',
      hq: 'Netherlands',
      type: 'MNC',
      focus: 'Imaging, monitoring and cardiology systems',
      notes: 'Present through representatives; humanitarian-exemption supply covers selected categories with limited service continuity.',
    },
    {
      name: 'Fresenius Medical Care and domestic dialysis suppliers',
      hq: 'Germany',
      type: 'MNC',
      focus: 'Dialysis systems and consumables',
      notes: 'Imported dialysis machines coexist with growing local production of dialysers and consumables under IMED localisation policy.',
    },
    {
      name: 'Iranian Medical Devices Manufacturers Association',
      hq: 'Tehran',
      type: 'Local',
      focus: 'Industry body for domestic manufacturers',
      notes: 'Represents several hundred local producers and lobbies IMED on import restrictions and localisation priorities.',
    },
    {
      name: 'Milad Hospital — Procurement',
      hq: 'Tehran',
      type: 'Operator',
      focus: 'Largest SSO hospital equipment purchasing',
      notes: 'One of the biggest hospitals in the Middle East; a reference account for monitoring, imaging and laboratory technology in the SSO network.',
    },
  ],
  categoryBlurbs: {
    local:
      'Iranian manufacturers of monitors, ICU equipment, imaging, dialysis consumables and IVD kits that supply roughly half of domestic device demand and benefit from IMED import restrictions.',
    mnc:
      'Foreign brands present through Iranian authorised representatives; Chinese and Korean suppliers dominate new installations while Western brands mainly maintain legacy installed bases under humanitarian exemptions.',
    regional:
      'Turkish, Emirati and Indian intermediaries and distributors that channel imported devices and spare parts into Iran within sanctions-compliant humanitarian frameworks.',
    trade:
      'The regulator, the university and Social Security Organization buyers and the industry association whose allocation, tender and localisation decisions define the market.',
  },
  growthDrivers: [
    {
      title: 'Localisation under IMED import restrictions',
      desc: 'IMED’s policy of restricting imports where domestic products exist continues to expand local manufacturing into imaging, dialysis and laboratory categories previously dominated by foreign brands.',
    },
    {
      title: 'Chinese and Korean brand penetration',
      desc: 'Reliable supply, service and payment channels have allowed Mindray, Samsung Medison and other Asian manufacturers to capture share from Western brands across monitoring, ultrasound and imaging.',
    },
    {
      title: 'Ageing installed base and service demand',
      desc: 'Legacy Western imaging and laboratory systems require parts and upgrades that sanctions make difficult, creating demand for local biomedical engineering services and refurbished equipment.',
    },
    {
      title: 'Currency allocation and health budget cycles',
      desc: 'Access to preferential foreign currency for medical imports drives annual swings in equipment purchasing, making allocation timing a central variable for representatives and hospitals.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in Iran?',
      a: 'Through the Iran Medical Device Regulatory Authority within the Ministry of Health’s Food and Drug Administration, which classifies devices, licenses Iranian manufacturers and importers and may restrict imports of categories with sufficient domestic production.',
    },
    {
      q: 'Can Western medical device companies sell in Iran?',
      a: 'Medical devices generally fall under humanitarian exemptions to sanctions, but payment channels, export controls and compliance risk mean Western brands mostly operate through Iranian representatives with intermittent supply and limited service continuity.',
    },
    {
      q: 'Who buys medical equipment for Iranian public hospitals?',
      a: 'Universities of medical sciences purchase for Ministry of Health hospitals under central allocations and currency approvals, while the Social Security Organization, the armed forces and charitable foundations run separate procurement for their networks.',
    },
    {
      q: 'How strong is domestic medical device manufacturing in Iran?',
      a: 'Substantial by regional standards. Pooyandegan Rah Saadat, Behyaar, Parto Negar Persia and Pishtaz Teb are among several hundred manufacturers covering roughly half of domestic demand by volume, with exports to neighbouring markets.',
    },
    {
      q: 'What does BioNixus study about medical device companies in Iran?',
      a: 'Installed-base and brand-share mapping across university, SSO and private hospitals; procurement and localisation-policy interviews with biomedical engineers and hospital administrators; representative and service-network evaluation; and market sizing for specific device categories under import restrictions.',
    },
    {
      q: 'Is this list ordered by company size?',
      a: 'No. Organisations are grouped by role and included because they recur in BioNixus Iran fieldwork and on IMED registration records; sequence carries no ranking.',
    },
  ],
  regulatorSource: {
    name: 'Iran Medical Device Regulatory Authority (IMED) — registered manufacturers, importers and devices',
    url: 'https://imed.ir',
    asOf: '2026-09-03',
  },
  sources: [
    'Iran Food and Drug Administration and IMED import-policy announcements, 2024–2026',
    'Statistical Centre of Iran and Ministry of Health hospital statistics, 2024',
    'Iranian Medical Devices Manufacturers Association production and export data, 2024',
    'BioNixus Iran hospital and biomedical engineering fieldwork via local partners, 2023–2026',
  ],
  fieldNotes: [
    'Installed-base and brand-share audits across Tehran, Shiraz, Mashhad and Isfahan university hospitals, SSO hospitals and private facilities for monitoring, imaging, dialysis and laboratory equipment.',
    'Procurement and localisation-policy interviews with biomedical engineers, hospital administrators and IMED-experienced importers on import restrictions, currency allocation and brand preference.',
    'Representative and service-network evaluation for foreign brands operating under humanitarian exemptions.',
    'Category-level market sizing where domestic and imported devices compete, including dialysis consumables, ultrasound and IVD.',
  ],
};
