import Link from 'next/link'

interface MapTacticsCardProps {
  id: string
  name: string
  overview: string
  spawnLayouts?: string[]
  strategies?: string[]
  counters?: string[]
  image?: string
  href?: string
}

export default function MapTacticsCard({
  name,
  overview,
  spawnLayouts = [],
  strategies = [],
  counters = [],
  href,
}: MapTacticsCardProps) {
  const content = (
    <div className={`p-5 rounded-xl border-2 border-tactical-cyan/60 bg-tactical-cyan/10 backdrop-blur-sm transition-smooth ${href ? 'hover:border-opacity-100 cursor-pointer' : ''}`}>
      <h3 className="text-lg font-semibold text-slate-200 mb-2">{name}</h3>
      <p className="text-sm text-slate-300 mb-4 leading-relaxed">{overview}</p>

      {spawnLayouts.length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-tactical-cyan mb-2 font-semibold uppercase">Spawn Layouts</div>
          <div className="flex flex-wrap gap-2">
            {spawnLayouts.slice(0, 3).map((layout, i) => (
              <span key={i} className="px-2 py-1 bg-background-elevated rounded text-xs text-slate-300">
                {layout}
              </span>
            ))}
          </div>
        </div>
      )}

      {strategies.length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-tactical-green mb-2 font-semibold uppercase">Key Strategies</div>
          <ul className="text-xs text-slate-300 space-y-1">
            {strategies.slice(0, 2).map((strategy, i) => (
              <li key={i}>• {strategy}</li>
            ))}
          </ul>
        </div>
      )}

      {counters.length > 0 && (
        <div>
          <div className="text-xs text-tactical-orange mb-2 font-semibold uppercase">Watch For</div>
          <ul className="text-xs text-slate-300 space-y-1">
            {counters.slice(0, 2).map((counter, i) => (
              <li key={i}>• {counter}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

