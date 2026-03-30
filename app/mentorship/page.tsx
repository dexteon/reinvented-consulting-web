import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, X, ArrowRight, Users } from "lucide-react";
import TestimonialCard from "@/components/shared/TestimonialCard";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Mentorship Program — $1,997–$3,497 | Reinvented Consulting",
  description: "12-week intensive with Dub Washington. Go from credit cleanup to your first funding approval.",
};

const tiers = [
  {
    name: "Standard",
    price: "$1,997",
    priceId: "mentorship_standard",
    features: [
      "12-week structured curriculum",
      "Skool community access",
      "Weekly live group calls",
      "Lifetime access to course materials",
      "Certificate of completion",
    ],
    notIncluded: ["1:1 strategy sessions", "Credit audit included", "Lender Brief subscription", "Priority Slack access"],
    featured: false,
    cta: "Enroll — Standard",
  },
  {
    name: "Premium",
    price: "$2,997",
    priceId: "mentorship_premium",
    features: [
      "Everything in Standard +",
      "2 x 1:1 strategy sessions with Dub",
      "Credit audit session included ($297 value)",
      "3 months Lender Brief ($57 value)",
      "Priority email support",
    ],
    notIncluded: ["Priority Slack access"],
    featured: true,
    badge: "Most Popular",
    cta: "Enroll — Premium",
  },
  {
    name: "VIP",
    price: "$3,497",
    priceId: "mentorship_vip",
    features: [
      "Everything in Premium +",
      "4 x 1:1 strategy sessions with Dub",
      "Priority Slack direct access",
      "VIP cohort (smaller group)",
      "First access to new resources",
    ],
    notIncluded: [],
    featured: false,
    cta: "Enroll — VIP",
  },
];

const curriculum = [
  { week: "Week 1-2", title: "Credit Foundation", topics: ["Personal vs. business credit separation", "EIN setup and business structure", "Opening your first business accounts"] },
  { week: "Week 3-4", title: "Building Your Profile", topics: ["Net-30 vendor accounts", "Dun & Bradstreet PAYDEX score", "Business credit bureaus explained"] },
  { week: "Week 5-6", title: "Bank Relationships", topics: ["Which banks to target first", "Opening business checking accounts", "Building bank relationship score"] },
  { week: "Week 7-8", title: "Revolving Credit", topics: ["Business credit cards strategy", "Secured to unsecured pathway", "Credit utilization management"] },
  { week: "Week 9-10", title: "Funding Applications", topics: ["SBA loans and requirements", "Lines of credit applications", "Revenue-based funding options"] },
  { week: "Week 11-12", title: "Scale & Maintain", topics: ["Managing multiple credit lines", "Credit monitoring systems", "Long-term funding strategy"] },
];

const yesChecks = [
  "You are serious about getting funded in the next 90 days",
  "You are ready to implement, not just learn",
  "You want a proven system, not YouTube guesswork",
  "You are willing to do the work and follow the sequence",
  "You want Dub in your corner guiding the process",
];

const noChecks = [
  "You want a magic shortcut with zero effort",
  "You will not actually implement the steps",
  "You are looking for get-rich-quick schemes",
  "You are not ready to invest in yourself",
  "You want a refund after consuming everything",
];

const wins = [
  { name: "Jerome K.", location: "Detroit, MI", quote: "12 weeks, followed Dub's system exactly. Approved for $100K from two lenders. Life-changing.", result: "Approved for $100K", score: "540 → 730" },
  { name: "Sharonda M.", location: "New Orleans, LA", quote: "I had a 490 when I started. The 1:1 sessions in the Premium track were worth 10x the price.", result: "Approved for $60K", score: "490 → 695" },
  { name: "Rafael C.", location: "Puerto Rico", quote: "Dub understands the PR market specifically. Got me connected to the right banks here. Outstanding.", result: "Approved for $45K", score: "560 → 710" },
  { name: "Tiffany R.", location: "Atlanta, GA", quote: "Came in as a single mom with 3 LLCs and bad credit. Left the program with $150K in funding.", result: "Approved for $150K", score: "510 → 740" },
  { name: "Marcus D.", location: "Houston, TX", quote: "The community alone was worth the investment. Having 9,100+ people who are doing the same thing is powerful.", result: "Approved for $80K", score: "580 → 720" },
  { name: "Keisha P.", location: "Charlotte, NC", quote: "I tried everything on YouTube for 2 years. One month in the program got me further than all of that combined.", result: "Approved for $35K", score: "530 → 680" },
];

export default function MentorshipPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="container-section relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
            <Users className="w-3.5 h-3.5" /> 9,100+ Community Members
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            The System That Has Helped{" "}
            <span className="text-gradient-gold">9,100+ Entrepreneurs</span>{" "}
            Access Real Funding
          </h1>
          <p className="text-white/70 text-xl mb-8">
            A 12-week intensive with Dub Washington — from credit cleanup to your first approval.
            Not theory. The actual system, with Dub guiding you through it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#tiers" className="btn-gold text-lg px-8 py-4">
              View Enrollment Options <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/credit-audit" className="btn-outline text-lg px-8 py-4">
              Start with a $297 Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ─── IS THIS FOR YOU ──────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-8">Is This For You?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-light border-l-4 border-success">
              <p className="font-semibold text-navy mb-3 text-sm uppercase tracking-wide">This is for you if...</p>
              <ul className="space-y-2.5">
                {yesChecks.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-light border-l-4 border-red-300">
              <p className="font-semibold text-navy mb-3 text-sm uppercase tracking-wide">This is NOT for you if...</p>
              <ul className="space-y-2.5">
                {noChecks.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CURRICULUM ───────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-10">12-Week Curriculum</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {curriculum.map(({ week, title, topics }) => (
              <div key={week} className="card-dark card-accent">
                <p className="text-gold text-xs font-semibold mb-1">{week}</p>
                <h3 className="text-white font-serif font-bold mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {topics.map((t) => (
                    <li key={t} className="text-white/60 text-xs flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIERS ────────────────────────────────────────── */}
      <section id="tiers" className="section-light py-16">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Choose Your Track</h2>
            <p className="text-muted max-w-xl mx-auto">All tracks include the full 12-week curriculum and community access. Upgrade for more personal access to Dub.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 flex flex-col gap-5 border ${
                  tier.featured
                    ? "bg-navy border-gold shadow-2xl shadow-gold/10 ring-1 ring-gold/30 md:-mt-4"
                    : "bg-white border-gray-200 shadow-md"
                }`}
              >
                {tier.badge && (
                  <div className="inline-flex w-fit bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}
                <div>
                  <h3 className={`font-serif text-xl font-bold ${tier.featured ? "text-white" : "text-navy"}`}>{tier.name}</h3>
                  <p className={`font-bold text-3xl mt-1 ${tier.featured ? "text-gold" : "text-navy"}`}>{tier.price}</p>
                  <p className={`text-sm mt-0.5 ${tier.featured ? "text-white/50" : "text-muted"}`}>one-time payment</p>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.featured ? "text-white/80" : "text-navy/80"}`}>
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? "text-gold" : "text-success"}`} />
                      {f}
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm opacity-30 ${tier.featured ? "text-white" : "text-navy"}`}>
                      <X className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/api/checkout?product=${tier.priceId}`}
                  className={`block text-center font-semibold py-3 rounded-lg transition-all ${
                    tier.featured
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* ─── STUDENT WINS ─────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-8">Student Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {wins.map((w) => <TestimonialCard key={w.name} {...w} dark />)}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="bg-gold py-14">
        <div className="container-section text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Not Ready for Mentorship Yet?
          </h2>
          <p className="text-navy/70 mb-6 max-w-lg mx-auto">
            Start with the $297 Credit Audit. We will review your specific situation and build your roadmap.
            40-50% of audit clients enroll in mentorship afterward.
          </p>
          <Link href="/credit-audit" className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-all">
            Book a Credit Audit First <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
