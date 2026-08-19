export default function Toast({ tone, children }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-md border px-4 py-3 text-sm ${
        tone === 'error'
          ? 'border-gold/60 bg-gold-soft text-gold'
          : 'border-line bg-surface text-text'
      }`}
    >
      {children}
    </div>
  )
}