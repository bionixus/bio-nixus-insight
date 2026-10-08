import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@sanity/client', () => ({
  createClient: () => ({
    fetch: vi.fn(async () => []),
    create: vi.fn(async () => ({ _id: 'created' })),
    patch: vi.fn(),
    delete: vi.fn(),
  }),
}));

import handler from '../../api/admin.js';

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

afterEach(() => {
  if (ORIGINAL === undefined) delete process.env.ADMIN_PASSWORD;
  else process.env.ADMIN_PASSWORD = ORIGINAL;
  vi.restoreAllMocks();
});

describe('admin auth', () => {
  it('does not verify a password when ADMIN_PASSWORD is unset', async () => {
    delete process.env.ADMIN_PASSWORD;
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = mockRes();
    await handler(
      { method: 'POST', query: { action: 'verify' }, headers: {}, body: { password: SECRET } },
      res,
    );
    expect(res.statusCode).toBe(503);
    expect(res.body).toEqual({ error: 'Admin password is not configured' });
    expect(res.body).not.toEqual({ success: true });
    expect(error).toHaveBeenCalled();
  });

  it('verifies with a constant-time match and rejects a different password', async () => {
    process.env.ADMIN_PASSWORD = SECRET;
    const ok = mockRes();
    await handler(
      { method: 'POST', query: { action: 'verify' }, headers: {}, body: { password: SECRET } },
      ok,
    );
    expect(ok.statusCode).toBe(200);
    expect(ok.body).toEqual({ success: true });

    const bad = mockRes();
    await handler(
      {
        method: 'POST',
        query: { action: 'verify' },
        headers: {},
        body: { password: 'unit-test-admin-secreX' },
      },
      bad,
    );
    expect(bad.statusCode).toBe(401);
    expect(bad.body).toEqual({ error: 'Invalid password' });
  });

  it('fails closed on authenticated actions and still allows the public share tracker', async () => {
    delete process.env.ADMIN_PASSWORD;
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const denied = mockRes();
    await handler(
      {
        method: 'GET',
        query: { action: 'subscribers' },
        headers: { authorization: `Bearer ${SECRET}` },
      },
      denied,
    );
    expect(denied.statusCode).toBe(503);
    expect(denied.body).toEqual({ error: 'Admin password is not configured' });

    const share = mockRes();
    await handler(
      { method: 'POST', query: { action: 'track-share' }, headers: {}, body: {} },
      share,
    );
    expect(share.statusCode).toBe(400);
    expect(share.body).toEqual({ error: 'Missing required fields' });
    expect(error).toHaveBeenCalled();
  });
});
