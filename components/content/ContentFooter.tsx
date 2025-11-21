import Link from 'next/link'
import { ContentFrontmatter } from '@/types/content'

interface ContentFooterProps {
  frontmatter: ContentFrontmatter
  category?: string
}

export default function ContentFooter({ frontmatter, category }: ContentFooterProps) {
  // Generate automatic cross-links based on content metadata
  const autoLinks: string[] = []
  
  if (frontmatter.nation) {
    autoLinks.push(`/nations/${frontmatter.nation}`)
  }
  
  if (frontmatter.vehicle) {
    autoLinks.push(`/vehicles/${frontmatter.nation || 'usa'}/${frontmatter.vehicle}`)
  }
  
  if (frontmatter.map) {
    autoLinks.push(`/maps/${frontmatter.map}`)
  }
  
  if (frontmatter.module && category === 'academy') {
    autoLinks.push(`/academy/${frontmatter.module}`)
  }
  
  // Combine manual related links with auto-generated links
  const allRelated = [
    ...(frontmatter.related || []),
    ...autoLinks.filter(link => !frontmatter.related?.includes(link))
  ]
  
  return (
    <footer className="mt-12 pt-8 border-t border-border">
      <div className="content-width">
        {allRelated.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Related Content</h3>
            <ul className="space-y-2">
              {allRelated.map((link) => {
                // Extract display name from path and format it
                const pathParts = link.split('/').filter(p => p)
                let displayName = pathParts[pathParts.length - 1]?.replace(/-/g, ' ') || link
                
                // Capitalize first letter of each word
                displayName = displayName
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
                
                return (
                  <li key={link}>
                    <Link 
                      href={link}
                      className="text-primary hover:text-primary-hover transition-colors underline"
                    >
                      {displayName}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        
        <div className="mt-8 text-sm text-text-muted">
          <p>
            Found this guide helpful? Share it with other War Thunder players!
          </p>
          {frontmatter.lastUpdated && (
            <p className="mt-2">
              Last updated: {new Date(frontmatter.lastUpdated).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}

