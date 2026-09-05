import type { DirectoryPageInput } from '../../types';

export const medicalDeviceCompaniesChina: DirectoryPageInput = {
  entity: 'medical-device-companies',
  countrySlug: 'china',
  title: 'China Medtech: Mindray, NMPA and Volume Buying (2026)',
  metaDescription:
    'China medical device companies: Mindray, United Imaging, MicroPort, Weigao, Yuwell, Neusoft, Shinva, GE, Siemens, Philips, Sinopharm and NMPA.',
  introLead:
    'Provincial volume-based procurement has turned Chinese hospital technology into a tender sport: a Class III NMPA certificate is the entry ticket, a winning provincial or alliance bid is the volume, and a domestic name that can service 300 county hospitals now beats a multinational brochure in more lots than Shanghai import teams like to admit.',
  introRest:
    'Mindray, United Imaging, MicroPort, Weigao, Yuwell, Neusoft Medical and Shinva are the Chinese houses that already sit on county and tertiary capital lists. GE HealthCare, Siemens Healthineers and Philips still hold premium imaging and high-end monitoring seats in tier-1 teaching hospitals, but they now bid against domestic substitution language in the same provincial packages. Sinopharm’s device-distribution arms are the state wholesaler that many imported SKUs still ride after NMPA approval. The National Medical Products Administration in Beijing is the Class II/III gate; provincial bureaus run the local filing and the post-market inspections. BioNixus fields named tertiary and county accounts, not a single “China hospital” average.',
  stats: [
    { value: 'NMPA', label: 'National Medical Products Administration — Class II/III device gate in Beijing' },
    { value: 'VBP', label: 'Volume-based procurement alliances that reset implant and consumable prices by province' },
    { value: 'County', label: 'County-hospital upgrade programmes that now buy domestic imaging and monitoring first' },
    { value: 'Sinopharm', label: 'State distribution backbone many imported device SKUs still ride after approval' },
  ],
  channelHeading: 'NMPA file, provincial bid, Sinopharm warehouse',
  channelBody:
    'A foreign or domestic device that will be used in a Chinese public hospital needs an NMPA registration — Class I filing, Class II provincial or NMPA review, Class III NMPA review — held by a Chinese legal entity. That certificate does not put a scanner in a county CT room. Capital equipment is bought by the hospital’s equipment committee and the local health-commission budget, increasingly inside provincial or multi-province package tenders that score domestic substitution, service coverage and price. Mindray and United Imaging have used that scoring to take monitoring, ultrasound and mid-tier CT/MR lots that GE, Siemens and Philips used to treat as theirs. Consumables, stents, orthopaedic implants and infusion sets now live inside volume-based procurement: a provincial or alliance bid sets a price, winning SKUs take the public volume, and losing SKUs retreat to private hospitals and cash-pay wings. Weigao and MicroPort have learned to win those bids; multinational implant books have learned to lose them. Sinopharm’s device-distribution companies, together with regional dealers, hold the warehouse and the hospital invoice after the bid. Yuwell sits closer to the retail and homecare channel — glucose, oxygen, wheelchairs — than to the tertiary cath lab. Shinva still owns a large sterilizer and hospital-engineering installed base. Neusoft Medical competes in mid-tier imaging. BioNixus reconstructs the named provincial alliance, the named tertiary committee and the named Sinopharm or dealer warehouse before a China volume number is put in a deck.',
  companies: [
    {
      name: 'NMPA (National Medical Products Administration)',
      hq: 'Beijing',
      type: 'Government',
      focus: 'Class II/III device registration, inspections and vigilance',
      notes: 'The Beijing gate a Chinese legal entity must clear before a provincial tender committee will even open the bid envelope.',
    },
    {
      name: 'Sinopharm medical device distribution',
      hq: 'Beijing / provincial hubs',
      type: 'Distributor',
      focus: 'State wholesaler and hospital invoice path for imported and domestic devices',
      notes: 'After NMPA approval, many imported SKUs still sit in a Sinopharm warehouse before a county or tertiary dock will accept them.',
    },
    {
      name: 'Mindray',
      hq: 'Shenzhen',
      type: 'Local',
      focus: 'Patient monitoring, ultrasound, anaesthesia and in-vitro diagnostics',
      notes: 'Shenzhen house that county and many tertiary hospitals now specify for monitoring and mid-tier ultrasound ahead of the import majors.',
    },
    {
      name: 'United Imaging',
      hq: 'Shanghai',
      type: 'Local',
      focus: 'CT, MRI, PET/CT and radiotherapy systems',
      notes: 'Shanghai imaging challenger that provincial substitution lots have pulled into rooms GE and Siemens once treated as uncontested.',
    },
    {
      name: 'MicroPort',
      hq: 'Shanghai',
      type: 'Local',
      focus: 'Coronary stents, orthopaedics, rhythm management and surgical robots',
      notes: 'VBP-era stent and implant competitor; BioNixus tracks which provincial alliances it won, not a national share slide.',
    },
    {
      name: 'Weigao',
      hq: 'Weihai',
      type: 'Local',
      focus: 'Infusion consumables, orthopaedics and blood-management devices',
      notes: 'Weihai volume manufacturer that public-hospital VBP lots keep pulling onto wards when import prices fail the bid floor.',
    },
    {
      name: 'Yuwell',
      hq: 'Jiangsu',
      type: 'Local',
      focus: 'Homecare oxygen, glucose, blood-pressure and mobility devices',
      notes: 'Retail and homecare name more than a tertiary cath-lab name; hospital briefs should not file it as a Mindray peer.',
    },
    {
      name: 'Neusoft Medical',
      hq: 'Shenyang',
      type: 'Local',
      focus: 'Mid-tier CT, MRI and healthcare IT',
      notes: 'Northeast imaging house that county upgrade programmes still shortlist when a United Imaging or import quote overshoots the budget.',
    },
    {
      name: 'Shinva',
      hq: 'Zibo',
      type: 'Local',
      focus: 'Sterilizers, infection-control and hospital-engineering systems',
      notes: 'Zibo sterilizer installed base is a CSSD fact, not a brochure claim; replacement cycles follow infection-control audits.',
    },
    {
      name: 'GE HealthCare China',
      hq: 'Beijing / Shanghai',
      type: 'MNC',
      focus: 'Premium imaging, ultrasound and monitoring',
      notes: 'Still wins high-end tertiary rooms; loses more county and substitution lots than a global deck usually prints.',
    },
    {
      name: 'Siemens Healthineers China',
      hq: 'Shanghai',
      type: 'MNC',
      focus: 'Imaging, laboratory diagnostics and radiotherapy',
      notes: 'Shanghai commercial seat defends premium CT/MR and lab; provincial packages now score a domestic alternative beside it.',
    },
    {
      name: 'Philips Greater China (Health Systems)',
      hq: 'Shanghai',
      type: 'MNC',
      focus: 'Imaging, monitoring and health informatics',
      notes: 'Monitoring and ultrasound seats in tier-1 teaching hospitals; county substitution language has narrowed the mid-tier book.',
    },
    {
      name: 'Provincial volume-based procurement alliances',
      hq: 'Multiple provinces',
      type: 'Government',
      focus: 'Alliance tenders that set public-hospital implant and consumable prices',
      notes: 'The bid that resets a stent or infusion price across a province or a multi-province bloc; losing it is not a soft quarter.',
    },
    {
      name: 'Regional device dealers (provincial specialists)',
      hq: 'Provincial capitals',
      type: 'Distributor',
      focus: 'Installation, service and hospital relationships beside Sinopharm',
      notes: 'County hospitals still pay a local dealer who holds the service van; BioNixus scores those vans by province, not by a Shanghai HQ slide.',
    },
    {
      name: 'Lepu Medical',
      hq: 'Beijing',
      type: 'Local',
      focus: 'Cardiovascular devices, IVD and surgical consumables',
      notes: 'Beijing cardiovascular house that appears on the same VBP shortlists as MicroPort when a provincial stent lot opens.',
    },
    {
      name: 'Tertiary hospital equipment committees (class-A examples)',
      hq: 'Beijing / Shanghai / Guangzhou',
      type: 'Operator',
      focus: 'In-hospital capital committees that still specify premium imaging',
      notes: 'The committee that can still buy a Siemens or GE gantry when the provincial package would have forced a domestic mid-tier unit.',
    },
  ],
  categoryBlurbs: {
    local:
      'Shenzhen, Shanghai, Weihai and Zibo manufacturers that provincial substitution and VBP lots have pulled onto county and tertiary lists.',
    mnc:
      'GE, Siemens and Philips seats that still hold premium tier-1 rooms and now bid against domestic scoring in the same provincial packages.',
    regional:
      'Provincial dealers who hold the service van and the county invoice when Sinopharm is the wholesaler but not the last mile.',
    trade:
      'NMPA as the Class II/III gate, provincial VBP alliances as the price setter, Sinopharm as the state warehouse.',
  },
  growthDrivers: [
    {
      title: 'County-hospital upgrade programmes',
      desc: 'Health-commission budgets for county CT, monitoring and ultrasound now score domestic service coverage; Mindray and United Imaging have used that score.',
    },
    {
      title: 'Volume-based procurement for implants and consumables',
      desc: 'Provincial and alliance bids reset stent, orthopaedic and infusion prices; MicroPort, Weigao and Lepu treat those bids as the year, not as a side channel.',
    },
    {
      title: 'NMPA review timelines and local-entity rules',
      desc: 'A foreign brand without a Chinese registrant and a post-market team does not reach the provincial envelope, however strong the overseas certificate looks.',
    },
    {
      title: 'Premium tertiary rooms versus substitution lots',
      desc: 'Class-A teaching hospitals still specify import imaging; the same province’s county package may forbid it. BioNixus splits those two rooms in every forecast.',
    },
  ],
  faq: [
    {
      q: 'How are medical devices registered in China?',
      a: 'NMPA classifies them. Class I is a filing; Class II and III need review held by a Chinese legal entity. Provincial bureaus handle many Class II files and the inspections that follow.',
    },
    {
      q: 'What is volume-based procurement for devices?',
      a: 'Provincial or multi-province alliances tender a price for implants and consumables. Winning SKUs take the public-hospital volume; losing SKUs retreat to private and cash-pay wings.',
    },
    {
      q: 'Do GE, Siemens and Philips still win Chinese imaging lots?',
      a: 'Yes in tier-1 teaching-hospital rooms. County and substitution packages increasingly award Mindray, United Imaging or Neusoft Medical on service and price scores.',
    },
    {
      q: 'What is Sinopharm’s role in devices?',
      a: 'Its device-distribution arms warehouse and invoice many imported and some domestic SKUs after NMPA approval. Provincial dealers still own a share of county last-mile and service.',
    },
    {
      q: 'What does BioNixus study on Chinese device accounts?',
      a: 'Named provincial VBP reconstructions, tertiary equipment-committee interviews, county installed-base walks, and Sinopharm-versus-dealer warehouse mapping.',
    },
    {
      q: 'Is this a national share ranking of Chinese medtech?',
      a: 'No. Companies are listed by role because they recur in BioNixus hospital fieldwork and on NMPA-visible files; order is not a league table.',
    },
  ],
  regulatorSource: {
    name: 'NMPA — National Medical Products Administration, medical device registration and supervision',
    url: 'https://www.nmpa.gov.cn',
    asOf: '2026-09-05',
  },
  sources: [
    'NMPA medical-device registration and classification notices, consulted 2026',
    'Provincial volume-based procurement alliance award notices for stents, orthopaedics and infusion',
    'Mindray, United Imaging, MicroPort, Weigao, Yuwell, Neusoft Medical and Shinva published company descriptions',
    'BioNixus China tertiary and county hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Provincial VBP award reconstructions so a MicroPort or Weigao “win” is tied to a named alliance, not a national average.',
    'County-hospital imaging and monitoring walks that separate Mindray and United Imaging rooms from leftover import installed base.',
    'Tertiary equipment-committee interviews in Beijing, Shanghai and Guangzhou on when a Siemens or GE gantry is still specifiable.',
    'Sinopharm warehouse versus provincial-dealer service-van mapping for the SKUs that actually reach the dock.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
