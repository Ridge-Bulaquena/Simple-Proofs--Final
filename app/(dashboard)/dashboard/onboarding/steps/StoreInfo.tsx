import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function StoreInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Store Information</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Tell us about your store to get started
        </p>
      </div>
      <div className="space-y-4">
        <Input label="Store Name" placeholder="Enter your store name" />
        <Input label="Store Address" placeholder="Enter your store address" />
        <Input label="Phone Number" placeholder="Enter your phone number" />
      </div>
      <Button>Continue</Button>
    </div>
  );
} 