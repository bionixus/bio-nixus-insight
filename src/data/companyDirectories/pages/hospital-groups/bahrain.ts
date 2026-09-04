import type { DirectoryPageInput } from '../../types';

export const hospitalGroupsBahrain: DirectoryPageInput = {
  entity: 'hospital-groups',
  countrySlug: 'bahrain',
  metaDescription:
    'Private hospital groups in Bahrain: Al Hilal, American Mission, Royal Bahrain (KIMS), Bahrain Specialist, Al Kindi, Ibn Al-Nafees and public systems — networks, payers.',
  introLead:
    'Bahrain has one of the highest hospital densities in the Gulf for its 1.5 million people, with a public system anchored by Salmaniya Medical Complex and King Hamad University Hospital and a private tier of about 20 hospitals that serves expatriates, insured employees and Bahrainis seeking faster access.',
  introRest:
    'The Ministry of Health, King Hamad University Hospital and the Bahrain Defence Force Royal Medical Services provide most inpatient capacity and free or subsidised care to citizens, and the Supreme Council of Health’s Sehati programme is reforming how public care is financed. Private hospitals are licensed by the National Health Regulatory Authority and grouped around a few operators: Al Hilal Healthcare with several hospitals and medical centres, the century-old American Mission Hospital with its new Riffa campus, KIMS Healthcare’s Royal Bahrain Hospital, Bahrain Specialist Hospital, Al Kindi and Ibn Al-Nafees. This directory lists the private hospital groups and operators that matter for pharmaceutical, medical device and diagnostics companies in Bahrain, alongside the public systems and payers that shape their formularies and purchasing.',
  stats: [
    { value: '~30', label: 'Hospitals in Bahrain, about 20 of them private' },
    { value: '~3,000', label: 'Hospital beds nationally, with public facilities holding roughly 70%' },
    { value: '~55%', label: 'Expatriate share of the population, the core private-hospital market' },
    { value: '2019', label: 'Year the Sehati health-financing reform began under the Supreme Council of Health' },
  ],
  channelHeading: 'How private hospital provision works in Bahrain',
  channelBody:
    'The public tier is compact but dominant. Salmaniya Medical Complex is the main tertiary hospital, supported by the psychiatric, maternity and geriatric hospitals and 27 health centres under the Ministry of Health, while King Hamad University Hospital in Busaiteen — including the Bahrain Oncology Centre — and the BDF Royal Medical Services run their own procurement and increasingly serve civilians. The Sehati reform separates purchasing from provision and gives public hospitals autonomous governance, changing how they buy medicines and devices. Private hospitals are mostly single-site or small-group operators serving expatriate workers on employer insurance and Bahrainis who pay cash or hold private cover. Al Hilal Healthcare Group is the largest by network, with hospitals in Manama, Muharraq, Riffa and Salmabad and a chain of medical centres; American Mission Hospital, founded in 1903, operates in Manama, Saar and a new Riffa hospital; KIMS Healthcare’s Royal Bahrain Hospital, Bahrain Specialist Hospital in Juffair, Al Kindi Specialised Hospital, Ibn Al-Nafees Hospital, Middle East Hospital and Noor Specialist Hospital complete the private tier, with Awali Hospital serving Bapco employees. Insurers such as Bahrain National Holding, Solidarity, GIG Bahrain and Takaful International administer employer plans and negotiate networks and tariffs, and mandatory insurance for expatriates under Sehati is intended to enlarge the insured private market. For manufacturers the channel has a public door through the Ministry of Health Materials Management Directorate, KHUH and BDF tenders via registered agents, and a private door through hospital pharmacy committees that buy from Bahrain’s established agencies.',
  companies: [
    {
      name: 'Al Hilal Healthcare Group',
      hq: 'Manama',
      type: 'Operator',
      focus: 'Largest private network: hospitals in Manama, Muharraq, Riffa and Salmabad plus medical centres',
      notes: 'Serves insured expatriates and Bahraini families; central procurement across the network makes it the reference private account.',
    },
    {
      name: 'American Mission Hospital',
      hq: 'Manama',
      type: 'Operator',
      focus: 'Non-profit hospital group with Manama, Saar and Riffa sites',
      notes: 'Oldest hospital in the Gulf; new Riffa hospital and clinics expand insured and cash capacity; strong paediatrics and family medicine.',
    },
    {
      name: 'Royal Bahrain Hospital (KIMS Healthcare)',
      hq: 'Manama',
      type: 'Regional',
      focus: 'Multi-specialty hospital of the KIMS group',
      notes: 'Part of the Kerala-based KIMS network; high insured caseload and broad specialty procurement.',
    },
    {
      name: 'Bahrain Specialist Hospital',
      hq: 'Juffair',
      type: 'Operator',
      focus: 'Tertiary private hospital with cardiac and surgical strengths',
      notes: 'Established tertiary provider; a reference site for cardiac devices, oncology and complex surgery in the private sector.',
    },
    {
      name: 'Al Kindi Specialised Hospital',
      hq: 'Zinj',
      type: 'Operator',
      focus: 'Private hospital with maternity and surgical focus',
      notes: 'Popular with Bahraini families; consistent purchaser of obstetric, paediatric and surgical products.',
    },
    {
      name: 'Ibn Al-Nafees Hospital',
      hq: 'Manama',
      type: 'Operator',
      focus: 'Multi-specialty private hospital',
      notes: 'Mid-sized hospital serving insured expatriates and cash patients; part of the second tier of private operators.',
    },
    {
      name: 'Middle East Hospital',
      hq: 'Segaya',
      type: 'Operator',
      focus: 'Private hospital with outpatient and surgical services',
      notes: 'Serves central Manama catchments; representative of the single-site private hospitals that fill the market.',
    },
    {
      name: 'Noor Specialist Hospital and Dr. Tariq Hospital',
      hq: 'Manama',
      type: 'Operator',
      focus: 'Smaller specialist private hospitals',
      notes: 'Focused on surgical specialties and elective care; relevant for devices and consumables in the private segment.',
    },
    {
      name: 'Gulf Diabetes Specialist Centre',
      hq: 'Manama',
      type: 'Operator',
      focus: 'Specialist diabetes and endocrine centre',
      notes: 'High-volume diabetes clinic in a country with one of the world’s highest prevalence rates; key account for diabetes brands and devices.',
    },
    {
      name: 'Awali Hospital (Bapco)',
      hq: 'Awali',
      type: 'Government',
      focus: 'Employer hospital for the oil sector',
      notes: 'Serves Bapco employees and dependants with independent procurement; an example of closed employer channels.',
    },
    {
      name: 'Ministry of Health — Salmaniya Medical Complex',
      hq: 'Manama',
      type: 'Government',
      focus: 'Main public tertiary hospital and health-centre network',
      notes: 'Procures through the Materials Management Directorate; the largest single buyer of medicines and devices in Bahrain.',
    },
    {
      name: 'King Hamad University Hospital and Bahrain Oncology Centre',
      hq: 'Busaiteen',
      type: 'Government',
      focus: 'Tertiary university hospital with independent procurement',
      notes: 'Runs the national oncology centre; key account for cancer therapies, imaging and surgical technology.',
    },
    {
      name: 'Bahrain Defence Force Royal Medical Services',
      hq: 'Riffa',
      type: 'Government',
      focus: 'Military hospital system open to civilians',
      notes: 'BDF Hospital and Mohammed bin Khalifa Cardiac Centre run separate tenders and high-acuity services.',
    },
    {
      name: 'Supreme Council of Health — Sehati Programme',
      hq: 'Manama',
      type: 'Government',
      focus: 'National health-financing and insurance reform',
      notes: 'Separates purchasing from provision and introduces mandatory insurance, reshaping how public and private hospitals are paid.',
    },
    {
      name: 'Bahrain National Holding, Solidarity and GIG Bahrain',
      hq: 'Manama',
      type: 'Local',
      focus: 'Leading health insurers administering employer plans',
      notes: 'Network contracts, tariffs and formularies at these insurers determine which private hospitals and brands are reimbursed.',
    },
  ],
  categoryBlurbs: {
    local:
      'Bahraini-owned private hospitals and specialist centres, from the Al Hilal network to single-site operators, and the domestic insurers that fund employer plans.',
    mnc:
      'International hospital brands do not own Bahraini hospitals; foreign expertise arrives through affiliations, visiting consultants and equipment partnerships.',
    regional:
      'Gulf and Indian-origin groups such as KIMS Healthcare that operate Bahraini hospitals as part of multi-country networks.',
    trade:
      'The Ministry of Health, KHUH, BDF and Bapco systems that hold most beds and public purchasing, plus the Sehati programme and payers governing private access.',
  },
  growthDrivers: [
    {
      title: 'Sehati financing reform',
      desc: 'Separating purchasing from provision, autonomous public hospitals and mandatory insurance for expatriates change how hospitals are paid and how they buy medicines and devices.',
    },
    {
      title: 'Private capacity expansion',
      desc: 'American Mission’s Riffa hospital, Al Hilal’s network growth and new specialist centres add private beds and procurement committees.',
    },
    {
      title: 'Chronic-disease burden',
      desc: 'Very high diabetes and cardiovascular prevalence drives demand for specialist centres, devices and therapies across public and private hospitals.',
    },
    {
      title: 'Regional medical tourism',
      desc: 'Bahrain positions itself for Saudi patients from the Eastern Province via the King Fahd Causeway, supporting private elective and specialty capacity.',
    },
  ],
  faq: [
    {
      q: 'Which are the largest private hospital groups in Bahrain?',
      a: 'Al Hilal Healthcare Group and American Mission Hospital lead by network, followed by Royal Bahrain Hospital, Bahrain Specialist Hospital, Al Kindi, Ibn Al-Nafees and Middle East Hospital.',
    },
    {
      q: 'Who runs public hospitals in Bahrain?',
      a: 'The Ministry of Health operates Salmaniya Medical Complex and health centres, King Hamad University Hospital runs independently with the Bahrain Oncology Centre, and the BDF Royal Medical Services serves military and civilian patients.',
    },
    {
      q: 'How do Bahraini hospitals buy medicines and devices?',
      a: 'MOH buys through the Materials Management Directorate, KHUH and BDF tender independently, and private hospitals purchase through pharmacy committees from Bahrain’s established agencies.',
    },
    {
      q: 'What is Sehati?',
      a: 'Bahrain’s national health-financing reform under the Supreme Council of Health, which separates purchasing from provision, grants public hospitals autonomy and introduces mandatory health insurance.',
    },
    {
      q: 'What does BioNixus study about hospital groups in Bahrain?',
      a: 'Formulary and procurement decision mapping at Al Hilal, American Mission, Royal Bahrain, Salmaniya and KHUH; KOL and pharmacy director interviews; insurer research; and account-level brand tracking.',
    },
    {
      q: 'Is this a ranking of the best hospitals?',
      a: 'No. This is a B2B directory of operators grouped by role, included because they recur in BioNixus Bahrain fieldwork and NHRA licensing records; order does not indicate quality or size.',
    },
  ],
  regulatorSource: {
    name: 'National Health Regulatory Authority (NHRA) — licensed hospitals and healthcare facilities',
    url: 'https://www.nhra.bh',
    asOf: '2026-09-03',
  },
  sources: [
    'NHRA licensed facilities register and Ministry of Health Health Statistics report, 2024',
    'Supreme Council of Health Sehati programme updates, 2024–2025',
    'Information & eGovernment Authority population data; KIMS Healthcare and Al Hilal Healthcare disclosures, 2024–2025',
    'BioNixus Bahrain hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Formulary and procurement decision mapping at Al Hilal, American Mission, Royal Bahrain, Bahrain Specialist, Salmaniya and King Hamad University Hospital.',
    'KOL, pharmacy director and Materials Management Directorate interviews on tender behaviour and brand adoption.',
    'Payer research with Bahrain National Holding, Solidarity, GIG Bahrain and TPAs on network and formulary design under Sehati.',
    'Patient pathway studies with Bahraini and expatriate patients in diabetes, cardiology, oncology and maternity.',
  ],
};
