import { motion } from 'framer-motion'

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 137.5) % 100}%`,
  size: 2 + ((i * 37) % 4),
  duration: 10 + ((i * 13) % 10),
  delay: (i * 0.7) % 6,
  color: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent-blue)',
}))

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grilla de puntos sutil */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Blob violeta */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full
                   bg-accent/25 blur-[100px]"
      />

      {/* Blob azul */}
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-0 h-[24rem] w-[24rem] rounded-full
                   bg-accent-blue/20 blur-[110px]"
      />

      {/* Blob violeta-azul, más chico y rápido */}
      <motion.div
        animate={{ x: [0, 25, -35, 0], y: [0, -25, 15, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full
                   bg-gradient-to-br from-accent/20 to-accent-blue/20 blur-[90px]"
      />

      {/* Partículas flotantes */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-10%', opacity: [0, 0.7, 0.7, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 8px 1px ${p.color}`,
          }}
        />
      ))}

      {/* Fade hacia el fondo en los bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}
