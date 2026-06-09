/** Non-repeating prose expansion for programmatic report word-count targets. */

function normalizeSentence(s: string): string {
  return s
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '');
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Split text into sentences (simple boundary on . ! ?). */
export function splitSentences(text: string): string[] {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  if (!trimmed) return [];
  const parts = trimmed.split(/(?<=[.!?])\s+/);
  return parts.map((p) => p.trim()).filter(Boolean);
}

/** Returns duplicate normalized sentences found in text (empty if none). */
export function findDuplicateSentences(text: string): string[] {
  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const s of splitSentences(text)) {
    const key = normalizeSentence(s);
    if (!key || key.length < 12) continue;
    if (seen.has(key)) dupes.push(s);
    else seen.add(key);
  }
  return dupes;
}

/** Remove consecutive duplicate sentences (keeps first occurrence). */
export function dedupeSentences(text: string): string {
  const sentences = splitSentences(text);
  const seen = new Set<string>();
  const kept: string[] = [];
  for (const s of sentences) {
    const key = normalizeSentence(s);
    if (key && seen.has(key)) continue;
    if (key) seen.add(key);
    kept.push(s);
  }
  return kept.join(' ');
}

function trimToMaxAtSentenceBoundary(text: string, max: number): string {
  if (wordCount(text) <= max) return text;
  const sentences = splitSentences(text);
  if (sentences.length === 0) return text;

  let result = '';
  for (const s of sentences) {
    const candidate = result ? `${result} ${s}` : s;
    if (wordCount(candidate) <= max) {
      result = candidate;
      continue;
    }
    const remaining = max - wordCount(result);
    if (remaining > 0) {
      const words = s.split(/\s+/).filter(Boolean).slice(0, remaining);
      const partial = words.join(' ');
      result = result ? `${result} ${partial}` : partial;
      if (result && !/[.!?]$/.test(result.trim())) result += '.';
    }
    break;
  }

  if (!result && sentences[0]) {
    const words = sentences[0].split(/\s+/).filter(Boolean).slice(0, max);
    const last = words[words.length - 1] ?? '';
    if (last.endsWith(',') || last.endsWith(';')) words[words.length - 1] = last.slice(0, -1);
    if (!words[words.length - 1]?.endsWith('.')) words[words.length - 1] += '.';
    return words.join(' ');
  }
  return result;
}

/**
 * Expand base text to [min, max] words by appending distinct extra sentences.
 * Never appends the same sentence twice.
 */
export function expandToWordRange(
  base: string,
  min: number,
  max: number,
  extras: readonly string[],
): string {
  let text = dedupeSentences(base.trim().replace(/\s+/g, ' '));
  const seen = new Set(splitSentences(text).map(normalizeSentence).filter(Boolean));

  const tryAppend = (sentence: string) => {
    const trimmed = sentence.trim();
    if (!trimmed) return;
    const key = normalizeSentence(trimmed);
    if (!key || seen.has(key)) return;
    seen.add(key);
    text = text ? `${text} ${trimmed}` : trimmed;
  };

  for (const extra of extras) {
    if (wordCount(text) >= min) break;
    tryAppend(extra);
  }

  const fallbackPool = [
    'Figures and access assumptions in this briefing should be validated against current national policy, payer rules, and hospital-level evidence before commercial commitments.',
    'Leadership teams should confirm regulator gazette dates, formulary uplift timing, and institution activation capacity before acting on forecast scenarios.',
    'Cross-market comparisons in this report are illustrative until validated with local stakeholder interviews and current payer documentation.',
    'Supply, medical affairs, and access workstreams should stay aligned when policy or tender rules shift during the planning horizon.',
  ];

  for (const fallback of fallbackPool) {
    if (wordCount(text) >= min) break;
    tryAppend(fallback);
  }

  return trimToMaxAtSentenceBoundary(text, max);
}

/** Distinct FAQ padding sentences (never repeat verbatim). */
export const FAQ_EXTRAS: readonly string[] = [
  'Sensitivity to reference pricing, tender cadence, and FX-indexed net prices should be validated against live policy updates.',
  'Forecast scenarios should be stress-tested with institution-level adoption data rather than desk extrapolation from unrelated regions.',
  'BioNixus applies EphMRA and BHBIA methodological governance with GDPR-aligned HCP outreach for multinational field programmes.',
  'Hospital consumption analogue panels and payer qualitative boards are used to cross-check headline sizing before leadership sign-off.',
  'Data recency and dossier status should be confirmed at the national regulator and major formulary committees before launch planning.',
];

/** Distinct body/summary padding sentences for programmatic report paragraphs. */
export const BODY_EXTRAS: readonly string[] = [
  'This report should be interpreted alongside local policy, payer, and hospital-level evidence before final market decisions.',
  'Stakeholder interviews and current institutional policy checks remain essential where regulatory or reimbursement rules change quickly.',
  'Commercial teams should separate high-confidence adoption signals from assumptions that still require country-level validation.',
  'Scenario planning should align access sequencing, medical education, and supply readiness before full-scale investment.',
  'Methodology outputs are intended for planning and should be refreshed when national rules or tender calendars shift.',
];
