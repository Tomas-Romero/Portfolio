import type { ReactNode } from 'react'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
      <TopNav />
      <SideNav />
      <main className="mx-auto max-w-6xl px-6 pt-16 lg:pl-24">
        {children}
      </main>
    </div>
  )
}