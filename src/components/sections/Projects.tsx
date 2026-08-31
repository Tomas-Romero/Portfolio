import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, FolderKanban } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'
import { skills } from '../../data/skills'
import type { Project } from '../../types'

function getTagMeta(tag: string) {
  return skills.find((s) => s.name.toLowerCase() === tag.toLowerCase()) ?? null
}

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">01 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('projects.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('projects.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation()
  const [imgError, setImgError] = useState(false)
  const hasLinks = Boolean(project.githubUrl || project.liveUrl)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface
                 transition-colors duration-300 hover:border-accent/50"
    >
      {/* Imagen / captura del proyecto */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border">
        {imgError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/15 via-surface to-accent-blue/10">
            <FolderKanban size={32} className="text-accent" />
            <span className="font-mono text-sm font-medium text-text-primary">
              {t(project.titleKey)}
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={t(project.titleKey)}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{t(project.titleKey)}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {t(project.descriptionKey)}
          </p>
        </div>

        {project.demoCredentials && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-border
                           bg-background/60 px-3 py-2 font-mono text-xs text-text-secondary">
            <span className="font-semibold text-accent">{t('projects.demoLogin')}:</span>
            <span className="select-all">{project.demoCredentials.user}</span>
            <span className="text-border">/</span>
            <span className="select-all">{project.demoCredentials.password}</span>
          </div>
        )}

        {/* Tecnologías utilizadas, con color de marca */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const meta = getTagMeta(tag)
            const Icon = meta?.icon
            const color = meta?.color ?? 'var(--color-accent)'
            return (
              <span
                key={tag}
                className="flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs text-text-secondary"
                style={{ borderColor: `${color}40` }}
              >
                {Icon && (
                  <Icon size={12} style={{ color }} />
                )}
                {tag}
              </span>
            )
          })}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-3 pt-2">
          {hasLinks ? (
            <>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border
                             py-2.5 text-sm font-medium text-text-primary transition-colors duration-300
                             hover:border-accent hover:text-accent"
                >
                  <FaGithub size={15} />
                  {t('projects.viewCode')}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r
                             from-accent to-accent-blue py-2.5 text-sm font-semibold text-white
                             transition-transform duration-300 hover:scale-[1.02]"
                >
                  <ExternalLink size={15} />
                  {t('projects.viewLive')}
                </a>
              )}
            </>
          ) : (
            <p className="text-sm italic text-text-secondary">{t('projects.private')}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
