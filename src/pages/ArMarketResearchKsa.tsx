import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function ArMarketResearchKsa() {
  return (
    <MarketResearchCountryLanding
      title="أبحاث السوق في السعودية KSA | BioNixus"
      description="صفحة أبحاث السوق في السعودية KSA للقطاع الصحي والدوائي مع تركيز على الأدلة اللازمة للإطلاق والوصول."
      canonical="/ar/market-research-ksa"
      h1="أبحاث السوق في السعودية KSA"
      intro="نوفر أبحاث السوق في السعودية KSA بآليات تنفيذ ثنائية اللغة لدعم القرارات التجارية وقرارات الوصول في السوق المحلي."
      countryLabel="Saudi Arabia"
      primaryKeyword="Market Research KSA"
      supportingKeywords={[
        'Pharma market research KSA',
        'Healthcare market research KSA',
        'Market Research Saudi',
      ]}
      faqItems={[
        {
          question: 'هل تغطي الصفحة احتياج KSA وSaudi معاً؟',
          answer: 'نعم، هذه الصفحة ترتبط بصفحات إضافية مخصصة لصياغة Saudi لتغطية كلا نمطي البحث.',
        },
        {
          question: 'هل توجد روابط للشركات الدوائية في السعودية؟',
          answer: 'نعم، توجد روابط مباشرة لصفحة أفضل الشركات الدوائية في السعودية.',
        },
      ]}
      relatedLinks={[
        { to: '/market-research-ksa', label: 'Market Research KSA (EN)' },
        { to: '/market-research-saudi', label: 'Market Research Saudi (EN)' },
        { to: '/pharmaceutical-companies-saudi-arabia', label: 'Top pharmaceutical companies in Saudi Arabia' },
        { to: '/ar/market-research-kuwait', label: 'أبحاث السوق في الكويت' },
      ]}
    />
  );
}
