import type { Metadata } from "next";
import { CheckCircle2, AlertCircle, ArrowRight, Key, CreditCard, Mail, Calendar, Database, Users, Video, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Need From You | CyberAutomations for Reinvented Consulting",
  description: "Backend tools and access needed to take this demo site live.",
};

const mustHave = [
  {
    icon: CreditCard,
    tool: "Stripe Account",
    what: "API keys (publishable + secret) and webhook secret",
    why: "Processes all payments — ebook, tool, audit, mentorship, subscriptions. We create the products and prices in your dashboard.",
    effort: "5 min — Settings → Developers → API Keys",
  },
  {
    icon: Mail,
    tool: "GoHighLevel Account",
    what: "API key + Location ID",
    why: "Handles all email automation, contact tagging, and nurture sequences. Every form submission and purchase triggers a GHL workflow.",
    effort: "5 min — Settings → Business Profile → API",
  },
  {
    icon: Calendar,
    tool: "Calendly Account",
    what: "Two booking links (Credit Audit + Video Demo)",
    why: "Embedded on the Credit Audit and Video Distribution pages. Prospects book directly after payment.",
    effort: "10 min — create two event types",
  },
  {
    icon: Users,
    tool: "Skool Community Access",
    what: "Invite link or API access for auto-enrollment",
    why: "Mentorship purchasers get auto-invited to the Skool community. Currently at https://www.skool.com/reinvented-mentorship-9193",
    effort: "2 min — share invite link",
  },
];

const niceToHave = [
  {
    icon: Video,
    tool: "YouTube Channel Access",
    what: "Upload API credentials or channel manager invite",
    why: "For the Video Distribution module — auto-uploads long-form content and Shorts directly to your channel.",
    effort: "10 min via Google Cloud Console",
  },
  {
    icon: Globe,
    tool: "Social Media API Tokens",
    what: "Instagram Graph API, X/Twitter API, Pinterest, Threads, TikTok",
    why: "Video Distribution auto-publishes to all platforms. Each platform needs its own API access.",
    effort: "20-30 min total across platforms",
  },
  {
    icon: Database,
    tool: "Meta Ads Manager Access",
    what: "Business Manager invite or ad account ID",
    why: "If we run Facebook/Instagram geo-targeted ads for PR + USVI, we need ad account access to create campaigns.",
    effort: "5 min — Business Manager → Settings → People",
  },
  {
    icon: Key,
    tool: "Domain DNS Access",
    what: "Point reinventedconsulting.com (or subdomain) to Vercel",
    why: "To serve this site on your own domain instead of the Vercel URL. One DNS record change.",
    effort: "5 min at your registrar",
  },
];

const timeline = [
  { phase: "Day 1", title: "You send us the keys", desc: "Stripe, GHL, Calendly links, and Skool invite. Takes 20 minutes total." },
  { phase: "Day 2-3", title: "We wire the backend", desc: "Create Stripe products, configure GHL tags and automation triggers, embed Calendly, connect webhooks." },
  { phase: "Day 4-5", title: "Test all flows end-to-end", desc: "Test purchase of every product in Stripe test mode. Verify GHL tags fire. Confirm email sequences trigger." },
  { phase: "Day 6", title: "Go live", desc: "Switch Stripe to live mode. Point your domain. Remove the demo banner. Start driving traffic." },
];

export default function RequirementsPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm px-4 py-1.5 rounded-full mb-6">
            <Key className="w-3.5 h-3.5" /> For Dub / Reinvented Consulting
          </div>
          <h1 className="font-serif text-5xl font-bold text-white leading-tight mb-6">
            What We Need From You{" "}
            <span className="text-gradient-gold">to Go Live</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-4">
            Everything you see on this demo site is fully built. To connect it to your real business
            and start processing payments, we need access to a few tools you already use.
          </p>
          <p className="text-white/40 text-sm">
            Total time from you: ~30 minutes. We handle everything else.
          </p>
        </div>
      </section>

      {/* ─── MUST HAVE ────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h2 className="font-serif text-2xl font-bold text-[#F8FAFC]">Required (Must-Have)</h2>
          </div>
          <div className="space-y-4">
            {mustHave.map(({ icon: Icon, tool, what, why, effort }) => (
              <div key={tool} className="card-light card-accent">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-[#F8FAFC]">{tool}</h3>
                    <p className="text-sm text-[#94A3B8] mt-1"><strong>What we need:</strong> {what}</p>
                    <p className="text-sm text-[#94A3B8]/70 mt-1"><strong>Why:</strong> {why}</p>
                    <div className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mt-2">
                      <CheckCircle2 className="w-3 h-3" /> Your effort: {effort}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NICE TO HAVE ─────────────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <CheckCircle2 className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-2xl font-bold text-white">Optional (Phase 2+)</h2>
          </div>
          <p className="text-white/60 text-sm mb-6">
            These are needed for the Video Distribution module and custom domain. Not required to launch the core funnel.
          </p>
          <div className="space-y-4">
            {niceToHave.map(({ icon: Icon, tool, what, why, effort }) => (
              <div key={tool} className="card-dark card-accent">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-white">{tool}</h3>
                    <p className="text-sm text-white/80 mt-1"><strong>What we need:</strong> {what}</p>
                    <p className="text-sm text-white/50 mt-1"><strong>Why:</strong> {why}</p>
                    <div className="inline-flex items-center gap-1.5 bg-white/5 text-white/60 text-xs font-medium px-3 py-1 rounded-full mt-2">
                      Your effort: {effort}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container-section max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#F8FAFC] text-center mb-8">From Demo to Live in 6 Days</h2>
          <div className="space-y-4">
            {timeline.map(({ phase, title, desc }) => (
              <div key={phase} className="flex gap-4 card-light card-accent">
                <div className="w-16 shrink-0">
                  <span className="text-gold text-sm font-bold">{phase}</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#F8FAFC] text-sm">{title}</h3>
                  <p className="text-[#94A3B8] text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT IS ALREADY BUILT ────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-8">What Is Already Built (This Demo)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Home page with full product suite",
              "Webinar registration with GHL webhook",
              "Post-registration confirmation + ebook upsell",
              "$49 Ebook product page",
              "$197 Lender Matching Tool page",
              "$297 Credit Audit page + Calendly flow",
              "$1,997-$3,497 Mentorship (3 tiers)",
              "$19/mo Lender Brief subscription",
              "$300-500/mo Video Distribution add-on",
              "Stripe checkout + webhook handler",
              "GHL contact + tag API integration",
              "Mobile-responsive on all devices",
              "FTC income disclaimer in footer",
              "Navy + gold brand color system",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="bg-surface py-14 border-t border-white/[0.08]">
        <div className="container-section text-center">
          <h2 className="font-serif text-3xl font-bold text-[#F8FAFC] mb-4">
            Ready to Turn This Demo Into Your Live Funnel?
          </h2>
          <p className="text-[#94A3B8] mb-6 max-w-lg mx-auto">
            Send us your Stripe and GHL keys and we will have you live in under a week.
            The infrastructure is already built — we just need to plug in your accounts.
          </p>
          <a
            href="mailto:kenneth@reinventedconsulting.com?subject=Ready%20to%20go%20live&body=I%20reviewed%20the%20demo%20site%20and%20I%27m%20ready%20to%20connect%20my%20accounts."
            className="btn-gold text-lg px-8 py-4"
          >
            Let Us Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
