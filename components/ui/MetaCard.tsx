import Link from 'next/link'
import { ReactNode } from 'react'

interface MetaCardProps {
  title: string
  description: string
  stats?: Array<{ label: string; value: string }>
  href?: string
  variant?: 'meta' | 'economy' | 'training' | 'warning' | 'default'
  children?: ReactNode
}

export default function MetaCard({
  title,
  description,
  stats,
  href,
  variant = 'default',
  children,
}: MetaCardProps) {
  const variantStyles = {
    meta: {
      border: 'border-tactical-purple/60',
      bg: 'bg-tactical-purple/10',
      title: 'text-tactical-purple',
      accent: 'text-tactical-purple',
    },
    economy: {
      border: 'border-tactical-green/60',
      bg: 'bg-tactical-green/10',
      title: 'text-tactical-green',
      accent: 'text-tactical-green',
    },
    training: {
      border: 'border-tactical-orange/60',
      bg: 'bg-tactical-orange/10',
      title: 'text-tactical-orange',
      accent: 'text-tactical-orange',
    },
    warning: {
      border: 'border-tactical-orange/60',
      bg: 'bg-tactical-orange/10',
      title: 'text-tactical-orange',
      accent: 'text-tactical-orange',
    },
    default: {
      border: 'border-slate-700/60',
      bg: 'bg-background-elevated/50',
      title: 'text-slate-200',
      accent: 'text-tactical-cyan',
    },
  }

  const style = variantStyles[variant]

  const content = (
    <div className={`
      p-6 rounded-panel border-2 ${style.border} ${style.bg} backdrop-blur-glass 
      card-hover ${href ? 'cursor-pointer group' : ''}
    `}>
      <div className="flex items-start justify-between mb-3">
        <h3 className={`text-sm font-semibold tracking-[0.15em] uppercase ${style.title} font-hud`}>
          {title}
        </h3>
        {href && (
          <svg
            className={`w-5 h-5 ${style.accent} opacity-0 group-hover:opacity-100 transition-all duration-smooth transform group-hover:translate-x-1`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
      <p className="text-sm text-text-secondary mb-4 leading-relaxed">{description}</p>
      {stats && stats.length > 0 && (
        <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-700/40">
          {stats.map((stat, index) => (
            <div key={`stat-${index}-${stat.label}`} className="flex justify-between items-center text-xs">
              <span className="text-text-muted font-medium font-hud">{stat.label}</span>
              <span className={`font-mono font-semibold ${style.accent}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

