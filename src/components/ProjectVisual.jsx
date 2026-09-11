export default function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.slug}`}>
      <div className="visual-caption"><span>{project.name}</span><span>Architecture / overview</span></div>
      <div className="visual-orbit" aria-hidden="true"><span>{project.slug === 'nexnethra' ? 'N' : project.slug === 'docuflow-ai' ? 'D' : 'T'}</span></div>
      <div className="visual-nodes">
        {project.architecture.diagram.slice(0, 4).map((node, i) => <div key={node.title}><span className="visual-number">0{i + 1}</span><strong>{node.title}</strong><small>{node.sub}</small></div>)}
      </div>
      <p className="visual-footnote">System illustration · not a product screenshot</p>
    </div>
  )
}
