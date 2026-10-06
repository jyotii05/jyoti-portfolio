import { useEffect, useRef } from 'react'

// Soft light that trails the cursor on fine-pointer devices only.
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const el = ref.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = 0

    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) raf = requestAnimationFrame(tick)
      else raf = 0
    }
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      el.classList.add('is-active')
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const onLeave = () => el.classList.remove('is-active')

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
