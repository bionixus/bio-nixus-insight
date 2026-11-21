/**
 * Builds the "download this list" file for company directory pages.
 *
 * The file is generated in the browser from the rows already rendered on the page,
 * so there is no public file URL for crawlers to index and no second copy of the
 * data to keep in sync. CSV with a UTF-8 byte-order mark opens directly in Excel
 * (Arabic, Turkish and accented names included) and in Google Sheets.
 */

export type DirectoryCsvInput = {
  /** First line of the file, e.g. "Pharmaceutical companies in Egypt (BioNixus, 2026)". */
  title: string;
  /** Canonical page URL, written into the file so a reused list cites its source. */
  sourceUrl: string;
  /** Date the list was last reviewed, ISO or human-readable. */
  asOf?: string;
  headers: string[];
  rows: string[][];
};

/** Why the visitor wants the list. Research and market-entry answers get the scoping-call offer after download. */
export const DIRECTORY_LIST_USES = [
  'Market research or commercial planning',
  'Market entry, partner or distributor search',
  'Sales prospecting',
  'Job search',
  'Student or academic project',
  'Other',
] as const;

/** ['Company', 'HQ', 'Type', 'Portfolio', 'Notes'] → 'HQ, type, portfolio and notes' (first column is the name). */
export function describeColumns(headers: string[]): string {
  const cols = headers.slice(1).map((h) => (h === h.toUpperCase() ? h : h.toLowerCase()));
  if (cols.length <= 1) return cols.join('');
  return `${cols.slice(0, -1).join(', ')} and ${cols[cols.length - 1]}`;
}

const UTF8_BOM = '\uFEFF';

/** Cells Excel would evaluate as a formula. Prefix them so a list cell can never run as one. */
const FORMULA_START = /^[=+\-@\t\r]/;

export function escapeCsvCell(value: string): string {
  let cell = String(value ?? '');
  if (FORMULA_START.test(cell)) cell = `'${cell}`;
  if (/[",\r\n]/.test(cell)) return `"${cell.replace(/"/g, '""')}"`;
  return cell;
}

function csvLine(cells: string[]): string {
  return cells.map(escapeCsvCell).join(',');
}

export function buildDirectoryCsv({ title, sourceUrl, asOf, headers, rows }: DirectoryCsvInput): string {
  const lines = [
    csvLine([title]),
    csvLine([`Source: ${sourceUrl}${asOf ? ` (last reviewed ${asOf})` : ''}`]),
    csvLine(['Editorial snapshot of the accounts BioNixus studies. Not a market-share ranking.']),
    '',
    csvLine(['#', ...headers]),
    ...rows.map((row, index) => csvLine([String(index + 1), ...row])),
  ];
  return `${UTF8_BOM}${lines.join('\r\n')}\r\n`;
}

/** `/pharmaceutical-companies-egypt` → `bionixus-pharmaceutical-companies-egypt.csv` */
export function directoryCsvFileName(path: string): string {
  const slug = path.replace(/^\/+|\/+$/g, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'directory';
  return `bionixus-${slug}.csv`;
}

/** Triggers a browser download of the CSV. Browser-only; no-op during SSR. */
export function downloadDirectoryCsv(fileName: string, csv: string): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
