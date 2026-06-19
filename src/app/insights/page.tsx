import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Brain,
  Search,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Cpu,
  PenTool,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { getFeaturedArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Insights – Digital Marketing & AI | Heidigital",
  description:
    "Explore Heidigital's Insights Hub — practical articles, guides, and strategies covering digital marketing, SEO, Google Ads, Meta Ads, analytics, ChatGPT, Gemini, and AI tools for marketers.",
  openGraph: {
    title: "Insights – Digital Marketing & AI | Heidigital",
    description:
      "Practical digital marketing and AI insights, guides, and strategies for smarter growth.",
    url: "https://heidigital.com/insights",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://heidigital.com/insights",
  url: "https://heidigital.com/insights",
  name: "Insights Hub – Digital Marketing & AI",
  description:
    "Practical articles, guides, and strategies covering digital marketing and AI tools for marketers.",
  publisher: {
    "@type": "Person",
    name: "Heidi",
    url: "https://heidigital.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://heidigital.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://heidigital.com/insights" },
    ],
  },
};

const mainCategories = [
  {
    icon: TrendingUp,
    label: "Digital Marketing",
    description:
      "SEO, SEM, Google Ads, Meta Ads, Analytics, and marketing strategy — practical insights for real-world application.",
    href: "/insights/digital-marketing",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-accent",
    badge: "digital-marketing",
    count: "6 topics",
  },
  {
    icon: Brain,
    label: "AI Hub",
    description:
      "Tutorials, use cases, and workflows for ChatGPT, Gemini, Canva AI, and the latest AI tools for marketers.",
    href: "/insights/ai-hub",
    gradient: "from-purple-500/20 to-blue-500/10",
    iconColor: "text-purple-400",
    badge: "ai-hub",
    count: "5 topics",
  },
];

const subCategories = [
  { icon: Search, label: "SEO", href: "/insights/digital-marketing", parent: "Digital Marketing" },
  { icon: Target, label: "SEM & Google Ads", href: "/insights/digital-marketing", parent: "Digital Marketing" },
  { icon: Users, label: "Meta Ads", href: "/insights/digital-marketing", parent: "Digital Marketing" },
  { icon: BarChart3, label: "Analytics", href: "/insights/digital-marketing", parent: "Digital Marketing" },
  { icon: Lightbulb, label: "Strategy", href: "/insights/digital-marketing", parent: "Digital Marketing" },
  { icon: Sparkles, label: "ChatGPT", href: "/insights/ai-hub", parent: "AI Hub" },
  { icon: Cpu, label: "Gemini", href: "/insights/ai-hub", parent: "AI Hub" },
  { icon: PenTool, label: "Canva AI", href: "/insights/ai-hub", parent: "AI Hub" },
];

export default function InsightsPage() {
  const featuredArticles = getFeaturedArticles().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-900/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Insights</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 badge-primary mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-text-main mb-6 leading-tight">
              Insights <span className="gradient-text">Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
              Practical articles, guides, and deep-dives covering digital marketing and AI — written for marketers who want to grow smarter, not just busier.
            </p>
          </div>
        </div>
      </section>

      {/* Main Category Cards */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-6">
            {mainCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`group card-base p-8 bg-gradient-to-br ${cat.gradient} relative overflow-hidden block`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-white/[0.02] to-transparent rounded-full translate-x-12 -translate-y-12" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                      </div>
                      <span className="badge-muted text-xs">{cat.count}</span>
                    </div>
                    <h2 className="text-2xl font-bold font-display text-text-main mb-3 group-hover:text-accent transition-colors">
                      {cat.label}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6">{cat.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Explore {cat.label} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-Category Grid */}
      <section className="pb-16 bg-background">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-display text-text-main mb-2">Browse by Topic</h2>
            <p className="text-text-muted">Jump straight to the area you want to explore.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {subCategories.map((sub) => {
              const Icon = sub.icon;
              return (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="group card-base p-4 flex flex-col items-start gap-3 hover:border-primary/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors">{sub.label}</p>
                    <p className="text-xs text-text-muted mt-0.5">{sub.parent}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-2">
                Featured Articles
              </h2>
              <p className="text-text-muted">Our top picks — practical and worth your time.</p>
            </div>
            <Link
              href="/insights/digital-marketing"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link href="/insights/digital-marketing" className="btn-outline text-sm">
              View all articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="card-base p-10 md:p-16 text-center bg-gradient-to-br from-primary/10 via-card to-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Work with Heidi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main mb-4">
                Need a custom strategy?
              </h2>
              <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
                Whether you need a full digital marketing strategy, SEO audit, or help with paid ads — get in touch and let&apos;s talk about your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="btn-outline">
                  Explore resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
