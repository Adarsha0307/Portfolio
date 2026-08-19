import { projects } from '../data/projects.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTABlock from '../components/CTABlock.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'

export default function ProjectsPage() {
  useDocumentMeta({
    title: 'Projects — Adarsha B U',
    description:
      'Projects by Adarsha B U: Nexnethra (AI cybersecurity platform), DocuFlow-AI (AI workflow backend), TaskApex (Next.js task manager). Live demos and public repositories.',
  })

  return (
    <>
      <PageHeader
        meta="/projects"
        title="Work you can open."
        lede="Every project is live, has a public repository, or both. The evidence is one click away — nothing here is a screenshot of an idea."
      />

      <section aria-label="All projects" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 80} className="h-full">
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}