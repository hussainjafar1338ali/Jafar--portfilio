import { useRef, useEffect } from 'react'

/**
 * Signature visual: an ambient canvas of nodes and connective edges that drift
 * slowly, with occasional light "signal" pulses traveling along edges — evoking
 * a neural network / inference graph, tying directly into the AI/ML subject matter.
 */
export default function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let width, height
    let nodes = []
    let pulses = []

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const NODE_COUNT = () => Math.min(70, Math.floor((width * height) / 22000))
    const MAX_DIST = 150

    function resize() {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      init()
    }

    function init() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      nodes = Array.from({ length: NODE_COUNT() }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.5 + 0.8,
      }))
      pulses = []
    }

    function maybeSpawnPulse() {
      if (Math.random() < 0.01 && nodes.length > 1) {
        const a = nodes[Math.floor(Math.random() * nodes.length)]
        const b = nodes[Math.floor(Math.random() * nodes.length)]
        const dx = a.x - b.x
        const dy = a.y - b.y
        if (a !== b && Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
          pulses.push({ a, b, t: 0 })
        }
      }
    }

    function draw() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.15
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        if (!prefersReducedMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(165, 180, 252, 0.55)'
        ctx.fill()
      })

      // Signal pulses
      if (!prefersReducedMotion) {
        maybeSpawnPulse()
        pulses = pulses.filter((p) => p.t <= 1)
        pulses.forEach((p) => {
          p.t += 0.02
          const x = p.a.x + (p.b.x - p.a.x) * p.t
          const y = p.a.y + (p.b.y - p.a.y) * p.t
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(192, 132, 252, 0.9)'
          ctx.shadowColor = 'rgba(192, 132, 252, 0.8)'
          ctx.shadowBlur = 6
          ctx.fill()
          ctx.shadowBlur = 0
        })
      }

      // A visitor who has asked for reduced motion still sees the neural
      // graph as a static illustration; we just stop repainting an unchanging
      // frame 60x/second, which was pure wasted CPU.
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-70 pointer-events-none"
      aria-hidden="true"
    />
  )
}
