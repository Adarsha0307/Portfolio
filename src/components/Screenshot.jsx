// Renders a project screenshot when the real image exists, otherwise a
// designed placeholder (grid + gold monogram + caption).
// Drop files into public/images/{slug}-*.webp — the first match wins.

export default function Screenshot({ slug, name, caption, className = '' }) {
  const images = import.meta.glob('/public/images/*', { eager: true, import: 'default' })
  const src = Object.keys(images).find((path) => path.includes(`/${slug}-`))

  if (src) {
    return (
      <figure className={className}>
        <img
          src={images[src]}
          alt={`${name} — interface screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full rounded-lg border border-line bg-surface object-cover"
        />
        {caption && (
          <figcaption className="mt-3 text-xs text-muted">{caption}</figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className={className}>
      <div
        role="img"
        aria-label={`${name} — screenshot coming soon`}
        className="bg-grid relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-surface"
      >
        <div className="glow-gold absolute inset-0" aria-hidden="true" />
        <div className="relative flex flex-col items-center gap-3">
          <span className="display-md font-semibold text-gold/80">
            {name.split('')[0].toUpperCase()}
          </span>
          <span className="meta-sm text-muted">{name} — screenshot coming soon</span>
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-xs text-muted">{caption}</figcaption>}
    </figure>
  )
}