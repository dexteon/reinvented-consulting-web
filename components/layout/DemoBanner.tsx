import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="sticky top-0 z-[60] bg-gold text-navy text-center text-sm font-semibold py-2 px-4 shadow-md">
      <span className="opacity-80">This is a demo site built by </span>
      <span className="font-bold">CyberAutomations</span>
      <span className="opacity-80"> showing what your optimized funnel could look like. </span>
      <Link href="/requirements" className="underline font-bold hover:opacity-80 transition-opacity mr-2">
        See what we need to go live
      </Link>
      <span className="opacity-60">|</span>
      <a href="https://calendly.com/cyberautomations" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80 transition-opacity ml-2">
        Book an AI integration call →
      </a>
    </div>
  );
}
