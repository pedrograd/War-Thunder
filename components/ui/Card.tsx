import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'glass' | 'elevated'
  accent?: 'meta' | 'economy' | 'academy' | 'warning' | 'none'
  hover?: boolean
}

export default function Card({ 
  children, 
  className = '', 
  padding = 'md',
  variant = 'default',
  accent = 'none',
  hover = false
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const variantStyles = {
    default: 'bg-background-surface border border-border',
    glass: 'bg-background-elevated/60 backdrop-blur-glass border border-slate-700/40 shadow-glass',
    elevated: 'bg-background-elevated border border-slate-600/50 shadow-glass-lg',
  }

  const accentBorders = {
    meta: 'border-l-4 border-l-accent-meta/70',
    economy: 'border-l-4 border-l-accent-economy/70',
    academy: 'border-l-4 border-l-accent-academy/70',
    warning: 'border-l-4 border-l-accent-warning/70',
    none: '',
  }

  const hoverClass = hover ? 'card-hover transition-all duration-smooth' : 'transition-all duration-smooth'
  
  return (
    <div className={`
      rounded-card ${variantStyles[variant]} ${paddingStyles[padding]} 
      ${accentBorders[accent]} ${hoverClass} ${className}
    `}>
      {children}
    </div>
  )
}

