import { profile } from '../data/profile.js'
import { featuredProjects, supportingProjects } from '../data/projects.js'
import { capabilities } from '../data/skills.js'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SupportBlock from '../components/SupportBlock.jsx'
import CTABlock from '../components/CTABlock.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { meta } from '../data/site.js'
import { IconArrowRight, IconShield, IconLayers, IconCpu } from '../components/icons.jsx'

const capIcons = [IconLayers, IconCpu, IconShield, IconArrowRight]

const buildSignals = [
  { value: '03', label: 'products shipped' },
  { value: '20', label: 'stage AI pipeline' },
  { value: '2029', label: 'graduating' },
]

const coreStack = ['React', 'Node.js', 'Python', 'PostgreSQL', 'AI APIs', 'Security']

export default function HomePage() {
  useDocumentMeta(meta.default)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="glow-gold pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-24 sm:px-6 md:pt-32 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.55fr)] lg:items-end lg:pb-24">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 px-4 py-2 backdrop-blur">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                </span>
                <span className="meta-sm text-muted">Open to internships &amp; select freelance work</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="meta mt-10 text-muted">Adarsha B U · Karnataka, India</p>
              <h1 className="display-lg mt-4 max-w-4xl">
                I build software that thinks{' '}
                <span className="text-gold">clearly</span> and ships{' '}
                <span className="text-gold">securely.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-6 max-w-2xl text-muted">{profile.context}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/projects" size="lg">Explore selected work</Button>
                <Button to="/contact" variant="ghost" size="lg" icon={false}>Start a conversation</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <aside className="overflow-hidden rounded-2xl border border-line bg-surface/85 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur" aria-label="Developer snapshot">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <span className="meta-sm text-gold">Build profile</span>
                <span className="font-mono text-xs text-muted">/now</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-line">
                {buildSignals.map((signal) => (
                  <div key={signal.label} className="px-3 py-5 text-center">
                    <strong className="font-display text-2xl font-semibold text-text">{signal.value}</strong>
                    <span className="mt-1 block text-[0.6875rem] leading-tight text-muted">{signal.label}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-line p-5">
                <p className="meta-sm text-muted">Working set</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coreStack.map((item) => <span key={item} className="chip pointer-events-none">{item}</span>)}
                </div>
              </div>
              <div className="border-t border-line bg-surface-2/60 px-5 py-4 font-mono text-xs text-muted">
                <span className="text-gold">$</span> building useful things, end to end
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section aria-labelledby="focus-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="01" title="Where I focus" intro="Full-stack engineering with a security-first mindset and AI as an engineering tool." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {capabilities.map((cap, i) => {
              const Icon = capIcons[i]
              return (
                <Reveal key={cap.title} delay={i * 70} className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-gold/60">
                    <span className="absolute right-5 top-4 font-mono text-5xl font-semibold text-line transition-colors group-hover:text-gold-soft" aria-hidden="true">0{i + 1}</span>
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
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className={`h-full ${i === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
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

      <SupportBlock />
      <CTABlock />
    </>
  )
}
