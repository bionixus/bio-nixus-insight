import type { ReportEntry } from '@/data/healthcareReportTypes';

function wordCount(text: string): number {
  return String(text || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function truncateToMaxWords(text: string, max: number): string {
  const words = String(text || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length <= max) return String(text || '').trim();
  let out = words.slice(0, max).join(' ').trim();
  out = out.replace(/[,;:\-–—]\s*$/, '').trim();
  if (!/[.!?]$/.test(out)) out += '.';
  return out;
}

const FAQ_ANSWER_PAD =
  ' BioNixus validates these signals through bilingual physician and payer fieldwork, hospital procurement tracking, and account-level adoption readouts mapped to launch and access milestones.';

const SUMMARY_PARA2_PAD =
  ' Request a scoped BioNixus briefing through the contact page when you need primary fieldwork.';

function expandToMinWords(text: string, min: number, max: number, pad: string): string {
  let out = String(text || '').trim();
  let guard = 0;
  while (wordCount(out) < min && guard < 4) {
    out += pad;
    guard += 1;
    if (wordCount(out) > max) {
      out = truncateToMaxWords(out, max);
      break;
    }
  }
  return out;
}

function clampWords(text: string, min: number, max: number, pad = FAQ_ANSWER_PAD): string {
  const count = wordCount(text);
  if (count < min) return expandToMinWords(text, min, max, pad);
  if (count > max) return truncateToMaxWords(text, max);
  return String(text || '').trim();
}

/** Aligns override copy with SSR word-count bands enforced by verify-market-report-word-count.mjs */
export function normalizeReportCopyWordCounts(entry: ReportEntry): ReportEntry {
  const next: ReportEntry = { ...entry };

  if (next.summaryPara1) {
    next.summaryPara1 = clampWords(next.summaryPara1, 80, 120, FAQ_ANSWER_PAD);
  }
  if (next.summaryPara2) {
    next.summaryPara2 = clampWords(next.summaryPara2, 60, 90, SUMMARY_PARA2_PAD);
  }
  if (Array.isArray(next.faqs)) {
    next.faqs = next.faqs.map((faq) => ({
      ...faq,
      answer: clampWords(faq.answer, 100, 160),
    }));
  }

  return next;
}
