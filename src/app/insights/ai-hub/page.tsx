import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Sparkles,
  Cpu,
  PenTool,
  Search,
  FileText,
  ChevronRight,
  Zap,
  MessageSquare,
  ImageIcon,
} from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "AI Hub – AI Tools & Insights for Marketers | Heidigital",
  description:
    "Explore the Heidigital AI Hub — tutorials, use cases, and practical workflows for ChatGPT, Gemini, Canva AI, AI for SEO, and AI for content marketing.",
  openGraph: {
    title: "AI Hub – AI Tools & Insights for Marketers | Heidigital",
    description:
      "Tutorials, use cases, and workflows for ChatGPT, Gemini, Canva AI, and the latest AI tools for digital marketers.",
    url: "https://heidigital.com/insights/ai-hub",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://heidigital.com/insights/ai-hub",
  url: "https://heidigital.com/insights/ai-hub",
  name: "AI Hub – AI Tools & Insights for Marketers",
  description:
    "Tutorials, use cases, and practical workflows for ChatGPT, Gemini, Canva AI, and other AI tools for marketers.",
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
      { "@type": "ListItem", position: 3, name: "AI Hub", item: "https://heidigital.com/insights/ai-hub" },
    ],
  },
};

const toolCards = [
  {
    icon: MessageSquare,
    name: "ChatGPT",
    useCase: "Content writing, ad copy, email drafts, brainstorming",
    description:
      "The most widely used AI assistant for marketers. Learn how to use it for content briefs, campaign ideation, ad copy, and daily workflow automation.",
    href: "/insights/ai-hub/chatgpt",
    gradient: "from-emerald-500/15 to-teal-500/5",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    badge: "Most popular",
    badgeStyle: "badge-green",
  },
  {
    icon: Cpu,
    name: "Google Gemini",
    useCase: "Research, content planning, data analysis",
    description:
      "Google's AI with deep Workspace integration. Perfect for market research, summarising long documents, competitor analysis, and content planning.",
    href: "/insights/ai-hub/gemini",
    gradient: "from-blue-500/15 to-cyan-500/5",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    badge: "Google",
    badgeStyle: "badge-primary",
  },
  {
    icon: ImageIcon,
    name: "Canva AI",
    useCase: "Social graphics, design, presentations",
    description:
      "Magic Write, AI image generation, and Magic Design make Canva an AI powerhouse for marketers who don't have a design team.",
    href: "/insights/ai-hub/canva-ai",
    gradient: "from-purple-500/15 to-indigo-500/5",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    badge: "Design",
    badgeStyle: "badge-muted",
  },
  {
    icon: Search,
    name: "AI for SEO",
    useCase: "Keyword research, content optimisation, technical SEO",
    description:
      "Discover how AI tools are transforming keyword research, content brief creation, on-page SEO, and technical auditing for faster, smarter results.",
    href: "/insights/ai-hub/ai-for-seo",
    gradient: "from-amber-500/15 to-orange-500/5",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
    badge: "SEO",
    badgeStyle: "badge-gold",
  },
  {
    icon: FileText,
    name: "AI for Content",
    useCase: "Blog posts, social media, video scripts",
    description:
      "Using AI to create content without losing quality or authenticity. Best practices, workflows, and practical tips for content marketers.",
    href: "/insights/ai-hub/ai-for-content",
    gradient: "from-rose-500/15 to-pink-500/5",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    iconColor: "text-rose-400",
    badge: "Content",
    badgeStyle: "badge-muted",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Save hours every week",
    description: "AI tools can handle first drafts, research summaries, and content formatting — freeing you for strategic thinking.",
  },
  {
    icon: Brain,
    title: "Work smarter, not harder",
    description: "Use AI as a thinking partner for brainstorming campaigns, generating ad variations, and analysing data at scale.",
  },
  {
    icon: Sparkles,
    title: "Maintain your brand voice",
    description: "Learn how to prompt AI tools to produce content that sounds like you — not a robot — and edit for quality.",
  },
  {
    icon: PenTool,
    title: "Create more, stress less",
    description: "From social captions to full blog posts, AI tools unlock the ability to produce more content without burning out.",
  },
];

export default function AIHubPage() {
  const aiArticles = articles.filter((a) =>
    a.categorySlug.startsWith("ai-hub")
  );
  const displayArticles = aiArticles.length > 0 ? aiArticles : articles.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/5 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-gradient-radial from-purple-600/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-text-main transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">AI Hub</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 bg-purple-500/10 text-purple-400 border border-purple-500/20 badge">
                <Brain className="w-3.5 h-3.5" />
                AI Hub
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4 leading-tight">
                AI Tools &amp; Insights for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-accent">
                  Marketers
                </span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Practical tutorials, real-world use cases, and step-by-step workflows to help you use AI tools effectively in your marketing — without the hype.
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

      {/* Tool Cards Grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-3">
              Explore by Tool &amp; Topic
            </h2>
            <p className="text-text-muted max-w-2xl">
              From ChatGPT to Canva AI — find practical guides and use cases for the AI tools that are transforming how marketers work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toolCards.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`group card-base p-6 bg-gradient-to-br ${tool.gradient} flex flex-col h-full block`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${tool.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${tool.iconColor}`} />
                    </div>
                    <span className={tool.badgeStyle}>{tool.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-text-main mb-1 group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-text-muted font-medium mb-3 italic">
                    Best for: {tool.useCase}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">{tool.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all mt-auto">
                    Read guides <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-2">
                Latest AI Articles
              </h2>
              <p className="text-text-muted">
                Practical guides and use cases from the Heidigital AI Hub.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* How AI helps marketers */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4">
              How AI Tools Help Marketers
            </h2>
            <p className="text-text-muted leading-relaxed">
              AI isn&apos;t about replacing marketers — it&apos;s about giving you leverage. Here&apos;s how incorporating AI into your workflow can transform what you can achieve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="card-base p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-text-main mb-2">{benefit.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="card-base p-10 md:p-14 bg-gradient-to-br from-purple-900/20 via-card to-card text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-radial from-purple-600/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6 bg-purple-500/10 text-purple-400 border border-purple-500/20 badge">
                <Sparkles className="w-3.5 h-3.5" />
                Start Using AI Today
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4">
                Ready to add AI to your marketing toolkit?
              </h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">
                Explore our free AI prompt packs, tools directory, and step-by-step guides to get started without the overwhelm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources/tools" className="btn-primary">
                  Browse AI Tools <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/templates" className="btn-outline">
                  Get Free Prompt Pack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
