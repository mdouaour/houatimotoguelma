import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react"
import { shouldAnimate } from "../lib/motion-config"

function parseValue(raw: string): { numeric: number; suffix: string; decimals: number } {
  const match = raw.match(/^([\d.]+)(.*)$/)
  if (!match) return { numeric: 0, suffix: raw, decimals: 0 }
  const num = parseFloat(match[1])
  const suffix = match[2] || ""
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0
  return { numeric: num, suffix, decimals }
}

function formatAnimated(value: number, decimals: number, suffix: string): string {
  return value.toFixed(decimals) + suffix
}

interface AnimatedCounterProps {
  value: string
  className?: string
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const { numeric, suffix, decimals } = parseValue(value)

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 80, damping: 18, restDelta: 0.5 })
  const display = useTransform(spring, (v) => formatAnimated(v, decimals, suffix))

  useEffect(() => {
    if (inView || !shouldAnimate()) {
      motionValue.set(numeric)
    }
  }, [inView, numeric, motionValue])

  if (!shouldAnimate()) {
    return <span className={className}>{value}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      {display}
    </motion.span>
  )
}
