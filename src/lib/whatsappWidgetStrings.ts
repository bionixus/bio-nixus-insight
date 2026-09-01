/**
 * Copy for the site-wide WhatsApp proposal widget.
 * English is the complete shape; other locales deep-merge over it.
 */
import type { Language } from './i18n';

export type WhatsAppWidgetStrings = {
  tooltip: string;
  fabAriaLabel: string;
  panelTitle: string;
  panelSubtitle: string;
  submitButton: string;
  submitting: string;
  privacyBefore: string;
  privacyLink: string;
  privacyAfter: string;
  successTitle: string;
  successBody: string;
  openWhatsAppAgain: string;
  closeLabel: string;
  greeting: string;
  phoneRequired: string;
};

type DeepPartial<T> = { [K in keyof T]?: T[K] };

const en: WhatsAppWidgetStrings = {
  tooltip: 'Need a research proposal?',
  fabAriaLabel: 'Need a research proposal? Open the WhatsApp proposal form',
  panelTitle: 'Request a research proposal',
  panelSubtitle:
    'Share a few details and continue on WhatsApp. We typically reply within one business day.',
  submitButton: 'Continue on WhatsApp',
  submitting: 'Opening WhatsApp…',
  privacyBefore: 'By submitting, you agree to our ',
  privacyLink: 'Privacy Policy',
  privacyAfter: '.',
  successTitle: 'Opening WhatsApp',
  successBody: 'Your details are ready to send. If WhatsApp did not open, use the button below.',
  openWhatsAppAgain: 'Open WhatsApp',
  closeLabel: 'Close',
  greeting: 'Hello Bionixus — I would like a research proposal.',
  phoneRequired: 'Please enter your phone number',
};

const overrides: Record<Exclude<Language, 'en'>, DeepPartial<WhatsAppWidgetStrings>> = {
  de: {
    tooltip: 'Brauchen Sie ein Forschungsangebot?',
    fabAriaLabel: 'Brauchen Sie ein Forschungsangebot? WhatsApp-Formular öffnen',
    panelTitle: 'Forschungsangebot anfordern',
    panelSubtitle:
      'Teilen Sie ein paar Angaben und fahren Sie auf WhatsApp fort. Wir antworten in der Regel innerhalb eines Werktags.',
    submitButton: 'Weiter auf WhatsApp',
    submitting: 'WhatsApp wird geöffnet…',
    privacyBefore: 'Mit dem Absenden stimmen Sie unserer ',
    privacyLink: 'Datenschutzrichtlinie',
    privacyAfter: ' zu.',
    successTitle: 'WhatsApp wird geöffnet',
    successBody:
      'Ihre Angaben sind bereit zum Senden. Falls WhatsApp nicht geöffnet wurde, nutzen Sie die Schaltfläche unten.',
    openWhatsAppAgain: 'WhatsApp öffnen',
    closeLabel: 'Schließen',
    greeting: 'Hallo Bionixus — ich möchte ein Forschungsangebot anfragen.',
    phoneRequired: 'Bitte geben Sie Ihre Telefonnummer ein',
  },
  fr: {
    tooltip: 'Besoin d’une proposition d’étude ?',
    fabAriaLabel: 'Besoin d’une proposition d’étude ? Ouvrir le formulaire WhatsApp',
    panelTitle: 'Demander une proposition d’étude',
    panelSubtitle:
      'Indiquez quelques détails puis continuez sur WhatsApp. Nous répondons généralement sous un jour ouvré.',
    submitButton: 'Continuer sur WhatsApp',
    submitting: 'Ouverture de WhatsApp…',
    privacyBefore: 'En envoyant ce formulaire, vous acceptez notre ',
    privacyLink: 'politique de confidentialité',
    privacyAfter: '.',
    successTitle: 'Ouverture de WhatsApp',
    successBody:
      'Vos informations sont prêtes à être envoyées. Si WhatsApp ne s’est pas ouvert, utilisez le bouton ci-dessous.',
    openWhatsAppAgain: 'Ouvrir WhatsApp',
    closeLabel: 'Fermer',
    greeting: 'Bonjour Bionixus — je souhaite une proposition d’étude.',
    phoneRequired: 'Veuillez indiquer votre numéro de téléphone',
  },
  es: {
    tooltip: '¿Necesita una propuesta de investigación?',
    fabAriaLabel: '¿Necesita una propuesta de investigación? Abrir el formulario de WhatsApp',
    panelTitle: 'Solicitar una propuesta de investigación',
    panelSubtitle:
      'Comparta unos datos y continúe en WhatsApp. Normalmente respondemos en un día hábil.',
    submitButton: 'Continuar en WhatsApp',
    submitting: 'Abriendo WhatsApp…',
    privacyBefore: 'Al enviar, acepta nuestra ',
    privacyLink: 'política de privacidad',
    privacyAfter: '.',
    successTitle: 'Abriendo WhatsApp',
    successBody:
      'Sus datos están listos para enviarse. Si WhatsApp no se abrió, use el botón de abajo.',
    openWhatsAppAgain: 'Abrir WhatsApp',
    closeLabel: 'Cerrar',
    greeting: 'Hola Bionixus — me gustaría solicitar una propuesta de investigación.',
    phoneRequired: 'Indique su número de teléfono',
  },
  pt: {
    tooltip: 'Precisa de uma proposta de pesquisa?',
    fabAriaLabel: 'Precisa de uma proposta de pesquisa? Abrir o formulário do WhatsApp',
    panelTitle: 'Pedir uma proposta de pesquisa',
    panelSubtitle:
      'Partilhe alguns dados e continue no WhatsApp. Respondemos normalmente no prazo de um dia útil.',
    submitButton: 'Continuar no WhatsApp',
    submitting: 'A abrir o WhatsApp…',
    privacyBefore: 'Ao enviar, concorda com a nossa ',
    privacyLink: 'política de privacidade',
    privacyAfter: '.',
    successTitle: 'A abrir o WhatsApp',
    successBody:
      'Os seus dados estão prontos a enviar. Se o WhatsApp não abriu, use o botão abaixo.',
    openWhatsAppAgain: 'Abrir WhatsApp',
    closeLabel: 'Fechar',
    greeting: 'Olá Bionixus — gostaria de pedir uma proposta de pesquisa.',
    phoneRequired: 'Indique o seu número de telefone',
  },
  ru: {
    tooltip: 'Нужно коммерческое предложение?',
    fabAriaLabel: 'Нужно коммерческое предложение? Открыть форму WhatsApp',
    panelTitle: 'Запросить предложение по исследованию',
    panelSubtitle:
      'Укажите несколько деталей и продолжите в WhatsApp. Обычно отвечаем в течение одного рабочего дня.',
    submitButton: 'Продолжить в WhatsApp',
    submitting: 'Открываем WhatsApp…',
    privacyBefore: 'Отправляя форму, вы соглашаетесь с нашей ',
    privacyLink: 'политикой конфиденциальности',
    privacyAfter: '.',
    successTitle: 'Открываем WhatsApp',
    successBody:
      'Ваши данные готовы к отправке. Если WhatsApp не открылся, используйте кнопку ниже.',
    openWhatsAppAgain: 'Открыть WhatsApp',
    closeLabel: 'Закрыть',
    greeting: 'Здравствуйте, Bionixus — хочу запросить предложение по исследованию.',
    phoneRequired: 'Укажите номер телефона',
  },
  zh: {
    tooltip: '需要一份研究方案吗？',
    fabAriaLabel: '需要一份研究方案吗？打开 WhatsApp 表单',
    panelTitle: '索取研究方案',
    panelSubtitle: '填写几项信息后即可通过 WhatsApp 继续。我们通常在一个工作日内回复。',
    submitButton: '通过 WhatsApp 继续',
    submitting: '正在打开 WhatsApp…',
    privacyBefore: '提交即表示您同意我们的',
    privacyLink: '隐私政策',
    privacyAfter: '。',
    successTitle: '正在打开 WhatsApp',
    successBody: '您的信息已准备好发送。如果 WhatsApp 未打开，请使用下方按钮。',
    openWhatsAppAgain: '打开 WhatsApp',
    closeLabel: '关闭',
    greeting: '您好，Bionixus — 我想索取一份研究方案。',
    phoneRequired: '请填写电话号码',
  },
  ar: {
    tooltip: 'هل تحتاج إلى عرض بحث؟',
    fabAriaLabel: 'هل تحتاج إلى عرض بحث؟ افتح نموذج واتساب',
    panelTitle: 'اطلب عرضاً بحثياً',
    panelSubtitle: 'شارك بعض التفاصيل ثم تابع على واتساب. نرد عادةً خلال يوم عمل واحد.',
    submitButton: 'متابعة على واتساب',
    submitting: 'جارٍ فتح واتساب…',
    privacyBefore: 'بإرسال النموذج فإنك توافق على ',
    privacyLink: 'سياسة الخصوصية',
    privacyAfter: '.',
    successTitle: 'جارٍ فتح واتساب',
    successBody: 'بياناتك جاهزة للإرسال. إذا لم يُفتح واتساب، استخدم الزر أدناه.',
    openWhatsAppAgain: 'افتح واتساب',
    closeLabel: 'إغلاق',
    greeting: 'مرحباً بيونكسس — أود طلب عرض بحث.',
    phoneRequired: 'يرجى إدخال رقم هاتفك',
  },
};

function merge(base: WhatsAppWidgetStrings, patch: DeepPartial<WhatsAppWidgetStrings>): WhatsAppWidgetStrings {
  return { ...base, ...patch };
}

export function getWhatsAppWidgetStrings(lang: Language): WhatsAppWidgetStrings {
  const patch = overrides[lang as Exclude<Language, 'en'>];
  return patch ? merge(en, patch) : en;
}
