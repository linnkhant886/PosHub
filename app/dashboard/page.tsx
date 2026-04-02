import { DashboardNav } from "@/modules/dashboard/components/DashboardNav"
import { DashboardModules } from "@/modules/dashboard/components/DashboardModules"

export const metadata = {
  title: "Dashboard | POSHub",
}

export default function DashboardPage() {
  return (
    <div className="dark min-h-screen bg-[#0d1526]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,116,144,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_55%)]" />

      <DashboardNav />

      <main className="relative mx-auto max-w-400 px-6 py-10">
        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-white/60">Manage your POS operations from one place</p>
        </div>

        <DashboardModules />
      </main>
    </div>
  )
}
