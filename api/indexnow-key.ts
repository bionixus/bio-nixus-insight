export default function handler(_req: any, res: any) {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return res.status(500).send('INDEXNOW_KEY not configured')
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  return res.status(200).send(String(key))
}

