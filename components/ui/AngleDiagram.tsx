'use client'

import { useEffect, useRef } from 'react'

export default function AngleDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.fillStyle = '#e7e5e4'
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Draw Tank Hull (Rectangle) - Angled
    ctx.save()
    ctx.translate(rect.width / 2, rect.height / 2)
    ctx.rotate((45 * Math.PI) / 180) // 45 deg angle
    ctx.fillStyle = '#4b5563' // Tank color
    ctx.fillRect(-40, -60, 80, 120)

    // Turret
    ctx.fillStyle = '#374151'
    ctx.beginPath()
    ctx.arc(0, 0, 30, 0, Math.PI * 2)
    ctx.fill()

    // Gun Barrel
    ctx.fillStyle = '#1f2937'
    ctx.fillRect(-5, -80, 10, 60)
    ctx.restore()

    // Incoming Shell Vector
    ctx.beginPath()
    ctx.moveTo(rect.width / 2, rect.height - 20)
    ctx.lineTo(rect.width / 2, rect.height / 2 + 60)
    ctx.strokeStyle = '#dc2626' // Red
    ctx.lineWidth = 3
    ctx.setLineDash([5, 5])
    ctx.stroke()

    // Text Labels
    ctx.fillStyle = '#1c1917'
    ctx.font = 'bold 14px Inter'
    ctx.fillText('Enemy Fire', rect.width / 2 + 10, rect.height - 30)
    ctx.fillText('Effective Thickness ++', rect.width / 2 + 60, rect.height / 2)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[250px] bg-stone-200 rounded-lg"
      style={{ maxWidth: '100%' }}
    />
  )
}

