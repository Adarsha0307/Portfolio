import Button from '../components/Button.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'

export default function NotFoundPage() {
  useDocumentMeta({ title: 'Page not found — Adarsha B U' })

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="meta text-gold">404</p>
      <h1 className="display-md mt-4">This page doesn't exist.</h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be outdated, or the page moved. Either way — there's good work elsewhere.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/">Back home</Button>
        <Button to="/projects" variant="ghost" icon={false}>
          See projects
        </Button>
      </div>
    </section>
  )
}