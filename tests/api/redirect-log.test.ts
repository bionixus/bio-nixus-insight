import crypto from 'node:crypto';
import http from 'node:http';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { handleRedirectEnd, handleRedirectExport, handleRedirectStart, resetRedirectLogMemory } from '../../lib/redirect-log.mjs';
import endHandler from '../../api/r/[outcome]';
import exportHandler from '../../api/r/export';

const TOKEN = 'test-export-token';
const IP = '203.0.113.8';

let server: http.Server;
let base = '';

beforeAll(async () => {
  server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    const parts = url.pathname.split('/').filter(Boolean);
    const done = (error: unknown) => {
      console.error(error);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('error');
      }
    };
    if (parts[0] === 'r' && parts.length === 2) {
      Promise.resolve(handleRedirectEnd(req, res, parts[1])).catch(done);
      return;
    }
    if (parts[0] === 'go' && parts.length === 3) {
      Promise.resolve(handleRedirectStart(req, res, parts[1], parts[2])).catch(done);
      return;
    }
    if (url.pathname === '/api/r/export') {
      Promise.resolve(handleRedirectExport(req, res)).catch(done);
      return;
    }
    res.statusCode = 404;
    res.end('missing');
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('test server did not bind');
  base = `http://127.0.0.1:${address.port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

beforeEach(() => {
  process.env.REDIRECT_LOG_DRIVER = 'memory';
  process.env.REDIRECT_EXPORT_TOKEN = TOKEN;
  delete process.env.REDIRECT_IP_SALT;
  delete process.env.REDIRECT_MODE_2362;
  delete process.env.BLOB_READ_WRITE_TOKEN;
  resetRedirectLogMemory();
});

function expectedIpHash(ip = IP) {
  return crypto.createHash('sha256').update(`bionixus-redirect-v1:${ip}`).digest('hex');
}

async function hit(path: string, init: RequestInit = {}) {
  const response = await fetch(`${base}${path}`, { redirect: 'manual', ...init });
  const text = await response.text();
  return { status: response.status, text, headers: response.headers };
}

describe('survey redirect end pages', () => {
  it('logs every outcome, keeps duplicates, and exports counts', async () => {
    const pages = [
      {
        path: `/r/complete?pid=2362&rid=resp-1&supplier=osg`,
        h1: 'Thank you',
        outcome: 'complete',
      },
      {
        path: `/r/complete?pid=2362&rid=resp-1`,
        h1: 'Thank you',
        outcome: 'complete',
      },
      {
        path: `/r/terminate?pid=2362&id=resp-2`,
        h1: 'Thank you for your time',
        outcome: 'terminate',
      },
      {
        path: `/r/overquota?pid=2362&RID=resp-3`,
        h1: 'This survey is now full',
        outcome: 'overquota',
      },
      {
        path: `/r/quality?pid=2362&respondent_id=resp-4`,
        h1: 'Response not accepted',
        outcome: 'quality',
      },
      {
        path: `/r/terminate?pid=2362`,
        h1: 'Thank you for your time',
        outcome: 'terminate',
      },
    ];

    for (const page of pages) {
      const response = await hit(page.path, { headers: { 'x-forwarded-for': `${IP}, 10.0.0.8`, 'user-agent': 'PanelRedirect/1.0' } });
      expect(response.status).toBe(200);
      expect(response.headers.get('x-redirect-logged')).toBe('1');
      expect(response.headers.get('x-robots-tag')).toContain('noindex');
      expect(response.headers.get('set-cookie')).toBeNull();
      expect(response.text).toContain('name="robots" content="noindex, nofollow"');
      expect(response.text).toContain(`<h1>${page.h1}</h1>`);
      expect(response.text.match(/<h1>/g)).toHaveLength(1);
      expect(response.text).toContain('alt="BioNixus"');
      expect(response.text).not.toMatch(/<script/i);
      expect(response.text).not.toContain('resp-1');
      expect(response.text).not.toContain(IP);
    }

    const other = await hit('/r/complete?pid=9999&rid=other-project', {
      headers: { 'x-forwarded-for': IP },
    });
    expect(other.status).toBe(200);

    const missingToken = await hit('/api/r/export?pid=2362&format=json');
    expect(missingToken.status).toBe(401);
    expect(missingToken.text).toContain('Unauthorized');

    const wrongToken = await hit('/api/r/export?pid=2362&format=json', {
      headers: { Authorization: 'Bearer not-the-token' },
    });
    expect(wrongToken.status).toBe(401);

    const exported = await hit('/api/r/export?pid=2362&format=json', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    expect(exported.status).toBe(200);
    const body = JSON.parse(exported.text);
    expect(body.pid).toBe('2362');
    expect(body.counts).toEqual({ complete: 2, terminate: 2, overquota: 1, quality: 1 });
    expect(body.uniqueCounts.complete).toBe(1);
    expect(body.uniqueCounts.terminate).toBe(2);
    expect(body.duplicateHits).toBe(1);
    expect(body.missingRid).toBe(1);
    expect(body.total).toBe(6);
    expect(body.rows).toHaveLength(6);
    expect(exported.text).not.toContain(IP);

    const completes = body.rows.filter((row: { rid: string; outcome: string }) => row.rid === 'resp-1');
    expect(completes).toHaveLength(2);
    expect(completes.filter((row: { duplicate: boolean }) => row.duplicate)).toHaveLength(1);
    expect(completes[0].ipHash).toBe(expectedIpHash());
    expect(completes[0].userAgent).toBe('PanelRedirect/1.0');
    expect(completes[0].query.supplier).toBe('osg');
    expect(completes[0].timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);

    const byRid = Object.fromEntries(body.rows.filter((row: { rid: string | null }) => row.rid).map((row: { rid: string }) => [row.rid, row]));
    expect(byRid['resp-2'].outcome).toBe('terminate');
    expect(byRid['resp-3'].outcome).toBe('overquota');
    expect(byRid['resp-4'].outcome).toBe('quality');
    const missing = body.rows.find((row: { ridMissing: boolean }) => row.ridMissing);
    expect(missing.outcome).toBe('terminate');
    expect(missing.rid).toBeNull();
    expect(missing.duplicate).toBe(false);

    const csv = await hit('/api/r/export?pid=2362&format=csv', {
      headers: { 'x-redirect-token': TOKEN },
    });
    expect(csv.status).toBe(200);
    expect(csv.headers.get('content-type')).toContain('text/csv');
    expect(csv.text).toContain('resp-1');
    expect(csv.text).toContain('hitsComplete');
    expect(csv.text).toMatch(/,2,2,1,1,/);

    const all = await hit(`/api/r/export?format=json&token=${TOKEN}`);
    const allBody = JSON.parse(all.text);
    expect(allBody.total).toBe(7);
    expect(allBody.rows.some((row: { rid: string }) => row.rid === 'other-project')).toBe(true);
  });

  it('renders and logs a missing respondent id', async () => {
    const response = await hit('/r/quality?pid=2362');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1>Response not accepted</h1>');
    expect(response.headers.get('x-redirect-logged')).toBe('1');

    const exported = await hit('/api/r/export?pid=2362&format=json', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const body = JSON.parse(exported.text);
    expect(body.counts.quality).toBe(1);
    expect(body.missingRid).toBe(1);
    expect(body.rows[0].ridMissing).toBe(true);
  });

  it('still renders the thank-you page when logging fails', async () => {
    process.env.REDIRECT_LOG_DRIVER = 'fail';
    const response = await hit('/r/complete?pid=2362&rid=lost-but-thanked');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1>Thank you</h1>');
    expect(response.headers.get('x-redirect-logged')).toBe('0');

    process.env.REDIRECT_LOG_DRIVER = 'memory';
    const exported = await hit('/api/r/export?pid=2362&format=json', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    expect(JSON.parse(exported.text).total).toBe(0);
  });

  it('refuses a missing export token and a request with no configured token', async () => {
    delete process.env.REDIRECT_EXPORT_TOKEN;
    const response = await hit('/api/r/export?pid=2362&format=json', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    expect(response.status).toBe(503);
    expect(response.text).toContain('Export token is not configured');
  });

  it('does not log HEAD and guards spreadsheet formulas in CSV', async () => {
    const head = await hit('/r/complete?pid=2362&rid=head-only', { method: 'HEAD' });
    expect(head.status).toBe(200);
    expect(head.text).toBe('');
    expect(head.headers.get('x-redirect-logged')).toBe('0');

    const poisoned = await hit('/r/overquota?pid=2362&rid=%3D1%2B1');
    expect(poisoned.status).toBe(200);
    expect(poisoned.text).not.toContain('=1+1');

    const csv = await hit('/api/r/export?pid=2362&format=csv', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    expect(csv.text).toContain("'=1+1");
    expect(csv.text).not.toContain('head-only');
  });

  it('wires the Vercel handlers and keeps /r out of the SPA rewrite', async () => {
    const logged: string[] = [];
    const res = {
      headersSent: false,
      statusCode: 0,
      headers: {} as Record<string, string>,
      setHeader(key: string, value: string) {
        this.headers[key.toLowerCase()] = value;
      },
      end(body: string) {
        this.headersSent = true;
        logged.push(body);
      },
    };
    await endHandler(
      {
        method: 'GET',
        url: '/api/r/complete?rid=from-url&pid=2362&supplier=osg',
        query: { outcome: 'complete' },
        headers: { 'user-agent': 'VercelMerge/1.0' },
      },
      res,
    );
    expect(res.statusCode).toBe(200);
    expect(logged[0]).toContain('<h1>Thank you</h1>');

    const exported: string[] = [];
    const exportRes = {
      headersSent: false,
      statusCode: 0,
      setHeader() {},
      end(body: string) {
        this.headersSent = true;
        exported.push(body);
      },
    };
    await exportHandler(
      {
        method: 'GET',
        url: '/api/r/export?pid=2362&format=json',
        query: { pid: '2362', format: 'json' },
        headers: { authorization: `Bearer ${TOKEN}` },
      },
      exportRes,
    );
    const body = JSON.parse(exported[0]);
    expect(body.counts.complete).toBe(1);
    expect(body.rows[0].rid).toBe('from-url');
    expect(body.rows[0].pid).toBe('2362');
    expect(body.rows[0].query.supplier).toBe('osg');
    expect(body.rows[0].userAgent).toBe('VercelMerge/1.0');

    const root = process.cwd();
    const vercel = JSON.parse(readFileSync(path.join(root, 'vercel.json'), 'utf8'));
    const sources: string[] = vercel.rewrites.map((rewrite: { source: string }) => rewrite.source);
    const catchAll = sources.findIndex((source) => source.startsWith('/:splat'));
    for (const path of ['/r/complete', '/r/terminate', '/r/overquota', '/r/quality']) {
      expect(sources.indexOf(path)).toBeGreaterThan(-1);
      expect(sources.indexOf(path)).toBeLessThan(catchAll);
    }
    expect(sources[catchAll]).toContain('(?!api/|r/|go/)');
    expect(sources.indexOf('/go/:pid/:country')).toBeGreaterThan(-1);
    expect(sources.indexOf('/go/:pid/:country')).toBeLessThan(catchAll);
    expect(vercel.redirects.some((redirect: { source: string; has?: { key: string }[] }) => redirect.source.includes('(?!api/|r/|go/)') && redirect.has?.some((rule) => rule.key === 'trk'))).toBe(true);
    const robots = readFileSync(path.join(root, 'public/robots.txt'), 'utf8');
    expect(robots).toContain('Disallow: /r/');
    expect(robots).toContain('Disallow: /go/');
    const sitemap = readFileSync(path.join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
    expect(sitemap).toContain('panel-redirect-end');
  });
});

describe('survey start links', () => {
  it('logs a start and redirects to the test survey with the encoded rid', async () => {
    const us = await hit('/go/2362/us?rid=bxtest-us-0001');
    expect(us.status).toBe(302);
    expect(us.headers.get('x-redirect-logged')).toBe('1');
    expect(us.headers.get('x-robots-tag')).toContain('noindex');
    expect(us.headers.get('location')).toBe(
      'https://surveys.osganalytics.com/survey/selfserve/556/260906?list=12&HC=1&HP=1&OID=bxtest-us-0001',
    );

    const uk = await hit('/go/2362/uk?id=bxtest-uk-0001');
    expect(uk.status).toBe(302);
    expect(uk.headers.get('location')).toBe(
      'https://surveys.osganalytics.com/survey/selfserve/556/260906?list=12&HC=2&HP=1&decLang=uk&OID=bxtest-uk-0001',
    );

    const de = await hit('/go/2362/de?RID=bxtest-de-0001');
    expect(de.status).toBe(302);
    expect(de.headers.get('location')).toBe(
      'https://surveys.osganalytics.com/survey/selfserve/556/260906?list=12&HC=4&HP=1&decLang=german&OID=bxtest-de-0001',
    );

    const again = await hit('/go/2362/us?rid=bxtest-us-0001');
    expect(again.status).toBe(302);

    const encoded = await hit('/go/2362/us?rid=' + encodeURIComponent('a b&c'));
    expect(encoded.headers.get('location')).toContain('OID=' + encodeURIComponent('a b&c'));

    const missing = await hit('/go/2362/uk');
    expect(missing.status).toBe(200);
    expect(missing.headers.get('location')).toBeNull();
    expect(missing.headers.get('x-redirect-logged')).toBe('1');
    expect(missing.text).toContain('This link is invalid');
    expect(missing.text).toContain('noindex');

    const unknownCountry = await hit('/go/2362/fr?rid=bxtest-fr-0001');
    expect(unknownCountry.status).toBe(404);
    expect(unknownCountry.headers.get('x-robots-tag')).toContain('noindex');
    expect(unknownCountry.headers.get('location')).toBeNull();

    const unknownPid = await hit('/go/9999/us?rid=bxtest-us-0001');
    expect(unknownPid.status).toBe(404);

    const end = await hit('/r/complete?pid=2362&rid=bxtest-us-0001');
    expect(end.status).toBe(200);
    expect(end.text).toContain('<h1>Thank you</h1>');

    const exported = await hit('/api/r/export?pid=2362&format=json', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const body = JSON.parse(exported.text);
    expect(body.byCountry.us).toEqual({ starts: 3, completes: 1, terminates: 0, overquota: 0, quality: 0 });
    expect(body.byCountry.uk.starts).toBe(2);
    expect(body.byCountry.de.starts).toBe(1);
    expect(body.byCountry.uk.completes).toBe(0);
    const starts = body.rows.filter((row: { type: string }) => row.type === 'start');
    expect(starts.some((row: { rid: string; country: string }) => row.rid === 'bxtest-us-0001' && row.country === 'us')).toBe(true);
    const usStarts = starts.filter((row: { rid: string }) => row.rid === 'bxtest-us-0001');
    expect(usStarts).toHaveLength(2);
    expect(usStarts.filter((row: { duplicate: boolean }) => row.duplicate)).toHaveLength(1);
    const missingRow = starts.find((row: { ridMissing: boolean; country: string }) => row.ridMissing && row.country === 'uk');
    expect(missingRow.duplicate).toBe(false);
    expect(body.rows.some((row: { rid: string }) => row.rid === 'bxtest-fr-0001')).toBe(false);
    expect(body.counts.complete).toBe(1);

    const csv = await hit('/api/r/export?pid=2362&format=csv', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    expect(csv.text.split('\n')[0]).toContain('type');
    expect(csv.text.split('\n')[0]).toContain('country');
    expect(csv.text).toContain('start,start,us,');
  });

  it('uses the live target when REDIRECT_MODE_2362 is live', async () => {
    process.env.REDIRECT_MODE_2362 = 'live';
    const us = await hit('/go/2362/us?rid=bxtest-us-live');
    expect(us.status).toBe(302);
    expect(us.headers.get('location')).toBe(
      'https://surveys.osganalytics.com/survey/selfserve/556/260906?list=12&HC=1&HP=4&OID=bxtest-us-live',
    );
    const uk = await hit('/go/2362/UK?respondent_id=bxtest-uk-live');
    expect(uk.headers.get('location')).toContain('decLang=uk');
    expect(uk.headers.get('location')).toContain('HP=4');
    expect(uk.headers.get('location')).toContain('OID=bxtest-uk-live');
  });

  it('still forwards when the start log fails', async () => {
    process.env.REDIRECT_LOG_DRIVER = 'fail';
    const us = await hit('/go/2362/us?rid=bxtest-us-unlogged');
    expect(us.status).toBe(302);
    expect(us.headers.get('x-redirect-logged')).toBe('0');
    expect(us.headers.get('location')).toContain('OID=bxtest-us-unlogged');
  });
});
