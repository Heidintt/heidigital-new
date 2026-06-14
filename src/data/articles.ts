export type Article = {
  imageUrl?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  tags?: string[];
  content?: string;
};

export const articles: Article[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "google-core-updates",
    title: "Google Core Updates: What Marketers Should Know",
    excerpt:
      "A practical guide to understanding how Google core updates can affect rankings, visibility, and organic traffic — and what you can do to adapt.",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    date: "2025-06-01",
    readingTime: "8 min read",
    featured: true,
    tags: ["SEO", "Google", "Algorithm"],
    content: `
Google regularly releases broad core algorithm updates that can significantly impact how websites rank in search results. Unlike smaller, targeted updates, core updates are wide-ranging changes designed to improve the overall quality and relevance of search results.

## What Are Google Core Updates?

Google core updates are major changes to the search algorithm that affect how Google evaluates and ranks content across the web. They are not penalties — they are improvements to how Google assesses content quality, relevance, and authority.

Google typically releases several core updates per year, and each one can shift rankings across virtually every industry and niche.

## How Core Updates Affect Your Website

When a core update rolls out, you may notice:

- **Ranking drops or gains** for key pages
- **Changes in organic traffic** — sometimes sudden and significant
- **Shifts in visibility** for specific content types or categories
- **Changes in click-through rates** as different pages appear in results

It's important to understand that a ranking drop after a core update does not always mean your content has done something wrong. It may simply mean that other content has been assessed as more relevant or authoritative.

## What Google Looks for After Core Updates

Google's core updates increasingly focus on **E-E-A-T**: Experience, Expertise, Authoritativeness, and Trustworthiness. Content that demonstrates genuine expertise and provides real value to users tends to perform better over time.

Key signals include:
- **Content depth and accuracy** — is your content genuinely helpful and well-researched?
- **Author credibility** — does the content come from someone with real experience?
- **Page experience** — is the page fast, mobile-friendly, and easy to use?
- **Backlink profile** — are reputable sites linking to your content?

## How to Respond to a Core Update

1. **Audit your affected pages** — identify which pages dropped and analyse what they have in common.
2. **Improve content quality** — focus on depth, accuracy, and genuine helpfulness.
3. **Demonstrate expertise** — add author bios, cite sources, and show real experience.
4. **Improve page experience** — check Core Web Vitals, mobile usability, and page speed.
5. **Build topical authority** — create clusters of content around your core topics.

## Key Takeaway

Google core updates reward websites that genuinely serve their users well. The best long-term strategy is to focus on creating high-quality, expert-level content that answers real questions — and to stay informed about algorithm changes so you can adapt quickly.
    `,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    slug: "seo-fundamentals-2025",
    title: "SEO Fundamentals Every Marketer Needs in 2025",
    excerpt:
      "From technical foundations to content strategy, here are the SEO essentials that still matter — and what's changed in 2025.",
    category: "SEO",
    categorySlug: "digital-marketing/seo",
    date: "2025-05-20",
    readingTime: "7 min read",
    featured: false,
    tags: ["SEO", "Search", "Content"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "google-ads-campaign-structure",
    title: "How to Structure Google Ads Campaigns for Better Performance",
    excerpt:
      "A practical guide to organising your Google Ads campaigns, ad groups, and keywords to improve Quality Score and reduce wasted spend.",
    category: "SEM & Google Ads",
    categorySlug: "digital-marketing/sem-google-ads",
    date: "2025-05-10",
    readingTime: "6 min read",
    featured: false,
    tags: ["Google Ads", "SEM", "PPC"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "meta-ads-audience-targeting",
    title: "Meta Ads Audience Targeting: A Practical Guide",
    excerpt:
      "Understand custom audiences, lookalike audiences, and interest targeting in Meta Ads — and how to use them to reach the right people.",
    category: "Meta Ads",
    categorySlug: "digital-marketing/meta-ads",
    date: "2025-04-28",
    readingTime: "5 min read",
    featured: false,
    tags: ["Meta Ads", "Facebook", "Audience"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "ga4-reporting-essentials",
    title: "GA4 Reporting Essentials for Digital Marketers",
    excerpt:
      "A beginner-friendly guide to Google Analytics 4 — covering key reports, events, conversions, and how to get actionable insights from your data.",
    category: "Analytics & Reporting",
    categorySlug: "digital-marketing/analytics",
    date: "2025-04-15",
    readingTime: "9 min read",
    featured: false,
    tags: ["GA4", "Analytics", "Data"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "digital-marketing-strategy-framework",
    title: "Building a Digital Marketing Strategy That Actually Works",
    excerpt:
      "A step-by-step framework for creating a digital marketing strategy — from defining your goals and audience to selecting channels and measuring results.",
    category: "Strategy",
    categorySlug: "digital-marketing/strategy",
    date: "2025-04-02",
    readingTime: "10 min read",
    featured: true,
    tags: ["Strategy", "Planning", "Marketing"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "chatgpt-for-marketers",
    title: "How Marketers Are Using ChatGPT in Their Daily Workflow",
    excerpt:
      "Practical ways to use ChatGPT for content briefs, campaign ideation, ad copy, email drafts, and more — without losing your brand voice.",
    category: "ChatGPT",
    categorySlug: "ai-hub/chatgpt",
    date: "2025-05-25",
    readingTime: "7 min read",
    featured: true,
    tags: ["ChatGPT", "AI", "Content"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "gemini-for-research",
    title: "Using Gemini for Market Research and Content Planning",
    excerpt:
      "Google's Gemini is a powerful research companion. Here's how to use it for competitor analysis, content planning, and keyword research.",
    category: "Gemini",
    categorySlug: "ai-hub/gemini",
    date: "2025-05-15",
    readingTime: "6 min read",
    featured: false,
    tags: ["Gemini", "AI", "Research"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "canva-ai-for-marketing",
    title: "Canva AI Features Every Marketer Should Be Using",
    excerpt:
      "From Magic Write to AI image generation, Canva's AI tools can save you hours of design time. Here's a practical overview for marketers.",
    category: "Canva AI",
    categorySlug: "ai-hub/canva-ai",
    date: "2025-05-05",
    readingTime: "5 min read",
    featured: false,
    tags: ["Canva", "AI", "Design"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    slug: "ai-for-seo",
    title: "How to Use AI Tools to Improve Your SEO Strategy",
    excerpt:
      "AI tools are changing how marketers approach keyword research, content optimisation, and technical SEO. Here's what's working right now.",
    category: "AI for SEO",
    categorySlug: "ai-hub/ai-for-seo",
    date: "2025-04-20",
    readingTime: "8 min read",
    featured: false,
    tags: ["AI", "SEO", "Tools"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "ai-content-creation",
    title: "AI for Content Creation: Best Practices for Marketers",
    excerpt:
      "Using AI to create content doesn't mean losing quality or authenticity. Here's how to use AI tools effectively while keeping your content valuable.",
    category: "AI for Content",
    categorySlug: "ai-hub/ai-for-content",
    date: "2025-04-10",
    readingTime: "7 min read",
    featured: false,
    tags: ["AI", "Content", "Writing"],
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
