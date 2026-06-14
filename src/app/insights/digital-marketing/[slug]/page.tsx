import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles, getArticleBySlug, getLatestArticles } from "@/data/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles
    .filter((a) => a.categorySlug.startsWith("digital-marketing"))
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found | Heidigital" };
  return {
    title: `${article.title} | Heidigital`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://heidigital.com/insights/${article.categorySlug}/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["Heidi"],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getLatestArticles(4).filter((a) => a.slug !== slug).slice(0, 3);
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const jsonLdArticle = articleSchema({
    title: article.title,
    description: article.excerpt,
    slug: article.slug,
    categorySlug: article.categorySlug,
    date: article.date,
    tags: article.tags,
  });

  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: "Digital Marketing", href: "/insights/digital-marketing" },
    { name: article.title, href: `/insights/${article.categorySlug}/${article.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Article Header */}
      <section className="pt-28 pb-10 bg-background-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-text-main transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/digital-marketing" className="hover:text-text-main transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main line-clamp-1">{article.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="badge-primary">{article.category}</span>
              {article.featured && <span className="badge-gold">Featured</span>}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-main mb-5 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-6">{article.excerpt}</p>
            <div className="flex items-center gap-5 text-sm text-text-muted">
              <span className="font-medium text-text-main">By Heidi</span>
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {article.content ? (
              <div className="prose-custom space-y-6">
                {article.content.split(/\n\n+/).map((block, i) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;

                  // H2 headings
                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl font-bold font-display text-text-main mt-10 mb-4">
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }

                  // Bullet list
                  if (trimmed.includes("\n-") || trimmed.startsWith("- ")) {
                    const listItems = trimmed.split("\n").filter((l) => l.startsWith("- "));
                    const before = trimmed.split("\n- ")[0];
                    return (
                      <div key={i}>
                        {before && !before.startsWith("- ") && (
                          <p className="text-text-muted leading-relaxed mb-3">{before}</p>
                        )}
                        <ul className="space-y-2.5">
                          {listItems.map((item, j) => {
                            const content = item.replace("- ", "");
                            const hasBold = content.includes("**");
                            if (hasBold) {
                              const parts = content.split(/\*\*(.*?)\*\*/);
                              return (
                                <li key={j} className="flex items-start gap-3 text-text-muted">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  <span>
                                    {parts.map((p, k) =>
                                      k % 2 === 1 ? (
                                        <strong key={k} className="text-text-main font-semibold">{p}</strong>
                                      ) : p
                                    )}
                                  </span>
                                </li>
                              );
                            }
                            return (
                              <li key={j} className="flex items-start gap-3 text-text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <span>{content}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  }

                  // Numbered list
                  if (/^\d+\./.test(trimmed)) {
                    const items = trimmed.split("\n").filter((l) => /^\d+\./.test(l));
                    return (
                      <ol key={i} className="space-y-3 list-none">
                        {items.map((item, j) => {
                          const content = item.replace(/^\d+\.\s*/, "");
                          const hasBold = content.includes("**");
                          const parts = content.split(/\*\*(.*?)\*\*/);
                          return (
                            <li key={j} className="flex items-start gap-4 text-text-muted">
                              <span className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              <span className="pt-0.5">
                                {hasBold
                                  ? parts.map((p, k) =>
                                      k % 2 === 1 ? (
                                        <strong key={k} className="text-text-main font-semibold">{p}</strong>
                                      ) : p
                                    )
                                  : content}
                              </span>
                            </li>
                          );
                        })}
                      </ol>
                    );
                  }

                  // Regular paragraph
                  return (
                    <p key={i} className="text-text-muted leading-relaxed text-base">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            ) : (
              <div className="card-base p-10 text-center">
                <p className="text-text-muted">Full article content coming soon.</p>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center gap-3 flex-wrap">
                <Tag className="w-4 h-4 text-text-muted" />
                {article.tags.map((tag) => (
                  <span key={tag} className="badge-muted">{tag}</span>
                ))}
              </div>
            )}

            {/* Back link */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <Link href="/insights/digital-marketing" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Digital Marketing
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <h2 className="text-2xl font-bold font-display text-text-main mb-8">More articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
