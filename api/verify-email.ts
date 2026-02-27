import { createClient } from '@sanity/client'
import { Resend } from 'resend'
import { generateWelcomeEmail } from '../src/server/emails/welcomeEmail.js'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

const resend = new Resend(process.env.RESEND_API_KEY)
const VERIFY_SUBSCRIBER_QUERY: string = `
  *[_type == "subscriber" && verificationToken == $token][0]
`

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
    const tokenValue = String(token)
    const subscriber = await sanityServer.fetch(
      VERIFY_SUBSCRIBER_QUERY as any,
      { token: tokenValue } as any
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
        verificationToken: null,
      })
      .commit()

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'BioNixus Market Research <newsletter@bionixus.com>',
        to: subscriber.email,
        subject:
          subscriber.language === 'ar'
            ? 'مرحباً بك في BioNixus لرؤى الرعاية الصحية'
            : 'Welcome to BioNixus Healthcare Insights',
        html: generateWelcomeEmail(subscriber.firstName, subscriber.language, subscriber._id),
        tags: [
          { name: 'type', value: 'welcome' },
          { name: 'subscriber_id', value: subscriber._id },
        ],
      })
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the verification if welcome email fails
    }

    return res.status(200).json({ success: true })
  } catch (error: any) {
    console.error('Verification error:', error)
    return res.status(500).json({ error: 'Verification failed' })
  }
}
