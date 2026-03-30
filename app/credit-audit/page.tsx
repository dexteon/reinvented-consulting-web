import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, Calendar } from "lucide-react";
import TestimonialCard from "@/components/shared/TestimonialCard";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Credit Repair Audit — $297 | Reinvented Consulting",
  description: "30 minutes with our team. We review your credit, identify every gap, and hand you a step-by-step action plan.",
};

const timeline = [
  { time: "0-5 min", title: "Intro + Goals", desc: "Quick intro, what you want to accomplish, timeline, and current situation overview." },
  { time: "5-15 min", title: "Credit Profile Review", desc: "You share your screen. We review your full credit report together — personal and business." },
  { time: "15-25 min", title: "Gap Analysis", desc: "We identify every gap: wrong account types, missing tradelines, utilization issues, derogatory marks." },
  { time: "25-30 min", title: "Action Plan Delivery", desc: "You leave with a prioritized 30-day checklist, recommended lenders for your profile, and clear next steps." },
];

const deliverables = [
  "Personalized credit gap analysis (written PDF)",
  "Prioritized 30-day action checklist",
  "Top 3-5 lender recommendations specific to your situation",
  "Exact wording to use when calling banks",
  "Optional session recording (if you want to review later)",
  "Follow-up email with any additional resources",
];

const testimonials = [
  { name: "Brittany H.", location: "Charlotte, NC", quote: "The 30 minutes I spent on the audit saved me months of trial and error. She told me exactly what was wrong and how to fix it.", result: "Enrolled in Mentorship" },
  { name: "David K.", location: "New York, NY", quote: "Got my action plan on a Thursday. Had my first approval by the following Wednesday.", result: "Approved for $30K" },
  { name: "Carmen L.", location: "Puerto Rico", quote: "Finally understood why I kept getting denied. Fixed the two issues they found and was approved within 30 days.", result: "Approved for $22K" },
];

const faqs = [
  { q: "What if I have really bad credit?", a: "That is actually the most common situation we audit. We are not here to judge — we are here to identify what needs to change and in what order." },
  { q: "Do I need to prepare anything?", a: "Pull a free credit report from AnnualCreditReport.com before the call if you can. Otherwise just show up — we can access what we need during the session." },
  { q: "Who conducts the audit?", a: "Trained members of the Reinvented Consulting team who have been through the full mentorship program and know the system inside out." },
  { q: "What happens after the audit?", a: "You implement the action plan. Many audit clients also enroll in the mentorship program to get support through the implementation." },
];

export default function CreditAuditPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
            <Clock className="w-3.5 h-3.5" /> 30-Minute Strategy Session
          </div>
          <h1 className="font-serif text-5xl font-bold text-white leading-tight mb-6">
            Your Personal Roadmap to{" "}
            <span className="text-gradient-gold">Business Funding</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            30 minutes with our team. We review your credit, identify every gap, and hand you
            a step-by-step action plan — specific to your situation.
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="text-white/40 line-through text-lg">$497</span>
            <span className="text-5xl font-bold text-gold">$297</span>
          </div>
          <a href="/api/checkout?product=credit_audit" className="btn-gold text-lg px-10 py-4">
            Book My Audit <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-sm mt-3">After payment, you select your appointment time.</p>
        </div>
      </section>

      {/* ─── WHAT HAPPENS ─────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-10">What Happens on the Call</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold/20 hidden md:block" />
            <div className="space-y-4">
              {timeline.map(({ time, title, desc }) => (
                <div key={time} className="flex gap-6">
                  <div className="hidden md:flex items-start pt-1">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 z-10">
                      <Clock className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  <div className="card-light card-accent flex-1">
                    <p className="text-gold text-xs font-semibold mb-1">{time}</p>
                    <h3 className="font-serif font-bold text-navy mb-1">{title}</h3>
                    <p className="text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─────────────────────────────────── */}
      <section className="section-dark py-14">
        <div className="container-section max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-6">What You Get</h2>
          <div className="card-dark">
            <ul className="space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-light py-14">
        <div className="container-section">
          <h2 className="font-serif text-2xl font-bold text-navy text-center mb-8">Audit Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ─── CALENDLY NOTE ────────────────────────────────── */}
      <section className="section-dark py-14">
        <div className="container-section max-w-2xl mx-auto text-center">
          <Calendar className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold text-white mb-4">How Booking Works</h2>
          <p className="text-white/60 mb-6">
            Complete your $297 payment. Immediately after, you will be redirected to our booking page
            where you select any available 30-minute slot that works for your schedule.
          </p>
          <div className="card-dark text-left">
            <p className="text-gold text-xs font-semibold mb-1">Step 1</p>
            <p className="text-white/80 text-sm mb-4">Complete payment below</p>
            <p className="text-gold text-xs font-semibold mb-1">Step 2</p>
            <p className="text-white/80 text-sm mb-4">Select your appointment time (Calendly)</p>
            <p className="text-gold text-xs font-semibold mb-1">Step 3</p>
            <p className="text-white/80 text-sm">Receive confirmation email with Zoom link</p>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="bg-gold py-14">
        <div className="container-section text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Ready to Know Exactly What to Fix?
          </h2>
          <p className="text-navy/70 mb-8 max-w-lg mx-auto">
            $297. 30 minutes. Leave with a complete action plan. 40-50% of audit clients enroll in mentorship after getting their roadmap.
          </p>
          <a href="/api/checkout?product=credit_audit" className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-all">
            Book My Audit <ArrowRight className="w-5 h-5" />
          </a>
          <TrustBadges />

          {/* Upsell to mentorship */}
          <p className="text-navy/50 text-sm mt-6">
            Already done an audit?{" "}
            <Link href="/mentorship" className="underline hover:text-navy transition-colors">
              View the Mentorship Program
            </Link>
          </p>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="section-dark py-14">
        <div className="container-section max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-8">Questions</h2>
          <div className="space-y-3">
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
