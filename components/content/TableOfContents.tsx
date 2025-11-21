'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Wait for content to be rendered
    const timer = setTimeout(() => {
      // Find all headings in the rendered content
      const headingElements = document.querySelectorAll('article h2, article h3')
      const extractedHeadings: Heading[] = []
      
      headingElements.forEach((heading) => {
        let id = heading.id
        
        // If no ID, create one from text
        if (!id && heading.textContent) {
          id = heading.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
          
          if (id) {
            heading.id = id
          }
        }
        
        if (id && heading.textContent) {
          extractedHeadings.push({
            id,
            text: heading.textContent.trim(),
            level: parseInt(heading.tagName.charAt(1)),
          })
        }
      })
      
      setHeadings(extractedHeadings)
      
      // Set up intersection observer for active heading
      if (headingElements.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(entry.target.id)
              }
            })
          },
          {
            rootMargin: '-100px 0px -80% 0px',
            threshold: 0,
          }
        )
        
        headingElements.forEach((heading) => {
          if (heading.id) {
            observer.observe(heading)
          }
        })
        
        return () => {
          headingElements.forEach((heading) => {
            if (heading.id) {
              observer.unobserve(heading)
            }
          })
        }
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [content])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      
      setActiveId(id)
      setIsOpen(false) // Close mobile menu after click
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-40 bg-primary hover:bg-primary-hover text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Toggle table of contents"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container-content py-8 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Table of Contents</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-2">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left p-3 rounded-lg transition-colors ${
                    heading.level === 2
                      ? 'font-semibold text-text-primary'
                      : 'font-normal text-text-secondary pl-6'
                  } ${
                    activeId === heading.id
                      ? 'bg-primary/20 text-primary border-l-4 border-primary'
                      : 'hover:bg-background-elevated'
                  }`}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed right-0 top-24 w-64 h-[calc(100vh-6rem)] overflow-y-auto p-6 border-l border-border bg-background-surface/50 backdrop-blur-sm">
        <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
          Table of Contents
        </h2>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left p-2 rounded-lg transition-colors text-sm ${
                heading.level === 2
                  ? 'font-semibold text-text-primary'
                  : 'font-normal text-text-secondary pl-4'
              } ${
                activeId === heading.id
                  ? 'bg-primary/20 text-primary border-l-4 border-primary'
                  : 'hover:bg-background-elevated'
              }`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}

