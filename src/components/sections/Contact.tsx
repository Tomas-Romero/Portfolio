import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { socialLinks } from '../../data/social'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-4 max-w-2xl"
      >
        <p className="mb-2 font-mono text-sm text-accent">05 —</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mt-4 text-text-secondary">{t('contact.subtitle')}</p>
      </motion.div>

      {/* Badge de disponibilidad */}
      <div className="mb-10 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="text-sm font-medium text-text-secondary">
          {t('contact.availability')}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        {/* Redes sociales / links directos */}
        <div className="flex flex-col gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border
                         bg-surface p-4 transition-colors duration-300 hover:border-accent"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full
                              bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon size={18} />
              </div>
              <span className="font-medium text-text-primary">{label}</span>
            </a>
          ))}
        </div>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-text-secondary">
              {t('contact.form.name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.form.namePlaceholder')}
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm
                         text-text-primary outline-none transition-colors duration-300
                         focus:border-accent placeholder:text-text-secondary/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-text-secondary">
              {t('contact.form.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.form.emailPlaceholder')}
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm
                         text-text-primary outline-none transition-colors duration-300
                         focus:border-accent placeholder:text-text-secondary/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-text-secondary">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.messagePlaceholder')}
              className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm
                         text-text-primary outline-none transition-colors duration-300
                         focus:border-accent placeholder:text-text-secondary/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3
                       text-sm font-semibold text-background transition-transform duration-300
                       hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === 'sending' ? (
              t('contact.form.sending')
            ) : (
              <>
                {t('contact.form.submit')}
                <Send size={16} />
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-accent"
            >
              <CheckCircle2 size={16} /> {t('contact.form.success')}
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle size={16} /> {t('contact.form.error')}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}