export const site = {
  name: 'Adarsha B U',
  // Production domain from environment variable. Falls back to current origin.
  // Set VITE_SITE_URL in .env (e.g., https://your-domain.vercel.app)
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  lastUpdated: 'August 2026',
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Journey', to: '/journey' },
    { label: 'Contact', to: '/contact' },
    { label: 'Resume', to: '/resume' },
  ],
}

export const meta = {
  default: {
    title: 'Adarsha B U | Full-Stack Developer | AI & Cybersecurity',
    description:
      'Portfolio of Adarsha B U — full-stack developer building intelligent, secure software. AI-powered applications, cybersecurity-conscious engineering, and modern web development.',
  },
}