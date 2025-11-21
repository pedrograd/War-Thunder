'use client'

import { useState } from 'react'

interface FilterTabsProps {
  tabs: Array<{ id: string; label: string }>
  activeTab: string
  onChange: (tabId: string) => void
}

export default function FilterTabs({ tabs, activeTab, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 border-b border-slate-700/60 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            px-4 py-2 text-sm font-medium transition-smooth relative
            ${
              activeTab === tab.id
                ? 'text-tactical-orange border-b-2 border-tactical-orange'
                : 'text-slate-400 hover:text-slate-200'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

