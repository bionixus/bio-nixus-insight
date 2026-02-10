import { createClient } from '@sanity/client'
import { Resend } from 'resend'
import { generateVerificationEmail } from '../src/lib/emails/verificationEmail'
import crypto from 'crypto'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.VITE_BASE_URL || 'https://bionixus.com'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    firstName,
    lastName,
    email,
    personalEmail,
    mobile,
    title,
    company,
    language,
    source,
  } = req.body

  if (!firstName || !email) {
    return res.status(400).json({ error: 'First name and email are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  try {
    const existing = await sanityServer.fetch(
      `
      *[_type == "subscriber" && email == $email][0]
    `,
      { email: email.toLowerCase().trim() }
    )

    if (existing && existing.subscribed && existing.emailVerified) {
      return res.status(400).json({ error: 'Email already subscribed and verified' })
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex')
    const verificationLink = `${BASE_URL}/verify-email?token=${verificationToken}`

    let subscriberId: string

    if (existing) {
      // Update existing subscriber
      await sanityServer
        .patch(existing._id)
        .set({
          subscribed: true,
          emailVerified: false,
          verificationToken,
          unsubscribedAt: null,
          firstName: firstName.trim(),
          lastName: lastName?.trim() || null,
          personalEmail: personalEmail?.trim() || null,
          mobile: mobile?.trim() || null,
          title: title?.trim() || null,
          company: company?.trim() || null,
          language: language || 'en',
        })
        .commit()

      subscriberId = existing._id
    } else {
      // Create new subscriber
      const result = await sanityServer.create({
        _type: 'subscriber',
        firstName: firstName.trim(),
        lastName: lastName?.trim() || null,
        email: email.toLowerCase().trim(),
        personalEmail: personalEmail?.trim() || null,
        mobile: mobile?.trim() || null,
        title: title?.trim() || null,
        company: company?.trim() || null,
        language: language || 'en',
        segments: ['all'],
        subscribed: true,
        emailVerified: false,
        verificationToken,
        subscribedAt: new Date().toISOString(),
        source: source || 'website',
      })

      subscriberId = result._id
    }

    // Send verification email
    await resend.emails.send({
      from: 'BioNixus <newsletter@bionixus.com>',
      to: email,
      subject:
        language === 'ar'
          ? 'تأكيد اشتراكك في BioNixus'
          : 'Verify your BioNixus subscription',
      html: generateVerificationEmail(firstName, verificationLink, language),
      tags: [
        { name: 'type', value: 'verification' },
        { name: 'subscriber_id', value: subscriberId },
      ],
    })

    return res.status(200).json({
      success: true,
      message: 'Verification email sent! Please check your inbox.',
    })
  } catch (error: any) {
    console.error('Subscription error:', error)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
