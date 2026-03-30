import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;        // e.g. "/month"
  originalPrice?: string; // crossed-out price
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;         // e.g. "Most Popular"
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
        "relative rounded-xl p-6 flex flex-col gap-5 border transition-all",
        featured
          ? "bg-navy border-gold shadow-2xl shadow-gold/10 scale-105"
          : "bg-white border-gray-200 shadow-md hover:shadow-lg"
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full">{badge}</span>
        </div>
      )}

      <div>
        <h3 className={cn("font-serif text-lg font-bold", featured ? "text-white" : "text-navy")}>{name}</h3>
        <p className={cn("text-sm mt-1", featured ? "text-white/60" : "text-muted")}>{description}</p>
      </div>

      <div className="flex items-baseline gap-1">
        {originalPrice && (
          <span className="text-sm line-through text-muted mr-1">{originalPrice}</span>
        )}
        <span className={cn("font-bold text-4xl", featured ? "text-gold" : "text-navy")}>{price}</span>
        {period && <span className={cn("text-sm", featured ? "text-white/60" : "text-muted")}>{period}</span>}
      </div>

      <ul className="space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={cn("w-4 h-4 mt-0.5 shrink-0", featured ? "text-gold" : "text-success")} />
            <span className={featured ? "text-white/80" : "text-navy/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          "block text-center font-semibold py-3 rounded-lg transition-all",
          featured
            ? "bg-gold text-navy hover:bg-gold-light"
            : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
        )}
      >
        {cta}
      </Link>
    </div>
  );
}
