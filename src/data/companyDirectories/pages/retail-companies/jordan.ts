import type { DirectoryPageInput } from '../../types';

export const retailCompaniesJordan: DirectoryPageInput = {
  entity: 'retail-companies',
  countrySlug: 'jordan',
  metaDescription:
    'Retail companies in Jordan: Carrefour MAF, Cozmo, C-Town, Sameh Mall, Safeway Jordan and neighbourhood grocers — Amman banners, not manufacturers.',
  introLead:
    'Jordanian grocery as a research object is a set of Amman banners and a country of neighbourhood grocers: Carrefour MAF, Cozmo, C-Town, Sameh Mall and Safeway Jordan are the listing theatres; they are not how Zarqa or Irbid buys labneh on a Tuesday.',
  introRest:
    'This directory is banners and formats. Siniora, Al-Nabil, Jordan Dairy and Fine belong on the FMCG-companies Jordan page; they do not belong here as if a factory were a shopper mission. Carrefour brings a Gulf hypermarket playbook. Cozmo and C-Town are local supermarket logics with different catchments. Sameh Mall blurs grocery and general merchandise. Safeway Jordan is the older supermarket name households still use in West Amman. Neighbourhood grocers and wholesale depots in eastern Amman, Zarqa, Irbid and the camps-adjacent catchments still take the weekday trip. Pharmacy banners take personal care. The Ministry of Industry, Trade and Supply and Greater Amman Municipality licence the store; JFDA sits on what the store may sell. BioNixus fields each banner as an account and the grocer as a cell. Name the banner and the governorate. “Retail in Jordan” is a mood.',
  stats: [
    { value: '5 banners', label: 'Carrefour, Cozmo, C-Town, Sameh Mall and Safeway as named listing theatres' },
    { value: 'Grocer', label: 'Neighbourhood shops in Zarqa and Irbid still taking the weekday trip' },
    { value: 'Amman-heavy', label: 'Organised grocery density that is a poor national proxy' },
    { value: 'Sameh Mall', label: 'Grocery-plus-general-merchandise hybrid, not a Cozmo clone' },
  ],
  channelHeading: 'Gulf hyper, local supermarket, mall hybrid, Safeway, grocer, chemist',
  channelBody:
    'Organised grocery in Jordan is an Amman conversation that leaks into Irbid and Aqaba in thin strips. Carrefour (Majid Al Futtaim) is the destination hyper at Abdali and selected sites — a listing meeting with a Gulf category grammar. Cozmo is a local supermarket shopper, often more imported and more West-Amman than C-Town. C-Town is the other local supermarket logic, denser in some eastern and middle-income catchments. Sameh Mall is a trolley-plus-general-merchandise trip; mixing it with Cozmo in one “modern trade” cell will invent a planogram. Safeway Jordan holds older supermarket habits in catchments that never switched. Neighbourhood grocers, restocked from wholesale depots, still move dairy, water, bread and laundry bars outside those banners. Pharmacies take baby and personal care. Write the banner and whether the cell is West Amman, eastern Amman, Zarqa or Irbid. A Cozmo-only sample is a catchment study.',
  companies: [
    {
      name: 'Carrefour (Majid Al Futtaim) Jordan',
      hq: 'Amman (Abdali and selected sites)',
      type: 'Regional',
      focus: 'Destination hypermarket',
      notes: 'Gulf operating system. The listing theatre international teams know; a poor proxy for a Zarqa grocer or a C-Town middle-income trolley.',
    },
    {
      name: 'Cozmo',
      hq: 'Amman',
      type: 'Retailer',
      focus: 'Local supermarket with imported-leaning ranging',
      notes: 'West-Amman supermarket logic. Not Carrefour and not C-Town; merge them and you will write a facing for a store that does not exist.',
    },
    {
      name: 'C-Town',
      hq: 'Amman / selected governorates',
      type: 'Retailer',
      focus: 'Local supermarket, denser in selected middle-income catchments',
      notes: 'The other Jordanian supermarket name. Catchment and price architecture differ from Cozmo; treat it as its own account.',
    },
    {
      name: 'Sameh Mall',
      hq: 'Amman',
      type: 'Retailer',
      focus: 'Grocery plus general merchandise',
      notes: 'A hybrid mission. Shoppers buy rice and a kettle on the same ticket; a supermarket planogram pasted here will fail the general-merchandise aisle.',
    },
    {
      name: 'Safeway Jordan',
      hq: 'Amman',
      type: 'Retailer',
      focus: 'Older supermarket banner still used in West Amman',
      notes: 'The name households have not retired. Listing and shopper here are not a Cozmo meeting wearing another fascia.',
    },
    {
      name: 'Neighbourhood grocers (Amman east, Zarqa, Irbid)',
      hq: 'Governorate towns',
      type: 'Retailer',
      focus: 'Independent grocery and weekday fill-in',
      notes: 'The national volume leak. Labneh, water and laundry bars move here; an Abdali Carrefour sample will not see the pack size.',
    },
    {
      name: 'Wholesale depots feeding grocers',
      hq: 'Amman / Zarqa',
      type: 'Distributor',
      focus: 'Cash-and-carry restock into neighbourhood shops',
      notes: 'The trade behind the grocer. A coverage gap in Irbid often sits in a depot, not in a Cozmo category review.',
    },
    {
      name: 'Pharmacy banners (Amman and Irbid)',
      hq: 'Amman',
      type: 'Retailer',
      focus: 'Chemist doors for derma, infant and OTC-adjacent packs',
      notes: 'Accounts when the SKU leaves grocery. A supermarket-only personal-care study in Jordan will understate chemist facings.',
    },
    {
      name: 'Ministry of Industry, Trade and Supply',
      hq: 'Amman',
      type: 'Government',
      focus: 'Trade licensing and selected price-administration files',
      notes: 'The licence and price desk, not a shopper. Some staple SKUs still feel administered prices that a banner promotion cannot ignore.',
    },
    {
      name: 'Greater Amman Municipality licensing',
      hq: 'Amman',
      type: 'Government',
      focus: 'Store-level operating licences inside the capital',
      notes: 'The municipal gate for Amman stores. Irbid and Zarqa sit under different municipalities; do not treat GAM as national retail law.',
    },
    {
      name: 'Aqaba and Irbid supermarket independents',
      hq: 'Aqaba / Irbid',
      type: 'Retailer',
      focus: 'Governorate supermarket doors outside the Amman five',
      notes: 'Thin organised grocery outside the capital. If the brief claims national, these cells have to exist or the claim is Amman-only.',
    },
    {
      name: 'Camps-adjacent grocers',
      hq: 'Selected catchments',
      type: 'Retailer',
      focus: 'Neighbourhood grocery in refugee-adjacent districts',
      notes: 'A distinct basket and pack-size mix. Exclude them by design if you must, but do not average them into a Cozmo trolley without saying so.',
    },
    {
      name: 'Carrefour Market / compact formats (where present)',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Smaller MAF grocery format',
      notes: 'Not the Abdali hyper. Compact format ranging is a different mission; keep it off the destination-hyper cell.',
    },
    {
      name: 'Traditional vegetable souq and bakery-adjacent shops',
      hq: 'Amman / governorates',
      type: 'Retailer',
      focus: 'Fresh and bread fill-in outside supermarket produce bays',
      notes: 'Fresh missions that still leave the supermarket. A banner produce audit will overstate share if this cell is missing.',
    },
  ],
  categoryBlurbs: {
    local:
      'Cozmo, C-Town, Sameh Mall, Safeway Jordan, neighbourhood grocers and governorate independents: Jordanian doors that are not a Gulf hyper export.',
    mnc:
      'International grocery arrives mainly as MAF Carrefour. Do not import a European discounter story onto Abdali.',
    regional:
      'Carrefour/MAF as the Gulf hypermarket operating system. Listing theatre, not the Zarqa weekday shop.',
    trade:
      'Wholesale depots, camps-adjacent grocers, pharmacy banners, GAM and Ministry of Industry licensing, and souq fresh fill-in.',
  },
  growthDrivers: [
    {
      title: 'Amman banners as listing theatres, not national volume',
      desc: 'Carrefour, Cozmo, C-Town, Sameh Mall and Safeway decide facings international teams can photograph. They do not decide Zarqa grocer volume.',
    },
    {
      title: 'Sameh Mall as a hybrid mission',
      desc: 'Grocery-plus-general-merchandise is not a supermarket. SKU roles change when the ticket also holds a kettle.',
    },
    {
      title: 'Depot-fed grocers outside West Amman',
      desc: 'Coverage gaps trace to wholesale depots in eastern Amman and Zarqa. A banner-only brief will mis-attribute a missing facing to “low demand.”',
    },
    {
      title: 'Chemist adjacency on personal care',
      desc: 'Baby and OTC-adjacent packs leave grocery. Pharmacy banners are accounts when those SKUs are the brief.',
    },
  ],
  faq: [
    {
      q: 'Which retail companies belong on a Jordan shopper brief?',
      a: 'Carrefour/MAF, Cozmo, C-Town, Sameh Mall, Safeway Jordan, neighbourhood grocers, wholesale depots, pharmacy banners and at least one governorate independent cell if the claim is national.',
    },
    {
      q: 'How is this page different from FMCG companies in Jordan?',
      a: 'That page is manufacturers and trade houses (Siniora, Fine, Unilever Levant). This page is banners and formats. A factory is not a shopper mission.',
    },
    {
      q: 'Is Carrefour enough to call a study national?',
      a: 'Carrefour is the destination listing theatre. It is not Cozmo, not C-Town, not Sameh Mall and not a Zarqa grocer. National claims need those cells or an honest Amman label.',
    },
    {
      q: 'Why is Sameh Mall not filed under supermarkets?',
      a: 'Because the mission includes general merchandise. Mixing it with Cozmo hides the ticket that is not a weekly food trolley.',
    },
    {
      q: 'What does BioNixus field on Jordanian retail?',
      a: 'Banner-level SKU audits across the five named banners, grocer and depot walks in Zarqa and Irbid, pharmacy adjacency checks, and a Sameh Mall hybrid-ticket cut.',
    },
    {
      q: 'Is the table a ranking?',
      a: 'No. Banners are grouped by mission so a brand team books the right buyer meeting and the right intercept.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Industry, Trade and Supply — commercial registration and selected retail licensing',
    url: 'https://www.mit.gov.jo',
    asOf: '2026-09-05',
  },
  sources: [
    'Ministry of Industry, Trade and Supply and Greater Amman Municipality licensing notices, 2024–2026',
    'MAF Jordan and local banner store-footprint reporting, 2024–2025',
    'JFDA retail-sale rules for foods and cosmetics as they constrain banner ranging, 2024–2025',
    'BioNixus Jordan banner, grocer and depot fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SKU-facing audits in Carrefour Abdali, Cozmo, C-Town, Sameh Mall and Safeway on a named dairy and laundry basket.',
    'Neighbourhood grocer and wholesale-depot walks in eastern Amman, Zarqa and Irbid on the same basket and pack sizes.',
    'Pharmacy versus grocery availability for baby and personal-care packs in two Amman catchments.',
    'Sameh Mall ticket reconstruction to separate grocery missions from general-merchandise add-ons.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
