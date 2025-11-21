interface SkeletonProps {
  variant?: 'text' | 'card' | 'avatar' | 'heading' | 'paragraph' | 'list'
  className?: string
  lines?: number
  width?: string
}

export default function Skeleton({ 
  variant = 'text', 
  className = '',
  lines = 1,
  width
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-background-elevated/50 rounded'
  
  if (variant === 'card') {
    return (
      <div className={`${baseClasses} p-6 ${className}`}>
        <div className={`h-6 ${baseClasses} mb-4 ${width || 'w-3/4'}`}></div>
        <div className={`h-4 ${baseClasses} mb-2 w-full`}></div>
        <div className={`h-4 ${baseClasses} mb-2 w-5/6`}></div>
        <div className={`h-4 ${baseClasses} w-4/6`}></div>
      </div>
    )
  }
  
  if (variant === 'heading') {
    return (
      <div className={`${baseClasses} h-8 mb-4 ${width || 'w-1/2'} ${className}`}></div>
    )
  }
  
  if (variant === 'paragraph') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i} 
            className={`h-4 ${baseClasses} ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
          ></div>
        ))}
      </div>
    )
  }
  
  if (variant === 'list') {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={`h-12 ${baseClasses}`}></div>
        ))}
      </div>
    )
  }
  
  if (variant === 'avatar') {
    return (
      <div className={`${baseClasses} rounded-full h-12 w-12 ${className}`}></div>
    )
  }
  
  // Default: text
  return (
    <div className={`${baseClasses} h-4 ${width || 'w-full'} ${className}`}></div>
  )
}

