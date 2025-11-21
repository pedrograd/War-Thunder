import { ContentFrontmatter } from '@/types/content'
import { calculateReadingTime, formatReadingTime } from '@/lib/utils/readingTime'
import SectionHeader from '@/components/ui/SectionHeader'
import PillTag from '@/components/ui/PillTag'

interface ContentHeaderProps {
  frontmatter: ContentFrontmatter
  category?: string
  content?: string
}

export default function ContentHeader({ frontmatter, category, content }: ContentHeaderProps) {
  const readingTime = content ? calculateReadingTime(content) : null
  const wordCount = content ? content.trim().split(/\s+/).filter(word => word.length > 0).length : null

  const categoryLabel = category 
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : ''

  const getAccent = (category?: string): 'meta' | 'economy' | 'academy' | 'warning' | 'primary' => {
    if (!category) return 'primary'
    if (category.includes('academy') || category.includes('training')) return 'academy'
    if (category.includes('meta')) return 'meta'
    if (category.includes('economy')) return 'economy'
    return 'primary'
  }

  return (
    <header className="mb-8 pb-8 border-b border-slate-700/60 animate-fade-in-up">
      <div className="content-width">
        <SectionHeader
          eyebrow={categoryLabel || 'DOCUMENTATION'}
          title={frontmatter.title}
          description={frontmatter.description}
          accent={getAccent(category)}
          className="mb-6"
        />
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
          {readingTime && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent-academy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatReadingTime(readingTime)}
            </span>
          )}
          {wordCount && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent-meta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {wordCount.toLocaleString()} words
            </span>
          )}
          {frontmatter.lastUpdated && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent-economy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated {new Date(frontmatter.lastUpdated).toLocaleDateString()}
            </span>
          )}
          {frontmatter.version && (
            <PillTag variant="status">{frontmatter.version}</PillTag>
          )}
        </div>
        
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <PillTag key={tag} variant="default">{tag}</PillTag>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
