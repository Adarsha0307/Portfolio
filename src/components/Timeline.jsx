export default function Timeline({ items }) {
  return (
    <ol className="relative space-y-8 border-l border-line pl-6">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold bg-bg"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-display text-base font-semibold">{item.title}</h3>
            <span className="meta-sm text-gold">{item.evidence}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>
        </li>
      ))}
    </ol>
  )
}