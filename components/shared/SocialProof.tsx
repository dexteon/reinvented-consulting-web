import { Users, Mail, Instagram, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "9,100+", label: "Community Members" },
  { icon: Instagram, value: "38.7K", label: "Instagram Followers" },
  { icon: Mail, value: "8,500+", label: "Email Subscribers" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
];

export default function SocialProof({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`${dark ? "bg-navy-card border-y border-white/10" : "bg-gold/5 border-y border-gold/20"} py-5`}>
      <div className="container-section">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className={`w-4 h-4 ${dark ? "text-gold" : "text-navy"}`} />
              <span className={`font-bold text-lg ${dark ? "text-white" : "text-navy"}`}>{value}</span>
              <span className={`text-sm ${dark ? "text-white/60" : "text-muted"}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
