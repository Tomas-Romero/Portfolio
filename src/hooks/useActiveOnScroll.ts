import { useEffect, useRef, useState } from 'react'

export function useActiveOnScroll(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null)
  const nodesRef = useRef(new Map<string, HTMLElement>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-item-id')
            if (id) setActiveId(id)
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
    )

    nodesRef.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      el.setAttribute('data-item-id', id)
      nodesRef.current.set(id, el)
    }
  }

  return { activeId, setActiveId, registerRef }
}
