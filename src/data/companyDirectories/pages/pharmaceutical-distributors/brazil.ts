import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsBrazil: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'brazil',
  metaDescription:
    'Pharmaceutical distributors in Brazil: Profarma, Panpharma, Santa Cruz, Raia Drogasil, Hypera, Anvisa and SUS — wholesale books, retail DCs, public buyers.',
  introLead:
    'Brazil’s medicine path splits three ways: national wholesalers such as Profarma, Panpharma and Santa Cruz invoicing independent drogaria, Raia Drogasil’s retail–wholesale machine feeding its own stores, and the Unified Health System buying through the Ministry of Health and state secretariats.',
  introRest:
    'Anvisa licenses manufacturers, importers and distributors and runs the serialization rules that now sit on every invoice. CMED regulates prices, which is why wholesalers compete on credit, fill rate and regional branches rather than on discounting the list. Hypera and other domestic industrials still run manufacturer-owned distribution on selected lines, so a stockist-only map under-counts who calls the drogaria. Public volume is not one tender: the Ministry of Health buys strategic and high-cost molecules, state and municipal secretariats buy the rest, and Farmácia Popular subsidises named SKUs at private counters. BioNixus fields the wholesale book, the RD DC, the Hypera fleet and the SUS desk as four accounts, because a São Paulo drogaria win does not predict a Recife hospital award.',
  stats: [
    { value: 'SUS', label: 'Public system that still absorbs a large share of hospital and programme packs' },
    { value: 'RD', label: 'Raia Drogasil as retail–wholesale, not a pure chemist footnote' },
    { value: '3 books', label: 'Profarma, Panpharma and Santa Cruz as the named national wholesale set' },
    { value: 'Anvisa', label: 'Licence plus serialization — the invoice must match the pack' },
  ],
  channelHeading: 'Independent drogaria books, RD warehouses and SUS secretariats',
  channelBody:
    'A multinational affiliate or a Brazilian industrial sells to Profarma, Panpharma, Santa Cruz and a tail of regional wholesalers that still matter in the North and Northeast. Those houses deliver several times a week to independent drogarias and small chains on credit measured in days that hurt when Selic is high. Raia Drogasil, Pague Menos and other banners buy through their own DCs; RD in particular blurs wholesale and retail, which is why this directory keeps it on the distributor page instead of hiding it on a chemist list. Hypera’s distribution arm and similar manufacturer fleets still place chronic and consumer-health lines beside the appointed wholesaler. SUS purchasing is layered: Ministério da Saúde for strategic components, state secretariats for hospital formularies, municipalities for basic attention, and Farmácia Popular for subsidised retail SKUs. Cold chain for biologics and vaccines concentrates in Guarulhos, Campinas and the Rio–São Paulo axis, with 3PLs filling Amazonas and the interior where wholesale branches thin out. Write the federation unit, the outlet class and whether Farmácia Popular is in scope. A “Brazil distributor” appointment without those cuts is a coastal study.',
  companies: [
    {
      name: 'Profarma',
      hq: 'Rio de Janeiro / São Paulo',
      type: 'Local',
      focus: 'National pharmaceutical wholesale to independent drogarias',
      notes: 'One of the three books launch teams still shortlist; branch density in the Southeast is not the same as fill rate in the North.',
    },
    {
      name: 'Panpharma',
      hq: 'Goiânia / national branches',
      type: 'Local',
      focus: 'National wholesale with Centre-West and interior depth',
      notes: 'The book brands use when they need Goiás, Mato Grosso and interior drogaria coverage that a Rio-only warehouse will not give them.',
    },
    {
      name: 'Santa Cruz',
      hq: 'São Paulo',
      type: 'Local',
      focus: 'National wholesale and selected hospital lines',
      notes: 'The third name on most dual-wholesaler plans; hospital and drogaria credit terms inside the same house are not one negotiation.',
    },
    {
      name: 'Raia Drogasil (RD)',
      hq: 'São Paulo',
      type: 'Retailer',
      focus: 'Largest chemist banner with wholesale-scale DCs',
      notes: 'Retail–wholesale in one group. Stores buy internally; the DC also shapes how independents next door see promotional stock. Split the two conversations.',
    },
    {
      name: 'Hypera distribution',
      hq: 'São Paulo',
      type: 'Local',
      focus: 'Manufacturer-owned distribution on consumer and selected Rx lines',
      notes: 'A factory fleet that still calls drogarias. A wholesaler-only sample will miss Hypera vans on the same street as Profarma.',
    },
    {
      name: 'Anvisa',
      hq: 'Brasília',
      type: 'Government',
      focus: 'Licensing, inspection and serialization of the distribution chain',
      notes: 'Not a buyer. The licence and the serialization file are why a carton that looks identical can still be unsellable if the invoice path is wrong.',
    },
    {
      name: 'Ministério da Saúde — strategic and high-cost purchasing',
      hq: 'Brasília',
      type: 'Government',
      focus: 'Federal buying for vaccines, ARVs, oncology and strategic components',
      notes: 'The national SUS desk. State secretariats still buy everything this list does not cover, so a Brasília award is not a state hospital win.',
    },
    {
      name: 'State health secretariats (SES)',
      hq: 'State capitals',
      type: 'Government',
      focus: 'Hospital and programme procurement inside each federation unit',
      notes: 'São Paulo’s SES is not Recife’s. Tender calendars, payment delays and local production preferences have to be mapped state by state.',
    },
    {
      name: 'Farmácia Popular',
      hq: 'Brasília',
      type: 'Government',
      focus: 'Subsidised SKUs dispensed at participating private drogarias',
      notes: 'A public programme that uses private counters. Wholesalers feel it as a demand spike on named molecules, not as a separate warehouse.',
    },
    {
      name: 'Pague Menos',
      hq: 'Fortaleza',
      type: 'Retailer',
      focus: 'National chemist banner with Northeast density and own DCs',
      notes: 'The retail door that makes a Southeast-only RD sample look national when it is not. Fortaleza ranging is a different shopper.',
    },
    {
      name: 'DPSP / Drogaria São Paulo and Pacheco',
      hq: 'São Paulo / Rio de Janeiro',
      type: 'Retailer',
      focus: 'Large regional chemist banners with central purchasing',
      notes: 'Another retail–DC system. Include it when the brief is banner listing; do not use it as a proxy for independent drogaria wholesale.',
    },
    {
      name: 'Municipal health secretariats (SMS)',
      hq: 'Municipal seats',
      type: 'Government',
      focus: 'Basic-attention and local hospital buying',
      notes: 'The third public layer. Capitals buy like states; interior municipalities buy late and substitute freely, which is a fieldwork fact.',
    },
    {
      name: 'DHL / ID Logistics Brazil life science',
      hq: 'São Paulo',
      type: 'MNC',
      focus: 'GDP warehousing and cold freight for manufacturers',
      notes: '3PL rooms used before stock is handed to Profarma or an SES warehouse. They do not register the product and do not invoice drogarias.',
    },
    {
      name: 'Manaus and North regional wholesalers',
      hq: 'Manaus',
      type: 'Distributor',
      focus: 'Zona Franca and river-and-air feed into Amazonas and Pará',
      notes: 'National books thin out here. A São Paulo DC cannot stand in for the Manaus branch or the regional house that still invoices river towns.',
    },
  ],
  categoryBlurbs: {
    local:
      'Profarma, Panpharma, Santa Cruz, Hypera’s fleet and North regional houses: Brazilian books that invoice drogarias and carry credit through Selic cycles.',
    mnc:
      'International 3PLs holding GDP rooms for affiliates. They store; they do not win Farmácia Popular or an SES tender.',
    regional:
      'LatAm trading groups that treat Brazil beside Argentina or Mexico, usually on selected imported specialty rather than SUS generics.',
    trade:
      'Anvisa as the licence gate, Ministério da Saúde, state and municipal secretariats, Farmácia Popular, and RD / Pague Menos DCs that behave like wholesale.',
  },
  growthDrivers: [
    {
      title: 'Retail DCs taking independent volume',
      desc: 'RD and Pague Menos keep adding stores and warehouses. Every banner store that used to buy from Profarma is now an internal transfer, which is a share shift wholesalers feel as lost drops.',
    },
    {
      title: 'SUS layered buying after budget resets',
      desc: 'Federal strategic lists, state hospital tenders and municipal basic attention do not move together. A year that looks stable in Brasília can still be a stock-out year in a Northeast SMS.',
    },
    {
      title: 'Serialization and Anvisa inspection',
      desc: 'Invoice-to-pack matching raises the cost of informal secondary trade. Compliant books gain; cash markets that cannot serialize lose the innovator SKU first.',
    },
    {
      title: 'Manufacturer fleets on consumer-health lines',
      desc: 'Hypera and peers still run vans. Wholesaler share on those SKUs is a residual, not the whole story, and a panel that only sees wholesale invoices will overstate the book.',
    },
  ],
  faq: [
    {
      q: 'Must a foreign laboratory appoint an exclusive Brazilian wholesaler?',
      a: 'No. Affiliates typically sell to two or three national books plus regional houses, and large banners buy through their own DCs. Exclusive paper is uncommon outside selected specialty.',
    },
    {
      q: 'How does SUS purchasing actually work?',
      a: 'In layers. The Ministry of Health buys strategic and high-cost items; state secretariats buy hospital formularies; municipalities buy basic attention. Farmácia Popular subsidises named SKUs at private counters.',
    },
    {
      q: 'Why is Raia Drogasil on a distributor directory?',
      a: 'Because its DCs operate at wholesale scale and pull volume away from Profarma-type books. Treating RD only as a chemist banner hides the inbound negotiation.',
    },
    {
      q: 'Which wholesalers still matter for independent drogarias?',
      a: 'Profarma, Panpharma and Santa Cruz are the three names that recur, with regional houses still decisive in the North and parts of the Northeast.',
    },
    {
      q: 'What does BioNixus field on Brazilian pharmaceutical distribution?',
      a: 'Drogaria invoice cuts in São Paulo, Rio, Belo Horizonte, Recife and one interior city; SES and SMS tender landscaping; RD versus independent share on a named basket; and Hypera-fleet presence checks.',
    },
    {
      q: 'Is the company order a league table?',
      a: 'No. Entries are grouped as wholesale books, retail–wholesale, manufacturer fleets, Anvisa, SUS layers and 3PLs so the next call is obvious.',
    },
  ],
  regulatorSource: {
    name: 'Anvisa — licensed pharmaceutical manufacturers, importers and distributors; serialization and GDP inspection',
    url: 'https://www.gov.br/anvisa',
    asOf: '2026-09-05',
  },
  sources: [
    'Anvisa distributor licensing and serialization circulars, 2024–2026',
    'Ministério da Saúde and selected SES tender notices; Farmácia Popular SKU lists, 2024–2026',
    'B3 filings and presentations for Raia Drogasil, Hypera and listed wholesale groups, 2024–2025',
    'BioNixus Brazil drogaria, secretariat and distributor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Independent drogaria purchase-record audits splitting Profarma, Panpharma, Santa Cruz and regional books on a chronic and consumer-health basket.',
    'RD and Pague Menos DC interviews on inbound terms versus the same molecule sold into independents through national wholesalers.',
    'SES and SMS tender reconstruction in two states, including payment delay and substitution, plus Farmácia Popular SKU availability at participating counters.',
    'Manufacturer-fleet call checks for Hypera lines against wholesaler invoices on the same street in São Paulo and Recife.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
