import Stepper from "@/components/onboarding/Stepper";
import StoreInfo from "@/app/(dashboard)/onboarding/steps/StoreInfo";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function OnboardingPage() {
  // For now, just render the first step
  return (
    <div className="max-w-xl mx-auto py-12">
      <Stepper currentStep={1} totalSteps={7} />
      <div className="mt-8">
        <StoreInfo />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <CheckCircle className="text-accent" />
    </div>
  );
} 