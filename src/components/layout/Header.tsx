"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, Zap } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnterItem = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(label);
    setActiveDropdown(label);
  };

  const handleMouseLeaveItem = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMega(null);
      setActiveDropdown(null);
    }, 150);
  };

  const handleMouseEnterMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMega(null);
      setActiveDropdown(null);
    }, 150);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={closeMobile}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight">
              <span className="text-text-main">Heidi</span>
              <span className="gradient-text">gital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => {
              if (item.isCTA) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="ml-2 btn-primary text-sm py-2.5 px-5"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.megaMenu) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnterItem(item.label)}
                    onMouseLeave={handleMouseLeaveItem}
                  >
                    <button
                      className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 ${
                        activeMega === item.label ? "text-text-main bg-slate-100" : ""
                      }`}
                      aria-expanded={activeMega === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMega === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeMega === item.label && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 animate-slide-down"
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                      >
                        <MegaMenuPanel menu={item.megaMenu} onClose={() => setActiveMega(null)} />
                      </div>
                    )}
                  </div>
                );
              }

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnterItem(item.label)}
                    onMouseLeave={handleMouseLeaveItem}
                  >
                    <button
                      className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 ${
                        activeDropdown === item.label ? "text-text-main bg-slate-100" : ""
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-card border border-slate-200 rounded-xl shadow-card overflow-hidden animate-slide-down"
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                      >
                        {item.dropdown.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-3 text-sm text-text-muted hover:text-text-main hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="nav-link px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-text-main transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container-max py-4 space-y-1" aria-label="Mobile navigation">
            {navigation.map((item) => {
              if (item.isCTA) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="btn-primary w-full justify-center mt-4 text-sm"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.megaMenu || item.dropdown) {
                const links = item.megaMenu
                  ? item.megaMenu.sections.flatMap((s) => [
                      { label: s.heading, href: "#", isHeading: true },
                      ...s.links.map((l) => ({ ...l, isHeading: false })),
                    ])
                  : (item.dropdown || []).map((l) => ({ ...l, isHeading: false }));

                const isExpanded = mobileExpanded === item.label;

                return (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-text-muted hover:text-text-main rounded-lg hover:bg-slate-100 transition-colors"
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                      aria-expanded={isExpanded}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="ml-3 mt-1 space-y-0.5 border-l border-slate-200 pl-4">
                        {item.megaMenu ? (
                          item.megaMenu.sections.map((section) => (
                            <div key={section.heading} className="mb-3">
                              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5 py-1">
                                {section.heading}
                              </p>
                              {section.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="flex items-center gap-2 py-2 text-sm text-text-muted hover:text-text-main transition-colors"
                                  onClick={closeMobile}
                                >
                                  <ChevronRight className="w-3 h-3 text-primary" />
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-2 py-2 text-sm text-text-muted hover:text-text-main transition-colors"
                              onClick={closeMobile}
                            >
                              <ChevronRight className="w-3 h-3 text-primary" />
                              {link.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block px-3 py-3 text-text-muted hover:text-text-main font-medium rounded-lg hover:bg-slate-100 transition-colors"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

function MegaMenuPanel({
  menu,
  onClose,
}: {
  menu: NonNullable<(typeof navigation)[0]["megaMenu"]>;
  onClose: () => void;
}) {
  const colCount = menu.sections.length + (menu.featured ? 1 : 0);
  return (
    <div
      className={`bg-card/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-xl overflow-hidden`}
      style={{ width: colCount === 3 ? "780px" : "580px" }}
    >
      <div className={`grid divide-x divide-slate-200`} style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
        {menu.sections.map((section) => (
          <div key={section.heading} className="p-6">
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
              {section.heading}
            </h3>
            <p className="text-xs text-text-muted/70 mb-4 leading-relaxed">
              {section.description}
            </p>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-text-muted hover:text-text-main hover:bg-slate-100 transition-all group"
                    onClick={onClose}
                  >
                    <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {menu.featured && (
          <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/5">
            <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">
              {menu.featured.label}
            </p>
            <Link
              href={menu.featured.href}
              className="group block"
              onClick={onClose}
            >
              <h4 className="text-sm font-semibold text-text-main mb-2 group-hover:text-accent transition-colors leading-snug">
                {menu.featured.title}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed mb-3">
                {menu.featured.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                Read article <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
