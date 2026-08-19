import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}