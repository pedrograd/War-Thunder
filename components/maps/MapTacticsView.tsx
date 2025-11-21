'use client'

import { useState } from 'react'
import mapTacticsData from '@/data/mapTactics.json'
import type { MapTacticsData, MapData } from '@/types/mapTactics'

const tacticsData = mapTacticsData as MapTacticsData

type MapKey = keyof typeof tacticsData

type Tab = 'spawns' | 'roles' | 'timings'

export default function MapTacticsView() {
  const [currentMap, setCurrentMap] = useState<MapKey>('rhine')
  const [currentTab, setCurrentTab] = useState<Tab>('spawns')
  const [searchQuery, setSearchQuery] = useState('')

  const map = tacticsData[currentMap] as MapData
  const isFullData = 'spawns' in map && map.spawns !== undefined

  const filteredMaps = Object.keys(tacticsData).filter((key) => {
    const mapData = tacticsData[key as MapKey] as MapData
    const query = searchQuery.toLowerCase()
    return (
      mapData.name.toLowerCase().includes(query) ||
      mapData.type.toLowerCase().includes(query) ||
      ('meta' in mapData && mapData.meta.toLowerCase().includes(query))
    )
  }) as MapKey[]

  const handleMapSelect = (key: MapKey) => {
    setCurrentMap(key)
    setCurrentTab('spawns')
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Map Selector Sidebar */}
      <div className="w-64 bg-background-sidebar border-r border-slate-700/60 overflow-y-auto hidden md:block flex-shrink-0">
        <div className="p-4 border-b border-slate-700/60 sticky top-0 bg-background-sidebar z-10">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Operation Zone
          </h3>
          <input
            type="text"
            placeholder="Search Sector..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background-elevated border border-slate-700/60 rounded px-3 py-2 text-xs text-slate-200 focus:border-tactical-amber focus:outline-none transition-colors"
          />
        </div>
        <div className="p-2 space-y-1">
          {filteredMaps.map((key) => {
            const mapData = tacticsData[key] as MapData
            const isActive = currentMap === key
            return (
              <button
                key={key}
                onClick={() => handleMapSelect(key)}
                className={`
                  w-full text-left p-3 rounded-lg transition-all duration-200
                  border border-slate-700/60 bg-background-elevated/40
                  ${isActive 
                    ? 'border-tactical-amber bg-background-elevated shadow-lg' 
                    : 'hover:border-slate-600 hover:bg-background-elevated/60'
                  }
                `}
              >
                <span className={`text-sm font-bold block ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {mapData.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  {mapData.type}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-background relative">
        {!isFullData ? (
          <div className="flex flex-col h-full items-center justify-center text-slate-500 p-12 text-center">
            <div className="text-6xl mb-4 opacity-20">📡</div>
            <h2 className="text-2xl font-bold text-white mb-2">Tactical Data Offline</h2>
            <p className="text-slate-400">
              Detailed telemetry for <strong className="text-white">{map.name}</strong> is compiling in Phase 3.1.
            </p>
            <p className="text-xs mt-4 text-slate-500">
              Select &apos;Rhine&apos;, &apos;Poland&apos;, or &apos;Sinai&apos; for Gold Standard Demonstration.
            </p>
          </div>
        ) : (
          <>
            {/* Map Header */}
            <div className="p-8 border-b border-slate-700/60 bg-background-surface sticky top-0 z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h1 className="text-4xl font-bold text-white uppercase tracking-wider">
                      {map.name}
                    </h1>
                    <span className="bg-tactical-amber/20 text-tactical-amber border border-tactical-amber/30 px-2 py-1 rounded text-xs font-bold tracking-wider uppercase">
                      Tactical Map
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    <span className="inline-flex items-center gap-2">
                      <span>📏</span>
                      {map.size} • {map.type}
                    </span>
                  </p>
                </div>
                <div className="text-left lg:text-right">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                    Meta Strategy
                  </div>
                  <div className="text-xl font-bold text-tactical-green uppercase tracking-wide">
                    {map.meta}
                  </div>
                </div>
              </div>

              {/* Tactical Tabs */}
              <div className="flex gap-4 mt-8 border-b border-slate-700/60">
                {(['spawns', 'roles', 'timings'] as Tab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`
                      px-6 py-3 border-b-2 transition-all duration-200
                      font-bold uppercase tracking-wider text-sm
                      ${
                        currentTab === tab
                          ? 'border-tactical-amber text-tactical-amber bg-tactical-amber/5'
                          : 'border-transparent text-slate-500 hover:text-slate-300'
                      }
                    `}
                  >
                    {tab === 'spawns' ? 'Spawn Logic' : tab === 'roles' ? 'Role Guides' : 'Timeline'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {/* Visual Placeholder */}
              <div className="w-full h-[300px] bg-background-surface border border-slate-700/60 rounded-lg mb-8 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl text-slate-600 mb-2">🗺️</div>
                  <p className="text-slate-500 text-xs font-mono">TACTICAL SATELLITE VIEW</p>
                  <p className="text-tactical-amber font-bold text-sm mt-1">INTERACTIVE LAYERS LOADING...</p>
                </div>
              </div>

              {/* Spawns Tab */}
              {currentTab === 'spawns' && map.spawns && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* North Spawn */}
                  <div className="border-t-4 border-t-blue-500 bg-background-elevated/40 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {map.spawns.north.title}
                      </h3>
                      <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-1 rounded text-xs font-bold uppercase">
                        Bluefor
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {map.spawns.north.strategy}
                    </p>

                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                      Primary Vectors
                    </h4>
                    <div className="space-y-3 mb-4">
                      {map.spawns.north.routes.map((route, idx) => (
                        <div
                          key={idx}
                          className="bg-background-surface p-3 rounded border border-slate-700/60"
                        >
                          <div className="flex justify-between text-sm font-bold text-blue-400 mb-1">
                            <span className="flex items-center gap-2">
                              <span>→</span>
                              {route.name}
                            </span>
                            <span
                              className={
                                route.risk === 'High'
                                  ? 'text-red-500'
                                  : route.risk === 'Medium'
                                  ? 'text-yellow-500'
                                  : 'text-green-500'
                              }
                            >
                              {route.risk} Risk
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{route.desc}</p>
                        </div>
                      ))}
                    </div>
                    {map.spawns.north.traps && (
                      <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded text-xs text-red-300">
                        <strong className="flex items-center gap-1">
                          <span>⚠️</span>
                          Killzone:
                        </strong>{' '}
                        {map.spawns.north.traps}
                      </div>
                    )}
                  </div>

                  {/* South Spawn */}
                  <div className="border-t-4 border-t-red-500 bg-background-elevated/40 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {map.spawns.south.title}
                      </h3>
                      <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded text-xs font-bold uppercase">
                        Opfor
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {map.spawns.south.strategy}
                    </p>

                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                      Primary Vectors
                    </h4>
                    <div className="space-y-3">
                      {map.spawns.south.routes.map((route, idx) => (
                        <div
                          key={idx}
                          className="bg-background-surface p-3 rounded border border-slate-700/60"
                        >
                          <div className="flex justify-between text-sm font-bold text-red-400 mb-1">
                            <span className="flex items-center gap-2">
                              <span>→</span>
                              {route.name}
                            </span>
                            <span
                              className={
                                route.risk === 'High'
                                  ? 'text-red-500'
                                  : route.risk === 'Medium'
                                  ? 'text-yellow-500'
                                  : 'text-green-500'
                              }
                            >
                              {route.risk} Risk
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{route.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Roles Tab */}
              {currentTab === 'roles' && map.roles && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {map.roles.map((role, idx) => (
                    <div
                      key={idx}
                      className="bg-background-elevated/40 p-4 rounded-lg border border-slate-700/60 flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-tactical-amber flex-shrink-0 text-lg">
                        {role.icon === 'fa-bolt' && '⚡'}
                        {role.icon === 'fa-shield-halved' && '🛡️'}
                        {role.icon === 'fa-crosshairs' && '🎯'}
                        {role.icon === 'fa-plane' && '✈️'}
                        {role.icon === 'fa-tank' && '🚗'}
                        {role.icon === 'fa-helicopter' && '🚁'}
                        {!['fa-bolt', 'fa-shield-halved', 'fa-crosshairs', 'fa-plane', 'fa-tank', 'fa-helicopter'].includes(role.icon) && '⚙️'}
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{role.role}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{role.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Timings Tab */}
              {currentTab === 'timings' && map.timings && (
                <div className="space-y-8 relative pl-4 border-l-2 border-slate-700 ml-4">
                  {map.timings.map((timing, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 bg-background border-2 border-tactical-amber rounded-full"></div>
                      <h4 className="text-tactical-amber font-bold mb-1 font-mono text-sm">
                        {timing.time}
                      </h4>
                      <p className="text-slate-300 text-sm bg-background-surface p-4 rounded border border-slate-700/60">
                        {timing.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

