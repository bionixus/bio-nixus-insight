import { createClient } from '@sanity/client'
import { Resend } from 'resend'
import { generateVerificationEmail } from '../src/server/emails/verificationEmail.js'
import crypto from 'crypto'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.VITE_BASE_URL || 'https://www.bionixus.com'
const ADMIN_EMAIL = 'admin@bionixus.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const BUSINESS_EMAIL_REQUIRED_MESSAGE =
  'Please use a business/company email only. Personal addresses (Gmail, Yahoo, Outlook, and similar) are not accepted.'
const FREE_MAIL_LABELS = new Set([
  'gmail',
  'googlemail',
  'yahoo',
  'ymail',
  'rocketmail',
  'hotmail',
  'outlook',
  'live',
  'msn',
  'icloud',
  'aol',
  'protonmail',
  'gmx',
  'yandex',
])
const FREE_MAIL_EXACT = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'ymail.com',
  'rocketmail.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'mail.com',
  'protonmail.com',
  'protonmail.ch',
  'proton.me',
  'pm.me',
  'gmx.com',
  'gmx.de',
  'gmx.net',
  'yandex.com',
  'yandex.ru',
  'mail.ru',
  'inbox.com',
  'hey.com',
  'tutanota.com',
  'tuta.io',
  'rediffmail.com',
  'qq.com',
  '163.com',
  '126.com',
  'naver.com',
  'daum.net',
  'web.de',
  'orange.fr',
  'wanadoo.fr',
  'libero.it',
  'btinternet.com',
  'virginmedia.com',
  'sky.com',
])

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function isFreeMailDomain(email: string): boolean {
  const at = email.lastIndexOf('@')
  if (at === -1) return false
  const domain = email.slice(at + 1).trim().toLowerCase()
  if (!domain) return false
  if (FREE_MAIL_EXACT.has(domain)) return true
  return FREE_MAIL_LABELS.has(domain.split('.')[0])
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function handleGatedDownloadNotify(req: any, res: any) {
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  const workEmail = asTrimmedString(body.workEmail)
  const reportName = asTrimmedString(body.reportName)
  const formVariant = asTrimmedString(body.formVariant)
  const company = asTrimmedString(body.company) || 'not provided'

  if (!workEmail) {
    return res.status(400).json({ error: 'Work email is required' })
  }
  if (!EMAIL_RE.test(workEmail) || isFreeMailDomain(workEmail)) {
    return res.status(400).json({ error: BUSINESS_EMAIL_REQUIRED_MESSAGE })
  }
  if (!reportName || !formVariant) {
    return res.status(400).json({ error: 'Report name and form variant are required' })
  }

  const rows: Array<[string, string]> = [
    ['Work email', workEmail],
    ['Company', company],
    ['Country', asTrimmedString(body.country) || 'not provided'],
    ['Report', reportName],
    ['Request type', asTrimmedString(body.requestType) || 'Gated Asset Download'],
    ['Form', formVariant],
    ['Source page', asTrimmedString(body.sourcePage)],
    ['Source URL', asTrimmedString(body.sourceUrl)],
    ['utm_source', asTrimmedString(body.utmSource)],
    ['utm_medium', asTrimmedString(body.utmMedium)],
    ['utm_campaign', asTrimmedString(body.utmCampaign)],
    ['utm_content', asTrimmedString(body.utmContent)],
    ['utm_term', asTrimmedString(body.utmTerm)],
  ]

  const subject = `Report download request — ${reportName} (${company})`
  const html = `
    <p>A website download form was submitted. This notice was sent instead of Formspree.</p>
    <table cellpadding="6" cellspacing="0" border="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join('')}
    </table>
  `

  try {
    const result = await resend.emails.send({
      from: 'BioNixus Website <newsletter@bionixus.com>',
      to: ADMIN_EMAIL,
      replyTo: workEmail,
      subject,
      html,
      tags: [
        { name: 'type', value: 'gated_download' },
        { name: 'form_variant', value: formVariant.slice(0, 64) },
      ],
    })

    if (result.error) {
      console.error('Download notify Resend error:', result.error)
      return res.status(502).json({ error: 'Failed to send download notification' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Download notify error:', error)
    return res.status(500).json({ error: 'Failed to send download notification' })
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (req.body?.intent === 'gated-download-notify') {
    return handleGatedDownloadNotify(req, res)
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
      return res.status(200).json({
        success: true,
        alreadySubscribed: true,
        message: 'You are already subscribed! Check your email for our latest updates.',
      })
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
      from: 'BioNixus Market Research <newsletter@bionixus.com>',
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
