import { profile, projects } from '../data/content'
import { spotlight } from '../hooks/spotlight'
import Icon from './Icon'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader index="04" realm="Project Universe" title="Projects" />

        <div className="projects">
          {projects.map((p, i) => (
            <article
              className={`project glass spot reveal ${i === 0 ? 'project--wide' : ''}`}
              key={p.title}
              onPointerMove={spotlight}
            >
              <div className="project__top">
                <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                <ul className="project__tech" aria-label="Technologies">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>

              <ul className="project__highlights" aria-label="Highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {(p.github || p.live) && (
                <div className="project__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                      View Project
                      <Icon name="arrowUpRight" size={16} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                      <Icon name="github" size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="projects__more reveal">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
            <Icon name="github" size={18} />
            More on GitHub
            <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
