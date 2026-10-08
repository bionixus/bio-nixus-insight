import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ADMIN_PASSWORD_NOT_CONFIGURED,
  adminPasswordMatches,
  configuredAdminPassword,
  requireAdminBearer,
  timingSafeStringEqual,
} from '@/server/adminAuth';
import { requireAuth } from '@/lib/auth';

const ROOT = resolve(__dirname, '../..');
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

describe('admin password', () => {
  it('compares equal-length strings in constant time and rejects length mismatches', () => {
    expect(timingSafeStringEqual(SECRET, SECRET)).toBe(true);
    expect(timingSafeStringEqual('unit-test-admin-secreX', SECRET)).toBe(false);
    expect(timingSafeStringEqual('short', SECRET)).toBe(false);
    expect(timingSafeStringEqual('', SECRET)).toBe(false);
  });

  it('does not authenticate when ADMIN_PASSWORD is unset', () => {
    delete process.env.ADMIN_PASSWORD;
    expect(configuredAdminPassword()).toBeNull();
    expect(adminPasswordMatches(SECRET)).toBe(false);
    expect(adminPasswordMatches('')).toBe(false);

    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = mockRes();
    const allowed = requireAdminBearer({ headers: { authorization: `Bearer ${SECRET}` } }, res);
    expect(allowed).toBe(false);
    expect(res.statusCode).toBe(503);
    expect(res.body).toEqual({ error: ADMIN_PASSWORD_NOT_CONFIGURED });
    expect(error).toHaveBeenCalled();
    expect(JSON.stringify(error.mock.calls)).not.toContain(SECRET);
  });

  it('accepts only the configured password', () => {
    process.env.ADMIN_PASSWORD = SECRET;
    const res = mockRes();
    expect(requireAdminBearer({ headers: { authorization: 'Bearer wrong-password-value' } }, res)).toBe(false);
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ error: 'Unauthorized' });

    const ok = mockRes();
    expect(requireAdminBearer({ headers: { authorization: `Bearer ${SECRET}` } }, ok)).toBe(true);
    expect(ok.statusCode).toBe(200);
  });

  it('requireAuth fails closed and never calls the handler when unset', async () => {
    delete process.env.ADMIN_PASSWORD;
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const handler = vi.fn(async () => {});
    const wrapped = requireAuth(handler);
    const res = mockRes();
    await wrapped({ headers: { authorization: `Bearer ${SECRET}` } }, res);
    expect(handler).not.toHaveBeenCalled();
    expect(res.statusCode).toBe(503);
    expect(res.body).toEqual({ error: ADMIN_PASSWORD_NOT_CONFIGURED });
    expect(error).toHaveBeenCalled();
  });

  it('does not keep a hardcoded password fallback in api or server auth code', () => {
    const files = [
      'api/calendar.ts',
      'api/admin.ts',
      'api/send-newsletter.ts',
      'src/lib/auth.ts',
      'src/server/adminAuth.ts',
    ];
    for (const file of files) {
      const src = readFileSync(resolve(ROOT, file), 'utf8');
      expect(src, file).not.toMatch(/ADMIN_PASSWORD\s*\|\|/);
      expect(src, file).not.toMatch(/process\.env\.ADMIN_PASSWORD\s*\|\|/);
    }
  });
});
