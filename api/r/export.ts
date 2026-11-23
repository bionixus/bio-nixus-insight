import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleRedirectExport } from '../../lib/redirect-log.mjs';

type QueryRequest = IncomingMessage & { query?: Record<string, unknown> };

/** Token-protected CSV/JSON export of the survey redirect log. */
export default function handler(req: QueryRequest, res: ServerResponse) {
  return handleRedirectExport(req, res);
}
