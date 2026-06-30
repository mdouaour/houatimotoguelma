import { type ReactNode } from "react"
import { motion } from "motion/react"
import { motionTokens, springs } from "../lib/motion-tokens"
import { useSafeMotion } from "../lib/use-reduced-motion"
import { shouldAnimate } from "../lib/motion-config"

type RevealVariant = "default" | "speed" | "wheel" | "bounce" | "tilt" | "spark"
type RevealDirection = "up" | "down" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: RevealDirection
  variant?: RevealVariant
}

const directionMap = {
  up: { y: motionTokens.distance.lg },
  down: { y: -motionTokens.distance.lg },
  left: { x: motionTokens.distance.lg },
  right: { x: -motionTokens.distance.lg },
  none: { x: 0, y: 0 },
}

function getVariantInitial(dir: RevealDirection, variant: RevealVariant) {
  const d = directionMap[dir]
  switch (variant) {
    case "speed":
      return {
        opacity: 0,
        x: (d.x ?? 0) * 2,
        y: (d.y ?? 0) * 2,
        scale: 0.9,
        filter: "blur(6px)",
      }
    case "wheel":
      return {
        opacity: 0,
        x: dir === "left" ? -120 : dir === "right" ? 120 : 0,
        rotate: dir === "left" ? -90 : dir === "right" ? 90 : -90,
        scale: 0.8,
      }
    case "bounce":
      return {
        opacity: 0,
        x: d.x ?? 0,
        y: d.y ?? 0,
        scale: 0.7,
      }
    case "tilt":
      return {
        opacity: 0,
        x: (d.x ?? 0) * 1.5,
        rotate: dir === "left" ? 12 : dir === "right" ? -12 : 8,
        scale: 0.92,
      }
    case "spark":
      return {
        opacity: 0,
        scale: 0.3,
      }
    default:
      return {
        opacity: 0,
        x: d.x ?? 0,
        y: d.y ?? 0,
      }
  }
}

function getVariantAnimate(variant: RevealVariant) {
  switch (variant) {
    case "speed":
      return {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }
    case "wheel":
      return {
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
      }
    case "bounce":
      return {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }
    case "tilt":
      return {
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
      }
    case "spark":
      return {
        opacity: 1,
        scale: 1,
      }
    default:
      return {
        opacity: 1,
        x: 0,
        y: 0,
      }
  }
}

function getVariantTransition(variant: RevealVariant) {
  switch (variant) {
    case "speed":
      return { type: "spring", stiffness: 200, damping: 22, mass: 0.8 }
    case "wheel":
      return { type: "spring", stiffness: 180, damping: 16, mass: 1.2 }
    case "bounce":
      return { type: "spring", stiffness: 350, damping: 10, mass: 1 }
    case "tilt":
      return { type: "spring", stiffness: 160, damping: 18, mass: 1 }
    case "spark":
      return { type: "spring", stiffness: 500, damping: 8, mass: 0.6 }
    default:
      return springs.gentle
  }
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variant = "default",
}: ScrollRevealProps) {
  const safe = useSafeMotion(motionTokens.distance.lg)

  if (!shouldAnimate()) {
    return <div className={className}>{children}</div>
  }

  const initial = getVariantInitial(direction, variant)
  const animate = getVariantAnimate(variant)

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: initial.x ?? safe.initial.x,
        y: initial.y ?? safe.initial.y,
        ...(initial.rotate !== undefined ? { rotate: initial.rotate } : {}),
        ...(initial.scale !== undefined ? { scale: initial.scale } : {}),
        ...(variant === "speed" ? { filter: "blur(6px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(animate.rotate !== undefined ? { rotate: 0 } : {}),
        ...(animate.scale !== undefined ? { scale: 1 } : {}),
        ...(variant === "speed" ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        ...getVariantTransition(variant),
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

function getStaggerItemVariants(variant: RevealVariant, direction: RevealDirection = "up") {
  const d = directionMap[direction]
  switch (variant) {
    case "speed":
      return {
        hidden: { opacity: 0, x: (d.x ?? 0) * 2, y: (d.y ?? 0) * 2, scale: 0.9, filter: "blur(6px)" },
        visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 22, mass: 0.8 } },
      }
    case "wheel":
      return {
        hidden: { opacity: 0, x: direction === "left" ? -120 : direction === "right" ? 120 : 0, rotate: direction === "left" ? -90 : 90, scale: 0.8 },
        visible: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 16, mass: 1.2 } },
      }
    case "bounce":
      return {
        hidden: { opacity: 0, x: d.x ?? 0, y: d.y ?? 0, scale: 0.7 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: "spring", stiffness: 350, damping: 10, mass: 1 } },
      }
    case "tilt":
      return {
        hidden: { opacity: 0, x: (d.x ?? 0) * 1.5, rotate: direction === "left" ? 12 : direction === "right" ? -12 : 8, scale: 0.92 },
        visible: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: { type: "spring", stiffness: 160, damping: 18, mass: 1 } },
      }
    case "spark":
      return {
        hidden: { opacity: 0, scale: 0.3 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500, damping: 8, mass: 0.6 } },
      }
    default:
      return {
        hidden: { opacity: 0, x: d.x ?? 0, y: d.y ?? 0 },
        visible: { opacity: 1, x: 0, y: 0, transition: springs.gentle },
      }
  }
}

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  variant?: RevealVariant
  direction?: RevealDirection
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
  variant = "default",
  direction = "up",
}: StaggerRevealProps) {
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

interface RevealItemProps {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  variant?: RevealVariant
}

export function RevealItem({
  children,
  className = "",
  direction = "up",
  variant = "default",
}: RevealItemProps) {
  const variants = getStaggerItemVariants(variant, direction)

  return (
    <motion.div
      className={className}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
