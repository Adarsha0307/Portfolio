function CoffeeIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h10v5.5A4.5 4.5 0 0 1 11.5 18h-1A4.5 4.5 0 0 1 6 13.5V8Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 4.5c0 1 1 1 1 2" />
      <path d="M12 4.5c0 1 1 1 1 2" />
      <path d="M5 21h14" />
    </svg>
  )
}

export default function SupportBlock() {
  return (
    <section aria-labelledby="support-title" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-surface p-7 sm:p-10">
          <div className="glow-gold pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-gold-soft text-gold">
              <CoffeeIcon className="h-8 w-8" />
            </div>

            <div>
              <p className="meta-sm text-gold">Support the work</p>
              <h2 id="support-title" className="display-sm mt-2">Buy me a coffee.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                If something I build, share, or document helps you, you can support the next experiment and keep the ideas moving.
              </p>
            </div>

            <a
              href="https://buymeacoffee.com/adarshabu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-gold px-6 font-medium text-ink transition-colors duration-200 hover:bg-gold-2 focus-visible:outline-2 focus-visible:outline-gold"
            >
              Support my work
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
