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
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    slug: "google-ads-campaign-types-guide",
    title:
      "The Complete Guide to Google Ads Campaign Types and How to Use Them Effectively in 2026",
    excerpt:
      "Learn the main types of Google Ads campaigns, including Search, Performance Max, Demand Gen, Display, Shopping, Video, App, Local and Smart campaigns, and how to use each one effectively.",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    date: "2026-06-19",
    readingTime: "45 min read",
    featured: true,
    tags: [
      "Google Ads",
      "PPC",
      "SEM",
      "Performance Marketing",
      "Paid Media",
      "Digital Marketing",
    ],
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
