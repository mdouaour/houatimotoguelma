import { useMemo } from "react"

interface SpeedLinesProps {
  className?: string
  count?: number
}

export function SpeedLines({ className = "", count = 8 }: SpeedLinesProps) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${5 + (i * 90) / count}%`,
      width: `${30 + Math.random() * 40}%`,
      delay: i * 0.4,
      duration: 1.5 + Math.random() * 2,
      height: 0.5 + Math.random() * 1,
    }))
  }, [count])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {lines.map((l) => (
        <div
          key={l.id}
          className="absolute bg-gradient-to-r from-transparent via-brand/10 to-transparent rounded-full"
          style={{
            top: `${l.top}%`,
            right: 0,
            width: l.width,
            height: l.height,
            animation: `speed-line ${l.duration}s ease-in-out ${l.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}
