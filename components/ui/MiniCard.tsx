import Link from 'next/link'
import { ReactNode } from 'react'

interface MiniCardProps {
  title: string
  value: string | number
  subtitle?: string
  href?: string
  variant?: 'default' | 'success' | 'warning' | 'info'
  icon?: ReactNode
}

export default function MiniCard({
  title,
  value,
  subtitle,
  href,
  variant = 'default',
  icon,
}: MiniCardProps) {
  const variantStyles = {
    default: 'border-slate-700/60 bg-background-elevated/50',
    success: 'border-tactical-green/60 bg-tactical-green/10',
    warning: 'border-tactical-orange/60 bg-tactical-orange/10',
    info: 'border-tactical-cyan/60 bg-tactical-cyan/10',
  }

  const content = (
    <div className={`p-4 rounded-xl border ${variantStyles[variant]} backdrop-blur-sm transition-smooth ${href ? 'hover:border-opacity-100 cursor-pointer' : ''}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="text-xs font-semibold tracking-wide uppercase text-slate-400">
          {title}
        </div>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>
      <div className="text-2xl font-bold text-slate-200 mb-1">{value}</div>
      {subtitle && <div className="text-xs text-slate-400">{subtitle}</div>}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

