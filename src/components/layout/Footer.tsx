import Link from "next/link";
import { Zap, Mail, ArrowRight } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-white/[0.08] mt-auto">
      {/* Main footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow-sm">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                <span className="text-text-main">Heidi</span>
                <span className="gradient-text">gital</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              Digital Marketing & AI insights, tools, and resources for smarter growth.
            </p>
            <a
              href="mailto:Heidigitalw@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span>Heidigitalw@gmail.com</span>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-sm font-semibold text-text-main mb-4">Insights</h3>
            <ul className="space-y-2.5">
              {footerLinks.insights.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-main transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-main mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-main transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-text-main mb-4">About</h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-main transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {currentYear} Heidigital. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Digital Marketing & AI Insights for Smarter Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
