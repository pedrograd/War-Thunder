'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  // Keyboard shortcut: Ctrl+K or Cmd+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const input = document.querySelector('input[type="text"]') as HTMLInputElement
        if (input) {
          input.focus()
          input.select()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search vehicles, maps, guides, tactics... (Ctrl+K)"
          className="w-full px-4 py-2.5 pl-10 pr-20 bg-background-elevated/80 backdrop-blur-sm border border-slate-700/60 rounded-button text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all duration-smooth text-sm"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted">
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-button transition-all duration-smooth text-xs font-semibold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background-sidebar hover:scale-105"
        >
          Search
        </button>
      </div>
    </form>
  )
}

