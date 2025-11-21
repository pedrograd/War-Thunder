/**
 * Calculate reading time based on word count
 * Assumes average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  // Count words (split by whitespace and filter empty strings)
  const words = content.trim().split(/\s+/).filter(word => word.length > 0).length
  
  // Calculate reading time in minutes (200 words per minute)
  const minutes = Math.ceil(words / 200)
  
  return minutes
}

/**
 * Format reading time as a human-readable string
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 minute read'
  }
  if (minutes < 60) {
    return `${minutes} minutes read`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (remainingMinutes === 0) {
    return hours === 1 ? '1 hour read' : `${hours} hours read`
  }
  
  return `${hours}h ${remainingMinutes}m read`
}

