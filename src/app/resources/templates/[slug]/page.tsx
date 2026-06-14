import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Download, CheckSquare, FileText, BookOpen, Layers } from "lucide-react";
import { templates, getTemplateBySlug } from "@/data/templates";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.categorySlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Resource Not Found | Heidigital" };
  return {
    title: `${template.title} – Free Download | Heidigital`,
    description: template.description,
    openGraph: {
      title: `${template.title} | Heidigital`,
      description: template.description,
      url: `https://heidigital.com/resources/templates/${slug}`,
    },
  };
}

const typeIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Checklist: CheckSquare,
  Template: FileText,
  Guide: BookOpen,
  "Prompt Pack": Layers,
  Worksheet: FileText,
};

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const Icon = typeIcon[template.type] || FileText;

  return (
    <>
      <section className="pt-28 pb-16 bg-background-secondary">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6 flex-wrap">
            <Link href="/" className="hover:text-text-main">Home</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-text-main">Resources</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources/templates" className="hover:text-text-main">Templates</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">{template.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge-green">Free</span>
              <span className="badge-primary">{template.type}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">{template.title}</h1>
            <p className="text-lg text-text-muted mb-2">{template.description}</p>
            <p className="text-sm text-text-muted">Format: <span className="text-text-main">{template.format}</span></p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="card-base p-8 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-text-main mb-3">About this resource</h2>
                <p className="text-text-muted leading-relaxed mb-6">{template.description}</p>
                <p className="text-sm text-text-muted mb-6">
                  <span className="font-semibold text-text-main">Format:</span> {template.format}
                  <br />
                  <span className="font-semibold text-text-main">Category:</span> {template.category}
                  <br />
                  <span className="font-semibold text-text-main">Type:</span> {template.type}
                </p>
                <button
                  className="btn-primary w-full justify-center"
                  type="button"
                  aria-label={`Download ${template.title} for free`}
                >
                  <Download className="w-4 h-4" />
                  Download Free
                </button>
                <p className="text-xs text-text-muted text-center mt-3">No email required · Instant download</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-text-main mb-4">What&apos;s included</h2>
              <div className="space-y-3 mb-8">
                {[
                  "Ready-to-use format — just fill in your details",
                  "Practical structure based on real-world experience",
                  "Clear sections and labels for easy navigation",
                  "Suitable for freelancers, in-house teams, and agencies",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckSquare className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-text-muted text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold font-display text-text-main mb-4">More free resources</h2>
              <div className="space-y-2">
                {templates.filter((t) => t.id !== template.id).slice(0, 3).map((t) => (
                  <Link key={t.id} href={`/resources/templates/${t.categorySlug}`} className="flex items-center gap-3 card-base p-4 hover:border-primary/30 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors truncate">{t.title}</p>
                      <p className="text-xs text-text-muted">{t.type} · {t.format}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-secondary">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">Need a custom template or checklist?</h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">Get in touch with Heidi for custom marketing templates, reporting dashboards, or strategy documents tailored to your business.</p>
          <Link href="/contact" className="btn-primary">Contact Heidi</Link>
        </div>
      </section>
    </>
  );
}
