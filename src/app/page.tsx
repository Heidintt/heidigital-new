import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Brain,
  BookOpen,
  GraduationCap,
  Search,
  BarChart3,
  Target,
  Zap,
  Users,
  ChevronRight,
  Star,
  Play,
} from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import TemplateCard from "@/components/cards/TemplateCard";
import CourseCard from "@/components/cards/CourseCard";
import { getLatestArticles, getFeaturedArticles } from "@/data/articles";
import { getFeaturedTemplates } from "@/data/templates";
import { getFeaturedCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Heidigital – Digital Marketing & AI Insights for Smarter Growth",
  description:
    "Heidigital shares practical insights, tools, strategies, and learning resources to help marketers, creators, and businesses grow smarter with digital marketing and AI.",
  openGraph: {
    title: "Heidigital – Digital Marketing & AI Insights for Smarter Growth",
    description:
      "Practical digital marketing and AI insights, tools, and resources for smarter growth.",
    url: "https://heidigital.com",
  },
};

const expertiseItems = [
  { icon: Search, label: "SEO & Search", desc: "Technical SEO, on-page, content strategy" },
  { icon: Target, label: "Google Ads", desc: "Search, display, Performance Max campaigns" },
  { icon: Users, label: "Meta Ads", desc: "Custom audiences, creative testing, ROAS" },
  { icon: BarChart3, label: "Analytics", desc: "GA4, Looker Studio, data insights" },
  { icon: TrendingUp, label: "Strategy", desc: "Full-funnel digital marketing planning" },
  { icon: Brain, label: "AI for Marketing", desc: "ChatGPT, Gemini, Canva AI workflows" },
];

const marqueeItems = [
  "SEO Strategy",
  "Google Ads",
  "Meta Ads",
  "GA4 Analytics",
  "Content Strategy",
  "AI Marketing",
  "Conversion Optimisation",
  "Growth Marketing",
];

// Structured Data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://heidigital.com/#website",
      url: "https://heidigital.com",
      name: "Heidigital",
      description: "Digital Marketing & AI Insights for Smarter Growth",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://heidigital.com/insights?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function HomePage() {
  const latestArticles = getLatestArticles(3);
  const featuredTemplates = getFeaturedTemplates().slice(0, 1);
  const featuredCourses = getFeaturedCourses().slice(0, 1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] z-0 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] z-0 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-accent font-medium mb-8 animate-fade-in">
                <Zap className="w-3.5 h-3.5" />
                Next-Gen Marketing Insights
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-6 animate-fade-up">
                <span className="text-text-main">Market smarter.</span>
                <br />
                <span className="gradient-text">Grow faster.</span>
              </h1>

              <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 animate-fade-up max-w-lg">
                Practical insights, tools, and strategies to help you dominate search, scale paid campaigns, and leverage AI in your marketing workflow.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up">
                <Link href="/insights" className="btn-primary text-base py-3.5 px-8 shadow-glow">
                  Explore Insights
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/courses" className="btn-outline text-base py-3.5 px-8 flex items-center gap-2 bg-background/50 backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-current" />
                  Free Courses
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4 animate-fade-in">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background flex items-center justify-center ${['bg-primary', 'bg-accent', 'bg-purple-500', 'bg-emerald-500'][i]}`}>
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-text-main font-semibold">7+ years hands-on experience across SEO, paid ads, analytics and digital strategy.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Composition */}
            <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block animate-fade-in">
              {/* Main Dashboard Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] animate-float" style={{ animationDelay: '0s' }}>
                <Image src="https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Marketing Dashboard" fill className="object-contain drop-shadow-2xl opacity-90 rounded-2xl" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <section className="py-6 border-y border-slate-200 bg-background-secondary overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-secondary to-transparent z-10" />
        
        <div className="flex w-max animate-marquee">
          <div className="flex gap-16 px-8 items-center">
            {marqueeItems.map((item, i) => (
              <span key={i} className="text-lg md:text-xl font-display font-semibold text-text-muted/60 uppercase tracking-widest whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-16 px-8 items-center">
            {marqueeItems.map((item, i) => (
              <span key={`dup-${i}`} className="text-lg md:text-xl font-display font-semibold text-text-muted/60 uppercase tracking-widest whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Hub */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-5 mix-blend-multiply bg-cover bg-center pointer-events-none" />
        
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4 inline-flex">Explore The Hub</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mb-4">
              Everything you need to grow
            </h2>
            <p className="text-text-muted max-w-xl mx-auto text-lg">
              Master the channels that matter. From deep-dive insights to ready-to-use templates.
            </p>
          </div>

          {/* Bento Box CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:h-[600px]">
            
            {/* Box 1: Digital Marketing (Large, spans 2 cols, 2 rows) */}
            <Link href="/insights/digital-marketing" className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden card-base border-slate-200 shadow-sm flex flex-col justify-end p-8 min-h-[300px]">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Digital Marketing" fill className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold font-display text-text-main mb-2">Digital Marketing Insights</h3>
                <p className="text-text-muted max-w-md mb-4 text-lg">In-depth strategies for SEO, Google Ads, Meta Ads, and Analytics.</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors">
                  Explore Hub <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Box 2: AI Hub (Square) */}
            <Link href="/insights/ai-hub" className="group relative rounded-3xl overflow-hidden card-base border-slate-200 shadow-sm p-8 flex flex-col min-h-[280px]">
              <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/30 transition-colors" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-auto">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold font-display text-text-main mb-2">AI Hub</h3>
                  <p className="text-sm text-text-muted mb-4">Learn to leverage ChatGPT, Gemini, and AI tools for marketing.</p>
                  <span className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                    Discover AI <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Box 3: Templates (Square) */}
            <Link href="/resources/templates" className="group relative rounded-3xl overflow-hidden card-base border-slate-200 shadow-sm p-8 flex flex-col min-h-[280px]">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-auto">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold font-display text-text-main mb-2">Templates</h3>
                  <p className="text-sm text-text-muted mb-4">Free, ready-to-use checklists and strategy templates.</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Download Free <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="section-padding bg-background-secondary relative overflow-hidden border-t border-slate-200">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-gold mb-4 inline-flex">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-6 leading-tight">
                Built on 7+ years of real campaign experience.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Heidi is a digital marketing professional with deep experience across SEO, paid
                advertising, analytics, and AI tools. Heidigital is built to share that experience
                in a practical, accessible way — cutting through the noise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary py-3 px-6">
                  Meet Heidi <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/work-with-me" className="btn-ghost">
                  View Services
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {expertiseItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="card-base p-6 group hover:border-primary/40 bg-background/50 backdrop-blur-md relative overflow-hidden transition-all duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative z-10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-text-main mb-2 relative z-10">{item.label}</h3>
                    <p className="text-xs text-text-muted relative z-10">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main mb-3">
                Latest Insights
              </h2>
              <p className="text-text-muted">Fresh strategies, tool reviews, and AI updates.</p>
            </div>
            <Link href="/insights" className="btn-outline">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Banner */}
      <section className="py-24 bg-background-secondary relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mb-6">
                Start learning. <br />
                <span className="gradient-text">Start applying.</span>
              </h2>
              <p className="text-lg text-text-muted mb-8 max-w-md">
                Download practical templates you can use today, or enrol in free courses to level up your skills.
              </p>
              <Link href="/resources" className="btn-primary py-3.5 px-8 shadow-glow">
                Explore All Resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {featuredTemplates.map(template => (
                <TemplateCard key={template.id} template={template} />
              ))}
              {featuredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
