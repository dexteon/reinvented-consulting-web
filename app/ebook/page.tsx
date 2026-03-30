import type { Metadata } from "next";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import TestimonialCard from "@/components/shared/TestimonialCard";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "The Business Credit Playbook — $49 | Reinvented Consulting",
  description: "The exact methodology Dub used to go from 420 to 700+ — now updated for 2026 bank rules.",
};

const chapters = [
  { num: "1", title: "Why Business Credit Is Different", desc: "How the business credit system works and why it is completely separate from your personal history." },
  { num: "2", title: "Setting Up Your Business Foundation", desc: "EIN, business structure, address, phone — every setup detail that affects your approval odds." },
  { num: "3", title: "The Vendor Account Strategy", desc: "Net-30 accounts that report to business bureaus and how to sequence them for maximum impact." },
  { num: "4", title: "Building Your Bank Relationship Score", desc: "Why the bank you open your checking account with matters — and the order to approach them." },
  { num: "5", title: "Revolving Credit Playbook", desc: "Business credit cards, secured to unsecured path, and utilization management for the highest limits." },
  { num: "6", title: "Funding Application Sequence", desc: "SBA loans, lines of credit, revenue-based funding — when to apply for each and in what order." },
  { num: "7", title: "Score Monitoring and Maintenance", desc: "How to monitor your business credit and keep it in optimal shape between applications." },
  { num: "8", title: "The 90-Day Action Plan", desc: "A week-by-week implementation calendar starting from zero to first approval." },
];

const testimonials = [
  { name: "Kevin H.", location: "Memphis, TN", quote: "Read it twice. Implemented one chapter at a time. Got approved for $40K in 8 weeks.", result: "Approved for $40K", score: "560 → 700" },
  { name: "Briana C.", location: "Tampa, FL", quote: "This ebook is more practical than any credit course I paid $500 for. Worth every penny.", result: "First business card approved" },
  { name: "Tony M.", location: "Philadelphia, PA", quote: "The 90-day action plan in chapter 8 alone was worth the price. I had a roadmap for the first time.", result: "Enrolled in Mentorship" },
  { name: "Sandra J.", location: "USVI", quote: "Clear, simple, applicable. And it actually addresses Caribbean banking differences.", result: "Approved for $20K" },
  { name: "Darius W.", location: "Detroit, MI", quote: "Dub writes the way he talks. No fluff, no padding. Just the information you need.", result: "Approved for $35K" },
];

export default function EbookPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Cover mockup */}
            <div className="flex justify-center">
              <div className="w-56 h-72 bg-gradient-navy rounded-xl border border-gold/40 shadow-2xl flex flex-col items-center justify-center gap-3 p-6 text-center">
                <BookOpen className="w-12 h-12 text-gold" />
                <p className="font-serif text-white font-bold text-lg leading-tight">The Business Credit Playbook</p>
                <p className="text-gold text-xs font-medium">Dub Washington</p>
                <div className="w-12 h-0.5 bg-gold/40 mx-auto" />
                <p className="text-white/40 text-xs">Reinvented Consulting</p>
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-gold text-sm font-semibold mb-3">Digital Ebook + Instant Download</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                The Business Credit Playbook That Started It All
              </h1>
              <p className="text-white/70 text-lg mb-6">
                The exact methodology Dub used to go from 420 to 700+ and $2M+ in funding —
                now fully updated for 2026 bank rules and credit requirements.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-white/40 line-through text-lg">$97</span>
                <span className="text-4xl font-bold text-gold">$49</span>
                <span className="text-sm bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">Most popular starting point</span>
              </div>

              <a href="/api/checkout?product=ebook" className="btn-gold text-lg w-full sm:w-auto justify-center">
                Get Instant Access <ArrowRight className="w-5 h-5" />
              </a>

              <TrustBadges dark />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTERS ─────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-10">What Is Inside</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map(({ num, title, desc }) => (
              <div key={num} className="card-light card-accent flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                  {num}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-sm mb-1">{title}</h3>
                  <p className="text-muted text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOR YOU / NOT FOR YOU ────────────────────────── */}
      <section className="section-dark py-14">
        <div className="container-section max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark card-accent">
              <p className="text-success font-semibold text-sm uppercase tracking-wide mb-3">This is for you if...</p>
              <ul className="space-y-2">
                {[
                  "You are starting from scratch or rebuilding",
                  "You want to understand business credit before investing more",
                  "You are a self-starter who implements from written guides",
                  "You want Dub's system in a format you can reference anytime",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark card-accent">
              <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Next step after the ebook...</p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                After reading the playbook, many people want personalized guidance on their specific situation.
                The $197 Lender Tool and $297 Credit Audit are the natural next steps.
              </p>
              <a href="/lender-tool" className="btn-outline text-sm">
                View Lender Tool ($197) <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-8">What Readers Say</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="bg-gold py-14">
        <div className="container-section text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">$49. Instant Access. No Risk.</h2>
          <p className="text-navy/70 mb-6">30-day money-back guarantee. If you read it and it does not help, email us.</p>
          <a href="/api/checkout?product=ebook" className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-all">
            Get the Ebook Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
