interface StatBarProps {
  label: string
  value: number
  max?: number
  color?: string
  showLabel?: boolean
}

export default function StatBar({
  label,
  value,
  max = 100,
  color = '#fff',
  showLabel = true,
}: StatBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className="stat-row">
      {showLabel && <div className="stat-label">{label}</div>}
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

