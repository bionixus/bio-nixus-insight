import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsMexico: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'mexico',
  metaDescription:
    'Pharmaceutical distributors in Mexico: Nadro, Casa Saba, Marzam, Farmacias del Ahorro, IMSS, ISSSTE and Cofepris — private books, public institutes, chemist DCs.',
  introLead:
    'Mexico’s medicine path is an oligopoly plus two institutes: Nadro, Casa Saba and Marzam still invoice most private farmacias, while IMSS and ISSSTE buy on their own calendars and Farmacias del Ahorro’s warehouses behave like a fourth wholesale door.',
  introRest:
    'Cofepris licenses manufacturers, importers and distributors and is the establishment register a field team actually checks. Private retail remains fragmented — thousands of independent farmacias and small regional banners — which is why the three national books still matter. Farmacias del Ahorro, Farmacias Guadalajara and similar banners have built DCs that pull a rising share away from those books. Public volume is not a single SSA tender: IMSS is the largest institutional buyer, ISSSTE serves civil servants, and state health services plus IMSS-Bienestar cover the uninsured with a procurement logic that has been rewritten more than once since 2019. BioNixus maps the three books, the banner DCs and the institute desks separately, because a Reforma farmacia listing will not tell you what an IMSS warehouse in Jalisco will accept.',
  stats: [
    { value: '3 books', label: 'Nadro, Casa Saba and Marzam as the named private wholesale set' },
    { value: 'IMSS', label: 'Largest institutional buyer, distinct from ISSSTE and state services' },
    { value: 'Ahorro DCs', label: 'Farmacias del Ahorro warehouses acting as a retail–wholesale door' },
    { value: 'Cofepris', label: 'Establishment licence the depot must show before it invoices' },
  ],
  channelHeading: 'Three private books, banner warehouses and institute calendars',
  channelBody:
    'A multinational affiliate or a Mexican industrial sells to Nadro, Casa Saba and Marzam, which run branches from the Valle de México into Monterrey, Guadalajara, Mérida and the border cities. Independents still take the majority of private packs, so credit days and bounce risk are the wholesaler’s real product. Farmacias del Ahorro’s DC network, Farmacias Guadalajara and selected regional banners buy centrally; those negotiations are retailer meetings, not stockist meetings. IMSS tenders and now the evolving consolidated-purchase experiments decide hospital and family-medicine-unit volume at a scale no private book matches. ISSSTE runs a parallel civil-service formulary. State servicios de salud and IMSS-Bienestar handle the residual public population, and their warehouses are where stock-outs show up first. Cold chain for biologics sits in the Valle, Jalisco and Nuevo León, with 3PLs used when a principal does not want the three books to hold the specialty SKU. Write the institute, the banner and the city. “Mexico distribution” as one appointment is how a Baja California gap gets averaged into a national win.',
  companies: [
    {
      name: 'Nadro',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'Largest private pharmaceutical wholesaler by farmacia reach',
      notes: 'The book most principals still put first. Branch-level fill rates in the southeast are a different conversation from the Valle de México CFO slide.',
    },
    {
      name: 'Casa Saba',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'National wholesale to independents and small banners',
      notes: 'The second name on dual-wholesaler plans; credit terms and returns handling are where pharmacists still distinguish it from Nadro.',
    },
    {
      name: 'Marzam',
      hq: 'Mexico City',
      type: 'Local',
      focus: 'National wholesale with selected specialty and hospital adjacency',
      notes: 'The third private book. Hospital and farmacia teams inside Marzam do not share one price list, which matters on a mixed launch.',
    },
    {
      name: 'Farmacias del Ahorro',
      hq: 'Mexico City',
      type: 'Retailer',
      focus: 'Largest chemist banner with wholesale-scale distribution centres',
      notes: 'Retail–wholesale overlap. Internal transfers feed stores; the DC also changes how nearby independents see promotional stock. Split those desks.',
    },
    {
      name: 'Instituto Mexicano del Seguro Social (IMSS)',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Largest public buyer for family-medicine units and IMSS hospitals',
      notes: 'The institute desk. Award and warehouse receipt here dwarf any private book, and Jalisco is not the same operating unit as the Valle.',
    },
    {
      name: 'ISSSTE',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Civil-service formulary and hospital purchasing',
      notes: 'A second institute, not an IMSS annex. Formularies, payment cycles and depot locations have to be mapped on their own.',
    },
    {
      name: 'Cofepris',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Licensing and inspection of manufacturers, importers and distributors',
      notes: 'The register. A warehouse without a current Cofepris establishment licence is not a legal invoice path, regardless of the commercial letterhead.',
    },
    {
      name: 'Farmacias Guadalajara',
      hq: 'Guadalajara',
      type: 'Retailer',
      focus: 'Western Mexico chemist banner with own DCs',
      notes: 'The Jalisco-rooted retail door a Mexico-City-only Ahorro sample will underweight. Own warehouses, own listing calendar.',
    },
    {
      name: 'IMSS-Bienestar / state health services',
      hq: 'State capitals',
      type: 'Government',
      focus: 'Public coverage for the population outside IMSS and ISSSTE',
      notes: 'The residual public spine. Procurement rules have shifted since 2019; verify the current warehouse owner before you brief a tender response.',
    },
    {
      name: 'Farmacias Similares',
      hq: 'Mexico City',
      type: 'Retailer',
      focus: 'Value chemist banner and similar-generic retail system',
      notes: 'A price-architecture story as much as a banner. Private-label and similar generics here are not the same shopper as an Ahorro trolley.',
    },
    {
      name: 'Secretaría de Salud federal purchasing (where still used)',
      hq: 'Mexico City',
      type: 'Government',
      focus: 'Federal programme and selected consolidated purchases',
      notes: 'The federal desk that still appears on some high-cost and programme lines; do not assume it replaced IMSS — it sits beside it.',
    },
    {
      name: 'Border-city regional wholesalers (Tijuana, Juárez, Reynosa)',
      hq: 'Northern border cities',
      type: 'Distributor',
      focus: 'Regional wholesale and cross-border adjacency',
      notes: 'National books thin here. US-adjacent demand and local houses still invoice farmacias a Valle de México van will not visit daily.',
    },
    {
      name: 'DHL / Kuehne+Nagel Mexico GDP rooms',
      hq: 'Mexico City / Toluca',
      type: 'MNC',
      focus: 'Temperature-controlled warehousing for affiliates',
      notes: '3PL storage before Nadro or an IMSS warehouse takes the pack. They are not the importer of record and they do not call independents.',
    },
    {
      name: 'Independent farmacia associations and cooperativas',
      hq: 'Multiple states',
      type: 'Distributor',
      focus: 'Buying groups for small farmacias outside the three books’ best terms',
      notes: 'The residual private path. Where a cooperativa is strong, a principal that only meets Nadro will misread listing and credit in that state.',
    },
  ],
  categoryBlurbs: {
    local:
      'Nadro, Casa Saba, Marzam, border-city houses and farmacia cooperativas: Mexican books that still invoice independents on credit and feel Selic-equivalent rates as working-capital pain.',
    mnc:
      'International 3PLs holding GDP rooms for affiliates. They store specialty; they do not win IMSS or list in Ahorro.',
    regional:
      'US-Mexico and LatAm traders that treat the border and selected imported specialty as a corridor, not as a national chemist van.',
    trade:
      'Cofepris, IMSS, ISSSTE, IMSS-Bienestar, federal SSA desks, and Farmacias del Ahorro / Guadalajara DCs that buy like wholesalers.',
  },
  growthDrivers: [
    {
      title: 'Institute procurement experiments',
      desc: 'IMSS, ISSSTE and the Bienestar/state layer have been re-wired more than once since 2019. A bid calendar from two years ago is not a brief; the current warehouse owner has to be re-checked.',
    },
    {
      title: 'Banner DCs eating independent drops',
      desc: 'Ahorro and Guadalajara keep internalising supply. Private wholesale share on those catchments is a shrinking residual, which is a design fact, not a complaint.',
    },
    {
      title: 'Similar-generic and value banners',
      desc: 'Farmacias Similares and peers pull out-of-pocket volume into a different price architecture. A Nadro-only chronic study will miss that substitution.',
    },
    {
      title: 'Northern border as a second Mexico',
      desc: 'Tijuana, Juárez and Reynosa farmacias sit next to US supply and local houses. A Valle-only sample will invent national coverage.',
    },
  ],
  faq: [
    {
      q: 'Do foreign laboratories need one exclusive Mexican wholesaler?',
      a: 'No. Most affiliates sell to Nadro, Casa Saba and Marzam together, then negotiate separately with Ahorro and Guadalajara DCs. Exclusive paper is rare outside specialty.',
    },
    {
      q: 'Who buys for the Mexican public system?',
      a: 'IMSS is the largest institute buyer. ISSSTE runs a civil-service formulary. State services and IMSS-Bienestar cover much of the remaining public population. Federal SSA still appears on selected programme lines.',
    },
    {
      q: 'Why is Farmacias del Ahorro listed with distributors?',
      a: 'Its DCs operate at wholesale scale and have taken drops away from the three books. The listing meeting and the warehouse inbound meeting are different desks.',
    },
    {
      q: 'Is Cofepris a buyer?',
      a: 'No. It licenses and inspects establishments. The commercial path is still the three books, the banner DCs and the institutes.',
    },
    {
      q: 'What does BioNixus field on Mexican pharmaceutical distribution?',
      a: 'Farmacia invoice cuts in the Valle, Guadalajara, Monterrey and one border city; IMSS versus ISSSTE warehouse receipt checks; Ahorro DC versus independent share; and cooperativa presence in one state.',
    },
    {
      q: 'Does position in the table mean size?',
      a: 'No. Names are grouped by private book, banner-DC, institute, regulator and 3PL so a launch team can see which meeting to book next.',
    },
  ],
  regulatorSource: {
    name: 'Cofepris — licensed pharmaceutical manufacturers, importers and distributors',
    url: 'https://www.gob.mx/cofepris',
    asOf: '2026-09-05',
  },
  sources: [
    'Cofepris establishment licensing notices, 2024–2026',
    'IMSS, ISSSTE and IMSS-Bienestar purchase and warehouse circulars, 2024–2026',
    'Company disclosures and trade-press coverage of Nadro, Casa Saba, Marzam and Farmacias del Ahorro, 2024–2025',
    'BioNixus Mexico farmacia, institute and distributor fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Independent farmacia purchase-record audits splitting Nadro, Casa Saba, Marzam and cooperativa invoices on a defined chronic basket.',
    'IMSS and ISSSTE warehouse receipt checks in two delegaciones, including substitution and delay against the award list.',
    'Farmacias del Ahorro and Farmacias Guadalajara DC interviews on inbound terms versus the same SKU sold into independents.',
    'Border-city chemist and wholesaler interviews in Tijuana or Juárez to catch the coverage the Valle books under-serve.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
