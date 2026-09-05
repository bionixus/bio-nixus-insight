import type { DirectoryPageInput } from '../../types';

export const hotelGroupsUae: DirectoryPageInput = {
  entity: 'hotel-groups',
  countrySlug: 'uae',
  title: 'Hotel groups in the UAE: Jumeirah, DTCM (2026)',
  metaDescription:
    'UAE hotel groups: Jumeirah, Emaar Hospitality, Rotana, Marriott, Hilton, IHG, Accor, Kerzner — DTCM licences, Dubai and Abu Dhabi keys.',
  introLead:
    'A Palm suite and a Yas midscale room do not share a tourism licence: Dubai’s Department of Economy and Tourism stamps one file, Abu Dhabi’s Department of Culture and Tourism stamps the other, and a group that is dense on Sheikh Zayed Road can still be thin on the Corniche.',
  introRest:
    'Jumeirah Group and Emaar Hospitality are the two Dubai-owner operators BioNixus mystery-shops when a brief asks who actually sets the luxury rate on the creek or downtown. Rotana and Millennium take the regional mid-to-upper slice that corporate travel managers still name after the global flags. Marriott, Hilton, IHG and Accor hold the multinational keys; Atlantis / Kerzner is the destination operator that a Palm or a Yas brief cannot skip. DTCM is the Dubai tourism desk that issues hotel classifications and many of the statistics owners quote. This directory is an account map of those groups and the two emirate tourism desks. It is not a room-night ranking of every boutique on Al Seef.',
  stats: [
    { value: '2 tourism desks', label: 'DTCM versus Abu Dhabi DCT — the pair that still split hotel classification and many event permits' },
    { value: 'Owner-ops', label: 'Jumeirah and Emaar Hospitality as Dubai-owner operators, not as franchise flags on someone else’s asset' },
    { value: 'Palm / Yas', label: 'Two destination geographies whose operators do not share a revenue-management meeting' },
    { value: 'Corporate midscale', label: 'Rotana and Millennium books that travel managers still quote after the four global flags' },
  ],
  channelHeading: 'How an emirate tourism class becomes a bookable key',
  channelBody:
    'A hotel’s trade licence sits with the emirate economic department. Classification and many tourism permits sit with DTCM in Dubai or DCT in Abu Dhabi. Those stamps do not travel. A Jumeirah asset on the creek is a Dubai file; a Hilton on the Corniche is a capital file. Operators then split by contract type. Jumeirah and Emaar Hospitality often own or control the asset. Marriott, Hilton, IHG and Accor more often manage or franchise someone else’s building — including Emaar or a family landlord. Rotana and Millennium sit in between: regional brands on a mix of owned, managed and franchised keys. Kerzner’s Atlantis is a destination P&L that sells the park and the beach as much as the room. Corporate offtake — banks, energy companies, airline crews — still books through a travel-management company that has already shortlisted flags by rate and loyalty. BioNixus therefore designs a UAE hotel study around the emirate stamp, the owner-versus-operator contract and the named corporate booker, not around a federal “available rooms” cell.',
  companies: [
    {
      name: 'Jumeirah Group',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Luxury owner-operator, creek and beach icons',
      notes: 'The Dubai luxury name corporate and leisure briefs still start with; capital-city density is a different conversation.',
    },
    {
      name: 'Emaar Hospitality Group',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Downtown, hills and creek hotels on Emaar assets',
      notes: 'Owner-adjacent operator; many keys sit on Emaar land even when a global flag also appears on the canopy.',
    },
    {
      name: 'Rotana',
      hq: 'Abu Dhabi',
      type: 'Regional',
      focus: 'Upper-midscale and lifestyle keys across the Emirates',
      notes: 'Capital-rooted regional flag that travel managers still name after Marriott and Hilton on a midscale RFP.',
    },
    {
      name: 'Millennium Hotels and Resorts',
      hq: 'Dubai / London',
      type: 'Regional',
      focus: 'Midscale and upper-midscale managed keys',
      notes: 'The other regional book corporate travel still quotes; do not fold it into a Jumeirah luxury sample.',
    },
    {
      name: 'Marriott International — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Full-service, select-service and luxury flags',
      notes: 'Widest global-flag density; confirm whether the asset is managed or franchised before treating the GM as the owner.',
    },
    {
      name: 'Hilton — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Full-service and select-service flags',
      notes: 'Second global density play; Yas and Palm assets are different P&Ls from a Sheikh Zayed Road business hotel.',
    },
    {
      name: 'IHG Hotels & Resorts — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Crowne Plaza, InterContinental and Holiday Inn families',
      notes: 'Corporate midscale-to-upper book; airline crews and energy travelers still appear in the mix.',
    },
    {
      name: 'Accor — UAE',
      hq: 'Dubai',
      type: 'MNC',
      focus: 'Luxury through economy flags',
      notes: 'The group that can put a luxury key and an ibis on the same brief; sample those brands as separate products.',
    },
    {
      name: 'Atlantis / Kerzner International',
      hq: 'Dubai (Palm) / Abu Dhabi (Yas)',
      type: 'Operator',
      focus: 'Destination resorts with park and beach attach',
      notes: 'Not a city business hotel; leisure and MICE offtake here does not behave like a Downtown flag.',
    },
    {
      name: 'Department of Economy and Tourism (DTCM)',
      hq: 'Dubai',
      type: 'Government',
      focus: 'Dubai hotel classification, tourism permits and published statistics',
      notes: 'The Dubai stamp a creek hotel cannot skip; it does not classify a Corniche key.',
    },
    {
      name: 'Abu Dhabi Department of Culture and Tourism',
      hq: 'Abu Dhabi',
      type: 'Government',
      focus: 'Capital hotel classification and tourism permits',
      notes: 'The capital twin of DTCM; briefs that only quote Dubai statistics will under-cover Yas and Saadiyat.',
    },
    {
      name: 'Address Hotels + Resorts',
      hq: 'Dubai',
      type: 'Local',
      focus: 'Emaar luxury and upper-upscale keys',
      notes: 'Emaar Hospitality’s luxury canopy; mystery shops should treat Address and a Marriott on the same plot as two contracts.',
    },
    {
      name: 'First Group / selected Dubai operators',
      hq: 'Dubai',
      type: 'Operator',
      focus: 'Serviced apartments and selected hotel operations',
      notes: 'The apartment-hotel slice corporate travel sometimes prefers to a full-service flag; useful on extended-stay briefs.',
    },
    {
      name: 'Sharjah Commerce and Tourism Development Authority',
      hq: 'Sharjah',
      type: 'Government',
      focus: 'Northern-emirate hotel classification',
      notes: 'Third desk for briefs that spill into Sharjah family hotels; Dubai licences do not cover those keys.',
    },
  ],
  categoryBlurbs: {
    local:
      'Jumeirah, Emaar Hospitality and Address — Dubai-owner operators that still set the luxury conversation on creek and downtown assets.',
    mnc:
      'Marriott, Hilton, IHG and Accor as managed or franchised flags. The research question is the contract type and the emirate, not the canopy logo alone.',
    regional:
      'Rotana and Millennium take the mid-to-upper corporate slice that travel managers still quote after the four globals.',
    trade:
      'DTCM, Abu Dhabi DCT and Sharjah CTDA as the classification desks, plus Kerzner and apartment-hotel operators as destination or extended-stay offtake.',
  },
  growthDrivers: [
    {
      title: 'Emirate-split tourism stamps',
      desc: 'A DTCM class is not a DCT class. Corporate RFPs that force one national rate will lose the capital or the creek, depending on who wrote the grid.',
    },
    {
      title: 'Owner-operator versus franchise flag',
      desc: 'Jumeirah owns the conversation on its icons. Marriott often manages someone else’s building. Mystery shops that only meet the flag GM will miss the landlord.',
    },
    {
      title: 'Destination attach at Palm and Yas',
      desc: 'Kerzner sells the park and the beach. Downtown flags sell the room and the meeting. Those P&Ls do not share a revenue meeting.',
    },
    {
      title: 'Corporate TMC shortlists',
      desc: 'Banks and energy companies still book through a travel-management company that has already cut the flag list. Sampling only leisure OTAs under-reads that book.',
    },
  ],
  sections: [
    {
      heading: 'Creek luxury versus capital midscale',
      paragraphs: [
        'Jumeirah and Address set Dubai luxury. Rotana and the global midscale flags set much of Abu Dhabi’s corporate mix. A mystery-shop programme that only sleeps on the Palm will invent a “UAE hotel” quality score the capital travel manager will not recognise.',
        'Serviced apartments — First Group and peers — take extended-stay offtake that a one-night leisure survey never sees. Energy and construction crews live there. Include them when the brief is corporate housing, not honeymoon.',
      ],
    },
  ],
  faq: [
    {
      q: 'Who classifies hotels in the UAE?',
      a: 'DTCM in Dubai, DCT in Abu Dhabi, and the Sharjah tourism authority in the north. A Dubai class does not cover a Corniche key.',
    },
    {
      q: 'Is Emaar Hospitality the same as a Marriott on an Emaar plot?',
      a: 'Not always. Emaar may own the land and still let a global flag manage. Ask who holds the land title before treating the flag GM as the landlord.',
    },
    {
      q: 'Which groups should a luxury brief name first?',
      a: 'Jumeirah, Address / Emaar Hospitality, Kerzner’s Atlantis, then the luxury slices of Marriott, Hilton and Accor. Skip Millennium unless midscale is in scope.',
    },
    {
      q: 'Why do Rotana and Millennium appear beside the globals?',
      a: 'Travel managers still put them on midscale RFPs. A study that only shops Marriott and Hilton will under-read that regional book.',
    },
    {
      q: 'How does BioNixus research UAE hotel groups?',
      a: 'Paired Dubai–Abu Dhabi mystery stays; procurement interviews with TMC and energy travel managers; and classification checks against the DTCM or DCT stamp.',
    },
    {
      q: 'Does the table rank groups by room count?',
      a: 'Rows mark operators we stay in, owners we interview, or the tourism desk. They do not claim a league of keys.',
    },
  ],
  regulatorSource: {
    name: 'Dubai Department of Economy and Tourism (DTCM) — hotel classification, tourism permits and statistics',
    url: 'https://www.dubaitourism.gov.ae',
    asOf: '2026-09-05',
  },
  sources: [
    'DTCM hotel-classification and tourism-permit pages, consulted 2026',
    'Abu Dhabi Department of Culture and Tourism public hotel guidance',
    'Group pages for Jumeirah, Emaar Hospitality, Rotana, Marriott, Hilton, IHG, Accor and Kerzner',
    'BioNixus UAE hotel mystery stays and corporate-travel interviews, 2023–2026',
  ],
  fieldNotes: [
    'Paired mystery stays on a Jumeirah creek key and a Rotana capital key in the same week.',
    'TMC procurement interviews in Dubai and Abu Dhabi on why a national RFP still splits by emirate.',
    'DTCM and DCT classification checks against the star claim printed on the booking engine.',
    'Atlantis Palm versus Downtown flag attach interviews that separate park-and-beach offtake from room-only corporate.',
  ],
  publishedDate: '2026-09-05',
  modifiedDate: '2026-09-05',
};
