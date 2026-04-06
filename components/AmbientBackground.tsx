'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import styles from './AmbientBackground.module.css'

/** Subtle starfield + soft fog — hidden in print via .no-print */
export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const draw = ctx

    let rafId = 0
    let w = 0
    let h = 0

    const stars: { x: number; y: number; r: number; a: number; s: number }[] = []

    function resize() {
      const el = canvasRef.current
      if (!el) return
      w = window.innerWidth
      h = Math.max(document.documentElement.scrollHeight, window.innerHeight)
      el.width = w
      el.height = h
      stars.length = 0
      const count = Math.min(120, Math.floor((w * h) / 18000))
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.2,
          a: Math.random() * 0.5 + 0.15,
          s: Math.random() * 0.02 + 0.005,
        })
      }
    }

    let t = 0
    function frame() {
      t += 0.016
      draw.clearRect(0, 0, w, h)
      const isDark = themeRef.current === 'dark'

      for (const st of stars) {
        const tw = 0.65 + 0.35 * Math.sin(t * 2 + st.x * 0.01)
        draw.fillStyle = isDark
          ? `rgba(200, 210, 255, ${st.a * tw})`
          : `rgba(80, 100, 180, ${st.a * tw * 0.45})`
        draw.beginPath()
        draw.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        draw.fill()
        st.y += st.s
        if (st.y > h) st.y = 0
      }
      rafId = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={`${styles.root} no-print`} aria-hidden>
      <div className={styles.fogA} />
      <div className={styles.fogB} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
