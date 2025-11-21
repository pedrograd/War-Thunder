'use client'

import { ReactNode, useState } from 'react'
import SidebarNav from '@/components/navigation/SidebarNav'
import TopBar from '@/components/navigation/TopBar'
import ReadingProgress from '@/components/content/ReadingProgress'
import type { NavSection } from '@/components/navigation/SidebarNav'

interface MainLayoutProps {
  children: ReactNode
}

const navSections: NavSection[] = [
  {
    label: 'COMMAND CENTER',
    links: [
      { href: '/', label: 'Dashboard', icon: 'fa-gauge-high' },
      { href: '/meta', label: 'Meta Hub', icon: 'fa-chart-pie', type: 'meta' as const },
      { href: '/meta/nov-2025', label: 'Daily Briefing', icon: 'fa-calendar-day' },
    ],
  },
  {
    label: 'COMBAT ACADEMIES',
    links: [
      { href: '/academy/ground-forces', label: 'Ground School', icon: 'fa-tank', type: 'ground' as const },
      { href: '/academy/air-forces', label: 'Air School', icon: 'fa-jet-fighter', type: 'air' as const },
      { href: '/academy/helicopters', label: 'Heli School', icon: 'fa-helicopter', type: 'heli' as const },
      { href: '/academy/naval-forces', label: 'Naval School', icon: 'fa-ship', type: 'naval' as const },
    ],
  },
  {
    label: 'OPERATIONAL INTEL',
    links: [
      { href: '/maps', label: 'Map Tactics', icon: 'fa-map-location-dot' },
      { href: '/weapons', label: 'Weapons & Systems', icon: 'fa-microchip' },
      { href: '/weapons/systems', label: 'Weakspot Library', icon: 'fa-bullseye' },
    ],
  },
  {
    label: 'ECONOMY OPS',
    links: [
      { href: '/economy', label: 'RP/SL Lab', icon: 'fa-sack-dollar' },
      { href: '/economy', label: 'Premium Tier Lists', icon: 'fa-crown' },
    ],
  },
  {
    label: 'NATION COMMAND',
    links: [
      { href: '/nations', label: 'Nation Guides', icon: 'fa-flag' },
      { href: '/vehicles', label: 'Vehicle Codex', icon: 'fa-book-journal-whills' },
    ],
  },
]

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background-void">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <SidebarNav 
        sections={navSections} 
        mobileMenuOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <TopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <main 
          id="main-content"
          className="flex-1 overflow-y-auto relative scroll-smooth"
        >
          <ReadingProgress />
          <div className="container-content py-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

