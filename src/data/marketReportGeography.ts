/** Shared geography rules for programmatic and standalone market reports. */

export const GCC_MARKET_SLUGS = new Set([
  'gcc',
  'saudi-arabia',
  'uae',
  'kuwait',
  'qatar',
  'bahrain',
  'oman',
  'egypt',
]);

export function isGccMarket(marketSlug: string): boolean {
  return GCC_MARKET_SLUGS.has(marketSlug);
}

/** Lowercase tokens that must not appear in visible copy for a given primary market (body text, not cross-link URLs). */
export const FORBIDDEN_BODY_TOKENS: Record<string, readonly string[]> = {
  turkey: ['nupco', 'hamad medical', 'mohap', 'sfda', '57357', 'cairo nci', 'gcc and cairo', 'pilgrimage seasonal care displacement'],
  uk: ['nupco', 'sgk sut', 'titck', 'mohap', 'hamad medical', '57357'],
  germany: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk'],
  usa: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk', 'titck'],
  canada: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk', 'titck'],
  australia: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk'],
  japan: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk', 'nice '],
  china: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk'],
  india: ['nupco', 'sfda', 'mohap', 'hamad medical'],
  brazil: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk'],
  'south-korea': ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk'],
  singapore: ['nupco', 'sfda', 'mohap', 'hamad medical', 'sgk'],
  'saudi-arabia': ['titck', 'sgk sut', 'pbac', 'nice technology appraisal', 'hamad medical'],
  uae: ['nupco', 'sfda', 'sgk', 'titck'],
  egypt: ['nupco', 'sfda', 'mohap', 'titck'],
  kuwait: ['nupco', 'sfda', 'mohap', 'titck', 'sgk'],
  qatar: ['nupco', 'sfda', 'mohap', 'titck', 'sgk'],
  bahrain: ['nupco', 'sfda', 'mohap', 'titck', 'sgk'],
  oman: ['nupco', 'sfda', 'mohap', 'titck', 'sgk'],
  gcc: ['titck', 'sgk sut', 'pbac', 'nice technology appraisal'],
};

export function stripMarkdownLinksForGeographyCheck(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/https?:\/\/[^\s)]+/g, '');
}

export function findForbiddenGeographyTokens(marketSlug: string, text: string): string[] {
  const rules = FORBIDDEN_BODY_TOKENS[marketSlug];
  if (!rules?.length) return [];
  const normalized = stripMarkdownLinksForGeographyCheck(text).toLowerCase();
  return rules.filter((token) => normalized.includes(token));
}

export function institutionAnchorsForMarket(marketSlug: string): string {
  const m: Record<string, string> = {
    gcc:
      'King Faisal Specialist Hospital & Research Center in Riyadh, Cleveland Clinic Abu Dhabi, Hamad Medical Corporation National Center for Cancer Care and Research, Kuwait Cancer Control Centre, and leading tertiary centres across the Gulf.',
    'saudi-arabia':
      'King Faisal Specialist Hospital & Research Center, NGHA oncology towers, and Vision 2030 cancer centre networks in Riyadh and Jeddah.',
    uae:
      'Cleveland Clinic Abu Dhabi, Mediclinic City Hospital Dubai, and Sheikh Shakhbout Medical City Abu Dhabi.',
    kuwait: 'Kuwait Cancer Control Centre, Ibn Sina Hospital, and Al Sabah specialty oncology hubs.',
    qatar: 'Hamad Medical Corporation, Sidra Medicine, and National Center for Cancer Care and Research.',
    bahrain: 'King Hamad University Hospital and Salmaniya Medical Complex oncology coordinating councils.',
    oman: 'The Royal Hospital Muscat, Sultan Qaboos University Hospital, and National Oncology Centre.',
    egypt:
      "National Cancer Institute Cairo, Children's Cancer Hospital Egypt (57357), and major private oncology pathways in Cairo.",
    turkey:
      'Hacettepe University Hospital Ankara, Istanbul university hospital networks, and Gaziantep tertiary referral corridors.',
    uk: 'The Christie NHS Foundation Trust, Royal Marsden, and major London oncology centres.',
    germany: 'Charité Berlin, University Hospital Heidelberg, and leading German oncology centres of excellence.',
    france: 'Institut Gustave Roussy, Centre Léon Bérard, and AP-HP tertiary oncology networks.',
    italy: 'Istituto Nazionale Tumori Milan, IRCCS networks, and major university hospital oncology units.',
    spain: 'Hospital Clínic Barcelona, MD Anderson Madrid, and regional oncology institute networks.',
    usa: 'MD Anderson, Memorial Sloan Kettering, and NCI-designated comprehensive cancer centres.',
    canada: 'Princess Margaret Cancer Centre, BC Cancer, and provincial oncology institute networks.',
    brazil: 'Hospital Sírio-Libanês, INCA Rio, and major São Paulo oncology institutes.',
    india: 'Tata Memorial Centre, AIIMS Delhi, and leading private oncology hospital chains.',
    china: 'Peking University Cancer Hospital, Fudan Shanghai Cancer Center, and tier-1 provincial oncology centres.',
    japan: 'National Cancer Center Japan, University of Tokyo Hospital, and designated cancer care hospitals.',
    'south-korea': 'Seoul National University Hospital, Yonsei Severance, and Korean National Cancer Center.',
    australia: 'Peter MacCallum Cancer Centre, Chris O’Brien Lifehouse, and major state oncology networks.',
    singapore: 'National Cancer Centre Singapore, Singapore General Hospital, and private oncology hospitals.',
  };
  return m[marketSlug] ?? `leading tertiary hospitals and specialist centres in ${marketSlug.replace(/-/g, ' ')}`;
}

export function marketComparisonFraming(marketSlug: string, marketName: string, region: string): string {
  if (isGccMarket(marketSlug)) {
    return `Compared with peer GCC and wider MENA markets tracked in BioNixus hospital consumption analogue panels at flagship centres including ${institutionAnchorsForMarket(marketSlug)}, therapeutic intensity per diagnosed patient reflects local payer rules, tender cadence, and referral concentration—not a single Gulf average.`;
  }
  if (marketSlug === 'turkey') {
    return `Compared with EU-adjacent and selected MENA bridge markets, ${marketName} uptake is shaped by TİTCK registration timing, SGK SUT listing cycles, and public versus private hospital mix—including centres such as ${institutionAnchorsForMarket(marketSlug)}.`;
  }
  if (region.includes('Europe') || ['uk', 'germany', 'france', 'italy', 'spain'].includes(marketSlug)) {
    return `Compared with EU5 and regional analogues, ${marketName} adoption pacing at institutions such as ${institutionAnchorsForMarket(marketSlug)} depends on HTA or national formulary decisions, not GCC tender mechanics.`;
  }
  if (['usa', 'canada'].includes(marketSlug)) {
    return `Compared with North American analogues, ${marketName} volume and access reflect payer mix, specialty pharmacy rules, and centre-of-excellence concentration at networks such as ${institutionAnchorsForMarket(marketSlug)}.`;
  }
  return `Compared with ${region} peer markets, ${marketName} demand signals are validated against institution-level adoption at ${institutionAnchorsForMarket(marketSlug)} and national payer pathways—not unrelated regional procurement systems.`;
}

function gccProcurementPhrase(marketSlug: string, marketName: string): string {
  const phrases: Record<string, string> = {
    gcc: 'GCC-wide procurement including NUPCO (Saudi Arabia), MOHAP and insurer pathways (UAE), and hospital global-budget rules in Qatar and Kuwait',
    'saudi-arabia': 'NUPCO centralized awards, SFDA pricing, and MOH versus private hospital channel splits in Saudi Arabia',
    uae: 'MOHAP licensing, DHA and DOH prior-authorization stacks, and private hospital tier dynamics in the UAE',
    kuwait: 'MOH formulary committees, NHRA registration, and insurer stop-loss rules in Kuwait',
    qatar: 'MOPH registration, HMC formulary processes, and sovereign procurement cadence in Qatar',
    bahrain: 'NHRA registration and Salmaniya formulary coordination in Bahrain',
    oman: 'MOH registration and hospital procurement at The Royal Hospital and national centres in Oman',
    egypt: 'EDA registration, UHI listing expansion, and MOH versus private hospital buying in Egypt',
  };
  return phrases[marketSlug] ?? `national procurement and payer rules in ${marketName}`;
}

export function bioNixusServicesParagraph(marketSlug: string, marketName: string, therapyName: string): string {
  const therapyLower = therapyName.toLowerCase();
  if (isGccMarket(marketSlug)) {
    return `BioNixus delivers longitudinal hospital consumption analogue analytics, payer and formulary committee qualitative boards, bilingual HCP trackers where relevant, tender and access intelligence aligned to ${gccProcurementPhrase(marketSlug, marketName)}, KOL mapping, and adoption modelling for ${therapyLower}. Teams receive decision-ready outputs cross-validated against EphMRA and BHBIA governance with GDPR-aligned multinational fieldwork coordinated from London and regional hubs.`;
  }
  const local: Record<string, string> = {
    turkey: `BioNixus supports ${therapyLower} teams in ${marketName} with TİTCK dossier tracking, SGK SUT and hospital procurement intelligence, physician and payer qualitative research, and consumption analogue panels at Turkish tertiary centres. Deliverables follow EphMRA and BHBIA standards with GDPR-aligned governance for multinational sponsors.`,
    uk: `BioNixus supports ${therapyLower} teams in ${marketName} with MHRA and NICE/ICB-aware access research, NHS and private hospital consumption analogues, specialist qualitative depth, and launch sequencing evidence. Methodology aligns with EphMRA, BHBIA, and GDPR requirements.`,
    germany: `BioNixus supports ${therapyLower} teams in ${marketName} with G-BA and AMNOG-aware evidence planning, statutory sickness fund formulary intelligence, and hospital analogue panels at German tertiary centres—under EphMRA/BHBIA governance.`,
    usa: `BioNixus supports ${therapyLower} teams in ${marketName} with payer and IDN formulary intelligence, specialty pharmacy dynamics research, and hospital consumption analogues—aligned to ICC/ESOMAR and US privacy norms for multinational programmes.`,
    canada: `BioNixus supports ${therapyLower} teams in ${marketName} with CADTH/pCPA-aware access research, provincial formulary tracking, and specialist adoption studies under BHBIA-aligned governance.`,
    australia: `BioNixus supports ${therapyLower} teams in ${marketName} with TGA, PBAC, and MBS-aware access research, hospital consumption analogues, and specialist adoption tracking.`,
    japan: `BioNixus supports ${therapyLower} teams in ${marketName} with PMDA and Chuikyo reimbursement intelligence, hospital consumption analogues, and specialist adoption research.`,
    china: `BioNixus supports ${therapyLower} teams in ${marketName} with NRDL/VBP-aware access intelligence and hospital adoption research for multinational portfolio teams.`,
    india: `BioNixus supports ${therapyLower} teams in ${marketName} with CDSCO registration context, tender and private hospital intelligence, and physician adoption research.`,
    brazil: `BioNixus supports ${therapyLower} teams in ${marketName} with ANVISA and SUS/ANS reimbursement intelligence and hospital adoption analogues.`,
    'south-korea': `BioNixus supports ${therapyLower} teams in ${marketName} with MFDS and NHIS/HIRA listing intelligence and tertiary hospital adoption research.`,
    singapore: `BioNixus supports ${therapyLower} teams in ${marketName} with HSA and ACE HTA-aware access research and public-private hospital intelligence.`,
  };
  return (
    local[marketSlug] ??
    `BioNixus supports ${therapyLower} teams in ${marketName} with regulator-aware access research, hospital consumption analogues, payer and specialist qualitative depth, and launch evidence under EphMRA and BHBIA governance.`
  );
}

export function procurementSnippet(marketSlug: string, marketName: string): string {
  const m: Record<string, string> = {
    gcc: `Procurement across ${marketName} combines centralized Gulf tenders, insurer prior-authorization stacks, and hospital global-budget carve-outs.`,
    'saudi-arabia': `Procurement in ${marketName} is shaped by NUPCO centralized awards, SFDA pricing rules, and MOH versus private hospital channel splits.`,
    uae: `Procurement in ${marketName} varies by DHA, DOH, and MOHAP pathways, with insurer step therapy and private hospital premium tiers.`,
    egypt: `Procurement in ${marketName} combines UHI expansion, MOH hospital buying, and private payer supplemental riders.`,
    turkey: `Procurement in ${marketName} is driven by SGK SUT listings, TİTCK pricing, and annual hospital chain rebate negotiations—not Gulf centralized tender bodies.`,
    uk: `Procurement in ${marketName} flows through NHS England commercial agreements, NICE implementation, and ICB formulary decisions.`,
    germany: `Procurement in ${marketName} follows GKV sickness fund negotiations and hospital pharmacy tendering under AMNOG price rules.`,
    usa: `Procurement in ${marketName} reflects Medicare/Medicaid coverage, commercial PBM stacks, and IDN formulary committees.`,
    canada: `Procurement in ${marketName} uses CADTH recommendations, pCPA negotiations, and provincial formulary implementation.`,
    australia: `Procurement in ${marketName} is governed by PBAC listings, MBS items, and state hospital formulary decisions.`,
    japan: `Procurement in ${marketName} follows Chuikyo listing, prefectural hospital buying, and manufacturer price revisions.`,
  };
  return (
    m[marketSlug] ??
    `Procurement and payer mechanics in ${marketName} combine national reimbursement rules, hospital formulary decisions, and specialist advocacy dossiers.`
  );
}

export function operationsSnippet(marketSlug: string, marketName: string): string {
  if (isGccMarket(marketSlug)) {
    return `Operational deliverables include multilingual HCP trackers (EphMRA / BHBIA aligned), formulary uplift simulation boards, tender calendars where applicable, and cold-chain SLA review tied to procurement artefacts in ${marketName}.`;
  }
  return `Operational deliverables for ${marketName} include specialist HCP trackers, formulary and access simulation boards, and hospital consumption panels aligned to EphMRA / BHBIA governance—not desk extrapolation from unrelated regions.`;
}

export function adoptionContextSnippet(marketSlug: string, marketName: string, therapyArea: string): string {
  const seasonal = isGccMarket(marketSlug)
    ? ' Ramadan and pilgrimage seasonal care patterns are modelled where they affect adherence and clinic throughput.'
    : '';
  return `Class-level ${therapyArea} adoption in ${marketName} depends on genomic eligibility throughput, inpatient versus ambulatory initiation, pharmacist substitution rules, and institution-level protocol activation.${seasonal}`;
}
