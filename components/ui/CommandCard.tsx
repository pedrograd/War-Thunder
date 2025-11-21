import Link from 'next/link'
import { ReactNode } from 'react'

interface CommandCardProps {
  title: string
  description: string
  stats?: string[]
  variant?: 'meta' | 'economy' | 'training' | 'warning' | 'default'
  href?: string
  children?: ReactNode
}

export default function CommandCard({
  title,
  description,
  stats,
  variant = 'default',
  href,
  children,
}: CommandCardProps) {
  const variantStyles = {
    meta: {
      border: 'border-tactical-purple/40',
      bg: 'bg-gradient-to-br from-background-elevated to-background-elevated/50',
      accent: 'text-tactical-purple',
      title: 'text-tactical-purple',
    },
    economy: {
      border: 'border-tactical-green/40',
      bg: 'bg-gradient-to-br from-background-elevated to-background-elevated/50',
      accent: 'text-tactical-green',
      title: 'text-tactical-green',
    },
    training: {
      border: 'border-tactical-orange/40',
      bg: 'bg-gradient-to-br from-background-elevated to-background-elevated/50',
      accent: 'text-tactical-orange',
      title: 'text-tactical-orange',
    },
    warning: {
      border: 'border-tactical-orange/60',
      bg: 'bg-gradient-to-br from-background-elevated to-background-elevated/50',
      accent: 'text-tactical-orange',
      title: 'text-tactical-orange',
    },
    default: {
      border: 'border-slate-700/60',
      bg: 'bg-background-elevated',
      accent: 'text-tactical-cyan',
      title: 'text-slate-200',
    },
  }

  const style = variantStyles[variant]

  const content = (
    <div
      className={`
        p-5 rounded-2xl border ${style.border} ${style.bg}
        hover:border-opacity-80 transition-all duration-300
        ${href ? 'cursor-pointer group' : ''}
      `}
    >
        <div className="flex items-start justify-between mb-3">
          <div
            className={`
              text-xs font-bold tracking-[0.2em] uppercase ${style.title} code-font
            `}
          >
            {title}
          </div>
          {href && (
            <i
              className={`fa-solid fa-arrow-right text-xs ${style.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
            ></i>
          )}
        </div>
      <p className="text-sm text-slate-300 mb-3 leading-relaxed">{description}</p>
      {stats && stats.length > 0 && (
        <div className="space-y-1.5 mt-4 pt-4 border-t border-slate-700/40">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-xs text-slate-400 font-mono flex items-center gap-2 code-font"
            >
              <span className={`w-1 h-1 rounded-full ${style.accent} bg-current`} />
              {stat}
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}

