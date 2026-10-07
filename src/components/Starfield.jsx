import { useEffect, useRef } from 'react'

// Lightweight canvas starfield: slow drift, gentle twinkle, mouse + scroll parallax.
// Listens for a `portfolio:warp` window event (Konami easter egg) to briefly streak the stars.
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    let w = 0
    let h = 0
    let stars = []
    let raf = 0
    let running = true
    let warpUntil = 0
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }

    const makeStars = () => {
      const count = Math.min(220, Math.round((w * h) / 8000))
      stars = Array.from({ length: count }, () => {
        const depth = Math.random() // 0 = far, 1 = near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.3 + depth * 1.1,
          depth,
          alpha: 0.25 + Math.random() * 0.6,
          tw: Math.random() * Math.PI * 2,
          tws: 0.004 + Math.random() * 0.012,
          vx: (Math.random() - 0.5) * 0.03,
          vy: 0.015 + depth * 0.04,
          tint: Math.random() < 0.12,
        }
      })
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeStars()
      if (reduceMotion) draw(0)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const warping = t < warpUntil
      const scrollShift = window.scrollY * 0.04
      mouse.x += (mouse.tx - mouse.x) * 0.05
      mouse.y += (mouse.ty - mouse.y) * 0.05
      const cx = w / 2
      const cy = h / 2

      const light = document.documentElement.dataset.theme === 'light'
      for (const s of stars) {
        if (!reduceMotion) {
          if (warping) {
            const dx = s.x - cx
            const dy = s.y - cy
            const speed = 0.02 + s.depth * 0.05
            s.x += dx * speed
            s.y += dy * speed
            if (s.x < -50 || s.x > w + 50 || s.y < -50 || s.y > h + 50) {
              s.x = cx + (Math.random() - 0.5) * 80
              s.y = cy + (Math.random() - 0.5) * 80
            }
          } else {
            s.x += s.vx
            s.y += s.vy
            if (s.y > h + 4) s.y = -4
            if (s.x > w + 4) s.x = -4
            if (s.x < -4) s.x = w + 4
          }
          s.tw += s.tws
        }

        const px = s.x + mouse.x * s.depth * 14
        let py = s.y + mouse.y * s.depth * 14 - scrollShift * s.depth
        py = ((py % h) + h) % h
        const a = s.alpha * (0.65 + 0.35 * Math.sin(s.tw))
        const color = light
          ? s.tint ? `rgba(90,104,220,${a})` : `rgba(40,44,70,${a * 0.7})`
          : s.tint ? `rgba(160,172,255,${a})` : `rgba(235,238,250,${a})`

        if (warping) {
          const dx = s.x - cx
          const dy = s.y - cy
          ctx.strokeStyle = color
          ctx.lineWidth = s.r
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(px - dx * 0.08, py - dy * 0.08)
          ctx.stroke()
        } else {
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(px, py, s.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const loop = (t) => {
      if (!running) return
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onMouse = (e) => {
      mouse.tx = (e.clientX / w - 0.5) * 2
      mouse.ty = (e.clientY / h - 0.5) * 2
    }
    const onVisibility = () => {
      if (reduceMotion) return
      running = !document.hidden
      cancelAnimationFrame(raf)
      if (running) raf = requestAnimationFrame(loop)
    }
    const onWarp = () => {
      if (reduceMotion) return
      warpUntil = performance.now() + 1600
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('portfolio:warp', onWarp)
    document.addEventListener('visibilitychange', onVisibility)
    if (!reduceMotion) {
      window.addEventListener('pointermove', onMouse, { passive: true })
      raf = requestAnimationFrame(loop)
    }

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('portfolio:warp', onWarp)
      window.removeEventListener('pointermove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}
