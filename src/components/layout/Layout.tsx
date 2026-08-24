import type { ReactNode } from 'react'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'
import { ParticlesBackground } from '../ui/ParticlesBackground'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-screen bg-background text-text-primary transition-colors duration-300">
      <ParticlesBackground />
      <TopNav />
      <SideNav />
      <main className="mx-auto max-w-6xl px-6 pt-16 lg:pl-24">
        {children}
      </main>
    </div>
  )
}
