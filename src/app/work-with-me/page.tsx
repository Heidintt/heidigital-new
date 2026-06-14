import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Target,
  Users,
  BarChart3,
  TrendingUp,
  Brain,
  LayoutTemplate,
  PenLine,
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  Laptop,
  Video,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work With Me – Digital Marketing Services | Heidigital",
  description:
    "Digital marketing and AI support for businesses, marketers, and creators. SEO audits, Google Ads, Meta Ads, analytics, strategy, and AI workflow services from Heidi.",
  openGraph: {
    title: "Work With Me – Digital Marketing Services | Heidigital",
    description:
      "Digital marketing and AI support for businesses, marketers, and creators. Book a service with Heidi.",
    url: "https://heidigital.com/work-with-me",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heidigital.com/work-with-me",
  name: "Digital Marketing Services by Heidi",
  provider: {
    "@type": "Person",
    name: "Heidi",
    url: "https://heidigital.com",
  },
  serviceType: "Digital Marketing",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Audit" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Reporting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Marketing Workflow" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content & Campaign Optimisation" } },
    ],
  },
};

const services = [
  {
    icon: Search,
    title: "SEO Audit",
    description:
      "A comprehensive review of your website's technical SEO, on-page factors, content quality, and backlink profile — with a clear action plan.",
    badge: "Audit",
    badgeClass: "badge-gold",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/15",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Strategy",
    description:
      "A full-funnel strategy tailored to your business goals — covering channel selection, audience targeting, messaging, and KPIs.",
    badge: "Strategy",
    badgeClass: "badge-primary",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/15",
  },
  {
    icon: Target,
    title: "Google Ads Support",
    description:
      "Campaign audits, restructuring, keyword strategy, ad copy review, and optimisation for Search, Display, and Performance Max.",
    badge: "Ads",
    badgeClass: "badge-green",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/15",
  },
  {
    icon: Users,
    title: "Meta Ads Support",
    description:
      "Audience strategy, creative direction, campaign structure, and funnel optimisation for Facebook and Instagram advertising.",
    badge: "Ads",
    badgeClass: "badge-green",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/15",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "GA4 setup, custom event tracking, Looker Studio dashboards, and reporting frameworks that turn data into actionable decisions.",
    badge: "Analytics",
    badgeClass: "badge-primary",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/15",
  },
  {
    icon: Brain,
    title: "AI Marketing Workflow",
    description:
      "Custom AI workflows using ChatGPT, Gemini, and other tools to automate content creation, research, and reporting tasks.",
    badge: "AI",
    badgeClass: "badge-gold",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/15",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page Strategy",
    description:
      "Conversion-focused landing page strategy, copy direction, and structure review — aligned to your campaign goals and target audience.",
    badge: "Strategy",
    badgeClass: "badge-primary",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/15",
  },
  {
    icon: PenLine,
    title: "Content & Campaign Optimisation",
    description:
      "Review and improve existing content, ad copy, email sequences, and campaign assets to improve performance and conversion rates.",
    badge: "Optimisation",
    badgeClass: "badge-muted",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/15",
  },
];

const howIHelp = [
  {
    step: "01",
    title: "Identify opportunities",
    description:
      "I audit what's not working — whether it's lost SEO rankings, underperforming ads, poor analytics setup, or missed content opportunities.",
    color: "text-accent",
  },
  {
    step: "02",
    title: "Build a plan",
    description:
      "I create a clear, prioritised strategy that fits your budget, timeline, and business goals — no jargon, no fluff.",
    color: "text-primary",
  },
  {
    step: "03",
    title: "Execute and optimise",
    description:
      "I implement, test, and continually refine — making data-informed adjustments so your marketing improves over time.",
    color: "text-emerald-400",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Small Business Owners",
    description: "Get more visibility, more leads, and smarter marketing without the big agency price tag.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Briefcase,
    title: "Digital Marketers",
    description: "Get a second opinion, an audit, or support for campaigns that need expert attention.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Laptop,
    title: "Freelancers",
    description: "Level up your own marketing skills or get help with client work that's outside your expertise.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Video,
    title: "Content Creators",
    description: "Grow your audience with SEO-optimised content, paid amplification, and smarter distribution.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Build your marketing foundation early with the right channels, tracking, and growth levers.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="relative container-max section-padding text-center">
          <div className="inline-flex items-center gap-2 badge-gold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Available for new projects
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-main mb-5 leading-tight">
            Work With Me
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Digital marketing and AI support for businesses, marketers, and creators who want
            results they can measure.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              Services
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Practical digital marketing support across the channels and tools that drive real
              growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`card-base p-6 flex flex-col border ${service.border} group hover:shadow-card-hover`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-2.5 rounded-lg ${service.bg}`}>
                      <Icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <span className={service.badgeClass}>{service.badge}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-text-main mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="bg-background-secondary section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              How I can help
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              A straightforward process that delivers clarity, strategy, and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howIHelp.map((step) => (
              <div key={step.step} className="card-base p-8 text-center">
                <p className={`font-display text-5xl font-bold ${step.color} opacity-30 mb-4`}>
                  {step.step}
                </p>
                <h3 className="font-display text-xl font-bold text-text-main mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              Who this is for
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              I work with a range of clients — from solo operators to growing teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div key={audience.title} className="card-base p-6 text-center group">
                  <div
                    className={`inline-flex p-3 rounded-xl ${audience.bg} mb-4 mx-auto`}
                  >
                    <Icon className={`w-6 h-6 ${audience.color}`} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-text-main mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Value points */}
          <div className="mt-12 card-base p-8 bg-gradient-to-br from-primary/5 via-card to-card border-primary/15">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                "No agency overhead — you work directly with me",
                "Transparent communication and realistic expectations",
                "Recommendations grounded in data and real campaign experience",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-muted leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-secondary section-padding">
        <div className="container-max">
          <div className="card-base p-12 text-center bg-gradient-to-br from-primary/10 via-card to-card border-primary/20">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              Ready to get started?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8 text-lg">
              Tell me about your project and what you&apos;re trying to achieve. I&apos;ll get
              back to you within 1–2 business days.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
