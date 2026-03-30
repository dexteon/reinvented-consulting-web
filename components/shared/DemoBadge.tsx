export default function DemoBadge({ label = "Demo Page" }: { label?: string }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-ca-navy border border-ca-electric/40 text-ca-electric text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-ca-electric/10">
      <span className="w-2 h-2 rounded-full bg-ca-electric animate-pulse-slow" />
      {label} — Built by CyberAutomations
    </div>
  );
}
