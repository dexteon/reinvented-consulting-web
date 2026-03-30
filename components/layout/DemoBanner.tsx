import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="bg-gold text-navy text-center text-sm font-semibold py-2 px-4">
      <span className="opacity-80">This is a demo site built by </span>
      <span className="font-bold">CyberAutomations</span>
      <span className="opacity-80"> showing what your optimized funnel could look like. </span>
      <Link href="/requirements" className="underline font-bold hover:opacity-80 transition-opacity">
        See what we need from you to go live →
      </Link>
    </div>
  );
}
