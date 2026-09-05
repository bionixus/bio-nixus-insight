import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesPeru: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'peru',
  metaDescription:
    'Pharmaceutical companies in Peru: Farmindustria, Medifarma, Portugal, Roemmers, Abbott, DIGEMID, EsSalud and SIS — generics, imports and pharmacy chains.',
  introLead:
    'Peru’s laboratory channel is smaller and more import-dependent than its Andean neighbours: IQVIA figures cited by Gestión put 2024 laboratory sales at S/ 4.49 billion, down 1 percent in value and 6 percent in units, after DIGEMID declined to renew a wave of category-3 sanitary registrations.',
  introRest:
    'DIGEMID, inside the Ministry of Health, is the registration and inspection authority. Demand then splits along an insurance line that is unusually sharp even by Latin American standards: SIS, the subsidised public scheme run with MINSA, reaches about 60 percent of Peruvians, EsSalud covers formal-sector workers at roughly 30 percent, and the remainder sit with the armed forces, police or private plans. Domestic plants — Farmindustria, Medifarma, Laboratorios Portugal, AC Farma, Hersil — win a large share of SIS and EsSalud generic lots, while innovator affiliates (Pfizer, Abbott, Roche, Novartis) import most of the specialty book and sell it into private clinics and selected EsSalud high-cost programmes. Generic-promotion rules that push INN prescribing have flattened some branded-generic premiums in the public channel without erasing brand loyalty at Inkafarma and Mifarma, the InRetail pair that now frames private pharmacy traffic in Lima. Roemmers Perú and Tecnofarma show how Argentine and regional groups treat Lima as a second home market rather than a satellite. The list below is the set BioNixus uses when a client asks who can actually put a molecule on a MINSA shelf, an EsSalud formulary or a chain planogram in Lima, Arequipa or Trujillo.',
  stats: [
    { value: 'S/ 4.49bn', label: 'Laboratory sales in 2024, IQVIA/IMS as reported by Gestión' },
    { value: '−1.0%', label: 'Year-on-year change in laboratory billing, 2024 (IQVIA/IMS via Gestión)' },
    { value: '−6.1%', label: 'Year-on-year change in units sold, 2024 (IQVIA/IMS via Gestión)' },
    { value: '~60%', label: 'Population covered by MINSA / SIS (U.S. Commercial Service)' },
  ],
  channelHeading: 'How DIGEMID, SIS, EsSalud and the InRetail chains divide Peru',
  channelBody:
    'DIGEMID issues the registro sanitario, inspects plants and has used non-renewal of category-3 products as a quality filter; Gestión’s 2024–2025 coverage, quoting local general managers, tied the unit contraction directly to those lost files. A foreign originator without a Lima affiliate appoints a Peruvian holder — often Química Suiza, Tecnofarma or a domestic lab — to own the registration and to clear Callao. Public purchasing is not a single national tender. MINSA and SIS facilities buy for the subsidised majority, EsSalud runs its own formulary and hospital network for contributing workers, and the two sometimes join the armed forces in consolidated lots that still leave room for separate institutional awards. Generic-promotion law and INN-prescribing rules are meant to steer those lots toward the cheapest registered pack, which is why Farmindustria, Medifarma and Portugal compete on price and on DIGEMID-clean dossiers rather than on brand story inside MINSA. Private demand is a different sport. Inkafarma and Mifarma, both under InRetail Pharma, concentrate Lima and coastal-city pharmacy traffic; their category desks decide OTC and chronic-repeat visibility, while independent boticas still matter in Arequipa, Trujillo and the sierra. Innovator affiliates detail private-clinic specialists and EsSalud high-cost committees, then import finished packs rather than formulating locally. Distribución sits with Química Suiza and a handful of other mayoristas that carry both domestic generics and imported specialties on credit. A Peru plan that treats SIS, EsSalud and InRetail as one channel will mis-forecast both price and mix.',
  companies: [
    {
      name: 'DIGEMID (Dirección General de Medicamentos, Insumos y Drogas)',
      hq: 'Lima',
      type: 'Government',
      focus: 'Registration, plant inspection, category rules and market surveillance',
      notes: 'MINSA’s medicines directorate; category-3 non-renewals in 2023–2024 removed SKUs from laboratory books and showed up in IQVIA unit declines.',
    },
    {
      name: 'EsSalud',
      hq: 'Lima',
      type: 'Government',
      focus: 'Social-security hospitals and formularies for formal-sector workers',
      notes: 'The contributing-worker payer, covering about three in ten Peruvians, and the institutional door that innovator affiliates treat as their public channel.',
    },
    {
      name: 'SIS (Seguro Integral de Salud)',
      hq: 'Lima',
      type: 'Government',
      focus: 'Subsidised public insurance working through the MINSA network',
      notes: 'The volume scheme for roughly three in five residents; generic lots here are where Farmindustria, Medifarma and Portugal earn their public keep.',
    },
    {
      name: 'Ministerio de Salud (MINSA)',
      hq: 'Lima',
      type: 'Government',
      focus: 'Public-hospital network, DIGEMID oversight and SIS purchasing policy',
      notes: 'Owns the facility network that dispenses SIS packs and the political brief for generic-promotion rules that flatten branded premiums.',
    },
    {
      name: 'Farmindustria',
      hq: 'Lima',
      type: 'Local',
      focus: 'Branded generics and institutional lots for SIS and EsSalud',
      notes: 'Among the most cited Peruvian manufacturers in public-tender work; a default peer when a client asks who can price a DIGEMID-clean generic.',
    },
    {
      name: 'Medifarma',
      hq: 'Lima',
      type: 'Local',
      focus: 'Primary-care generics, hospital lines and licensed brands',
      notes: 'Lima plant group that straddles public lots and private pharmacy brands, so it appears in both SIS bid lists and Inkafarma negotiations.',
    },
    {
      name: 'Laboratorios Portugal',
      hq: 'Lima',
      type: 'Local',
      focus: 'Affordable generics for public institutions and boticas',
      notes: 'Volume-oriented Peruvian house that competes when INN rules turn a MINSA lot into a price contest.',
    },
    {
      name: 'Roemmers Perú',
      hq: 'Lima',
      type: 'Regional',
      focus: 'Branded generics from the Argentine Roemmers group',
      notes: 'Andean subsidiary that imported the Roemmers detailing model; a useful read on how Argentine houses treat Lima as a second home market.',
    },
    {
      name: 'Tecnofarma',
      hq: 'Lima',
      type: 'Regional',
      focus: 'Branded generics, licensed specialties and multi-country Andean packs',
      notes: 'Regional group with deep Peruvian roots that often holds registrations for foreign originators and details a mixed book into clinics and chains.',
    },
    {
      name: 'Laboratorios AC Farma',
      hq: 'Lima',
      type: 'Local',
      focus: 'Hospital injectables, anti-infectives and institutional generics',
      notes: 'Domestic manufacturer that shows up in EsSalud and MINSA injectable lots where import lead times hurt originators.',
    },
    {
      name: 'Laboratorios Hersil',
      hq: 'Lima',
      type: 'Local',
      focus: 'Nutritional, consumer-health and selected prescription lines',
      notes: 'Peruvian house whose pharmacy-facing book depends on InRetail listings more than on SIS tenders.',
    },
    {
      name: 'Laboratorios Unión',
      hq: 'Lima',
      type: 'Local',
      focus: 'Primary-care generics for public and private channels',
      notes: 'Smaller Lima manufacturer used as a price reference once generic-promotion rules have stripped a molecule of brand premium.',
    },
    {
      name: 'Abbott Perú',
      hq: 'Lima',
      type: 'MNC',
      focus: 'Established pharmaceuticals, paediatric nutrition and diagnostics',
      notes: 'One of the thicker multinational footprints in Lima, spanning pharmacy nutrition and hospital diagnostics rather than a single specialty desk.',
    },
    {
      name: 'Pfizer del Perú',
      hq: 'Lima',
      type: 'MNC',
      focus: 'Vaccines, oncology, anti-infectives and imported specialties',
      notes: 'Innovator affiliate that imports most of its book and concentrates access work on EsSalud high-cost committees and private clinics.',
    },
    {
      name: 'Roche Perú',
      hq: 'Lima',
      type: 'MNC',
      focus: 'Oncology, neuroscience, ophthalmology and diagnostics',
      notes: 'Specialty affiliate whose treated-patient numbers track private-clinic and EsSalud high-cost decisions, not SIS generic lots.',
    },
    {
      name: 'Novartis Perú',
      hq: 'Lima',
      type: 'MNC',
      focus: 'Cardiology, oncology, immunology and ophthalmology',
      notes: 'Keeps a Lima commercial team for innovator launches while genericised molecules have largely moved to domestic and regional houses.',
    },
    {
      name: 'Química Suiza (Quicorp)',
      hq: 'Lima',
      type: 'Distributor',
      focus: 'National wholesale and registration-holding for foreign principals',
      notes: 'The mayorista that many originators appoint as both logistics partner and sanitary-registration holder when they have no affiliate.',
    },
    {
      name: 'Inkafarma',
      hq: 'Lima',
      type: 'Retailer',
      focus: 'Largest InRetail pharmacy banner, nationwide',
      notes: 'The chain whose listing and private-label decisions now set the private-pharmacy baseline in Lima and on the coast.',
    },
    {
      name: 'Mifarma',
      hq: 'Lima',
      type: 'Retailer',
      focus: 'Second InRetail banner, often positioned as the discount twin',
      notes: 'Sister chain to Inkafarma; manufacturers negotiate both banners together even when the shopper offer looks different at the till.',
    },
  ],
  categoryBlurbs: {
    local:
      'Lima manufacturers — Farmindustria, Medifarma, Portugal, AC Farma, Hersil, Unión — that price DIGEMID-clean generics into SIS and EsSalud lots and still hold some pharmacy brands.',
    mnc:
      'Innovator affiliates that import specialty and nutrition packs, selling into EsSalud high-cost programmes and private clinics rather than into SIS price contests.',
    regional:
      'Roemmers Perú and Tecnofarma, Andean groups that treat Lima as a home detailing market and sometimes hold files for originators without an affiliate.',
    trade:
      'Química Suiza, Inkafarma, Mifarma and the public triad of DIGEMID, SIS and EsSalud that decide whether a registered pack is a tender SKU or a chain SKU.',
  },
  growthDrivers: [
    {
      title: 'DIGEMID category-3 clean-up',
      desc: 'Non-renewal of a large set of sanitary files in 2023–2024 cut laboratory portfolios and units; companies with remaining clean dossiers inherited share without launching anything new.',
    },
    {
      title: 'Generic-promotion and INN prescribing',
      desc: 'Rules that push international non-proprietary names in the public channel keep SIS and many EsSalud lots as price contests, rewarding Farmindustria, Medifarma and Portugal.',
    },
    {
      title: 'SIS versus EsSalud split',
      desc: 'Two public payers with different formularies, payment clocks and clinical cultures mean a single “Peru public” forecast will mis-state both price and mix.',
    },
    {
      title: 'InRetail pharmacy concentration',
      desc: 'Inkafarma and Mifarma now frame private traffic in Lima and coastal cities, so OTC and chronic-repeat brands live or die on two category desks rather than on a long botica route.',
    },
    {
      title: 'Imported innovator specialties',
      desc: 'Pfizer, Roche, Novartis and Abbott still bring most high-value packs through Callao, which keeps private-clinic and EsSalud high-cost access as the growth lane that domestic plants do not occupy.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies manufacture in Peru?',
      a: 'Farmindustria, Medifarma, Laboratorios Portugal, AC Farma, Hersil and Unión are the domestic names that recur in DIGEMID plant lists and in SIS / EsSalud lots. Roemmers Perú and Tecnofarma add regional branded-generic capacity. Innovator affiliates import most of what they sell.',
    },
    {
      q: 'How long does DIGEMID registration take, and what is category 3?',
      a: 'Timelines depend on dossier type and on whether the plant is already known to DIGEMID. Category-3 products faced a wave of non-renewals in 2023–2024 that Gestión and local managers linked to the 2024 unit drop. A file that cannot be renewed is a lost SKU, not a delayed one.',
    },
    {
      q: 'How do SIS and EsSalud differ for manufacturers?',
      a: 'SIS, with MINSA facilities, covers about three in five Peruvians and buys mostly low-priced generics. EsSalud covers contributing workers, runs its own hospitals and is the public door for more specialty and high-cost lines. Joint lots happen, but formularies and payment clocks are not the same.',
    },
    {
      q: 'Do generic-promotion rules erase pharmacy brands?',
      a: 'They flatten premiums inside MINSA and many EsSalud lots, where INN prescribing is enforced. They do not erase brand choice at Inkafarma and Mifarma, where shoppers and chain private labels still decide the till. Companies therefore keep two stories for the same molecule.',
    },
    {
      q: 'What fieldwork does BioNixus use to profile Peruvian pharmaceutical companies?',
      a: 'DIGEMID dossier and category-3 loss reviews; SIS and EsSalud purchasing interviews; InRetail category discussions; and pharmacy plus hospital work in Lima, Arequipa and Trujillo to split public lots from chain sell-out.',
    },
    {
      q: 'Does this Peru page rank laboratories by market share?',
      a: 'No. Entries were chosen because they recur in DIGEMID registers, EsSalud and SIS purchasing, and BioNixus Lima fieldwork. Placement on the page is not a share estimate.',
    },
  ],
  regulatorSource: {
    name: 'DIGEMID — registros sanitarios de medicamentos and licensed establishments',
    url: 'https://www.digemid.minsa.gob.pe',
    asOf: '2026-09-04',
  },
  sources: [
    'Gestión, Análisis del mercado farmacéutico en Perú, citing IQVIA/IMS 2024 laboratory sales (S/ 4,487 million; −1.01% value; −6.07% units)',
    'U.S. Commercial Service, Peru healthcare-system coverage (MINSA/SIS ~60%; EsSalud ~30%)',
    'DIGEMID / MINSA registration and generic-promotion rules; InRetail Pharma public materials on Inkafarma and Mifarma',
    'BioNixus Peru public-purchasing, chain and hospital fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SIS versus EsSalud purchasing interviews in Lima, splitting generic lot prices from high-cost committee behaviour on the same therapy class.',
    'DIGEMID category-3 loss mapping: which laboratory portfolios shrank in 2023–2024 and which remaining files inherited unit share.',
    'InRetail category interviews covering Inkafarma and Mifarma listings, private label and chronic-repeat planograms.',
    'Pharmacy and hospital audits in Lima, Arequipa and Trujillo estimating domestic-generic versus imported-innovator mix by channel.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
