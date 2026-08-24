import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/usetheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <button
      onClick={toggleTheme}
      aria-label={t('nav.toggleTheme')}
      className="relative flex h-9 w-9 items-center justify-center rounded-full
                 border border-border dark:border-border text-text-secondary
                 hover:border-accent hover:text-accent transition-colors duration-300"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </button>
  )
}