"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, X as XIcon, ArrowRight, Loader2, CreditCard, Briefcase, Plane, Gift, Calendar, Clock } from "lucide-react";
import { webinarRegistrationSchema, type WebinarRegistrationInput } from "@/lib/validations";
import { useRouter } from "next/navigation";

const pillars = [
  {
    icon: CreditCard,
    title: "Personal Credit Mastery",
    desc: "Learn how to clean, rebuild, and structure your credit reports to maximize funding. Learn different dispute strategies and flows with both consumer law and Metro 2 compliance.",
  },
  {
    icon: Briefcase,
    title: "Business Credit Mastery",
    desc: "Detailed breakdown on how to build your business report from scratch with or without net 30s. Learn the best banks to build relationships with for business products while understanding max exposure limits.",
  },
  {
    icon: Plane,
    title: "Travel Hacking Methods",
    desc: "Develop strategies to learn how to travel for free without holding all the high tier credit cards. Obtain elite status without spending thousands, while maximizing points for the highest point value(s).",
  },
  {
    icon: Gift,
    title: "Bonus: Additional Income Modules",
    desc: "Get access to Real Estate Investing, Business Acquisition, Content Creation, Marketing Strategies, SEO Strategies, Manufactured Spending, Crypto Investing, Vending Machines, Box Truck Investing, and much more.",
  },
];

const option1 = [
  "Struggle to navigate the complex landscape of report structuring, making it difficult to secure funding opportunities.",
  "Attempt to generate passive income without a clear understanding of how to strategically leverage acquired capital, leading to potential financial setbacks.",
  "Rely solely on personal funds without taking advantage of credit card cash back, points, and miles, resulting in missed opportunities to save money on travel expenses.",
];

const option2 = [
  "Discover how to properly structure your reports to access $250K+ in funding",
  "Learn how to leverage acquired capital to generate passive income from multiple streams",
  "Learn how to leverage credit card cash back, points, and miles to travel for free",
];

export default function WebinarPage() {
  const router = useRouter();
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

  const CtaButton = ({ className = "" }: { className?: string }) => (
    <a href="#register" className={`inline-flex flex-col items-center bg-gradient-to-r from-[#F9D976] to-[#D4AF37] text-black font-bold px-10 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 shadow-lg shadow-gold/20 ${className}`}>
      <span className="text-lg">YES, I WANT TO ATTEND</span>
      <span className="text-xs font-semibold opacity-70 tracking-wider">SECURE MY SEAT</span>
    </a>
  );

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="section-dark relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image src="/images/rc/dub-bg.png" alt="" fill className="object-cover object-top opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/90 to-[#0B0F19]" />
        </div>

        <div className="container-section relative z-10 text-center max-w-3xl mx-auto">
          <Image src="/images/rc/logo.png" alt="Reinvented Consulting" width={160} height={56} className="mx-auto mb-6" />

          <p className="text-sm uppercase tracking-widest text-[#94A3B8] mb-2">
            Learn My 3 Step <span className="text-gold font-semibold">Credit Card Stacking</span> Methods To Secure 0% Capital
          </p>

          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            FREE Live Masterclass
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Learn My Exact Blueprint I Used To Obtain Over{" "}
            <span className="text-gradient-gold">$1 Million In Funding</span>{" "}
            In Less Than 24 Months!!
          </h1>

          <p className="text-[#94A3B8] text-lg mb-4">
            Make The Banks Compete To Lend You Money with <span className="text-gold font-semibold">Dub Washington</span>
          </p>

          <div className="flex items-center justify-center gap-4 text-[#94A3B8] mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">Thursday, April 2nd, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">8 PM EST</span>
            </div>
          </div>

          <CtaButton />
        </div>
      </section>

      {/* ─── VIDEO ─────────────────────────────────────────── */}
      <section className="section-dark py-16 relative">
        <div className="divider-fade absolute top-0 left-0 right-0" />
        <div className="container-section max-w-3xl">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gold/20" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1160390059?title=0&byline=0&portrait=0&autopause=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Reinvented Consulting — Free Masterclass Preview"
            />
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN ─────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container-section">
          <div className="text-center mb-4">
            <h2 className="font-serif text-4xl font-bold text-[#F8FAFC] mb-3">
              What You&apos;ll Learn
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              Ready to learn how to rebuild and structure your credit report to maximize funding your business?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-light group hover:border-gold/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#F8FAFC] mb-2">{title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ─── WEBINAR STARTING SOON ─────────────────────────── */}
      <section className="bg-gradient-to-r from-[#F9D976] to-[#D4AF37] py-6">
        <div className="container-section text-center">
          <p className="text-black font-bold text-lg">
            Webinar Starting Soon — <span className="font-serif">Thursday, April 2nd 8 PM EST</span>
          </p>
        </div>
      </section>

      {/* ─── MEET DUB ──────────────────────────────────────── */}
      <section className="section-dark py-20">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-t from-gold/20 via-transparent to-transparent rounded-3xl blur-2xl" />
                <Image
                  src="/images/rc/dub-fullbody.png"
                  alt="Dub Washington"
                  width={350}
                  height={525}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                Meet <span className="text-gradient-gold">Dub Washington</span>
              </h2>
              <div className="space-y-4 text-[#94A3B8] leading-relaxed text-sm">
                <p>
                  Yo! I&apos;m Dub Washington, a passionate 37-year-old entrepreneur, devoted husband, and proud father of three amazing kings. My life&apos;s mission revolves around turning dreams into reality, both for myself and others around me!
                </p>
                <p>
                  Dub&apos;s entrepreneurial journey took a pivotal turn during the pandemic when he discovered the transformative power of financial literacy. Realizing the importance of understanding money, he immersed himself in learning the power of personal credit and business credit along with investment strategies. The result? A game-changing self-funding initiative that allowed him to secure over <span className="text-gold font-semibold">$260,000 within a remarkable 90 days</span> and slightly over <span className="text-gold font-semibold">2 MILLION in less than 24 months!</span>
                </p>
                <p>
                  Eager to share the wealth of knowledge acquired, he now serves as an advocate for financial freedom. Through mentoring and strategic strategies, he empowers aspiring entrepreneurs to take control of their financial destinies, guiding them towards sustainable success.
                </p>
                <p>
                  As a sought-after speaker and influencer, I leverage my experiences to inspire positive change in the lives of others. I have helped over <span className="text-gold font-semibold">1,300 entrepreneurs and business owners</span> to leverage their credit to generate income!
                </p>
                <p className="text-gold font-serif text-lg font-bold italic">
                  &quot;EVERYBODY EATS&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPTION 1 vs OPTION 2 ─────────────────────────── */}
      <section className="section-light py-20">
        <div className="container-section max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1 — Trial & Error */}
            <div className="rounded-xl border-2 border-red-500/30 bg-red-500/5 p-6">
              <div className="text-center mb-4">
                <span className="text-xs uppercase tracking-widest text-red-400 font-bold">Option #1</span>
                <h3 className="font-serif text-xl font-bold text-[#F8FAFC] mt-1">Figuring It Out Through Trial and Error</h3>
                <p className="text-[#94A3B8] text-xs italic">Doing Everything On Your Own</p>
              </div>
              <ul className="space-y-4">
                {option1.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <XIcon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Option 2 — Proven Strategies */}
            <div className="rounded-xl border-2 border-gold bg-white/5 p-6 ring-1 ring-gold/30 shadow-lg">
              <div className="text-center mb-4">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">Option #2</span>
                <h3 className="font-serif text-xl font-bold text-[#F8FAFC] mt-1">Learning From Proven Strategies</h3>
                <p className="text-[#94A3B8] text-xs italic">Using Proven Strategies To Grow Your Business</p>
              </div>
              <ul className="space-y-4">
                {option2.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#F8FAFC]/80">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ─── SUCCESS HAS RECEIPTS ──────────────────────────── */}
      <section className="section-dark py-16">
        <div className="container-section text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-3">
            <span className="text-gradient-gold">Success Has Receipts!</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-10">
            Check out the limits Dub has been able to obtain using the methods he will teach in the Masterclass!
          </p>
          {/* Placeholder grid for credit card limit screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {["$50,000", "$35,000", "$25,000", "$40,000", "$30,000", "$45,000", "$20,000", "$60,000"].map((amount, i) => (
              <div key={i} className="bg-surface border border-gold/20 rounded-xl p-4 text-center">
                <CreditCard className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-gold font-bold text-lg">{amount}</p>
                <p className="text-white/40 text-xs">Credit Limit</p>
              </div>
            ))}
          </div>
          <CtaButton />
        </div>
      </section>

      {/* ─── REGISTRATION FORM ─────────────────────────────── */}
      <section id="register" className="section-light py-20">
        <div className="container-section max-w-xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-[#F8FAFC] mb-3">
              My Final Question For You...
            </h2>
            <p className="font-serif text-3xl text-gold font-bold">Are You Ready?</p>
            <p className="text-[#94A3B8] mt-3">
              Enroll in my Free Masterclass today to unlock the full potential of your venture. Success is within reach, and it begins with knowledge.
            </p>
            <p className="text-[#F8FAFC] font-semibold mt-2">
              Secure your seat now! <span className="text-gold">100 spots available.</span>
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/[0.08]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot */}
              <input {...register("website")} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="Full Name..."
                  className="input-premium"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address..."
                  className="input-premium"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number..."
                  className="input-premium"
                />
              </div>

              {serverError && (
                <p className="text-red-400 text-sm bg-red-500/10 rounded-lg p-3">{serverError}</p>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#F9D976] to-[#D4AF37] text-black font-bold text-lg py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 shadow-lg shadow-gold/20 flex flex-col items-center">
                {isSubmitting ? (
                  <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Registering...</span>
                ) : (
                  <>
                    <span>YES, I WANT TO ATTEND</span>
                    <span className="text-xs font-semibold opacity-70 tracking-wider">SECURE MY SEAT</span>
                  </>
                )}
              </button>

              <p className="text-xs text-[#94A3B8] text-center">
                We respect your privacy &amp; information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ────────────────────────────────────── */}
      <section className="bg-[#080C15] py-8 border-t border-white/[0.08]">
        <div className="container-section max-w-3xl text-center">
          <p className="text-white/30 text-[10px] leading-relaxed">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. I am NOT a FINANCIAL ADVISOR nor am I a lawyer! Any content provided is solely based on my own experience as well as my research. Any content provided on this channel by myself or anyone affiliated are simply OUR VIEWS and are to be used for EDUCATIONAL and ENTERTAINMENT PURPOSES ONLY. There are no guarantees to any success from the information provided, and any success from the content provided will be based on many variables and will vary for each individual.
          </p>
        </div>
      </section>
    </>
  );
}
