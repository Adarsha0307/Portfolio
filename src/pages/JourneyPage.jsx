import { journey } from '../data/journey.js'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Timeline from '../components/Timeline.jsx'
import CTABlock from '../components/CTABlock.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Badge from '../components/Badge.jsx'

export default function JourneyPage() {
  useDocumentMeta({
    title: 'Journey — Adarsha B U',
    description:
      'Adarsha B U: competitions (TCS TechBytes regional qualifier, Cipher Chase, Manthan FKCCI), leadership (Quality-C-Quest technical team), and virtual experiences (Deloitte Cyber, Goldman Sachs Risk).',
  })

  return (
    <>
      <PageHeader
        meta="/journey"
        title="Evidence over claims."
        lede="Competitions, leadership, and virtual experiences — each entry is backed by public proof. No padding, no inflated titles."
      />

      {/* Compete */}
      <section className="border-b border-line" aria-labelledby="compete-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="01" title="I compete" intro="Technical challenges that measure more than coursework." />
          <Reveal className="mt-12">
            <Timeline items={journey.compete} />
          </Reveal>
        </div>
      </section>

      {/* Lead */}
      <section className="border-b border-line" aria-labelledby="lead-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="02" title="I lead" intro="Building for others — and taking ownership when it counts." />
          <Reveal className="mt-12">
            <Timeline items={journey.lead} />
          </Reveal>
          <Reveal className="mt-10">
            <Badge variant="gold">Note: Forage completions are virtual experiences, not certifications.</Badge>
          </Reveal>
        </div>
      </section>

      {/* Learn */}
      <section className="border-b border-line" aria-labelledby="learn-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeader index="03" title="I learn" intro="Industry virtual experiences and focused sessions — applied, not just watched." />
          <Reveal className="mt-12">
            <Timeline items={journey.learn} />
          </Reveal>
        </div>
      </section>

      {/* Current focus */}
      <section aria-labelledby="current-title">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <div className="rounded-lg border border-gold/40 bg-gold-soft p-8">
              <p className="meta text-gold">Now</p>
              <p className="mt-3 text-lg leading-relaxed">{journey.current}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABlock />
    </>
  )
}