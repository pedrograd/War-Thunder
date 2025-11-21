'use client'

import Link from 'next/link'

interface ModuleCardProps {
  id: string
  title: string
  description: string
  href: string
  icon: string
  category?: string
  contentCount?: number
  readingTime?: number
}

export default function ModuleCard({ 
  title, 
  description, 
  href, 
  icon, 
  contentCount,
  readingTime 
}: ModuleCardProps) {
  const formatReadingTime = (minutes: number): string => {
    if (minutes === 1) return '1 min'
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (mins === 0) return hours === 1 ? '1 hour' : `${hours} hours`
    return `${hours}h ${mins}m`
  }
  
  return (
    <Link 
      href={href}
      className="block p-5 bg-background-elevated border border-slate-700/60 rounded-2xl hover:border-tactical-cyan/60 transition-all hover:shadow-lg group"
    >
      <div className="flex items-start space-x-3">
        <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">{icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-tactical-cyan transition-colors text-slate-200">
            {title}
          </h3>
          <p className="text-slate-400 text-sm mb-3 leading-relaxed">
            {description}
          </p>
          {(contentCount || readingTime) && (
            <div className="flex items-center gap-4 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-700/40">
              {contentCount && contentCount > 0 && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {contentCount} guide{contentCount !== 1 ? 's' : ''}
                </span>
              )}
              {readingTime && readingTime > 0 && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatReadingTime(readingTime)}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

