'use client'

interface MetaTrendChartProps {
  title?: string
  className?: string
}

/**
 * Simple presentational chart component showing meta trend visualization
 * Uses qualitative bars to represent different BR tiers or meta states
 */
export default function MetaTrendChart({ title = 'Meta Health Trends', className = '' }: MetaTrendChartProps) {
  const trends = [
    { label: 'Low Tier', value: 75, status: 'Balanced', color: 'bg-tactical-green' },
    { label: 'Mid Tier', value: 85, status: 'Stable', color: 'bg-tactical-cyan' },
    { label: 'High Tier', value: 45, status: 'Volatile', color: 'bg-tactical-orange' },
    { label: 'Top Tier', value: 35, status: 'Unstable', color: 'bg-tactical-orange' },
  ]

  return (
    <div className={`p-6 bg-background-elevated border border-slate-700/60 rounded-2xl ${className}`} role="img" aria-label={title}>
      {title && (
        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-300 mb-4">
          {title}
        </h3>
      )}
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-medium">{trend.label}</span>
              <span className="text-slate-300 font-mono">{trend.status}</span>
            </div>
            <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${trend.color} transition-all duration-500 ease-out rounded-full`}
                style={{ width: `${trend.value}%` }}
                aria-label={`${trend.label}: ${trend.status}`}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-4 italic">
        Qualitative representation of meta stability across BR ranges
      </p>
    </div>
  )
}

