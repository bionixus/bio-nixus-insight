import { Resend } from 'resend'
import {
  buildDownloadNotifyEmail,
  validateDownloadNotifyPayload,
} from '../src/lib/notifyDownloadLead'

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_EMAIL = 'admin@bionixus.com'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' })
  }

  const parsed = validateDownloadNotifyPayload(req.body)
  if (!parsed.ok) {
    return res.status(400).json({ error: parsed.error })
  }

  const { subject, html } = buildDownloadNotifyEmail(parsed.data)

  try {
    const result = await resend.emails.send({
      from: 'BioNixus Website <newsletter@bionixus.com>',
      to: ADMIN_EMAIL,
      replyTo: parsed.data.workEmail,
      subject,
      html,
      tags: [
        { name: 'type', value: 'gated_download' },
        { name: 'form_variant', value: parsed.data.formVariant.slice(0, 64) },
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
