'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import GlassPanel from '@/components/ui/GlassPanel'
import DangerBox from '@/components/ui/DangerBox'
import PredictionsChart from '@/components/ui/PredictionsChart'

export default function FutureTech() {
  return (
    <>
      <SectionHeader
        eyebrow="CLASSIFIED"
        title="Future Technology"
        description="Upcoming vehicles, systems, and mechanics. Speculation and confirmed developments."
      />

        <DangerBox variant="alert" title="CLASSIFIED INFORMATION">
          This section contains speculative information about upcoming content. All information is 
          subject to change based on developer updates and game balance adjustments.
        </DangerBox>

        {/* Predictions Chart */}
        <div className="mt-12 mb-12">
          <PredictionsChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              Upcoming Vehicles
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background-elevated rounded-lg">
                <div className="font-semibold text-slate-200 mb-2">Leopard 2A7+</div>
                <div className="text-sm text-slate-300 mb-2">
                  Next-generation German MBT with improved armor and firepower.
                </div>
                <div className="text-xs text-tactical-cyan">Status: Confirmed • ETA: Q1 2026</div>
              </div>
              <div className="p-4 bg-background-elevated rounded-lg">
                <div className="font-semibold text-slate-200 mb-2">T-90M</div>
                <div className="text-sm text-slate-300 mb-2">
                  Modernized Russian MBT with Relikt ERA and improved systems.
                </div>
                <div className="text-xs text-tactical-cyan">Status: Speculated • ETA: TBD</div>
              </div>
              <div className="p-4 bg-background-elevated rounded-lg">
                <div className="font-semibold text-slate-200 mb-2">F-16 Block 70</div>
                <div className="text-sm text-slate-300 mb-2">
                  Advanced variant with improved avionics and weapons systems.
                </div>
                <div className="text-xs text-tactical-purple">Status: Rumored • ETA: TBD</div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              New Systems
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background-elevated rounded-lg">
                <div className="font-semibold text-slate-200 mb-2">Advanced APS</div>
                <div className="text-sm text-slate-300 mb-2">
                  Next-generation active protection systems with improved interception rates.
                </div>
                <div className="text-xs text-tactical-green">Status: In Development</div>
              </div>
              <div className="p-4 bg-background-elevated rounded-lg">
                <div className="font-semibold text-slate-200 mb-2">Drone Support</div>
                <div className="text-sm text-slate-300 mb-2">
                  Reconnaissance and strike drones for top tier gameplay.
                </div>
                <div className="text-xs text-tactical-orange">Status: Speculated</div>
              </div>
              <div className="p-4 bg-background-elevated rounded-lg">
                <div className="font-semibold text-slate-200 mb-2">Improved Ballistics</div>
                <div className="text-sm text-slate-300 mb-2">
                  More realistic projectile physics and penetration mechanics.
                </div>
                <div className="text-xs text-tactical-cyan">Status: Confirmed</div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel className="mt-6">
          <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
            Planned Features
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Enhanced damage model for more realistic vehicle destruction</li>
            <li>• Improved matchmaking algorithm for better BR balance</li>
            <li>• New game modes focused on combined arms operations</li>
            <li>• Expanded naval gameplay with larger ship classes</li>
            <li>• Better reward system for objective-focused gameplay</li>
          </ul>
        </GlassPanel>
    </>
  )
}

