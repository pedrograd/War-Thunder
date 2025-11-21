import { ReactNode } from 'react'

interface DangerBoxProps {
  title: string
  children: ReactNode
  variant?: 'warning' | 'danger' | 'alert'
}

export default function DangerBox({ title, children, variant = 'warning' }: DangerBoxProps) {
  const variantStyles = {
    warning: {
      border: 'border-tactical-orange/60',
      bg: 'bg-tactical-orange/10',
      title: 'text-tactical-orange',
      icon: '⚠️',
    },
    danger: {
      border: 'border-red-500/60',
      bg: 'bg-red-500/10',
      title: 'text-red-400',
      icon: '🚨',
    },
    alert: {
      border: 'border-tactical-cyan/60',
      bg: 'bg-tactical-cyan/10',
      title: 'text-tactical-cyan',
      icon: '📢',
    },
  }

  const style = variantStyles[variant]

  return (
    <div className={`p-5 rounded-xl border-2 ${style.border} ${style.bg} backdrop-blur-sm`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{style.icon}</span>
        <h3 className={`text-sm font-semibold tracking-[0.15em] uppercase ${style.title}`}>
          {title}
        </h3>
      </div>
      <div className="text-sm text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

