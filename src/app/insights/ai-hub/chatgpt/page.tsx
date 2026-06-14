import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "ChatGPT for Marketers | Heidigital", description: "How to use ChatGPT for content creation, ad copy, email marketing, and digital marketing workflows." };

export default function ChatGPTPage() {
  const aiArticles = articles.filter((a) => a.category.toLowerCase().includes("chatgpt") || a.tags?.includes("ChatGPT")).slice(0, 6);
  const displayArticles = aiArticles.length > 0 ? aiArticles : articles.slice(0, 3);
  return (
    <>
      <section className="pt-28 pb-16 bg-background-secondary">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6 flex-wrap">
            <Link href="/" className="hover:text-text-main">Home</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/ai-hub" className="hover:text-text-main">AI Hub</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">ChatGPT</span>
          </nav>
          <span className="badge-primary mb-4 inline-flex">AI Hub</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">ChatGPT for Marketers</h1>
          <p className="text-lg text-text-muted max-w-2xl">Practical ways to use ChatGPT in your marketing workflow — from content briefs and ad copy to email campaigns and content strategy.</p>
        </div>
      </section>
      <section className="section-padding"><div className="container-max"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{displayArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}</div><div className="mt-12 text-center"><Link href="/resources/tools/ai-tools" className="btn-primary">Explore AI Tools <ArrowRight className="w-4 h-4" /></Link></div></div></section>
    </>
  );
}
