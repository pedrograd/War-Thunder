'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import SearchBar from '@/components/search/SearchBar'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description?: string
  path: string
  category?: string
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query && query.trim().length > 0) {
      setLoading(true)
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.results || [])
          setLoading(false)
        })
        .catch((error) => {
          console.error('Search error:', error)
          setResults([])
          setLoading(false)
        })
    } else {
      setResults([])
      setLoading(false)
    }
  }, [query])

  return (
    <>
      {query ? (
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            Search Results for &quot;{query}&quot;
          </h1>
          {loading ? (
            <p className="text-text-secondary">Searching...</p>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              <p className="text-text-secondary mb-4">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.path}
                  className="block p-6 bg-background-surface border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {result.title}
                    </h3>
                    {result.category && (
                      <span className="text-xs text-text-muted uppercase px-2 py-1 bg-background-elevated rounded">
                        {result.category.replace('-', ' ')}
                      </span>
                    )}
                  </div>
                  {result.description && (
                    <p className="text-text-secondary mb-2">
                      {result.description}
                    </p>
                  )}
                  <p className="text-sm text-text-muted">
                    {result.path}
                  </p>
                </Link>
              ))}
            </div>
          ) : query.trim().length > 0 ? (
            <p className="text-text-secondary">
              No results found for &quot;{query}&quot;. Try different keywords.
            </p>
          ) : null}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">
            Enter a search query to find vehicles, maps, guides, and tactics.
          </p>
        </div>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <>
      <div className="mb-8">
        <SearchBar />
      </div>
      
      <Suspense fallback={<div className="text-text-secondary">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </>
  )
}

