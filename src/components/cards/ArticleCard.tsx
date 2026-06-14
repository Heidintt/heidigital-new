import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const href = `/insights/${article.categorySlug}/${article.slug}`;
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (variant === "compact") {
    return (
      <Link href={href} className="group flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0 hover:opacity-80 transition-opacity">
        {article.imageUrl && (
          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mt-1">
            <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="badge-primary text-xs mb-2 inline-flex">{article.category}</span>
          <h3 className="text-sm font-semibold text-text-main group-hover:text-accent transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-xs text-text-muted mt-1">{article.readingTime}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={href} className="group card-base block overflow-hidden bg-gradient-to-br from-primary/10 via-card to-card border-primary/20 flex flex-col md:flex-row">
        {article.imageUrl && (
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <Image src={article.imageUrl} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        )}
        <div className="p-8 md:w-3/5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-gold">Featured</span>
            <span className="badge-primary">{article.category}</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-text-main group-hover:text-accent transition-colors mb-3 leading-tight">
            {article.title}
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
              Read <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group card-base flex flex-col h-full overflow-hidden">
      {article.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image src={article.imageUrl} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge-primary">{article.category}</span>
          {article.featured && <span className="badge-gold">Featured</span>}
        </div>
        <h3 className="text-lg font-semibold font-display text-text-main group-hover:text-accent transition-colors mb-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readingTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
