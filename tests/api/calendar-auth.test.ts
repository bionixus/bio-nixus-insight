import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const fetchMock = vi.hoisted(() => vi.fn(async () => []));

vi.mock('@sanity/client', () => ({
  createClient: () => ({
    fetch: fetchMock,
    create: vi.fn(async () => ({ _id: 'created' })),
    patch: vi.fn(() => ({ set: () => ({ commit: async () => ({}) }) })),
    delete: vi.fn(async () => ({})),
  }),
}));

import handler from '../../api/calendar.js';

const SECRET = 'unit-test-admin-secret';
const ORIGINAL = process.env.ADMIN_PASSWORD;

function mockRes() {
  const res = {
    statusCode: 200,
    body: undefined as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      return this;
    },
  };
  return res;
}

beforeEach(() => {
  fetchMock.mockClear();
  fetchMock.mockResolvedValue([]);
});

afterEach(() => {
  if (ORIGINAL === undefined) delete process.env.ADMIN_PASSWORD;
  else process.env.ADMIN_PASSWORD = ORIGINAL;
  vi.restoreAllMocks();
});

describe('calendar auth and query validation', () => {
  it('fails closed when ADMIN_PASSWORD is unset and does not read events', async () => {
    delete process.env.ADMIN_PASSWORD;
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = mockRes();
    await handler(
      { method: 'GET', headers: { authorization: `Bearer ${SECRET}` }, query: {} },
      res,
    );
    expect(res.statusCode).toBe(503);
    expect(res.body).toEqual({ error: 'Admin password is not configured' });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalled();
  });

  it('rejects a wrong password with 401', async () => {
    process.env.ADMIN_PASSWORD = SECRET;
    const res = mockRes();
    await handler(
      { method: 'GET', headers: { authorization: 'Bearer wrong-password-value' }, query: {} },
      res,
    );
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ error: 'Unauthorized' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects invalid start, end, and type query values with 400', async () => {
    process.env.ADMIN_PASSWORD = SECRET;
    const auth = { authorization: `Bearer ${SECRET}` };
    const cases: { query: Record<string, unknown>; error: string }[] = [
      { query: { start: '2026-13-01' }, error: 'Invalid start date' },
      { query: { start: '2026-02-31' }, error: 'Invalid start date' },
      { query: { start: '2026-01-01" || true || "' }, error: 'Invalid start date' },
      { query: { start: ['2026-01-01', '2026-02-01'] }, error: 'Invalid start date' },
      { query: { end: '01/02/2026' }, error: 'Invalid end date' },
      { query: { type: 'newsletter" || true || "' }, error: 'Invalid type' },
      { query: { type: 'drop-table' }, error: 'Invalid type' },
    ];
    for (const item of cases) {
      fetchMock.mockClear();
      const res = mockRes();
      await handler({ method: 'GET', headers: auth, query: item.query }, res);
      expect(res.statusCode, JSON.stringify(item.query)).toBe(400);
      expect(res.body).toEqual({ error: item.error });
      expect(fetchMock).not.toHaveBeenCalled();
    }
  });

  it('accepts ISO dates and the type allowlist used by the calendar', async () => {
    process.env.ADMIN_PASSWORD = SECRET;
    const res = mockRes();
    const start = '2026-10-01T00:00:00.000Z';
    const end = '2026-10-31';
    await handler(
      {
        method: 'GET',
        headers: { authorization: `Bearer ${SECRET}` },
        query: { start, end, type: 'newsletter' },
      },
      res,
    );
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.objectContaining({ events: expect.any(Array) }));
    const groq = String(fetchMock.mock.calls[0][0]);
    expect(groq).toContain(`scheduledDate >= "${start}"`);
    expect(groq).toContain(`scheduledDate <= "${end}"`);
    expect(groq).toContain('type == "newsletter"');

    for (const type of ['all', 'blog', 'social', 'report', 'campaign', 'announcement']) {
      const next = mockRes();
      await handler(
        { method: 'GET', headers: { authorization: `Bearer ${SECRET}` }, query: { type } },
        next,
      );
      expect(next.statusCode, type).toBe(200);
    }
  });
});
