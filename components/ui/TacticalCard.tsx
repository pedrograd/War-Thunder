import Link from 'next/link'
import { ReactNode } from 'react'

interface TacticalCardProps {
  children: ReactNode
  variant?: 'ground' | 'air' | 'meta' | 'warn' | 'default'
  href?: string
  className?: string
}

export default function TacticalCard({
  children,
  variant = 'default',
  href,
  className = '',
}: TacticalCardProps) {
  const variantClass = variant !== 'default' ? `tac-card-${variant}` : ''
  const cardClasses = `tac-card ${variantClass} ${href ? 'cursor-pointer hover:bg-[#161b25] transition' : ''} ${className}`

  const content = <div className={cardClasses}>{children}</div>

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

