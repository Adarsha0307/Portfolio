import { Link } from 'react-router-dom'

import { IconArrowRight } from './icons.jsx'

const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-2',
  secondary: 'border border-gold text-gold hover:bg-gold-soft',
  ghost: 'border border-line text-muted hover:text-text hover:border-line-strong',
}

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  loading = false,
  disabled = false,
  className = '',
  children,
  onClick,
  external = false,
  type = 'button',
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && !loading && <IconArrowRight className="h-4 w-4 shrink-0" />}
      {loading && (
        <span
          className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  )
}
