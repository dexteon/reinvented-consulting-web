import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Bell, TrendingUp, Users } from "lucide-react";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Lender Intelligence Brief — $19/month | Reinvented Consulting",
  description: "Weekly digest of new lender opportunities, rule changes, and timing strategies for business funding.",
};

const briefContents = [
  { icon: TrendingUp, title: "3 New Lender Opportunities", desc: "Banks and credit unions actively approving right now, with current approval criteria." },
  { icon: Bell, title: "1 Rule Change Alert", desc: "When banks update their score thresholds or application requirements — you hear first." },
  { icon: Users, title: "2 Community Win Breakdowns", desc: "Real members who just got approved, what they did, and what you can replicate." },
  { icon: ArrowRight, title: "1 Timing Strategy", desc: "Month-end vs. quarter-start, seasonal patterns, when to apply for max approval odds." },
];

const sampleHeadlines = [
  "Chase Ink updated their 5/24 threshold — here is what changed and what to do",
  "3 credit unions currently at 90%+ approval rate for business lines under $50K",
  "Member Marcus T. approved for $100K: the exact sequence he followed",
  "Why Q1 is the best time to apply for Navy Federal Business — and how to prepare",
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. Cancel through your account dashboard at any time. No questions asked." },
  { q: "How is it delivered?", a: "By email every week, directly to your inbox. Also archived in your member portal." },
  { q: "How often does it come?", a: "Weekly — every Monday morning so you can plan your week." },
  { q: "Who writes it?", a: "Dub's team compiles the lender intelligence, which is then processed by the community monitoring AI to surface the most relevant opportunities." },
  { q: "Is it different from the free community?", a: "Yes. The Brief contains specific, actionable lender data and timing intelligence not shared in the public community." },
];

export default function LenderBriefPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
            <Bell className="w-3.5 h-3.5" /> Weekly Intelligence
          </div>
          <h1 className="font-serif text-5xl font-bold text-white leading-tight mb-6">
            Stay Ahead of Every{" "}
            <span className="text-gradient-gold">Bank Rule Change</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-8">
            Weekly intelligence on new lender opportunities, rule changes, and timing strategies —
            curated by Dub's team and AI-powered community monitoring.
          </p>
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-gold">$19</span>
              <span className="text-white/50">/month</span>
            </div>
            <a
              href="/api/checkout?product=lender_brief"
              className="btn-gold text-lg px-10 py-4"
            >
              Start My Subscription <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/40 text-sm">Cancel anytime. Billed monthly.</p>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS IN EACH BRIEF ────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-[#F8FAFC] text-center mb-10">What is in Each Brief</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {briefContents.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-light card-accent text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif font-bold text-[#F8FAFC] mb-2 text-sm">{title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAMPLE ISSUE ─────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-6">Past Issue Headlines</h2>
          <p className="text-white/60 text-center mb-8 text-sm">A taste of what lands in your inbox every Monday.</p>
          <div className="space-y-3">
            {sampleHeadlines.map((h, i) => (
              <div key={i} className="card-dark card-accent flex items-start gap-3">
                <span className="text-gold font-bold text-sm shrink-0 mt-0.5">#{i + 1}</span>
                <p className="text-white/80 text-sm">{h}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl border border-gold/20 bg-white/5 text-center">
            <p className="text-white/50 text-xs">Full issue content available to subscribers only. The above are representative headlines from past editions.</p>
          </div>
        </div>
      </section>

      {/* ─── WHO GETS MOST VALUE ──────────────────────────── */}
      <section className="section-light py-14">
        <div className="container-section max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#F8FAFC] text-center mb-6">Who Gets the Most Value</h2>
          <div className="space-y-3">
            {[
              "Mentorship alumni who want to stay current after graduating",
              "Active mentorship students who want additional intelligence",
              "Anyone currently mid-application who needs real-time lender data",
              "Business owners building a long-term credit portfolio",
              "Coaches and educators in the funding space",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 card-light card-accent text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-sm mx-auto text-center">
          <div className="card-dark ring-1 ring-gold/30 p-8">
            <p className="text-gold text-sm font-semibold mb-2">Monthly Subscription</p>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-5xl font-bold text-white">$19</span>
              <span className="text-white/50">/month</span>
            </div>
            <ul className="space-y-2.5 text-left mb-6">
              {[
                "Weekly lender intelligence report",
                "New bank opportunities every Monday",
                "Rule change alerts in real-time",
                "Community win breakdowns",
                "Timing strategies for applications",
                "Cancel anytime",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/api/checkout?product=lender_brief"
              className="btn-gold w-full justify-center"
            >
              Subscribe Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <TrustBadges dark />
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="section-light py-14">
        <div className="container-section max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-[#F8FAFC] text-center mb-8">Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card-light card-accent">
                <p className="font-semibold text-[#F8FAFC] text-sm mb-1">{q}</p>
                <p className="text-[#94A3B8] text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
