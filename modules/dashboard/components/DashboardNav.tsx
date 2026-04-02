"use client"

import { LayoutGrid, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function DashboardNav() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d1526]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
            <LayoutGrid className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-white">
            POS<span className="text-primary">Hub</span>
          </span>
        </div>

        {/* User + Logout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary/30 text-sm font-semibold text-primary">
              A
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-white leading-none">Admin</p>
              <p className="text-xs text-white/40 mt-0.5">admin@gmail.com</p>
            </div>
          </div>

          <div className="h-6 w-px bg-white/10" />

          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/login")}
            className="gap-2 text-white/60 hover:text-white hover:bg-white/5 text-xs"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
