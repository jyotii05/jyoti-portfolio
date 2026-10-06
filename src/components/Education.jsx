import { certifications, education } from '../data/content'
import Icon from './Icon'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader index="05" realm="Knowledge" title="Education" />

        <div className="education">
          {education.map((e, i) => (
            <article className="edu-card glass reveal" key={e.title} style={{ '--delay': `${i * 0.08}s` }}>
              <span className="edu-card__icon">
                <Icon name="cap" size={22} />
              </span>
              <p className="edu-card__period">{e.period}</p>
              <h3 className="edu-card__title">{e.title}</h3>
              <p className="edu-card__inst">
                {e.institution}
                {e.board && <span>{e.board}</span>}
              </p>
              <div className="edu-card__score">
                <span>{e.scoreLabel}</span>
                <strong>{e.score}</strong>
              </div>
            </article>
          ))}
        </div>

        <div id="certifications" className="certs">
          <h3 className="subheading reveal">Certifications</h3>
          <ul className="certs__grid">
            {certifications.map((c, i) => (
              <li className="cert reveal" key={c} style={{ '--delay': `${(i % 4) * 0.06}s` }}>
                <Icon name="award" size={18} className="cert__icon" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
