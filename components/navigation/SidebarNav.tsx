'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavLink {
  href: string
  label: string
  icon?: string
  type?: 'ground' | 'air' | 'heli' | 'naval' | 'meta'
}

export interface NavSection {
  label: string
  links: NavLink[]
}

interface SidebarNavProps {
  sections: NavSection[]
  mobileMenuOpen?: boolean
  onClose?: () => void
}

export default function SidebarNav({ sections, mobileMenuOpen = false, onClose }: SidebarNavProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  const handleLinkClick = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <aside 
      className={`
        fixed lg:static w-72 flex-shrink-0 bg-background-sidebar border-r border-slate-800/80 flex flex-col h-full z-50 lg:z-20
        transform transition-transform duration-gentle ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        backdrop-blur-glass shadow-glass
      `}
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-800/80 sticky top-0 bg-background-sidebar/95 backdrop-blur-glass z-10">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-shield-halved text-accent-warning text-2xl"></i>
            <div>
              <h1 className="text-xl text-text-primary leading-none font-stencil">WAR COLLEGE</h1>
              <p className="text-[10px] text-text-muted code-font mt-1">OP: PEDROGRAD | v10.0</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-text-secondary hover:text-text-primary p-2 transition-all duration-micro rounded-button focus:outline-none focus:ring-2 focus:ring-accent-academy focus:ring-offset-2 focus:ring-offset-background-sidebar"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-x text-xl"></i>
          </button>
        </div>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 overflow-y-auto pb-8">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="nav-group-title">{section.label}</div>
            {section.links.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`sidebar-link ${active ? 'active' : ''}`}
                  data-type={link.type}
                  onClick={handleLinkClick}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.icon && <i className={`fa-solid ${link.icon} w-5 mr-2`}></i>}
                  {link.label}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Footer Status */}
      <div className="p-4 border-t border-slate-800/80 text-[10px] text-text-muted code-font bg-background-void/50">
        STATUS: ONLINE <span className="text-accent-economy animate-pulse">●</span><br />
        LOC: ANTALYA HQ
      </div>
    </aside>
  )
}
