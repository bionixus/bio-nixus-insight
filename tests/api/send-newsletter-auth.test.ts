import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@sanity/client', () => ({
  createClient: () => ({
    fetch: vi.fn(),
    patch: vi.fn(),
    create: vi.fn(),
  }),
}));

vi.mock('resend', () => ({
  Resend: class {
    emails = { send: vi.fn() };
  },
}));

import handler from '../../api/send-newsletter.js';

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

describe('send-newsletter auth', () => {
  it('fails closed on POST when ADMIN_PASSWORD is unset', async () => {
    delete process.env.ADMIN_PASSWORD;
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = mockRes();
    await handler(
      { method: 'POST', headers: { authorization: `Bearer ${SECRET}` }, body: { newsletterId: 'n1' } },
      res,
    );
    expect(res.statusCode).toBe(503);
    expect(res.body).toEqual({ error: 'Admin password is not configured' });
    expect(error).toHaveBeenCalled();
  });

  it('rejects a bad bearer token and continues when the password matches', async () => {
    process.env.ADMIN_PASSWORD = SECRET;
    const denied = mockRes();
    await handler(
      { method: 'POST', headers: { authorization: 'Bearer wrong-password-value' }, body: { newsletterId: 'n1' } },
      denied,
    );
    expect(denied.statusCode).toBe(401);
    expect(denied.body).toEqual({ error: 'Unauthorized' });

    const next = mockRes();
    await handler({ method: 'POST', headers: { authorization: `Bearer ${SECRET}` }, body: {} }, next);
    expect(next.statusCode).toBe(400);
    expect(next.body).toEqual({ error: 'Newsletter ID is required' });
  });

  it('still rejects non-POST before authentication', async () => {
    delete process.env.ADMIN_PASSWORD;
    const res = mockRes();
    await handler({ method: 'GET', headers: {}, body: {} }, res);
    expect(res.statusCode).toBe(405);
    expect(res.body).toEqual({ error: 'Method not allowed' });
  });
});
