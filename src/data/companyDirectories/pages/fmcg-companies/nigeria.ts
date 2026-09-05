import type { DirectoryPageInput } from '../../types';

export const fmcgCompaniesNigeria: DirectoryPageInput = {
  entity: 'fmcg-companies',
  countrySlug: 'nigeria',
  metaDescription:
    'FMCG companies in Nigeria: Dangote Sugar, Flour Mills, Nestlé Nigeria, Unilever Nigeria, PZ Cussons, NBC, NASCON and Dufil — open-market trade, NGX names, NAFDAC.',
  introLead:
    'Nigeria’s grocery basket is a listed-industrial story and an open-market story at the same time: Dangote Sugar and NASCON salt, Flour Mills’ Golden Penny, BUA Foods, Nestlé Nigeria, Unilever Nigeria, PZ Cussons and Nigerian Bottling Company packs all have to survive Idumota, Onitsha and Kano wholesale before they reach a kiosk or a Shoprite bay.',
  introRest:
    'This page covers the full trolley — staples, noodles, beverages, home care and personal care — not a mill-only or bottler-only cut. Naira swings since 2023 have rewritten pack architecture and pushed households toward local staples, smaller counts and whatever the open market still has in stock. Organised retail (Shoprite, Carrefour, Justrite, FoodCo) is the listing and promotion theatre in Lagos and Abuja; it is not how most of the country shops. NAFDAC registers foods and cosmetics as well as medicines, so a detergent, a seasoning cube and a soft drink share a regulator even when they do not share a factory. BioNixus fields wholesaler, kiosk and banner work when a brand team needs the account that actually sold the case. A food-and-beverage manufacturer list would stop at the plants; the companies below include the home-care houses and the trade gates that decide whether those plants’ packs turn.',
  stats: [
    { value: '18', label: 'NGX consumer names, private processors, banners and NAFDAC on this directory' },
    { value: 'Open markets', label: 'Idumota, Onitsha and Kano as the wholesale spine for kiosk restock' },
    { value: 'NGX cluster', label: 'Nestlé, Unilever, Flour Mills, Dangote Sugar, NASCON, BUA, Cadbury, PZ' },
    { value: 'Naira reset', label: 'Pack-size and local-staple shifts after successive currency adjustments' },
  ],
  channelHeading: 'Open-market wholesale, kiosks and a thin organised-retail crust',
  channelBody:
    'Route-to-market in Nigeria is layered. Manufacturers and affiliates run depots and key distributors; those distributors sell into the open drug-and-food markets of Idumota in Lagos, the Onitsha corridor and Kano, which in turn refill tens of thousands of patent-medicine-adjacent kiosks, table-top sellers and neighbourhood stores. Organised grocery — Shoprite where it still operates, Carrefour, Justrite, FoodCo and a handful of independents — matters for listing, modern merchandising and the Lagos–Abuja shopper, but a study that only walks those aisles will invent a country that does not exist north of the expressway. Home care and personal care (Unilever, PZ Cussons, Reckitt, P&G via distributors) travel the same general-trade spine as Maggi cubes and Indomie, which is why an FMCG brief that splits “food companies” from “detergent companies” will mis-design the sample. NAFDAC registration, labelling and factory inspection apply across foods, beverages and cosmetics; port clearance at Apapa and Tin Can remains a commercial risk when foreign exchange is tight. Name the city cluster, the market, and whether you need kiosk, wholesale or banner — “FMCG in Nigeria” is a mood, not a design.',
  companies: [
    {
      name: 'Dangote Sugar Refinery',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Refined sugar for household and industrial users',
      notes: 'NGX-listed staple whose 50kg and retail packs still define the sugar bay in open markets and organised grocery.',
    },
    {
      name: 'NASCON Allied Industries',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Salt, seasonings and related staples',
      notes: 'Dangote-group listed salt company; traditional-trade bags are the volume story, not a supermarket gondola.',
    },
    {
      name: 'Flour Mills of Nigeria',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Flour, pasta, noodles, oils and Golden Penny staples',
      notes: 'The Golden Penny house. Treat it as a full-basket staple group, not as a single mill selling bakers’ bags.',
    },
    {
      name: 'BUA Foods',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Sugar, flour, pasta and packaged staples',
      notes: 'Listed industrial foods rival to Dangote and Flour Mills; open-market price fights are the research-relevant core.',
    },
    {
      name: 'Honeywell Flour Mills',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Flour, semolina, noodles and mixes',
      notes: 'Listed mill with a consumer brand range that competes in the same bakkal and market bays as Golden Penny.',
    },
    {
      name: 'Nestlé Nigeria',
      hq: 'Lagos',
      type: 'MNC',
      focus: 'Culinary, beverages, infant nutrition, confectionery',
      notes: 'NGX-listed affiliate; Maggi and Milo are general-trade brands first. A Shoprite-only sample will flatter modern trade.',
    },
    {
      name: 'Unilever Nigeria',
      hq: 'Lagos',
      type: 'MNC',
      focus: 'Home care, personal care and selected foods',
      notes: 'Listed affiliate whose Omo, Closeup and Knorr lines share the kiosk spine with food staples — sample them together.',
    },
    {
      name: 'PZ Cussons Nigeria',
      hq: 'Lagos',
      type: 'MNC',
      focus: 'Personal care, home care, electricals-adjacent consumer',
      notes: 'Listed British-origin house with deep general-trade soaps and detergents; a peer to Unilever, not a niche importer.',
    },
    {
      name: 'Nigerian Bottling Company',
      hq: 'Lagos',
      type: 'MNC',
      focus: 'Coca-Cola system sparkling and still drinks',
      notes: 'Hellenic-owned bottler; cooler and open-market crate economics decide share more than a national advertising burst.',
    },
    {
      name: 'Cadbury Nigeria (Mondelez)',
      hq: 'Lagos',
      type: 'MNC',
      focus: 'Chocolate, candy, beverages and gums',
      notes: 'Listed confectionery affiliate; Bournvita and countlines still move through wholesale markets as well as organised grocery.',
    },
    {
      name: 'Dufil Prima Foods',
      hq: 'Lagos',
      type: 'Regional',
      focus: 'Instant noodles and adjacent culinary',
      notes: 'Indomie parent in Nigeria; kiosk and market penetration is the competitive fact other noodle lines have to beat.',
    },
    {
      name: 'Chi Limited',
      hq: 'Lagos',
      type: 'Regional',
      focus: 'Juice, snacks and dairy-adjacent drinks',
      notes: 'Tolaram-linked house whose general-trade reach is an FMCG fact, not a food-service footnote.',
    },
    {
      name: 'Promasidor Nigeria',
      hq: 'Lagos',
      type: 'Regional',
      focus: 'Powdered milk, beverages and culinary',
      notes: 'Cowbell and sister brands are kiosk staples; treat powdered dairy as its own occasion, not as a fridge-milk substitute.',
    },
    {
      name: 'Reckitt Nigeria',
      hq: 'Lagos',
      type: 'MNC',
      focus: 'Surface care, pest, hygiene and selected OTC-adjacent',
      notes: 'Dettol and related lines move through general trade and chemist counters; grocery-only work understates them.',
    },
    {
      name: 'Shoprite Nigeria',
      hq: 'Lagos',
      type: 'Retailer',
      focus: 'Hypermarket listing in selected urban catchments',
      notes: 'The organised-grocery conversation most briefs still name; useful, incomplete, and not a proxy for national volume.',
    },
    {
      name: 'Justrite Superstores',
      hq: 'Lagos',
      type: 'Retailer',
      focus: 'Value supermarket and household-goods hybrid',
      notes: 'Local organised banner that picks up trips Shoprite does not own; include it when the brief is Lagos value grocery.',
    },
    {
      name: 'FoodCo',
      hq: 'Ibadan',
      type: 'Retailer',
      focus: 'South-west supermarket and convenience grocery',
      notes: 'Ibadan-rooted banner; a Lagos-only organised sample will miss how south-west households actually shop modern trade.',
    },
    {
      name: 'National Agency for Food and Drug Administration and Control',
      hq: 'Abuja',
      type: 'Government',
      focus: 'Registration and inspection of foods, drinks and cosmetics',
      notes: 'NAFDAC’s food and cosmetics desks shape launch timing for every house in this table, not only the drug manufacturers.',
    },
  ],
  categoryBlurbs: {
    local:
      'Dangote Sugar, NASCON, Flour Mills, BUA and Honeywell are listed staple industrials. They set the sugar, salt, flour and pasta price the open market talks about every morning — not a “local SME” tier around the MNCs.',
    mnc:
      'Nestlé, Unilever, PZ Cussons, NBC, Cadbury and Reckitt run Lagos affiliates, several of them listed. The gap is kiosk and wholesale execution after a naira shock, not whether the brand is famous.',
    regional:
      'Dufil, Chi and Promasidor are the West African consumer houses that treat Nigeria as the volume engine. Noodles, juice and powdered milk are their jobs; do not file them as generic “importers.”',
    trade:
      'Idumota, Onitsha and Kano refill the kiosks. Shoprite, Justrite and FoodCo are the organised crust. NAFDAC is the registration gate. A banner-only study is a Lagos shopping-mall study.',
  },
  growthDrivers: [
    {
      title: 'Currency shocks and pack architecture',
      desc: 'Successive naira adjustments changed what a household can put in a kettle or a washbasin. Count-down packs, local staples and whatever the market still stocks beat a 2022 price list. Measure SKUs, not memories.',
    },
    {
      title: 'Staple industrials as the competitive set',
      desc: 'Sugar, flour, pasta and salt fights among Dangote, BUA, Flour Mills and Honeywell are the Nigerian pantry. An MNC-only competitor map will miss the brand the shopper actually switched to.',
    },
    {
      title: 'Open-market wholesale as the real depot',
      desc: 'When coverage dies in Kaduna or Aba, the first interview is often a wholesaler in Onitsha or Idumota. Design questions that a market trader can answer.',
    },
    {
      title: 'Home care on the same spine as food',
      desc: 'Unilever, PZ and Reckitt ride the same general-trade trucks as Maggi and Indomie. Splitting the brief into “food” and “detergent” studies doubles cost and still misses substitution at the kiosk.',
    },
    {
      title: 'NAFDAC as a food-and-cosmetics regulator',
      desc: 'Registration delays and labelling actions hit beverages and personal care as hard as they hit medicines. Build timeline risk into launch research, not only into a regulatory memo.',
    },
  ],
  sections: [
    {
      heading: 'Full trolley versus a manufacturer-only cut',
      paragraphs: [
        'A food-and-beverage manufacturer directory would list Flour Mills, NBC and Nestlé and stop before Omo, Morning Fresh or Dettol. Nigerian households buy those SKUs on the same kiosk trip as Golden Penny and Indomie. The houses below were chosen because they share a route-to-market, a regulator and a shopper — not because they share a process line.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which FMCG companies should we map in Nigeria?',
      a: 'Dangote Sugar, NASCON, Flour Mills, BUA and Honeywell for staples; Nestlé, Unilever, PZ Cussons, NBC, Cadbury and Reckitt as affiliates; Dufil, Chi and Promasidor as regional consumer houses; Shoprite, Justrite and FoodCo as organised banners; NAFDAC as the gate.',
    },
    {
      q: 'Is Shoprite enough modern trade for a national Nigeria study?',
      a: 'No. Organised grocery is thin and geographically skewed. If the brand sells cubes, noodles, detergent or sugar nationally, you need open-market wholesale and kiosks — usually via Idumota, Onitsha or Kano.',
    },
    {
      q: 'Why are detergent companies on the same page as flour millers?',
      a: 'Because the shopper, the kiosk and often the distributor are the same. An FMCG directory that drops home care becomes a food-plant list and will mis-brief the study.',
    },
    {
      q: 'Does NAFDAC only regulate medicines in this context?',
      a: 'No. Foods, drinks and cosmetics go through NAFDAC as well. A seasoning, a soft drink and a soap share a registration logic even when they do not share a factory.',
    },
    {
      q: 'How does BioNixus field Nigerian grocery work?',
      a: 'Wholesaler and kiosk audits in Idumota, Onitsha and Kano; organised-banner checks in Lagos, Abuja and Ibadan; and shopper intercepts that treat food, beverage and home care as one trip when the brief is the basket.',
    },
    {
      q: 'Does row order on this Nigerian page mean larger sales?',
      a: 'No size ranking is intended. Companies are clustered by ownership and channel because they keep appearing in BioNixus Nigeria fieldwork and on NGX or NAFDAC records, not because the first name leads the category.',
    },
  ],
  regulatorSource: {
    name: 'National Agency for Food and Drug Administration and Control (NAFDAC) — foods, drinks and cosmetics registers',
    url: 'https://www.nafdac.gov.ng',
    asOf: '2026-09-05',
  },
  sources: [
    'Nigerian Exchange annual reports for Nestlé Nigeria, Unilever Nigeria, Flour Mills of Nigeria, Dangote Sugar, NASCON, BUA Foods, Cadbury Nigeria and PZ Cussons',
    'Manufacturers Association of Nigeria consumer-goods commentary, 2024–2026',
    'BioNixus Nigeria open-market, kiosk and organised-retail fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Idumota and Onitsha wholesale price-and-availability checks on Golden Penny, Dangote Sugar and BUA staple SKUs in the same week.',
    'Kiosk audits that put Maggi, Indomie, Omo and PZ soaps on one trip to see which brand actually got restocked after a naira move.',
    'Shoprite, Justrite and FoodCo planogram comparisons in Lagos and Ibadan against the same SKU’s presence in a neighbourhood store.',
    'NBC versus other cooler brands in open-market and organised catchments, with crate-return economics asked as a trade question, not a media question.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
