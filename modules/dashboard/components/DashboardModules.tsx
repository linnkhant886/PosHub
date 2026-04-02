"use client"

import {
  Monitor,
  Receipt,
  ImageIcon,
  Tag,
  UtensilsCrossed,
  Users,
  UserCircle,
  Building2,
  TrendingUp,
  ShoppingBag,
  Zap,
  ArrowUpRight,
  Clock,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

/* ─── Quick Stats ─────────────────────────────────────────────────────── */

const stats = [
  { label: "Today's Revenue", value: "$4,280", change: "+12%", icon: TrendingUp, color: "text-emerald-300", iconBg: "bg-emerald-500/20", border: "border-emerald-500/20" },
  { label: "Total Orders",    value: "138",    change: "+8%",  icon: ShoppingBag, color: "text-cyan-300",    iconBg: "bg-cyan-500/20",    border: "border-cyan-500/20"    },
  { label: "Active Tables",   value: "12",     change: "3 waiting", icon: Zap,   color: "text-violet-300",  iconBg: "bg-violet-500/20",  border: "border-violet-500/20"  },
  { label: "Avg. Service Time", value: "18 min", change: "-2 min", icon: Clock, color: "text-amber-300",   iconBg: "bg-amber-500/20",   border: "border-amber-500/20"   },
]

function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mb-10">
      {stats.map((s) => {
        const Icon = s.icon
        return (
          <div
            key={s.label}
            className={cn(
              "rounded-2xl border p-4 flex items-center gap-4",
              "bg-white/[0.06] backdrop-blur-sm",
              s.border
            )}
          >
            <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", s.iconBg)}>
              <Icon className={cn("h-5 w-5", s.color)} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/55 truncate">{s.label}</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl font-bold text-white leading-none">{s.value}</span>
                <span className={cn("text-[11px] font-semibold", s.color)}>{s.change}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ─── Featured Card (Sale Relations) ─────────────────────────────────── */

function FeaturedCard({
  label,
  description,
  icon: Icon,
  href,
  accentColor,
  iconColor,
  bgGradient,
  borderColor,
}: {
  label: string
  description: string
  icon: React.ElementType
  href: string
  accentColor: string
  iconColor: string
  bgGradient: string
  borderColor: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(href)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 text-left w-full",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        bgGradient,
        borderColor
      )}
    >
      {/* Top-right glow */}
      <div className={cn("pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-70", accentColor)} />

      <div className="relative z-10 flex flex-col min-h-32 justify-between gap-4">
        {/* Icon */}
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm")}>
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-[15px] font-semibold text-white">{label}</p>
            <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </div>
          <p className="text-xs text-white/55 mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    </button>
  )
}

/* ─── Small Card (Management / User Info) ─────────────────────────────── */

function SmallCard({
  label,
  description,
  icon: Icon,
  href,
  iconColor,
  iconBg,
  borderColor,
}: {
  label: string
  description: string
  icon: React.ElementType
  href: string
  iconColor: string
  iconBg: string
  borderColor: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(href)}
      className={cn(
        "group flex items-center gap-4 rounded-2xl border p-5 text-left w-full",
        "bg-white/[0.05] hover:bg-white/[0.09]",
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg",
        borderColor
      )}
    >
      <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", iconBg)}>
        <Icon className={cn("h-5 w-5 transition-transform group-hover:scale-110 duration-200", iconColor)} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{label}</p>
        <p className="text-xs text-white/45 mt-0.5 truncate">{description}</p>
      </div>
      <div className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors", )}>
        <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-white/80 transition-colors" />
      </div>
    </button>
  )
}

/* ─── Section Label ───────────────────────────────────────────────────── */

function SectionLabel({ title, dot }: { title: string; dot: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={cn("h-2 w-2 rounded-full shadow-lg", dot)} />
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">{title}</span>
      <div className="flex-1 h-px bg-white/8" />
    </div>
  )
}

/* ─── Main ────────────────────────────────────────────────────────────── */

export function DashboardModules() {
  return (
    <div className="space-y-10">
      <StatsBar />

      {/* Sale Relations */}
      <div>
        <SectionLabel title="Sale Relations" dot="bg-cyan-400 shadow-cyan-400/60" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeaturedCard
            label="Sale Screen"
            description="Process orders & manage live transactions"
            icon={Monitor}
            href="/dashboard/sale-screen"
            bgGradient="bg-[linear-gradient(145deg,rgba(8,145,178,0.22),rgba(6,182,212,0.10),rgba(15,30,50,0.70))]"
            borderColor="border-cyan-500/25"
            accentColor="bg-cyan-400"
            iconColor="text-cyan-300"
          />
          <FeaturedCard
            label="Sale Voucher"
            description="Generate & print order receipts"
            icon={Receipt}
            href="/dashboard/sale-voucher"
            bgGradient="bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.10),rgba(15,20,50,0.70))]"
            borderColor="border-blue-500/25"
            accentColor="bg-blue-400"
            iconColor="text-blue-300"
          />
          <FeaturedCard
            label="Banner"
            description="Manage promotional display banners"
            icon={ImageIcon}
            href="/dashboard/banner"
            bgGradient="bg-[linear-gradient(145deg,rgba(14,165,233,0.22),rgba(56,189,248,0.10),rgba(10,20,45,0.70))]"
            borderColor="border-sky-500/25"
            accentColor="bg-sky-400"
            iconColor="text-sky-300"
          />
        </div>
      </div>

      {/* Management */}
      <div>
        <SectionLabel title="Management" dot="bg-violet-400 shadow-violet-400/60" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SmallCard
            label="Category"
            description="Organise your menu categories"
            icon={Tag}
            href="/dashboard/category"
            iconColor="text-violet-300"
            iconBg="bg-violet-500/20"
            borderColor="border-violet-500/20"
          />
          <SmallCard
            label="Menu"
            description="Add, edit & manage menu items"
            icon={UtensilsCrossed}
            href="/dashboard/menu"
            iconColor="text-purple-300"
            iconBg="bg-purple-500/20"
            borderColor="border-purple-500/20"
          />
          <SmallCard
            label="Customer"
            description="View & manage customer records"
            icon={Users}
            href="/dashboard/customer"
            iconColor="text-fuchsia-300"
            iconBg="bg-fuchsia-500/20"
            borderColor="border-fuchsia-500/20"
          />
        </div>
      </div>

      {/* User Information */}
      <div>
        <SectionLabel title="User Information" dot="bg-emerald-400 shadow-emerald-400/60" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SmallCard
            label="Profile Information"
            description="Update your account details"
            icon={UserCircle}
            href="/dashboard/profile"
            iconColor="text-emerald-300"
            iconBg="bg-emerald-500/20"
            borderColor="border-emerald-500/20"
          />
          <SmallCard
            label="Brand Information"
            description="Configure your restaurant branding"
            icon={Building2}
            href="/dashboard/brand"
            iconColor="text-teal-300"
            iconBg="bg-teal-500/20"
            borderColor="border-teal-500/20"
          />
        </div>
      </div>
    </div>
  )
}
