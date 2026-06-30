import { useRef } from "react"
import { motion, useInView, useSpring } from "motion/react"
import { useEffect } from "react"

interface CountUpProps {
  to: number
  className?: string
  suffix?: string
}

export function CountUp({ to, className = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (isInView) {
      spring.set(to)
    }
  }, [isInView, spring, to])

  return (
    <motion.span ref={ref} className={className}>
      {spring}
      {suffix}
    </motion.span>
  )
}
