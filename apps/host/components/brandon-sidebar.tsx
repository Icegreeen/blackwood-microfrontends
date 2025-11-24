"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function BrandonSidebar() {
  const pathname = usePathname()
  const isProjectPage = pathname !== "/" && pathname !== null

  return (
    <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
      <RevealOnView
        as="div"
        intensity="hero"
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
        staggerChildren
      >
        <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
          <DotGridShader />
        </div>
        <div className="flex flex-col h-full">
          <div className="mb-8 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-extrabold tracking-tight">Blackwood</div>
              <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
            </div>
            {isProjectPage && (
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            )}
          </div>

          <AnimatedHeading
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
            lines={["Pioneering space", "exploration technology"]}
          />

          <p className="mt-4 max-w-[42ch] text-lg text-white/70">
            We are a startup that offers innovative solutions for space exploration. We develop products and technologies
            that help humanity explore and colonize new worlds.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="mailto:contact@spacesolutions.dev">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">COMPANIES WE'VE WORKED WITH</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-3 text-[18px] font-black text-white/25 sm:grid-cols-3">
              <li>SpaceX</li>
              <li>Blue Origin</li>
              <li>NASA</li>
              <li>ESA</li>
              <li>Boeing</li>
              <li>Lockheed</li>
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-[#000000] p-8">
            <p className="mb-3 text-xs font-semibold tracking-widest text-white/50 uppercase">Microfrontend Architecture</p>
            <div className="space-y-3 text-xs font-mono text-white/60 leading-relaxed">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-semibold">HOST</span>
                  <span className="text-white/40">→</span>
                  <span>Next15 (Port 3000 • App Router)</span>
                </div>
               
              </div>
              
              <div className="pl-4 space-y-2 border-l-2 border-white/10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-semibold">REMOTE</span>
                    <span className="text-white/40">→</span>
                    <span>Vue 3 + Vite</span>
                  </div>
                  <div className="pl-6 text-[10px] text-white/40">
                    Port 3001 • Expose: ./bootstrap
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-semibold">REMOTE</span>
                    <span className="text-white/40">→</span>
                    <span>Svelte 4 + Vite</span>
                  </div>
                  <div className="pl-6 text-[10px] text-white/40">
                    Port 3002 • Expose: ./bootstrap
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-2 border-t border-white/10">
                <div className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">
                  Module Federation
                </div>
                <div className="space-y-1 text-[10px] text-white/40 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-white/60">•</span>
                    <span>Dynamic loading via remoteEntry.js</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-white/60">•</span>
                    <span>Shared dependencies (singleton)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-white/60">•</span>
                    <span>Runtime integration (no build-time coupling)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-white/60">•</span>
                    <span>Fallback to iframe if MF fails</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-1 border-t border-white/10">
                <div className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Module Federation</span>
                  <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-300">pnpm Workspaces</span>
                  <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">Monorepo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-auto pt-8 border-t border-white/10">
          <div className="text-xs text-white/40">
            <p>© 2025 Blackwood</p>
          </div>
        </footer>
      </RevealOnView>
    </aside>
  )
}

