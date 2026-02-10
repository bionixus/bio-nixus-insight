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

  const { token } = req.body

  if (!token) {
    return res.status(400).json({ error: 'Token is required' })
  }

  try {
    // Find subscriber with this token
    const subscriber = await sanityServer.fetch(
      `
      *[_type == "subscriber" && verificationToken == $token][0]
    `,
      { token }
    )

    if (!subscriber) {
      return res.status(404).json({ error: 'Invalid or expired verification token' })
    }

    if (subscriber.emailVerified) {
      return res.status(400).json({ error: 'Email already verified' })
    }

    // Update subscriber
    await sanityServer
      .patch(subscriber._id)
      .set({
        emailVerified: true,
        verifiedAt: new Date().toISOString(),
        verificationToken: null, // Clear token after use
      })
      .commit()

    return res.status(200).json({ success: true })
  } catch (error: any) {
    console.error('Verification error:', error)
    return res.status(500).json({ error: 'Verification failed' })
  }
}
