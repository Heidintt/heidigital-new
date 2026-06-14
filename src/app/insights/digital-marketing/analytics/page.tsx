import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Analytics & Reporting Insights | Heidigital",
  description: "GA4, Looker Studio, marketing reporting, and data-driven decision making for digital marketers.",
};

export default function AnalyticsPage() {
  const analyticsArticles = articles.filter((a) => a.category.toLowerCase().includes("analytics")).slice(0, 6);
  const displayArticles = analyticsArticles.length > 0 ? analyticsArticles : articles.slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-16 bg-background-secondary">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6 flex-wrap">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/digital-marketing" className="hover:text-text-main transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Analytics & Reporting</span>
          </nav>
          <span className="badge-primary mb-4 inline-flex">Digital Marketing</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">Analytics & Reporting</h1>
          <p className="text-lg text-text-muted max-w-2xl">GA4, Looker Studio, marketing dashboards, and how to turn data into actionable decisions for your marketing campaigns.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Need analytics help? <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
