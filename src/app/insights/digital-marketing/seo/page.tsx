import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, ChevronRight } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";
import { collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO Insights – Search Engine Optimisation Tips | Heidigital",
  description:
    "Practical SEO tips, strategies, and guides covering keyword research, on-page SEO, technical SEO, link building, and content strategy.",
  openGraph: {
    title: "SEO Insights | Heidigital",
    description: "Practical SEO tips and strategies for digital marketers.",
    url: "https://heidigital.com/insights/digital-marketing/seo",
  },
};

const seoTopics = [
  { label: "Keyword Research", desc: "Finding the right keywords for your content and pages" },
  { label: "On-Page SEO", desc: "Title tags, meta descriptions, headings, and content optimisation" },
  { label: "Technical SEO", desc: "Site speed, crawlability, indexing, and Core Web Vitals" },
  { label: "Link Building", desc: "Building authority through quality backlinks" },
  { label: "Content SEO", desc: "Creating content that ranks and drives organic traffic" },
  { label: "Local SEO", desc: "Optimising for local search and Google Business Profile" },
];

export default function SEOPage() {
  const seoArticles = articles.filter(
    (a) => a.categorySlug === "digital-marketing/seo" || a.category === "SEO"
  );
  const fallbackArticles = articles.filter((a) =>
    a.categorySlug.startsWith("digital-marketing")
  ).slice(0, 3);
  const displayArticles = seoArticles.length > 0 ? seoArticles : fallbackArticles;

  const jsonLd = collectionPageSchema({
    name: "SEO Insights",
    description: "Practical SEO tips, strategies, and guides for digital marketers.",
    url: "/insights/digital-marketing/seo",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
        <div className="container-max relative">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-text-main transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/digital-marketing" className="hover:text-text-main transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">SEO</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Search className="w-5 h-5 text-accent" />
            </div>
            <span className="badge-primary">Digital Marketing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">
            SEO Insights
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            Practical SEO tips, strategies, and guides — covering keyword research, on-page SEO,
            technical SEO, link building, and content strategy to improve your search visibility.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold font-display text-text-main mb-8">SEO Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {seoTopics.map((topic) => (
              <div key={topic.label} className="card-base p-5 hover:border-primary/30 group">
                <h3 className="text-base font-semibold text-text-main group-hover:text-accent transition-colors mb-1.5">
                  {topic.label}
                </h3>
                <p className="text-sm text-text-muted">{topic.desc}</p>
              </div>
            ))}
          </div>

          {/* Articles */}
          <h2 className="text-2xl font-bold font-display text-text-main mb-8">SEO Articles</h2>
          {displayArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="card-base p-12 text-center">
              <p className="text-text-muted mb-4">More SEO articles coming soon.</p>
              <Link href="/insights/digital-marketing" className="btn-primary">
                View all Digital Marketing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">Need an SEO audit?</h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            Get a professional SEO audit from Heidi to identify opportunities and fix what's holding your site back.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
