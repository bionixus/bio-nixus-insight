import { Resend } from 'resend'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'
import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'
import { selectBatchRecipients } from '../lib/newsletter/selectBatchRecipients'
import { getCompanyDomain } from '../lib/newsletter/companyDomain'

// ─── Config ───
export const config = {
  api: { bodyParser: { sizeLimit: '2mb' } },
  maxDuration: 300, // 5 min — 305 emails × ~600ms each + retries
}

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.VITE_BASE_URL || 'https://www.bionixus.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'
const NEWSLETTER_FROM =
  process.env.NEWSLETTER_FROM_EMAIL || 'BioNixus Market Research <emea@bionixus.com>'
const NEWSLETTER_REPLY_TO = process.env.NEWSLETTER_REPLY_TO || 'admin@bionixus.com'

// ─── AWS SES setup (opt-in — requires USE_AWS_SES=true in addition to credentials) ───
// SES stays disabled until explicitly enabled, so Resend is the default even if
// AWS credentials are present (e.g. from a Vercel integration). Once SES is out of
// sandbox, set USE_AWS_SES=true in Vercel env vars to switch.
const SES_ENABLED = !!(
  process.env.USE_AWS_SES === 'true' &&
  process.env.AWS_SES_ACCESS_KEY_ID &&
  process.env.AWS_SES_SECRET_ACCESS_KEY &&
  process.env.AWS_SES_REGION
)
const SES_FROM = process.env.AWS_SES_FROM_EMAIL || NEWSLETTER_FROM
const SES_REPLY_TO = process.env.AWS_SES_REPLY_TO || NEWSLETTER_REPLY_TO
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
  newsletterId: string,
  template?: { id: string; variables?: Record<string, string | number> }
): Promise<SendResult> {
  try {
    const payload: Parameters<typeof resend.emails.send>[0] = {
      from: NEWSLETTER_FROM,
      replyTo: NEWSLETTER_REPLY_TO,
      to,
      subject,
      headers: { 'X-Entity-Ref-ID': newsletterId },
      tags,
      ...(template
        ? { template: { id: template.id, variables: template.variables } }
        : { html }),
    }

    const result = await resend.emails.send(payload)

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
  newsletterId: string,
  resendTemplate?: { id: string; variables?: Record<string, string | number> }
): Promise<SendResult> {
  if (SES_ENABLED) {
    return sendViaSES(to, subject, html, tags)
  }
  return sendViaResend(to, subject, html, tags, newsletterId, resendTemplate)
}

// ─── Parallel batch helper ───
async function sendBatch(
  items: {
    subscriber: any
    subject: string
    html: string
    tags: { name: string; value: string }[]
    resendTemplate?: { id: string; variables?: Record<string, string | number> }
  }[],
  newsletterId: string
): Promise<{ subscriber: any; result: SendResult }[]> {
  return Promise.all(
    items.map(async (item) => {
      const result = await sendEmail(
        item.subscriber.email,
        item.subject,
        item.html,
        item.tags,
        newsletterId,
        item.resendTemplate
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

  const { newsletterId, confirmedSubject, confirmedPreheader, contentReviewed } = req.body

  if (!newsletterId) {
    return res.status(400).json({ error: 'Newsletter ID is required' })
  }

  if (!contentReviewed) {
    return res.status(400).json({
      error: 'Content review required — confirm subject, preheader, and preview before sending',
    })
  }

  try {
    // 1. Get newsletter from Sanity
    const provider = SES_ENABLED ? 'AWS SES' : 'Resend'
    console.log(`[Newsletter] Provider: ${provider}`)
    console.log(`[Newsletter] Fetching newsletter ${newsletterId}...`)

    const newsletter = await sanityServer.fetch(
      `*[_type == "newsletter" && _id == $id][0] {
        _id, title, subject, preheader, contentType, content, htmlContent,
        targetSegments, excludeSegments, manualRecipientIds, status, resendTemplateId
      }`,
      { id: newsletterId }
    )

    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' })
    }

    if (newsletter.status === 'sent') {
      return res.status(400).json({ error: 'Newsletter already fully sent' })
    }

    console.log(`[Newsletter] Found: "${newsletter.title}", segments: ${newsletter.targetSegments?.join(', ')}`)

    const targetSegments = newsletter.targetSegments || ['all']
    const manualRecipientIds: string[] = newsletter.manualRecipientIds || []
    const batch = await selectBatchRecipients(sanityServer, newsletter._id, targetSegments, {
      manualRecipientIds,
      excludeSegments: newsletter.excludeSegments || [],
    })

    console.log(
      `[Newsletter] Batch: ${batch.toSend.length} to send, ${batch.remainingAfterBatch} remaining after batch`
    )

    if (batch.toSend.length === 0) {
      return res.status(400).json({
        error: 'No recipients eligible for today\'s batch',
        skipped: batch.skipped,
        remaining: batch.remainingAfterBatch,
      })
    }

    const subscribers = batch.toSend

    // 3. Prepare all emails
    const emailItems: {
      subscriber: any
      subject: string
      html: string
      tags: { name: string; value: string }[]
      resendTemplate?: { id: string; variables?: Record<string, string | number> }
    }[] = []

    const useResendTemplate = !SES_ENABLED && !!newsletter.resendTemplateId

    for (const subscriber of subscribers) {
      const locale = subscriber.language || 'en'
      const sanitySubject =
        newsletter.subject?.[locale] || newsletter.subject?.en || newsletter.title || 'Newsletter'
      const subject =
        confirmedSubject?.trim() || sanitySubject
      const preheader =
        confirmedPreheader?.trim() ||
        newsletter.preheader?.[locale] ||
        newsletter.preheader?.en ||
        ''

      let bodyContent = ''
      if (newsletter.contentType === 'html') {
        bodyContent = newsletter.htmlContent?.[locale] || newsletter.htmlContent?.en || ''
      } else {
        const ptContent = newsletter.content?.[locale] || newsletter.content?.en
        bodyContent = ptContent ? portableTextToHTML(ptContent) : ''
      }

      const unsubscribeLink = `${BASE_URL}/unsubscribe?id=${subscriber._id}`

      const html =
        useResendTemplate
          ? ''
          : newsletter.contentType === 'html' && isCompleteHtmlDocument(bodyContent)
            ? personalizeHtmlNewsletter(bodyContent, { unsubscribeLink })
            : generateEmailTemplate({
                subject,
                preheader,
                content: bodyContent,
                unsubscribeLink,
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
        ...(useResendTemplate
          ? {
              resendTemplate: {
                id: newsletter.resendTemplateId,
                variables: { SUBSCRIBER_UNSUBSCRIBE_URL: unsubscribeLink },
              },
            }
          : {}),
      })
    }

    // 4. Send sequentially respecting rate limits
    //    SES: up to 14/sec — batches of 10 with 800ms delay
    //    Resend: 2/sec limit — send one-by-one with 600ms delay + retry on 429
    const BATCH_SIZE = SES_ENABLED ? 10 : 1
    const BATCH_DELAY = SES_ENABLED ? 800 : 600 // ms between batches
    const MAX_RETRIES = 3

    const errors: string[] = []
    const failedEmails: { email: string; subscriberId: string; reason: string }[] = []
    const successIds: string[] = []
    const deliveryRecords: {
      subscriber: any
      resendEmailId?: string
    }[] = []
    let successCount = 0
    let failedCount = 0

    for (let i = 0; i < emailItems.length; i += BATCH_SIZE) {
      const batch = emailItems.slice(i, i + BATCH_SIZE)
      const batchNum = Math.floor(i / BATCH_SIZE) + 1
      const totalBatches = Math.ceil(emailItems.length / BATCH_SIZE)

      if (batchNum % 50 === 1 || BATCH_SIZE > 1) {
        console.log(`[Newsletter] Sending ${batchNum}/${totalBatches} (${batch.length} emails)...`)
      }

      const results = await sendBatch(batch, newsletter._id)

      for (const { subscriber, result } of results) {
        if (result.success) {
          successIds.push(subscriber._id)
          deliveryRecords.push({ subscriber, resendEmailId: result.messageId })
          successCount++
        } else if (result.error?.includes('Too many requests') || result.error?.includes('rate')) {
          // Rate-limited — retry with exponential backoff
          let retrySuccess = false
          for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            const backoff = attempt * 1500 // 1.5s, 3s, 4.5s
            console.log(`[Newsletter] Rate-limited ${subscriber.email}, retry ${attempt}/${MAX_RETRIES} in ${backoff}ms`)
            await sleep(backoff)
            const item = batch.find((b) => b.subscriber._id === subscriber._id)
            const retry = await sendEmail(
              subscriber.email,
              item?.subject ?? batch[0].subject,
              item?.html ?? batch[0].html,
              item?.tags ?? batch[0].tags,
              newsletter._id,
              item?.resendTemplate
            )
            if (retry.success) {
              successIds.push(subscriber._id)
              deliveryRecords.push({ subscriber, resendEmailId: retry.messageId })
              successCount++
              retrySuccess = true
              break
            }
            if (!retry.error?.includes('Too many requests') && !retry.error?.includes('rate')) {
              // Different error — don't retry
              break
            }
          }
          if (!retrySuccess) {
            console.error(`[Newsletter] ✗ ${subscriber.email}: ${result.error} (after ${MAX_RETRIES} retries)`)
            errors.push(`${subscriber.email}: ${result.error}`)
            failedEmails.push({ email: subscriber.email, subscriberId: subscriber._id, reason: result.error || 'Rate limit exceeded' })
            failedCount++
          }
        } else {
          console.error(`[Newsletter] ✗ ${subscriber.email}: ${result.error}`)
          errors.push(`${subscriber.email}: ${result.error}`)
          failedEmails.push({ email: subscriber.email, subscriberId: subscriber._id, reason: result.error || 'Unknown error' })
          failedCount++
        }
      }

      // Rate-limiting delay between sends
      if (i + BATCH_SIZE < emailItems.length) {
        await sleep(BATCH_DELAY)
      }
    }

    console.log(`[Newsletter] Done: ${successCount} succeeded, ${failedCount} failed (via ${provider})`)

    const now = new Date().toISOString()

    if (successCount === 0) {
      return res.status(500).json({
        success: false,
        error: `All ${failedCount} emails failed`,
        provider,
        errors,
        failedEmails,
        skipped: batch.skipped,
      })
    }

    // 5. Create newsletterDelivery records
    for (const { subscriber, resendEmailId } of deliveryRecords) {
      try {
        await sanityServer.create({
          _type: 'newsletterDelivery',
          newsletter: { _type: 'reference', _ref: newsletter._id },
          subscriber: { _type: 'reference', _ref: subscriber._id },
          email: subscriber.email,
          firstName: subscriber.firstName || null,
          lastName: subscriber.lastName || null,
          company: subscriber.company || null,
          companyDomain: subscriber.companyDomain || getCompanyDomain(subscriber.email),
          sentAt: now,
          resendEmailId: resendEmailId || null,
          status: 'sent',
          openCount: 0,
          clickCount: 0,
        })
      } catch (e: any) {
        console.error(`[Newsletter] Delivery record error for ${subscriber.email}:`, e?.message || e)
      }
    }

    // 6. Update subscriber analytics (batch by 25, flush incrementally to avoid timeout)
    const ANALYTICS_BATCH = 25
    for (let i = 0; i < successIds.length; i += ANALYTICS_BATCH) {
      const chunk = successIds.slice(i, i + ANALYTICS_BATCH)
      let tx = sanityServer.transaction()
      for (const id of chunk) {
        tx = tx.patch(id, (p: any) =>
          p.setIfMissing({ analytics: {} })
           .inc({ 'analytics.emailsSent': 1 })
           .set({ 'analytics.lastEmailSent': now })
        )
      }
      try {
        await tx.commit()
        console.log(`[Newsletter] Analytics updated for ${Math.min(i + ANALYTICS_BATCH, successIds.length)}/${successIds.length}`)
      } catch (e: any) {
        console.error(`Subscriber analytics batch error (${i}-${i + ANALYTICS_BATCH}):`, e?.message || e)
      }
    }

    const isComplete = batch.remainingAfterBatch === 0
    const prevStats = (await sanityServer.fetch(
      `*[_type == "newsletter" && _id == $id][0].stats`,
      { id: newsletter._id }
    )) || {}

    const cumulativeSuccess = (prevStats.successCount || 0) + successCount
    const cumulativeFailed = (prevStats.failedCount || 0) + failedCount

    const sentManualIds = new Set(successIds.filter((id) => manualRecipientIds.includes(id)))
    const remainingManualIds = manualRecipientIds.filter((id) => !sentManualIds.has(id))

    await sanityServer
      .patch(newsletter._id)
      .set({
        status: isComplete ? 'sent' : 'in_progress',
        manualRecipientIds: remainingManualIds,
        ...(newsletter.status === 'draft' ? { sendStartedAt: now } : {}),
        ...(isComplete ? { sentAt: now, sendCompletedAt: now } : {}),
        stats: {
          totalSent: cumulativeSuccess,
          successCount: cumulativeSuccess,
          failedCount: cumulativeFailed,
          openCount: prevStats.openCount || 0,
          uniqueOpenCount: prevStats.uniqueOpenCount || 0,
          clickCount: prevStats.clickCount || 0,
          uniqueClickCount: prevStats.uniqueClickCount || 0,
          bounceCount: prevStats.bounceCount || 0,
          complaintCount: prevStats.complaintCount || 0,
          unsubscribeCount: prevStats.unsubscribeCount || 0,
          openRate: prevStats.openRate || 0,
          clickRate: prevStats.clickRate || 0,
          bounceRate: prevStats.bounceRate || 0,
          remainingCount: batch.remainingAfterBatch,
        },
      })
      .commit()

    // 8. Store failed emails as separate documents
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
      batchSent: successCount,
      successCount: cumulativeSuccess,
      failedCount: cumulativeFailed,
      skipped: batch.skipped,
      remaining: batch.remainingAfterBatch,
      status: isComplete ? 'sent' : 'in_progress',
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

/** Newsletters in /newsletters are self-contained HTML documents — do not wrap again. */
function isCompleteHtmlDocument(html: string): boolean {
  const trimmed = html.trim()
  return /<!DOCTYPE\s+html/i.test(trimmed) || /^<html[\s>]/i.test(trimmed)
}

function personalizeHtmlNewsletter(
  html: string,
  { unsubscribeLink }: { unsubscribeLink: string }
): string {
  const safeLink = escapeHtml(unsubscribeLink)
  return html
    .replace(/\{\{\{SUBSCRIBER_UNSUBSCRIBE_URL\}\}\}/g, safeLink)
    .replace(/\{\{UNSUBSCRIBE_URL\}\}/g, safeLink)
    .replace(
      /(<a\b[^>]*href=["'])#(["'][^>]*>\s*Unsubscribe)/gi,
      `$1${safeLink}$2`
    )
}

// ═══════════════════════════════════════════════════════════════════
// Email template generator
// ═══════════════════════════════════════════════════════════════════
function generateEmailTemplate({
  subject,
  preheader,
  content,
  unsubscribeLink,
}: {
  subject: string
  preheader: string
  content: string
  unsubscribeLink: string
}) {
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
    <!-- Content -->
    <tr>
      <td style="padding: 24px 24px 0 24px;">
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
