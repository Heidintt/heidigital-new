import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  ChevronRight,
  Lock,
  Sparkles,
  BookOpen,
} from "lucide-react";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses – Digital Marketing & AI Learning | Heidigital",
  description:
    "Browse free and paid digital marketing courses covering SEO, Google Ads, Meta Ads, analytics, AI marketing, and strategy — from beginner to advanced.",
  openGraph: {
    title: "Courses – Digital Marketing & AI Learning | Heidigital",
    description:
      "Free and paid courses covering digital marketing, SEO, Google Ads, AI marketing, and analytics for all skill levels.",
    url: "https://heidigital.com/resources/courses",
  },
};

const filterTabs = [
  { label: "All", active: true },
  { label: "Digital Marketing", active: false },
  { label: "SEO", active: false },
  { label: "Google Ads", active: false },
  { label: "AI Marketing", active: false },
  { label: "Analytics", active: false },
];

export default function CoursesPage() {
  const freeCourses = courses.filter((c) => c.pricing === "Free" && !c.comingSoon);
  const paidOrComingSoon = courses.filter((c) => c.pricing === "Paid" || c.comingSoon);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-emerald-900/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none" />
        <div className="container-max relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-main transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-text-main transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Courses</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 badge-primary mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Learning
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4 leading-tight">
                Digital Marketing &amp; AI{" "}
                <span className="gradient-text">Courses</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Level up your marketing skills with free and curated courses covering SEO, paid ads, analytics, AI tools, and full digital marketing strategy.
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm text-text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {freeCourses.length} free courses available
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {paidOrComingSoon.length} premium courses coming
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link href="/resources" className="btn-ghost text-sm">
                ← Resources Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs (visual only) */}
      <section className="bg-background border-b border-white/[0.06] sticky top-0 z-10 backdrop-blur-sm">
        <div className="container-max">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  tab.active
                    ? "bg-primary text-white"
                    : "bg-white/5 text-text-muted hover:text-text-main hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-text-main">
                Free Courses
                <span className="ml-3 badge-green text-xs">{freeCourses.length} available</span>
              </h2>
              <p className="text-sm text-text-muted mt-0.5">Start learning for free — no credit card required.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="glow-line" />

      {/* Paid / Coming Soon Courses */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
              <Lock className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-text-main">
                Premium Courses
                <span className="ml-3 badge-muted text-xs">Coming Soon</span>
              </h2>
              <p className="text-sm text-text-muted mt-0.5">In-depth paid courses — launching soon. Sign up to be notified.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidOrComingSoon.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-max">
          <div className="card-base p-10 md:p-14 bg-gradient-to-br from-primary/10 via-card to-card text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Get Early Access
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4">
                Want to be notified when new courses launch?
              </h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">
                Premium courses on advanced SEO, Google Ads, and digital marketing strategy are coming soon. Get on the early access list.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-main placeholder:text-text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button type="button" className="btn-primary whitespace-nowrap">
                  Notify me <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-text-muted mt-4">
                No spam — just a heads-up when new content drops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
