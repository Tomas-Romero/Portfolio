import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2, AlertCircle, Copy, Check, RotateCcw } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { contactMethods } from '../../data/social'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [copiedValue, setCopiedValue] = useState<string | null>(null)

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedValue(value)
      setTimeout(() => setCopiedValue((current) => (current === value ? null : current)), 1800)
    } catch {
      // Clipboard access can be denied by the browser; the mailto/href link still works as a fallback.
    }
  }

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
        <p className="mb-2 font-mono text-sm text-accent">07 —</p>
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
          {contactMethods.map(({ icon: Icon, href, label, value, copyable }) => (
            <div
              key={label}
              className="group flex items-center gap-4 rounded-xl border border-border
                         bg-surface p-4 transition-colors duration-300 hover:border-accent"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 flex-1 items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                                bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <span className="min-w-0">
                  <span className="block text-xs font-mono text-text-secondary">{label}</span>
                  <span className="block truncate font-medium text-text-primary">{value}</span>
                </span>
              </a>

              {copyable && (
                <button
                  type="button"
                  onClick={() => handleCopy(value)}
                  aria-label={t('contact.copy')}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border
                             text-text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {copiedValue === value ? (
                    <Check size={15} className="text-accent" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {status === 'success' || status === 'error' ? (
              <motion.div
                key="feedback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex min-h-[22rem] flex-col items-center justify-center gap-4 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  className={`relative flex h-16 w-16 items-center justify-center rounded-full text-white
                              ${status === 'success'
                                ? 'bg-gradient-to-br from-accent to-accent-blue shadow-[0_0_40px_-8px_var(--color-accent)]'
                                : 'bg-red-500/90 shadow-[0_0_40px_-8px_rgba(239,68,68,0.6)]'}`}
                >
                  {status === 'success' && (
                    <motion.span
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.6 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                  )}
                  {status === 'success' ? <CheckCircle2 size={30} /> : <AlertCircle size={30} />}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {status === 'success' ? t('contact.form.successTitle') : t('contact.form.errorTitle')}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-text-secondary">
                    {status === 'success' ? t('contact.form.success') : t('contact.form.error')}
                  </p>
                </motion.div>

                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  onClick={() => setStatus('idle')}
                  className="mt-2 flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm
                             font-medium text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <RotateCcw size={14} />
                  {status === 'success' ? t('contact.form.sendAnother') : t('contact.form.retry')}
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="fields"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
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
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r
                             from-accent to-accent-blue px-6 py-3 text-sm font-semibold text-white
                             shadow-[0_0_24px_-8px_var(--color-accent)] transition-transform duration-300
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
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}