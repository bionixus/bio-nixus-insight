import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function ArMarketResearchUae() {
  return (
    <MarketResearchCountryLanding
      title="أبحاث السوق في الإمارات | BioNixus"
      description="أبحاث السوق للأدوية والرعاية الصحية في الإمارات: سياق DHA/MOHAP، برامج أطباء ودافعين، ربط بأدلة نقاط الدواء ورؤوس الأسواق لتوجيه خطط الإطلاق والمزيج التجاري."
      canonical="/ar/market-research-uae"
      h1="أبحاث السوق في الإمارات"
      intro="نقدم برامج أبحاث السوق في الإمارات للشركات الدوائية وفرق الرعاية الصحية بهدف دعم قرارات الإطلاق والتوسع المبنية على الأدلة."
      countryLabel="United Arab Emirates"
      primaryKeyword="Market Research UAE"
      supportingKeywords={[
        'Pharma market research UAE',
        'Healthcare market research UAE',
        'Top pharma companies in UAE',
      ]}
      faqItems={[
        {
          question: 'ما أهم مخرجات أبحاث السوق في الإمارات؟',
          answer: 'تشمل عادةً فهم سلوك أصحاب المصلحة، فجوات الوصول، وتوصيات عملية قابلة للتنفيذ.',
        },
        {
          question: 'هل توجد صفحة خاصة بأكبر الشركات الدوائية في الإمارات؟',
          answer: 'نعم، يمكن الانتقال مباشرة إلى صفحة الشركات الدوائية في الإمارات من الروابط الداخلية.',
        },
      ]}
      relatedLinks={[
        { to: '/healthcare-market-research/uae', label: 'Market Research UAE (EN)' },
        { to: '/healthcare-market-research/uae', label: 'Pharma market research company in UAE' },
        { to: '/pharmaceutical-companies-uae', label: 'Top pharmaceutical companies in UAE' },
        { to: '/ar/market-research-ksa', label: 'أبحاث السوق في السعودية (KSA)' },
      ]}
    />
  );
}
