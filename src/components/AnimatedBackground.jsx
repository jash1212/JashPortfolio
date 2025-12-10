// src/components/AnimatedBackground.jsx
import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let particles = []
    let animationId

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const PARTICLE_COUNT = prefersReducedMotion ? 40 : 80

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = 1 + Math.random() * 1.3
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x <= 0 || this.x >= width) this.vx *= -1
        if (this.y <= 0 || this.y >= height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(75, 85, 99, 0.4)"
        ctx.fill()
      }
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = dx * dx + dy * dy
          if (dist < 12000) {
            ctx.beginPath()
            ctx.strokeStyle = "rgba(75, 85, 99, 0.08)"
            ctx.lineWidth = 1
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      if (!prefersReducedMotion) {
        connectParticles()
      }
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
