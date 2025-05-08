import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <Card className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simpler Proofs</h1>
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-8">
          The sleek, intuitive proofing and approval system for custom product sellers.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button className="bg-white text-accent border border-accent hover:bg-accent hover:text-white">See Pricing</Button>
        </div>
      </Card>
    </section>
  );
} 