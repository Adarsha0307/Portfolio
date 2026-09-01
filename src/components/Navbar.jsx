import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { site } from '../data/site.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `inline-flex h-11 shrink-0 items-center justify-center rounded-full px-3 font-sans text-xs font-medium transition-colors duration-200 sm:px-4 sm:text-sm ${
      isActive ? 'bg-surface-2 text-text' : 'text-muted hover:bg-surface-2/70 hover:text-text'
    }`

  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-3 z-50 md:bottom-auto md:top-0">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[calc(100%-1rem)] items-center justify-center md:h-20 md:max-w-6xl md:justify-between md:px-6"
      >
        <Link to="/" className="pointer-events-auto hidden font-display text-lg font-semibold tracking-tight md:block">
          <span className="text-gold">A</span>darsha B U
        </Link>
        <div
          className={`pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-line bg-surface/90 p-1.5 shadow-[0_14px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-shadow duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            scrolled ? 'md:shadow-[0_14px_45px_rgba(0,0,0,0.24)]' : 'md:shadow-[0_10px_35px_rgba(0,0,0,0.16)]'
          }`}
        >
          {site.nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <span aria-hidden="true" className="mx-1 h-6 w-px shrink-0 bg-line" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="pill" />
        </div>
      </nav>
    </header>
  )
}
