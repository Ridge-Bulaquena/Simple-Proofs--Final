import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Run Sheet", href: "/dashboard/runsheet" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-56 bg-glass dark:bg-glassDark backdrop-blur-xl border-r border-white/20 p-6 flex flex-col gap-4 min-h-screen">
      <div className="text-2xl font-bold mb-8">Simpler Proofs</div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-xl px-4 py-2 transition font-medium ${
              pathname === item.href
                ? "bg-accent text-white shadow-glass"
                : "hover:bg-accent/20 text-slate-800 dark:text-slate-200"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 