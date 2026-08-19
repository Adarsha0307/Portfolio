import { Link } from 'react-router-dom'

import Badge from './Badge.jsx'
import { IconExternal } from './icons.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors duration-300 hover:border-gold/60">
      <div className="flex items-center justify-between gap-3">
        <span className="meta text-gold">/{project.slug}</span>
        {project.status && <Badge variant="gold">{project.status}</Badge>}
      </div>

      <h3 className="display-sm mt-4">{project.name}</h3>
      <p className="mt-1 text-sm text-muted">{project.category}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.frontend?.slice(0, 3).map((t) => (
          <span key={t} className="chip pointer-events-none">
            {t}
          </span>
        ))}
        {project.stack.backend?.slice(0, 2).map((t) => (
          <span key={t} className="chip pointer-events-none">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
        {project.links.demo?.href && (
          <a
            href={project.links.demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-2"
          >
            Live Demo <IconExternal className="h-3.5 w-3.5" />
          </a>
        )}
        {project.links.github?.href && (
          <a
            href={project.links.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-text"
          >
            GitHub <IconExternal className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View case study: ${project.name}`}
        className="absolute inset-0 rounded-lg focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span className="sr-only">Case study</span>
      </Link>
    </article>
  )
}