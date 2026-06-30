import { useMemo } from "react"

interface SpeedLinesProps {
  className?: string
  count?: number
}

export function SpeedLines({ className = "", count = 8 }: SpeedLinesProps) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${8 + (i * 84) / count}%`,
      width: 80 + Math.random() * 160,
      delay: i * 1.5,
      duration: 2.5 + Math.random() * 2,
      height: 1.5 + Math.random() * 1.5,
    }))
  }, [count])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {lines.map((l) => (
        <div
          key={l.id}
          className="absolute bg-gradient-to-r from-transparent via-brand/30 to-transparent rounded-full"
          style={{
            top: `${l.top}%`,
            right: 0,
            width: l.width,
            height: l.height,
            animation: `speed-line ${l.duration}s ease-in-out ${l.delay}s infinite`,
            boxShadow: "0 0 12px rgba(220,38,38,0.15)",
          }}
        />
      ))}
    </div>
  )
}
