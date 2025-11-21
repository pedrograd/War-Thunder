import { ContentData } from '@/types/content'
import { getAllContentFiles } from './loader'

export interface SearchIndexEntry {
  id: string
  title: string
  description?: string
  content: string
  path: string
  category?: string
  tags?: string[]
}

export function buildSearchIndex(): SearchIndexEntry[] {
  const categories = [
    'academy',
    'nations',
    'maps',
    'meta',
    'economy',
    'encyclopedia',
    'weapons',
    'weakspots',
    'premium',
    'future-tech',
    'new-player-path',
    'vehicles',
  ]
  
  const index: SearchIndexEntry[] = []
  
  categories.forEach((category) => {
    const files = getAllContentFiles(category)
    files.forEach((file) => {
      try {
        const fs = require('fs')
        const path = require('path')
        const matter = require('gray-matter')
        
        const filePath = path.join(process.cwd(), 'content', category, file)
        if (fs.existsSync(filePath)) {
          const fileContents = fs.readFileSync(filePath, 'utf8')
          const { data, content } = matter(fileContents)
          
          const slug = path.basename(file, path.extname(file))
          const fullPath = category === 'academy' || category === 'new-player-path'
            ? `/${category}/${file.replace(/\.(md|mdx)$/, '').replace(/\//g, '/')}`
            : `/${category}/${slug}`
          
          index.push({
            id: `${category}-${slug}`,
            title: data.title || slug,
            description: data.description,
            content: content.substring(0, 500), // First 500 chars for search
            path: fullPath,
            category,
            tags: data.tags || [],
          })
        }
      } catch (error) {
        console.error(`Error indexing ${category}/${file}:`, error)
      }
    })
  })
  
  return index
}

export function searchContent(query: string, index: SearchIndexEntry[]): SearchIndexEntry[] {
  if (!query || query.trim().length === 0) {
    return []
  }
  
  const lowerQuery = query.toLowerCase().trim()
  const queryTerms = lowerQuery.split(/\s+/)
  
  return index
    .map((entry) => {
      let score = 0
      
      // Title matches (highest weight)
      const titleLower = entry.title.toLowerCase()
      if (titleLower.includes(lowerQuery)) {
        score += 10
      }
      queryTerms.forEach((term) => {
        if (titleLower.includes(term)) {
          score += 5
        }
      })
      
      // Description matches (medium weight)
      if (entry.description) {
        const descLower = entry.description.toLowerCase()
        if (descLower.includes(lowerQuery)) {
          score += 5
        }
        queryTerms.forEach((term) => {
          if (descLower.includes(term)) {
            score += 2
          }
        })
      }
      
      // Content matches (lower weight)
      const contentLower = entry.content.toLowerCase()
      queryTerms.forEach((term) => {
        const matches = (contentLower.match(new RegExp(term, 'g')) || []).length
        score += matches
      })
      
      // Tag matches (medium weight)
      if (entry.tags) {
        entry.tags.forEach((tag) => {
          if (tag.toLowerCase().includes(lowerQuery)) {
            score += 3
          }
        })
      }
      
      return { ...entry, score }
    })
    .filter((entry) => (entry as any).score > 0)
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, 20) // Return top 20 results
    .map(({ score, ...entry }) => entry) // Remove score from results
}

