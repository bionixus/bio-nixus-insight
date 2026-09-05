import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalDistributorsNigeria: DirectoryPageInput = {
  entity: 'pharmaceutical-distributors',
  countrySlug: 'nigeria',
  metaDescription:
    'Pharmaceutical distributors in Nigeria: SKG, Emzor channel, Alpha Pharmacy, Medplus, Worldwide Healthcare, NAFDAC, PCN and federal medical stores.',
  introLead:
    'Nigeria’s medicine path still runs through Idumota and Onitsha as much as through a named house: SKG Pharma’s distribution, Emzor’s channel, Alpha Pharmacy, Medplus Nigeria and Worldwide Healthcare sit on top of open-market wholesale that federal and state medical stores only partly replace.',
  introRest:
    'NAFDAC licenses manufacturers, importers and premises; the Pharmacists Council of Nigeria licenses the pharmacist and the premises type. Those two desks are why a letterhead can look clean and still fail a premises walk. SKG and Emzor illustrate manufacturer-adjacent distribution — factory brands that also move other people’s packs. Alpha Pharmacy is a Lagos retail-and-wholesale name that international teams already know. Medplus Nigeria is a chemist banner with warehouse habits; do not confuse it with India’s MedPlus. Worldwide Healthcare is a specialty and imported-line house used when the SKU cannot survive the open market. Public volume sits in Federal Medical Stores and in state medical stores that do not share one calendar or one payment culture. BioNixus fields the named house, the open-market stall and the medical-store desk as three accounts, because a Victoria Island listing will not tell you what a Kano stall sold this morning.',
  stats: [
    { value: 'Idumota', label: 'Lagos open-market spine that still restocks patent shops and small pharmacies' },
    { value: 'NAFDAC + PCN', label: 'Two licences — product/premises and pharmacist — both have to be current' },
    { value: 'FMS / SMS', label: 'Federal and state medical stores as the public depot layer' },
    { value: 'Naira', label: 'FX and cash cycles that rewrite who can hold stock this month' },
  ],
  channelHeading: 'Named houses, open-market stalls and medical-store depots',
  channelBody:
    'A foreign principal usually lands through a local importer or a manufacturer-distributor such as SKG, then watches the same pack appear on Idumota, Onitsha and Kano stalls that no appointment letter controls. Emzor’s channel does the same for a domestic industrial: factory vans and appointed wholesalers share the street with traders who buy cash and resell by the blister. Alpha Pharmacy and a handful of Lagos–Abuja banners buy like retailers and sometimes like wholesalers. Medplus Nigeria adds organised chemist density in the south; it is not a national van. Worldwide Healthcare and similar specialty houses hold cold chain and imported lines that the open market will abuse. Public buying is split: Federal Medical Stores for selected programme and federal-hospital lines, state medical stores for state hospitals and primary care, plus teaching-hospital procurement that behaves like a third public buyer. PCN premises rules and NAFDAC inspection are the compliance gates; parallel imports and unregistered packs are the fieldwork fact those gates do not erase. Write the market (Idumota versus a named house), the city cluster and whether the buyer is FMS, SMS or a teaching hospital. “Nigeria distributor” as one appointment is how a Kano gap gets sold as national coverage.',
  companies: [
    {
      name: 'SKG Pharma distribution',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Manufacturer-adjacent national distribution for own and third-party lines',
      notes: 'A factory house that also carries other principals. The van and the Idumota trader can hold the same SKU; map both before you call coverage national.',
    },
    {
      name: 'Emzor channel',
      hq: 'Lagos',
      type: 'Local',
      focus: 'Domestic industrial distribution into pharmacies and open markets',
      notes: 'Emzor packs move through appointed wholesalers and through stalls the factory does not invoice. A channel study that only meets the depot will under-count leakage.',
    },
    {
      name: 'Alpha Pharmacy',
      hq: 'Lagos',
      type: 'Retailer',
      focus: 'Lagos retail-and-wholesale pharmacy name with institutional adjacency',
      notes: 'The house international teams already have in their CRM. Treat the retail bay and the wholesale invoice as two desks inside one brand.',
    },
    {
      name: 'Medplus Nigeria',
      hq: 'Lagos',
      type: 'Retailer',
      focus: 'Organised chemist banner with warehouse purchasing',
      notes: 'Not the Indian MedPlus. Southern banner density and a DC habit; a poor proxy for Kano or Onitsha stall volume.',
    },
    {
      name: 'Worldwide Healthcare',
      hq: 'Lagos',
      type: 'Distributor',
      focus: 'Specialty, imported and temperature-controlled lines',
      notes: 'The house used when the SKU cannot survive open-market handling. Hospital and specialty briefs should name it; mass OTC briefs usually should not.',
    },
    {
      name: 'National Agency for Food and Drug Administration and Control (NAFDAC)',
      hq: 'Abuja',
      type: 'Government',
      focus: 'Product and premises licensing, inspection and enforcement',
      notes: 'The register. A pack without a current NAFDAC number is not a legal wholesale line, which does not stop it appearing on a stall.',
    },
    {
      name: 'Pharmacists Council of Nigeria (PCN)',
      hq: 'Abuja',
      type: 'Government',
      focus: 'Pharmacist and premises-type licensing',
      notes: 'The second licence. Patent medicine shops and pharmacies are different premises classes; mixing them in a sample frame is a design error.',
    },
    {
      name: 'Federal Medical Stores (FMS)',
      hq: 'Lagos / Abuja adjacency',
      type: 'Government',
      focus: 'Federal depot feed for selected hospitals and programmes',
      notes: 'The federal public warehouse. State medical stores do not automatically receive what FMS holds; do not merge the two calendars.',
    },
    {
      name: 'State medical stores (SMS)',
      hq: 'State capitals',
      type: 'Government',
      focus: 'State-hospital and primary-care depot purchasing',
      notes: 'Lagos SMS is not Kano SMS. Payment culture and substitution rules have to be walked per state after the award story is told.',
    },
    {
      name: 'Idumota pharmaceutical market',
      hq: 'Lagos Island',
      type: 'Distributor',
      focus: 'Open-market wholesale into patent shops and small pharmacies',
      notes: 'The physical market that still sets cash prices. A named-house appointment does not control what a stall sells by the blister.',
    },
    {
      name: 'Onitsha Bridge Head / drug market',
      hq: 'Onitsha',
      type: 'Distributor',
      focus: 'Southeast wholesale spine into eastern states',
      notes: 'The eastern counterpart to Idumota. A Lagos-only house map will invent coverage across the Niger.',
    },
    {
      name: 'Kano pharmaceutical wholesale markets',
      hq: 'Kano',
      type: 'Distributor',
      focus: 'Northern cash wholesale into patent shops and pharmacies',
      notes: 'The northern restock. Harmattan, FX and pilgrimage seasons change what is on the stall; a Q2 Lagos audit will not see that.',
    },
    {
      name: 'Teaching-hospital procurement units',
      hq: 'Lagos, Ibadan, Enugu, Zaria, others',
      type: 'Government',
      focus: 'Tertiary-hospital buying beside FMS and SMS',
      notes: 'A third public buyer. LUTH is not UCH; each pharmacy department tenders and substitutes on its own clock.',
    },
    {
      name: 'Gokaldas / regional importer-distributors',
      hq: 'Lagos',
      type: 'Distributor',
      focus: 'Imported-line houses still named on selected hospital and retail files',
      notes: 'The residual importer book when SKG or Worldwide is not the appointed door. Verify the current NAFDAC premises before you brief it.',
    },
  ],
  categoryBlurbs: {
    local:
      'SKG, Emzor’s channel, Alpha, Medplus Nigeria, Worldwide and the importer remnants: named Nigerian houses that invoice pharmacies when the open market is not the whole story.',
    mnc:
      'Foreign principals almost always work through a local importer or manufacturer-distributor. International 3PLs exist; they do not replace Idumota.',
    regional:
      'West African traders who treat Lagos beside Accra or Abidjan, typically on selected imported lines rather than NAFDAC-registered mass generics.',
    trade:
      'NAFDAC, PCN, Federal and state medical stores, teaching-hospital procurement, and the Idumota–Onitsha–Kano open-market spine.',
  },
  growthDrivers: [
    {
      title: 'Open-market cash versus named-house credit',
      desc: 'Naira and FX shocks push traders to cash lots and short dating. A house that cannot hold stock this month loses the stall even if the appointment letter is still valid.',
    },
    {
      title: 'NAFDAC enforcement waves',
      desc: 'Premises seals and product alerts rewrite who can legally invoice. Fieldwork has to date-stamp the licence, not trust last year’s map.',
    },
    {
      title: 'State medical stores as a second public spine',
      desc: 'FMS does not feed every state hospital. SMS calendars and teaching-hospital tenders are where public volume actually lands after the press release.',
    },
    {
      title: 'Organised chemist banners in the south',
      desc: 'Medplus Nigeria and Alpha-type banners create a DC conversation in Lagos and Abuja. They remain a thin crust over stall volume in the north and east.',
    },
  ],
  faq: [
    {
      q: 'Can a foreign company appoint one exclusive Nigerian distributor?',
      a: 'It can sign one house. The same pack will still appear on Idumota, Onitsha and Kano stalls that the house does not invoice. Exclusive paper is not exclusive coverage.',
    },
    {
      q: 'What is the difference between NAFDAC and PCN on this map?',
      a: 'NAFDAC licenses the product and many premises. PCN licenses the pharmacist and the premises type. A patent medicine shop and a pharmacy are not interchangeable sample cells.',
    },
    {
      q: 'Who buys for Nigerian public facilities?',
      a: 'Federal Medical Stores on selected federal and programme lines; state medical stores for state hospitals and primary care; teaching hospitals on their own tenders. Three desks, not one.',
    },
    {
      q: 'Is Medplus Nigeria the same as MedPlus in India?',
      a: 'No. It is a Nigerian chemist banner with warehouse habits. Do not import the Indian retail–wholesale story onto Lagos.',
    },
    {
      q: 'What does BioNixus field on Nigerian pharmaceutical distribution?',
      a: 'Named-house versus Idumota/Onitsha/Kano stall checks on a defined basket; FMS and two SMS depot walks; Alpha and Medplus DC interviews; and PCN premises-class splits in the sample.',
    },
    {
      q: 'Does table order mean market share?',
      a: 'No. Entries are grouped as manufacturer-adjacent houses, banners, specialty, regulators, public stores and open markets so the next visit is obvious.',
    },
  ],
  regulatorSource: {
    name: 'National Agency for Food and Drug Administration and Control (NAFDAC) — licensed manufacturers, importers and premises',
    url: 'https://www.nafdac.gov.ng',
    asOf: '2026-09-05',
  },
  sources: [
    'NAFDAC product and premises notices; PCN premises-class guidance, 2024–2026',
    'Federal and selected state medical-store tender circulars, 2024–2026',
    'Company and trade-press disclosures for SKG, Emzor, Alpha, Medplus Nigeria and Worldwide Healthcare, 2024–2025',
    'BioNixus Nigeria pharmacy, open-market and medical-store fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Paired stall-and-pharmacy availability checks in Idumota, Onitsha and Kano against invoices from SKG, Emzor-channel houses and Alpha on the same SKU.',
    'FMS and two state medical-store walks: award list versus shelf, substitution and payment delay as told by the store pharmacist.',
    'Medplus Nigeria and Alpha warehouse interviews on inbound terms versus open-market cash prices on the same molecule.',
    'PCN premises-class mapping so patent shops and pharmacies are not collapsed into one “retail” cell.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
