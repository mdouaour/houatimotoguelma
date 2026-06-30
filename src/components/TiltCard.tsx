import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { springs } from "../lib/motion-tokens"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltDegree?: number
}

export function TiltCard({ children, className = "", tiltDegree = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(y, springs.snappy)
  const rotateY = useSpring(x, springs.snappy)

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)
    x.set(deltaX * tiltDegree)
    y.set(-deltaY * tiltDegree)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scaleY: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div style={{ transformStyle: "preserve-3d" }} className="[&>*]:backface-visible">
        {children}
      </div>
    </motion.div>
  )
}
