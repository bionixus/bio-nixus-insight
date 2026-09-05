import type { DirectoryPageInput } from '../../types';

export const retailCompaniesSouthAfrica: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'south-africa',
  metaDescription:
    'Retail companies in South Africa: Shoprite/Checkers, Pick n Pay, Woolworths, Spar, Massmart/Makro and Clicks — banner missions, spaza restock, chemist.',
  introLead:
    'South African grocery research is a four-banner-plus-spaza problem: Shoprite and Checkers take volume and value, Pick n Pay takes a different middle trolley, Woolworths is a quality private-label mission, Spar is a franchise neighbourhood system, Massmart’s Makro restocks independents, and Clicks takes the chemist-adjacent trip.',
  introRest:
    'This page is banners and formats. Tiger Brands, Pioneer Foods, RCL and Unilever SA sit on the FMCG-companies South Africa file; they are factories, not shopper missions. Shoprite Holdings is not one shopper: Usave, Shoprite and Checkers are different missions under one ticker. Pick n Pay is a listed middle-market system with its own franchise tail. Woolworths Food is a quality trolley that will mislead any brief that files it as “grocery.” Spar is independently owned stores under a brand — a franchise fact, not a corporate planogram. Makro is cash-and-carry into independents and small HORECA; Game is a general-merchandise hybrid. Clicks is chemist-adjacent grocery for personal care and OTC. Spaza shops, restocked from independent wholesalers and Makro-type depots, still move maize meal, oil, sugar and washing powder. BioNixus fields each fascia as an account. Name the banner, the metro and whether spaza is in scope. “Retail in South Africa” is not a design.',
  stats: [
    { value: 'Shoprite family', label: 'Usave, Shoprite and Checkers as three missions under one ticker' },
    { value: 'Woolworths', label: 'Quality private-label trolley — not a volume grocery proxy' },
    { value: 'Spar', label: 'Franchise neighbourhood system, not a corporate planogram' },
    { value: 'Spaza + Makro', label: 'Township restock that still moves staples and washing powder' },
  ],
  channelHeading: 'Value hyper, middle supermarket, quality food, franchise, cash-and-carry, spaza, chemist',
  channelBody:
    'Organised grocery is a professionalised, often listed, geographically uneven system. Shoprite and Usave take value volume; Checkers takes a more premium Shoprite-family trolley — three missions, one holding company. Pick n Pay is a different middle shopper with a franchise tail that does not behave like a corporate Checkers. Woolworths Food is quality and private label; using it as a national grocery proxy is the usual way a dairy brief lies to itself. Spar stores are owner-operated under a brand; ranging and price are local in a way a central Shoprite DC is not. Makro (Massmart) restocks independents and small HORECA; Game is a general-merchandise-plus-grocery hybrid. Clicks takes baby, personal care and OTC missions that grocery-only samples miss. Spaza shops in Gauteng, KwaZulu-Natal and the Eastern Cape restock from independent wholesalers and from Makro; maize meal and washing powder move there at pack sizes a Sandton Checkers will not show. Write the fascia and the metro. A Sandton Woolworths sample is a quality-catchment study.',
  companies: [
    {
      name: 'Shoprite and Usave',
      hq: 'Cape Town / Brackenfell',
      type: 'Retailer',
      focus: 'Value hyper and hard-value small box',
      notes: 'The volume spine. Usave is not Checkers; keep the fascia split or the recommended pack will exist in neither store.',
    },
    {
      name: 'Checkers',
      hq: 'Shoprite family',
      type: 'Retailer',
      focus: 'Upper-value supermarket inside Shoprite Holdings',
      notes: 'A different trolley from Shoprite and Usave. Fresh and imported ranging pull a shopper the value boxes do not see.',
    },
    {
      name: 'Pick n Pay',
      hq: 'Cape Town',
      type: 'Retailer',
      focus: 'Middle-market supermarket and franchise tail',
      notes: 'Listed middle system. Franchise stores do not behave like corporate stores; say which you sampled.',
    },
    {
      name: 'Woolworths Food',
      hq: 'Cape Town',
      type: 'Retailer',
      focus: 'Quality and private-label food',
      notes: 'Not a volume grocery proxy. Use it when the SKU is quality or private-label competitive; never as the national trolley.',
    },
    {
      name: 'Spar South Africa',
      hq: 'Pinetown / national independents',
      type: 'Retailer',
      focus: 'Franchise neighbourhood supermarket',
      notes: 'Owner-operated under a brand. Central ranging slides will lie; the store owner is the account in many towns.',
    },
    {
      name: 'Makro (Massmart)',
      hq: 'Johannesburg',
      type: 'Retailer',
      focus: 'Cash-and-carry into independents and small HORECA',
      notes: 'The depot behind many spazas and small shops. A household intercept here is a design error unless you label it bulk.',
    },
    {
      name: 'Game (Massmart)',
      hq: 'Johannesburg',
      type: 'Retailer',
      focus: 'General-merchandise hybrid with grocery adjacency',
      notes: 'Not a weekly food trolley. Mix it into a grocery sample without saying so and the ticket will include a kettle.',
    },
    {
      name: 'Clicks',
      hq: 'Cape Town',
      type: 'Retailer',
      focus: 'Chemist-adjacent personal care, baby and OTC',
      notes: 'The chemist account grocery-only samples forget. P&G and Unilever packs already live here; a Checkers-only personal-care study will understate them.',
    },
    {
      name: 'Spaza shops',
      hq: 'Townships and peri-urban areas',
      type: 'Retailer',
      focus: 'Independent township grocery',
      notes: 'Maize meal, oil, sugar and washing powder at pack sizes a Sandton sample will not show. Restock traces to Makro and independent wholesalers.',
    },
    {
      name: 'Independent wholesale (township restock)',
      hq: 'Gauteng / KZN / Eastern Cape',
      type: 'Distributor',
      focus: 'Cash wholesale into spazas',
      notes: 'The trade behind the spaza beside Makro. A coverage gap in a township often sits here, not in a Checkers category review.',
    },
    {
      name: 'Department of Health / NRCS retail-hygiene adjacency',
      hq: 'Pretoria',
      type: 'Government',
      focus: 'Foodstuffs and cosmetics rules that constrain what banners may range',
      notes: 'The rule layer, not a shopper. Labelling and hygiene files can pull a SKU off a banner shelf while the spaza still holds it.',
    },
    {
      name: 'Western Cape versus Gauteng franchise tails',
      hq: 'Cape Town / Johannesburg',
      type: 'Retailer',
      focus: 'Regional ranging inside Pick n Pay and Spar',
      notes: 'Two metros, two ranging habits. A national average can still hide a dead SKU in one metro.',
    },
    {
      name: 'KwaZulu-Natal independents and Spar-heavy towns',
      hq: 'Durban / Pietermaritzburg',
      type: 'Retailer',
      focus: 'Coastal and inland KZN grocery mix',
      notes: 'Spar density is a KZN fact. A Gauteng Shoprite-heavy sample will underweight franchise neighbourhood grocery.',
    },
    {
      name: 'Eastern Cape spaza and independent mix',
      hq: 'Gqeberha / East London / inland',
      type: 'Retailer',
      focus: 'Thinner organised density, heavier independent restock',
      notes: 'If the brief claims national, this cell exists. A Johannesburg-Cape Town sample is a two-metro study.',
    },
  ],
  categoryBlurbs: {
    local:
      'Shoprite family, Pick n Pay, Woolworths Food, Spar, spazas and KZN/Eastern Cape independents: South African fascias and township doors.',
    mnc:
      'Massmart (Makro, Game) as the Walmart-linked cash-and-carry and general-merchandise layer. Depot and hybrid missions, not a weekly food proxy.',
    regional:
      'No Gulf hyper defines this market. The regional fact is metro-versus-township and franchise-versus-corporate inside the same brand.',
    trade:
      'Makro and independent wholesale into spazas, Clicks as chemist-adjacent grocery, and health/NRCS rules that constrain ranging.',
  },
  growthDrivers: [
    {
      title: 'Shoprite family as three missions',
      desc: 'Usave, Shoprite and Checkers share a ticker and split the shopper. A holding-company sample will recommend a pack that exists in one format only.',
    },
    {
      title: 'Woolworths as a quality contaminant',
      desc: 'Using Woolworths Food as a grocery proxy hides volume SKUs and overstates quality private label. Split the fascia.',
    },
    {
      title: 'Spar as franchise, not corporate',
      desc: 'Owner-operated stores set ranging locally. Central slides will not match the Pietermaritzburg store you actually need.',
    },
    {
      title: 'Spaza restock through Makro and independents',
      desc: 'Township units still move maize meal and washing powder. A Sandton Checkers average will hide that volume.',
    },
  ],
  faq: [
    {
      q: 'Which retail banners should a South Africa shopper study name?',
      a: 'Shoprite, Usave and Checkers as three missions, Pick n Pay (say corporate versus franchise), Woolworths Food as quality, Spar as franchise, Makro as trade, Clicks when the SKU is personal care, and spaza if the SKU is a staple.',
    },
    {
      q: 'How is this different from FMCG companies in South Africa?',
      a: 'That page is manufacturers (Tiger Brands, RCL, Unilever SA). This page is fascias and spazas. A bakery is not a Checkers aisle.',
    },
    {
      q: 'Does a Shoprite Holdings ticker replace a national design?',
      a: 'Shoprite Holdings is three missions plus geography. Woolworths, Spar, Makro and spazas still have to be named or excluded by design.',
    },
    {
      q: 'Why is Clicks on a grocery directory?',
      a: 'Because baby, personal care and OTC missions leave grocery. Clicks is an account, not “other outlets.”',
    },
    {
      q: 'What does BioNixus field on South African retail?',
      a: 'Fascia-level SKU audits across the Shoprite family, Pick n Pay, Woolworths Food and Spar; Makro depot walks; Clicks adjacency; and spaza restock checks in one township linked to a named wholesale source.',
    },
    {
      q: 'Does table order mean share?',
      a: 'No. The table is a mission map — value, quality, franchise, depot, chemist — so the next cell can be booked without arguing share.',
    },
  ],
  regulatorSource: {
    name: 'Department of Health — Foodstuffs, Cosmetics and Disinfectants Act; NRCS compulsory specifications for selected retail goods',
    url: 'https://www.health.gov.za',
    asOf: '2026-09-05',
  },
  sources: [
    'JSE filings and presentations for Shoprite, Pick n Pay, Woolworths, Spar and Clicks, 2024–2025',
    'Massmart / Makro and Game format reporting, 2024–2025',
    'Department of Health and NRCS retail-hygiene and labelling notices, 2024–2026',
    'BioNixus South Africa banner, Makro and spaza fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SKU-facing audits in Usave, Shoprite, Checkers, Pick n Pay, Woolworths Food and a Spar owner-store on a named dairy, maize-meal and personal-care basket.',
    'Makro and one independent wholesale walk linked to a township spaza sample on the same staple SKUs.',
    'Clicks versus Checkers availability for baby and personal-care packs in Gauteng and the Western Cape.',
    'KZN Spar-heavy town versus Gauteng corporate-banner notes so a national average cannot hide a franchise ranging gap.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
