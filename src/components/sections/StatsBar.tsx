import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const stats = [
  { target: 3, prefix: '+', labelKey: 'stats.experience' },
  { target: 2, prefix: '', labelKey: 'stats.projects' },
  { target: 9, prefix: '+', labelKey: 'stats.training' },
]

function Counter({ target, prefix }: { target: number; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}
      {value}
    </span>
  )
}

export function StatsBar() {
  const { t } = useTranslation()

  return (
    <section className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-evenly gap-x-6 gap-y-8 rounded-2xl border
                   border-border bg-gradient-to-br from-accent/10 via-surface to-accent-blue/10
                   px-6 py-8 sm:px-10"
      >
        {stats.map((stat) => (
          <div key={stat.labelKey} className="flex flex-col items-center text-center">
            <span className="bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-3xl
                              font-bold text-transparent sm:text-4xl">
              <Counter target={stat.target} prefix={stat.prefix} />
            </span>
            <span className="mt-1 text-xs text-text-secondary sm:text-sm">{t(stat.labelKey)}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
