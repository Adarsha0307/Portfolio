import { useEffect, useRef } from 'react'

// Adds .is-visible when the element enters the viewport (once).
// Disabled entirely under prefers-reduced-motion.
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            io.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}