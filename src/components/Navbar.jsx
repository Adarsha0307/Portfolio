import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { site } from '../data/site.js'
import { IconClose, IconMenu } from './icons.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 md:justify-center"
      >
        <Link to="/" className="pointer-events-auto font-display text-lg font-semibold tracking-tight md:hidden" onClick={close}>
          <span className="text-gold">A</span>B.U<span className="text-gold">.</span>
        </Link>

        <div className={`pointer-events-auto hidden items-center gap-1 rounded-full border border-line bg-surface/90 p-1.5 backdrop-blur-xl transition-shadow duration-300 md:flex ${scrolled ? 'shadow-[0_14px_45px_rgba(0,0,0,0.24)]' : 'shadow-[0_10px_35px_rgba(0,0,0,0.16)]'}`}>
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `inline-flex h-11 items-center rounded-full px-4 font-sans text-sm font-medium transition-colors duration-200 ${isActive ? 'bg-surface-2 text-text' : 'text-muted hover:bg-surface-2/70 hover:text-text'}`}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <span aria-hidden="true" className="mx-1 h-6 w-px bg-line" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="pill" />
        </div>

        <div className="pointer-events-auto flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/90 text-muted backdrop-blur transition-colors hover:border-gold/50 hover:text-gold"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col bg-bg px-6 pb-8 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-line">
            {site.nav.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className="nav-link !normal-case !font-sans !tracking-normal !text-[1.0625rem] flex items-center justify-between py-4"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
