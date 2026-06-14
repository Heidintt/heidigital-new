import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  ChevronRight,
  Brain,
  Search,
  BarChart3,
  Settings,
  Sparkles,
} from "lucide-react";
import ToolCard from "@/components/cards/ToolCard";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools – Recommended Digital Marketing & AI Tools | Heidigital",
  description:
    "Heidi's curated directory of the best digital marketing and AI tools — AI tools, SEO tools, marketing platforms, and productivity tools, with honest reviews.",
  openGraph: {
    title: "Tools – Recommended Digital Marketing & AI Tools | Heidigital",
    description:
      "Curated directory of the best AI, SEO, marketing, and productivity tools for digital marketers.",
    url: "https://heidigital.com/resources/tools",
  },
};

const toolSections = [
  {
    key: "ai-tools",
    label: "AI Tools",
    icon: Brain,
    description: "The best AI assistants and tools for content creation, research, and marketing automation.",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    badge: "badge-muted",
  },
  {
    key: "seo-tools",
    label: "SEO Tools",
    icon: Search,
    description: "Essential tools for keyword research, technical SEO, site audits, and backlink analysis.",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    badge: "badge-primary",
  },
  {
    key: "marketing-tools",
    label: "Marketing Tools",
    icon: BarChart3,
    description: "Platforms and tools for paid advertising, email marketing, and analytics reporting.",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    badge: "badge-green",
  },
  {
    key: "productivity-tools",
    label: "Productivity Tools",
    icon: Settings,
    description: "Project management and workspace tools to keep your marketing organised and efficient.",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
    badge: "badge-gold",
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/8 via-transparent to-blue-900/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-radial from-emerald-600/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-text-main transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Tools</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 badge-green mb-6">
                <Wrench className="w-3.5 h-3.5" />
                Tools Directory
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4 leading-tight">
                Digital Marketing &amp; AI{" "}
                <span className="gradient-text">Tools</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                A curated directory of the tools Heidi actually uses and recommends — covering AI, SEO, paid advertising, analytics, and productivity. Honest descriptions, no affiliate fluff.
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm text-text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {tools.filter((t) => t.pricing === "Free").length} free tools
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {tools.filter((t) => t.pricing === "Freemium").length} freemium tools
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {tools.filter((t) => t.pricing === "Paid").length} paid tools
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/resources" className="btn-ghost text-sm">
                ← Resources Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools by Category */}
      {toolSections.map((section) => {
        const categoryTools = tools.filter((t) => t.categorySlug === section.key);
        if (categoryTools.length === 0) return null;

        const Icon = section.icon;
        return (
          <section key={section.key} className="section-padding bg-background odd:bg-background-secondary">
            <div className="container-max">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-xl ${section.iconBg} border flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${section.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-text-main">
                    {section.label}
                    <span className={`ml-3 ${section.badge} text-xs`}>
                      {categoryTools.length} tool{categoryTools.length !== 1 ? "s" : ""}
                    </span>
                  </h2>
                  <p className="text-sm text-text-muted mt-0.5">{section.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Separator */}
      <div className="glow-line" />

      {/* Analytics Tools (separate category from marketing-tools in data) */}
      {(() => {
        const analyticsTools = tools.filter(
          (t) => t.category === "Analytics Tools"
        );
        return analyticsTools.length > 0 ? (
          <section className="section-padding bg-background">
            <div className="container-max">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-text-main">
                    Analytics Tools
                    <span className="ml-3 badge-primary text-xs">
                      {analyticsTools.length} tool{analyticsTools.length !== 1 ? "s" : ""}
                    </span>
                  </h2>
                  <p className="text-sm text-text-muted mt-0.5">
                    Track performance, analyse user behaviour, and build clear marketing dashboards.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {analyticsTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="card-base p-10 md:p-14 bg-gradient-to-br from-emerald-900/15 via-card to-card text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-radial from-emerald-600/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 badge-green mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Need personalised advice?
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4">
                Not sure which tools are right for you?
              </h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">
                Every business is different. Get in touch and Heidi can help you select the right tools for your goals, budget, and team size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Talk to Heidi <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/templates" className="btn-outline">
                  Browse free templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
