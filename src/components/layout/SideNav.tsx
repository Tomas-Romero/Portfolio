import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Home, User, Code2, FolderKanban, GraduationCap, Mail } from 'lucide-react'

const sections = [
  { id: 'home', icon: Home, key: 'nav.home' },
  { id: 'about', icon: User, key: 'nav.about' },
  { id: 'skills', icon: Code2, key: 'nav.skills' },
  { id: 'projects', icon: FolderKanban, key: 'nav.projects' },
  { id: 'education', icon: GraduationCap, key: 'nav.education' },
  { id: 'contact', icon: Mail, key: 'nav.contact' },
]

export function SideNav() {
  const { t } = useTranslation()
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
    >
      <ul className="flex flex-col gap-5 rounded-full border border-border
                      bg-surface/60 px-3 py-5 backdrop-blur-md">
        {sections.map(({ id, icon: Icon, key }) => (
          <li key={id} className="group relative">
            <a
              href={`#${id}`}
              aria-label={t(key)}
              className={`flex h-9 w-9 items-center justify-center rounded-full
                          transition-colors duration-300
                          ${active === id
                            ? 'bg-accent text-background'
                            : 'text-text-secondary hover:text-accent'}`}
            >
              <Icon size={16} />
            </a>

            {/* Tooltip */}
            <span
              className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2
                         whitespace-nowrap rounded-md bg-surface border border-border
                         px-2 py-1 text-xs font-mono text-text-secondary opacity-0
                         transition-opacity duration-200 group-hover:opacity-100"
            >
              {t(key)}
            </span>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}