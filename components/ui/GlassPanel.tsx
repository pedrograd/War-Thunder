import { ReactNode, CSSProperties } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  variant?: 'default' | 'elevated' | 'subtle'
  padding?: 'sm' | 'md' | 'lg'
  accent?: 'meta' | 'economy' | 'academy' | 'warning' | 'primary' | 'none'
  hover?: boolean
}

export default function GlassPanel({ 
  children, 
  className = '', 
  style,
  variant = 'default',
  padding = 'md',
  accent = 'none',
  hover = false
}: GlassPanelProps) {
  const variantStyles = {
    default: 'bg-background-elevated/60 backdrop-blur-glass border border-slate-700/40',
    elevated: 'bg-background-elevated/80 backdrop-blur-glass-lg border border-slate-600/50',
    subtle: 'bg-background-elevated/40 backdrop-blur-sm border border-slate-700/30',
  }

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const accentBorders = {
    meta: 'border-l-4 border-l-accent-meta/70',
    economy: 'border-l-4 border-l-accent-economy/70',
    academy: 'border-l-4 border-l-accent-academy/70',
    warning: 'border-l-4 border-l-accent-warning/70',
    primary: 'border-l-4 border-l-accent-primary/70',
    none: '',
  }

  const hoverClass = hover ? 'card-hover cursor-pointer transition-all duration-smooth' : 'transition-all duration-smooth'
  
  return (
    <div 
      className={`
        glass-panel rounded-panel ${variantStyles[variant]} ${paddingStyles[padding]} 
        ${accentBorders[accent]} ${hoverClass} ${className}
      `}
      style={style}
    >
      {children}
    </div>
  )
}

