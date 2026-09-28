import { clientIpFromHeaders, processHighLevelLead } from '../src/server/highlevelLead.js'

/**
 * Edge runtime so this route does not count as a Node serverless function.
 * Vercel Hobby allows 12 Node functions per deployment; this was the 13th
 * and every deploy since 589acd88 failed at the function-count check.
 */
export const config = {
  runtime: 'edge',
}

function headerRecord(headers: Headers): Record<string, string> {
  const out: Record<string, string> = {}
  headers.forEach((value, key) => {
    out[key] = value
  })
  return out
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  let body: unknown = null
  try {
    body = await request.json()
  } catch {
    body = null
  }

  const result = await processHighLevelLead(body, {
    env: process.env,
    ip: clientIpFromHeaders(headerRecord(request.headers)),
  })
  return Response.json(result.body, { status: result.status })
}
