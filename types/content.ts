export interface ContentFrontmatter {
  title: string
  description?: string
  category?: 'academy' | 'nations' | 'maps' | 'meta' | 'economy' | 'encyclopedia' | 'weapons' | 'weakspots' | 'premium' | 'future-tech' | 'new-player-path' | 'vehicles'
  tags?: string[]
  related?: string[]
  author?: string
  lastUpdated?: string
  version?: string
  status?: 'draft' | 'published' | 'archived'
  
  // Module-specific metadata
  module?: string
  chapter?: string
  nation?: string
  vehicle?: string
  map?: string
  br?: number
}

export interface ContentData {
  frontmatter: ContentFrontmatter
  content: string
  slug: string
  path: string
}

export interface Chapter {
  id: string
  title: string
  order: number
  description?: string
  slug: string
  path: string
}

export interface Module {
  id: string
  title: string
  description: string
  category: string
  chapters: Chapter[]
  overview?: ContentData
}

