"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Clock, Users, ArrowRight, Loader2 } from "lucide-react";
import { webinarRegistrationSchema, type WebinarRegistrationInput } from "@/lib/validations";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { useRouter } from "next/navigation";

const learns = [
  "How to build business credit completely separate from your personal credit",
  "The exact banks to target first — and which ones to avoid in 2026",
  "How to get approved for $50K+ with no personal guarantee",
  "The #1 mistake that kills applications (and how to fix it this week)",
];

const testimonials = [
  { name: "Priya S.", location: "Dallas, TX", quote: "The webinar alone gave me more clarity than 3 years of Googling. Dub doesn't hold anything back.", result: "Enrolled in Mentorship" },
  { name: "DeShawn M.", location: "Baltimore, MD", quote: "I came in skeptical. Left with a checklist and a game plan. Implemented it and got approved.", result: "Approved for $55K" },
  { name: "Rosa L.", location: "Puerto Rico", quote: "Finally a webinar that talks about Caribbean banking and what actually works here.", result: "Approved for $25K" },
];

const faqs = [
  { q: "Is this live or recorded?", a: "The weekly sessions are live. Replays are available if you can't attend." },
  { q: "Who is this for?", a: "Entrepreneurs at any stage — whether you're just starting, rebuilding bad credit, or want to expand your existing funding." },
  { q: "Do I need good credit to attend?", a: "No. The webinar is specifically designed for people who want to build or repair their business credit from wherever they are now." },
  { q: "Will this work in my state?", a: "Yes. The strategies apply across all 50 states. Dub also covers specific approaches for PR and USVI." },
];

export default function WebinarPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WebinarRegistrationInput>({
    resolver: zodResolver(webinarRegistrationSchema),
  });

  const onSubmit = async (data: WebinarRegistrationInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Registration failed");
      router.push("/thank-you?source=webinar");
    } catch {
      setServerError("Something went wrong. Please try again or email kenneth@reinventedconsulting.com");
    }
  };

  return (
    <>
      {/* ─── HERO / FORM ──────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
                Free — Limited Spots Each Week
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                How to Build Business Credit That Gets You{" "}
                <span className="text-gradient-gold">Approved for $50K+</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Join Dub Washington for a free 45-minute live training. No fluff — just the exact system used by 9,100+ entrepreneurs.
              </p>

              {/* Details bar */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-sm">45 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Users className="w-4 h-4 text-gold" />
                  <span className="text-sm">Live Q&A included</span>
                </div>
              </div>

              {/* What you'll learn */}
              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">What You&apos;ll Learn</h3>
                <ul className="space-y-3">
                  {learns.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="font-serif text-2xl font-bold text-navy mb-2">Claim Your Free Spot</h2>
              <p className="text-muted text-sm mb-6">Seats are limited. Register now to secure your spot.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot */}
                <input {...register("website")} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">First Name *</label>
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="Full Name..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Email Address *</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Phone (optional)</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Biggest Credit Challenge</label>
                  <select
                    {...register("challenge")}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                  >
                    <option value="">Select one...</option>
                    <option value="bad_personal_credit">Bad personal credit score</option>
                    <option value="no_business_credit">No business credit history</option>
                    <option value="denied_for_funding">Been denied for funding</option>
                    <option value="just_starting">Just starting my business</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                {serverError && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-lg p-3">{serverError}</p>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-gold w-full justify-center text-base">
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Registering...</>
                  ) : (
                    <>Claim My Free Spot <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-xs text-muted text-center">
                  No spam. Unsubscribe anytime. Your info is protected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO PREVIEW ──────────────────────────────── */}
      <section className="section-dark py-16 border-t border-gold/10">
        <div className="container-section max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Preview: What You&apos;ll Learn
          </h2>
          <p className="text-white/60 mb-8">Watch a quick intro from Dub Washington on what the mentorship covers.</p>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gold/20" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1160390059?title=0&byline=0&portrait=0&autopause=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Reinvented Consulting — Preview"
            />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-8">What Past Attendees Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-8">Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card-dark card-accent">
                <p className="text-white font-semibold text-sm mb-1">{q}</p>
                <p className="text-white/60 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
