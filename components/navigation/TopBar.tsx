'use client'

import SearchBar from '@/components/search/SearchBar'
import Link from 'next/link'

interface TopBarProps {
  section?: string
  lastUpdated?: string
  commander?: string
  onMenuToggle?: () => void
}

export default function TopBar({ section, lastUpdated, commander = 'Cmdr. Pedrograd', onMenuToggle }: TopBarProps) {
  const currentDate = lastUpdated || new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <header className="sticky top-0 z-50 bg-background-sidebar/95 border-b border-slate-800/80 backdrop-blur-glass shadow-sm">
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden text-text-secondary hover:text-text-primary p-2 transition-all duration-micro rounded-button focus:outline-none focus:ring-2 focus:ring-accent-academy focus:ring-offset-2 focus:ring-offset-background-sidebar"
              aria-label="Toggle menu"
              aria-expanded={false}
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
            <Link href="/" className="hidden md:flex items-center gap-2 group">
              <i className="fa-solid fa-shield-halved text-accent-warning text-xl group-hover:scale-110 transition-transform duration-smooth"></i>
              <span className="font-stencil text-text-primary text-lg">WAR COLLEGE</span>
            </Link>
            {section && (
              <div className="hidden md:flex items-center gap-2 text-xs text-text-muted">
                <span className="font-semibold tracking-[0.15em] uppercase text-text-secondary font-hud">{section}</span>
                <span className="text-text-muted">{'///'}</span>
                <span>Last Updated: {currentDate}</span>
              </div>
            )}
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-economy animate-pulse"></span>
              <span className="font-hud">ONLINE</span>
            </div>
            {commander && (
              <div className="hidden lg:block text-xs text-text-muted code-font">{commander}</div>
            )}
            <Link
              href="/meta"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-background-elevated border border-slate-700/60 rounded-button text-xs text-text-secondary hover:border-accent-primary/50 hover:text-text-primary transition-all duration-smooth focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background-sidebar"
            >
              <i className="fa-solid fa-chart-line text-accent-primary"></i>
              <span className="font-hud">META</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
