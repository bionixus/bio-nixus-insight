export function generateWelcomeEmail(
  firstName: string,
  language: string = 'en',
  subscriberId: string = ''
) {
  const unsubscribeUrl = subscriberId
    ? `https://www.bionixus.com/unsubscribe?id=${subscriberId}`
    : 'https://www.bionixus.com/unsubscribe'
  const content = {
    en: {
      subject: 'Welcome to BioNixus Healthcare Insights',
      title: 'Welcome Aboard! 🎉',
      greeting: `Hi ${firstName},`,
      intro: 'Thank you for verifying your email and joining BioNixus Healthcare Market Research.',
      whatToExpect: 'What to expect from us:',
      benefits: [
        '📊 Monthly pharmaceutical market insights',
        '🔬 Exclusive intelligence reports',
        '💡 Expert analysis on biosimilars and oncology trends',
        '🌍 Regional healthcare policy updates',
        '🎯 Customized content based on your interests',
      ],
      resources: 'Explore our resources:',
      resourceLinks: [
        { text: 'Latest Market Reports', url: 'https://www.bionixus.com/blog' },
        { text: 'Case Studies', url: 'https://www.bionixus.com/case-studies' },
        { text: 'Contact Us', url: 'https://www.bionixus.com/contact' },
      ],
      footer:
        "We're excited to have you in our community of pharmaceutical professionals.",
      cta: 'Explore More',
      ctaMeeting: 'Book a Meeting',
      signature:
        'Best regards,<br><strong>Mohammad Alsaadany</strong><br>Director, BioNixus Healthcare Market Research',
    },
    ar: {
      subject: 'مرحباً بك في BioNixus لرؤى الرعاية الصحية',
      title: 'مرحباً بك! 🎉',
      greeting: `مرحباً ${firstName}،`,
      intro: 'شكراً لتأكيد بريدك الإلكتروني والانضمام إلى BioNixus لأبحاث سوق الرعاية الصحية.',
      whatToExpect: 'ما يمكن توقعه منا:',
      benefits: [
        '📊 رؤى شهرية لسوق الأدوية',
        '🔬 تقارير استخباراتية حصرية',
        '💡 تحليلات خبراء حول الأدوية الحيوية المماثلة واتجاهات علاج الأورام',
        '🌍 تحديثات السياسات الصحية الإقليمية',
        '🎯 محتوى مخصص بناءً على اهتماماتك',
      ],
      resources: 'استكشف مواردنا:',
      resourceLinks: [
        { text: 'أحدث تقارير السوق', url: 'https://www.bionixus.com/blog' },
        { text: 'دراسات الحالة', url: 'https://www.bionixus.com/case-studies' },
        { text: 'تواصل معنا', url: 'https://www.bionixus.com/contact' },
      ],
      footer:
        'نحن متحمسون لوجودك في مجتمعنا من المتخصصين في مجال الأدوية.',
      cta: 'استكشف المزيد',
      ctaMeeting: 'احجز اجتماعاً',
      signature:
        'مع أطيب التحيات،<br><strong>محمد السعداني</strong><br>المدير، BioNixus لأبحاث سوق الرعاية الصحية',
    },
    de: {
      subject: 'Willkommen bei BioNixus Healthcare Insights',
      title: 'Willkommen an Bord! 🎉',
      greeting: `Hallo ${firstName},`,
      intro: 'Vielen Dank für die Bestätigung Ihrer E-Mail und Ihre Teilnahme an BioNixus Healthcare-Marktforschung.',
      whatToExpect: 'Was Sie von uns erwarten können:',
      benefits: [
        '📊 Monatliche Pharma-Markt-Insights',
        '🔬 Exklusive Geheimdienstberichte',
        '💡 Expertenanalysen zu Biosimilars und Onkologie-Trends',
        '🌍 Regionale Updates zur Gesundheitspolitik',
        '🎯 Personalisierte Inhalte basierend auf Ihren Interessen',
      ],
      resources: 'Entdecken Sie unsere Ressourcen:',
      resourceLinks: [
        { text: 'Neueste Marktberichte', url: 'https://www.bionixus.com/blog' },
        { text: 'Fallstudien', url: 'https://www.bionixus.com/case-studies' },
        { text: 'Kontakt', url: 'https://www.bionixus.com/contact' },
      ],
      footer: 'Wir freuen uns, Sie in unserer Gemeinschaft von Pharma-Experten begrüßen zu dürfen.',
      cta: 'Mehr entdecken',
      ctaMeeting: 'Meeting buchen',
      signature: 'Mit freundlichen Grüßen,<br><strong>Mohammad Alsaadany</strong><br>Director, BioNixus Healthcare Market Research',
    },
    fr: {
      subject: 'Bienvenue chez BioNixus Healthcare Insights',
      title: 'Bienvenue à bord ! 🎉',
      greeting: `Bonjour ${firstName},`,
      intro: 'Merci d\'avoir confirmé votre e-mail et rejoint BioNixus en recherche de marché santé.',
      whatToExpect: 'Ce que vous pouvez attendre de nous :',
      benefits: [
        '📊 Insights mensuels sur le marché pharmaceutique',
        '🔬 Rapports de renseignement exclusifs',
        '💡 Analyses d\'experts sur les biosimilaires et les tendances en oncologie',
        '🌍 Mises à jour régionales sur les politiques de santé',
        '🎯 Contenu personnalisé selon vos intérêts',
      ],
      resources: 'Explorez nos ressources :',
      resourceLinks: [
        { text: 'Derniers rapports de marché', url: 'https://www.bionixus.com/blog' },
        { text: 'Études de cas', url: 'https://www.bionixus.com/case-studies' },
        { text: 'Contactez-nous', url: 'https://www.bionixus.com/contact' },
      ],
      footer: 'Nous sommes ravis de vous accueillir dans notre communauté de professionnels pharmaceutiques.',
      cta: 'Explorer davantage',
      ctaMeeting: 'Réserver une réunion',
      signature: 'Cordialement,<br><strong>Mohammad Alsaadany</strong><br>Directeur, BioNixus Healthcare Market Research',
    },
    es: {
      subject: 'Bienvenido/a a BioNixus Healthcare Insights',
      title: '¡Bienvenido/a! 🎉',
      greeting: `Hola ${firstName},`,
      intro: 'Gracias por verificar tu correo y unirte a BioNixus en investigación de mercado sanitario.',
      whatToExpect: 'Qué puedes esperar de nosotros:',
      benefits: [
        '📊 Insights mensuales del mercado farmacéutico',
        '🔬 Informes de inteligencia exclusivos',
        '💡 Análisis de expertos sobre biosimilares y tendencias en oncología',
        '🌍 Actualizaciones regionales de políticas sanitarias',
        '🎯 Contenido personalizado según tus intereses',
      ],
      resources: 'Explora nuestros recursos:',
      resourceLinks: [
        { text: 'Últimos informes de mercado', url: 'https://www.bionixus.com/blog' },
        { text: 'Estudios de caso', url: 'https://www.bionixus.com/case-studies' },
        { text: 'Contáctanos', url: 'https://www.bionixus.com/contact' },
      ],
      footer: 'Estamos encantados de tenerte en nuestra comunidad de profesionales farmacéuticos.',
      cta: 'Explorar más',
      ctaMeeting: 'Reservar una reunión',
      signature: 'Saludos cordiales,<br><strong>Mohammad Alsaadany</strong><br>Director, BioNixus Healthcare Market Research',
    },
    zh: {
      subject: '欢迎加入 BioNixus 医疗健康洞察',
      title: '欢迎加入！🎉',
      greeting: `您好 ${firstName}，`,
      intro: '感谢您验证邮箱并加入 BioNixus 医疗市场研究。',
      whatToExpect: '您可以期待的内容：',
      benefits: [
        '📊 每月制药市场洞察',
        '🔬 独家情报报告',
        '💡 生物类似药和肿瘤学趋势的专家分析',
        '🌍 区域医疗政策更新',
        '🎯 根据您的兴趣定制的内容',
      ],
      resources: '探索我们的资源：',
      resourceLinks: [
        { text: '最新市场报告', url: 'https://www.bionixus.com/blog' },
        { text: '案例研究', url: 'https://www.bionixus.com/case-studies' },
        { text: '联系我们', url: 'https://www.bionixus.com/contact' },
      ],
      footer: '我们很高兴您加入我们的制药专业人士社区。',
      cta: '探索更多',
      ctaMeeting: '预约会议',
      signature: '此致敬礼，<br><strong>Mohammad Alsaadany</strong><br>Director, BioNixus Healthcare Market Research',
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
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f0ede8; color: #142238;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f0ede8; padding: 30px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 24px rgba(20,34,56,0.08);">

          <!-- Hero Header — deep navy gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #101c2e 0%, #1a2d4d 50%, #22304a 100%); padding: 50px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0 0 8px 0; font-family: 'Playfair Display', Georgia, serif; font-size: 30px; font-weight: 600; letter-spacing: -0.3px;">${lang.title}</h1>
              <div style="width: 40px; height: 3px; background: #f5a504; margin: 14px auto 0; border-radius: 2px;"></div>
              <p style="color: rgba(255,255,255,0.6); margin: 16px 0 0; font-size: 14px; font-weight: 400;">BioNixus Healthcare Market Research</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 44px 40px 48px;">
              <p style="font-size: 16px; line-height: 1.7; color: #142238; margin: 0 0 18px 0; font-weight: 500;">
                ${lang.greeting}
              </p>

              <p style="font-size: 15px; line-height: 1.7; color: #3a4a5e; margin: 0 0 32px 0;">
                ${lang.intro}
              </p>

              <!-- What to Expect -->
              <h2 style="color: #142238; font-family: 'Playfair Display', Georgia, serif; font-size: 20px; margin: 0 0 18px 0; padding-bottom: 10px; border-bottom: 2px solid #f5a504;">
                ${lang.whatToExpect}
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                ${lang.benefits
                  .map(
                    (benefit: string) => `
                  <tr>
                    <td style="padding: 9px 0; font-size: 14px; line-height: 1.7; color: #3a4a5e;">
                      ${benefit}
                    </td>
                  </tr>
                `
                  )
                  .join('')}
              </table>

              <!-- Resources -->
              <h2 style="color: #142238; font-family: 'Playfair Display', Georgia, serif; font-size: 20px; margin: 0 0 18px 0; padding-bottom: 10px; border-bottom: 2px solid #f5a504;">
                ${lang.resources}
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                ${lang.resourceLinks
                  .map(
                    (link: any) => `
                  <tr>
                    <td style="padding: 8px 0;">
                      <a href="${link.url}" style="color: #1a2d4d; text-decoration: none; font-size: 14px; font-weight: 600;">
                        &rarr; ${link.text}
                      </a>
                    </td>
                  </tr>
                `
                  )
                  .join('')}
              </table>

              <!-- CTA Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 36px 0;">
                <tr>
                  <td align="center" style="padding-bottom: 14px;">
                    <a href="https://www.bionixus.com/"
                       style="display: inline-block; padding: 15px 44px; background: #f5a504;
                              color: #142238 !important; text-decoration: none; border-radius: 6px;
                              font-weight: 700; font-size: 15px; letter-spacing: 0.3px;
                              box-shadow: 0 3px 12px rgba(245,165,4,0.25);">
                      ${lang.cta} &rarr;
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="https://www.bionixus.com/contact"
                       style="display: inline-block; padding: 15px 44px; background: #142238;
                              color: #ffffff !important; text-decoration: none; border-radius: 6px;
                              font-weight: 700; font-size: 15px; letter-spacing: 0.3px;
                              box-shadow: 0 3px 12px rgba(20,34,56,0.2);">
                      ${lang.ctaMeeting} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Quote block — gold left border -->
              <div style="background: #f7f5f0; border-left: 4px solid #f5a504; padding: 20px; margin: 30px 0; border-radius: 0 4px 4px 0;">
                <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #3a4a5e;">
                  ${lang.footer}
                </p>
              </div>

              <p style="font-size: 14px; line-height: 1.8; color: #5a6478; margin: 28px 0 0 0;">
                ${lang.signature}
              </p>
            </td>
          </tr>

          <!-- Footer — warm cream -->
          <tr>
            <td style="background: #f7f5f0; padding: 28px 40px; text-align: center; border-top: 1px solid #e8e4dd;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #5a6478; font-weight: 500;">
                BioNixus Healthcare Market Research
              </p>
              <p style="margin: 0 0 14px; font-size: 11px; color: #8a94a6;">
                Pharmaceutical Intelligence &middot; GCC Markets
              </p>
              <p style="margin: 0; font-size: 11px; color: #8a94a6;">
                <a href="${unsubscribeUrl}" style="color: #1a2d4d; text-decoration: none; font-weight: 500;">Unsubscribe</a>
                &nbsp;&middot;&nbsp;
                <a href="https://www.bionixus.com" style="color: #1a2d4d; text-decoration: none; font-weight: 500;">Visit Website</a>
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
