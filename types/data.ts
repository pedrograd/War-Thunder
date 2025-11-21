export interface Vehicle {
  id: string
  name: string
  br: number
  role: string
  nation: string
  type: 'tank' | 'air' | 'heli' | 'naval'
  strengths: string[]
  weaknesses: string[]
  metaNotes: string[]
  img?: string
}

export interface Map {
  id: string
  name: string
  overview: string
  spawnLayouts: string[]
  strategies: string[]
  counters: string[]
  image?: string
}

export interface Nation {
  nation: string
  doctrine: string
  recommendedLineups: string[]
  metaRank: number
  flag: string
}

