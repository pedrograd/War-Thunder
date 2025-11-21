'use client'

import { ReactNode } from 'react'

interface SimulationContainerProps {
  title: string
  steps?: string[]
  children?: ReactNode
  className?: string
}

export default function SimulationContainer({
  title,
  steps = [],
  children,
  className = '',
}: SimulationContainerProps) {
  return (
    <div className={`sim-box ${className}`}>
      <div className="sim-header">SIMULATION: {title}</div>
      <div className="flex justify-center items-center h-32 border-b border-dashed border-amber-500/30 mb-2">
        {children || (
          <i className="fa-solid fa-play-circle text-4xl animate-pulse cursor-pointer"></i>
        )}
      </div>
      {steps.length > 0 && (
        <div className="sim-timeline">
          {steps.map((step, index) => (
            <div key={`step-${index}-${step.substring(0, 10)}`}>[ {step} ]</div>
          ))}
        </div>
      )}
    </div>
  )
}

