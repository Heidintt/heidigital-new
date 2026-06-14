export type Template = {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  type: "Checklist" | "Template" | "Guide" | "Prompt Pack" | "Worksheet";
  format: string;
  description: string;
  downloadUrl?: string;
  featured?: boolean;
};

export const templates: Template[] = [
  {
    id: "seo-audit-checklist",
    title: "SEO Audit Checklist",
    category: "SEO",
    categorySlug: "seo-audit-checklist",
    type: "Checklist",
    format: "PDF / Google Sheets",
    description:
      "A comprehensive SEO audit checklist covering technical SEO, on-page SEO, content quality, backlinks, and Core Web Vitals. Ideal for auditing any website.",
    featured: true,
  },
  {
    id: "google-ads-checklist",
    title: "Google Ads Campaign Checklist",
    category: "Google Ads",
    categorySlug: "google-ads-checklist",
    type: "Checklist",
    format: "PDF / Google Docs",
    description:
      "Step-by-step checklist for setting up, reviewing, and optimising a Google Ads campaign — from campaign structure to conversion tracking.",
    featured: true,
  },
  {
    id: "ai-prompt-pack",
    title: "AI Prompt Pack for Marketers",
    category: "AI Tools",
    categorySlug: "ai-prompt-pack",
    type: "Prompt Pack",
    format: "PDF / Notion Template",
    description:
      "50+ ready-to-use AI prompts for digital marketers — covering content creation, ad copy, email marketing, SEO, social media, and reporting.",
    featured: true,
  },
  {
    id: "marketing-report-template",
    title: "Monthly Marketing Report Template",
    category: "Analytics",
    categorySlug: "marketing-report-template",
    type: "Template",
    format: "Google Slides / PowerPoint",
    description:
      "A clean, professional monthly marketing report template that covers key metrics, channel performance, highlights, and recommendations.",
    featured: true,
  },
  {
    id: "digital-marketing-plan",
    title: "Digital Marketing Plan Template",
    category: "Strategy",
    categorySlug: "digital-marketing-plan",
    type: "Template",
    format: "Google Docs / Word",
    description:
      "A structured template to help you build a complete digital marketing plan — including goals, target audience, channels, budget, and KPIs.",
    featured: false,
  },
  {
    id: "content-calendar",
    title: "Content Calendar Template",
    category: "Content",
    categorySlug: "content-calendar",
    type: "Template",
    format: "Google Sheets / Notion",
    description:
      "A simple and flexible content calendar template for planning blog posts, social media, email campaigns, and video content.",
    featured: false,
  },
];

export function getFeaturedTemplates(): Template[] {
  return templates.filter((t) => t.featured);
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.categorySlug === slug);
}
