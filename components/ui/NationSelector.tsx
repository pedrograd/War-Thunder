'use client'

import { useState } from 'react'
import briefingData from '@/data/briefing.json'

type NationKey = keyof typeof briefingData.nations

export default function NationSelector() {
  const [selectedNation, setSelectedNation] = useState<NationKey>('usa')
  const current = briefingData.nations[selectedNation]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Filter */}
      <div className="lg:col-span-1 space-y-2">
        <h3 className="text-xl font-bold text-slate-200 mb-4 header-font">Select Nation</h3>
        {(Object.keys(briefingData.nations) as NationKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedNation(key)}
            className={`w-full text-left px-4 py-3 rounded font-bold transition ${
              selectedNation === key
                ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-lg'
                : 'bg-background-surface text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-700'
            }`}
          >
            {briefingData.nations[key].name}
          </button>
        ))}

        <div className="mt-8 bg-amber-100 dark:bg-amber-900/30 p-4 rounded border border-amber-200 dark:border-amber-800">
          <h4 className="text-amber-800 dark:text-amber-200 font-bold text-sm">PREMIUM PICKER</h4>
          <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">Top Pick for Nov 2025 Sale:</p>
          <p className="font-bold text-stone-900 dark:text-amber-100 mt-2">🇺🇸 M1A1 Click-Bait</p>
          <p className="text-xs text-stone-600 dark:text-amber-300">Best for rapid grind to Rank VIII.</p>
        </div>
      </div>

      {/* Main Nation Content */}
      <div className="lg:col-span-3">
        <div className="bg-background-elevated rounded-xl shadow-lg border border-slate-700/60 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-5xl font-bold text-slate-200 header-font mb-2">{current.name}</h2>
              <span className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-sm font-semibold">
                {current.style}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">Top Tier Cap</p>
              <p className="font-bold text-xl text-slate-200">{current.topTier}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-900/30 dark:bg-emerald-800/20 p-4 rounded border border-emerald-500/30">
              <h4 className="text-emerald-400 dark:text-emerald-300 font-bold mb-2">🔥 Best Grinder</h4>
              <p className="text-lg font-bold text-slate-200">{current.grindPremium}</p>
              <p className="text-xs text-slate-400 mt-1">Highest RP Efficiency Coefficient.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded border border-slate-600/50">
              <h4 className="text-slate-200 font-bold mb-2">🏆 Meta Lineup</h4>
              <p className="text-lg font-bold text-slate-200">{current.bestLineup}</p>
              <p className="text-xs text-slate-400 mt-1">Highest Win-rate combination.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-200 mb-4">Tactical Analysis</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            {current.name} requires specific discipline. In the current meta, avoid direct brawls unless you have the explicit advantage.{' '}
            {current.name === 'USSR'
              ? 'Utilize the low profile to ambush'
              : 'Utilize the superior gun depression to work ridges'}.{' '}
            Watch out for CAS spam around the 7 minute mark.
          </p>

          <div className="bg-slate-800 text-white p-4 rounded mt-6">
            <h4 className="font-bold text-amber-500 mb-2">⚠️ Weak Spot Guide</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
              <li>Lower Front Plate (Universal Weakness)</li>
              <li>Turret Ring (Catch shots trap)</li>
              <li>Gun Breech (Disable first, kill second)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

