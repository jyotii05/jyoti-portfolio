import { useState } from 'react'
import { profile } from '../data/content'
import Icon from './Icon'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <p className="eyebrow reveal">
          <span className="eyebrow__index">07</span>
          <span className="eyebrow__rule" />
          Connect
        </p>
        <h2 className="contact__title reveal">Let&rsquo;s connect</h2>

        <div className="contact__email reveal">
          <a href={`mailto:${profile.email}`} className="contact__email-link">
            {profile.email}
          </a>
          <button className="icon-btn" onClick={copy} aria-label={copied ? 'Email copied' : 'Copy email address'}>
            <Icon name={copied ? 'check' : 'copy'} size={18} />
          </button>
          <span className={`contact__copied ${copied ? 'is-shown' : ''}`} role="status">
            {copied ? 'Copied' : ''}
          </span>
        </div>

        <div className="contact__links reveal">
          <a href={`mailto:${profile.email}`} className="contact-link">
            <Icon name="mail" size={20} />
            <span>Email</span>
            <Icon name="arrowUpRight" size={16} className="contact-link__arrow" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Icon name="linkedin" size={18} />
            <span>LinkedIn</span>
            <Icon name="arrowUpRight" size={16} className="contact-link__arrow" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Icon name="github" size={19} />
            <span>GitHub</span>
            <Icon name="arrowUpRight" size={16} className="contact-link__arrow" />
          </a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Icon name="instagram" size={19} />
            <span>Instagram</span>
            <Icon name="arrowUpRight" size={16} className="contact-link__arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
