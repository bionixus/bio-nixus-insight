export function generateVerificationEmail(
  firstName: string,
  verificationLink: string,
  language: string = 'en'
) {
  const content = {
    en: {
      subject: 'Verify your BioNixus subscription',
      title: 'Welcome to BioNixus!',
      greeting: `Hi ${firstName},`,
      message:
        'Thank you for subscribing to BioNixus Healthcare Market Research insights. Please verify your email address to complete your subscription.',
      button: 'Verify Email Address',
      footer:
        "If you didn't subscribe to this newsletter, you can safely ignore this email.",
    },
    ar: {
      subject: 'تأكيد اشتراكك في BioNixus',
      title: 'مرحباً بك في BioNixus!',
      greeting: `مرحباً ${firstName}،`,
      message:
        'شكراً لاشتراكك في رؤى أبحاث سوق الرعاية الصحية من BioNixus. يرجى تأكيد عنوان بريدك الإلكتروني لإكمال اشتراكك.',
      button: 'تأكيد البريد الإلكتروني',
      footer:
        'إذا لم تشترك في هذه النشرة الإخبارية، يمكنك تجاهل هذا البريد الإلكتروني بأمان.',
    },
  }

  const lang = content[language as keyof typeof content] || content.en
  const isRTL = language === 'ar'

  return `
<!DOCTYPE html>
<html lang="${language}" dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lang.subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: white; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0066cc 0%, #004999 100%); padding: 40px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">${lang.title}</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px 0;">
                ${lang.greeting}
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 30px 0;">
                ${lang.message}
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${verificationLink}" 
                       style="display: inline-block; padding: 16px 40px; background: #0066cc; 
                              color: white; text-decoration: none; border-radius: 6px; 
                              font-weight: bold; font-size: 16px;">
                      ${lang.button}
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 14px; line-height: 1.6; color: #666; margin: 30px 0 0 0;">
                ${lang.footer}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                <strong>BioNixus Healthcare Market Research</strong><br>
                Pharmaceutical Intelligence | GCC Markets
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}
