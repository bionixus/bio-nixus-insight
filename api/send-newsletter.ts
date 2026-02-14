import { Resend } from 'resend'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'
import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'

// ─── Config ───
export const config = {
  api: { bodyParser: { sizeLimit: '2mb' } },
  maxDuration: 120, // Allow up to 120s for large sends
}

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.VITE_BASE_URL || 'https://bionixus.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

// ─── AWS SES setup (optional — used when env vars are set) ───
const SES_ENABLED = !!(
  process.env.AWS_SES_ACCESS_KEY_ID &&
  process.env.AWS_SES_SECRET_ACCESS_KEY &&
  process.env.AWS_SES_REGION
)
const SES_FROM = process.env.AWS_SES_FROM_EMAIL || 'BioNixus Market Research <newsletter@bionixus.com>'
const SES_REPLY_TO = process.env.AWS_SES_REPLY_TO || 'digital@bionixus.uk'
const SES_CONFIG_SET = process.env.AWS_SES_CONFIG_SET || '' // Optional: for open/click tracking

let sesClient: SESv2Client | null = null
if (SES_ENABLED) {
  sesClient = new SESv2Client({
    region: process.env.AWS_SES_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY!,
    },
  })
}

// ─── Provider abstraction ───
type SendResult = { success: boolean; messageId?: string; error?: string }

async function sendViaSES(
  to: string,
  subject: string,
  html: string,
  tags: { name: string; value: string }[]
): Promise<SendResult> {
  if (!sesClient) return { success: false, error: 'SES not configured' }

  try {
    const cmd = new SendEmailCommand({
      FromEmailAddress: SES_FROM,
      ReplyToAddresses: [SES_REPLY_TO],
      Destination: { ToAddresses: [to] },
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: 'UTF-8' },
          Body: { Html: { Data: html, Charset: 'UTF-8' } },
        },
      },
      EmailTags: tags.map((t) => ({ Name: t.name, Value: t.value })),
      ...(SES_CONFIG_SET ? { ConfigurationSetName: SES_CONFIG_SET } : {}),
    })

    const result = await sesClient.send(cmd)
    return { success: true, messageId: result.MessageId }
  } catch (err: any) {
    return { success: false, error: err.message || 'SES send error' }
  }
}

async function sendViaResend(
  to: string,
  subject: string,
  html: string,
  tags: { name: string; value: string }[],
  newsletterId: string
): Promise<SendResult> {
  try {
    const result = await resend.emails.send({
      from: 'BioNixus Market Research <newsletter@bionixus.com>',
      replyTo: 'digital@bionixus.uk',
      to,
      subject,
      html,
      headers: { 'X-Entity-Ref-ID': newsletterId },
      tags,
    })

    if (result.error) {
      return { success: false, error: result.error.message }
    }
    return { success: true, messageId: result.data?.id }
  } catch (err: any) {
    return { success: false, error: err.message || 'Resend send error' }
  }
}

async function sendEmail(
  to: string,
  subject: string,
  html: string,
  tags: { name: string; value: string }[],
  newsletterId: string
): Promise<SendResult> {
  if (SES_ENABLED) {
    return sendViaSES(to, subject, html, tags)
  }
  return sendViaResend(to, subject, html, tags, newsletterId)
}

// ─── Parallel batch helper ───
async function sendBatch(
  items: { subscriber: any; subject: string; html: string; tags: { name: string; value: string }[] }[],
  newsletterId: string
): Promise<{ subscriber: any; result: SendResult }[]> {
  return Promise.all(
    items.map(async (item) => {
      const result = await sendEmail(
        item.subscriber.email,
        item.subject,
        item.html,
        item.tags,
        newsletterId
      )
      return { subscriber: item.subscriber, result }
    })
  )
}

// Small delay helper
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

// ═══════════════════════════════════════════════════════════════════
// Main handler
// ═══════════════════════════════════════════════════════════════════
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Auth check
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { newsletterId } = req.body

  if (!newsletterId) {
    return res.status(400).json({ error: 'Newsletter ID is required' })
  }

  try {
    // 1. Get newsletter from Sanity
    const provider = SES_ENABLED ? 'AWS SES' : 'Resend'
    console.log(`[Newsletter] Provider: ${provider}`)
    console.log(`[Newsletter] Fetching newsletter ${newsletterId}...`)

    const newsletter = await sanityServer.fetch(
      `*[_type == "newsletter" && _id == $id][0] {
        _id, title, subject, preheader, contentType, content, htmlContent, targetSegments, status
      }`,
      { id: newsletterId }
    )

    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' })
    }

    if (newsletter.status === 'sent') {
      return res.status(400).json({ error: 'Newsletter already sent' })
    }

    console.log(`[Newsletter] Found: "${newsletter.title}", segments: ${newsletter.targetSegments?.join(', ')}`)

    // 2. Get subscribers
    const targetSegments = newsletter.targetSegments || ['all']
    const hasNoVerifySegment = targetSegments.some(
      (s: string) => s === 'pharma_cold_leads' || s === 'test_list'
    )

    const subscribers = await sanityServer.fetch(
      `*[_type == "subscriber" && subscribed == true && count((segments[@ in $targetSegments])) > 0 && (
        emailVerified == true ||
        ($hasNoVerifySegment && ("pharma_cold_leads" in segments || "test_list" in segments))
      )] { _id, email, firstName, lastName, language }`,
      { targetSegments, hasNoVerifySegment: hasNoVerifySegment || false }
    )

    console.log(`[Newsletter] Found ${subscribers.length} matching subscribers`)

    if (!subscribers || subscribers.length === 0) {
      return res.status(400).json({ error: 'No subscribers found for target segments' })
    }

    // 3. Prepare all emails
    const emailItems: { subscriber: any; subject: string; html: string; tags: { name: string; value: string }[] }[] = []

    for (const subscriber of subscribers) {
      const locale = subscriber.language || 'en'
      const subject = newsletter.subject?.[locale] || newsletter.subject?.en || newsletter.title || 'Newsletter'
      const preheader = newsletter.preheader?.[locale] || newsletter.preheader?.en || ''

      let bodyContent = ''
      if (newsletter.contentType === 'html') {
        bodyContent = newsletter.htmlContent?.[locale] || newsletter.htmlContent?.en || ''
      } else {
        const ptContent = newsletter.content?.[locale] || newsletter.content?.en
        bodyContent = ptContent ? portableTextToHTML(ptContent) : ''
      }

      const subscriberName = [subscriber.firstName, subscriber.lastName].filter(Boolean).join(' ')
      const html = generateEmailTemplate({
        subject,
        preheader,
        content: bodyContent,
        subscriberName,
        subscriberId: subscriber._id,
        unsubscribeLink: `${BASE_URL}/unsubscribe?id=${subscriber._id}`,
      })

      emailItems.push({
        subscriber,
        subject,
        html,
        tags: [
          { name: 'newsletter_id', value: newsletter._id },
          { name: 'subscriber_id', value: subscriber._id },
          { name: 'language', value: locale },
        ],
      })
    }

    // 4. Send in parallel batches
    //    SES: up to 14/sec typical rate, use batches of 10 with 200ms delay
    //    Resend: 100/day limit on free tier, send sequentially (batch of 2)
    const BATCH_SIZE = SES_ENABLED ? 10 : 2
    const BATCH_DELAY = SES_ENABLED ? 200 : 100 // ms between batches

    const errors: string[] = []
    const failedEmails: { email: string; subscriberId: string; reason: string }[] = []
    const successIds: string[] = []
    let successCount = 0
    let failedCount = 0

    for (let i = 0; i < emailItems.length; i += BATCH_SIZE) {
      const batch = emailItems.slice(i, i + BATCH_SIZE)
      const batchNum = Math.floor(i / BATCH_SIZE) + 1
      const totalBatches = Math.ceil(emailItems.length / BATCH_SIZE)

      console.log(`[Newsletter] Sending batch ${batchNum}/${totalBatches} (${batch.length} emails)...`)

      const results = await sendBatch(batch, newsletter._id)

      for (const { subscriber, result } of results) {
        if (result.success) {
          console.log(`[Newsletter] ✓ ${subscriber.email} -> ${result.messageId}`)
          successIds.push(subscriber._id)
          successCount++
        } else {
          console.error(`[Newsletter] ✗ ${subscriber.email}: ${result.error}`)
          errors.push(`${subscriber.email}: ${result.error}`)
          failedEmails.push({
            email: subscriber.email,
            subscriberId: subscriber._id,
            reason: result.error || 'Unknown error',
          })
          failedCount++
        }
      }

      // Rate-limiting delay between batches
      if (i + BATCH_SIZE < emailItems.length) {
        await sleep(BATCH_DELAY)
      }
    }

    console.log(`[Newsletter] Done: ${successCount} succeeded, ${failedCount} failed (via ${provider})`)

    // 5. Update subscriber analytics (batch by 50)
    const now = new Date().toISOString()
    for (let i = 0; i < successIds.length; i += 50) {
      const batch = successIds.slice(i, i + 50)
      let tx = sanityServer.transaction()
      for (const id of batch) {
        tx = tx.patch(id, (p: any) =>
          p.setIfMissing({ analytics: {} })
           .inc({ 'analytics.emailsSent': 1 })
           .set({ 'analytics.lastEmailSent': now })
        )
      }
      try { await tx.commit() } catch (e) { console.error('Subscriber analytics batch error:', e) }
    }

    // 6. Mark as sent if at least one succeeded
    if (successCount === 0) {
      return res.status(500).json({
        success: false,
        error: `All ${failedCount} emails failed`,
        provider,
        errors,
        failedEmails,
      })
    }

    await sanityServer
      .patch(newsletter._id)
      .set({
        status: 'sent',
        sentAt: now,
        stats: {
          totalSent: subscribers.length,
          successCount,
          failedCount,
          openCount: 0, uniqueOpenCount: 0,
          clickCount: 0, uniqueClickCount: 0,
          bounceCount: 0, complaintCount: 0, unsubscribeCount: 0,
          openRate: 0, clickRate: 0, bounceRate: 0,
        },
      })
      .commit()

    // 7. Store failed emails as separate documents
    if (failedEmails.length > 0) {
      let tx = sanityServer.transaction()
      for (const fe of failedEmails) {
        tx = tx.create({
          _type: 'failedEmail',
          newsletterId: newsletter._id,
          newsletterTitle: newsletter.title,
          email: fe.email,
          subscriberId: fe.subscriberId,
          reason: fe.reason,
          eventType: 'send_failed',
          timestamp: now,
        })
      }
      try { await tx.commit() } catch (e) { console.error('Failed email tracking error:', e) }
    }

    return res.status(200).json({
      success: true,
      provider,
      totalSent: subscribers.length,
      successCount,
      failedCount,
      failedEmails: failedEmails.length > 0 ? failedEmails : undefined,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (error: any) {
    console.error('[Newsletter] Fatal error:', error?.message || error)
    return res.status(500).json({ error: error?.message || 'Unknown error occurred' })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Portable Text to HTML
// ═══════════════════════════════════════════════════════════════════
function portableTextToHTML(content: any): string {
  if (!content) return ''

  return toHTML(content, {
    components: {
      types: {
        image: ({ value }: any) =>
          `<img src="${escapeHtml(value.url)}" alt="${escapeHtml(value.alt || '')}" style="max-width: 100%; height: auto; margin: 20px 0;" />`,
      },
      marks: {
        link: ({ value, children }: any) =>
          `<a href="${escapeHtml(value.href)}" style="color: #0066cc; text-decoration: underline;">${children}</a>`,
        strong: ({ children }: any) => `<strong>${children}</strong>`,
        em: ({ children }: any) => `<em>${children}</em>`,
      },
      block: {
        h1: ({ children }: any) =>
          `<h1 style="font-size: 28px; margin: 30px 0 20px 0; color: #222;">${children}</h1>`,
        h2: ({ children }: any) =>
          `<h2 style="font-size: 24px; margin: 25px 0 15px 0; color: #333;">${children}</h2>`,
        h3: ({ children }: any) =>
          `<h3 style="font-size: 20px; margin: 20px 0 10px 0; color: #444;">${children}</h3>`,
        normal: ({ children }: any) =>
          `<p style="margin: 15px 0; line-height: 1.6;">${children}</p>`,
      },
      list: {
        bullet: ({ children }: any) =>
          `<ul style="margin: 15px 0; padding-left: 30px;">${children}</ul>`,
        number: ({ children }: any) =>
          `<ol style="margin: 15px 0; padding-left: 30px;">${children}</ol>`,
      },
      listItem: {
        bullet: ({ children }: any) => `<li style="margin: 5px 0;">${children}</li>`,
        number: ({ children }: any) => `<li style="margin: 5px 0;">${children}</li>`,
      },
    },
  })
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ═══════════════════════════════════════════════════════════════════
// Email template generator
// ═══════════════════════════════════════════════════════════════════
function generateEmailTemplate({
  subject,
  preheader,
  content,
  subscriberName,
  subscriberId,
  unsubscribeLink,
}: any) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${escapeHtml(subject)}</title>
  <style>
    body, html { margin: 0; padding: 0; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; }
    img { max-width: 100% !important; height: auto !important; display: block; border: 0; }
    table { border-collapse: collapse; }
    a { color: #0066cc; text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px;">${escapeHtml(preheader || '')}</div>
  
  <!--[if mso]><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center"><![endif]-->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; margin: 0 auto; background: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="text-align: center; background: linear-gradient(135deg, #0a1628 0%, #1a2d4d 100%); background-color: #0a1628; padding: 28px 20px;">
        <div style="font-size: 26px; font-weight: bold; color: #ffffff; letter-spacing: 2px; text-transform: uppercase;">BioNixus</div>
        <p style="color: #c8a45a; margin: 8px 0 0 0; font-size: 14px; letter-spacing: 1px;">Healthcare Market Research</p>
      </td>
    </tr>
    <!-- Greeting -->
    ${subscriberName ? `<tr><td style="padding: 24px 24px 0 24px; font-size: 16px; color: #333;">Hi ${escapeHtml(subscriberName)},</td></tr>` : ''}
    <!-- Content -->
    <tr>
      <td style="padding: 16px 0 0 0;">
        ${content}
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="padding: 24px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; text-align: center;">
        <p style="margin: 0 0 4px 0;"><strong>BioNixus Healthcare Market Research</strong></p>
        <p style="margin: 0 0 16px 0;">Pharmaceutical Intelligence | GCC Markets</p>
        <p style="margin: 0 0 8px 0;">
          <a href="${escapeHtml(unsubscribeLink)}" style="color: #0066cc;">Unsubscribe</a> &nbsp;|&nbsp; 
          <a href="${BASE_URL}" style="color: #0066cc;">Visit Website</a>
        </p>
        <p style="margin: 8px 0 0 0; font-size: 11px; color: #999;">
          You're receiving this because you subscribed to BioNixus newsletters.
        </p>
      </td>
    </tr>
  </table>
  <!--[if mso]></td></tr></table><![endif]-->
</body>
</html>
  `
}
