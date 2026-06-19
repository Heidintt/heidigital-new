const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = "C:\\Users\\Thu Huong\\.gemini\\antigravity\\brain\\a4f363e5-809e-42ad-b9f8-5144a378616d\\.system_generated\\logs\\transcript_full.jsonl";
const outPath = "C:\\Users\\Thu Huong\\.gemini\\antigravity\\scratch\\heidigital\\src\\app\\insights\\digital-marketing\\google-ads-campaign-types-guide\\page.tsx";

async function processLog() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let userPrompt = "";

  for await (const line of rl) {
    if (line.includes("Tôi muốn bạn xóa hết các bài viết trong phần insights đi") && line.includes("The Complete Guide to Google Ads")) {
      try {
        const entry = JSON.parse(line);
        if (entry.type === "USER_INPUT") {
          userPrompt = entry.content;
          break; // Stop at the first match to avoid picking up later huge contexts
        }
      } catch (e) {
        // ignore JSON parse errors on partial matches
      }
    }
  }

  if (!userPrompt) {
    console.error("Could not find the user prompt in the transcript.");
    return;
  }

  // Extract the article markdown
  const articleStart = userPrompt.indexOf("# The Complete Guide to Google Ads");
  if (articleStart === -1) {
    console.error("Could not find the start of the article.");
    return;
  }

  // Find the end of this specific request block, to prevent grabbing duplicate history
  let articleEnd = userPrompt.indexOf("</USER_REQUEST>", articleStart);
  if (articleEnd === -1) {
    articleEnd = userPrompt.length;
  }

  let articleMarkdown = userPrompt.substring(articleStart, articleEnd);
  
  // Remove metadata block up to '---'
  const separatorIndex = articleMarkdown.indexOf("---");
  if (separatorIndex !== -1) {
    articleMarkdown = articleMarkdown.substring(separatorIndex + 3).trim();
  }

  // Generate JSX
  let jsx = "";
  let tocLines = [];
  let currentList = null; // 'ul' or 'ol'
  
  const images = {
    "1. Search Ads": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop",
    "2. Display Ads": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "4. Shopping Ads": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    "7. Performance Max": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "8. Demand Gen": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    "How Google Ads Campaigns Can Work Together Across the Funnel": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    "An 8-Step Process for Setting Up a Google Ads Campaign": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
  };

  const lines = articleMarkdown.split('\\n');
  
  function closeList() {
    if (currentList === 'ul') jsx += "</ul>\\n";
    if (currentList === 'ol') jsx += "</ol>\\n";
    currentList = null;
  }

  function escapeJsx(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;')
      .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
      .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
      .replace(/\\[(.*?)\\]\\((.*?)\\)/g, '<a href="$2" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  }

  let olCounter = 1;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      closeList();
      const title = line.substring(3).trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      tocLines.push({ type: 'h2', title, id });
      
      // Check if we need to insert an image before this heading
      for (const [key, url] of Object.entries(images)) {
        if (title === key) {
          jsx += `<div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-8"><Image src="${url}" alt="${title}" fill className="object-cover" /><div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent"><p className="text-white text-sm">${title}</p></div></div>\\n`;
        }
      }
      
      jsx += `<h2 id="${id}" className="text-2xl md:text-3xl font-bold font-display text-text-main mt-16 mb-6 scroll-mt-24">${escapeJsx(title)}</h2>\\n`;
    } 
    else if (line.startsWith("### ")) {
      closeList();
      const title = line.substring(4).trim();
      jsx += `<h3 className="text-xl font-bold font-display text-text-main mt-10 mb-4">${escapeJsx(title)}</h3>\\n`;
    } 
    else if (line.startsWith("#### ")) {
      closeList();
      const title = line.substring(5).trim();
      jsx += `<h4 className="text-lg font-semibold text-text-main mt-8 mb-3">${escapeJsx(title)}</h4>\\n`;
    } 
    else if (line.match(/^[-*]\\s+(.*)/)) {
      if (currentList !== 'ul') {
        closeList();
        jsx += `<ul className="space-y-2 mb-6">\\n`;
        currentList = 'ul';
      }
      const text = line.match(/^[-*]\\s+(.*)/)[1];
      jsx += `<li className="flex items-start gap-3 text-text-muted"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" /><span>${escapeJsx(text)}</span></li>\\n`;
    } 
    else if (line.match(/^\\d+\\.\\s+(.*)/)) {
      if (currentList !== 'ol') {
        closeList();
        jsx += `<ol className="space-y-3 mb-6">\\n`;
        currentList = 'ol';
        olCounter = 1;
      }
      const text = line.match(/^\\d+\\.\\s+(.*)/)[1];
      jsx += `<li className="flex items-start gap-4 text-text-muted"><span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">${olCounter++}</span><span>${escapeJsx(text)}</span></li>\\n`;
    } 
    else if (line.startsWith("> ")) {
      closeList();
      const text = line.substring(2).trim();
      jsx += `<div className="card-base p-6 bg-blue-50 border-l-4 border-l-primary my-8 shadow-sm">
        <p className="text-text-muted leading-relaxed">${escapeJsx(text)}</p>
      </div>\\n`;
    }
    else {
      closeList();
      // Regular paragraph
      jsx += `<p className="text-text-muted leading-relaxed mb-4">${escapeJsx(line)}</p>\\n`;
    }
  }
  closeList();

  // Generate TOC JSX
  let tocJsx = "";
  for (const item of tocLines) {
    tocJsx += `<a href="#${item.id}" className="block text-text-muted hover:text-primary transition-colors line-clamp-1">${escapeJsx(item.title)}</a>\\n`;
  }

  // Combine everything
  const finalFileContent = `import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, BookOpen } from "lucide-react";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Google Ads Campaign Types Explained: A Practical 2026 Guide | Heidigital",
  description: "Learn the main types of Google Ads campaigns, including Search, Performance Max, Demand Gen, Display, Shopping, Video, App, Local and Smart campaigns, and how to use each one effectively.",
  openGraph: {
    title: "Google Ads Campaign Types Explained: A Practical 2026 Guide",
    description: "Learn the main types of Google Ads campaigns, including Search, Performance Max, Demand Gen, Display, Shopping, Video, App, Local and Smart campaigns, and how to use each one effectively.",
    url: "https://heidigital.com/insights/digital-marketing/google-ads-campaign-types-guide",
    type: "article",
    publishedTime: "2026-06-19",
    authors: ["Heidi Nguyen"],
    tags: ["Google Ads", "PPC", "SEM", "Performance Marketing", "Paid Media", "Digital Marketing"],
  },
};

const jsonLdArticle = articleSchema({
  title: "The Complete Guide to Google Ads Campaign Types and How to Use Them Effectively in 2026",
  description: "Learn the main types of Google Ads campaigns, including Search, Performance Max, Demand Gen, Display, Shopping, Video, App, Local and Smart campaigns, and how to use each one effectively.",
  slug: "google-ads-campaign-types-guide",
  categorySlug: "digital-marketing",
  date: "2026-06-19",
  tags: ["Google Ads", "PPC", "SEM", "Performance Marketing", "Paid Media", "Digital Marketing"],
});

const jsonLdBreadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Insights", href: "/insights" },
  { name: "Digital Marketing", href: "/insights/digital-marketing" },
  { name: "Google Ads Campaign Types Guide", href: "/insights/digital-marketing/google-ads-campaign-types-guide" },
]);

const jsonLdFaq = faqSchema([
  { question: "How many types of Google Ads campaigns are there?", answer: "There is no single fixed number that stays accurate forever. Google Ads includes core campaign types such as Search, Performance Max, Display, Demand Gen, Shopping, Video and App, as well as more specialised options such as Smart Campaigns, Local Services Ads and Hotel or travel-related campaigns." },
  { question: "Which Google Ads campaign should beginners start with?", answer: "If your product or service has clear search demand, Search Ads are often a good starting point. They give you more control over keywords, ad copy, budget and landing pages." },
  { question: "Does Performance Max replace Search Ads?", answer: "No. Performance Max is designed to complement Search, not fully replace it. Search Ads are still important when you need direct control over keywords and search intent." },
  { question: "What is the difference between Demand Gen and Display Ads?", answer: "Traditional Display Ads are often used for banner advertising, awareness and remarketing across the Google Display Network. Demand Gen is a broader visual campaign type that includes YouTube, Shorts, Discover, Gmail and Google Display Network. In 2026, Google is moving Display into Demand Gen." },
  { question: "Do Shopping Ads use keywords?", answer: "Shopping Ads do not mainly rely on keywords like Search Ads. Google uses your product feed in Merchant Center to match products with relevant user searches." },
  { question: "Should I run Google Ads if my website is not ready?", answer: "In most cases, no. If your website is slow, your landing page is unclear, your forms do not work or your tracking is incorrect, Google Ads can spend money quickly without producing useful results. Fix the website and tracking first, then increase ad spend." }
]);

export default function GoogleAdsCampaignsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Article Header */}
      <section className="pt-28 pb-10 bg-background-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
        <div className="container-max relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-text-main transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights/digital-marketing" className="hover:text-text-main transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main line-clamp-1">The Complete Guide to Google Ads Campaign Types</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="badge-primary">Digital Marketing</span>
              <span className="badge-gold">Featured</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-main mb-5 leading-tight">
              The Complete Guide to Google Ads Campaign Types and How to Use Them Effectively in 2026
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Learn the main types of Google Ads campaigns, including Search, Performance Max, Demand Gen, Display, Shopping, Video, App, Local and Smart campaigns, and how to use each one effectively.
            </p>
            <div className="flex items-center gap-5 text-sm text-text-muted flex-wrap">
              <span className="font-medium text-text-main">By Heidi Nguyen, Digital Marketing Executive & Founder of Heidigital</span>
              <span>June 19, 2026</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                45 min read
              </span>
              <span>Last updated: June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-background">
        <div className="container-max py-8">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1400&auto=format&fit=crop" 
              alt="Google Ads Dashboard Overview" 
              fill 
              className="object-cover" 
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/90 text-sm">Navigating the modern Google Ads ecosystem in 2026 requires understanding how different campaign types work together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="pb-24 bg-background">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              ${jsx}
              
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="badge-muted">Google Ads</span>
                  <span className="badge-muted">PPC</span>
                  <span className="badge-muted">SEM</span>
                  <span className="badge-muted">Performance Marketing</span>
                </div>
                
                <div className="card-base p-6 bg-background-secondary flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="/heidi_avatar.png" alt="Heidi Nguyen" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main mb-2">About the Author</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Heidi Nguyen is a Digital Marketing Executive and the founder of Heidigital. With more than 7 years of hands-on experience across SEO, SEM, paid advertising, analytics, and AI tools, she shares practical insights to help marketers and businesses grow smarter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky TOC Sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 bg-card border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-display font-bold text-text-main mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> Table of Contents
                </h3>
                <nav className="space-y-2.5 text-sm h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                  ${tocJsx}
                </nav>
              </div>
            </div>

          </div>
        </div>
      </article>

    </>
  );
}
`;

  fs.writeFileSync(outPath, finalFileContent);
  console.log("Successfully built article page at " + outPath);
}

processLog().catch(console.error);
