'use client'

import { useEffect, useRef } from 'react'

export default function BnZDiagram() {
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

    // Draw Path
    ctx.beginPath()
    ctx.moveTo(50, 50) // Start High
    ctx.quadraticCurveTo(rect.width / 2, rect.height - 20, rect.width - 50, 50) // Dive then Climb
    ctx.strokeStyle = '#2563eb'
    ctx.lineWidth = 4
    ctx.stroke()

    // Draw Enemy Low
    ctx.fillStyle = '#dc2626'
    ctx.beginPath()
    ctx.arc(rect.width / 2, rect.height - 60, 6, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#991b1b'
    ctx.fillText('Target', rect.width / 2 - 20, rect.height - 40)

    // Draw Phases
    ctx.fillStyle = '#1e3a8a'
    ctx.font = '12px Inter'
    ctx.fillText('1. Energy State (High)', 20, 40)
    ctx.fillText('2. Attack Run', 20, 150)
    ctx.fillText('3. Zoom Climb', rect.width - 120, 150)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[250px] bg-stone-200 rounded-lg"
      style={{ maxWidth: '100%' }}
    />
  )
}

