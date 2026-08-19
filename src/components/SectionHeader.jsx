import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, title, intro, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <div className="flex items-center gap-4 w-full">
        <span className="meta text-gold">{index}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="display-md max-w-2xl">{title}</h2>
      {intro && <p className="lede text-muted max-w-2xl">{intro}</p>}
    </Reveal>
  )
}