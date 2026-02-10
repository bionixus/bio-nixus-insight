import { Resend } from 'resend'
import { createClient } from '@sanity/client'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.VITE_BASE_URL || 'https://bionixus.com'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { newsletterId } = req.body

  try {
    // 1. Get newsletter from Sanity
    const newsletter = await sanityServer.fetch(
      `
      *[_type == "newsletter" && _id == $id][0] {
        _id,
        title,
        subject,
        preheader,
        content,
        featuredImage,
        targetSegments,
        status
      }
    `,
      { id: newsletterId }
    )

    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' })
    }

    if (newsletter.status === 'sent') {
      return res.status(400).json({ error: 'Newsletter already sent' })
    }

    // 2. Get subscribers for target segments
    const subscribers = await sanityServer.fetch(
      `
      *[_type == "subscriber" && subscribed == true && count((segments[@ in $targetSegments])) > 0] {
        _id,
        email,
        name,
        language
      }
    `,
      { targetSegments: newsletter.targetSegments }
    )

    if (subscribers.length === 0) {
      return res.status(400).json({ error: 'No subscribers found for target segments' })
    }

    // 3. Send emails
    const results = await Promise.allSettled(
      subscribers.map(async (subscriber: any) => {
        const locale = subscriber.language || 'en'

        // Get localized content
        const subject = newsletter.subject[locale] || newsletter.subject.en
        const preheader = newsletter.preheader?.[locale] || newsletter.preheader?.en
        const bodyContent = newsletter.content[locale] || newsletter.content.en

        // Convert portable text to HTML
        const htmlContent = portableTextToHTML(bodyContent)

        // Generate email HTML
        const emailHTML = generateEmailTemplate({
          subject,
          preheader,
          content: htmlContent,
          subscriberName: subscriber.name,
          subscriberId: subscriber._id,
          unsubscribeLink: `${BASE_URL}/unsubscribe?id=${subscriber._id}`,
        })

        // Send via Resend
        return await resend.emails.send({
          from: 'Mohammad Al-Ubaydli <newsletter@bionixus.com>',
          to: subscriber.email,
          subject: subject,
          html: emailHTML,
          headers: {
            'X-Entity-Ref-ID': newsletter._id,
          },
          tags: [
            { name: 'newsletter_id', value: newsletter._id },
            { name: 'language', value: locale },
          ],
        })
      })
    )

    // 4. Calculate statistics
    const successCount = results.filter((r) => r.status === 'fulfilled').length
    const failedCount = results.filter((r) => r.status === 'rejected').length

    // 5. Update newsletter in Sanity
    await sanityServer
      .patch(newsletter._id)
      .set({
        status: 'sent',
        sentAt: new Date().toISOString(),
        stats: {
          totalSent: subscribers.length,
          successCount,
          failedCount,
        },
      })
      .commit()

    return res.status(200).json({
      success: true,
      totalSent: subscribers.length,
      successCount,
      failedCount,
    })
  } catch (error: any) {
    console.error('Newsletter send error:', error)
    return res.status(500).json({ error: error.message })
  }
}

/** Simple portable text blocks to HTML converter */
function portableTextToHTML(blocks: any[]): string {
  if (!Array.isArray(blocks)) return String(blocks || '')

  return blocks
    .map((block) => {
      if (block._type !== 'block') return ''

      const style = block.style || 'normal'
      const text = (block.children || [])
        .map((child: any) => {
          let t = escapeHtml(child.text || '')
          if (child.marks?.includes('strong')) t = `<strong>${t}</strong>`
          if (child.marks?.includes('em')) t = `<em>${t}</em>`
          if (child.marks?.includes('underline')) t = `<u>${t}</u>`
          return t
        })
        .join('')

      switch (style) {
        case 'h1':
          return `<h1>${text}</h1>`
        case 'h2':
          return `<h2>${text}</h2>`
        case 'h3':
          return `<h3>${text}</h3>`
        case 'h4':
          return `<h4>${text}</h4>`
        case 'blockquote':
          return `<blockquote>${text}</blockquote>`
        default:
          return `<p>${text}</p>`
      }
    })
    .join('\n')
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Email template generator
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
  <title>${escapeHtml(subject)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { text-align: center; border-bottom: 3px solid #0066cc; padding-bottom: 20px; margin-bottom: 30px; }
    .logo { font-size: 24px; font-weight: bold; color: #0066cc; }
    .content { margin: 20px 0; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; text-align: center; }
    a { color: #0066cc; text-decoration: none; }
    .button { display: inline-block; padding: 12px 24px; background: #0066cc; color: white !important; border-radius: 4px; text-decoration: none; margin: 20px 0; }
  </style>
</head>
<body>
  <div style="display: none; max-height: 0; overflow: hidden;">${escapeHtml(preheader || '')}</div>
  
  <div class="container">
    <div class="header">
      <div class="logo">BioNixus</div>
      <p style="color: #666; margin: 10px 0 0 0;">Healthcare Market Research</p>
    </div>
    
    <div class="content">
      ${subscriberName ? `<p>Hi ${escapeHtml(subscriberName)},</p>` : ''}
      ${content}
    </div>
    
    <div class="footer">
      <p><strong>BioNixus Healthcare Market Research</strong></p>
      <p>Pharmaceutical Intelligence | GCC Markets</p>
      <p style="margin-top: 20px;">
        <a href="${escapeHtml(unsubscribeLink)}">Unsubscribe</a> | 
        <a href="${BASE_URL}">Visit Website</a>
      </p>
      <p style="margin-top: 10px; font-size: 11px; color: #999;">
        You're receiving this because you subscribed to BioNixus newsletters.
      </p>
    </div>
  </div>
</body>
</html>
  `
}
