'use client'

import AngleDiagram from '@/components/ui/AngleDiagram'
import BnZDiagram from '@/components/ui/BnZDiagram'

export default function TacticsDiagrams() {
  return (
    <div className="space-y-8">
      {/* Tactics Tabs */}
      <div className="bg-background-elevated rounded-lg shadow border border-slate-700/60 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Tank Tactics */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              <span className="bg-slate-800 text-white p-1 rounded text-sm">TANK</span> Angling Mechanics
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Effective armor thickness increases drastically with angle. The ideal angle for a Tiger I is 45° to the enemy (the &quot;Diamond&quot; shape).
            </p>
            <AngleDiagram />
            <div className="mt-4 p-3 bg-amber-900/30 border border-amber-500/30 rounded text-sm text-amber-200">
              <strong>Pro Tip:</strong> Do not angle the IS-2 or Pike-nose tanks (IS-3, T-10M). Point nose directly at enemy.
            </div>
          </div>

          {/* Air Tactics */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              <span className="bg-slate-800 text-white p-1 rounded text-sm">AIR</span> Energy Fighting (BnZ)
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Boom and Zoom: Convert Potential Energy (Altitude) to Kinetic Energy (Speed), attack, then convert Speed back to Altitude.
            </p>
            <BnZDiagram />
            <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500/30 rounded text-sm text-blue-200">
              <strong>Pro Tip:</strong> Never turn horizontally after a boom. Pull up vertically to retain energy.
            </div>
          </div>
        </div>
      </div>

      {/* Map Strategy Primer */}
      <div className="bg-slate-800 text-white rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Map Strategy: Hiding in Plain Sight</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition">
            <h4 className="font-bold text-amber-500">Hull Down</h4>
            <p className="text-xs mt-2 text-slate-300">
              Use ridges to hide your hull. Only expose your turret. Essential for NATO MBTs (Abrams, Leo).
            </p>
          </div>
          <div className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition">
            <h4 className="font-bold text-amber-500">Reverse Slope</h4>
            <p className="text-xs mt-2 text-slate-300">
              Defend behind the crest of a hill, not on top. Shoot enemies as they skyline themselves coming over.
            </p>
          </div>
          <div className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition">
            <h4 className="font-bold text-amber-500">Keyhole Fire</h4>
            <p className="text-xs mt-2 text-slate-300">
              Position so you can only see a tiny slice of the map (between two buildings). You limit exposure to one angle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

