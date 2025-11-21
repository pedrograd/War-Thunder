import SectionHeader from '@/components/ui/SectionHeader'
import MetaCard from '@/components/ui/MetaCard'
import DangerBox from '@/components/ui/DangerBox'
import GlassPanel from '@/components/ui/GlassPanel'

export default function MetaNov2025() {
  return (
    <>
      <SectionHeader
        eyebrow="META INTELLIGENCE"
        title="November 2025 Meta Report"
        description="Current meta analysis, BR tier charts, OP vehicles, and update tracking."
      />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <DangerBox variant="warning" title="META SHIFT DETECTED">
              Top tier meta has shifted heavily towards CAS dominance. Ground vehicles are struggling 
              against coordinated air strikes. Recommended: Bring SPAA in every lineup above 10.0 BR.
            </DangerBox>

            <GlassPanel>
              <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
                Tier Analysis
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Top Tier (10.0+)</span>
                    <span className="text-tactical-orange font-semibold">Volatile</span>
                  </div>
                  <div className="h-2 bg-background-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-tactical-orange" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Mid Tier (5.0-9.7)</span>
                    <span className="text-tactical-green font-semibold">Stable</span>
                  </div>
                  <div className="h-2 bg-background-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-tactical-green" style={{ width: '45%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Low Tier (1.0-4.7)</span>
                    <span className="text-tactical-cyan font-semibold">Balanced</span>
                  </div>
                  <div className="h-2 bg-background-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-tactical-cyan" style={{ width: '30%' }} />
                  </div>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel>
              <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
                OP Vehicles This Month
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-background-elevated rounded-lg border border-tactical-orange/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">T-80BVM</div>
                      <div className="text-xs text-slate-400">USSR • 11.0 BR</div>
                    </div>
                    <div className="text-tactical-orange font-bold">S+</div>
                  </div>
                </div>
                <div className="p-3 bg-background-elevated rounded-lg border border-tactical-orange/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">Leopard 2A6</div>
                      <div className="text-xs text-slate-400">Germany • 11.0 BR</div>
                    </div>
                    <div className="text-tactical-orange font-bold">S+</div>
                  </div>
                </div>
                <div className="p-3 bg-background-elevated rounded-lg border border-tactical-cyan/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">F-16C</div>
                      <div className="text-xs text-slate-400">USA • 12.0 BR</div>
                    </div>
                    <div className="text-tactical-cyan font-bold">S</div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

          <div className="space-y-6">
            <MetaCard
              variant="meta"
              title="META RANKINGS"
              description="Current nation power rankings based on win rates and vehicle performance."
              stats={[
                { label: '1st', value: 'USA' },
                { label: '2nd', value: 'Germany' },
                { label: '3rd', value: 'USSR' },
              ]}
            />
            <MetaCard
              variant="warning"
              title="AVOID THESE BRs"
              description="BR brackets with poor matchmaking or unbalanced gameplay."
              stats={[
                { label: 'Problem BR', value: '10.3-10.7' },
                { label: 'Reason', value: 'Uptier Hell' },
              ]}
            />
          </div>
        </div>
    </>
  )
}

