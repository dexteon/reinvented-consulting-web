import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60 border-t border-white/10">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl font-bold text-white">
              Reinvented<span className="text-gold">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Helping entrepreneurs build the business credit that gets them funded.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/reinventedconsulting" target="_blank" rel="noopener noreferrer"
                className="hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@reinventedconsulting" target="_blank" rel="noopener noreferrer"
                className="hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/reinventedconsulting" target="_blank" rel="noopener noreferrer"
                className="hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["/webinar", "Free Webinar"],
                ["/ebook", "Credit Playbook ($49)"],
                ["/lender-tool", "Lender Tool ($197)"],
                ["/credit-audit", "Credit Audit ($297)"],
                ["/mentorship", "Mentorship Program"],
                ["/lender-brief", "Lender Brief ($19/mo)"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">For Businesses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/video-distribution" className="hover:text-gold transition-colors">
                  Video Distribution Add-On
                </Link>
              </li>
              <li>
                <a href="https://www.skool.com/reinvented-mentorship-9193" target="_blank" rel="noopener noreferrer"
                  className="hover:text-gold transition-colors">
                  Free Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-gold transition-colors">Income Disclaimer</Link></li>
              <li>
                <a href="mailto:kenneth@reinventedconsulting.com" className="hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
          <p>
            <strong className="text-white/60">Income Disclaimer:</strong> Results mentioned on this site are not typical.
            Individual results will vary based on effort, experience, and market conditions. Reinvented Consulting does not
            guarantee any specific outcome. Any income figures shown are illustrative examples, not guarantees of earnings.
            Please see our full{" "}
            <Link href="/disclaimer" className="underline hover:text-gold">income disclaimer</Link>.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Reinvented Consulting LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
