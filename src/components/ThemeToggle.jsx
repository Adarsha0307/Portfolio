import { IconMoon, IconSun } from './icons.jsx'

export default function ThemeToggle({ theme, onToggle, variant = 'default' }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-gold ${variant === 'pill' ? '' : 'border border-line bg-surface/90 backdrop-blur hover:border-gold/50'}`}
    >
      {isDark ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  )
}
