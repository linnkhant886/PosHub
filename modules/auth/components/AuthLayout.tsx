"use client"

import { LayoutGrid } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  
}

export function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className="dark min-h-screen bg-[#050708]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(14,116,144,0.12),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(14,116,144,0.08),transparent_38%),#050708]">
        {/* Unified Background Layers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#071521] via-[#050b12] to-[#050708]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 left-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

        {/* Left Panel - Branding */}
        <div className="hidden lg:flex lg:w-[56%] relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-10 xl:p-12 w-full">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                <LayoutGrid className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                POS<span className="text-primary">Hub</span>
              </span>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl xl:text-5xl font-bold text-foreground leading-tight text-balance">
                Streamline your business with{" "}
                <span className="text-primary">intelligent POS</span> solutions
              </h1>
              <p className="text-lg text-muted-foreground max-w-md text-pretty">
                Manage inventory, track sales, and grow your business with our 
                comprehensive point-of-sale system designed for modern retail.
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <p className="text-sm text-muted-foreground">
              Trusted by thousands of businesses worldwide
            </p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="relative flex flex-1 lg:w-[44%] flex-col justify-center px-6 py-10 lg:px-10 bg-transparent">
          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <LayoutGrid className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                POS<span className="text-primary">Hub</span>
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {title}
              </h2>
              <p className="mt-2 text-muted-foreground text-[15px]">
                {subtitle}
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl border border-cyan-400/15 bg-[linear-gradient(145deg,rgba(8,22,34,0.62),rgba(5,14,22,0.48))] p-7 md:p-8 shadow-2xl shadow-black/35 backdrop-blur">
              {children}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
