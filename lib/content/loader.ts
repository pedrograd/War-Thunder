import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ContentData, ContentFrontmatter, Chapter, Module } from '@/types/content'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAllContentFiles(category?: string): string[] {
  const baseDir = category ? path.join(contentDirectory, category) : contentDirectory
  if (!fs.existsSync(baseDir)) {
    return []
  }
  
  const files: string[] = []
  
  function walkDir(dir: string, relativePath: string = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relativeFilePath = path.join(relativePath, entry.name)
      
      if (entry.isDirectory()) {
        walkDir(fullPath, relativeFilePath)
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
        files.push(relativeFilePath)
      }
    }
  }
  
  walkDir(baseDir)
  return files
}

export function getContentBySlug(category: string, slug: string): ContentData | null {
  try {
    // Try direct file match first
    const filePath = path.join(contentDirectory, category, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        frontmatter: data as ContentFrontmatter,
        content,
        slug,
        path: `/${category}/${slug}`,
      }
    }
    
    // Try nested directories (e.g., vehicles/russia/t-72b3.md)
    const allFiles = getAllContentFiles(category)
    const matchingFile = allFiles.find((file) => {
      const fileSlug = file.replace(/\.(md|mdx)$/, '').replace(/\//g, '-')
      return fileSlug === slug || file.includes(slug)
    })
    
    if (matchingFile) {
      const filePath = path.join(contentDirectory, category, matchingFile)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        frontmatter: data as ContentFrontmatter,
        content,
        slug: path.basename(matchingFile, path.extname(matchingFile)),
        path: `/${category}/${slug}`,
      }
    }
    
    return null
  } catch (error) {
    console.error(`Error loading content for ${category}/${slug}:`, error)
    return null
  }
}

export function getAllContentInCategory(category: string): ContentData[] {
  const files = getAllContentFiles(category)
  
  return files
    .map((file) => {
      try {
        const filePath = path.join(contentDirectory, category, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        const slug = path.basename(file, path.extname(file))
        
        return {
          frontmatter: data as ContentFrontmatter,
          content,
          slug,
          path: `/${category}/${slug}`,
        }
      } catch (error) {
        console.error(`Error loading file ${file}:`, error)
        return null
      }
    })
    .filter((item): item is ContentData => item !== null)
    .sort((a, b) => {
      // Sort by title or slug
      return (a.frontmatter.title || a.slug).localeCompare(b.frontmatter.title || b.slug)
    })
}

export function getModuleChapters(moduleId: string): Chapter[] {
  const modulePath = path.join(contentDirectory, 'academy', moduleId)
  if (!fs.existsSync(modulePath)) {
    return []
  }
  
  const files = fs.readdirSync(modulePath)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .filter((file) => file.startsWith('chapter-'))
  
  const chapters = files
    .map((file) => {
      try {
        const filePath = path.join(modulePath, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)
        const slug = path.basename(file, path.extname(file))
        
        // Extract chapter number from filename (e.g., chapter-1-fundamentals.md -> 1)
        const match = file.match(/chapter-(\d+)/)
        const order = match ? parseInt(match[1], 10) : 0
        
        return {
          id: slug,
          title: (data as ContentFrontmatter).title || slug,
          order,
          description: (data as ContentFrontmatter).description,
          slug,
          path: `/academy/${moduleId}/${slug}`,
        } as Chapter
      } catch (error) {
        console.error(`Error loading chapter ${file}:`, error)
        return null
      }
    })
    .filter((item): item is Chapter => item !== null)
    .sort((a, b) => a.order - b.order)
  
  return chapters
}

export function getModule(moduleId: string): Module | null {
  try {
    // Try to load overview.md
    const overviewPath = path.join(contentDirectory, 'academy', moduleId, 'overview.md')
    let overview: ContentData | undefined
    
    if (fs.existsSync(overviewPath)) {
      const fileContents = fs.readFileSync(overviewPath, 'utf8')
      const { data, content } = matter(fileContents)
      overview = {
        frontmatter: data as ContentFrontmatter,
        content,
        slug: 'overview',
        path: `/academy/${moduleId}`,
      }
    }
    
    const chapters = getModuleChapters(moduleId)
    
    return {
      id: moduleId,
      title: overview?.frontmatter.title || moduleId,
      description: overview?.frontmatter.description || '',
      category: 'academy',
      chapters,
      overview,
    }
  } catch (error) {
    console.error(`Error loading module ${moduleId}:`, error)
    return null
  }
}

export function getAllModules(): Module[] {
  const academyPath = path.join(contentDirectory, 'academy')
  if (!fs.existsSync(academyPath)) {
    return []
  }
  
  const dirs = fs.readdirSync(academyPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
  
  return dirs
    .map((dir) => getModule(dir))
    .filter((module): module is Module => module !== null)
}

