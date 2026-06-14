import { MetadataRoute } from "next";

const BASE_URL = "https://heidigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // Core pages
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/work-with-me`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Insights – Digital Marketing
    { url: `${BASE_URL}/insights/digital-marketing`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/insights/digital-marketing/seo`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/digital-marketing/sem-google-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/digital-marketing/meta-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/digital-marketing/analytics`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/digital-marketing/strategy`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/digital-marketing/google-core-updates`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Insights – AI Hub
    { url: `${BASE_URL}/insights/ai-hub`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/insights/ai-hub/chatgpt`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/ai-hub/gemini`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/ai-hub/canva-ai`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/ai-hub/ai-for-seo`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/insights/ai-hub/ai-for-content`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },

    // Resources – Courses
    { url: `${BASE_URL}/resources/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/resources/courses/free`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/resources/courses/digital-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/courses/ai-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Resources – Tools
    { url: `${BASE_URL}/resources/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/resources/tools/ai-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/tools/seo-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/tools/marketing-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/tools/productivity-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },

    // Resources – Templates
    { url: `${BASE_URL}/resources/templates`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources/templates/seo-audit-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/templates/google-ads-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/templates/ai-prompt-pack`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/templates/marketing-report-template`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
