import type { DirectoryPageInput } from '../../types';

export const constructionCompaniesUae: DirectoryPageInput = {
  entity: 'construction-companies',
  countrySlug: 'uae',
  metaDescription:
    'UAE contractors: ALEC, Trojan, Al-Futtaim Construction, Multiplex, Acciona, Drake & Scull — Dubai Municipality and ADM licences, emirate packages.',
  introLead:
    'A tower on Sheikh Zayed Road and a hospital in Khalifa City do not share a contractor licence: Dubai Municipality stamps one file, Abu Dhabi City Municipality stamps the other, and a house that is busy in Business Bay can still be a stranger to the capital’s tender portal.',
  introRest:
    'ALEC and Trojan General Contracting take most of the Dubai mid-and-high-rise conversation BioNixus hears from developers. Al-Futtaim Construction sits inside the same merchant group that sells cars and runs malls, which matters when the offtaker is an internal sister company rather than a third-party master developer. Brookfield Multiplex and Acciona bring listed foreign systems onto metro, stadium and marine packages; the Drake & Scull name still appears on MEP and civil files even as the listed vehicle has been restructured more than once. National houses such as ASGC, Al Naboodah and Arabtec’s remaining operating slices fill the volume that the headline names cannot staff. This page is an emirate-split contractor map plus the two municipal desks. It is not a catalogue of every fit-out joinery shop in Al Quoz.',
  stats: [
    { value: '2 stamps', label: 'Dubai Municipality versus Abu Dhabi City Municipality — the pair that still split most mainland building files' },
    { value: 'Jebel Ali / Khalifa', label: 'Ports where structural steel and plant actually land before a Business Bay or Saadiyat pour' },
    { value: 'MEP legacy', label: 'Drake & Scull-era books that owners still name even when the legal vehicle on the invoice has changed' },
    { value: 'Free-zone plots', label: 'DMCC, DAFZA and KEZAD sites that need a contractor licence the mainland municipality did not issue' },
  ],
  channelHeading: 'How an emirate building permit becomes a contractor award',
  channelBody:
    'The commercial trade licence sits with the Department of Economy and Tourism in Dubai or the Abu Dhabi Department of Economic Development. The building permit and contractor registration sit with Dubai Municipality or Abu Dhabi City Municipality. Those two stamps do not travel. A house registered only in Dubai cannot legally run a mainland Abu Dhabi superstructure without a capital vehicle or a joint-venture partner who already holds the ADM file. Free-zone plots add a third desk: DMCC, Jafza and KEZAD issue their own contractor no-objection letters before the municipality will look at drawings. Payment follows the developer’s milestone certificate, often countersigned by an Atkins, Arcadis or local PMC. Materials clear Dubai Customs at Jebel Ali or Abu Dhabi Customs at Khalifa Port; re-export of unused steel is a parallel P&L for the same yard. Labour camps in Sonapur, Al Muhaisnah or the capital’s industrial districts need Ministry of Human Resources and Emiratisation quotas plus a municipal camp permit. BioNixus therefore designs a UAE contractor study around the emirate stamp, the free-zone letter and the named developer, not around a federal “construction output” cell that pretends seven emirates bid as one.',
  companies: [
    {
      name: 'ALEC',
      hq: 'Dubai',
      type: 'Local',
      focus: 'High-rise, hospitality and mixed-use superstructure',
      notes: 'The Dubai tower name developers repeat first; capital-city packages still need a separate ADM-registered vehicle or partner.',
    },
    {
      name: 'Trojan General Contracting',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Residential and commercial building packages',
      notes: 'Volume mid-rise house that master developers use when ALEC is already full on the neighbouring plot.',
    },
    {
      name: 'Al-Futtaim Construction',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Group and third-party building, retail and civil',
      notes: 'Internal offtake from Al-Futtaim malls and auto sites is a real book; treat sister-company awards as a different buying centre.',
    },
    {
      name: 'Brookfield Multiplex',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Complex buildings, stadiums and selected infrastructure',
      notes: 'Listed foreign system invited when the owner wants a programme culture that local mid-rise houses do not advertise.',
    },
    {
      name: 'Acciona',
      hq: 'Dubai / Abu Dhabi',
      type: 'MNC',
      focus: 'Water, metro civil and selected infrastructure',
      notes: 'Spanish-parent infrastructure book; a hospital podium brief can skip it, a desalination or metro file cannot.',
    },
    {
      name: 'Drake & Scull (legacy and current vehicles)',
      hq: 'Dubai',
      type: 'Local',
      focus: 'MEP and civil packages under successor operating companies',
      notes: 'Owners still say the historic name; confirm the legal entity on the current invoice before treating it as one balance sheet.',
    },
    {
      name: 'ASGC',
      hq: 'Dubai',
      type: 'Regional',
      focus: 'Building and civil across the Emirates and wider Gulf',
      notes: 'Gulf-scale contractor that can add a Doha or Riyadh package without inventing a new family house.',
    },
    {
      name: 'Al Naboodah Construction Group',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Civil, roads and selected buildings',
      notes: 'Family civil book that infrastructure offtakers still invite when the file is asphalt and bridges rather than a glass tower.',
    },
    {
      name: 'Arabtec Construction (operating residual)',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Remaining building packages under the historic brand',
      notes: 'Confirm live awards and the current licence holder; the brand still appears in owner memory after the listed chapter closed.',
    },
    {
      name: 'Dutco Construction',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Civil, joint-venture infrastructure and industrial',
      notes: 'Joint-venture vehicle that metro and industrial owners use when they want a Dubai merchant parent on the consortium.',
    },
    {
      name: 'China State Construction — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'High-rise and labour-intensive building',
      notes: 'PRC-parent camp scale that master developers still call when the programme cannot wait for a thinner local crew.',
    },
    {
      name: 'Emaar Properties (development offtaker)',
      hq: 'Dubai',
      type: 'Developer',
      focus: 'Master-developer that lets Downtown, Dubai Hills and creek packages',
      notes: 'Not the trade contractor: Downtown awards still go to ALEC, Multiplex or a named house, then Emaar certifies the handover.',
    },
    {
      name: 'Aldar Properties',
      hq: 'Abu Dhabi',
      type: 'Developer',
      focus: 'Capital master-developer for Yas, Saadiyat and Reem packages',
      notes: 'The Abu Dhabi invitation that a Dubai-only contractor cannot answer without an ADM partner.',
    },
    {
      name: 'Dubai Municipality',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Building permits, contractor registration and inspection',
      notes: 'The stamp a Business Bay superstructure cannot skip; it does not authorise a Khalifa City pour.',
    },
    {
      name: 'Abu Dhabi City Municipality (ADM)',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Capital building permits and contractor registration',
      notes: 'The capital twin of Dubai Municipality; briefs that sample only DM files will under-cover government and Aldar work.',
    },
  ],
  categoryBlurbs: {
    local:
      'ALEC, Trojan, Al-Futtaim Construction, Al Naboodah, Dutco and the Drake & Scull successors — Dubai-rooted houses that still take most mainland building awards in the emirate.',
    mnc:
      'Multiplex, Acciona and China State bring foreign programme or camp systems. They win specific package types; they do not replace the municipal licence a local house already holds.',
    regional:
      'ASGC is the Gulf-scale exception that already runs P&Ls outside the Emirates. Other regional joint ventures appear on metro and hotel files beside the local set.',
    trade:
      'Emaar and Aldar as the two master-developer offtakers, plus Dubai Municipality and ADM as the stamps that split the country. Free-zone NOCs sit beside those stamps.',
  },
  growthDrivers: [
    {
      title: 'Emirate-split contractor licences',
      desc: 'A Dubai Municipality registration is not an ADM file. Owners in the capital still reject a Business Bay invoice when the pour is on Saadiyat.',
    },
    {
      title: 'Master-developer calendars',
      desc: 'Emaar and Aldar package waves move more cranes than many municipal school programmes. Sampling only government tenders under-states private offtake.',
    },
    {
      title: 'MEP vehicle churn',
      desc: 'Drake & Scull’s legal history means owners name a brand while the invoice sits with a successor. Fieldwork has to collect the trade licence number, not the logo.',
    },
    {
      title: 'Free-zone plots as a third permit',
      desc: 'DMCC, Jafza and KEZAD letters arrive before the municipality opens the drawing set. A study that only watches mainland permits will miss warehouse and industrial halls.',
    },
  ],
  sections: [
    {
      heading: 'Dubai volume versus capital government work',
      paragraphs: [
        'Dubai awards are household towers, hotels and malls. Abu Dhabi awards add government buildings, cultural district halls and energy-company offices that still want a capital invoice. That is why a mystery shop of contractor prequalification that only calls ALEC’s Dubai estimator will mis-read Yas and Reem.',
        'Northern emirates — Sharjah, Ajman, Ras Al Khaimah — usually inherit the Dubai house’s satellite crew rather than a third independent contractor. A brief that promises “seven-emirate coverage” from one ADM-only vehicle is promising a weekend van.',
      ],
    },
  ],
  faq: [
    {
      q: 'Can one contractor cover Dubai and Abu Dhabi?',
      a: 'Only with two municipal registrations or a joint venture. Dubai Municipality and ADM do not recognise each other’s contractor file as a mainland building permit.',
    },
    {
      q: 'Who awards most private packages in Dubai?',
      a: 'Emaar and the large master developers let the Downtown and hills files. ALEC, Trojan, Multiplex and Al-Futtaim Construction are the houses those invitations usually reach.',
    },
    {
      q: 'Is Drake & Scull still a single company?',
      a: 'Treat the name as a historic brand. Confirm the current operating company, trade licence and MEP or civil scope before putting one row on a treasury slide.',
    },
    {
      q: 'Where do steel and plant enter the country?',
      a: 'Jebel Ali for most Dubai plots; Khalifa Port for most capital plots. Customs is emirate-level under federal rules; the contractor named the yard in the method statement.',
    },
    {
      q: 'What fieldwork does BioNixus run on UAE contractors?',
      a: 'Paired Dubai–Abu Dhabi procurement interviews; site-gate walks that record the house on the crane, not the developer logo; and municipal-registration checks against the stamp claimed in the bid.',
    },
    {
      q: 'Does this page rank UAE contractors by revenue?',
      a: 'Revenue and crane count are not the sort key. A name is here because it holds an emirate licence, wins packages we field, or issues the developer invitation.',
    },
  ],
  regulatorSource: {
    name: 'Dubai Municipality — building permits, contractor registration and inspection',
    url: 'https://www.dm.gov.ae',
    asOf: '2026-09-05',
  },
  sources: [
    'Dubai Municipality building-permit and contractor-registration pages, consulted 2026',
    'Abu Dhabi City Municipality public licensing overview',
    'Developer and contractor capability pages for ALEC, Trojan, Al-Futtaim Construction, Multiplex, Acciona, ASGC and Al Naboodah',
    'BioNixus UAE site-gate, procurement and municipal-licence fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Same-month estimator calls in Dubai and Abu Dhabi on the same building type to catch split-licence price and programme gaps.',
    'Downtown and Yas site-gate walks that write down the trade contractor on the crane, not the Emaar or Aldar hoarding.',
    'Dubai Municipality and ADM registration checks against the class printed in prequalification forms.',
    'Free-zone NOC walkthroughs at Jafza and KEZAD with industrial owners who never filed a mainland municipal drawing.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
