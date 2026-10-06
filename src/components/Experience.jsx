import { experience, profile } from '../data/content'
import Icon from './Icon'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader index="03" realm="Journey" title="Experience">
          <a href={profile.resume} download className="btn btn--ghost btn--sm section-header__action">
            <Icon name="download" size={16} />
            Download Resume
          </a>
        </SectionHeader>

        <ol className="experience">
          {experience.map((job) => (
            <li className="job reveal" key={job.company}>
              <div className="job__rail" aria-hidden="true">
                <span className={`job__node ${job.current ? 'job__node--live' : ''}`} />
              </div>
              <div className="job__body glass">
                <div className="job__meta">
                  <span className="job__period">{job.period}</span>
                  {job.current && <span className="badge">Current</span>}
                </div>
                <h3 className="job__role">{job.role}</h3>
                <p className="job__company">{job.company}</p>
                {job.summary && <p className="job__summary">{job.summary}</p>}

                <div className={`job__groups ${job.groups.length > 1 ? 'job__groups--split' : ''}`}>
                  {job.groups.map((g) => (
                    <div className="job__group" key={g.label}>
                      <h4>{g.label}</h4>
                      <ul>
                        {g.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
