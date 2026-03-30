import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  originalPrice?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  originalPrice,
  description,
  features,
  cta,
  ctaHref,
  featured = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 flex flex-col gap-5 border transition-all duration-300",
        featured
          ? "bg-white/5 backdrop-blur-lg border-gold shadow-2xl shadow-gold/10 scale-105"
          : "bg-surface/80 border-white/[0.08] hover:border-[#D4AF37]/50 hover:-translate-y-1"
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#F9D976] to-[#D4AF37] text-black text-xs font-bold px-4 py-1 rounded-full">{badge}</span>
        </div>
      )}

      <div>
        <h3 className="font-serif text-lg font-bold text-[#F8FAFC]">{name}</h3>
        <p className="text-sm mt-1 text-[#94A3B8]">{description}</p>
      </div>

      <div className="flex items-baseline gap-1">
        {originalPrice && (
          <span className="text-sm line-through text-[#94A3B8] mr-1">{originalPrice}</span>
        )}
        <span className={cn("font-bold text-4xl", featured ? "text-gold" : "text-[#F8FAFC]")}>{price}</span>
        {period && <span className="text-sm text-[#94A3B8]">{period}</span>}
      </div>

      <ul className="space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
            <span className="text-[#94A3B8]">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          "block text-center font-bold py-3 rounded-xl transition-all duration-300",
          featured
            ? "bg-gradient-to-r from-[#F9D976] to-[#D4AF37] text-black hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            : "border-2 border-gold text-gold hover:bg-gradient-to-r hover:from-[#F9D976] hover:to-[#D4AF37] hover:text-black hover:-translate-y-1"
        )}
      >
        {cta}
      </Link>
    </div>
  );
}
