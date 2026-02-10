export function generateWelcomeEmail(
  firstName: string,
  language: string = 'en'
) {
  const content = {
    en: {
      subject: 'Welcome to BioNixus Healthcare Insights',
      title: 'Welcome Aboard! 🎉',
      greeting: `Hi ${firstName},`,
      intro: 'Thank you for verifying your email and joining BioNixus Healthcare Market Research.',
      whatToExpect: 'What to expect from us:',
      benefits: [
        '📊 Monthly GCC pharmaceutical market insights',
        '🔬 Exclusive clinical trial intelligence reports',
        '💡 Expert analysis on biosimilars and oncology trends',
        '🌍 Regional healthcare policy updates',
        '🎯 Customized content based on your interests',
      ],
      resources: 'Explore our resources:',
      resourceLinks: [
        { text: 'Latest Market Reports', url: 'https://bionixus.com/reports' },
        { text: 'Clinical Trial Database', url: 'https://bionixus.com/trials' },
        { text: 'Expert Consultations', url: 'https://bionixus.com/consult' },
      ],
      footer:
        "We're excited to have you in our community of pharmaceutical professionals across the GCC region.",
      cta: 'Explore Resources',
      signature:
        'Best regards,<br><strong>Mohammad Al-Ubaydli</strong><br>Founder, BioNixus Healthcare Market Research',
    },
    ar: {
      subject: 'مرحباً بك في BioNixus لرؤى الرعاية الصحية',
      title: 'مرحباً بك! 🎉',
      greeting: `مرحباً ${firstName}،`,
      intro: 'شكراً لتأكيد بريدك الإلكتروني والانضمام إلى BioNixus لأبحاث سوق الرعاية الصحية.',
      whatToExpect: 'ما يمكن توقعه منا:',
      benefits: [
        '📊 رؤى شهرية لسوق الأدوية في دول مجلس التعاون الخليجي',
        '🔬 تقارير حصرية عن التجارب السريرية',
        '💡 تحليلات خبراء حول الأدوية الحيوية المماثلة واتجاهات علاج الأورام',
        '🌍 تحديثات السياسات الصحية الإقليمية',
        '🎯 محتوى مخصص بناءً على اهتماماتك',
      ],
      resources: 'استكشف مواردنا:',
      resourceLinks: [
        { text: 'أحدث تقارير السوق', url: 'https://bionixus.com/reports' },
        { text: 'قاعدة بيانات التجارب السريرية', url: 'https://bionixus.com/trials' },
        { text: 'استشارات الخبراء', url: 'https://bionixus.com/consult' },
      ],
      footer:
        'نحن متحمسون لوجودك في مجتمعنا من المتخصصين في مجال الأدوية عبر منطقة الخليج.',
      cta: 'استكشف الموارد',
      signature:
        'مع أطيب التحيات،<br><strong>محمد العبيدلي</strong><br>المؤسس، BioNixus لأبحاث سوق الرعاية الصحية',
    },
    de: {
      subject: 'Willkommen bei BioNixus Healthcare Insights',
      title: 'Willkommen an Bord! 🎉',
      greeting: `Hallo ${firstName},`,
      intro: 'Vielen Dank für die Bestätigung Ihrer E-Mail und Ihre Teilnahme an BioNixus Healthcare-Marktforschung.',
      whatToExpect: 'Was Sie von uns erwarten können:',
      benefits: [
        '📊 Monatliche Pharma-Markt-Insights aus der GCC-Region',
        '🔬 Exklusive Berichte über klinische Studien',
        '💡 Expertenanalysen zu Biosimilars und Onkologie-Trends',
        '🌍 Regionale Updates zur Gesundheitspolitik',
        '🎯 Personalisierte Inhalte basierend auf Ihren Interessen',
      ],
      resources: 'Entdecken Sie unsere Ressourcen:',
      resourceLinks: [
        { text: 'Neueste Marktberichte', url: 'https://bionixus.com/reports' },
        { text: 'Datenbank klinischer Studien', url: 'https://bionixus.com/trials' },
        { text: 'Expertenberatungen', url: 'https://bionixus.com/consult' },
      ],
      footer: 'Wir freuen uns, Sie in unserer Gemeinschaft von Pharma-Experten begrüßen zu dürfen.',
      cta: 'Ressourcen entdecken',
      signature: 'Mit freundlichen Grüßen,<br><strong>Mohammad Al-Ubaydli</strong><br>Gründer, BioNixus Healthcare Market Research',
    },
    fr: {
      subject: 'Bienvenue chez BioNixus Healthcare Insights',
      title: 'Bienvenue à bord ! 🎉',
      greeting: `Bonjour ${firstName},`,
      intro: 'Merci d\'avoir confirmé votre e-mail et rejoint BioNixus en recherche de marché santé.',
      whatToExpect: 'Ce que vous pouvez attendre de nous :',
      benefits: [
        '📊 Insights mensuels sur le marché pharmaceutique du GCC',
        '🔬 Rapports exclusifs sur les essais cliniques',
        '💡 Analyses d\'experts sur les biosimilaires et les tendances en oncologie',
        '🌍 Mises à jour régionales sur les politiques de santé',
        '🎯 Contenu personnalisé selon vos intérêts',
      ],
      resources: 'Explorez nos ressources :',
      resourceLinks: [
        { text: 'Derniers rapports de marché', url: 'https://bionixus.com/reports' },
        { text: 'Base de données des essais cliniques', url: 'https://bionixus.com/trials' },
        { text: 'Consultations d\'experts', url: 'https://bionixus.com/consult' },
      ],
      footer: 'Nous sommes ravis de vous accueillir dans notre communauté de professionnels pharmaceutiques.',
      cta: 'Explorer les ressources',
      signature: 'Cordialement,<br><strong>Mohammad Al-Ubaydli</strong><br>Fondateur, BioNixus Healthcare Market Research',
    },
    es: {
      subject: 'Bienvenido/a a BioNixus Healthcare Insights',
      title: '¡Bienvenido/a! 🎉',
      greeting: `Hola ${firstName},`,
      intro: 'Gracias por verificar tu correo y unirte a BioNixus en investigación de mercado sanitario.',
      whatToExpect: 'Qué puedes esperar de nosotros:',
      benefits: [
        '📊 Insights mensuales del mercado farmacéutico del GCC',
        '🔬 Informes exclusivos sobre ensayos clínicos',
        '💡 Análisis de expertos sobre biosimilares y tendencias en oncología',
        '🌍 Actualizaciones regionales de políticas sanitarias',
        '🎯 Contenido personalizado según tus intereses',
      ],
      resources: 'Explora nuestros recursos:',
      resourceLinks: [
        { text: 'Últimos informes de mercado', url: 'https://bionixus.com/reports' },
        { text: 'Base de datos de ensayos clínicos', url: 'https://bionixus.com/trials' },
        { text: 'Consultas de expertos', url: 'https://bionixus.com/consult' },
      ],
      footer: 'Estamos encantados de tenerte en nuestra comunidad de profesionales farmacéuticos.',
      cta: 'Explorar recursos',
      signature: 'Saludos cordiales,<br><strong>Mohammad Al-Ubaydli</strong><br>Fundador, BioNixus Healthcare Market Research',
    },
    zh: {
      subject: '欢迎加入 BioNixus 医疗健康洞察',
      title: '欢迎加入！🎉',
      greeting: `您好 ${firstName}，`,
      intro: '感谢您验证邮箱并加入 BioNixus 医疗市场研究。',
      whatToExpect: '您可以期待的内容：',
      benefits: [
        '📊 每月 GCC 制药市场洞察',
        '🔬 独家临床试验情报报告',
        '💡 生物类似药和肿瘤学趋势的专家分析',
        '🌍 区域医疗政策更新',
        '🎯 根据您的兴趣定制的内容',
      ],
      resources: '探索我们的资源：',
      resourceLinks: [
        { text: '最新市场报告', url: 'https://bionixus.com/reports' },
        { text: '临床试验数据库', url: 'https://bionixus.com/trials' },
        { text: '专家咨询', url: 'https://bionixus.com/consult' },
      ],
      footer: '我们很高兴您加入我们的制药专业人士社区。',
      cta: '探索资源',
      signature: '此致敬礼，<br><strong>Mohammad Al-Ubaydli</strong><br>创始人，BioNixus Healthcare Market Research',
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
        <table width="600" cellpadding="0" cellspacing="0" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Hero Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0066cc 0%, #004999 100%); padding: 50px 40px; text-align: center;">
              <h1 style="color: white; margin: 0 0 15px 0; font-size: 32px;">${lang.title}</h1>
              <p style="color: #e6f2ff; margin: 0; font-size: 16px;">BioNixus Healthcare Market Research</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px 0;">
                ${lang.greeting}
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 30px 0;">
                ${lang.intro}
              </p>

              <!-- What to Expect -->
              <h2 style="color: #0066cc; font-size: 22px; margin: 30px 0 20px 0; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
                ${lang.whatToExpect}
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                ${lang.benefits
                  .map(
                    (benefit: string) => `
                  <tr>
                    <td style="padding: 10px 0; font-size: 15px; line-height: 1.6; color: #333;">
                      ${benefit}
                    </td>
                  </tr>
                `
                  )
                  .join('')}
              </table>

              <!-- Resources -->
              <h2 style="color: #0066cc; font-size: 22px; margin: 30px 0 20px 0; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
                ${lang.resources}
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                ${lang.resourceLinks
                  .map(
                    (link: any) => `
                  <tr>
                    <td style="padding: 8px 0;">
                      <a href="${link.url}" style="color: #0066cc; text-decoration: none; font-size: 15px; font-weight: 500;">
                        → ${link.text}
                      </a>
                    </td>
                  </tr>
                `
                  )
                  .join('')}
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 35px 0;">
                <tr>
                  <td align="center">
                    <a href="https://bionixus.com/dashboard" 
                       style="display: inline-block; padding: 16px 40px; background: #0066cc; 
                              color: white !important; text-decoration: none; border-radius: 8px; 
                              font-weight: bold; font-size: 16px; box-shadow: 0 4px 8px rgba(0,102,204,0.3);">
                      ${lang.cta} →
                    </a>
                  </td>
                </tr>
              </table>

              <div style="background: #f8f9fa; border-left: 4px solid #0066cc; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #555;">
                  ${lang.footer}
                </p>
              </div>

              <p style="font-size: 15px; line-height: 1.8; color: #666; margin: 30px 0 0 0;">
                ${lang.signature}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #666;">
                <strong>BioNixus Healthcare Market Research</strong>
              </p>
              <p style="margin: 0 0 15px 0; font-size: 12px; color: #666;">
                Pharmaceutical Intelligence | GCC Markets
              </p>
              <p style="margin: 0; font-size: 11px; color: #999;">
                <a href="https://bionixus.com/unsubscribe" style="color: #0066cc; text-decoration: none;">Unsubscribe</a> | 
                <a href="https://bionixus.com/preferences" style="color: #0066cc; text-decoration: none;">Update Preferences</a>
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
