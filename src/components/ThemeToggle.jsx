import { IconMoon, IconSun } from './icons.jsx'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors duration-200 hover:text-gold hover:border-gold/50"
    >
      {isDark ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  )
}