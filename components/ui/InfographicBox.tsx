import { ReactNode } from 'react'

interface InfographicBoxProps {
  icon?: string
  title: string
  description: string
  children?: ReactNode
  className?: string
}

export default function InfographicBox({
  icon,
  title,
  description,
  children,
  className = '',
}: InfographicBoxProps) {
  return (
    <div className={`infographic-box group ${className}`}>
      <div className="infographic-label">DATA VISUALIZATION</div>
      {icon && (
        <i className={`fa-solid ${icon} group-hover:text-amber-500 transition`}></i>
      )}
      <h4 className="text-white font-bold hud-font text-lg mb-2">{title}</h4>
      <p className="max-w-md">{description}</p>
      {children}
    </div>
  )
}

