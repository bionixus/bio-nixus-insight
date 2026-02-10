import { createClient } from '@sanity/client'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

export default async function handler(req: any, res: any) {
  // Support both GET (from email link) and POST
  const id = req.method === 'GET' ? req.query.id : req.body?.id

  if (!id) {
    return res.status(400).json({ error: 'Subscriber ID is required' })
  }

  try {
    const subscriber = await sanityServer.fetch(
      `*[_type == "subscriber" && _id == $id][0]`,
      { id }
    )

    if (!subscriber) {
      return res.status(404).json({ error: 'Subscriber not found' })
    }

    if (!subscriber.subscribed) {
      // Already unsubscribed - return success page for GET, JSON for POST
      if (req.method === 'GET') {
        return res.status(200).send(unsubscribeHtml('You have already been unsubscribed.', false))
      }
      return res.status(200).json({ success: true, message: 'Already unsubscribed' })
    }

    await sanityServer
      .patch(id)
      .set({
        subscribed: false,
        unsubscribedAt: new Date().toISOString(),
      })
      .commit()

    if (req.method === 'GET') {
      return res.status(200).send(unsubscribeHtml('You have been successfully unsubscribed.', true))
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed',
    })
  } catch (error: any) {
    console.error('Unsubscribe error:', error)
    if (req.method === 'GET') {
      return res.status(500).send(unsubscribeHtml('Something went wrong. Please try again or contact us at digital@bionixus.uk', false))
    }
    return res.status(500).json({ error: 'Unsubscribe failed' })
  }
}

function unsubscribeHtml(message: string, success: boolean): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribe - BioNixus</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f5f5f5; }
    .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); text-align: center; max-width: 480px; }
    .icon { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 22px; color: #1a1a1a; margin-bottom: 12px; }
    p { color: #666; line-height: 1.6; }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${success ? '✅' : '⚠️'}</div>
    <h1>${success ? 'Unsubscribed' : 'Oops'}</h1>
    <p>${message}</p>
    <p style="margin-top: 20px;"><a href="https://bionixus.com">← Back to BioNixus</a></p>
  </div>
</body>
</html>`
}
