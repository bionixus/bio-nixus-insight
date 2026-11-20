/**
 * Survey-panel redirect end pages and the reconciliation log.
 *
 * Storage is a private Vercel Blob store (BLOB_READ_WRITE_TOKEN). Each hit is
 * its own object so concurrent redirects cannot overwrite each other. Duplicate
 * rid + outcome pairs are kept and flagged at export time.
 * Tests set REDIRECT_LOG_DRIVER=memory|fail (honoured only under Vitest).
 */
import crypto from 'node:crypto';
import { URL } from 'node:url';
import { get, list, put } from '@vercel/blob';

export const REDIRECT_OUTCOMES = ['complete', 'terminate', 'overquota', 'quality'];

const PREFIX = 'redirect-log/v1';
const RID_ALIASES = ['rid', 'id', 'uid', 'respondent_id'];
const MAX_QUERY_KEYS = 40;
const MAX_KEY_LEN = 80;
const MAX_VALUE_LEN = 500;
const MAX_RID_LEN = 200;
const MAX_PID_LEN = 64;
const MAX_UA_LEN = 512;
const DEFAULT_PAGE_SIZE = 5000;
const READ_CONCURRENCY = 20;
const IP_PEPPER_FALLBACK = 'bionixus-redirect-v1';

const COPY = {
  complete: {
    title: 'Survey complete | BioNixus',
    eyebrow: 'Response recorded',
    h1: 'Thank you',
    body: 'Your survey response has been recorded. You can close this window.',
  },
  terminate: {
    title: 'Survey ended | BioNixus',
    eyebrow: 'Screened out',
    h1: 'Thank you for your time',
    body: 'You did not match the profile for this survey, so this response will not be counted. You can close this window.',
  },
  overquota: {
    title: 'Survey quota full | BioNixus',
    eyebrow: 'Quota full',
    h1: 'This survey is now full',
    body: 'The quota for this survey has been reached. Thank you for your interest. You can close this window.',
  },
  quality: {
    title: 'Response not accepted | BioNixus',
    eyebrow: 'Quality check',
    h1: 'Response not accepted',
    body: 'This response did not pass the quality checks for the survey. Thank you for your time. You can close this window.',
  },
};

/** @type {object[]} */
const memoryHits = [];

export function resetRedirectLogMemory() {
  memoryHits.length = 0;
}

/**
 * @param {string} value
 */
export function isRedirectOutcome(value) {
  return REDIRECT_OUTCOMES.includes(value);
}

/**
 * @param {import('node:http').IncomingMessage & { query?: Record<string, unknown> }} req
 * @param {import('node:http').ServerResponse} res
 * @param {string} outcome
 */
export async function handleRedirectEnd(req, res, outcome) {
  const method = String(req.method || 'GET').toUpperCase();
  if (!isRedirectOutcome(outcome)) {
    sendText(res, 404, 'Not found');
    return;
  }

  if (method === 'HEAD') {
    sendHtml(res, 200, '', { 'X-Redirect-Logged': '0' });
    return;
  }

  if (method !== 'GET' && method !== 'POST') {
    sendText(res, 405, 'Method not allowed');
    return;
  }

  const record = buildRecord(req, outcome);
  let logged = false;
  try {
    const result = await recordHit(record);
    logged = result.logged;
  } catch (error) {
    console.error('[redirect-log] unexpected write error', error instanceof Error ? error.message : 'error');
  }

  if (res.headersSent) return;
  sendHtml(res, 200, renderEndPage(outcome), { 'X-Redirect-Logged': logged ? '1' : '0' });
}

/**
 * @param {import('node:http').IncomingMessage & { query?: Record<string, unknown> }} req
 * @param {import('node:http').ServerResponse} res
 */
export async function handleRedirectExport(req, res) {
  const method = String(req.method || 'GET').toUpperCase();
  if (method !== 'GET') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  const auth = exportAuthStatus(req);
  if (auth === 'unconfigured') {
    console.error('[redirect-log] REDIRECT_EXPORT_TOKEN is not configured');
    sendJson(res, 503, { error: 'Export token is not configured' });
    return;
  }
  if (auth !== 'ok') {
    sendJson(res, 401, { error: 'Unauthorized' });
    return;
  }

  const query = readQuery(req);
  const format = firstValue(query, 'format');
  const normalizedFormat = (format || 'json').toLowerCase();
  if (normalizedFormat !== 'json' && normalizedFormat !== 'csv') {
    sendJson(res, 400, { error: 'format must be csv or json' });
    return;
  }

  const limit = parseLimit(firstValue(query, 'limit'));
  const cursor = parseCursor(firstValue(query, 'cursor'));
  if (limit == null || cursor == null) {
    sendJson(res, 400, { error: 'Invalid limit or cursor' });
    return;
  }

  const pidFilter = blankToUndefined(firstValue(query, 'pid'));

  let marked;
  try {
    marked = await loadMarkedHits(pidFilter);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error';
    if (message === 'unconfigured') {
      sendJson(res, 503, { error: 'Redirect log storage is not configured' });
      return;
    }
    console.error('[redirect-log] export read failed', message);
    sendJson(res, 500, { error: 'Export failed' });
    return;
  }

  const summary = summarize(marked);
  const page = marked.slice(cursor, cursor + limit);
  const nextCursor = cursor + limit < marked.length ? String(cursor + limit) : null;
  const payload = {
    pid: pidFilter ?? null,
    ...summary,
    returned: page.length,
    truncated: nextCursor != null,
    nextCursor,
    rows: page,
  };

  if (normalizedFormat === 'csv') {
    send(res, 200, hitsToCsv(payload), {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="bionixus-redirects-${safeFilename(pidFilter)}.csv"`,
      'X-Redirect-Total': String(summary.total),
      'X-Redirect-Truncated': payload.truncated ? '1' : '0',
      ...(nextCursor ? { 'X-Redirect-Next-Cursor': nextCursor } : {}),
      ...sharedHeaders(),
    });
    return;
  }

  sendJson(res, 200, payload);
}

/**
 * @param {string} outcome
 */
export function renderEndPage(outcome) {
  const copy = COPY[outcome] ?? COPY.complete;
  const canonical = `https://www.bionixus.com/r/${outcome}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="referrer" content="no-referrer">
  <title>${escapeHtml(copy.title)}</title>
  <link rel="canonical" href="${canonical}">
  <style>
    :root {
      --navy-deep: #080f1b;
      --navy-medium: #142033;
      --gold-warm: #f5a503;
      --gold-light: #f7c948;
      --cream: #f4f1ea;
      --muted: #c5cdd8;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 20px;
      background:
        radial-gradient(70% 50% at 100% 0%, rgba(245, 165, 3, 0.14), transparent 60%),
        var(--navy-deep);
      color: var(--cream);
      font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    }
    main {
      width: min(520px, 100%);
      background: var(--navy-medium);
      border: 1px solid rgba(247, 201, 72, 0.28);
      border-radius: 16px;
      padding: 36px 32px 32px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    }
    .rule {
      width: 56px;
      height: 3px;
      margin: 0 0 24px;
      border: 0;
      background: linear-gradient(90deg, var(--gold-light), var(--gold-warm));
    }
    img { display: block; width: 200px; height: 57px; margin-bottom: 28px; }
    p.eyebrow {
      margin: 0 0 8px;
      color: var(--gold-warm);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0 0 12px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 36px;
      font-weight: 600;
      line-height: 1.15;
      color: var(--cream);
    }
    p.lead { margin: 0; color: var(--muted); font-size: 17px; line-height: 1.55; }
  </style>
</head>
<body>
  <main>
    <img src="/bionixus-logo-night.webp" alt="BioNixus" width="200" height="57">
    <hr class="rule">
    <p class="eyebrow">${escapeHtml(copy.eyebrow)}</p>
    <h1>${escapeHtml(copy.h1)}</h1>
    <p class="lead">${escapeHtml(copy.body)}</p>
  </main>
</body>
</html>`;
}

/**
 * @param {{ rows: object[], counts: Record<string, number>, uniqueCounts: Record<string, number>, total: number, duplicateHits: number, missingRid: number }} payload
 */
export function hitsToCsv(payload) {
  const headers = [
    'timestamp',
    'hitId',
    'outcome',
    'pid',
    'rid',
    'ridMissing',
    'duplicate',
    'duplicateIndex',
    'userAgent',
    'ipHash',
    'query',
    'hitsComplete',
    'hitsTerminate',
    'hitsOverquota',
    'hitsQuality',
    'uniqueComplete',
    'uniqueTerminate',
    'uniqueOverquota',
    'uniqueQuality',
    'totalHits',
    'duplicateHits',
    'missingRid',
  ];
  const lines = [headers.join(',')];
  for (const row of payload.rows) {
    lines.push(
      [
        row.timestamp,
        row.hitId,
        row.outcome,
        row.pid ?? '',
        row.rid ?? '',
        row.ridMissing ? 'true' : 'false',
        row.duplicate ? 'true' : 'false',
        row.duplicateIndex,
        row.userAgent ?? '',
        row.ipHash ?? '',
        JSON.stringify(row.query ?? {}),
        payload.counts.complete,
        payload.counts.terminate,
        payload.counts.overquota,
        payload.counts.quality,
        payload.uniqueCounts.complete,
        payload.uniqueCounts.terminate,
        payload.uniqueCounts.overquota,
        payload.uniqueCounts.quality,
        payload.total,
        payload.duplicateHits,
        payload.missingRid,
      ]
        .map((cell) => csvCell(cell))
        .join(','),
    );
  }
  return `${lines.join('\n')}\n`;
}

/**
 * @param {import('node:http').IncomingMessage & { query?: Record<string, unknown> }} req
 */
export function exportAuthStatus(req) {
  const expected = configuredExportToken();
  if (!expected) return 'unconfigured';
  const provided = tokenFromRequest(req);
  if (!provided) return 'missing';
  if (!safeEqual(provided, expected)) return 'invalid';
  return 'ok';
}

/**
 * @param {import('node:http').IncomingMessage & { query?: Record<string, unknown> }} req
 * @param {string} outcome
 */
function buildRecord(req, outcome) {
  const parsed = sanitizeQuery(readQuery(req), outcome);
  const ridRaw = firstAlias(parsed.values, RID_ALIASES);
  const rid = ridRaw ? ridRaw.slice(0, MAX_RID_LEN) : null;
  const pidRaw = firstAlias(parsed.values, ['pid']);
  const pid = pidRaw ? pidRaw.slice(0, MAX_PID_LEN) : null;
  const userAgent = headerValue(req, 'user-agent').slice(0, MAX_UA_LEN);
  const ip = clientIp(req);
  return {
    hitId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    outcome,
    rid,
    ridMissing: !rid,
    pid,
    query: parsed.values,
    userAgent,
    ipHash: ip ? hashIp(ip) : null,
    truncated: parsed.truncated || (ridRaw != null && ridRaw.length > MAX_RID_LEN) || (pidRaw != null && pidRaw.length > MAX_PID_LEN),
  };
}

/**
 * @param {object} record
 */
async function recordHit(record) {
  const driver = currentDriver();
  if (driver === 'none') {
    console.error('[redirect-log] storage is not configured (BLOB_READ_WRITE_TOKEN)');
    return { logged: false, reason: 'unconfigured' };
  }
  if (driver === 'fail') {
    throw new Error('forced-log-failure');
  }
  const stored = JSON.parse(JSON.stringify(record));
  if (driver === 'memory') {
    memoryHits.push(stored);
    return { logged: true };
  }
  await put(blobPath(stored), JSON.stringify(stored), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: false,
    contentType: 'application/json',
    cacheControlMaxAge: 60,
  });
  return { logged: true };
}

/**
 * @param {string | undefined} pidFilter exact pid, or undefined for every project
 */
async function loadMarkedHits(pidFilter) {
  const hits = await readHits(pidFilter);
  return markDuplicates(hits);
}

/**
 * @param {string | undefined} pidFilter
 */
async function readHits(pidFilter) {
  const driver = currentDriver();
  if (driver === 'none' || driver === 'fail') {
    throw new Error('unconfigured');
  }
  if (driver === 'memory') {
    return memoryHits
      .filter((hit) => pidFilter === undefined || hit.pid === pidFilter)
      .map((hit) => ({ ...hit, query: { ...hit.query } }));
  }

  const prefix = pidFilter && isSafeSegment(pidFilter) ? `${PREFIX}/${pidFilter}/` : `${PREFIX}/`;
  const blobs = await listAllBlobs(prefix);
  const parsed = await mapPool(blobs, READ_CONCURRENCY, async (blob) => {
    try {
      const body = await readJsonBlob(blob.pathname);
      if (body && typeof body === 'object') return body;
    } catch (error) {
      console.error('[redirect-log] blob read failed', error instanceof Error ? error.message : 'error');
    }
    return stubFromPath(blob.pathname);
  });
  return parsed.filter((hit) => {
    if (!hit || !isRedirectOutcome(hit.outcome)) return false;
    if (pidFilter === undefined) return true;
    return hit.pid === pidFilter;
  });
}

/**
 * @param {object[]} hits
 */
export function markDuplicates(hits) {
  const sorted = [...hits].sort((a, b) => {
    const byTime = String(a.timestamp).localeCompare(String(b.timestamp));
    if (byTime !== 0) return byTime;
    return String(a.hitId).localeCompare(String(b.hitId));
  });
  /** @type {Map<string, number>} */
  const seen = new Map();
  return sorted.map((hit) => {
    if (!hit.rid) {
      return { ...hit, duplicate: false, duplicateIndex: 1 };
    }
    const key = `${hit.pid ?? ''}\0${hit.rid}\0${hit.outcome}`;
    const index = (seen.get(key) || 0) + 1;
    seen.set(key, index);
    return { ...hit, duplicate: index > 1, duplicateIndex: index };
  });
}

/**
 * @param {object[]} rows rows already flagged with duplicate
 */
export function summarize(rows) {
  const counts = { complete: 0, terminate: 0, overquota: 0, quality: 0 };
  const uniqueCounts = { complete: 0, terminate: 0, overquota: 0, quality: 0 };
  let missingRid = 0;
  let duplicateHits = 0;
  for (const row of rows) {
    if (!isRedirectOutcome(row.outcome)) continue;
    counts[row.outcome] += 1;
    if (row.ridMissing || !row.rid) missingRid += 1;
    if (row.duplicate) duplicateHits += 1;
    else uniqueCounts[row.outcome] += 1;
  }
  return {
    total: rows.length,
    counts,
    uniqueCounts,
    duplicateHits,
    missingRid,
  };
}

function currentDriver() {
  const requested = process.env.REDIRECT_LOG_DRIVER;
  const testMode = process.env.VITEST === 'true' || process.env.NODE_ENV === 'test';
  if (testMode && (requested === 'memory' || requested === 'fail')) return requested;
  if (typeof process.env.BLOB_READ_WRITE_TOKEN === 'string' && process.env.BLOB_READ_WRITE_TOKEN.trim()) {
    return 'blob';
  }
  return 'none';
}

/**
 * @param {object} record
 */
function blobPath(record) {
  const pid = record.pid && isSafeSegment(record.pid) ? record.pid : record.pid ? '_unsafe' : '_none';
  const rid = record.rid ? pathSegment(record.rid, '_missing', 80) : '_missing';
  const ts = String(record.timestamp).replace(/[-:.]/g, '');
  return `${PREFIX}/${pid}/${record.outcome}/${ts}+${rid}+${record.hitId}.json`;
}

/**
 * @param {string} pathname
 */
function stubFromPath(pathname) {
  const marker = `${PREFIX}/`;
  if (!pathname.startsWith(marker)) return null;
  const parts = pathname.slice(marker.length).split('/');
  if (parts.length !== 3) return null;
  const [pidPart, outcome, file] = parts;
  if (!isRedirectOutcome(outcome)) return null;
  const base = file.endsWith('.json') ? file.slice(0, -'.json'.length) : file;
  const bits = base.split('+');
  if (bits.length !== 3) return null;
  const [tsCompact, ridPart, hitId] = bits;
  const ridMissing = ridPart === '_missing';
  return {
    hitId,
    timestamp: compactTimestampToIso(tsCompact),
    outcome,
    rid: ridMissing ? null : ridPart,
    ridMissing,
    pid: pidPart === '_none' || pidPart === '_unsafe' ? null : pidPart,
    query: {},
    userAgent: '',
    ipHash: null,
    truncated: true,
    bodyMissing: true,
  };
}

/**
 * @param {string} compact
 */
function compactTimestampToIso(compact) {
  const match = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(\d{3})Z$/.exec(compact);
  if (!match) return new Date(0).toISOString();
  const [, year, month, day, hour, minute, second, ms] = match;
  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}Z`;
}

/**
 * @param {{ pathname: string }[]} blobs
 */
async function listAllBlobs(prefix) {
  /** @type {{ pathname: string }[]} */
  const blobs = [];
  /** @type {string | undefined} */
  let cursor;
  do {
    const page = await list({ prefix, cursor, limit: 1000 });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return blobs;
}

/**
 * @param {string} pathname
 */
async function readJsonBlob(pathname) {
  const result = await get(pathname, { access: 'private', useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) return null;
  const text = await new Response(result.stream).text();
  return JSON.parse(text);
}

/**
 * @param {unknown[]} items
 * @param {number} concurrency
 * @param {(item: any) => Promise<unknown>} fn
 */
async function mapPool(items, concurrency, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Math.max(1, Math.min(concurrency, items.length || 1));
  async function worker() {
    for (;;) {
      const index = next;
      next += 1;
      if (index >= items.length) return;
      results[index] = await fn(items[index]);
    }
  }
  if (items.length === 0) return results;
  await Promise.all(Array.from({ length: workers }, () => worker()));
  return results;
}

/**
 * @param {import('node:http').IncomingMessage & { query?: Record<string, unknown> }} req
 */
function readQuery(req) {
  const fromUrl = queryFromUrl(typeof req.url === 'string' ? req.url : '');
  const fromHelper = req.query && typeof req.query === 'object' ? normalizeQuery(req.query) : {};
  return { ...fromUrl, ...fromHelper };
}

/**
 * @param {string} rawUrl
 */
function queryFromUrl(rawUrl) {
  if (!rawUrl) return {};
  try {
    const parsed = new URL(rawUrl, 'http://localhost');
    /** @type {Record<string, string | string[]>} */
    const query = {};
    for (const [key, value] of parsed.searchParams.entries()) {
      const current = query[key];
      if (current === undefined) query[key] = value;
      else if (Array.isArray(current)) current.push(value);
      else query[key] = [current, value];
    }
    return query;
  } catch {
    return {};
  }
}

/**
 * @param {Record<string, unknown>} query
 */
function normalizeQuery(query) {
  /** @type {Record<string, string | string[]>} */
  const out = {};
  for (const [key, value] of Object.entries(query)) {
    if (typeof value === 'string') out[key] = value;
    else if (Array.isArray(value)) {
      const strings = value.filter((item) => typeof item === 'string');
      if (strings.length === 1) out[key] = strings[0];
      else if (strings.length > 1) out[key] = strings;
    }
  }
  return out;
}

/**
 * Drops the route outcome key and caps size. Keeps partner parameters.
 * @param {Record<string, string | string[]>} query
 * @param {string} outcome
 */
function sanitizeQuery(query, outcome) {
  /** @type {Record<string, string | string[]>} */
  const values = {};
  let truncated = false;
  const keys = Object.keys(query).slice(0, MAX_QUERY_KEYS + 5);
  if (Object.keys(query).length > MAX_QUERY_KEYS) truncated = true;
  let kept = 0;
  for (const key of keys) {
    if (kept >= MAX_QUERY_KEYS) {
      truncated = true;
      break;
    }
    if (key.toLowerCase() === 'outcome') {
      const raw = query[key];
      const asText = Array.isArray(raw) ? raw.join(',') : raw;
      if (asText === outcome) continue;
    }
    const safeKey = key.slice(0, MAX_KEY_LEN);
    if (safeKey.length !== key.length) truncated = true;
    const raw = query[key];
    if (typeof raw === 'string') {
      if (raw.length > MAX_VALUE_LEN) truncated = true;
      values[safeKey] = raw.slice(0, MAX_VALUE_LEN);
    } else if (Array.isArray(raw)) {
      values[safeKey] = raw.slice(0, 10).map((item) => {
        if (item.length > MAX_VALUE_LEN) truncated = true;
        return item.slice(0, MAX_VALUE_LEN);
      });
    }
    kept += 1;
  }
  return { values, truncated };
}

/**
 * @param {Record<string, string | string[]>} query
 * @param {string[]} aliases
 */
function firstAlias(query, aliases) {
  for (const alias of aliases) {
    const exact = query[alias];
    const exactValue = scalar(exact);
    if (exactValue) return exactValue.trim();
  }
  const keys = Object.keys(query);
  for (const alias of aliases) {
    const key = keys.find((candidate) => candidate.toLowerCase() === alias.toLowerCase());
    if (!key) continue;
    const value = scalar(query[key]);
    if (value && value.trim()) return value.trim();
  }
  return null;
}

/**
 * @param {string | string[] | undefined} value
 */
function scalar(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.find((item) => item.trim()) || '';
  return '';
}

/**
 * @param {Record<string, string | string[]>} query
 * @param {string} name
 */
function firstValue(query, name) {
  const aliases = firstAlias(query, [name]);
  return aliases;
}

/**
 * @param {string | null} value
 */
function blankToUndefined(value) {
  if (value == null) return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

/**
 * @param {string | null} value
 */
function parseLimit(value) {
  if (value == null || value === '') return DEFAULT_PAGE_SIZE;
  if (!/^\d+$/.test(value)) return null;
  const number = Number(value);
  if (number < 1) return null;
  return Math.min(number, DEFAULT_PAGE_SIZE);
}

/**
 * @param {string | null} value
 */
function parseCursor(value) {
  if (value == null || value === '') return 0;
  if (!/^\d+$/.test(value)) return null;
  return Number(value);
}

/**
 * @param {import('node:http').IncomingMessage} req
 * @param {string} name
 */
function headerValue(req, name) {
  const raw = req.headers?.[name];
  if (typeof raw === 'string') return raw.trim();
  if (Array.isArray(raw)) return String(raw[0] || '').trim();
  return '';
}

/**
 * @param {import('node:http').IncomingMessage} req
 */
function clientIp(req) {
  const real = headerValue(req, 'x-real-ip');
  if (real) return real.split(',')[0].trim();
  const forwarded = headerValue(req, 'x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const socketIp = req.socket && typeof req.socket.remoteAddress === 'string' ? req.socket.remoteAddress : '';
  return socketIp.trim();
}

/**
 * @param {string} ip
 */
function hashIp(ip) {
  const salt = process.env.REDIRECT_IP_SALT;
  const pepper = typeof salt === 'string' && salt.trim() ? salt.trim() : IP_PEPPER_FALLBACK;
  return crypto.createHash('sha256').update(`${pepper}:${ip}`).digest('hex');
}

function configuredExportToken() {
  const value = process.env.REDIRECT_EXPORT_TOKEN;
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

/**
 * @param {import('node:http').IncomingMessage & { query?: Record<string, unknown> }} req
 */
function tokenFromRequest(req) {
  const authorization = headerValue(req, 'authorization');
  if (/^bearer\s+/i.test(authorization)) {
    const bearer = authorization.replace(/^bearer\s+/i, '').trim();
    if (bearer) return bearer;
  }
  const headerToken = headerValue(req, 'x-redirect-token');
  if (headerToken) return headerToken;
  const queryToken = firstValue(readQuery(req), 'token');
  return queryToken ? queryToken.trim() : '';
}

/**
 * @param {string} provided
 * @param {string} expected
 */
function safeEqual(provided, expected) {
  const left = crypto.createHash('sha256').update(provided).digest();
  const right = crypto.createHash('sha256').update(expected).digest();
  return crypto.timingSafeEqual(left, right);
}

/**
 * @param {string} value
 */
function isSafeSegment(value) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(value);
}

/**
 * @param {string} value
 * @param {string} fallback
 * @param {number} max
 */
function pathSegment(value, fallback, max) {
  const clean = String(value).replace(/[^A-Za-z0-9._-]/g, '_').slice(0, max);
  return clean || fallback;
}

/**
 * @param {unknown} value
 */
function csvCell(value) {
  const text = value == null ? '' : String(value);
  const guarded = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
  if (/[",\n\r]/.test(guarded)) return `"${guarded.replace(/"/g, '""')}"`;
  return guarded;
}

/**
 * @param {string} value
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {string | undefined} pid
 */
function safeFilename(pid) {
  if (!pid) return 'all';
  return pathSegment(pid, 'project', 64);
}

function sharedHeaders() {
  return {
    'Cache-Control': 'private, no-store',
    'X-Robots-Tag': 'noindex, nofollow',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
  };
}

/**
 * @param {import('node:http').ServerResponse} res
 * @param {number} status
 * @param {string} body
 * @param {Record<string, string>} [extra]
 */
function sendHtml(res, status, body, extra = {}) {
  send(res, status, body, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Security-Policy': "default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'",
    ...sharedHeaders(),
    ...extra,
  });
}

/**
 * @param {import('node:http').ServerResponse} res
 * @param {number} status
 * @param {string} body
 */
function sendText(res, status, body) {
  send(res, status, body, {
    'Content-Type': 'text/plain; charset=utf-8',
    ...sharedHeaders(),
  });
}

/**
 * @param {import('node:http').ServerResponse} res
 * @param {number} status
 * @param {unknown} payload
 */
function sendJson(res, status, payload) {
  send(res, status, JSON.stringify(payload), {
    'Content-Type': 'application/json; charset=utf-8',
    ...sharedHeaders(),
  });
}

/**
 * @param {import('node:http').ServerResponse} res
 * @param {number} status
 * @param {string} body
 * @param {Record<string, string>} headers
 */
function send(res, status, body, headers) {
  if (res.headersSent) return;
  for (const [key, value] of Object.entries(headers)) res.setHeader(key, value);
  res.statusCode = status;
  res.end(body);
}
