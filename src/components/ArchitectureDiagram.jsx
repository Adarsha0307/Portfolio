export default function ArchitectureDiagram({ stages, summary }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        <div className="flex items-stretch gap-2">
          {stages.map((stage, i) => (
            <div key={stage.title} className="flex items-center gap-2">
              <div className="flex h-full min-w-36 flex-col justify-center rounded-md border border-line bg-surface px-4 py-3">
                <span className="text-sm font-medium">{stage.title}</span>
                <span className="mt-0.5 text-xs text-muted">{stage.sub}</span>
              </div>
              {i < stages.length - 1 && (
                <span className="meta-sm text-gold" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{summary}</p>
      </div>
    </div>
  )
}