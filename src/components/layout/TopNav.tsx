import { motion } from 'framer-motion'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LangToggle } from '../ui/LangToggle'

export function TopNav() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-16
                 bg-background/80 dark:bg-background/80 backdrop-blur-md
                 border-b border-border"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-wide text-text-primary
                     hover:text-accent transition-colors"
        >
          T. Romero<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}