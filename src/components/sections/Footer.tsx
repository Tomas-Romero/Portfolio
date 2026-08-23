import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-text-secondary sm:flex-row">
        <p>© {year} Tomás Agustín Romero — {t('footer.rights')}</p>
        <p className="font-mono text-xs">
          {t('footer.madeWith')} <span className="text-accent">Tomás Romero</span>
        </p>
      </div>
    </footer>
  )
}