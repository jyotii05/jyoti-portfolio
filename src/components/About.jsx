import { about } from '../data/content'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader index="01" realm="Me" title="Who am I?" />

        <div className="about">
          <div className="about__copy reveal">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="about__facts reveal" style={{ '--delay': '0.1s' }}>
            {about.facts.map((f) => (
              <div className="about__fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="timeline" aria-label="Milestones">
          {about.timeline.map((item, i) => (
            <li className="timeline__item reveal" key={item.title} style={{ '--delay': `${i * 0.08}s` }}>
              <span className="timeline__node" aria-hidden="true" />
              <span className="timeline__year">{item.year}</span>
              <span className="timeline__title">{item.title}</span>
              <span className="timeline__place">{item.place}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
