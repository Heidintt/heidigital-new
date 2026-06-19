/**
 * schema.ts — JSON-LD structured data helpers for Heidigital
 *
 * Usage:
 *   import { articleSchema, websiteSchema } from '@/lib/schema';
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }} />
 */

const BASE_URL = "https://heidigital.com";

export const PERSON = {
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Heidi Nguyen",
  url: `${BASE_URL}/about`,
  jobTitle: "Digital Marketing Executive & Founder of Heidigital",
  description:
    "Digital marketing professional with 7+ years of hands-on experience in SEO, SEM, paid advertising, analytics, and AI tools.",
  knowsAbout: [
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Analytics",
    "AI Marketing",
    "Content Marketing",
    "Marketing Strategy",
  ],
  email: "Heidigitalw@gmail.com",
};

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Heidigital",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  description: "Digital Marketing & AI Insights for Smarter Growth",
  founder: PERSON,
};

/** Website schema — use on every page */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Heidigital",
        description: "Digital Marketing & AI Insights for Smarter Growth",
        publisher: ORGANIZATION,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/insights?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      ORGANIZATION,
    ],
  };
}

/** Article / BlogPosting schema */
export function articleSchema({
  title,
  description,
  slug,
  categorySlug,
  date,
  tags,
}: {
  title: string;
  description: string;
  slug: string;
  categorySlug: string;
  date: string;
  tags?: string[];
}) {
  const url = `${BASE_URL}/insights/${categorySlug}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    datePublished: date,
    dateModified: date,
    author: PERSON,
    publisher: ORGANIZATION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: tags?.join(", "),
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/og-image.png`,
    },
    articleSection: categorySlug.split("/").pop(),
    inLanguage: "en-US",
  };
}

/** CollectionPage schema — use on listing/category pages */
export function collectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}${url}#collection`,
    name,
    description,
    url: `${BASE_URL}${url}`,
    publisher: ORGANIZATION,
    author: PERSON,
    inLanguage: "en-US",
  };
}

/** Person schema — use on About page */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [PERSON, ORGANIZATION],
  };
}

/** Service schema — use on Work With Me page */
export function serviceSchema(services: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/work-with-me#service`,
    name: "Digital Marketing Consulting",
    description:
      "Digital marketing and AI consulting services including SEO, Google Ads, Meta Ads, analytics, and AI workflow support.",
    provider: PERSON,
    serviceType: services,
    url: `${BASE_URL}/work-with-me`,
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/contact`,
      contactType: "customer support",
      email: "Heidigitalw@gmail.com",
    },
  };
}

/** FAQ schema helper */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** BreadcrumbList schema */
export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

/** Course schema */
export function courseSchema({
  title,
  description,
  level,
  pricing,
  provider,
}: {
  title: string;
  description: string;
  level: string;
  pricing: string;
  provider: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    educationalLevel: level,
    isAccessibleForFree: pricing === "Free",
    inLanguage: "en-US",
    author: PERSON,
  };
}
