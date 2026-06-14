"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Clock,
  Search,
  Target,
  Users,
  BarChart3,
  TrendingUp,
  Brain,
  MessageSquare,
  Send,
  HandshakeIcon,
} from "lucide-react";

const services = [
  "SEO Audit",
  "Digital Marketing Strategy",
  "Google Ads",
  "Meta Ads",
  "Analytics",
  "AI Marketing Workflow",
];

const serviceOptions = [
  "General Enquiry",
  "SEO Audit",
  "Google Ads",
  "Meta Ads",
  "Strategy",
  "Analytics",
  "AI Marketing",
  "Other",
];

const inputClass =
  "bg-card border border-white/10 text-text-main placeholder-text-muted/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-primary/50 transition-colors";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="relative container-max section-padding text-center">
          <div className="inline-flex items-center gap-2 badge-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Let&apos;s talk
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-main mb-5 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Whether you&apos;re looking for digital marketing support, have a collaboration idea,
            or just want to say hello — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main: Form + Info */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* LEFT: Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-base p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-text-main">
                    Send a message
                  </h2>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5">
                      <Send className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-text-main mb-3">
                      Message received!
                    </h3>
                    <p className="text-text-muted mb-6">
                      Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">
                          Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">
                          Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">
                        Subject <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">
                        Service interested in
                      </label>
                      <select name="service" className={inputClass + " cursor-pointer"}>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt.toLowerCase().replace(/ /g, "-")}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project, goals, or question..."
                        required
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <p className="text-xs text-text-muted">
                      Fields marked <span className="text-rose-400">*</span> are required.
                    </p>

                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email */}
              <div className="card-base p-6">
                <h3 className="font-display text-base font-semibold text-text-main mb-4">
                  Contact details
                </h3>
                <a
                  href="mailto:Heidigitalw@gmail.com"
                  className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Email</p>
                    <p className="text-sm font-medium text-accent group-hover:underline">
                      Heidigitalw@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 mt-5 pt-5 border-t border-white/[0.06]">
                  <div className="p-2.5 rounded-lg bg-gold/10 flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Response time</p>
                    <p className="text-sm text-text-main font-medium">
                      Within 1–2 business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="card-base p-6">
                <h3 className="font-display text-base font-semibold text-text-main mb-4">
                  Services offered
                </h3>
                <div className="space-y-2.5">
                  {services.map((service, i) => {
                    const icons = [Search, TrendingUp, Target, Users, BarChart3, Brain];
                    const Icon = icons[i];
                    return (
                      <div key={service} className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-text-muted">{service}</span>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors mt-5 font-medium"
                >
                  View all services →
                </Link>
              </div>

              {/* Collaboration note */}
              <div className="card-base p-6 bg-gradient-to-br from-gold/5 via-card to-card border-gold/15">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-gold/10 flex-shrink-0">
                    <HandshakeIcon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-gold mb-2">
                      Open to collaboration
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      I&apos;m open to collaboration, guest posts, podcast appearances, and
                      consulting opportunities. Reach out and let&apos;s explore what we can
                      create together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
