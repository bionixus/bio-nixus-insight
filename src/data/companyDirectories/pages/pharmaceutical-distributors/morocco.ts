import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsMorocco: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'morocco',
  metaDescription:
    'Pharmaceutical distributors in Morocco: the 66 licensed grossistes-répartiteurs led by Cooper Pharma Répartition, Sophaca, GPM, UGP and Maphar — AMMPS rules and margins.',
  introLead:
    'Morocco runs one of the most regulated wholesale systems in Africa: 66 licensed grossistes-répartiteurs, each obliged to hold safety stock and serve every pharmacy in its territory, deliver about 70% of the medicines dispensed by the country’s 12,000-plus independent pharmacies at margins fixed by decree.',
  introRest:
    'Because pharmacy ownership is reserved for individual pharmacists and chains are prohibited, the wholesaler is the only route to retail scale, and the Competition Council reported in 2026 that six groups control 84% of a wholesale market worth MAD 16.3 billion. Manufacturers, whether Moroccan companies such as Cooper Pharma, Sothema and Laprophan or multinational affiliates, sell to these wholesalers and directly to the Ministry of Health, which buys through its procurement division for public hospitals and the expanding AMO insurance population. The new Agence Marocaine des Médicaments et des Produits de Santé (AMMPS) has taken over registration and establishment licensing from the former Direction du Médicament. This directory lists the public buyer, the leading wholesale groups by region and the manufacturer-distributors that shape access to Moroccan pharmacies and clinics.',
  stats: [
    { value: 'MAD 16.3bn', label: 'Wholesale distribution turnover, 2024 (Competition Council)' },
    { value: '66', label: 'Licensed grossistes-répartiteurs in activity, 2024' },
    { value: '84%', label: 'Wholesale market share held by the six largest groups' },
    { value: '~70%', label: 'Share of pharmacy-dispensed medicines routed via wholesalers' },
  ],
  channelHeading: 'How pharmaceutical distribution works in Morocco',
  channelBody:
    'A medicine reaches a Moroccan patient through one of two chains. In the private chain, the industrial pharmaceutical establishment holding the marketing authorisation, either a local manufacturer or the Moroccan affiliate of a multinational, sells to grossistes-répartiteurs, which deliver several times a day to independent pharmacies and to the medicine reserves of private clinics. Wholesaler and pharmacy margins are set by the 2014 pricing reform: roughly 10% of the public price for the wholesaler on standard products, falling to under 2% on high-priced specialty lines, which is why wholesalers compete on delivery frequency, credit and regional depth rather than price. The big groups operate regional subsidiaries, so Cooper Pharma Répartition, for example, covers the Casablanca-Settat, Chaouia and Tensift regions through separate entities, while Oriental Medica and C.P.R.E serve the east from Oujda. In the public chain, the Ministry of Health’s procurement division tenders nationally for hospitals and health centres, and the roll-out of AMO Tadamon insurance for previously uncovered households is shifting demand from cash purchases to reimbursed prescriptions. Casablanca-Settat and Rabat-Salé-Kénitra host 39% of the wholesalers; coverage of the south and the interior depends on a handful of regional operators and on the safety-stock obligations imposed on every licensee.',
  companies: [
    {
      name: 'Ministry of Health and Social Protection — Division de l’Approvisionnement',
      hq: 'Rabat',
      type: 'Government',
      focus: 'National tenders for public hospitals and health centres',
      notes: 'The public buyer for the hospital network and vaccination programmes; awards are delivered to regional pharmacy depots.',
    },
    {
      name: 'Cooper Pharma Répartition',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'National wholesale group with regional entities (Chaouia, Tensift, Benisnassen)',
      notes: 'Distribution arm of the Cooper Pharma group and one of the largest wholesale networks, reaching pharmacies in every region through territorial subsidiaries.',
    },
    {
      name: 'Sophaca',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Wholesale distribution for Casablanca and the centre',
      notes: 'One of the long-established Casablanca grossistes-répartiteurs with dense urban pharmacy coverage.',
    },
    {
      name: 'GPM (Groupement Pharmaceutique du Maroc)',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Pharmacist-linked wholesale distribution',
      notes: 'Wholesale group rooted in the pharmacist community; a benchmark for service levels to independent officines.',
    },
    {
      name: 'UGP (Union des Grossistes Pharmaceutiques)',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Wholesale distribution to pharmacies and clinics',
      notes: 'Casablanca-based wholesaler among the significant mid-tier operators supplying the Grand Casablanca pharmacy base.',
    },
    {
      name: 'Dipharm',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Distribution and industrial pharmacy for the Maghreb',
      notes: 'Wholesaler with an industrial arm; illustrates the Moroccan pattern of combining repackaging and distribution under one licence.',
    },
    {
      name: 'SPR (Société de Pharmacie et de Répartition)',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Regional wholesale distribution',
      notes: 'Established Casablanca répartiteur serving pharmacies across the axis toward Rabat and El Jadida.',
    },
    {
      name: 'Recamed',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Pharmacy and clinic wholesale supply',
      notes: 'Mid-sized wholesaler with a reputation for clinic and specialty-line service in the economic capital.',
    },
    {
      name: 'Sophadim',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Wholesale distribution to independent pharmacies',
      notes: 'Independent operator in a market where independents compete with six dominant groups on delivery frequency and credit.',
    },
    {
      name: 'Afric Med Distribution',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Wholesale distribution with export ambitions toward West Africa',
      notes: 'Licensed grossiste positioned on Morocco’s role as a pharmaceutical gateway to francophone Africa.',
    },
    {
      name: 'Oriental Medica',
      hq: 'Oujda',
      type: 'Local',
      focus: 'Regional wholesaler for the Oriental region',
      notes: 'Oujda-based operator that reaches pharmacies along the Algerian border where national groups are thinner.',
    },
    {
      name: 'C.P.R.E (Coopérative Pharmaceutique de Répartition de l’Est)',
      hq: 'Oujda',
      type: 'Local',
      focus: 'Cooperative wholesale for eastern Morocco',
      notes: 'Pharmacist cooperative model serving the east; useful comparator for cooperative-versus-corporate service levels.',
    },
    {
      name: 'Maphar (Eurapharma / CFAO)',
      hq: 'Casablanca',
      type: 'MNC',
      focus: 'Manufacturing, importation and distribution for multinational principals',
      notes: 'Former Sanofi affiliate now within CFAO’s Eurapharma network; the main foreign-owned industrial and distribution platform in Morocco.',
    },
    {
      name: 'Sothema',
      hq: 'Bouskoura',
      type: 'Local',
      focus: 'Listed manufacturer supplying wholesalers and public tenders',
      notes: 'Casablanca Stock Exchange-listed producer whose direct hospital tenders and wholesaler sales illustrate the manufacturer side of the chain.',
    },
    {
      name: 'Laprophan',
      hq: 'Casablanca',
      type: 'Local',
      focus: 'Manufacturer with national trade coverage',
      notes: 'Long-standing Moroccan pharmaceutical group; a reference for how local producers manage wholesaler relationships and promotional coverage.',
    },
    {
      name: 'DHL Global Forwarding Maroc',
      hq: 'Casablanca',
      type: 'MNC',
      focus: 'Temperature-controlled inbound freight and brokerage',
      notes: 'Cold-chain freight partner for imported biologics arriving via Casablanca Mohammed V and Tanger Med.',
    },
  ],
  categoryBlurbs: {
    local:
      'Moroccan grossistes-répartiteurs licensed by AMMPS to buy from manufacturers and deliver to every pharmacy and clinic in their territory under safety-stock and public-service obligations.',
    mnc:
      'Foreign-owned distribution platforms and freight providers; Maphar imports and distributes for multinational principals, while logistics groups move temperature-sensitive product into Casablanca and Tangier.',
    regional:
      'Maghreb and pan-African groups that use Morocco as a base for West African supply, reflecting the country’s ambition to become a pharmaceutical export hub.',
    trade:
      'The Ministry of Health procurement division and the listed and family-owned manufacturers whose direct tender sales and wholesaler terms shape access to Moroccan patients.',
  },
  growthDrivers: [
    {
      title: 'Generalisation of health insurance (AMO Tadamon)',
      desc: 'Extending compulsory insurance to previously uncovered households is converting out-of-pocket purchases into reimbursed prescriptions, lifting pharmacy volumes and rewarding wholesalers with rural reach.',
    },
    {
      title: 'Competition Council review of distribution',
      desc: 'The 2026 opinion on pharmaceutical distribution questions the 84% concentration among six groups and the regulated margin structure, opening the door to reforms in pricing, pharmacy capital and wholesaler obligations.',
    },
    {
      title: 'Local manufacturing and export hub strategy',
      desc: 'Government support for local production of biosimilars, vaccines and generics, plus Morocco’s trade links to West Africa, is pushing wholesalers to add export and re-export capabilities.',
    },
    {
      title: 'Margin pressure and consolidation',
      desc: 'With net margins near 1% and operating costs up 36% since 2020, independent wholesalers are merging or joining groups, and service differentiation increasingly depends on logistics automation.',
    },
  ],
  faq: [
    {
      q: 'Can a foreign pharmaceutical company distribute directly in Morocco?',
      a: 'It must operate through a licensed industrial pharmaceutical establishment, either its own Moroccan affiliate or a local partner, that holds the marketing authorisation. That establishment then sells to grossistes-répartiteurs and to public tenders; direct sales to pharmacies are not part of the model.',
    },
    {
      q: 'Why are there no pharmacy chains in Morocco?',
      a: 'Moroccan law reserves pharmacy ownership to individual pharmacists and prohibits multi-store ownership. The Competition Council has recommended opening pharmacy capital, but until that changes, wholesalers remain the only route to national retail coverage.',
    },
    {
      q: 'How concentrated is pharmaceutical wholesale in Morocco?',
      a: 'Highly. Although 66 wholesalers hold licences, the Competition Council found that six groups control 84% of wholesale turnover and three of them account for nearly 65%, largely through regional subsidiaries.',
    },
    {
      q: 'What margins do Moroccan wholesalers earn?',
      a: 'Margins are fixed by regulation: about 11% on the purchase price for medicines with a manufacturer price up to MAD 588, and 2% above that threshold. Average net profitability across the sector is around 1%, which explains the pressure to consolidate.',
    },
    {
      q: 'What does BioNixus study about pharmaceutical distributors in Morocco?',
      a: 'Wholesaler service benchmarking through pharmacist interviews in Casablanca, Rabat, Marrakech, Fès and Oujda; share-of-wholesaler estimates from pharmacy purchase records; Ministry of Health tender mapping; and clinic purchasing studies as private hospital capacity grows.',
    },
    {
      q: 'Are the wholesalers here ordered by market share?',
      a: 'No. The directory groups participants by function and includes those that recur in BioNixus Moroccan fieldwork and on the AMMPS establishment register; position in the list does not reflect turnover.',
    },
  ],
  regulatorSource: {
    name: 'Agence Marocaine des Médicaments et des Produits de Santé (AMMPS) — établissements pharmaceutiques grossistes-répartiteurs register',
    url: 'https://www.ammps.gov.ma/basesdedonnes/etablissements-pharmaceutiques-grossistes-repartiteurs',
    asOf: '2026-09-03',
  },
  sources: [
    'Conseil de la Concurrence opinion on pharmaceutical distribution markets, published March 2026 (via Médias24 coverage)',
    'Casablanca Stock Exchange filings for Sothema and Cooper Pharma group disclosures, 2024–2025',
    'Ministry of Health and Social Protection procurement notices and AMO Tadamon rollout updates, 2024–2026',
    'BioNixus Morocco pharmacy and clinic fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Wholesaler service benchmarking: 40–80 pharmacist interviews across Casablanca, Rabat, Marrakech, Fès, Tangier and Oujda rating delivery frequency, credit, returns and stock-out handling by grossiste.',
    'Share-of-wholesaler estimates by region from pharmacy purchase-record audits of defined chronic and OTC baskets.',
    'Ministry of Health tender landscaping: bidders, award prices and the split between local manufacturers and multinational affiliates.',
    'Private clinic purchasing studies covering formulary decisions and direct-from-manufacturer versus wholesaler supply.',
  ],
};
