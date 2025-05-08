import { Card } from "@/components/ui/Card";

export default function StoreInfo() {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Store Information</h2>
      <div className="flex flex-col gap-4">
        {/* Replace with actual Input component later */}
        <input className="bg-glass dark:bg-glassDark border border-white/20 rounded-xl px-4 py-2" placeholder="Store Name" />
        <input className="bg-glass dark:bg-glassDark border border-white/20 rounded-xl px-4 py-2" placeholder="Contact Email" />
      </div>
    </Card>
  );
} 