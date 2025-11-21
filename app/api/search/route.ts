import { NextRequest, NextResponse } from 'next/server'
import { buildSearchIndex, searchContent } from '@/lib/content/search'

// Cache the search index
let cachedIndex: ReturnType<typeof buildSearchIndex> | null = null

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || ''
  
  // Build or get cached index
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex()
  }
  
  // Search content
  const results = searchContent(query, cachedIndex)
  
  return NextResponse.json({
    query,
    results,
    count: results.length,
  })
}

