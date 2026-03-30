import { ShieldCheck, RotateCcw, Lock, CreditCard } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Secure Checkout" },
  { icon: RotateCcw, label: "30-Day Guarantee" },
  { icon: Lock, label: "SSL Encrypted" },
  { icon: CreditCard, label: "Stripe Payments" },
];

export default function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${dark ? "text-gold" : "text-success"}`} />
          <span className={`text-xs font-medium ${dark ? "text-white/60" : "text-muted"}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
