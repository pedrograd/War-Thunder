import Link from 'next/link'
import { Chapter } from '@/types/content'

interface ChapterNavProps {
  previous: Chapter | null
  next: Chapter | null
  currentChapter: number
  totalChapters: number
  modulePath: string
}

export default function ChapterNav({ previous, next, currentChapter, totalChapters, modulePath }: ChapterNavProps) {
  return (
    <nav className="flex items-center justify-between py-6 my-8 border-y border-border">
      <div className="flex-1">
        {previous ? (
          <Link 
            href={previous.path}
            className="group flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <div className="text-xs text-text-muted">Previous</div>
              <div className="font-medium">{previous.title}</div>
            </div>
          </Link>
        ) : (
          <div className="text-text-muted text-sm">No previous chapter</div>
        )}
      </div>
      
      <div className="px-4 text-center">
        <div className="text-sm text-text-secondary">
          Chapter {currentChapter} of {totalChapters}
        </div>
        <Link 
          href={modulePath}
          className="text-xs text-primary hover:text-primary-hover"
        >
          Module Overview
        </Link>
      </div>
      
      <div className="flex-1 text-right">
        {next ? (
          <Link 
            href={next.path}
            className="group flex items-center justify-end space-x-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <div className="text-right">
              <div className="text-xs text-text-muted">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div className="text-text-muted text-sm">No next chapter</div>
        )}
      </div>
    </nav>
  )
}

