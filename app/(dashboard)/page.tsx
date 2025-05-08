import { Card } from "@/components/ui/Card";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-lg font-semibold">Orders</div>
          <div className="text-2xl font-bold mt-2">--</div>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Proofs Sent</div>
          <div className="text-2xl font-bold mt-2">--</div>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Approvals</div>
          <div className="text-2xl font-bold mt-2">--</div>
        </Card>
      </div>
    </div>
  );
} 