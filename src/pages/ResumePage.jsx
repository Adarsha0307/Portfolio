import { profile } from '../data/profile.js'
import { aboutNarrative } from '../data/profile.js'
import { skills } from '../data/skills.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Button from '../components/Button.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { IconGitHub, IconLinkedIn, IconMail, IconArrowRight } from '../components/icons.jsx'

export default function ResumePage() {
  useDocumentMeta({
    title: 'Resume — Adarsha B U',
    description:
      'Resume of Adarsha B U — 2nd-year B.Tech CSBS student at BIET Davanagere. Full-stack developer with focus on AI applications and cybersecurity-conscious engineering.',
  })

  return (
    <>
      <PageHeader
        meta="/resume"
        title="Resume"
        lede="My background, skills, and experience at a glance. PDF download coming soon — for now, the full content is below."
      />

      {/* Header / Quick Info */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="meta text-gold">Adarsha B U</p>
                <h2 className="display-md mt-2">Full-Stack Developer · AI & Cybersecurity</h2>
                <p className="mt-3 text-muted">{profile.location}</p>
                <p className="mt-1 text-muted">{profile.education.degree} — {profile.education.institution}</p>
                <p className="mt-1 text-muted">{profile.education.year} · Graduation {profile.education.graduation}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <IconMail className="h-4 w-4" /> Email
                </a>
                <a
                  href={profile.socials[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <IconLinkedIn className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.socials[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <IconGitHub className="h-4 w-4" /> GitHub
                </a>
                <Button variant="ghost" icon={false} disabled>
                  <IconArrowRight className="h-4 w-4 mr-2" /> Download PDF (Coming Soon)
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Summary */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="meta text-gold">Summary</p>
            <h3 className="display-sm mt-3">What I do</h3>
            <p className="mt-4 max-w-3xl text-muted leading-relaxed">{profile.context}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="meta text-gold mt-8">Focus</p>
            <p className="mt-3 text-text">{profile.focus}</p>
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <SectionHeader index="01" title="Education" />
            <div className="mt-8 space-y-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="font-display text-lg font-semibold">{profile.education.degree}</h4>
                  <p className="text-sm text-muted">{profile.education.institution}, Davanagere</p>
                </div>
                <div className="text-right">
                  <p className="meta-sm text-gold">{profile.education.year}</p>
                  <p className="text-sm text-muted">Expected graduation: {profile.education.graduation}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-line">
                <p className="text-sm text-muted">
                  Relevant coursework: Data Structures & Algorithms, Database Systems, Operating Systems,
                  Computer Networks, Software Engineering, Web Technologies, AI/ML Fundamentals,
                  Cybersecurity Basics, Business Systems Analysis.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <SectionHeader index="02" title="Technical Skills" intro="Grouped by domain — every skill here is exercised in a project you can open." />
            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, i) => (
                <Reveal key={group.group} delay={i * 50}>
                  <div>
                    <h4 className="meta text-gold">{group.group}</h4>
                    <ul className="mt-4 space-y-2">
                      {group.items.map(([name, icon]) => (
                        <li key={name} className="flex items-center gap-2.5 text-sm text-muted">
                          <img src={icon} alt="" aria-hidden="true" loading="lazy" className="h-5 w-5 shrink-0 object-contain" />
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects (Evidence) */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <SectionHeader index="03" title="Key Projects" intro="These projects demonstrate the skills above. Each has a live demo or public repository." />
            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-gold/40 bg-gold-soft p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-display text-lg font-semibold">Nexnethra</h4>
                    <p className="text-sm text-muted">AI-powered cybersecurity platform — Live</p>
                  </div>
                  <a
                    href="https://nexnethra.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-2"
                  >
                    Live Demo <IconArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  React + Vite frontend, Node.js/Express API, PostgreSQL, JWT authentication, OpenRouter & NVIDIA AI APIs.
                  URL/email/password analyzers, security scoring, incident reporting, threat intel feed, AI assistant.
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-display text-lg font-semibold">DocuFlow-AI</h4>
                    <p className="text-sm text-muted">AI workflow backend — Public repo, demo in progress</p>
                  </div>
                  <a
                    href="https://github.com/Adarsha0307/DocuFlow-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-text"
                  >
                    GitHub <IconArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  FastAPI multi-tenant backend, Celery workers, 20-stage workflow engine with human-approval gates,
                  provider-agnostic LLM layer with credit billing, RAG, MCP server, Docker, Render deploy config.
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-display text-lg font-semibold">TaskApex</h4>
                    <p className="text-sm text-muted">Task management prototype — Live demo</p>
                  </div>
                  <a
                    href="https://taskapex.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-2"
                  >
                    Live Demo <IconArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Next.js 14 App Router, TypeScript, JWT in httpOnly cookies, per-device sessions, bcryptjs,
                  task CRUD API, Tailwind CSS. Uses in-memory storage (prototype).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience / Journey */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <SectionHeader index="04" title="Experience & Leadership" intro="Competitions, leadership roles, and virtual experiences — all verifiable." />
            <div className="mt-8 space-y-8">
              <div>
                <h4 className="meta text-gold">Technical Leadership</h4>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <strong>Quality-C-Quest — Technical Team Lead</strong> (BIET Davanagere)
                    <br />Led the Quiz Round independently — 60 questions on C, aptitude, business fundamentals —
                    first round of a 4-round workshop for first-year students at 100% attendance.
                    <br /><span className="meta-sm text-gold">Evidence: Public LinkedIn post</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="meta text-gold">Competitions</h4>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <strong>TCS TechBytes Quiz — Regional Level</strong> (TCS · KLE Tech Hubballi)
                    <br />Qualified through college round; competed on core technical fundamentals and emerging technologies.
                    <br /><span className="meta-sm text-gold">Evidence: Public LinkedIn post</span>
                  </li>
                  <li>
                    <strong>Cipher Chase</strong> (BIET · CSBS Department)
                    <br />Cybersecurity-focused technical event — problem solving alongside peers.
                    <br /><span className="meta-sm text-gold">Evidence: Public LinkedIn post</span>
                  </li>
                  <li>
                    <strong>Manthan FKCCI</strong> — Reached Round 3 (Final rounds)
                    <br />Business and pitch competition — developed and presented a technology concept.
                    <br /><span className="meta-sm text-gold">Evidence: Participant · round 3</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="meta text-gold">Virtual Experiences</h4>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <strong>Deloitte Cyber Job Simulation</strong> (Forage)
                    <br />Analyzed web activity and security logs; mapped authentication flows; applied risk management.
                    <br /><span className="meta-sm text-gold">Note: Virtual experience, not a certification</span>
                  </li>
                  <li>
                    <strong>Goldman Sachs Risk Job Simulation</strong> (Forage)
                    <br />Assessed client risk profiles; applied risk metrics to investment and credit scenarios.
                    <br /><span className="meta-sm text-gold">Note: Virtual experience, not a certification</span>
                  </li>
                  <li>
                    <strong>Master Generative AI Session</strong> (HCL)
                    <br />Hands-on session on generative AI fundamentals and practical AI tool usage.
                    <br /><span className="meta-sm text-gold">Evidence: Public LinkedIn post</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <p className="meta text-gold">More context</p>
            <h3 className="display-sm mt-3">About my journey</h3>
            <div className="mt-6 space-y-5 leading-relaxed text-muted">
              {aboutNarrative.split('\n\n').map((para, i) => (
                <p key={i} className={i === 0 ? 'text-text' : ''}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
