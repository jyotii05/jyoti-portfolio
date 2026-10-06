import { useEffect, useRef, useState } from 'react'
import { certifications, education, experience, profile, projects, skillGroups } from '../data/content'

// Hidden terminal overlay, toggled with Ctrl + / (or Cmd + /).
const welcome = [{ type: 'out', text: "Welcome. Type 'help' to see available commands." }]

const commands = {
  help: () => [
    'Available commands:',
    '  whoami       who is this?',
    '  skills       technical toolkit',
    '  projects     things I have built',
    '  experience   where I have worked',
    '  education    degrees',
    '  certs        certifications',
    '  contact      how to reach me',
    '  resume       open resume',
    '  clear        clear the screen',
    '  exit         close terminal',
  ],
  whoami: () => [profile.name, profile.role],
  skills: () => skillGroups.flatMap((g) => [g.title, `  ${g.items.join(' · ')}`]),
  projects: () =>
    projects.flatMap((p, i) => [`${String(i + 1).padStart(2, '0')}  ${p.title}`, `    ${p.tech.join(' · ')}`]),
  experience: () =>
    experience.flatMap((j) => [`${j.role}`, `  ${j.company}, ${j.period}`]),
  education: () => education.flatMap((e) => [e.title, `  ${e.institution}, ${e.period}`]),
  certs: () => certifications.map((c) => `- ${c}`),
  contact: () => [
    { label: 'email     ', text: profile.email, href: `mailto:${profile.email}` },
    { label: 'linkedin  ', text: profile.linkedin, href: profile.linkedin },
    { label: 'github    ', text: profile.github, href: profile.github },
  ],
  resume: () => {
    window.open(profile.resume, '_blank', 'noopener')
    return ['Opening resume in a new tab...']
  },
  ls: () => ['about/  skills/  experience/  projects/  education/  contact/'],
  sudo: () => ['Nice try. Permission denied.'],
}

export default function Terminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState(welcome)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef(null)
  const bodyRef = useRef(null)
  const lastFocus = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('portfolio:terminal', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('portfolio:terminal', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement
      requestAnimationFrame(() => inputRef.current?.focus())
    } else if (lastFocus.current) {
      lastFocus.current.focus?.()
      lastFocus.current = null
    }
  }, [open])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    setHistory((h) => [raw, ...h].slice(0, 30))
    setHistIdx(-1)
    if (cmd === 'clear') return setLines([])
    if (cmd === 'exit') {
      setLines((l) => [...l, { type: 'in', text: raw }])
      return setOpen(false)
    }
    const name = cmd.split(/\s+/)[0]
    const fn = commands[name]
    const out = fn ? fn() : [`command not found: ${name}. Type 'help'.`]
    setLines((l) => [...l, { type: 'in', text: raw }, ...out.map((o) => (typeof o === 'string' ? { type: 'out', text: o } : { type: 'out', ...o }))])
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      if (history[next] !== undefined) {
        setHistIdx(next)
        setInput(history[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      setHistIdx(Math.max(next, -1))
      setInput(next >= 0 ? history[next] : '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = Object.keys(commands)
        .concat('clear', 'exit')
        .find((c) => input && c.startsWith(input.toLowerCase()))
      if (match) setInput(match)
    }
  }

  if (!open) return null

  return (
    <div className="terminal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="terminal" role="dialog" aria-modal="true" aria-label="Developer terminal">
        <div className="terminal__bar">
          <span className="terminal__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="terminal__title">jyoti@portfolio: ~</span>
          <button className="terminal__close" onClick={() => setOpen(false)} aria-label="Close terminal">
            esc
          </button>
        </div>
        <div className="terminal__body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {lines.map((l, i) => (
            <div key={i} className={`terminal__line terminal__line--${l.type}`}>
              {l.type === 'in' && <span className="terminal__prompt">&gt;</span>}
              {l.label}
              {l.href ? (
                <a
                  href={l.href}
                  className="terminal__link"
                  {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {l.text}
                </a>
              ) : (
                l.text
              )}
            </div>
          ))}
          <div className="terminal__line terminal__line--in">
            <span className="terminal__prompt">&gt;</span>
            <input
              ref={inputRef}
              className="terminal__input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal command"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
