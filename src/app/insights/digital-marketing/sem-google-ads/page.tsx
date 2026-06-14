import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "SEM & Google Ads Insights | Heidigital",
  description: "Practical Google Ads and SEM tips — campaign structure, bidding, Quality Score, and paid search strategy.",
};

export default function SEMPage() {
  const semArticles = articles.filter((a) => a.categorySlug.includes("sem") || a.category.toLowerCase().includes("sem") || a.category.toLowerCase().includes("google ads")).slice(0, 6);
  const displayArticles = semArticles.length > 0 ? semArticles : articles.slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-16 bg-background-secondary relative">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6 flex-wrap">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/digital-marketing" className="hover:text-text-main transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">SEM & Google Ads</span>
          </nav>
          <span className="badge-primary mb-4 inline-flex">Digital Marketing</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">SEM & Google Ads</h1>
          <p className="text-lg text-text-muted max-w-2xl">Campaign structure, bidding strategies, Quality Score, Performance Max, and everything you need to run effective paid search campaigns.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Need Google Ads help? <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
