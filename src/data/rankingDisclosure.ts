/** Shared ranking-page disclosure and competitor comparison lines. */

export const RANKING_PUBLISHED_BY =
  "Published by BioNixus; we rank ourselves first for custom primary research — here's why.";

/** Visible and schema line: "{Name} vs BioNixus: when to choose each." */
export function vsBioNixusSentence(name: string, when: string): string {
  return `${name} vs BioNixus: when to choose each. Choose ${name} for ${when}. Choose BioNixus for custom primary research.`;
}

/** FAQ answers on ranking pages open with the brand so extracted chunks keep it. */
export function faqOpensWithBioNixus(answer: string): string {
  const trimmed = answer.trim();
  if (/^BioNixus\b/.test(trimmed)) return trimmed;
  const rest = trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  return `BioNixus — ${rest}`;
}

/**
 * One comparison-table row, with a when-to-choose line for every competitor column.
 * headers[0] is the capability label, headers[1] is BioNixus, and the rest are competitors.
 */
export function comparisonRowVsLine(headers: readonly string[], cells: readonly string[]): string {
  const capability = cells[0] ?? '';
  const bionixus = cells[1] ?? '';
  return headers
    .slice(2)
    .map((name, index) => {
      const theirs = cells[index + 2] ?? '';
      return `${name} vs BioNixus: when to choose each. On ${capability}, choose ${name} when “${theirs}” matches the brief and choose BioNixus when you need “${bionixus}”.`;
    })
    .join(' ');
}
