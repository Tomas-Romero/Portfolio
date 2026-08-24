import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LangToggle } from '../ui/LangToggle'
import { Logo } from '../ui/Logo'
import { navSections } from '../../data/navigation'

export function TopNav() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50
                 bg-background/80 dark:bg-background/80 backdrop-blur-md
                 border-b border-border"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label="Tomás Romero"
          className="transition-transform duration-300 hover:scale-105"
        >
          <Logo size={38} />
        </a>

        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={t('nav.toggleMenu')}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border
                       text-text-secondary transition-colors duration-300 hover:border-accent hover:text-accent
                       lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col px-6 py-2">
              {navSections.map(({ id, icon: Icon, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-3 text-sm font-medium text-text-secondary
                               transition-colors duration-300 hover:text-accent"
                  >
                    <Icon size={16} />
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}