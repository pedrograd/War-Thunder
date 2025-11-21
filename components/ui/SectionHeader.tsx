interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  accent?: 'meta' | 'economy' | 'academy' | 'warning' | 'primary'
}

export default function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  className = '',
  accent = 'academy'
}: SectionHeaderProps) {
  const accentColors = {
    meta: 'text-accent-meta',
    economy: 'text-accent-economy',
    academy: 'text-accent-academy',
    warning: 'text-accent-warning',
    primary: 'text-accent-primary',
  }

  return (
    <header className={`${className} mb-10 md:mb-14 animate-fade-in-up`}>
      {eyebrow && (
        <div className={`eyebrow ${accentColors[accent]} mb-4 flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-smooth`}>
          <span className="w-10 h-px bg-current opacity-60"></span>
          {eyebrow}
          <span className="flex-1 h-px bg-current opacity-20"></span>
        </div>
      )}
      <h1 className={`text-4xl md:text-5xl font-bold text-text-primary mb-6 stencil-title ${accentColors[accent]} leading-tight`}>
        {title}
      </h1>
      {description && (
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mt-2">
          {description}
        </p>
      )}
    </header>
  )
}
