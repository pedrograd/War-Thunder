import Link from 'next/link'
import Image from 'next/image'

interface VehicleCardProps {
  id: string
  name: string
  br: number
  role: string
  nation: string
  type: 'tank' | 'air' | 'heli' | 'naval'
  strengths?: string[]
  weaknesses?: string[]
  metaNotes?: string[]
  img?: string
  href?: string
}

export default function VehicleCard({
  name,
  br,
  role,
  nation,
  type,
  strengths = [],
  weaknesses = [],
  metaNotes = [],
  img,
  href,
}: VehicleCardProps) {
  const typeColors = {
    tank: 'border-tactical-orange/60 bg-tactical-orange/10',
    air: 'border-tactical-cyan/60 bg-tactical-cyan/10',
    heli: 'border-tactical-purple/60 bg-tactical-purple/10',
    naval: 'border-tactical-green/60 bg-tactical-green/10',
  }

  const content = (
    <div className={`p-5 rounded-xl border-2 ${typeColors[type]} backdrop-blur-sm transition-smooth ${href ? 'hover:border-opacity-100 cursor-pointer' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-1">{name}</h3>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>BR {br}</span>
            <span>•</span>
            <span>{nation}</span>
            <span>•</span>
            <span className="uppercase">{type}</span>
          </div>
        </div>
        <div className="px-2 py-1 bg-background-elevated rounded text-xs font-mono text-slate-300">
          {br.toFixed(1)}
        </div>
      </div>
      
      <div className="text-sm text-slate-300 mb-3">
        <span className="text-slate-400">Role:</span> {role}
      </div>

      {strengths.length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-tactical-green mb-1 font-semibold uppercase">Strengths</div>
          <ul className="text-xs text-slate-300 space-y-1">
            {strengths.slice(0, 2).map((strength, i) => (
              <li key={i}>• {strength}</li>
            ))}
          </ul>
        </div>
      )}

      {metaNotes.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-700/40">
          <div className="text-xs text-tactical-purple mb-1 font-semibold uppercase">Meta Note</div>
          <p className="text-xs text-slate-300">{metaNotes[0]}</p>
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

