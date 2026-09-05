import type { DirectoryPageInput } from '../../types';

export const biotechCompaniesEgypt: DirectoryPageInput = {
  entity: 'biotech-companies',
  countrySlug: 'egypt',
  metaDescription:
    'Biotech companies in Egypt: Eva Pharma, Pharco, VACSERA, Minapharm, EIPICO, 10th of Ramadan plants and the EDA — biologics and vaccines.',
  introLead:
    'Egypt’s biotechnology story is industrial rather than venture: family and listed formulation houses in 10th of Ramadan, 6th of October and Alexandria added fermentation, fill-finish and a few recombinant lines, while VACSERA still owns the state’s vaccine mandate.',
  introRest:
    'Minapharm is the clearest specialist, a Cairo company that has sold recombinant proteins for decades and keeps a European development link. Eva Pharma has poured capital into insulin, vaccines and sterile biologics as it grew from a domestic branded-generic house into an African exporter. Pharco, rooted in Alexandria, is remembered for hepatitis C antivirals and still sits in any conversation about Egyptian-made specialty products. EIPICO, SEDICO, Amoun and Medical Union Pharmaceuticals run large 10th of Ramadan and 6th of October campuses where a biosimilar or vaccine line is one suite among many oral-solid halls. The Egyptian Drug Authority inherited product files from the old NODCAR and CAPA era and now registers biologics, inspects plants and authorises trials. University hospitals and the National Research Centre supply investigators; the Unified Procurement Authority and the expanding Universal Health Insurance system decide whether a locally filled vial actually moves. The table groups manufacturers, the national vaccine company, academic engines and the regulator so a partnering team can see who can ferment, who can fill, who can test and who can buy.',
  stats: [
    { value: '2019', label: 'Year the Egyptian Drug Authority took over medicines regulation from the older split agencies' },
    { value: '6+', label: 'Governorates already live on Universal Health Insurance, which is starting to buy as a single public payer' },
    { value: '2', label: 'Main industrial cities for biologics-capable plants: 10th of Ramadan and 6th of October, plus Alexandria' },
    { value: '~60%', label: 'Approximate household share of national health spend, so cash retail remains a parallel channel for biologics' },
  ],
  channelHeading: 'How biologics and vaccines move from Egyptian plants to patients',
  channelBody:
    'A biologic sold in Egypt needs an EDA registration, a locally responsible manufacturer or importer, and a price that survives both the Authority’s committee and a devaluing pound. Domestic houses prefer to licence a known molecule and finish it in 10th of Ramadan or Giza rather than discover a new antibody. VACSERA remains the political answer to outbreak supply and routine immunisation, contracting with the Ministry of Health and Population for EPI antigens even when private plants offer filling. Eva and Pharco export into Africa and the Levant, which is why their sterile suites are built to more than one inspector’s taste. Public demand now has three doors: the Unified Procurement Authority’s national tenders, university and armed-forces hospital pharmacies that still buy on their own books, and the Egypt Healthcare Authority in UHIA governorates. Private demand runs through AXA, Allianz, MetLife and GIG networks and through cash patients at Cleopatra, Alameda and the specialist charities — 57357, Magdi Yacoub, Baheya — that set oncology and cardiac practice. Cold chain from 10th of Ramadan into Upper Egypt is a logistics problem, not a science problem, and it decides whether a locally filled insulin actually displaces an import at a district hospital. Partnering conversations that start with “Egyptian biotech start-ups” usually stall; conversations that start with a named plant, an EDA file and a UPA lot number tend to finish.',
  companies: [
    {
      name: 'Eva Pharma',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Insulin, vaccines, sterile biologics and a broad branded-generic export book',
      notes: 'The most visible private Egyptian house investing in biologics capacity; used by African ministries as a regional supplier and by multinationals as a filling or licence counterpart.',
    },
    {
      name: 'Pharco Corporation',
      hq: 'Alexandria',
      type: 'Local',
      focus: 'Hepatitis C antivirals, specialty pharmaceuticals and selected biologic lines',
      notes: 'Alexandria group that proved Egyptian plants can own a global specialty story; still the reference account for liver-disease and selected biosimilar talks.',
    },
    {
      name: 'VACSERA (Holding Company for Biological Products & Vaccines)',
      hq: 'Giza',
      type: 'Government',
      focus: 'National vaccine production, sera and government immunisation supply',
      notes: 'State biologics company that still sits on the Ministry’s outbreak and EPI file; the counterpart for antigen security even when private plants have newer filling lines.',
    },
    {
      name: 'Minapharm Pharmaceuticals',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Recombinant proteins, interferons and biosimilar development with a European link',
      notes: 'Longest-running Egyptian recombinant specialist; the company partners look at when they want a biologics conversation that is not an add-on to an oral-solid campus.',
    },
    {
      name: 'EIPICO (Egyptian International Pharmaceutical Industries)',
      hq: '10th of Ramadan',
      type: 'Local',
      focus: 'Large formulation campus with sterile and selected biologic suites',
      notes: '10th of Ramadan flagship whose scale makes it a default bidder on public sterile and vaccine-adjacent tenders.',
    },
    {
      name: 'SEDICO (South Egypt Drug Industries Company)',
      hq: '6th of October',
      type: 'Local',
      focus: 'Hormones, insulin-related products and sterile injectables',
      notes: '6th of October manufacturer that has long sat in diabetes and hormone files; relevant when a sponsor wants a Giza-side plant rather than a Sharqia-side one.',
    },
    {
      name: 'Amoun Pharmaceutical Company',
      hq: 'Cairo',
      type: 'Local',
      focus: 'Branded generics with sterile capacity used for selected biologics',
      notes: 'Large domestic house whose plants appear in EDA establishment lists and in UPA sterile lots more often than in conference “biotech” slides.',
    },
    {
      name: 'Medical Union Pharmaceuticals (MUP)',
      hq: 'Ismailia',
      type: 'Local',
      focus: 'EGX-listed manufacturer with injectables and specialty lines',
      notes: 'Canal-zone listed company that gives a public-market window on how Egyptian plants fund sterile upgrades.',
    },
    {
      name: 'Hikma Egypt',
      hq: '6th of October',
      type: 'Regional',
      focus: 'Injectables and licensed specialty products for the Egyptian and African book',
      notes: 'Levant group whose 6th of October site competes with local houses for hospital injectables and for biosimilar commercialisation rights.',
    },
    {
      name: 'Roche Egypt and Novartis Egypt (biologics affiliates)',
      hq: 'Cairo',
      type: 'MNC',
      focus: 'Originator biologics, oncology and immunology commercialisation',
      notes: 'The two affiliates hospital pharmacists name first when the question is originator monoclonal antibodies rather than a local fill; they set the switching baseline.',
    },
    {
      name: 'National Research Centre (NRC)',
      hq: 'Dokki',
      type: 'Government',
      focus: 'National laboratories, vaccine and biologics research, investigator training',
      notes: 'Dokki campus that still feeds methods, graduates and occasional product concepts into VACSERA and private plants.',
    },
    {
      name: 'Children’s Cancer Hospital 57357 — research and pharmacy',
      hq: 'Cairo',
      type: 'Operator',
      focus: 'Paediatric oncology protocols, hospital pharmacy and trial hosting',
      notes: 'Charity tertiary hospital whose formulary and research office decide real-world use of oncology biologics independently of UPA lots.',
    },
    {
      name: 'Cairo University — Kasr Al-Ainy research units',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Academic hospital research, ethics and investigator-initiated biologics work',
      notes: 'The busiest public academic complex for industry and investigator studies that need an Egyptian tertiary site.',
    },
    {
      name: 'Egyptian Drug Authority (EDA)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Biologics registration, GMP inspection, pricing and clinical-trial authorisation',
      notes: 'Single regulator since 2019; every plant and import file in this table eventually lands on an EDA desk.',
    },
    {
      name: 'Unified Procurement Authority',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Central public buying of vaccines, insulin and hospital biologics',
      notes: 'The tender that decides whether a locally filled vial displaces an import across Ministry hospitals.',
    },
    {
      name: 'Egypt Healthcare Authority (UHIA governorates)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Public provider and emerging buyer under Universal Health Insurance',
      notes: 'Takes over facilities in live UHIA governorates and will matter more for biologics volume as the roll-out reaches Greater Cairo.',
    },
  ],
  categoryBlurbs: {
    local:
      'Egyptian manufacturers that added fermentation, sterile or recombinant suites onto formulation campuses — Eva, Pharco, Minapharm, EIPICO, SEDICO, Amoun and MUP.',
    mnc:
      'Originator affiliates that still define the switching conversation for monoclonal antibodies and high-cost specialty biologics in Cairo and Alexandria hospitals.',
    regional:
      'Hikma and other Levant groups that manufacture injectables in 6th of October or carry licensed biosimilars through EDA on behalf of foreign developers.',
    trade:
      'VACSERA, the National Research Centre, Kasr Al-Ainy and 57357, plus EDA, UPA and the Egypt Healthcare Authority that licence, test and buy.',
  },
  growthDrivers: [
    {
      title: 'Public tenders that reward a local vial',
      desc: 'UPA lots and Ministry immunisation contracts still move more insulin and vaccine volume than any private formulary, so a finished Egyptian pack has a structural buyer if it clears EDA and price.',
    },
    {
      title: 'African and Levant export demand',
      desc: 'Eva and peers treat Cairo plants as a regional factory; that export book finances sterile upgrades that a purely domestic cash market would not pay for.',
    },
    {
      title: 'UHIA as a future single public payer',
      desc: 'Governorates already live on the new scheme, and once Greater Cairo joins, one authority will set biologics benefit design for tens of millions of lives.',
    },
    {
      title: 'Currency pressure on imported originators',
      desc: 'Repeated pound devaluations make a locally filled insulin or biosimilar the practical hospital choice even before a formal preference rule is written.',
    },
  ],
  faq: [
    {
      q: 'Which Egyptian company is actually a biotechnology specialist?',
      a: 'Minapharm is the one built around recombinant proteins. Eva, Pharco, EIPICO and SEDICO are pharmaceutical manufacturers that added biologics or vaccine suites. VACSERA is the state vaccine house. Do not flatten them into one “biotech sector.”',
    },
    {
      q: 'Where are the plants?',
      a: '10th of Ramadan City and 6th of October City hold most private sterile and formulation halls. VACSERA sits in Giza. Pharco is an Alexandria story. Academic work clusters in Dokki, Kasr Al-Ainy and Abbasiya.',
    },
    {
      q: 'How does the EDA treat biosimilars?',
      a: 'As biological products under the Authority’s registration, inspection and pricing rules, with a local responsible person. There is no separate PIF-style localisation vehicle; the file is an ordinary EDA biologic file plus GMP evidence.',
    },
    {
      q: 'Who buys public-sector vaccines and insulin?',
      a: 'The Unified Procurement Authority for much of the Ministry network, VACSERA for many immunisation antigens, and university, military and UHIA facilities on their own or contracted books.',
    },
    {
      q: 'What research does BioNixus run on Egyptian biotechnology organisations?',
      a: 'Plant and pharmacist interviews in 10th of Ramadan, 6th of October, Giza and Alexandria; UPA lot reconstruction for insulin and vaccines; and switching studies with Kasr Al-Ainy and 57357 pharmacists on locally filled versus imported biologics.',
    },
    {
      q: 'Are the companies below ranked by revenue or pipeline size?',
      a: 'They are not. The roster exists because these names recur in BioNixus Egypt plant visits and in EDA and EGX records. Grouping is by role — specialist, campus manufacturer, state vaccine house, academic site, buyer — not by turnover.',
    },
  ],
  regulatorSource: {
    name: 'Egyptian Drug Authority (EDA) — registered biological products and licensed manufacturing establishments',
    url: 'https://www.edaegypt.gov.eg',
    asOf: '2026-09-04',
  },
  sources: [
    'Egyptian Drug Authority establishment and product-registration materials',
    'Company and exchange disclosures by Eva Pharma, Minapharm, MUP and Pharco; VACSERA public mandate descriptions',
    'Unified Procurement Authority tender notices and UHIA roll-out communications',
    'BioNixus Egypt biologics, vaccine and hospital-pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Pharmacist switching interviews at Kasr Al-Ainy, NCI and 57357 on locally filled insulin, interferons and oncology biologics.',
    'Plant-capability discussions in 10th of Ramadan, 6th of October, Giza and Alexandria that separate commissioned sterile suites from announced ones.',
    'Reconstruction of UPA insulin and vaccine lots across the last completed cycles, including bidder mix and award language.',
    'Payer interviews in Cairo and Port Said on how UHIA governorates treat biologics versus the older Health Insurance Organisation books.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
