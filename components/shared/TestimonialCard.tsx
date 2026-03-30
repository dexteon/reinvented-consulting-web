import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location?: string;
  quote: string;
  result?: string;
  score?: string;
  dark?: boolean; // kept for API compat, ignored
}

export default function TestimonialCard({
  name,
  location,
  quote,
  result,
  score,
}: TestimonialCardProps) {
  return (
    <div className="card-dark card-accent flex flex-col gap-4 hover:border-[#D4AF37]/50 hover:-translate-y-0.5 transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed text-[#94A3B8]">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Result badge */}
      {result && (
        <div className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full w-fit">
          ✓ {result}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/[0.08]">
        <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#F8FAFC]">{name}</p>
          {(location || score) && (
            <p className="text-xs text-[#94A3B8]">
              {[location, score && `Score: ${score}`].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
