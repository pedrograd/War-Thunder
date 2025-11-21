import { ReactNode } from 'react'

interface PillTagProps {
  children: ReactNode
  variant?: 'default' | 'br' | 'role' | 'status' | 'nation'
  className?: string
}

export default function PillTag({
  children,
  variant = 'default',
  className = '',
}: PillTagProps) {
  const variantStyles = {
    default: 'bg-background-elevated/60 text-text-secondary border-slate-700/60',
    br: 'bg-accent-warning/10 text-accent-warning border-accent-warning/30',
    role: 'bg-accent-academy/10 text-accent-academy border-accent-academy/30',
    status: 'bg-accent-economy/10 text-accent-economy border-accent-economy/30',
    nation: 'bg-accent-meta/10 text-accent-meta border-accent-meta/30',
  }

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-xs font-medium border backdrop-blur-sm
        transition-all duration-micro
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

