import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { education } from '../../data/education'

export function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">04 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('education.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('education.subtitle')}</p>
      </motion.div>

      <div className="relative max-w-2xl">
        {/* Línea vertical del timeline */}
        <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-border" />

        <ul className="space-y-8">
          {education.map((item, index) => {
            const Icon = item.icon
            const isDegree = item.type === 'degree'

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="relative flex gap-5 pl-0"
              >
                {/* Ícono / nodo del timeline */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2
                              ${isDegree
                                ? 'border-accent bg-accent/10 text-accent'
                                : 'border-border bg-surface text-text-secondary'}`}
                >
                  <Icon size={18} />
                </div>

                {/* Contenido */}
                <div
                  className={`flex-1 rounded-xl border p-5 transition-colors duration-300
                              ${isDegree
                                ? 'border-accent/40 bg-accent/5'
                                : 'border-border bg-surface hover:border-accent/40'}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-text-primary">
                      {t(item.titleKey)}
                    </h3>
                    <span className="font-mono text-xs text-accent">
                      {t(item.periodKey)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    {t(item.institutionKey)}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}