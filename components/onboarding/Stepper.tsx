export default function Stepper({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-8 rounded-full transition-all duration-300 ${
            i < currentStep ? "bg-accent" : "bg-glass dark:bg-glassDark"
          }`}
        />
      ))}
    </div>
  );
} 