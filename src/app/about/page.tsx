import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Target,
  Users,
  BarChart3,
  TrendingUp,
  Brain,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Database,
  Rocket,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Heidi – Digital Marketing Professional | Heidigital",
  description:
    "Meet Heidi — a digital marketing professional with 7+ years of hands-on experience in SEO, SEM, paid advertising, analytics, and AI tools. Learn about her background and what Heidigital is all about.",
  openGraph: {
    title: "About Heidi – Digital Marketing Professional | Heidigital",
    description:
      "7+ years of hands-on experience in SEO, Google Ads, Meta Ads, analytics, and AI-powered marketing.",
    url: "https://heidigital.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://heidigital.com/#person",
  name: "Heidi",
  jobTitle: "Digital Marketing Professional",
  url: "https://heidigital.com",
  sameAs: ["https://heidigital.com/about"],
  knowsAbout: [
    "Search Engine Optimisation",
    "Google Ads",
    "Meta Ads",
    "Digital Marketing Strategy",
    "Google Analytics 4",
    "AI Marketing Tools",
    "ChatGPT for Marketing",
    "Content Marketing",
    "SEM",
    "Paid Advertising",
  ],
  description:
    "Digital marketing professional with more than 7 years of hands-on experience across SEO, SEM, paid advertising, analytics, and AI tools.",
};

const skills = [
  {
    icon: Search,
    title: "SEO & Search Visibility",
    description:
      "Technical SEO, on-page optimisation, content strategy, and keyword research that drives sustainable organic growth.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Target,
    title: "Google Ads & SEM",
    description:
      "Search, display, Shopping, and Performance Max campaigns built for efficiency and measurable ROAS.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Meta Ads",
    description:
      "Audience strategy, creative testing, funnel optimisation, and campaign scaling across Facebook and Instagram.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "GA4 configuration, custom dashboards, conversion tracking, and actionable data insights that guide smarter decisions.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description:
      "Full-funnel marketing planning, channel selection, budget allocation, and performance roadmaps.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Brain,
    title: "AI for Marketing",
    description:
      "Practical AI workflows using ChatGPT, Gemini, and Canva AI to speed up content, research, and campaign work.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const principles = [
  {
    icon: Lightbulb,
    title: "Practical First",
    description:
      "I focus on what actually works in the real world, not just theory. Every insight on Heidigital is grounded in hands-on experience.",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    icon: Database,
    title: "Data-Informed",
    description:
      "Every recommendation is backed by data and real campaign experience. I believe in measuring what matters and letting numbers guide strategy.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description:
      "Digital marketing and AI move fast. I stay current so you don't have to — sharing what's new, what works, and what to ignore.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
];

export default function AboutPage() {
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
          <div className="inline-flex items-center gap-2 badge-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Getting to know me
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-main mb-4 leading-tight">
            About Me
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Digital Marketing Professional &amp; AI Enthusiast
          </p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Bio */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow-sm flex-shrink-0">
                  <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Heidi" fill className="object-cover" />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">Heidi</span>
                </h2>
              </div>
              <div className="space-y-5 text-text-muted leading-relaxed text-lg">
                <p>
                  I&apos;m a digital marketing professional with more than 7 years of hands-on
                  experience across SEO, SEM, paid advertising, analytics, and AI tools.
                </p>
                <p>
                  I&apos;ve worked across different industries and business sizes, helping brands
                  improve their digital presence, drive traffic, and grow smarter with data and
                  strategy.
                </p>
                <p>
                  Heidigital is where I share everything I&apos;ve learned — practical insights,
                  tested strategies, and the tools that actually work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/insights/digital-marketing" className="btn-primary">
                  Read My Insights <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Stats card */}
            <div className="card-base p-8 bg-gradient-to-br from-primary/5 via-card to-card">
              <h3 className="font-display text-lg font-semibold text-text-main mb-6">
                At a glance
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg bg-background/60 border border-white/[0.06]">
                  <p className="text-3xl font-bold font-display gradient-text mb-1">7+</p>
                  <p className="text-xs text-text-muted font-medium">Years Experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/60 border border-white/[0.06]">
                  <p className="text-3xl font-bold font-display gradient-text mb-1">Multi</p>
                  <p className="text-xs text-text-muted font-medium">Industries</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {["SEO", "Paid Ads", "Analytics", "AI Workflows"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-text-muted">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                <p className="text-xs text-text-muted leading-relaxed">
                  <span className="text-accent font-semibold">What is Heidigital?</span>
                  {" "}A practical hub for digital marketers — sharing real strategies, AI
                  workflows, and tools that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-background-secondary section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              What I&apos;m good at
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Specialisations built through years of real campaign work across multiple industries
              and platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.title} className="card-base p-6 group">
                  <div className={`inline-flex p-3 rounded-lg ${skill.bg} mb-4`}>
                    <Icon className={`w-5 h-5 ${skill.color}`} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text-main mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              My approach
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Three principles that guide everything I do — from campaign strategy to content on
              this site.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`card-base p-8 border ${p.border} bg-gradient-to-br from-card to-card/60`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${p.bg} mb-5`}>
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <h3 className={`font-display text-xl font-bold ${p.color} mb-3`}>
                    {p.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-secondary section-padding">
        <div className="container-max">
          <div className="card-base p-12 text-center bg-gradient-to-br from-primary/10 via-card to-card border-primary/20">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-main mb-4">
              Want to work together?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8 text-lg">
              Whether you need SEO support, a Google Ads review, or a full digital marketing
              strategy — I&apos;m here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/work-with-me" className="btn-primary">
                See My Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                <Mail className="w-4 h-4" /> Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
