import { useEffect, useRef } from 'react'

const SUPPORT_URL = 'https://buymeacoffee.com/adarshabu'

export default function SupportBlock() {
  const widgetRef = useRef(null)

  useEffect(() => {
    const container = widgetRef.current
    if (!container) return undefined

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
    script.dataset.name = 'bmc-button'
    script.dataset.slug = 'adarshabu'
    script.dataset.color = '#FFDD00'
    script.dataset.emoji = '☕'
    script.dataset.font = 'Cookie'
    script.dataset.text = 'Buy me a coffee'
    script.dataset.outlineColor = '#000000'
    script.dataset.fontColor = '#000000'
    script.dataset.coffeeColor = '#ffffff'
    container.appendChild(script)

    return () => container.replaceChildren()
  }, [])

  return (
    <aside className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6" aria-label="Support this portfolio">
      <div ref={widgetRef} />
      <noscript>
        <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
      </noscript>
    </aside>
  )
}
