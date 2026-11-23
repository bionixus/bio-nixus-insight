import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleRedirectEnd } from '../../lib/redirect-log.mjs';

type QueryRequest = IncomingMessage & { query?: Record<string, unknown> };

/**
 * Public survey end page. Vercel passes the path segment as req.query.outcome.
 * Rewritten from /r/complete, /r/terminate, /r/overquota and /r/quality.
 */
export default function handler(req: QueryRequest, res: ServerResponse) {
  const outcome = typeof req.query?.outcome === 'string' ? req.query.outcome : '';
  return handleRedirectEnd(req, res, outcome);
}
