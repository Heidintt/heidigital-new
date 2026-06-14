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
    .filter((a) => a.categorySlug.startsWith("ai-hub"))
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
    },
  };
}

export default async function AIArticlePage({ params }: Props) {
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
    { name: "AI Hub", href: "/insights/ai-hub" },
    { name: article.title, href: `/insights/${article.categorySlug}/${article.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <section className="pt-28 pb-10 bg-background-secondary relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="container-max relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-text-main transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/ai-hub" className="hover:text-text-main transition-colors">AI Hub</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main line-clamp-1">{article.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
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

      <article className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {article.content ? (
              <div className="space-y-6">
                {article.content.split(/\n\n+/).map((block, i) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl font-bold font-display text-text-main mt-10 mb-4">
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("- ") || trimmed.includes("\n- ")) {
                    const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
                    return (
                      <ul key={i} className="space-y-2.5">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{item.replace("- ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-text-muted leading-relaxed">{trimmed}</p>
                  );
                })}
              </div>
            ) : (
              <div className="card-base p-10 text-center">
                <p className="text-text-muted">Full article content coming soon.</p>
              </div>
            )}

            {article.tags && (
              <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center gap-3 flex-wrap">
                <Tag className="w-4 h-4 text-text-muted" />
                {article.tags.map((tag) => (
                  <span key={tag} className="badge-muted">{tag}</span>
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <Link href="/insights/ai-hub" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to AI Hub
              </Link>
            </div>
          </div>
        </div>
      </article>

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
