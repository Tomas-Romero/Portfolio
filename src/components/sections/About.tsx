import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPin, Briefcase, GraduationCap, Languages } from 'lucide-react'

const factIcons = {
  location: MapPin,
  experience: Briefcase,
  education: GraduationCap,
  languages: Languages,
} as const

const factKeys = ['location', 'experience', 'education', 'languages'] as const

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">02 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('about.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('about.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {t('about.paragraph')}
        </motion.p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {factKeys.map((key, index) => {
            const Icon = factIcons[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-5
                           transition-all duration-300 ease-out hover:border-accent hover:bg-accent/5
                           hover:shadow-[0_8px_30px_-12px_var(--color-accent)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent
                                 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-secondary transition-colors duration-300 group-hover:text-accent">
                    {t(`about.facts.${key}.label`)}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    {t(`about.facts.${key}.value`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
