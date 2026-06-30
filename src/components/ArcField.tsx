import { useMemo } from "react"

interface ArcFieldProps {
  count?: number
  className?: string
}

interface Particle {
  id: number
  x: string
  y: string
  size: number
  delay: number
  duration: number
  drift: number
  color: "brand" | "neon" | "cyan"
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const colors = ["brand", "neon", "cyan"] as const

export function ArcField({ count = 14, className = "" }: ArcFieldProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${randomBetween(5, 95)}%`,
      y: `${randomBetween(10, 90)}%`,
      size: randomBetween(1.5, 4),
      delay: randomBetween(0, 8),
      duration: randomBetween(6, 14),
      drift: randomBetween(-40, 40),
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  }, [count])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color === "neon" ? "#00FF88" : p.color === "cyan" ? "#00D4FF" : "#0088FF",
            boxShadow: `0 0 ${p.size * 4}px ${
              p.color === "neon" ? "#00FF88" : p.color === "cyan" ? "#00D4FF" : "#0088FF"
            }`,
            ["--drift" as string]: `${p.drift}px`,
            animation: `arc-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}
