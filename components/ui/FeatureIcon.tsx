import { LucideIcon } from "lucide-react";

export function FeatureIcon({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <div className={`bg-glass dark:bg-glassDark p-3 rounded-xl shadow-glass ${className}`}>
      <Icon size={28} className="text-accent" />
    </div>
  );
} 