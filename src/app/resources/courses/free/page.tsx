import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import CourseCard from "@/components/cards/CourseCard";
import { getFreeCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Free Courses – Digital Marketing & AI | Heidigital",
  description: "Free digital marketing and AI courses — learn SEO, Google Ads, Meta Ads, GA4, and AI marketing tools at your own pace.",
};

export default function FreeCoursesPage() {
  const freeCourses = getFreeCourses();

  return (
    <>
      <section className="pt-28 pb-16 bg-background-secondary">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6 flex-wrap">
            <Link href="/" className="hover:text-text-main">Home</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources" className="hover:text-text-main">Resources</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href="/resources/courses" className="hover:text-text-main">Courses</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-main">Free</span>
          </nav>
          <span className="badge-green mb-4 inline-flex">Free</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-4">Free Courses</h1>
          <p className="text-lg text-text-muted max-w-2xl">Start learning digital marketing and AI with these free courses. No payment required — just pick a course and start learning.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
          <div className="mt-12 text-center">
            <Link href="/resources/courses" className="btn-outline">View all courses <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
