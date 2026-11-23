import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleRedirectStart } from '../../../lib/redirect-log.mjs';

type QueryRequest = IncomingMessage & { query?: Record<string, unknown> };

function firstString(value: unknown): string {
  if (typeof value === 'string') return value;
  if (Array.isArray(value) && typeof value[0] === 'string') return value[0];
  return '';
}

/** Survey entry. Rewritten from /go/:pid/:country. Logs a start, then 302s. */
export default function handler(req: QueryRequest, res: ServerResponse) {
  return handleRedirectStart(req, res, firstString(req.query?.pid), firstString(req.query?.country));
}
