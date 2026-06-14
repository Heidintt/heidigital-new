import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  ChevronRight,
  TrendingUp,
  Mail,
  Sparkles,
} from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Digital Marketing Insights | Heidigital",
  description:
    "Practical digital marketing insights covering SEO, SEM, Google Ads, Meta Ads, analytics, and marketing strategy — written to help marketers get real results.",
  openGraph: {
    title: "Digital Marketing Insights | Heidigital",
    description:
      "Practical SEO, SEM, paid ads, analytics, and strategy content written for real-world application.",
    url: "https://heidigital.com/insights/digital-marketing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://heidigital.com/insights/digital-marketing",
  url: "https://heidigital.com/insights/digital-marketing",
  name: "Digital Marketing Insights",
  description:
    "Practical digital marketing insights covering SEO, SEM, Google Ads, Meta Ads, analytics, and strategy.",
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
      { "@type": "ListItem", position: 3, name: "Digital Marketing", item: "https://heidigital.com/insights/digital-marketing" },
    ],
  },
};

const filterTabs = [
  { label: "All", active: true },
  { label: "SEO", active: false },
  { label: "SEM & Google Ads", active: false },
  { label: "Meta Ads", active: false },
  { label: "Analytics", active: false },
  { label: "Strategy", active: false },
];

const topicCards = [
  {
    icon: Search,
    label: "SEO",
    description: "Keyword research, on-page optimisation, technical SEO, Core Web Vitals, and link building.",
    href: "/insights/digital-marketing/seo",
    count: "Articles & guides",
    color: "from-blue-500/15 to-cyan-500/5",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Target,
    label: "SEM & Google Ads",
    description: "Campaign structure, bidding strategies, Quality Score, Performance Max, and ROAS optimisation.",
    href: "/insights/digital-marketing/sem-google-ads",
    count: "Articles & guides",
    color: "from-emerald-500/15 to-teal-500/5",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Users,
    label: "Meta Ads",
    description: "Audience targeting, custom audiences, creative testing, and campaign optimisation for Facebook and Instagram.",
    href: "/insights/digital-marketing/meta-ads",
    count: "Articles & guides",
    color: "from-indigo-500/15 to-blue-500/5",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    description: "Google Analytics 4, Looker Studio dashboards, conversion tracking, and data-driven decisions.",
    href: "/insights/digital-marketing/analytics",
    count: "Articles & guides",
    color: "from-amber-500/15 to-orange-500/5",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Lightbulb,
    label: "Strategy",
    description: "Full-funnel digital marketing strategy, channel planning, audience research, and measuring ROI.",
    href: "/insights/digital-marketing/strategy",
    count: "Articles & guides",
    color: "from-rose-500/15 to-pink-500/5",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    iconColor: "text-rose-400",
  },
];

export default function DigitalMarketingPage() {
  const dmArticles = articles.filter((a) =>
    a.categorySlug.startsWith("digital-marketing")
  );
  const displayArticles = dmArticles.length > 0 ? dmArticles : articles;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-text-main transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Digital Marketing</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 badge-primary mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                Digital Marketing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4 leading-tight">
                Digital <span className="gradient-text">Marketing</span> Insights
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Practical, no-fluff insights covering SEO, paid ads, analytics, and strategy — everything you need to run effective digital marketing campaigns.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/insights" className="btn-ghost text-sm">
                ← All Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs (visual only) */}
      <section className="bg-background border-b border-white/[0.06] sticky top-0 z-10 backdrop-blur-sm">
        <div className="container-max">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  tab.active
                    ? "bg-primary text-white"
                    : "bg-white/5 text-text-muted hover:text-text-main hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold font-display text-text-main">
              All Articles
              <span className="ml-3 text-sm font-normal text-text-muted">
                ({displayArticles.length} articles)
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Topic Overview */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-3">
              Explore by Topic
            </h2>
            <p className="text-text-muted max-w-2xl">
              Dive deeper into any specific area of digital marketing. Each topic includes in-depth articles, how-to guides, and actionable frameworks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topicCards.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={`group card-base p-6 bg-gradient-to-br ${topic.color} block`}
                >
                  <div className={`w-10 h-10 rounded-lg ${topic.iconBg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${topic.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold font-display text-text-main mb-2 group-hover:text-accent transition-colors">
                    {topic.label}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{topic.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Explore {topic.label} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="card-base p-10 md:p-14 bg-gradient-to-br from-primary/8 via-card to-card max-w-3xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-3">
                Stay up to date
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Get the latest digital marketing insights, tips, and strategies delivered straight to your inbox. No spam — just useful content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-main placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="button"
                  className="btn-primary whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-text-muted mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
