import { Users, Mail, Instagram, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "9,100+", label: "Community Members" },
  { icon: Instagram, value: "38.7K", label: "Instagram Followers" },
  { icon: Mail, value: "8,500+", label: "Email Subscribers" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
];

export default function SocialProof({ dark = false }: { dark?: boolean }) {
  return (
    <div className="bg-surface border-y border-white/[0.08] py-5">
      <div className="container-section">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold" />
              <span className="font-bold text-lg text-[#F8FAFC]">{value}</span>
              <span className="text-sm text-[#94A3B8]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
