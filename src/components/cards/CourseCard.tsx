import Link from "next/link";
import Image from "next/image";
import { Clock, BarChart2, ArrowRight } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const levelStyle = {
  Beginner: "badge-green",
  Intermediate: "badge-primary",
  Advanced: "badge-gold",
};

const pricingStyle = {
  Free: "badge-green",
  Paid: "badge-red",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group card-base flex flex-col h-full relative overflow-hidden">
      {course.comingSoon && (
        <div className="absolute top-3 right-3 z-10">
          <span className="badge-muted text-xs bg-black/50 backdrop-blur-sm">Coming Soon</span>
        </div>
      )}

      {course.imageUrl && (
        <div className="relative w-full h-40 overflow-hidden">
          <Image src={course.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className={pricingStyle[course.pricing]}>{course.pricing}</span>
          <span className={levelStyle[course.level]}>{course.level}</span>
        </div>

        <h3 className="text-lg font-semibold font-display text-text-main group-hover:text-accent transition-colors mb-2 leading-snug">
          {course.title}
        </h3>

        <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
          {course.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
            {course.provider && (
              <span className="flex items-center gap-1">
                <BarChart2 className="w-3 h-3" />
                {course.provider}
              </span>
            )}
          </div>

          {course.comingSoon ? (
            <span className="text-sm text-text-muted">Notify me</span>
          ) : course.url ? (
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
            >
              Start <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Explore <ArrowRight className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
