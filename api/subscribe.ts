import { createClient } from '@sanity/client'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, name, language } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    // Check if subscriber already exists
    const existing = await sanityServer.fetch(
      `
      *[_type == "subscriber" && email == $email][0]
    `,
      { email }
    )

    if (existing) {
      // Resubscribe if previously unsubscribed
      if (!existing.subscribed) {
        await sanityServer
          .patch(existing._id)
          .set({ subscribed: true, unsubscribedAt: null })
          .commit()

        return res.status(200).json({ success: true, message: 'Resubscribed successfully!' })
      }

      return res.status(400).json({ error: 'Email already subscribed' })
    }

    // Create new subscriber
    await sanityServer.create({
      _type: 'subscriber',
      email,
      name: name || '',
      language: language || 'en',
      segments: ['all'],
      subscribed: true,
      subscribedAt: new Date().toISOString(),
      source: 'website',
    })

    // TODO: Send welcome email via Resend

    return res.status(200).json({ success: true })
  } catch (error: any) {
    console.error('Subscription error:', error)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
