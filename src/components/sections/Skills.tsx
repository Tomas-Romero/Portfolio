import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { skills, categories } from '../../data/skills'
import type { Skill } from '../../types'

type FilterType = 'all' | Skill['category']

export function Skills() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredSkills =
    activeFilter === 'all' ? skills : skills.filter((s) => s.category === activeFilter)

  return (
    <section id="skills" className="py-24 sm:py-32">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">02 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('skills.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('skills.subtitle')}</p>
      </motion.div>

      {/* Tabs de filtro */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
          >
            {activeFilter === cat.id && (
              <motion.span
                layoutId="skill-filter-pill"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                className="absolute inset-0 rounded-full bg-accent"
              />
            )}
            <span
              className={`relative z-10 ${
                activeFilter === cat.id ? 'text-background' : 'text-text-secondary hover:text-accent'
              }`}
            >
              {t(cat.labelKey)}
            </span>
          </button>
        ))}
      </div>

      {/* Grid de skills */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = skill.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-border
                 bg-surface p-5 transition-colors duration-300 hover:border-accent"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? -6 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="text-3xl text-text-secondary transition-colors duration-300 group-hover:text-accent"
        >
          <Icon />
        </motion.div>

        <span className="text-sm font-medium text-text-primary">{skill.name}</span>

        {/* Barra de proficiency */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: hovered ? `${skill.level}%` : '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>

      {/* Glow decorativo en hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-16 -translate-x-1/2
                   rounded-full bg-accent/30 blur-2xl"
      />
    </motion.div>
  )
}