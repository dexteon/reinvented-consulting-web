import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Play, ArrowRight, MessageCircle, Globe, TrendingUp } from "lucide-react";
import TrustBadges from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Video Distribution Add-On — Automate Your Content to 10+ Platforms",
  description: "Record once. AI processes, formats, and publishes to YouTube, Reels, TikTok, Pinterest, Threads, WhatsApp, and more — including bilingual EN/ES distribution to PR and USVI.",
};

const platforms = [
  { category: "Current Platforms", color: "text-success", items: [
    { name: "YouTube", detail: "Long-form + auto-clipped Shorts" },
    { name: "Instagram Reels", detail: "9:16 vertical with captions" },
  ]},
  { category: "New Standard", color: "text-gold", items: [
    { name: "X / Twitter", detail: "2:20 clip + text hook" },
    { name: "TikTok", detail: "9:16 with trending hashtags" },
    { name: "Pinterest", detail: "Video pins (high-performing for finance)" },
    { name: "Threads", detail: "9:16 clip via Threads API" },
  ]},
  { category: "PR + USVI Regional", color: "text-blue-400", items: [
    { name: "Facebook (geo-targeted)", detail: "Spanish + English, Caribbean audience" },
    { name: "WhatsApp Business", detail: "Broadcast lists, EN/ES captions" },
  ]},
  { category: "Ad Networks", color: "text-purple-400", items: [
    { name: "PropellerAds", detail: "Push, pop, interstitial formats" },
    { name: "InMobi", detail: "In-app pre-roll, finance/lifestyle apps" },
  ]},
];

const steps = [
  { num: "01", title: "Upload Your Video", desc: "Send your video via Telegram, Google Drive, GHL, or drop a YouTube URL. Both raw uploads and existing content work." },
  { num: "02", title: "AI Processes Everything", desc: "FFmpeg converts formats: 16:9 for YouTube, 9:16 for Reels/TikTok, 1:1 for X/Threads. Whisper transcribes. Claude writes platform-specific captions in English and Spanish." },
  { num: "03", title: "Platform-Native Optimization", desc: "Every platform gets the right format, resolution, aspect ratio, caption length, and hashtag set. Thumbnails auto-extracted from best frame." },
  { num: "04", title: "Auto-Publish Everywhere", desc: "All standard and regional platforms publish automatically. Ad campaigns launch in PropellerAds and InMobi targeting 25–45 year olds in PR, USVI, and major metros." },
];

const tiers = [
  {
    name: "Starter",
    price: "$300",
    period: "/month",
    videos: 4,
    features: [
      "4 videos processed/month",
      "YouTube + Reels + TikTok + X + Threads + Pinterest",
      "English captions",
      "Monthly performance report",
      "n8n + GCP Cloud Run pipeline",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$400",
    period: "/month",
    videos: 8,
    features: [
      "8 videos processed/month",
      "All Starter platforms +",
      "Facebook geo-targeted (PR/USVI)",
      "WhatsApp Business broadcasts",
      "Bilingual captions (EN + ES)",
      "Monthly report + analytics",
    ],
    cta: "Get Started",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$500",
    period: "/month",
    videos: 15,
    features: [
      "15 videos processed/month",
      "All Growth platforms +",
      "PropellerAds campaigns",
      "InMobi in-app pre-roll",
      "Weekly strategy report",
      "Priority support",
      "Ad spend management setup",
    ],
    cta: "Get Started",
    featured: false,
  },
];

const caribbeanStats = [
  { icon: MessageCircle, stat: "95%+", label: "WhatsApp penetration in PR + USVI" },
  { icon: TrendingUp, stat: "17%", label: "Pinterest share of social traffic in Puerto Rico for financial content" },
  { icon: Globe, stat: "0", label: "Business funding educators currently running in-app video ads in the Caribbean" },
];

export default function VideoDistributionPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
              <Play className="w-3.5 h-3.5" /> Add-On for Content Machine Clients
            </div>
            <h1 className="font-serif text-5xl font-bold text-white leading-tight mb-6">
              Your Videos on <span className="text-gradient-gold">10+ Platforms.</span> Automatically.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Record once. Our AI processes, formats, captions in EN/ES, and publishes your content across
              YouTube, Reels, TikTok, Pinterest, Threads, WhatsApp, X, Facebook, and mobile ad networks —
              including bilingual distribution to the Caribbean market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#pricing" className="btn-gold text-lg px-8 py-4">
                View Pricing <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo" className="btn-outline text-lg px-8 py-4">
                Book a Demo →
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">Starting at $300/month + your ad spend</p>
          </div>
        </div>
      </section>

      {/* ─── PLATFORM GRID ────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-10">Where Your Content Goes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {platforms.map(({ category, color, items }) => (
              <div key={category} className="card-light">
                <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${color}`}>{category}</p>
                <ul className="space-y-3">
                  {items.map(({ name, detail }) => (
                    <li key={name}>
                      <p className="text-sm font-semibold text-navy">{name}</p>
                      <p className="text-xs text-muted">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="card-dark card-accent text-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-sm">{num}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CARIBBEAN OPPORTUNITY ────────────────────────── */}
      <section className="bg-gold/5 border-y border-gold/20 py-14">
        <div className="container-section">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3">The Caribbean Opportunity Nobody Else Is Using</h2>
            <p className="text-muted">PR and USVI are completely untapped for business funding educators. Here&apos;s what the data shows:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caribbeanStats.map(({ icon: Icon, stat, label }) => (
              <div key={label} className="text-center card-light">
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-bold text-3xl text-navy mb-1">{stat}</p>
                <p className="text-muted text-sm">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 card-light card-accent max-w-2xl mx-auto">
            <p className="text-navy text-sm leading-relaxed">
              <strong>In-app pre-roll inside lifestyle and finance apps</strong> (Hinge, Bumble, personal finance apps)
              is completely untapped by business funding educators. People using those apps are actively thinking about
              their financial future. Nobody in this niche is running there. This is a first-mover opportunity targeting
              25–45 year olds in PR, USVI, and major metro markets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section id="pricing" className="section-dark py-16">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-3">Simple Monthly Pricing</h2>
            <p className="text-white/60">Ad spend billed separately through your own PropellerAds/InMobi accounts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 flex flex-col gap-4 border ${
                  tier.featured
                    ? "bg-navy-card border-gold shadow-2xl shadow-gold/10 ring-1 ring-gold/30 scale-105"
                    : "bg-navy-deep border-white/10"
                }`}
              >
                {tier.badge && (
                  <div className="inline-flex w-fit bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}
                <div>
                  <p className={`text-sm font-semibold ${tier.featured ? "text-gold" : "text-white/60"}`}>{tier.name}</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`text-4xl font-bold ${tier.featured ? "text-gold" : "text-white"}`}>{tier.price}</span>
                    <span className="text-white/40 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-white/50 text-xs mt-1">{tier.videos} videos/month</p>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? "text-gold" : "text-success"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`block text-center font-semibold py-3 rounded-lg transition-all ${
                    tier.featured
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <TrustBadges dark />
        </div>
      </section>

      {/* ─── INFRASTRUCTURE NOTE ──────────────────────────── */}
      <section className="section-light py-12">
        <div className="container-section max-w-2xl text-center">
          <h3 className="font-serif text-xl font-bold text-navy mb-3">Built on Enterprise Infrastructure</h3>
          <p className="text-muted text-sm leading-relaxed">
            Powered by GCP Cloud Run + Cloud Storage for video processing, FFmpeg for format conversion,
            Whisper for transcription, Claude API for caption generation, and n8n for workflow orchestration.
            The same infrastructure already running inside your Content Machine.
          </p>
        </div>
      </section>

      {/* ─── DEMO CTA ─────────────────────────────────────── */}
      <section id="demo" className="section-dark py-16 border-t border-gold/20">
        <div className="container-section max-w-xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">See It in Action</h2>
          <p className="text-white/60 mb-8">
            Book a 20-minute demo. We&apos;ll process one of your actual videos and show you the output across all platforms.
          </p>
          {/* Calendly embed placeholder — replace with real URL */}
          <div className="bg-navy-card rounded-xl border border-white/10 p-8">
            <p className="text-white/40 text-sm mb-4">Calendly booking will appear here</p>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_VIDEO_DEMO_URL ?? "https://calendly.com/reinventedconsulting"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book a 20-Minute Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
