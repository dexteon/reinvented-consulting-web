import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Zap, Rocket, Shield, Clock, Bot, Video, FileText, BarChart3, MessageSquare, Headphones } from "lucide-react";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Pricing | CyberAutomations — Done-For-You AI Services",
  description: "AI content machines, video distribution, and full-stack automation. Built, managed, and optimized by CyberAutomations. Starting at $500/month.",
};

const tiers = [
  {
    name: "Starter",
    price: "$500",
    period: "/month",
    commitment: "3-month minimum",
    tagline: "Content Machine Only",
    icon: Zap,
    features: [
      "20 pieces of content per week",
      "From one 5-minute voice memo",
      "YouTube scripts + Reels + emails + carousels + community posts",
      "Brand Voice Profile trained on your content",
      "n8n workflow orchestration",
      "CrewAI 9-agent crew deployed and tuned",
      "System monitoring + bug fixes included",
      "Monthly performance check-in",
    ],
    best: "Coaches, consultants, and creators who need consistent content without the time drain.",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,000",
    period: "/month",
    commitment: "3-month minimum",
    tagline: "Content Machine + Video Distribution",
    icon: Rocket,
    features: [
      "Everything in Starter +",
      "Full video distribution to 10+ platforms",
      "YouTube, Reels, TikTok, X, Threads, Pinterest",
      "Facebook geo-targeted for your audience",
      "WhatsApp Business broadcasts",
      "Bilingual captions (EN + ES)",
      "FFmpeg format optimization (16:9, 9:16, 1:1)",
      "Monthly performance report + analytics dashboard",
    ],
    best: "Creators ready to scale reach across every platform without hiring a media team.",
    cta: "Get Started",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Full-Stack",
    price: "$1,500",
    period: "/month",
    commitment: "6-month minimum",
    tagline: "Everything. Built, Managed, Optimized.",
    icon: Shield,
    features: [
      "Everything in Growth +",
      "AI Support Bot (handles 80% of community questions)",
      "Compliance Gate (FTC disclaimer automation)",
      "PropellerAds + InMobi in-app pre-roll campaigns",
      "Slack support SLA (4-hour response)",
      "Weekly strategy report",
      "Quarterly Brand Voice retraining",
      "Priority feature requests",
    ],
    best: "Established businesses that want a full AI operations layer without hiring.",
    cta: "Get Started",
    featured: false,
  },
];

const whatsIncluded = [
  { icon: Bot, title: "9-Agent AI Crew", desc: "CrewAI hierarchical system — Content Director, Trend Scout, Community Miner, YouTube Writer, Short-Form Machine, Email Writer, Skool Manager, Carousel Writer, Brand Voice Enforcer." },
  { icon: Video, title: "Video Processing Pipeline", desc: "FFmpeg on GCP Cloud Run. Whisper transcription. Claude generates platform-native captions, hooks, and hashtags in EN + ES." },
  { icon: FileText, title: "Brand Voice Profile", desc: "Trained on 30+ of your existing transcripts. Every piece of content sounds like you, not like AI." },
  { icon: BarChart3, title: "n8n Workflow Engine", desc: "Voice memo drops Monday morning. By 3PM, 20 pieces are staged for the week. You approve in Slack." },
  { icon: MessageSquare, title: "Qdrant Vector Database", desc: "Stores your brand voice, community wins, lender intelligence, compliance templates. Powers semantic search across all agents." },
  { icon: Headphones, title: "Ongoing Management", desc: "We monitor, fix, retune, and optimize. You do not touch the infrastructure. Ever." },
];

const faqs = [
  { q: "What do you need from me to get started?", a: "A 30-minute onboarding call, access to your content platforms (YouTube, Instagram, etc.), and your first voice memo. We handle everything else." },
  { q: "What if I want to cancel?", a: "Starter and Growth have a 3-month minimum. Full-Stack has a 6-month minimum. After the commitment period, cancel anytime with 30 days notice." },
  { q: "Do I own the content?", a: "Yes. Everything generated is 100% yours. The AI crew, workflows, and brand voice profile are yours too." },
  { q: "How is this different from hiring a VA or content agency?", a: "A VA does 5-10 hours of manual work. Our system generates 20 pieces per week from a single 5-minute input, runs 24/7, never calls in sick, and costs less than a part-time hire." },
  { q: "What tech stack do you use?", a: "CrewAI (agent orchestration), Claude API + Ollama (AI inference), n8n (workflow automation), Qdrant (vector search), GCP Cloud Run (video processing), FFmpeg + Whisper (media)." },
  { q: "Can I upgrade mid-contract?", a: "Yes. Upgrades take effect immediately. The new rate starts on your next billing cycle." },
  { q: "Who is behind CyberAutomations?", a: "Teon Moore — Cybersecurity Engineer and Army Cyber Warfare Officer with 13+ years building enterprise automation systems. This is not a side project." },
];

const process_steps = [
  { num: "01", title: "Discovery Call", desc: "30 minutes. We learn your business, audience, content style, and goals. No pitch — just questions.", time: "Day 1" },
  { num: "02", title: "Brand Voice Training", desc: "We collect 30+ of your existing transcripts, posts, or recordings. Train the AI to sound exactly like you.", time: "Days 2-5" },
  { num: "03", title: "System Build", desc: "Deploy your 9-agent crew, configure n8n workflows, set up Qdrant collections, and test end-to-end.", time: "Days 5-10" },
  { num: "04", title: "First Live Run", desc: "You record a 5-minute voice memo. We run it through the system. You review 20 pieces of content.", time: "Day 11" },
  { num: "05", title: "Go Live", desc: "Approve the output. We stage everything for the week. From here, it is one voice memo every Monday.", time: "Day 14" },
];

export default function PricingPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" /> CyberAutomations — Done-For-You AI Services
          </div>
          <h1 className="font-serif text-5xl font-bold text-white leading-tight mb-6">
            Your AI Content Team.{" "}
            <span className="text-gradient-gold">Built and Managed For You.</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-4">
            We build, deploy, and manage AI-powered content systems for coaches, consultants, and creators.
            You record a 5-minute voice memo on Monday. By Wednesday, 20 pieces of content are ready to publish.
          </p>
          <p className="text-white/40 text-sm">
            No technical skills required. No hiring. No managing. Just results.
          </p>
        </div>
      </section>

      {/* ─── PRICING TIERS ────────────────────────────────── */}
      <section id="pricing" className="section-light py-16">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">Simple Monthly Pricing</h2>
            <p className="text-muted max-w-xl mx-auto">Every plan is fully managed. We build it, we run it, we fix it. You focus on your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`rounded-xl p-6 flex flex-col gap-5 border ${
                    tier.featured
                      ? "bg-navy border-gold shadow-2xl shadow-gold/10 ring-1 ring-gold/30 md:-mt-4 md:mb-4"
                      : "bg-white border-gray-200 shadow-md"
                  }`}
                >
                  {tier.badge && (
                    <div className="inline-flex w-fit bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-5 h-5 ${tier.featured ? "text-gold" : "text-navy"}`} />
                      <h3 className={`font-serif text-xl font-bold ${tier.featured ? "text-white" : "text-navy"}`}>{tier.name}</h3>
                    </div>
                    <p className={`text-sm ${tier.featured ? "text-white/50" : "text-muted"}`}>{tier.tagline}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-bold ${tier.featured ? "text-gold" : "text-navy"}`}>{tier.price}</span>
                      <span className={`text-sm ${tier.featured ? "text-white/40" : "text-muted"}`}>{tier.period}</span>
                    </div>
                    <div className={`flex items-center gap-1.5 mt-1 text-xs ${tier.featured ? "text-white/40" : "text-muted"}`}>
                      <Clock className="w-3 h-3" />
                      {tier.commitment}
                    </div>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.featured ? "text-white/80" : "text-navy/80"}`}>
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? "text-gold" : "text-success"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={`p-3 rounded-lg text-xs leading-relaxed ${tier.featured ? "bg-white/5 text-white/50" : "bg-navy/5 text-muted"}`}>
                    <strong>Best for:</strong> {tier.best}
                  </div>

                  <a
                    href="https://calendly.com/cyberautomations"
                    className={`block text-center font-semibold py-3 rounded-lg transition-all ${
                      tier.featured
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    {tier.cta} <span className="text-xs opacity-60">→</span>
                  </a>
                </div>
              );
            })}
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* ─── WHAT IS INCLUDED ─────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-10">What Powers Your System</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatsIncluded.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark card-accent">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-10">From Zero to Live in 14 Days</h2>
          <div className="space-y-4">
            {process_steps.map(({ num, title, desc, time }) => (
              <div key={num} className="flex gap-4 card-light card-accent">
                <div className="shrink-0 w-16">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-bold text-xs">{num}</span>
                  </div>
                  <p className="text-muted text-xs mt-1">{time}</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-sm">{title}</h3>
                  <p className="text-muted text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ───────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-8">CyberAutomations vs. The Alternatives</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 text-white/60 font-medium"></th>
                  <th className="text-center py-3 text-gold font-bold">CyberAutomations</th>
                  <th className="text-center py-3 text-white/40 font-medium">Content Agency</th>
                  <th className="text-center py-3 text-white/40 font-medium">Part-Time VA</th>
                  <th className="text-center py-3 text-white/40 font-medium">DIY</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                <tr className="border-b border-white/5">
                  <td className="py-2.5">Monthly cost</td>
                  <td className="text-center text-gold font-semibold">$500-$1,500</td>
                  <td className="text-center">$3,000-$8,000</td>
                  <td className="text-center">$1,500-$2,500</td>
                  <td className="text-center">$0 (your time)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5">Pieces/week</td>
                  <td className="text-center text-gold font-semibold">20+</td>
                  <td className="text-center">8-12</td>
                  <td className="text-center">5-8</td>
                  <td className="text-center">3-5</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5">Your time/week</td>
                  <td className="text-center text-gold font-semibold">5 min</td>
                  <td className="text-center">2-3 hrs</td>
                  <td className="text-center">3-5 hrs</td>
                  <td className="text-center">10-20 hrs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5">Sounds like you</td>
                  <td className="text-center text-gold">Yes (Brand Voice AI)</td>
                  <td className="text-center">Sometimes</td>
                  <td className="text-center">Rarely</td>
                  <td className="text-center">Always</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5">Scales without hiring</td>
                  <td className="text-center text-gold">Yes</td>
                  <td className="text-center">No</td>
                  <td className="text-center">No</td>
                  <td className="text-center">No</td>
                </tr>
                <tr>
                  <td className="py-2.5">Runs on weekends/holidays</td>
                  <td className="text-center text-gold">Yes</td>
                  <td className="text-center">No</td>
                  <td className="text-center">No</td>
                  <td className="text-center">If you do</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-navy text-center mb-8">Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card-light card-accent">
                <p className="font-semibold text-navy text-sm mb-1">{q}</p>
                <p className="text-muted text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="bg-gold py-14">
        <div className="container-section text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Ready to Stop Creating Content Manually?
          </h2>
          <p className="text-navy/70 mb-6 max-w-lg mx-auto">
            Book a 30-minute discovery call. No pitch — just questions about your business and whether this is a fit.
          </p>
          <a
            href="https://calendly.com/cyberautomations"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-all"
          >
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-navy/50 text-sm mt-4">
            Or email directly: teonmoore@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
