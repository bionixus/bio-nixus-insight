import { clientIpFromHeaders, processHighLevelLead } from '../src/server/highlevelLead.js'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const result = await processHighLevelLead(req.body, {
    env: process.env,
    ip: clientIpFromHeaders(req.headers),
  })
  return res.status(result.status).json(result.body)
}
