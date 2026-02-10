import { createClient } from '@sanity/client'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export default async function handler(req: any, res: any) {
  const { id, language = 'en' } = req.query

  if (!id) {
    return res.status(400).send('Missing newsletter ID')
  }

  try {
    const newsletter = await sanityServer.fetch(
      `
      *[_type == "newsletter" && _id == $id][0] {
        subject,
        preheader,
        htmlContent
      }
    `,
      { id }
    )

    if (!newsletter) {
      return res.status(404).send('Newsletter not found')
    }

    const htmlContent =
      newsletter.htmlContent?.[language] || newsletter.htmlContent?.en || ''
    const subject =
      newsletter.subject?.[language] || newsletter.subject?.en || 'Preview'
    const preheader =
      newsletter.preheader?.[language] || newsletter.preheader?.en || ''

    const html = `
<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f4;
    }
    .preview-banner {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 20px;
      text-align: center;
      font-size: 14px;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .preview-banner strong { font-weight: 600; }
    .language-selector {
      background: white;
      padding: 12px 20px;
      text-align: center;
      border-bottom: 1px solid #e0e0e0;
    }
    .language-selector a {
      display: inline-block;
      margin: 0 8px;
      padding: 6px 14px;
      background: #f0f0f0;
      color: #333;
      text-decoration: none;
      border-radius: 4px;
      font-size: 13px;
      transition: all 0.2s;
    }
    .language-selector a:hover {
      background: #0066cc;
      color: white;
    }
    .language-selector a.active {
      background: #0066cc;
      color: white;
      font-weight: bold;
    }
    .email-container { 
      max-width: 600px; 
      margin: 30px auto; 
      background: white; 
      padding: 30px; 
      border-radius: 8px; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .subject-line {
      background: #f8f9fa;
      border-left: 4px solid #0066cc;
      padding: 12px 16px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .subject-line strong { color: #0066cc; }
    .footer { 
      margin-top: 40px; 
      padding-top: 20px; 
      border-top: 1px solid #e0e0e0; 
      font-size: 12px; 
      color: #666; 
      text-align: center; 
    }
  </style>
</head>
<body>
  <div class="preview-banner">
    📧 <strong>Newsletter Preview</strong> - This is how your email will appear to subscribers
  </div>
  
  <div class="language-selector">
    <a href="?id=${id}&language=en" class="${language === 'en' ? 'active' : ''}">English</a>
    <a href="?id=${id}&language=ar" class="${language === 'ar' ? 'active' : ''}">العربية</a>
    <a href="?id=${id}&language=de" class="${language === 'de' ? 'active' : ''}">Deutsch</a>
    <a href="?id=${id}&language=fr" class="${language === 'fr' ? 'active' : ''}">Français</a>
    <a href="?id=${id}&language=es" class="${language === 'es' ? 'active' : ''}">Español</a>
    <a href="?id=${id}&language=zh" class="${language === 'zh' ? 'active' : ''}">中文</a>
  </div>

  <div class="email-container">
    <div class="subject-line">
      <strong>Subject:</strong> ${subject}<br>
      ${preheader ? `<div style="margin-top: 6px; font-size: 13px; color: #666;"><strong>Preheader:</strong> ${preheader}</div>` : ''}
    </div>

    <div class="content">
      ${htmlContent || '<p style="color: #999; font-style: italic; text-align: center; padding: 40px 20px;">No content available for this language yet.</p>'}
    </div>
    
    <div class="footer">
      <p><strong>BioNixus Healthcare Market Research</strong></p>
      <p>Pharmaceutical Intelligence | GCC Markets</p>
      <p style="margin-top: 15px;">
        <a href="#" style="color: #0066cc; text-decoration: none;">Unsubscribe</a> | 
        <a href="#" style="color: #0066cc; text-decoration: none;">Visit Website</a>
      </p>
    </div>
  </div>
</body>
</html>
    `

    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  } catch (error: any) {
    res.status(500).send(`Error: ${error.message}`)
  }
}
