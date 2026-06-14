import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ChevronRight,
  Download,
  Sparkles,
  Mail,
  Star,
} from "lucide-react";
import TemplateCard from "@/components/cards/TemplateCard";
import { templates } from "@/data/templates";

export const metadata: Metadata = {
  title: "Templates & Checklists – Free Marketing Resources | Heidigital",
  description:
    "Download free digital marketing templates, checklists, and AI prompt packs — SEO audit checklists, Google Ads checklists, marketing plan templates, and more.",
  openGraph: {
    title: "Templates & Checklists – Free Marketing Resources | Heidigital",
    description:
      "Free downloadable marketing templates, checklists, prompt packs, and guides for digital marketers.",
    url: "https://heidigital.com/resources/templates",
  },
};

const stats = [
  { value: `${templates.length}`, label: "Free resources" },
  { value: "PDF & Doc", label: "formats included" },
  { value: "No signup", label: "required to download" },
];

export default function TemplatesPage() {
  const featuredTemplates = templates.filter((t) => t.featured);
  const otherTemplates = templates.filter((t) => !t.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-amber-900/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-gold/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-text-main transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Templates</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                <Download className="w-3.5 h-3.5" />
                Free Downloads
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4 leading-tight">
                Templates &amp;{" "}
                <span className="gradient-text-gold">Checklists</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Free, ready-to-use marketing templates, checklists, and AI prompt packs. Download straight away — no signup required. Built by Heidi for real-world marketing work.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-bold font-display text-text-main">{stat.value}</span>
                    <span className="text-sm text-text-muted">{stat.label}</span>
                  </div>
                ))}
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

      {/* What's included banner */}
      <section className="bg-background-secondary border-y border-white/[0.06]">
        <div className="container-max py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 badge-gold flex-shrink-0">
              <Star className="w-3.5 h-3.5" />
              100% Free
            </div>
            <p className="text-sm text-text-muted">
              All templates on this page are free to download and use. No email required, no paywall. If you&apos;d like something custom-built for your business,{" "}
              <Link href="/contact" className="text-primary hover:text-accent transition-colors font-medium">
                get in touch
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      {featuredTemplates.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-text-main">
                  Most Popular
                  <span className="ml-3 badge-gold text-xs">Featured</span>
                </h2>
                <p className="text-sm text-text-muted mt-0.5">The templates marketers download most often.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Other Templates */}
      {otherTemplates.length > 0 && (
        <section className="section-padding bg-background-secondary">
          <div className="container-max">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-text-main">
                  All Resources
                  <span className="ml-3 badge-primary text-xs">
                    {templates.length} total
                  </span>
                </h2>
                <p className="text-sm text-text-muted mt-0.5">Every template, checklist, and guide in the library.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All templates if no split */}
      {featuredTemplates.length === 0 && (
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-display text-text-main mb-2">
                All Templates &amp; Resources
              </h2>
              <p className="text-text-muted">Free downloads for your marketing work — ready to use straight away.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="card-base p-10 md:p-14 bg-gradient-to-br from-gold/8 via-card to-card relative overflow-hidden max-w-3xl mx-auto text-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-gold/10 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4">
                Need a custom template?
              </h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">
                If you need templates tailored to your brand, industry, or specific campaign goals — Heidi can create custom resources for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  <Sparkles className="w-4 h-4" />
                  Contact Heidi
                </Link>
                <Link href="/resources" className="btn-outline">
                  Back to resources
                </Link>
              </div>
              <p className="text-xs text-text-muted mt-6">
                Custom templates, campaign frameworks, and brand-specific checklists available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
