import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-2 rounded-xl bg-glass dark:bg-glassDark border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50",
          className
        )}
        {...props}
      />
    </div>
  );
} 