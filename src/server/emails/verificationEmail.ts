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
    de: {
      subject: 'Bestätigen Sie Ihr BioNixus-Abonnement',
      title: 'Willkommen bei BioNixus!',
      greeting: `Hallo ${firstName},`,
      message:
        'Vielen Dank für Ihr Abonnement der BioNixus Healthcare-Marktforschungs-Insights. Bitte bestätigen Sie Ihre E-Mail-Adresse, um Ihr Abonnement abzuschließen.',
      button: 'E-Mail-Adresse bestätigen',
      footer:
        'Wenn Sie diesen Newsletter nicht abonniert haben, können Sie diese E-Mail ignorieren.',
    },
    fr: {
      subject: 'Confirmez votre abonnement BioNixus',
      title: 'Bienvenue chez BioNixus !',
      greeting: `Bonjour ${firstName},`,
      message:
        'Merci de vous être abonné(e) aux insights de BioNixus en recherche de marché santé. Veuillez confirmer votre adresse e-mail pour finaliser votre abonnement.',
      button: "Confirmer l'adresse e-mail",
      footer:
        "Si vous ne vous êtes pas abonné(e) à cette newsletter, vous pouvez ignorer cet e-mail.",
    },
    es: {
      subject: 'Confirma tu suscripción a BioNixus',
      title: '¡Bienvenido/a a BioNixus!',
      greeting: `Hola ${firstName},`,
      message:
        'Gracias por suscribirte a los insights de investigación de mercado sanitario de BioNixus. Por favor, verifica tu dirección de correo electrónico para completar tu suscripción.',
      button: 'Verificar correo electrónico',
      footer:
        'Si no te suscribiste a este boletín, puedes ignorar este correo electrónico.',
    },
    zh: {
      subject: '确认您的 BioNixus 订阅',
      title: '欢迎加入 BioNixus！',
      greeting: `您好 ${firstName}，`,
      message:
        '感谢您订阅 BioNixus 医疗市场研究洞察。请验证您的电子邮件地址以完成订阅。',
      button: '验证电子邮件',
      footer:
        '如果您没有订阅此通讯，可以安全地忽略此电子邮件。',
    },
  };

  const lang = content[language as keyof typeof content] || content.en;
  const isRTL = language === 'ar';

  return `
<!DOCTYPE html>
<html lang="${language}" dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lang.subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f0ede8; color: #142238;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f0ede8; padding: 30px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 24px rgba(20,34,56,0.08);">

          <tr>
            <td style="background: linear-gradient(135deg, #101c2e 0%, #1a2d4d 50%, #22304a 100%); padding: 48px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0 0 6px 0; font-family: 'Playfair Display', Georgia, serif; font-size: 30px; font-weight: 600; letter-spacing: -0.3px;">${lang.title}</h1>
              <div style="width: 40px; height: 3px; background: #f5a504; margin: 14px auto 0; border-radius: 2px;"></div>
            </td>
          </tr>

          <tr>
            <td style="padding: 44px 40px 48px;">
              <p style="font-size: 16px; line-height: 1.7; color: #142238; margin: 0 0 18px 0; font-weight: 500;">
                ${lang.greeting}
              </p>

              <p style="font-size: 15px; line-height: 1.7; color: #3a4a5e; margin: 0 0 36px 0;">
                ${lang.message}
              </p>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${verificationLink}"
                       style="display: inline-block; padding: 15px 44px; background: #f5a504;
                              color: #142238 !important; text-decoration: none; border-radius: 6px;
                              font-weight: 700; font-size: 15px; letter-spacing: 0.3px;
                              box-shadow: 0 3px 12px rgba(245,165,4,0.25);">
                      ${lang.button}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size: 13px; line-height: 1.6; color: #8a94a6; margin: 36px 0 0 0;">
                ${lang.footer}
              </p>
            </td>
          </tr>

          <tr>
            <td style="background: #f7f5f0; padding: 28px 40px; text-align: center; border-top: 1px solid #e8e4dd;">
              <p style="margin: 0; font-size: 12px; color: #5a6478; font-weight: 500;">
                BioNixus Healthcare Market Research
              </p>
              <p style="margin: 6px 0 0; font-size: 11px; color: #8a94a6;">
                Pharmaceutical Intelligence &middot; GCC Markets
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

