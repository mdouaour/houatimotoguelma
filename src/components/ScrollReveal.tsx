import { type ReactNode } from "react"
import { motion } from "motion/react"
import { motionTokens, springs } from "../lib/motion-tokens"
import { useSafeMotion } from "../lib/use-reduced-motion"
import { shouldAnimate } from "../lib/motion-config"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

const directionMap = {
  up: { y: motionTokens.distance.lg },
  down: { y: -motionTokens.distance.lg },
  left: { x: motionTokens.distance.lg },
  right: { x: -motionTokens.distance.lg },
  none: { x: 0, y: 0 },
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const safe = useSafeMotion(motionTokens.distance.lg)
  const dir = directionMap[direction]

  if (!shouldAnimate()) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: dir.x ?? safe.initial.x,
        y: dir.y ?? safe.initial.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        ...springs.gentle,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  if (!shouldAnimate()) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}) {
  const dir = directionMap[direction]

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: dir.x ?? 0,
          y: dir.y ?? 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: springs.gentle,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
