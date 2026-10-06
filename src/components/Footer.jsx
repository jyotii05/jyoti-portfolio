import { profile } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; 2026 {profile.name}</p>
        <nav className="footer__links" aria-label="Footer">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer__link">
            <Icon name="github" size={15} />
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">
            <Icon name="linkedin" size={14} />
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${profile.email}`} className="footer__link">
            <Icon name="mail" size={15} />
            Email
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.resume} download className="footer__resume">
            <Icon name="download" size={14} />
            Resume
          </a>
        </nav>
        <p className="footer__dev">
          <button
            className="footer__code"
            onClick={() => window.dispatchEvent(new Event('portfolio:terminal'))}
            aria-label="Open developer terminal"
            title="Ctrl + /"
          >
            &lt; / &gt;
          </button> Built with code &amp; curiosity.
        </p>
      </div>
    </footer>
  )
}
