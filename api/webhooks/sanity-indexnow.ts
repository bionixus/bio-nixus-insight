type MaybeSanitySlug =
  | string
  | {
      current?: string
    }

function getBaseUrl() {
  return process.env.INDEXNOW_BASE_URL || 'https://www.bionixus.com'
}

function resolvePathFromPayload(payload: any): string | null {
  const type = payload?._type || payload?.type || payload?.documentType
  const slugValue: MaybeSanitySlug = payload?.slug || payload?.document?.slug || payload?.result?.slug
  const slug =
    typeof slugValue === 'string'
      ? slugValue
      : typeof slugValue?.current === 'string'
      ? slugValue.current
      : null

  // Allow explicit URL/path from webhook projection if configured
  if (typeof payload?.url === 'string' && payload.url.startsWith('http')) {
    try {
      return new URL(payload.url).pathname
    } catch {
      // Ignore malformed absolute URL
    }
  }
  if (typeof payload?.path === 'string' && payload.path.startsWith('/')) {
    return payload.path
  }

  if (!slug) return null
  if (type === 'caseStudy') return `/case-studies/${slug}`
  if (type === 'post' || type === 'blogPost') return `/blog/${slug}`
  return null
}

async function submitToIndexNow(urls: string[]) {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return { ok: false, status: 500, error: 'INDEXNOW_KEY not configured' }
  }

  const baseUrl = getBaseUrl()
  const host = new URL(baseUrl).hostname
  const keyLocation = `${baseUrl}/api/indexnow-key`
  const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow'

  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList: urls,
    }),
  })

  if (!resp.ok) {
    const text = await resp.text()
    return { ok: false, status: resp.status, error: text || 'IndexNow submission failed' }
  }

  return { ok: true, status: resp.status }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Optional webhook auth guard (set this in Sanity webhook header)
  const secret = process.env.SANITY_INDEXNOW_WEBHOOK_SECRET
  if (secret) {
    const provided = req.headers['x-webhook-secret'] || req.headers['authorization']
    const token =
      typeof provided === 'string' && provided.startsWith('Bearer ')
        ? provided.slice(7)
        : provided
    if (token !== secret) {
      return res.status(401).json({ error: 'Unauthorized webhook' })
    }
  }

  try {
    const payload = req.body || {}
    const path = resolvePathFromPayload(payload)
    if (!path) {
      return res.status(200).json({
        success: true,
        skipped: true,
        reason: 'No indexable blog/case-study path in payload',
      })
    }

    const url = `${getBaseUrl()}${path}`
    const result = await submitToIndexNow([url])
    if (!result.ok) {
      return res.status(result.status || 500).json({ error: result.error, url })
    }

    return res.status(200).json({
      success: true,
      submitted: 1,
      url,
    })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'IndexNow webhook failed' })
  }
}

