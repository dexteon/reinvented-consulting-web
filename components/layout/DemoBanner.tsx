import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="sticky top-0 z-[60] bg-ca-navy border-b border-ca-electric/30 text-center text-sm py-2.5 px-4 shadow-lg shadow-ca-electric/5">
      <span className="text-ca-electric font-bold text-xs tracking-widest uppercase mr-2 bg-ca-electric/10 px-2 py-0.5 rounded">DEMO</span>
      <span className="text-white/70">Built by </span>
      <span className="font-bold text-ca-electric">CyberAutomations</span>
      <span className="text-white/70"> — this is what your optimized funnel could look like. </span>
      <Link href="/requirements" className="underline font-semibold text-ca-mint hover:text-ca-electric transition-colors mr-2">
        What we need to go live
      </Link>
      <span className="text-white/30">|</span>
      <a href="https://calendly.com/cyberautomations" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-ca-mint hover:text-ca-electric transition-colors ml-2">
        Book an AI integration call →
      </a>
    </div>
  );
}
