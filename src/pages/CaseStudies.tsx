import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { fetchCaseStudies, isCaseStudiesConfigured } from '@/lib/sanity-case-studies';
import type { CaseStudy } from '@/types/caseStudy';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CaseStudies = () => {
  const { t, language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  useEffect(() => {
    if (!isCaseStudiesConfigured()) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    fetchCaseStudies().then((list) => {
      if (!cancelled) {
        setCaseStudies(list);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(caseStudies.map((c) => c.category).filter(Boolean));
    return Array.from(set).sort();
  }, [caseStudies]);

  const countries = useMemo(() => {
    const set = new Set(caseStudies.map((c) => c.country).filter(Boolean));
    return Array.from(set).sort();
  }, [caseStudies]);

  const filteredList = useMemo(() => {
    return caseStudies.filter((c) => {
      if (selectedCategory && c.category !== selectedCategory) return false;
      if (selectedCountry && c.country !== selectedCountry) return false;
      return true;
    });
  }, [caseStudies, selectedCategory, selectedCountry]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
                {cs.title ?? t.footer.caseStudies}
              </h1>
              <p className="text-lg text-muted-foreground">
                {cs.subtitle ?? 'European case studies and project examples.'}
              </p>
            </div>

            {loading && (
              <p className="text-muted-foreground py-12 text-center">{cs.noCaseStudies ?? 'Loading…'}</p>
            )}

            {!loading && caseStudies.length > 0 && (
              <>
                {(categories.length > 1 || countries.length > 1) && (
                  <div className="flex flex-wrap gap-4 mb-10">
                    {categories.length > 1 && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {cs.filterByTopic ?? 'Topic'}
                        </span>
                        <Select
                          value={selectedCategory || 'all'}
                          onValueChange={(v) => setSelectedCategory(v === 'all' ? '' : v)}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={cs.filterAllTopics ?? 'All topics'} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{cs.filterAllTopics ?? 'All topics'}</SelectItem>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    {countries.length > 1 && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {cs.filterByCountry ?? 'Country'}
                        </span>
                        <Select
                          value={selectedCountry || 'all'}
                          onValueChange={(v) => setSelectedCountry(v === 'all' ? '' : v)}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={cs.filterAllCountries ?? 'All countries'} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{cs.filterAllCountries ?? 'All countries'}</SelectItem>
                            {countries.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                  {filteredList.map((item, index) => (
                    <Link
                      key={item.id}
                      to={`/case-studies/${item.slug}`}
                      className="group block"
                    >
                      <article>
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-muted">
                          {item.coverImage ? (
                            <img
                              src={item.coverImage}
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 flex-wrap">
                            {item.category && (
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                {item.category}
                              </span>
                            )}
                            {item.country && (
                              <span className="text-sm text-muted-foreground">{item.country}</span>
                            )}
                            <span className="text-sm text-muted-foreground">{item.date}</span>
                          </div>
                          <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.title}
                          </h2>
                          {item.excerpt && (
                            <p className="text-muted-foreground leading-relaxed line-clamp-3">
                              {item.excerpt}
                            </p>
                          )}
                          <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all">
                            {cs.viewCaseStudy ?? t.blog?.readMore ?? 'Read more'}
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {filteredList.length === 0 && (
                  <p className="text-center text-muted-foreground py-12">
                    {cs.noCaseStudies ?? 'No case studies yet.'}
                  </p>
                )}
              </>
            )}

            {!loading && caseStudies.length === 0 && (
              <p className="text-muted-foreground py-12 text-center">
                {cs.noCaseStudies ?? 'No case studies yet.'}
              </p>
            )}

            <div className="text-center mt-12">
              <Link
                to={basePath}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/90 transition-colors"
              >
                {cs.backToHome ?? 'Back to home'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
