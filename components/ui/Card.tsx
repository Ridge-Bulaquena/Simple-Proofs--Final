import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "bg-glass dark:bg-glassDark backdrop-blur-xl rounded-2xl shadow-glass border border-white/30 p-6",
        className
      )}
    >
      {children}
    </div>
  );
} 