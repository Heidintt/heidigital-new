export type Course = {
  imageUrl?: string;
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  pricing: "Free" | "Paid";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  url?: string;
  comingSoon?: boolean;
  featured?: boolean;
  provider?: string;
};

export const courses: Course[] = [
  // Digital Marketing Fundamentals
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "dm-fundamentals",
    title: "Digital Marketing Fundamentals",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    pricing: "Free",
    level: "Beginner",
    duration: "4 hours",
    description:
      "A solid introduction to digital marketing — covering the core channels, strategies, and metrics every marketer needs to understand.",
    url: "https://skillshop.withgoogle.com/",
    featured: true,
    provider: "Google Skillshop",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "google-ads-fundamentals",
    title: "Google Ads Fundamentals",
    category: "Google Ads",
    categorySlug: "google-ads",
    pricing: "Free",
    level: "Beginner",
    duration: "3 hours",
    description:
      "Learn the fundamentals of Google Ads — campaign types, bidding strategies, Quality Score, and how to set up your first campaign.",
    url: "https://skillshop.withgoogle.com/",
    featured: true,
    provider: "Google Skillshop",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "ga4-for-beginners",
    title: "Google Analytics 4 for Beginners",
    category: "Analytics",
    categorySlug: "analytics",
    pricing: "Free",
    level: "Beginner",
    duration: "2.5 hours",
    description:
      "Get started with GA4 — learn how to navigate reports, set up events and conversions, and extract meaningful insights from your data.",
    url: "https://skillshop.withgoogle.com/",
    featured: false,
    provider: "Google Skillshop",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "seo-beginner-guide",
    title: "SEO for Beginners",
    category: "SEO",
    categorySlug: "seo",
    pricing: "Free",
    level: "Beginner",
    duration: "3 hours",
    description:
      "A beginner's guide to SEO — covering keyword research, on-page optimisation, technical SEO basics, and link building fundamentals.",
    comingSoon: false,
    featured: false,
    provider: "Heidigital",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "meta-ads-beginner",
    title: "Meta Ads: Getting Started",
    category: "Meta Ads",
    categorySlug: "meta-ads",
    pricing: "Free",
    level: "Beginner",
    duration: "2 hours",
    description:
      "Learn how to set up and run your first Meta Ads campaign — covering objectives, audiences, creative formats, and basic optimisation.",
    comingSoon: false,
    featured: false,
    provider: "Heidigital",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "ai-for-marketing",
    title: "AI for Digital Marketing",
    category: "AI Marketing",
    categorySlug: "ai-marketing",
    pricing: "Free",
    level: "Beginner",
    duration: "3 hours",
    description:
      "Discover how AI tools like ChatGPT, Gemini, and Canva AI can streamline your marketing workflows, from content creation to reporting.",
    comingSoon: false,
    featured: true,
    provider: "Heidigital",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "advanced-seo",
    title: "Advanced SEO Strategy",
    category: "SEO",
    categorySlug: "seo",
    pricing: "Paid",
    level: "Advanced",
    duration: "8 hours",
    description:
      "A deep-dive into advanced SEO — technical SEO, content strategy, E-E-A-T, Core Web Vitals, link building, and measuring ROI.",
    comingSoon: true,
    featured: false,
    provider: "Heidigital",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "google-ads-advanced",
    title: "Google Ads: Advanced Campaigns",
    category: "Google Ads",
    categorySlug: "google-ads",
    pricing: "Paid",
    level: "Advanced",
    duration: "6 hours",
    description:
      "Take your Google Ads skills to the next level — advanced bidding strategies, Performance Max campaigns, audience layering, and conversion optimisation.",
    comingSoon: true,
    featured: false,
    provider: "Heidigital",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    id: "marketing-strategy",
    title: "Digital Marketing Strategy",
    category: "Strategy",
    categorySlug: "strategy",
    pricing: "Paid",
    level: "Intermediate",
    duration: "5 hours",
    description:
      "Build a complete digital marketing strategy — from audience research and channel selection to campaign planning, execution, and reporting.",
    comingSoon: true,
    featured: false,
    provider: "Heidigital",
  },
];

export function getCoursesByCategory(categorySlug: string): Course[] {
  return courses.filter((c) => c.categorySlug === categorySlug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}

export function getFreeCourses(): Course[] {
  return courses.filter((c) => c.pricing === "Free");
}
