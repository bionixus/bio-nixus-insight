import type { ReportFAQ } from '@/data/healthcareReportTypes';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';
import { bioNixusServicesParagraph, isGccMarket } from '@/data/marketReportGeography';

/** Non-GCC countries where a separate GCC/MENA expansion FAQ is appropriate. */
export const STANDALONE_EXPORT_HUB_SLUGS = new Set([
  'turkey',
  'uk',
  'germany',
  'france',
  'italy',
  'spain',
  'usa',
  'canada',
  'brazil',
  'india',
  'china',
  'japan',
  'south-korea',
  'australia',
  'singapore',
]);

function marketName(slug: string): string {
  return MARKET_CONTENT[slug]?.name ?? slug.replace(/-/g, ' ');
}

function bioNixusStandaloneLocalAnswer(marketSlug: string, vertical: 'healthcare' | 'medical-devices'): string {
  const name = marketName(marketSlug);
  const focus = vertical === 'healthcare' ? 'pharmaceutical and healthcare' : 'medical device';
  if (isGccMarket(marketSlug)) {
    return bioNixusServicesParagraph(marketSlug, name, 'Healthcare and life sciences');
  }
  return `BioNixus delivers ${focus} market research in ${name}: regulator-aware access intelligence, hospital consumption analogues, physician and payer qualitative programmes, and launch evidence under EphMRA and BHBIA governance with GDPR-aligned fieldwork for multinational sponsors. Teams receive decision-ready outputs validated against national policy and institution-level adoption—not desk extrapolation from unrelated regions.`;
}

function bioNixusGccExpansionAnswer(marketSlug: string, vertical: 'healthcare' | 'medical-devices'): string {
  const name = marketName(marketSlug);
  const focus = vertical === 'healthcare' ? 'pharmaceutical' : 'medical device';
  return `BioNixus supports ${name}-based ${focus} companies expanding into GCC and MENA markets with SFDA and MOHAP regulatory intelligence, NUPCO and hospital procurement tracking in Saudi Arabia, UAE insurer and formulary research, physician panels across GCC countries, and comparative ${name} versus GCC market intelligence. GCC expansion is a distinct service line with its own tender and access calendars—see our GCC pharmaceutical market report for regional context. Launch assumptions should be validated market by market rather than from a single Gulf average.`;
}

/** Remove duplicate BioNixus / GCC-expansion FAQs and append market-accurate replacements. */
export function finalizeStandaloneHealthcareFaqs(baseFaqs: ReportFAQ[], marketSlug: string): ReportFAQ[] {
  const core = baseFaqs.filter(
    (f) =>
      !/^How does BioNixus /i.test(f.question) &&
      !/expanding (to|into) (MENA|GCC)/i.test(f.question),
  );
  const name = marketName(marketSlug);
  const result: ReportFAQ[] = [
    ...core,
    {
      question: `How does BioNixus support healthcare market research in ${name}?`,
      answer: bioNixusStandaloneLocalAnswer(marketSlug, 'healthcare'),
    },
  ];
  if (STANDALONE_EXPORT_HUB_SLUGS.has(marketSlug)) {
    result.push({
      question: `How does BioNixus help ${name}-based companies expand into GCC and MENA?`,
      answer: bioNixusGccExpansionAnswer(marketSlug, 'healthcare'),
    });
  }
  return result;
}

export function finalizeStandaloneMedDeviceFaqs(baseFaqs: ReportFAQ[], marketSlug: string): ReportFAQ[] {
  const core = baseFaqs.filter(
    (f) =>
      !/^How does BioNixus /i.test(f.question) &&
      !/expanding (to|into) (MENA|GCC)/i.test(f.question),
  );
  const name = marketName(marketSlug);
  const result: ReportFAQ[] = [
    ...core,
    {
      question: `How does BioNixus support medical device market research in ${name}?`,
      answer: bioNixusStandaloneLocalAnswer(marketSlug, 'medical-devices'),
    },
  ];
  if (STANDALONE_EXPORT_HUB_SLUGS.has(marketSlug)) {
    result.push({
      question: `How does BioNixus help ${name}-based medical device companies expand into GCC and MENA?`,
      answer: bioNixusGccExpansionAnswer(marketSlug, 'medical-devices'),
    });
  }
  return result;
}
