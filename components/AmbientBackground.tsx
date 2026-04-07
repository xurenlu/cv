'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import styles from './AmbientBackground.module.css'

type Star = {
  x: number
  y: number
  r: number
  a: number
  sy: number
  sx: number
  phase: number
  glow: boolean
}

/** 多层粒子 + 流动色块 + 网格 — 打印隐藏 */
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
    let dpr = 1
    const stars: Star[] = []

    function resize() {
      const el = canvasRef.current
      if (!el) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = Math.max(document.documentElement.scrollHeight, window.innerHeight)
      el.width = Math.floor(w * dpr)
      el.height = Math.floor(h * dpr)
      el.style.width = `${w}px`
      el.style.height = `${h}px`
      stars.length = 0
      const area = w * h
      const count = Math.min(420, Math.floor(area / 5200))
      for (let i = 0; i < count; i++) {
        const glow = Math.random() < 0.12
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: glow ? Math.random() * 1.8 + 0.6 : Math.random() * 1.1 + 0.25,
          a: Math.random() * 0.55 + 0.25,
          sy: Math.random() * 0.55 + 0.08,
          sx: (Math.random() - 0.5) * 0.35,
          phase: Math.random() * Math.PI * 2,
          glow,
        })
      }
    }

    let t = 0
    const c = canvas
    function frame() {
      t += 0.018
      draw.setTransform(1, 0, 0, 1, 0, 0)
      draw.clearRect(0, 0, c.width, c.height)
      draw.scale(dpr, dpr)

      const isDark = themeRef.current === 'dark'

      for (const st of stars) {
        const tw = 0.55 + 0.45 * Math.sin(t * 2.4 + st.phase)
        const px = st.x + Math.sin(t * 0.7 + st.phase) * 1.8
        const py = st.y

        if (st.glow) {
          draw.shadowBlur = isDark ? 14 : 10
          draw.shadowColor = isDark
            ? 'rgba(160, 210, 255, 0.9)'
            : 'rgba(40, 90, 200, 0.65)'
        } else {
          draw.shadowBlur = 0
        }

        draw.fillStyle = isDark
          ? `rgba(210, 230, 255, ${st.a * tw})`
          : `rgba(30, 70, 200, ${st.a * tw * 0.95})`
        draw.beginPath()
        draw.arc(px, py, st.r, 0, Math.PI * 2)
        draw.fill()

        st.y += st.sy
        st.x += st.sx + Math.sin(t + st.phase) * 0.15
        if (st.y > h + 4) {
          st.y = -4
          st.x = Math.random() * w
        }
        if (st.x < -8) st.x = w + 4
        if (st.x > w + 8) st.x = -4
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
      <div className={styles.mesh}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>
      <div className={styles.grid} />
      <div className={styles.fogA} />
      <div className={styles.fogB} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
