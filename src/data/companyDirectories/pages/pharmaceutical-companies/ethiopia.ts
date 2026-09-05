import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesEthiopia: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'ethiopia',
  metaDescription:
    'Pharmaceutical companies in Ethiopia: EPHARM, Addis Pharmaceutical Factory, Cadila, Humanwell, Julphar, EFDA and EPSS — industrial parks, FX and pooled buying.',
  introLead:
    'Ethiopia is trying to turn the continent’s second-largest population into a manufacturing story: Kilinto’s dedicated pharmaceutical park on the edge of Addis Ababa, an EFDA that has reached WHO Maturity Level 3, and a state buyer, EPSS, that still decides most of what reaches public wards.',
  introRest:
    'The story is unfinished. Foreign exchange for APIs and packing materials has been scarce for years, so plants that look modern on a Kilinto tour have often run at a fraction of installed capacity. Officials now say local factories cover more than two fifths of medicine supply and about 44 percent of national procurement — a jump from the high-single-digit shares quoted earlier in the decade — but finished-dose imports and EPSS international tenders still fill the gaps that idle lines cannot. EPHARM and Addis Pharmaceutical Factory are the older Ethiopian names; Cadila’s joint venture, Humanwell, Julphar, Sino-Ethiop Associate, Sansheng, Kilitch Estro and Glocare are the foreign-backed plants that were invited in to substitute imports. Novartis is present mainly through access portfolios rather than a full originator campus; GSK’s visible role has been vaccines and historical commercial supply, not a Kilinto factory. AU and IGAD conversations treat Addis as a possible regional source once EFDA’s maturity level and EPSS contracts become predictable. Market-size figures wander between about $1.3 billion and $1.8 billion depending on whether devices and public grants are counted, so this page stays with institutions and named plants. The list is the set of manufacturers, foreign ventures, the regulator and the pooled buyer a launch or localisation brief has to name before anyone talks about Hawassa or Dire Dawa demand.',
  stats: [
    {
      value: '$1.3–1.8bn',
      label: 'Published range for Ethiopia’s pharmaceutical market (Manufacturing Africa 2022; Ethiopian Pharmaceutical Association, later)',
    },
    {
      value: '>40%',
      label: 'Local production share of medicine supply cited by EFDA / World Bank feature, May 2026',
    },
    {
      value: '~44%',
      label: 'Domestic suppliers’ share of national procurement, Ministry of Health, May 2026 (from about 8% five to six years earlier)',
    },
    {
      value: 'ML3',
      label: 'EFDA WHO Maturity Level 3 for medicines regulation — ninth in Africa, first in IGAD',
    },
  ],
  channelHeading: 'How EFDA files and EPSS contracts decide what Ethiopians actually receive',
  channelBody:
    'A medicine may be sold only after the Ethiopian Food and Drug Authority issues a marketing authorisation and, for a local plant, a facility-level GMP certificate. Since mid-2024 that GMP bar has applied to every domestic factory, and in 2026 the Authority opened a contract-manufacturing route so idle Kilinto and Addis lines can legally make another company’s pack. Physical demand is dominated by the Ethiopian Pharmaceutical Supply Service, the pooled buyer that replaced PFSA: EPSS tenders for federal hospitals, regional health bureaus and many woredas, and a lost EPSS lot is a lost year for a plant that cannot freely sell the same batch into a thin private pharmacy trade. Private retail exists in Addis Ababa and in corridor towns, but household cash and forex-starved importers make it a poor substitute for a state contract. Foreign exchange is the hidden channel. Plants wait for dollars to buy APIs; importers wait for the same dollars to open letters of credit; EPSS itself has delayed awards when hard currency was missing. Kilinto — roughly 279 hectares with dedicated power and effluent treatment — was built to break that loop by clustering formulation, packaging and eventually some inputs. Hawassa’s industrial labour pool and Dire Dawa’s rail and dry-port role matter for distribution more than for plants today. AU and IGAD supply talks sit on top of this domestic machinery: if EFDA stays at Maturity Level 3 and EPSS pays on time, Ethiopian packs become candidates for neighbouring tenders; if either slips, the country remains an import destination with a photogenic park.',
  companies: [
    {
      name: 'Ethiopian Pharmaceuticals Manufacturing (EPHARM)',
      hq: 'Addis Ababa',
      type: 'Local',
      focus: 'Essential tablets, liquids and the historic state manufacturing name',
      notes:
        'The oldest Ethiopian plant brand; still a reference supplier on EPSS essential lists even as Kilinto’s newer foreign-backed factories take share.',
    },
    {
      name: 'Addis Pharmaceutical Factory',
      hq: 'Addis Ababa',
      type: 'Local',
      focus: 'Solid-dose essentials and hospital packs for public contracts',
      notes:
        'Addis-based factory that predates the park model and remains a frequent EPSS bidder for high-volume orals.',
    },
    {
      name: 'Cadila Pharmaceuticals Ethiopia',
      hq: 'Addis Ababa',
      type: 'MNC',
      focus: 'Indian-Ethiopian joint-venture generics since the early 2000s',
      notes:
        'Cadila’s local JV, established in 2003, is the longest-running Indian manufacturing presence and a template later Kilinto investors still study.',
    },
    {
      name: 'Humanwell Pharmaceutical Ethiopia',
      hq: 'Kilinto, Addis Ababa',
      type: 'MNC',
      focus: 'Injectables and solids; first standalone Chinese pharma investment',
      notes:
        'Opened in 2016 as a Chinese-owned plant and has pursued WHO-prequalification work on selected injectables while selling into EPSS.',
    },
    {
      name: 'Julphar Ethiopia',
      hq: 'Addis Ababa',
      type: 'Regional',
      focus: 'Gulf-backed generics and a planned higher-GMP greenfield line',
      notes:
        'Julphar’s Ethiopian factory (from 2013) gives a Ras Al Khaimah group a Horn of Africa plant and a seat at EPSS oral-solid tenders.',
    },
    {
      name: 'Sino-Ethiop Associate',
      hq: 'Addis Ababa',
      type: 'Regional',
      focus: 'Chinese-Ethiopian joint-venture essentials and medical supplies',
      notes:
        'Sino-Ethiop Associate sits on both medicine and supply lists and is one of the Chinese-backed names EPSS counterparties already know.',
    },
    {
      name: 'Sansheng Pharmaceuticals Ethiopia',
      hq: 'Addis Ababa',
      type: 'MNC',
      focus: 'Chinese-owned formulation for public and private channels',
      notes:
        'Sansheng is among the Chinese manufacturers profiled in recent local-industry directories and competes for the same EPSS oral-solid lots as older plants.',
    },
    {
      name: 'Kilitch Estro Biotech',
      hq: 'Kilinto, Addis Ababa',
      type: 'MNC',
      focus: 'Indian-Ethiopian joint-venture solids on the Kilinto campus',
      notes:
        'Kilitch’s 2020 JV is one of the park’s early Indian occupants and is often cited when officials walk visitors through occupied Kilinto plots.',
    },
    {
      name: 'Glocare Pharma Manufacturing',
      hq: 'Kilinto, Addis Ababa',
      type: 'MNC',
      focus: 'Tablets and liquids from a 2022 Kilinto factory',
      notes:
        'Indian-backed Kilinto plant built explicitly for import substitution; still ramping lines while selling into a forex-constrained market.',
    },
    {
      name: 'East African Pharmaceuticals',
      hq: 'Addis Ababa',
      type: 'Local',
      focus: 'Domestic generics for EPSS and private Addis pharmacies',
      notes:
        'Ethiopian-owned manufacturer that predates the SEZ wave and still appears on public essential-medicine shortlists.',
    },
    {
      name: 'Pharmacure PLC',
      hq: 'Addis Ababa',
      type: 'Local',
      focus: 'Locally owned solids and selected hospital lines',
      notes:
        'Addis manufacturer named in industry mappings of the pre-Kilinto domestic base.',
    },
    {
      name: 'Trust Pharmaceuticals',
      hq: 'Addis Ababa',
      type: 'Local',
      focus: 'Newer Ethiopian private plant aimed at essentials',
      notes:
        'Domestic private entrant flagged in 2024–2025 industry notes as part of the second wave trying to use idle-capacity rules and EPSS preference.',
    },
    {
      name: 'Africure Pharmaceuticals Manufacturing',
      hq: 'Kilinto, Addis Ababa',
      type: 'Regional',
      focus: 'Pan-African JV formulation on the Kilinto site',
      notes:
        'Africure’s Ethiopian factory is the kind of regional JV the park was designed to host: African capital, Indian technical DNA, EPSS as first customer.',
    },
    {
      name: 'Novartis',
      hq: 'Access programmes / Addis Ababa',
      type: 'MNC',
      focus: 'Access-priced chronic portfolio and selected specialty',
      notes:
        'No Kilinto campus. Novartis Access and related programmes have been the credible on-the-ground presence; treat it as an access affiliate, not a factory account.',
    },
    {
      name: 'GSK',
      hq: 'Vaccines and historical commercial / Addis Ababa',
      type: 'MNC',
      focus: 'Vaccines via immunisation partners; limited historical commercial lines',
      notes:
        'GSK has not built a Kilinto plant. Its Ethiopian footprint is vaccines and older commercial supply, which is why it belongs on an access map rather than a factory tour.',
    },
    {
      name: 'Ethiopian Food and Drug Authority (EFDA)',
      hq: 'Addis Ababa',
      type: 'Government',
      focus: 'Registration, facility GMP, contract-manufacturing rules, vigilance',
      notes:
        'WHO Maturity Level 3 regulator whose 2024 GMP mandate and 2026 contract-manufacturing opening now decide who may legally use whose idle line.',
    },
    {
      name: 'Ethiopian Pharmaceutical Supply Service (EPSS)',
      hq: 'Addis Ababa',
      type: 'Government',
      focus: 'Pooled federal and regional procurement and distribution',
      notes:
        'The successor to PFSA and still the demand that fills or starves a plant; forex and payment timing matter as much as the award letter.',
    },
    {
      name: 'Kilinto Pharmaceutical Special Economic Zone',
      hq: 'Addis Ababa',
      type: 'Operator',
      focus: 'Dedicated pharma park: land, power, effluent and one-stop permits',
      notes:
        'Not a manufacturer. The park operator (about 279 hectares) is the counterpart for any foreign principal that wants a plot rather than a distributor.',
    },
  ],
  categoryBlurbs: {
    local:
      'EPHARM, Addis Pharmaceutical Factory, East African Pharmaceuticals, Pharmacure and Trust — Ethiopian-owned plants that lived on EPSS essentials before Kilinto existed and still bid those lots.',
    mnc:
      'Cadila, Humanwell, Sansheng, Kilitch, Glocare, plus Novartis and GSK as access-and-vaccine names rather than factory owners. Chinese and Indian capital, not Swiss or British campuses, built the new lines.',
    regional:
      'Julphar from the Gulf, Sino-Ethiop Associate, and Africure’s pan-African JV — groups that treat Ethiopia as a Horn and IGAD manufacturing node, not only a 120-million-person domestic market.',
    trade:
      'EFDA as the maturity-level-3 gate, EPSS as the pooled buyer, Kilinto SEZ as the land-and-utilities counterpart, and forex desks at the banks as the unofficial fourth gate.',
  },
  growthDrivers: [
    {
      title: 'Kilinto park and import-substitution incentives',
      desc: 'Serviced plots, tax holidays and official price preferences of up to half for eligible domestic packs are why Indian and Chinese principals accepted a forex-difficult market; occupancy is still partial, so the next wave of plots is itself a competitive signal.',
    },
    {
      title: 'EFDA maturity and the contract-manufacturing opening',
      desc: 'Maturity Level 3 plus a 2026 rule that lets one licensed plant make another company’s medicine is meant to turn idle shifts into legal supply, which changes partner screening: a brand may now rent a Kilinto line instead of building one.',
    },
    {
      title: 'EPSS preference for local packs — when the dollars arrive',
      desc: 'Ministry figures showing local suppliers above two fifths of procurement only hold if EPSS can pay and if plants can buy APIs. Forex remains the choke; a preference rule without dollars restocks the import tender.',
    },
    {
      title: 'AU and IGAD as a second customer, not a slogan',
      desc: 'Addis hosts the African Union, and EFDA’s IGAD-first maturity badge is being used to argue that Ethiopian packs can move into neighbouring tenders. That export story is real only for plants that already satisfy EPSS quality and volume at home.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies manufacture inside Ethiopia?',
      a: 'EPHARM and Addis Pharmaceutical Factory are the historic local names. Cadila, Humanwell, Julphar, Sino-Ethiop Associate, Sansheng, Kilitch Estro, Glocare and Africure are the foreign-backed factories, several of them on Kilinto. Novartis and GSK should not be counted as manufacturers here.',
    },
    {
      q: 'What does EFDA Maturity Level 3 change for a foreign brand?',
      a: 'It tells WHO and neighbouring regulators that Ethiopia’s medicines system meets a defined institutional standard. In practice it shortens some reliance conversations and is a prerequisite for treating an Ethiopian pack as an IGAD-credible source. It does not by itself speed a single dossier if the file is incomplete.',
    },
    {
      q: 'Why do people say forex decides more than the tender?',
      a: 'Plants cannot run without imported APIs, and importers cannot clear finished doses without letters of credit. EPSS can award a lot that nobody can manufacture or ship until dollars are allocated. That is why utilisation rates at otherwise modern factories have sat far below nameplate capacity.',
    },
    {
      q: 'Is Kilinto a substitute for EPSS?',
      a: 'No. Kilinto is land, power and permits. EPSS is demand. A full park with a late-paying or forex-blocked buyer still leaves pallets in the warehouse. The two institutions have to move together or the import-substitution numbers reverse.',
    },
    {
      q: 'How does BioNixus take an Ethiopian pharmaceutical brief on the ground?',
      a: 'We interview EPSS procurement officers and hospital pharmacists in Addis Ababa, walk Kilinto and older Addis plants with quality heads, test private-pharmacy availability in Hawassa and Dire Dawa, and separate access-programme volume (Novartis, vaccine partners) from factory volume.',
    },
    {
      q: 'Is the Ethiopian company table ordered by turnover or plant size?',
      a: 'Neither. This is a working account list, not a ranking. A name is here because it holds an EFDA licence, an EPSS award history, a Kilinto plot, or a documented access role. Installed capacity and last year’s EPSS share do not set the sequence.',
    },
  ],
  regulatorSource: {
    name: 'Ethiopian Food and Drug Authority (EFDA) — registered medicines and licensed manufacturers',
    url: 'https://www.efda.gov.et',
    asOf: '2026-09-04',
  },
  sources: [
    'World Bank feature on EFDA Maturity Level 3 and local-production share, 26 May 2026',
    'Ethiopian Ministry of Health / ENA interview on 44 percent local share of national procurement, 25 May 2026',
    'Manufacturing Africa, Potential in local pharmaceutical manufacturing in Ethiopia (Kilinto 279 ha; 12 manufacturers; $1.3–1.7bn 2022 market)',
    'Addis Fortune on EFDA contract-manufacturing directive, February 2026; AHRI local-manufacturer profiles, 2025',
    'BioNixus Ethiopia plant, EPSS and pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'EPSS tender reconstructions by molecule: local versus imported winners, stated preference margins, and whether awarded packs were actually delivered after forex delays.',
    'Kilinto and older Addis plant walks with quality and production heads on utilisation, API waits, and whether the 2026 contract-manufacturing rule is already being used.',
    'Addis Ababa, Hawassa and Dire Dawa private-pharmacy availability checks on essential orals, to see what leaks out of EPSS into cash retail.',
    'Access-versus-factory separation: interviews that keep Novartis Access and GSK vaccine supply out of the Kilinto capacity conversation so a client does not plan a plant tour that does not exist.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
