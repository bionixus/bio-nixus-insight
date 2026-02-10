import { Resend } from 'resend'
import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'

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
        contentType,
        content,
        htmlContent,
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

    // 2. Get subscribers
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

        // Handle different content types
        let bodyContent: string

        if (newsletter.contentType === 'html') {
          // Use raw HTML directly
          bodyContent = newsletter.htmlContent?.[locale] || newsletter.htmlContent?.en || ''
        } else {
          // Convert portable text to HTML
          const portableTextContent = newsletter.content?.[locale] || newsletter.content?.en
          bodyContent = portableTextToHTML(portableTextContent)
        }

        // Generate email HTML
        const emailHTML = generateEmailTemplate({
          subject,
          preheader,
          content: bodyContent,
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
            { name: 'content_type', value: newsletter.contentType },
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

/** Convert portable text to HTML using @portabletext/to-html */
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
