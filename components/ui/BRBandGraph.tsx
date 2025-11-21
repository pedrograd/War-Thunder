'use client'

interface BRBandGraphProps {
  title?: string
  className?: string
}

/**
 * Simple presentational graph showing BR band distribution
 * Uses horizontal bars to represent low/mid/high tier focus areas
 */
export default function BRBandGraph({ title = 'BR Band Focus', className = '' }: BRBandGraphProps) {
  const bands = [
    { 
      range: '1.0 - 3.7', 
      label: 'Low Tier', 
      width: 30, 
      color: 'bg-tactical-green',
      description: 'Beginner-friendly, balanced gameplay'
    },
    { 
      range: '4.0 - 6.7', 
      label: 'Mid Tier', 
      width: 50, 
      color: 'bg-tactical-cyan',
      description: 'Most stable meta, recommended for grinding'
    },
    { 
      range: '7.0 - 9.7', 
      label: 'High Tier', 
      width: 40, 
      color: 'bg-tactical-orange',
      description: 'CAS-heavy, requires strong lineups'
    },
    { 
      range: '10.0+', 
      label: 'Top Tier', 
      width: 25, 
      color: 'bg-tactical-purple',
      description: 'Volatile meta, premium-heavy'
    },
  ]

  return (
    <div className={`p-6 bg-background-elevated border border-slate-700/60 rounded-2xl ${className}`} role="img" aria-label={title}>
      {title && (
        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-300 mb-4">
          {title}
        </h3>
      )}
      <div className="space-y-4">
        {bands.map((band, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <div>
                <span className="text-slate-300 font-semibold">{band.label}</span>
                <span className="text-slate-500 ml-2 font-mono">{band.range}</span>
              </div>
            </div>
            <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${band.color} transition-all duration-500 ease-out rounded-full flex items-center justify-end pr-2`}
                style={{ width: `${band.width}%` }}
                aria-label={`${band.label} (${band.range}): ${band.description}`}
              >
                <span className="text-[10px] font-mono text-white opacity-75">{band.width}%</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">{band.description}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-4 italic">
        Relative focus areas for optimal gameplay experience
      </p>
    </div>
  )
}

