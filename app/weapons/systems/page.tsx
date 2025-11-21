import SectionHeader from '@/components/ui/SectionHeader'
import GlassPanel from '@/components/ui/GlassPanel'
import StatBar from '@/components/ui/StatBar'

export default function WeaponsSystems() {
  return (
    <>
      <SectionHeader
        eyebrow="CREW SKILLS"
        title="Crew Skills & Systems"
        description="Optimize your crew skills and understand weapon systems for maximum combat effectiveness."
      />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              Essential Crew Skills
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Targeting</span>
                  <span className="text-tactical-orange">Critical</span>
                </div>
                <StatBar label="Improves accuracy and targeting speed" value={75} max={100} color="orange" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Reloading</span>
                  <span className="text-tactical-orange">Critical</span>
                </div>
                <StatBar label="Faster reload times" value={80} max={100} color="orange" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Vitality</span>
                  <span className="text-tactical-green">Important</span>
                </div>
                <StatBar label="Crew survivability" value={60} max={100} color="green" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Field Repair</span>
                  <span className="text-tactical-cyan">Useful</span>
                </div>
                <StatBar label="Faster module repairs" value={50} max={100} color="cyan" />
              </div>
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              Weapon Systems
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background-elevated rounded-lg">
                <h4 className="font-semibold text-slate-200 mb-2">Thermal Imaging</h4>
                <p className="text-sm text-slate-300 mb-2">
                  Essential for top tier. Allows target detection through smoke and foliage.
                </p>
                <div className="text-xs text-tactical-cyan">Available: 8.0+ BR</div>
              </div>
              <div className="p-4 bg-background-elevated rounded-lg">
                <h4 className="font-semibold text-slate-200 mb-2">Laser Rangefinder</h4>
                <p className="text-sm text-slate-300 mb-2">
                  Accurate range measurement for long-range engagements. Critical for MBTs.
                </p>
                <div className="text-xs text-tactical-cyan">Available: 6.7+ BR</div>
              </div>
              <div className="p-4 bg-background-elevated rounded-lg">
                <h4 className="font-semibold text-slate-200 mb-2">Active Protection System</h4>
                <p className="text-sm text-slate-300 mb-2">
                  Intercepts incoming projectiles. Game-changer for survivability.
                </p>
                <div className="text-xs text-tactical-purple">Available: 10.0+ BR</div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel className="mt-6">
          <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
            Crew Skill Priority
          </h3>
          <ol className="space-y-2 text-slate-300 list-decimal list-inside">
            <li>Targeting and Reloading (max these first for combat effectiveness)</li>
            <li>Vitality (keeps crew alive longer)</li>
            <li>Field Repair (faster module repairs)</li>
            <li>Leadership (boosts all other skills)</li>
            <li>Driving/Tank Driving (mobility improvements)</li>
          </ol>
        </GlassPanel>
    </>
  )
}

