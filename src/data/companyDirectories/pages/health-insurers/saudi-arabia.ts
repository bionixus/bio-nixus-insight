import type { DirectoryPageInput } from '../../types';

export const healthInsurersSaudiArabia: DirectoryPageInput = {
  entity: 'health-insurers',
  countrySlug: 'saudi-arabia',
  metaDescription:
    'Health insurers in Saudi Arabia: Bupa Arabia, Tawuniya, Medgulf, Malath, Al Rajhi Takaful, CHI, GOSI and NPHIES — networks, mandates.',
  introLead:
    'Private medical cover in Saudi Arabia is a regulated cooperative product, not a voluntary perk: private-sector employees and expatriates must hold a Council of Health Insurance policy, and two listed writers — Bupa Arabia and Tawuniya — collect most of those premiums.',
  introRest:
    'The Council of Health Insurance, once known as CCHI, licences the products, polices the essential-benefits floor and runs NPHIES, the national exchange that now sits between payer, provider and the regulator. GOSI administers social-insurance contributions that sit beside, not instead of, the cooperative medical policy. Medgulf, Malath, Al Rajhi’s takaful writer, Alinma Tokio Marine, Walaa, Gulf Union Alahlia and Allianz Saudi Fransi fill the next tier. Nextcare and Globemed administer a large share of claims as TPAs even when the risk sits on a listed insurer’s book. Provider networks are the commercial weapon: Al Habib, Mouwasat, Dallah, Fakeeh and Saudi German live or die on inclusion and on pre-authorisation rules for specialty drugs. This directory groups risk carriers, takaful windows, TPAs, CHI and GOSI so a manufacturer or hospital-strategy team can see who pays the claim, who adjudicates it and which platform carries the transaction.',
  stats: [
    { value: '~11m', label: 'Residents CHI reports as covered by mandatory cooperative health insurance' },
    { value: '2', label: 'Listed writers that dominate cooperative medical premiums (Bupa Arabia, Tawuniya)' },
    { value: '1', label: 'National claims-and-eligibility exchange (NPHIES) linking payers, providers and CHI' },
    { value: 'CHI', label: 'Council of Health Insurance — the product regulator, formerly referred to as CCHI' },
  ],
  channelHeading: 'How cooperative health insurance pays for private care in the Kingdom',
  channelBody:
    'The employer buys a CHI-compliant policy for each private-sector worker and eligible dependant. The product must clear an essential-benefits floor; richer plans add private rooms, broader dental and overseas treatment. Bupa Arabia and Tawuniya win most of those employer tenders, then steer members into contracted hospitals through pre-authorisation and formulary rules that specialty-drug teams feel every week. Smaller cooperative and takaful writers compete on price for SME books and on sharia windows for clients who will not place risk with a conventional writer. GOSI’s occupational and social-insurance remit is separate: it does not replace the cooperative medical card, though coordination questions still confuse foreign benefit managers. Claims now travel on NPHIES, which gives CHI a line of sight into coding, eligibility and rejection reasons that used to live in each TPA’s black box. Public-sector citizens still receive Ministry and other government care outside this loop, funded by the state and bought in large part through NUPCO, so a brand’s “Saudi payer” map is always two maps — CHI networks for the insured private workforce, government procurement for citizens in public facilities. Vision 2030’s cluster reform is starting to blur that line as Health Holding Company contracts private groups, but the claim for an expatriate still starts with a CHI policy number.',
  companies: [
    {
      name: 'Bupa Arabia for Cooperative Insurance',
      hq: 'Jeddah',
      type: 'Local',
      focus: 'Largest dedicated medical writer; corporate and SME cooperative plans',
      notes: 'Tadawul-listed specialist whose network and pre-authorisation rules are the first private-payer conversation for any specialty launch.',
    },
    {
      name: 'Tawuniya (The Company for Cooperative Insurance)',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Composite cooperative insurer with a very large medical book',
      notes: 'Oldest and broadest cooperative writer; medical is one line among several, but the membership volume rivals Bupa on many employer panels.',
    },
    {
      name: 'Medgulf Saudi Arabia',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'Medical and composite cooperative products for corporates',
      notes: 'Regional group whose Saudi medical book sits in the tier behind the two leaders and still appears on multi-insurer employer panels.',
    },
    {
      name: 'Malath Cooperative Insurance',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Cooperative medical and general lines',
      notes: 'Listed mid-tier writer used by employers that want a third quote after Bupa and Tawuniya.',
    },
    {
      name: 'Al Rajhi Takaful / Al Rajhi Company for Cooperative Insurance',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Sharia-compliant medical and general cooperative products',
      notes: 'Bank-linked takaful window that wins clients who will not place health risk with a conventional cooperative writer.',
    },
    {
      name: 'Alinma Tokio Marine',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Cooperative and takaful general lines including medical',
      notes: 'Alinma Bank–Tokio Marine joint writer; a smaller medical book, included because bank-affiliated tenders sometimes specify it.',
    },
    {
      name: 'Walaa Cooperative Insurance',
      hq: 'Khobar',
      type: 'Local',
      focus: 'Eastern Province-rooted cooperative writer with a medical line',
      notes: 'Listed insurer whose medical network matters more in Dammam and Khobar employer books than in Riyadh headlines.',
    },
    {
      name: 'Gulf Union Alahlia',
      hq: 'Khobar',
      type: 'Local',
      focus: 'Cooperative products including medical after the Alahlia combination',
      notes: 'Eastern Province writer that still shows up on SME and industrial-city panels.',
    },
    {
      name: 'Allianz Saudi Fransi',
      hq: 'Riyadh',
      type: 'MNC',
      focus: 'Bancassurance and corporate medical through a Saudi Fransi joint vehicle',
      notes: 'Multinational brand on a local cooperative licence; useful on mixed banking-and-benefits tenders.',
    },
    {
      name: 'Arabian Shield Cooperative Insurance',
      hq: 'Riyadh',
      type: 'Local',
      focus: 'Mid-tier cooperative writer with medical products',
      notes: 'Further listed capacity for employers that run a four- or five-insurer panel.',
    },
    {
      name: 'Nextcare — Saudi TPA operations',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'Claims administration and network management for insurer clients',
      notes: 'TPA that adjudicates a large volume of CHI claims on behalf of Bupa, Tawuniya and peers; the operational face many hospitals actually call.',
    },
    {
      name: 'Globemed Saudi Arabia',
      hq: 'Riyadh',
      type: 'Regional',
      focus: 'TPA and network administration',
      notes: 'Second TPA name hospital billing offices keep on speed-dial alongside Nextcare.',
    },
    {
      name: 'Council of Health Insurance (CHI)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Product regulation, essential benefits, provider accreditation, NPHIES rules',
      notes: 'The regulator formerly styled CCHI; licences the cooperative medical product and now sees claims traffic through NPHIES.',
    },
    {
      name: 'NPHIES (National Platform for Health and Insurance Exchange Services)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Eligibility, claims and coding exchange among payers, providers and CHI',
      notes: 'Not an insurer; included because it is the pipe every CHI claim now travels through and the data layer brand teams ask about.',
    },
    {
      name: 'General Organization for Social Insurance (GOSI)',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Social-insurance contributions for private-sector workers',
      notes: 'Sits beside the CHI medical card rather than replacing it; foreign benefit managers still confuse the two, which is why it is on the map.',
    },
    {
      name: 'Health Holding Company / cluster purchasers',
      hq: 'Riyadh',
      type: 'Government',
      focus: 'Public-cluster contracting of private providers; adjacent to CHI networks',
      notes: 'Not a cooperative insurer, but a growing public purchaser that can route citizen volume into the same private hospitals CHI members already use.',
    },
  ],
  categoryBlurbs: {
    local:
      'Tadawul-listed cooperative and takaful writers — Bupa Arabia, Tawuniya, Malath, Al Rajhi, Walaa, Gulf Union, Arabian Shield — that hold the CHI medical risk.',
    mnc:
      'Allianz Saudi Fransi and the foreign technology inside Alinma Tokio Marine; most medical risk is still written on a Saudi cooperative licence.',
    regional:
      'Medgulf as a regional risk carrier, plus Nextcare and Globemed as the TPAs that adjudicate claims across GCC books.',
    trade:
      'CHI, NPHIES, GOSI and Health Holding Company — the product regulator, the exchange, the social-insurance body and the public-cluster purchaser.',
  },
  growthDrivers: [
    {
      title: 'Mandatory cooperative cover for the private workforce',
      desc: 'CHI’s mandate keeps millions of expatriates and private-sector Saudis on named networks, which is why specialty-drug pre-authorisation at Bupa and Tawuniya is a launch-critical workstream.',
    },
    {
      title: 'NPHIES as a single claims pipe',
      desc: 'Eligibility and coding now leave a national trail, which tightens rejection analysis and gives CHI a supervision tool the old paper TPA era lacked.',
    },
    {
      title: 'Takaful windows for sharia-sensitive buyers',
      desc: 'Al Rajhi and bank-linked writers win employer panels that a conventional cooperative product cannot enter, expanding the number of formularies a brand must map.',
    },
    {
      title: 'Private hospitals living on network status',
      desc: 'Listed groups price capacity against CHI inclusion; a formulary or pre-auth change at Bupa or Tawuniya moves therapy mix inside Al Habib and Mouwasat within a quarter.',
    },
  ],
  faq: [
    {
      q: 'Who must hold a CHI medical policy?',
      a: 'Private-sector employees and expatriates, with dependants under the essential-benefits rules. Citizens who work only in the public sector still receive government care outside this product, though many families hold mixed status.',
    },
    {
      q: 'Is CCHI a different body from CHI?',
      a: 'It is the same Council, restyled. Older contracts and hospital conversations still say CCHI. New materials and the NPHIES programme use CHI.',
    },
    {
      q: 'Do GOSI contributions replace the medical card?',
      a: 'They do not. GOSI is social insurance. The cooperative medical policy is a CHI product bought by the employer. Benefit managers who collapse the two create coverage gaps.',
    },
    {
      q: 'Which writers matter for a specialty-drug launch?',
      a: 'Bupa Arabia and Tawuniya first, because of membership and because their pre-authorisation rules set the market. Then Medgulf, the takaful windows and the TPAs that actually answer the hospital phone.',
    },
    {
      q: 'What does BioNixus study about Saudi health insurers?',
      a: 'Network and pre-authorisation mapping in Riyadh, Jeddah and Dammam; hospital-billing interviews on NPHIES rejection codes; and employer-broker interviews on how panels choose Bupa versus Tawuniya versus a takaful window.',
    },
    {
      q: 'Is this a ranking of Saudi health insurers by premium?',
      a: 'It is a payer-system map. Writers, TPAs, CHI, NPHIES and GOSI appear because they recur in BioNixus Kingdom fieldwork and in CHI and Tadawul disclosures. Sequence follows role, not a league table of written premium.',
    },
  ],
  regulatorSource: {
    name: 'Council of Health Insurance (CHI) — licensed cooperative health-insurance products, accredited providers and NPHIES',
    url: 'https://www.chi.gov.sa',
    asOf: '2026-09-04',
  },
  sources: [
    'Council of Health Insurance product and NPHIES materials',
    'Tadawul disclosures of Bupa Arabia, Tawuniya, Malath, Walaa and peer cooperative writers',
    'GOSI public descriptions of private-sector social insurance; Health Holding Company cluster communications',
    'BioNixus Saudi payer, TPA and hospital-billing fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Pre-authorisation and formulary interviews with Bupa Arabia and Tawuniya medical teams in Jeddah and Riyadh on specialty-drug rules.',
    'Hospital-billing office interviews at Al Habib, Mouwasat and Dallah on NPHIES rejection codes and TPA call-centre behaviour.',
    'Broker and HR interviews in Riyadh and the Eastern Province on how employer panels split risk between conventional cooperative and takaful writers.',
    'Pathway studies in Riyadh, Jeddah and Dammam that track an oncology or GLP-1 claim from prescription to CHI-adjudicated payment.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
