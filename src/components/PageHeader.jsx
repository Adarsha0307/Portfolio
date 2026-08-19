import Reveal from './Reveal.jsx'

export default function PageHeader({ meta, title, lede }) {
  return (
    <section className="border-b border-line">
      <Reveal className="mx-auto max-w-6xl px-4 pb-14 pt-32 sm:px-6 md:pt-40">
        <div className="flex items-center gap-4">
          <span className="meta text-gold">{meta}</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <h1 className="display-lg mt-6">{title}</h1>
        {lede && <p className="lede mt-6 max-w-2xl text-muted">{lede}</p>}
      </Reveal>
    </section>
  )
}