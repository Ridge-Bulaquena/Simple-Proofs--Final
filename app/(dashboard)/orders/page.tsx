import { Card } from "@/components/ui/Card";
import { useState } from "react";

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <Card className="mb-6 flex flex-col md:flex-row gap-4 items-center p-4">
        <input
          className="bg-glass dark:bg-glassDark border border-white/20 rounded-xl px-4 py-2 w-full md:w-64"
          placeholder="Search orders..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="bg-glass dark:bg-glassDark border border-white/20 rounded-xl px-4 py-2 w-full md:w-48"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </select>
      </Card>
      <Card className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Order #</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic data and filtering logic later */}
            <tr className="border-t border-white/10">
              <td className="py-2 px-4">1001</td>
              <td className="py-2 px-4">Jane Doe</td>
              <td className="py-2 px-4">Pending</td>
              <td className="py-2 px-4">2024-06-01</td>
              <td className="py-2 px-4">
                <button className="bg-accent text-white rounded-lg px-3 py-1 text-sm">View</button>
              </td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="py-2 px-4">1002</td>
              <td className="py-2 px-4">John Smith</td>
              <td className="py-2 px-4">Approved</td>
              <td className="py-2 px-4">2024-06-02</td>
              <td className="py-2 px-4">
                <button className="bg-accent text-white rounded-lg px-3 py-1 text-sm">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
} 