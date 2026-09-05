import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesTunisia: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'tunisia',
  metaDescription:
    'Tunisian pharmaceutical companies: SIPHAT, Unimed, Adwya, Teriak, Opalia, PCT and CNAM — import monopoly, reimbursement, generic exports.',
  introLead:
    'Tunisia is the rare Maghreb market where a state wholesaler still holds a legal monopoly on importing finished medicines, so a foreign brand’s first counterpart is the Pharmacie Centrale de Tunisie rather than a private agent.',
  introRest:
    'About forty human-medicine plants, according to the national industry chamber in early 2026, already cover most volume and a smaller share of value; SIPHAT, Unimed, Adwya, Teriak, SAIPH and Médis sell generics at home and ship sterile and solid forms into African and some European channels. CNAM reimbursement, not detailing alone, decides whether an originator will ever leave the private cash niche. ANMPS, the agency that absorbed the old Direction de la Pharmacie et du Médicament, now takes eCTD files. Registration, PCT listing, a CNAM code and only then pharmacy demand is the sequence a launch team has to respect.',
  stats: [
    { value: '40', label: 'Human-medicine plants cited by the Chambre Nationale de l’Industrie Pharmaceutique, February 2026' },
    { value: '~80% / ~60%', label: 'Local share of needs by volume versus by value, same CNIP statement' },
    { value: 'TND 250–300m', label: 'Annual pharmaceutical export earnings cited in 2026 investment-promotion briefings' },
    { value: 'PCT', label: 'Legal monopoly holder for finished-medicine imports' },
  ],
  channelHeading: 'PCT as the gate for every imported pack',
  channelBody:
    'Finished imports cannot legally bypass the Pharmacie Centrale de Tunisie. PCT buys in hard currency, sells on in dinars, supplies public hospitals from its own warehouses, and also feeds the private wholesale layer that reaches community pharmacies; local factories, by contrast, may sell their own manufacture into the private channel without sitting inside that import monopoly. Price is set with the health and trade ministries before a marketing authorisation is usable, and a CNAM listing is a separate later fight — without it, an originator stays a cash product for the minority of patients who will pay. ANMPS inherited the DPM’s registration, inspection and clinical-trial files and spent 2025 putting eCTD and a digital portal in front of applicants, so timelines now depend on both the old committee culture and the new software. Export is the safety valve: Unimed’s sterile lines, Teriak’s Kilani-group plants, SAIPH’s West African bets and Adwya’s Côte d’Ivoire promotion office exist because the domestic price-and-arrears system cannot absorb all the capacity those factories built. Sfax and Tunis remain the two detailing poles; hospital demand is a PCT tender conversation, not a ward-by-ward sale.',
  companies: [
    {
      name: 'SIPHAT',
      hq: 'Tunis',
      type: 'Local',
      focus: 'State-owned essential generics and older hospital lines',
      notes: 'The historic public factory; still the political reference for “Tunisian medicine” even though private plants now outrun it on sterile exports and branded-generic share.',
    },
    {
      name: 'Unimed',
      hq: 'Sousse',
      type: 'Local',
      focus: 'Sterile injectables, eye drops and hospital generics',
      notes: 'The sterile specialist that export managers name first, with registrations already used across North Africa, the Gulf and parts of francophone West Africa.',
    },
    {
      name: 'Adwya',
      hq: 'Tunis',
      type: 'Local',
      focus: 'Branded generics listed on the Tunis exchange',
      notes: 'BVMT-listed laboratory with a visible primary-care field force at home and a promotion branch in Côte d’Ivoire, so it shows up in both CNAM and export conversations.',
    },
    {
      name: 'Teriak',
      hq: 'Tunis',
      type: 'Local',
      focus: 'Solids and liquids from the Kilani group, plus a Cameroon site',
      notes: 'Kilani-owned manufacturer with two Tunisian sites and a Douala plant, built to serve Maghreb, Sahel and Middle Eastern buyers when PCT arrears squeeze the home P&L.',
    },
    {
      name: 'Opalia Recordati',
      hq: 'Tunis',
      type: 'MNC',
      focus: 'Recordati’s Tunisian plant and Maghreb brands',
      notes: 'Italian-owned industrial affiliate that behaves like a local factory in PCT and CNAM files while reporting into a European specialty group.',
    },
    {
      name: 'SAIPH',
      hq: 'Tunis',
      type: 'Local',
      focus: 'Generics plus a West African manufacturing and distribution bet',
      notes: 'Société Arabe des Industries Pharmaceutiques, one of the houses that put a plant in Côte d’Ivoire so Tunisian generics could sit closer to UEMOA demand.',
    },
    {
      name: 'Laboratoires Médis',
      hq: 'Nabeul',
      type: 'Local',
      focus: 'Branded generics for the Tunisian pharmacy channel',
      notes: 'Private laboratory that industry surveys still place among the domestic names with meaningful CNAM and retail presence after Adwya, Unimed and Teriak.',
    },
    {
      name: 'Galpharma',
      hq: 'Sfax',
      type: 'Local',
      focus: 'Generics manufactured for southern and coastal pharmacy demand',
      notes: 'Sfax-based manufacturer that gives the south its own industrial name in audits, rather than treating every local pack as a Tunis-capital story.',
    },
    {
      name: 'Taha Pharma',
      hq: 'Tunis',
      type: 'Local',
      focus: 'Domestic generics and selected export registrations',
      notes: 'Younger Tunisian laboratory that appears in sector inventories beside Médis and SIPHAT when a study needs the full local bench, not only the listed or sterile leaders.',
    },
    {
      name: 'Sanofi Tunisia',
      hq: 'Tunis',
      type: 'MNC',
      focus: 'Diabetes, consumer health and established brands',
      notes: 'Innovator affiliate whose insulin and consumer lines still matter, but only after PCT has agreed a dinar price and, for reimbursed SKUs, CNAM has issued a code.',
    },
    {
      name: 'Hikma Tunisia',
      hq: 'Tunis',
      type: 'Regional',
      focus: 'Branded generics and injectables',
      notes: 'Levant group that treats Tunis as both a sales office and a Maghreb supply conversation, competing with Unimed and SAIPH on hospital generics.',
    },
    {
      name: 'Pfizer Tunisia',
      hq: 'Tunis',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives and hospital brands',
      notes: 'Affiliate that historically led many value tables; today its fate on any SKU is a PCT-and-CNAM problem before it is a representative problem.',
    },
    {
      name: 'Novartis Tunisia',
      hq: 'Tunis',
      type: 'MNC',
      focus: 'Cardiology, ophthalmology, oncology and immunology',
      notes: 'Specialty office that lives on CNAM exceptional listings and hospital PCT awards rather than on broad primary-care share.',
    },
    {
      name: 'Roche Tunisia',
      hq: 'Tunis',
      type: 'MNC',
      focus: 'Oncology, haematology and diagnostics',
      notes: 'High-value affiliate whose access work is a negotiation with PCT on price and with CNAM on reimbursement, not a classic retail launch.',
    },
    {
      name: 'Pierre Fabre Tunisie',
      hq: 'Tunis',
      type: 'MNC',
      focus: 'Dermatology, consumer health and selected prescription lines',
      notes: 'French house with a long Tunisian footprint; useful as a consumer-health and dermo comparator when a study is not only about hospital generics.',
    },
    {
      name: 'Pharmacie Centrale de Tunisie (PCT)',
      hq: 'Tunis',
      type: 'Government',
      focus: 'Import monopoly, public-hospital supply and published private-channel prices',
      notes: 'No imported finished medicine legally enters without this house. Arrears to foreign suppliers and receivables from CNAM are the two numbers every affiliate manager can recite.',
    },
    {
      name: 'CNAM (Caisse Nationale d’Assurance Maladie)',
      hq: 'Tunis',
      type: 'Government',
      focus: 'National health-insurance reimbursement of medicines',
      notes: 'A marketing authorisation without a CNAM code is a cash product. Listing rules are opaque to applicants, which is why access work in Tunis spends as much time here as at ANMPS.',
    },
    {
      name: 'ANMPS (Agence Nationale du Médicament et des Produits de Santé)',
      hq: 'Tunis',
      type: 'Government',
      focus: 'Registration, inspection, clinical-trial authorisation and eCTD intake',
      notes: 'Created by the 2023 law that took these tasks off the old DPM; the 2025 digital portal and eCTD mandate are now the practical front door for a new file.',
    },
  ],
  categoryBlurbs: {
    local:
      'Tunisian factories — public SIPHAT and a private bench led by Unimed, Adwya and Teriak — that already hold most volume at home and treat African and European export as the way out of PCT price-and-arrears gravity.',
    mnc:
      'European affiliates that accept a PCT monopoly and a CNAM listing fight as the price of staying, with Opalia Recordati the one that also manufactures on Tunisian soil.',
    regional:
      'Hikma and other Levant or Maghreb groups that use Tunis as a commercial node and sometimes as a supply source for neighbouring tenders.',
    trade:
      'PCT as importer and hospital supplier, CNAM as the reimbursement gate, and ANMPS as the successor regulator that now wants dossiers in eCTD.',
  },
  growthDrivers: [
    {
      title: 'PCT arrears and the dinar-price straitjacket',
      desc: 'Because PCT buys in euros or dollars and sells in dinars, every devaluation lands on its balance sheet; affiliates then face delayed payment and pressure to cut prices, which is why several have thinned their Tunisian lists.',
    },
    {
      title: 'CNAM listing as the real launch',
      desc: 'A registration that never receives a reimbursement code stays a cash niche. Originators therefore budget as much time for CNAM as for ANMPS, and generic houses live on the codes they already hold.',
    },
    {
      title: 'Sterile and generic export into Africa and Europe',
      desc: 'Unimed, Teriak, SAIPH and Adwya built extra capacity for buyers outside Tunisia; chamber and FIPA briefings in 2026 still put annual export earnings in the mid-hundreds of millions of dinars.',
    },
    {
      title: 'ANMPS digital files',
      desc: 'eCTD and the 2025 portal will not make Tunisia a fast agency overnight, but they change how foreign regulatory groups prepare a Maghreb submission and who inside ANMPS owns the clock.',
    },
  ],
  faq: [
    {
      q: 'Can a foreign company appoint a private importer in Tunisia?',
      a: 'Not for finished medicines. PCT holds the legal monopoly on import. A private wholesaler may distribute after PCT has landed the goods, and a local factory may sell what it manufactures itself, but the import door is public.',
    },
    {
      q: 'How much of Tunisia’s medicine use is made at home?',
      a: 'The industry chamber’s February 2026 figures were about four fifths of volume and about three fifths of value, from forty human-medicine plants. Value lags volume because originators and complex imports still dominate the expensive SKUs.',
    },
    {
      q: 'Why do Tunisian manufacturers talk so much about export?',
      a: 'Domestic prices are administered, PCT and CNAM pay late, and the factories have more capacity than the home market will reward. West Africa, the Maghreb and selected European buyers are how Unimed, SAIPH and Teriak keep lines busy.',
    },
    {
      q: 'What happened to the Direction de la Pharmacie et du Médicament?',
      a: 'Law 2023-2 created ANMPS under the Ministry of Health and moved registration, inspection and trial authorisation onto the new agency. Older DPM pages and habits still appear in correspondence, but the legal counterpart for a 2026 file is ANMPS.',
    },
    {
      q: 'What does a BioNixus Tunisia pharmaceutical study actually field?',
      a: 'PCT circular and tender reconstruction; CNAM listing interviews in Tunis; pharmacy purchase checks in Tunis and Sfax that separate local generics from PCT-imported originators; and export-registration mapping for sterile houses.',
    },
    {
      q: 'Does the order of Tunisian names in this table mean anything about size?',
      a: 'Names sit here because they sit on PCT circulars, BVMT filings or ANMPS correspondence, not because a turnover table put them in this sequence. The page is an account guide.',
    },
  ],
  regulatorSource: {
    name: 'Ministère de la Santé / ANMPS (successor to the Direction de la Pharmacie et du Médicament) — medicine regulation',
    url: 'https://santetunisie.rns.tn',
    asOf: '2026-09-04',
  },
  sources: [
    'Chambre Nationale de l’Industrie Pharmaceutique remarks on plant count and local volume/value coverage, La Presse de Tunisie, February 2026',
    'FIPA-Tunisia / investment-promotion briefings on export earnings, February 2026; TIA pharmaceutical value-chain notes on Adwya, Unimed, Teriak and SAIPH',
    'Law 2023-2 creating ANMPS; La Presse reporting on the January 2025 digital and eCTD launch',
    'Pharmacie Centrale de Tunisie institutional site (phct.com.tn) on import monopoly and hospital supply',
    'BioNixus Tunisia PCT, CNAM and pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Tunis Bab Saadoun and Sfax pharmacy purchase logs that split each molecule into PCT-imported originator, local generic and unpaid-or-missing SKU, then match the split to CNAM codes.',
    'Structured interviews with PCT buyers and hospital pharmacists on arrears, substitution when an originator is delayed, and which Tunisian sterile houses win hospital volume.',
    'CNAM listing post-mortems with affiliate access managers: dossier clocks, unpublished refusal reasons, and the cash-only life of a brand that never received a code.',
    'Export-file reviews with Unimed and Teriak regulatory staff covering African and European registrations, used when a client wants Tunisia as a supply base rather than only as a sales market.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
