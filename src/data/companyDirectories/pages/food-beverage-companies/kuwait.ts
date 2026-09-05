import type { DirectoryPageInput } from '../../types';

export const foodBeverageCompaniesKuwait: DirectoryPageInput = {
  entity: 'food-beverage-companies',
  countrySlug: 'kuwait',
  metaDescription:
    'Kuwait food-and-beverage manufacturers: KDD, Mezzan, Kuwait Flour Mills, Americana halls, Kout Fresh Productions and PAFN. Plants and commissaries, not detergents.',
  introLead:
    'Kuwait’s food manufacture is a short list of halls sitting behind a long import invoice: KDD still bottles the local dairy, Kuwait Flour Mills still grinds the staple, Mezzan still runs conserved foods and water plants, and Kout Food Group’s Fresh Productions unit in Subhan packs for restaurants and bases rather than for a detergent bay.',
  introRest:
    'The Public Authority for Food and Nutrition, created by Law 112 of 2013, is the inspector those halls and the incoming containers both face. Americana’s historic Kuwait Food Company and Gulf Food Industries lines still put kitchen brands into co-ops and into QSR commissaries. Livestock Transport & Trading and Kuwait Poultry handle red meat and birds. Bottlers fill Pepsi and Coca-Cola contracts. Almarai arrives mostly ambient. This directory is the plant and commissary map BioNixus uses when a brief asks who manufactures or centrally cooks inside Kuwait. Co-operative societies remain the grocery gate — that fact belongs here as a channel, not as a reason to turn the page into another FMCG trolley that adds P&G. Home care stays on the Kuwait FMCG spoke.',
  stats: [
    { value: 'Law 112/2013', label: 'Statute that created the Public Authority for Food and Nutrition as Kuwait’s food-control body' },
    { value: 'Subhan hall', label: 'Kout Food Group’s Fresh Productions plant, used for pre-pack and private-label food-service SKUs' },
    { value: '6 countries', label: 'Markets Mezzan Holding cites for its manufacturing and distribution footprint' },
    { value: 'Boursa names', label: 'Mezzan, Kout, Kuwait Flour Mills and Livestock Transport & Trading report as listed food-related issuers' },
  ],
  channelHeading: 'PAFN file, co-op fridge, commissary dock',
  channelBody:
    'A Kuwaiti hall or food-transport vehicle needs a PAFN licence; incoming consignments need the same authority’s clearance against Gulf technical regulations. That is a tighter stack than the pre-2013 scatter of municipality and health desks, and it is why regulatory affairs now treat PAFN as the clock on a new SKU. After the stamp, volume splits three ways. Fresh dairy and juice from KDD travel into consumer co-operative societies that still set price and facing in a way Sultan Center does not. Flour and bread from Kuwait Flour Mills move through those same co-ops and through bakery doors. Mezzan’s Khazan conserved foods, Aqua Gulf water and sister halls sell into grocery and into catering. Kout’s Subhan plant and Americana commissaries cook for restaurants, military bases and catering contracts that a household panel will never see. Bottlers sell fountain to cafés along Gulf Road. BioNixus names the PAFN status, the co-op or the commissary, and the pack — and it will not add a laundry powder to that design even if the same co-op aisle stocks both.',
  companies: [
    {
      name: 'KDD (Kuwait Danish Dairy)',
      hq: 'Shuwaikh',
      type: 'Local',
      focus: 'Fresh dairy, juice and ice cream',
      notes: 'The Shuwaikh dairy that still owns the local fridge conversation; Almarai’s ambient cartons are a different job, not a substitute.',
    },
    {
      name: 'Kuwait Flour Mills & Bakeries',
      hq: 'Shuwaikh',
      type: 'Local',
      focus: 'Wheat flour, bread and staple bakery',
      notes: 'State-linked mill-and-bakery that co-ops and industrial bakers still treat as the default flour spec.',
    },
    {
      name: 'Mezzan Holding',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Conserved foods, water, catering and food manufacture',
      notes: 'The conglomerate whose Khazan and Aqua Gulf halls are the actual Kuwaiti manufacturing depth most brand teams underestimate.',
    },
    {
      name: 'Kout Food Group — Fresh Productions',
      hq: 'Subhan',
      type: 'Operator',
      focus: 'Central food processing for restaurants and contracts',
      notes: 'Listed QSR group whose Subhan plant packs pre-pack and private-label food-service SKUs; included here as a manufacturer, not as a burger logo.',
    },
    {
      name: 'Kuwait Food Company (Americana)',
      hq: 'Kuwait City',
      type: 'Regional',
      focus: 'Kitchen brands and historic QSR-plus-packing system',
      notes: 'Americana’s home market: grocery SKUs and restaurant commissaries still share a manufacturing spine.',
    },
    {
      name: 'Gulf Food Industries',
      hq: 'Kuwait',
      type: 'Regional',
      focus: 'Canned vegetables and California Garden-type packing',
      notes: 'The canned-goods hall that still shows up on HORECA vegetable specs as well as on co-op shelves.',
    },
    {
      name: 'Livestock Transport & Trading Company',
      hq: 'Kuwait City',
      type: 'Local',
      focus: 'Live animals, red meat and protein supply',
      notes: 'Listed livestock-and-meat name that butchers and hotel receiving bays still quote when they specify local red meat.',
    },
    {
      name: 'Kuwait Poultry Company',
      hq: 'Kuwait',
      type: 'Local',
      focus: 'Broiler growing and processing',
      notes: 'Local bird integrator that contests incoming GCC poultry in both retail freezers and catering tenders.',
    },
    {
      name: 'Premier Food Industries',
      hq: 'Kuwait',
      type: 'Local',
      focus: 'Processed foods and industrial kitchen packs',
      notes: 'Smaller manufacturer that food-service buyers still name when they want a local alternative to Mezzan or Americana cans.',
    },
    {
      name: 'Kuwait Refreshments Company',
      hq: 'Kuwait',
      type: 'Local',
      focus: 'Pepsi-system bottling and fountain',
      notes: 'Bottler whose cooler and café fountain contracts are the factory story, not a brand-awareness number.',
    },
    {
      name: 'Coca-Cola Kuwait bottling',
      hq: 'Kuwait',
      type: 'MNC',
      focus: 'Sparkling and still bottling',
      notes: 'Halls that contest Kuwait Refreshments on fountain and contest Aqua Gulf on still water.',
    },
    {
      name: 'Unilever Food Solutions Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Professional culinary and chef packs',
      notes: 'Hotel and catering book only. Household laundry stays on the FMCG directory.',
    },
    {
      name: 'Nestlé Kuwait',
      hq: 'Kuwait City',
      type: 'MNC',
      focus: 'Dairy-adjacent, coffee and professional culinary',
      notes: 'Commercial affiliate whose food-service packs compete with KDD on selected occasions without being a dairy plant.',
    },
    {
      name: 'Almarai',
      hq: 'Saudi Arabia',
      type: 'Regional',
      focus: 'Ambient dairy, juice and bakery into Kuwait',
      notes: 'Incoming long-life book that sits in the same co-op fridge as KDD without doing the same fresh-milk job.',
    },
    {
      name: 'National Food Company',
      hq: 'Kuwait',
      type: 'Local',
      focus: 'Processed protein and packaged foods',
      notes: 'Local processor that still appears on co-op protein bays and on catering protein specs.',
    },
    {
      name: 'Public Authority for Food and Nutrition (PAFN)',
      hq: 'Kuwait City',
      type: 'Government',
      focus: 'Food-establishment licensing, import clearance and nutrition rules',
      notes: 'The 2013 authority that consolidated food control. A new SKU’s clock starts when PAFN has the file, not when the brand deck is approved.',
    },
  ],
  categoryBlurbs: {
    local:
      'Shuwaikh dairy and flour, Mezzan conserved-food and water halls, poultry and livestock processors. Few names, real plants. They are the incumbents a GCC dashboard flattens.',
    mnc:
      'The Coca-Cola hall, Nestlé’s commercial office and Unilever’s chef book. Execution quality in co-ops and hotel receiving bays is the question, not awareness.',
    regional:
      'Americana’s home packing spine and Almarai’s ambient import. One cooks and cans in-country; the other arrives already packed. Do not merge them.',
    trade:
      'PAFN licences plus consumer co-ops, Sultan Center and Subhan commissary docks. Skip the co-op or the commissary and you have sampled a tourist grocery trip.',
  },
  growthDrivers: [
    {
      title: 'PAFN as the single food-control clock',
      desc: 'Law 112 of 2013 pulled licensing and import clearance into one authority. A launch that still budgets “municipality plus health” as two unrelated queues is using an old map.',
    },
    {
      title: 'Mezzan as the underestimated manufacturer',
      desc: 'Khazan, Aqua Gulf and sister halls are why Kuwait is not “only KDD and a mill.” Competitor maps that skip Mezzan will understate local packing depth.',
    },
    {
      title: 'Commissary plants behind the restaurant logos',
      desc: 'Kout’s Fresh Productions unit and Americana kitchens pack for restaurants and contracts. A grocery-only brief will miss the tonnes those halls actually move.',
    },
    {
      title: 'Co-op fridges as the fresh-dairy theatre',
      desc: 'KDD versus Almarai is decided in co-operative society fridges more often than in a Sultan Center gondola. Design the sample around those societies.',
    },
    {
      title: 'Short distances, sharp governorate splits',
      desc: 'Hawalli café fountain is not Ahmadi co-op flour. A nationwide mean still conceals a lifeless SKU inside a single governorate.',
    },
  ],
  sections: [
    {
      heading: 'Why Kout sits on a manufacturer list',
      paragraphs: [
        'Kout Food Group is famous for restaurant brands. It also runs a Subhan processing hall that packs pre-pack and private-label food-service SKUs for its own restaurants, for other operators and for institutional contracts. BioNixus treats that hall as a manufacturer because a chef-specification brief that ignores it will attribute a coverage gap to “QSR branding” when the constraint is actually a Subhan line. Readers who only want banner-level restaurant research should say so in the brief; this page will still keep the plant in the map.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which food and beverage manufacturers actually run halls in Kuwait?',
      a: 'KDD, Kuwait Flour Mills, Mezzan’s Khazan and Aqua Gulf lines, Gulf Food Industries, National Food Company, Premier Food Industries, Kuwait Poultry, Livestock Transport & Trading, Kout’s Fresh Productions unit, Americana packing, and the Pepsi and Coca-Cola bottlers. PAFN licenses them.',
    },
    {
      q: 'Is Kout Food Group a manufacturer or only a restaurant operator?',
      a: 'Both. The restaurant book is larger in public conversation. The Subhan Fresh Productions hall is why the group appears on this plant directory. If your brief is only guest experience, say so; if it is commissary capacity, stay here.',
    },
    {
      q: 'How does PAFN change a launch timeline?',
      a: 'Establishment and product files now sit with one authority instead of a scatter of desks. Import clearance and local packing both wait on that file. Build the critical path around PAFN, not around a brand-team wish date.',
    },
    {
      q: 'Why is this not the Kuwait FMCG companies page?',
      a: 'Because that page correctly includes home care and a full trolley. This page keeps dairies, mills, conserved-food halls, bottlers and commissaries and leaves detergents off.',
    },
    {
      q: 'What does BioNixus field among Kuwaiti food manufacturers?',
      a: 'Shuwaikh dairy and mill walks; Mezzan hall interviews on Khazan and Aqua Gulf; Subhan commissary capacity checks; and co-op fridge audits that separate KDD fresh from Almarai ambient.',
    },
    {
      q: 'Is this Kuwait table a ranking of manufacturers by revenue?',
      a: 'It is not. Rows are the halls, bottlers and PAFN desk that recur in Kuwait briefs. Position is not a sales claim.',
    },
  ],
  regulatorSource: {
    name: 'Public Authority for Food and Nutrition (PAFN) — food-establishment licensing, import clearance and nutrition control (Law 112 of 2013)',
    url: 'https://www.pafn.gov.kw',
    asOf: '2026-09-05',
  },
  sources: [
    'Public Authority for Food and Nutrition official site and Law 112 of 2013 establishing the authority',
    'Mezzan Holding company disclosures on manufacturing footprint, Khazan and Aqua Gulf halls',
    'Kout Food Group description of the Fresh Productions facility in Subhan; Boursa Kuwait issuer pages for Mezzan, Kout, Kuwait Flour Mills and Livestock Transport & Trading',
    'BioNixus Kuwait plant, co-op and commissary fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Shuwaikh KDD and Kuwait Flour Mills floor interviews that separate co-op-bound fresh packs from bakery-door flour specs.',
    'Mezzan hall walks covering Khazan conserved foods and Aqua Gulf bottling, tagged against PAFN licence status for each line.',
    'Subhan Fresh Productions capacity checks with Kout operations staff, treating the hall as a manufacturer rather than as a restaurant anecdote.',
    'Co-operative society fridge audits in Hawalli, Ahmadi and Jahra that score KDD versus Almarai as different jobs, not as one dairy share point.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
