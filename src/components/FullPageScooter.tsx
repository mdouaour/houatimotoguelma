import { motion } from "motion/react"
import { ScooterRider } from "./ScooterRider"
import { shouldAnimate } from "../lib/motion-config"

export function FullPageScooter() {
  if (!shouldAnimate()) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle track frame */}
      <div className="absolute inset-[5%] md:inset-[8%] rounded-[40px] md:rounded-[80px]"
        style={{ border: "1px solid rgba(220,38,38,0.06)" }}
      >
        <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)]" aria-hidden>
          <motion.rect
            x="0" y="0" width="100%" height="100%" rx={24}
            fill="none" stroke="#DC2626" strokeWidth="1.5"
            strokeDasharray="8 20" opacity="0.12"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {[[30,30],[30,"calc(100%-30px)"],["calc(100%-30px)",30],["calc(100%-30px)","calc(100%-30px)"]].map((pos,i) => (
            <motion.circle key={i} cx={pos[0]} cy={pos[1]} r="3"
              fill="#00FF88" opacity="0.3"
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.5, 1] }}
              transition={{ duration: 2.5, delay: i*0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>

      {/* Scooter + rider — small, gentle floating */}
      <motion.div
        className="absolute bottom-[12%] right-[6%]"
        style={{
          width: "min(120px, 18vw)",
          height: "min(110px, 16vw)",
        }}
        animate={{
          y: [0, -20, 0, 20, 0],
          x: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ScooterRider />
      </motion.div>
    </div>
  )
}
