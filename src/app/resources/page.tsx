import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Wrench,
  FileText,
  BookOpen,
  ChevronRight,
  Sparkles,
  Star,
} from "lucide-react";
import TemplateCard from "@/components/cards/TemplateCard";
import CourseCard from "@/components/cards/CourseCard";
import ToolCard from "@/components/cards/ToolCard";
import { getFeaturedTemplates } from "@/data/templates";
import { getFeaturedCourses } from "@/data/courses";
import { getFeaturedTools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Resources – Courses, Tools & Templates | Heidigital",
  description:
    "Explore Heidigital's resource library — free courses, curated tools, downloadable templates, and prompt packs to help you grow as a digital marketer.",
  openGraph: {
    title: "Resources – Courses, Tools & Templates | Heidigital",
    description:
      "Free courses, curated tools, downloadable templates, and AI prompt packs for digital marketers.",
    url: "https://heidigital.com/resources",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://heidigital.com/resources",
  url: "https://heidigital.com/resources",
  name: "Resources – Courses, Tools & Templates",
  description:
    "Free courses, curated tools, downloadable templates, and AI prompt packs for digital marketers.",
  publisher: {
    "@type": "Person",
    name: "Heidi",
    url: "https://heidigital.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://heidigital.com" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://heidigital.com/resources" },
    ],
  },
};

const sectionCards = [
  {
    icon: GraduationCap,
    label: "Courses",
    description:
      "Free and paid courses covering digital marketing fundamentals, SEO, Google Ads, and AI marketing — from beginner to advanced.",
    href: "/resources/courses",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    stat: "9 courses",
    statStyle: "badge-primary",
  },
  {
    icon: Wrench,
    label: "Tools",
    description:
      "Curated directory of the best digital marketing and AI tools — with honest descriptions of what each tool is actually best for.",
    href: "/resources/tools",
    gradient: "from-emerald-500/20 to-teal-500/10",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    stat: "15+ tools",
    statStyle: "badge-green",
  },
  {
    icon: FileText,
    label: "Templates",
    description:
      "Free downloadable templates, checklists, and prompt packs — SEO audits, campaign checklists, marketing plans, and more.",
    href: "/resources/templates",
    gradient: "from-gold/10 to-amber-500/5",
    iconBg: "bg-gold/10 border-gold/30",
    iconColor: "text-gold",
    stat: "Free resources",
    statStyle: "badge-gold",
  },
];

export default function ResourcesPage() {
  const featuredTemplates = getFeaturedTemplates();
  const featuredCourses = getFeaturedCourses().slice(0, 3);
  const featuredTools = getFeaturedTools().slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Resources</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 badge-gold mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              Resource Library
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-text-main mb-6 leading-tight">
              Resources <span className="gradient-text">Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
              Everything you need to level up your digital marketing skills — free courses, curated tools, downloadable templates, and AI prompt packs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section Cards */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-6">
            {sectionCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`group card-base p-8 bg-gradient-to-br ${card.gradient} flex flex-col h-full block`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${card.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <span className={card.statStyle}>{card.stat}</span>
                  </div>
                  <h2 className="text-xl font-bold font-display text-text-main mb-3 group-hover:text-accent transition-colors">
                    {card.label}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed flex-1 mb-6">{card.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Explore {card.label} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 badge-gold mb-4">
                <FileText className="w-3.5 h-3.5" />
                Free Downloads
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-2">
                Featured Templates &amp; Resources
              </h2>
              <p className="text-text-muted max-w-xl">
                Download free checklists, templates, and prompt packs to use straight away in your marketing work.
              </p>
            </div>
            <Link
              href="/resources/templates"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              All templates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link href="/resources/templates" className="btn-outline text-sm">
              View all templates
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 badge-primary mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                Learning
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-2">
                Featured Courses
              </h2>
              <p className="text-text-muted max-w-xl">
                Start learning digital marketing and AI with these top-rated free courses.
              </p>
            </div>
            <Link
              href="/resources/courses"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              All courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/resources/courses" className="btn-outline text-sm">
              View all courses
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 badge-green mb-4">
                <Wrench className="w-3.5 h-3.5" />
                Tools Directory
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-2">
                Featured Tools
              </h2>
              <p className="text-text-muted max-w-xl">
                Heidi&apos;s top picks for digital marketing and AI tools — curated and honestly reviewed.
              </p>
            </div>
            <Link
              href="/resources/tools"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              All tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/resources/tools" className="btn-outline text-sm">
              View all tools
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="card-base p-10 md:p-16 text-center bg-gradient-to-br from-primary/10 via-card to-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                <Star className="w-3.5 h-3.5" />
                Work with Heidi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main mb-4">
                Need something more tailored?
              </h2>
              <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
                Whether you need a custom strategy, hands-on training, or one-to-one consulting — Heidi is available for bespoke engagements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  <Sparkles className="w-4 h-4" />
                  Get in touch
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn about Heidi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
