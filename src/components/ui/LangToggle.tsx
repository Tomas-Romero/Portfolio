import { useTranslation } from 'react-i18next'

export function LangToggle() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
  }

  return (
    <button
      onClick={toggleLanguage}
      aria-label={t('nav.toggleLanguage')}
      className="flex h-9 w-9 items-center justify-center rounded-full
                 border border-border text-xs font-mono font-semibold text-text-secondary
                 hover:border-accent hover:text-accent transition-colors duration-300"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  )
}