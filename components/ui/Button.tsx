import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function Button({
  children,
  icon: Icon,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: LucideIcon }) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 px-5 py-2 rounded-xl bg-accent text-white font-semibold shadow-glass hover:bg-accent-light transition",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
} 