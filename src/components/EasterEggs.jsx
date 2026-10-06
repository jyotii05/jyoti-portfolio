import { useEffect, useRef, useState } from 'react'

// Konami-style sequence (↑ ↑ ↓ ↓ ← → ← →) triggers a brief star warp and a small toast.
const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight']

export default function EasterEggs() {
  const [toast, setToast] = useState(false)
  const progress = useRef(0)
  const timer = useRef(0)

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === SEQUENCE[progress.current]) {
        progress.current += 1
        if (progress.current === SEQUENCE.length) {
          progress.current = 0
          window.dispatchEvent(new Event('portfolio:warp'))
          document.documentElement.classList.add('dev-mode')
          setToast(true)
          clearTimeout(timer.current)
          timer.current = setTimeout(() => {
            setToast(false)
            document.documentElement.classList.remove('dev-mode')
          }, 3200)
        }
      } else {
        progress.current = e.key === SEQUENCE[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)

    console.log(
      '%c</> Hello, fellow developer.%c\nPress Ctrl + / to open the terminal.',
      'color:#8b9cff;font:600 14px monospace',
      'color:#9aa0b4;font:12px monospace',
    )

    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <div className={`toast ${toast ? 'is-shown' : ''}`} role="status" aria-live="polite">
      {toast && (
        <>
          <span className="toast__code">&lt;/&gt;</span>
          <span>
            developer mode unlocked <span className="toast__muted">// try Ctrl + /</span>
          </span>
        </>
      )}
    </div>
  )
}
