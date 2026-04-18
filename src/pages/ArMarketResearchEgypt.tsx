import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function ArMarketResearchEgypt() {
  return (
    <MarketResearchCountryLanding
      title="أبحاث السوق في مصر | BioNixus"
      description="صفحة أبحاث السوق في مصر للقطاع الصحي والدوائي مع روابط مباشرة لصفحة الشركات الدوائية في مصر."
      canonical="/ar/market-research-egypt"
      h1="أبحاث السوق في مصر"
      intro="نوفر أبحاث السوق في مصر للشركات التي تحتاج إلى فهم دقيق للسوق الصحي والدوائي من أجل قرارات الإطلاق والتوسع."
      countryLabel="Egypt"
      primaryKeyword="Market Research Egypt"
      supportingKeywords={[
        'Pharma market research Egypt',
        'Healthcare market research Egypt',
        'Top pharma companies in Egypt',
      ]}
      faqItems={[
        {
          question: 'هل الصفحة تربط بصفحات الشركات الدوائية في مصر؟',
          answer: 'نعم، تم تضمين روابط داخلية مباشرة لالتقاط نية البحث الخاصة بأفضل الشركات الدوائية.',
        },
        {
          question: 'هل تغطي الصفحة نية الخدمات أيضاً؟',
          answer: 'نعم، المحتوى موجه لكل من نية الخدمة ونية المقارنة بين الشركات.',
        },
      ]}
      relatedLinks={[
        { to: '/market-research-egypt', label: 'Market Research Egypt (EN)' },
        { to: '/pharmaceutical-companies-egypt', label: 'Top pharmaceutical companies in Egypt' },
        { to: '/ar/insights/top-market-research-companies-egypt-2026', label: 'أفضل شركات أبحاث السوق في مصر (2026)' },
        { to: '/ar/conf', label: 'الملف الاستراتيجي لبيونيكسس' },
        { to: '/ar/market-research-ksa', label: 'أبحاث السوق في السعودية KSA' },
        { to: '/bionixus-market-research-middle-east', label: 'Middle East pharmaceutical market research pillar' },
      ]}
    />
  );
}
