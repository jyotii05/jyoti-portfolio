import { useState } from 'react'
import { profile } from '../data/content'
import Icon from './Icon'

export default function Hero() {
  const [photoMissing, setPhotoMissing] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__name" aria-label={profile.name}>
            {profile.nameParts.map((part, i) => (
              <span className="hero__name-line" key={part} aria-hidden="true">
                <span style={{ '--d': `${0.15 + i * 0.12}s` }}>{part}</span>
              </span>
            ))}
          </h1>
          <p className="hero__role">
            <span className="hero__role-line" aria-hidden="true" />
            {profile.role}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
              <Icon name="arrowRight" size={18} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <Icon name="file" size={18} />
              View Resume
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <Icon name="github" size={18} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <Icon name="linkedin" size={17} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="orbit">
            <div className="orbit__ring orbit__ring--1"><span className="orbit__body" /></div>
            <div className="orbit__ring orbit__ring--2"><span className="orbit__body orbit__body--sm" /></div>
            <div className="orbit__glow" />
            <div className="hero__photo">
              {photoMissing ? (
                <div className="hero__photo-fallback" role="img" aria-label="Jyoti Nagesh Jadhav">
                  JJ
                </div>
              ) : (
                <img
                  src={profile.photo}
                  alt="Portrait of Jyoti Nagesh Jadhav"
                  width="480"
                  height="480"
                  fetchPriority="high"
                  decoding="async"
                  onError={() => setPhotoMissing(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
