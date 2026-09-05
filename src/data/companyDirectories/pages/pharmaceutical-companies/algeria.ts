import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesAlgeria: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'algeria',
  metaDescription:
    'Pharmaceutical companies in Algeria: Saidal, Biopharm, Merinal, Hikma, Sanofi, PCH and ANPP — local-production rules, hospital buying, price controls.',
  introLead:
    'Algeria built one of Africa’s largest formulation industries by telling importers they would lose the right to land a finished pack once a local plant could make the same molecule, then routing hospital volume through a single buyer.',
  introRest:
    'The Ministry of Pharmaceutical Industry now tells the press that domestic factories cover around four fifths of national needs and that more than two hundred establishments hold licences, with Saidal, Biopharm, Merinal, Frater-Razes, LDM and Hikma’s El Kendi site among the plants that feed both community pharmacies and the Pharmacie Centrale des Hôpitaux. ANPP in Staouéli registers every product and inspects sites; the dinar price list and a preference for locally made SKUs decide whether a foreign dossier is worth filing. Sanofi, Pfizer, Novartis and Roche still operate Algerian affiliates, often with toll or joint-venture production rather than pure import. Anyone planning a launch has to treat PCH award cycles and ANPP timelines as the commercial calendar, not as background regulation.',
  stats: [
    { value: '~80%', label: 'Share of national medicine needs the ministry says is met by local plants, 2024–2025 statements' },
    { value: '200+', label: 'Licensed pharmaceutical establishments cited by the Ministry of Pharmaceutical Industry' },
    { value: '$515m', label: 'Medicine import bill in 2024, down from about $1.25bn in 2022, per the same ministry' },
    { value: 'PCH', label: 'Single public hospital buyer for most institutional packs' },
  ],
  channelHeading: 'PCH buying, ANPP files and the local-production obligation',
  channelBody:
    'A medicine may be sold only after ANPP issues a registration and, for a plant, a manufacturing authorisation; dossiers now move through the agency’s E-TASJIL portal rather than a paper pile at the old LNCPP. Industrial policy sits on top of that file. When a local site is judged able to supply a molecule, import of the finished equivalent is restricted or refused, which is why so many multinationals signed toll or joint-venture deals instead of defending a pure-import P&L. Public hospitals do not buy molecule by molecule from sales representatives: the Pharmacie Centrale des Hôpitaux aggregates demand, runs the award, holds strategic stock and delivers to CHUs from Algiers to Oran and Constantine. Community pharmacies are a second economy — wholesalers and manufacturer depots feed independents at administered dinar prices — but chronic-care volume still leans on CNAS reimbursement and on whatever PCH has already made familiar inside the hospital. Price control is tight enough that a launch team models the official tariff before it models the field force. The practical sequence for a foreign brand is therefore ANPP advice on whether localisation will be demanded, a plant or toll partner if the answer is yes, a PCH conversation if the product is institutional, and only then a retail detailing plan.',
  companies: [
    {
      name: 'Saidal',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Essential generics, oncology transfers, insulin and hospital lines',
      notes: 'State-owned group and the political face of import substitution; PCH buyers still treat a Saidal award as the default for many essential and newly localised specialty SKUs.',
    },
    {
      name: 'Biopharm',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Branded generics, oncology solids and licensed multinational brands',
      notes: 'Largest private Algerian manufacturer, with a history of AstraZeneca and other licence deals and a recent push into anti-cancer tablets that used to be imported.',
    },
    {
      name: 'LDM Santé',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Generics, diagnostics-adjacent products and pharmacy brands',
      notes: 'Algerian house that sits in both the medicine and diagnostics conversation, useful when a study needs a mid-sized local comparator rather than Saidal or Biopharm.',
    },
    {
      name: 'Merinal',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Primary-care generics and chronic-care solids',
      notes: 'Private laboratory that shows up in community-pharmacy audits across Algiers and the Mitidja as a consistent branded-generic alternative to multinational SKUs.',
    },
    {
      name: 'Frater-Razes',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Generics named for the medieval physician al-Razi; broad primary-care range',
      notes: 'Domestic manufacturer whose packs are widely recognised in the independent trade and that benefits from the same import-substitution shield as its larger peers.',
    },
    {
      name: 'HUPP',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Formulation for the Algerian pharmacy and hospital channels',
      notes: 'Local industrial name that appears on ANPP establishment lists and in PCH bidder files; treat it as part of the mid-tier manufacturing bench, not as a multinational affiliate.',
    },
    {
      name: 'Hikma Algeria (El Kendi)',
      hq: 'Algiers',
      type: 'Regional',
      focus: 'Branded generics and injectables from the former El Kendi plants',
      notes: 'Hikma bought El Kendi and thereby inherited one of the more capable private sites in the country, so Jordanian management now sits inside the local-production system rather than outside it.',
    },
    {
      name: 'Sanofi Algeria',
      hq: 'Algiers',
      type: 'MNC',
      focus: 'Diabetes, consumer health, established brands and local fill-finish',
      notes: 'Longest-standing large innovator industrial presence; public statements in recent years have put a majority of its Algerian volume on local lines rather than on import.',
    },
    {
      name: 'Pfizer Algeria',
      hq: 'Algiers',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives, specialty and hospital brands',
      notes: 'Affiliate that pairs a commercial team with localisation arrangements so that PCH and ANPP do not treat the portfolio as a pure import book.',
    },
    {
      name: 'Novartis Algeria',
      hq: 'Algiers',
      type: 'MNC',
      focus: 'Cardiology, ophthalmology, oncology and immunology',
      notes: 'Specialty-heavy affiliate whose hospital brands still need PCH listing even when the community-pharmacy story is secondary.',
    },
    {
      name: 'Roche Algeria',
      hq: 'Algiers',
      type: 'MNC',
      focus: 'Oncology, haematology and diagnostics',
      notes: 'Innovator office that lives or dies on CHU formulary access and on whatever localisation ANPP and the ministry demand for high-value biologics.',
    },
    {
      name: 'BeKer Laboratoires',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Generics and licensed products for the pharmacy channel',
      notes: 'Private Algerian laboratory that competes in the same substitution space as Merinal and Frater-Razes and is a frequent mid-tier name in retail audits.',
    },
    {
      name: 'Biotic',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Domestic generics and hospital-adjacent lines',
      notes: 'Another locally owned plant group that benefits from import bans on molecules it already makes, so its commercial fate is tied to ANPP’s localisation calls.',
    },
    {
      name: 'SOPHAL',
      hq: 'Algiers',
      type: 'Local',
      focus: 'Algerian formulation for essential and branded generics',
      notes: 'Société Pharmaceutique Algérienne, a domestic manufacturer that appears in industry inventories of active plants feeding the pharmacy channel.',
    },
    {
      name: 'Pharmacie Centrale des Hôpitaux (PCH)',
      hq: 'Algiers',
      type: 'Government',
      focus: 'Central purchasing, warehousing and delivery for public hospitals',
      notes: 'If a product is meant for CHUs, this is the buyer: awards, strategic stock and distribution sit here, which is why hospital share studies start with PCH circulars rather than with ward-level orders.',
    },
    {
      name: 'ANPP (Agence Nationale des Produits Pharmaceutiques)',
      hq: 'Staouéli',
      type: 'Government',
      focus: 'Registration, GMP inspection and quality control of medicines and devices',
      notes: 'The regulator created to take over registration from older structures; E-TASJIL is now the front door, and a negative localisation opinion can kill an import strategy.',
    },
    {
      name: 'Institut Pasteur d’Algérie',
      hq: 'Algiers',
      type: 'Government',
      focus: 'Vaccines, sera and public-health biologics',
      notes: 'Public biologics institute that still matters for immunisation supply and for any conversation about local vaccine or serum capacity.',
    },
    {
      name: 'CNAS (Caisse Nationale des Assurances Sociales)',
      hq: 'Algiers',
      type: 'Government',
      focus: 'Social-security reimbursement of outpatient medicines',
      notes: 'The outpatient payer that decides whether a community-pharmacy SKU is a reimbursed chronic-care product or a cash item, complementary to PCH’s hospital role.',
    },
  ],
  categoryBlurbs: {
    local:
      'Algerian-owned plants, Saidal among them and a long private bench beside it, that exist because import of a finished equivalent is restricted once ANPP accepts that the molecule can be made at home.',
    mnc:
      'Innovator affiliates that stayed by putting fill-finish or licence deals on Algerian soil, because a pure-import model now fails both industrial policy and PCH preference.',
    regional:
      'Hikma’s El Kendi inheritance is the clearest Levant-into-Algeria industrial story; other Maghreb or Mashreq groups usually enter as licence partners rather than as greenfield owners.',
    trade:
      'PCH as the hospital purse, CNAS as the outpatient purse, and ANPP as the gate that decides whether a file is a local product or a doomed import.',
  },
  growthDrivers: [
    {
      title: 'Import bans once a local equivalent exists',
      desc: 'The industrial rule that closes the border to a finished pack after a domestic site is approved is still the main reason multinationals sign toll contracts and the main reason private Algerian plants can fill capacity.',
    },
    {
      title: 'PCH as a single hospital purse',
      desc: 'Winning or losing a PCH lot moves more institutional volume than any detailing cycle, so oncology, insulin and injectable launches are planned around award calendars and delivery performance, not around representative headcount.',
    },
    {
      title: 'Official localisation of insulin and oncology',
      desc: 'Ministry statements in 2024–2025 highlighted new insulin units and a first wave of locally made anti-cancer products, including Saidal transfers, which is shifting high-value hospital demand away from import-only originators.',
    },
    {
      title: 'Administered dinar prices',
      desc: 'A launch that looks attractive in euros can be unviable once the official tariff is set, so pricing work has to happen before ANPP filing, not after the field force is hired.',
    },
  ],
  faq: [
    {
      q: 'Which manufacturers matter most inside Algeria?',
      a: 'Saidal is the public industrial flagship. Biopharm is the private heavyweight. Merinal, Frater-Razes, LDM, BeKer, Biotic, SOPHAL and Hikma’s El Kendi site fill out the local bench, while Sanofi is the innovator that went furthest into Algerian production.',
    },
    {
      q: 'Does Algeria still import finished medicines?',
      a: 'Yes, especially where no local plant exists — complex biologics, some oncology and orphan products. The ministry’s own figures show the import bill falling sharply from 2022 to 2024 as localisation widened, which is the policy working as designed.',
    },
    {
      q: 'Who buys medicines for Algerian public hospitals?',
      a: 'Pharmacie Centrale des Hôpitaux. Ward pharmacists do not run their own national tenders; they receive what PCH has awarded and delivered. Private clinics are a smaller, separate negotiation.',
    },
    {
      q: 'What does ANPP actually decide?',
      a: 'Registration, plant licensing and quality release. A scientific opinion that a molecule can be made locally is, in practice, also a commercial opinion: import of the finished equivalent becomes much harder after that call.',
    },
    {
      q: 'How does BioNixus work an Algerian pharmaceutical brief?',
      a: 'PCH award reconstruction by molecule; ANPP and ministry circulars on localisation; interviews with CHU pharmacists in Algiers and Oran; and community-pharmacy purchase checks that show how administered prices and CNAS codes shape substitution.',
    },
    {
      q: 'Is the Algerian company table a league ordered by dinar sales?',
      a: 'Read the table as a cast of industrial and institutional actors, not as a league ordered by dinar sales. Inclusion follows recurrence in ANPP and PCH work, not a published share ranking.',
    },
  ],
  regulatorSource: {
    name: 'ANPP — Agence Nationale des Produits Pharmaceutiques, registration and licensed establishments',
    url: 'https://www.anpp.dz',
    asOf: '2026-09-04',
  },
  sources: [
    'Ministry of Pharmaceutical Industry statements on local coverage, establishment counts and the 2022–2024 import-bill decline, carried by APS / El Watan / EcoTimes',
    'ANPP institutional site and E-TASJIL guidance on registration roles, Staouéli, consulted 2026',
    'PharmaBoardroom and Oxford Business Group background on PCH, Saidal and the 70-percent industrial target',
    'BioNixus Algeria hospital, PCH and pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Mustapha and Beni Messous (Algiers) plus CHU Oran pharmacy-desk interviews on which local versus imported SKUs actually arrive after a PCH award, and how often wards buy around the system.',
    'Reconstruction of PCH lots for insulin, oncology and large-volume parenterals over recent cycles, tagging bidder nationality and whether a localisation circular had already closed the import route.',
    'Community-pharmacy substitution checks in Algiers and Oran that record administered prices, CNAS codes and the first generic a pharmacist offers when an originator is unnamed.',
    'Confidential conversations with quality heads at private plants about spare capacity for toll manufacture, used when a multinational asks whether an Algerian partner can absorb a newly banned import.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
