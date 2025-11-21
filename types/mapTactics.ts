export interface Route {
  name: string
  desc: string
  risk: string
}

export interface Spawn {
  title: string
  strategy: string
  routes: Route[]
  traps?: string
}

export interface Role {
  role: string
  icon: string
  desc: string
}

export interface Timing {
  time: string
  desc: string
}

export interface FullMapData {
  name: string
  type: string
  size?: string
  meta: string
  br_rec?: string
  image_query?: string
  spawns?: {
    north: Spawn
    south: Spawn
  }
  roles?: Role[]
  timings?: Timing[]
}

export interface BasicMapData {
  name: string
  type: string
  meta: string
}

export type MapData = FullMapData | BasicMapData

export type MapTacticsData = Record<string, MapData>

