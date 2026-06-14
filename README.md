# Heidigital

> Digital Marketing & AI Insights for Smarter Growth

A premium personal brand website built with **Next.js 16 + Tailwind CSS v4**, ready to deploy to Vercel.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel

### Option 1: One-click (recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **New Project** → Import your GitHub repo
4. Vercel auto-detects Next.js — just click **Deploy**
5. Your site is live!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from this folder
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

After deploying, go to your Vercel project → **Settings → Domains** → add `heidigital.com`.

---

## Project Structure

```
heidigital/
├── public/
│   ├── llms.txt              # LLM/AI assistant discoverability file
│   └── robots.txt            # (generated via robots.ts)
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, global metadata, fonts
│   │   ├── page.tsx                # Home page
│   │   ├── sitemap.ts              # Auto-generated sitemap.xml
│   │   ├── robots.ts               # Auto-generated robots.txt
│   │   ├── insights/
│   │   │   ├── page.tsx            # Insights hub
│   │   │   ├── digital-marketing/
│   │   │   │   ├── page.tsx        # DM listing
│   │   │   │   ├── [slug]/page.tsx # Article detail (dynamic)
│   │   │   │   ├── google-core-updates/page.tsx
│   │   │   │   ├── seo/page.tsx
│   │   │   │   ├── sem-google-ads/page.tsx
│   │   │   │   ├── meta-ads/page.tsx
│   │   │   │   ├── analytics/page.tsx
│   │   │   │   └── strategy/page.tsx
│   │   │   └── ai-hub/
│   │   │       ├── page.tsx        # AI Hub listing
│   │   │       ├── [slug]/page.tsx # AI article (dynamic)
│   │   │       ├── chatgpt/page.tsx
│   │   │       ├── gemini/page.tsx
│   │   │       ├── canva-ai/page.tsx
│   │   │       ├── ai-for-seo/page.tsx
│   │   │       └── ai-for-content/page.tsx
│   │   ├── resources/
│   │   │   ├── page.tsx            # Resources hub
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── free/page.tsx
│   │   │   │   ├── digital-marketing/page.tsx
│   │   │   │   └── ai-marketing/page.tsx
│   │   │   ├── tools/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── ai-tools/page.tsx
│   │   │   │   ├── seo-tools/page.tsx
│   │   │   │   ├── marketing-tools/page.tsx
│   │   │   │   └── productivity-tools/page.tsx
│   │   │   └── templates/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── work-with-me/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky header + mega menus + mobile nav
│   │   │   └── Footer.tsx
│   │   └── cards/
│   │       ├── ArticleCard.tsx     # 3 variants: default, featured, compact
│   │       ├── ToolCard.tsx
│   │       ├── CourseCard.tsx
│   │       └── TemplateCard.tsx
│   ├── data/                       # ← Edit content here
│   │   ├── articles.ts
│   │   ├── tools.ts
│   │   ├── courses.ts
│   │   ├── templates.ts
│   │   └── navigation.ts
│   └── lib/
│       ├── schema.ts               # JSON-LD structured data helpers
│       └── utils.ts
```

---

## Editing Content

All content is stored in static TypeScript data files. No CMS or database required.

### Adding a new article

Open `src/data/articles.ts` and add a new object to the `articles` array:

```typescript
{
  slug: "your-article-slug",
  title: "Your Article Title",
  excerpt: "A short description of the article (1-2 sentences).",
  category: "SEO",
  categorySlug: "digital-marketing/seo",  // determines the URL path
  date: "2025-07-01",
  readingTime: "5 min read",
  featured: false,
  tags: ["SEO", "Content"],
  content: `
Your full article content here.

## Section Heading

Paragraph content...

- Bullet point 1
- Bullet point 2

1. Numbered step
2. Another step
  `,
}
```

The `categorySlug` field controls where the article appears:
- `"digital-marketing"` → Digital Marketing listing
- `"digital-marketing/seo"` → SEO category
- `"digital-marketing/sem-google-ads"` → SEM category
- `"digital-marketing/meta-ads"` → Meta Ads category
- `"digital-marketing/analytics"` → Analytics category
- `"digital-marketing/strategy"` → Strategy category
- `"ai-hub/chatgpt"` → ChatGPT category
- `"ai-hub/gemini"` → Gemini category
- etc.

### Adding a new tool

Open `src/data/tools.ts` and add to the `tools` array.

### Adding a new course

Open `src/data/courses.ts` and add to the `courses` array.

### Adding a new template

Open `src/data/templates.ts` and add to the `templates` array.

### Updating navigation

Open `src/data/navigation.ts` to edit the mega menu structure.

---

## SEO

Each page includes:
- `<title>` and `<meta description>` via Next.js Metadata API
- Open Graph tags for social sharing
- JSON-LD structured data (Website, Person, Article, CollectionPage, Service, Breadcrumb)
- `sitemap.xml` auto-generated at `/sitemap.xml`
- `robots.txt` auto-generated at `/robots.txt`
- `llms.txt` at `/llms.txt` for AI assistant discoverability

Update the base URL in:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/lib/schema.ts` (the `BASE_URL` constant)
- `src/app/layout.tsx` (the `metadataBase`)

---

## Schema / Structured Data

JSON-LD schema helpers are in `src/lib/schema.ts`:

```typescript
import { articleSchema, websiteSchema, personSchema } from '@/lib/schema';

// In a page component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ ... })) }}
/>
```

Available helpers:
- `websiteSchema()` — WebSite + Organization schema
- `articleSchema({ title, description, slug, categorySlug, date, tags })` — BlogPosting schema
- `collectionPageSchema({ name, description, url })` — CollectionPage schema
- `personSchema()` — Person schema (for About page)
- `serviceSchema(services[])` — Service schema (for Work With Me)
- `breadcrumbSchema(items[])` — BreadcrumbList schema
- `courseSchema({ title, description, level, pricing, provider })` — Course schema
- `faqSchema(faqs[])` — FAQPage schema

---

## llms.txt

The `/public/llms.txt` file follows the [llms.txt convention](https://llmstxt.org/) — it helps AI assistants and LLMs understand your site's structure, topics, and purpose.

It is accessible at `https://heidigital.com/llms.txt`.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Fonts | Google Fonts (Inter + DM Sans) |
| Icons | Lucide React |
| Deployment | Vercel (zero-config) |
| Data | Static TypeScript files |

---

## Environment Variables

No environment variables required. The site is fully static and uses no paid APIs.

If you add email functionality to the contact form later, you can add:
```
RESEND_API_KEY=your_key_here
```

---

## Performance

- All pages are statically generated (SSG) at build time
- Zero JavaScript required for most pages (server components)
- Optimised Google Fonts loading
- Security headers configured in `next.config.ts`

---

## Contact

Email: [Heidigitalw@gmail.com](mailto:Heidigitalw@gmail.com)
