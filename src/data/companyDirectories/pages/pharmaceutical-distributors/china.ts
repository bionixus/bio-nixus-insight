import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsChina: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'china',
  metaDescription:
    'Pharmaceutical distributors in China: Sinopharm, Shanghai Pharma, CR Pharma, Jointown, VBP hospitals and NMPA — two-invoice rules, provincial buyers.',
  introLead:
    'China’s pharmaceutical wholesale is a four-house plus province story: Sinopharm, Shanghai Pharmaceuticals, China Resources Pharmaceutical and Jointown move most of the documented volume, while provincial volume-based procurement decides the hospital pack before a depot even opens the carton.',
  introRest:
    'The National Medical Products Administration licenses manufacturers, importers and wholesale enterprises; provincial medical products administrations inspect the warehouses that hold the goods. The two-invoice rule collapsed the old multi-tier trader stack, so a principal now invoices a national or provincial wholesaler once and that wholesaler invoices the hospital or retail pharmacy once. Volume-based procurement run by the National Healthcare Security Administration and provincial alliances has compressed hospital prices and pushed distributors into a logistics-and-credit role rather than a margin-on-spread role. Community pharmacies — Yifeng, Dashenlin, LBX, Yixintang and thousands of regional banners — buy centrally and increasingly bypass the secondary wholesaler. BioNixus treats the four listed groups, the provincial VBP desk and the retail banners as separate accounts, because a Shanghai hospital win does not predict a Chengdu chemist facing.',
  stats: [
    { value: '4', label: 'National groups that still dominate documented hospital and retail wholesale' },
    { value: 'VBP', label: 'Provincial and national volume-based procurement setting hospital pack prices' },
    { value: 'Two invoices', label: 'Manufacturer-to-wholesaler then wholesaler-to-provider — the legal path' },
    { value: 'NMPA', label: 'Central licence; provincial bureaus inspect the actual godown' },
  ],
  channelHeading: 'Two invoices, VBP awards and four listed books',
  channelBody:
    'A foreign innovator or a domestic generic house sells to Sinopharm, SPH, CR Pharmaceutical or Jointown (or a provincial specialist) under a two-invoice contract. That wholesaler then invoices a Class III hospital, a county hospital, a community health centre or a retail banner. Secondary traders still exist in some provinces for retail fill-in, but they are legally thinner than a decade ago and a compliance team will not want them on an innovator file. VBP awards are won at the manufacturer desk; the distributor’s job is to deliver the awarded pack into the hospital warehouse on the province’s timetable and to carry the receivables. Retail is a different P&L: listed chemist groups run their own DC networks in Guangdong, Jiangsu and Sichuan, and they bargain as retailers, not as hospital logistics. Cold-chain biologics concentrate in Shanghai, Beijing, Guangzhou and Suzhou bonded zones, with the same four groups plus specialist 3PLs holding validated rooms. County hospitals and township health centres still depend on provincial Sinopharm or CR branches that a Beijing headquarters slide will under-name. Write the province, the VBP batch and the outlet type on the brief. “China distribution” without those three is a press release.',
  companies: [
    {
      name: 'Sinopharm Group',
      hq: 'Shanghai / Beijing',
      type: 'Government',
      focus: 'Largest state-linked national wholesale and hospital logistics network',
      notes: 'The default hospital book in most provinces; provincial subsidiaries, not the Hong Kong listing, are the desks that accept or refuse a SKU.',
    },
    {
      name: 'Shanghai Pharmaceuticals (SPH)',
      hq: 'Shanghai',
      type: 'Local',
      focus: 'National wholesale with manufacturing and retail adjacencies',
      notes: 'Strongest in the Yangtze Delta hospital and retail belt; treat the Shanghai municipal book as distinct from its national branches.',
    },
    {
      name: 'China Resources Pharmaceutical',
      hq: 'Hong Kong / Beijing',
      type: 'Government',
      focus: 'State-linked wholesale, retail and selected manufacturing',
      notes: 'CR’s hospital and CR Care retail arms are different buyers. A CR wholesale win does not list a pack in CR Care automatically.',
    },
    {
      name: 'Jointown Pharmaceutical Group',
      hq: 'Wuhan',
      type: 'Local',
      focus: 'Private national wholesaler with deep retail and county coverage',
      notes: 'The non-state national book brands use when they want a second lane beside Sinopharm, especially into county hospitals and regional chemists.',
    },
    {
      name: 'National Healthcare Security Administration — VBP desk',
      hq: 'Beijing',
      type: 'Government',
      focus: 'National and alliance volume-based procurement for hospital packs',
      notes: 'Not a wholesaler. Award lists rewrite which pack the four groups must deliver and at what hospital price, which is why VBP sits on this map.',
    },
    {
      name: 'National Medical Products Administration (NMPA)',
      hq: 'Beijing',
      type: 'Government',
      focus: 'Central licensing of manufacturers, importers and wholesale enterprises',
      notes: 'The licence gate. Provincial MPAs then inspect warehouses; an NMPA number without a provincial warehouse permit will not move a carton.',
    },
    {
      name: 'Provincial medical products administrations',
      hq: 'Provincial capitals',
      type: 'Government',
      focus: 'Warehouse inspection and local wholesale licensing',
      notes: 'The bureau that actually walks the cold room in Chengdu or Zhengzhou; headquarters compliance in Beijing cannot substitute for this visit.',
    },
    {
      name: 'Yifeng Pharmacy',
      hq: 'Changsha',
      type: 'Retailer',
      focus: 'Listed chemist banner with central purchasing',
      notes: 'A retail DC buyer, not a hospital wholesaler. Listing here is a category meeting, not a two-invoice hospital contract.',
    },
    {
      name: 'Dashenlin Pharmaceutical Group',
      hq: 'Guangzhou',
      type: 'Retailer',
      focus: 'Southern China chemist banner and own-distribution',
      notes: 'Guangdong density makes it a priority retail account; its warehouses compete with Jointown for the same independent-store fill-in.',
    },
    {
      name: 'LBX Pharmacy',
      hq: 'Shanghai',
      type: 'Retailer',
      focus: 'Eastern China chemist chain with DC purchasing',
      notes: 'Another listed retail door; merge it with hospital wholesale in analysis and you will invent a channel that does not exist.',
    },
    {
      name: 'Yixintang',
      hq: 'Kunming',
      type: 'Retailer',
      focus: 'Southwest chemist banner expanding east',
      notes: 'Yunnan-rooted chain that shows why a Shanghai-only retail sample misses southwest ranging and reimbursement mix.',
    },
    {
      name: 'Sinopharm Accend (specialty / vaccines)',
      hq: 'Shanghai',
      type: 'Government',
      focus: 'Specialty, vaccine and temperature-controlled hospital logistics',
      notes: 'The cold-chain cut inside the Sinopharm family; biologics briefs should name this unit rather than “Sinopharm wholesale” in general.',
    },
    {
      name: 'SF Express / JD Logistics life-science lanes',
      hq: 'Shenzhen / Beijing',
      type: 'Distributor',
      focus: 'Express and warehouse 3PL for specialty and e-pharmacy fulfilment',
      notes: 'Carriers, not importers. Used when a principal needs validated rooms or last-mile into cities the four groups will not prioritise daily.',
    },
    {
      name: 'County hospital pharmacy departments (aggregated)',
      hq: 'County seats',
      type: 'Government',
      focus: 'VBP-fed hospital pharmacies outside Tier-1 cities',
      notes: 'The outlet class that still absorbs the bulk of awarded generic volume; a Class-III Shanghai sample will not stand in for them.',
    },
  ],
  categoryBlurbs: {
    local:
      'SPH and Jointown as the large non-pure-SOE national books, plus listed chemist banners that self-distribute. They invoice hospitals or stores under two-invoice rules and live on credit days as much as on spread.',
    mnc:
      'Foreign principals almost never wholesale in China. International 3PLs and express life-science lanes store and move; the importer of record is usually the local affiliate.',
    regional:
      'Greater China trading groups that treat the mainland beside Hong Kong or Taiwan, typically on selected imported specialty and consumer-health SKUs rather than VBP generics.',
    trade:
      'Sinopharm, CR Pharmaceutical, the NHSA VBP desk, provincial MPAs and county hospital pharmacies: the state-linked path that still decides most hospital units.',
  },
  growthDrivers: [
    {
      title: 'VBP batches rewriting hospital demand',
      desc: 'Each national or provincial batch resets which pack the four wholesalers must deliver. Distributor share follows the award, so a pre-VBP coverage map is a historical document.',
    },
    {
      title: 'Two-invoice enforcement',
      desc: 'Secondary traders lost legal room. Principals that still design a three-tier cascade will fail compliance reviews and still not reach the hospital warehouse faster.',
    },
    {
      title: 'Retail banners building their own DCs',
      desc: 'Yifeng, Dashenlin, LBX and Yixintang buy as retailers. Hospital wholesalers lose that slice unless they win the banner’s inbound contract, which is a different tender.',
    },
    {
      title: 'County and community health volume',
      desc: 'VBP and hierarchical diagnosis push volume out of Tier-1 Class III hospitals. Provincial Sinopharm and Jointown branches that can serve county seats pick up the work Beijing slides forget.',
    },
  ],
  faq: [
    {
      q: 'Can a foreign company appoint a single China-wide exclusive wholesaler?',
      a: 'It can name a lead, but hospital and retail execution still runs through provincial subsidiaries of Sinopharm, SPH, CR or Jointown. Exclusive paper in Shanghai will not stock a Zhengzhou county hospital.',
    },
    {
      q: 'What did volume-based procurement change for distributors?',
      a: 'Prices and winners are set at the manufacturer–payer desk. Distributors deliver the awarded pack and carry hospital receivables. Margin-on-spread wholesale on VBP molecules is largely gone.',
    },
    {
      q: 'Who are the four national pharmaceutical wholesalers?',
      a: 'Sinopharm, Shanghai Pharmaceuticals, China Resources Pharmaceutical and Jointown. Provincial specialists and chemist-banner DCs sit around them; they do not replace them on hospital files.',
    },
    {
      q: 'Do retail pharmacy chains still buy from the national wholesalers?',
      a: 'Sometimes on inbound logistics, often not on listing. Listed banners run their own DCs and bargain as retailers. Design hospital and retail as two studies.',
    },
    {
      q: 'What does BioNixus field on Chinese pharmaceutical distribution?',
      a: 'Provincial subsidiary mapping for the four groups, VBP award-to-delivery tracking in two provinces, retail-banner DC interviews, and hospital-pharmacy purchase cuts that separate Class III from county outlets.',
    },
    {
      q: 'Is this a ranking of Chinese wholesalers?',
      a: 'No. The page groups state-linked books, private national wholesale, VBP and licensing desks, chemist banners and 3PLs so a launch team can see which desk owns the next action.',
    },
  ],
  regulatorSource: {
    name: 'National Medical Products Administration (NMPA) — licensed drug manufacturers, importers and wholesale enterprises',
    url: 'https://www.nmpa.gov.cn',
    asOf: '2026-09-05',
  },
  sources: [
    'NMPA and provincial MPA wholesale licensing notices, 2024–2026',
    'NHSA VBP batch announcements and provincial alliance award lists, 2024–2026',
    'Hong Kong and A-share filings of Sinopharm, SPH, CR Pharmaceutical and Jointown, 2024–2025',
    'BioNixus China hospital-pharmacy and distributor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Hospital pharmacy purchase-record cuts in one coastal and one inland province, split by Class III versus county, naming which of the four groups invoiced the pack.',
    'VBP award-to-warehouse tracking: days from published winner to first hospital receipt, and which provincial subsidiary actually delivered.',
    'Retail-banner DC interviews at two listed chemist groups on inbound terms versus hospital two-invoice contracts on the same molecule.',
    'Cold-room walk-throughs in Shanghai and Guangzhou bonded zones comparing Sinopharm specialty units with express 3PL rooms.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
