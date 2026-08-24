import { useEffect, useMemo, useRef } from 'react'
import { Particles, ParticlesProvider, type ParticlesPluginRegistrar } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, ISourceOptions } from '@tsparticles/engine'
import { useTheme } from '../../hooks/usetheme'

const initEngine: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine)
}

const PALETTE = {
  dark: { particles: ['#8b5cf6', '#38bdf8'], link: '#8b5cf6' },
  light: { particles: ['#5b21b6', '#1e3a8a'], link: '#5b21b6' },
}

function ParticlesLayer({ containerRef }: { containerRef: React.MutableRefObject<Container | null> }) {
  const { theme } = useTheme()

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 40, density: { enable: true, width: 1200, height: 800 } },
        color: { value: PALETTE[theme].particles },
        shape: { type: 'circle' },
        opacity: { value: 0.45 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 160,
          color: PALETTE[theme].link,
          opacity: theme === 'light' ? 0.28 : 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.4,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'repulse' },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.5 } },
          repulse: { distance: 140, duration: 0.4 },
        },
      },
    }),
    [theme]
  )

  const handleLoaded = async (container?: Container) => {
    containerRef.current = container ?? null
    // tsparticles measures the canvas before applying its own 100%/100% CSS sizing,
    // so the internal render buffer starts stuck at the browser's 300x150 default.
    // Forcing a resize once layout has settled fixes the buffer to match the real size.
    await container?.canvas.windowResize()
  }

  return <Particles id="tsparticles-bg" options={options} particlesLoaded={handleLoaded} className="h-full w-full" />
}

export function ParticlesBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<Container | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const ro = new ResizeObserver(() => {
      containerRef.current?.canvas.windowResize()
    })
    ro.observe(wrapper)

    return () => ro.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="fixed inset-0 -z-10 overflow-hidden">
      <ParticlesProvider init={initEngine}>
        <ParticlesLayer containerRef={containerRef} />
      </ParticlesProvider>
    </div>
  )
}
