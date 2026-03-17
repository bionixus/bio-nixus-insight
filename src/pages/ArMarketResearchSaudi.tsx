import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function ArMarketResearchSaudi() {
  return (
    <MarketResearchCountryLanding
      title="أبحاث السوق في السعودية | BioNixus"
      description="صفحة أبحاث السوق في السعودية للقطاع الصحي والدوائي مع مسارات داخلية لصفحات الخدمات والصفحات المتخصصة."
      canonical="/ar/market-research-saudi"
      h1="أبحاث السوق في السعودية"
      intro="تساعد BioNixus فرق القطاع الصحي والدوائي عبر أبحاث سوق في السعودية مبنية على بيانات أصحاب المصلحة والواقع التشغيلي المحلي."
      countryLabel="Saudi Arabia"
      primaryKeyword="Market Research Saudi"
      supportingKeywords={[
        'Market Research KSA',
        'Healthcare market research Saudi',
        'Pharma market research Saudi',
      ]}
      faqItems={[
        {
          question: 'ما الفرق بين صفحة Saudi وصفحة KSA؟',
          answer: 'لكل صفحة صياغة بحث مختلفة لضمان تغطية الكلمات القصيرة والمتوسطة النية بشكل أدق.',
        },
        {
          question: 'هل يمكن الانتقال منها إلى صفحات الخدمات المتخصصة؟',
          answer: 'نعم، الصفحة تربط مباشرة بصفحات السوق الدوائي السعودية وصفحات الشركات الدوائية.',
        },
      ]}
      relatedLinks={[
        { to: '/market-research-saudi', label: 'Market Research Saudi (EN)' },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research company in Saudi Arabia' },
        { to: '/pharmaceutical-companies-saudi-arabia', label: 'Top pharmaceutical companies in Saudi Arabia' },
        { to: '/ar/market-research-egypt', label: 'أبحاث السوق في مصر' },
      ]}
    />
  );
}
