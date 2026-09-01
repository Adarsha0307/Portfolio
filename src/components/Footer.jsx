import { Link } from 'react-router-dom'

import { site } from '../data/site.js'
import { profile } from '../data/profile.js'
import { IconGitHub, IconLinkedIn, IconMail } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-32 sm:px-6 md:pb-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              <span className="text-gold">A</span>darsha B U
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {profile.headline} Based in Karnataka, India — remote-friendly and building in public.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="meta text-muted">Explore</p>
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit text-sm text-muted transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="meta text-muted">Connect</p>
            <a
              href={profile.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              <IconLinkedIn className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              <IconGitHub className="h-4 w-4" /> GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              <IconMail className="h-4 w-4" /> {profile.email}
            </a>
            <Link to="/resume" className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-gold">
              View Resume
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
          </p>
          <p className="text-xs text-muted">Last updated {site.lastUpdated}</p>
        </div>

      </div>
    </footer>
  )
}
