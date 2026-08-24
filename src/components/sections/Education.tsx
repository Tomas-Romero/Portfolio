import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { formalEducation, additionalTraining } from '../../data/education'
import { useActiveOnScroll } from '../../hooks/useActiveOnScroll'

export function Education() {
  const { t } = useTranslation()
  const { activeId, setActiveId, registerRef } = useActiveOnScroll(
    formalEducation.map((item) => item.id)
  )
  const [activeAdditional, setActiveAdditional] = useState<string | null>(null)

  return (
    <section id="education" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">06 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('education.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('education.subtitle')}</p>
      </motion.div>

      {/* Educación formal — timeline con línea y nodos animados, resaltado por scroll/click */}
      <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-wide text-text-secondary">
        {t('education.formalTitle')}
      </h3>

      <div className="relative mb-16 max-w-2xl">
        <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-border" />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-5 top-2 w-px bg-gradient-to-b from-accent to-accent-blue"
        />

        <ul className="space-y-8">
          {formalEducation.map((item, index) => {
            const Icon = item.icon
            const isDegree = item.type === 'degree'
            const isActive = activeId === item.id

            return (
              <motion.li
                key={item.id}
                ref={registerRef(item.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                onClick={() => setActiveId(item.id)}
                className="relative flex cursor-pointer gap-5"
              >
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300
                              ${isDegree || isActive
                                ? 'border-accent bg-accent/10 text-accent'
                                : 'border-border bg-surface text-text-secondary'}`}
                >
                  <Icon size={18} />
                </motion.div>

                <div
                  className={`flex-1 rounded-xl border p-5 transition-all duration-300
                              ${isActive
                                ? 'border-accent bg-accent/10 shadow-[0_0_28px_-10px_var(--color-accent)]'
                                : isDegree
                                  ? 'border-accent/40 bg-accent/5'
                                  : 'border-border bg-surface hover:border-accent/40'}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-text-primary">{t(item.titleKey)}</h3>
                    <span className="font-mono text-xs text-accent">{t(item.periodKey)}</span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">{t(item.institutionKey)}</p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      {/* Formación adicional — aparece en cascada, se resalta al hacer click */}
      <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-wide text-text-secondary">
        {t('education.additionalTitle')}
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {additionalTraining.map((item, index) => {
          const Icon = item.icon
          const isActive = activeAdditional === item.id

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              onClick={() => setActiveAdditional((current) => (current === item.id ? null : item.id))}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all duration-300
                          ${isActive
                            ? 'border-accent bg-accent/10 shadow-[0_0_24px_-10px_var(--color-accent)]'
                            : 'border-border bg-surface hover:border-accent/50'}`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300
                            ${isActive ? 'bg-accent text-white' : 'bg-accent/10 text-accent'}`}
              >
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-text-primary">{t(item.titleKey)}</h4>
                <p className="mt-0.5 text-xs text-text-secondary">{t(item.institutionKey)}</p>
                <p className="mt-1 font-mono text-[11px] text-accent">{t(item.periodKey)}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
