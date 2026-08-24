import { useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowDown, FileDown, Code2 } from 'lucide-react'
import { AnimatedBackground } from '../ui/AnimatedBackground'
import { socialLinks } from '../../data/social'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const { t, i18n } = useTranslation()
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const cvUrl = i18n.language.startsWith('en')
    ? '/assets/cv-tomas-romero-en.pdf'
    : '/assets/cv-tomas-romero.pdf'

  const handlePlay = () => {
    const video = videoRef.current
    if (video) video.play().catch(() => {})
  }

  const handlePause = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <AnimatedBackground />

      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        {/* Columna de texto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="mb-3 font-mono text-sm text-accent"
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-text-primary
                       sm:text-5xl lg:text-6xl"
          >
            Tomas{' '}
            <span className="bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
              Romero
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-lg font-medium text-text-secondary sm:text-xl"
          >
            {t('hero.role')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-semibold
                         text-white shadow-[0_0_24px_-8px_var(--color-accent)]
                         transition-transform duration-300 hover:scale-105"
            >
              {t('hero.cta.projects')}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold
                         text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t('hero.cta.contact')}
            </a>

            <a
              href={cvUrl}
              download
              className="flex items-center gap-2 text-sm font-medium text-text-secondary
                         transition-colors duration-300 hover:text-accent"
            >
              <FileDown size={16} />
              {t('hero.cta.cv')}
            </a>
          </motion.div>

          {/* Redes sociales */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full
                           border border-border text-text-secondary
                           transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Columna de imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Forma decorativa detrás */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem]
                             bg-gradient-to-br from-accent/30 to-accent-blue/30" />

            <div
              onMouseEnter={handlePlay}
              onMouseLeave={handlePause}
              onFocus={handlePlay}
              onBlur={handlePause}
              tabIndex={0}
              className="h-72 w-64 overflow-hidden rounded-[2.5rem] border-2 border-border
                         bg-surface sm:h-80 sm:w-72 lg:h-96 lg:w-80"
            >
              {videoError ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3
                                 bg-gradient-to-br from-accent/20 via-surface to-accent-blue/10">
                  <span className="bg-gradient-to-br from-accent to-accent-blue bg-clip-text
                                    font-mono text-5xl font-bold text-transparent">
                    TR
                  </span>
                  <Code2 size={22} className="text-text-secondary" />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src="/assets/profile-video.mp4"
                  poster="/assets/profile-poster.jpg"
                  onError={() => setVideoError(true)}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Tomás Agustín Romero"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#about"
        aria-label={t('hero.scroll')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2
                   text-text-secondary sm:flex"
      >
        <span className="font-mono text-xs">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}