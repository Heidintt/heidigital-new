import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Meta Ads Insights | Heidigital",
  description: "Meta Ads (Facebook & Instagram) strategy, audience targeting, creative testing, and campaign optimisation.",
};

export default function MetaAdsPage() {
  const metaArticles = articles.filter((a) => a.category.toLowerCase().includes("meta")).slice(0, 6);
  const displayArticles = metaArticles.length > 0 ? metaArticles : articles.slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-16 bg-background-secondary">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6 flex-wrap">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/digital-marketing" className="hover:text-text-main transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Meta Ads</span>
          </nav>
          <span className="badge-primary mb-4 inline-flex">Digital Marketing</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">Meta Ads</h1>
          <p className="text-lg text-text-muted max-w-2xl">Facebook and Instagram advertising — audience targeting, creative strategy, campaign structure, and optimisation for better ROAS.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Need Meta Ads help? <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
