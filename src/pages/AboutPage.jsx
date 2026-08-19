import { aboutNarrative, profile } from '../data/profile.js'
import { skills, capabilities } from '../data/skills.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTABlock from '../components/CTABlock.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Button from '../components/Button.jsx'
import { IconLayers, IconCpu, IconShield, IconArrowRight } from '../components/icons.jsx'

const capIcons = [IconLayers, IconCpu, IconShield, IconArrowRight]

export default function AboutPage() {
  useDocumentMeta({
    title: 'About — Adarsha B U',
    description:
      'Adarsha B U is a 2nd-year B.Tech CSBS student at BIET Davanagere building full-stack applications with AI integration and security-conscious engineering.',
  })

  return (
    <>
      <PageHeader
        meta="/about"
        title="The person behind the code."
        lede="I'm a second-year CSBS student who ships — full-stack applications with AI integration and security built in from the start."
      />

      {/* Narrative */}
      <section aria-labelledby="about-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div className="sticky top-28">
                <SectionHeader index="01" title="About me" />
                <div className="mt-8 space-y-3">
                  <div>
                    <p className="meta-sm text-gold">Degree</p>
                    <p className="mt-1 text-sm">{profile.education.degree}</p>
                  </div>
                  <div>
                    <p className="meta-sm text-gold">Institution</p>
                    <p className="mt-1 text-sm">{profile.education.institution}</p>
                  </div>
                  <div>
                    <p className="meta-sm text-gold">Year</p>
                    <p className="mt-1 text-sm">{profile.education.year} · Graduation {profile.education.graduation}</p>
                  </div>
                  <div>
                    <p className="meta-sm text-gold">Location</p>
                    <p className="mt-1 text-sm">{profile.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-5 leading-relaxed text-muted">
                {aboutNarrative.split('\n\n').map((para, i) => (
                  <p key={i} className={i === 0 ? 'text-text' : ''}>
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="02" title="What I can do" intro="Capabilities demonstrated in shipped projects — not aspirational bullet points." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => {
              const Icon = capIcons[i]
              return (
                <Reveal key={cap.title} delay={i * 60}>
                  <div className="h-full rounded-lg border border-line bg-surface p-6">
                    <Icon className="h-5 w-5 text-gold" />
                    <h3 className="display-sm mt-4">{cap.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{cap.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-title" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="03" title="Toolbox" intro="Grouped by domain — every skill here is exercised in a project you can open." />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 50}>
                <div>
                  <h3 className="meta text-gold">{group.group}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <div className="flex flex-wrap gap-4">
              <Button to="/projects" size="lg">
                See the evidence
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABlock />
    </>
  )
}