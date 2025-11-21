import { getAllContentInCategory } from '@/lib/content/loader'
import Link from 'next/link'
import { ContentFrontmatter } from '@/types/content'

interface RelatedContentProps {
  currentSlug: string
  category: string
  tags?: string[]
  maxItems?: number
}

export default function RelatedContent({
  currentSlug,
  category,
  tags = [],
  maxItems = 4,
}: RelatedContentProps) {
  const allContent = getAllContentInCategory(category)
  
  // Filter out current content and find related items
  const related = allContent
    .filter((item) => item.slug !== currentSlug)
    .map((item) => {
      // Calculate relevance score based on tags and category
      let score = 0
      
      if (item.frontmatter.tags) {
        const commonTags = item.frontmatter.tags.filter((tag) =>
          tags.includes(tag)
        ).length
        score += commonTags * 2
      }
      
      // Prefer items with similar tags
      if (item.frontmatter.category === category) {
        score += 1
      }
      
      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxItems)

  if (related.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Related Content
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={item.path}
            className="block p-6 bg-background-surface border border-border rounded-lg hover:border-primary transition-all hover:shadow-lg group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {item.frontmatter.title}
              </h3>
              {item.frontmatter.category && (
                <span className="text-xs text-text-muted uppercase px-2 py-1 bg-background-elevated rounded ml-3 whitespace-nowrap">
                  {item.frontmatter.category.replace('-', ' ')}
                </span>
              )}
            </div>
            {item.frontmatter.description && (
              <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                {item.frontmatter.description}
              </p>
            )}
            {item.frontmatter.tags && item.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.frontmatter.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-background-elevated text-text-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}

