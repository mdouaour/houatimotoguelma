import { motion } from "motion/react"

interface GlowUnderlineProps {
  className?: string
}

export function GlowUnderline({ className = "" }: GlowUnderlineProps) {
  return (
    <div className={`relative h-1 w-20 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand/30 rounded-full" />
      <motion.div
        className="absolute inset-0 rounded-full bg-brand/60"
        animate={{ opacity: [0, 0.6, 0], scaleX: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute -top-1 left-0 w-1 h-3 rounded-full bg-neon"
        animate={{ left: ["0%", "100%", "0%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
