import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsSouthAfrica: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'south-africa',
  metaDescription:
    'Pharmaceutical distributors in South Africa: UPD, Imperial Health Sciences, Clicks, Dis-Chem, SAHPRA and NDoH tenders — private books, banner DCs, public depots.',
  introLead:
    'South Africa’s medicine path is a two-book plus two-banner plus tender story: United Pharmaceutical Distributors and Imperial Health Sciences still invoice most independent pharmacies, Clicks and Dis-Chem feed themselves from their own DCs, and the National Department of Health buys on national contracts that land in provincial depots.',
  introRest:
    'SAHPRA licenses manufacturers, importers and wholesalers and is the establishment register a field team checks before it believes a letterhead. Private retail is no longer only the independent pharmacy: Clicks and Dis-Chem have taken urban chronic volume into banner warehouses, which is why this page keeps both names on a distributor list. UPD remains the classic chemist book. Imperial Health Sciences sits on manufacturer logistics, public-programme warehousing and selected wholesale — a 3PL that sometimes behaves like a wholesaler. NDoH tender awards feed provincial pharmaceutical depots; those depots, not a Sandton chemist, decide whether a clinic in Limpopo has the pack. Medical-scheme formularies (Discovery, GEMS and others) then steer which private SKU the banner will even order. BioNixus splits UPD, Imperial, the banner DCs and the NDoH depot as four accounts, because a Clicks listing in Gauteng will not tell you what a KwaZulu-Natal depot received.',
  stats: [
    { value: 'UPD', label: 'Classic independent-pharmacy wholesale book still named first' },
    { value: 'Imperial HS', label: 'Manufacturer 3PL and public-programme warehouse layer' },
    { value: 'Clicks / Dis-Chem', label: 'Banner DCs that have internalised a large urban chronic slice' },
    { value: 'NDoH', label: 'National contracts that land in provincial pharmaceutical depots' },
  ],
  channelHeading: 'Independent books, banner warehouses and provincial depots',
  channelBody:
    'A multinational affiliate or a local industrial (Aspen, Adcock, Cipla SA) sells to UPD for the independent pharmacy and often to Imperial Health Sciences for factory-to-depot logistics. Clicks and Dis-Chem buyers sit in their own DCs in Gauteng and the Western Cape; those meetings are retailer category conversations with scheme-formulary constraints attached. Public volume is awarded on NDoH contracts and then pushed into provincial pharmaceutical supply depots — Gauteng, KwaZulu-Natal, Eastern Cape and the smaller provinces each run their own warehouse discipline. Stock-outs at clinic level usually trace to depot receipt and ward-demand, not to UPD’s chemist van. Informal and township pharmacies, plus dispensing GPs, still take a cash slice that neither banner nor depot fully sees. Cold chain for vaccines and biologics sits in Johannesburg, Cape Town and Durban, with Imperial and specialist 3PLs holding validated rooms. Write the province, the scheme and whether the outlet is banner, independent or depot. A “South Africa distributor” slide that only names UPD is a 2014 brief.',
  companies: [
    {
      name: 'United Pharmaceutical Distributors (UPD)',
      hq: 'Johannesburg',
      type: 'Local',
      focus: 'National wholesale to independent pharmacies and selected hospitals',
      notes: 'The book independents still open first. Fill rate into the Eastern Cape and Limpopo is the test a Gauteng warehouse slide will not pass for you.',
    },
    {
      name: 'Imperial Health Sciences',
      hq: 'Johannesburg',
      type: 'Local',
      focus: 'Manufacturer 3PL, public-programme warehousing and selected wholesale',
      notes: 'A logistics house that also touches public contracts. Treat the 3PL room and the wholesale invoice as two products inside one group.',
    },
    {
      name: 'Clicks Group pharmacies (distribution)',
      hq: 'Cape Town',
      type: 'Retailer',
      focus: 'Chemist banner with central DCs and scheme-heavy chronic volume',
      notes: 'Retail–wholesale in practice. Stores draw from Clicks warehouses; the inbound meeting is not a UPD drop. Scheme formularies steer the bay.',
    },
    {
      name: 'Dis-Chem',
      hq: 'Midrand',
      type: 'Retailer',
      focus: 'Chemist and wellness banner with own distribution',
      notes: 'The second banner DC. Wellness and OTC ranging differ from Clicks; a single “corporate pharmacy” cell will lie to both category teams.',
    },
    {
      name: 'South African Health Products Regulatory Authority (SAHPRA)',
      hq: 'Pretoria',
      type: 'Government',
      focus: 'Licensing of manufacturers, importers and wholesale establishments',
      notes: 'The register, not a buyer. A depot without a current SAHPRA wholesale licence is not a legal invoice path.',
    },
    {
      name: 'National Department of Health — pharmaceutical tenders',
      hq: 'Pretoria',
      type: 'Government',
      focus: 'National contracts for public-sector medicines',
      notes: 'Awards land in provincial depots. Winning Pretoria paper without a depot-receipt check is how clinic stock-outs get blamed on “the market.”',
    },
    {
      name: 'Provincial pharmaceutical depots',
      hq: 'Provincial capitals',
      type: 'Government',
      focus: 'Warehouse feed into clinics, CHCs and public hospitals',
      notes: 'Gauteng’s depot is not KwaZulu-Natal’s. Payment, substitution and lead time have to be mapped per province after the NDoH award.',
    },
    {
      name: 'Pharmacy Direct / chronic-dispense couriers',
      hq: 'Centurion / national',
      type: 'Distributor',
      focus: 'Scheme-funded chronic home and workplace dispense',
      notes: 'A courier-dispense layer that pulls chronic packs out of the retail bay. Discovery-type schemes made this a channel, not a novelty.',
    },
    {
      name: 'Dispensing GPs and township pharmacies',
      hq: 'Townships and secondary towns',
      type: 'Retailer',
      focus: 'Cash and scheme-adjacent dispense outside mall chemists',
      notes: 'The outlet class a Sandton Clicks sample never sees. UPD and cash wholesalers still invoice them; banners do not.',
    },
    {
      name: 'Transpharm / regional wholesale remnants',
      hq: 'Multiple',
      type: 'Distributor',
      focus: 'Regional wholesale books still named in secondary cities',
      notes: 'Where UPD density thins, a regional book or a cash market still restocks the independent. Name it or admit the sample stopped at the N1.',
    },
    {
      name: 'Aspen Pharmacare distribution adjacency',
      hq: 'Durban',
      type: 'Local',
      focus: 'Manufacturer-owned logistics on selected local and export lines',
      notes: 'A factory layer, not a chemist book. Still relevant when the SKU is an Aspen molecule that never needs UPD to reach a depot.',
    },
    {
      name: 'GEMS and Discovery formulary desks',
      hq: 'Pretoria / Sandton',
      type: 'Operator',
      focus: 'Scheme formularies that steer private chronic dispensing',
      notes: 'Not wholesalers. They decide which pack Clicks and Dis-Chem will order. A distribution brief that ignores schemes will misread the bay.',
    },
    {
      name: 'DHL / Bidvest life-science rooms',
      hq: 'Johannesburg',
      type: 'MNC',
      focus: 'GDP warehousing for affiliates and specialty',
      notes: '3PL storage before UPD or a provincial depot takes the pack. They do not call independents and they do not win NDoH paper.',
    },
    {
      name: 'Western Cape and Eastern Cape independent buying groups',
      hq: 'Cape Town / Gqeberha',
      type: 'Distributor',
      focus: 'Cooperative purchasing for independents outside banner DCs',
      notes: 'Coastal independents still pool orders. A Johannesburg UPD meeting will not surface those terms unless you ask in the Cape.',
    },
  ],
  categoryBlurbs: {
    local:
      'UPD, Imperial Health Sciences, Transpharm remnants, Cape buying groups and Aspen’s logistics adjacency: South African books and rooms that still move the independent and the factory pack.',
    mnc:
      'International 3PLs holding GDP rooms. They store specialty for affiliates; they do not replace UPD on the independent or NDoH on the depot.',
    regional:
      'SADC trading houses that treat Johannesburg as a hub into Namibia, Botswana or Mozambique, usually on selected exported lines rather than local chemist credit.',
    trade:
      'SAHPRA, NDoH contracts, provincial depots, Clicks and Dis-Chem DCs, scheme-dispense couriers and township cash outlets.',
  },
  growthDrivers: [
    {
      title: 'Banner DCs taking urban chronic',
      desc: 'Clicks and Dis-Chem internalise supply. UPD feels that as lost drops in mall catchments, which is why an independent-only share number now overstates the book in Gauteng.',
    },
    {
      title: 'NDoH awards versus provincial receipt',
      desc: 'National paper is not clinic stock. Depot discipline in KwaZulu-Natal or the Eastern Cape is the operational fact a Pretoria award announcement will not give you.',
    },
    {
      title: 'Scheme-funded courier dispense',
      desc: 'Pharmacy Direct-type models pull chronic packs out of the retail bay. Distribution research that only walks Clicks aisles will miss the parcel.',
    },
    {
      title: 'Township and dispensing-GP cash',
      desc: 'A share of units never hits a banner scanner. UPD and cash wholesalers still own that slice; a JSE-retail sample will file it under “other” and forget it.',
    },
  ],
  faq: [
    {
      q: 'Does a foreign manufacturer appoint one exclusive South African wholesaler?',
      a: 'Usually not. Affiliates sell to UPD for independents, negotiate with Clicks and Dis-Chem DCs as retailers, and use Imperial or a 3PL for factory logistics. Public volume is an NDoH contract, not a wholesale appointment.',
    },
    {
      q: 'How do public-sector medicines reach clinics?',
      a: 'NDoH awards national contracts. Provincial pharmaceutical depots receive the stock and feed clinics, CHCs and public hospitals. Stock-outs are often depot and ward problems, not manufacturer problems.',
    },
    {
      q: 'Why are Clicks and Dis-Chem on a distributor page?',
      a: 'Their DCs operate at wholesale scale and have taken urban chronic volume away from UPD. The inbound meeting is a retailer meeting with scheme constraints attached.',
    },
    {
      q: 'What is Imperial Health Sciences if it is not UPD?',
      a: 'A logistics and programme-warehouse house that also touches selected wholesale. It is the room many public and manufacturer contracts actually sit in.',
    },
    {
      q: 'What does BioNixus field on South African pharmaceutical distribution?',
      a: 'Independent-pharmacy invoice cuts in Gauteng, Western Cape, KwaZulu-Natal and one smaller province; Clicks versus Dis-Chem DC interviews; NDoH-to-depot receipt tracking; and township / dispensing-GP cash checks.',
    },
    {
      q: 'Is this list ranked by turnover?',
      a: 'No. Names are grouped by independent book, 3PL, banner DC, regulator, public depot, scheme layer and cash outlets so the next fieldwork cell is obvious.',
    },
  ],
  regulatorSource: {
    name: 'South African Health Products Regulatory Authority (SAHPRA) — licensed manufacturers, importers and wholesalers',
    url: 'https://www.sahpra.org.za',
    asOf: '2026-09-05',
  },
  sources: [
    'SAHPRA wholesale and manufacturer licensing notices, 2024–2026',
    'NDoH pharmaceutical tender awards and provincial depot circulars, 2024–2026',
    'JSE filings and presentations for Clicks, Dis-Chem and Aspen, 2024–2025',
    'BioNixus South Africa pharmacy, depot and distributor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Independent pharmacy purchase-record audits splitting UPD, regional books and cash invoices on a chronic and OTC basket across four provinces.',
    'Clicks and Dis-Chem DC interviews on inbound terms versus the same molecule sold into independents, including scheme-formulary constraints.',
    'NDoH award-to-provincial-depot receipt tracking in Gauteng and one other province, with clinic-level availability spot checks.',
    'Township pharmacy and dispensing-GP interviews on who actually invoices them when banners do not call.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
