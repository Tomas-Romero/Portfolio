import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Briefcase } from 'lucide-react'
import { experience } from '../../data/experience'
import { useActiveOnScroll } from '../../hooks/useActiveOnScroll'

export function Experience() {
  const { t } = useTranslation()
  const { activeId, setActiveId, registerRef } = useActiveOnScroll(experience.map((e) => e.id))

  return (
    <section id="experience" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">03 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('experience.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('experience.subtitle')}</p>
      </motion.div>

      <div className="relative max-w-3xl">
        <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-border" />

        <ul className="space-y-8">
          {experience.map((item, index) => {
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
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300
                              ${item.current || isActive
                                ? 'border-accent bg-accent/10 text-accent'
                                : 'border-border bg-surface text-text-secondary'}`}
                >
                  <Briefcase size={18} />
                </motion.div>

                <div
                  className={`flex-1 rounded-xl border p-5 transition-all duration-300
                              ${isActive
                                ? 'border-accent bg-accent/10 shadow-[0_0_28px_-10px_var(--color-accent)]'
                                : item.current
                                  ? 'border-accent/40 bg-accent/5'
                                  : 'border-border bg-surface hover:border-accent/40'}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-text-primary">{t(item.titleKey)}</h3>
                    <span className="flex items-center gap-2 font-mono text-xs text-accent">
                      {t(item.periodKey)}
                      {item.current && (
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                          {t('experience.current')}
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">{t(item.companyKey)}</p>

                  <ul className="mt-3 space-y-1.5">
                    {item.bulletKeys.map((bulletKey) => (
                      <li key={bulletKey} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {t(bulletKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
