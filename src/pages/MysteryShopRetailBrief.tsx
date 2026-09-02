import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const PATH = '/templates/mystery-shop-retail-brief';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const TITLE = CTR?.title ?? 'Mystery Shop Retail Brief (GCC) | BioNixus';
const DESCRIPTION =
  CTR?.description ??
  'GCC grocery and pharmacy mystery-shop brief — banners, SKUs, traditional trade. Request a 48-hour proposal from BioNixus.';

const CHECKS = [
  'Availability of named SKUs on shelf',
  'Price vs competitor at the same fixture',
  'Promo compliance (POS, gondola, cooler)',
  'Staff recommendation / substitution',
  'Traditional grocer or pharmacy vs modern trade',
];

export default function MysteryShopRetailBrief() {
  const [country, setCountry] = useState('United Arab Emirates');
  const [channel, setChannel] = useState('Grocery + traditional trade');
  const context = `Mystery shop retail brief · ${country} · ${channel}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
      </Helmet>
      <OpenGraphMeta title={TITLE} description={DESCRIPTION} image="https://www.bionixus.com/og-image.png" url={CANONICAL} type="article" locale="en_US" />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-16">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">Template</p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Mystery-shop retail brief (GCC)
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Use this when the dashboard says the SKU is listed and the store says otherwise. BioNixus fields
              grocery, pharmacy, and traditional-trade audits — priced by country.
            </p>
            <label className="block mb-4">
              <span className="block text-sm font-medium text-foreground mb-1.5">Country</span>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm"
              >
                {['Egypt', 'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar'].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="block mb-8">
              <span className="block text-sm font-medium text-foreground mb-1.5">Channel</span>
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm"
              >
                {[
                  'Grocery + traditional trade',
                  'Pharmacy / OTC',
                  'Hypermarket banners only',
                  'Cooler / impulse',
                ].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Checklist we typically field</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 mb-10">
              {CHECKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Request a proposal</h2>
            <QualificationForm
              formId="mystery_shop_retail_brief"
              sourceContext={context}
              defaultNeed="Brand and competitor data (account- or SKU-level)"
              defaultMarkets={[country]}
            />
            <p className="mt-8 text-sm text-muted-foreground">
              <Link to="/retail-companies-uae" className="text-primary underline">
                Retail companies in the UAE
              </Link>
              {' · '}
              <Link to="/templates/country-research-brief" className="text-primary underline">
                Country research brief
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
