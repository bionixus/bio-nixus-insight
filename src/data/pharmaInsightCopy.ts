import type { ReportEntry, ReportFAQ } from '@/data/healthcareReportTypes';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';
import { bioNixusServicesParagraph, institutionAnchorsForMarket, isGccMarket } from '@/data/marketReportGeography';

function regShort(marketSlug: string): string {
  const body = MARKET_CONTENT[marketSlug]?.regulatoryBody;
  if (!body) return 'national regulators';
  return body.split('•')[0]?.trim() ?? body;
}

export function buildPharmaInsightAccessNotes(marketSlug: string, productLabel: string): string {
  const market = MARKET_CONTENT[marketSlug];
  const name = market?.name ?? marketSlug;
  const regulator = regShort(marketSlug);

  if (!isGccMarket(marketSlug)) {
    return `Global payer and HTA bodies continue to review cost-effectiveness dossiers for ${productLabel}. In ${name}, teams should align launch planning with ${regulator} registration requirements and local reimbursement pathways before scaling commercial investment.`;
  }

  const procurement: Record<string, string> = {
    gcc: `Within the GCC, ${productLabel} launch planning should align with SFDA and MOHAP accelerated pathways where eligible, centralized procurement (including NUPCO in Saudi Arabia), and adoption at centres such as ${institutionAnchorsForMarket('gcc')}.`,
    'saudi-arabia': `In Saudi Arabia, ${productLabel} access planning should leverage SFDA accelerated registration where eligible, NUPCO tender timelines, and early adoption protocols at ${institutionAnchorsForMarket('saudi-arabia')}.`,
    uae: `In the UAE, ${productLabel} teams should map MOHAP and emirate-level licensing, insurer prior-authorization rules, and adoption at ${institutionAnchorsForMarket('uae')}.`,
    kuwait: `In Kuwait, ${productLabel} dossiers should address NHRA requirements, MOH formulary committees, and specialist adoption at ${institutionAnchorsForMarket('kuwait')}.`,
    qatar: `In Qatar, ${productLabel} planning should align with MOPH registration, HMC formulary processes, and centres such as ${institutionAnchorsForMarket('qatar')}.`,
    bahrain: `In Bahrain, ${productLabel} access should follow NHRA registration and Salmaniya formulary coordination.`,
    oman: `In Oman, ${productLabel} access should follow MOH registration and hospital procurement at ${institutionAnchorsForMarket('oman')}.`,
    egypt: `In Egypt, ${productLabel} access should address EDA registration, UHI listing dynamics, and uptake at ${institutionAnchorsForMarket('egypt')}.`,
  };

  return `Global payer networks (including US PBMs and European HTA bodies) are reviewing evidence for ${productLabel}. ${procurement[marketSlug] ?? procurement.gcc}`;
}

export function buildPharmaInsightMethodology(marketSlug: string, therapyArea: string): string {
  const market = MARKET_CONTENT[marketSlug];
  const name = market?.name ?? marketSlug;
  return `BioNixus provides commercial launch advisory for ${therapyArea.toLowerCase()} assets in ${name}: regulator tracking, hospital and payer intelligence, physician panel mapping, and value-based access narratives. ${bioNixusServicesParagraph(marketSlug, name, therapyArea)} [Request a commercial briefing with BioNixus](/contact).`;
}

function localizePharmaFaqs(entry: ReportEntry): ReportFAQ[] {
  const name = MARKET_CONTENT[entry.marketSlug]?.name ?? entry.market;
  const productLabel = entry.title.split(' Q2')[0]?.split(' Q1')[0] ?? entry.title;
  return entry.faqs.map((faq) => {
    let question = faq.question;
    let answer = faq.answer;
    if (/GCC market access and NUPCO tendering/i.test(faq.question)) {
      question = `How will the approval of ${productLabel} affect market access in ${name}?`;
      answer = isGccMarket(entry.marketSlug)
        ? `For ${name}, this approval triggers localized access workflows under ${regShort(entry.marketSlug)}. Procurement and formulary decisions should be tracked at ${institutionAnchorsForMarket(entry.marketSlug)}—not assumed from other countries' tender calendars.`
        : `For ${name}, access planning should follow ${regShort(entry.marketSlug)} registration and national reimbursement rules relevant to this asset.`;
    }
    return { ...faq, question, answer };
  });
}

function localizePharmaSummary(text: string, marketName: string): string {
  return text
    .replace(
      /with specific commercial emphasis on the high-value GCC expansion region\.?/gi,
      `with commercial emphasis on ${marketName} registration, reimbursement, and launch requirements.`,
    )
    .replace(/high-value GCC expansion region/gi, `${marketName} market priorities`);
}

function scrubPharmaBodyText(text: string, marketSlug: string): string {
  if (marketSlug === 'gcc' || marketSlug === 'saudi-arabia') {
    return text;
  }
  return text
    .replace(
      /Within the GCC, regulatory affairs teams should leverage the \*\*SFDA Accelerated Registration\*\* pathway in Saudi Arabia and the \*\*MOHAP Fast-Track\*\* program in the UAE[^.]*\./gi,
      '',
    )
    .replace(/Centralized procurement will run through centralized public tenders managed by \*\*NUPCO\*\* in KSA[^.]*\./gi, '')
    .replace(/spanning NUPCO tender dossier preparation, SFDA fast-track regulatory tracking/gi, 'spanning localized regulatory tracking and hospital access intelligence')
    .replace(/detailing the GCC market dynamics/gi, `detailing ${marketSlug.replace(/-/g, ' ')} market dynamics`);
}

const PHARMA_SOURCE_DEFAULT = 'Company disclosure / BioNixus synthesis';

export function localizePharmaInsightEntry(entry: ReportEntry): ReportEntry {
  const productLabel = entry.title.split(' Q2')[0]?.split(' Q1')[0] ?? entry.title;
  const marketName = MARKET_CONTENT[entry.marketSlug]?.name ?? entry.market;
  const scrub = (t: string) => scrubPharmaBodyText(t, entry.marketSlug);
  return {
    ...entry,
    stat1Source: entry.stat1Source ?? PHARMA_SOURCE_DEFAULT,
    stat2Source: entry.stat2Source ?? PHARMA_SOURCE_DEFAULT,
    stat3Source: entry.stat3Source ?? PHARMA_SOURCE_DEFAULT,
    sourceNotes: entry.sourceNotes?.length ? entry.sourceNotes : [PHARMA_SOURCE_DEFAULT],
    summaryPara1: localizePharmaSummary(entry.summaryPara1, marketName),
    summaryPara2: scrub(entry.summaryPara2),
    marketAccessNotes: buildPharmaInsightAccessNotes(entry.marketSlug, productLabel),
    fieldIntelligenceParagraph: scrub(entry.fieldIntelligenceParagraph),
    commercialOutlookParagraph: scrub(entry.commercialOutlookParagraph),
    methodologyParagraph: buildPharmaInsightMethodology(entry.marketSlug, entry.therapyArea),
    faqs: localizePharmaFaqs(entry),
  };
}

export function localizePharmaInsightEntries(entries: ReportEntry[]): ReportEntry[] {
  return entries.map(localizePharmaInsightEntry);
}
