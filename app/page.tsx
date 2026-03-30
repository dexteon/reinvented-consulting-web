import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import SocialProof from "@/components/shared/SocialProof";
import TestimonialCard from "@/components/shared/TestimonialCard";

export const metadata: Metadata = {
  title: "Build Business Credit That Banks Say YES To",
};

const wins = [
  { name: "Marcus T.", location: "Atlanta, GA", quote: "Used the system exactly as Dub taught it. Got approved for $85K in 60 days.", result: "Approved for $85K", score: "590 → 720" },
  { name: "Angela R.", location: "Puerto Rico", quote: "Never thought I could get funding with my credit history. Now I'm running a growing business.", result: "Approved for $40K", score: "520 → 680" },
  { name: "James W.", location: "Chicago, IL", quote: "The mentorship paid for itself in the first month. Dub's strategy is the real deal.", result: "Approved for $120K", score: "610 → 750" },
  { name: "Destiny M.", location: "Houston, TX", quote: "I came in with a 420. I'm at 700+ now and running three LLCs with business credit.", result: "Approved for $65K", score: "420 → 710" },
  { name: "Carlos V.", location: "USVI", quote: "The bilingual support and Caribbean-specific bank knowledge was exactly what I needed.", result: "Approved for $30K", score: "540 → 695" },
  { name: "Tanya B.", location: "Miami, FL", quote: "Went from zero business credit to my first Chase card and a line of credit in under 90 days.", result: "Approved for $50K", score: "560 → 705" },
];

const steps = [
  { step: "01", title: "Learn the System", desc: "Start with the free webinar. Understand exactly how business credit is built and how banks make approval decisions." },
  { step: "02", title: "Apply the Strategies", desc: "Use the ebook, lender tool, and audit to build your specific roadmap. Follow the sequence that matches your situation." },
  { step: "03", title: "Get Funded", desc: "With the right strategy and Dub's guidance, get approved for $10K–$250K+ in business funding." },
];

const products = [
  { title: "Free Webinar", price: "Free", desc: "45-minute live training on how to build business credit from scratch.", href: "/webinar", cta: "Register Free →" },
  { title: "Credit Playbook", price: "$49", desc: "The complete ebook that started thousands of success stories.", href: "/ebook", cta: "Get the Ebook →" },
  { title: "Lender Matching Tool", price: "$197", desc: "AI-powered tool that finds your best banks based on your profile.", href: "/lender-tool", cta: "Find My Lenders →" },
  { title: "Credit Repair Audit", price: "$297", desc: "30-minute strategy call to identify your gaps and build your roadmap.", href: "/credit-audit", cta: "Book Audit →" },
  { title: "Mentorship Program", price: "From $1,997", desc: "12-week intensive with Dub. Full curriculum, community access, and support.", href: "/mentorship", cta: "Apply Now →", featured: true },
  { title: "Lender Intelligence Brief", price: "$19/mo", desc: "Weekly digest of new lender opportunities and rule changes.", href: "/lender-brief", cta: "Subscribe →" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="section-dark relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        {/* Gold accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

        <div className="container-section relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
              9,100+ entrepreneurs already funded
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Build Business Credit That Banks{" "}
              <span className="text-gradient-gold">Say YES To</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Dub Washington went from a 420 credit score to $2M+ in funding in 24 months.
              Now he teaches the exact system to entrepreneurs across the US and Caribbean.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/webinar" className="btn-gold text-lg px-8 py-4">
                Join Free Webinar <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/mentorship" className="btn-outline text-lg px-8 py-4">
                View Mentorship →
              </Link>
            </div>

            {/* Quick wins */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["No experience required", "Works in all 50 states", "Results in 30–90 days"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ──────────────────────────────── */}
      <SocialProof dark />

      {/* ─── HOW IT WORKS ──────────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy mb-3">How It Works</h2>
            <p className="text-muted max-w-xl mx-auto">A proven three-step system used by 9,100+ entrepreneurs to go from zero to funded.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="card-light relative">
                <div className="text-gold/20 font-serif font-bold text-6xl absolute top-4 right-4">{step}</div>
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-gold font-bold text-sm">{step}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SUITE ─────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-white mb-3">
              Choose Your <span className="text-gradient-gold">Starting Point</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">Every path leads to the same goal. Start where it makes sense for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(({ title, price, desc, href, cta, featured }) => (
              <div key={href} className={`card-dark card-accent flex flex-col gap-3 ${featured ? "border-gold/40 bg-navy-card ring-1 ring-gold/30" : ""}`}>
                {featured && (
                  <div className="inline-flex w-fit bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div>
                  <p className="text-gold text-sm font-semibold">{price}</p>
                  <h3 className="font-serif text-lg font-bold text-white">{title}</h3>
                  <p className="text-white/60 text-sm mt-1">{desc}</p>
                </div>
                <Link href={href} className={featured ? "btn-gold mt-auto" : "btn-outline mt-auto text-sm px-5 py-2.5"}>
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STUDENT WINS ──────────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy mb-3">Real Students. Real Results.</h2>
            <p className="text-muted max-w-xl mx-auto">These are actual community members who applied the Reinvented Consulting system.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {wins.map((w) => <TestimonialCard key={w.name} {...w} />)}
          </div>
        </div>
      </section>

      {/* ─── VIDEO DISTRIBUTION TEASER ─────────────────────── */}
      <section className="section-dark py-16 border-t border-gold/20">
        <div className="container-section">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-4">
              <Play className="w-3.5 h-3.5" /> For Content Creators
            </div>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Running a Content Business? Automate Your Video to 10+ Platforms.
            </h2>
            <p className="text-white/60 mb-6">
              Record once. Our AI processes, formats, captions in EN/ES, and publishes to YouTube, Reels, TikTok, Pinterest, Threads, WhatsApp, X, and Caribbean ad networks — automatically.
            </p>
            <Link href="/video-distribution" className="btn-outline">
              Learn About Video Distribution →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────── */}
      <section className="bg-gold py-16">
        <div className="container-section text-center">
          <h2 className="font-serif text-4xl font-bold text-navy mb-4">
            Ready to Start Building Business Credit?
          </h2>
          <p className="text-navy/70 text-lg mb-8 max-w-xl mx-auto">
            Join the free webinar and learn the exact system Dub used to go from 420 to $2M+ in funding.
          </p>
          <Link href="/webinar" className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-all">
            Register for Free Webinar <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
