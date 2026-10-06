import { beyondCode } from '../data/content'
import { spotlight } from '../hooks/spotlight'
import Icon from './Icon'
import SectionHeader from './SectionHeader'

export default function BeyondCode() {
  return (
    <section id="beyond" className="section">
      <div className="container">
        <SectionHeader index="06" realm="Off-screen" title="Beyond Code">
          <p className="section-lead">
            Away from the editor: performance, sport, event leadership and work behind the camera.
          </p>
        </SectionHeader>
      </div>

      <div className="beyond" tabIndex={0} aria-label="Interests outside of code">
        <ul className="beyond__track container">
          {beyondCode.map((b, i) => (
            <li
              className="beyond-card glass spot reveal"
              key={b.title}
              style={{ '--delay': `${i * 0.08}s` }}
              onPointerMove={spotlight}
            >
              <span className="beyond-card__icon">
                <Icon name={b.icon} size={24} />
              </span>
              <h3>{b.title}</h3>
              <ul>
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
