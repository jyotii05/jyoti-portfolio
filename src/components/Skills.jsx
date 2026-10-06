import { skillGroups } from '../data/content'
import { spotlight } from '../hooks/spotlight'
import Icon from './Icon'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader index="02" realm="Toolkit" title="Skills" />

        <div className="skills">
          {skillGroups.map((group, i) => (
            <article
              className="skill-card glass spot reveal"
              key={group.title}
              style={{ '--delay': `${(i % 3) * 0.08}s` }}
              onPointerMove={spotlight}
            >
              <header className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3>{group.title}</h3>
                <span className="skill-card__count">{String(group.items.length).padStart(2, '0')}</span>
              </header>
              <ul className="tags">
                {group.items.map((item) => (
                  <li className="tag" key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
