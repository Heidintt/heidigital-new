export type Tool = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  bestFor: string;
  pricing: "Free" | "Paid" | "Freemium";
  description: string;
  url: string;
  featured?: boolean;
};

export const tools: Tool[] = [
  // AI Tools
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI Tools",
    categorySlug: "ai-tools",
    bestFor: "Content writing, brainstorming, copywriting",
    pricing: "Freemium",
    description:
      "The most widely used AI assistant for marketers. Use it for ad copy, email drafts, content briefs, social captions, and more.",
    url: "https://chat.openai.com",
    featured: true,
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "AI Tools",
    categorySlug: "ai-tools",
    bestFor: "Research, content planning, data analysis",
    pricing: "Freemium",
    description:
      "Google's AI assistant with deep integration into Google Workspace. Excellent for research, summarising documents, and content planning.",
    url: "https://gemini.google.com",
    featured: true,
  },
  {
    id: "claude",
    name: "Claude (Anthropic)",
    category: "AI Tools",
    categorySlug: "ai-tools",
    bestFor: "Long-form content, analysis, complex writing",
    pricing: "Freemium",
    description:
      "Claude excels at long-form writing, nuanced analysis, and maintaining consistent tone. Great for blog posts and strategy documents.",
    url: "https://claude.ai",
    featured: false,
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    category: "AI Tools",
    categorySlug: "ai-tools",
    bestFor: "Social graphics, presentations, design",
    pricing: "Freemium",
    description:
      "Canva's suite of AI tools — Magic Write, AI image generation, and Magic Design — makes professional design accessible to non-designers.",
    url: "https://canva.com",
    featured: false,
  },
  // SEO Tools
  {
    id: "google-search-console",
    name: "Google Search Console",
    category: "SEO Tools",
    categorySlug: "seo-tools",
    bestFor: "Search performance, indexing, technical SEO",
    pricing: "Free",
    description:
      "The essential free tool from Google for monitoring your site's search performance, fixing indexing issues, and understanding how Google sees your pages.",
    url: "https://search.google.com/search-console",
    featured: true,
  },
  {
    id: "semrush",
    name: "Semrush",
    category: "SEO Tools",
    categorySlug: "seo-tools",
    bestFor: "Keyword research, competitor analysis, site audit",
    pricing: "Paid",
    description:
      "An all-in-one SEO and digital marketing platform. Ideal for keyword research, backlink analysis, competitor tracking, and content strategy.",
    url: "https://semrush.com",
    featured: true,
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    category: "SEO Tools",
    categorySlug: "seo-tools",
    bestFor: "Backlink analysis, keyword research, content research",
    pricing: "Paid",
    description:
      "One of the most comprehensive SEO toolsets available. Especially strong for backlink analysis and competitor content research.",
    url: "https://ahrefs.com",
    featured: false,
  },
  {
    id: "screaming-frog",
    name: "Screaming Frog SEO Spider",
    category: "SEO Tools",
    categorySlug: "seo-tools",
    bestFor: "Technical SEO, site crawling, audits",
    pricing: "Freemium",
    description:
      "A desktop crawler that helps you find technical SEO issues like broken links, duplicate content, missing meta tags, and redirect chains.",
    url: "https://www.screamingfrog.co.uk/seo-spider/",
    featured: false,
  },
  // Marketing Tools
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Marketing Tools",
    categorySlug: "marketing-tools",
    bestFor: "Search ads, display ads, shopping campaigns",
    pricing: "Paid",
    description:
      "Google's advertising platform for running search, display, YouTube, and shopping campaigns. Essential for any business with a paid search strategy.",
    url: "https://ads.google.com",
    featured: true,
  },
  {
    id: "meta-ads-manager",
    name: "Meta Ads Manager",
    category: "Marketing Tools",
    categorySlug: "marketing-tools",
    bestFor: "Facebook and Instagram advertising",
    pricing: "Paid",
    description:
      "The central platform for managing Facebook and Instagram ad campaigns — from audience targeting to creative testing and performance reporting.",
    url: "https://business.facebook.com",
    featured: false,
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Marketing Tools",
    categorySlug: "marketing-tools",
    bestFor: "Email marketing, automation, newsletters",
    pricing: "Freemium",
    description:
      "A popular email marketing platform with a generous free tier. Great for newsletters, automated email sequences, and audience segmentation.",
    url: "https://mailchimp.com",
    featured: false,
  },
  // Analytics Tools
  {
    id: "ga4",
    name: "Google Analytics 4",
    category: "Analytics Tools",
    categorySlug: "marketing-tools",
    bestFor: "Website analytics, conversion tracking, audience insights",
    pricing: "Free",
    description:
      "The latest version of Google's analytics platform. GA4 uses an event-based model and offers powerful insights into user behaviour and conversions.",
    url: "https://analytics.google.com",
    featured: true,
  },
  {
    id: "looker-studio",
    name: "Looker Studio",
    category: "Analytics Tools",
    categorySlug: "marketing-tools",
    bestFor: "Custom dashboards, marketing reports, data visualisation",
    pricing: "Free",
    description:
      "Google's free data visualisation and reporting tool. Connect GA4, Google Ads, Search Console, and other sources into one clean dashboard.",
    url: "https://lookerstudio.google.com",
    featured: false,
  },
  // Productivity Tools
  {
    id: "notion",
    name: "Notion",
    category: "Productivity Tools",
    categorySlug: "productivity-tools",
    bestFor: "Content planning, project management, knowledge base",
    pricing: "Freemium",
    description:
      "A flexible all-in-one workspace for managing content calendars, campaign briefs, client notes, and team documentation.",
    url: "https://notion.so",
    featured: false,
  },
  {
    id: "trello",
    name: "Trello",
    category: "Productivity Tools",
    categorySlug: "productivity-tools",
    bestFor: "Campaign management, task tracking, team collaboration",
    pricing: "Freemium",
    description:
      "A visual project management tool using boards and cards. Great for managing marketing campaigns, editorial calendars, and team workflows.",
    url: "https://trello.com",
    featured: false,
  },
];

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categorySlug === categorySlug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export const toolCategories = [
  { name: "AI Tools", slug: "ai-tools", count: tools.filter((t) => t.categorySlug === "ai-tools").length },
  { name: "SEO Tools", slug: "seo-tools", count: tools.filter((t) => t.categorySlug === "seo-tools").length },
  { name: "Marketing Tools", slug: "marketing-tools", count: tools.filter((t) => t.categorySlug === "marketing-tools").length },
  { name: "Productivity Tools", slug: "productivity-tools", count: tools.filter((t) => t.categorySlug === "productivity-tools").length },
];
