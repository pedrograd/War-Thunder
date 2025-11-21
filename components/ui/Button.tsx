import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  accent?: 'meta' | 'economy' | 'academy' | 'warning' | 'primary'
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children,
  accent = 'primary',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-button transition-all duration-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background'
  
  const accentColors = {
    meta: {
      bg: 'bg-accent-meta',
      hover: 'hover:bg-accent-meta/90',
      text: 'text-white',
      ring: 'focus:ring-accent-meta',
      border: 'border-accent-meta',
      outline: 'text-accent-meta hover:bg-accent-meta/10',
    },
    economy: {
      bg: 'bg-accent-economy',
      hover: 'hover:bg-accent-economy/90',
      text: 'text-white',
      ring: 'focus:ring-accent-economy',
      border: 'border-accent-economy',
      outline: 'text-accent-economy hover:bg-accent-economy/10',
    },
    academy: {
      bg: 'bg-accent-academy',
      hover: 'hover:bg-accent-academy/90',
      text: 'text-white',
      ring: 'focus:ring-accent-academy',
      border: 'border-accent-academy',
      outline: 'text-accent-academy hover:bg-accent-academy/10',
    },
    warning: {
      bg: 'bg-accent-warning',
      hover: 'hover:bg-accent-warning/90',
      text: 'text-white',
      ring: 'focus:ring-accent-warning',
      border: 'border-accent-warning',
      outline: 'text-accent-warning hover:bg-accent-warning/10',
    },
    primary: {
      bg: 'bg-accent-primary',
      hover: 'hover:bg-accent-primary/90',
      text: 'text-white',
      ring: 'focus:ring-accent-primary',
      border: 'border-accent-primary',
      outline: 'text-accent-primary hover:bg-accent-primary/10',
    },
  }
  
  const accentStyle = accentColors[accent] || accentColors.primary
  
  const variantStyles = {
    primary: `${accentStyle.bg} ${accentStyle.hover} ${accentStyle.text} ${accentStyle.ring} shadow-glass hover:shadow-glass-lg hover:scale-105`,
    secondary: 'bg-background-elevated hover:bg-background-surface text-text-primary border border-border focus:ring-accent-academy hover:border-accent-academy/50',
    outline: `border ${accentStyle.border} ${accentStyle.outline} ${accentStyle.ring} hover:scale-105`,
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-background-surface focus:ring-accent-academy',
  }
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

