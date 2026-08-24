import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Logo } from '../ui/Logo'
import { socialLinks } from '../../data/social'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-border py-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="flex flex-col items-center gap-6">
        <a href="#home" aria-label="Tomás Romero" className="transition-transform duration-300 hover:scale-105">
          <Logo size={34} />
        </a>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border
                         text-text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-center text-sm text-text-secondary">
          <p>© {year} Tomás Agustín Romero — {t('footer.rights')}</p>
          <p className="font-mono text-xs">
            {t('footer.madeWith')} <span className="text-accent">Tomás Romero</span>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
