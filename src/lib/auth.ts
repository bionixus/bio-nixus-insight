// Simple admin authentication for API routes.
// In production, use a proper auth solution (e.g., Clerk, Auth0).

import { adminPasswordMatches, rejectUnconfiguredAdminPassword } from '@/server/adminAuth';

export function requireAuth(handler: (req: any, res: any) => Promise<void>) {
  return async (req: any, res: any) => {
    if (rejectUnconfiguredAdminPassword(res)) return;

    const authHeader = req.headers?.authorization;

    if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.substring(7);

    if (!adminPasswordMatches(token)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return handler(req, res);
  };
}
