/**
 * Reads a UTF-16 tab-separated crawl export into rows keyed by column name.
 *
 * The crawler emits UTF-16LE with quoted tab-separated fields, which neither
 * `cat` nor a naive utf8 read handles correctly.
 */
import { readFileSync } from 'fs';

/** Splits tab-separated text into rows of cells, honouring quoted cells that span newlines. */
function parseDelimited(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') inQuotes = true;
    else if (char === '\t') {
      row.push(cell);
      cell = '';
    } else if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (char !== '\r') cell += char;
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

export function readCrawlReport(path) {
  const raw = readFileSync(path);
  let text = raw.includes(0) ? raw.toString('utf16le') : raw.toString('utf8');
  text = text.replace(/^\uFEFF/, '');
  const rows = parseDelimited(text);
  if (rows.length === 0) return [];
  const headers = rows[0].map((header) => header.trim());
  return rows
    .slice(1)
    .filter((cells) => cells.some((cell) => cell.trim().length > 0))
    .map((cells) => Object.fromEntries(headers.map((header, i) => [header, (cells[i] ?? '').trim()])));
}

export const stripHost = (url) => (url || '').replace('https://www.bionixus.com', '');
