import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as const

export function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 1500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      aria-hidden={!loading}
      style={{ pointerEvents: loading ? 'auto' : 'none' }}
      className="fixed inset-0 z-[100] overflow-hidden"
    >
      <AnimatePresence>
        {loading && (
          <div className="absolute inset-0">
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-y-0 left-0 w-1/2 bg-background"
            />
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-y-0 right-0 w-1/2 bg-background"
            />

            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-5"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl
                           bg-gradient-to-br from-accent to-accent-blue
                           font-mono text-3xl font-bold text-white
                           shadow-[0_0_50px_-8px_var(--color-accent)]"
              >
                TR
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-mono text-xs tracking-[0.3em] text-text-secondary"
              >
                ROMERO
              </motion.p>

              <div className="h-0.5 w-32 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full w-full bg-gradient-to-r from-accent to-accent-blue"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
