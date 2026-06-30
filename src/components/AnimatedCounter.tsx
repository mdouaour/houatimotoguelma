import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { springs, motionTokens } from "../lib/motion-tokens"
import { shouldAnimate } from "../lib/motion-config"

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  if (!shouldAnimate()) {
    return <span ref={ref}>{to}{suffix}</span>
  }

  return (
    <motion.span
      ref={ref}
      initial={false}
      animate={isInView ? { count: to } : { count: from }}
      transition={{
        ...springs.gentle,
        duration,
      }}
      onUpdate={(latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest as number)}${suffix}`
        }
      }}
    >
      {from}{suffix}
    </motion.span>
  )
}
