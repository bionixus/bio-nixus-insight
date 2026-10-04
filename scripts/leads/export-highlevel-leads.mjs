#!/usr/bin/env node
/**
 * Export website leads from HighLevel (LeadConnector) into data/leads/leads.csv.
 *
 * Every website form posts to /api/highlevel-lead, which tags the contact `website-lead` and writes one
 * "Website lead …" note per submission (see src/server/highlevelLead.ts). This script reads those notes,
 * so a returning contact who submits twice yields two rows.
 *
 * The CSV is committed to git, so it holds no names, emails, phones or companies — only the page, the
 * request type and the qualification answers.
 *
 * Usage:
 *   HIGHLEVEL_API_KEY=… node scripts/leads/export-highlevel-leads.mjs            # last 7 days, merge
 *   node scripts/leads/export-highlevel-leads.mjs --since=2026-09-01 --until=2026-10-04
 *   node scripts/leads/export-highlevel-leads.mjs --dry-run                       # print, don't write
 *   node scripts/leads/export-highlevel-leads.mjs --input=fixture.json            # offline: {contacts:[{id,notes:[…]}]}
 *
 * Env: HIGHLEVEL_API_KEY (or GHL_API_KEY), optional HIGHLEVEL_LOCATION_ID (or GHL_LOCATION_ID).
 * The token needs contacts.readonly scope.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', '..');
export const LEADS_CSV = path.join(root, 'data', 'leads', 'leads.csv');

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';
const DEFAULT_LOCATION_ID = 'SjwWFl3GxGB1WQ1LbzLq';
const PAGE_LIMIT = 100;
const MEETING_REQUEST_TYPE = 'scoping call request';

export const LEAD_COLUMNS = [
  'date',
  'source_page',
  'request_type',
  'meeting_request',
  'budget',
  'timeline',
  'need',
  'markets',
  'country',
  'form',
  'utm_source',
  'qualified',
  'note_id',
];

const LABEL_TO_FIELD = {
  'Request type': 'request_type',
  Form: 'form',
  Page: 'source_page',
  Markets: 'markets',
  Country: 'country',
  Timeline: 'timeline',
  Budget: 'budget',
  Need: 'need',
  'Research interest': 'need',
  Qualified: 'qualified',
  'UTM source': 'utm_source',
};

/** Parses a "Website lead …" note body into lead fields. Returns null for any other note. */
export function parseLeadNote(body) {
  if (typeof body !== 'string') return null;
  const lines = body.split(/\r?\n/);
  if (!lines[0] || !lines[0].startsWith('Website lead')) return null;
  const fields = {};
  for (const line of lines.slice(1)) {
    const idx = line.indexOf(': ');
    if (idx <= 0) continue;
    const field = LABEL_TO_FIELD[line.slice(0, idx).trim()];
    if (!field || fields[field]) continue;
    fields[field] = line.slice(idx + 2).trim();
  }
  return fields;
}

function isoDay(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
}

export function noteToRow(note) {
  const fields = parseLeadNote(note?.body);
  if (!fields) return null;
  const requestType = fields.request_type || '';
  const row = {};
  for (const col of LEAD_COLUMNS) row[col] = fields[col] || '';
  row.date = isoDay(note.dateAdded || note.createdAt);
  row.meeting_request = requestType.trim().toLowerCase() === MEETING_REQUEST_TYPE ? 'yes' : 'no';
  row.note_id = String(note.id || '');
  return row;
}

function csvCell(value) {
  const s = String(value ?? '');
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function toCsv(rows) {
  const lines = [LEAD_COLUMNS.join(',')];
  for (const row of rows) lines.push(LEAD_COLUMNS.map((col) => csvCell(row[col])).join(','));
  return `${lines.join('\n')}\n`;
}

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') inQuotes = false;
      else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += ch;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...body] = rows.filter((r) => r.some((c) => c !== ''));
  if (!header) return [];
  return body.map((cells) => Object.fromEntries(header.map((h, i) => [h, cells[i] ?? ''])));
}

/** Merges new rows into existing ones, de-duplicating on note_id, newest first. */
export function mergeRows(existing, incoming) {
  const byId = new Map();
  for (const row of [...existing, ...incoming]) {
    const key = row.note_id || `${row.date}|${row.source_page}|${row.request_type}`;
    byId.set(key, row);
  }
  return [...byId.values()].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function rowsInRange(rows, since, until) {
  return rows.filter((row) => row.date && row.date >= since && row.date <= until);
}

async function ghl(apiKey, pathname, init = {}) {
  const res = await fetch(`${GHL_BASE}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: GHL_VERSION,
      Accept: 'application/json',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }
  if (!res.ok) {
    const message = (json && (json.message || json.error)) || text.slice(0, 200);
    throw new Error(`HighLevel ${init.method || 'GET'} ${pathname.split('?')[0]} failed (${res.status}): ${message}`);
  }
  return json;
}

/** Website-lead contacts updated on or after `since`, newest first. */
async function fetchLeadContacts(apiKey, locationId, since) {
  const contacts = [];
  for (let page = 1; page <= 50; page += 1) {
    const json = await ghl(apiKey, '/contacts/search', {
      method: 'POST',
      body: JSON.stringify({
        locationId,
        page,
        pageLimit: PAGE_LIMIT,
        filters: [{ field: 'tags', operator: 'contains', value: ['website-lead'] }],
        sort: [{ field: 'dateUpdated', direction: 'desc' }],
      }),
    });
    const batch = Array.isArray(json?.contacts) ? json.contacts : [];
    contacts.push(...batch);
    const oldest = batch.at(-1);
    const oldestDay = isoDay(oldest?.dateUpdated || oldest?.dateAdded);
    if (batch.length < PAGE_LIMIT || (oldestDay && oldestDay < since)) break;
  }
  return contacts.filter((c) => isoDay(c.dateUpdated || c.dateAdded) >= since);
}

async function fetchNotes(apiKey, contactId) {
  const json = await ghl(apiKey, `/contacts/${encodeURIComponent(contactId)}/notes`);
  return Array.isArray(json?.notes) ? json.notes : [];
}

function parseArgs(argv) {
  const opt = (name) => argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
  const today = new Date().toISOString().slice(0, 10);
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
  return {
    since: opt('since') || weekAgo,
    until: opt('until') || today,
    input: opt('input'),
    dryRun: argv.includes('--dry-run'),
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let notesByContact;

  if (args.input) {
    const fixture = JSON.parse(fs.readFileSync(path.resolve(args.input), 'utf8'));
    notesByContact = (fixture.contacts || []).map((c) => c.notes || []);
  } else {
    const apiKey = (process.env.HIGHLEVEL_API_KEY || process.env.GHL_API_KEY || '').trim();
    if (!apiKey) {
      console.error('export-highlevel-leads: set HIGHLEVEL_API_KEY (contacts.readonly scope) or pass --input=<fixture.json>.');
      process.exit(1);
    }
    const rawLocation = (process.env.HIGHLEVEL_LOCATION_ID || process.env.GHL_LOCATION_ID || '').trim();
    const locationId = /^[A-Za-z0-9]{10,40}$/.test(rawLocation) ? rawLocation : DEFAULT_LOCATION_ID;
    const contacts = await fetchLeadContacts(apiKey, locationId, args.since);
    notesByContact = [];
    for (const contact of contacts) notesByContact.push(await fetchNotes(apiKey, contact.id));
  }

  const incoming = rowsInRange(
    notesByContact.flat().map(noteToRow).filter(Boolean),
    args.since,
    args.until,
  );
  const existing = fs.existsSync(LEADS_CSV) ? parseCsv(fs.readFileSync(LEADS_CSV, 'utf8')) : [];
  const merged = mergeRows(existing, incoming);
  const meetings = incoming.filter((r) => r.meeting_request === 'yes').length;

  console.log(
    `export-highlevel-leads: ${incoming.length} submission(s) ${args.since}..${args.until} ` +
      `(${meetings} meeting request(s)); ${merged.length} row(s) in leads.csv after merge.`,
  );
  if (args.dryRun) {
    process.stdout.write(toCsv(incoming));
    return;
  }
  fs.mkdirSync(path.dirname(LEADS_CSV), { recursive: true });
  fs.writeFileSync(LEADS_CSV, toCsv(merged));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`export-highlevel-leads: ${error.message}`);
    process.exit(1);
  });
}
