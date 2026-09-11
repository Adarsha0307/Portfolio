import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import ProjectVisual from '../components/ProjectVisual.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { meta } from '../data/site.js'
import '../editorial.css'

export default function HomePage() {
  useDocumentMeta(meta.default)
  return (
    <div className="editorial-home">
      <section className="intro-section" aria-labelledby="intro-title">
        <div className="intro-topline"><span>ADARSHA B U / DEVELOPER</span><span className="availability">Open to opportunities</span></div>
        <div className="intro-grid">
          <div>
            <p className="eyebrow">A little curiosity. A lot of building.</p>
            <h1 id="intro-title">Hi, I’m Adarsha.<br />I turn ideas into<br /><em>working software.</em></h1>
            <p className="intro-description">Full-stack developer and CSBS student building web applications with AI and security in mind. Based in Karnataka, open to working everywhere.</p>
            <div className="editorial-actions"><a className="editorial-primary" href="#selected-work">Explore my work <span aria-hidden="true">↗</span></a><Link className="editorial-link" to="/resume">View résumé <span aria-hidden="true">↗</span></Link></div>
          </div>
          <Link className="hero-project" to="/projects/nexnethra" aria-label="Explore the Nexnethra case study">
            <ProjectVisual project={projects[0]} />
            <div className="hero-project-label"><div><span className="eyebrow">Featured exploration</span><strong>Nexnethra</strong></div><span className="round-arrow" aria-hidden="true">↗</span></div>
          </Link>
        </div>
        <div className="intro-bottom"><span>React / Node.js / Python / PostgreSQL</span><span>Thoughtful interfaces. Practical engineering.</span></div>
      </section>

      <section id="selected-work" className="work-section" aria-labelledby="work-title">
        <div className="editorial-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Ideas, made tangible.</h2></div><p>A closer look at what I build,<br />how it works, and what I learned.</p></div>
        {projects.map((project, index) => (
          <article key={project.slug} className={`work-row ${index % 2 ? 'work-row-reverse' : ''}`}>
            <Link to={`/projects/${project.slug}`} className="work-image-link" aria-label={`Explore ${project.name}`}><ProjectVisual project={project} /></Link>
            <div className="work-copy"><p className="eyebrow">0{index + 1} / {project.category}</p><h3>{project.name}</h3><p>{project.tagline}</p><div className="work-tags">{[...(project.stack.frontend || []), ...(project.stack.backend || [])].slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><div className="editorial-actions"><Link className="editorial-link" to={`/projects/${project.slug}`}>Read the case study ↗</Link>{(project.links.demo?.href || project.links.github?.href) && <a className="editorial-link secondary-link" href={project.links.demo?.href || project.links.github.href} target="_blank" rel="noopener noreferrer">{project.links.demo?.href ? 'Visit project' : 'Source code'} ↗</a>}</div></div>
          </article>
        ))}
      </section>

      <section className="personal-section" aria-labelledby="personal-title">
        <div><p className="eyebrow">02 / Behind the code</p><h2 id="personal-title">Still learning.<br /><em>Always building.</em></h2></div>
        <div className="personal-copy"><p>I’m a second-year Computer Science and Business Systems student at BIET, Davanagere. I’m interested in the space where useful products, AI, and secure engineering meet.</p><p>I learn by building, asking better questions, and following an idea all the way through to a working application.</p><div className="editorial-actions"><Link className="editorial-link" to="/about">A little more about me ↗</Link><Link className="editorial-link secondary-link" to="/journey">My journey ↗</Link></div></div>
      </section>

      <section className="editorial-contact" aria-labelledby="contact-title"><p className="eyebrow">Have something in mind?</p><h2 id="contact-title">Let’s build<br /><em>something useful.</em></h2><div className="editorial-actions"><Link className="editorial-primary" to="/contact">Start a conversation ↗</Link><a className="editorial-link" href={`mailto:${profile.email}`}>{profile.email}</a></div></section>
    </div>
  )
}
