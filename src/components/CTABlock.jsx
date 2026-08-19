import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CTABlock() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <Reveal className="glow-gold relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="meta text-gold">Next step</p>
          <h2 id="cta-title" className="display-md mt-3">
            Have a problem worth solving? Let's build it.
          </h2>
          <p className="lede mt-4 text-muted">
            I'm open to internships, freelance work, and collaborations in full-stack development,
            AI applications, and security-conscious engineering.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button to="/contact" size="lg">
            Start a conversation
          </Button>
          <Button to="/projects" variant="ghost" size="lg" icon={false}>
            See the work
          </Button>
        </div>
      </Reveal>
    </section>
  )
}