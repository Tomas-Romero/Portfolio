import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'
import type { Project } from '../../types'

export function Projects() {
  const { t } = useTranslation()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">03 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('projects.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('projects.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isSelected={selectedId === project.id}
            onSelect={() =>
              setSelectedId((prev) => (prev === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  isSelected: boolean
  onSelect: () => void
}

function ProjectCard({ project, index, isSelected, onSelect }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-2xl border bg-surface
                  cursor-pointer transition-colors duration-500
                  ${project.featured ? 'md:col-span-2' : ''}
                  ${isSelected ? 'border-accent' : 'border-border hover:border-accent'}`}
    >
      {/* Imagen con efecto grayscale -> color */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out
                      grayscale group-hover:grayscale-0 group-hover:scale-105
                      ${isSelected ? 'grayscale-0 scale-105' : ''}`}
        />

        {/* Overlay oscuro que se desvanece en hover/selección */}
        <div
          className={`absolute inset-0 bg-background/50 transition-opacity duration-500
                      group-hover:opacity-0 ${isSelected ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Links flotantes, aparecen en hover/selección */}
        <div
          className={`absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300
                      group-hover:opacity-100 ${isSelected ? 'opacity-100' : ''}`}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={t('projects.viewCode')}
              className="flex h-9 w-9 items-center justify-center rounded-full
                         bg-background/80 text-text-primary backdrop-blur-sm
                         transition-colors hover:bg-accent hover:text-background"
            >
              <FaGithub size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={t('projects.viewLive')}
              className="flex h-9 w-9 items-center justify-center rounded-full
                         bg-background/80 text-text-primary backdrop-blur-sm
                         transition-colors hover:bg-accent hover:text-background"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
          {t(project.titleKey)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {t(project.descriptionKey)}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}