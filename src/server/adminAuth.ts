import { timingSafeEqual } from 'node:crypto';

export const ADMIN_PASSWORD_NOT_CONFIGURED = 'Admin password is not configured';

type StatusResponder = {
  status: (code: number) => { json: (body: unknown) => unknown };
};

/** Empty and missing values are unconfigured. The password is never read from a literal. */
export function configuredAdminPassword(): string | null {
  const value = process.env.ADMIN_PASSWORD;
  if (typeof value !== 'string' || value.length === 0) return null;
  return value;
}

/**
 * Constant-time string compare. `timingSafeEqual` requires equal-length buffers,
 * so a length mismatch compares the input to itself and then fails.
 */
export function timingSafeStringEqual(provided: string, expected: string): boolean {
  const encoder = new TextEncoder();
  const left = encoder.encode(provided);
  const right = encoder.encode(expected);
  if (left.byteLength !== right.byteLength) {
    timingSafeEqual(left, left);
    return false;
  }
  return timingSafeEqual(left, right);
}

export function adminPasswordMatches(provided: unknown): boolean {
  const expected = configuredAdminPassword();
  if (!expected || typeof provided !== 'string') return false;
  return timingSafeStringEqual(provided, expected);
}

/** Sends 503 and returns true when the response has already been written. */
export function rejectUnconfiguredAdminPassword(res: StatusResponder): boolean {
  if (configuredAdminPassword()) return false;
  console.error('[admin-auth] ADMIN_PASSWORD is not configured');
  res.status(503).json({ error: ADMIN_PASSWORD_NOT_CONFIGURED });
  return true;
}

/** Fail closed, then compare the bearer token. Returns true only when the password matches. */
export function requireAdminBearer(
  req: { headers?: { authorization?: unknown } },
  res: StatusResponder,
): boolean {
  if (rejectUnconfiguredAdminPassword(res)) return false;
  const header = req.headers?.authorization;
  const token = typeof header === 'string' && header.startsWith('Bearer ') ? header.substring(7) : '';
  if (!token || !adminPasswordMatches(token)) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}
