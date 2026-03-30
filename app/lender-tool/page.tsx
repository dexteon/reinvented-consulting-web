import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle2, FileText } from "lucide-react";
import TestimonialCard from "@/components/shared/TestimonialCard";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Lender Matching Tool — $197 | Reinvented Consulting",
  description: "Answer 8 questions. Get a personalized shortlist of the top 5-10 banks most likely to approve you right now.",
};

const steps = [
  { num: "1", title: "Answer 8 Questions", desc: "Business age, revenue, personal credit score, existing credit relationships, and funding goal." },
  { num: "2", title: "AI Matches Your Profile", desc: "Our system compares your profile against 200+ lenders using current community approval data — not just public guidelines." },
  { num: "3", title: "Get Your PDF Report", desc: "A ranked list of 5-10 lenders with approval likelihood, required score range, what to say on the call, and application order." },
];

const reportPreview = [
  { rank: "#1", bank: "Navy Federal Credit Union", likelihood: "High", minScore: "650+", notes: "Best for first business line. Apply with a recent Chexsystems report." },
  { rank: "#2", bank: "Chase Ink Business", likelihood: "High", minScore: "680+", notes: "Apply online. Avoid if you have 5+ recent personal cards (5/24 rule)." },
  { rank: "#3", bank: "Amex Business Gold", likelihood: "Medium", minScore: "700+", notes: "Best for established businesses 2+ years. Strong revenue history helps." },
];

const testimonials = [
  { name: "Lisa R.", location: "Phoenix, AZ", quote: "I had tried 6 banks on my own and been denied every time. The tool told me exactly which ones to go to. First two approved me.", result: "Approved for $55K" },
  { name: "Michael T.", location: "Chicago, IL", quote: "Worth every dollar. Saved me months of guessing. The call scripts included were a bonus I did not expect.", result: "Approved for $30K" },
  { name: "Yolanda B.", location: "Miami, FL", quote: "The tool found two credit unions I had never heard of. Both approved me within a week.", result: "Approved for $45K" },
  { name: "Omar S.", location: "Dallas, TX", quote: "Paired this with the ebook and followed the sequence exactly. Got approved on the first try.", result: "Approved for $25K" },
];

export default function LenderToolPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
              <Search className="w-3.5 h-3.5" /> AI-Powered Matching
            </div>
            <h1 className="font-serif text-5xl font-bold text-white leading-tight mb-6">
              Find Your Best Lenders{" "}
              <span className="text-gradient-gold">in 5 Minutes</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Answer 8 questions about your business profile. Get a custom shortlist of the top 5-10 banks
              and credit unions most likely to approve you — right now, based on current community data.
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="text-5xl font-bold text-gold">$197</span>
              <span className="text-white/50">one-time</span>
            </div>
            <a href="/api/checkout?product=lender_tool" className="btn-gold text-lg px-10 py-4">
              Get My Lender Matches <ArrowRight className="w-5 h-5" />
            </a>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="card-light card-accent text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold">{num}</span>
                </div>
                <h3 className="font-serif font-bold text-navy mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAMPLE REPORT ────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-2xl font-bold text-white">Sample Report Preview</h2>
            <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full border border-gold/20">Blurred — actual report has full details</span>
          </div>
          <div className="space-y-3">
            {reportPreview.map(({ rank, bank, likelihood, minScore, notes }) => (
              <div key={rank} className="card-dark flex gap-4 items-start">
                <span className="text-gold font-bold text-sm shrink-0">{rank}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{bank}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${likelihood === "High" ? "bg-success/20 text-success" : "bg-gold/20 text-gold"}`}>
                      {likelihood} Approval Likelihood
                    </span>
                  </div>
                  <p className="text-white/50 text-xs mb-1">Min. Score: {minScore}</p>
                  <p className="text-white/60 text-sm">{notes}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-4 text-center">
            Your actual report will include 5-10 lenders specific to your profile, call scripts, and application order.
          </p>
        </div>
      </section>

      {/* ─── WHY THIS WORKS ───────────────────────────────── */}
      <section className="section-light py-14">
        <div className="container-section max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-navy text-center mb-6">Why Public Bank Lists Do Not Work</h2>
          <div className="card-light card-accent">
            <p className="text-navy/80 text-sm leading-relaxed mb-4">
              Every bank publishes their minimum credit score requirements. But those are just the floor — not the
              actual approval criteria. Banks also weigh business age, account history, deposit relationships,
              DBA vs. LLC structure, and whether you have an existing relationship.
            </p>
            <p className="text-navy/80 text-sm leading-relaxed">
              The Lender Matching Tool uses data from the 9,100-member community — real applications, real approvals,
              real denials — to identify which banks are most likely to approve your specific profile <em>right now</em>,
              not based on generic published criteria.
            </p>
          </div>
        </div>
      </section>

      {/* ─── UPSELL MENTION ───────────────────────────────── */}
      <section className="section-dark py-10 border-y border-gold/20">
        <div className="container-section max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="flex-1">
            <p className="text-gold text-sm font-semibold mb-1">Want someone to walk you through the results?</p>
            <p className="text-white/60 text-sm">Pair the Lender Tool with a Credit Audit. After you get your matches, book a 30-minute call and Dub's team will build your exact application sequence. Tool owners get $50 off.</p>
          </div>
          <Link href="/credit-audit" className="btn-outline shrink-0">
            Add a Credit Audit ($247 for tool owners)
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-light py-14">
        <div className="container-section">
          <h2 className="font-serif text-2xl font-bold text-navy text-center mb-8">What Tool Users Say</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="bg-gold py-14">
        <div className="container-section text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Stop Guessing. Start With the Right Banks.</h2>
          <p className="text-navy/70 mb-6">$197. One-time. Instant access to your personalized PDF report.</p>
          <a href="/api/checkout?product=lender_tool" className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-all">
            Get My Lender Matches <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
