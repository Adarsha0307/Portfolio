import { Link, useParams } from 'react-router-dom'

import { getProject } from '../data/projects.js'
import Reveal from '../components/Reveal.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import Screenshot from '../components/Screenshot.jsx'
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx'
import CTABlock from '../components/CTABlock.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { IconExternal, IconCheck } from '../components/icons.jsx'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  useDocumentMeta(
    project
      ? { title: project.seo.title, description: project.seo.description }
      : { title: 'Project not found — Adarsha B U' },
  )

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-32 text-center sm:px-6">
        <p className="meta text-gold">404</p>
        <h1 className="display-md mt-4">This project doesn't exist.</h1>
        <p className="mt-4 text-muted">It may have been renamed or moved.</p>
        <div className="mt-8">
          <Button to="/projects">All projects</Button>
        </div>
      </section>
    )
  }

  const hasDemo = project.links.demo?.href

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 md:pt-36">
          <Reveal>
            <nav aria-label="Breadcrumb" className="meta-sm text-muted">
              <Link to="/projects" className="transition-colors hover:text-gold">
                /projects
              </Link>
              <span className="text-gold"> /{project.slug}</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.status && <Badge variant="gold">{project.status}</Badge>}
              <Badge>{project.category}</Badge>
            </div>
            <h1 className="display-lg mt-5">{project.name}</h1>
            <p className="lede mt-5 max-w-2xl text-muted">{project.tagline}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {hasDemo && (
                <Button href={project.links.demo.href} size="lg" external>
                  {project.links.demo.label}
                </Button>
              )}
              {project.links.github?.href && (
                <Button href={project.links.github.href} variant="ghost" size="lg" icon={false} external>
                  {project.links.github.label}
                </Button>
              )}
              {project.links.source?.private && (
                <span className="inline-flex h-12 items-center rounded-md border border-line px-6 text-sm text-muted">
                  {project.links.source.label}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshot */}
      <section className="border-b border-line" aria-label={`${project.name} preview`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <Screenshot
              slug={project.slug}
              name={project.name}
              caption={`${project.name} — actual product screenshot pending capture.`}
            />
          </Reveal>
        </div>
      </section>

      {/* Problem / Why / Approach */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="meta text-gold">The problem</p>
              <p className="mt-4 text-lg leading-relaxed">{project.problem}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="meta text-gold">Why it matters</p>
              <p className="mt-4 text-lg leading-relaxed">{project.why}</p>
            </Reveal>
          </div>
          <Reveal className="mt-16">
            <div className="rounded-lg border border-line bg-surface p-8">
              <p className="meta text-gold">The approach</p>
              <p className="mt-4 text-base leading-relaxed text-muted">{project.approach}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-line" aria-labelledby="arch-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="meta text-gold">Architecture</p>
            <h2 id="arch-title" className="display-sm mt-3">
              How it's put together
            </h2>
          </Reveal>
          <Reveal className="mt-8">
            <ArchitectureDiagram stages={project.architecture.diagram} summary={project.architecture.summary} />
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="border-b border-line" aria-labelledby="stack-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="meta text-gold">Stack</p>
            <h2 id="stack-title" className="display-sm mt-3">
              Built with
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(project.stack).map(([group, items], i) => (
              <Reveal key={group} delay={i * 50}>
                <div>
                  <h3 className="meta-sm text-gold">{group.replace(/([A-Z])/g, ' $1')}</h3>
                  <ul className="mt-3 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="meta text-gold">My role</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{project.contribution}</p>
          </Reveal>
        </div>
      </section>

      {/* Decisions */}
      <section className="border-b border-line" aria-labelledby="decisions-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="meta text-gold">Key decisions</p>
            <h2 id="decisions-title" className="display-sm mt-3">
              The choices that mattered
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {project.decisions.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="h-full rounded-lg border border-line bg-surface p-6">
                  <IconCheck className="h-4 w-4 text-gold" />
                  <h3 className="mt-4 font-display text-base font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="meta text-gold">Hardest part</p>
              <p className="mt-4 text-lg leading-relaxed">{project.challenge}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="meta text-gold">How it was solved</p>
              <p className="mt-4 text-lg leading-relaxed">{project.solution}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Security / AI notes */}
      {(project.securityNotes || project.aiNotes) && (
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
              {project.securityNotes && (
                <Reveal>
                  <p className="meta text-gold">Security</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{project.securityNotes}</p>
                </Reveal>
              )}
              {project.aiNotes && (
                <Reveal delay={80}>
                  <p className="meta text-gold">AI</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{project.aiNotes}</p>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results + Evidence */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="meta text-gold">Results</p>
              <p className="mt-4 text-lg leading-relaxed">{project.result}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="meta text-gold">Evidence</p>
              <p className="mt-4 text-lg leading-relaxed">{project.evidence}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {hasDemo && (
                  <Button href={project.links.demo.href} size="md" external>
                    {project.links.demo.label}
                  </Button>
                )}
                {project.links.github?.href && (
                  <Button href={project.links.github.href} variant="ghost" size="md" icon={false} external>
                    {project.links.github.label}
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="border-b border-line" aria-label="Other projects">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <p className="meta text-muted">Keep exploring</p>
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-2">
              All projects <IconExternal className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABlock />
    </>
  )
}