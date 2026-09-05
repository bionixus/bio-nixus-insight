import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesLibya: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'libya',
  metaDescription:
    'Pharmaceutical companies in Libya: MSO, Azawia, Alahlia, Hikma, Eva, Julphar, Pharco and the Food and Drug Control Center — tenders, cash trade.',
  introLead:
    'Libya still buys most of its medicines as finished imports paid from oil revenue, yet authority over those purchases is split, plants have stood idle for years, and a large cash trade sits beside the official tender.',
  introRest:
    'In Tripoli the Medical Supply Organization remains the principal state importer and warehouse, while Benghazi-area facilities often buy through a separate eastern apparatus, so the same molecule can have two public prices and two delivery calendars. Azawia, Rabta and the General Company for Pharmaceutical Industries are the names ministries use when they talk about restarting local formulation; output is still thin next to Eva, Hikma, Julphar and Pharco shipments that fill both hospital crates and private pharmacies. The Food and Drug Control Center and the Ministry of Health issue papers, but enforcement is uneven and humanitarian consignments continue to plug gaps. Treat the roster as a field map of counterparties, not as proof that any single buyer controls the country.',
  stats: [
    { value: 'MSO', label: 'Tripoli-based state importer and warehouse for most western public volume' },
    { value: '~15 yrs', label: 'Approximate idle stretch for Rabta-area formulation, per 2025 ministry remarks on restart talks' },
    { value: '2', label: 'Public buying poles that field teams must treat separately: Tripoli and Benghazi' },
    { value: 'Cash', label: 'Default payment mode in private pharmacies when a tender delivery fails or never starts' },
  ],
  channelHeading: 'Tenders in the west, cash shelves in the east, and a thin industrial base',
  channelBody:
    'On paper a medicine needs a Food and Drug Control Center release and a Ministry of Health authorisation; in practice a shipment also needs a buyer who can open a letter of credit and a warehouse that will not lose the cold chain. The Medical Supply Organization in Tripoli is supposed to be that buyer for the west: it runs tenders, has been told since 2023 to pay through LCs and to deal only with official manufacturers, and in 2026 began piloting a digital supply platform. Benghazi hospitals and stores often sit outside that circuit, awarding their own lots or taking whatever a regional supplier will land at the eastern ports. Private pharmacies in both cities restock from importers such as Alahlia and from the same Egyptian, Jordanian and Gulf houses that bid the public tenders — Eva, Hikma, Julphar, Pharco, EIPICO, Amoun, Dar Al Dawa, Tabuk — so a brand that loses an MSO lot can still sell for cash on Omar al-Mukhtar Street. Local plants are a political project more than a present-day supply source: Rabta restart talks with Italian partners, a General Company board that met in 2025–2026, and the older Azawia site are real names, but they do not yet replace containers. UNICEF and WHO consignments move through a third gate and should be modelled as a competing or complementary channel, not as a company on the retail audit.',
  companies: [
    {
      name: 'Medical Supply Organization (MSO)',
      hq: 'Tripoli',
      type: 'Government',
      focus: 'State import, warehousing and delivery of medicines for western public facilities',
      notes: 'The counterpart for anyone who wants a Tripoli tender. Reforms since 2023 have pushed LC payment and official-manufacturer rules; delivery and storage remain the complaints hospital pharmacists repeat.',
    },
    {
      name: 'General Company for Pharmaceutical Industries and Medical Supplies',
      hq: 'Tripoli',
      type: 'Local',
      focus: 'State industrial vehicle for restarting formulation and raw-material plants',
      notes: 'The company whose board the ministry convened when it wanted a plan for Rabta and for raw-material units; treat it as an industrial project, not as a current volume leader.',
    },
    {
      name: 'Azawia Pharmaceutical Factory',
      hq: 'Zawiya',
      type: 'Local',
      focus: 'Historic western formulation site',
      notes: 'The plant name that still appears when officials list domestic capacity. Output has been intermittent; useful as a site to inspect, not as a reliable national source.',
    },
    {
      name: 'Rabta Pharmaceutical Factory',
      hq: 'Tripoli',
      type: 'Local',
      focus: 'Formulation and raw-material restart project after a long stoppage',
      notes: 'Ministry and Italian-partner talks in 2025 framed Rabta as the sovereignty plant. Until lines actually run, it belongs in a capacity memo rather than in a share estimate.',
    },
    {
      name: 'Alahlia',
      hq: 'Tripoli',
      type: 'Distributor',
      focus: 'Private import and pharmacy supply',
      notes: 'Libyan trading house that private pharmacists in Tripoli name when official MSO deliveries leave gaps; a typical cash-market counterpart rather than a manufacturer.',
    },
    {
      name: 'Hikma',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Branded generics and injectables into tenders and private pharmacies',
      notes: 'Jordanian group whose packs are familiar in both Tripoli and Benghazi; often on MSO bidder lists and on cash shelves in the same month.',
    },
    {
      name: 'Eva Pharma',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Egyptian branded generics and hospital lines',
      notes: 'Among the Egyptian houses that filled Libyan demand when European affiliates thinned out; visible in both public lots and private wholesale.',
    },
    {
      name: 'Julphar (Gulf Pharmaceutical Industries)',
      hq: 'Ras Al Khaimah',
      type: 'Regional',
      focus: 'Gulf-made generics and insulin-related products',
      notes: 'UAE manufacturer that treats Libya as a tender-and-trade market, not as a place to build a plant, and shows up in hospital crates along the coast.',
    },
    {
      name: 'Pharco',
      hq: 'Alexandria',
      type: 'Regional',
      focus: 'Egyptian generics, anti-infectives and chronic-care brands',
      notes: 'Alexandria group whose range matches what Libyan pharmacies can sell for cash when a tender SKU never arrives.',
    },
    {
      name: 'EIPICO',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Egyptian branded generics for institutional and retail demand',
      notes: 'Another Nile-delta manufacturer that Libyan buyers already know how to register and bid; useful as a comparator in any Egyptian-origin share cut.',
    },
    {
      name: 'Amoun Pharmaceutical',
      hq: 'Cairo',
      type: 'Regional',
      focus: 'Egyptian branded generics and consumer-adjacent lines',
      notes: 'Sits in the same Egyptian supplier set as Eva and Pharco; private-pharmacy audits in Tripoli usually find at least one Amoun SKU in the chronic-care bays.',
    },
    {
      name: 'Dar Al Dawa',
      hq: 'Amman',
      type: 'Regional',
      focus: 'Jordanian branded generics',
      notes: 'Levant manufacturer that uses the same agency model as Hikma: a Libyan holder, a tender bid, and a cash fallback if the award goes elsewhere.',
    },
    {
      name: 'Tabuk Pharmaceuticals',
      hq: 'Tabuk',
      type: 'Regional',
      focus: 'Saudi-owned generics sold through Libyan agents',
      notes: 'Gulf manufacturer whose packs appear in private wholesale more often than in headline MSO awards, so a retail audit will catch it when a tender map will not.',
    },
    {
      name: 'Sanofi',
      hq: 'Paris',
      type: 'MNC',
      focus: 'Diabetes, established brands and selected hospital products',
      notes: 'The innovator that still has a recognisable Libyan footprint, usually through an agent and an MSO or hospital conversation rather than a full affiliate P&L.',
    },
    {
      name: 'Food and Drug Control Center',
      hq: 'Tripoli',
      type: 'Government',
      focus: 'Quality control and release of food, medicines and related products',
      notes: 'The laboratory-and-release body that is supposed to sit on every legal shipment; capacity and reach are uneven, which is why informal stock still reaches pharmacies.',
    },
    {
      name: 'Ministry of Health (Government of National Unity)',
      hq: 'Tripoli',
      type: 'Government',
      focus: 'Policy, authorisations and supervision of MSO and public facilities in the west',
      notes: 'Tripoli ministry that chairs industrial-restart meetings and issues the papers MSO tenders assume. Eastern facilities may ignore or duplicate those papers.',
    },
    {
      name: 'Eastern public medical-supply apparatus (Benghazi)',
      hq: 'Benghazi',
      type: 'Government',
      focus: 'Separate hospital buying and warehousing for eastern facilities',
      notes: 'Not a single tidy company, but a buying pole that field teams have to treat as real: Benghazi awards and receipts often do not match the Tripoli MSO list for the same molecule.',
    },
    {
      name: 'UNICEF Libya supply line',
      hq: 'Tripoli',
      type: 'Operator',
      focus: 'Humanitarian procurement and delivery of essential medicines',
      notes: 'Not a commercial manufacturer. Listed because its consignments change what hospitals need to buy and what private pharmacies bother to stock in the same catchment.',
    },
  ],
  categoryBlurbs: {
    local:
      'A handful of plants and a state industrial company whose political importance exceeds their present output; restart talk is real, reliable pack flow is not.',
    mnc:
      'A thin innovator presence, Sanofi the name most pharmacists still recognise, usually working through an agent and a tender rather than a full Libyan affiliate.',
    regional:
      'Egyptian, Jordanian and Gulf manufacturers that actually fill crates: Eva, Hikma, Julphar, Pharco, EIPICO, Amoun, Dar Al Dawa and Tabuk.',
    trade:
      'MSO in Tripoli, a separate eastern buying pole in Benghazi, private houses such as Alahlia, the Food and Drug Control Center, and a humanitarian operator that moves essential packs outside the commercial tender.',
  },
  growthDrivers: [
    {
      title: 'Split public buying',
      desc: 'A molecule awarded in Tripoli can be re-awarded, ignored or substituted in Benghazi. Any volume model that assumes one national tender will mis-state both risk and opportunity.',
    },
    {
      title: 'Letter-of-credit discipline at MSO',
      desc: 'Since 2023 the Tripoli government has told MSO to pay through LCs and to deal with official manufacturers, which favours houses that can ship from a named plant and wait on bank paper.',
    },
    {
      title: 'Cash pharmacies as the backup channel',
      desc: 'When a tender delivery slips, patients buy the same molecule from a private pharmacy that restocked through Alahlia or an Egyptian agent. Retail audits therefore catch demand that hospital records miss.',
    },
    {
      title: 'Industrial restart as a long project',
      desc: 'Rabta and Azawia will matter if lines actually run; until then they are a political story that should not be entered as domestic share. Humanitarian consignments will keep filling the gap in the meantime.',
    },
  ],
  faq: [
    {
      q: 'Is there a single Libyan public buyer for medicines?',
      a: 'No. MSO is the western state importer, and it is the right first call for a Tripoli tender. Benghazi-area facilities often buy on a different paper trail. Model two public channels plus a cash retail channel.',
    },
    {
      q: 'Do Libyan factories supply the market today?',
      a: 'Only in a limited way. Azawia and the General Company are real names, and Rabta restart talks were public in 2025, but most packs on hospital docks and pharmacy shelves are still imported finished goods.',
    },
    {
      q: 'Which foreign manufacturers show up most often?',
      a: 'Egyptian and Jordanian houses — Eva, Pharco, EIPICO, Amoun, Hikma, Dar Al Dawa — plus Julphar and Tabuk from the Gulf. Sanofi is the innovator pharmacists still name without prompting.',
    },
    {
      q: 'Where does humanitarian supply sit in a commercial plan?',
      a: 'UNICEF and WHO consignments can cover essential lines in a catchment for months, which suppresses both tender demand and pharmacy restocking. They are a channel to map, not a competitor to “beat” in a detailing sense.',
    },
    {
      q: 'What does BioNixus actually do on a Libyan pharmaceutical brief?',
      a: 'Parallel reconstruction of Tripoli MSO lots and Benghazi-area awards; cash-pharmacy stock walks in both cities; and interviews that separate legal FDCC-released goods from informal stock.',
    },
    {
      q: 'Can the order of names in this Libyan roster be read as a size ranking?',
      a: 'Nobody should read the order of rows as a statement of who is larger. The roster is a counterpart list for a split market where audited share figures barely exist.',
    },
  ],
  regulatorSource: {
    name: 'Libyan Ministry of Health and Food and Drug Control Center — public supply policy and medicine control',
    url: 'https://moh.gov.ly',
    asOf: '2026-09-04',
  },
  sources: [
    'Libya Herald reporting on MSO tender and LC reforms (2023), Rabta restart talks (2025) and the MSO digital supply-platform pilot (2026)',
    'Food and Drug Control Center institutional site (fdcc.ly) on the centre’s quality-control mandate',
    'Ministry of Health (moh.gov.ly) notices on industrial-restart meetings of the General Company for Pharmaceutical Industries',
    'BioNixus Libya tender, pharmacy and hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Tripoli MSO award files placed next to dock-receipt interviews at western hospitals, to see which winning SKUs actually arrive and which are substituted from private stock.',
    'Benghazi hospital and warehouse conversations that treat eastern buying as its own circuit, recording molecules that never appear on the Tripoli list.',
    'Cash-pharmacy shelf walks on main retail streets in Tripoli and Benghazi, tagging Egyptian, Jordanian and Gulf origin and whether an FDCC release mark is present.',
    'Site notes from visits or call-downs on Azawia and Rabta: which lines are rust, which are being re-tooled, and what a client should not assume about “local production” in a 2026 forecast.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
