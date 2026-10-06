import { useEffect, useState } from 'react'
import { navItems } from '../data/content'

export default function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Scroll-spy: the active section is the last one whose top has passed 35% of the viewport.
  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      setScrolled(window.scrollY > 24)
      const line = window.innerHeight * 0.35
      let current = navItems[0].id
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= line) current = item.id
      }
      // At the very bottom of the page, highlight the last section.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navItems[navItems.length - 1].id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" aria-label="Jyoti Nagesh Jadhav, back to top" onClick={() => setOpen(false)}>
          <span className="nav__logo-mark">JJ</span>
          <span className="nav__logo-dot" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open} inert={!open ? true : undefined}>
        <nav aria-label="Mobile">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-menu__link ${active === item.id ? 'is-active' : ''}`}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
