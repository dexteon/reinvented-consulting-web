import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location?: string;
  quote: string;
  result?: string;       // e.g. "Approved for $75K"
  score?: string;        // e.g. "580 → 720"
  dark?: boolean;
}

export default function TestimonialCard({
  name,
  location,
  quote,
  result,
  score,
  dark = false,
}: TestimonialCardProps) {
  return (
    <div className={`${dark ? "card-dark" : "card-light"} card-accent flex flex-col gap-4`}>
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className={`text-sm leading-relaxed ${dark ? "text-white/80" : "text-navy/80"}`}>
        &ldquo;{quote}&rdquo;
      </p>

      {/* Result badge */}
      {result && (
        <div className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full w-fit">
          ✓ {result}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/10">
        <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
          {name[0]}
        </div>
        <div>
          <p className={`text-sm font-semibold ${dark ? "text-white" : "text-navy"}`}>{name}</p>
          {(location || score) && (
            <p className="text-xs text-muted">
              {[location, score && `Score: ${score}`].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
