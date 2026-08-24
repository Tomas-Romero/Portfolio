import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Layers, Palette, Handshake, Database, type LucideIcon } from 'lucide-react'

const items: { key: string; icon: LucideIcon }[] = [
  { key: 'fullstack', icon: Layers },
  { key: 'uxui', icon: Palette },
  { key: 'freelance', icon: Handshake },
  { key: 'data', icon: Database },
]

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">04 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('services.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('services.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {items.map(({ key, icon: Icon }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl border-2 border-border bg-surface p-7
                       transition-all duration-300 ease-out hover:border-accent
                       hover:shadow-[0_20px_50px_-12px_var(--color-accent)]"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25
                         blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent-blue/0
                         opacity-0 transition-opacity duration-300 group-hover:from-accent/10 group-hover:to-accent-blue/10 group-hover:opacity-100"
            />

            <motion.div
              whileHover={{ scale: 1.15, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl
                         bg-gradient-to-br from-accent to-accent-blue text-white
                         shadow-[0_0_24px_-8px_var(--color-accent)]"
            >
              <Icon size={22} />
            </motion.div>

            <h3 className="relative text-lg font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
              {t(`services.items.${key}.title`)}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-text-secondary">
              {t(`services.items.${key}.description`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
