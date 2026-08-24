export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center rounded-xl
                 bg-gradient-to-br from-accent to-accent-blue font-mono font-bold text-white
                 shadow-[0_0_18px_-4px_var(--color-accent)]"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      TR
    </span>
  )
}
