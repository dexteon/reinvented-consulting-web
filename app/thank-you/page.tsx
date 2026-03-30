import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "You Are Registered! | Reinvented Consulting",
};

const calLinks = [
  { label: "Add to Google Calendar", href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reinvented+Consulting+Webinar", icon: "G" },
  { label: "Add to Apple Calendar", href: "/webinar.ics", icon: "" },
  { label: "Add to Outlook", href: "/webinar.ics", icon: "O" },
];

export default function ThankYouPage() {
  return (
    <section className="section-dark min-h-[80vh] flex items-center py-20">
      <div className="container-section max-w-3xl mx-auto">
        {/* Confirmation */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-success/20 border border-success/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-4">
            You Are Registered!
          </h1>
          <p className="text-white/70 text-lg">
            Check your email for confirmation and webinar details. See you soon.
          </p>
        </div>

        {/* Add to calendar */}
        <div className="card-dark mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-lg font-bold text-white">Add to Your Calendar</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {calLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white/80 hover:border-gold hover:text-gold text-sm px-4 py-2 rounded-lg transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* While you wait — soft upsell */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-dark card-accent">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-gold" />
              <p className="text-gold text-sm font-semibold">Want a head start?</p>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Get the Ebook Before the Webinar</h3>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              The Credit Playbook covers the same foundation Dub will teach in the webinar —
              going in prepared means you will ask better questions and get more value.
            </p>
            <Link href="/ebook" className="btn-gold text-sm">
              Get the Ebook — $49 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="card-dark card-accent">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <p className="text-gold text-sm font-semibold">Free resource</p>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Join 9,100+ in the Community</h3>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              The Skool community is free and full of entrepreneurs who have been through the same journey.
              Read their wins, ask questions, and get oriented before the webinar.
            </p>
            <a
              href="https://skool.com/reinventedconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              Join Free Community <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
