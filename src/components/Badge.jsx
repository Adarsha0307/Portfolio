export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'border-line text-muted',
    gold: 'border-gold/50 text-gold',
    subtle: 'border-line bg-surface text-muted',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 meta-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}