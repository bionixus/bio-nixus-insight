import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, Clock, FlaskConical, Globe, Users, TrendingUp, Star } from 'lucide-react';
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

// Research areas and capabilities we want to showcase
const RESEARCH_AREAS = [
  { icon: '🧪', label: 'Oncology Market Access' },
  { icon: '💊', label: 'Rare Disease Insights' },
  { icon: '🫀', label: 'Cardiovascular Research' },
  { icon: '🧠', label: 'CNS Therapeutic Landscape' },
  { icon: '🏥', label: 'Hospital Procurement' },
  { icon: '📋', label: 'HTA Evidence Dossiers' },
  { icon: '🤝', label: 'KOL Stakeholder Mapping' },
  { icon: '📊', label: 'Physician Surveys' },
  { icon: '🌍', label: 'Pan-MENA Rollouts' },
  { icon: '💉', label: 'Immunology Landscapes' },
  { icon: '🔬', label: 'Biosimilar Intelligence' },
  { icon: '📈', label: 'Launch Readiness' },
];

const COMING_SOON = [
  {
    title: 'Biosimilar Uptake Dynamics — UAE & Saudi Arabia',
    category: 'Market Research',
    country: 'UAE · KSA',
    eta: 'Q2 2026',
    desc: 'Tracking physician adoption patterns for key biologics and biosimilars across GCC formulary systems.',
  },
  {
    title: 'Oncology Patient Journey Mapping — Egypt & Kuwait',
    category: 'Qualitative Research',
    country: 'Egypt · Kuwait',
    eta: 'Q2 2026',
    desc: 'In-depth qualitative interviews with oncologists mapping referral pathways and unmet needs.',
  },
  {
    title: 'HTA Submission Readiness — NICE & G‑BA Comparative Review',
    category: 'Market Access',
    country: 'UK · Germany',
    eta: 'Q3 2026',
    desc: 'Evidence gap analysis and payer positioning for a specialty immunology product.',
  },
];

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

  // Split: first is featured, rest are secondary
  const [featured, ...rest] = filteredList;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-navy-deep via-navy-medium to-primary py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="container-wide section-padding relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-gold-warm" />
                Client Research Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 leading-tight">
                Real-World Research.<br className="hidden md:block" /> Measurable Results.
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                From GCC formulary strategy to European KOL engagement, our case studies showcase the depth and precision of BioNixus intelligence across the MENA & EMEA healthcare ecosystem.
              </p>
            </div>

            {/* Authority stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, value: '120+', label: 'Projects Delivered' },
                { icon: <Globe className="w-5 h-5" />, value: '17+', label: 'Countries Covered' },
                { icon: <FlaskConical className="w-5 h-5" />, value: '14+', label: 'Therapeutic Areas' },
                { icon: <Users className="w-5 h-5" />, value: '25+', label: 'Clients Served' },
              ].map(({ icon, value, label }) => (
                <div key={label} className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold-warm/20 text-gold-warm mb-3">
                    {icon}
                  </div>
                  <div className="text-3xl font-display font-bold text-white">{value}</div>
                  <div className="text-sm text-white/60 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">

            {/* Filters */}
            {!loading && caseStudies.length > 0 && (categories.length > 1 || countries.length > 1) && (
              <div className="flex flex-wrap gap-4 mb-10">
                {categories.length > 1 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Topic</span>
                    <Select value={selectedCategory || 'all'} onValueChange={(v) => setSelectedCategory(v === 'all' ? '' : v)}>
                      <SelectTrigger className="w-[180px]"><SelectValue placeholder="All topics" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All topics</SelectItem>
                        {categories.map((cat) => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {countries.length > 1 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Country</span>
                    <Select value={selectedCountry || 'all'} onValueChange={(v) => setSelectedCountry(v === 'all' ? '' : v)}>
                      <SelectTrigger className="w-[180px]"><SelectValue placeholder="All countries" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All countries</SelectItem>
                        {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            {loading && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[16/10] rounded-xl bg-muted/50 mb-4" />
                    <div className="h-4 w-1/3 bg-muted/40 rounded mb-3" />
                    <div className="h-6 w-full bg-muted/50 rounded mb-2" />
                    <div className="h-4 w-5/6 bg-muted/30 rounded" />
                  </div>
                ))}
              </div>
            )}

            {/* ── Featured case study ── */}
            {!loading && featured && (
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-6">
                  <Star className="w-3.5 h-3.5" /> Featured Case Study
                </div>
                <Link to={`/case-studies/${featured.slug}`} className="group block">
                  <article className="grid md:grid-cols-2 gap-8 bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] bg-muted overflow-hidden">
                      {featured.coverImage ? (
                        <img src={featured.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5" />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featured.category && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{featured.category}</span>
                        )}
                        {featured.country && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">{featured.country}</span>
                        )}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
                        {featured.title}
                      </h2>
                      {featured.excerpt && (
                        <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                      )}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        View Full Case Study <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            )}

            {/* ── Remaining case studies ── */}
            {!loading && rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {rest.map((item) => (
                  <Link key={item.id} to={`/case-studies/${item.slug}`} className="group block">
                    <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                        {item.coverImage ? (
                          <img src={item.coverImage} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>
                      <div className="p-6 flex flex-col flex-1 space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.category && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{item.category}</span>
                          )}
                          {item.country && (
                            <span className="text-xs text-muted-foreground">{item.country}</span>
                          )}
                        </div>
                        <h2 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {item.title}
                        </h2>
                        {item.excerpt && (
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{item.excerpt}</p>
                        )}
                        <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2 group-hover:gap-3 transition-all">
                          Read Case Study <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}

            {!loading && caseStudies.length === 0 && filteredList.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No case studies match your filters.</p>
            )}
          </div>
        </section>

        {/* ── Coming Soon teaser cards ── */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Clock className="w-4 h-4" /> In Progress
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
                Research In the Pipeline
              </h2>
              <p className="text-muted-foreground text-lg">
                Our team is actively conducting these research programmes. Results will be published shortly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {COMING_SOON.map((item, i) => (
                <div key={i} className="relative group bg-card border border-border rounded-xl overflow-hidden">
                  {/* blurred faux-image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-primary/10 to-gold-warm/10 relative overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-semibold text-primary shadow">
                        <Lock className="w-4 h-4" />
                        {item.eta} Release
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{item.category}</span>
                      <span className="text-xs text-muted-foreground">{item.country}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground leading-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium pt-1">
                      <Clock className="w-3.5 h-3.5" /> Publishing {item.eta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Research Areas we cover ── */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
                Topics We Research
              </h2>
              <p className="text-muted-foreground text-lg">
                BioNixus has delivered intelligence across 12+ therapeutic areas and service types.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {RESEARCH_AREAS.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3.5 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-primary">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary-foreground mb-4">
                Commission Your Own Research
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
                Don't see your market or therapeutic area covered? We design bespoke research programmes for pharma and biotech leaders across MENA and EMEA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-warm text-navy-deep rounded-lg font-semibold hover:bg-gold-light transition-colors group"
                >
                  Request a Proposal
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
