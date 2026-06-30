import { motion } from "motion/react"
import { ScooterRider } from "./ScooterRider"
import { shouldAnimate } from "../lib/motion-config"

export function FullPageScooter() {
  if (!shouldAnimate()) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute"
        style={{
          width: "min(120px, 18vw)",
          bottom: "15%",
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
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: "min(160px, 22vw)",
            height: "min(150px, 20vw)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-2xl"
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <ScooterRider />
      </motion.div>
    </div>
  )
}
