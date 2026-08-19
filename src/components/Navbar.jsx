import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { site } from '../data/site.js'
import { IconClose, IconMenu } from './icons.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import Button from './Button.jsx'

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link to="/" className="font-display text-lg font-semibold tracking-tight" onClick={close}>
          <span className="text-gold">A</span>B.U<span className="text-gold">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.slice(1).map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link" end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button to="/contact" size="md">
            Let's Talk
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-gold"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-bg px-6 pb-8 md:hidden">
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
          <div className="mt-auto">
            <Button to="/contact" size="lg" className="w-full" onClick={close}>
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}