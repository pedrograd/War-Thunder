import { ReactNode } from 'react'

interface CalloutProps {
  type?: 'info' | 'tip' | 'warning' | 'danger'
  title?: string
  children: ReactNode
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      border: 'border-info',
      bg: 'bg-info/10',
      icon: 'ℹ️',
      text: 'text-info',
    },
    tip: {
      border: 'border-success',
      bg: 'bg-success/10',
      icon: '💡',
      text: 'text-success',
    },
    warning: {
      border: 'border-warning',
      bg: 'bg-warning/10',
      icon: '⚠️',
      text: 'text-warning',
    },
    danger: {
      border: 'border-error',
      bg: 'bg-error/10',
      icon: '⚠️',
      text: 'text-error',
    },
  }
  
  const style = styles[type]
  
  return (
    <div className={`border-l-4 ${style.border} ${style.bg} p-4 my-6 rounded-r-lg`}>
      <div className="flex items-start">
        <span className="mr-3 text-xl">{style.icon}</span>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-2 ${style.text}`}>
              {title}
            </h4>
          )}
          <div className="text-text-primary">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

