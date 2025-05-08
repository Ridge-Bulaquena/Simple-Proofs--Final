import Stepper from "@/components/onboarding/Stepper";
import StoreInfo from "@/app/(dashboard)/onboarding/steps/StoreInfo";

export default function OnboardingPage() {
  // For now, just render the first step
  return (
    <div className="max-w-xl mx-auto py-12">
      <Stepper currentStep={1} totalSteps={7} />
      <div className="mt-8">
        <StoreInfo />
      </div>
    </div>
  );
} 