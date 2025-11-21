import Link from 'next/link'
import MetaCard from '@/components/ui/MetaCard'
import SectionHeader from '@/components/ui/SectionHeader'
import MetaChart from '@/components/ui/MetaChart'
import GlassPanel from '@/components/ui/GlassPanel'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import briefingData from '@/data/briefing.json'

export default function Dashboard() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })

  return (
    <div>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="space-y-8 md:space-y-12">
        {/* Hero Section - Briefing Room */}
        <GlassPanel variant="elevated" padding="lg" className="mb-8">
          <SectionHeader
            eyebrow="COMMAND CENTER"
            title="Briefing Room"
            accent="primary"
          />
          <p className="text-text-secondary text-lg mb-6">
            Status: <span className="text-accent-economy font-bold">SPEARHEAD UPDATE LIVE</span> | {formattedDate}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {briefingData.metaHighlights.map((highlight, index) => (
              <Card
                key={index}
                variant="glass"
                padding="md"
                accent={
                  highlight.type === 'update' ? 'academy' :
                  highlight.type === 'economy' ? 'economy' : 'warning'
                }
                className="stagger-item"
              >
                <h3 className="font-bold text-lg mb-2 text-text-primary">{highlight.title}</h3>
                <p className="text-sm text-text-secondary">{highlight.desc}</p>
              </Card>
            ))}
          </div>
        </GlassPanel>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <GlassPanel variant="elevated" padding="lg" className="animate-fade-in-up">
            <h2 className="text-2xl text-text-primary font-bold mb-4 font-hud uppercase tracking-wide">
              Current Meta Dominance (Win Rates 11.0+)
            </h2>
            <MetaChart
              labels={briefingData.winRates.labels}
              data={briefingData.winRates.data}
              colors={briefingData.winRates.colors}
            />
            <p className="mt-4 text-xs text-text-muted">
              Data aggregated from Thunderskill & Community Logs (Last 30 days).
            </p>
          </GlassPanel>

          <GlassPanel variant="elevated" padding="lg" className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl text-text-primary font-bold mb-4 font-hud uppercase tracking-wide">Daily Briefing</h2>
            <ul className="space-y-3">
              {briefingData.dailyBriefing.map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-background-elevated/50 rounded-card card-hover">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>

        {/* Main Command Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <MetaCard
            variant="meta"
            title="META HEALTH"
            description="Top tier: volatile (CAS heavy). Mid tier: stable. Low tier: balanced."
            stats={[
              { label: 'Top Tier', value: 'Volatile' },
              { label: 'Mid Tier', value: 'Stable' },
              { label: 'Low Tier', value: 'Balanced' },
            ]}
            href="/meta"
          />
          <MetaCard
            variant="economy"
            title="ECONOMY OPS"
            description="Current SL efficiency trends. Optimize your grind strategies."
            stats={[
              { label: 'Efficiency', value: 'Good' },
              { label: 'SL Trends', value: 'Positive' },
            ]}
            href="/economy"
          />
          <MetaCard
            variant="training"
            title="TRAINING MISSION"
            description="Mission: Hull-Down Mastery — 0/3 modules complete. Continue your progression."
            stats={[
              { label: 'Status', value: 'Active' },
              { label: 'Progress', value: '0/3' },
            ]}
            href="/academy"
          />
          <MetaCard
            variant="warning"
            title="BRIEFING"
            description="Today's focus: Urban brawler maps. Avoid open lanes. Use cover effectively."
            stats={[
              { label: 'Map Type', value: 'Urban' },
              { label: 'Tactic', value: 'Cover' },
            ]}
            href="/maps"
          />
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* PATCH WARNING - Orange */}
          <GlassPanel variant="default" padding="md" accent="warning" hover className="stagger-item">
            <div className="eyebrow text-accent-warning mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-current opacity-50"></span>
              PATCH WARNING
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Volumetric armor for track guards has been reworked. Side-scraping effectiveness improved in certain heavy tanks.
            </p>
          </GlassPanel>

          {/* ECONOMY ALERT - Green */}
          <GlassPanel variant="default" padding="md" accent="economy" hover className="stagger-item" style={{ animationDelay: '0.1s' }}>
            <div className="eyebrow text-accent-economy mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-current opacity-50"></span>
              ECONOMY ALERT
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Naval RB multipliers for Coastal fleet increased. Strong SL efficiency trends observed in coastal vessels.
            </p>
          </GlassPanel>

          {/* ACADEMY STATUS - Blue/Cyan */}
          <GlassPanel variant="default" padding="md" accent="academy" hover className="stagger-item" style={{ animationDelay: '0.2s' }}>
            <div className="eyebrow text-accent-academy mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-current opacity-50"></span>
              ACADEMY STATUS
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              All Nations Updated. Ground Tactics Deep Dive live. Heli School Open.
            </p>
          </GlassPanel>
        </div>

        {/* Quick Navigation Grid */}
        <div>
          <SectionHeader
            eyebrow="QUICK ACCESS"
            title="Quick Navigation"
            accent="academy"
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Link
              href="/new-player-path"
              className="group"
            >
              <Card variant="glass" padding="md" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-warning/20 rounded-lg flex items-center justify-center group-hover:bg-accent-warning/30 transition-colors duration-smooth">
                    <i className="fa-solid fa-graduation-cap text-accent-warning"></i>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-accent-warning transition-colors duration-smooth">New Player Path</h3>
                </div>
                <p className="text-sm text-text-secondary">Complete onboarding guide from first battle to competent team player</p>
              </Card>
            </Link>
            <Link
              href="/academy/ground-forces"
              className="group"
            >
              <Card variant="glass" padding="md" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-module-ground/20 rounded-lg flex items-center justify-center group-hover:bg-module-ground/30 transition-colors duration-smooth">
                    <i className="fa-solid fa-tank text-module-ground"></i>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-module-ground transition-colors duration-smooth">Ground Tactics</h3>
                </div>
                <p className="text-sm text-text-secondary">Master tank combat from armor mechanics to advanced positioning</p>
              </Card>
            </Link>
            <Link
              href="/nations"
              className="group"
            >
              <Card variant="glass" padding="md" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-academy/20 rounded-lg flex items-center justify-center group-hover:bg-accent-academy/30 transition-colors duration-smooth">
                    <i className="fa-solid fa-flag text-accent-academy"></i>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-accent-academy transition-colors duration-smooth">Nation Dossiers</h3>
                </div>
                <p className="text-sm text-text-secondary">Comprehensive guides for all 10 playable nations</p>
              </Card>
            </Link>
            <Link
              href="/meta"
              className="group"
            >
              <Card variant="glass" padding="md" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-meta/20 rounded-lg flex items-center justify-center group-hover:bg-accent-meta/30 transition-colors duration-smooth">
                    <i className="fa-solid fa-chart-pie text-accent-meta"></i>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-accent-meta transition-colors duration-smooth">Meta Hub</h3>
                </div>
                <p className="text-sm text-text-secondary">Current meta analysis, trends, and strategic insights</p>
              </Card>
            </Link>
            <Link
              href="/economy"
              className="group"
            >
              <Card variant="glass" padding="md" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-economy/20 rounded-lg flex items-center justify-center group-hover:bg-accent-economy/30 transition-colors duration-smooth">
                    <i className="fa-solid fa-sack-dollar text-accent-economy"></i>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-accent-economy transition-colors duration-smooth">Economy Lab</h3>
                </div>
                <p className="text-sm text-text-secondary">RP/SL optimization strategies and grind calculators</p>
              </Card>
            </Link>
            <Link
              href="/maps"
              className="group"
            >
              <Card variant="glass" padding="md" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent-warning/20 rounded-lg flex items-center justify-center group-hover:bg-accent-warning/30 transition-colors duration-smooth">
                    <i className="fa-solid fa-map-location-dot text-accent-warning"></i>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-accent-warning transition-colors duration-smooth">Map Academy</h3>
                </div>
                <p className="text-sm text-text-secondary">Tactical analysis and strategies for all major maps</p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Mission Statement */}
        <GlassPanel variant="elevated" padding="lg" accent="academy" className="mt-8">
          <div className="eyebrow text-accent-primary mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-current opacity-50"></span>
            MISSION STATEMENT
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-4 uppercase tracking-wide font-hud">
            This is a Combat Manual
          </h2>
          <div className="space-y-4 text-text-primary leading-relaxed">
            <p>
              This is not a wiki. This is a combat manual. We do not list stats; we teach you how to apply them. 
              This academy focuses on <strong className="text-accent-warning">Ban-Safe Efficiency</strong>—using map knowledge, 
              mechanic mastery (legal), and lineup synergy to dominate matches legally.
            </p>
            <p>
              Our content is qualitative and focuses on long-term concepts that remain valid across patches. 
              We teach principles, not patch-specific exploits. Every guide is designed to make you a better player, 
              not just a better grinder.
            </p>
            <div className="pt-4 border-t border-slate-700/60">
              <Link href="/academy">
                <Button
                  variant="primary"
                  accent="primary"
                  size="lg"
                  className="inline-flex items-center gap-2"
                >
                  Begin Training
                  <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </Link>
            </div>
          </div>
        </GlassPanel>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-700/60 text-center text-xs text-text-muted">
          <div>Antalya HQ • {formattedDate}</div>
        </div>
      </div>
    </div>
  )
}
