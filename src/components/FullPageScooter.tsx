import { motion } from "motion/react"
import { ScooterRider } from "./ScooterRider"
import { shouldAnimate } from "../lib/motion-config"

function RoadLane({ delay = 0, top = 0 }: { delay?: number; top?: number }) {
  return (
    <motion.div
      className="absolute w-16 h-1 rounded-full bg-zinc-300 dark:bg-white/10"
      style={{ left: "-4rem", top: `${top}%` }}
      animate={{ x: ["0vw", "110vw"] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  )
}

export function FullPageScooter() {
  if (!shouldAnimate()) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient background strip at bottom — road */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-zinc-100 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800">
        {/* Lane markings */}
        <div className="absolute inset-0 overflow-hidden">
          {[15, 30, 45, 55, 70, 85].map((top, i) => (
            <RoadLane key={i} delay={i * 0.15} top={top} />
          ))}
        </div>
        {/* Road edge lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-zinc-300 dark:bg-zinc-700 opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-300 dark:bg-zinc-700 opacity-50" />
      </div>

      {/* Scooter */}
      <motion.div
        className="absolute"
        style={{
          width: "min(130px, 18vw)",
          bottom: "18%",
        }}
        animate={{
          left: ["-20vw", "110vw"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "min(170px, 24vw)",
            height: "min(160px, 22vw)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-radial from-brand/8 via-transparent to-transparent blur-2xl"
            animate={{ opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <ScooterRider />
      </motion.div>
    </div>
  )
}
