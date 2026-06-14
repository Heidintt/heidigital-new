import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User, Tag, ChevronRight, BookOpen } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Google Core Updates: What Marketers Should Know | Heidigital",
  description:
    "A practical guide to understanding how Google core updates can affect rankings, visibility, and organic traffic — and what you can do to adapt.",
  openGraph: {
    title: "Google Core Updates: What Marketers Should Know | Heidigital",
    description:
      "A practical guide to understanding how Google core updates can affect rankings, visibility, and organic traffic — and what you can do to adapt.",
    url: "https://heidigital.com/insights/digital-marketing/google-core-updates",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://heidigital.com/insights/digital-marketing/google-core-updates",
  headline: "Google Core Updates: What Marketers Should Know",
  description:
    "A practical guide to understanding how Google core updates can affect rankings, visibility, and organic traffic — and what you can do to adapt.",
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
  author: {
    "@type": "Person",
    name: "Heidi",
    url: "https://heidigital.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Heidigital",
    url: "https://heidigital.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://heidigital.com/insights/digital-marketing/google-core-updates",
  },
  keywords: ["SEO", "Google", "Algorithm", "Core Updates", "Digital Marketing"],
  articleSection: "Digital Marketing",
};

// Related articles — same general topic area (excluding this article)
const relatedArticles = articles
  .filter((a) => a.slug !== "google-core-updates")
  .filter(
    (a) =>
      a.categorySlug === "digital-marketing" ||
      a.tags?.some((t) => ["SEO", "Google", "Search"].includes(t))
  )
  .slice(0, 3);

const tags = ["SEO", "Google", "Algorithm"];

export default function GoogleCoreUpdatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-background min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-background-secondary border-b border-white/[0.06]">
          <div className="container-max py-4">
            <nav className="flex items-center gap-1.5 text-sm text-text-muted flex-wrap">
              <Link href="/" className="hover:text-text-main transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
              <Link
                href="/insights"
                className="hover:text-text-main transition-colors"
              >
                Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
              <Link
                href="/insights/digital-marketing"
                className="hover:text-text-main transition-colors"
              >
                Digital Marketing
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
              <span className="text-text-main truncate max-w-[200px] sm:max-w-none">
                Google Core Updates
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-background-secondary border-b border-white/[0.06] py-12 md:py-16">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <span className="badge-primary">Digital Marketing</span>
                <span className="badge-gold">Featured</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                Google Core Updates: What Marketers Should Know
              </h1>

              <p className="text-lg text-text-muted leading-relaxed mb-8">
                A practical guide to understanding how Google core updates can affect rankings,
                visibility, and organic traffic — and what you can do to adapt.
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-text-muted border-t border-white/[0.06] pt-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  Heidi
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  June 1, 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              {/* Intro paragraph */}
              <p className="text-lg text-text-muted leading-relaxed mb-10">
                Google regularly releases broad core algorithm updates that can significantly impact
                how websites rank in search results. Unlike smaller, targeted updates, core updates
                are wide-ranging changes designed to improve the overall quality and relevance of
                search results.
              </p>

              {/* ── Section 1 ── */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-text-main mb-4 pb-3 border-b border-white/[0.06]">
                  What Are Google Core Updates?
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Google core updates are major changes to the search algorithm that affect how
                  Google evaluates and ranks content across the web. They are not penalties — they
                  are improvements to how Google assesses content quality, relevance, and authority.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Google typically releases several core updates per year, and each one can shift
                  rankings across virtually every industry and niche. The effects can be immediate
                  or gradual, and they often take weeks to fully roll out.
                </p>
              </section>

              {/* ── Section 2 ── */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-text-main mb-4 pb-3 border-b border-white/[0.06]">
                  How Core Updates Affect Your Website
                </h2>
                <p className="text-text-muted leading-relaxed mb-5">
                  When a core update rolls out, you may notice:
                </p>
                <ul className="space-y-3 mb-5">
                  {[
                    {
                      bold: "Ranking drops or gains",
                      rest: " for key pages — sometimes significant shifts in position for competitive queries",
                    },
                    {
                      bold: "Changes in organic traffic",
                      rest: " — sometimes sudden and significant, especially for high-volume landing pages",
                    },
                    {
                      bold: "Shifts in visibility",
                      rest: " for specific content types or categories, including featured snippets and knowledge panels",
                    },
                    {
                      bold: "Changes in click-through rates",
                      rest: " as different pages appear in results and SERP layouts adjust",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <p className="text-text-muted leading-relaxed">
                        <strong className="text-text-main font-semibold">{item.bold}</strong>
                        {item.rest}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/15">
                  <p className="text-sm text-text-muted leading-relaxed">
                    <strong className="text-accent">Important:</strong> A ranking drop after a core
                    update does not always mean your content has done something wrong. It may simply
                    mean that other content has been assessed as more relevant or authoritative.
                  </p>
                </div>
              </section>

              {/* ── Section 3 ── */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-text-main mb-4 pb-3 border-b border-white/[0.06]">
                  What Google Looks for After Core Updates
                </h2>
                <p className="text-text-muted leading-relaxed mb-5">
                  Google&apos;s core updates increasingly focus on{" "}
                  <strong className="text-text-main">E-E-A-T</strong>: Experience, Expertise,
                  Authoritativeness, and Trustworthiness. Content that demonstrates genuine
                  expertise and provides real value to users tends to perform better over time.
                </p>
                <p className="text-text-muted leading-relaxed mb-5 font-medium">
                  Key signals include:
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      bold: "Content depth and accuracy",
                      rest: " — is your content genuinely helpful and well-researched? Does it answer the user's actual question?",
                    },
                    {
                      bold: "Author credibility",
                      rest: " — does the content come from someone with real experience? Are credentials and expertise clear?",
                    },
                    {
                      bold: "Page experience",
                      rest: " — is the page fast, mobile-friendly, and easy to use? Core Web Vitals continue to matter.",
                    },
                    {
                      bold: "Backlink profile",
                      rest: " — are reputable, relevant sites linking to your content as a trusted source?",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                      <p className="text-text-muted leading-relaxed">
                        <strong className="text-text-main font-semibold">{item.bold}</strong>
                        {item.rest}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* ── Section 4 ── */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-text-main mb-4 pb-3 border-b border-white/[0.06]">
                  How to Respond to a Core Update
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  If your site was affected by a core update, here&apos;s a practical approach to
                  diagnosing and recovering:
                </p>
                <ol className="space-y-5">
                  {[
                    {
                      num: "1",
                      title: "Audit your affected pages",
                      desc: "Identify which pages dropped and analyse what they have in common — category, content type, author, or topic area.",
                    },
                    {
                      num: "2",
                      title: "Improve content quality",
                      desc: "Focus on depth, accuracy, and genuine helpfulness. Ask: does this page truly serve the user better than competing pages?",
                    },
                    {
                      num: "3",
                      title: "Demonstrate expertise",
                      desc: "Add author bios, cite credible sources, include original data or opinions, and show real first-hand experience.",
                    },
                    {
                      num: "4",
                      title: "Improve page experience",
                      desc: "Check Core Web Vitals, mobile usability, and page speed. Use Google Search Console to identify and fix issues.",
                    },
                    {
                      num: "5",
                      title: "Build topical authority",
                      desc: "Create clusters of content around your core topics. Breadth and depth together signal expertise to Google.",
                    },
                  ].map((step) => (
                    <li key={step.num} className="flex gap-5">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-accent">{step.num}</span>
                      </div>
                      <div className="pt-0.5">
                        <h3 className="font-semibold text-text-main mb-1">{step.title}</h3>
                        <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* ── Key Takeaway ── */}
              <section className="mb-10">
                <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20">
                  <div className="flex items-start gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <h2 className="font-display text-lg font-bold text-accent">Key Takeaway</h2>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    Google core updates reward websites that genuinely serve their users well. The
                    best long-term strategy is to focus on creating high-quality, expert-level
                    content that answers real questions — and to stay informed about algorithm
                    changes so you can adapt quickly.
                  </p>
                </div>
              </section>

              {/* Tags + CTA row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-text-muted flex-shrink-0" />
                  {tags.map((tag) => (
                    <span key={tag} className="badge-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/insights/digital-marketing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  More articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-background-secondary section-padding border-t border-white/[0.06]">
          <div className="container-max">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-text-main">
                More articles
              </h2>
              <Link
                href="/insights/digital-marketing"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors font-medium"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
