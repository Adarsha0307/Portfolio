import { profile } from '../data/profile.js'
import { featuredProjects, supportingProjects } from '../data/projects.js'
import { capabilities } from '../data/skills.js'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTABlock from '../components/CTABlock.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { meta } from '../data/site.js'
import { IconArrowRight, IconShield, IconLayers, IconCpu } from '../components/icons.jsx'

const capIcons = [IconLayers, IconCpu, IconShield, IconArrowRight]

export default function HomePage() {
  useDocumentMeta(meta.default)

  return (
    <>
      {/* Hero */}
      <section className="bg-grid bg-grid-fade relative overflow-hidden border-b border-line">
        <div className="glow-gold pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:pb-28">
          <Reveal>
            <p className="meta text-gold">Available for internships &amp; freelance work</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-lg mt-6 max-w-4xl">
              Full-Stack Developer building{' '}
              <span className="text-gold">intelligent</span>,{' '}
              <span className="text-gold">secure</span> software.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-6 max-w-2xl text-muted">
              {profile.context}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/projects" size="lg">
                View the work
              </Button>
              <Button to="/contact" variant="ghost" size="lg" icon={false}>
                Get in touch
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap gap-2">
              <Badge variant="gold">Nexnethra — live demo</Badge>
              <Badge>DocuFlow-AI — public repo</Badge>
              <Badge>TaskApex — live demo</Badge>
              <Badge>Deloitte Cyber · GS Risk — virtual experiences</Badge>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section aria-labelledby="focus-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="01" title="Where I focus" intro="Full-stack engineering with a security-first mindset and AI as an engineering tool." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.slice(0, 3).map((cap, i) => {
              const Icon = capIcons[i]
              return (
                <Reveal key={cap.title} delay={i * 80}>
                  <div className="group h-full rounded-lg border border-line bg-surface p-6 transition-colors duration-300 hover:border-gold/60">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/40 text-gold transition-colors group-hover:bg-gold-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="display-sm mt-5">{cap.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{cap.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section aria-labelledby="work-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader index="02" title="Selected work" intro="Every project is live or has a public repository — with the evidence to prove it." />
            <Reveal>
              <Button to="/projects" variant="ghost" icon={false}>
                All projects
              </Button>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting project */}
      <section aria-labelledby="more-work-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="03" title="More from the bench" intro="Supporting work that sharpens the same skills — authentication, session security, and responsive UI." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportingProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey teaser */}
      <section aria-labelledby="journey-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="04" title="The journey so far" intro="Competitions, leadership, and virtual experiences — every entry verifiable, none inflated." />
          <Reveal className="mt-12 flex flex-wrap items-center gap-4">
            <Button to="/journey" variant="ghost" icon={false}>
              Read the journey
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABlock />
    </>
  )
}