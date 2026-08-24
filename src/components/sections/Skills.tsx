import { useState, type CSSProperties } from 'react'
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
        <p className="mb-2 font-mono text-sm text-accent">04 —</p>
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
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-blue"
              />
            )}
            <span
              className={`relative z-10 ${
                activeFilter === cat.id ? 'text-white' : 'text-text-secondary hover:text-accent'
              }`}
            >
              {t(cat.labelKey)}
            </span>
          </button>
        ))}
      </div>

      {/* Grid de skills */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
  const Icon = skill.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
      style={{ '--skill-color': skill.color } as CSSProperties}
      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl
                 border border-border bg-surface px-4 py-6 text-center
                 transition-colors duration-300 hover:border-[var(--skill-color)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${skill.color}26, transparent 70%)`,
        }}
      />

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${skill.color}1f`, color: skill.color }}
      >
        <Icon />
      </div>

      <span className="relative text-sm font-medium text-text-primary">{skill.name}</span>

      {/* Barra de proficiency */}
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  )
}
