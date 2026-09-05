import type { DirectoryPageInput } from '../../types';

export const fmcgCompaniesIraq: DirectoryPageInput = {
  entity: 'fmcg-companies',
  countrySlug: 'iraq',
  metaDescription:
    'FMCG companies in Iraq: Baghdad Soft Drinks, Al-Saeed, Khairat Al-Rafidain, Fine, MAF Carrefour — souqs, agents, COSQC (2026).',
  introLead:
    'Iraq’s grocery basket is a bottler-and-agent story before it is a hypermarket story: Baghdad Soft Drinks for Pepsi, Al-Waha for Coca-Cola, Al-Saeed and Khairat Al-Rafidain on pantry, Fine tissue, KDD dairy imports, and Unilever or P&G packs that still move through appointed houses rather than through a principal-owned van net.',
  introRest:
    'What follows is the Iraqi trolley — food, drinks, laundry, hygiene — plus the agents and souqs that still move it. Carrefour under Majid Al Futtaim and Family Mall are the listing theatres in Baghdad and Erbil; they do not replace the wholesale souq that moves oil, rice, cola and washing powder in Karkh, Basra and Mosul. The State Company for Foodstuff Trading still sits on selected staple tenders. COSQC and the health-and-standards desks decide whether a yoghurt, a tissue pack or a shampoo may be sold. BioNixus walks souq, agent and banner when a brand team needs the Iraqi door that still held the pack. A medicines directory would open with a different set; Hikma-style drug work stays off this trolley.',
  stats: [
    { value: '16', label: 'Bottlers, agents, banners, staple houses and the standards desk named on this directory' },
    { value: 'MAF + Family Mall', label: 'Organised listing theatres in Baghdad and Erbil, not national volume' },
    { value: 'Agent path', label: 'Unilever and P&G still execute through appointed houses more often than through a captive van net' },
    { value: 'Wholesale souq', label: 'Traditional depots still decide oil, rice, cola and laundry bars outside mall catchments' },
  ],
  channelHeading: 'Souqs, appointed agents and a thin organised aisle',
  channelBody:
    'Organised grocery in Iraq is a Baghdad-and-Erbil conversation first. Majid Al Futtaim’s Carrefour brings a Gulf hypermarket playbook; Family Mall blurs grocery and general merchandise for a different catchment. That pair is the listing theatre. It is a poor proxy for national cola, rice or laundry-bar volume. Wholesale souqs and neighbourhood grocers in Karkh, Rusafa, Basra and Mosul still take the weekday shop, and appointed agents restock them as often as a principal’s own fleet. Baghdad Soft Drinks built a Pepsi system that assumes that dual trade; Al-Waha assumes it for Coca-Cola; Al-Saeed and Khairat Al-Rafidain assume it for pantry. Fine tissue rides the same trucks. KDD and other Kuwaiti dairy imports arrive as a landed pack, not as an Iraqi hall. Unilever and P&G are typically Dubai-or-Amman planned and Iraq-executed through agents, so a bill of lading is not proof a Mosul grocer faced the SKU. COSQC registration and the health desk cover foods, drinks and selected household products; customs and the trade ministry add import-licensing layers. Write the governorate, the trade type and the pack size. “FMCG in Iraq” is not a sample design.',
  companies: [
    {
      name: 'Baghdad Soft Drinks',
      hq: 'Baghdad',
      type: 'Local',
      focus: 'Pepsi-system bottling for grocery, wholesale and HORECA coolers',
      notes: 'The Pepsi bottler a cooler brief writes down first. Grocer crates in Karkh are the competitive fact a Carrefour gondola will not tell you.',
    },
    {
      name: 'Al-Saeed Group',
      hq: 'Baghdad',
      type: 'Local',
      focus: 'Pantry, oils and selected manufacturing-adjacent consumer lines',
      notes: 'Named industrial-and-trade house on staple and oil conversations that a Gulf dashboard will mis-file as generic import fill.',
    },
    {
      name: 'Khairat Al-Rafidain',
      hq: 'Baghdad',
      type: 'Local',
      focus: 'Food manufacture and packaged pantry',
      notes: 'Local food house that still appears beside Al-Saeed on rice, oil and processed-food shortlists; treat the two as a set, not as interchangeable “staples.”',
    },
    {
      name: 'State Company for Foodstuff Trading',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Staple trading and selected public food supply',
      notes: 'Tender-and-staple desk. A household trolley sample that ignores this house will under-read sugar, rice and oil in public-adjacent catchments.',
    },
    {
      name: 'Unilever (Iraq via agents)',
      hq: 'Dubai / Baghdad',
      type: 'MNC',
      focus: 'Home care, personal care, tea and selected foods',
      notes: 'Hub-planned affiliate executed through appointed houses; the Iraq question is souq versus Carrefour execution, not brand awareness.',
    },
    {
      name: 'Procter & Gamble (Iraq via agents)',
      hq: 'Dubai / Baghdad',
      type: 'MNC',
      focus: 'Laundry, baby care, feminine care, hair',
      notes: 'Grocery plus chemist path; a Mansour Mall-only sample will miss souq velocity on hygiene SKUs.',
    },
    {
      name: 'Al-Waha / Coca-Cola system',
      hq: 'Baghdad',
      type: 'Local',
      focus: 'Coca-Cola-system sparkling and still drinks',
      notes: 'Cooler and crate economics versus Pepsi at Baghdad Soft Drinks; grocer and organised listing are different conversations.',
    },
    {
      name: 'Fine Hygienic',
      hq: 'Amman / Baghdad',
      type: 'Regional',
      focus: 'Tissue, hygiene paper and related personal care',
      notes: 'Jordan-origin tissue house whose packs sit on the Iraqi trolley; treat it as hygiene, not as “paper converting.”',
    },
    {
      name: 'KDD (Kuwaiti dairy imports)',
      hq: 'Kuwait / Baghdad',
      type: 'Regional',
      focus: 'Long-life milk, juices and dairy-adjacent imports',
      notes: 'Landed Kuwaiti dairy, not an Iraqi hall. Fresh local milk and long-life KDD are different occasions; do not flatten them into one dairy KPI.',
    },
    {
      name: 'Carrefour Iraq (Majid Al Futtaim)',
      hq: 'Dubai / Baghdad',
      type: 'Retailer',
      focus: 'Hypermarket listing in selected Baghdad and Erbil catchments',
      notes: 'Gulf-operated banner; useful as a listing theatre, incomplete as a stand-alone Iraqi grocery sample.',
    },
    {
      name: 'Family Mall',
      hq: 'Erbil',
      type: 'Retailer',
      focus: 'Mall-anchored grocery and general merchandise in the Kurdistan Region',
      notes: 'Erbil organised gate. A Baghdad-only sample is a different country story from a Family Mall planogram.',
    },
    {
      name: 'Traditional wholesale souqs',
      hq: 'Baghdad',
      type: 'Distributor',
      focus: 'Case trade into neighbourhood grocers across Baghdad, Basra and Mosul',
      notes: 'The depot many principals mean when they say they have coverage. Design questions a wholesaler can answer.',
    },
    {
      name: 'Independent neighbourhood grocers',
      hq: 'Baghdad',
      type: 'Retailer',
      focus: 'Street shops that still take the weekday oil, rice, cola and laundry trip',
      notes: 'When a SKU goes dark in Mosul, the first call is often this shop’s wholesaler, not the brand manager in Dubai.',
    },
    {
      name: 'Ministry of Health (food and cosmetics desks)',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Health-side clearance for selected foods, drinks and personal care',
      notes: 'Shares the launch clock with COSQC. A yoghurt claim and a shampoo can sit on this desk even when they do not share a factory.',
    },
    {
      name: 'Central Organization for Standardization and Quality Control (COSQC)',
      hq: 'Baghdad',
      type: 'Government',
      focus: 'Standards, quality control and selected product conformity',
      notes: 'The standards desk that can stop a pack at the border or after listing. Build clock risk into the launch study itself.',
    },
  ],
  categoryBlurbs: {
    local:
      'Baghdad Soft Drinks, Al-Saeed, Khairat Al-Rafidain and Al-Waha are Iraqi industrial and bottling houses. They own cola, pantry and cooler volume that a Gulf dashboard will mis-file as import fill.',
    mnc:
      'Unilever and P&G are hub-served and agent-executed. Presence is not the question. Merchandising in Carrefour versus a Karkh grocer is the question.',
    regional:
      'Fine tissue and KDD dairy are the Levant-and-Gulf layer that arrives as a landed pack. Tissue is an FMCG bay here, not a converting footnote.',
    trade:
      'Wholesale souqs still move the weekday trolley. Carrefour and Family Mall are the listing theatres. The State Company sits on selected staples. COSQC and the health desk share the launch clock. Name the layer.',
  },
  growthDrivers: [
    {
      title: 'Bottlers as the branded cooler category',
      desc: 'Baghdad Soft Drinks versus Al-Waha is a crate-and-credit fight, not a generic “soft drinks” row. Occasion, cooler and grocer terms have to be designed into the sample.',
    },
    {
      title: 'Hub planning versus Baghdad-and-Mosul execution',
      desc: 'Most MNC packs are ranged from a Gulf or Levant hub through agents. That creates a gap between a shipment number and what a Basra grocer actually faces.',
    },
    {
      title: 'Erbil malls versus Baghdad souqs',
      desc: 'Family Mall and MAF catchments are not a national frame. A brief that only walks Erbil will mis-state both organised listing and souq credit.',
    },
    {
      title: 'COSQC and health desks as a launch clock',
      desc: 'Conformity and health clearance hit yoghurt, tissue claims and shampoo as well as medicines. Put timeline risk inside the study. Leave hospital drugs on the pharma directory.',
    },
  ],
  sections: [
    {
      heading: 'Why agents and souqs sit on the same slide as MAF',
      paragraphs: [
        'A grocery-basket brief that only names Carrefour and Family Mall will send the field team to the wrong aisle. Fine tissue, Unilever laundry and P&G hygiene share the souq trip with cola, rice and oil. The houses below are the account set for shopper and trade studies, not a census of every COSQC-cleared factory. The State Company for Foodstuff Trading belongs here because staple tenders still move household sugar and rice in catchments a mall sample never sees.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which FMCG companies should we map in Iraq?',
      a: 'Baghdad Soft Drinks and Al-Waha on coolers; Al-Saeed and Khairat Al-Rafidain on pantry; Fine as the hygiene layer; Unilever and P&G as agent-executed affiliates; KDD as landed dairy; Carrefour, Family Mall, wholesale souqs and neighbourhood grocers as trade gates; COSQC and the health desk as the clocks. Skip hospital drugs.',
    },
    {
      q: 'Is Carrefour enough modern trade for Iraq?',
      a: 'No. Family Mall is a distinct Erbil system, and wholesale souqs still move oil, rice, cola and laundry. A hypermarket-only sample is a mall-catchment study.',
    },
    {
      q: 'Why do Unilever and P&G appear as agent paths?',
      a: 'Because execution is typically through appointed houses rather than a principal-owned national van net. A shipment into Baghdad is not proof of a Mosul facing.',
    },
    {
      q: 'What do COSQC and the Ministry of Health decide for grocery brands?',
      a: 'COSQC handles standards and conformity. Health desks clear selected foods, drinks and personal care. Either can delay a launch. Drug registrations are a different queue.',
    },
    {
      q: 'What does BioNixus study on the Iraqi grocery basket?',
      a: 'Souq and grocer audits in Baghdad, Basra and Mosul; Carrefour versus Family Mall planogram checks; agent and wholesale interviews when coverage dies outside mall catchments; cooler-crate work on Pepsi versus Coca-Cola systems.',
    },
    {
      q: 'Is this a ranking of Iraqi FMCG houses by sales?',
      a: 'No. Rows are grouped by who owns the pack and who moves it, because those names keep turning up in BioNixus Iraq work and on COSQC or trade files — not because the first row sold more.',
    },
  ],
  regulatorSource: {
    name: 'Central Organization for Standardization and Quality Control (COSQC) — standards, conformity and selected product control',
    url: 'https://www.cosqc.gov.iq',
    asOf: '2026-09-05',
  },
  sources: [
    'COSQC public standards and conformity notices; Ministry of Health food and cosmetics desk materials',
    'Company and trade pages for Baghdad Soft Drinks, Al-Waha, Al-Saeed, Khairat Al-Rafidain, Fine Hygienic and KDD',
    'Majid Al Futtaim / Carrefour Iraq and Family Mall listing materials',
    'BioNixus Iraq souq, agent and organised-retail fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Karkh and Rusafa grocer audits that keep Pepsi crates at Baghdad Soft Drinks separate from Al-Waha Coca-Cola coolers.',
    'Carrefour versus Family Mall planogram checks on Unilever, P&G and Fine tissue in one fieldwork week.',
    'Wholesale-souq interviews on case offtake into Basra and Mosul when a Baghdad mall figure looks fine and the street shop is empty.',
    'KDD long-life versus local fresh-milk fridge checks so a dairy KPI does not flatten two occasions.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
