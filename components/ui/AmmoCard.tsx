import { ReactNode } from 'react'

interface AmmoCardProps {
  name: string
  type: string
  penetration?: number
  damage?: string
  description: string
  bestFor?: string[]
  icon?: ReactNode
}

export default function AmmoCard({
  name,
  type,
  penetration,
  damage,
  description,
  bestFor = [],
  icon,
}: AmmoCardProps) {
  return (
    <div className="p-5 rounded-xl border-2 border-slate-700/60 bg-background-elevated/50 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-1">{name}</h3>
          <div className="text-xs text-slate-400 uppercase">{type}</div>
        </div>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>

      <p className="text-sm text-slate-300 mb-4 leading-relaxed">{description}</p>

      {(penetration || damage) && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {penetration && (
            <div>
              <div className="text-xs text-slate-400 mb-1">Penetration</div>
              <div className="text-lg font-mono text-tactical-cyan">{penetration}mm</div>
            </div>
          )}
          {damage && (
            <div>
              <div className="text-xs text-slate-400 mb-1">Damage</div>
              <div className="text-lg font-mono text-tactical-orange">{damage}</div>
            </div>
          )}
        </div>
      )}

      {bestFor.length > 0 && (
        <div>
          <div className="text-xs text-tactical-green mb-2 font-semibold uppercase">Best For</div>
          <div className="flex flex-wrap gap-2">
            {bestFor.map((use, i) => (
              <span key={i} className="px-2 py-1 bg-background-elevated rounded text-xs text-slate-300">
                {use}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

