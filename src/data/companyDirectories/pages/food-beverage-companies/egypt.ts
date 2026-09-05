import type { DirectoryPageInput } from '../../types';

export const foodBeverageCompaniesEgypt: DirectoryPageInput = {
  entity: 'food-beverage-companies',
  countrySlug: 'egypt',
  metaDescription:
    'Egyptian food-and-beverage plants: Juhayna, Edita, Domty, Obour Land, Beyti, Coca-Cola and PepsiCo halls plus NFSA control. Manufacture, not the full FMCG trolley.',
  introLead:
    'Since Law 1 of 2017 created the National Food Safety Authority, an Egyptian warehouse that used to answer to a scatter of health, supply and municipal inspectors answers to one food-safety file — and the plants that file those dossiers are dairy, snack, cheese, bottling and oil halls, not detergent powder lines.',
  introRest:
    'Juhayna’s Sixth of October and Nubariya dairies, Edita’s snack and bakery halls, Obour Land’s Domty cheese vats, Beyti’s Almarai-owned juice and milk lines, Egypt Foods’ snack plants and Arma’s oil mills are the counterparties BioNixus names when a client asks who manufactures inside Egypt. Coca-Cola and PepsiCo run bottling and Chipsy capacity that is a factory story, Nestlé keeps culinary and dairy-adjacent licences, and Americana still packs kitchen brands in Tenth of Ramadan. Al Ahram Beverages brews and bottles under Heineken. Cairo Poultry further-processes birds for retail and HORECA. This page stays on those halls and on NFSA’s facility register. Personal care, home care and chemist-adjacent SKUs live on the Egypt FMCG directory. A brief that wants kiosk share of Molto and Ariel in the same sample has asked for the wrong spoke.',
  stats: [
    { value: 'Law 1/2017', label: 'Statute that created NFSA as the single food-safety authority, published 10 January 2017' },
    { value: 'EGX plants', label: 'Juhayna, Edita and Obour Land report as listed Egyptian food manufacturers with named halls' },
    { value: 'NFSA file', label: 'Facility registration and import-control dossier that replaced the old multi-inspector stack' },
    { value: 'Tenth of Ramadan', label: 'Industrial city that still concentrates snack, poultry, oil and Americana packing halls' },
  ],
  channelHeading: 'From NFSA facility file to kiosk, bakery and hotel kitchen',
  channelBody:
    'NFSA now licenses food-handling facilities, sets mandatory safety criteria, and runs risk-based import control. A dairy or snack hall that has not completed facility registration cannot legally keep packing, which is why regulatory-affairs staff treat the NFSA file as a production constraint, not a communications slide. Once the hall is legal, product leaves in several directions that a single “modern trade” cell will smash together. UHT milk and white cheese still move through bakals and wholesale markets in volumes that Carrefour and Metro only partially see. Snack cakes and chips leave Edita and PepsiCo halls toward kiosks and school-gate impulse as well as toward BIM and Seoudi. Oils leave Arma toward household tins and toward falafel and bakery fryers. Poultry leaves Cairo Poultry toward both freezer bays and hotel receiving. Coca-Cola and Pepsi bottlers sell fountain and cooler contracts to cafés that never appear in a grocery panel. BioNixus therefore tags the NFSA status of the hall, the pack size, and whether the next buyer is a kiosk, a hypermarket or a kitchen — and it refuses to add a detergent SKU to that tag set.',
  companies: [
    {
      name: 'Juhayna Food Industries',
      hq: '6th of October',
      type: 'Local',
      focus: 'UHT milk, juice and dairy drinks',
      notes: 'EGX-listed dairy whose October and Nubariya halls still set the Egyptian milk conversation for both grocery and HORECA breakfast.',
    },
    {
      name: 'Edita Food Industries',
      hq: '6th of October',
      type: 'Local',
      focus: 'Snack cakes, bakery and confectionery',
      notes: 'Listed snack manufacturer; Molto and TODO are plant SKUs whose kiosk impulse is a different job from a supermarket biscuit bay.',
    },
    {
      name: 'Obour Land (Domty)',
      hq: 'Obour',
      type: 'Local',
      focus: 'White cheese and processed dairy',
      notes: 'Domty vats that bakals still treat as a staple; food-service cheese specs for sandwiches are a second book.',
    },
    {
      name: 'Beyti (Almarai Egypt)',
      hq: 'Nubariya',
      type: 'Regional',
      focus: 'Dairy and juice under the Almarai system',
      notes: 'Saudi-owned Egyptian halls that let a GCC dairy brief land on a local plant instead of on an import invoice.',
    },
    {
      name: 'Egypt Foods',
      hq: '10th of Ramadan',
      type: 'Local',
      focus: 'Salty snacks and processed foods',
      notes: 'Ramadan snack halls that contest Edita and PepsiCo Chipsy on impulse without being a detergent adjacency.',
    },
    {
      name: 'Arma Food Industries',
      hq: '10th of Ramadan',
      type: 'Local',
      focus: 'Edible oils and fats',
      notes: 'Household tins plus falafel-and-bakery fryer fats; the industrial tote is often the real volume.',
    },
    {
      name: 'Cairo Poultry (Cairo3A)',
      hq: '10th of Ramadan',
      type: 'Local',
      focus: 'Broiler integration and further-processed chicken',
      notes: 'Ramadan poultry integrator that hotels and grocers both buy; treat the cut-up hall as the unit of analysis.',
    },
    {
      name: 'Coca-Cola Egypt',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Sparkling and still bottling',
      notes: 'Bottling and fountain system whose café contracts are a factory-and-cooler story, not a brand-office story.',
    },
    {
      name: 'PepsiCo Egypt',
      hq: '6th of October',
      type: 'MNC',
      focus: 'Chipsy snacks and Pepsi-system beverages',
      notes: 'Snack halls plus bottling; kiosk impulse and fountain are the two books a grocery-only sample will under-count.',
    },
    {
      name: 'Nestlé Egypt',
      hq: '6th of October',
      type: 'MNC',
      focus: 'Culinary, coffee, dairy-adjacent and ice cream',
      notes: 'October licences for selected culinary and dairy-adjacent lines; Maggi food-service packs are not the household jar.',
    },
    {
      name: 'Americana Egypt',
      hq: '10th of Ramadan',
      type: 'Regional',
      focus: 'Kitchen brands and frozen packing',
      notes: 'Ramadan halls that still put regional kitchen SKUs into grocery and into QSR commissaries.',
    },
    {
      name: 'Al Ahram Beverages Company',
      hq: 'Giza',
      type: 'MNC',
      focus: 'Beer, malt drinks and bottled beverages',
      notes: 'Heineken-owned Giza halls; HORECA draught and retail bottles are different specifications.',
    },
    {
      name: 'Halwani Brothers Egypt',
      hq: '10th of Ramadan',
      type: 'Regional',
      focus: 'Processed meats and sweets',
      notes: 'Saudi group’s Egyptian meat halls; hotel breakfast protein and retail deli are both live books.',
    },
    {
      name: 'Farm Frites Egypt',
      hq: '10th of Ramadan',
      type: 'MNC',
      focus: 'Frozen potato products for retail and food-service',
      notes: 'The fry-spec potato plant QSR and hotel kitchens actually name; grocery bags are the smaller conversation.',
    },
    {
      name: 'Unilever Foods Egypt',
      hq: '6th of October',
      type: 'MNC',
      focus: 'Culinary, ice cream and food-service',
      notes: 'Knorr and ice-cream halls only. Home care stays off this page and on the FMCG spoke.',
    },
    {
      name: 'National Company for Maize Products',
      hq: '10th of Ramadan',
      type: 'Local',
      focus: 'Starch, sweeteners and industrial maize derivatives',
      notes: 'Upstream mill that snack and beverage halls buy from; a manufacturer study that skips it will miss cost pressure.',
    },
    {
      name: 'Lamar (Arabian Food Industries)',
      hq: '6th of October',
      type: 'Local',
      focus: 'Cheese, juice and dairy extras',
      notes: 'October dairy-and-juice hall that bakals still stock next to Domty and Juhayna without being the same plant.',
    },
    {
      name: 'National Food Safety Authority (NFSA)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Facility licensing, import control and mandatory food-safety criteria',
      notes: 'The single file a hall must complete after 2017. Launch timing in Egypt is now an NFSA queue, not a tour of scattered inspectorates.',
    },
  ],
  categoryBlurbs: {
    local:
      'October, Obour and Ramadan dairies, snack halls, cheese vats, oil mills and poultry integrators that file with NFSA and still sell into bakals as well as into Metro. They are listed or industrial peers, not filler around multinationals.',
    mnc:
      'Coca-Cola, PepsiCo, Nestlé, Unilever Foods, Farm Frites and Al Ahram run Egyptian halls or bottling. The question is which line and which pack, including fountain and fry-spec, not whether a Cairo office exists.',
    regional:
      'Beyti, Americana and Halwani Egypt land GCC brand systems on Egyptian licences. A KSA questionnaire copied onto a Ramadan hall will miss kiosk and bakal economics.',
    trade:
      'NFSA’s facility register plus wholesale markets, kiosks and hotel receiving bays. Carrefour and BIM still list; they do not replace the inspector or the street cooler.',
  },
  growthDrivers: [
    {
      title: 'One NFSA file instead of a scatter of inspectors',
      desc: 'Law 1 of 2017 pulled food control into a single authority. Facility registration and import licensing now sit on that file. A launch plan that still budgets “ministry tours” is dated.',
    },
    {
      title: 'Listed snack and dairy halls as peers to multinationals',
      desc: 'Edita and Juhayna are EGX manufacturers with real capacity. Competitor work that treats them as local colour around PepsiCo or Nestlé will mis-brief the client.',
    },
    {
      title: 'Kiosk and bakery offtake the panel undersamples',
      desc: 'Snack cakes, chips, white cheese and frying oil still leave halls toward street and bakery buyers. A Metro-only sample will understate those tonnes.',
    },
    {
      title: 'HORECA fry and fountain as factory books',
      desc: 'Farm Frites, Cairo Poultry, Coca-Cola fountain and Arma industrial fats sell to kitchens. Those contracts need their own cells, not a leftover “food-service” footnote.',
    },
    {
      title: 'Pack-down under inflation starts at the line',
      desc: 'Households trade gram-weight before they abandon a brand. The first place that shows up is the hall’s price-pack architecture, not a category average.',
    },
  ],
  sections: [
    {
      heading: 'Ramadan and October as manufacturing cities, not just suburb names',
      paragraphs: [
        'Tenth of Ramadan and Sixth of October concentrate snack, poultry, oil, Americana and Nestlé licences in a way Cairo retail maps do not. A study that only interviews a Zamalek chef or a Maadi Metro buyer has not seen the halls. BioNixus puts plant interviews on the same design as kiosk and kitchen interviews, and it keeps NFSA facility status on the discussion guide because a hall that is between registrations will quietly ration SKUs the brand team still thinks are listed.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which Egyptian food and beverage manufacturers belong on a plant map?',
      a: 'Juhayna, Edita, Obour Land/Domty, Beyti, Egypt Foods, Arma, Cairo Poultry, Lamar and the National Company for Maize Products on the local side; Coca-Cola, PepsiCo, Nestlé, Unilever Foods, Farm Frites, Al Ahram, Americana and Halwani Egypt on the international and regional side; NFSA as the licence desk.',
    },
    {
      q: 'What did NFSA change for factories after 2017?',
      a: 'It became the authority that licenses facilities, sets mandatory safety criteria and controls food imports. Halls no longer shop a stack of overlapping inspectorates for the same permission. The commercial effect is a single queue that can stall a line.',
    },
    {
      q: 'How is this page different from the Egypt FMCG companies directory?',
      a: 'That page includes Unilever home care, P&G and chemist-adjacent personal care because a trolley does. This page keeps dairy, snacks, oils, poultry, bottling and culinary halls and drops detergents on purpose.',
    },
    {
      q: 'Do kiosks still matter if the client only sells into Metro?',
      a: 'If the SKU is a snack cake, a chip or a small cheese pack, yes. Those halls still ship a large share through bakals and kiosks. A Metro-only design will describe a channel, not the plant’s book.',
    },
    {
      q: 'What fieldwork does BioNixus run in Egyptian food halls?',
      a: 'NFSA-status and shift interviews in October, Obour and Ramadan; kiosk and wholesale stock checks that tag plant-door packs; and hotel and QSR fry-spec conversations that separate Farm Frites, Cairo Poultry and Arma industrial fats.',
    },
    {
      q: 'Should anyone read this Egyptian roster as a ranked league table?',
      a: 'No. Order reflects the plants and the NFSA desk we keep meeting in briefs. It is not a claim that Edita outsells Juhayna or that Coca-Cola outsells PepsiCo.',
    },
  ],
  regulatorSource: {
    name: 'National Food Safety Authority (NFSA) — facility licensing, import control and mandatory food-safety criteria (Law 1 of 2017)',
    url: 'https://nfsa.gov.eg',
    asOf: '2026-09-05',
  },
  sources: [
    'Law No. 1 of 2017 establishing the National Food Safety Authority; NFSA facility and import-control guidance, consulted 2026',
    'EGX disclosures for Juhayna Food Industries, Edita Food Industries and Obour Land',
    'Company plant descriptions for Beyti/Almarai Egypt, PepsiCo Chipsy, Coca-Cola Egypt, Farm Frites Egypt and Cairo Poultry',
    'BioNixus Egypt plant, kiosk and HORECA fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Sixth of October dairy and snack-hall interviews that record which Juhayna and Edita SKUs leave toward Metro versus which leave toward kiosk distributors.',
    'Obour and Nubariya cheese and juice walks comparing Domty, Lamar and Beyti vat utilisation against what bakals actually face that week.',
    'Tenth of Ramadan poultry, oil and Americana packing visits timed against NFSA facility status, because a lapsed file shows up as a quiet SKU gap.',
    'Cairo hotel and QSR receiving-bay checks on Farm Frites, Cairo Poultry and fountain contracts, kept off the grocery discussion guide.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
