export default function Toast({ tone, children, floating = false }) {
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      aria-live="polite"
      className={`rounded-lg border px-4 py-3 text-sm shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur ${
        floating ? 'fixed right-4 top-24 z-[60] w-[min(24rem,calc(100vw-2rem))] sm:right-6' : ''
      } ${
        tone === 'error'
          ? 'border-gold/60 bg-gold-soft text-gold'
          : 'border-line bg-surface text-text'
      }`}
    >
      {children}
    </div>
  )
}
