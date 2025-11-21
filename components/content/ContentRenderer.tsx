interface ContentRendererProps {
  content: string
  className?: string
}

export default function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  // Enhanced markdown to HTML conversion (server-side)
  let html = content
  
  // Helper function to process markdown in callout content
  const processCalloutContent = (text: string) => {
    let processed = text.trim().replace(/\n> ?/g, '\n')
    // Process markdown in callout content
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>')
    processed = processed.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-background-elevated rounded text-sm font-mono">$1</code>')
    // Convert line breaks to <br> for multi-line callouts
    processed = processed.replace(/\n/g, '<br>')
    return processed
  }

  // Code blocks (process before other replacements)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    return `<pre class="bg-background-elevated border border-border rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm font-mono">${escaped}</code></pre>`
  })
  
  // Callouts MUST be processed before bold/italic to detect patterns correctly
  // Process multi-line blockquotes that contain callouts
  const calloutPattern = /^> \*\*(Pro Tip(?: \([\w\s]+\))?|Warning|Drill|Info(?: Box)?):\*\*([\s\S]*?)(?=^[^>]|\n\n|$)/gims
  
  html = html.replace(calloutPattern, (match, type, content) => {
    const processedContent = processCalloutContent(content)
    let calloutType: 'tip' | 'warning' | 'drill' | 'info' = 'info'
    
    if (type.includes('Pro Tip')) {
      calloutType = 'tip'
    } else if (type.toLowerCase().includes('warning')) {
      calloutType = 'warning'
    } else if (type.toLowerCase().includes('drill')) {
      calloutType = 'drill'
    } else {
      calloutType = 'info'
    }
    
    const styles: Record<string, { border: string; bg: string; icon: string; text: string; title: string; accent: string }> = {
      tip: { 
        border: 'border-accent-economy/70', 
        bg: 'bg-accent-economy/10', 
        icon: '💡', 
        text: 'text-accent-economy', 
        title: 'Pro Tip',
        accent: 'accent-economy'
      },
      warning: { 
        border: 'border-accent-warning/70', 
        bg: 'bg-accent-warning/10', 
        icon: '⚠️', 
        text: 'text-accent-warning', 
        title: 'Warning',
        accent: 'accent-warning'
      },
      drill: { 
        border: 'border-accent-academy/70', 
        bg: 'bg-accent-academy/10', 
        icon: '🎯', 
        text: 'text-accent-academy', 
        title: 'Drill',
        accent: 'accent-academy'
      },
      info: { 
        border: 'border-accent-meta/70', 
        bg: 'bg-accent-meta/10', 
        icon: 'ℹ️', 
        text: 'text-accent-meta', 
        title: 'Info',
        accent: 'accent-meta'
      },
    }
    
    const style = styles[calloutType] || styles.info
    
    return `<div class="border-l-4 ${style.border} ${style.bg} backdrop-blur-sm p-5 my-6 rounded-r-lg shadow-glass"><div class="flex items-start gap-3"><span class="text-2xl flex-shrink-0">${style.icon}</span><div class="flex-1"><h4 class="font-semibold mb-2 ${style.text} uppercase tracking-wide text-sm font-hud">${style.title}</h4><div class="text-text-primary leading-relaxed">${processedContent}</div></div></div></div>`
  })
  
  // Inline code (before other inline markdown)
  html = html.replace(/`([^`]+)`/gim, '<code class="px-1.5 py-0.5 bg-background-elevated rounded text-sm font-mono">$1</code>')
  
  // Headers - Add IDs for TOC navigation with anchor links
  html = html.replace(/^#### (.*$)/gim, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    return `<h4 id="${id}" class="group text-xl font-semibold mt-8 mb-4 scroll-mt-24 flex items-center gap-2"><a href="#${id}" class="opacity-0 group-hover:opacity-100 transition-opacity duration-micro text-accent-academy no-underline" aria-label="Link to ${text}"><i class="fa-solid fa-link text-xs"></i></a>${text}</h4>`
  })
  html = html.replace(/^### (.*$)/gim, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    return `<h3 id="${id}" class="group text-2xl font-semibold mt-10 mb-5 scroll-mt-24 flex items-center gap-2"><a href="#${id}" class="opacity-0 group-hover:opacity-100 transition-opacity duration-micro text-accent-academy no-underline" aria-label="Link to ${text}"><i class="fa-solid fa-link text-sm"></i></a>${text}</h3>`
  })
  html = html.replace(/^## (.*$)/gim, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    return `<h2 id="${id}" class="group text-3xl font-semibold mt-12 mb-6 scroll-mt-24 flex items-center gap-2 border-b border-slate-700/60 pb-3"><a href="#${id}" class="opacity-0 group-hover:opacity-100 transition-opacity duration-micro text-accent-academy no-underline" aria-label="Link to ${text}"><i class="fa-solid fa-link"></i></a>${text}</h2>`
  })
  html = html.replace(/^# (.*$)/gim, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    return `<h1 id="${id}" class="group text-4xl font-bold mt-8 mb-6 scroll-mt-24 flex items-center gap-3"><a href="#${id}" class="opacity-0 group-hover:opacity-100 transition-opacity duration-micro text-accent-academy no-underline" aria-label="Link to ${text}"><i class="fa-solid fa-link"></i></a>${text}</h1>`
  })
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" class="text-accent-academy hover:text-accent-academy/80 underline transition-colors duration-micro focus:outline-none focus:ring-2 focus:ring-accent-academy focus:ring-offset-2 focus:ring-offset-background rounded">$1</a>')
  
  // Tables (basic support)
  const tableRegex = /^\|(.+)\|\n\|([-:|\s]+)\|\n((?:\|.+\|\n?)+)/gim
  html = html.replace(tableRegex, (match, header, separator, rows) => {
    const headers = header.split('|').map((h: string) => h.trim()).filter((h: string) => h)
    const rowData = rows.split('\n').filter((r: string) => r.trim()).map((row: string) => {
      return row.split('|').map((cell: string) => cell.trim()).filter((cell: string) => cell)
    })
    
    let tableHtml = '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-border border border-border rounded-lg"><thead class="bg-background-elevated"><tr>'
    headers.forEach((h: string) => {
      tableHtml += `<th class="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">${h}</th>`
    })
    tableHtml += '</tr></thead><tbody class="divide-y divide-border">'
    
    rowData.forEach((row: string[]) => {
      tableHtml += '<tr class="hover:bg-background-elevated">'
      row.forEach((cell: string) => {
        tableHtml += `<td class="px-4 py-3 text-sm text-text-primary">${cell}</td>`
      })
      tableHtml += '</tr>'
    })
    
    tableHtml += '</tbody></table></div>'
    return tableHtml
  })
  
  // Lists (unordered and ordered)
  const lines = html.split('\n')
  let inUnorderedList = false
  let inOrderedList = false
  let unorderedItems: string[] = []
  let orderedItems: string[] = []
  const processedLines: string[] = []
  
  lines.forEach((line) => {
    // Check for unordered list items
    if (line.match(/^[-*] /)) {
      if (inOrderedList && orderedItems.length > 0) {
        processedLines.push(`<ol class="mb-4 space-y-2 ml-6 list-decimal">${orderedItems.map(item => `<li class="text-text-primary">${item}</li>`).join('')}</ol>`)
        orderedItems = []
        inOrderedList = false
      }
      if (!inUnorderedList) {
        inUnorderedList = true
        unorderedItems = []
      }
      unorderedItems.push(line.replace(/^[-*] /, ''))
    }
    // Check for ordered list items
    else if (line.match(/^\d+\. /)) {
      if (inUnorderedList && unorderedItems.length > 0) {
        processedLines.push(`<ul class="mb-4 space-y-2 ml-6 list-disc">${unorderedItems.map(item => `<li class="text-text-primary">${item}</li>`).join('')}</ul>`)
        unorderedItems = []
        inUnorderedList = false
      }
      if (!inOrderedList) {
        inOrderedList = true
        orderedItems = []
      }
      orderedItems.push(line.replace(/^\d+\. /, ''))
    }
    // Regular line - close any open lists
    else {
      if (inUnorderedList && unorderedItems.length > 0) {
        processedLines.push(`<ul class="mb-4 space-y-2 ml-6 list-disc">${unorderedItems.map(item => `<li class="text-text-primary">${item}</li>`).join('')}</ul>`)
        unorderedItems = []
        inUnorderedList = false
      }
      if (inOrderedList && orderedItems.length > 0) {
        processedLines.push(`<ol class="mb-4 space-y-2 ml-6 list-decimal">${orderedItems.map(item => `<li class="text-text-primary">${item}</li>`).join('')}</ol>`)
        orderedItems = []
        inOrderedList = false
      }
      processedLines.push(line)
    }
  })
  
  // Close any remaining open lists
  if (inUnorderedList && unorderedItems.length > 0) {
    processedLines.push(`<ul class="mb-4 space-y-2 ml-6 list-disc">${unorderedItems.map(item => `<li class="text-text-primary">${item}</li>`).join('')}</ul>`)
  }
  if (inOrderedList && orderedItems.length > 0) {
    processedLines.push(`<ol class="mb-4 space-y-2 ml-6 list-decimal">${orderedItems.map(item => `<li class="text-text-primary">${item}</li>`).join('')}</ol>`)
  }
  
  html = processedLines.join('\n')
  
  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr class="my-8 border-border" />')
  
  // Generic blockquotes (fallback)
  html = html.replace(/^> (.+?)(?=\n\n|\n>|$)/gims, (match, content) => {
    const trimmed = content.trim()
    // Skip if already processed as callout
    if (trimmed.includes('border-l-4')) return match
    const cleanContent = trimmed.replace(/\n> ?/g, '\n')
    return `<blockquote class="border-l-4 border-border bg-background-elevated p-4 my-4 italic text-text-secondary">${cleanContent}</blockquote>`
  })
  
  // Paragraphs (split by double newlines, but preserve existing HTML)
  const paragraphs = html.split(/\n\n+/).filter(p => p.trim())
  html = paragraphs
    .map(para => {
      const trimmed = para.trim()
      // Don't wrap if it's already HTML (starts with <)
      if (trimmed.startsWith('<')) {
        return trimmed
      }
      if (trimmed.length > 0) {
        // Process inline markdown in paragraphs
        let processed = trimmed
        processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
        processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>')
        processed = processed.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-background-elevated rounded text-sm font-mono">$1</code>')
        return `<p class="mb-4 leading-reading text-text-primary">${processed}</p>`
      }
      return ''
    })
    .join('\n')
  
  return (
    <article 
      className={`content-width prose-tactical ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
