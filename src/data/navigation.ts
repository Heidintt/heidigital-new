export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuSection = {
  heading: string;
  description: string;
  links: NavLink[];
};

export type FeaturedCard = {
  label: string;
  title: string;
  description: string;
  href: string;
};

export type MegaMenu = {
  sections: MegaMenuSection[];
  featured?: FeaturedCard;
};

export type NavItem = {
  label: string;
  href?: string;
  megaMenu?: MegaMenu;
  dropdown?: NavLink[];
  isCTA?: boolean;
};

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Insights",
    megaMenu: {
      sections: [
        {
          heading: "Digital Marketing",
          description:
            "Practical insights about SEO, SEM, paid ads, analytics, content marketing, and digital marketing strategy.",
          links: [
            { label: "Digital Marketing Overview", href: "/insights/digital-marketing" },
            { label: "SEO", href: "/insights/digital-marketing/seo" },
            { label: "SEM & Google Ads", href: "/insights/digital-marketing/sem-google-ads" },
            { label: "Meta Ads", href: "/insights/digital-marketing/meta-ads" },
            { label: "Analytics & Reporting", href: "/insights/digital-marketing/analytics" },
            { label: "Strategy", href: "/insights/digital-marketing/strategy" },
          ],
        },
        {
          heading: "AI Hub",
          description:
            "AI tools, features, tutorials, and workflows for marketers, creators, and small businesses.",
          links: [
            { label: "AI Hub Overview", href: "/insights/ai-hub" },
            { label: "ChatGPT", href: "/insights/ai-hub/chatgpt" },
            { label: "Gemini", href: "/insights/ai-hub/gemini" },
            { label: "Canva AI", href: "/insights/ai-hub/canva-ai" },
            { label: "AI for SEO", href: "/insights/ai-hub/ai-for-seo" },
            { label: "AI for Content", href: "/insights/ai-hub/ai-for-content" },
          ],
        },
      ],
      featured: {
        label: "Featured Article",
        title: "Google Core Updates: What Marketers Should Know",
        description:
          "A practical guide to understanding how Google core updates can affect rankings, visibility, and organic traffic.",
        href: "/insights/digital-marketing/google-core-updates",
      },
    },
  },
  {
    label: "Resources",
    megaMenu: {
      sections: [
        {
          heading: "Courses",
          description: "Free and paid learning resources about digital marketing and AI.",
          links: [
            { label: "Courses Overview", href: "/resources/courses" },
            { label: "Free Courses", href: "/resources/courses/free" },
            { label: "Digital Marketing Courses", href: "/resources/courses/digital-marketing" },
            { label: "AI Marketing Courses", href: "/resources/courses/ai-marketing" },
          ],
        },
        {
          heading: "Tools",
          description: "Recommended tools for SEO, content, AI, analytics, ads, and productivity.",
          links: [
            { label: "Tools Overview", href: "/resources/tools" },
            { label: "AI Tools", href: "/resources/tools/ai-tools" },
            { label: "SEO Tools", href: "/resources/tools/seo-tools" },
            { label: "Marketing Tools", href: "/resources/tools/marketing-tools" },
            { label: "Productivity Tools", href: "/resources/tools/productivity-tools" },
          ],
        },
        {
          heading: "Templates",
          description: "Free templates, checklists, guides, and prompt packs.",
          links: [
            { label: "Templates Overview", href: "/resources/templates" },
            { label: "SEO Audit Checklist", href: "/resources/templates/seo-audit-checklist" },
            { label: "Google Ads Checklist", href: "/resources/templates/google-ads-checklist" },
            { label: "AI Prompt Pack", href: "/resources/templates/ai-prompt-pack" },
            { label: "Marketing Report Template", href: "/resources/templates/marketing-report-template" },
          ],
        },
      ],
    },
  },
  {
    label: "About",
    dropdown: [
      { label: "About Me", href: "/about" },
      { label: "Work With Me", href: "/work-with-me" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    isCTA: true,
  },
];

export const footerLinks = {
  insights: [
    { label: "Digital Marketing", href: "/insights/digital-marketing" },
    { label: "SEO", href: "/insights/digital-marketing/seo" },
    { label: "AI Hub", href: "/insights/ai-hub" },
    { label: "ChatGPT for Marketers", href: "/insights/ai-hub/chatgpt" },
  ],
  resources: [
    { label: "Courses", href: "/resources/courses" },
    { label: "Tools", href: "/resources/tools" },
    { label: "Templates", href: "/resources/templates" },
    { label: "Free Resources", href: "/resources/courses/free" },
  ],
  about: [
    { label: "About Me", href: "/about" },
    { label: "Work With Me", href: "/work-with-me" },
    { label: "Contact", href: "/contact" },
  ],
};
