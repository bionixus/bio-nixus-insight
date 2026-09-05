import type { DirectoryPageInput } from '../../types';

export const manufacturingCompaniesEgypt: DirectoryPageInput = {
  entity: 'manufacturing-companies',
  countrySlug: 'egypt',
  metaDescription:
    'Egypt manufacturers: Ezz Steel, Elsewedy Electric, Abu Qir Fertilizers, SIDPEC, Oriental Weavers — IDA licences, Sokhna and Delta plants.',
  introLead:
    'A rebar tonne leaving Ezz and a cable drum leaving Elsewedy do not share a buying centre: the Industrial Development Authority stamps both halls, but the offtaker is a contractor in one case and a utility or export desk in the other.',
  introRest:
    'Ezz Steel is the first metals name BioNixus hears from contractors who want Egyptian long steel rather than an import invoice. Elsewedy Electric takes cable, transformers and selected industrial electrical. Abu Qir Fertilizers and Sidi Kerir Petrochemicals (SIDPEC) take the Delta and Alexandria chemicals conversation. Oriental Weavers takes carpets — a plant tour that a rebar questionnaire will not explain. The Industrial Development Authority is the licence desk. This directory maps those plants and the IDA. It is not a list of every informal workshop in Shubra.',
  stats: [
    { value: 'IDA licence', label: 'Industrial Development Authority stamp that still sits in front of a legal hall' },
    { value: 'Ezz / Elsewedy', label: 'Two contractor-facing books — rebar and cable — that do not share a plant tour' },
    { value: 'Abu Qir / SIDPEC', label: 'Delta and Alexandria chemicals pair a rebar brief must not inherit' },
    { value: '10th / Sokhna / Alex', label: 'Three industrial belts a principal must name before sampling a single “Egypt plant”' },
  ],
  channelHeading: 'How an IDA licence becomes a tonne, a drum or a carpet roll',
  channelBody:
    'A plant’s industrial licence sits with the Industrial Development Authority. The commercial register sits with GAFI. A plot in Tenth of Ramadan, 6th of October, Sokhna or Alexandria is a third landlord conversation. Those papers do not replace each other. Feedstock then splits. Ezz takes scrap and iron units. Elsewedy takes copper and aluminium. Abu Qir takes gas and nutrients. SIDPEC takes hydrocarbons on the Alexandria belt. Oriental Weavers takes fibres. Offtake is a named buyer — a contractor, a utility, an export vessel at Sokhna or Alexandria, or a Gulf retailer for carpets. Forex-linked energy and imported inputs make many cost grids a currency conversation. BioNixus therefore designs an Egypt manufacturing study around the IDA stamp, the named belt and the offtaker, not around a single “industry GDP” cell.',
  companies: [
    {
      name: 'Ezz Steel',
      hq: 'Cairo / Ain Sokhna / Alexandria belt',
      type: 'Local',
      focus: 'Long steel for construction and industry',
      notes: 'The rebar conversation contractors still start with; an Elsewedy cable tour is a different hall.',
    },
    {
      name: 'Elsewedy Electric',
      hq: 'Cairo / Tenth of Ramadan',
      type: 'Local',
      focus: 'Cables, transformers and electrical industrial products',
      notes: 'Utility and contractor offtake; do not fold the hall into an Ezz plant tour.',
    },
    {
      name: 'Abu Qir Fertilizers',
      hq: 'Alexandria',
      type: 'Local',
      focus: 'Nitrogen fertilizers and industrial nutrients',
      notes: 'Delta chemicals book for nutrients; a rebar questionnaire will mis-read every process step here.',
    },
    {
      name: 'Sidi Kerir Petrochemicals (SIDPEC)',
      hq: 'Alexandria',
      type: 'Local',
      focus: 'Ethylene, polyethylene and petrochemicals',
      notes: 'Alexandria cracker-adjacent polymer tour; skip this hall on a carpet or rebar-only brief.',
    },
    {
      name: 'Oriental Weavers',
      hq: 'Tenth of Ramadan',
      type: 'Local',
      focus: 'Machine-made carpets for domestic and export',
      notes: 'The carpet hall Gulf retailers already know; keep this tour off the steel discussion guide.',
    },
    {
      name: 'Industrial Development Authority (IDA)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Industrial licences and industrial-land overlay',
      notes: 'The stamp a legal hall cannot skip; GAFI’s commercial register does not replace it.',
    },
    {
      name: 'EZDK / Alexandria National Iron & Steel residual',
      hq: 'Alexandria',
      type: 'Local',
      focus: 'Selected steel capacity on the northern belt',
      notes: 'Confirm the live operating vehicle beside Ezz; owners still say historic names after combinations.',
    },
    {
      name: 'Egyptian Petrochemicals / other Alex chemicals',
      hq: 'Alexandria',
      type: 'Local',
      focus: 'State-adjacent chemicals sitting beside SIDPEC',
      notes: 'Second chemicals name on the northern belt; useful when the brief needs more than one cracker-adjacent tour.',
    },
    {
      name: 'Tenth of Ramadan converters',
      hq: 'Tenth of Ramadan',
      type: 'Local',
      focus: 'Mid-size conversion and light industry',
      notes: 'The long tail an Ezz-only study will miss; sample when the brief is conversion density.',
    },
    {
      name: 'SCZONE / Sokhna industrial tenants',
      hq: 'Ain Sokhna',
      type: 'Operator',
      focus: 'Red Sea economic-zone plants and export adjacency',
      notes: 'Red Sea economic-zone theatre that a Delta-only plant sample will systematically under-cover.',
    },
    {
      name: 'Ceramica / selected building-materials houses',
      hq: 'Cairo / multiple belts',
      type: 'Local',
      focus: 'Tiles and contractor-facing materials',
      notes: 'Building-materials offtake contractors already know beside Ezz; keep this hall off any fertilizer tour.',
    },
    {
      name: 'GAFI (industrial commercial registers)',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Commercial register sitting beside the IDA licence',
      notes: 'Second paper; an IDA stamp without a live register is a fieldwork warning.',
    },
    {
      name: 'Alexandria and Sokhna export quays',
      hq: 'Alexandria / Ain Sokhna',
      type: 'Operator',
      focus: 'Vessel conversation for steel, chemicals and carpets',
      notes: 'The berth a Cairo HQ interview will not see; name the quay before claiming export offtake.',
    },
    {
      name: 'Ministry of Trade and Industry overlay',
      hq: 'Cairo',
      type: 'Government',
      focus: 'Industrial policy sitting beside IDA licences',
      notes: 'Policy desk; the plant still hangs the IDA paper, not a ministry slogan.',
    },
  ],
  categoryBlurbs: {
    local:
      'Ezz, Elsewedy, Abu Qir, SIDPEC, Oriental Weavers and the converter tail — Egyptian halls that still own rebar, cable, nutrients, molecules and carpets.',
    mnc:
      'Foreign offtakers and selected joint ventures appear as buyers or parents. They do not replace Ezz on the contractor conversation.',
    regional:
      'Gulf retailers and contractors buy Egyptian carpets, cable and steel. They are offtakers on this page, not manufacturers.',
    trade:
      'IDA as the licence desk, GAFI as the register, SCZONE and the industrial belts as landlords, plus Alexandria and Sokhna as export quays.',
  },
  growthDrivers: [
    {
      title: 'IDA stamp as the legal clock',
      desc: 'Without the Industrial Development Authority licence the hall is not a legal plant. Soft openings slip on that paper as often as on the machine.',
    },
    {
      title: 'Contractor offtake for steel and cable',
      desc: 'Ezz and Elsewedy already sell into domestic and regional packages. A converter-only sample will miss that buyer.',
    },
    {
      title: 'Alexandria chemicals as a second map',
      desc: 'Abu Qir and SIDPEC live on the northern belt. A Tenth of Ramadan rebar tour will not explain their offtake.',
    },
    {
      title: 'Forex-linked energy and inputs',
      desc: 'Cost grids are a currency conversation. Procurement interviews that never ask the dollar line will mis-read bid gaps.',
    },
  ],
  sections: [
    {
      heading: 'Rebar hall versus carpet hall',
      paragraphs: [
        'Ezz sells tonnes to contractors. Elsewedy sells drums to utilities. Abu Qir sells nutrients. Oriental Weavers sells rolls to retailers. Those four halls need four different discussion guides. A blended “Egypt manufacturing quality” score will not survive a procurement review.',
        'Sokhna and Alexandria are different export systems. Naming “the port” without the quay is how a brief invents an offtake path the plant does not use.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who licences industrial plants in Egypt?',
      a: 'The Industrial Development Authority issues the industrial licence. GAFI issues the commercial register. Zone landlords add a third paper on Sokhna and similar plots.',
    },
    {
      q: 'Is Elsewedy part of Ezz?',
      a: 'No. Ezz is steel. Elsewedy is electrical industrial products. Keep the halls and the offtakers separate.',
    },
    {
      q: 'Which plants should a contractor-materials brief tour first?',
      a: 'Ezz Steel and Elsewedy, then selected ceramics houses. Skip SIDPEC and Oriental Weavers unless chemicals or carpets are in scope.',
    },
    {
      q: 'Which plants should a chemicals brief tour first?',
      a: 'Abu Qir Fertilizers and SIDPEC on the Alexandria belt. Add other Alex chemicals if the brief needs a second name.',
    },
    {
      q: 'How does BioNixus research Egypt manufacturers?',
      a: 'Ezz and Elsewedy plant tours; Abu Qir and SIDPEC walks; Oriental Weavers hall tours; and IDA-licence checks against the stamp the manager hangs.',
    },
    {
      q: 'Does the table rank plants by Egyptian tonnes?',
      a: 'Rows mark halls we tour, belts we walk, or the IDA desk. The list is a fieldwork map of licensed halls, not a production league.',
    },
  ],
  regulatorSource: {
    name: 'Industrial Development Authority (IDA) — industrial licences and industrial-land overlay',
    url: 'https://www.ida.gov.eg',
    asOf: '2026-09-05',
  },
  sources: [
    'Industrial Development Authority licensing guidance, consulted 2026',
    'Ezz Steel, Elsewedy Electric, Abu Qir Fertilizers, SIDPEC and Oriental Weavers operations pages',
    'SCZONE / Ain Sokhna industrial-tenant notes',
    'BioNixus Egypt plant tours, contractor and retailer procurement interviews, 2023–2026',
  ],
  fieldNotes: [
    'Paired Ezz and Elsewedy tours in the same month so rebar and cable offtake stories stay distinct.',
    'Abu Qir and SIDPEC walks on the Alexandria belt with fertilizer and polymer buyers in separate interviews.',
    'Oriental Weavers hall tours with Gulf-retailer offtake sitting apart from any contractor questionnaire.',
    'IDA-licence checks against the paper the plant manager hangs, not the brochure claim.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
